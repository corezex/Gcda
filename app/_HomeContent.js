// Localized Home Content - supports lang prop for i18n
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import ServiceGrid from '@/components/ServiceGrid';
import TestimonialGrid from '@/components/TestimonialGrid';
import FAQList from '@/components/FAQList';
import CTASection from '@/components/CTASection';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { audience as audienceEn, company, journeySteps as journeyStepsEn, services, siteFaqs as siteFaqsEn, statsHome as statsHomeEn, testimonials, valuePoints as valuePointsEn } from '@/data/site';
import { faqSchema, howToSchema } from '@/data/schema';
import { TRANSLATIONS, getLocaleDetails, localizePath } from '@/data/i18n';

function HomePage({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const locale = getLocaleDetails(lang);
  const lp = (path) => localizePath(path, lang);

  // Use translated arrays if available, else fallback to EN
  const valuePoints = t.valuePoints || valuePointsEn;
  const audience = t.audience || audienceEn;
  const journeySteps = t.journeySteps || journeyStepsEn;
  const siteFaqs = t.siteFaqs || siteFaqsEn;
  const statsHome = t.statsHome || statsHomeEn;

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">{t.home.eyebrow}</span>
            <h1>{t.home.title}</h1>
            <p className="page-hero-copy">{t.home.description}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">{t.common.bookConsultation}</Link>
              <Link href={lp('/career-counselling')} className="button button-secondary">{t.common.exploreServices}</Link>
            </div>
            <div className="hero-proof">
              {t.home.heroProof.map((txt) => (
                <span key={txt}>{txt}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual surface-card">
            <img src="/assets/hero-illustration.png" alt="Career guidance and counselling illustration" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <StatsBar stats={statsHome} />
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={t.home.aboutEyebrow}
              title={t.home.aboutTitle}
              description={t.home.aboutDesc}
            />
            <AnswerBlock>
              {lang === 'en'
                ? "GCDA is one of India's trusted career counselling and career guidance associations, helping 50,000+ students, parents, and working professionals make clear education and career decisions through assessments, structured counselling, and practical roadmaps since 2013."
                : t.home.description}
            </AnswerBlock>
            <div className="stack-list">
              {valuePoints.map((point) => (
                <article className="feature-row" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
            <Link href={lp('/about')} className="text-link">{t.common.learnMore}</Link>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-2.png" alt="Career counselling session" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow={t.home.whatWeDoEyebrow}
            title={t.home.whatWeDoTitle}
            description={t.home.whatWeDoDesc}
            center
          />
          <ServiceGrid services={services} limit={6} lang={lang} />
        </div>
      </section>

      <section className="section">
        <div className="container two-column reverse-mobile">
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.png" alt="Services illustration" />
          </div>
          <div>
            <SectionHeader
              eyebrow={t.home.whoWeHelpEyebrow}
              title={t.home.whoWeHelpTitle}
              description={t.home.whoWeHelpDesc}
            />
            <ul className="bullet-list">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow={t.home.processEyebrow}
            title={t.home.processTitle}
            description={t.home.processDesc}
            center
          />
          <div className="card-grid process-grid">
            {journeySteps.map((step, index) => (
              <article className="card process-card" key={step.title}>
                <div className="card-body">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <JsonLd id="ld-howto-journey" data={howToSchema('How GCDA Career Counselling Works', journeySteps.map((s) => ({ title: s.title, description: s.description })), 'PT90M')} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t.home.testimonialsEyebrow}
            title={t.home.testimonialsTitle}
            description={t.home.testimonialsDesc}
            center
          />
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={t.home.faqEyebrow}
              title={t.home.faqTitle}
              description={t.home.faqDesc}
            />
            <FAQList items={siteFaqs} />
          </div>
          <div className="info-panel">
            <h3>Need direct help?</h3>
            <p>Speak to the GCDA team to discuss your requirement, compare plans, or book a session.</p>
            <div className="mini-contact-card">
              <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.addressLine1}</span>
            </div>
          </div>
        </div>
        <JsonLd id="ld-faq-home" data={faqSchema(siteFaqs)} />
      </section>

      <CTASection
        title={t.home.ctaTitle}
        description={t.home.ctaDesc}
        lang={lang}
      />
    </>
  );
}

export default HomePage;
