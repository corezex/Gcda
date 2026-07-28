import { services } from '@/data/site';
import { STATES, getAllCityUrls } from '@/data/indiaLocations';
import { blogPosts } from '@/data/blog';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS } from '@/data/servicePages';

const SITE_URL = 'https://gcdassociation.org';

export default function sitemap() {
  const now = new Date();

  // Top-level static routes – updated for 438 cities + legal + author pages
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/career-counselling', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/career-certification', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/cities', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/plan', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/refund-policy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/author/gcda-editorial-team', priority: 0.7, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${SITE_URL}/assets/hero-illustration.webp`],
  }));

  // Top-level service main pages (4 of them — /career-certification has its own page)
  const topLevelServicePages = [
    'career-counselling-seminar',
    'stream-selection-guidance',
    'degree-selection-guidance',
    'guidance-for-working-professionals',
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${SITE_URL}/assets/hero-illustration.webp`],
  }));

  // State hub pages
  const stateRoutes = STATES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${SITE_URL}/assets/hero-illustration.webp`],
  }));

  // All city pages for all 8 services
  // 438 cities x 8 services = 3,504 city pages
  const cityRoutes = [];
  for (const u of getAllCityUrls()) {
    for (const serviceSlug of SERVICE_SLUGS) {
      const pattern = SERVICE_CITY_PATTERNS[serviceSlug];
      if (!pattern) continue;
      cityRoutes.push({
        url: `${SITE_URL}${pattern.urlPattern(u.stateSlug, u.citySlug)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        images: [`${SITE_URL}/assets/hero-illustration.webp`],
      });
    }
  }

  // Service detail pages (under /career-counselling/[slug])
  const serviceDetailRoutes = services.map((service) => ({
    url: `${SITE_URL}/career-counselling/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${SITE_URL}${service.image || '/assets/hero-illustration.webp'}`],
  }));

  // Blog posts (with article-specific images for better image SEO)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${SITE_URL}/assets/service-illustration.webp`],
  }));

  // Paginated blog hub pages – SEO optimized pagination (20 per page)
  // Two URL formats for SEO: clean path /blog/p/[page] (static) + query ?page= (fallback)
  const PAGE_SIZE = 20;
  const totalBlogPages = Math.ceil(blogPosts.length / PAGE_SIZE);
  const blogPaginatedRoutes = [];
  for (let p = 2; p <= totalBlogPages; p++) {
    // Clean path version – primary for SEO
    blogPaginatedRoutes.push({
      url: `${SITE_URL}/blog/p/${p}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
      images: [`${SITE_URL}/assets/service-illustration.webp`],
    });
    // Query param version – secondary (kept for compatibility, lower priority)
    blogPaginatedRoutes.push({
      url: `${SITE_URL}/blog?page=${p}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.4,
      images: [`${SITE_URL}/assets/service-illustration.webp`],
    });
  }

  return [
    ...staticRoutes,
    ...topLevelServicePages,
    ...stateRoutes,
    ...cityRoutes,
    ...serviceDetailRoutes,
    ...blogRoutes,
    ...blogPaginatedRoutes,
  ];
}
