// Locale variant of //plan
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../plan/_PlanContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/ur/plan';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/plan') },
  title: 'Career Counselling Plans & Pricing',
  description: 'Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals. Transparent pricing, structured plans.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'ur' }];
}

export default function LocalePage() {
  return <PageContent />;
}
