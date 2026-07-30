import { seoSupportPageList } from '@/data/seoSupportPages';
import { xmlResponse } from '@/lib/sitemapXml';

const SITE_URL = 'https://gcdassociation.org';
const SUPPORT_LAST_MODIFIED = new Date('2026-07-30T00:00:00+05:30');

export const revalidate = 86400;

export function GET() {
  const entries = seoSupportPageList.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: SUPPORT_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return xmlResponse(entries);
}
