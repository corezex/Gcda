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

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Counselling Plans & Pricing',
  description:
    'Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals. Transparent pricing, structured plans.',
  keywords: [
    'career counselling plans',
    'career counselling pricing',
    'career counselling cost India',
    'stream selector plan',
    'degree selector plan',
    'working professional counselling plan',
  ],
  alternates: { canonical: '/plan' },
  openGraph: {
    title: 'Career Counselling Plans & Pricing',
    description: 'Compare GCDA career counselling plans for stream selection, degree selection, and working professionals.',
    url: 'https://gcdassociation.org/plan',
    images: [
      {
        url: '/assets/career-6.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling plans and pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Plans & Pricing',
    description: 'Compare GCDA career counselling plans for stream selection, degree selection, and working professionals.',
    images: [
      {
        url: '/assets/career-6.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling plans and pricing',
      },
    ],
  },
};

export default function PlanPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Plans', url: '/plan' },
  ];
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Career counselling plans</span>
            <h1>Choose the plan that matches your current stage.</h1>
            <p className="page-hero-copy">
              For students and professionals, our career assessment and counselling plans help narrow options and identify the right path based on interests, skills, values, and personality.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-6.png" alt="Career counselling plans" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            GCDA offers 3 career counselling plans: Stream Selector (Rs. 2,999) for school students choosing a stream, Degree Selector (Rs. 3,499) for students choosing a degree after 12th, and Working Professionals (Rs. 3,999) for career transitions and growth. All plans include assessments, mentor sessions, and a personalised report.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Plans"
            title="Simple, transparent pricing"
            description="Plan names, pricing, and included features are kept aligned with the current GCDA plan structure."
            center
          />
          <PlanCards plans={plans} />
        </div>
        {plans.map((plan) => (
          <JsonLd key={plan.slug} id={`ld-product-${plan.slug}`} data={productSchema(plan)} />
        ))}
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Which plan should you choose?"
              title="A quick way to decide"
              description="Each plan builds on the previous one, so you can choose based on your current need and level of support."
            />
            <div className="stack-list">
              <article className="feature-row">
                <h3>Stream Selector</h3>
                <p>Best for school students deciding between Science, Commerce, Arts, and future-fit academic direction. See <Link href="/career-counselling/stream-selection-guidance" className="text-link">stream selection guidance</Link>.</p>
              </article>
              <article className="feature-row">
                <h3>Degree Selector</h3>
                <p>Ideal when students need course, degree, and college-level clarity after school. See <Link href="/career-counselling/degree-selection-guidance" className="text-link">degree selection guidance</Link>.</p>
              </article>
              <article className="feature-row">
                <h3>Working Professionals</h3>
                <p>Designed for employed individuals who want smarter positioning, transitions, and growth planning. See <Link href="/career-counselling/working-professionals-guidance" className="text-link">working professional guidance</Link>.</p>
              </article>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions about plans"
              description="A few practical answers before you book or upgrade your counselling package."
            />
            <FAQList items={siteFaqs.slice(0, 3)} />
          </div>
        </div>
        <JsonLd id="ld-faq-plans" data={faqSchema(siteFaqs.slice(0, 3))} />
      </section>

      <CTASection
        title="Still unsure which plan fits you best?"
        description="Talk to GCDA and we will help you choose the right counselling path before you book."
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
