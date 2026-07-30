import Link from 'next/link';
import { company } from '@/data/site';

export default function CTASection({ title, description, primaryLabel = 'Contact Us', primaryHref = '/contact', secondaryLabel = 'Chat on WhatsApp' }) {
  return (
    <>
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
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-band {
          padding: 0 0 4.5rem;
        }

        .cta-band-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.8rem;
          padding: 2rem 2.2rem;
          background: linear-gradient(135deg, rgba(196, 91, 64, 0.1), rgba(15, 118, 110, 0.1));
          border: 1px solid var(--line-2);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }
        .cta-band-inner::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(196, 91, 64, 0.15), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .cta-band-inner > * {
          position: relative;
        }
        .cta-band-inner h2 {
          margin-bottom: 0.4rem;
        }
        .cta-band-inner p {
          color: var(--muted);
          margin: 0;
          max-width: 50ch;
        }
        .cta-band-inner .eyebrow {
          color: var(--primary-dark);
          margin-bottom: 0.4rem;
        }

        @media (max-width: 860px) {
          .cta-band-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 560px) {
          .cta-band {
            padding-bottom: 3rem;
          }
          .cta-band-inner {
            padding: 1.5rem 1.4rem;
          }
        }
      ` }} />
    </>
  );
}
