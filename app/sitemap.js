import { services } from '@/data/site';

export default function sitemap() {
  const base = 'https://gcdassociation.org';

  const staticRoutes = ['', '/about', '/services', '/plans', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
