#!/usr/bin/env node
// verify-hreflang.js
// Quick script to verify hreflang tags are present on the deployed Vercel site.
// Run from your local machine: node verify-hreflang.js
//
// Outputs the count of <link rel="alternate" hreflang="..."> tags in
// the <head> of every URL passed in (or defaults to home + sample pages).

const https = require('https');

const URLS = process.argv.slice(2);
if (URLS.length === 0) {
  URLS.push(
    'https://gcda-ochre.vercel.app/',
    'https://gcda-ochre.vercel.app/about',
    'https://gcda-ochre.vercel.app/contact',
    'https://gcda-ochre.vercel.app/plan',
    'https://gcda-ochre.vercel.app/cities',
    'https://gcda-ochre.vercel.app/blog',
    'https://gcda-ochre.vercel.app/career-counselling',
    'https://gcda-ochre.vercel.app/career-certification',
    'https://gcda-ochre.vercel.app/maharashtra',
    'https://gcda-ochre.vercel.app/uttar-pradesh/career-counsellor-noida',
    'https://gcda-ochre.vercel.app/andhra-pradesh/career-counsellor-mangalagiri',
    'https://gcda-ochre.vercel.app/maharashtra/career-counsellor-mumbai',
    'https://gcda-ochre.vercel.app/blog/how-to-choose-the-right-stream-after-10th',
    'https://gcda-ochre.vercel.app/career-counselling/personal-counselling',
  );
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 20000,
    }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve, reject);
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { data += chunk; if (data.length > 5e6) res.destroy(); });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.on('timeout', () => req.destroy(new Error('Timeout after 20s')));
  });
}

(async () => {
  console.log('='.repeat(90));
  console.log('HREFLANG VERIFICATION REPORT');
  console.log('='.repeat(90));
  console.log(`Checking ${URLS.length} URL(s)\n`);

  let pass = 0, fail = 0, total = URLS.length;
  for (const url of URLS) {
    try {
      const { status, body } = await fetchUrl(url);
      if (status !== 200) {
        console.log(`❌ ${url}  [HTTP ${status}]`);
        fail++;
        continue;
      }
      // Extract <head>
      const headMatch = body.match(/<head>([\s\S]*?)<\/head>/);
      if (!headMatch) {
        console.log(`❌ ${url}  [no <head>]`);
        fail++;
        continue;
      }
      const head = headMatch[1];
      // Count <link rel="alternate" hreflang=...>
      const hreflangTags = head.match(/<link[^>]*rel=[\"']alternate[\"'][^>]*hreflang=[\"'][^\"']+[\"'][^>]*>/gi) || [];
      // Also check the alternate-name pattern
      const allHreflangs = head.match(/hreflang=[\"'][^\"']+[\"']/gi) || [];
      const count = hreflangTags.length;
      // Extract the unique hreflang codes
      const codes = [...new Set((head.match(/hreflang=[\"'][^\"']+[\"']/gi) || []).map(s => s.match(/[\"']([^\"']+)[\"']/)[1]))];
      const tag = count === 35 ? '✅' : (count > 0 ? '⚠️' : '❌');
      const shortUrl = url.replace('https://gcda-ochre.vercel.app', '');
      console.log(`${tag} ${shortUrl.padEnd(50)}  ${count} hreflang tags, ${codes.length} unique codes`);
      if (count === 35) pass++;
      else fail++;
    } catch (err) {
      console.log(`❌ ${url}  [error: ${err.message}]`);
      fail++;
    }
  }
  console.log('\n' + '='.repeat(90));
  console.log(`SUMMARY: ${pass}/${total} pages have all 35 hreflang tags`);
  if (fail > 0) console.log(`         ${fail} pages are missing or have wrong count`);
  console.log('='.repeat(90));
  process.exit(fail > 0 ? 1 : 0);
})();
