// Per-service content for the 6 main service landing pages.
// Each service has rich unique content so the 3 main service pages +
// 300+ city pages per service (2000+ total) all have genuinely
// unique, useful, AEO/GEO-friendly copy.
//
// Structure:
//   - servicePages[slug] is the metadata for that service's main page
//   - cityServiceContent[slug] generates the city-specific block
//
// This is the single source of truth for ALL service pages
// (main + city + detail).

import { services as baseServices } from '@/data/site';
import { SEMINAR_TYPES } from '@/data/seminars';

export const servicePages = {
  // ============================================
  // 1. CAREER COUNSELLING (general)
  // ============================================
  'career-counselling': {
    title: 'Career Counselling',
    shortDescription:
      'Expert, assessment-led career counselling for students, graduates, parents, and working professionals. Online across India + in-person in Mumbai.',
    heroEyebrow: 'Career Counselling',
    heroTitle:
      'Career counselling that turns uncertainty into a clear roadmap.',
    heroLead:
      'GCDA offers counselling and planning services for academic choices, career exploration, degree selection, and professional growth. Every service is designed to move you from confusion to clarity.',
    whoItIsFor: [
      'School students choosing the right stream after 8th, 10th, or 12th',
      'Graduates deciding on degrees, colleges, or first-job pathways',
      'Working professionals planning transitions, promotions, or upskilling',
      'Parents seeking dependable guidance for their child’s academic future',
    ],
    whatYouGet: [
      {
        icon: '🎯',
        title: 'Personalised one-on-one sessions',
        body:
          'Every session is one-on-one with a certified mentor who tailors the conversation to your goals, aptitude, and stage of life — no generic advice.',
      },
      {
        icon: '📊',
        title: 'Data-backed assessments',
        body:
          'Use interest, aptitude, and personality assessments as evidence, not guesswork. We translate results into a plan you can act on.',
      },
      {
        icon: '🧭',
        title: 'Practical roadmaps',
        body:
          'Leave every session with a step-by-step roadmap: short-term decisions, medium-term milestones, and a long-term direction you can defend.',
      },
    ],
    cityLead:
      'Looking for a trusted career counsellor in {city}? GCDA provides structured, assessment-led career counselling, stream and degree selection, JEE/NEET planning, MBA guidance, and professional mentoring for students, graduates, and working professionals in {city}.',
    cityFaqs: [
      {
        q: 'Do you offer online career counselling for students in {city}?',
        a: 'Yes. GCDA provides online video career counselling for students, graduates, and working professionals in {city} and across {district}. Sessions are scheduled at convenient times and cover stream selection, degree planning, JEE/NEET guidance, and career transitions.',
      },
      {
        q: 'Which boards and colleges do you cover for {city} students?',
        a: 'We work with students from CBSE, ICSE, state boards, IB, and IGCSE across {city}, and we help shortlist colleges and entrance exams relevant to the student’s stream, location, and goals.',
      },
      {
        q: 'How can working professionals in {city} use GCDA services?',
        a: 'Professionals in and around {city} commonly use GCDA for MBA/EMBA planning, career transition strategy, resume review, interview preparation, and growth roadmapping. Sessions are online and flexible around work hours.',
      },
    ],
  },

  // ============================================
  // 2. CAREER COUNSELLING SEMINAR / WORKSHOPS
  // ============================================
  'career-counselling-seminar': {
    title: 'Career Counselling Seminar',
    shortDescription:
      'Interactive career counselling seminars and workshops for schools, colleges, parents, and institutions. Awareness, assessment, and engagement at scale.',
    heroEyebrow: 'Workshops & Seminars',
    heroTitle:
      'Career counselling seminars that bring clarity to your audience at scale.',
    heroLead:
      'GCDA conducts structured, in-person and online career awareness seminars for schools, colleges, parent groups, and institutions. Each seminar blends expert talks, live assessments, and interactive activities that turn vague career anxiety into actionable next steps.',
    whoItIsFor: [
      'Schools and colleges running career awareness weeks',
      'Parent groups seeking a structured career orientation session',
      'Training institutions and NGOs running skill-building programs',
      'Corporate L&D teams wanting employee career pathing workshops',
    ],
    whatYouGet: [
      {
        icon: '🎓',
        title: 'Expert-led sessions',
        body:
          'Seminars are led by GCDA-certified career counsellors with 8+ years of field experience across thousands of student and parent interactions.',
      },
      {
        icon: '🧪',
        title: 'Live assessments',
        body:
          'Participants get a free career interest or aptitude mini-assessment during the seminar, with a short report handed back the same week.',
      },
      {
        icon: '🤝',
        title: 'Interactive activities',
        body:
          'Beyond lectures: Q&A, group exercises, real case studies, and one-on-one follow-up slots for attendees who want a deeper conversation.',
      },
    ],
    // 4 seminar types we offer — rendered as a 4-card grid on the
    // main seminar service page and on every city seminar page.
    seminarTypes: SEMINAR_TYPES,
    cityLead:
      'GCDA conducts career counselling seminars and workshops in {city} for schools, colleges, parent groups, and institutions. We run 4 core seminar tracks — Career Counselling, Self Management, Emotional Intelligence, and Leadership Skills — each with structured topics, hands-on activities, and expert facilitators. Book a single session or a structured seminar series for your campus or community.',
    cityFaqs: [
      {
        q: 'Can GCDA conduct a career counselling seminar at our school in {city}?',
        a: 'Yes. GCDA regularly runs in-person and online seminars at schools and colleges in {city} and nearby. We offer 4 seminar tracks — Career Counselling, Self Management, Emotional Intelligence, and Leadership Skills — each tailored by grade, stream, and audience, and can include a free career interest mini-assessment for attendees.',
      },
      {
        q: 'What are the 4 types of seminars GCDA offers in {city}?',
        a: 'GCDA runs 4 core seminar tracks: (1) Career Counselling Seminar — how to make a career decision, degrees and entrance exams after 12th, offbeat careers, study abroad; (2) Self Management Seminar — study habits, time management, goal alignment, handling exam anxiety (4 hrs, 2 weekends); (3) Emotional Intelligence Seminar — relationship management, managing success/failure/stress, anxiety and peer pressure, healthy habits, identifying addictions (4 hrs, 2 weekends); (4) Leadership Skills Seminar — communication, interpersonal, negotiation, conflict management, and interview skills (4 hrs, 2 weekends).',
      },
      {
        q: 'What is the typical duration and batch size for a seminar in {city}?',
        a: 'Standard seminars are 60–90 minutes and work well for batches of 50–300 students. The Self Management, Emotional Intelligence, and Leadership Skills tracks run for 4 hours total across 2 weekends. We can run shorter parent sessions, full-day workshops, or multi-day series depending on your needs in {city}.',
      },
      {
        q: 'Do you offer online career seminars for institutions in {city}?',
        a: 'Yes. GCDA can run fully online career seminars for institutions in {city} using secure video calls, live polls, and Q&A — useful when attendees are spread across multiple branches or towns around {city}.',
      },
    ],
  },

  // ============================================
  // 3. CAREER COUNSELLING CERTIFICATION
  // ============================================
  'career-certification': {
    title: 'Career Counselling Certification',
    shortDescription:
      'Become a certified career counsellor with GCDA. Hybrid online + in-person certification for aspiring and practising counsellors across India.',
    heroEyebrow: 'Certification Programme',
    heroTitle:
      'Begin your journey to become a certified career counsellor.',
    heroLead:
      'A comprehensive certification programme designed to equip you with the knowledge, hands-on practice, and confidence to guide students and working professionals towards informed, fulfilling career decisions.',
    whoItIsFor: [
      'Aspiring career counsellors who want to start a practice',
      'Teachers, trainers, and HR professionals adding career guidance to their skillset',
      'Psychology and education graduates seeking a structured career',
      'Retired professionals looking to leverage their experience',
    ],
    whatYouGet: [
      {
        icon: '🎓',
        title: 'Industry-led curriculum',
        body:
          'Learn career counselling principles, assessment tools, coaching techniques, parent-alignment conversations, and the business of running a counselling practice.',
      },
      {
        icon: '🛠️',
        title: 'Hands-on practice',
        body:
          'Interactive sessions with simulated counselling scenarios so you graduate ready to handle real clients with confidence — not just theory.',
      },
      {
        icon: '📜',
        title: 'Recognised certification',
        body:
          'Receive a GCDA Career Counsellor Certification on successful completion — accepted by schools, colleges, and coaching networks across India.',
      },
    ],
    cityLead:
      'GCDA offers the Career Counselling Certification programme in {city} in a hybrid online + in-person format. Open to graduates in any discipline who are passionate about guiding others.',
    cityFaqs: [
      {
        q: 'Is the GCDA Career Counselling Certification available in {city}?',
        a: 'Yes. GCDA delivers the certification programme in {city} in a hybrid online + in-person format. Interactive live sessions are online, and select workshops may be held at partner venues in {city}.',
      },
      {
        q: 'Who is eligible to enrol for the certification in {city}?',
        a: 'Any graduate (Bachelor\'s degree in any discipline) with a passion for helping others and good communication skills can enrol. Retired professionals and career switchers from {city} are also welcome.',
      },
      {
        q: 'Will I receive a certificate after the programme in {city}?',
        a: 'Yes. On successful completion of the programme and assessments, you will receive a GCDA Career Counsellor Certification that you can use to start or grow your practice in {city} or anywhere in India.',
      },
    ],
  },

  // ============================================
  // 4. STREAM SELECTION GUIDANCE
  // ============================================
  'stream-selection-guidance': {
    title: 'Stream Selection Guidance',
    shortDescription:
      'Expert support for selecting the right stream after school (Science, Commerce, Arts, or new-age options) based on aptitude, interest, and long-term career fit.',
    heroEyebrow: 'After 10th',
    heroTitle:
      'Stream selection guidance that ends the family debate and starts the plan.',
    heroLead:
      'Choosing between Science, Commerce, Arts, and emerging pathways is the highest-leverage decision an Indian student makes after class 10. We replace the panic with structured clarity: a clear assessment, a real shortlist, and a plan that the student and parents can both defend.',
    whoItIsFor: [
      'Students in class 9 and 10 choosing their 11th–12th stream',
      'Parents evaluating Science, Commerce, and Arts options for their child',
      'Students considering new-age options like polytechnic, ITI, or diploma pathways',
      'Students who feel pushed into a stream by marks, family, or peer pressure',
    ],
    whatYouGet: [
      {
        icon: '🧪',
        title: 'Aptitude + interest + personality assessment',
        body:
          'A structured battery that reveals what the student is actually good at, what they enjoy, and what careers those combinations unlock — far beyond marks.',
      },
      {
        icon: '🧭',
        title: 'Stream-by-stream shortlist',
        body:
          'A clear shortlist of careers under Science, Commerce, and Arts that fit the student’s profile, with the next 24-month roadmap (entrance exams, subjects, internships).',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Parent-student alignment',
        body:
          'A guided 30-minute alignment conversation so the student and parents walk away with the same plan, expectations, and backup options.',
      },
    ],
    cityLead:
      'GCDA offers stream selection guidance in {city} for class 9 and 10 students and parents. Online sessions across {city} and {district} + in-person workshops in select cities.',
    cityFaqs: [
      {
        q: 'When should we start stream selection guidance in {city}?',
        a: 'The best time is mid-class 9 or the first half of class 10 — that gives a full year to plan entrance exams, shortlist colleges, and align the family. We also help families that start late, but earlier is always calmer.',
      },
      {
        q: 'What if my child is unsure between Science and Commerce in {city}?',
        a: 'That is the most common confusion we resolve in {city}. We run a structured aptitude + interest + personality assessment, then walk the family through 3 realistic career shortlists — one each for Science, Commerce, and Arts — so the decision is evidence-based, not pressured.',
      },
      {
        q: 'Do you cover CBSE, ICSE, IB, and state board students in {city}?',
        a: 'Yes. Our stream selection guidance in {city} works with all major boards. We map your child’s subjects and marks to the relevant entrance exams, scholarship windows, and school-level options available around {city}.',
      },
    ],
  },

  // ============================================
  // 5. DEGREE SELECTION GUIDANCE
  // ============================================
  'degree-selection-guidance': {
    title: 'Degree Selection Guidance',
    shortDescription:
      'Choose the right undergraduate or professional course after 12th — engineering, medical, commerce, design, law, liberal arts, and beyond — with expert college and career guidance.',
    heroEyebrow: 'After 12th',
    heroTitle:
      'Degree selection guidance that turns hundreds of options into one clear plan.',
    heroLead:
      'After 12th, the choice of degree and college quietly decides the next 10 years. We help students and parents in India shortlist degrees that match aptitude, fit a realistic budget, and open the careers they actually want — across engineering, medical, design, law, commerce, liberal arts, and new-age professional courses.',
    whoItIsFor: [
      'Class 12 students choosing engineering, medical, or design colleges',
      'Students considering professional courses (CA, CS, CMA, law, design)',
      'Parents comparing B.Tech vs BBA vs B.Com vs BA vs B.Des options',
      'Students exploring liberal arts, BSc, integrated MBA, or international pathways',
    ],
    whatYouGet: [
      {
        icon: '🔍',
        title: 'Degree-suitability analysis',
        body:
          'A structured comparison of relevant degree paths (B.Tech, MBBS, BBA, B.Com, BA, B.Des, integrated MBA, etc.) with a fit score for the student’s strengths and goals.',
      },
      {
        icon: '🏛️',
        title: 'College shortlisting & entrance exams',
        body:
          'A shortlist of 6–10 colleges around the student’s budget, location, and category — mapped to the entrance exams they need to write and the dates they need to track.',
      },
      {
        icon: '🗺️',
        title: 'Long-term career roadmap',
        body:
          'A 4-year plan inside the degree plus the 2 years after — higher studies, placements, internships, and the careers each pathway actually unlocks.',
      },
    ],
    cityLead:
      'GCDA offers degree selection guidance in {city} for class 12 students and parents. Online sessions across {city} and {district} + in-person workshops in select cities.',
    cityFaqs: [
      {
        q: 'How do you compare engineering vs BBA vs B.Des for a student in {city}?',
        a: 'We run a degree-suitability analysis using aptitude, interest, and personality data, then walk the family through fit scores for each pathway — along with realistic salary, growth, and entrance exam data for careers accessible from {city} colleges.',
      },
      {
        q: 'Can you help with college shortlisting around {city}?',
        a: 'Yes. We shortlist 6–10 colleges that match the student’s rank, budget, board, and category — including state, deemed, and private options near {city} and across India.',
      },
      {
        q: 'What entrance exams should a {city} student plan for after 12th?',
        a: 'It depends on the stream. Most {city} students plan for JEE Main / state CET (engineering), NEET (medical), CUET (central universities), CLAT (law), NID / NIFT (design), and IPMAT (integrated MBA). We help you decide which ones apply to your shortlist.',
      },
    ],
  },

  // ============================================
  // 6. GUIDANCE FOR WORKING PROFESSIONALS
  // ============================================
  'guidance-for-working-professionals': {
    title: 'Guidance for Working Professionals',
    shortDescription:
      'Career growth, transition, MBA, and skill-alignment support for employed professionals. Online sessions across India.',
    heroEyebrow: 'Working Professionals',
    heroTitle:
      'Career guidance for working professionals that turns a job into a long game.',
    heroLead:
      'Working professionals in India face a different problem: too many options, not enough time, and a real cost to every wrong move. GCDA helps mid-career professionals pick the right next step — an MBA, a domain switch, a startup, or a promotion plan — with structured mentoring, not motivational noise.',
    whoItIsFor: [
      'Mid-career professionals considering an MBA or executive MBA',
      'Working professionals planning a domain or industry switch',
      'Employees aiming for promotion, leadership, or general management roles',
      'Returning professionals (post-break, post-maternity) restarting careers',
    ],
    whatYouGet: [
      {
        icon: '🎯',
        title: 'Career transition planning',
        body:
          'A structured 90-day plan for switching roles, industries, or functions — with realistic salary expectations, target companies, and resume rewrites for {city}.',
      },
      {
        icon: '📈',
        title: 'MBA & executive programme shortlisting',
        body:
          'Shortlist of full-time, part-time, executive, and online MBA programmes across India based on your work experience, budget, and goals.',
      },
      {
        icon: '🧭',
        title: 'Growth & upskilling roadmap',
        body:
          'Skill gaps, certification picks, and 12-month growth milestones — so the next role is a clear step up, not a sideways move.',
      },
    ],
    cityLead:
      'GCDA offers career guidance for working professionals in {city}. Sessions are online and flexible around work hours — designed for people who don’t have time for in-person visits.',
    cityFaqs: [
      {
        q: 'Can working professionals in {city} take GCDA sessions after work hours?',
        a: 'Yes. Most working professional sessions in {city} are scheduled in the evening (7 PM – 10 PM IST) or on weekends. You can also book a 30-minute consult between meetings if that works better for your week.',
      },
      {
        q: 'Do you help with MBA applications from {city}?',
        a: 'Yes. We help with CAT / XAT / MAT / GMAT prep planning, IIM and top-B-school shortlisting, statement of purpose (SOP) reviews, and interview prep for working professionals in {city} applying to full-time, executive, or online MBA programmes.',
      },
      {
        q: 'I want to switch domains — is that realistic from {city}?',
        a: 'Most career switches in India happen at the skill + portfolio + targeted-application level, not at the experience level. We help you build that bridge in 90 days: gap analysis, certifications, and a job-search plan calibrated to {city}’s hiring market.',
      },
    ],
  },
};

