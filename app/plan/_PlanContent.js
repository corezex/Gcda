// Localized Plan Content
import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import PlanCards from '@/components/PlanCards';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { plans, siteFaqs } from '@/data/site';
import { faqSchema, productSchema, breadcrumbSchema, webPageSchema } from '@/data/schema';
import { TRANSLATIONS, localizePath } from '@/data/i18n';

const SITE_URL = 'https://gcdassociation.org';

function PlanPage({ lang = 'en' }) {
  const t = (TRANSLATIONS[lang] || TRANSLATIONS.en).plan;
  const fullT = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const lp = (p) => localizePath(p, lang);
  const plansData = fullT.plans || plans;
  const siteFaqsData = fullT.siteFaqs || siteFaqs;

  const breadcrumbs = [
    { name: 'Home', url: lp('/') },
    { name: 'Plans', url: lp('/plan') },
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
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-6.png" alt="Career counselling plans" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock lang={lang}>
            {t.answerBlock || "GCDA offers 3 career counselling plans: Stream Selector (Rs. 2,999) for school students choosing a stream, Degree Selector (Rs. 3,499) for students choosing a degree after 12th, and Working Professionals (Rs. 3,999) for career transitions and growth. All plans include assessments, mentor sessions, and a personalised report."}
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={lang === 'hi' ? "योजनाएं" : "Plans"}
            title={t.pricingTitle || "Simple, transparent pricing"}
            description={t.pricingDesc || "Plan names, pricing, and included features are kept aligned with the current GCDA plan structure."}
            center
          />
          <PlanCards plans={plansData} lang={lang} />
        </div>
        {plansData.map((plan) => (
          <JsonLd key={plan.slug} id={`ld-product-${plan.slug}`} data={productSchema(plan)} />
        ))}
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={lang === 'hi' ? "कौन सी योजना?" : "Which plan should you choose?"}
              title={t.whichTitle || "A quick way to decide"}
              description={t.whichDesc || "Each plan builds on the previous one, so you can choose based on your current need and level of support."}
            />
            <div className="stack-list">
              <article className="feature-row">
                <h3>{t.streamSelector || "Stream Selector"}</h3>
                <p>{t.streamSelectorDesc || "Best for school students deciding between Science, Commerce, Arts, and future-fit academic direction."} <Link href={lp('/career-counselling/stream-selection-guidance')} className="text-link">{lang === 'hi' ? "स्ट्रीम चयन मार्गदर्शन देखें" : "stream selection guidance"}</Link>.</p>
              </article>
              <article className="feature-row">
                <h3>{t.degreeSelector || "Degree Selector"}</h3>
                <p>{t.degreeSelectorDesc || "Ideal when students need course, degree, and college-level clarity after school."} <Link href={lp('/career-counselling/degree-selection-guidance')} className="text-link">{lang === 'hi' ? "डिग्री चयन मार्गदर्शन देखें" : "degree selection guidance"}</Link>.</p>
              </article>
              <article className="feature-row">
                <h3>{t.workingProf || "Working Professionals"}</h3>
                <p>{t.workingProfDesc || "Designed for employed individuals who want smarter positioning, transitions, and growth planning."} <Link href={lp('/career-counselling/working-professionals-guidance')} className="text-link">{lang === 'hi' ? "पेशेवर मार्गदर्शन देखें" : "working professional guidance"}</Link>.</p>
              </article>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title={t.faqTitle || "Questions about plans"}
              description={t.faqDesc || "A few practical answers before you book or upgrade your counselling package."}
            />
            <FAQList items={siteFaqsData.slice(0, 3)} />
          </div>
        </div>
        <JsonLd id="ld-faq-plans" data={faqSchema(siteFaqsData.slice(0, 3))} />
      </section>

      <CTASection
        title={t.stillUnsureTitle || "Still unsure which plan fits you best?"}
        description={t.stillUnsureDesc || "Talk to GCDA and we will help you choose the right counselling path before you book."}
        lang={lang}
      />

      <JsonLd id="ld-breadcrumb-plans" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id="ld-webpage-plans"
        data={webPageSchema({
          url: `${SITE_URL}/plan`,
          name: 'Career Counselling Plans & Pricing',
          description: 'Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals.',
          primaryImage: `${SITE_URL}/assets/career-6.png`,
        })}
      />
    </>
  );
}

export default PlanPage;
