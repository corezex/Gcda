import PageContent from './_HomeContent';
import { hreflang, getMetaForLang, getLocaleDetails } from '@/data/i18n';

const meta = getMetaForLang('en', 'home');

export const metadata = {
  alternates: hreflang('/'),
  title: meta.title,
  description: meta.description,
  keywords: [
    'career counselling India',
    'career counselling near me',
    'career assessment',
    'career guidance',
    'online career counselling',
  ],
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org/',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
};

export default function HomePage() {
  return <PageContent lang="en" />;
}
