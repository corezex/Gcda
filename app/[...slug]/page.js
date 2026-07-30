import { notFound, permanentRedirect } from 'next/navigation';
import Image from 'next/image';
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
import { getCityFeePageByRouteSlug } from '@/data/cityFeePages';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS, getServicePage } from '@/data/servicePages';
import { faqSchema, breadcrumbSchema, webPageSchema, speakableSchema, itemListSchema, stateHubSchema, cityServicePageSchema } from '@/data/schema';
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
    const cityFeePage = getCityFeePageByRouteSlug(sl);
    if (cityFeePage) {
      return { type: 'city-fees-redirect', page: cityFeePage };
    }
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

function slugifyLocation(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/['\s,&.]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function getDistrictLabel(city) {
  const district = (city.district || '').trim();
  if (!district) return city.name;
  return district;
}

function getDistrictContextLabel(city) {
  const district = (city.district || '').trim();
  if (!district) return city.name;
  return district.toLowerCase() === city.name.toLowerCase() ? `${district} district` : district;
}

function buildStateCityBlurb(city, stateName) {
  const examLead = formatList(city.topExams || [], 2) || 'important entrance exams';
  const collegeLead = formatList(city.topColleges || [], 2) || 'nearby colleges';
  return `Online career counselling, career assessment, and planning support in ${city.name}, ${stateName}. Students here often compare ${examLead} and colleges such as ${collegeLead}.`;
}

function buildStatePageSummary(state, cities) {
  const cityLead = formatList(cities.map((city) => city.name), 3) || state.capital || state.name;
  return `GCDA offers career counselling across ${cities.length} cities in ${state.name}, including ${cityLead}. Each state hub links to city pages with local college, exam, FAQ, and service-variant details.`;
}

function formatList(items = [], limit = 3) {
  const clean = items.filter(Boolean).map((item) => normalizeCopy(item)).slice(0, limit);
  if (clean.length === 0) return '';
  if (clean.length === 1) return clean[0];
  if (clean.length === 2) return `${clean[0]} and ${clean[1]}`;
  return `${clean.slice(0, -1).join(', ')}, and ${clean[clean.length - 1]}`;
}

function normalizeCopy(text = '') {
  return String(text || '')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/军队/gi, 'military')
    .replace(/the local the local economy economy/gi, 'the local economy')
    .replace(/the local economy economy/gi, 'the local economy')
    .replace(/the a mix of local industries economy/gi, 'the local economy')
    .replace(/a mix of local industries economy/gi, 'local economy')
    .replace(/local industries, the dominant local industries/gi, 'local industries')
    .replace(/typically plan around local industries/gi, 'typically plan around the local economy')
    .replace(/The class 10-to-12 decision is high-stakes because the local college and exam mix is narrow\./gi, 'Students usually compare streams, colleges, and entrance exams with family budget and aptitude in mind.')
    .replace(/\bbfsi\b/gi, 'BFSI')
    .replace(/\baiims\b/gi, 'AIIMS')
    .replace(/\biit\b/gi, 'IIT')
    .replace(/\biim\b/gi, 'IIM')
    .replace(/\bit\b(?=\s+and|\s+services|\s+sector|\s+industry|,|\.)/gi, 'IT')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildFallbackLongDescription(city, stateName, servicePage) {
  const examLead = formatList(city.topExams || [], 3) || 'the entrance exams students commonly plan for';
  const industryLead = normalizeCopy(city.industries || 'the local economy');
  return `${servicePage.title} in ${city.name} is delivered with local context built around ${industryLead}, nearby colleges, and entrance pathways such as ${examLead}. GCDA offers online sessions across ${getCoverageArea(city, stateName)}, with in-person support when needed.`;
}

function buildFallbackWhyItMatters(city, servicePage) {
  const examLead = formatList(city.topExams || [], 2) || 'major entrance exams';
  return `In ${city.name}, ${servicePage.title.toLowerCase()} works best when advice reflects local colleges, budget realities, and exam timelines such as ${examLead}. GCDA combines assessment-led guidance with city-specific context so families and professionals get decisions they can actually act on.`;
}

function buildStudentNote(city, stateName) {
  const examLead = formatList(city.topExams || [], 3) || 'relevant entrance exams';
  const collegeLead = formatList(city.topColleges || [], 2) || 'nearby colleges';
  return `Students in ${city.name}, ${stateName} usually compare local options like ${collegeLead} while planning for ${examLead}. GCDA helps families connect aptitude, interests, and realistic pathways so decisions are based on fit and evidence instead of only marks or peer pressure.`;
}

function buildProfessionalNote(city) {
  const industryLead = normalizeCopy(city.industries || 'the local economy');
  return `Working professionals in ${city.name} commonly use GCDA for career transitions, MBA or executive-program planning, resume positioning, and interview preparation. Guidance is calibrated to ${industryLead} and is scheduled around work hours through flexible online sessions.`;
}

function buildDeliveryNote(city, stateName) {
  return `GCDA delivers this service through secure online video sessions across ${getCoverageArea(city, stateName)} and wider ${stateName}, with in-person support available on request. Families typically use evening or weekend slots, while working professionals often prefer short consults outside office hours.`;
}

function getCleanCityText(text, fallbackBuilder) {
  const raw = text || '';
  const normalized = normalizeCopy(raw);
  if (
    !normalized ||
    /the local the local economy economy|the local economy economy|the a mix of local industries economy|a mix of local industries economy|\bbfsi\b|\btypically plan around\s+[a-z]/i.test(raw)
  ) {
    return fallbackBuilder();
  }
  return normalized;
}

function getCoverageArea(city, stateName) {
  const district = (city.district || '').trim();
  if (!district || district.toLowerCase() === city.name.toLowerCase()) {
    return city.name;
  }
  return `${city.name} and ${district}`;
}

const CITY_PRICE_ROWS = [
  {
    plan: 'Stream Selector',
    fees: 'Rs. 2,999',
    bestFor: 'Class 8–10 students choosing a stream',
    outcome: 'A clear stream decision and backup options',
  },
  {
    plan: 'Degree Selector',
    fees: 'Rs. 3,499',
    bestFor: 'Class 11–12 students choosing a degree or college path',
    outcome: 'A realistic after-12th degree and college plan',
  },
  {
    plan: 'Working Professionals',
    fees: 'Rs. 3,999',
    bestFor: 'Professionals planning transitions, MBA, or growth strategy',
    outcome: 'A 90-day professional action plan',
  },
];

function getSuggestedPlan(serviceSlug) {
  if (serviceSlug === 'stream-selection-guidance') return 'Stream Selector';
  if (serviceSlug === 'degree-selection-guidance') return 'Degree Selector';
  if (serviceSlug === 'guidance-for-working-professionals') return 'Working Professionals';
  return 'the plan that matches the decision stage';
}

export function generateMetadata({ params }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Not found' };

  if (parsed.type === 'city-fees-redirect') {
    return {
      title: 'Redirecting...',
      robots: { index: false, follow: true },
      alternates: { canonical: parsed.page.cityPage },
    };
  }

  if (parsed.type === 'service-page') {
    return generateServicePageMetadata(parsed.serviceSlug, parsed.servicePage);
  }

  if (parsed.type === 'state') {
    const { state, stateSlug } = parsed;
    const cities = CITIES_BY_STATE[stateSlug] || [];
    const cityCount = cities.length;
    const topCities = cities.slice(0, 3).map((c) => c.name).join(', ');
    const shortStateName = state.name
      .replace('Andaman and Nicobar Islands', 'Andaman & Nicobar')
      .replace('Dadra and Nagar Haveli and Daman and Diu', 'Dadra & Nagar Haveli')
      .replace('Jammu and Kashmir', 'Jammu & Kashmir');
    return {
      title: `Career Counselling in ${shortStateName}: ${cityCount} Cities`,
      description: `Career counselling in ${shortStateName} – ${cityCount} cities incl. ${topCities}. Online & in-person for students & professionals.`,
      keywords: [
        `career counselling in ${state.name}`,
        `career counselling ${state.name} cities`,
        `career counsellor ${state.name}`,
        `career assessment ${state.name}`,
        `career guidance ${state.name}`,
      ],
      alternates: { canonical: `/${stateSlug}` },
      openGraph: {
        title: `Career Counselling in ${shortStateName}: ${cityCount} Cities`,
        description: `Career counselling in ${shortStateName} – ${cityCount} cities. Online & in-person.`,
        url: `${SITE_URL}/${stateSlug}`,
        images: [
          {
            url: '/assets/hero-illustration.webp',
            width: 1200,
            height: 630,
            alt: `Career counselling in ${state.name}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `Career Counselling in ${shortStateName}: ${cityCount} Cities`,
        description: `Career counselling in ${shortStateName} – ${cityCount} cities incl. ${topCities}.`,
        images: [
          {
            url: '/assets/hero-illustration.webp',
            width: 1200,
            height: 630,
            alt: `Career counselling in ${state.name} – ${cityCount} cities`,
          },
        ],
      },
    };
  }

  // City page (one of 6 service types) – SEO friendly concise
  const { city, citySlug, state, stateSlug, serviceSlug } = parsed;
  const servicePage = getServicePage(serviceSlug);
  if (!servicePage) return { title: 'Not found' };

  const pattern = SERVICE_CITY_PATTERNS[serviceSlug];
  const shortStateName = state.name
    .replace('Andaman and Nicobar Islands', 'Andaman & Nicobar')
    .replace('Dadra and Nagar Haveli and Daman and Diu', 'Dadra & Nagar Haveli')
    .replace('Jammu and Kashmir', 'Jammu & Kashmir');
  const cityLabelMeta = pattern.cityLabel;
  const cityTitleLabel = serviceSlug === 'career-certification' ? 'Career Certification' : cityLabelMeta;
  const title = `${cityTitleLabel} in ${city.name}`;
  const description = `${cityTitleLabel} in ${city.name}, ${shortStateName} – online & in-person counselling for students & professionals.`;
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
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: '/assets/hero-illustration.webp',
          width: 1200,
          height: 630,
          alt: `${servicePage.title} in ${city.name}, ${state.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: '/assets/hero-illustration.webp',
          width: 1200,
          height: 630,
          alt: `${servicePage.title} in ${city.name}, ${state.name}`,
        },
      ],
    },
  };
}

export default function DynamicPage({ params }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();

  if (parsed.type === 'city-fees-redirect') {
    permanentRedirect(parsed.page.cityPage);
  }

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
  const stateSummary = buildStatePageSummary(state, cities);
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
            <h1>{`Career Counselling in ${state.name}`}</h1>
            <p className="page-hero-copy">
              {`Looking for career counselling in ${state.name}? GCDA offers expert, assessment-led career guidance for students, graduates, parents, and working professionals across ${cities.length} ${state.name} cities. Sessions are available online across ${state.name} and in-person.`}
            </p>
            <ul className="hero-proof" aria-label={`Coverage signals for ${state.name}`}>
              <li>{`${cities.length} city pages available`}</li>
              <li>{`Online across ${state.name}`}</li>
              <li>All 8 GCDA service variants linked</li>
            </ul>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <Image
              src="/assets/hero-illustration.webp"
              alt={`Career counselling in ${state.name}`}
              width={1200}
              height={896}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            {`GCDA provides career counselling in ${state.name} across ${cities.length} cities. We offer online video sessions for students, parents, and working professionals in ${state.name}, plus in-person sessions when needed. Plans start at Rs. 2,999 for the Stream Selector and include assessments, mentor sessions, and a personalised roadmap.`}
          </AnswerBlock>
          <p className="author-byline-note">{stateSummary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={`${state.name} cities`}
            title={`Career counselling across ${state.name}`}
            description={`We serve ${cities.length} cities in ${state.name}. Click any city to see locally relevant guidance, top colleges, entrance exams, and city-specific FAQs — across all ${SERVICE_SLUGS.length} GCDA services.`}
          />
          {cities.length > 0 ? (
            <div className="card-grid city-grid">
              {cities.map((c) => {
                const cSlug = slugifyLocation(c.name);
                return (
                  <article className="card city-card" key={cSlug}>
                    <div className="card-body">
                      <span className="mini-label">City</span>
                      <h3>
                        <Link href={`/${stateSlug}/career-counsellor-${cSlug}`}>Career Counsellor in {c.name}</Link>
                      </h3>
                      <p className="city-state">{`District: ${getDistrictLabel(c)}`}</p>
                      <p className="city-blurb">{buildStateCityBlurb(c, state.name)}</p>

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
          <SectionHeader
            eyebrow="What each city page includes"
            title={`What you will find on every ${state.name} city page`}
            description="Each city page is built to be extractable for both families and AI systems: concise local summaries, service links, college and exam context, FAQs, and transparent plan information."
            center
          />
          <div className="card-grid process-grid">
            <article className="card process-card">
              <div className="card-body">
                <h3>Local education context</h3>
                <p>City pages surface nearby colleges, commonly planned entrance exams, and the decision context most relevant to that city.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>All GCDA services for the same city</h3>
                <p>Every city page links across counselling, assessment, stream, degree, seminar, certification, and working-professional variants for faster discovery.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <h3>Structured FAQs and pricing</h3>
                <p>Each location includes plain-language FAQs plus transparent national pricing so answers are easier to extract and compare.</p>
              </div>
            </article>
          </div>
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
      <JsonLd
        id={`ld-webpage-state-${stateSlug}`}
        data={webPageSchema({
          url: `${SITE_URL}/${stateSlug}`,
          name: `Career Counselling in ${state.name}`,
          description: `GCDA offers career counselling and career assessments in ${cities.length} ${state.name} cities.`,
          primaryImage: `${SITE_URL}/assets/hero-illustration.webp`,
        })}
      />
      <JsonLd id={`ld-speakable-state-${stateSlug}`} data={speakableSchema({ url: `${SITE_URL}/${stateSlug}`, name: `Career Counselling in ${state.name}` })} />
      <JsonLd id={`ld-statehub-${stateSlug}`} data={stateHubSchema({ state, stateSlug, cities })} />
      <JsonLd
        id={`ld-itemlist-state-${stateSlug}`}
        data={itemListSchema({
          url: `${SITE_URL}/${stateSlug}`,
          name: `Career counselling cities in ${state.name}`,
          description: `${cities.length} cities in ${state.name} where GCDA offers career counselling`,
          items: cities.slice(0, 20).map((c) => {
            const slug = slugifyLocation(c.name);
            return {
              name: `Career Counsellor in ${c.name}, ${state.name}`,
              url: `${SITE_URL}/${stateSlug}/career-counsellor-${slug}`,
              description: `Career counselling in ${c.name}, ${state.name}`,
            };
          }),
        })}
      />
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
    q: normalizeCopy(f.q.replace(/{city}/g, city.name).replace(/{district}/g, getDistrictContextLabel(city))),
    a: normalizeCopy(f.a.replace(/{city}/g, city.name).replace(/{district}/g, getDistrictContextLabel(city))),
  }));
  const cityUniqueFaqs = (city.faqs && city.faqs.length && typeof city.faqs[0] === 'object')
    ? city.faqs.map((faq) => ({ q: normalizeCopy(faq.q), a: normalizeCopy(faq.a) }))
    : [];
  const priceFaqs = [
    {
      q: `How much does career counselling cost in ${city.name}?`,
      a: `GCDA career counselling cost in ${city.name} starts at Rs. 2,999 for Stream Selector, Rs. 3,499 for Degree Selector, and Rs. 3,999 for Working Professionals. The right plan depends on whether the decision is after 10th, after 12th, or a working-professional transition.`,
    },
    {
      q: `Are online career counselling charges different in ${city.name}?`,
      a: `Most clients in ${city.name} use online sessions because they are easier to schedule and still include the same structured decision support. Pricing is based more on guidance scope than on format alone.`,
    },
  ];
  const cityFaqs = [...serviceBaseFaqsCity, ...cityUniqueFaqs, ...priceFaqs];
  const cityServiceItems = SERVICE_SLUGS.map((sSlug) => {
    const servicePattern = SERVICE_CITY_PATTERNS[sSlug];
    return servicePattern
      ? {
          name: `${servicePattern.cityLabel} in ${city.name}, ${stateName}`,
          url: `${SITE_URL}${servicePattern.urlPattern(stateSlug, citySlug)}`,
        }
      : null;
  }).filter(Boolean);
  const topCollegeSummary = formatList(city.topColleges || [], 3) || 'local and regional colleges';
  const topExamSummary = formatList(city.topExams || [], 3) || 'JEE Main, NEET, state CETs, and CAT';
  const localSnapshotRows = [
    ['City', `${city.name}, ${stateName}`],
    ['Coverage area', `${getCoverageArea(city, stateName)} and nearby areas`],
    ['Popular entrance exams', topExamSummary],
    ['Nearby colleges often compared', topCollegeSummary],
    ['Local industry context', normalizeCopy(city.industries || 'education, services, and local economy signals')],
    ['Suggested starting plan', getSuggestedPlan(serviceSlug)],
    ['Session format', `Online across ${stateName} + in-person in ${city.name} when needed`],
  ];

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
  const otherCityItems = otherCitySlugs.map((otherSlug) => {
    const otherCityName = otherSlug.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
    return {
      name: `${cityLabel} in ${otherCityName}, ${stateName}`,
      url: `${SITE_URL}${pattern.urlPattern(stateSlug, otherSlug)}`,
      description: `${servicePage.title} in ${otherCityName}, ${stateName}`,
    };
  });

  // Local notes from indiaLocations.js (city-specific for student/professional)
  // We normalize visible copy and fall back to controlled templates when
  // generated content contains scaling artifacts.
  const studentNote = buildStudentNote(city, stateName);
  const professionalNote = buildProfessionalNote(city);
  const deliveryNote = buildDeliveryNote(city, stateName);

  // Per-service, per-city unique longDescription and whyItMatters from
  // /data/cityServiceContent.js. We normalize text and fall back to cleaner
  // service-aware templates when generated content contains artifacts.
  const cityKey = stateSlug + '/' + citySlug;
  const serviceCityContent = (CITY_SERVICE_CONTENT[serviceSlug] || {})[cityKey];
  const rawLongDescription = serviceCityContent?.longDescription
    || baseService?.longDescription
    || servicePage.heroLead
    || servicePage.shortDescription;
  const rawWhyItMatters = serviceCityContent?.whyItMatters
    || baseService?.whyItMatters
    || null;
  const longDescription = getCleanCityText(
    rawLongDescription,
    () => buildFallbackLongDescription(city, stateName, servicePage)
  );
  const whyItMatters = rawWhyItMatters
    ? getCleanCityText(rawWhyItMatters, () => buildFallbackWhyItMatters(city, servicePage))
    : buildFallbackWhyItMatters(city, servicePage);

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{stateName}</span>
            <h1>{`${cityLabel} in ${city.name}, ${stateName}`}</h1>
            <p className="page-hero-copy">{longDescription}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Free Consultation</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
            <ul className="hero-proof" aria-label="City service proof points">
              <li>{`Online sessions across ${city.name}`}</li>
              <li>{`In-person in ${city.name}`}</li>
              <li>50K+ career sessions delivered</li>
            </ul>
          </div>
          <div className="surface-card media-card">
            <Image
              src="/assets/hero-illustration.webp"
              alt={`${servicePage.title} in ${city.name}`}
              width={1200}
              height={896}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ANSWER BLOCK (AEO) */}
      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {`${servicePage.title} in ${city.name} from GCDA is a structured, mentor-led service available online across ${getCoverageArea(city, stateName)}, with in-person sessions when needed. ${servicePage.shortDescription} Plans start at Rs. 2,999 for the Stream Selector and include assessments, mentor sessions, and a written action plan.`}
          </AnswerBlock>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionHeader
            eyebrow="Quick local snapshot"
            title={`${servicePage.title} in ${city.name}: key facts at a glance`}
            description="A compact, extractable summary of the local decision context, delivery format, exams, colleges, and recommended starting point."
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <tbody>
                {localSnapshotRows.map(([label, value]) => (
                  <tr key={label}>
                    <td><strong>{label}</strong></td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-caption">Structured local summary for {city.name}, {stateName}.</p>
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
            <h3>{`${city.name} at a glance`}</h3>
            <ul className="bullet-list compact">
              <li><strong>State:</strong> {stateName}</li>
              <li><strong>District:</strong> {getDistrictLabel(city)}</li>
              <li><strong>Region:</strong> {state.region}</li>
              <li><strong>Top industries:</strong> {normalizeCopy(city.industries)}</li>
              <li><strong>Landmarks:</strong> {normalizeCopy(city.landmarks)}</li>
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
              <h3>{`For students in ${city.name}`}</h3>
              <p>{studentNote}</p>
            </article>
            <article className="feature-row">
              <h3>{`For working professionals in ${city.name}`}</h3>
              <p>{professionalNote}</p>
            </article>
            <article className="feature-row">
              <h3>{`How we deliver in ${city.name}`}</h3>
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
              description={`A non-exhaustive list of institutions our students in and around ${city.name} typically shortlist. For personalised college shortlisting, see our degree selection guidance or talk to a counsellor.`}
            />
            {city.topColleges.length > 0 ? (
              <ul className="bullet-list">
                {city.topColleges.map((c, idx) => (
                  <li key={c}>
                    {idx < 2 ? (
                      <Link href="/blog/how-to-choose-stream-after-10th-2027" className="text-link" title={`Learn more about college options near ${city.name}`}>
                        {normalizeCopy(c)}
                      </Link>
                    ) : idx === 2 ? (
                      <a href={`https://www.google.com/search?q=${encodeURIComponent(c + ' ' + city.name)}`} target="_blank" rel="noopener noreferrer" className="text-link">
                        {normalizeCopy(c)}
                      </a>
                    ) : (
                      normalizeCopy(c)
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{city.name} students typically consider a mix of local and regional colleges.</p>
            )}
            <p className="inline-link-row">
              <Link href="/career-counselling/degree-selection-guidance" className="text-link">Degree selection guidance →</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/contact" className="text-link">Talk to a counsellor →</Link>
            </p>
          </div>
          <div>
            <SectionHeader
              eyebrow="Exams that matter"
              title={`Entrance exams for ${city.name} students`}
              description={`Most ${city.name} students plan for a mix of national and state-level exams. Read our stream selection guide for exam planning context.`}
            />
            {city.topExams.length > 0 ? (
              <ul className="bullet-list">
                {city.topExams.map((e, idx) => (
                  <li key={e}>
                    {idx < 2 ? (
                      <Link
                        href={e.toLowerCase().includes('jee') ? '/blog/jee-main-preparation-2027-guide' : e.toLowerCase().includes('neet') ? '/blog/career-options-after-12th-pcb-2027' : '/career-counselling/stream-selection-guidance'}
                        className="text-link"
                      >
                        {normalizeCopy(e)}
                      </Link>
                    ) : (
                      normalizeCopy(e)
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>For {city.name}, the most common entrance tracks are JEE Main, NEET, state CETs, and CAT.</p>
            )}
            <p className="inline-link-row">
              <Link href="/blog/how-to-choose-stream-after-10th-2027" className="text-link">Stream selection guide →</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/career-counselling/stream-selection-guidance" className="text-link">Stream guidance service →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Pricing in your city"
            title={`Career counselling cost in ${city.name}`}
            description={`GCDA uses the same transparent national pricing in ${city.name}, while the right plan depends on whether you need stream selection, degree planning, or working-professional guidance.`}
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Fees</th>
                  <th>Best for</th>
                  <th>Typical outcome</th>
                </tr>
              </thead>
              <tbody>
                {CITY_PRICE_ROWS.map((row) => (
                  <tr key={row.plan}>
                    <td><strong>{row.plan}</strong></td>
                    <td>{row.fees}</td>
                    <td>{row.bestFor}</td>
                    <td>{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-caption">{`Career counselling cost in ${city.name}, with the same transparent GCDA plans available online and in-person where relevant.`}</p>
          <div className="narrow-center" style={{ textAlign: 'center', marginTop: '1.2rem' }}>
            <p>{`Most clients in ${city.name} choose ${getSuggestedPlan(serviceSlug)} first, but the right choice depends on the decision stage, assessment depth, and whether the family or professional needs a broader action plan.`}</p>
            <div className="button-row" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              <Link href="/plan" className="button button-secondary">Compare All Plans</Link>
            </div>
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
            description={`Common questions from students, parents, and working professionals in ${city.name}, plus the questions we hear most often across ${getCoverageArea(city, stateName)} and nearby areas.`}
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
                    <p className="city-blurb">{normalizeCopy(servicePage.shortDescription)}</p>
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
            description={`Every city page covers one GCDA service. Use the links below to switch to any of the other ${SERVICE_SLUGS.length - 1} services for the same city.`}
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
            <h2>{`Ready to plan your ${servicePage.title.toLowerCase()} in ${city.name}?`}</h2>
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
        id={`ld-webpage-${serviceSlug}-${stateSlug}-${citySlug}`}
        data={webPageSchema({
          url: pageUrl,
          name: `${servicePage.title} in ${city.name}, ${stateName}`,
          description: `${servicePage.title} in ${city.name}, ${stateName}. ${servicePage.shortDescription}`,
          primaryImage: `${SITE_URL}/assets/hero-illustration.webp`,
        })}
      />
      <JsonLd
        id={`ld-service-${serviceSlug}-${stateSlug}-${citySlug}`}
        data={cityServicePageSchema({
          url: pageUrl,
          city,
          stateName,
          serviceName: servicePage.title,
          description: `${servicePage.title} in ${city.name}, ${stateName}. ${servicePage.shortDescription}`,
          cityServiceLinks: cityServiceItems,
        })}
      />
      <JsonLd id={`ld-speakable-${serviceSlug}-${stateSlug}-${citySlug}`} data={speakableSchema({ url: pageUrl, name: `${servicePage.title} in ${city.name}, ${stateName}` })} />
      <JsonLd
        id={`ld-itemlist-othercities-${serviceSlug}-${stateSlug}-${citySlug}`}
        data={itemListSchema({
          url: pageUrl,
          name: `${servicePage.title} in other ${stateName} cities`,
          description: `Other cities in ${stateName} where GCDA offers ${servicePage.title.toLowerCase()}`,
          items: otherCityItems.map((item) => ({
            name: item.name,
            url: item.url,
            description: item.description,
          })),
        })}
      />
      <JsonLd
        id={`ld-itemlist-services-${serviceSlug}-${stateSlug}-${citySlug}`}
        data={itemListSchema({
          url: pageUrl,
          name: `GCDA services in ${city.name}`,
          description: `All 8 GCDA career counselling services in ${city.name}, ${stateName}`,
          items: cityServiceItems.map((item) => ({
            name: item.name,
            url: item.url,
            description: item.name,
          })),
        })}
      />
    </>
  );
}

/* ----------------- Top-level Service Main Page ----------------- */
function generateServicePageMetadata(serviceSlug, servicePage) {
  const TITLE_MAP = {
    'career-counselling-seminar': 'Career Seminars in India: 438 Cities',
    'stream-selection-guidance': 'Stream Selection Guidance in India',
    'degree-selection-guidance': 'Degree Selection Guidance in India',
    'guidance-for-working-professionals': 'Working Professional Guidance India',
  };
  const DESCRIPTION_MAP = {
    'career-counselling-seminar': 'Interactive career counselling seminars for schools, colleges, parents, and institutions across India.',
    'stream-selection-guidance': 'Stream selection after 10th for Science, Commerce, Arts, diploma, and future-fit academic choices.',
    'degree-selection-guidance': 'Degree selection after 12th with course, college, entrance-exam, and long-term career planning support.',
    'guidance-for-working-professionals': 'Career growth, transition, MBA, and role-positioning support for working professionals across India.',
  };
  const title = TITLE_MAP[serviceSlug] || `${servicePage.title} in India`;
  const description = DESCRIPTION_MAP[serviceSlug] || servicePage.shortDescription;
  const url = `${SITE_URL}/${serviceSlug}`;
  return {
    title,
    description,
    keywords: [
      `${servicePage.title.toLowerCase()} India`,
      `${servicePage.title.toLowerCase()} online`,
      `${servicePage.title.toLowerCase()} cost`,
      `best ${servicePage.title.toLowerCase()}`,
      `${servicePage.title.toLowerCase()} in city`,
    ],
    alternates: { canonical: `/${serviceSlug}` },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: '/assets/hero-illustration.webp',
          width: 1200,
          height: 630,
          alt: `${servicePage.title} in India – GCDA`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: '/assets/hero-illustration.webp',
          width: 1200,
          height: 630,
          alt: `${servicePage.title} in India – GCDA`,
        },
      ],
    },
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
  // All cities not needed on client
  const allCities = [];
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
            <Image
              src="/assets/hero-illustration.webp"
              alt={servicePage.title}
              width={1200}
              height={896}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {`GCDA provides ${servicePage.title.toLowerCase()} across India — online sessions in 438 cities plus in-person sessions everywhere. ${servicePage.shortDescription} Plans start at Rs. 2,999 for the Stream Selector.`}
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
            description="We serve 438 cities across India. Here are a few popular locations:"
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
            <Link href="/cities" className="text-link">View all 438 cities →</Link>
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
            description="Every service has its own main page and 438 city pages. Use the links below to explore the full GCDA service catalog."
            center
          />
          <div className="card-grid services-cross-grid">
            {SERVICE_SLUGS.filter((s) => s !== serviceSlug && s !== 'career-counselling').map((sSlug) => {
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
        id={`ld-webpage-main-${serviceSlug}`}
        data={webPageSchema({
          url,
          name: `${servicePage.title} in India`,
          description: servicePage.shortDescription,
          primaryImage: `${SITE_URL}/assets/hero-illustration.webp`,
        })}
      />
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
      <JsonLd id={`ld-speakable-main-${serviceSlug}`} data={speakableSchema({ url, name: `${servicePage.title} in India` })} />
    </>
  );
}
