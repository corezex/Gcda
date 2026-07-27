// Localized Career Counselling Content
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import SeminarTypesGrid from '@/components/SeminarTypesGrid';
import JsonLd from '@/components/JsonLd';
import { journeySteps as journeyStepsEn, services as servicesEn, siteFaqs as siteFaqsEn } from '@/data/site';
import { SEMINAR_TYPES } from '@/data/seminars';
import { SERVICE_CITY_PATTERNS } from '@/data/servicePages';
import { STATES } from '@/data/indiaLocations';
import { faqSchema, howToSchema, serviceSchema, breadcrumbSchema } from '@/data/schema';
import { TRANSLATIONS, localizePath } from '@/data/i18n';

function CareerCounsellingPage({ lang = 'en' }) {
  const fullT = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const t = fullT.careerCounselling;
  const lp = (p) => localizePath(p, lang);
  const journeySteps = fullT.journeySteps || journeyStepsEn;
  const siteFaqs = fullT.siteFaqs || siteFaqsEn;
  const services = fullT.serviceDetails ? Object.keys(fullT.serviceDetails).map(k => {
    const en = servicesEn.find(s => s.slug === k);
    const hi = fullT.serviceDetails[k];
    return en ? { ...en, title: hi.title || en.title, shortDescription: hi.shortDescription || en.shortDescription } : null;
  }).filter(Boolean) : servicesEn;

  const breadcrumbs = [
    { name: lang === 'hi' ? 'होम' : 'Home', url: lp('/') },
    { name: lang === 'hi' ? 'करियर काउंसलिंग' : 'Career Counselling', url: lp('/career-counselling') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="page-hero-copy">{t.desc}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">Book a Session</Link>
              <Link href={lp('/plan')} className="button button-secondary">View Plans</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.png" alt="GCDA career counselling services" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>GCDA offers 6 core career counselling services: Personal Counselling, Career Assessment, Workshops & Seminars, Stream Selection Guidance, Degree Selection Guidance, and Working Professional Guidance. All services are available online across India and in-person.</AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={lang === 'hi' ? "हम क्या प्रदान करते हैं" : "What we offer"} title={t.whatWeOfferTitle || "Career counselling services"} description={t.whatWeOfferDesc || "Click any service to learn more about what's included, who it's for, and how it works."} center />
          <div className="card-grid service-grid" id="services">
            {services.map((service) => (
              <article className="card service-card" key={service.slug} id={service.slug}>
                <div className="service-card-media"><img src={service.image} alt={service.title} /></div>
                <div className="card-body">
                  <div className="icon-badge">{service.icon}</div>
                  <h3><Link href={lp(`/career-counselling/${service.slug}`)}>{service.title}</Link></h3>
                  <p>{service.shortDescription}</p>
                  <Link href={lp(`/career-counselling/${service.slug}`)} className="text-link">Learn more →</Link>
                </div>
              </article>
            ))}
            <article className="card service-card" id="career-certification">
              <div className="service-card-media"><img src="/assets/career-7.png" alt="Career Counselling Certification" /></div>
              <div className="card-body">
                <div className="icon-badge">🎓</div>
                <h3><Link href={lp('/career-certification')}>Career Counselling Certification</Link></h3>
                <p>A comprehensive offline + online certification programme for aspiring and practising career counsellors.</p>
                <Link href={lp('/career-certification')} className="text-link">Learn more →</Link>
              </div>
            </article>
          </div>
        </div>
        {services.map((service) => (
          <JsonLd key={`ld-svc-${service.slug}`} id={`ld-svc-${service.slug}`} data={serviceSchema(service)} />
        ))}
      </section>

      <section className="section alt-section" id="all-cities">
        <div className="container">
          <SectionHeader eyebrow={lang === 'hi' ? "शहर × सेवा" : "Explore by city × service"} title={t.exploreCityTitle || "Find GCDA career counselling in your city"} description={t.exploreCityDesc || "We deliver 7 core services across 346 cities. Click any combination below to find a counsellor in your city."} center />
          <div className="services-mega-grid">
            {[
              ['maharashtra', 'mumbai'],
              ['karnataka', 'bengaluru'],
              ['delhi', 'new-delhi'],
              ['tamil-nadu', 'chennai'],
              ['telangana', 'hyderabad'],
              ['west-bengal', 'kolkata'],
              ['gujarat', 'ahmedabad'],
              ['rajasthan', 'jaipur'],
              ['uttar-pradesh', 'lucknow'],
            ].map(([sSlug, cSlug]) => {
              const state = STATES.find((st) => st.slug === sSlug);
              const cityName = cSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
              return (
                <div className="services-mega-row" key={`${sSlug}-${cSlug}`}>
                  <div className="services-mega-row-head"><span className="mini-label">{state ? state.name : sSlug}</span><h3>{cityName}</h3></div>
                  <ul className="services-mega-row-links">
                    {[
                      ['career-counselling', fullT.serviceLabels?.['Career Counsellor'] || 'Career Counsellor'],
                      ['personal-counselling', fullT.serviceLabels?.['Personal Counselling'] || 'Personal Counselling'],
                      ['career-assessment', fullT.serviceLabels?.['Career Assessment'] || 'Career Assessment'],
                      ['career-counselling-seminar', fullT.serviceLabels?.['Seminar'] || 'Seminar'],
                      ['career-certification', fullT.serviceLabels?.['Certification'] || 'Certification'],
                      ['stream-selection-guidance', fullT.serviceLabels?.['Stream Selection'] || 'Stream Selection'],
                      ['degree-selection-guidance', fullT.serviceLabels?.['Degree Selection'] || 'Degree Selection'],
                      ['guidance-for-working-professionals', fullT.serviceLabels?.['Working Pro'] || 'Working Pro'],
                    ].map(([svcKey, label]) => {
                      const pat = SERVICE_CITY_PATTERNS[svcKey];
                      if (!pat) return null;
                      return (<li key={svcKey}><Link href={lp(pat.urlPattern(sSlug, cSlug))}>{label}</Link></li>);
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="center-cta"><Link href={lp('/cities')} className="text-link">View all 346 cities →</Link></div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader eyebrow={lang === 'hi' ? "कार्यशालाएं" : "Workshops & Seminars"} title={t.workshopTitle || "4 types of seminars and workshops we offer"} description={t.workshopDesc || "As part of our workshops and seminars service, GCDA runs 4 dedicated tracks."} center />
          <SeminarTypesGrid seminars={SEMINAR_TYPES} city={lang === 'hi' ? "भारत" : "India"} />
          <div className="center-cta"><Link href={lp('/career-counselling-seminar')} className="text-link">{t.seeSeminars || "See seminars in your city →"}</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={lang === 'hi' ? "हमारी प्रक्रिया" : "Our process"} title={t.processTitle || "The same clear counselling framework across services"} description={t.processDesc || "Whether you are selecting a stream or planning a professional transition, our process stays focused and structured."} center />
          <div className="card-grid process-grid">
            {journeySteps.map((step, index) => (
              <article className="card process-card" key={step.title}>
                <div className="card-body"><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></div>
              </article>
            ))}
          </div>
        </div>
        <JsonLd id="ld-howto-services" data={howToSchema('How GCDA Career Counselling Works', journeySteps.map((s) => ({ title: s.title, description: s.description })), 'PT90M')} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title={t.faqMainTitle || "Common questions about GCDA services"} center />
          <FAQList items={siteFaqs} />
        </div>
        <JsonLd id="ld-faq-services" data={faqSchema(siteFaqs)} />
      </section>

      <CTASection title={t.needHelpTitle || "Need help choosing the right service?"} description={t.needHelpDesc || "Tell GCDA where you are stuck, and we will guide you to the most suitable service or plan."} lang={lang} />
      <JsonLd id="ld-breadcrumb-services" data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default CareerCounsellingPage;
