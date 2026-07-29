"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { company, navLinks, services } from '@/data/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const desktopServicesRef = useRef(null);

  const closeMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href === '/career-counselling') {
      return pathname === '/career-counselling' || pathname.startsWith('/career-counselling/');
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesActive = () => pathname.startsWith('/career-counselling');

  useEffect(() => {
    function onClickOutside(event) {
      if (window.innerWidth <= 860) return;
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') closeMenus();
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    closeMenus();
  }, [pathname]);

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

  const serviceItems = (
    <>
      <Link href="/career-counselling" className="nav-dropdown-item nav-dropdown-all" role="menuitem" onClick={closeMenus}>
        All services
      </Link>
      <div className="nav-dropdown-divider" />
      {services.map((s) => (
        <Link key={s.slug} href={`/career-counselling/${s.slug}`} className="nav-dropdown-item" role="menuitem" onClick={closeMenus}>
          <span className="nav-dropdown-icon" aria-hidden="true">{s.icon}</span>
          <span className="nav-dropdown-text">
            <strong>{s.title}</strong>
            <small>{s.shortDescription}</small>
          </span>
        </Link>
      ))}
      <div className="nav-dropdown-divider" />
      <Link href="/career-certification" className="nav-dropdown-item nav-dropdown-feature" role="menuitem" onClick={closeMenus}>
        <span className="nav-dropdown-icon" aria-hidden="true">🏅</span>
        <span className="nav-dropdown-text">
          <strong>Career Counselling Certification</strong>
          <small>Become a certified career counsellor — hybrid online + in-person</small>
        </span>
      </Link>
    </>
  );

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={closeMenus}>
            <img src="/assets/logo.webp" alt="GCDA logo" className="brand-logo" width="1024" height="1024" loading="eager" fetchPriority="high" decoding="async" />
          </Link>

          <button
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="nav-desktop" aria-label="Desktop navigation">
            {navLinks.map((link) => {
              if (link.href === '/career-counselling') {
                return (
                  <div key={link.href} className={`nav-dropdown ${servicesOpen ? 'is-open' : ''}`} ref={desktopServicesRef}>
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
                    <div className={`nav-dropdown-menu ${servicesOpen ? 'is-visible' : ''}`} role="menu" aria-hidden={!servicesOpen}>
                      {serviceItems}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={`nav-link ${isActive(link.href) ? 'active' : ''}`}>
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

      {open ? <button className="nav-backdrop" type="button" aria-label="Close menu" onClick={closeMenus} /> : null}

      <nav id="mobile-navigation" className={`nav-mobile ${open ? 'nav-mobile-open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => {
          if (link.href === '/career-counselling') {
            return (
              <div key={link.href} className={`mobile-nav-group ${servicesOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className={`nav-link mobile-services-toggle ${isServicesActive() ? 'active' : ''}`}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                </button>
                <div className={`mobile-services-panel ${servicesOpen ? 'is-visible' : ''}`}>
                  {serviceItems}
                </div>
              </div>
            );
          }

          return (
            <Link key={link.href} href={link.href} className={`nav-link mobile-nav-link ${isActive(link.href) ? 'active' : ''}`} onClick={closeMenus}>
              {link.label}
            </Link>
          );
        })}
        <a className="button button-primary mobile-nav-cta" href={company.whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenus}>
          Book Consultation
        </a>
      </nav>
    </>
  );
}
