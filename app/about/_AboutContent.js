// Localized About Content
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { aboutTimeline, audience, company, statsHome, valuePoints } from '@/data/site';
import { aboutPageSchema, breadcrumbSchema } from '@/data/schema';
import { TRANSLATIONS, localizePath } from '@/data/i18n';

const SITE_URL = 'https://gcdassociation.org';

function AboutPage({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const lp = (p) => localizePath(p, lang);

  const aboutBreadcrumbs = [
    { name: 'Home', url: lp('/') },
    { name: 'About GCDA', url: lp('/about') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: lp('/') }, { name: 'About', url: lp('/about') }]} />
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h1>{t.about.title}</h1>
            <p className="page-hero-copy">{t.about.desc}</p>
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
              eyebrow={t.about.missionEyebrow}
              title={t.about.missionTitle}
              description={t.about.missionDesc}
            />
            <p>
              At GCDA, we believe career guidance should be personalised, realistic, and encouraging. We work with students, families, graduates, and professionals to simplify important choices and reduce confusion at critical turning points.
            </p>
            <p>
              Our counselling style balances emotional reassurance with practical action. The result is a roadmap clients can actually follow.
            </p>
            <p className="inline-link-row">
              Explore our <Link href={lp('/career-counselling/personal-counselling')} className="text-link">personal counselling</Link>, <Link href={lp('/career-counselling/career-assessment')} className="text-link">career assessment</Link>, <Link href={lp('/career-counselling/stream-selection-guidance')} className="text-link">stream selection</Link>, <Link href={lp('/career-counselling/degree-selection-guidance')} className="text-link">degree selection</Link>, <Link href={lp('/career-counselling/workshops-seminars')} className="text-link">workshops</Link>, <Link href={lp('/career-counselling/working-professionals-guidance')} className="text-link">working professional</Link>, and <Link href={lp('/career-certification')} className="text-link">career counsellor certification</Link> programmes.
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
              eyebrow={t.about.journeyEyebrow}
              title={t.about.journeyTitle}
              description={t.about.journeyDesc}
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
                <p>We use validated instruments — RIASEC-style interest inventories, Big-Five personality traits, numerical / verbal / abstract aptitude batteries — to translate strengths into fit scores, not personality labels.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Certified counsellor network</h3>
                <p>Our 5,000+ counsellor network is trained in the GCDA framework and supervised by senior mentors. Every session is structured, written, and reviewed for quality.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Updated with 2026 data</h3>
                <p>Salary bands, entrance exam cutoffs, college admission criteria, and emerging careers are refreshed every 6 months. See our latest analysis in the <Link href={lp('/blog')} className="text-link">career guidance blog</Link>.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s help you make the next decision easier"
        description="Book a consultation with GCDA to get expert support for the path ahead."
        lang={lang}
      />

      <JsonLd id="ld-breadcrumb-about" data={breadcrumbSchema(aboutBreadcrumbs)} />
      <JsonLd id="ld-about" data={aboutPageSchema(SITE_URL)} />
    </>
  );
}

export default AboutPage;
