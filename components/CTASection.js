import Link from 'next/link';
import { company } from '@/data/site';

export default function CTASection({ title, description, primaryLabel = 'Contact Us', primaryHref = '/contact', secondaryLabel = 'Chat on WhatsApp' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <span className="eyebrow">Ready to begin?</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Link href={primaryHref} className="button button-primary">{primaryLabel}</Link>
          <a href={company.whatsappLink} className="button button-secondary" target="_blank" rel="noreferrer">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
