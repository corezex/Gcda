import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import SeminarTypesGrid from '@/components/SeminarTypesGrid';
import JsonLd from '@/components/JsonLd';
import {
  STATES,
  CITIES_BY_STATE,
  getCity,
  getAllCityUrls,
  getStateBySlug,
} from '@/data/indiaLocations';
import { services as baseServices, company } from '@/data/site';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS, getServicePage } from '@/data/servicePages';
import { faqSchema, breadcrumbSchema } from '@/data/schema';
import CITY_SERVICE_CONTENT from '@/data/cityServiceContent';

const SITE_URL = 'https://gcdassociation.org';

/**
 * Unified catch-all route for ALL dynamic city pages.
 *
 * URL patterns (6 services x 344 cities = 2,064 city pages):
 *   /<state>                                           -> state hub
 *   /<state>/career-counsellor-<city>                   -> career counselling
 *   /<state>/career-counselling-seminar-<city>          -> seminar
 *   /<state>/career-counselling-certification-<city>    -> certification
 *   /<state>/stream-selection-<city>                    -> stream selection
 *   /<state>/degree-selection-<city>                    -> degree selection
 *   /<state>/working-professional-<city>                -> working professional
 *
 * Using [...slug] catch-all gives reliable params.slug[] with no
 * prefix-concatenation quirks, and a single source of truth.
 */

// Build a regex for each service's URL pattern
const PATTERN_REGEXES = {
  'career-counselling': /^career-counsellor-(.+)$/,
  'personal-counselling': /^personal-counselling-(.+)$/,
  'career-assessment': /^career-assessment-(.+)$/,
  'career-counselling-seminar': /^career-counselling-seminar-(.+)$/,
  'career-certification': /^career-counselling-certification-(.+)$/,
  'stream-selection-guidance': /^stream-selection-(.+)$/,
  'degree-selection-guidance': /^degree-selection-(.+)$/,
  'guidance-for-working-professionals': /^working-professional-(.+)$/,
};

// Top-level service pages that exist OUTSIDE this catch-all
// (e.g. /career-certification has its own dedicated page.js).
// The catch-all handles /career-counselling-seminar,
// /stream-selection-guidance, etc. and dispatches to MainServicePage.
const STANDALONE_SERVICE_SLUGS = new Set(['career-certification']);
const TOP_LEVEL_SERVICE_PAGE_SLUGS = new Set([
  'career-counselling-seminar',
  'stream-selection-guidance',
  'degree-selection-guidance',
  'guidance-for-working-professionals',
]);

function parseSlug(slug) {
  if (!slug || slug.length === 0) return null;

  // Top-level service page: /<service-slug>
  if (slug.length === 1) {
    const sl = slug[0];
    // Reserved for static pages (handled by their own route)
    if (STANDALONE_SERVICE_SLUGS.has(sl)) return null;
    // Top-level service main page → render as service page
    if (TOP_LEVEL_SERVICE_PAGE_SLUGS.has(sl)) {
      const servicePage = getServicePage(sl);
      if (!servicePage) return null;
      return { type: 'service-page', serviceSlug: sl, servicePage };
    }
    // Otherwise: state hub
    const state = getStateBySlug(sl);
    if (!state) return null;
    return { type: 'state', state, stateSlug: sl };
  }

  // City page: /<state>/<service-pattern>-<city>
  if (slug.length === 2) {
    const [stateSlug, segment] = slug;
    const state = getStateBySlug(stateSlug);
    if (!state) return null;

    for (const [serviceSlug, regex] of Object.entries(PATTERN_REGEXES)) {
      const match = segment.match(regex);
      if (match) {
        const citySlug = match[1];
        const city = getCity(stateSlug, citySlug);
        if (!city) continue;
        return {
          type: 'city',
          city,
          citySlug,
          state,
          stateSlug,
          serviceSlug,
        };
      }
    }
  }

  return null;
}

export function generateStaticParams() {
  const params = [];
  // State hub pages
  for (const s of STATES) {
    params.push({ slug: [s.slug] });
  }
  // City pages for every (service, state, city) combination
  for (const u of getAllCityUrls()) {
    for (const serviceSlug of SERVICE_SLUGS) {
      const pattern = SERVICE_CITY_PATTERNS[serviceSlug];
      if (!pattern) continue;
      const lastSeg = pattern.urlPattern(u.stateSlug, u.citySlug).split('/').pop();
      params.push({ slug: [u.stateSlug, lastSeg] });
    }
  }
  return params;
}

