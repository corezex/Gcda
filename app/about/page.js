import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { aboutTimeline, audience, company, statsHome, valuePoints } from '@/data/site';
import { aboutPageSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'About GCDA – Career Counselling Association in India: Our Mission & Team',
  description:
    'Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals through smarter career decisions across India.',
  keywords: [
    'about GCDA',
    'career counselling association India',
    'GCDA mission',
    'career counsellor team',
    'career guidance experts',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    title: 'About GCDA – Career Counselling Association in India',
    description:
      'Learn about GCDA, our certified counsellor team, and our mission to make career guidance accessible across India.',
    url: 'https://gcdassociation.org/about',
    images: [
      {
        url: '/assets/career-8.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling team and mission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GCDA – Career Counselling Association in India',
    description: 'GCDA team, mission, and how we help students and professionals across India.',
  },
};

const aboutBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'About GCDA', url: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />
            <span className="eyebrow">About GCDA</span>
            <h1>Trusted career guidance with a practical, student-first approach.</h1>
            <p className="page-hero-copy">
              GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013. We combine structured assessments, personal counselling, and practical roadmaps to turn confusion into clarity.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-8.png" alt="About GCDA - career counselling session" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            GCDA is a Mumbai-headquartered career counselling association founded in 2013. We work with 50,000+ students, parents, and working professionals across India through 5,000+ certified counsellors, offering personal counselling, career assessments, stream and degree selection, and professional growth mentoring.
          </AnswerBlock>
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
              eyebrow="Our mission"
              title="Helping every learner and professional move ahead with clarity"
              description="A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment."
            />
            <p>
              At GCDA, we believe career guidance should be personalised, realistic, and encouraging. We work with students, families, graduates, and professionals to simplify important choices and reduce confusion at critical turning points.
            </p>
            <p>
              Our counselling style balances emotional reassurance with practical action. The result is a roadmap clients can actually follow.
            </p>
            <p className="inline-link-row">
              Explore our <Link href="/career-counselling/personal-counselling" className="text-link">personal counselling</Link>, <Link href="/career-counselling/career-assessment" className="text-link">career assessment</Link>, <Link href="/career-counselling/stream-selection-guidance" className="text-link">stream selection</Link>, <Link href="/career-counselling/degree-selection-guidance" className="text-link">degree selection</Link>, <Link href="/career-counselling/workshops-seminars" className="text-link">workshops</Link>, <Link href="/career-counselling/working-professionals-guidance" className="text-link">working professional</Link>, and <Link href="/career-certification" className="text-link">career counsellor certification</Link> programmes.
            </p>
          </div>
          <div className="card-grid simple-grid">
            {valuePoints.map((point) => (
              <article className="card" key={point.title}>
                <div className="card-body">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column reverse-mobile">
          <div className="surface-card media-card">
            <img src="/assets/career-6.png" alt="GCDA growth journey" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Our journey"
              title="A growing legacy of career support"
              description="Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem for education and career planning."
            />
            <div className="timeline-list">
              {aboutTimeline.map((item) => (
                <article className="timeline-item" key={item.year}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Who we serve"
              title="Built for real student and career decisions"
              description="Our counselling is most valuable at the moments when choices feel high-stakes and clarity matters most."
            />
            <ul className="bullet-list">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-panel">
            <h3>Visit our Mumbai office</h3>
            <p>{company.addressLine1}</p>
            <p>
              Reach us by phone, email, or WhatsApp to discuss counselling plans, institutional workshops, or guidance programs.
            </p>
            <div className="mini-contact-card">
              <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our credentials"
            title="Why our guidance is trusted across India"
            description="Our methods, content, and recommendations are grounded in established frameworks, validated assessments, and a decade of field experience."
            center
          />
          <div className="card-grid process-grid">
            <article className="card process-card">
              <div className="card-body">
                <h3>Standardised assessment tools</h3>
                <p>
                  We use validated instruments — RIASEC-style interest inventories, Big-Five personality traits, numerical / verbal / abstract aptitude batteries — to translate strengths into fit scores, not personality labels.
                </p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Certified counsellor network</h3>
                <p>
                  Our 5,000+ counsellor network is trained in the GCDA framework and supervised by senior mentors. Every session is structured, written, and reviewed for quality.
                </p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Updated with 2026 data</h3>
                <p>
                  Salary bands, entrance exam cutoffs, college admission criteria, and emerging careers are refreshed every 6 months so the guidance reflects the current Indian market, not stale 2018 data. See our latest analysis in the <Link href="/blog" className="text-link">career guidance blog</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Editorial standards"
              title="How we keep our content honest and useful"
              description="Our blog posts, service descriptions, and city pages follow a strict editorial standard so families can trust what they read."
            />
            <p>
              Every public article on GCDA is reviewed by the editorial team against a checklist: is the data current, is the advice balanced, are the alternatives honestly presented, and is the language accessible to parents and students.
            </p>
            <p>
              We update articles when exams change, salary ranges shift, or new policy rules appear. Each blog post shows a "last updated" date and an author byline. If we get something wrong, we say so and correct it publicly.
            </p>
            <p>
              For a private consultation, the same standard applies: evidence-based recommendations, written session summaries, and a clear action plan you can act on.
            </p>
          </div>
          <div className="info-panel">
            <h3>Editorial checklist</h3>
            <ul className="bullet-list compact">
              <li>Reviewed against 2026 salary and exam data</li>
              <li>Balanced view of all realistic options</li>
              <li>Clear separation of fact vs. opinion</li>
              <li>Family-friendly language (parent + student readable)</li>
              <li>Honest about limitations and when to seek more help</li>
              <li>Original content, no AI-generated filler</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s help you make the next decision easier"
        description="Book a consultation with GCDA to get expert support for the path ahead."
      />

      <JsonLd id="ld-breadcrumb-about" data={breadcrumbSchema(aboutBreadcrumbs)} />
      <JsonLd id="ld-about" data={aboutPageSchema(SITE_URL)} />
    </>
  );
}
