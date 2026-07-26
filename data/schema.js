// Schema generators for all page types.
// Each function returns a JSON-LD-ready object that can be passed to the
// reusable <JsonLd /> component. Schema is the single most important
// on-page signal for AI Overviews, AEO (Answer Engine Optimization), and
// GEO (Generative Engine Optimization) because it tells machines exactly
// what the page is and what it answers.

import { company, services, plans, siteFaqs } from '@/data/site';

const SITE_URL = 'https://gcdassociation.org';

// ----- Organization (site-wide, identity & E-E-A-T) -----
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: company.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.png`,
    description:
      'Global Career Development Association (GCDA) provides expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring for students, parents, and working professionals across India.',
    foundingDate: '2013',
    founder: {
      '@type': 'Person',
      name: 'GCDA Founders',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '102, Citi Mall, Link Road, Andheri West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400053',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${company.phoneRaw}`,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
        email: company.email,
      },
    ],
    sameAs: [
      'https://www.facebook.com/gcdassociation',
      'https://www.instagram.com/gcdassociation',
      'https://www.linkedin.com/company/gcdassociation',
      'https://twitter.com/gcdassociation',
    ],
    knowsAbout: [
      'Career Counselling',
      'Career Assessment',
      'Stream Selection',
      'Degree Selection',
      'Working Professional Career Guidance',
      'Workshops and Seminars',
      'JEE Planning',
      'NEET Planning',
      'MBA Planning',
      'Career Transitions',
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Ahmedabad' },
    ],
  };
}

// ----- LocalBusiness (for the Mumbai office) -----
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: `${company.name} - Mumbai Office`,
    image: `${SITE_URL}/assets/logo.png`,
    url: SITE_URL,
    telephone: `+${company.phoneRaw}`,
    email: company.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '102, Citi Mall, Link Road, Andheri West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400053',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.1364,
      longitude: 72.8296,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: { '@type': 'Country', name: 'India' },
  };
}

// ----- WebSite (for sitelinks search box) -----
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    description:
      'GCDA is a career counselling and guidance association helping Indian students, parents, and professionals make clear education and career decisions.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// ----- Service schema (for a single service) -----
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.shortDescription,
    serviceType: 'Career Counselling',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GCDA Career Counselling Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

// ----- Product schema (for plans) -----
export function productSchema(plan) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `GCDA ${plan.name} Plan`,
    description: plan.eyebrow,
    brand: { '@type': 'Brand', name: 'GCDA' },
    offers: {
      '@type': 'Offer',
      price: plan.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/plans#${plan.slug}`,
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  };
}

// ----- FAQPage schema (used on services, blog, city pages) -----
export function faqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

// ----- HowTo schema (used for the "3-step journey" and service steps) -----
export function howToSchema(name, steps, totalTime) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: typeof step === 'string' ? `Step ${idx + 1}` : step.title || `Step ${idx + 1}`,
      text: typeof step === 'string' ? step : step.description || step.title,
    })),
    totalTime: totalTime || 'PT90M',
  };
}

// ----- Article schema (used on blog posts) -----
export function articleSchema(post, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}/assets/hero-illustration.gif`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Organization',
      name: post.author || 'GCDA Editorial Team',
      url: SITE_URL,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: post.category,
    keywords: (post.keywords || []).join(', '),
  };
}

// ----- BreadcrumbList schema (used on every non-home page) -----
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ----- City page schema (Service + LocalBusiness-ish with areaServed) -----
export function cityServiceSchema(city, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${url}#service`,
    name: `GCDA Career Counselling in ${city.name}`,
    description: `Expert career counselling, career assessments, stream and degree selection guidance, and professional mentoring for students, parents, and working professionals in ${city.name}, ${city.state}.`,
    image: `${SITE_URL}/assets/hero-illustration.gif`,
    url,
    telephone: `+${company.phoneRaw}`,
    email: company.email,
    priceRange: '₹₹',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: city.name },
      { '@type': 'AdministrativeArea', name: city.state },
      { '@type': 'Country', name: 'India' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `GCDA Services in ${city.name}`,
      itemListElement: services.slice(0, 3).map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}
