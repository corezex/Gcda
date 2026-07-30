import { services } from '@/data/site';
import { STATES, getAllCityUrls } from '@/data/indiaLocations';
import { blogPosts } from '@/data/blog';
import { seoSupportPageList } from '@/data/seoSupportPages';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS } from '@/data/servicePages';

const SITE_URL = 'https://gcdassociation.org';
const CORE_LAST_MODIFIED = new Date('2026-07-29T00:00:00+05:30');
const LEGAL_LAST_MODIFIED = new Date('2026-07-27T00:00:00+05:30');
const AUTHOR_LAST_MODIFIED = new Date('2026-07-27T00:00:00+05:30');
const SERVICE_LAST_MODIFIED = new Date('2026-07-29T00:00:00+05:30');
const LOCATION_LAST_MODIFIED = new Date('2026-07-29T00:00:00+05:30');

export default function sitemap() {
  const latestBlogDate = blogPosts.length
    ? new Date(
        blogPosts.reduce((latest, post) =>
          post.dateModified > latest ? post.dateModified : latest,
        blogPosts[0].dateModified)
      )
    : CORE_LAST_MODIFIED;

  // Top-level static routes – updated for 438 cities + legal + author pages
  const baseStaticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly', lastModified: CORE_LAST_MODIFIED },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly', lastModified: CORE_LAST_MODIFIED },
    { path: '/career-counselling', priority: 0.9, changeFrequency: 'monthly', lastModified: SERVICE_LAST_MODIFIED },
    { path: '/career-certification', priority: 0.9, changeFrequency: 'monthly', lastModified: SERVICE_LAST_MODIFIED },
    { path: '/cities', priority: 0.9, changeFrequency: 'monthly', lastModified: LOCATION_LAST_MODIFIED },
    { path: '/plan', priority: 0.9, changeFrequency: 'monthly', lastModified: SERVICE_LAST_MODIFIED },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly', lastModified: latestBlogDate },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly', lastModified: CORE_LAST_MODIFIED },
    { path: '/site-index', priority: 0.8, changeFrequency: 'weekly', lastModified: CORE_LAST_MODIFIED },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly', lastModified: LEGAL_LAST_MODIFIED },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly', lastModified: LEGAL_LAST_MODIFIED },
    { path: '/refund-policy', priority: 0.5, changeFrequency: 'yearly', lastModified: LEGAL_LAST_MODIFIED },
    { path: '/author/gcda-editorial-team', priority: 0.7, changeFrequency: 'monthly', lastModified: AUTHOR_LAST_MODIFIED },
  ];

  const seoSupportRoutes = seoSupportPageList.map((page) => ({
    path: `/${page.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: SERVICE_LAST_MODIFIED,
    image: page.image,
  }));

  const staticRoutes = [...baseStaticRoutes, ...seoSupportRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${SITE_URL}${route.image || '/assets/hero-illustration.webp'}`],
  }));
  // State hub pages
  const stateRoutes = STATES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: LOCATION_LAST_MODIFIED,
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
        lastModified: LOCATION_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.7,
        images: [`${SITE_URL}/assets/hero-illustration.webp`],
      });
    }
  }

  // Service detail pages (under /career-counselling/[slug])
  const serviceDetailRoutes = services.map((service) => ({
    url: `${SITE_URL}/career-counselling/${service.slug}`,
    lastModified: SERVICE_LAST_MODIFIED,
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
    images: [`${SITE_URL}/blog/${post.slug}/opengraph-image`],
  }));

  // Paginated blog hub pages – primary clean-path pagination only
  const PAGE_SIZE = 20;
  const totalBlogPages = Math.ceil(blogPosts.length / PAGE_SIZE);
  const blogPaginatedRoutes = [];
  for (let p = 2; p <= totalBlogPages; p++) {
    blogPaginatedRoutes.push({
      url: `${SITE_URL}/blog/p/${p}`,
      lastModified: latestBlogDate,
      changeFrequency: 'weekly',
      priority: 0.6,
      images: [`${SITE_URL}/assets/service-illustration.webp`],
    });
  }

  return [
    ...staticRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...serviceDetailRoutes,
    ...blogRoutes,
    ...blogPaginatedRoutes,
  ];
}
