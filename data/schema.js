// Schema generators for all page types.
// Each function returns a JSON-LD-ready object that can be passed to the
// reusable <JsonLd /> component. Schema is the single most important
// on-page signal for AI Overviews, AEO (Answer Engine Optimization), and
// GEO (Generative Engine Optimization) because it tells machines exactly
// what the page is and what it answers.

import { company, services, plans, siteFaqs } from '@/data/site';

const SITE_URL = 'https://gcdassociation.org';

function slugifyLocation(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/['\s,&.]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ----- Organization (site-wide, identity & E-E-A-T) -----
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: company.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.webp`,
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
      'https://www.facebook.com/gcdaindia',
      'https://www.instagram.com/gcdaindia',
      'https://www.linkedin.com/company/global-career-development-association/',
      'https://twitter.com/gcdaindia',
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
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Navi Mumbai' },
      { '@type': 'City', name: 'Pimpri-Chinchwad' },
      { '@type': 'City', name: 'Indore' },
      { '@type': 'City', name: 'Nagpur' },
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Bhopal' },
      { '@type': 'City', name: 'Surat' },
      { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
      { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
      { '@type': 'AdministrativeArea', name: 'Delhi' },
      { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Gujarat' },
      { '@type': 'AdministrativeArea', name: 'Rajasthan' },
      { '@type': 'AdministrativeArea', name: 'West Bengal' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Telangana' },
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
    image: `${SITE_URL}/assets/logo.webp`,
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

// ----- WebSite -----
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    alternateName: company.shortName,
    description:
      'GCDA is a career counselling and guidance association helping Indian students, parents, and professionals make clear education and career decisions.',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/logo.webp`,
      },
    },
    inLanguage: 'en-IN',
  };
}

// ----- Service schema (for a single service) -----
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/career-counselling/${service.slug}#service`,
    name: service.title,
    description: service.shortDescription,
    serviceType: 'Career Counselling',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/career-counselling/${service.slug}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GCDA Career Counselling Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${SITE_URL}/career-counselling/${s.slug}`,
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
    url: `${SITE_URL}/plan`,
    offers: {
      '@type': 'Offer',
      price: plan.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/plan`,
      priceValidUntil: '2027-12-31',
      seller: { '@id': `${SITE_URL}/#organization` },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
      },
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
    image: post.image || `${SITE_URL}/blog/${post.slug}/opengraph-image`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/author/gcda-editorial-team#person`,
      name: post.author || 'GCDA Editorial Team',
      url: `${SITE_URL}/author/gcda-editorial-team`,
      image: `${SITE_URL}/assets/logo.webp`,
      jobTitle: 'Career Guidance & Counselling',
      worksFor: { '@id': `${SITE_URL}/#organization` },
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

// ----- Course schema (used on the Career Counselling Certification page) -----
export function courseSchema({
  name,
  description,
  provider,
  url,
  slug,
  hasCourseInstance = false,
}) {
  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || company.name,
      sameAs: SITE_URL,
    },
    url,
    inLanguage: 'en-IN',
    isAccessibleForFree: false,
    offers: {
      '@type': 'Offer',
      url,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  };

  if (hasCourseInstance) {
    course.hasCourseInstance = {
      '@type': 'CourseInstance',
      courseMode: ['online', 'onsite'],
      courseWorkload: 'PT40H',
      inLanguage: 'en-IN',
      instructor: [
        {
          '@type': 'Organization',
          name: provider || company.name,
        },
      ],
    };
  }

  return course;
}

// ----- City page schema (Service + LocalBusiness-ish with areaServed) -----
export function cityServiceSchema(city, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${url}#service`,
    name: `GCDA Career Counselling in ${city.name}`,
    description: `Expert career counselling, career assessments, stream and degree selection guidance, and professional mentoring for students, parents, and working professionals in ${city.name}, ${city.state}.`,
    image: `${SITE_URL}/assets/hero-illustration.webp`,
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
          url: `${SITE_URL}/career-counselling/${s.slug}`,
        },
      })),
    },
  };
}

