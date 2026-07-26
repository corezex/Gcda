import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import ServiceGrid from '@/components/ServiceGrid';
import TestimonialGrid from '@/components/TestimonialGrid';
import FAQList from '@/components/FAQList';
import CTASection from '@/components/CTASection';
import { audience, company, journeySteps, services, siteFaqs, statsHome, testimonials, valuePoints } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Empowering careers since 2013</span>
            <h1>We help you push yourself beyond your limit.</h1>
            <p className="hero-copy">
              From stream selection and degree planning to professional growth, GCDA helps students and working professionals make clear, confident career decisions.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Get Started</Link>
              <Link href="/services" className="button button-secondary">Explore Services</Link>
            </div>
            <div className="hero-proof">
              <span>98% satisfied clients</span>
              <span>10K+ students guided</span>
              <span>Face-to-face and online counselling</span>
            </div>
          </div>
          <div className="hero-visual surface-card">
            <img src="/assets/hero-illustration.gif" alt="Career guidance illustration" />
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
              eyebrow="About GCDA"
              title="Personalised career guidance for every stage of growth"
              description="We believe your career path should reflect your strengths, interests, and ambitions—not just pressure, trends, or guesswork."
            />
            <div className="stack-list">
              {valuePoints.map((point) => (
                <article className="feature-row" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
            <Link href="/about" className="text-link">Learn more about GCDA →</Link>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-2.png" alt="Career counselling session" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Core services designed to bring clarity and direction"
            description="Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support."
            center
          />
          <ServiceGrid services={services} limit={6} />
        </div>
      </section>

      <section className="section">
        <div className="container two-column reverse-mobile">
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.gif" alt="Services illustration" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Who we help"
              title="Support for students, parents, graduates, and professionals"
              description="Whether you are choosing a stream, selecting a degree, or preparing for a career move, GCDA helps you decide with confidence."
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
            eyebrow="Our process"
            title="A simple 3-step journey"
            description="We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion."
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
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="What our clients say"
            description="Families, students, and professionals trust GCDA for clear and supportive guidance."
            center
          />
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="FAQs"
              title="Common questions about counselling and plans"
              description="A few answers to help you understand how GCDA works before you book your consultation."
            />
            <FAQList items={siteFaqs} />
          </div>
          <div className="info-panel">
            <h3>Need direct help?</h3>
            <p>
              Speak to the GCDA team to discuss your requirement, compare plans, or book a session.
            </p>
            <div className="mini-contact-card">
              <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.addressLine1}</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to shape your career with clarity?"
        description="Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance."
      />
    </>
  );
}
