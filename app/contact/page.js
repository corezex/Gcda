import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import { contactPageSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Contact GCDA – Career Counselling in Mumbai & Across India: Phone, Email, WhatsApp',
  description:
    'Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office at 102, Citi Mall, Link Road, Andheri West, or reach us by phone (+91 91360 05039), email (gcda.career@gmail.com), or WhatsApp.',
  keywords: [
    'contact GCDA',
    'GCDA Mumbai office',
    'career counselling contact',
    'career counsellor phone number',
    'GCDA address',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact GCDA – Career Counselling in Mumbai & Across India',
    description:
      'Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Mumbai office + phone, email, WhatsApp.',
    url: 'https://gcdassociation.org/contact',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'Contact GCDA career counselling team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GCDA – Career Counselling in Mumbai & Across India',
    description: 'Mumbai office address, phone, email, WhatsApp, and contact form for GCDA.',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'Contact GCDA – Mumbai office and team',
      },
    ],
  },
};

const contactBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Contact GCDA', url: '/contact' },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(company.addressLine1);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
            <span className="eyebrow">Contact us</span>
            <h1>Get in touch with GCDA for counselling, plans, and guidance.</h1>
            <p className="page-hero-copy">
              Reach out for student counselling, professional guidance, institution workshops, or plan-related questions. We would love to hear from you.
            </p>
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
          <AnswerBlock>
            You can reach GCDA by phone at {company.phoneDisplay}, by email at {company.email}, or by WhatsApp. Our Mumbai office is at {company.addressLine1} and is open Monday to Saturday. We respond to all enquiries within one business day.
          </AnswerBlock>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container two-column contact-layout">
          <div>
            <SectionHeader
              eyebrow="Send us a message"
              title="Tell us what you need help with"
              description="Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
            />
            <ContactForm />
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
