import { blogPosts } from '@/data/blog';
import { xmlResponse } from '@/lib/sitemapXml';

const SITE_URL = 'https://gcdassociation.org';
const CORE_LAST_MODIFIED = new Date('2026-07-30T00:00:00+05:30');
const PAGE_SIZE = 20;

export const revalidate = 86400;

export function GET() {
  const latestBlogDate = blogPosts.length
    ? new Date(
        blogPosts.reduce((latest, post) =>
          post.dateModified > latest ? post.dateModified : latest,
        blogPosts[0].dateModified)
      )
    : CORE_LAST_MODIFIED;

  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  const entries = [
    { url: `${SITE_URL}/blog`, lastModified: latestBlogDate, changeFrequency: 'weekly', priority: 0.9 },
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
      url: `${SITE_URL}/blog/p/${index + 2}`,
      lastModified: latestBlogDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
  ];

  return xmlResponse(entries);
}
