import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import CityCard from '@/components/CityCard';
import AnswerBlock from '@/components/AnswerBlock';
import { cities, cityTiers } from '@/data/cities';
import { company } from '@/data/site';

export const metadata = {
  title: 'Career Counselling Across India | GCDA City Pages',
  description:
    'GCDA provides expert career counselling, career assessments, stream and degree selection guidance, and professional mentoring in 30+ Indian cities. Find your city and book a session.',
  alternates: { canonical: '/cities' },
  openGraph: {
    title: 'Career Counselling Across India | GCDA City Pages',
    description:
      'GCDA provides expert career counselling and career guidance in 30+ Indian cities. Find your city and book a session.',
    url: 'https://gcdassociation.org/cities',
  },
};

export default function CitiesHubPage() {
  // Group cities by tier
  const tier1 = cities.filter((c) => c.tier === 'tier1');
  const tier2 = cities.filter((c) => c.tier === 'tier2');
  const tier3 = cities.filter((c) => c.tier === 'tier3');

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Career Counselling in India</span>
            <h1>Find GCDA career counselling in your city.</h1>
            <p>
              GCDA offers structured career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring across 30+ Indian cities. Pick your city to see locally relevant guidance, top colleges, entrance exams, and city-specific FAQs.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.gif" alt="Career counselling across India" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="All India"
            title="Career counselling across India"
            description="Whether you are in a metro, a Tier 2 city, or a smaller emerging hub, GCDA offers both online video counselling across India and in-person sessions in Mumbai."
          />
          <AnswerBlock>
            GCDA career counselling is available across 30+ Indian cities — including Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, and Indore. We offer online video sessions across India and in-person sessions at our Mumbai office.
          </AnswerBlock>
        </div>
      </section>

      {[
        { tier: 'tier1', list: tier1, label: cityTiers.tier1 },
        { tier: 'tier2', list: tier2, label: cityTiers.tier2 },
        { tier: 'tier3', list: tier3, label: cityTiers.tier3 },
      ].map(({ tier, list, label }) => (
        <section key={tier} className="section">
          <div className="container">
            <SectionHeader
              eyebrow={label}
              title={`${label.split(' ')[0]} ${label.split(' ')[1] || 'Cities'}`}
              description={
                tier === 'tier1'
                  ? 'Metros with the highest demand for engineering, medical, MBA, design, and product careers.'
                  : tier === 'tier2'
                    ? 'Major cities with strong education hubs and growing demand for professional guidance.'
                    : 'Emerging cities where families and students increasingly seek structured career guidance.'
              }
            />
            <div className="card-grid city-grid">
              {list.map((city) => (
                <CityCard key={city.slug} city={city} tierLabel={label} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Don’t see your city?"
        description="GCDA offers online career counselling across India. Speak to a counsellor from any city in India and get the same quality of structured guidance."
      />
    </>
  );
}
