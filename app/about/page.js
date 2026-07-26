import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import { aboutTimeline, audience, company, statsHome, valuePoints } from '@/data/site';

export const metadata = {
  title: 'About GCDA – Career Counselling Association in India',
  description:
    'Learn about GCDA – Global Career Development Association, our mission since 2013, and how we guide students, parents, and working professionals through smarter career decisions across India.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About GCDA – Career Counselling Association in India',
    description:
      'Learn about GCDA, our mission, and how we guide students and professionals through smarter career decisions.',
    url: 'https://gcdassociation.org/about',
  },
};

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
            <img src="/assets/career-1.png" alt="About GCDA" />
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
            <img src="/assets/career-5.png" alt="GCDA timeline" />
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

      <CTASection
        title="Let’s help you make the next decision easier"
        description="Book a consultation with GCDA to get expert support for the path ahead."
      />
    </>
  );
}
