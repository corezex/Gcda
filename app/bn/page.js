// Locale variant of /
// Renders the same content as the English home page.

import { default as PageContent } from '../_HomeContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/bn';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/') },
  title: 'Career Counselling & Career Guidance in India',
  description: 'GCDA provides expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring for students, parents, and working professionals across India.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'bn' }];
}

export default function LocaleHomePage() {
  return <PageContent />;
}
