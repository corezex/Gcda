const XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatLastModified(value) {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

export function buildSitemapXml(entries) {
  const urls = entries
    .map((entry) => {
      const lastModified = formatLastModified(entry.lastModified);
      const changeFrequency = entry.changeFrequency || '';
      const priority = typeof entry.priority === 'number' ? entry.priority.toFixed(1) : '';

      return [
        '  <url>',
        `    <loc>${escapeXml(entry.url)}</loc>`,
        lastModified ? `    <lastmod>${lastModified}</lastmod>` : '',
        changeFrequency ? `    <changefreq>${changeFrequency}</changefreq>` : '',
        priority ? `    <priority>${priority}</priority>` : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function xmlResponse(entries) {
  return new Response(buildSitemapXml(entries), { headers: XML_HEADERS });
}
