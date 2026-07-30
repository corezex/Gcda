import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import '@/styles/non-homepage.css';
import { STATES } from '@/data/indiaLocations';
import { services } from '@/data/site';
import { SERVICE_CITY_PATTERNS } from '@/data/servicePages';
import { breadcrumbSchema, itemListSchema, webPageSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Site Index & Crawl Resources',
  description:
    'Structured crawl and discovery hub for GCDA services, state pages, city pages, support pages, and XML sitemap resources.',
  alternates: { canonical: '/site-index' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'GCDA Site Index & Crawl Resources',
    description:
      'Structured discovery hub for GCDA services, states, cities, and XML sitemap resources.',
    url: `${SITE_URL}/site-index`,
    images: [
      {
        url: '/assets/hero-illustration.webp',
        width: 1200,
        height: 630,
        alt: 'GCDA site index and crawl resources',
      },
    ],
  },
};

const supplementalSitemaps = [
  { href: '/sitemap.xml', label: 'Primary sitemap', description: 'Main XML sitemap covering the full production site.' },
  { href: '/core-sitemap.xml', label: 'Core sitemap', description: 'Homepage, trust pages, support pages, and primary hubs.' },
  { href: '/service-sitemap.xml', label: 'Service sitemap', description: 'Service hubs, detail pages, and certification pages.' },
  { href: '/state-sitemap.xml', label: 'State sitemap', description: 'All state and union-territory hub pages.' },
  { href: '/city-sitemap.xml', label: 'City sitemap', description: 'All city and city-by-service pages for deeper location discovery.' },
  { href: '/blog-sitemap.xml', label: 'Blog sitemap', description: 'Blog hub, paginated archives, and all published articles.' },
  { href: '/support-sitemap.xml', label: 'Support sitemap', description: 'High-intent support and comparison pages.' },
  { href: '/llms.txt', label: 'llms.txt', description: 'Short AI-crawler guidance file with canonical crawl starting points.' },
  { href: '/llms-full.txt', label: 'llms-full.txt', description: 'Expanded AI-crawler index for services, states, and URL patterns.' },
  { href: '/robots.txt', label: 'robots.txt', description: 'Crawler rules plus all sitemap declarations.' },
];

const topCities = [
  ['maharashtra', 'mumbai', 'Career Counsellor'],
  ['delhi', 'new-delhi', 'Career Counsellor'],
  ['karnataka', 'bengaluru', 'Career Counsellor'],
  ['tamil-nadu', 'chennai', 'Career Counsellor'],
  ['telangana', 'hyderabad', 'Career Counsellor'],
  ['west-bengal', 'kolkata', 'Career Counsellor'],
  ['maharashtra', 'mumbai', 'Career Assessment'],
  ['delhi', 'new-delhi', 'Stream Selection'],
  ['karnataka', 'bengaluru', 'Degree Selection'],
  ['tamil-nadu', 'chennai', 'Working Professional Guidance'],
].map(([stateSlug, citySlug, label]) => {
  const serviceSlug = Object.entries(SERVICE_CITY_PATTERNS).find(([, config]) => config.cityLabel === label)?.[0] || 'career-counselling';
  const href = SERVICE_CITY_PATTERNS[serviceSlug].urlPattern(stateSlug, citySlug);
  return {
    href,
    label: `${label} in ${citySlug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}`,
  };
});

