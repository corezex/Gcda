import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import SectionHeader from '@/components/SectionHeader';
import { getServiceBySlug, services } from '@/data/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: 'Service not found' };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">{service.title}</span>
            <h1>{service.heroDescription}</h1>
            <p>{service.shortDescription}</p>
          </div>
          <div className="surface-card media-card">
            <img src={service.image} alt={service.title} />
          </div>
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
            <img src="/assets/career-8.png" alt="Service process" />
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
                  <p>{step}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title={`Questions about ${service.title}`} center />
          <FAQList items={service.faqs} />
        </div>
      </section>

      <CTASection
        title={`Ready to book ${service.title.toLowerCase()}?`}
        description="Connect with GCDA and we will guide you toward the right next step."
      />
    </>
  );
}