function pageTitle(city, serviceTitle) {
  return `${serviceTitle} in ${city.name}`;
}

function pageDescription(city, servicePage) {
  return `${servicePage.cityLead.replace('{city}', city.name).replace('{district}', city.district)}`;
}

export function generateMetadata({ params }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Not found' };

  if (parsed.type === 'service-page') {
    return generateServicePageMetadata(parsed.serviceSlug, parsed.servicePage);
  }

  if (parsed.type === 'state') {
    const { state, stateSlug } = parsed;
    const cities = CITIES_BY_STATE[stateSlug] || [];
    const cityCount = cities.length;
    const topCities = cities.slice(0, 5).map((c) => c.name).join(', ');
    return {
      title: `Career Counselling in ${state.name} | GCDA`,
      description: `GCDA offers career counselling and career assessments in ${cityCount} ${state.name} cities including ${topCities}. Online sessions across ${state.name} and in-person sessions everywhere in ${state.name}.`,
      alternates: { canonical: `/${stateSlug}` },
      openGraph: {
        title: `Career Counselling in ${state.name} | GCDA`,
        description: `GCDA offers career counselling and career assessments in ${cityCount} ${state.name} cities.`,
        url: `${SITE_URL}/${stateSlug}`,
      },
    };
  }

  // City page (one of 6 service types)
  const { city, citySlug, state, stateSlug, serviceSlug } = parsed;
  const servicePage = getServicePage(serviceSlug);
  if (!servicePage) return { title: 'Not found' };

  const title = `${pageTitle(city, servicePage.title)} | GCDA`;
  const description = `${servicePage.shortDescription} Available for students, graduates, and working professionals in ${city.name}, ${state.name}.`;
  const pattern = SERVICE_CITY_PATTERNS[serviceSlug];
  const url = `${SITE_URL}${pattern.urlPattern(stateSlug, citySlug)}`;

  return {
    title,
    description,
    keywords: [
      `${servicePage.title.toLowerCase()} in ${city.name}`,
      `${servicePage.title.toLowerCase()} ${city.name}`,
      `${servicePage.title.toLowerCase()} near ${city.name}`,
      `best ${servicePage.title.toLowerCase()} ${city.name}`,
      `${servicePage.title.toLowerCase()} ${state.name}`,
    ],
    alternates: { canonical: pattern.urlPattern(stateSlug, citySlug) },
    openGraph: { title, description, url, type: 'article' },
  };
}

