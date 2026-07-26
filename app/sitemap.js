import { services } from '@/data/site';
import { STATES, getAllCityUrls } from '@/data/indiaLocations';
import { blogPosts } from '@/data/blog';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS } from '@/data/servicePages';

const SITE_URL = 'https://gcdassociation.org';

export default function sitemap() {
  const now = new Date();

  // Top-level static routes
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/career-counselling', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/career-certification', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/cities', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/plan', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${SITE_URL}/assets/hero-illustration.png`],
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
    images: [`${SITE_URL}/assets/hero-illustration.png`],
  }));

  // State hub pages
  const stateRoutes = STATES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${SITE_URL}/assets/hero-illustration.png`],
  }));

  // All city pages for all 8 services
  // 346 cities x 8 services = 2,768 city pages
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
        images: [`${SITE_URL}/assets/hero-illustration.png`],
      });
    }
  }

  // Service detail pages (under /career-counselling/[slug])
  const serviceDetailRoutes = services.map((service) => ({
    url: `${SITE_URL}/career-counselling/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${SITE_URL}${service.image || '/assets/hero-illustration.png'}`],
  }));

  // Blog posts (with article-specific images for better image SEO)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${SITE_URL}/assets/service-illustration.png`],
  }));

  return [
    ...staticRoutes,
    ...topLevelServicePages,
    ...stateRoutes,
    ...cityRoutes,
    ...serviceDetailRoutes,
    ...blogRoutes,
  ];
}
