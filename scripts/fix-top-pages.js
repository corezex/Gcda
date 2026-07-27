const fs = require('fs');
const path = require('path');

const pages = [
  { dir: 'about', importPath: './_AboutContent', metaKey: 'about', path: '/about' },
  { dir: 'contact', importPath: './_ContactContent', metaKey: 'contact', path: '/contact' },
  { dir: 'plan', importPath: './_PlanContent', metaKey: 'plan', path: '/plan' },
  { dir: 'cities', importPath: './_CitiesContent', metaKey: 'cities', path: '/cities' },
  { dir: 'blog', importPath: './_BlogContent', metaKey: 'blog', path: '/blog' },
  { dir: 'career-counselling', importPath: './_CareerCounsellingContent', metaKey: 'careerCounselling', path: '/career-counselling' },
  { dir: 'career-certification', importPath: './_CareerCertificationContent', metaKey: 'careerCertification', path: '/career-certification' },
];

const root = path.join(__dirname, '..');

for (const p of pages) {
  const filePath = path.join(root, 'app', p.dir, 'page.js');
  const content = `import PageContent from '${p.importPath}';
import { hreflang, getMetaForLang } from '@/data/i18n';

const meta = getMetaForLang('en', '${p.metaKey}');

export const metadata = {
  alternates: hreflang('${p.path}'),
  title: meta.title,
  description: meta.description,
  openGraph: {
    locale: 'en_IN',
    title: meta.title,
    description: meta.description,
    url: 'https://gcdassociation.org${p.path}',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return <PageContent lang="en" />;
}
`;
  fs.writeFileSync(filePath, content);
  console.log(`Wrote ${filePath}`);
}