// ----- State hub CollectionPage schema -----
export function stateHubSchema({ state, stateSlug, cities }) {
  const url = `${SITE_URL}/${stateSlug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: `Career Counselling in ${state.name}`,
    description: `GCDA offers career counselling, career assessments, and related guidance across ${cities.length} cities in ${state.name}.`,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@type': 'AdministrativeArea', name: state.name },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      name: `GCDA city pages in ${state.name}`,
      numberOfItems: cities.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: cities.slice(0, 100).map((city, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `Career Counsellor in ${city.name}, ${state.name}`,
        url: `${SITE_URL}/${stateSlug}/career-counsellor-${slugifyLocation(city.name)}`,
        description: `Career counselling in ${city.name}, ${state.name}`,
      })),
    },
  };
}

// ----- City + service ProfessionalService schema -----
export function cityServicePageSchema({
  url,
  city,
  stateName,
  serviceName,
  description,
  cityServiceLinks = [],
  image = `${SITE_URL}/assets/hero-illustration.webp`,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${url}#service`,
    name: `${serviceName} in ${city.name}, ${stateName}`,
    description,
    image,
    url,
    telephone: `+${company.phoneRaw}`,
    email: company.email,
    priceRange: '₹₹',
    serviceType: serviceName,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: city.name },
      { '@type': 'AdministrativeArea', name: stateName },
      { '@type': 'Country', name: 'India' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: stateName,
      addressCountry: 'IN',
    },
    audience: [
      { '@type': 'Audience', audienceType: 'Students' },
      { '@type': 'Audience', audienceType: 'Parents' },
      { '@type': 'Audience', audienceType: 'Working professionals' },
    ],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceUrl: url,
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ServiceChannel',
        serviceUrl: company.whatsappLink,
        availableLanguage: ['en', 'hi'],
      },
    ],
    hasOfferCatalog: cityServiceLinks.length
      ? {
          '@type': 'OfferCatalog',
          name: `GCDA services in ${city.name}`,
          itemListElement: cityServiceLinks.map((item) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: item.name,
              url: item.url,
            },
          })),
        }
      : undefined,
  };
}

// ----- AboutPage schema (for /about) -----
// Used by AI Overviews and Google to verify GCDA's identity, mission, and team.
export function aboutPageSchema(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#about`,
    url,
    name: 'About GCDA – Career Counselling Association in India',
    description:
      'GCDA is a Mumbai-headquartered career counselling association founded in 2013. We work with 50,000+ students, parents, and working professionals across India through 5,000+ certified counsellors, offering personal counselling, career assessments, stream and degree selection, and professional growth mentoring.',
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/career-8.webp`,
      width: 1200,
      height: 630,
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: company.name,
      alternateName: company.shortName,
      foundingDate: '2013',
      description:
        'GCDA is a Mumbai-headquartered career counselling association. Our certified counsellors deliver assessment-led personal counselling, stream selection, degree selection, and professional mentoring to students, parents, and working professionals across India.',
      knowsAbout: [
        'Career Counselling',
        'Aptitude Assessment',
        'Stream Selection after 10th',
        'Degree Selection after 12th',
        'MBA Counselling',
        'JEE Planning',
        'NEET Planning',
        'Career Transitions',
      ],
      award: [
        '50,000+ career sessions delivered',
        '5,000+ certified counsellors in network',
        '10+ years of career guidance',
        '98% client satisfaction',
      ],
    },
  };
}

// ----- ContactPage schema (for /contact) -----
export function contactPageSchema(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${url}#contact`,
    url,
    name: 'Contact GCDA – Career Counselling in Mumbai & Across India',
    description:
      'Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office at 102, Citi Mall, Link Road, Andheri West, or reach us by phone, email, or WhatsApp.',
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#localbusiness` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/hero-illustration.webp`,
      width: 1200,
      height: 630,
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: `${company.name} - Mumbai Office`,
      telephone: `+${company.phoneRaw}`,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '102, Citi Mall, Link Road, Andheri West',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400053',
        addressCountry: 'IN',
      },
    },
  };
}

