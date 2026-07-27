// Hreflang alternates for all top-level pages.
//
// Matches the live GCDA website (gcdassociation.org) language routing:
//   - English is the default (no /en/ prefix)
//   - 16 other language variants use a /{lang}/ prefix
//
// The 14 working languages on the live site + 3 new ones we're adding:
//   en, hi, bn, te, mr, ta, gu, kn, ml, pa, or, ur, ks, kok
//   + new: as (Assamese), mni (Manipuri), sat (Santali)
//
// Usage:
//   import { hreflangAlternates, hreflang } from '@/data/hreflang';
//   alternates: { canonical: '/about', languages: hreflangAlternates('/about') }

export const LANGUAGES = [
  { code: 'en',  name: 'English',    region: 'en-IN' },
  { code: 'hi',  name: 'Hindi',      region: 'hi-IN' },
  { code: 'bn',  name: 'Bengali',    region: 'bn-IN' },
  { code: 'te',  name: 'Telugu',     region: 'te-IN' },
  { code: 'mr',  name: 'Marathi',    region: 'mr-IN' },
  { code: 'ta',  name: 'Tamil',      region: 'ta-IN' },
  { code: 'gu',  name: 'Gujarati',   region: 'gu-IN' },
  { code: 'kn',  name: 'Kannada',    region: 'kn-IN' },
  { code: 'ml',  name: 'Malayalam',  region: 'ml-IN' },
  { code: 'pa',  name: 'Punjabi',    region: 'pa-IN' },
  { code: 'or',  name: 'Odia',       region: 'or-IN' },
  { code: 'ur',  name: 'Urdu',       region: 'ur-IN' },
  { code: 'ks',  name: 'Kashmiri',   region: 'ks-IN' },
  { code: 'kok', name: 'Konkani',    region: 'kok-IN' },
  { code: 'as',  name: 'Assamese',   region: 'as-IN' },
  { code: 'mni', name: 'Manipuri',   region: 'mni-IN' },
  { code: 'sat', name: 'Santali',    region: 'sat-IN' },
];

export const SITE_URL = 'https://gcdassociation.org';

/**
 * Given a path (e.g. '/about', '/plan', '/maharashtra/career-counsellor-mumbai'),
 * return the hreflang alternates map for that page.
 *
 * Output format (matches Next.js `metadata.alternates.languages`):
 *   {
 *     'en':  'https://gcdassociation.org/about',
 *     'hi':  'https://gcdassociation.org/hi/about',
 *     'ta':  'https://gcdassociation.org/ta/about',
 *     ...
 *     'en-IN': 'https://gcdassociation.org/about',
 *     ...
 *   }
 *
 * 'en' is the default path (no /en/ prefix); all other languages get a /{lang}/ prefix.
 */
export function hreflangAlternates(path) {
  // Normalize: strip leading slash for consistent joining
  const cleanPath = path.startsWith('/') ? path : '/' + path;

  // Default home: '/' should not become '//'
  const normalized = cleanPath === '/' ? '' : cleanPath;

  const map = {};

  for (const lang of LANGUAGES) {
    const url = lang.code === 'en'
      ? `${SITE_URL}${normalized || '/'}`
      : `${SITE_URL}/${lang.code}${normalized || ''}`;
    map[lang.code] = url;
    // Also add the region-specific code (e.g. en-IN, hi-IN) for country targeting
    map[lang.region] = url;
  }

  // x-default points to the English (default) version
  map['x-default'] = `${SITE_URL}${normalized || '/'}`;

  return map;
}

/**
 * Convenience function to get all hreflang entries for the current page.
 * Returns an object with:
 *   - canonical: the current page URL
 *   - languages: the hreflang alternates map
 *
 * Usage in metadata:
 *   import { hreflang } from '@/data/hreflang';
 *   alternates: hreflang('/about')
 */
export function hreflang(path) {
  return {
    canonical: path,
    languages: hreflangAlternates(path),
  };
}
