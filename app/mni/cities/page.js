// Locale variant of //cities
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../cities/_CitiesContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/mni/cities';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/cities') },
  title: 'Career Counselling Across India: 36 States, 346+ Cities',
  description: 'GCDA offers career counselling, career assessments, stream and degree selection guidance, and professional mentoring across 36 Indian states and union territories, covering 346+ cities including metros like Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, and Kolkata.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'mni' }];
}

export default function LocalePage() {
  return <PageContent />;
}
