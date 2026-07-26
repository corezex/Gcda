/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // 301 redirects to protect SEO equity from old URL patterns and to
  // canonicalise duplicate paths. The new build matches the live
  // site's URL structure for city pages (/[state]/career-counsellor-[city])
  // and adds state-hub pages at /[state].
  async redirects() {
    return [
      // ----- Old top-level routes from the prior build -----
      { source: '/services', destination: '/career-counselling', permanent: true },
      { source: '/services/:slug', destination: '/career-counselling#:slug', permanent: true },
      { source: '/plans', destination: '/plan', permanent: true },
      { source: '/cities/:slug', destination: '/career-counselling', permanent: true },

      // ----- Live site /en/ prefix routes (preserves old URLs) -----
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/', destination: '/', permanent: true },
      { source: '/en/about', destination: '/about', permanent: true },
      { source: '/en/contact', destination: '/contact', permanent: true },
      { source: '/en/career-counselling', destination: '/career-counselling', permanent: true },
      { source: '/en/plan', destination: '/plan', permanent: true },
      { source: '/en/blog', destination: '/blog', permanent: true },
      { source: '/en/blog/:slug', destination: '/blog/:slug', permanent: true },

      // ----- Trailing slash variants -----
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/career-counselling/', destination: '/career-counselling', permanent: true },
      { source: '/plan/', destination: '/plan', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/cities/', destination: '/cities', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
