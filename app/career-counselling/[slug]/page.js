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
import { faqSchema, breadcrumbSchema, howToSchema, serviceSchema, speakableSchema, itemListSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

const SERVICE_PAGE_HEADINGS = {
  'personal-counselling': 'Personal Counselling in India',
  'career-assessment': 'Career Assessment in India',
  'workshops-seminars': 'Workshops & Seminars in India',
  'stream-selection-guidance': 'Stream Selection Guidance in India',
  'degree-selection-guidance': 'Degree Selection Guidance in India',
  'working-professionals-guidance': 'Guidance for Working Professionals in India',
};

function getServicePageHeading(service) {
  return SERVICE_PAGE_HEADINGS[service.slug] || `${service.title} in India`;
}

function getServiceCityUrl(serviceSlug, stateName, cityName) {
  const stateObj = STATES.find((s) => s.name === stateName);
  const stateSlug = stateObj?.slug;
  const citySlug = cityName.toLowerCase().replace(/['\s,&.]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const pattern = SERVICE_CITY_PATTERNS[serviceSlug] || SERVICE_CITY_PATTERNS['career-counselling'];
  if (!stateSlug || !pattern) return `/career-counselling/${serviceSlug}`;
  return pattern.urlPattern(stateSlug, citySlug);
}

const SERVICE_INTENT_CONTENT = {
  'career-assessment': {
    metadataTitle: 'Career Assessment Test India – Aptitude & Psychometric',
    metadataDescription:
      'Career assessment test in India with aptitude, interest, and psychometric tools for students choosing streams, degrees, and careers.',
    answerBlock:
      'GCDA offers a career assessment test in India that combines aptitude, interest, and psychometric inputs for students, parents, and graduates. Instead of a generic personality quiz, the service helps you understand fit for streams, degrees, and career paths through structured assessment plus mentor interpretation.',
    section: {
      eyebrow: 'Assessment clarity',
      title: 'Career assessment test for students: what to expect',
      description: 'This page already covers career assessment in India. The key is to make the student-facing decision language more explicit: what is tested, what the report means, and when to use it.',
      items: [
        {
          title: 'What does a career assessment test for students include?',
          body: 'A serious student assessment should combine aptitude, interests, and psychometric indicators instead of relying on a single label. At GCDA, the goal is not to tell a student they are only “creative” or “analytical”, but to show which streams, degrees, and career clusters fit best and why.',
        },
        {
          title: 'Aptitude test vs psychometric test vs career assessment',
          body: 'An aptitude test measures capacity in areas like numbers, logic, or verbal reasoning. A psychometric test looks at behavioural and motivational traits. A full career assessment combines both, then translates them into educational and career decisions with context and mentoring.',
        },
        {
          title: 'When should a class 10 or class 12 student take a career assessment?',
          body: 'The best time is before a high-stakes decision like stream selection after class 10 or degree selection after class 12. It is also useful when a student is stuck between multiple options and the family wants evidence rather than opinions.',
        },
      ],
    },
    table: {
      headers: ['Option', 'What it measures', 'Best used for'],
      rows: [
        ['Aptitude test', 'Numerical, verbal, abstract, and reasoning strengths', 'Checking subject and problem-solving fit'],
        ['Psychometric test', 'Behavioural tendencies, interests, work style, and motivation', 'Understanding preference and personality patterns'],
        ['Full career assessment', 'Aptitude + psychometric + mentor interpretation', 'Choosing streams, degrees, colleges, and career pathways'],
      ],
      caption: 'Assessment formats compared for students and parents making education decisions.',
    },
    extraFaqs: [
      {
        q: 'What is a career assessment test for students?',
        a: 'A career assessment test for students is a structured process that evaluates aptitude, interests, and psychometric factors so the student can choose the right stream, degree, or career direction with evidence instead of guesswork.',
      },
      {
        q: 'What is a psychometric test for students?',
        a: 'A psychometric test looks at behavioural patterns, preferences, and traits that influence how a student learns, decides, and works. It is useful when combined with aptitude and mentor interpretation, not as a standalone final answer.',
      },
      {
        q: 'Is an aptitude test enough to choose a stream?',
        a: 'Usually no. Aptitude is important, but stream and degree decisions are better when aptitude is combined with interests, motivation, personality, and the practical realities of the student’s goals and family context.',
      },
      {
        q: 'How long does a career assessment take from test to recommendation?',
        a: 'Most students complete the test in 90 to 120 minutes, followed by scoring, report preparation, and a mentor debrief. The outcome is not just a score sheet but a practical shortlist and next-step direction.',
      },
    ],
  },
  'stream-selection-guidance': {
    metadataTitle: 'Career Counselling for Class 10 – Stream Selection',
    metadataDescription:
      'Career counselling for class 10 students choosing Science, Commerce, Arts, diploma, and after-10th pathways with assessment-led guidance.',
    answerBlock:
      'GCDA provides career counselling for class 10 students who need clarity on Science, Commerce, Arts, diploma, and after-10th pathways. The service combines assessment, parent-student alignment, and realistic career mapping so the stream decision is based on fit, not only marks or pressure.',
    section: {
      eyebrow: 'After class 10',
      title: 'Career counselling for class 10 students choosing a stream',
      description: 'This page already solves the class-10 stream decision. The goal is to state that clearly in exact parent and student language so search intent and page intent match perfectly.',
      items: [
        {
          title: 'Career counselling for class 10 students',
          body: 'Class 10 students usually need help with one specific decision: which stream or pathway keeps the strongest future options open without creating a poor-fit workload. Good counselling helps students and parents compare fit, effort, and long-term consequences together.',
        },
        {
          title: 'How to choose a stream after 10th',
          body: 'The correct way to choose a stream after 10th is to compare aptitude, interest, future pathways, and family context. Marks matter, but they should not be treated as the only signal because long-term success depends on sustained fit and motivation.',
        },
        {
          title: 'Science, Commerce, Arts, or diploma after class 10',
          body: 'The best path depends on the student’s profile. Science offers flexibility for technical and medical routes, Commerce supports business and finance paths, Arts supports law, design, psychology, and public-facing careers, while diploma routes can be smart for hands-on learners who want earlier technical specialization.',
        },
      ],
    },
    table: {
      headers: ['Path after class 10', 'Best for', 'Typical next step'],
      rows: [
        ['Science', 'Students strong in math, science, and analytical work', 'JEE, NEET, research, engineering, medicine, and tech-related degrees'],
        ['Commerce', 'Students interested in business, finance, economics, or management', 'BCom, BBA, CA, CMA, CS, finance, analytics, and law-linked routes'],
        ['Arts / Humanities', 'Students drawn to people, writing, design, law, psychology, or public issues', 'BA, law, design, psychology, media, liberal arts, and policy paths'],
        ['Diploma / vocational', 'Students who prefer applied learning or earlier specialization', 'Polytechnic, ITI, lateral-entry, and skill-first professional routes'],
      ],
      caption: 'Class-10 stream and pathway comparison for students and parents.',
    },
    extraFaqs: [
      {
        q: 'Does a class 10 student really need career counselling?',
        a: 'Career counselling is useful when the student is confused between multiple streams, when family pressure is high, or when marks alone are not enough to make a confident decision. It reduces costly mistakes before class 11 begins.',
      },
      {
        q: 'How do we choose between Science and Commerce after class 10?',
        a: 'Compare aptitude, interest, academic stamina, and the careers each path opens. If the student is only choosing Science because it sounds prestigious, that is usually a weak reason. A structured comparison is much safer.',
      },
      {
        q: 'Can counselling help if my child wants Arts but the family wants Science?',
        a: 'Yes. This is exactly where stream-selection guidance helps. A structured assessment plus family alignment conversation gives parents and students a more defensible basis for the decision.',
      },
      {
        q: 'Do you cover diploma and vocational routes after 10th?',
        a: 'Yes. Students do not always need a default class 11–12 route. In some cases, polytechnic, ITI, or other diploma pathways are more practical, affordable, and better aligned to the student’s style of learning.',
      },
    ],
  },
  'degree-selection-guidance': {
    metadataTitle: 'Career Counselling for Class 12 – Degree Selection',
    metadataDescription:
      'Career counselling for class 12 students choosing the right course, degree, and college after 12th with exam and shortlist guidance.',
    answerBlock:
      'GCDA provides career counselling for class 12 students who need help choosing the right course, degree, and college after 12th. The service combines profile fit, entrance-exam planning, and college shortlisting so students and parents can compare after-12th options with more clarity and less confusion.',
    section: {
      eyebrow: 'After class 12',
      title: 'Career counselling for class 12 students choosing a course',
      description: 'This page already handles after-12th decision support. The improvement needed is explicit wording around class 12, course selection, degree fit, and stream-specific outcomes.',
      items: [
        {
          title: 'Career counselling for class 12 students',
          body: 'Class 12 students usually need help with course selection, college shortlisting, and entrance-exam planning all at the same time. The strongest counselling process narrows options quickly without forcing the student into a degree that looks prestigious but fits poorly.',
        },
        {
          title: 'How to choose the right course after 12th',
          body: 'The best way to choose a course after 12th is to compare aptitude, interest, employability, cost, and exit options. Students should not evaluate a degree only by brand or salary claims — they should evaluate how the course fits the student’s strengths and long-term direction.',
        },
        {
          title: 'Degree selection after PCM, PCB, Commerce, and Arts',
          body: 'After-12th decisions differ by stream. PCM students compare engineering, design, architecture, defence, and pure sciences; PCB students compare medicine, allied health, and life sciences; Commerce students compare CA, BCom, BBA, and analytics; Arts students compare law, psychology, design, media, and liberal arts pathways.',
        },
      ],
    },
    table: {
      headers: ['Class 12 background', 'Typical degree families', 'Key exams or decisions'],
      rows: [
        ['PCM', 'Engineering, design, architecture, pure sciences, defence, computing', 'JEE Main, JEE Advanced, BITSAT, UCEED, NATA, NDA'],
        ['PCB', 'MBBS, allied health, biotech, psychology, nutrition, life sciences', 'NEET, CUET, health-university admissions'],
        ['Commerce', 'BCom, BBA, BMS, CA, CMA, CS, economics, analytics, law', 'CUET, IPMAT, CA Foundation, CLAT'],
        ['Arts', 'Law, psychology, design, media, liberal arts, policy, social sciences', 'CUET, CLAT, design entrances, university admissions'],
      ],
      caption: 'After-12th degree and exam map by academic background.',
    },
    extraFaqs: [
      {
        q: 'Do class 12 students need career counselling before college admissions?',
        a: 'Yes, especially when they are choosing between multiple degrees, colleges, or exam paths. Counselling helps the student avoid making a 3- to 4-year decision based only on marks, hype, or peer movement.',
      },
      {
        q: 'How do I choose the right course after 12th?',
        a: 'Start by comparing aptitude, interests, budget, entrance-exam routes, and long-term options. A good course choice should make sense not only today, but also if the student later wants internships, placements, or higher studies.',
      },
      {
        q: 'Can career counselling help with college shortlisting after 12th?',
        a: 'Yes. College shortlisting is one of the most valuable parts of after-12th counselling because it converts general preference into realistic options matched to marks, rank, budget, board, and location.',
      },
      {
        q: 'How many colleges should a student shortlist after class 12?',
        a: 'Most students should build a shortlist with aspirational, realistic, and safe options. The right number depends on exam route and stream, but the shortlist should protect against overconfidence and last-minute panic.',
      },
    ],
  },
};

function getServiceIntentContent(serviceSlug) {
  return SERVICE_INTENT_CONTENT[serviceSlug] || null;
}

function getServiceAnswerBlock(service) {
  const content = getServiceIntentContent(service.slug);
  if (content?.answerBlock) return content.answerBlock;
  return `${service.title} at GCDA is a structured, mentor-led service that helps students, parents, and working professionals make confident, evidence-based career decisions. Sessions are available online across India and in-person in your city, with personalised plans, certified mentors, and proven frameworks.`;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service not found' };

  const RICH_TITLES = {
    'personal-counselling': 'Personal Counselling India – 1-on-1 Guidance',
    'career-assessment': 'Career Assessment India – Aptitude & Psychometric',
    'workshops-seminars': 'Workshops & Seminars India – Schools',
    'stream-selection-guidance': 'Career Counselling for Class 10 – Stream Selection',
    'degree-selection-guidance': 'Career Counselling for Class 12 – Degree Selection',
    'working-professionals-guidance': 'Working Professionals Guidance India',
  };
  const title = RICH_TITLES[service.slug] || `${service.title} in India | Expert Career Guidance`;
  const description = getServiceIntentContent(service.slug)?.metadataDescription || service.shortDescription;
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
      images: [
        {
          url: service.image || '/assets/hero-illustration.webp',
          width: 1200,
          height: 630,
          alt: `${service.title} – GCDA career counselling`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: service.image || '/assets/hero-illustration.webp',
          width: 1200,
          height: 630,
          alt: `${service.title} – GCDA career counselling`,
        },
      ],
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
  const intentContent = getServiceIntentContent(service.slug);
  const pageFaqs = [...faqs, ...(intentContent?.extraFaqs || [])];

  const url = `${SITE_URL}/career-counselling/${service.slug}`;
  const pageHeading = getServicePageHeading(service);
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
            <h1>{pageHeading}</h1>
            <p className="page-hero-copy">{service.heroDescription}</p>
            <p>{longDescription}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Free Consultation</Link>
              <Link href="#how-it-works" className="button button-secondary">How it Works</Link>
            </div>
            <ul className="hero-proof" aria-label="Service proof points">
              <li>98% satisfied clients</li>
              <li>50K+ career sessions delivered</li>
              <li>Online + in-person</li>
            </ul>
          </div>
          <div className="surface-card media-card">
            <img src={service.image} alt={service.title} width="1376" height="768" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ============ ANSWER BLOCK (AEO) ============ */}
      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>{getServiceAnswerBlock(service)}</AnswerBlock>
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

      {intentContent ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow={intentContent.section.eyebrow}
              title={intentContent.section.title}
              description={intentContent.section.description}
              center
            />
            <div className="stack-list">
              {intentContent.section.items.map((item) => (
                <article className="feature-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    {intentContent.table.headers.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {intentContent.table.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, idx) => (
                        idx === 0 ? <td key={cell}><strong>{cell}</strong></td> : <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-caption">{intentContent.table.caption}</p>
          </div>
        </section>
      ) : null}

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
            title={`What makes our ${service.title.toLowerCase()} different`}
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

      {/* ============ COMPARISON TABLE ============ */}
      <section className="section alt-section" id="comparison-table">
        <div className="container">
          <SectionHeader
            eyebrow="Comparison"
            title={`GCDA ${service.title} vs typical alternatives`}
            description="See how GCDA compares to generic online quizzes, YouTube advice, and unstructured counselling."
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>GCDA {service.title}</th>
                  <th>Free Online Quiz</th>
                  <th>Generic Counsellor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-on-1 with certified mentor (8+ yrs)</td>
                  <td>✅ Yes – 60-90 min</td>
                  <td>❌ No – automated</td>
                  <td>⚠️ Sometimes – 20-30 min</td>
                </tr>
                <tr>
                  <td>Validated aptitude + interest + personality battery</td>
                  <td>✅ Multi-instrument, psychologist scored</td>
                  <td>❌ Single label</td>
                  <td>⚠️ Single test</td>
                </tr>
                <tr>
                  <td>Written action plan in 24h</td>
                  <td>✅ 1-page PDF + checkpoints</td>
                  <td>❌ No plan</td>
                  <td>❌ Verbal only</td>
                </tr>
                <tr>
                  <td>Real salary, growth, entrance-exam data</td>
                  <td>✅ 2026 Indian market data</td>
                  <td>❌ Generic</td>
                  <td>⚠️ Outdated</td>
                </tr>
                <tr>
                  <td>Parent-student alignment</td>
                  <td>✅ 30-min family session</td>
                  <td>❌ No</td>
                  <td>❌ Rarely</td>
                </tr>
                <tr>
                  <td>Follow-up + check-in</td>
                  <td>✅ Within 14 days included</td>
                  <td>❌ No</td>
                  <td>⚠️ Extra charge</td>
                </tr>
                <tr>
                  <td>City-specific college & exam shortlist</td>
                  <td>✅ 438 cities – local industries, landmarks, topColleges, topExams</td>
                  <td>❌ No</td>
                  <td>❌ Generic list</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>Rs. 2,999 – 3,999 transparent</td>
                  <td>Free but no outcome</td>
                  <td>Rs. 500-5,000 variable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-caption">Clear comparison of GCDA {service.title} with typical alternatives available in the market.</p>
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
              const serviceUrl = getServiceCityUrl(service.slug, state, city);
              return (
                <article className="card city-card" key={`${state}-${city}`}>
                  <div className="card-body">
                    <span className="mini-label">{state}</span>
                    <h3>
                      <Link href={serviceUrl}>{service.title} in {city}</Link>
                    </h3>
                    <p className="city-blurb">Online sessions across {city} + in-person where needed. Local industries, top colleges, entrance exams tailored to {city}.</p>
                    <Link href={serviceUrl} className="text-link">Explore {city} →</Link>
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

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Privacy and trust"
              title="What to expect from the process"
              description="Good counselling should feel structured, transparent, and respectful of personal information from the first interaction onward."
            />
            <div className="stack-list">
              <article className="feature-row">
                <h3>Confidentiality matters</h3>
                <p>Student, parent, graduate, and working-professional discussions are treated as private. We only use the information necessary to assess the situation, guide the decision, and provide the right next steps.</p>
              </article>
              <article className="feature-row">
                <h3>Clear scope before booking</h3>
                <p>We try to make the right service and plan clear before the session begins, so clients know whether they need stream support, degree selection, assessment, or working-professional guidance.</p>
              </article>
              <article className="feature-row">
                <h3>Evidence over guesswork</h3>
                <p>Where useful, assessments support the conversation — but they do not replace judgment, context, or practical planning. The aim is better decisions, not personality labels.</p>
              </article>
            </div>
          </div>
          <div className="info-panel">
            <h3>What happens after you enquire</h3>
            <ul className="bullet-list compact">
              <li>Your requirement is reviewed and matched to the right service area</li>
              <li>The most suitable plan or session format is suggested clearly</li>
              <li>A consultation, assessment, or next-step conversation is scheduled</li>
              <li>You receive structured guidance and a clearer action path</li>
            </ul>
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
          <FAQList items={pageFaqs} />
        </div>
        <JsonLd id={`ld-faq-${service.slug}`} data={faqSchema(pageFaqs)} />
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
                    <img src={rel.image} alt={rel.title} width="1376" height="768" loading="lazy" decoding="async" />
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
            description="Every service has its own main page and 438 city pages. Use the links below to explore the full GCDA service catalog."
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
      <JsonLd id={`ld-speakable-${service.slug}`} data={speakableSchema({ url, name: `${service.title} – GCDA` })} />
      <JsonLd
        id={`ld-itemlist-cities-${service.slug}`}
        data={itemListSchema({
          url,
          name: `${service.title} in major Indian cities`,
          description: `Popular cities for ${service.title} – GCDA serves 438 cities across India.`,
          items: popularCities.map(({ state, city }) => ({
            name: `${service.title} in ${city}, ${state}`,
            url: `${SITE_URL}${getServiceCityUrl(service.slug, state, city)}`,
            description: `${service.title} in ${city}, ${state} – online and in-person.`,
          })),
        })}
      />
    </>
  );
}
