import { STATES } from '@/data/indiaLocations';
import { xmlResponse } from '@/lib/sitemapXml';

const SITE_URL = 'https://gcdassociation.org';
const LOCATION_LAST_MODIFIED = new Date('2026-07-30T00:00:00+05:30');

export const revalidate = 86400;

export function GET() {
  const entries = STATES.map((state) => ({
    url: `${SITE_URL}/${state.slug}`,
    lastModified: LOCATION_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return xmlResponse(entries);
}
