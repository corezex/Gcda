import { getAllCityUrls } from '@/data/indiaLocations';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS } from '@/data/servicePages';
import { xmlResponse } from '@/lib/sitemapXml';

const SITE_URL = 'https://gcdassociation.org';
const LOCATION_LAST_MODIFIED = new Date('2026-07-30T00:00:00+05:30');

export const revalidate = 86400;

export function GET() {
  const entries = [];

  for (const city of getAllCityUrls()) {
    for (const serviceSlug of SERVICE_SLUGS) {
      const pattern = SERVICE_CITY_PATTERNS[serviceSlug];
      if (!pattern) continue;

      entries.push({
        url: `${SITE_URL}${pattern.urlPattern(city.stateSlug, city.citySlug)}`,
        lastModified: LOCATION_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return xmlResponse(entries);
}
