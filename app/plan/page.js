import PageContent from './_PlanContent';
import { hreflang, getMetaForLang } from '@/data/i18n';

const meta = getMetaForLang('en', 'plan');

export const metadata = {
  alternates: hreflang('/plan'),
  title: meta.title,
  description: meta.description,
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org/plan',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return <PageContent lang="en" />;
}
