// Localized Cities Hub
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { STATES } from '@/data/indiaLocations';
import { company } from '@/data/site';
import { citiesCollectionSchema, breadcrumbSchema } from '@/data/schema';
import { TRANSLATIONS, localizePath } from '@/data/i18n';

function CitiesHubPage({ lang = 'en' }) {
  const t = (TRANSLATIONS[lang] || TRANSLATIONS.en).cities;
  const lp = (p) => localizePath(p, lang);
  const citiesBreadcrumbs = [
    { name: 'Home', url: lp('/') },
    { name: 'Cities', url: lp('/cities') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={citiesBreadcrumbs} />
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="page-hero-copy">{t.desc}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">Book a Session</Link>
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
                  <h3><Link href={lp(`/${s.slug}`)}>{s.name}</Link></h3>
                  <p className="city-state">Capital: {s.capital} • {s.cityCount} cities</p>
                  <p className="city-blurb">
                    GCDA offers online career counselling and career assessments across {s.cityCount} {s.name} cities. Sessions are available online and in-person.
                  </p>
                  <Link href={lp(`/${s.slug}`)} className="text-link">View {s.name} cities →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don’t see your city?"
        description="GCDA offers online career counselling across India. Speak to a counsellor from any city in India and get the same quality of structured guidance."
        lang={lang}
      />

      <JsonLd id="ld-breadcrumb-cities" data={breadcrumbSchema(citiesBreadcrumbs)} />
      <JsonLd id="ld-cities-collection" data={citiesCollectionSchema(STATES)} />
    </>
  );
}

export default CitiesHubPage;
