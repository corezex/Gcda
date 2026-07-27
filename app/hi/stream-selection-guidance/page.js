import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import CTASection from '@/components/CTASection';
import { getServicePage } from '@/data/servicePages';
import { hreflangAlternates, getLocaleDetails, localizePath } from '@/data/i18n';
import { breadcrumbSchema } from '@/data/schema';

const LANG = 'hi';
const SLUG = 'stream-selection-guidance';

export function generateMetadata() {
  const servicePage = getServicePage(SLUG);
  const localeDetails = getLocaleDetails(LANG);
  return {
    title: servicePage ? `${servicePage.title} - Hindi | GCDA` : SLUG,
    description: servicePage ? servicePage.shortDescription : 'GCDA service',
    alternates: { canonical: `/hi/${SLUG}`, languages: hreflangAlternates(`/${SLUG}`) },
    openGraph: { locale: localeDetails.ogLocale, url: `/hi/${SLUG}` },
    robots: { index: true, follow: true },
  };
}

export default function TopicalServiceHi() {
  const servicePage = getServicePage(SLUG);
  const lp = (p) => localizePath(p, LANG);
  if (!servicePage) return <div>Not found</div>;
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: "Home", url: lp("/") }, { name: servicePage.title, url: lp(`/${SLUG}`) }]} />
            <span className="eyebrow">{servicePage.heroEyebrow} (हिन्दी)</span>
            <h1>{servicePage.heroTitle}</h1>
            <p className="page-hero-copy">{servicePage.heroLead}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">निःशुल्क परामर्श बुक करें</Link>
              <Link href={lp('/cities')} className="button button-secondary">सभी शहर देखें</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.png" alt={servicePage.title} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <AnswerBlock>{servicePage.shortDescription}</AnswerBlock>
        </div>
      </section>
      <CTASection title="सहायता चाहिए?" description="GCDA से बात करें और सही सेवा चुनें।" lang={LANG} />
    </>
  );
}
