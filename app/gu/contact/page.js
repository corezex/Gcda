// Locale variant of //contact
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../contact/_ContactContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/gu/contact';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/contact') },
  title: 'Contact GCDA – Career Counselling in Mumbai & Across India: Phone, Email, WhatsApp',
  description: 'Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office at 102, Citi Mall, Link Road, Andheri West, or reach us by phone (+91 91360 05039), email (gcda.career@gmail.com), or WhatsApp.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'gu' }];
}

export default function LocalePage() {
  return <PageContent />;
}
