// Localized Career Certification Content - 100% Hindi support
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import { faqSchema, breadcrumbSchema, courseSchema } from '@/data/schema';
import { TRANSLATIONS, localizePath } from '@/data/i18n';

const SITE_URL = 'https://gcdassociation.org';

function CareerCertificationPage({ lang = 'en' }) {
  const fullT = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const t = fullT.careerCertification;
  const lp = (p) => localizePath(p, lang);
  const isHi = lang === 'hi';
  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: lp('/') },
    { name: isHi ? 'सेवाएं' : 'Services', url: lp('/career-counselling') },
    { name: isHi ? 'प्रमाणन' : 'Career Counselling Certification', url: lp('/career-certification') },
  ];
  const certFaqs = fullT.siteFaqs || [
    { q: 'Who should enroll?', a: 'Anyone passionate about mentoring.' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{t.heroEyebrow || t.eyebrow}</span>
            <h1>{t.heroTitle || t.title}</h1>
            <p className="page-hero-copy">{t.heroDesc || t.desc}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">{isHi ? 'अभी पूछताछ करें' : 'Enquire Now'}</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">{isHi ? `कॉल ${company.phoneDisplay}` : `Call ${company.phoneDisplay}`}</a>
            </div>
          </div>
          <div className="surface-card media-card"><img src="/assets/career-7.png" alt="Career Counselling Certification" /></div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock lang={lang}>{t.answerBlock || "The GCDA Career Counselling Certification is a comprehensive programme."}</AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader eyebrow={isHi ? "प्रमाणित क्यों बनें" : "Why get certified"} title={t.whyTitle || "Begin your path with a career counselling course"} description={t.whyDesc || "Our programme is designed to equip you with knowledge and skills."} />
            <p>{isHi ? "क्या आप दूसरों को उनके करियर पथों को नेविगेट करने में मदद करने के बारे में भावुक हैं? हमारे कोर्स के दौरान आपको विभिन्न करियर विकल्पों में अमूल्य अंतर्दृष्टि प्राप्त होगी।" : "Are you passionate about helping others navigate their career paths? Throughout our Course, you'll gain invaluable insights."}</p>
            <p>{isHi ? "यह व्यावहारिक पहलू सैद्धांतिक नींव की गहरी समझ सुनिश्चित करता है जबकि उत्कृष्टता के लिए कौशल निखारता है।" : "This practical aspect ensures deep understanding while honing skills."}</p>
          </div>
          <div className="info-panel">
            <h3>{isHi ? "कार्यक्रम हाइलाइट्स" : "Programme highlights"}</h3>
            <ul className="bullet-list compact">
              <li><strong>{isHi ? "प्रारूप:" : "Format:"}</strong> {isHi ? "हाइब्रिड — ऑनलाइन + इन-पर्सन" : "Hybrid — online + in-person"}</li>
              <li><strong>{isHi ? "पात्रता:" : "Eligibility:"}</strong> {isHi ? "किसी भी विषय में स्नातक" : "Bachelor's degree in any discipline"}</li>
              <li><strong>{isHi ? "अवधि:" : "Duration:"}</strong> {isHi ? "स्व-गति + लाइव मेंटर" : "Self-paced with live mentor sessions"}</li>
              <li><strong>Certificate:</strong> GCDA Career Counsellor Certification</li>
              <li><strong>{isHi ? "परिणाम:" : "Outcome:"}</strong> {isHi ? "स्वतंत्र रूप से अभ्यास करें" : "Practise independently"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title={t.faqSectionTitle || "Frequently asked questions"} description={isHi ? "पात्रता, प्रारूप, प्रमाणन के बारे में प्रश्न।" : "Common questions about eligibility, format."} center />
          <FAQList items={certFaqs} />
        </div>
        <JsonLd id="ld-faq-certification" data={faqSchema(certFaqs)} />
      </section>

      <CTASection title={t.ctaTitle || "Ready to become a certified career counsellor?"} description={t.ctaDesc || "Talk to GCDA team."} lang={lang} />
      <JsonLd id="ld-breadcrumb-certification" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-course-certification" data={{ ...courseSchema({ name: 'GCDA Career Counselling Certification', description: 'Comprehensive certification programme.', provider: 'Global Career Development Association', url: `${SITE_URL}/career-certification`, slug: 'career-certification', hasCourseInstance: true }) }} />
    </>
  );
}

export default CareerCertificationPage;
