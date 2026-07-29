import '@/styles/non-homepage.css';
import SectionHeader from '@/components/SectionHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQList from '@/components/FAQList';
import { breadcrumbSchema, legalPageSchema, faqSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';
const url = `${SITE_URL}/refund-policy`;

export const metadata = {
  title: 'Refund Policy – GCDA Career Counselling',
  description:
    'GCDA refund policy – 7-day return window, rescheduling, upgrades. Transparent, fair for students & professionals.',
  alternates: { canonical: '/refund-policy' },
  openGraph: {
    title: 'Refund Policy – GCDA',
    description:
      'Refund and rescheduling policy for GCDA counselling plans.',
    url,
    images: [{ url: '/assets/logo.webp', width: 600, height: 600, alt: 'GCDA Refund Policy' }],
  },
  twitter: { card: 'summary', title: 'Refund Policy – GCDA', description: 'GCDA refund and return policy.' },
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Refund Policy', url: '/refund-policy' },
];

const faqs = [
  { q: 'What is the refund window?', a: '7 days from payment for counselling plans (Stream/ Degree/ Working Professional) if no session or assessment has been availed. After a session or assessment login, refund is not applicable but rescheduling is free up to 24h before.' },
  { q: 'How do I request a refund?', a: 'Email gcda.career@gmail.com with payment receipt and reason within 7 days. We process within 7 business days to original payment method.' },
  { q: 'What about certification programmes?', a: 'Certification fee is non-refundable after first live session is attended. Before first session, 90% refund (10% admin). EMI: refund pro-rata for unattended modules.' },
  { q: 'Can I upgrade my plan instead of refund?', a: 'Yes. You can adjust current plan fee towards a higher plan (e.g. Stream Selector Rs. 2,999 to Degree Selector Rs. 3,499 = pay difference Rs. 500). Most clients prefer upgrade over refund.' },
];

export default function RefundPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-center">
          <Breadcrumbs items={breadcrumbs} />
          <span className="eyebrow">Legal – Refunds & Returns</span>
          <h1>Refund & Return Policy</h1>
          <p className="page-hero-copy">
            Transparent 7-day return window, fair rescheduling, and upgrade options – no hidden clauses. Designed to be student and professional friendly.
          </p>
          <p className="article-meta">Last updated: 27 July 2026 • 7-day return window</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Our policy" title="7-day finite return window" />
          <div className="stack-list">
            <article className="feature-row">
              <h3>Counselling plans (Stream, Degree, Working Pro)</h3>
              <p>
                <strong>Refund window:</strong> 7 days from payment if no session has been attended and no assessment login has been used. <strong>How to request:</strong> email gcda.career@gmail.com with receipt, reason, UPI/bank details. <strong>Timeline:</strong> refund processed in 7 business days to original method. <strong>After session/assessment:</strong> no refund, but free rescheduling up to 24h before, and upgrade to higher plan with fee adjustment allowed.
              </p>
            </article>
            <article className="feature-row">
              <h3>Rescheduling</h3>
              <p>Free up to 24h before session. Within 24h, Rs. 500 fee. If GCDA reschedules within 24h, you get extra 30-min follow-up free.</p>
            </article>
            <article className="feature-row">
              <h3>Certification programme</h3>
              <p>Before first live session: 90% refund (10% admin fee). After first live session: non-refundable. EMI: pro-rata refund for unattended modules only. Study material and recorded sessions are non-refundable once accessed.</p>
            </article>
            <article className="feature-row">
              <h3>Workshops & seminars (institutional)</h3>
              <p>Institutional bookings: 50% refund if cancelled 7+ days before event, 0% within 7 days – but free rescheduling within 30 days.</p>
            </article>
            <article className="feature-row">
              <h3>Upgrade instead of refund</h3>
              <p>Many clients prefer to upgrade: Stream Selector (Rs. 2,999) → Degree Selector (Rs. 3,499) pay Rs. 500 difference. Upgrade can be done anytime within 30 days of original payment.</p>
            </article>
            <article className="feature-row">
              <h3>How we handle disputes</h3>
              <p>Email first. If unresolved, mediation in Mumbai. We aim to resolve all refund requests in 7 business days with clear communication.</p>
            </article>
          </div>
          <div className="info-panel" style={{ marginTop: '2rem' }}>
            <h3>Contact for refunds</h3>
            <p>GCDA – 102, Citi Mall, Link Road, Andheri West, Mumbai 400053</p>
            <p>Email: gcda.career@gmail.com • Phone: +91 91360 05039 • WhatsApp: same number</p>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Refund FAQs" title="Common questions about refund & return" center />
          <FAQList items={faqs} />
        </div>
        <JsonLd id="ld-faq-refund" data={faqSchema(faqs)} />
      </section>

      <JsonLd id="ld-breadcrumb-refund" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-webpage-refund" data={legalPageSchema({ url, name: 'Refund & Return Policy – GCDA', description: 'GCDA refund policy – 7-day return window, rescheduling, upgrades.' })} />
      <JsonLd
        id="ld-merchant-return"
        data={{
          '@context': 'https://schema.org',
          '@type': 'MerchantReturnPolicy',
          '@id': `${url}#returnpolicy`,
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 7,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn',
          applicableCountry: 'IN',
          returnPolicySeasonalOverride: {
            '@type': 'MerchantReturnPolicySeasonalOverride',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
          },
        }}
      />
    </>
  );
}
