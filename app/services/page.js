import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import ServiceGrid from '@/components/ServiceGrid';
import { journeySteps, services } from '@/data/site';

export const metadata = {
  title: 'Services',
  description: 'Explore GCDA services including personal counselling, career assessments, workshops, stream selection, and professional guidance.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Our services</span>
            <h1>Structured guidance that turns uncertainty into a roadmap.</h1>
            <p>
              GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth. Every service is designed to move from confusion to clarity.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.gif" alt="GCDA services" />
          </div>
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
      </section>

      <CTASection
        title="Need help choosing the right service?"
        description="Tell GCDA where you are stuck, and we will guide you to the most suitable service or plan."
      />
    </>
  );
}
