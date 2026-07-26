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
  }));

  // State hub pages
  const stateRoutes = STATES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // All city pages for all 6 services
  // 344 cities x 6 services = 2,064 city pages
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
      });
    }
  }

  // Service detail pages (under /career-counselling/[slug])
  const serviceDetailRoutes = services.map((service) => ({
    url: `${SITE_URL}/career-counselling/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
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
