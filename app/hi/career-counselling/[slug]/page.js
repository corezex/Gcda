import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import CTASection from '@/components/CTASection';
import { services, company } from '@/data/site';
import { getServicePage } from '@/data/servicePages';
import { faqSchema, breadcrumbSchema, howToSchema, serviceSchema } from '@/data/schema';
import { hreflangAlternates, getMetaForLang, getLocaleDetails, localizePath } from '@/data/i18n';

const LANG = 'hi';
const SITE_URL = 'https://gcdassociation.org';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service not found' };
  const meta = getMetaForLang(LANG, 'careerCounselling');
  const localeDetails = getLocaleDetails(LANG);
  return {
    title: `${service.title} - Hindi | GCDA`,
    description: service.shortDescription,
    alternates: { canonical: `/hi/career-counselling/${params.slug}`, languages: hreflangAlternates(`/career-counselling/${params.slug}`) },
    openGraph: {
      locale: localeDetails.ogLocale,
      title: `${service.title} - Hindi`,
      description: service.shortDescription,
      url: `/hi/career-counselling/${params.slug}`,
    },
    robots: { index: true, follow: true },
  };
}

export default function ServiceDetailPageHi({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const lp = (p) => localizePath(p, LANG);
  const t = getMetaForLang(LANG, 'careerCounselling');
  const servicePageData = getServicePage(service.slug);
  const longDescription = service.longDescription || servicePageData?.heroLead || service.shortDescription;
  const breadcrumbs = [
    { name: 'Home', url: lp('/') },
    { name: 'Services', url: lp('/career-counselling') },
    { name: service.title, url: lp(`/career-counselling/${service.slug}`) },
  ];
  const benefits = service.benefits || service.includes || [];
  const idealFor = service.idealFor || [];
  const outcomes = service.outcomes || [];
  const steps = (service.steps || []).map((s,i) => typeof s === 'string' ? { title: `Step ${i+1}`, body: s } : s);
  const faqs = service.faqs || [];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{service.icon} {service.title} (हिन्दी)</span>
            <h1>{service.title} - व्यक्तिगत मार्गदर्शन</h1>
            <p className="page-hero-copy">{longDescription}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">निःशुल्क परामर्श बुक करें</Link>
              <Link href="#how-it-works" className="button button-secondary">कैसे काम करता है</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {service.title} GCDA में एक संरचित, मेंटर-नेतृत्व वाली सेवा है जो छात्रों, अभिभावकों और पेशेवरों को आत्मविश्वास से भरे, साक्ष्य-आधारित करियर निर्णय लेने में मदद करती है।
          </AnswerBlock>
        </div>
      </section>

      <section className="section alt-section" id="what-you-get">
        <div className="container">
          <SectionHeader eyebrow="आपको क्या मिलता है" title={`${service.title} में क्या शामिल है`} description="हर जुड़ाव वास्तविक परिणामों के आसपास संरचित है।" center />
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
            <SectionHeader eyebrow="यह किसके लिए है" title={`क्या ${service.title.toLowerCase()} आपके लिए सही है?`} description="यदि ये स्थितियाँ परिचित लगती हैं, तो यह सेवा मदद कर सकती है।" />
            <ul className="bullet-list">
              {idealFor.map((item) => (<li key={item}>{item}</li>))}
            </ul>
          </div>
          <div className="info-panel">
            <h3>आपको क्या मिलता है</h3>
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
          <SectionHeader eyebrow="सामान्य प्रश्न" title={`${service.title.toLowerCase()} के बारे में प्रश्न`} description="छात्रों, अभिभावकों और पेशेवरों से प्राप्त सामान्य प्रश्न।" center />
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection title={`${service.title.toLowerCase()} बुक करने के लिए तैयार हैं?`} description="GCDA से जुड़ें और हम आपको सही अगले कदम की ओर मार्गदर्शन करेंगे।" lang={LANG} />
      <JsonLd id={`ld-breadcrumb-${service.slug}-hi`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id={`ld-service-${service.slug}-hi`} data={serviceSchema(service)} />
    </>
  );
}
