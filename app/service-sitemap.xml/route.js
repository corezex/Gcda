import { services } from '@/data/site';
import { xmlResponse } from '@/lib/sitemapXml';

const SITE_URL = 'https://gcdassociation.org';
const SERVICE_LAST_MODIFIED = new Date('2026-07-30T00:00:00+05:30');

export const revalidate = 86400;

export function GET() {
  const topLevelServicePages = [
    '/career-counselling',
    '/career-certification',
    '/career-counselling-seminar',
    '/stream-selection-guidance',
    '/degree-selection-guidance',
    '/guidance-for-working-professionals',
  ];

  const entries = [
    ...topLevelServicePages.map((path, index) => ({
      url: `${SITE_URL}${path}`,
      lastModified: SERVICE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: index < 2 ? 0.9 : 0.85,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/career-counselling/${service.slug}`,
      lastModified: SERVICE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  return xmlResponse(entries);
}
