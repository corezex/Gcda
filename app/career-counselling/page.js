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
                  <h3>
                    <Link href={`/career-counselling/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/career-counselling/${service.slug}`} className="text-link">Learn more →</Link>
                </div>
              </article>
            ))}

            {/* Career Counselling Certification — separate programme */}
            <article className="card service-card" id="career-certification">
              <div className="service-card-media">
                <img src="/assets/career-7.png" alt="Career Counselling Certification" />
              </div>
              <div className="card-body">
                <div className="icon-badge">🎓</div>
                <h3>
                  <Link href="/career-certification">Career Counselling Certification</Link>
                </h3>
                <p>
                  A comprehensive offline + online certification programme for aspiring and practising career counsellors. Build the skills to guide students and professionals with confidence.
                </p>
                <Link href="/career-certification" className="text-link">Learn more →</Link>
              </div>
            </article>
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
