import { xmlResponse } from '@/lib/sitemapXml';

const SITE_URL = 'https://gcdassociation.org';
const CORE_LAST_MODIFIED = new Date('2026-07-30T00:00:00+05:30');
const LEGAL_LAST_MODIFIED = new Date('2026-07-27T00:00:00+05:30');
const AUTHOR_LAST_MODIFIED = new Date('2026-07-27T00:00:00+05:30');

export const revalidate = 86400;

export function GET() {
  const entries = [
    { url: `${SITE_URL}/`, lastModified: CORE_LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/plan`, lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/cities`, lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/site-index`, lastModified: CORE_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/author/gcda-editorial-team`, lastModified: AUTHOR_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: LEGAL_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: LEGAL_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/refund-policy`, lastModified: LEGAL_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
  ];

  return xmlResponse(entries);
}
