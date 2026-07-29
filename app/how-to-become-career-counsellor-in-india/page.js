import SeoSupportPage, { buildSeoSupportMetadata } from '@/components/SeoSupportPage';
import { getSeoSupportPage } from '@/data/seoSupportPages';

const page = getSeoSupportPage('how-to-become-career-counsellor-in-india');

export const metadata = buildSeoSupportMetadata(page);

export default function Page() {
  return <SeoSupportPage page={page} />;
}
