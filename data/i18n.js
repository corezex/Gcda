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
      "ctaDesc": "Connect with GCDA experts for personalised counselling, assessments, and practical next-step guidance — online or in-person.",
      "needHelpTitle": "क्या आपको सीधी मदद चाहिए?",
      "needHelpDesc": "अपनी आवश्यकता पर चर्चा करने, योजनाओं की तुलना करने या सत्र बुक करने के लिए GCDA टीम से बात करें।",
      "office": "कार्यालय"
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
      "journeyDesc": "Since 2013, GCDA has evolved from counselling support into a broader guidance ecosystem.",
      "whoWeServeEyebrow": "हम किसकी सेवा करते हैं",
      "whoWeServeTitle": "वास्तविक छात्र और करियर निर्णयों के लिए निर्मित",
      "whoWeServeDesc": "हमारी काउंसलिंग सबसे मूल्यवान होती है जब विकल्प उच्च-दांव वाले होते हैं।",
      "credentialsEyebrow": "हमारी साख",
      "credentialsTitle": "भारत भर में हमारा मार्गदर्शन क्यों भरोसेमंद है",
      "credentialsDesc": "हमारी विधियां, सामग्री और सिफारिशें स्थापित ढांचे, मान्य मूल्यांकन और एक दशक के क्षेत्र अनुभव पर आधारित हैं।",
      "standardisedTitle": "मानकीकृत मूल्यांकन उपकरण",
      "standardisedDesc": "हम मान्य उपकरणों का उपयोग करते हैं — RIASEC-शैली रुचि सूची, बिग-फाइव व्यक्तित्व लक्षण, संख्यात्मक/मौखिक/अमूर्त योग्यता बैटरी।",
      "certifiedTitle": "प्रमाणित परामर्शदाता नेटवर्क",
      "certifiedDesc": "हमारा 5,000+ परामर्शदाता नेटवर्क GCDA ढांचे में प्रशिक्षित है और वरिष्ठ मेंटर्स द्वारा पर्यवेक्षित है।",
      "updatedTitle": "2026 डेटा के साथ अपडेटेड",
      "updatedDesc": "वेतन बैंड, प्रवेश परीक्षा कटऑफ, कॉलेज प्रवेश मानदंड हर 6 महीने में रिफ्रेश किए जाते हैं।",
      "editorialEyebrow": "संपादकीय मानक",
      "editorialTitle": "हम अपनी सामग्री को ईमानदार और उपयोगी कैसे रखते हैं",
      "editorialDesc": "हमारे ब्लॉग पोस्ट, सेवा विवरण और शहर पेज सख्त संपादकीय मानक का पालन करते हैं।",
      "checklistTitle": "संपादकीय चेकलिस्ट",
      "visitOffice": "हमारे मुंबई कार्यालय में आएं",
      "visitOfficeDesc": "परामर्श योजनाओं, संस्थागत कार्यशालाओं पर चर्चा के लिए फोन, ईमेल या WhatsApp द्वारा हमसे संपर्क करें।"
    },
    "contact": {
      "eyebrow": "Contact us",
      "title": "परामर्श, योजनाओं के लिए GCDA से संपर्क करें।",
      "desc": "Reach out for student counselling, professional guidance, institution workshops, or plan-related questions.",
      "formEyebrow": "Send us a message",
      "formTitle": "Tell us what you need help with",
      "formDesc": "Use the form below to send an enquiry by email, or jump directly to WhatsApp for a faster conversation.",
      "office": "कार्यालय",
      "phone": "फोन",
      "email": "ईमेल",
      "businessHours": "व्यावसायिक घंटे",
      "quickContact": "त्वरित संपर्क",
      "locationTitle": "हमारे मुंबई कार्यालय में आएं"
    },
    "plan": {
      "eyebrow": "Career counselling plans",
      "title": "वह योजना चुनें जो आपके चरण से मेल खाती हो।",
      "desc": "For students and professionals, our plans help narrow options and identify the right path.",
      "pricingTitle": "सरल, पारदर्शी मूल्य निर्धारण",
      "pricingDesc": "योजना के नाम, मूल्य निर्धारण और शामिल सुविधाओं को वर्तमान GCDA योजना संरचना के साथ संरेखित रखा गया है।",
      "whichTitle": "आपको कौन सी योजना चुननी चाहिए?",
      "whichDesc": "प्रत्येक योजना पिछली योजना पर आधारित होती है, इसलिए आप अपनी वर्तमान आवश्यकता के आधार पर चुन सकते हैं।",
      "faqTitle": "योजनाओं के बारे में प्रश्न",
      "faqDesc": "अपनी परामर्श पैकेज बुक करने या अपग्रेड करने से पहले कुछ व्यावहारिक उत्तर।",
      "answerBlock": "GCDA 3 करियर काउंसलिंग योजनाएं प्रदान करता है: स्ट्रीम सेलेक्टर (2999 रुपये) स्कूली छात्रों के लिए, डिग्री सेलेक्टर (3499 रुपये) 12वीं के बाद डिग्री चुनने वाले छात्रों के लिए, और वर्किंग प्रोफेशनल्स (3999 रुपये) करियर ट्रांज़िशन के लिए। सभी योजनाओं में मूल्यांकन, मेंटर सत्र और व्यक्तिगत रिपोर्ट शामिल है।",
      "stillUnsureTitle": "अभी भी सुनिश्चित नहीं हैं कि कौन सी योजना आपके लिए सबसे अच्छी है?",
      "stillUnsureDesc": "GCDA से बात करें और बुक करने से पहले हम आपको सही परामर्श मार्ग चुनने में मदद करेंगे।",
      "streamSelector": "स्ट्रीम सेलेक्टर",
      "streamSelectorDesc": "साइंस, कॉमर्स, आर्ट्स और भविष्य-फिट शैक्षणिक दिशा के बीच निर्णय लेने वाले स्कूली छात्रों के लिए सर्वश्रेष्ठ।",
      "degreeSelector": "डिग्री सेलेक्टर",
      "degreeSelectorDesc": "जब छात्रों को स्कूल के बाद कोर्स, डिग्री और कॉलेज-स्तरीय स्पष्टता की आवश्यकता होती है तो आदर्श।",
      "workingProf": "कार्यरत पेशेवर",
      "workingProfDesc": "उन नियोजित व्यक्तियों के लिए डिज़ाइन किया गया है जो बेहतर पोजीशनिंग, ट्रांज़िशन और विकास योजना चाहते हैं।"
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
      "desc": "GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth.",
      "whatWeOfferTitle": "करियर काउंसलिंग सेवाएं",
      "whatWeOfferDesc": "किसी भी सेवा पर क्लिक करें और जानें कि इसमें क्या शामिल है, यह किसके लिए है और यह कैसे काम करता है।",
      "exploreCityTitle": "अपने शहर में GCDA करियर काउंसलिंग खोजें",
      "exploreCityDesc": "हम 346 शहरों में 7 मुख्य सेवाएं प्रदान करते हैं। अपने शहर में काउंसलर खोजने के लिए किसी भी संयोजन पर क्लिक करें।",
      "workshopTitle": "हम 4 प्रकार के सेमिनार और कार्यशालाएं प्रदान करते हैं",
      "workshopDesc": "हमारी कार्यशालाओं और सेमिनार सेवा के हिस्से के रूप में, GCDA 4 समर्पित ट्रैक चलाता है।",
      "processTitle": "सेवाओं में एक ही स्पष्ट परामर्श ढांचा",
      "processDesc": "चाहे आप स्ट्रीम चुन रहे हों या पेशेवर ट्रांज़िशन की योजना बना रहे हों, हमारी प्रक्रिया केंद्रित रहती है।",
      "faqMainTitle": "GCDA सेवाओं के बारे में सामान्य प्रश्न",
      "needHelpTitle": "सही सेवा चुनने में मदद चाहिए?",
      "needHelpDesc": "GCDA को बताएं कि आप कहां अटके हैं, और हम आपको सबसे उपयुक्त सेवा या योजना के लिए मार्गदर्शन करेंगे।",
      "viewAllCities": "सभी 346 शहर देखें →",
      "seeSeminars": "अपने शहर में सेमिनार देखें →"
    },
    "careerCertification": {
      "eyebrow": "Become a counsellor",
      "title": "Career Counselling Certification – Hybrid Online + In-Person",
      "desc": "A comprehensive offline + online certification programme for aspiring and practising career counsellors.",
      "heroEyebrow": "प्रमाणन कार्यक्रम",
      "heroTitle": "प्रमाणित करियर काउंसलर बनने की अपनी यात्रा शुरू करें।",
      "heroDesc": "एक व्यापक प्रमाणन कार्यक्रम जो आपको ज्ञान, व्यावहारिक अभ्यास और आत्मविश्वास से लैस करने के लिए डिज़ाइन किया गया है ताकि छात्रों और कामकाजी पेशेवरों को सूचित, संतोषजनक करियर निर्णयों की ओर मार्गदर्शन किया जा सके।",
      "answerBlock": "GCDA करियर काउंसलिंग प्रमाणन आकांक्षी और अभ्यासरत काउंसलर्स के लिए एक व्यापक कार्यक्रम है। यह करियर काउंसलिंग सिद्धांतों, मूल्यांकन उपकरणों, कोचिंग तकनीकों और परामर्श अभ्यास चलाने के व्यवसाय को कवर करता है — हाइब्रिड (ऑनलाइन + इन-पर्सन) प्रारूप में।",
      "whyTitle": "प्रमाणित क्यों बनें",
      "whyDesc": "हमारा व्यापक कार्यक्रम आपको प्रमाणित करियर काउंसलर बनने के लिए आवश्यक ज्ञान और कौशल से लैस करने के लिए डिज़ाइन किया गया है।",
      "roleTitle": "करियर काउंसलर क्या करता है?",
      "roleDesc": "करियर काउंसलर के रूप में, आप छात्रों और कामकाजी पेशेवरों को उनके करियर यात्रा के माध्यम से मार्गदर्शन करने में महत्वपूर्ण भूमिका निभाते हैं।",
      "whoTitle": "यह प्रमाणन किसके लिए है?",
      "whoDesc": "उन व्यक्तियों के लिए आदर्श जो दूसरों को उनके करियर पथ में मेंटरिंग और मार्गदर्शन करने के बारे में भावुक हैं।",
      "transformTitle": "अपने करियर को बदलें",
      "transformDesc": "भारत में प्रमाणित करियर काउंसलर बनें",
      "transformBody": "करियर काउंसलिंग सिद्धांतों, मूल्यांकन उपकरणों और प्रभावी कोचिंग तकनीकों की व्यापक समझ से लैस करने के लिए डिज़ाइन किया गया एक व्यापक प्रशिक्षण कार्यक्रम खोजें।",
      "faqSectionTitle": "प्रमाणन के बारे में अक्सर पूछे जाने वाले प्रश्न",
      "ctaTitle": "प्रमाणित करियर काउंसलर बनने के लिए तैयार हैं?",
      "ctaDesc": "अगले बैच, फीस और प्रमाणन आपके शेड्यूल में कैसे फिट हो सकता है, इसके बारे में जानने के लिए GCDA टीम से बात करें।"
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
    },
    "valuePoints": [
      {
        "title": "व्यक्तिगत मार्गदर्शन",
        "description": "हर छात्र, अभिभावक और पेशेवर को उनके लक्ष्यों, योग्यता और जीवन चरण के अनुसार सलाह मिलती है।"
      },
      {
        "title": "कार्यात्मक योजना",
        "description": "हम अनिश्चितता को स्ट्रीम चयन, डिग्री योजना, कौशल विकास और करियर प्रगति को कवर करने वाले चरण-दर-चरण रोडमैप में बदल देते हैं।"
      },
      {
        "title": "विश्वसनीय विशेषज्ञता",
        "description": "हमारे परामर्शदाता अनुभव, संरचित मूल्यांकन और मेंटरिंग सहायता को जोड़ते हैं ताकि ग्राहक आत्मविश्वास के साथ आगे बढ़ सकें।"
      }
    ],
    "audience": [
      "8वीं, 10वीं या 12वीं के बाद सही स्ट्रीम चुनने वाले स्कूली छात्र",
      "डिग्री, कॉलेज या पहली नौकरी के रास्ते तय करने वाले स्नातक",
      "ट्रांज़िशन, प्रमोशन या अपस्किलिंग की योजना बना रहे कार्यरत पेशेवर",
      "अपने बच्चे के शैक्षणिक भविष्य के लिए भरोसेमंद मार्गदर्शन चाहने वाले अभिभावक"
    ],
    "journeySteps": [
      {
        "title": "खोजें",
        "description": "संरचित बातचीत और मूल्यांकन के माध्यम से ताकत, रुचियों, व्यक्तित्व और आकांक्षाओं को समझें।"
      },
      {
        "title": "निर्णय लें",
        "description": "विशेषज्ञ तर्क और व्यावहारिक संदर्भ के साथ स्ट्रीम, डिग्री, संस्थानों या करियर चालों का मूल्यांकन करें।"
      },
      {
        "title": "विकास करें",
        "description": "मील के पत्थर, तैयारी मार्गदर्शन और फॉलो-अप समर्थन के साथ स्पष्ट रोडमैप बनाएं।"
      }
    ],
    "statsHome": [
      {
        "value": "50k+",
        "label": "परामर्श",
        "note": "सफल करियर परामर्श"
      },
      {
        "value": "5k+",
        "label": "विशेषज्ञ परामर्शदाता",
        "note": "प्रमाणित पेशेवर"
      },
      {
        "value": "10+",
        "label": "उत्कृष्टता के वर्ष",
        "note": "हजारों द्वारा भरोसेमंद"
      },
      {
        "value": "98%",
        "label": "संतुष्टि",
        "note": "छात्र और परिवार GCDA की सलाह देते हैं"
      }
    ],
    "siteFaqs": [
      {
        "q": "परामर्श सत्र कितना समय लेता है?",
        "a": "मूल्यांकन और चर्चा सहित एक पूर्ण परामर्श सत्र आमतौर पर योजना और आवश्यकता के आधार पर लगभग 60 से 90 मिनट लेता है।"
      },
      {
        "q": "क्या मैं बाद में अपनी योजना अपग्रेड कर सकता हूँ?",
        "a": "हाँ। आप बाद में उच्च योजना में जा सकते हैं, और वर्तमान योजना शुल्क को अपग्रेड के लिए समायोजित किया जा सकता है।"
      },
      {
        "q": "क्या परामर्शदाता योग्य हैं?",
        "a": "हाँ। GCDA करियर मार्गदर्शन, मेंटरिंग और मूल्यांकन-आधारित परामर्श में अनुभवी प्रमाणित पेशेवरों के साथ काम करता है।"
      },
      {
        "q": "क्या आप ऑनलाइन परामर्श प्रदान करते हैं?",
        "a": "हाँ। सेवा और ग्राहक की पसंद के आधार पर सत्र ऑनलाइन और आमने-सामने दोनों तरह से दिए जा सकते हैं।"
      }
    ],
    "aboutTimeline": [
      {
        "year": "2013",
        "title": "एक मिशन के साथ शुरुआत",
        "description": "GCDA ने छात्रों और परिवारों के लिए व्यावहारिक, भरोसेमंद करियर परामर्श पर ध्यान केंद्रित करने के साथ शुरुआत की।"
      },
      {
        "year": "2018",
        "title": "सेवा रेंज का विस्तार",
        "description": "मूल्यांकन-आधारित परामर्श, कार्यशालाएं और उच्च शिक्षा योजना मुख्य पेशकश बन गईं।"
      },
      {
        "year": "आज",
        "title": "पैमाने पर विश्वसनीय मार्गदर्शन",
        "description": "GCDA संरचित करियर निर्णय लेने के माध्यम से छात्रों, माता-पिता, स्नातकों और पेशेवरों का समर्थन करता है।"
      }
    ],
    "serviceDetails": {
      "personal-counselling": {
        "title": "व्यक्तिगत परामर्श",
        "shortDescription": "व्यक्तिगत छात्र या पेशेवर के लिए डिज़ाइन किए गए वन-ऑन-वन मार्गदर्शन सत्र — मूल्यांकन-आधारित, मेंटर-संचालित और वास्तविक परिणामों के लिए संरचित।",
        "heroDescription": "आत्मविश्वास बनाएं, स्पष्टता प्राप्त करें, और अपने लक्ष्यों के अनुरूप मेंटर-नेतृत्व वाली परामर्श प्रक्रिया के साथ आगे बढ़ें।",
        "longDescription": "GCDA में व्यक्तिगत परामर्श एक प्रमाणित करियर काउंसलर के साथ एक निजी वन-ऑन-वन सत्र है। समूह कार्यशालाओं या सामान्य ऑनलाइन क्विज़ के विपरीत, सत्र का हर मिनट आपके बारे में है — आपकी पृष्ठभूमि, आपके संदेह, आपके लक्ष्य और फिट होने वाले वास्तविक विकल्प।",
        "whyItMatters": "अधिकांश करियर भ्रम जानकारी की कमी के बारे में नहीं है — यह बहुत अधिक जानकारी, पारिवारिक दबाव और अपरिवर्तनीय विकल्प के डर के बारे में है।",
        "benefits": [
          "प्रमाणित GCDA मेंटर के साथ 60-90 मिनट का निजी सत्र",
          "आपकी ताकत, रुचियों और सीखने की शैली का ईमानदार मूल्यांकन",
          "ब्लॉकर मैपिंग (पारिवारिक दबाव, पैसे का डर, अनिर्णय) और प्रत्येक को कैसे संभालना है",
          "तारीखों और चेकपॉइंट्स के साथ व्यक्तिगत 2-3 चरणीय कार्य योजना",
          "लिखित सत्र सारांश जिसे आप बाद में देख सकते हैं",
          "14 दिनों के भीतर वैकल्पिक 30 मिनट की फॉलो-अप कॉल"
        ],
        "idealFor": [
          "स्कूली छात्र (कक्षा 8-12) स्ट्रीम, विषय या बोर्ड विकल्प को लेकर भ्रमित",
          "दो या अधिक डिग्री या नौकरी विकल्पों के बीच फंसे स्नातक",
          "माता-पिता जिन्हें अपने बच्चे का समर्थन करने के लिए तटस्थ, विशेषज्ञ राय की आवश्यकता है",
          "कामकाजी पेशेवर जो भूमिका में फंसे हैं और आगे क्या करना है यह सुनिश्चित नहीं हैं",
          "ब्रेक के बाद करियर फिर से शुरू करने वाले पेशेवर",
          "कोई भी जो उच्च-दांव वाले निर्णय का सामना कर रहा है जिसे गलत नहीं किया जा सकता"
        ],
        "outcomes": [
          "तर्क के साथ 2-3 अगले-चरण विकल्पों की स्पष्ट, क्रमबद्ध सूची",
          "ताकत, रुचियों और प्रेरणाओं की बेहतर आत्म-जागरूकता",
          "स्पष्ट चेकपॉइंट्स के साथ 30/60/90 दिन की व्यावहारिक कार्य योजना",
          "परिवार और साथियों के सामने अपने निर्णय का बचाव करने का आत्मविश्वास",
          "लक्ष्यों और यथार्थवादी करियर पथों के बीच स्पष्ट फिट",
          "पहले सत्र के भीतर निर्णय-संबंधी चिंता में कमी"
        ],
        "steps": [
          {
            "title": "प्री-सेशन प्रोफाइल",
            "body": "आप एक छोटा प्रोफाइल फॉर्म (10 मिनट) भरते हैं जिसमें आपकी पृष्ठभूमि, अंक, रुचियां, बाधाएं शामिल हैं।"
          },
          {
            "title": "लक्ष्य और ब्लॉकर मैपिंग",
            "body": "लाइव सत्र में, मेंटर पहले यह मैप करता है कि आप वास्तव में क्या चाहते हैं और आप किससे डरते हैं।"
          },
          {
            "title": "ताकत और विकल्प स्कैन",
            "body": "साथ मिलकर आप यथार्थवादी विकल्पों को स्कैन करते हैं और 2-3 को शॉर्टलिस्ट करते हैं जो वास्तव में फिट होते हैं।"
          },
          {
            "title": "लिखित कार्य योजना",
            "body": "आप तारीखों के साथ 2-3 चरणीय लिखित योजना के साथ जाते हैं। 24 घंटे के भीतर PDF सारांश ईमेल किया जाता है।"
          },
          {
            "title": "वैकल्पिक फॉलो-अप",
            "body": "14 दिनों के भीतर 30 मिनट की फॉलो-अप कॉल प्रगति की समीक्षा के लिए शामिल है।"
          }
        ],
        "faqs": [
          {
            "q": "क्या व्यक्तिगत परामर्श छोटे छात्रों के लिए उपयुक्त है?",
            "a": "हाँ। सत्र स्कूली छात्रों, कॉलेज छात्रों और पेशेवरों के लिए अनुकूलित हैं। 16 से कम उम्र के छात्रों के लिए, हम अंतिम 15 मिनट में माता-पिता के शामिल होने की सलाह देते हैं।"
          },
          {
            "q": "क्या मेरे माता-पिता परामर्श सत्र में शामिल हो सकते हैं?",
            "a": "बिल्कुल। कक्षा 8-12 के छात्रों के लिए, माता-पिता की भागीदारी आमतौर पर सहायक होती है।"
          },
          {
            "q": "व्यक्तिगत परामर्श सत्र कितना लंबा है?",
            "a": "एक मानक सत्र 60-90 मिनट का होता है। जटिल मामलों के लिए 120 मिनट तक के विस्तारित सत्र उपलब्ध हैं।"
          },
          {
            "q": "क्या मुझे सत्र से पहले कुछ तैयार करने की आवश्यकता है?",
            "a": "बस एक छोटा प्रोफाइल फॉर्म भरें जो हम 24 घंटे पहले ईमेल करते हैं। कोई विशेष दस्तावेज़ नहीं।"
          },
          {
            "q": "व्यक्तिगत परामर्श करियर मूल्यांकन से कैसे अलग है?",
            "a": "मूल्यांकन डेटा है — आपकी ताकत और रुचियां कैसी दिखती हैं। व्यक्तिगत परामर्श वह मानवीय बातचीत है जो उस डेटा को आपके लिए विशिष्ट योजना में बदल देती है।"
          },
          {
            "q": "क्या मुझे सत्र के बाद लिखित सारांश मिलेगा?",
            "a": "हाँ। 24 घंटे के भीतर आपको प्रमुख निष्कर्षों, कार्य योजना के साथ एक पेज का PDF मिलता है।"
          },
          {
            "q": "क्या मैं बाद में दूसरा सत्र बुक कर सकता हूँ?",
            "a": "हाँ। कई ग्राहक 3-6 महीने बाद प्रगति की समीक्षा के लिए दूसरा सत्र बुक करते हैं।"
          },
          {
            "q": "क्या व्यक्तिगत परामर्श गोपनीय है?",
            "a": "हाँ। सत्र में आप जो साझा करते हैं वह आपके और मेंटर के बीच रहता है।"
          }
        ]
      },
      "career-assessment": {
        "title": "करियर मूल्यांकन",
        "shortDescription": "संरचित योग्यता, रुचि और व्यक्तित्व मूल्यांकन जो डेटा को सही स्ट्रीम, डिग्री या करियर शॉर्टलिस्ट में बदल देता है।",
        "heroDescription": "डेटा-समर्थित मूल्यांकन का उपयोग करके ताकत, रुचियों और उपयुक्त मार्गों को प्रकट करने वाले सूचित निर्णय लें।",
        "longDescription": "GCDA में करियर मूल्यांकन कई मान्य उपकरणों को जोड़ता है — संख्यात्मक योग्यता, मौखिक तर्क, अमूर्त सोच, रुचि (RIASEC-शैली) और व्यक्तित्व (बिग-फाइव) — एक आसान-से-समझने वाली प्रोफाइल में।",
        "whyItMatters": "मुफ्त ऑनलाइन क्विज़ आपको व्यक्तित्व लेबल देते हैं। एक वास्तविक करियर मूल्यांकन आपको साक्ष्य देता है: कौन से स्ट्रीम आपकी ताकत से मेल खाते हैं।",
        "benefits": [
          "बहु-उपकरण मूल्यांकन (योग्यता + रुचि + व्यक्तित्व)",
          "हर प्रासंगिक स्ट्रीम, डिग्री और करियर क्लस्टर के लिए फिट स्कोर",
          "प्रिंटेड, सादा-भाषा रिपोर्ट जिस पर आप कार्य कर सकते हैं",
          "30 मिनट की मेंटर-नेतृत्व वाली डीब्रीफ वीडियो कॉल",
          "आपकी ताकत से मेल खाने वाले करियर के साथ तुलना",
          "12 महीने बाद फिर से लेने का विकल्प"
        ],
        "idealFor": [
          "10वीं के बाद साइंस, कॉमर्स और आर्ट्स में से चुनने वाले छात्र",
          "इंजीनियरिंग, मेडिकल, डिज़ाइन, लॉ, कॉमर्स की तुलना करने वाले कक्षा 12 के छात्र",
          "MBA, सिविल सेवा, डिज़ाइन, प्रोडक्ट भूमिकाओं की तुलना करने वाले स्नातक",
          "डोमेन स्विच के लिए फिट का आकलन करने वाले पेशेवर",
          "माता-पिता जो अपने बच्चे के स्ट्रीम विकल्प के लिए वस्तुनिष्ठ डेटा चाहते हैं"
        ],
        "outcomes": [
          "आपकी ताकत और प्रेरणाओं से मेल खाने वाले 5 करियर की शॉर्टलिस्ट",
          "प्रत्येक शॉर्टलिस्टेड विकल्प के लिए यथार्थवादी फिट स्कोर",
          "किन विकल्पों को छोड़ना है और किन्हें आगे तलाशना है इसकी स्पष्ट समझ",
          "परिवार के सामने निर्णय का बचाव करने के लिए साक्ष्य-आधारित भाषा",
          "अल्पकालिक कार्रवाई के लिए दिशा"
        ],
        "steps": [
          {
            "title": "प्रोफाइल और लक्ष्य इंटेक",
            "body": "आप 10 मिनट का प्रोफाइल फॉर्म भरते हैं ताकि हमें पता चले कि आपको किन स्ट्रीम के खिलाफ स्कोर करना है।"
          },
          {
            "title": "ऑनलाइन मूल्यांकन बैटरी",
            "body": "आप एक बैठक में मूल्यांकन पूरा करते हैं (90-120 मिनट) या कई बैठकों में।"
          },
          {
            "title": "मनोवैज्ञानिक स्कोरिंग",
            "body": "एक प्रशिक्षित मनोवैज्ञानिक आपके जवाबों को स्कोर करता है और हर करियर क्लस्टर के लिए फिट स्कोर की गणना करता है।"
          },
          {
            "title": "व्यक्तिगत रिपोर्ट",
            "body": "आपको 12-15 पेज की PDF रिपोर्ट मिलती है जिसमें आपके स्कोर और 5-आइटम शॉर्टलिस्ट है।"
          },
          {
            "title": "मेंटर-नेतृत्व वाली डीब्रीफ",
            "body": "रिपोर्ट की व्याख्या के लिए GCDA मेंटर के साथ 30 मिनट की वीडियो कॉल।"
          }
        ],
        "faqs": [
          {
            "q": "GCDA करियर मूल्यांकन वास्तव में क्या मापता है?",
            "a": "हम संख्यात्मक योग्यता, मौखिक तर्क, अमूर्त सोच, रुचि और व्यक्तित्व को मापते हैं।"
          },
          {
            "q": "क्या यह मुफ्त ऑनलाइन क्विज़ से अलग है?",
            "a": "हाँ। मुफ्त क्विज़ लेबल देते हैं। हमारा मूल्यांकन कई मान्य उपकरणों का उपयोग करता है और मेंटर डीब्रीफ के साथ समाप्त होता है।"
          }
        ]
      },
      "workshops-seminars": {
        "title": "कार्यशालाएं और सेमिनार",
        "shortDescription": "स्कूलों, कॉलेजों, अभिभावकों और संस्थानों के लिए इंटरैक्टिव करियर जागरूकता सत्र — पूरे भारत में ऑन-कैंपस या ऑनलाइन।",
        "heroDescription": "करियर, स्ट्रीम चयन, उच्च शिक्षा और रोजगार कौशल पर संरचित जागरूकता कार्यक्रम प्रदान करें।",
        "longDescription": "GCDA स्कूलों, कॉलेजों, अभिभावक समूहों और संस्थानों के लिए संरचित करियर जागरूकता कार्यशालाएं चलाता है। प्रत्येक सत्र GCDA-प्रमाणित काउंसलर द्वारा संचालित होता है।",
        "whyItMatters": "सामान्य करियर वार्ता निर्णय नहीं बदलती। हमारी कार्यशालाएं करती हैं क्योंकि प्रत्येक सत्र एक विशिष्ट दर्शक के आसपास संरचित है।",
        "benefits": [
          "4 समर्पित सेमिनार ट्रैक",
          "दर्शकों के लिए अनुकूलित सामग्री",
          "लाइव पोल, Q&A",
          "हर प्रतिभागी के लिए मुफ्त मिनी-मूल्यांकन",
          "टेक-होम एक्शन प्लान"
        ],
        "idealFor": [
          "कक्षा 8-12 के लिए करियर जागरूकता सप्ताह चलाने वाले स्कूल",
          "प्रथम-वर्ष अभिमुखीकरण चलाने वाले कॉलेज",
          "संरचित करियर अभिमुखीकरण सत्र चाहने वाले अभिभावक समूह"
        ],
        "outcomes": [
          "दर्शकों में उच्च करियर जागरूकता",
          "छात्रों में बेहतर निर्णय तत्परता",
          "हर प्रतिभागी के लिए ठोस अगले कदम"
        ],
        "steps": [
          {
            "title": "संरेखण कॉल",
            "body": "हम दर्शकों के आकार, आयु सीमा और विशिष्ट परिणामों को समझने के लिए 30 मिनट की कॉल से शुरू करते हैं।"
          },
          {
            "title": "अनुकूलित एजेंडा",
            "body": "3 कार्य दिवसों के भीतर हम सत्र उद्देश्यों के साथ एजेंडा साझा करते हैं।"
          },
          {
            "title": "प्री-इवेंट किट",
            "body": "आपको एक पेज की होस्ट किट मिलती है: कमरा कैसे सेट करें।"
          },
          {
            "title": "लाइव सत्र",
            "body": "GCDA-प्रमाणित सुविधाकर्ता अनुकूलित एजेंडा का उपयोग करके सत्र चलाता है।"
          },
          {
            "title": "पोस्ट-इवेंट रिपोर्ट",
            "body": "7 दिनों के भीतर आपको पोस्ट-इवेंट रिपोर्ट मिलती है।"
          }
        ],
        "faqs": [
          {
            "q": "आप कितने बड़े दर्शकों को संभाल सकते हैं?",
            "a": "हम 50 से 1000+ प्रतिभागियों के बैच के लिए सत्र चलाते हैं।"
          },
          {
            "q": "क्या कार्यशालाएं ऑनलाइन आयोजित की जा सकती हैं?",
            "a": "हाँ। ऑनलाइन सत्र सुरक्षित वीडियो कॉल के माध्यम से अच्छी तरह काम करते हैं।"
          }
        ]
      },
      "stream-selection-guidance": {
        "title": "स्ट्रीम चयन मार्गदर्शन",
        "shortDescription": "कक्षा 10 के बाद सही स्ट्रीम (साइंस, कॉमर्स, आर्ट्स) चुनने के लिए योग्यता, रुचि और दीर्घकालिक करियर फिट के आधार पर विशेषज्ञ सहायता।",
        "heroDescription": "साइंस, कॉमर्स, आर्ट्स और उभरते मार्गों में से दबाव या भ्रम के बजाय स्पष्टता के साथ चुनें।",
        "longDescription": "कक्षा 10 के बाद स्ट्रीम चयन एक भारतीय छात्र द्वारा लिया गया सबसे उच्च-लीवरेज निर्णय है — यह चुपचाप अगले 8 से 12 वर्षों की शिक्षा को आकार देता है।",
        "whyItMatters": "अंक दरवाजे खोलते हैं, लेकिन योग्यता, रुचि और पारिवारिक फिट तय करते हैं कि कौन सा दरवाजा टिकाऊ करियर की ओर ले जाता है।",
        "benefits": [
          "बहु-उपकरण मूल्यांकन",
          "साइंस, कॉमर्स, आर्ट्स के तहत यथार्थवादी करियर शॉर्टलिस्ट",
          "माता-पिता-छात्र संरेखण वार्तालाप",
          "बैकअप विकल्प और 2-वर्षीय लचीलापन योजना"
        ],
        "idealFor": [
          "कक्षा 9 या 10 में 11वीं-12वीं स्ट्रीम चुनने वाले छात्र",
          "अपने बच्चे के लिए विकल्पों का मूल्यांकन करने वाले माता-पिता"
        ],
        "outcomes": [
          "छात्र की प्रोफाइल के लिए 2-3 यथार्थवादी स्ट्रीम की स्पष्ट शॉर्टलिस्ट",
          "प्रत्येक शॉर्टलिस्टेड स्ट्रीम द्वारा अनलॉक किए गए करियर की ईमानदार सूची",
          "छात्र और माता-पिता के बीच संरेखित समझ"
        ],
        "steps": [
          {
            "title": "प्रोफाइल और संदर्भ",
            "body": "हम छात्र के अंक, रुचियों, पारिवारिक बाधाओं को एकत्र करते हैं।"
          },
          {
            "title": "बहु-उपकरण मूल्यांकन",
            "body": "छात्र 90-120 मिनट का ऑनलाइन मूल्यांकन पूरा करता है।"
          },
          {
            "title": "स्ट्रीम शॉर्टलिस्ट",
            "body": "GCDA मेंटर 2-3 स्ट्रीम की शॉर्टलिस्ट तैयार करता है।"
          },
          {
            "title": "पारिवारिक संरेखण सत्र",
            "body": "हम छात्र और माता-पिता के साथ 30 मिनट की वीडियो कॉल चलाते हैं।"
          },
          {
            "title": "लिखित योजना",
            "body": "आप 1-पेज स्ट्रीम-चॉइस तर्क के साथ जाते हैं।"
          }
        ],
        "faqs": [
          {
            "q": "क्या स्ट्रीम चयन केवल अंकों के बारे में है?",
            "a": "नहीं। अंक दरवाजे खोलते हैं, लेकिन योग्यता, रुचि और पारिवारिक फिट तय करते हैं।"
          }
        ]
      },
      "degree-selection-guidance": {
        "title": "डिग्री चयन मार्गदर्शन",
        "shortDescription": "12वीं के बाद सही स्नातक या पेशेवर कोर्स चुनें — इंजीनियरिंग, मेडिकल, डिज़ाइन, लॉ आदि में विशेषज्ञ कॉलेज मार्गदर्शन के साथ।",
        "heroDescription": "कॉलेज योजना के लिए प्रतिबद्ध होने से पहले डिग्री मार्ग, संस्थानों और भविष्य के अवसरों की तुलना करें।",
        "longDescription": "कक्षा 12 के बाद, डिग्री और कॉलेज का चुनाव चुपचाप अगले 10 वर्षों को तय करता है।",
        "whyItMatters": "गलत डिग्री विकल्प 4 साल की फीस खर्च कर सकता है। सही विकल्प अधिक दरवाजे खोलता है।",
        "benefits": [
          "10+ कोर्स परिवारों में डिग्री-उपयुक्तता विश्लेषण",
          "रैंक, बजट से मेल खाने वाले 6-10 संस्थानों की कॉलेज शॉर्टलिस्ट",
          "तिथियों, फीस के साथ प्रवेश परीक्षा कैलेंडर"
        ],
        "idealFor": [
          "कक्षा 12 के छात्र इंजीनियरिंग, मेडिकल कॉलेज चुन रहे हैं",
          "CA, CS, CMA, लॉ, डिज़ाइन जैसे पेशेवर पाठ्यक्रमों पर विचार करने वाले छात्र"
        ],
        "outcomes": [
          "छात्र की प्रोफाइल में वास्तव में फिट होने वाले 2-3 डिग्री पथों की शॉर्टलिस्ट",
          "छात्र की रैंक के लिए यथार्थवादी प्रवेश के साथ 6-10 कॉलेज शॉर्टलिस्ट"
        ],
        "steps": [
          {
            "title": "प्रोफाइल और रैंक इंटेक",
            "body": "हम अंक, अपेक्षित रैंक, बोर्ड, बजट रेंज एकत्र करते हैं।"
          },
          {
            "title": "डिग्री-उपयुक्तता विश्लेषण",
            "body": "हम छात्र की प्रोफाइल का उपयोग करके 2-3 डिग्री पथों की पहचान करते हैं।"
          },
          {
            "title": "कॉलेज शॉर्टलिस्टिंग",
            "body": "हम 6-10 कॉलेज शॉर्टलिस्ट बनाते हैं।"
          },
          {
            "title": "प्रवेश परीक्षा कैलेंडर",
            "body": "हम तिथियों, फीस के साथ प्रवेश परीक्षा कैलेंडर साझा करते हैं।"
          },
          {
            "title": "4-वर्षीय + 2-वर्षीय योजना",
            "body": "आप डिग्री के अंदर 4-वर्षीय योजना के साथ जाते हैं।"
          }
        ],
        "faqs": [
          {
            "q": "आप छात्र के लिए इंजीनियरिंग बनाम BBA बनाम B.Des की तुलना कैसे करते हैं?",
            "a": "हम योग्यता, रुचि और व्यक्तित्व डेटा का उपयोग करके डिग्री-उपयुक्तता विश्लेषण चलाते हैं।"
          }
        ]
      },
      "working-professionals-guidance": {
        "title": "कार्यरत पेशेवरों के लिए मार्गदर्शन",
        "shortDescription": "कार्यरत पेशेवरों के लिए करियर विकास, ट्रांज़िशन, MBA और कौशल-संरेखण सहायता — कार्य घंटों के आसपास डिज़ाइन किए गए ऑनलाइन सत्र।",
        "heroDescription": "संरचित मेंटरिंग के साथ करियर ट्रांज़िशन की योजना बनाएं, पोजीशनिंग में सुधार करें।",
        "longDescription": "भारत में कामकाजी पेशेवरों को अलग समस्या का सामना करना पड़ता है: बहुत सारे विकल्प, पर्याप्त समय नहीं।",
        "whyItMatters": "30 पर गलत करियर चाल की लागत 22 पर गलत चाल से अधिक होती है।",
        "benefits": [
          "आपकी 2-वर्षीय आकांक्षा के लिए मैप किया गया 60 मिनट का इंटेक",
          "यथार्थवादी ट्रांज़िशन मैप: उद्योग, कार्य, भूमिका",
          "MBA/कार्यकारी कार्यक्रमों की शॉर्टलिस्ट",
          "90-दिवसीय निष्पादन योजना"
        ],
        "idealFor": [
          "MBA पर विचार कर रहे मध्य-करियर पेशेवर",
          "डोमेन या उद्योग स्विच की योजना बना रहे पेशेवर",
          "पदोन्नति, नेतृत्व भूमिकाओं का लक्ष्य रखने वाले कर्मचारी"
        ],
        "outcomes": [
          "तर्क के साथ स्पष्ट अगला कदम (MBA, स्विच, पदोन्नति)",
          "यथार्थवादी वेतन, भूमिका और समयरेखा अपेक्षाएं",
          "3-5 लक्षित कार्यक्रमों या कंपनियों की शॉर्टलिस्ट"
        ],
        "steps": [
          {
            "title": "इंटेक और आकांक्षा मैपिंग",
            "body": "आपकी वर्तमान भूमिका को समझने के लिए 60 मिनट की वीडियो कॉल।"
          },
          {
            "title": "ट्रांज़िशन मैप और शॉर्टलिस्ट",
            "body": "3 दिनों के भीतर आपको लिखित ट्रांज़िशन मैप मिलता है।"
          },
          {
            "title": "रिज्यूमे और लिंक्डइन अपग्रेड",
            "body": "हम लक्षित बाजार के खिलाफ आपके रिज्यूमे की समीक्षा करते हैं।"
          },
          {
            "title": "इंटरव्यू तैयारी",
            "body": "यदि इंटरव्यू क्षितिज पर हैं, तो हम संरचित फीडबैक के साथ एक मॉक इंटरव्यू चलाते हैं।"
          },
          {
            "title": "90-दिवसीय निष्पादन + फॉलो-अप",
            "body": "आप सप्ताह-दर-सप्ताह कार्यों के साथ 90-दिवसीय योजना के साथ जाते हैं।"
          }
        ],
        "faqs": [
          {
            "q": "क्या यह उपयोगी है यदि मेरे पास पहले से ही कार्य अनुभव है?",
            "a": "हाँ। यह विशेष रूप से अनुभवी पेशेवरों के लिए डिज़ाइन किया गया है।"
          }
        ]
      }
    },
    "topicalServices": {
      "career-counselling-seminar": {
        "title": "करियर काउंसलिंग सेमिनार",
        "description": "स्कूलों, कॉलेजों के लिए संरचित करियर जागरूकता सेमिनार"
      },
      "stream-selection-guidance": {
        "title": "स्ट्रीम चयन मार्गदर्शन",
        "description": "10वीं के बाद सही स्ट्रीम चुनने के लिए मार्गदर्शन"
      },
      "degree-selection-guidance": {
        "title": "डिग्री चयन मार्गदर्शन",
        "description": "12वीं के बाद सही डिग्री चुनने के लिए मार्गदर्शन"
      },
      "guidance-for-working-professionals": {
        "title": "कार्यरत पेशेवरों के लिए मार्गदर्शन",
        "description": "करियर विकास और ट्रांज़िशन के लिए मार्गदर्शन"
      }
    },
    "plans": [
      {
        "slug": "stream-selector",
        "name": "स्ट्रीम सेलेक्टर",
        "price": "Rs. 2999",
        "note": "एक बार",
        "eyebrow": "अपनी शैक्षिक दिशा तय करने वाले छात्रों के लिए आदर्श",
        "badge": "",
        "features": [
          "तीसरी कक्षा से 10वीं साइंस/कॉमर्स/आर्ट्स",
          "करियर रुचि, योग्यता, व्यक्तित्व परीक्षण",
          "उपयुक्त स्ट्रीम को शॉर्टलिस्ट करने के लिए करियर मूल्यांकन रिपोर्ट",
          "मेंटर के साथ आमने-सामने/वीडियो परामर्श",
          "परामर्श के बाद सेवाएं: छात्र हेल्पलाइन",
          "3 महत्वाकांक्षी करियर उपयुक्तता विश्लेषण"
        ]
      },
      {
        "slug": "degree-selector",
        "name": "डिग्री सेलेक्टर",
        "price": "Rs. 3499",
        "note": "एक बार",
        "eyebrow": "सही डिग्री प्रोग्राम चुनने के लिए आदर्श",
        "badge": "सबसे लोकप्रिय",
        "features": [
          "स्ट्रीम सेलेक्टर की सभी सुविधाएं",
          "गहन डिग्री प्रोग्राम विश्लेषण",
          "विश्वविद्यालय और कॉलेज सिफारिशें",
          "प्रवेश प्रक्रिया मार्गदर्शन",
          "भविष्य के करियर संभावनाओं का विश्लेषण",
          "शैक्षणिक सफलता के लिए व्यक्तिगत रोडमैप"
        ]
      },
      {
        "slug": "working-professionals",
        "name": "कार्यरत पेशेवर",
        "price": "Rs. 3999",
        "note": "एक बार",
        "eyebrow": "करियर उन्नति और ट्रांज़िशन के लिए डिज़ाइन किया गया",
        "features": [
          "डिग्री सेलेक्टर की सभी सुविधाएं",
          "करियर ट्रांज़िशन रणनीति",
          "उद्योग-विशिष्ट मार्गदर्शन",
          "पेशेवर कौशल मूल्यांकन",
          "नेटवर्किंग और मेंटरशिप अवसर",
          "रिज्यूमे और इंटरव्यू तैयारी",
          "करियर विकास रोडमैप"
        ]
      }
    ],
    "testimonials": [
      {
        "name": "सामंथा एच.",
        "role": "ग्राहक",
        "quote": "GCDA के साथ काम करना मेरे लिए गेम-चेंजर था। उनके करियर मूल्यांकन ने मुझे अपनी ताकत समझने और करियर लक्ष्यों के साथ संरेखित करने में मदद की।"
      },
      {
        "name": "हिरेंद्र एस.",
        "role": "ग्राहक",
        "quote": "मैं GCDA को उन सभी के लिए अत्यधिक अनुशंसा करता हूं जो अपने करियर में अटके हुए हैं। वन-ऑन-वन सत्रों ने मुझे स्पष्ट कार्य योजना विकसित करने में मदद की।"
      },
      {
        "name": "टॉम एच.",
        "role": "ग्राहक",
        "quote": "GCDA से मिला करियर परामर्श उत्कृष्ट था। उन्होंने मुझे उपकरण, संसाधन और आत्मविश्वास प्रदान किया।"
      }
    ],
    "serviceLabels": {
      "Career Counsellor": "करियर काउंसलर",
      "Personal Counselling": "व्यक्तिगत परामर्श",
      "Career Assessment": "करियर मूल्यांकन",
      "Seminar": "सेमिनार",
      "Certification": "प्रमाणन",
      "Stream Selection": "स्ट्रीम चयन",
      "Degree Selection": "डिग्री चयन",
      "Working Pro": "कार्यरत पेशेवर"
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
};

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
