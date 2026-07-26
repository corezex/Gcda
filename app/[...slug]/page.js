import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import {
  STATES,
  CITIES_BY_STATE,
  getCity,
  getAllCityUrls,
  getStateBySlug,
} from '@/data/indiaLocations';
import { services, company } from '@/data/site';
import { faqSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

/**
 * Unified catch-all route for all dynamic city/state pages.
 * URL patterns:
 *   /<state>                    -> state hub page
 *   /<state>/career-counsellor-<city>  -> city page
 *
 * Using [...slug] catch-all (instead of nested [state]/career-counsellor-[city])
 * gives us reliable params.slug[] = ['maharashtra', 'career-counsellor-mumbai']
 * with no prefix-concatenation quirks, and a single source of truth.
 */

export function generateStaticParams() {
  const params = [];
  // State hub pages
  for (const s of STATES) {
    params.push({ slug: [s.slug] });
  }
  // City pages at the live URL pattern
  for (const u of getAllCityUrls()) {
    params.push({ slug: [u.stateSlug, `career-counsellor-${u.citySlug}`] });
  }
  return params;
}

function parseSlug(slug) {
  if (!slug || slug.length === 0) return null;
  // State hub: /<state>
  if (slug.length === 1) {
    const state = getStateBySlug(slug[0]);
    if (!state) return null;
    return { type: 'state', state, stateSlug: slug[0] };
  }
  // City page: /<state>/career-counsellor-<city>
  if (slug.length === 2 && slug[1].startsWith('career-counsellor-')) {
    const citySlug = slug[1].replace(/^career-counsellor-/, '');
    const city = getCity(slug[0], citySlug);
    const state = getStateBySlug(slug[0]);
    if (!city || !state) return null;
    return { type: 'city', city, citySlug, state, stateSlug: slug[0] };
  }
  return null;
}

export function generateMetadata({ params }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Not found' };

  if (parsed.type === 'state') {
    const { state, stateSlug } = parsed;
    const cities = CITIES_BY_STATE[stateSlug] || [];
    const cityCount = cities.length;
    const topCities = cities.slice(0, 5).map((c) => c.name).join(', ');
    return {
      title: `Career Counselling in ${state.name} | GCDA`,
      description: `GCDA offers career counselling and career assessments in ${cityCount} ${state.name} cities including ${topCities}. Online sessions across ${state.name} and in-person guidance via our Mumbai office.`,
      alternates: { canonical: `/${stateSlug}` },
      openGraph: {
        title: `Career Counselling in ${state.name} | GCDA`,
        description: `GCDA offers career counselling and career assessments in ${cityCount} ${state.name} cities.`,
        url: `${SITE_URL}/${stateSlug}`,
      },
    };
  }

  // City page
  const { city, citySlug, state, stateSlug } = parsed;
  const stateNameFull = state.name;
  const title = `Career Counsellor in ${city.name}, ${stateNameFull}`;
  const description = `Looking for a career counsellor in ${city.name}? GCDA offers online career counselling, career assessments, stream & degree selection, and professional mentoring for students, parents, and working professionals in ${city.name}, ${state.name}.`;
  const url = `${SITE_URL}/${stateSlug}/career-counsellor-${citySlug}`;
  return {
    title,
    description,
    keywords: [
      `career counsellor in ${city.name}`,
      `career counselling ${city.name}`,
      `career counsellor near ${city.name}`,
      `best career counsellor ${city.name}`,
      `career guidance ${city.name}`,
      `career counselling in ${state.name}`,
    ],
    alternates: { canonical: `/${stateSlug}/career-counsellor-${citySlug}` },
    openGraph: { title, description, url, type: 'article' },
  };
}

export default function DynamicPage({ params }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();

  if (parsed.type === 'state') {
    return <StateHub stateSlug={parsed.stateSlug} state={parsed.state} />;
  }
  return (
    <CityPage
      stateSlug={parsed.stateSlug}
      citySlug={parsed.citySlug}
      city={parsed.city}
      state={parsed.state}
    />
  );
}

/* ----------------- State Hub ----------------- */
function StateHub({ stateSlug, state }) {
  const cities = CITIES_BY_STATE[stateSlug] || [];
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'India', url: '/cities' },
    { name: state.name, url: `/${stateSlug}` },
  ];
  const stateFaqs = [
    {
      q: `Does GCDA offer career counselling in ${state.name}?`,
      a: `Yes. GCDA provides online career counselling across ${state.name} and in-person sessions via our Mumbai office. We cover all major cities in ${state.name} including ${cities.slice(0, 3).map((c) => c.name).join(', ')}.`,
    },
    {
      q: `Which cities in ${state.name} do you cover?`,
      a: `We currently serve ${cities.length} cities across ${state.name}. Use the city list below to find your location, or contact us if your city is not listed.`,
    },
    {
      q: `Is online career counselling effective for students in ${state.name}?`,
      a: `Yes. Most of our sessions are conducted over secure video calls, with assessments, mentor discussions, and parent alignment meetings all working seamlessly online.`,
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{state.region}</span>
            <h1>Career Counselling in {state.name}</h1>
            <p>
              Looking for career counselling in {state.name}? GCDA offers expert, assessment-led career guidance for students, graduates, parents, and working professionals across {cities.length} {state.name} cities. Sessions are available online across {state.name} and in-person at our Mumbai office.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.gif" alt={`Career counselling in ${state.name}`} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            GCDA provides career counselling in {state.name} across {cities.length} cities. We offer online video sessions for students, parents, and working professionals in {state.name}, plus in-person sessions at our Mumbai office. Plans start at Rs. 2,999 for the Stream Selector and include assessments, mentor sessions, and a personalised roadmap.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={`${state.name} cities`}
            title={`Career counselling across ${state.name}`}
            description={`We serve ${cities.length} cities in ${state.name}. Click any city to see locally relevant guidance, top colleges, entrance exams, and city-specific FAQs.`}
          />
          {cities.length > 0 ? (
            <div className="card-grid city-grid">
              {cities.map((c) => {
                const cSlug = c.name.toLowerCase().replace(/['\s,&.]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                return (
                  <article className="card city-card" key={cSlug}>
                    <div className="card-body">
                      {c.tier === 'tier1' ? <span className="mini-label">Metro</span> : c.tier === 'tier2' ? <span className="mini-label">Major City</span> : <span className="mini-label">City</span>}
                      <h3>
                        <Link href={`/${stateSlug}/career-counsellor-${cSlug}`}>Career Counsellor in {c.name}</Link>
                      </h3>
                      <p className="city-state">{c.district} • {c.population}</p>
                      <p className="city-blurb">{c.tagline}</p>
                      <Link href={`/${stateSlug}/career-counsellor-${cSlug}`} className="text-link">
                        Explore {c.name} →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p>City data for {state.name} is being added. Contact us and we will arrange a session.</p>
          )}
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title={`About career counselling in ${state.name}`} center />
          <FAQList items={stateFaqs} />
        </div>
        <JsonLd id={`ld-faq-state-${stateSlug}`} data={faqSchema(stateFaqs)} />
      </section>

      <JsonLd id={`ld-breadcrumb-state-${stateSlug}`} data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}

/* ----------------- City Page ----------------- */
function CityPage({ stateSlug, citySlug, city, state }) {
  const stateName = state.name;
  const cityStateName = state.name;
  const pageUrl = `${SITE_URL}/${stateSlug}/career-counsellor-${citySlug}`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: stateName, url: `/${stateSlug}` },
    { name: `Career Counsellor ${city.name}`, url: pageUrl },
  ];

  const otherCities = (state.cities || [])
    .filter((c) => c !== citySlug)
    .slice(0, 6);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">
              {stateName || city.district} • {city.tier === 'tier1' ? 'Tier 1 Metro' : city.tier === 'tier2' ? 'Tier 2 City' : 'Emerging City'}
            </span>
            <h1>Career Counsellor in {city.name}, {cityStateName}</h1>
            <p>
              Looking for a trusted career counsellor in {city.name}? GCDA provides structured, assessment-led career counselling, stream and degree selection, JEE/NEET planning, MBA guidance, and professional mentoring for students, graduates, and working professionals in {city.name}, {stateName}.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span>Online sessions across {city.name}</span>
              <span>{city.tier === 'tier1' ? 'In-person nearby' : 'Mumbai office in-person'}</span>
              <span>50K+ career sessions delivered</span>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.gif" alt={`Career counselling in ${city.name}`} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            GCDA provides career counselling in {city.name}, {cityStateName} for students after 10th and 12th, graduates, parents, and working professionals. We deliver online video sessions across {city.name} and {city.district}, with structured assessments, stream &amp; degree selection, JEE/NEET planning, and one-on-one mentor sessions. Pricing starts at Rs. 2,999 for the Stream Selector plan.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={`Why ${city.name} families choose GCDA`}
              title={`Career guidance built for ${city.name}`}
              description="We pair assessment data with real mentor experience, so the plan you receive fits your strengths, location, and family context."
            />
            <div className="stack-list">
              <article className="feature-row">
                <h3>For students in {city.name}</h3>
                <p>{city.studentNote}</p>
              </article>
              <article className="feature-row">
                <h3>For working professionals in {city.name}</h3>
                <p>{city.professionalNote}</p>
              </article>
              <article className="feature-row">
                <h3>How we deliver in {city.name}</h3>
                <p>{city.deliveryNote}</p>
              </article>
            </div>
          </div>
          <div className="info-panel">
            <h3>{city.name} at a glance</h3>
            <ul className="bullet-list compact">
              <li><strong>State:</strong> {cityStateName}</li>
              <li><strong>District:</strong> {city.district}</li>
              <li><strong>Population:</strong> {city.population}</li>
              <li><strong>Region:</strong> {state.region}</li>
              <li><strong>Top industries:</strong> {city.industries}</li>
              <li><strong>Landmarks:</strong> {city.landmarks}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Colleges"
              title={`Top colleges near ${city.name}`}
              description="A non-exhaustive list of institutions our students in and around {city.name} typically shortlist."
            />
            {city.topColleges.length > 0 ? (
              <ul className="bullet-list">
                {city.topColleges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : (
              <p>{city.name} students typically consider a mix of local and regional colleges.</p>
            )}
          </div>
          <div>
            <SectionHeader
              eyebrow="Entrance exams"
              title={`Exams that matter in ${city.name}`}
              description="Most {city.name} students plan for a mix of national and state-level exams."
            />
            {city.topExams.length > 0 ? (
              <ul className="bullet-list">
                {city.topExams.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            ) : (
              <p>For {city.name}, the most common entrance tracks are JEE Main, NEET, state CETs, and CAT.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="GCDA services available to you"
            description="All services are available online to anyone in India, including {city.name}."
            center
          />
          <div className="card-grid service-grid">
            {services.slice(0, 3).map((service) => (
              <article className="card service-card" key={service.slug}>
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-body">
                  <div className="icon-badge">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/career-counselling#${service.slug}`} className="text-link">Explore {service.title.toLowerCase()} →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <Link href="/career-counselling" className="text-link">See all GCDA services →</Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="FAQs"
            title={`Questions about career counselling in ${city.name}`}
            description="Common questions from students, parents, and working professionals in {city.name}."
            center
          />
          <FAQList items={city.faqs} />
        </div>
        <JsonLd id={`ld-faq-${stateSlug}-${citySlug}`} data={faqSchema(city.faqs)} />
      </section>

      {otherCities.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow={`Other cities in ${stateName}`}
              title={`Career counselling in other ${stateName} cities`}
              description="Explore GCDA career counselling in other {stateName} cities."
            />
            <div className="card-grid city-grid">
              {otherCities.map((cSlug) => (
                <article className="card city-card" key={cSlug}>
                  <div className="card-body">
                    <span className="mini-label">{stateName}</span>
                    <h3>
                      <Link href={`/${stateSlug}/career-counsellor-${cSlug}`}>
                        Career Counsellor in {cSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                      </Link>
                    </h3>
                    <p className="city-blurb">Career counselling, career assessments, and mentoring for students and professionals in this city.</p>
                    <Link href={`/${stateSlug}/career-counsellor-${cSlug}`} className="text-link">Explore →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section alt-section">
        <div className="container narrow-center cta-band-inner">
          <div>
            <h2>Ready to plan your career in {city.name}?</h2>
            <p>Speak to a GCDA counsellor and get a structured plan tailored to {city.name} — from assessments to a clear roadmap.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-primary">Book a Session</Link>
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="button button-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <JsonLd id={`ld-breadcrumb-${stateSlug}-${citySlug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id={`ld-service-${stateSlug}-${citySlug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': `${pageUrl}#service`,
          name: `GCDA Career Counselling in ${city.name}`,
          description: `Career counselling, career assessments, and professional mentoring in ${city.name}, ${cityStateName}.`,
          url: pageUrl,
          telephone: `+${company.phoneRaw}`,
          email: company.email,
          priceRange: '₹₹',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: [
            { '@type': 'City', name: city.name },
            { '@type': 'AdministrativeArea', name: cityStateName },
            { '@type': 'Country', name: 'India' },
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: cityStateName,
            addressCountry: 'IN',
          },
        }}
      />
    </>
  );
}
