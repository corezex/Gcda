import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { cities, getAllCitySlugs, getCityBySlug } from '@/data/cities';
import { services, company } from '@/data/site';
import { cityServiceSchema, faqSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export function generateStaticParams() {
  return getAllCitySlugs();
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return { title: 'City not found' };
  }

  const title = `Career Counselling in ${city.name} | GCDA`;
  const description = `Expert career counselling, career assessments, stream and degree selection, and professional mentoring in ${city.name}, ${city.state}. Online sessions across ${city.name} and in-person sessions via our Mumbai office.`;

  return {
    title,
    description,
    keywords: [
      `career counselling in ${city.name}`,
      `career counsellor ${city.name}`,
      `career guidance ${city.name}`,
      `best career counsellor in ${city.name}`,
      `${city.name} career counselling`,
      `stream selection ${city.name}`,
      `degree selection ${city.name}`,
    ],
    alternates: { canonical: `/cities/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/cities/${city.slug}`,
    },
  };
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();

  const pageUrl = `${SITE_URL}/cities/${city.slug}`;
  const faqItems = city.localFaqs || [];

  // 3 related cities from the same tier (excluding the current one)
  const relatedCities = cities
    .filter((c) => c.tier === city.tier && c.slug !== city.slug)
    .slice(0, 3);

  // Top 3 services shown in the "Services in this city" section
  const topServices = services.slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: city.name, url: `/cities/${city.slug}` },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{city.tier === 'tier1' ? 'Tier 1 Metro' : city.tier === 'tier2' ? 'Tier 2 City' : 'Emerging City'} • {city.state}</span>
            <h1>Career Counselling in {city.name}, {city.state}</h1>
            <p>{city.tagline} {city.knownFor ? `Known for ${city.knownFor.toLowerCase()}.` : ''}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.gif" alt={`Career counselling in ${city.name}`} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnswerBlock>
            GCDA provides career counselling in {city.name} for school students, graduates, parents, and working professionals. We offer {city.office}. Sessions are available online across {city.name} and {city.state}, with structured assessments, stream and degree selection, and professional growth mentoring.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={`Why ${city.name} families choose GCDA`}
              title={`Career guidance built for ${city.name}`}
              description={`A career decision in ${city.name} has to be practical, not aspirational. Here is what makes our guidance work for ${city.name} students, parents, and professionals.`}
            />
            <div className="stack-list">
              <article className="feature-row">
                <h3>Local context for students</h3>
                <p>{city.studentNote}</p>
              </article>
              <article className="feature-row">
                <h3>Local context for professionals</h3>
                <p>{city.professionalNote}</p>
              </article>
              <article className="feature-row">
                <h3>How we deliver in {city.name}</h3>
                <p>{city.office}</p>
              </article>
            </div>
          </div>
          <div className="info-panel">
            <h3>{city.name} at a glance</h3>
            <ul className="bullet-list compact">
              <li><strong>State / Region:</strong> {city.state}, {city.region}</li>
              <li><strong>Population:</strong> {city.population}</li>
              <li><strong>Top industries:</strong> {city.industries}</li>
              <li><strong>Popular areas:</strong> {city.landmarks}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Top colleges"
              title={`Popular colleges in ${city.name}`}
              description="A non-exhaustive list of institutions our students typically shortlist. Use this as a starting point, not a final answer."
            />
            <ul className="bullet-list">
              {city.topColleges.map((college) => (
                <li key={college}>{college}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow="Entrance exams"
              title={`Exams that matter in ${city.name}`}
              description="Most {city.name} students plan for a mix of national and state-level exams. We help you shortlist the right ones."
            />
            <ul className="bullet-list">
              {city.topExams.map((exam) => (
                <li key={exam}>{exam}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={`Services in ${city.name}`}
            title={`GCDA services available in ${city.name}`}
            description="All GCDA services are available to {city.name} students and professionals — online and, where applicable, in-person at our Mumbai office."
            center
          />
          <div className="card-grid service-grid">
            {topServices.map((service) => (
              <article className="card service-card" key={service.slug}>
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-body">
                  <div className="icon-badge">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className="text-link">Explore service →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <Link href="/services" className="text-link">See all GCDA services →</Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow={`FAQs for ${city.name}`}
            title={`Questions about career counselling in ${city.name}`}
            description="Common questions from {city.name} students, parents, and professionals."
            center
          />
          {faqItems.length > 0 ? <FAQList items={faqItems} /> : null}
          <JsonLd id={`ld-faq-${city.slug}`} data={faqSchema(faqItems)} />
        </div>
      </section>

      {relatedCities.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Explore nearby"
              title={`Other cities you may be interested in`}
              description="Explore GCDA career counselling in other Indian cities of similar size or profile."
            />
            <div className="card-grid city-grid">
              {relatedCities.map((related) => (
                <article className="card city-card" key={related.slug}>
                  <div className="card-body">
                    <span className="mini-label">{related.state}</span>
                    <h3><Link href={`/cities/${related.slug}`}>{related.name}</Link></h3>
                    <p className="city-blurb">{related.tagline}</p>
                    <Link href={`/cities/${related.slug}`} className="text-link">Explore {related.name} →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Ready to plan your career in ${city.name}?`}
        description={`Speak to a GCDA counsellor and get structured guidance tailored to ${city.name} — from assessments to a clear roadmap.`}
      />

      <JsonLd id={`ld-service-${city.slug}`} data={cityServiceSchema(city, pageUrl)} />
    </>
  );
}
