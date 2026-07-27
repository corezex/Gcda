import PageContent from './_BlogContent';
import { hreflang, getMetaForLang } from '@/data/i18n';

const meta = getMetaForLang('en', 'blog');

export const metadata = {
  alternates: hreflang('/blog'),
  title: meta.title,
  description: meta.description,
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org/blog',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return <PageContent lang="en" />;
}
