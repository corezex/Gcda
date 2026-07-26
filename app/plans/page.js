import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import PlanCards from '@/components/PlanCards';
import SectionHeader from '@/components/SectionHeader';
import { plans, siteFaqs } from '@/data/site';

export const metadata = {
  title: 'Plans',
  description: 'Compare GCDA counselling plans for stream selection, degree guidance, and working professionals.',
};

export default function PlansPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Career counselling plans</span>
            <h1>Choose the plan that matches your current stage.</h1>
            <p>
              For students and professionals, our career assessment and counselling plans help narrow options and identify the right path based on interests, skills, values, and personality.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-6.png" alt="Career counselling plans" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Plans"
            title="Simple, transparent pricing"
            description="Plan names, pricing, and included features are kept aligned with the current GCDA plan structure."
            center
          />
          <PlanCards plans={plans} />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Which plan should you choose?"
              title="A quick way to decide"
              description="Each plan builds on the previous one, so you can choose based on your current need and level of support."
            />
            <div className="stack-list">
              <article className="feature-row">
                <h3>Stream Selector</h3>
                <p>Best for school students deciding between Science, Commerce, Arts, and future-fit academic direction.</p>
              </article>
              <article className="feature-row">
                <h3>Degree Selector</h3>
                <p>Ideal when students need course, degree, and college-level clarity after school.</p>
              </article>
              <article className="feature-row">
                <h3>Working Professionals</h3>
                <p>Designed for employed individuals who want smarter positioning, transitions, and growth planning.</p>
              </article>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions about plans"
              description="A few practical answers before you book or upgrade your counselling package."
            />
            <FAQList items={siteFaqs.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CTASection
        title="Still unsure which plan fits you best?"
        description="Talk to GCDA and we will help you choose the right counselling path before you book."
      />
    </>
  );
}
