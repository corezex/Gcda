import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';

const socials = [
  {
    href: 'https://www.facebook.com/gcdaindia',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/gcdaindia',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.16 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.16 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.51 0-4.74.06-1.07.05-1.65.23-2.04.39-.51.2-.88.44-1.27.83a3.4 3.4 0 0 0-.83 1.27c-.16.39-.34.97-.39 2.04C2.67 8.49 2.66 8.85 2.66 12s.01 3.51.07 4.74c.05 1.07.23 1.65.39 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.16.97.34 2.04.39 1.23.06 1.59.07 4.74.07s3.51-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.39.51-.2.88-.44 1.27-.83a3.4 3.4 0 0 0 .83-1.27c.16-.39.34-.97.39-2.04.06-1.23.07-1.59.07-4.74s-.01-3.51-.07-4.74c-.05-1.07-.23-1.65-.39-2.04a3.4 3.4 0 0 0-.83-1.27 3.4 3.4 0 0 0-1.27-.83c-.39-.16-.97-.34-2.04-.39C15.51 3.96 15.15 3.96 12 3.96zm0 3.06A4.98 4.98 0 1 1 12 17a4.98 4.98 0 0 1 0-9.98zm0 1.8A3.18 3.18 0 1 0 12 15.18 3.18 3.18 0 0 0 12 8.82zm6.4-2.04a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/global-career-development-association/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    href: company.whatsappLink,
    label: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 0 0 3.7 17l-1.6 5.7 5.8-1.5a11 11 0 0 0 16.2-13.2 11 11 0 0 0-3.6-4.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3.4.9.9-3.3-.2-.3A8 8 0 1 1 20 12a8 8 0 0 1-8 8zm4.6-6c-.3-.1-1.4-.7-1.6-.7-.2 0-.4-.1-.6.1l-.7.9c-.1.1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-3 .3.3 0 0 1 .1-.5l.4-.5.3-.4.1-.4-.1-.4-1-1.4-.3-.4-.4-.1c-.2 0-.4 0-.6.1l-.4.1a1.4 1.4 0 0 0-1 1.1c-.2 1 0 1.9.5 2.8a13.4 13.4 0 0 0 5 5.2c.7.4 1.3.6 1.7.8.5.2.9.2 1.2.1.4-.1 1.2-.5 1.4-1l.2-.6c.1-.3 0-.5-.1-.5l-.5-.3z" />
      </svg>
    ),
  },
];
import { contactPageSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Contact GCDA Career Counselling',
  description:
    'Contact GCDA Mumbai at Citi Mall, Andheri West. Call +91 91360 05039, email gcda.career@gmail.com or WhatsApp.',
  keywords: [
    'contact GCDA',
    'GCDA Mumbai office',
    'career counselling contact',
    'career counsellor phone number',
    'GCDA address',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact GCDA Career Counselling',
    description:
      'Contact GCDA Mumbai – office address, phone, email, WhatsApp for counselling.',
    url: 'https://gcdassociation.org/contact',
    images: [
      {
        url: '/assets/hero-illustration.webp',
        width: 1200,
        height: 630,
        alt: 'Contact GCDA career counselling team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GCDA Career Counselling',
    description: 'Mumbai office, phone, email, WhatsApp for GCDA counselling.',
    images: [
      {
        url: '/assets/hero-illustration.webp',
        width: 1200,
        height: 630,
        alt: 'Contact GCDA – Mumbai office and team',
      },
    ],
  },
};

const contactBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
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
              <div className="footer-socials" aria-label="GCDA social media" style={{ marginTop: '1rem' }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    aria-label={`GCDA on ${s.label}`}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="info-panel">
              <h3>Confidentiality</h3>
              <p>We treat enquiries, assessment details, and session summaries as private. Only the information needed to schedule and deliver the right guidance is used during the counselling process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="What happens next"
            title="What to expect after you contact GCDA"
            description="A simple process helps families and professionals know how the enquiry moves from first contact to the right service recommendation."
            center
          />
          <div className="card-grid process-grid">
            <article className="card process-card">
              <div className="card-body">
                <span className="step-number">01</span>
                <h3>We review your requirement</h3>
                <p>We look at whether the enquiry is about stream selection, degree planning, career assessment, working-professional guidance, or certification.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <span className="step-number">02</span>
                <h3>We suggest the right service or plan</h3>
                <p>You are guided toward the most relevant service or pricing option instead of being pushed into a generic package.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <span className="step-number">03</span>
                <h3>We schedule the next step</h3>
                <p>Once the fit is clear, we help schedule the consultation, assessment, or follow-up based on the family or professional timeline.</p>
              </div>
            </article>
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