export default function SiteIndexPage() {
  const visibleStates = STATES.filter((state) => (state.cityCount || 0) > 0);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Site Index', url: '/site-index' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Discovery resources</span>
            <h1>GCDA site index for crawlers, AI systems, and deep-page discovery.</h1>
            <p className="page-hero-copy">
              This page is a crawl-friendly HTML hub for the production website. It surfaces the primary XML sitemaps, AI-crawler guidance files, service hubs, and all state hubs so deeper city pages are easier to discover from both HTML links and machine-readable sitemap resources.
            </p>
            <ul className="hero-proof" aria-label="Discovery signals">
              <li>Canonical production domain</li>
              <li>All state hubs linked</li>
              <li>City sitemap declared</li>
            </ul>
          </div>
          <div className="info-panel">
            <h3>Recommended crawl order</h3>
            <ol className="bullet-list compact">
              <li>Read llms.txt and robots.txt</li>
              <li>Fetch sitemap.xml plus the topical XML sitemaps</li>
              <li>Open the service and state hubs</li>
              <li>Follow state hubs into city pages and city-by-service pages</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            For full GCDA location discovery, use the city sitemap together with the state hubs. Every state page links onward to its cities, and city pages link across all GCDA service variants for the same location.
          </AnswerBlock>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Machine-readable resources"
            title="XML sitemaps and crawler guidance files"
            description="These are the fastest entry points for Perplexity, ChatGPT, Claude, and other crawlers that want broad coverage without relying only on one page at a time."
            center
          />
          <div className="card-grid city-grid">
            {supplementalSitemaps.map((item) => (
              <article className="card city-card" key={item.href}>
                <div className="card-body">
                  <h3><Link href={item.href}>{item.label}</Link></h3>
                  <p className="city-blurb">{item.description}</p>
                  <Link href={item.href} className="text-link">Open resource</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Service hubs"
            title="Primary service entry pages"
            description="These are the main service pages that branch into detail pages, state hubs, and city-by-service pages."
            center
          />
          <div className="card-grid services-cross-grid">
            <Link href="/career-counselling" className="service-cross-link">
              <span className="service-cross-label">All Services</span>
              <span className="service-cross-state">primary hub</span>
            </Link>
            {services.map((service) => (
              <Link key={service.slug} href={`/career-counselling/${service.slug}`} className="service-cross-link">
                <span className="service-cross-label">{service.title}</span>
                <span className="service-cross-state">service detail page</span>
              </Link>
            ))}
            <Link href="/career-certification" className="service-cross-link">
              <span className="service-cross-label">Career Counselling Certification</span>
              <span className="service-cross-state">standalone programme</span>
            </Link>
            <Link href="/career-counselling-seminar" className="service-cross-link">
              <span className="service-cross-label">Career Counselling Seminar</span>
              <span className="service-cross-state">top-level seminar hub</span>
            </Link>
            <Link href="/stream-selection-guidance" className="service-cross-link">
              <span className="service-cross-label">Stream Selection Guidance</span>
              <span className="service-cross-state">top-level stream hub</span>
            </Link>
            <Link href="/degree-selection-guidance" className="service-cross-link">
              <span className="service-cross-label">Degree Selection Guidance</span>
              <span className="service-cross-state">top-level degree hub</span>
            </Link>
            <Link href="/guidance-for-working-professionals" className="service-cross-link">
              <span className="service-cross-label">Working Professional Guidance</span>
              <span className="service-cross-state">top-level professional hub</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="State hubs"
            title="All state and union-territory location hubs"
            description="Each state hub links to its full city set, and each city page links across all eight GCDA service variants for that location."
            center
          />
          <div className="card-grid city-grid">
            {visibleStates.map((state) => (
              <article className="card city-card" key={state.slug}>
                <div className="card-body">
                  <span className="mini-label">{state.region}</span>
                  <h3><Link href={`/${state.slug}`}>{state.name}</Link></h3>
                  <p className="city-state">{state.cityCount} city pages available from this hub</p>
                  <p className="city-blurb">Open the state page to discover all covered cities plus service links for each city.</p>
                  <Link href={`/${state.slug}`} className="text-link">Open state hub</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Deep page examples"
            title="Representative city and city-by-service pages"
            description="These examples help crawlers understand the deeper URL structure before expanding across the full city sitemap."
            center
          />
          <div className="card-grid city-grid">
            {topCities.map((item) => (
              <article className="card city-card" key={item.href}>
                <div className="card-body">
                  <h3><Link href={item.href}>{item.label}</Link></h3>
                  <p className="city-blurb">Representative deep page for the GCDA city-and-service URL pattern.</p>
                  <Link href={item.href} className="text-link">Open page</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-site-index" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id="ld-webpage-site-index"
        data={webPageSchema({
          url: `${SITE_URL}/site-index`,
          name: 'GCDA Site Index & Crawl Resources',
          description: 'Structured discovery hub for GCDA services, state pages, city pages, support pages, and sitemap resources.',
          primaryImage: `${SITE_URL}/assets/hero-illustration.webp`,
        })}
      />
      <JsonLd
        id="ld-itemlist-state-hubs"
        data={itemListSchema({
          url: `${SITE_URL}/site-index`,
          name: 'GCDA state hubs',
          description: 'All state and union-territory hubs for GCDA location discovery.',
          items: visibleStates.map((state) => ({
            name: state.name,
            url: `${SITE_URL}/${state.slug}`,
            description: `${state.cityCount} GCDA city pages inside ${state.name}`,
          })),
        })}
      />
    </>
  );
}
