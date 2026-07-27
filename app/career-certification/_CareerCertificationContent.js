// Localized Career Certification Content
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

const certificationFaqs = [
  { q: 'Who should enroll in the GCDA Career Counselling Certification?', a: 'Anyone passionate about mentoring and guiding others in their career path. Open to graduates in any discipline, including retired professionals.' },
  { q: 'What are the eligibility requirements?', a: "Bachelor's degree in any discipline, a passion for helping others, and good communication skills. No prior counselling experience is required." },
  { q: 'What does the curriculum cover?', a: 'Career counselling principles, assessment tools (aptitude, interest, personality), effective coaching techniques, career pathway mapping, parent-alignment conversations, and the business of running a counselling practice.' },
  { q: 'Is the certification online, offline, or both?', a: 'Hybrid format — interactive online sessions plus in-person workshops in select cities.' },
  { q: 'Will I receive a certificate after completion?', a: 'Yes. On successful completion you will receive a GCDA Career Counsellor Certification.' },
  { q: 'Does the programme help me start a counselling practice?', a: 'Yes. The curriculum includes modules on client acquisition, ethical practice, and using assessments in real-world setting.' },
];

function CareerCertificationPage({ lang = 'en' }) {
  const t = (TRANSLATIONS[lang] || TRANSLATIONS.en).careerCertification;
  const lp = (p) => localizePath(p, lang);
  const breadcrumbs = [
    { name: 'Home', url: lp('/') },
    { name: 'Services', url: lp('/career-counselling') },
    { name: 'Career Counselling Certification', url: lp('/career-certification') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="page-hero-copy">{t.desc}</p>
            <div className="button-row">
              <Link href={lp('/contact')} className="button button-primary">Enquire Now</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card"><img src="/assets/career-7.png" alt="Career Counselling Certification" /></div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>The GCDA Career Counselling Certification is a comprehensive programme for aspiring and practising counsellors. Hybrid online + in-person format.</AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader eyebrow="Why get certified" title="Begin your path with a career counselling course" description="Our comprehensive programme is designed to equip you with the knowledge and skills needed to become a certified career counsellor." />
            <p>Are you passionate about helping others navigate their career paths? Throughout our Career Counselling Course, you'll gain invaluable theoretical insights into various career options.</p>
            <p>This practical aspect ensures a deep understanding of theoretical foundations while honing essential skills required to excel in the field.</p>
          </div>
          <div className="info-panel">
            <h3>Programme highlights</h3>
            <ul className="bullet-list compact">
              <li><strong>Format:</strong> Hybrid — interactive online + in-person workshops</li>
              <li><strong>Eligibility:</strong> Bachelor's degree in any discipline</li>
              <li><strong>Duration:</strong> Self-paced with live mentor sessions</li>
              <li><strong>Certificate:</strong> GCDA Career Counsellor Certification</li>
              <li><strong>Outcome:</strong> Practise independently or join an established practice</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title="Frequently asked questions about the certification" description="Common questions about eligibility, format, certification, and career outcomes." center />
          <FAQList items={certificationFaqs} />
        </div>
        <JsonLd id="ld-faq-certification" data={faqSchema(certificationFaqs)} />
      </section>

      <CTASection title="Ready to become a certified career counsellor?" description="Talk to the GCDA team to learn about the next batch, fees, and how the certification can fit around your schedule." lang={lang} />
      <JsonLd id="ld-breadcrumb-certification" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-course-certification" data={{ ...courseSchema({ name: 'GCDA Career Counselling Certification', description: 'Comprehensive certification programme for aspiring counsellors in India.', provider: 'Global Career Development Association', url: `${SITE_URL}/career-certification`, slug: 'career-certification', hasCourseInstance: true }) }} />
    </>
  );
}

export default CareerCertificationPage;
