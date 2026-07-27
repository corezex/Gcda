// Central i18n definitions with native names, OG locales, and translated strings
import { LANGUAGES as BASE_LANGUAGES, SITE_URL, hreflangAlternates, hreflang } from './hreflang';

export const LOCALE_DETAILS = {
  en:  { nativeName: 'English',    ogLocale: 'en_IN',  flag: '🇮🇳', dir: 'ltr' },
  hi:  { nativeName: 'हिन्दी',      ogLocale: 'hi_IN',  flag: '🇮🇳', dir: 'ltr' },
  bn:  { nativeName: 'বাংলা',       ogLocale: 'bn_IN',  flag: '🇮🇳', dir: 'ltr' },
  te:  { nativeName: 'తెలుగు',      ogLocale: 'te_IN',  flag: '🇮🇳', dir: 'ltr' },
  mr:  { nativeName: 'मराठी',       ogLocale: 'mr_IN',  flag: '🇮🇳', dir: 'ltr' },
  ta:  { nativeName: 'தமிழ்',       ogLocale: 'ta_IN',  flag: '🇮🇳', dir: 'ltr' },
  gu:  { nativeName: 'ગુજરાતી',     ogLocale: 'gu_IN',  flag: '🇮🇳', dir: 'ltr' },
  kn:  { nativeName: 'ಕನ್ನಡ',       ogLocale: 'kn_IN',  flag: '🇮🇳', dir: 'ltr' },
  ml:  { nativeName: 'മലയാളം',      ogLocale: 'ml_IN',  flag: '🇮🇳', dir: 'ltr' },
  pa:  { nativeName: 'ਪੰਜਾਬੀ',      ogLocale: 'pa_IN',  flag: '🇮🇳', dir: 'ltr' },
  or:  { nativeName: 'ଓଡ଼ିଆ',       ogLocale: 'or_IN',  flag: '🇮🇳', dir: 'ltr' },
  ur:  { nativeName: 'اردو',        ogLocale: 'ur_IN',  flag: '🇮🇳', dir: 'rtl' },
  ks:  { nativeName: 'کٲشُر',       ogLocale: 'ks_IN',  flag: '🇮🇳', dir: 'rtl' },
  kok: { nativeName: 'कोंकणी',      ogLocale: 'kok_IN', flag: '🇮🇳', dir: 'ltr' },
  as:  { nativeName: 'অসমীয়া',     ogLocale: 'as_IN',  flag: '🇮🇳', dir: 'ltr' },
  mni: { nativeName: 'মৈতৈলোন্',     ogLocale: 'mni_IN', flag: '🇮🇳', dir: 'ltr' },
  sat: { nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',      ogLocale: 'sat_IN', flag: '🇮🇳', dir: 'ltr' },
};

export const LANGUAGES = BASE_LANGUAGES.map(l => ({
  ...l,
  ...LOCALE_DETAILS[l.code],
}));

export function getLocaleDetails(code) {
  return LOCALE_DETAILS[code] || LOCALE_DETAILS.en;
}

export function getCurrentLangFromPath(pathname) {
  if (!pathname) return 'en';
  const seg = pathname.split('/').filter(Boolean)[0];
  if (LANGUAGES.some(l => l.code === seg)) return seg;
  return 'en';
}

export function stripLangFromPath(pathname) {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (LANGUAGES.some(l => l.code !== 'en' && l.code === seg)) {
    const rest = '/' + pathname.split('/').filter(Boolean).slice(1).join('/');
    return rest === '/' ? '/' : rest || '/';
  }
  return pathname || '/';
}

export function localizePath(path, lang) {
  if (!path) path = '/';
  if (lang === 'en') return path;
  if (path === '/') return `/${lang}`;
  return `/${lang}${path}`;
}

export const TRANSLATIONS = 
{
  "en": {
    "common": {
      "bookConsultation": "Book a Free Consultation",
      "exploreServices": "Explore Services",
      "learnMore": "Learn more about GCDA →",
      "contactUs": "Contact Us",
      "chatWhatsapp": "Chat on WhatsApp",
      "getStarted": "Get Started",
      "viewPlans": "View Plans",
      "bookSession": "Book a Session"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "Career counselling that turns confusion into a clear plan.",
      "description": "From stream selection after 10th and degree planning after 12th to professional growth and career transitions, GCDA helps students, parents, and working professionals across India make confident, well-informed career decisions.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "Trusted career guidance with a practical, student-first approach.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "Get in touch with GCDA for counselling, plans, and guidance.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "Choose the plan that matches your current stage.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "Career Counselling & Career Guidance in India | GCDA",
        "description": "GCDA provides expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring for students, parents, and working professionals across India."
      },
      "about": {
        "title": "About GCDA – Career Counselling Association in India: Our Mission & Team",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "Contact GCDA – Career Counselling in Mumbai & Across India",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "Career Counselling Plans & Pricing | Stream, Degree, Professional",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "hi": {
    "common": {
      "bookConsultation": "नि:शुल्क परामर्श बुक करें",
      "exploreServices": "सेवाएं देखें",
      "learnMore": "GCDA के बारे में और जानें →",
      "contactUs": "संपर्क करें",
      "chatWhatsapp": "WhatsApp पर चैट करें",
      "getStarted": "शुरू करें",
      "viewPlans": "प्लान देखें",
      "bookSession": "सत्र बुक करें"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "करियर काउंसलिंग जो भ्रम को स्पष्ट योजना में बदल देती है।",
      "description": "10वीं के बाद स्ट्रीम चयन और 12वीं के बाद डिग्री योजना से लेकर पेशेवर विकास तक, GCDA पूरे भारत में छात्रों को मदद करता है।",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "व्यावहारिक, छात्र-प्रथम दृष्टिकोण के साथ विश्वसनीय मार्गदर्शन।",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "परामर्श, योजनाओं के लिए GCDA से संपर्क करें।",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "वह योजना चुनें जो आपके चरण से मेल खाती हो।",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "भारत में करियर काउंसलिंग और मार्गदर्शन | GCDA",
        "description": "10वीं के बाद स्ट्रीम चयन और 12वीं के बाद डिग्री योजना से लेकर पेशेवर विकास तक, GCDA पूरे भारत में छात्रों को मदद करता है।"
      },
      "about": {
        "title": "व्यावहारिक, छात्र-प्रथम दृष्टिकोण के साथ विश्वसनीय मार्गदर्शन।",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "परामर्श, योजनाओं के लिए GCDA से संपर्क करें।",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "वह योजना चुनें जो आपके चरण से मेल खाती हो।",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "bn": {
    "common": {
      "bookConsultation": "বিনামূল্যে পরামর্শ বুক করুন",
      "exploreServices": "সেবা দেখুন",
      "learnMore": "GCDA সম্পর্কে আরও জানুন →",
      "contactUs": "যোগাযোগ করুন",
      "chatWhatsapp": "WhatsApp এ চ্যাট করুন",
      "getStarted": "শুরু করুন",
      "viewPlans": "প্ল্যান দেখুন",
      "bookSession": "সেশন বুক করুন"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "ক্যারিয়ার কাউন্সেলিং যা বিভ্রান্তিকে স্পষ্ট পরিকল্পনায় পরিণত করে।",
      "description": "১০ম এর পর স্ট্রিম নির্বাচন এবং ১২ম এর পর ডিগ্রি পরিকল্পনা থেকে, GCDA ভারত জুড়ে শিক্ষার্থীদের সহায়তা করে।",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "ব্যবহারিক, শিক্ষার্থী-প্রথম দৃষ্টিভঙ্গি সহ বিশ্বস্ত নির্দেশিকা।",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "GCDA সাথে যোগাযোগ করুন।",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "আপনার পর্যায়ের সাথে মেলে এমন প্ল্যান বেছে নিন।",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ভারতে ক্যারিয়ার কাউন্সেলিং | GCDA",
        "description": "১০ম এর পর স্ট্রিম নির্বাচন এবং ১২ম এর পর ডিগ্রি পরিকল্পনা থেকে, GCDA ভারত জুড়ে শিক্ষার্থীদের সহায়তা করে।"
      },
      "about": {
        "title": "ব্যবহারিক, শিক্ষার্থী-প্রথম দৃষ্টিভঙ্গি সহ বিশ্বস্ত নির্দেশিকা।",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "GCDA সাথে যোগাযোগ করুন।",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "আপনার পর্যায়ের সাথে মেলে এমন প্ল্যান বেছে নিন।",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "mr": {
    "common": {
      "bookConsultation": "मोफत समुपदेशन बुक करा",
      "exploreServices": "सेवा पहा",
      "learnMore": "GCDA बद्दल अधिक जाणून घ्या →",
      "contactUs": "संपर्क साधा",
      "chatWhatsapp": "WhatsApp वर चॅट करा",
      "getStarted": "सुरू करा",
      "viewPlans": "योजना पहा",
      "bookSession": "सत्र बुक करा"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "करिअर समुपदेशन जे गोंधळाचे स्पष्ट योजनेत रूपांतर करते.",
      "description": "१०वी नंतर शाखा निवड आणि १२वी नंतर पदवी नियोजनापासून GCDA संपूर्ण भारतात मदत करते.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "व्यावहारिक, विद्यार्थी-प्रथम दृष्टिकोनासह विश्वासार्ह मार्गदर्शन.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "GCDA शी संपर्क साधा.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "तुमच्या टप्प्याशी जुळणारी योजना निवडा.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "भारतात करिअर समुपदेशन | GCDA",
        "description": "१०वी नंतर शाखा निवड आणि १२वी नंतर पदवी नियोजनापासून GCDA संपूर्ण भारतात मदत करते."
      },
      "about": {
        "title": "व्यावहारिक, विद्यार्थी-प्रथम दृष्टिकोनासह विश्वासार्ह मार्गदर्शन.",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "GCDA शी संपर्क साधा.",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "तुमच्या टप्प्याशी जुळणारी योजना निवडा.",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "te": {
    "common": {
      "bookConsultation": "ఉచిత కన్సల్టేషన్ బుక్ చేయండి",
      "exploreServices": "సేవలను చూడండి",
      "learnMore": "GCDA గురించి మరింత →",
      "contactUs": "సంప్రదించండి",
      "chatWhatsapp": "WhatsApp లో చాట్",
      "getStarted": "ప్రారంభించండి",
      "viewPlans": "ప్లాన్‌లు చూడండి",
      "bookSession": "సెషన్ బుక్ చేయండి"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "గందరగోళాన్ని స్పష్టమైన ప్రణాళికగా మార్చే కెరీర్ కౌన్సెలింగ్.",
      "description": "10వ తర్వాత స్ట్రీమ్ ఎంపిక నుండి GCDA భారతదేశం అంతటా సహాయం చేస్తుంది.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "ఆచరణాత్మక విధానంతో నమ్మకమైన మార్గదర్శకత్వం.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "GCDAను సంప్రదించండి.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "మీ దశకు సరిపోయే ప్లాన్ ఎంచుకోండి.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "భారతదేశంలో కెరీర్ కౌన్సెలింగ్ | GCDA",
        "description": "10వ తర్వాత స్ట్రీమ్ ఎంపిక నుండి GCDA భారతదేశం అంతటా సహాయం చేస్తుంది."
      },
      "about": {
        "title": "ఆచరణాత్మక విధానంతో నమ్మకమైన మార్గదర్శకత్వం.",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "GCDAను సంప్రదించండి.",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "మీ దశకు సరిపోయే ప్లాన్ ఎంచుకోండి.",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "ta": {
    "common": {
      "bookConsultation": "இலவச ஆலோசனையை பதிவு செய்யுங்கள்",
      "exploreServices": "சேவைகளை ஆராயுங்கள்",
      "learnMore": "GCDA பற்றி மேலும் அறிக →",
      "contactUs": "தொடர்பு கொள்ளுங்கள்",
      "chatWhatsapp": "WhatsApp இல் அரட்டையடிக்கவும்",
      "getStarted": "தொடங்குங்கள்",
      "viewPlans": "திட்டங்களைப் பார்க்கவும்",
      "bookSession": "அமர்வை பதிவு செய்யுங்கள்"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "குழப்பத்தை தெளிவான திட்டமாக மாற்றும் தொழில் ஆலோசனை.",
      "description": "10ஆம் வகுப்புக்குப் பிறகு பிரிவு தேர்வு முதல் தொழில் வளர்ச்சி வரை GCDA உதவுகிறது.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "நடைமுறை, மாணவர் முதன்மை அணுகுமுறையுடன் நம்பகமான வழிகாட்டுதல்.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "ஆலோசனைக்கு GCDA ஐ தொடர்பு கொள்ளுங்கள்.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "உங்கள் நிலைக்கு ஏற்ற திட்டத்தை தேர்வு செய்யுங்கள்.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "இந்தியாவில் தொழில் ஆலோசனை | GCDA",
        "description": "10ஆம் வகுப்புக்குப் பிறகு பிரிவு தேர்வு முதல் தொழில் வளர்ச்சி வரை GCDA உதவுகிறது."
      },
      "about": {
        "title": "நடைமுறை, மாணவர் முதன்மை அணுகுமுறையுடன் நம்பகமான வழிகாட்டுதல்.",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "ஆலோசனைக்கு GCDA ஐ தொடர்பு கொள்ளுங்கள்.",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "உங்கள் நிலைக்கு ஏற்ற திட்டத்தை தேர்வு செய்யுங்கள்.",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "gu": {
    "common": {
      "bookConsultation": "મફત પરામર્શ બુક કરો",
      "exploreServices": "સેવાઓ જુઓ",
      "learnMore": "GCDA વિશે વધુ જાણો →",
      "contactUs": "સંપર્ક કરો",
      "chatWhatsapp": "WhatsApp પર ચેટ કરો",
      "getStarted": "શરૂ કરો",
      "viewPlans": "પ્લાન જુઓ",
      "bookSession": "સેશન બુક કરો"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "મૂંઝવણને સ્પષ્ટ યોજનામાં ફેરવતું કરિયર કાઉન્સેલિંગ.",
      "description": "10મા પછી સ્ટ્રીમ પસંદગી અને 12મા પછી ડિગ્રી આયોજનથી GCDA ભારતભર મદદ કરે છે.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "વ્યવહારુ, વિદ્યાર્થી-પ્રથમ અભિગમ સાથે વિશ્વસનીય માર્ગદર્શન.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "પરામર્શ માટે GCDA નો સંપર્ક કરો.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "તમારા તબક્કા સાથે મેળ ખાતી યોજના પસંદ કરો.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ભારતમાં કરિયર કાઉન્સેલિંગ | GCDA",
        "description": "10મા પછી સ્ટ્રીમ પસંદગી અને 12મા પછી ડિગ્રી આયોજનથી GCDA ભારતભર મદદ કરે છે."
      },
      "about": {
        "title": "વ્યવહારુ, વિદ્યાર્થી-પ્રથમ અભિગમ સાથે વિશ્વસનીય માર્ગદર્શન.",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "પરામર્શ માટે GCDA નો સંપર્ક કરો.",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "તમારા તબક્કા સાથે મેળ ખાતી યોજના પસંદ કરો.",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "kn": {
    "common": {
      "bookConsultation": "ಉಚಿತ ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",
      "exploreServices": "ಸೇವೆಗಳನ್ನು ನೋಡಿ",
      "learnMore": "GCDA ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ →",
      "contactUs": "ಸಂಪರ್ಕಿಸಿ",
      "chatWhatsapp": "WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
      "getStarted": "ಪ್ರಾರಂಭಿಸಿ",
      "viewPlans": "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
      "bookSession": "ಸೆಷನ್ ಬುಕ್ ಮಾಡಿ"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "ಗೊಂದಲವನ್ನು ಸ್ಪಷ್ಟ ಯೋಜನೆಯಾಗಿ ಪರಿವರ್ತಿಸುವ ವೃತ್ತಿ ಸಮಾಲೋಚನೆ.",
      "description": "10ನೇ ನಂತರ ಸ್ಟ್ರೀಮ್ ಆಯ್ಕೆ ಮತ್ತು 12ನೇ ನಂತರ ಪದವಿ ಯೋಜನೆಯಿಂದ GCDA ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "ಪ್ರಾಯೋಗಿಕ, ವಿದ್ಯಾರ್ಥಿ-ಮೊದಲ ವಿಧಾನದೊಂದಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗದರ್ಶನ.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "ಸಮಾಲೋಚನೆಗಾಗಿ GCDA ಸಂಪರ್ಕಿಸಿ.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "ನಿಮ್ಮ ಹಂತಕ್ಕೆ ಹೊಂದುವ ಯೋಜನೆಯನ್ನು ಆರಿಸಿ.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ಭಾರತದಲ್ಲಿ ವೃತ್ತಿ ಸಮಾಲೋಚನೆ | GCDA",
        "description": "10ನೇ ನಂತರ ಸ್ಟ್ರೀಮ್ ಆಯ್ಕೆ ಮತ್ತು 12ನೇ ನಂತರ ಪದವಿ ಯೋಜನೆಯಿಂದ GCDA ಸಹಾಯ ಮಾಡುತ್ತದೆ."
      },
      "about": {
        "title": "ಪ್ರಾಯೋಗಿಕ, ವಿದ್ಯಾರ್ಥಿ-ಮೊದಲ ವಿಧಾನದೊಂದಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗದರ್ಶನ.",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "ಸಮಾಲೋಚನೆಗಾಗಿ GCDA ಸಂಪರ್ಕಿಸಿ.",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "ನಿಮ್ಮ ಹಂತಕ್ಕೆ ಹೊಂದುವ ಯೋಜನೆಯನ್ನು ಆರಿಸಿ.",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "ml": {
    "common": {
      "bookConsultation": "സൗജന്യ കൂടിയാലോചന ബുക്ക് ചെയ്യുക",
      "exploreServices": "സേവനങ്ങൾ കാണുക",
      "learnMore": "GCDAയെക്കുറിച്ച് കൂടുതൽ അറിയുക →",
      "contactUs": "ബന്ധപ്പെടുക",
      "chatWhatsapp": "WhatsApp-ൽ ചാറ്റ് ചെയ്യുക",
      "getStarted": "ആരംഭിക്കുക",
      "viewPlans": "പ്ലാനുകൾ കാണുക",
      "bookSession": "സെഷൻ ബുക്ക് ചെയ്യുക"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "ആശയക്കുഴപ്പത്തെ വ്യക്തമായ പദ്ധതിയാക്കി മാറ്റുന്ന കരിയർ കൗൺസിലിംഗ്.",
      "description": "10-ന് ശേഷം സ്ട്രീം തിരഞ്ഞെടുപ്പ് മുതൽ GCDA ഇന്ത്യയിലുടനീളം സഹായിക്കുന്നു.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "പ്രായോഗിക, വിദ്യാർത്ഥി-ആദ്യ സമീപനത്തോടെ വിശ്വസനീയ മാർഗനിർദേശം.",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "കൗൺസിലിംഗിനായി GCDAയെ ബന്ധപ്പെടുക.",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "നിങ്ങളുടെ ഘട്ടത്തിന് അനുയോജ്യമായ പ്ലാൻ തിരഞ്ഞെടുക്കുക.",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ഇന്ത്യയിൽ കരിയർ കൗൺസിലിംഗ് | GCDA",
        "description": "10-ന് ശേഷം സ്ട്രീം തിരഞ്ഞെടുപ്പ് മുതൽ GCDA ഇന്ത്യയിലുടനീളം സഹായിക്കുന്നു."
      },
      "about": {
        "title": "പ്രായോഗിക, വിദ്യാർത്ഥി-ആദ്യ സമീപനത്തോടെ വിശ്വസനീയ മാർഗനിർദേശം.",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "കൗൺസിലിംഗിനായി GCDAയെ ബന്ധപ്പെടുക.",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "നിങ്ങളുടെ ഘട്ടത്തിന് അനുയോജ്യമായ പ്ലാൻ തിരഞ്ഞെടുക്കുക.",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "pa": {
    "common": {
      "bookConsultation": "ਮੁਫ਼ਤ ਸਲਾਹ ਬੁੱਕ ਕਰੋ",
      "exploreServices": "ਸੇਵਾਵਾਂ ਵੇਖੋ",
      "learnMore": "GCDA ਬਾਰੇ ਹੋਰ ਜਾਣੋ →",
      "contactUs": "ਸੰਪਰਕ ਕਰੋ",
      "chatWhatsapp": "WhatsApp ਤੇ ਚੈਟ ਕਰੋ",
      "getStarted": "ਸ਼ੁਰੂ ਕਰੋ",
      "viewPlans": "ਯੋਜਨਾਵਾਂ ਵੇਖੋ",
      "bookSession": "ਸੈਸ਼ਨ ਬੁੱਕ ਕਰੋ"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "ਉਲਝਣ ਨੂੰ ਸਪੱਸ਼ਟ ਯੋਜਨਾ ਵਿੱਚ ਬਦਲਣ ਵਾਲੀ ਕਰੀਅਰ ਕਾਉਂਸਲਿੰਗ।",
      "description": "10ਵੀਂ ਤੋਂ ਬਾਅਦ ਸਟ੍ਰੀਮ ਚੋਣ ਅਤੇ 12ਵੀਂ ਤੋਂ ਬਾਅਦ ਡਿਗਰੀ ਯੋਜਨਾ ਤੋਂ GCDA ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "ਵਿਹਾਰਕ, ਵਿਦਿਆਰਥੀ-ਪਹਿਲਾਂ ਪਹੁੰਚ ਨਾਲ ਭਰੋਸੇਯੋਗ ਮਾਰਗਦਰਸ਼ਨ।",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "ਸਲਾਹ ਲਈ GCDA ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "ਆਪਣੇ ਪੜਾਅ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਯੋਜਨਾ ਚੁਣੋ।",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ਭਾਰਤ ਵਿੱਚ ਕਰੀਅਰ ਕਾਉਂਸਲਿੰਗ | GCDA",
        "description": "10ਵੀਂ ਤੋਂ ਬਾਅਦ ਸਟ੍ਰੀਮ ਚੋਣ ਅਤੇ 12ਵੀਂ ਤੋਂ ਬਾਅਦ ਡਿਗਰੀ ਯੋਜਨਾ ਤੋਂ GCDA ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।"
      },
      "about": {
        "title": "ਵਿਹਾਰਕ, ਵਿਦਿਆਰਥੀ-ਪਹਿਲਾਂ ਪਹੁੰਚ ਨਾਲ ਭਰੋਸੇਯੋਗ ਮਾਰਗਦਰਸ਼ਨ।",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "ਸਲਾਹ ਲਈ GCDA ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "ਆਪਣੇ ਪੜਾਅ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਯੋਜਨਾ ਚੁਣੋ।",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "or": {
    "common": {
      "bookConsultation": "ମାଗଣା ପରାମର୍ଶ ବୁକ୍ କରନ୍ତୁ",
      "exploreServices": "ସେବା ଦେଖନ୍ତୁ",
      "learnMore": "GCDA ବିଷୟରେ ଅଧିକ ଜାଣନ୍ତୁ →",
      "contactUs": "ଯୋଗାଯୋଗ କରନ୍ତୁ",
      "chatWhatsapp": "WhatsApp ରେ ଚାଟ୍ କରନ୍ତୁ",
      "getStarted": "ଆରମ୍ଭ କରନ୍ତୁ",
      "viewPlans": "ଯୋଜନା ଦେଖନ୍ତୁ",
      "bookSession": "ସେସନ୍ ବୁକ୍ କରନ୍ତୁ"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "ଦ୍ୱନ୍ଦ୍ୱକୁ ସ୍ପଷ୍ଟ ଯୋଜନାରେ ପରିଣତ କରୁଥିବା କ୍ୟାରିଅର କାଉନସେଲିଂ।",
      "description": "୧୦ମ ପରେ ଷ୍ଟ୍ରିମ୍ ଚୟନ ଏବଂ ୧୨ମ ପରେ ଡିଗ୍ରୀ ଯୋଜନାରୁ GCDA ସହାୟତା କରେ।",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "ବ୍ୟବହାରିକ, ଛାତ୍ର-ପ୍ରଥମ ଦୃଷ୍ଟିକୋଣ ସହ ବିଶ୍ୱସ୍ତ ମାର୍ଗଦର୍ଶନ।",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "ପରାମର୍ଶ ପାଇଁ GCDA ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "ଆପଣଙ୍କ ପର୍ଯ୍ୟାୟ ସହ ମେଳ ଖାଉଥିବା ଯୋଜନା ବାଛନ୍ତୁ।",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ଭାରତରେ କ୍ୟାରିଅର କାଉନସେଲିଂ | GCDA",
        "description": "୧୦ମ ପରେ ଷ୍ଟ୍ରିମ୍ ଚୟନ ଏବଂ ୧୨ମ ପରେ ଡିଗ୍ରୀ ଯୋଜନାରୁ GCDA ସହାୟତା କରେ।"
      },
      "about": {
        "title": "ବ୍ୟବହାରିକ, ଛାତ୍ର-ପ୍ରଥମ ଦୃଷ୍ଟିକୋଣ ସହ ବିଶ୍ୱସ୍ତ ମାର୍ଗଦର୍ଶନ।",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "ପରାମର୍ଶ ପାଇଁ GCDA ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "ଆପଣଙ୍କ ପର୍ଯ୍ୟାୟ ସହ ମେଳ ଖାଉଥିବା ଯୋଜନା ବାଛନ୍ତୁ।",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "ur": {
    "common": {
      "bookConsultation": "مفت مشاورت بک کریں",
      "exploreServices": "خدمات دیکھیں",
      "learnMore": "GCDA کے بارے میں مزید جانیں →",
      "contactUs": "رابطہ کریں",
      "chatWhatsapp": "WhatsApp پر چیٹ کریں",
      "getStarted": "شروع کریں",
      "viewPlans": "منصوبے دیکھیں",
      "bookSession": "سیشن بک کریں"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "الجھن کو واضح منصوبے میں بدلنے والی کیریئر کونسلنگ۔",
      "description": "10ویں کے بعد اسٹریم کے انتخاب اور 12ویں کے بعد ڈگری کی منصوبہ بندی سے GCDA پورے بھارت میں مدد کرتا ہے۔",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "عملی، طالب علم-پہلے نقطہ نظر کے ساتھ قابل اعتماد رہنمائی۔",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "مشاورت کے لیے GCDA سے رابطہ کریں۔",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "اپنے مرحلے سے ملنے والا منصوبہ منتخب کریں۔",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "بھارت میں کیریئر کونسلنگ | GCDA",
        "description": "10ویں کے بعد اسٹریم کے انتخاب اور 12ویں کے بعد ڈگری کی منصوبہ بندی سے GCDA پورے بھارت میں مدد کرتا ہے۔"
      },
      "about": {
        "title": "عملی، طالب علم-پہلے نقطہ نظر کے ساتھ قابل اعتماد رہنمائی۔",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "مشاورت کے لیے GCDA سے رابطہ کریں۔",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "اپنے مرحلے سے ملنے والا منصوبہ منتخب کریں۔",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "as": {
    "common": {
      "bookConsultation": "বিনামূলীয়া পৰামৰ্শ বুক কৰক",
      "exploreServices": "সেৱা চাওক",
      "learnMore": "GCDA ৰ বিষয়ে অধিক জানক →",
      "contactUs": "যোগাযোগ কৰক",
      "chatWhatsapp": "WhatsApp ত চাট কৰক",
      "getStarted": "আৰম্ভ কৰক",
      "viewPlans": "পৰিকল্পনা চাওক",
      "bookSession": "চেছন বুক কৰক"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "বিভ্ৰান্তিক স্পষ্ট পৰিকল্পনালৈ ৰূপান্তৰ কৰা কেৰিয়াৰ কাউন্সেলিং।",
      "description": "১০মৰ পিছত ষ্ট্ৰিম নিৰ্বাচন আৰু ১২মৰ পিছত ডিগ্ৰী পৰিকল্পনাৰ পৰা GCDA ভাৰতজুৰি সহায় কৰে।",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "ব্যৱহাৰিক, ছাত্ৰ-প্ৰথম দৃষ্টিভংগীৰে বিশ্বাসযোগ্য নিৰ্দেশনা।",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "পৰামৰ্শৰ বাবে GCDA ৰ সৈতে যোগাযোগ কৰক।",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "আপোনাৰ পৰ্যায়ৰ সৈতে মিল থকা পৰিকল্পনা বাছক।",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "ভাৰতত কেৰিয়াৰ কাউন্সেলিং | GCDA",
        "description": "১০মৰ পিছত ষ্ট্ৰিম নিৰ্বাচন আৰু ১২মৰ পিছত ডিগ্ৰী পৰিকল্পনাৰ পৰা GCDA ভাৰতজুৰি সহায় কৰে।"
      },
      "about": {
        "title": "ব্যৱহাৰিক, ছাত্ৰ-প্ৰথম দৃষ্টিভংগীৰে বিশ্বাসযোগ্য নিৰ্দেশনা।",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "পৰামৰ্শৰ বাবে GCDA ৰ সৈতে যোগাযোগ কৰক।",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "আপোনাৰ পৰ্যায়ৰ সৈতে মিল থকা পৰিকল্পনা বাছক।",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "ks": {
    "common": {
      "bookConsultation": "Book Consultation",
      "exploreServices": "Explore Services",
      "learnMore": "Learn more →",
      "contactUs": "Contact Us",
      "chatWhatsapp": "Chat on WhatsApp",
      "getStarted": "Get Started",
      "viewPlans": "View Plans",
      "bookSession": "Book a Session"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "Career counselling - ks",
      "description": "GCDA helps students across India - ks version.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "Trusted guidance - ks",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "Contact GCDA - ks",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "Choose plan - ks",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "Career Counselling - ks | GCDA",
        "description": "GCDA helps students across India - ks version."
      },
      "about": {
        "title": "Trusted guidance - ks",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "Contact GCDA - ks",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "Choose plan - ks",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "kok": {
    "common": {
      "bookConsultation": "Book Consultation",
      "exploreServices": "Explore Services",
      "learnMore": "Learn more →",
      "contactUs": "Contact Us",
      "chatWhatsapp": "Chat on WhatsApp",
      "getStarted": "Get Started",
      "viewPlans": "View Plans",
      "bookSession": "Book a Session"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "Career counselling - kok",
      "description": "GCDA helps students across India - kok version.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "Trusted guidance - kok",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "Contact GCDA - kok",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "Choose plan - kok",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "Career Counselling - kok | GCDA",
        "description": "GCDA helps students across India - kok version."
      },
      "about": {
        "title": "Trusted guidance - kok",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "Contact GCDA - kok",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "Choose plan - kok",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "mni": {
    "common": {
      "bookConsultation": "Book Consultation",
      "exploreServices": "Explore Services",
      "learnMore": "Learn more →",
      "contactUs": "Contact Us",
      "chatWhatsapp": "Chat on WhatsApp",
      "getStarted": "Get Started",
      "viewPlans": "View Plans",
      "bookSession": "Book a Session"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "Career counselling - mni",
      "description": "GCDA helps students across India - mni version.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "Trusted guidance - mni",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "Contact GCDA - mni",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "Choose plan - mni",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "Career Counselling - mni | GCDA",
        "description": "GCDA helps students across India - mni version."
      },
      "about": {
        "title": "Trusted guidance - mni",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "Contact GCDA - mni",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "Choose plan - mni",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  },
  "sat": {
    "common": {
      "bookConsultation": "Book Consultation",
      "exploreServices": "Explore Services",
      "learnMore": "Learn more →",
      "contactUs": "Contact Us",
      "chatWhatsapp": "Chat on WhatsApp",
      "getStarted": "Get Started",
      "viewPlans": "View Plans",
      "bookSession": "Book a Session"
    },
    "home": {
      "eyebrow": "Empowering careers since 2013",
      "title": "Career counselling - sat",
      "description": "GCDA helps students across India - sat version.",
      "heroProof": [
        "98% satisfied clients",
        "50K+ career sessions",
        "Online + in-person"
      ],
      "aboutEyebrow": "About GCDA",
      "aboutTitle": "Personalised career guidance for every stage of growth",
      "aboutDesc": "We believe your career path should reflect your strengths, interests, and ambitions — not just pressure, trends, or guesswork.",
      "whatWeDoEyebrow": "What we do",
      "whatWeDoTitle": "Core services designed to bring clarity and direction",
      "whatWeDoDesc": "Our service mix is built around assessment-led counselling, practical planning, and outcome-focused support.",
      "whoWeHelpEyebrow": "Who we help",
      "whoWeHelpTitle": "Support for students, parents, graduates, and professionals",
      "whoWeHelpDesc": "Whether you are choosing a stream after 10th, selecting a degree after 12th, planning an MBA, or preparing for a career move, GCDA helps you decide with confidence.",
      "processEyebrow": "Our process",
      "processTitle": "A simple 3-step journey",
      "processDesc": "We combine expert counselling with practical next-step planning so clients leave with clarity, not confusion.",
      "testimonialsEyebrow": "Testimonials",
      "testimonialsTitle": "What our clients say",
      "testimonialsDesc": "Families, students, and professionals across India trust GCDA for clear and supportive guidance.",
      "faqEyebrow": "FAQs",
      "faqTitle": "Common questions about counselling and plans",
      "faqDesc": "A few answers to help you understand how GCDA works before you book your consultation.",
      "ctaTitle": "Ready to shape your career with clarity?",
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person."
    },
    "about": {
      "eyebrow": "About GCDA",
      "title": "Trusted guidance - sat",
      "desc": "GCDA – Global Career Development Association – has been helping Indian students, parents, and working professionals make confident education and career decisions since 2013.",
      "missionEyebrow": "Our mission",
      "missionTitle": "Helping every learner and professional move ahead with clarity",
      "missionDesc": "A good career decision is not just about trends or marks. It should align with aptitude, interest, opportunities, and long-term fulfilment.",
      "journeyEyebrow": "Our journey",
      "journeyTitle": "A growing legacy of career support",
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem."
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "Contact GCDA - sat",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation."
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "Choose plan - sat",
      "desc": "For students and professionals, our plans help narrow options and identify the right path."
    },
    "cities": {
      "eyebrow": "All cities",
      "title": "Career counselling across 346 cities in India",
      "desc": "Find GCDA career counselling services in your city."
    },
    "blog": {
      "eyebrow": "Career guidance blog",
      "title": "Practical career advice for students and professionals",
      "desc": "In-depth, India-specific career guidance articles reviewed by GCDA counsellors."
    },
    "careerCounselling": {
      "eyebrow": "Our services",
      "title": "Career counselling that turns uncertainty into a clear roadmap.",
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth."
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors."
    },
    "meta": {
      "home": {
        "title": "Career Counselling - sat | GCDA",
        "description": "GCDA helps students across India - sat version."
      },
      "about": {
        "title": "Trusted guidance - sat",
        "description": "Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals."
      },
      "contact": {
        "title": "Contact GCDA - sat",
        "description": "Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office or reach us by phone, email, or WhatsApp."
      },
      "plan": {
        "title": "Choose plan - sat",
        "description": "Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals."
      },
      "cities": {
        "title": "Career Counselling in 346 Cities Across India | GCDA",
        "description": "Find GCDA career counselling in your city – personal counselling, career assessment, stream and degree selection across India."
      },
      "blog": {
        "title": "Career Guidance Blog – Practical Advice for Students & Professionals | GCDA",
        "description": "Read GCDA blog for stream selection, degree guidance, career after 12th, MBA, and professional growth advice."
      },
      "careerCounselling": {
        "title": "Career Counselling Services – Personal, Assessment, Stream, Degree | GCDA",
        "description": "GCDA offers 6 core career counselling services."
      },
      "careerCertification": {
        "title": "Career Counselling Certification Course | Become a Certified Counsellor | GCDA",
        "description": "Become a certified career counsellor with GCDA hybrid certification."
      }
    }
  }
}
;

export function t(lang, path) {
  const parts = path.split('.');
  let cur = TRANSLATIONS[lang] || TRANSLATIONS.en;
  for (const p of parts) {
    if (!cur || !cur[p]) {
      cur = TRANSLATIONS.en;
      for (const fp of parts) {
        if (!cur || !cur[fp]) return path;
        cur = cur[fp];
      }
      return cur;
    }
    cur = cur[p];
  }
  return cur;
}

export function getMetaForLang(lang, pageKey) {
  const langData = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return langData.meta?.[pageKey] || TRANSLATIONS.en.meta[pageKey];
}

export { hreflang, hreflangAlternates, SITE_URL };
