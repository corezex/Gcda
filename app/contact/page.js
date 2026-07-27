import PageContent from './_ContactContent';
import { hreflang, getMetaForLang } from '@/data/i18n';

const meta = getMetaForLang('en', 'contact');

export const metadata = {
  alternates: hreflang('/contact'),
  title: meta.title,
  description: meta.description,
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org/contact',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return <PageContent lang="en" />;
}
