// Locale variant of //career-certification
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../career-certification/_CareerCertificationContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/ta/career-certification';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/career-certification') },
  title: 'Career Counselling Certification in India',
  description: 'Become a certified career counsellor with GCDA. Our comprehensive offline + online certification programme equips you with the skills, assessments, and mentoring techniques to guide students and working professionals across India.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'ta' }];
}

export default function LocalePage() {
  return <PageContent />;
}
