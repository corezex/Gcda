import PageContent from './_CitiesContent';
import { hreflang, getMetaForLang } from '@/data/i18n';

const meta = getMetaForLang('en', 'cities');

export const metadata = {
  alternates: hreflang('/cities'),
  title: meta.title,
  description: meta.description,
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org/cities',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return <PageContent lang="en" />;
}
