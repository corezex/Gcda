// Locale variant of //about
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../about/_AboutContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/bn/about';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/about') },
  title: 'About GCDA – Career Counselling Association in India: Our Mission & Team',
  description: 'Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals through smarter career decisions across India.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'bn' }];
}

export default function LocalePage() {
  return <PageContent />;
}
