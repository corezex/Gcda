import Link from 'next/link';
import { company, navLinks, services } from '@/data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand-row">
            <img src="/assets/logo.png" alt="GCDA logo" className="footer-logo" />
            <div>
              <h3>{company.name}</h3>
              <p>{company.tagline}</p>
            </div>
          </div>
          <p className="footer-copy">
            Helping students, parents, graduates, and professionals make clearer education and career decisions.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>{company.addressLine1}</li>
            <li><a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={company.whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {company.shortName}. All rights reserved.</p>
        <p>Built with Next.js • Responsive • SEO-ready structure</p>
      </div>
    </footer>
  );
}
