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
  title: 'Become a Career Counsellor in India',
  description:
    'Learn how to become a career counsellor in India with GCDA certification, training, assessments, mentoring, and practice-ready guidance.',
  keywords: [
    'career counselling certification',
    'career counsellor course',
    'career counselling course',
    'certified career counsellor',
    'career counselling training India',
    'career counsellor certification online',
    'how to become a career counsellor in India',
    'qualification for career counsellor in India',
  ],
  alternates: { canonical: '/career-certification' },
  openGraph: {
    title: 'Become a Career Counsellor in India',
    description:
      'Learn how to become a career counsellor in India through GCDA certification, hybrid training, and practice-ready mentoring.',
    url: 'https://gcdassociation.org/career-certification',
    type: 'article',
    images: [
      {
        url: '/assets/career-7.webp',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling certification programme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Career Counsellor in India',
    description: 'How to become a career counsellor in India through GCDA certification, training, and mentoring.',
    images: [
      {
        url: '/assets/career-7.webp',
        width: 1200,
        height: 630,
        alt: 'Career Counselling Certification – GCDA',
      },
    ],
  },
};

const counsellorPathRows = [
  {
    step: 'Step 1',
    action: 'Build your foundation',
    timeline: '0–3 months',
    outcome: 'Understand counselling principles, the role, and whether this path fits your strengths and interests.',
  },
  {
    step: 'Step 2',
    action: 'Complete structured certification',
    timeline: '1–6 months',
    outcome: 'Learn assessments, career frameworks, ethical practice, and how to work with students, parents, and professionals.',
  },
  {
    step: 'Step 3',
    action: 'Practice with supervised application',
    timeline: '1–3 months',
    outcome: 'Translate theory into real counselling conversations, case handling, and career roadmap creation.',
  },
  {
    step: 'Step 4',
    action: 'Start or grow your practice',
    timeline: 'Ongoing',
    outcome: 'Begin working independently, with institutions, or inside an established counselling ecosystem.',
  },
];

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
  {
    q: 'What qualification is required to become a career counsellor in India?',
    a: 'A bachelor’s degree is the minimum base for the GCDA certification pathway. What matters next is structured training in counselling principles, assessments, ethical practice, and how to guide real student or professional decisions.',
  },
  {
    q: 'Do I need a psychology degree to become a career counsellor?',
    a: 'No. A psychology background helps, but it is not mandatory for every career counselling role. Graduates from education, HR, business, and other disciplines can still build competence through proper certification, mentoring, and supervised practice.',
  },
  {
    q: 'How long does it take to become a career counsellor?',
    a: 'The timeline depends on your background and how quickly you move from training into practice. Most candidates need a structured learning phase, followed by guided application and case handling before they feel confident advising independently.',
  },
  {
    q: 'What kind of career path can a certified career counsellor build?',
    a: 'Certified career counsellors can work independently, with schools, colleges, NGOs, edtech companies, training institutes, and coaching ecosystems. Some focus on students after 10th or 12th, while others build expertise in working-professional guidance or assessments.',
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
            <h1>How to Become a Certified Career Counsellor in India</h1>
            <p className="page-hero-copy">
              Learn how to become a career counsellor in India through a structured certification programme that covers counselling foundations, assessment tools, mentoring techniques, and the practical steps required to start guiding students and professionals with confidence.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Enquire Now</Link>
              <a href={`tel:${company.phoneRaw}`} className="button button-secondary">Call {company.phoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span>Hybrid online + in-person</span>
              <span>Bachelor's degree eligible</span>
              <span>Practice-ready certification</span>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-7.webp" alt="Career Counselling Certification" width="1376" height="768" loading="eager" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            To become a career counsellor in India, you need a strong foundation in guidance frameworks, assessment interpretation, counselling conversations, and ethical practice. The GCDA Career Counselling Certification is designed to build those skills through hybrid training, practical application, and a practice-ready roadmap for graduates from any discipline.
          </AnswerBlock>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Why get certified"
              title="How to become a career counsellor in India"
              description="Our certification is designed for people who want a practical route into career counselling, not only a theoretical overview."
            />
            <p>
              A strong career counsellor needs more than good intentions. The role requires structured listening, assessment literacy, career-pathway knowledge, parent and student communication skills, and the ability to turn confusion into a practical action plan.
            </p>
            <p>
              GCDA&apos;s certification helps you build that foundation step by step. The programme combines theory, application, and practice so you can understand the role clearly and move toward real counselling work with more confidence.
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
            eyebrow="Step-by-step path"
            title="A practical roadmap to becoming a career counsellor"
            description="Use this pathway to understand the qualification base, the certification stage, and how practice usually develops after training."
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>What to do</th>
                  <th>Typical timeline</th>
                  <th>Main outcome</th>
                </tr>
              </thead>
              <tbody>
                {counsellorPathRows.map((row) => (
                  <tr key={row.step}>
                    <td><strong>{row.step}</strong></td>
                    <td>{row.action}</td>
                    <td>{row.timeline}</td>
                    <td>{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-caption">Step-by-step path for aspiring career counsellors in India.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="The role"
            title="What does a career counsellor do?"
            description="As a career counsellor, you guide students, parents, graduates, and professionals through high-stakes education and career decisions."
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

      <section className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Who should enroll"
              title="Qualifications and fit for aspiring career counsellors"
              description="This programme is designed for people who want to understand the role seriously and build the capability to guide real education and career decisions."
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
            <div className="mini-contact-card" style={{ marginTop: '1rem' }}>
              <span>Need help deciding if this course fits you?</span>
              <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-center-wide">
          <SectionHeader
            eyebrow="Qualification details"
            title="What matters most before you start this path"
            description="These four checkpoints help aspiring counsellors judge eligibility, practical readiness, and the kind of career path they can realistically build after training."
            center
          />
          <div className="stack-list">
            <article className="feature-row">
              <h3>Qualification</h3>
              <p>A bachelor&apos;s degree gives the minimum base; specialised training builds counselling capability.</p>
            </article>
            <article className="feature-row">
              <h3>Psychology degree</h3>
              <p>Helpful, but not mandatory for every role. Education, HR, and other graduates can still enter the field with structured certification.</p>
            </article>
            <article className="feature-row">
              <h3>Practical readiness</h3>
              <p>Assessment interpretation, communication, and ethical practice matter as much as theory when you begin guiding real students and professionals.</p>
            </article>
            <article className="feature-row">
              <h3>Career path</h3>
              <p>You can work independently or with schools, colleges, NGOs, edtech platforms, and broader guidance ecosystems once your training converts into credible practice.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column reverse-mobile">
          <div className="surface-card media-card">
            <img src="/assets/career-3.webp" alt="GCDA Career Counselling Workshop" width="1376" height="768" loading="lazy" decoding="async" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Career path"
              title="What kind of career can a certified counsellor build?"
              description="Career counsellors in India can work with students, parents, institutions, or professionals, depending on their strengths, network, and the depth of practice they develop after training."
            />
            <p>
              Some certified counsellors build independent practices, while others work with schools, colleges, NGOs, edtech firms, training institutes, or broader guidance ecosystems. Your growth depends on the audience you want to serve, your credibility, and how consistently you convert training into practice.
            </p>
            <p>
              The strongest long-term outcomes usually come from combining certification with supervised case work, strong communication, ethical standards, and specialisation in areas like stream selection, after-12th planning, assessments, or working-professional transitions.
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

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Career counsellor resources"
            title="Explore related qualification and salary topics"
            description="These support pages help aspiring counsellors understand the role, qualification path, and salary realities before choosing a certification route."
            center
          />
          <div className="card-grid city-grid">
            {[
              { href: '/how-to-become-career-counsellor-in-india', label: 'How to Become a Career Counsellor in India' },
              { href: '/career-counsellor-salary-in-india', label: 'Career Counsellor Salary in India' },
              { href: '/qualification-for-career-counsellor-in-india', label: 'Qualification for Career Counsellor in India' },
            ].map((item) => (
              <article className="card city-card" key={item.href}>
                <div className="card-body">
                  <h3><Link href={item.href}>{item.label}</Link></h3>
                  <Link href={item.href} className="text-link">Explore topic →</Link>
                </div>
              </article>
            ))}
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