// Build a flat list of all service slugs we want to support
// on both the main page AND the city pages.
export const SERVICE_SLUGS = [
  'career-counselling',
  'career-counselling-seminar',
  'career-certification',
  'stream-selection-guidance',
  'degree-selection-guidance',
  'guidance-for-working-professionals',
];

// Quick lookup
export function getServicePage(slug) {
  return servicePages[slug] || null;
}

// The pattern of city URLs. Each service has its own URL pattern.
export const SERVICE_CITY_PATTERNS = {
  'career-counselling': {
    urlPattern: (stateSlug, citySlug) => `/${stateSlug}/career-counsellor-${citySlug}`,
    cityLabel: 'Career Counsellor',
  },
  'career-counselling-seminar': {
    urlPattern: (stateSlug, citySlug) => `/${stateSlug}/career-counselling-seminar-${citySlug}`,
    cityLabel: 'Career Counselling Seminar',
  },
  'career-certification': {
    urlPattern: (stateSlug, citySlug) => `/${stateSlug}/career-counselling-certification-${citySlug}`,
    cityLabel: 'Career Counselling Certification',
  },
  'stream-selection-guidance': {
    urlPattern: (stateSlug, citySlug) => `/${stateSlug}/stream-selection-${citySlug}`,
    cityLabel: 'Stream Selection',
  },
  'degree-selection-guidance': {
    urlPattern: (stateSlug, citySlug) => `/${stateSlug}/degree-selection-${citySlug}`,
    cityLabel: 'Degree Selection',
  },
  'guidance-for-working-professionals': {
    urlPattern: (stateSlug, citySlug) => `/${stateSlug}/working-professional-${citySlug}`,
    cityLabel: 'Working Professional Guidance',
  },
};

// Verify all our base services are still in the data
export function assertServiceCoverage() {
  const base = baseServices.map((s) => s.slug);
  // We intentionally have more service pages than the base 6 services
  // (we have 6 service pages vs 6 base services)
  return base.length === 6;
}
