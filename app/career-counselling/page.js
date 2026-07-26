import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { journeySteps, services, siteFaqs } from '@/data/site';
import { faqSchema, howToSchema, serviceSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Counselling Services in India | GCDA',
  description:
    'GCDA offers expert career counselling in India: personal counselling, career assessments, stream and degree selection guidance, workshops, and professional mentoring for students, parents, and working professionals.',
  alternates: { canonical: '/career-counselling' },
  openGraph: {
    title: 'Career Counselling Services in India | GCDA',
    description: 'Personal counselling, career assessments, stream and degree selection, workshops, and professional mentoring across India.',
    url: 'https://gcdassociation.org/career-counselling',
  },
};

export default function CareerCounsellingPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Career Counselling', url: '/career-counselling' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Our services</span>
            <h1>Career counselling that turns uncertainty into a clear roadmap.</h1>
            <p>
              GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth. Every service is designed to move you from confusion to clarity.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <Link href="/plan" className="button button-secondary">View Plans</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.gif" alt="GCDA career counselling services" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            GCDA offers 6 core career counselling services: Personal Counselling, Career Assessment, Workshops &amp; Seminars, Stream Selection Guidance, Degree Selection Guidance, and Working Professional Guidance. All services are available online across India and in-person at our Mumbai office.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we offer"
            title="Career counselling services"
            description="Click any service to learn more about what&apos;s included, who it&apos;s for, and how it works."
            center
          />
          <div className="card-grid service-grid" id="services">
            {services.map((service) => (
              <article className="card service-card" key={service.slug} id={service.slug}>
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-body">
                  <div className="icon-badge">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <details>
                    <summary className="text-link">Learn more →</summary>
                    <div style={{ marginTop: '1rem' }}>
                      <p><strong>For:</strong> {service.idealFor.join('; ')}.</p>
                      <p><strong>Outcomes:</strong> {service.outcomes.join('; ')}.</p>
                      <p><strong>Includes:</strong> {service.includes.join('; ')}.</p>
                      <h4 style={{ marginTop: '1rem', fontSize: '1rem' }}>How it works</h4>
                      <ol style={{ paddingLeft: '1.2rem' }}>
                        {service.steps.map((step) => (
                          <li key={step} style={{ marginBottom: '0.4rem' }}>{step}</li>
                        ))}
                      </ol>
                      <div style={{ marginTop: '1rem' }}>
                        <Link href="/contact" className="button button-primary">Book {service.title}</Link>
                      </div>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
        {services.map((service) => (
          <JsonLd key={`ld-svc-${service.slug}`} id={`ld-svc-${service.slug}`} data={serviceSchema(service)} />
        ))}
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our process"
            title="The same clear counselling framework across services"
            description="Whether you are selecting a stream or planning a professional transition, our process stays focused and structured."
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
        <JsonLd id="ld-howto-services" data={howToSchema('How GCDA Career Counselling Works', journeySteps.map((s) => ({ title: s.title, description: s.description })), 'PT90M')} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title="Common questions about GCDA services" center />
          <FAQList items={siteFaqs} />
        </div>
        <JsonLd id="ld-faq-services" data={faqSchema(siteFaqs)} />
      </section>

      <CTASection
        title="Need help choosing the right service?"
        description="Tell GCDA where you are stuck, and we will guide you to the most suitable service or plan."
      />

      <JsonLd id="ld-breadcrumb-services" data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}
