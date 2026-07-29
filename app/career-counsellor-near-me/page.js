import SeoSupportPage, { buildSeoSupportMetadata } from '@/components/SeoSupportPage';
import { getSeoSupportPage } from '@/data/seoSupportPages';

const page = getSeoSupportPage('career-counsellor-near-me');

export const metadata = buildSeoSupportMetadata(page);

export default function Page() {
  return <SeoSupportPage page={page} />;
}