// ----- CollectionPage / ItemList schema (for /cities) -----
export function citiesCollectionSchema(states) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/cities#collection`,
    url: `${SITE_URL}/cities`,
    name: 'GCDA Career Counselling Across India – Cities & States',
    description:
      'GCDA offers career counselling, career assessments, stream and degree selection guidance, and professional mentoring across 36 Indian states and union territories, covering 438 cities.',
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Indian states and cities where GCDA offers career counselling',
      numberOfItems: states.length,
      itemListElement: states.slice(0, 50).map((s, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: s.name,
        url: `${SITE_URL}/${s.slug}`,
        description: `GCDA career counselling in ${s.name} – ${s.cityCount || 0} cities covered, including ${s.capital || ''}.`,
      })),
    },
  };
}

// ----- Blog schema (for /blog list) -----
export function blogListSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: 'GCDA Career Guidance Blog',
    description:
      'Practical, India-specific career guidance for students, parents, and working professionals from the GCDA editorial team.',
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.slice(0, 20).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}/author/gcda-editorial-team#person`,
        name: post.author || 'GCDA Editorial Team',
        url: `${SITE_URL}/author/gcda-editorial-team`,
      },
      keywords: (post.keywords || []).join(', '),
    })),
  };
}

// ----- WebPage schema (explicit page-type signal for AI Overviews) -----
// Tells Google/AI exactly what this page is. Use this on every page that
// does not already have a more specific @type (AboutPage, ContactPage, etc.).
export function webPageSchema({ url, name, description, inLanguage = 'en-IN', primaryImage }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: primaryImage
      ? {
          '@type': 'ImageObject',
          url: primaryImage,
          width: 1200,
          height: 630,
        }
      : undefined,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

// ----- Speakable schema (voice search / AEO) -----
// Marks key sections as speakable for Google Assistant & voice search
export function speakableSchema({ url, name, cssSelector = ['.answer-block p', '.page-hero-copy', '.answer-block-label'] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#speakable`,
    url,
    name: name || 'Speakable content',
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector,
    },
  };
}

// ----- Person schema – GCDA Editorial Team (EEAT) -----
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/author/gcda-editorial-team#person`,
    name: 'GCDA Editorial Team',
    alternateName: 'Global Career Development Association Editorial Team',
    url: `${SITE_URL}/author/gcda-editorial-team`,
    image: `${SITE_URL}/assets/logo.webp`,
    jobTitle: 'Career Guidance & Counselling – Editorial Team',
    description:
      'GCDA Editorial Team is a group of certified career counsellors, psychologists, and education experts with 10+ years of field experience, having guided 50,000+ students, parents, and working professionals across 438 Indian cities.',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    sameAs: [
      'https://www.linkedin.com/company/global-career-development-association/',
      'https://twitter.com/gcdaindia',
      'https://www.facebook.com/gcdaindia',
      'https://www.instagram.com/gcdaindia',
    ],
    knowsAbout: [
      'Career Counselling',
      'Career Assessment',
      'Stream Selection after 10th',
      'Degree Selection after 12th',
      'JEE Planning',
      'NEET Planning',
      'MBA Counselling',
      'Working Professional Growth',
    ],
    award: [
      '50,000+ career sessions delivered',
      '5,000+ certified counsellors',
      '10+ years of career guidance',
      '98% client satisfaction',
    ],
  };
}

// ----- Author Person page schema wrapper -----
export function authorPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/author/gcda-editorial-team#profile`,
    url: `${SITE_URL}/author/gcda-editorial-team`,
    name: 'GCDA Editorial Team – Career Counselling Experts',
    description:
      'Meet GCDA Editorial Team – certified career counsellors and psychologists guiding 50K+ students across India since 2013.',
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: personSchema(),
  };
}

// ----- ItemList schema for city cross-links -----
export function itemListSchema({ url, name, items, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    url,
    name,
    description: description || name,
    numberOfItems: items.length,
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      url: it.url,
      description: it.description,
    })),
  };
}

// ----- Privacy/Terms/Refund WebPage schemas -----
export function legalPageSchema({ url, name, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