export default function DynamicPage({ params }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();

  if (parsed.type === 'service-page') {
    return <MainServicePage serviceSlug={parsed.serviceSlug} servicePage={parsed.servicePage} />;
  }

  if (parsed.type === 'state') {
    return <StateHub stateSlug={parsed.stateSlug} state={parsed.state} />;
  }
  return (
    <CityPage
      stateSlug={parsed.stateSlug}
      citySlug={parsed.citySlug}
      city={parsed.city}
      state={parsed.state}
      serviceSlug={parsed.serviceSlug}
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
      a: `Yes. GCDA provides online career counselling across ${state.name} and in-person sessions in all major cities in ${state.name}. We cover ${cities.slice(0, 3).map((c) => c.name).join(', ')} and more.`,
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
            <p className="page-hero-copy">
              Looking for career counselling in {state.name}? GCDA offers expert, assessment-led career guidance for students, graduates, parents, and working professionals across {cities.length} {state.name} cities. Sessions are available online across {state.name} and in-person.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.png" alt={`Career counselling in ${state.name}`} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            GCDA provides career counselling in {state.name} across {cities.length} cities. We offer online video sessions for students, parents, and working professionals in {state.name}, plus in-person sessions when needed. Plans start at Rs. 2,999 for the Stream Selector and include assessments, mentor sessions, and a personalised roadmap.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={`${state.name} cities`}
            title={`Career counselling across ${state.name}`}
            description={`We serve ${cities.length} cities in ${state.name}. Click any city to see locally relevant guidance, top colleges, entrance exams, and city-specific FAQs — across all 7 GCDA services.`}
          />
          {cities.length > 0 ? (
            <div className="card-grid city-grid">
              {cities.map((c) => {
                const cSlug = c.name.toLowerCase().replace(/['\s,&.]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                return (
                  <article className="card city-card" key={cSlug}>
                    <div className="card-body">
                      <span className="mini-label">City</span>
                      <h3>
                        <Link href={`/${stateSlug}/career-counsellor-${cSlug}`}>Career Counsellor in {c.name}</Link>
                      </h3>
                      <p className="city-state">{c.district}</p>
                      <p className="city-blurb">{c.tagline}</p>

                      <div className="city-card-services">
                        <span className="city-card-services-label">All GCDA services in {c.name}:</span>
                        <ul className="city-card-services-list">
                          {SERVICE_SLUGS.map((sSlug) => {
                            const pat = SERVICE_CITY_PATTERNS[sSlug];
                            if (!pat) return null;
                            return (
                              <li key={sSlug}>
                                <Link href={pat.urlPattern(stateSlug, cSlug)}>
                                  {pat.cityLabel}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

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

/* ----------------- City Page (one of 6 service types) ----------------- */
function CityPage({ stateSlug, citySlug, city, state, serviceSlug }) {
  const servicePage = getServicePage(serviceSlug);
  if (!servicePage) notFound();
  const pattern = SERVICE_CITY_PATTERNS[serviceSlug];
  const stateName = state.name;
  const pageUrl = `${SITE_URL}${pattern.urlPattern(stateSlug, citySlug)}`;
  const cityLabel = pattern.cityLabel;

  // Get the rich base-service data (for personal-counselling, career-assessment
  // which don't have a servicePages entry) so city pages have full content.
  // Some SERVICE_SLUGS map to a differently-named baseServices entry:
  //   career-counselling-seminar  -> workshops-seminars
  //   guidance-for-working-professionals -> working-professionals-guidance
  const BASE_SLUG_ALIAS = {
    'career-counselling-seminar': 'workshops-seminars',
    'guidance-for-working-professionals': 'working-professionals-guidance',
  };
  const baseSlug = BASE_SLUG_ALIAS[serviceSlug] || serviceSlug;
  const baseService = baseServices.find((s) => s.slug === baseSlug);
  const benefits = (baseService?.benefits && baseService.benefits.length)
    ? baseService.benefits
    : (servicePage.whatYouGet || []).map((i) => i.body);
  const idealFor = (baseService?.idealFor && baseService.idealFor.length)
    ? baseService.idealFor
    : servicePage.whoItIsFor || [];
  const outcomes = (baseService?.outcomes && baseService.outcomes.length)
    ? baseService.outcomes
    : [];
  const stepsRich = (baseService?.steps && baseService.steps.length && typeof baseService.steps[0] === 'object')
    ? baseService.steps
    : (servicePage.whatYouGet || []).map((it, i) => ({ title: it.title || `Step ${i + 1}`, body: it.body }));

  // Build FAQ list: prefer the city's OWN unique 3 FAQs (pre-generated), then fall back
  // to the service's 8 base FAQs (with city name substitution). This gives every city
  // page 8 + 3 = 11 unique FAQs.
  const serviceBaseFaqs = (baseService?.faqs && baseService.faqs.length)
    ? baseService.faqs
    : servicePage.cityFaqs || [];
  const serviceBaseFaqsCity = serviceBaseFaqs.map((f) => ({
    q: f.q.replace(/{city}/g, city.name).replace(/{district}/g, city.district),
    a: f.a.replace(/{city}/g, city.name).replace(/{district}/g, city.district),
  }));
  const cityUniqueFaqs = (city.faqs && city.faqs.length && typeof city.faqs[0] === 'object')
    ? city.faqs
    : [];
  const cityFaqs = [...serviceBaseFaqsCity, ...cityUniqueFaqs];

  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: stateName, url: `/${stateSlug}` },
    { name: `${cityLabel} in ${city.name}`, url: pageUrl },
  ];

  // 3 other city pages for the SAME service in the same state
  const otherCitySlugs = (state.cities || [])
    .filter((c) => c !== citySlug)
    .slice(0, 6);

  // Local notes from indiaLocations.js (city-specific for student/professional)
  // These are pre-generated unique paragraphs per city. We keep them as the
  // "Why this matters in {city}" section content.
  const studentNote = city.studentNote;
  const professionalNote = city.professionalNote;
  const deliveryNote = city.deliveryNote;

  // Per-service, per-city unique longDescription and whyItMatters from
  // /data/cityServiceContent.js. Falls back to the shared base service
  // description if no per-city content is found.
  const cityKey = stateSlug + '/' + citySlug;
  const serviceCityContent = (CITY_SERVICE_CONTENT[serviceSlug] || {})[cityKey];
  const longDescription = serviceCityContent?.longDescription
    || baseService?.longDescription
    || servicePage.heroLead
    || servicePage.shortDescription;
  const whyItMatters = serviceCityContent?.whyItMatters
    || baseService?.whyItMatters
    || null;

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{stateName}</span>
            <h1>{cityLabel} in {city.name}, {stateName}</h1>
            <p className="page-hero-copy">{longDescription}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Free Consultation</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span>Online sessions across {city.name}</span>
              <span>in-person {city.name}</span>
              <span>50K+ career sessions delivered</span>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.png" alt={`${servicePage.title} in ${city.name}`} />
          </div>
        </div>
      </section>

      {/* ANSWER BLOCK (AEO) */}
      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {`${servicePage.title} in ${city.name} from GCDA is a structured, mentor-led service available online across ${city.name} and ${city.district}, with in-person sessions when needed. ${servicePage.shortDescription} Plans start at Rs. 2,999 for the Stream Selector and include assessments, mentor sessions, and a written action plan.`}
          </AnswerBlock>
        </div>
      </section>

      {/* WHY IT MATTERS — always uses per-city, per-service unique paragraph */}
      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={`Why this matters in ${city.name}`}
              title={`Why families in ${city.name} choose ${servicePage.title.toLowerCase()}`}
              description={whyItMatters || `We pair assessment data with real mentor experience, so the plan you receive fits your strengths, location, and family context.`}
            />
            <div className="button-row" style={{ marginTop: '1.4rem' }}>
              <Link href="/contact" className="button button-primary">Talk to a Counsellor</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="info-panel">
            <h3>{city.name} at a glance</h3>
            <ul className="bullet-list compact">
              <li><strong>State:</strong> {stateName}</li>
              <li><strong>District:</strong> {city.district}</li>
              <li><strong>Region:</strong> {state.region}</li>
              <li><strong>Top industries:</strong> {city.industries}</li>
              <li><strong>Landmarks:</strong> {city.landmarks}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CITY-SPECIFIC NOTES — unique paragraphs generated for every city */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={`Local context for ${city.name}`}
            title={`How ${servicePage.title.toLowerCase()} is tailored to ${city.name}`}
            description={`Three things you should know about how GCDA delivers this service specifically in ${city.name}.`}
            center
          />
          <div className="stack-list">
            <article className="feature-row">
              <h3>For students in {city.name}</h3>
              <p>{studentNote}</p>
            </article>
            <article className="feature-row">
              <h3>For working professionals in {city.name}</h3>
              <p>{professionalNote}</p>
            </article>
            <article className="feature-row">
              <h3>How we deliver in {city.name}</h3>
              <p>{deliveryNote}</p>
            </article>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — Benefits grid */}
      <section className="section alt-section" id="what-you-get">
        <div className="container">
          <SectionHeader
            eyebrow="What you get"
            title={`What's included in ${servicePage.title.toLowerCase()} in ${city.name}`}
            description="Every engagement is structured around real outcomes. Here is exactly what you walk away with."
            center
          />
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <article className="benefit-card" key={i}>
                <span className="benefit-number">{(i + 1).toString().padStart(2, '0')}</span>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR + OUTCOMES */}
      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Who this is for"
              title={`Is ${servicePage.title.toLowerCase()} in ${city.name} right for you?`}
              description="If any of these situations sound familiar, this service can help you move forward with more confidence."
            />
            <ul className="bullet-list">
              {idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-panel">
            <h3>What you walk away with</h3>
            {outcomes.length > 0 ? (
              <ul className="bullet-list compact">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>A clear plan, evidence-based decisions, and confidence in the next step.</p>
            )}
            <div className="info-panel-cta">
              <Link href="/contact" className="button button-primary block-button">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Steps timeline */}
      <section className="section alt-section" id="how-it-works">
        <div className="container">
          <SectionHeader
            eyebrow="How it works"
            title={`How ${servicePage.title.toLowerCase()} works in ${city.name}`}
            description="A straightforward 5-step process — every engagement follows the same structured framework."
            center
          />
          <ol className="steps-timeline">
            {stepsRich.map((step, i) => (
              <li className="steps-timeline-item" key={i}>
                <span className="steps-timeline-number">{i + 1}</span>
                <div className="steps-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPARISON: What we do / What we don't */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why GCDA"
            title={`What makes our ${servicePage.title.toLowerCase()} different in ${city.name}`}
            description="We are not a personality-quiz app or a motivational speaker. We are a structured, mentor-led service that produces a written, defensible plan."
            center
          />
          <div className="comparison-grid">
            <div className="comparison-col">
              <h3>What we do</h3>
              <ul className="bullet-list">
                <li>Certified mentor with 8+ years of field experience</li>
                <li>Structured intake, assessment (where useful), and debrief</li>
                <li>Written action plan delivered within 24 hours</li>
                <li>Real salary, growth, and entrance-exam data — no vague advice</li>
                <li>Honest pushback if a path is unrealistic</li>
                <li>Optional follow-up to review progress</li>
              </ul>
            </div>
            <div className="comparison-col comparison-col-muted">
              <h3>What we don't do</h3>
              <ul className="bullet-list">
                <li>Generic personality-type horoscopes</li>
                <li>20-minute online quizzes with no human follow-up</li>
                <li>"Follow your passion" motivational talks</li>
                <li>Upsells on long packages you don't need</li>
                <li>Hidden fees for "premium" reports</li>
                <li>Advice that ignores your family's budget and constraints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT — Colleges and exams */}
      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Local context"
              title={`Top colleges near ${city.name}`}
              description={`A non-exhaustive list of institutions our students in and around ${city.name} typically shortlist.`}
            />
            {city.topColleges.length > 0 ? (
              <ul className="bullet-list">
                {city.topColleges.map((c) => <li key={c}>{c}</li>)}
              </ul>
            ) : (
              <p>{city.name} students typically consider a mix of local and regional colleges.</p>
            )}
          </div>
          <div>
            <SectionHeader
              eyebrow="Exams that matter"
              title={`Entrance exams for ${city.name} students`}
              description={`Most ${city.name} students plan for a mix of national and state-level exams.`}
            />
            {city.topExams.length > 0 ? (
              <ul className="bullet-list">
                {city.topExams.map((e) => <li key={e}>{e}</li>)}
              </ul>
            ) : (
              <p>For {city.name}, the most common entrance tracks are JEE Main, NEET, state CETs, and CAT.</p>
            )}
          </div>
        </div>
      </section>

      {/* Seminar types — only on the seminar service city page */}
      {serviceSlug === 'career-counselling-seminar' && servicePage.seminarTypes ? (
        <section className="section" id="seminar-types">
          <div className="container">
            <SectionHeader
              eyebrow="4 seminar tracks"
              title={`Types of seminars and workshops we run in ${city.name}`}
              description="GCDA offers 4 core seminar tracks. Each one is structured, expert-led, and built around real student and professional outcomes — available in-person at your campus or online across India."
              center
            />
            <SeminarTypesGrid seminars={servicePage.seminarTypes} city={city.name} />
          </div>
        </section>
      ) : null}

      {/* FAQ with service-level + city-specific questions (11 total) */}
      <section className="section" id="faq">
        <div className="container narrow-center-wide">
          <SectionHeader
            eyebrow="FAQs"
            title={`Questions about ${servicePage.title.toLowerCase()} in ${city.name}`}
            description={`Common questions from students, parents, and working professionals in ${city.name}, plus the questions we hear most often across ${city.district} and ${stateName}.`}
            center
          />
          <FAQList items={cityFaqs} />
        </div>
        <JsonLd id={`ld-faq-${serviceSlug}-${stateSlug}-${citySlug}`} data={faqSchema(cityFaqs)} />
      </section>

      {otherCitySlugs.length > 0 ? (
        <section className="section alt-section">
          <div className="container">
            <SectionHeader
              eyebrow={`Other cities in ${stateName}`}
              title={`${servicePage.title} in other ${stateName} cities`}
              description={`Explore ${servicePage.title.toLowerCase()} in other ${stateName} cities.`}
            />
            <div className="card-grid city-grid">
              {otherCitySlugs.map((cSlug) => (
                <article className="card city-card" key={cSlug}>
                  <div className="card-body">
                    <span className="mini-label">{stateName}</span>
                    <h3>
                      <Link href={pattern.urlPattern(stateSlug, cSlug)}>
                        {cityLabel} in {cSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                      </Link>
                    </h3>
                    <p className="city-blurb">{servicePage.shortDescription}</p>
                    <Link href={pattern.urlPattern(stateSlug, cSlug)} className="text-link">Explore →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Other GCDA services in this same city — cross-link to all 7 service variants */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="All GCDA services"
            title={`Other GCDA services in ${city.name}`}
            description="Every city page covers one GCDA service. Use the links below to switch to any of the other 6 services for the same city."
            center
          />
          <div className="card-grid services-cross-grid">
            {SERVICE_SLUGS.map((sSlug) => {
              const pat = SERVICE_CITY_PATTERNS[sSlug];
              if (!pat) return null;
              const isCurrent = sSlug === serviceSlug;
              return (
                <Link
                  key={sSlug}
                  href={pat.urlPattern(stateSlug, citySlug)}
                  className={`service-cross-link ${isCurrent ? 'is-current' : ''}`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  <span className="service-cross-label">{pat.cityLabel}</span>
                  <span className="service-cross-state">in {city.name}</span>
                  {isCurrent ? <span className="service-cross-current">You are here</span> : null}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section alt-section">
        <div className="container narrow-center cta-band-inner">
          <div>
            <h2>Ready to plan your {servicePage.title.toLowerCase()} in {city.name}?</h2>
            <p>Speak to a GCDA counsellor and get a structured plan tailored to {city.name} — from assessments to a clear roadmap.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-primary">Book a Session</Link>
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="button button-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <JsonLd id={`ld-breadcrumb-${serviceSlug}-${stateSlug}-${citySlug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id={`ld-service-${serviceSlug}-${stateSlug}-${citySlug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': `${pageUrl}#service`,
          name: `${servicePage.title} in ${city.name}`,
          description: `${servicePage.title} in ${city.name}, ${stateName}. ${servicePage.shortDescription}`,
          url: pageUrl,
          telephone: `+${company.phoneRaw}`,
          email: company.email,
          priceRange: '₹₹',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: [
            { '@type': 'City', name: city.name },
            { '@type': 'AdministrativeArea', name: stateName },
            { '@type': 'Country', name: 'India' },
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: stateName,
            addressCountry: 'IN',
          },
        }}
      />
    </>
  );
}

/* ----------------- Top-level Service Main Page ----------------- */
function generateServicePageMetadata(serviceSlug, servicePage) {
  const title = `${servicePage.title} in India | GCDA`;
  const description = servicePage.shortDescription;
  const url = `${SITE_URL}/${serviceSlug}`;
  return {
    title,
    description,
    alternates: { canonical: `/${serviceSlug}` },
    openGraph: { title, description, url, type: 'article' },
  };
}

function MainServicePage({ serviceSlug, servicePage }) {
  const url = `${SITE_URL}/${serviceSlug}`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: servicePage.title, url },
  ];
  const pageFaqs = (servicePage.cityFaqs || []).map((f) => ({
    q: f.q.replace(/{city}/g, 'India'),
    a: f.a.replace(/{city}/g, 'India').replace(/{district}/g, 'India'),
  }));

  // Sample 3 cities for the "popular cities" cross-link
  const allCities = (typeof window !== 'undefined') ? [] : [];
  // We can't import getAllCityUrls at module top without circular dep risk;
  // use a small set of major cities by hand.
  const sampleCities = [
    ['maharashtra', 'mumbai'],
    ['delhi', 'new-delhi'],
    ['karnataka', 'bengaluru'],
    ['tamil-nadu', 'chennai'],
    ['uttar-pradesh', 'lucknow'],
    ['rajasthan', 'jaipur'],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{servicePage.heroEyebrow}</span>
            <h1>{servicePage.heroTitle}</h1>
            <p className="page-hero-copy">{servicePage.heroLead}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <Link href="/cities" className="button button-secondary">View All Cities</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.png" alt={servicePage.title} />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {`GCDA provides ${servicePage.title.toLowerCase()} across India — online sessions in 300+ cities plus in-person sessions everywhere. ${servicePage.shortDescription} Plans start at Rs. 2,999 for the Stream Selector.`}
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Who it is for"
            title={`Who is ${servicePage.title.toLowerCase()} for?`}
            description="If any of these situations sound familiar, this service will help."
            center
          />
          <ul className="bullet-list" style={{ maxWidth: '780px', margin: '0 auto' }}>
            {servicePage.whoItIsFor.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="What you get"
            title={`What ${servicePage.title.toLowerCase()} includes`}
            description="Every engagement is structured around real outcomes, not just sessions."
            center
          />
          <div className="card-grid process-grid">
            {servicePage.whatYouGet.map((item, i) => (
              <article className="card process-card" key={item.title}>
                <div className="card-body">
                  <span className="step-number">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p style={{ marginBottom: '0.4rem' }}>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seminar types — only on the main /career-counselling-seminar page */}
      {serviceSlug === 'career-counselling-seminar' && servicePage.seminarTypes ? (
        <section className="section" id="seminar-types">
          <div className="container">
            <SectionHeader
              eyebrow="4 seminar tracks"
              title="Types of seminars and workshops we run"
              description="GCDA offers 4 core seminar tracks. Each one is structured, expert-led, and built around real student and professional outcomes — available in-person at your campus or online across India."
              center
            />
            <SeminarTypesGrid seminars={servicePage.seminarTypes} city="India" />
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Popular cities"
            title={`Find ${servicePage.title.toLowerCase()} in major cities`}
            description="We serve 300+ cities across India. Here are a few popular locations:"
            center
          />
          <div className="card-grid city-grid">
            {sampleCities.map(([sSlug, cSlug]) => {
              const label = cSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
              const state = STATES.find((s) => s.slug === sSlug);
              return (
                <article className="card city-card" key={`${sSlug}-${cSlug}`}>
                  <div className="card-body">
                    <span className="mini-label">{state ? state.name : sSlug}</span>
                    <h3>
                      <Link href={`/${sSlug}/${SERVICE_CITY_PATTERNS[serviceSlug].urlPattern(sSlug, cSlug).split('/').pop()}`}>
                        {servicePage.title} in {label}
                      </Link>
                    </h3>
                    <p className="city-blurb">{servicePage.shortDescription}</p>
                    <Link href={`/${sSlug}/${SERVICE_CITY_PATTERNS[serviceSlug].urlPattern(sSlug, cSlug).split('/').pop()}`} className="text-link">
                      Explore →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="center-cta">
            <Link href="/cities" className="text-link">View all 300+ cities →</Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="FAQs"
            title={`Questions about ${servicePage.title.toLowerCase()}`}
            description="Common questions we receive from across India."
            center
          />
          <FAQList items={pageFaqs} />
        </div>
        <JsonLd id={`ld-faq-main-${serviceSlug}`} data={faqSchema(pageFaqs)} />
      </section>

      {/* Other GCDA services — cross-link from main service page */}
      <section className="section" id="other-services">
        <div className="container">
          <SectionHeader
            eyebrow="Explore other services"
            title="Other GCDA services you may need"
            description="Every service has its own main page and 346 city pages. Use the links below to explore the full GCDA service catalog."
            center
          />
          <div className="card-grid services-cross-grid">
            {SERVICE_SLUGS.filter((s) => s !== serviceSlug).map((sSlug) => {
              const sp = getServicePage(sSlug);
              if (!sp) return null;
              // If this is career-counselling, certification, or any service that has a standalone main page
              const isStandalone = ['career-counselling-seminar', 'career-certification', 'stream-selection-guidance', 'degree-selection-guidance', 'guidance-for-working-professionals'].includes(sSlug);
              const href = isStandalone ? `/${sSlug}` : `/career-counselling/${sSlug}`;
              return (
                <Link key={sSlug} href={href} className="service-cross-link">
                  <span className="service-cross-label">{sp.title}</span>
                  <span className="service-cross-state">in India</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container narrow-center cta-band-inner">
          <div>
            <h2>Ready to get started?</h2>
            <p>Connect with GCDA for a structured, assessment-led {servicePage.title.toLowerCase()} journey — online across India, in-person.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-primary">Book a Session</Link>
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="button button-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <JsonLd id={`ld-breadcrumb-main-${serviceSlug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id={`ld-service-main-${serviceSlug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: servicePage.title,
          description: servicePage.shortDescription,
          serviceType: 'Career Counselling',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'India' },
          url,
        }}
      />
    </>
  );
}
