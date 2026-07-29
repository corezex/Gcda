"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { company, navLinks, services } from '@/data/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href === '/career-counselling') {
      return pathname === '/career-counselling' || pathname.startsWith('/career-counselling/');
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesActive = () => pathname.startsWith('/career-counselling');

  // Close services dropdown when clicking outside, when route changes,
  // or when the user presses Escape.
  useEffect(() => {
    function onClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') setServicesOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  // Prevent the background page from scrolling when the mobile menu is open.
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 860;
    if (open && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => { setOpen(false); setServicesOpen(false); }}>
          <img src="/assets/logo.webp" alt="GCDA logo" className="brand-logo" width="1024" height="1024" loading="eager" fetchPriority="high" decoding="async" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {navLinks.map((link) => {
            // Render Services as a click-to-toggle dropdown
            if (link.href === '/career-counselling') {
              return (
                <div
                  key={link.href}
                  className="nav-dropdown"
                  ref={servicesRef}
                >
                  <button
                    type="button"
                    className={`nav-link nav-dropdown-label ${isServicesActive() ? 'active' : ''}`}
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                  </button>
                  {servicesOpen ? (
                    <div className="nav-dropdown-menu" role="menu">
                      <Link
                        href="/career-counselling"
                        className="nav-dropdown-item nav-dropdown-all"
                        role="menuitem"
                        onClick={() => { setOpen(false); setServicesOpen(false); }}
                      >
                        All services
                      </Link>
                      <div className="nav-dropdown-divider" />
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/career-counselling/${s.slug}`}
                          className="nav-dropdown-item"
                          role="menuitem"
                          onClick={() => { setOpen(false); setServicesOpen(false); }}
                        >
                          <span className="nav-dropdown-icon" aria-hidden="true">{s.icon}</span>
                          <span className="nav-dropdown-text">
                            <strong>{s.title}</strong>
                            <small>{s.shortDescription}</small>
                          </span>
                        </Link>
                      ))}
                      <div className="nav-dropdown-divider" />
                      <Link
                        href="/career-certification"
                        className="nav-dropdown-item nav-dropdown-feature"
                        role="menuitem"
                        onClick={() => { setOpen(false); setServicesOpen(false); }}
                      >
                        <span className="nav-dropdown-icon" aria-hidden="true">🏅</span>
                        <span className="nav-dropdown-text">
                          <strong>Career Counselling Certification</strong>
                          <small>Become a certified career counsellor — hybrid online + in-person</small>
                        </span>
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => { setOpen(false); setServicesOpen(false); }}
              >
                {link.label}
              </Link>
            );
          })}
          <a className="button button-primary header-cta" href={company.whatsappLink} target="_blank" rel="noreferrer">
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
