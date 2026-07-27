import Link from 'next/link';
import { company } from '@/data/site';
import { localizePath } from '@/data/i18n';

export default function CTASection({ title, description, primaryLabel, primaryHref = '/contact', secondaryLabel, lang = 'en' }) {
  const lp = (p) => localizePath(p, lang);
  const isHi = lang === 'hi';
  const eyebrow = isHi ? 'शुरू करने के लिए तैयार हैं?' : 'Ready to begin?';
  const primary = primaryLabel || (isHi ? 'संपर्क करें' : 'Contact Us');
  const secondary = secondaryLabel || (isHi ? 'WhatsApp पर चैट करें' : 'Chat on WhatsApp');
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Link href={lp(primaryHref)} className="button button-primary">{primary}</Link>
          <a href={company.whatsappLink} className="button button-secondary" target="_blank" rel="noreferrer">
            {secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
