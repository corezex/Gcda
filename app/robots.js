const SITE_URL = 'https://gcdassociation.org';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Allow common AI answer engines to crawl the site. This helps GEO
      // (Generative Engine Optimization) — these bots cite the site in
      // their answers when they can see the content.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/core-sitemap.xml`,
      `${SITE_URL}/service-sitemap.xml`,
      `${SITE_URL}/support-sitemap.xml`,
      `${SITE_URL}/state-sitemap.xml`,
      `${SITE_URL}/city-sitemap.xml`,
      `${SITE_URL}/blog-sitemap.xml`,
    ],
    host: SITE_URL,
  };
}
