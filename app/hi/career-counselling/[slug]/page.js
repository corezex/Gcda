import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import CTASection from '@/components/CTASection';
import { services as servicesEn, company } from '@/data/site';
import { getServicePage } from '@/data/servicePages';
import { faqSchema, breadcrumbSchema, howToSchema, serviceSchema } from '@/data/schema';
import { TRANSLATIONS, hreflangAlternates, getMetaForLang, getLocaleDetails, localizePath } from '@/data/i18n';

const LANG = 'hi';
const SITE_URL = 'https://gcdassociation.org';

export function generateStaticParams() {
  // User wants Hindi versions of exactly these 5 service detail pages (matching English list, excluding working-professionals-guidance)
  const allowedHi = [
    'personal-counselling',
    'career-assessment',
    'workshops-seminars',
    'stream-selection-guidance',
    'degree-selection-guidance'
  ];
  return servicesEn.filter(s => allowedHi.includes(s.slug)).map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const serviceEn = servicesEn.find((s) => s.slug === params.slug);
  const hiDetails = TRANSLATIONS.hi?.serviceDetails?.[params.slug];
  const title = hiDetails?.title || serviceEn?.title || params.slug;
  const desc = hiDetails?.shortDescription || serviceEn?.shortDescription || '';
  const localeDetails = getLocaleDetails(LANG);
  return {
    title: `${title} - Hindi | GCDA`,
    description: desc,
    alternates: { canonical: `/hi/career-counselling/${params.slug}`, languages: hreflangAlternates(`/career-counselling/${params.slug}`) },
    openGraph: {
      locale: localeDetails.ogLocale,
      title: `${title} - Hindi`,
      description: desc,
      url: `/hi/career-counselling/${params.slug}`,
    },
    robots: { index: true, follow: true },
  };
}

export default function ServiceDetailPageHi({ params }) {
  const allowed = [
    'personal-counselling',
    'career-assessment',
    'workshops-seminars',
    'stream-selection-guidance',
    'degree-selection-guidance'
  ];
  if (!allowed.includes(params.slug)) notFound();
  const serviceEn = servicesEn.find((s) => s.slug === params.slug);
  if (!serviceEn) notFound();
  const hiDetails = TRANSLATIONS.hi?.serviceDetails?.[params.slug] || {};
  const service = { ...serviceEn, ...hiDetails, icon: serviceEn.icon, image: serviceEn.image };
  const lp = (p) => localizePath(p, LANG);
  const servicePageData = getServicePage(serviceEn.slug);
  const longDescription = service.longDescription || servicePageData?.heroLead || service.shortDescription;
  const breadcrumbs = [
    { name: 'होम', url: lp('/') },
    { name: 'सेवाएं', url: lp('/career-counselling') },
    { name: service.title, url: lp(`/career-counselling/${serviceEn.slug}`) },
  ];
  const benefits = service.benefits || serviceEn.includes || [];
  const idealFor = service.idealFor || serviceEn.idealFor || [];
  const outcomes = service.outcomes || serviceEn.outcomes || [];
  const steps = (service.steps || serviceEn.steps || []).map((s,i) => typeof s === 'string' ? { title: `Step ${i+1}`, body: s } : s);
  const faqs = service.faqs || serviceEn.faqs || [];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{serviceEn.icon} {service.title}</span>
            <h1>{service.title}</h1>
            <p className="page-hero-copy">{service.heroDescription || longDescription}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">निःशुल्क परामर्श बुक करें</Link>
              <Link href="#how-it-works" className="button button-secondary">कैसे काम करता है</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src={serviceEn.image} alt={service.title} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock lang={LANG}>
            {service.longDescription}
          </AnswerBlock>
        </div>
      </section>

      <section className="section alt-section" id="what-you-get">
        <div className="container">
          <SectionHeader eyebrow="आपको क्या मिलता है" title={`${service.title} में क्या शामिल है`} description={service.whyItMatters || "हर जुड़ाव वास्तविक परिणामों के आसपास संरचित है।"} center />
          <div className="benefits-grid">
            {benefits.map((b,i) => (
              <article className="benefit-card" key={i}>
                <span className="benefit-number">{(i+1).toString().padStart(2,'0')}</span>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader eyebrow="यह किसके लिए है" title={`क्या ${service.title} आपके लिए सही है?`} description="यदि ये स्थितियाँ परिचित लगती हैं, तो यह सेवा मदद कर सकती है।" />
            <ul className="bullet-list">
              {idealFor.map((item) => (<li key={item}>{item}</li>))}
            </ul>
          </div>
          <div className="info-panel">
            <h3>परिणाम</h3>
            <ul className="bullet-list compact">
              {outcomes.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <div className="info-panel-cta">
              <Link href={lp('/contact')} className="button button-primary block-button">निःशुल्क परामर्श बुक करें</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section" id="how-it-works">
        <div className="container">
          <SectionHeader eyebrow="कैसे काम करता है" title="5-चरण की सीधी प्रक्रिया" description="हर जुड़ाव एक ही संरचित ढांचे का पालन करता है।" center />
          <ol className="steps-timeline">
            {steps.map((step,i) => (
              <li className="steps-timeline-item" key={i}>
                <span className="steps-timeline-number">{i+1}</span>
                <div className="steps-timeline-content"><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt-section" id="faq">
        <div className="container narrow-center-wide">
          <SectionHeader eyebrow="सामान्य प्रश्न" title={`${service.title} के बारे में प्रश्न`} description="छात्रों, अभिभावकों और पेशेवरों से प्राप्त सामान्य प्रश्न।" center />
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection title={`${service.title} बुक करने के लिए तैयार हैं?`} description="GCDA से जुड़ें और हम आपको सही अगले कदम की ओर मार्गदर्शन करेंगे।" lang={LANG} />
      <JsonLd id={`ld-breadcrumb-${serviceEn.slug}-hi`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id={`ld-service-${serviceEn.slug}-hi`} data={serviceSchema(serviceEn)} />
    </>
  );
}
