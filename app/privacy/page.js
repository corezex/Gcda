import SectionHeader from '@/components/SectionHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQList from '@/components/FAQList';
import { breadcrumbSchema, legalPageSchema, faqSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';
const url = `${SITE_URL}/privacy`;

export const metadata = {
  title: 'Privacy Policy – GCDA Career Counselling',
  description:
    'GCDA Privacy Policy – how we collect, use, and protect your personal information when you use career counselling services, assessments, and website across India.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy – GCDA',
    description: 'How GCDA handles your personal data – counselling confidentiality, assessments, and website data.',
    url,
    images: [{ url: '/assets/logo.png', width: 600, height: 600, alt: 'GCDA Privacy Policy' }],
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy – GCDA',
    description: 'GCDA privacy and confidentiality policy.',
  },
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Privacy Policy', url: '/privacy' },
];

const faqs = [
  {
    q: 'What personal data does GCDA collect?',
    a: 'We collect name, email, phone, city, education background, assessment responses, and counselling notes – only what is needed to deliver career counselling, assessments, and support.',
  },
  {
    q: 'Is my counselling session confidential?',
    a: 'Yes. What you share in a 1-on-1 session stays between you and the mentor. We only share the written summary if you explicitly ask us to. For students under 16, we share a summary with parents after the session.',
  },
  {
    q: 'How long do you retain my data?',
    a: 'Assessment reports and session summaries are retained for 3 years to support follow-ups. You can request deletion at any time by emailing gcda.career@gmail.com.',
  },
  {
    q: 'Do you share my data with third parties?',
    a: 'No. We do not sell your data. We only share aggregated, anonymized statistics (e.g. 50K+ sessions) and never individual assessment results without consent.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-center">
          <Breadcrumbs items={breadcrumbs} />
          <span className="eyebrow">Legal – Privacy & Trust</span>
          <h1>Privacy Policy</h1>
          <p className="page-hero-copy">
            Your privacy matters. GCDA has been handling sensitive student, parent, and working professional data since 2013 with confidentiality, assessment security, and transparent practices.
          </p>
          <p className="article-meta">Last updated: 27 July 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Our commitment" title="Confidential, secure, and transparent" />
          <div className="stack-list">
            <article className="feature-row">
              <h3>What we collect</h3>
              <p>
                When you book a session, fill the profile form, take an assessment, or contact us via form, phone, email, or WhatsApp, we collect: name, contact details, city/state, education background, career interests, assessment responses, session notes, and payment confirmation. We use this only to deliver counselling, generate reports, and support follow-ups.
              </p>
            </article>
            <article className="feature-row">
              <h3>How we use it</h3>
              <p>
                To schedule sessions, score assessments (psychologist-scored, not automated), create personalized roadmaps, send session summaries, share resource packs, and improve our services. We do not use your data for unrelated marketing without consent.
              </p>
            </article>
            <article className="feature-row">
              <h3>Counselling confidentiality</h3>
              <p>
                1-on-1 sessions are confidential. The mentor does not share your personal story with schools, colleges, or parents unless you ask. For students under 16, a 15-20 minute parent alignment summary is shared at the end – with the student present.
              </p>
            </article>
            <article className="feature-row">
              <h3>Assessment security</h3>
              <p>
                Assessments are hosted securely, scored by trained psychologists, and reports are delivered via email PDF with access control. Raw responses are not shared with third parties. Re-take eligibility is after 12 months to avoid data pollution.
              </p>
            </article>
            <article className="feature-row">
              <h3>Cookies & website data</h3>
              <p>
                Our website uses minimal cookies for analytics (page views) and to remember preferences. No advertising trackers are used without consent. You can disable cookies in your browser – the site still works.
              </p>
            </article>
            <article className="feature-row">
              <h3>Your rights</h3>
              <p>
                You can request access, correction, or deletion of your personal data by emailing gcda.career@gmail.com or calling +91 91360 05039. We respond within 7 business days. Assessment data can be exported as PDF.
              </p>
            </article>
            <article className="feature-row">
              <h3>Contact</h3>
              <p>
                GCDA – Global Career Development Association, 102, Citi Mall, Link Road, Andheri West, Mumbai 400053. Email gcda.career@gmail.com, Phone +91 91360 05039.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Privacy FAQs" title="Common questions about privacy at GCDA" center />
          <FAQList items={faqs} />
        </div>
        <JsonLd id="ld-faq-privacy" data={faqSchema(faqs)} />
      </section>

      <JsonLd id="ld-breadcrumb-privacy" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-webpage-privacy" data={legalPageSchema({ url, name: 'Privacy Policy – GCDA', description: 'GCDA Privacy Policy – handling of personal data for counselling and assessments.' })} />
    </>
  );
}
