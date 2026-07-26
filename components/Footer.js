import Link from 'next/link';
import { company, navLinks, services } from '@/data/site';
import { cities } from '@/data/cities';

export default function Footer() {
  const topCities = cities.slice(0, 6);

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
            Helping students, parents, graduates, and professionals across India make clearer education and career decisions since 2013.
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
                <Link href={`/career-counselling#${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Top Cities</h4>
          <ul className="footer-links">
            {topCities.map((city) => (
              <li key={city.slug}>
                <Link href={`/cities/${city.slug}`}>Career Counselling in {city.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/cities">View all cities →</Link>
            </li>
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
        <p>Career Counselling across India • Built with Next.js • SEO, AEO, and AI-Overview ready</p>
      </div>
    </footer>
  );
}
