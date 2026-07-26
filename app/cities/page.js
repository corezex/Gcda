import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { STATES } from '@/data/indiaLocations';
import { company } from '@/data/site';
import { citiesCollectionSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Counselling Across India: 36 States, 346+ Cities',
  description:
    'GCDA offers career counselling, career assessments, stream and degree selection guidance, and professional mentoring across 36 Indian states and union territories, covering 346+ cities including metros like Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, and Kolkata.',
  keywords: [
    'career counselling cities India',
    'career counsellor near me',
    'career counselling Mumbai',
    'career counselling Delhi',
    'career counselling Bengaluru',
    'career counselling all states',
  ],
  alternates: { canonical: '/cities' },
  openGraph: {
    title: 'Career Counselling Across India: 36 States, 346+ Cities',
    description:
      'GCDA career counselling, career assessments, and professional mentoring across 36 Indian states and 346+ cities.',
    url: 'https://gcdassociation.org/cities',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling coverage across India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Across India: 36 States, 346+ Cities',
    description: 'GCDA career counselling across 36 states and 346+ cities in India.',
  },
};

const citiesBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'All Cities', url: '/cities' },
];

export default function CitiesHubPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Career Counselling in India</span>
            <h1>Find GCDA career counselling in your state and city.</h1>
            <p className="page-hero-copy">
              GCDA offers structured career counselling, career assessments, stream and degree selection, and professional growth mentoring across 36 Indian states and union territories, covering 300+ cities. Pick your state to see locally relevant guidance.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Session</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/hero-illustration.png" alt="Career counselling across India" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="All India"
            title="Career counselling across India"
            description="Click any state to see all cities we cover in that state."
          />
          <AnswerBlock>
            GCDA career counselling is available across 36 Indian states and union territories, covering 300+ cities — including metros like Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad. We offer online video sessions across India and in-person sessions everywhere.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid city-grid">
            {STATES.map((s) => (
              <article className="card city-card" key={s.slug}>
                <div className="card-body">
                  <span className="mini-label">{s.region}</span>
                  <h3><Link href={`/${s.slug}`}>{s.name}</Link></h3>
                  <p className="city-state">Capital: {s.capital} • {s.cityCount} cities</p>
                  <p className="city-blurb">
                    GCDA offers online career counselling and career assessments across {s.cityCount} {s.name} cities. Sessions are available online and in-person.
                  </p>
                  <Link href={`/${s.slug}`} className="text-link">View {s.name} cities →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don’t see your city?"
        description="GCDA offers online career counselling across India. Speak to a counsellor from any city in India and get the same quality of structured guidance."
      />

      <JsonLd id="ld-breadcrumb-cities" data={breadcrumbSchema(citiesBreadcrumbs)} />
      <JsonLd id="ld-cities-collection" data={citiesCollectionSchema(STATES)} />
    </>
  );
}
