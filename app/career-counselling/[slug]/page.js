import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import SeminarTypesGrid from '@/components/SeminarTypesGrid';
import JsonLd from '@/components/JsonLd';
import CTASection from '@/components/CTASection';
import { services, company } from '@/data/site';
import { SEMINAR_TYPES } from '@/data/seminars';
import { SERVICE_CITY_PATTERNS, SERVICE_SLUGS, getServicePage } from '@/data/servicePages';
import { STATES } from '@/data/indiaLocations';
import { faqSchema, breadcrumbSchema, howToSchema, serviceSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service not found' };

  const title = `${service.title} | GCDA Career Counselling`;
  const description = service.shortDescription;
  const url = `${SITE_URL}/career-counselling/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} India`,
      `${service.title.toLowerCase()} online`,
      `${service.title.toLowerCase()} GCDA`,
      `best ${service.title.toLowerCase()}`,
      `${service.title.toLowerCase()} cost`,
    ],
    alternates: { canonical: `/career-counselling/${service.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // Use the rich servicePages data if available, otherwise fall back
  // to the base services data (this is the legacy path).
  const servicePageData = getServicePage(service.slug);
  const longDescription = service.longDescription || servicePageData?.heroLead || service.shortDescription;
  const whyItMatters = service.whyItMatters || null;
  const benefits = service.benefits || service.includes || [];
  const idealFor = service.idealFor || [];
  const outcomes = service.outcomes || [];
  const steps = (service.steps || []).map((s, i) => {
    // If step is a string (legacy), wrap it; otherwise use the rich object.
    if (typeof s === 'string') {
      return { title: `Step ${i + 1}`, body: s };
    }
    return s;
  });
  const faqs = service.faqs || [];
  const popularCities = service.popularCities || [];

  const url = `${SITE_URL}/career-counselling/${service.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/career-counselling' },
    { name: service.title, url: `/career-counselling/${service.slug}` },
  ];

  // Related services (other base services)
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Service data for the cross-link grid (includes Personal Counselling, Career Assessment, etc.)
  const allServicePages = SERVICE_SLUGS.map((sSlug) => {
    const sp = getServicePage(sSlug);
    return sp ? { slug: sSlug, title: sp.title, shortDescription: sp.shortDescription } : null;
  }).filter(Boolean);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{service.icon} {service.title}</span>
            <h1>{service.heroDescription}</h1>
            <p className="page-hero-copy">{longDescription}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Free Consultation</Link>
              <Link href="#how-it-works" className="button button-secondary">How it Works</Link>
            </div>
            <div className="hero-proof">
              <span>98% satisfied clients</span>
              <span>50K+ career sessions delivered</span>
              <span>Online + in-person</span>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </section>

      {/* ============ ANSWER BLOCK (AEO) ============ */}
      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            {`${service.title} at GCDA is a structured, mentor-led service that helps students, parents, and working professionals make confident, evidence-based career decisions. Sessions are available online across India and in-person in your city, with personalised plans, certified mentors, and proven frameworks.`}
          </AnswerBlock>
        </div>
      </section>

      {/* ============ WHY IT MATTERS ============ */}
      {whyItMatters ? (
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeader
                eyebrow="Why this matters"
                title="Why families and professionals choose this service"
                description={whyItMatters}
              />
              <div className="button-row" style={{ marginTop: '1.4rem' }}>
                <Link href="/contact" className="button button-primary">Talk to a Counsellor</Link>
                <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
              </div>
            </div>
            <div className="info-panel">
              <h3>Quick facts</h3>
              <ul className="bullet-list compact">
                <li><strong>Format:</strong> 1:1 (online or in-person in your city)</li>
                <li><strong>Typical length:</strong> 60–120 minutes per session</li>
                <li><strong>Mentor:</strong> Certified, with 8+ years of field experience</li>
                <li><strong>Output:</strong> Written plan + optional follow-up</li>
                <li><strong>Languages:</strong> English, Hindi, and select regional</li>
                <li><strong>Plan starts at:</strong> Rs. 2,999 (Stream Selector)</li>
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {/* ============ BENEFITS / WHAT YOU GET ============ */}
      <section className="section alt-section" id="what-you-get">
        <div className="container">
          <SectionHeader
            eyebrow="What you get"
            title={`What's included in ${service.title.toLowerCase()}`}
            description="Every engagement is structured around real outcomes, not just sessions. Here is exactly what you walk away with."
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

      {/* ============ WHO THIS IS FOR + OUTCOMES ============ */}
      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Who this is for"
              title={`Is ${service.title.toLowerCase()} right for you?`}
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
            <ul className="bullet-list compact">
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="info-panel-cta">
              <Link href="/contact" className="button button-primary block-button">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (DETAILED STEPS) ============ */}
      <section className="section alt-section" id="how-it-works">
        <div className="container">
          <SectionHeader
            eyebrow="How it works"
            title="A straightforward 5-step process"
            description="Every engagement follows the same structured framework so you always know what to expect — no surprises, no vague advice."
            center
          />
          <ol className="steps-timeline">
            {steps.map((step, i) => (
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
        <JsonLd
          id={`ld-howto-${service.slug}`}
          data={howToSchema(
            `How ${service.title} Works at GCDA`,
            steps.map((s) => ({ title: s.title, description: s.body })),
            'PT90M'
          )}
        />
      </section>

      {/* ============ COMPARISON / WHY GCDA ============ */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why GCDA"
            title="What makes our {service} different"
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

      {/* ============ PLANS & PRICING ============ */}
      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Plans & pricing"
            title="Simple, transparent pricing"
            description="Pay for what you need. No long packages, no hidden fees. Every plan includes assessments, mentor sessions, and a written plan."
            center
          />
          <div className="plans-preview-grid">
            <div className="plan-preview">
              <span className="plan-preview-name">Stream Selector</span>
              <span className="plan-preview-price">Rs. 2,999</span>
              <span className="plan-preview-ideal">For class 8–10 students choosing a stream</span>
              <Link href="/plan" className="text-link">View details →</Link>
            </div>
            <div className="plan-preview plan-preview-featured">
              <span className="plan-preview-badge">Most Popular</span>
              <span className="plan-preview-name">Degree Selector</span>
              <span className="plan-preview-price">Rs. 3,499</span>
              <span className="plan-preview-ideal">For class 12 students choosing a degree + college</span>
              <Link href="/plan" className="text-link">View details →</Link>
            </div>
            <div className="plan-preview">
              <span className="plan-preview-name">Working Professionals</span>
              <span className="plan-preview-price">Rs. 3,999</span>
              <span className="plan-preview-ideal">For mid-career switches, MBA, and growth</span>
              <Link href="/plan" className="text-link">View details →</Link>
            </div>
          </div>
          <div className="center-cta">
            <Link href="/plan" className="button button-secondary">Compare all plans</Link>
          </div>
        </div>
      </section>

      {/* ============ SEMINAR TYPES (workshops-seminars only) ============ */}
      {service.slug === 'workshops-seminars' ? (
        <section className="section" id="seminar-types">
          <div className="container">
            <SectionHeader
              eyebrow="4 seminar tracks"
              title="Types of seminars and workshops we offer"
              description="GCDA runs 4 core seminar tracks. Each is structured, expert-led, and built around real student and professional outcomes — available in-person at your campus or online across India."
              center
            />
            <SeminarTypesGrid seminars={SEMINAR_TYPES} city="India" />
          </div>
        </section>
      ) : null}

      {/* ============ TESTIMONIALS ============ */}
      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Real stories"
            title="What clients say"
            description="Families, students, and professionals across India trust GCDA for clear and supportive guidance."
            center
          />
          <div className="testimonials-row">
            <article className="testimonial-card">
              <div className="quote-mark">"</div>
              <p>GCDA helped our son go from confused about Science vs Commerce to a clear 3-year roadmap — with backup options. The family alignment call was a turning point for us.</p>
              <div className="testimonial-author">
                <strong>Parent of a class 10 student</strong>
                <span>Maharashtra</span>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="quote-mark">"</div>
              <p>As a working professional planning an MBA, the structured 90-day plan made the difference. I went from "I should do an MBA" to "I will apply to these 4 programs by these dates".</p>
              <div className="testimonial-author">
                <strong>Mid-career professional</strong>
                <span>Karnataka</span>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="quote-mark">"</div>
              <p>The career assessment data + mentor debrief combo gave me language to explain my strengths to my parents. We stopped arguing and started planning.</p>
              <div className="testimonial-author">
                <strong>Class 12 student</strong>
                <span>Delhi</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ CITIES WE SERVE ============ */}
      <section className="section" id="cities">
        <div className="container">
          <SectionHeader
            eyebrow="Where we deliver"
            title={`${service.title} in major Indian cities`}
            description="Online sessions across India + in-person in major metros. Click any city to see locally relevant guidance, top colleges, and entrance exams."
            center
          />
          <div className="card-grid city-grid">
            {popularCities.map(({ state, city }) => {
              const stateSlug = STATES.find((s) => s.name === state)?.slug;
              const citySlug = city.toLowerCase().replace(/['\s,&.]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
              const serviceUrl = stateSlug ? `/career-counselling/${service.slug}` : '#';
              return (
                <article className="card city-card" key={`${state}-${city}`}>
                  <div className="card-body">
                    <span className="mini-label">{state}</span>
                    <h3>
                      <Link href={serviceUrl}>{service.title} in {city}</Link>
                    </h3>
                    <p className="city-blurb">Online sessions across {city} + in-person where needed.</p>
                    <Link href={serviceUrl} className="text-link">Explore {city} →</Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="center-cta">
            <Link href="/cities" className="text-link">View all 346 cities →</Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section alt-section" id="faq">
        <div className="container narrow-center-wide">
          <SectionHeader
            eyebrow="FAQs"
            title={`Questions about ${service.title.toLowerCase()}`}
            description="Common questions we receive from students, parents, and working professionals. Don't see yours? Contact us and we will answer."
            center
          />
          <FAQList items={faqs} />
        </div>
        <JsonLd id={`ld-faq-${service.slug}`} data={faqSchema(faqs)} />
      </section>

      {/* ============ RELATED SERVICES ============ */}
      {related.length > 0 ? (
        <section className="section" id="related-services">
          <div className="container">
            <SectionHeader
              eyebrow="Related services"
              title="You may also want to explore"
              description="Most clients combine this service with related offerings to get a complete plan."
            />
            <div className="card-grid service-grid">
              {related.map((rel) => (
                <article className="card service-card" key={rel.slug}>
                  <div className="service-card-media">
                    <img src={rel.image} alt={rel.title} />
                  </div>
                  <div className="card-body">
                    <div className="icon-badge">{rel.icon}</div>
                    <h3>
                      <Link href={`/career-counselling/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p>{rel.shortDescription}</p>
                    <Link href={`/career-counselling/${rel.slug}`} className="text-link">Explore {rel.title.toLowerCase()} →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ============ OTHER GCDA SERVICES (cross-link to all 7) ============ */}
      <section className="section alt-section" id="other-services">
        <div className="container">
          <SectionHeader
            eyebrow="Explore other services"
            title="Other GCDA services you may need"
            description="Every service has its own main page and 346 city pages. Use the links below to explore the full GCDA service catalog."
            center
          />
          <div className="card-grid services-cross-grid">
            {allServicePages
              .filter((s) => s.slug !== service.slug && s.slug !== 'career-counselling')
              .map((s) => {
                const isStandalone = ['career-counselling-seminar', 'career-certification', 'stream-selection-guidance', 'degree-selection-guidance', 'guidance-for-working-professionals'].includes(s.slug);
                const href = isStandalone ? `/${s.slug}` : `/career-counselling/${s.slug}`;
                return (
                  <Link key={s.slug} href={href} className="service-cross-link">
                    <span className="service-cross-label">{s.title}</span>
                    <span className="service-cross-state">in India</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <CTASection
        title={`Ready to book ${service.title.toLowerCase()}?`}
        description="Connect with GCDA and we will guide you toward the right next step — online across India or in-person in your city."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Chat on WhatsApp"
      />

      {/* ============ JSON-LD SCHEMA ============ */}
      <JsonLd id={`ld-breadcrumb-${service.slug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id={`ld-service-${service.slug}`}
        data={serviceSchema(service)}
      />
    </>
  );
}
