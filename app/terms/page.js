import SectionHeader from '@/components/SectionHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQList from '@/components/FAQList';
import { breadcrumbSchema, legalPageSchema, faqSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';
const url = `${SITE_URL}/terms`;

export const metadata = {
  title: 'Terms of Service – GCDA Career Counselling',
  description:
    'GCDA Terms of Service – rules for using career counselling services, assessments, workshops, and website. Transparent, fair, and India-specific.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service – GCDA',
    description: 'Terms for GCDA counselling services and website use.',
    url,
    images: [{ url: '/assets/logo.png', width: 600, height: 600, alt: 'GCDA Terms' }],
  },
  twitter: { card: 'summary', title: 'Terms of Service – GCDA', description: 'GCDA terms of service.' },
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Terms of Service', url: '/terms' },
];

const faqs = [
  { q: 'Can I reschedule my counselling session?', a: 'Yes. Reschedule up to 24 hours before via phone/email/WhatsApp at no extra cost. Within 24 hours, a Rs. 500 rescheduling fee applies.' },
  { q: 'Are sessions guaranteed to give me a career decision?', a: 'We guarantee a structured, evidence-based shortlist and written action plan – not a forced decision. Most clients find clarity in 2-3 sessions, but the final choice is yours.' },
  { q: 'Can I share my assessment report?', a: 'Yes. Your report is yours – you can share it with parents, mentors, or schools. Raw item-level data is not shared.' },
];

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-center">
          <Breadcrumbs items={breadcrumbs} />
          <span className="eyebrow">Legal – Trust & EEAT</span>
          <h1>Terms of Service</h1>
          <p className="page-hero-copy">Clear, fair terms for GCDA career counselling services, assessments, workshops, and website use – designed for Indian students, parents, and professionals.</p>
          <p className="article-meta">Last updated: 27 July 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Our terms" title="Fair, structured, and student-first" />
          <div className="stack-list">
            <article className="feature-row">
              <h3>Service delivery</h3>
              <p>GCDA delivers 1-on-1 career counselling (online video or in-person in 438 cities), career assessments (online battery + mentor debrief), workshops/seminars for institutions, and certification programmes (hybrid online + in-person). Session length is 60-90 min standard, 120 min for complex cases at no extra cost.</p>
            </article>
            <article className="feature-row">
              <h3>Booking & rescheduling</h3>
              <p>Book via /contact or phone/WhatsApp. You can reschedule up to 24h before free. Within 24h, Rs. 500 fee. No-show without notice = session counted. We also respect your time – if we reschedule within 24h, you get an extra 30-min follow-up free.</p>
            </article>
            <article className="feature-row">
              <h3>Fees & payments</h3>
              <p>Stream Selector Rs. 2,999, Degree Selector Rs. 3,499, Working Professionals Rs. 3,999 – one-time, no hidden fees. Certification fee varies by cohort, EMI available. Payment via UPI, bank transfer, or Razorpay link.</p>
            </article>
            <article className="feature-row">
              <h3>Assessment integrity</h3>
              <p>Assessments are scored by psychologists, not scripts. Do not share your login or have someone else take the test – it invalidates the report. Re-take after 12 months only.</p>
            </article>
            <article className="feature-row">
              <h3>Intellectual property</h3>
              <p>Reports, action plans, slide decks, and resource packs are for personal use. Do not redistribute commercially. Our website content (city pages, blog) is original, no AI filler, and protected – you may quote with attribution and link back to GCDA.</p>
            </article>
            <article className="feature-row">
              <h3>Limitation of liability</h3>
              <p>We provide evidence-based guidance, not guarantees of admission, job, or salary. Career decisions depend on your effort, market conditions, and college/employer criteria beyond our control.</p>
            </article>
            <article className="feature-row">
              <h3>Governing law</h3>
              <p>These terms are governed by Indian law, jurisdiction Mumbai, Maharashtra. Disputes resolved via mediation first.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Terms FAQs" title="Common questions about terms" center />
          <FAQList items={faqs} />
        </div>
        <JsonLd id="ld-faq-terms" data={faqSchema(faqs)} />
      </section>

      <JsonLd id="ld-breadcrumb-terms" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-webpage-terms" data={legalPageSchema({ url, name: 'Terms of Service – GCDA', description: 'GCDA terms for counselling services and website.' })} />
    </>
  );
}
