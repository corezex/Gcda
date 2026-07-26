import { services } from '@/data/site';
import { STATES, getAllCityUrls } from '@/data/indiaLocations';
import { blogPosts } from '@/data/blog';

const SITE_URL = 'https://gcdassociation.org';

export default function sitemap() {
  const now = new Date();

  // Top-level static routes (no /en/ prefix to match the new build structure)
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/career-counselling', priority: 0.9, changeFrequency: 'monthly' },
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

  // State hub pages
  const stateRoutes = STATES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // All city pages at the live URL pattern
  const cityRoutes = getAllCityUrls().map((u) => {
    // Tier 1 cities get higher priority; tier 2 medium; tier 3 lower
    const cityName = u.citySlug;
    return {
      url: `${SITE_URL}${u.fullPath}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  // Service detail pages
  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/career-counselling#${service.slug}`,
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

  return [...staticRoutes, ...stateRoutes, ...cityRoutes, ...serviceRoutes, ...blogRoutes];
}
