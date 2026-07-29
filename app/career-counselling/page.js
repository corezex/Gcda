import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import SeminarTypesGrid from '@/components/SeminarTypesGrid';
import JsonLd from '@/components/JsonLd';
import { journeySteps, services, siteFaqs } from '@/data/site';
import { SEMINAR_TYPES } from '@/data/seminars';
import { SERVICE_CITY_PATTERNS } from '@/data/servicePages';
import { STATES } from '@/data/indiaLocations';
import { faqSchema, howToSchema, serviceSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Counselling Services in India',
  description:
    '6 career counselling services – personal, assessment, workshops, stream & degree guidance, working professionals. Online & in-person.',
  keywords: [
    'career counselling services India',
    'personal counselling',
    'career assessment',
    'stream selection guidance',
    'degree selection guidance',
    'working professional guidance',
    'workshops and seminars',
  ],
  alternates: { canonical: '/career-counselling' },
  openGraph: {
    title: 'Career Counselling Services in India',
    description:
      '6 services – personal, assessment, workshops, stream & degree guidance, working professionals.',
    url: 'https://gcdassociation.org/career-counselling',
    images: [
      {
        url: '/assets/service-illustration.webp',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling services overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Services in India',
    description: '6 career services in India – personal, assessment, stream & degree, working pros.',
    images: [
      {
        url: '/assets/service-illustration.webp',
        width: 1200,
        height: 630,
        alt: 'Career Counselling Services in India – GCDA',
      },
    ],
  },
};

export default function CareerCounsellingPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Career Counselling', url: '/career-counselling' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Our services</span>
            <h1>Career counselling that turns uncertainty into a clear roadmap.</h1>
            <p className="page-hero-copy">
              GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth. Every service is designed to move you from confusion to clarity.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <Link href="/plan" className="button button-secondary">View Plans</Link>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.webp" alt="GCDA career counselling services" width="1200" height="896" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <AnswerBlock>
            GCDA offers 6 core career counselling services: Personal Counselling, Career Assessment, Workshops &amp; Seminars, Stream Selection Guidance, Degree Selection Guidance, and Working Professional Guidance. All services are available online across India and in-person.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we offer"
            title="Career counselling services"
            description="Click any service to learn more about what&apos;s included, who it&apos;s for, and how it works."
            center
          />
          <div className="card-grid service-grid" id="services">
            {services.map((service) => (
              <article className="card service-card" key={service.slug} id={service.slug}>
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} width="1376" height="768" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="icon-badge">{service.icon}</div>
                  <h3>
                    <Link href={`/career-counselling/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/career-counselling/${service.slug}`} className="text-link">Learn more →</Link>
                </div>
              </article>
            ))}

            {/* Career Counselling Certification — separate programme */}
            <article className="card service-card" id="career-certification">
              <div className="service-card-media">
                <img src="/assets/career-7.webp" alt="Career Counselling Certification" width="1376" height="768" loading="lazy" decoding="async" />
              </div>
              <div className="card-body">
                <div className="icon-badge">🎓</div>
                <h3>
                  <Link href="/career-certification">Career Counselling Certification</Link>
                </h3>
                <p>
                  A comprehensive offline + online certification programme for aspiring and practising career counsellors. Build the skills to guide students and professionals with confidence.
                </p>
                <Link href="/career-certification" className="text-link">Learn more →</Link>
              </div>
            </article>
          </div>
        </div>
        {services.map((service) => (
          <JsonLd key={`ld-svc-${service.slug}`} id={`ld-svc-${service.slug}`} data={serviceSchema(service)} />
        ))}
      </section>

      {/* Cross-link to city pages for every service (helps users find their city's variant) */}
      <section className="section alt-section" id="all-cities">
        <div className="container">
          <SectionHeader
            eyebrow="Explore by city × service"
            title="Find GCDA career counselling in your city"
            description="We deliver 8 core services across 438 cities. Click any combination below to find a counsellor, assessment, stream, degree, working-professional, seminar, or certification programme in your city."
            center
          />
          <div className="services-mega-grid">
            {[
              ['maharashtra', 'mumbai'],
              ['karnataka', 'bengaluru'],
              ['delhi', 'new-delhi'],
              ['tamil-nadu', 'chennai'],
              ['telangana', 'hyderabad'],
              ['west-bengal', 'kolkata'],
              ['gujarat', 'ahmedabad'],
              ['rajasthan', 'jaipur'],
              ['uttar-pradesh', 'lucknow'],
              ['andhra-pradesh', 'amaravati'],
              ['andhra-pradesh', 'visakhapatnam'],
              ['punjab', 'ludhiana'],
            ].map(([sSlug, cSlug]) => {
              const state = STATES.find((st) => st.slug === sSlug);
              const cityName = cSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
              return (
                <div className="services-mega-row" key={`${sSlug}-${cSlug}`}>
                  <div className="services-mega-row-head">
                    <span className="mini-label">{state ? state.name : sSlug}</span>
                    <h3>{cityName}</h3>
                  </div>
                  <ul className="services-mega-row-links">
                    {[
                      ['career-counselling', 'Career Counsellor'],
                      ['personal-counselling', 'Personal Counselling'],
                      ['career-assessment', 'Career Assessment'],
                      ['career-counselling-seminar', 'Seminar'],
                      ['career-certification', 'Certification'],
                      ['stream-selection-guidance', 'Stream Selection'],
                      ['degree-selection-guidance', 'Degree Selection'],
                      ['guidance-for-working-professionals', 'Working Pro'],
                    ].map(([svcKey, label]) => {
                      const pat = SERVICE_CITY_PATTERNS[svcKey];
                      if (!pat) return null;
                      return (
                        <li key={svcKey}>
                          <Link href={pat.urlPattern(sSlug, cSlug)}>{label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
            eyebrow="Workshops & Seminars"
            title="4 types of seminars and workshops we offer"
            description="As part of our workshops and seminars service, GCDA runs 4 dedicated tracks. Each is structured, expert-led, and built around real student and professional outcomes — available in-person at your campus or online across India."
            center
          />
          <SeminarTypesGrid seminars={SEMINAR_TYPES} city="India" />
          <div className="center-cta">
            <Link href="/career-counselling-seminar" className="text-link">See seminars in your city →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our process"
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
        <JsonLd id="ld-howto-services" data={howToSchema('How GCDA Career Counselling Works', journeySteps.map((s) => ({ title: s.title, description: s.description })), 'PT90M')} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Popular guidance pages"
            title="Explore high-intent counselling topics"
            description="These supporting pages answer common search-driven questions around online counselling, parents, assessments, and choosing the right kind of help."
            center
          />
          <div className="card-grid city-grid">
            {[
              { href: '/career-counselling-online-india', label: 'Online Career Counselling in India' },
              { href: '/career-counsellor-near-me', label: 'Career Counsellor Near Me' },
              { href: '/best-career-counselling-in-india', label: 'Best Career Counselling in India' },
              { href: '/career-counselling-for-parents', label: 'Career Counselling for Parents' },
              { href: '/psychometric-test-for-students', label: 'Psychometric Test for Students' },
              { href: '/aptitude-test-for-students', label: 'Aptitude Test for Students' },
              { href: '/career-counselling-vs-aptitude-test', label: 'Career Counselling vs Aptitude Test' },
              { href: '/online-vs-offline-career-counselling', label: 'Online vs Offline Career Counselling' },
            ].map((item) => (
              <article className="card city-card" key={item.href}>
                <div className="card-body">
                  <h3><Link href={item.href}>{item.label}</Link></h3>
                  <Link href={item.href} className="text-link">Explore topic →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title="Common questions about GCDA services" center />
          <FAQList items={siteFaqs} />
        </div>
        <JsonLd id="ld-faq-services" data={faqSchema(siteFaqs)} />
      </section>

      <CTASection
        title="Need help choosing the right service?"
        description="Tell GCDA where you are stuck, and we will guide you to the most suitable service or plan."
      />

      <JsonLd id="ld-breadcrumb-services" data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}
