// Localized Contact Content
import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import { contactPageSchema, breadcrumbSchema } from '@/data/schema';
import { TRANSLATIONS, localizePath } from '@/data/i18n';

const SITE_URL = 'https://gcdassociation.org';

function ContactPage({ lang = 'en' }) {
  const t = (TRANSLATIONS[lang] || TRANSLATIONS.en).contact;
  const lp = (p) => localizePath(p, lang);
  const mapQuery = encodeURIComponent(company.addressLine1);

  const contactBreadcrumbs = [
    { name: 'Home', url: lp('/') },
    { name: 'Contact', url: lp('/contact') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: lp('/') }, { name: 'Contact', url: lp('/contact') }]} />
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="page-hero-copy">{t.desc}</p>
          </div>
          <div className="surface-card contact-highlight">
            <h3>Office</h3>
            <p>{company.addressLine1}</p>
            <h3>Phone</h3>
            <p><a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a></p>
            <h3>Email</h3>
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnswerBlock lang={lang}>
            You can reach GCDA by phone at {company.phoneDisplay}, by email at {company.email}, or by WhatsApp. Our Mumbai office is at {company.addressLine1} and is open Monday to Saturday. We respond to all enquiries within one business day.
          </AnswerBlock>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container two-column contact-layout">
          <div>
            <SectionHeader
              eyebrow={t.formEyebrow}
              title={t.formTitle}
              description={t.formDesc}
            />
            <ContactForm lang={lang} />
          </div>
          <div className="contact-sidebar">
            <div className="info-panel">
              <h3>Business Hours</h3>
              <ul className="hours-list">
                {company.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="info-panel">
              <h3>Quick Contact</h3>
              <ul className="footer-contact compact">
                <li><a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a></li>
                <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
                <li><a href={company.whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader eyebrow="Location" title="Visit our Mumbai office" center />
          <div className="map-frame-wrap">
            <iframe
              title="GCDA Mumbai office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-contact" data={breadcrumbSchema(contactBreadcrumbs)} />
      <JsonLd id="ld-contact" data={contactPageSchema(`${SITE_URL}/contact`)} />
    </>
  );
}

export default ContactPage;
