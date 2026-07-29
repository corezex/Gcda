import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import ServiceGrid from '@/components/ServiceGrid';
import TestimonialGrid from '@/components/TestimonialGrid';
import FAQList from '@/components/FAQList';
import CTASection from '@/components/CTASection';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { audience, company, journeySteps, services, siteFaqs, statsHome, testimonials, valuePoints } from '@/data/site';
import { faqSchema, howToSchema } from '@/data/schema';

export const metadata = {
  title: 'Career Counselling & Career Guidance in India',
  description:
    'Expert career counselling in India – assessments, stream & degree guidance for students, parents & professionals. Online & in-person.',
  alternates: { canonical: '/' },
  keywords: [
    'career counselling India',
    'career counselling near me',
    'career assessment',
    'career guidance',
    'online career counselling',
  ],
  openGraph: {
    title: 'Career Counselling & Career Guidance in India',
    description:
      'Expert career counselling India – assessments, stream & degree guidance for students, parents & professionals.',
    url: 'https://gcdassociation.org/',
    images: [
      {
        url: '/assets/homepage-hero-banner.webp',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling homepage hero banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling & Career Guidance in India',
    description: 'Expert career counselling India – assessments, stream & degree guidance. Online & in-person.',
    images: ['/assets/homepage-hero-banner.webp'],
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Empowering careers since 2013</span>
            <h1>Career counselling that turns confusion into a clear plan.</h1>
            <p className="page-hero-copy">
              From stream selection after 10th and degree planning after 12th to professional growth and career transitions, GCDA helps students, parents, and working professionals across India make confident, well-informed career decisions.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Free Consultation</Link>
              <Link href="/career-counselling" className="button button-secondary">Explore Services</Link>
            </div>
            <ul className="hero-proof" aria-label="Trust signals">
              <li>98% satisfied clients</li>
              <li>50K+ career sessions</li>
              <li>Online + in-person</li>
            </ul>
          </div>
          <div className="hero-visual surface-card">
            <Image
              src="/assets/homepage-hero-banner.webp"
              alt="GCDA career counselling session with student and parent"
              width={1536}
              height={1024}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
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
              description="We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork."
            />
            <AnswerBlock>
              GCDA is one of India&apos;s trusted career counselling and career guidance associations, helping 50,000+ students, parents, and working professionals make clear education and career decisions through assessments, structured counselling, and practical roadmaps since 2013.
            </AnswerBlock>
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
            <Image
              src="/assets/homepage-about-section.webp"
              alt="GCDA counsellor guiding a student and parent"
              width={1536}
              height={1024}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
            />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Why families trust GCDA"
            title="Trust signals that matter before you book"
            description="We use real process signals — not review-star markup — to help students, parents, and professionals understand why our guidance is dependable."
            center
          />
          <div className="card-grid process-grid trust-grid">
            <article className="card process-card">
              <div className="card-body">
                <h3>Mumbai-based since 2013</h3>
                <p>GCDA has been supporting Indian students, parents, and professionals for over a decade with a structured, guidance-first approach.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>50K+ career sessions delivered</h3>
                <p>Our experience comes from thousands of real education and career decisions across stream selection, degree planning, and working-professional transitions.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Assessment-led, not guesswork-led</h3>
                <p>We use structured assessments, mentor conversations, and practical option shortlists so recommendations are grounded in evidence rather than opinion alone.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Transparent plans and real contact details</h3>
                <p>Pricing, address, phone, WhatsApp, legal pages, and contact methods are visible on the site so families know exactly how to reach and evaluate us.</p>
              </div>
            </article>
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
            <Image
              src="/assets/service-illustration.webp"
              alt="Services illustration"
              width={1200}
              height={896}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Who we help"
              title="Support for students, parents, graduates, and professionals"
              description="Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence."
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
        <JsonLd id="ld-howto-journey" data={howToSchema('How GCDA Career Counselling Works', journeySteps.map((s) => ({ title: s.title, description: s.description })), 'PT90M')} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="What our clients say"
            description="Families, students, and professionals across India trust GCDA for clearer, more structured guidance. Selected testimonials are anonymized to protect client privacy."
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
        <JsonLd id="ld-faq-home" data={faqSchema(siteFaqs)} />
      </section>

      <CTASection
        title="Ready to shape your career with clarity?"
        description="Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
      />
    </>
  );
}
