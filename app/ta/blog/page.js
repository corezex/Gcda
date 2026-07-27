// Locale variant of //blog
// Renders the same content as the English page, with locale-specific metadata
// and hreflang alternates pointing to all 17 language variants.

import { default as PageContent } from '../../blog/_BlogContent';
import { hreflang, hreflangAlternates } from '@/data/hreflang';

const LOCALE_PATH = '/ta/blog';

export const metadata = {
  alternates: { canonical: LOCALE_PATH, languages: hreflangAlternates('/blog') },
  title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
  description: 'Practical, India-specific career guidance for students, parents, and working professionals. Read GCDA blog posts on stream selection after 10th, degree choices after 12th, JEE/NEET planning, MBA, career transitions, and working professional growth.',
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ lang: 'ta' }];
}

export default function LocalePage() {
  return <PageContent />;
}
