/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

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
      { source: '/en/career-counselling-seminar', destination: '/career-counselling/workshops-seminars', permanent: true },
      { source: '/en/career-certification', destination: '/career-certification', permanent: true },
      { source: '/en/stream-selection-guidance', destination: '/career-counselling/stream-selection-guidance', permanent: true },
      { source: '/en/degree-selection-guidance', destination: '/career-counselling/degree-selection-guidance', permanent: true },
      { source: '/en/guidance-for-working-professionals', destination: '/career-counselling/working-professionals-guidance', permanent: true },
      { source: '/en/plan', destination: '/plan', permanent: true },
      { source: '/en/blog', destination: '/blog', permanent: true },
      { source: '/en/blog/:slug', destination: '/blog/:slug', permanent: true },

      // ----- Live site /seminar/ and /certification/ URL patterns -----
      // (live URLs: /seminar/{state}/career-counselling-seminar-{city} and
      // /certification/{state}/career-counselling-certification-{city})
      // Our new build uses /{state}/career-counselling-seminar-{city} and
      // /{state}/career-counselling-certification-{city}.
      {
        source: '/seminar/:state/career-counselling-seminar-:city',
        destination: '/:state/career-counselling-seminar-:city',
        permanent: true,
      },
      {
        source: '/certification/:state/career-counselling-certification-:city',
        destination: '/:state/career-counselling-certification-:city',
        permanent: true,
      },

      // ----- Trailing slash variants -----
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/career-counselling/', destination: '/career-counselling', permanent: true },
      { source: '/career-counselling-seminar', destination: '/career-counselling/workshops-seminars', permanent: true },
      { source: '/career-counselling-seminar/', destination: '/career-counselling/workshops-seminars', permanent: true },
      { source: '/stream-selection-guidance', destination: '/career-counselling/stream-selection-guidance', permanent: true },
      { source: '/stream-selection-guidance/', destination: '/career-counselling/stream-selection-guidance', permanent: true },
      { source: '/degree-selection-guidance', destination: '/career-counselling/degree-selection-guidance', permanent: true },
      { source: '/degree-selection-guidance/', destination: '/career-counselling/degree-selection-guidance', permanent: true },
      { source: '/guidance-for-working-professionals', destination: '/career-counselling/working-professionals-guidance', permanent: true },
      { source: '/guidance-for-working-professionals/', destination: '/career-counselling/working-professionals-guidance', permanent: true },
      { source: '/plan/', destination: '/plan', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/cities/', destination: '/cities', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/deferred-global.css',
        headers: [
          { key: 'Content-Type', value: 'text/css; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
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
