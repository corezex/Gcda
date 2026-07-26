import Link from 'next/link';
import { company, navLinks, services } from '@/data/site';
import { ALL_CITIES } from '@/data/indiaLocations';
import { SERVICE_CITY_PATTERNS } from '@/data/servicePages';

export default function Footer() {
  // Pick 6 popular cities from across India for the "Top Cities" section.
  // Using ALL_CITIES (the live-site URL format).
  const popularCitySlugs = [
    ['maharashtra', 'mumbai'],
    ['delhi', 'new-delhi'],
    ['karnataka', 'bengaluru'],
    ['tamil-nadu', 'chennai'],
    ['telangana', 'hyderabad'],
    ['west-bengal', 'kolkata'],
  ];
  const topCities = popularCitySlugs
    .map(([stateSlug, citySlug]) => {
      const c = ALL_CITIES.find((x) => x.stateSlug === stateSlug && x.citySlug === citySlug);
      return c ? { stateSlug, citySlug, name: c.name } : null;
    })
    .filter(Boolean);

  // Social links (provided by the user)
  const socials = [
    {
      href: 'https://www.facebook.com/gcdaindia',
      label: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/gcdaindia',
      label: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.16 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.16 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.51 0-4.74.06-1.07.05-1.65.23-2.04.39-.51.2-.88.44-1.27.83a3.4 3.4 0 0 0-.83 1.27c-.16.39-.34.97-.39 2.04C2.67 8.49 2.66 8.85 2.66 12s.01 3.51.07 4.74c.05 1.07.23 1.65.39 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.16.97.34 2.04.39 1.23.06 1.59.07 4.74.07s3.51-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.39.51-.2.88-.44 1.27-.83a3.4 3.4 0 0 0 .83-1.27c.16-.39.34-.97.39-2.04.06-1.23.07-1.59.07-4.74s-.01-3.51-.07-4.74c-.05-1.07-.23-1.65-.39-2.04a3.4 3.4 0 0 0-.83-1.27 3.4 3.4 0 0 0-1.27-.83c-.39-.16-.97-.34-2.04-.39C15.51 3.96 15.15 3.96 12 3.96zm0 3.06A4.98 4.98 0 1 1 12 17a4.98 4.98 0 0 1 0-9.98zm0 1.8A3.18 3.18 0 1 0 12 15.18 3.18 3.18 0 0 0 12 8.82zm6.4-2.04a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/company/global-career-development-association/',
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
  ];

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

          <div className="footer-socials" aria-label="Social media">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={`GCDA on ${s.label}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
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
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/career-counselling/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/career-certification">Career Counselling Certification</Link>
            </li>
            <li>
              <Link href="/career-counselling-seminar">Seminars & Workshops</Link>
            </li>
            <li>
              <Link href="/stream-selection-guidance">Stream Selection Guidance</Link>
            </li>
            <li>
              <Link href="/degree-selection-guidance">Degree Selection Guidance</Link>
            </li>
            <li>
              <Link href="/guidance-for-working-professionals">Working Professional Guidance</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Top Cities</h4>
          <ul className="footer-links">
            {topCities.map((c) => (
              <li key={`${c.stateSlug}-${c.citySlug}`}>
                <Link href={`/${c.stateSlug}/career-counsellor-${c.citySlug}`}>
                  Career Counselling in {c.name}
                </Link>
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
            <li>
              <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="footer-whatsapp">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: 6 }}>
                  <path d="M20.5 3.5A11 11 0 0 0 3.7 17l-1.6 5.7 5.8-1.5a11 11 0 0 0 16.2-13.2 11 11 0 0 0-3.6-4.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3.4.9.9-3.3-.2-.3A8 8 0 1 1 20 12a8 8 0 0 1-8 8zm4.6-6c-.3-.1-1.4-.7-1.6-.7-.2 0-.4-.1-.6.1l-.7.9c-.1.1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-3 .3.3 0 0 1 .1-.5l.4-.5.3-.4.1-.4-.1-.4-1-1.4-.3-.4-.4-.1c-.2 0-.4 0-.6.1l-.4.1a1.4 1.4 0 0 0-1 1.1c-.2 1 0 1.9.5 2.8a13.4 13.4 0 0 0 5 5.2c.7.4 1.3.6 1.7.8.5.2.9.2 1.2.1.4-.1 1.2-.5 1.4-1l.2-.6c.1-.3 0-.5-.1-.5l-.5-.3z" />
                </svg>
                Chat on WhatsApp
              </a>
            </li>
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
