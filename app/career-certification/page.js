import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import { faqSchema, breadcrumbSchema, courseSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Counselling Certification in India',
  description:
    'Become a certified career counsellor with GCDA. Our comprehensive offline + online certification programme equips you with the skills, assessments, and mentoring techniques to guide students and working professionals across India.',
  keywords: [
    'career counselling certification',
    'career counsellor course',
    'career counselling course',
    'certified career counsellor',
    'career counselling training India',
    'career counsellor certification online',
  ],
  alternates: { canonical: '/career-certification' },
  openGraph: {
    title: 'Career Counselling Certification in India',
    description:
      'Become a certified career counsellor with GCDA. Comprehensive certification programme for aspiring and practising counsellors.',
    url: 'https://gcdassociation.org/career-certification',
    type: 'article',
    images: [
      {
        url: '/assets/career-7.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling certification programme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Certification in India',
    description: 'Become a certified career counsellor with GCDA. Comprehensive certification programme for aspiring and practising counsellors.',
    images: [
      {
        url: '/assets/career-7.png',
        width: 1200,
        height: 630,
        alt: 'Career Counselling Certification – GCDA',
      },
    ],
  },
};

const certificationFaqs = [
  {
    q: 'Who should enroll in the GCDA Career Counselling Certification?',
    a: 'Anyone passionate about mentoring and guiding others in their career path. The programme is open to psychology graduates and minimum graduates in any discipline, including retired professionals looking to leverage their experience.',
  },
  {
    q: 'What are the eligibility requirements?',
    a: 'A Bachelor\'s degree in any discipline, a passion for helping others, and good communication skills. No prior counselling experience is required.',
  },
  {
    q: 'What does the curriculum cover?',
    a: 'Career counselling principles, assessment tools (aptitude, interest, personality), effective coaching techniques, career pathway mapping, parent-alignment conversations, and the business of running a counselling practice.',
  },
  {
    q: 'Is the certification online, offline, or both?',
    a: 'The certification is delivered in a hybrid format — interactive online sessions plus in-person workshops in select cities. This blend gives you both flexibility and hands-on practice.',
  },
  {
    q: 'Will I receive a certificate after completion?',
    a: 'Yes. On successful completion of the programme and assessments, you will receive a GCDA Career Counsellor Certification that you can use to start or grow your practice.',
  },
  {
    q: 'Does the programme help me start a counselling practice?',
    a: 'Yes. The curriculum includes modules on client acquisition, ethical practice, and using assessments in a real-world setting, so you are ready to start practising as soon as you complete the programme.',
  },
];

export default function CareerCertificationPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/career-counselling' },
    { name: 'Career Counselling Certification', url: '/career-certification' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Certification Programme</span>
            <h1>Begin your journey to become a certified career counsellor.</h1>
            <p className="page-hero-copy">
              A comprehensive certification programme designed to equip you with the knowledge, hands-on practice, and confidence to guide students and working professionals towards informed, fulfilling career decisions.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Enquire Now</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-7.png" alt="Career Counselling Certification" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            The GCDA Career Counselling Certification is a comprehensive programme for aspiring and practising counsellors. It covers career counselling principles, assessment tools, coaching techniques, and the business of running a counselling practice — delivered in a hybrid (online + in-person) format so you can practise as soon as you complete the programme. Open to graduates in any discipline.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Why get certified"
              title="Begin your path with a career counselling course"
              description="Our comprehensive programme is designed to equip you with the knowledge and skills needed to become a certified career counsellor."
            />
            <p>
              Are you passionate about helping others navigate their career paths? Throughout our Career Counselling Course, you&apos;ll gain invaluable theoretical insights into various career options. What sets us apart? Our hands-on approach integrates interactive sessions where you can apply counselling techniques in simulated scenarios.
            </p>
            <p>
              This practical aspect ensures a deep understanding of theoretical foundations while honing essential skills required to excel in the field. By the programme&apos;s conclusion, you&apos;ll be fully prepared to embark on a career as a professional career counsellor, guiding individuals towards informed and fulfilling career decisions.
            </p>
          </div>
          <div className="info-panel">
            <h3>Programme highlights</h3>
            <ul className="bullet-list compact">
              <li><strong>Format:</strong> Hybrid — interactive online + in-person workshops</li>
              <li><strong>Eligibility:</strong> Bachelor&apos;s degree in any discipline</li>
              <li><strong>Duration:</strong> Self-paced with live mentor sessions</li>
              <li><strong>Certificate:</strong> GCDA Career Counsellor Certification</li>
              <li><strong>Outcome:</strong> Practise independently or join an established practice</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="The role"
            title="What does a career counsellor do?"
            description="As a career counsellor, you play a crucial role in guiding students and working professionals through their career journeys."
            center
          />
          <div className="card-grid process-grid">
            <article className="card process-card">
              <div className="card-body">
                <span className="step-number">01</span>
                <h3>Career guidance</h3>
                <p>Assist individuals in crafting a comprehensive plan to achieve their career objectives. Our course emphasises practical techniques essential for effective career coaching and mentorship.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <span className="step-number">02</span>
                <h3>Overcoming challenges</h3>
                <p>Address obstacles that may hinder academic or career success. Learn strategies to support clients in overcoming these challenges through a structured coaching approach.</p>
              </div>
            </article>
            <article className="card process-card">
              <div className="card-body">
                <span className="step-number">03</span>
                <h3>Educational support</h3>
                <p>Provide crucial information about colleges, admission criteria, entrance exams, and cut-offs — empowering clients with accurate and timely information.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Who should enroll"
              title="Who is this certification for?"
              description="Ideal for individuals passionate about mentoring and guiding others in their career paths."
            />
            <ul className="bullet-list">
              <li><strong>Open to all:</strong> Welcomes anyone eager to help others navigate their careers, including retired professionals looking to leverage their experience.</li>
              <li><strong>Essential skill development:</strong> Gain expertise in connecting with clients, understanding their career needs, and guiding them effectively.</li>
              <li><strong>Eligibility requirements:</strong> Open to psychology graduates and minimum graduates in any discipline, ensuring a strong foundation in career guidance.</li>
            </ul>
            <div className="key-takeaways" style={{ marginTop: '1.5rem' }}>
              <h2>Prerequisites</h2>
              <ul>
                <li>Bachelor&apos;s degree in any discipline</li>
                <li>Passion for helping others</li>
                <li>Good communication skills</li>
              </ul>
            </div>
            <div className="button-row" style={{ marginTop: '1.5rem' }}>
              <a
                href="https://allegiance-educare.in/storage/uploads/career-counselling-course-module_z21Ca.pdf"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Download Course Outline (PDF)
              </a>
              <a
                href="https://allegiance-educare.in/career-counselling-certification-course"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Know more about certification →
              </a>
            </div>
          </div>
          <div className="info-panel">
            <h3>Why choose GCDA certification</h3>
            <ul className="bullet-list compact">
              <li>Led by industry experts with extensive field experience</li>
              <li>Hands-on practice in simulated counselling scenarios</li>
              <li>Comprehensive coverage of career assessments</li>
              <li>Personalised coaching and mentoring techniques</li>
              <li>Ethical practice and client-acquisition modules</li>
              <li>Recognised certification across India</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-column reverse-mobile">
          <div className="surface-card media-card">
            <img src="/assets/career-3.png" alt="GCDA Career Counselling Workshop" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Transform your career"
              title="Become a certified career counsellor in India"
              description="Discover a comprehensive training programme designed to equip you with a thorough grasp of career counselling principles, assessment tools, and effective coaching techniques."
            />
            <p>
              Delve into diverse counselling strategies and personalized approaches tailored to enhance your skills as a proficient career counsellor. Enrol today to expand your expertise and advance your career in guiding individuals towards successful professional paths.
            </p>
            <div className="button-row" style={{ marginTop: '1rem' }}>
              <Link href="/contact" className="button button-primary">Apply Now</Link>
              <a
                href="https://www.youtube.com/watch?v=ZQYxaC0pnZY"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Watch Programme Video
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="FAQs"
            title="Frequently asked questions about the certification"
            description="Common questions about eligibility, format, certification, and career outcomes."
            center
          />
          <FAQList items={certificationFaqs} />
        </div>
        <JsonLd id="ld-faq-certification" data={faqSchema(certificationFaqs)} />
      </section>

      <CTASection
        title="Ready to become a certified career counsellor?"
        description="Talk to the GCDA team to learn about the next batch, fees, and how the certification can fit around your schedule."
      />

      <JsonLd id="ld-breadcrumb-certification" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        id="ld-course-certification"
        data={{
          ...courseSchema({
            name: 'GCDA Career Counselling Certification',
            description:
              'A comprehensive certification programme for aspiring and practising career counsellors in India. Covers career counselling principles, assessment tools, coaching techniques, and the business of running a counselling practice. Hybrid online + in-person delivery.',
            provider: 'Global Career Development Association',
            url: `${SITE_URL}/career-certification`,
            slug: 'career-certification',
            hasCourseInstance: true,
          }),
        }}
      />
    </>
  );
}
