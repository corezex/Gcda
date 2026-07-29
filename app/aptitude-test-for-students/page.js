import SeoSupportPage, { buildSeoSupportMetadata } from '@/components/SeoSupportPage';
import { getSeoSupportPage } from '@/data/seoSupportPages';

const page = getSeoSupportPage('aptitude-test-for-students');

export const metadata = buildSeoSupportMetadata(page);

export default function Page() {
  return <SeoSupportPage page={page} />;
}
