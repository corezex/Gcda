// Locale variant of //career-counselling
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../career-counselling/_CareerCounsellingContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/kn/career-counselling';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/career-counselling') },
  title: 'Career Counselling Services in India',
  description: 'GCDA offers expert career counselling in India: personal counselling, career assessments, stream and degree selection guidance, workshops, and professional mentoring for students, parents, and working professionals.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'kn' }];
}

export default function LocalePage() {
  return <PageContent />;
}
