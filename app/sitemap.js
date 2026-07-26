import { services } from '@/data/site';
import { cities } from '@/data/cities';
import { blogPosts } from '@/data/blog';

const SITE_URL = 'https://gcdassociation.org';

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/cities', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/plans', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const cityRoutes = cities.map((city) => ({
    url: `${SITE_URL}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: city.tier === 'tier1' ? 0.9 : city.tier === 'tier2' ? 0.8 : 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
