import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import SeminarTypesGrid from '@/components/SeminarTypesGrid';
import JsonLd from '@/components/JsonLd';
import { services, company } from '@/data/site';
import { SEMINAR_TYPES } from '@/data/seminars';
import { faqSchema, breadcrumbSchema, howToSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service not found' };

  const title = `${service.title} | GCDA Career Counselling`;
  const description = `${service.shortDescription} Available online across India and in-person at our Mumbai office.`;
  const url = `${SITE_URL}/career-counselling/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/career-counselling/${service.slug}` },
    openGraph: { title, description, url, type: 'article' },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const url = `${SITE_URL}/career-counselling/${service.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/career-counselling' },
    { name: service.title, url: `/career-counselling/${service.slug}` },
  ];

  // 3 related services
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Service</span>
            <h1>{service.heroDescription}</h1>
            <p className="page-hero-copy">{service.shortDescription}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book {service.title}</Link>
              <Link href="/plan" className="button button-secondary">View Plans</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {service.title} is a structured GCDA service that combines personalised counselling, relevant assessments, and a practical action plan. It is delivered one-on-one, online across India and in-person at our Mumbai office, and is ideal for {service.idealFor[0].toLowerCase()} and similar profiles.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Who this is for"
              title={`Is ${service.title.toLowerCase()} the right fit for you?`}
              description="If these situations sound familiar, this service can help you move forward with more confidence."
            />
            <ul className="bullet-list">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-panel">
            <h3>Expected outcomes</h3>
            <ul className="bullet-list compact">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column reverse-mobile">
          <div className="surface-card media-card">
            <img src="/assets/career-8.png" alt="Service in action" />
          </div>
          <div>
            <SectionHeader
              eyebrow="What is included"
              title="What you can expect from the service"
              description="Every engagement focuses on clarity, planning, and decision support rather than generic advice."
            />
            <ul className="bullet-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 types of seminars — only on the Workshops & Seminars service page */}
      {service.slug === 'workshops-seminars' ? (
        <section className="section" id="seminar-types">
          <div className="container">
            <SectionHeader
              eyebrow="4 seminar tracks"
              title="Types of seminars and workshops we offer"
              description="GCDA runs 4 core seminar tracks. Each is structured, expert-led, and built around real student and professional outcomes — available in-person at your campus or online across India."
              center
            />
            <SeminarTypesGrid seminars={SEMINAR_TYPES} city="India" />
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Service journey"
            title="How this service usually works"
            description="A straightforward process helps keep counselling practical and outcome-oriented."
            center
          />
          <div className="card-grid process-grid">
            {service.steps.map((step, index) => (
              <article className="card process-card" key={step}>
                <div className="card-body">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{`Step ${index + 1}`}</h3>
                  <p>{step}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <JsonLd id={`ld-howto-${service.slug}`} data={howToSchema(`How ${service.title} Works at GCDA`, service.steps, 'PT90M')} />
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title={`Questions about ${service.title}`} center />
          <FAQList items={service.faqs} />
        </div>
        <JsonLd id={`ld-faq-${service.slug}`} data={faqSchema(service.faqs)} />
      </section>

      {related.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Related services"
              title="You may also want to explore"
              description="Most clients combine this service with related offerings to get a complete plan."
            />
            <div className="card-grid service-grid">
              {related.map((rel) => (
                <article className="card service-card" key={rel.slug}>
                  <div className="service-card-media">
                    <img src={rel.image} alt={rel.title} />
                  </div>
                  <div className="card-body">
                    <div className="icon-badge">{rel.icon}</div>
                    <h3>{rel.title}</h3>
                    <p>{rel.shortDescription}</p>
                    <Link href={`/career-counselling/${rel.slug}`} className="text-link">Explore {rel.title.toLowerCase()} →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Ready to book ${service.title.toLowerCase()}?`}
        description="Connect with GCDA and we will guide you toward the right next step."
      />

      <JsonLd id={`ld-breadcrumb-${service.slug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id={`ld-service-${service.slug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: service.title,
          description: service.shortDescription,
          serviceType: 'Career Counselling',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'India' },
          url,
        }}
      />
    </>
  );
}
