import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import PlanCards from '@/components/PlanCards';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/non-homepage.css';
import { plans } from '@/data/site';
import { faqSchema, productSchema, breadcrumbSchema, webPageSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Counselling Fees & Plans in India',
  description:
    'Career counselling fees in India – GCDA plans start at Rs. 2,999 for stream selection, Rs. 3,499 for degree guidance, and Rs. 3,999 for professionals.',
  keywords: [
    'career counselling fees in India',
    'career counselling pricing',
    'career counselling cost India',
    'online career counselling charges',
    'stream selector plan',
    'degree selector plan',
    'working professional counselling plan',
  ],
  alternates: { canonical: '/plan' },
  openGraph: {
    title: 'Career Counselling Fees & Plans in India',
    description:
      'GCDA fees start at Rs. 2,999 for stream selection, Rs. 3,499 for degree guidance, and Rs. 3,999 for working professionals.',
    url: 'https://gcdassociation.org/plan',
    images: [
      {
        url: '/assets/career-6.webp',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling plans and pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Fees & Plans in India',
    description: 'GCDA career counselling fees in India – transparent pricing for students and working professionals.',
    images: [
      {
        url: '/assets/career-6.webp',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling plans and pricing',
      },
    ],
  },
};

const planFaqs = [
  {
    q: 'How much does career counselling cost in India?',
    a: 'GCDA career counselling fees in India start at Rs. 2,999 for Stream Selector, Rs. 3,499 for Degree Selector, and Rs. 3,999 for Working Professionals. The right plan depends on whether the decision is after 10th, after 12th, or mid-career.',
  },
  {
    q: 'What affects career counselling fees?',
    a: 'Fees usually depend on the stage of the decision, assessment depth, mentoring scope, and whether the client needs stream selection, degree selection, or working-professional planning. More complex transitions usually require more structured support.',
  },
  {
    q: 'Are online career counselling charges lower than in-person counselling?',
    a: 'At GCDA, the pricing is based on the value and structure of the plan rather than only on format. Most clients choose online sessions because they are flexible and easier to schedule, while the assessment, report, and action plan remain the same.',
  },
  {
    q: 'Which plan is best for class 10, class 12, and working professionals?',
    a: 'Class 10 students usually start with Stream Selector, class 12 students usually need Degree Selector, and working professionals typically choose the Working Professionals plan for transitions, MBA planning, and career growth decisions.',
  },
];

const pricingRows = [
  {
    plan: 'Stream Selector',
    bestFor: 'Class 8–10 students choosing Science, Commerce, Arts, diploma, or future-fit academic direction',
    price: 'Rs. 2,999',
    includes: 'Assessment, counselling, stream shortlist, report, student helpline',
    outcome: 'A defensible stream decision and backup options',
  },
  {
    plan: 'Degree Selector',
    bestFor: 'Class 11–12 students comparing courses, degrees, colleges, and entrance-exam pathways',
    price: 'Rs. 3,499',
    includes: 'All Stream Selector benefits plus degree analysis, college shortlist, and admission guidance',
    outcome: 'A realistic after-12th degree and college plan',
  },
  {
    plan: 'Working Professionals',
    bestFor: 'Professionals planning job switches, growth strategy, MBA decisions, or role repositioning',
    price: 'Rs. 3,999',
    includes: 'All Degree Selector benefits plus transition planning, resume support, and growth roadmap',
    outcome: 'A 90-day transition or growth plan with clearer next moves',
  },
];

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
            <span className="eyebrow">Career counselling fees and pricing</span>
            <h1>Career Counselling Fees and Plans in India</h1>
            <p className="page-hero-copy">
              Compare GCDA career counselling fees in India for stream selection after 10th, degree selection after 12th, and working professional planning. Every plan includes structured guidance, assessment-led thinking, and a clear next-step roadmap.
            </p>
          </div>
          <div className="surface-card media-card">
            <Image
              src="/assets/career-6.webp"
              alt="Career counselling plans"
              width={1376}
              height={768}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            Career counselling fees in India at GCDA start at Rs. 2,999 for Stream Selector, Rs. 3,499 for Degree Selector, and Rs. 3,999 for Working Professionals. Online career counselling charges are based on the level of guidance, assessment depth, and decision stage, with every plan including mentor support and a personalised action plan.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Plans"
            title="Simple, transparent pricing"
            description="Plan names, pricing, and included features are aligned to the current GCDA counselling structure for students, parents, and working professionals."
            center
          />
          <PlanCards plans={plans} />
        </div>
        {plans.map((plan) => (
          <JsonLd key={plan.slug} id={`ld-product-${plan.slug}`} data={productSchema(plan)} />
        ))}
      </section>

      <section className="section alt-section" id="pricing-breakdown">
        <div className="container">
          <SectionHeader
            eyebrow="Fees explained"
            title="How much does career counselling cost in India?"
            description="The right counselling plan depends on the decision stage, assessment depth, and how much support the student or professional needs after the first conversation."
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Best for</th>
                  <th>Fees</th>
                  <th>What is included</th>
                  <th>Main outcome</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.plan}>
                    <td><strong>{row.plan}</strong></td>
                    <td>{row.bestFor}</td>
                    <td>{row.price}</td>
                    <td>{row.includes}</td>
                    <td>{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-caption">Career counselling fees, plan scope, and outcomes at a glance.</p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Which plan should you choose?"
              title="What affects career counselling fees?"
              description="Counselling cost depends on the complexity of the decision, the amount of assessment and shortlisting needed, and whether the client needs stream, degree, or working-professional support."
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
                <p>Designed for employed individuals who want smarter positioning, transitions, and growth planning. See <Link href="/guidance-for-working-professionals" className="text-link">working professional guidance</Link>.</p>
              </article>
              <article className="feature-row">
                <h3>Online vs in-person</h3>
                <p>Most clients choose online sessions because they are easier to schedule and still include assessments, mentor support, and a written plan. The value comes from the quality of the guidance, not just the format.</p>
              </article>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions about fees and pricing"
              description="A few practical answers before you book or upgrade your counselling package."
            />
            <FAQList items={planFaqs} />
          </div>
        </div>
        <JsonLd id="ld-faq-plans" data={faqSchema(planFaqs)} />
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
          name: 'Career Counselling Fees & Plans in India',
          description: 'Compare GCDA career counselling fees in India for stream selection after 10th, degree selection after 12th, and working professionals.',
          primaryImage: `${SITE_URL}/assets/career-6.webp`,
        })}
      />
    </>
  );
}
