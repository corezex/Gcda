"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { company, navLinks, services } from '@/data/site';
import { getCurrentLangFromPath, localizePath } from '@/data/i18n';

const NAV_TRANSLATIONS = {
  en: { Home: 'Home', About: 'About', Services: 'Services', Certification: 'Certification', Plans: 'Plans', Blog: 'Blog', Contact: 'Contact' },
  hi: { Home: 'होम', About: 'हमारे बारे में', Services: 'सेवाएं', Certification: 'प्रमाणन', Plans: 'योजनाएं', Blog: 'ब्लॉग', Contact: 'संपर्क' },
  bn: { Home: 'হোম', About: 'আমাদের সম্পর্কে', Services: 'পরিষেবা', Certification: 'সার্টিফিকেশন', Plans: 'প্ল্যান', Blog: 'ব্লগ', Contact: 'যোগাযোগ' },
  mr: { Home: 'होम', About: 'आमच्याबद्दल', Services: 'सेवा', Certification: 'प्रमाणन', Plans: 'योजना', Blog: 'ब्लॉग', Contact: 'संपर्क' },
  te: { Home: 'హోమ్', About: 'మా గురించి', Services: 'సేవలు', Certification: 'సర్టిఫికేషన్', Plans: 'ప్లాన్‌లు', Blog: 'బ్లాగ్', Contact: 'సంప్రదించండి' },
  ta: { Home: 'முகப்பு', About: 'எங்களை பற்றி', Services: 'சேவைகள்', Certification: 'சான்றிதழ்', Plans: 'திட்டங்கள்', Blog: 'வலைப்பதிவு', Contact: 'தொடர்பு' },
  gu: { Home: 'હોમ', About: 'અમારા વિશે', Services: 'સેવાઓ', Certification: 'પ્રમાણપત્ર', Plans: 'યોજનાઓ', Blog: 'બ્લોગ', Contact: 'સંપર્ક' },
  kn: { Home: 'ಮುಖಪುಟ', About: 'ನಮ್ಮ ಬಗ್ಗೆ', Services: 'ಸೇವೆಗಳು', Certification: 'ಪ್ರಮಾಣೀಕರಣ', Plans: 'ಯೋಜನೆಗಳು', Blog: 'ಬ್ಲಾಗ್', Contact: 'ಸಂಪರ್ಕ' },
  ml: { Home: 'ഹോം', About: 'ഞങ്ങളെക്കുറിച്ച്', Services: 'സേവനങ്ങൾ', Certification: 'സർട്ടിഫിക്കേഷൻ', Plans: 'പ്ലാനുകൾ', Blog: 'ബ്ലോഗ്', Contact: 'ബന്ധപ്പെടുക' },
  pa: { Home: 'ਹੋਮ', About: 'ਸਾਡੇ ਬਾਰੇ', Services: 'ਸੇਵਾਵਾਂ', Certification: 'ਸਰਟੀਫਿਕੇਸ਼ਨ', Plans: 'ਯੋਜਨਾਵਾਂ', Blog: 'ਬਲੌਗ', Contact: 'ਸੰਪਰਕ' },
  or: { Home: 'ହୋମ୍', About: 'ଆମ ବିଷୟରେ', Services: 'ସେବା', Certification: 'ପ୍ରମାଣପତ୍ର', Plans: 'ଯୋଜନା', Blog: 'ବ୍ଲଗ୍', Contact: 'ଯୋଗାଯୋଗ' },
  ur: { Home: 'ہوم', About: 'ہمارے بارے میں', Services: 'خدمات', Certification: 'سرٹیفیکیشن', Plans: 'منصوبے', Blog: 'بلاگ', Contact: 'رابطہ' },
  ks: { Home: 'ہوم', About: 'ہمارے بارے', Services: 'خدمات', Certification: 'سرٹیفیکیشن', Plans: 'منصوبے', Blog: 'بلاگ', Contact: 'رابطہ' },
  kok: { Home: 'होम', About: 'आमच्या बद्दल', Services: 'सेवा', Certification: 'प्रमाणपत्र', Plans: 'योजना', Blog: 'ब्लॉग', Contact: 'संपर्क' },
  as: { Home: 'হোম', About: 'আমাৰ বিষয়ে', Services: 'সেৱা', Certification: 'প্ৰমাণপত্ৰ', Plans: 'পৰিকল্পনা', Blog: 'ব্লগ', Contact: 'যোগাযোগ' },
  mni: { Home: 'হোম', About: 'ঐখোয়গী মতাংদা', Services: 'সেবা', Certification: 'সার্টিফিকেট', Plans: 'প্লান', Blog: 'ব্লগ', Contact: 'কন্টাক্ট' },
  sat: { Home: 'ᱦᱳᱢ', About: 'ᱟᱞᱮ ᱵᱟᱵᱚᱛ', Services: 'ᱥᱮᱵᱟ', Certification: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ', Plans: 'ᱯᱞᱟᱱ', Blog: 'ᱵᱞᱚᱜᱽ', Contact: 'ᱡᱚᱯᱨᱟᱣ' },
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const currentLang = getCurrentLangFromPath(pathname);
  const navTrans = NAV_TRANSLATIONS[currentLang] || NAV_TRANSLATIONS.en;

  const localizeHref = (href) => localizePath(href, currentLang);

  // Strip lang prefix for active check: e.g. /hi/about -> /about
  const strippedPath = (() => {
    const segs = (pathname || '/').split('/').filter(Boolean);
    const first = segs[0];
    if (first && first !== 'en' && Object.keys(NAV_TRANSLATIONS).includes(first)) {
      return '/' + segs.slice(1).join('/') || '/';
    }
    return pathname || '/';
  })();

  const isActive = (href) => {
    if (href === '/') return strippedPath === '/';
    if (href === '/career-counselling') {
      return strippedPath === '/career-counselling' || strippedPath.startsWith('/career-counselling/');
    }
    return strippedPath === href || strippedPath.startsWith(`${href}/`);
  };

  const isServicesActive = () => strippedPath.startsWith('/career-counselling');

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

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  const localizedBrandHref = currentLang === 'en' ? '/' : `/${currentLang}`;

  // For Hindi, only show 2 service details (per user request) - the other 4 are same as topical which were deleted
  const filteredServices = currentLang === 'hi' ? services.filter(s => ['personal-counselling','career-assessment'].includes(s.slug)) : services;
  const showTopicalForLang = currentLang !== 'hi'; // don't show topical services for hi as they were deleted

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={localizedBrandHref} className="brand" onClick={() => { setOpen(false); setServicesOpen(false); }}>
          <img src="/assets/logo.png" alt="GCDA logo" className="brand-logo" />
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
            const label = navTrans[link.label] || link.label;
            const href = localizeHref(link.href);
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
                    {label}
                    <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                  </button>
                  {servicesOpen ? (
                    <div className="nav-dropdown-menu" role="menu">
                      <Link
                        href={localizeHref('/career-counselling')}
                        className="nav-dropdown-item nav-dropdown-all"
                        role="menuitem"
                        onClick={() => { setOpen(false); setServicesOpen(false); }}
                      >
                        All services
                      </Link>
                      <div className="nav-dropdown-divider" />
                      {filteredServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={localizeHref(`/career-counselling/${s.slug}`)}
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
                      {showTopicalForLang ? (
                        <>
                          <div className="nav-dropdown-divider" />
                          <span className="nav-dropdown-heading">Topical services</span>
                          <Link
                            href={localizeHref('/career-counselling-seminar')}
                            className="nav-dropdown-item"
                            role="menuitem"
                            onClick={() => { setOpen(false); setServicesOpen(false); }}
                          >
                            <span className="nav-dropdown-icon" aria-hidden="true">🎓</span>
                            <span className="nav-dropdown-text">
                              <strong>Career Counselling Seminar</strong>
                              <small>Workshops & seminars for schools, colleges, and parents</small>
                            </span>
                          </Link>
                          <Link
                            href={localizeHref('/stream-selection-guidance')}
                            className="nav-dropdown-item"
                            role="menuitem"
                            onClick={() => { setOpen(false); setServicesOpen(false); }}
                          >
                            <span className="nav-dropdown-icon" aria-hidden="true">🧭</span>
                            <span className="nav-dropdown-text">
                              <strong>Stream Selection Guidance</strong>
                              <small>Choose the right stream after 10th — Science, Commerce, or Arts</small>
                            </span>
                          </Link>
                          <Link
                            href={localizeHref('/degree-selection-guidance')}
                            className="nav-dropdown-item"
                            role="menuitem"
                            onClick={() => { setOpen(false); setServicesOpen(false); }}
                          >
                            <span className="nav-dropdown-icon" aria-hidden="true">🏫</span>
                            <span className="nav-dropdown-text">
                              <strong>Degree Selection Guidance</strong>
                              <small>Pick the right degree and college after 12th</small>
                            </span>
                          </Link>
                          <Link
                            href={localizeHref('/guidance-for-working-professionals')}
                            className="nav-dropdown-item"
                            role="menuitem"
                            onClick={() => { setOpen(false); setServicesOpen(false); }}
                          >
                            <span className="nav-dropdown-icon" aria-hidden="true">💼</span>
                            <span className="nav-dropdown-text">
                              <strong>Guidance for Working Professionals</strong>
                              <small>Career growth, transition, and MBA planning</small>
                            </span>
                          </Link>
                        </>
                      ) : null}
                      <div className="nav-dropdown-divider" />
                      <Link
                        href={localizeHref('/career-certification')}
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
                href={href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => { setOpen(false); setServicesOpen(false); }}
              >
                {label}
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
