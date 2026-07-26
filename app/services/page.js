import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import ServiceGrid from '@/components/ServiceGrid';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { journeySteps, services, siteFaqs } from '@/data/site';
import { faqSchema, howToSchema } from '@/data/schema';

export const metadata = {
  title: 'Career Counselling Services in India | GCDA',
  description:
    'Explore GCDA career counselling services in India — personal counselling, career assessments, stream and degree selection guidance, workshops, and professional mentoring for students, parents, and working professionals.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Career Counselling Services in India | GCDA',
    description:
      'Personal counselling, career assessments, stream and degree selection guidance, workshops, and professional mentoring for students, parents, and working professionals across India.',
    url: 'https://gcdassociation.org/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
            <span className="eyebrow">Our services</span>
            <h1>Structured career guidance that turns uncertainty into a roadmap.</h1>
            <p>
              GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth. Every service is designed to move you from confusion to clarity.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.gif" alt="GCDA services" />
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
            eyebrow="Service menu"
            title="Explore all service areas"
            description="Each service has its own focus, but all are designed around better decision-making and practical next steps."
            center
          />
          <ServiceGrid services={services} />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="How we work"
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
          <FAQList items={siteFaqs.slice(0, 4)} />
        </div>
        <JsonLd id="ld-faq-services" data={faqSchema(siteFaqs.slice(0, 4))} />
      </section>

      <CTASection
        title="Need help choosing the right service?"
        description="Tell GCDA where you are stuck, and we will guide you to the most suitable service or plan."
      />
    </>
  );
}
