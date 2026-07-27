import PageContent from './_AboutContent';
import { hreflang, getMetaForLang } from '@/data/i18n';

const meta = getMetaForLang('en', 'about');

export const metadata = {
  alternates: hreflang('/about'),
  title: meta.title,
  description: meta.description,
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org/about',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return <PageContent lang="en" />;
}
