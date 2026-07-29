export const company = {
  shortName: 'GCDA',
  name: 'Global Career Development Association',
  tagline: 'Empowering careers with personalised guidance since 2013.',
  phoneDisplay: '+91 91360 05039',
  phoneRaw: '919136005039',
  email: 'gcda.career@gmail.com',
  addressLine1: '102, Citi Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053',
  hours: [
    'Monday - Friday: 9:00 AM - 6:00 PM',
    'Saturday: 10:00 AM - 4:00 PM',
    'Sunday: Closed',
  ],
  whatsappLink: 'https://api.whatsapp.com/send?phone=919136005039',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/career-counselling', label: 'Services' },
  { href: '/career-certification', label: 'Certification' },
  { href: '/plan', label: 'Plans' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const statsHome = [
  { value: '50k+', label: 'Counsellings', note: 'Successful career consultations' },
  { value: '5k+', label: 'Expert Counsellors', note: 'Certified professionals' },
  { value: '10+', label: 'Years of Excellence', note: 'Trusted by thousands' },
  { value: '98%', label: 'Satisfaction', note: 'Students and families recommend GCDA' },
];

export const valuePoints = [
  {
    title: 'Personalised guidance',
    description:
      'Every student, parent, and working professional receives advice built around their goals, aptitude, and stage of life.',
  },
  {
    title: 'Actionable planning',
    description:
      'We turn uncertainty into a step-by-step roadmap covering stream selection, degree planning, skill development, and career progression.',
  },
  {
    title: 'Trusted expertise',
    description:
      'Our counsellors combine experience, structured assessments, and mentoring support to help clients move forward with confidence.',
  },
];

export const audience = [
  'School students choosing the right stream after 8th, 10th, or 12th',
  'Graduates deciding on degrees, colleges, or first-job pathways',
  'Working professionals planning transitions, promotions, or upskilling',
  'Parents seeking dependable guidance for their child’s academic future',
];

export const plans = [
  {
    slug: 'stream-selector',
    name: 'Stream Selector',
    price: 'Rs. 2999',
    note: 'one-time',
    eyebrow: 'Perfect for students deciding their educational path',
    features: [
      '3rd Std to 10th Science/Commerce/Arts',
      'Career Interest, Aptitude, Personality Test',
      'Career Assessment Report to shortlist appropriate Stream',
      'Face to Face/Video Counselling with Mentor',
      'Post Counselling Services: Student Helpline',
      '3 Aspired Careers suitability Analysis',
    ],
  },
  {
    slug: 'degree-selector',
    name: 'Degree Selector',
    price: 'Rs. 3499',
    note: 'one-time',
    badge: 'Most Popular',
    eyebrow: 'Ideal for choosing the right degree program',
    features: [
      'All features from Stream Selector',
      'In-depth degree program analysis',
      'University and college recommendations',
      'Admission process guidance',
      'Future career prospects analysis',
      'Personalized roadmap for academic success',
    ],
  },
  {
    slug: 'working-professionals',
    name: 'Working Professionals',
    price: 'Rs. 3999',
    note: 'one-time',
    eyebrow: 'Designed for career advancement and transitions',
    features: [
      'All features from Degree Selector',
      'Career transition strategy',
      'Industry-specific guidance',
      'Professional skill assessment',
      'Networking and mentorship opportunities',
      'Resume and interview preparation',
      'Career growth roadmap',
    ],
  },
];

export const services = [
  {
    slug: 'personal-counselling',
    title: 'Personal Counselling',
    icon: '🎯',
    image: '/assets/career-1.webp',
    shortDescription:
      'One-on-one guidance sessions designed around the individual student or professional — assessment-led, mentor-driven, and structured for real outcomes.',
    heroDescription:
      'Build confidence, gain clarity, and move ahead with a mentor-led counselling process tailored to your unique goals, aptitude, and stage of life.',
    // Long-form description rendered in a "What is" section on the detail page.
    longDescription:
      'Personal counselling at GCDA is a private, one-on-one session between you and a certified career counsellor. Unlike group workshops or generic online quizzes, every minute of the session is about you — your background, your doubts, your goals, and the real-world options that fit. We pair structured questioning with light assessment to surface strengths, blockers, and short-term next steps you can actually act on. Sessions work equally well for school students choosing a stream, graduates comparing first-job paths, parents trying to support a child, and working professionals planning a switch or an MBA.',
    // Top-level "Why this matters" intro shown above the bullet benefits.
    whyItMatters:
      'Most career confusion is not about lack of information — it is about too much information, family pressure, and fear of an irreversible choice. Personal counselling is the fastest way to cut through that noise with an expert who has seen thousands of similar profiles and can give you an honest, structured answer.',
    // Bullet benefits shown in the "What you get" grid.
    benefits: [
      'A private 60–90 minute session with a certified GCDA mentor',
      'Honest assessment of your strengths, interests, and learning style',
      'Blocker mapping (family pressure, money fear, indecision) and how to handle each',
      'A personalised 2–3 step action plan with dates and checkpoints',
      'Written session summary you can revisit later',
      'Optional 30-minute follow-up call within 14 days',
    ],
    idealFor: [
      'School students (classes 8–12) confused about stream, subject, or board choice',
      'Graduates torn between two or more degree or job options',
      'Parents who need a neutral, expert opinion to support their child',
      'Working professionals stuck in a role and unsure what to do next',
      'Returning professionals (post-break, post-maternity) restarting careers',
      'Anyone facing a high-stakes decision they cannot afford to get wrong',
    ],
    outcomes: [
      'Clear, ranked list of 2–3 next-step options with reasoning',
      'Better self-awareness of strengths, interests, and motivations',
      'A practical 30 / 60 / 90-day action plan with clear checkpoints',
      'Confidence to defend your decision to family and peers',
      'Clearer fit between your goals and realistic career paths',
      'Reduced decision-related anxiety within the first session',
    ],
    includes: [
      'Pre-session profile form (background, marks, interests, constraints)',
      '60–90 minute live one-on-one session with a certified mentor',
      'Lightweight aptitude and interest mini-assessment (if relevant)',
      'Strengths, blockers, and shortlist of next steps',
      'Personalised 2–3 step written action plan with dates',
      'Resource pack: relevant colleges, exams, scholarships, courses',
      '30-minute follow-up call within 14 days (optional)',
    ],
    // How it works — 5 detailed steps with rich descriptions
    steps: [
      {
        title: 'Pre-session profile',
        body:
          'You fill a short profile form (10 minutes) covering your background, marks, interests, family constraints, and a one-line question. This lets the mentor prepare before the call.',
      },
      {
        title: 'Goal and blocker mapping',
        body:
          'In the live session, the mentor first maps what you actually want (and what you are afraid of) so the conversation is anchored to your real life, not generic advice.',
      },
      {
        title: 'Strengths and options scan',
        body:
          'Together you scan the realistic options — streams, degrees, jobs, or transitions — and shortlist 2–3 that genuinely fit. The mentor pushes back where needed.',
      },
      {
        title: 'Written action plan',
        body:
          'You walk away with a 2–3 step written plan: what to do, by when, and what success looks like. A PDF summary is emailed within 24 hours.',
      },
      {
        title: 'Optional follow-up',
        body:
          'A 30-minute follow-up call within 14 days is included to review progress, answer new questions, and adjust the plan if life has changed.',
      },
    ],
    // 8 detailed FAQs covering common doubts (AEO-friendly Q&A)
    faqs: [
      {
        q: 'Is personal counselling suitable for younger students?',
        a: 'Yes. Sessions are adapted for school students, college students, and professionals. For students under 16, we strongly recommend a parent joining at least the last 15 minutes for family alignment.',
      },
      {
        q: 'Can my parents join the counselling session?',
        a: 'Absolutely. For students in classes 8–12, parent involvement is usually helpful. We typically run the first 60 minutes 1-on-1 with the student, then invite the parent in for a 15–20 minute alignment conversation.',
      },
      {
        q: 'How long is a personal counselling session?',
        a: 'A standard session is 60–90 minutes. Extended sessions (up to 120 minutes) are available for complex cases at no extra cost.',
      },
      {
        q: 'Do I need to prepare anything before the session?',
        a: 'Just fill a short profile form we email you 24 hours before. No marks sheets, no special documents — bring questions, not files.',
      },
      {
        q: 'How is personal counselling different from career assessment?',
        a: 'Assessment is data — what your strengths and interests look like. Personal counselling is the human conversation that turns that data into a specific plan for you. Most clients do both, in that order.',
      },
      {
        q: 'Will I get a written summary after the session?',
        a: 'Yes. Within 24 hours you receive a one-page PDF with the key takeaways, action plan, and recommended next steps. You can share it with parents or mentors.',
      },
      {
        q: 'Can I book a second session later?',
        a: 'Yes. Many clients book a second session 3–6 months later to review progress or tackle a new decision. Single sessions are available — no package required.',
      },
      {
        q: 'Is personal counselling confidential?',
        a: 'Yes. What you share in the session stays between you and the mentor. We only share the written summary if you explicitly ask us to.',
      },
    ],
    // Cities we serve (used for cross-link grid on detail page)
    popularCities: [
      { state: 'Maharashtra', city: 'Mumbai' },
      { state: 'Karnataka', city: 'Bengaluru' },
      { state: 'Delhi', city: 'New Delhi' },
      { state: 'Tamil Nadu', city: 'Chennai' },
      { state: 'Telangana', city: 'Hyderabad' },
      { state: 'West Bengal', city: 'Kolkata' },
    ],
  },

  {
    slug: 'career-assessment',
    title: 'Career Assessment',
    icon: '📊',
    image: '/assets/career-2.webp',
    shortDescription:
      'Structured aptitude, interest, and personality assessments that turn data into the right stream, degree, or career shortlist — not a personality quiz.',
    heroDescription:
      'Make informed decisions using data-backed assessments that reveal strengths, interests, and suitable pathways — combined with a mentor-led debrief.',
    longDescription:
      'A career assessment at GCDA combines multiple validated instruments — numerical aptitude, verbal reasoning, abstract thinking, interest (RIASEC-style), and personality (Big-Five traits) — into a single, easy-to-understand profile. You do not just get a label like "creative" or "leader" — you get a fit score for every relevant stream, degree, and career cluster, based on your actual strengths. A trained psychologist scores your responses, then a GCDA mentor walks you through the results in a 30-minute video call. The output is a printed, plain-language report you can act on, not a horoscope-style result.',
    whyItMatters:
      'Free online quizzes give you a personality label. A real career assessment gives you evidence: which streams match your strengths, which careers are realistic given your aptitude, and which paths you are most likely to enjoy and succeed in. For high-stakes decisions like stream or degree selection, evidence beats intuition.',
    benefits: [
      'Multi-instrument assessment (aptitude + interest + personality)',
      'Fit score for every relevant stream, degree, and career cluster',
      'Printed, plain-language report you can act on (not a horoscope)',
      '30-minute mentor-led debrief video call',
      'Comparison with careers that match your strengths',
      'Re-take option after 12 months (skills and interests evolve)',
    ],
    idealFor: [
      'Students choosing between Science, Commerce, and Arts after 10th',
      'Class 12 students comparing engineering, medical, design, law, commerce, or liberal arts',
      'Graduates comparing MBA, civil services, design, product, or technical roles',
      'Working professionals assessing fit for a domain switch or higher education',
      'Parents who want objective data to support their child’s stream or degree choice',
      'Schools and colleges running structured career awareness for batches of students',
    ],
    outcomes: [
      'A shortlist of 5 careers that match your strengths and motivations',
      'Realistic fit score for each shortlisted option',
      'Clear understanding of which options to drop and which to explore further',
      'Evidence-based language to defend your decision to family',
      'Direction for short-term action (subjects, internships, certifications)',
      'Confidence boost from data, not guesswork',
    ],
    includes: [
      'Online assessment battery (90–120 minutes, can pause)',
      'Numerical, verbal, abstract, and spatial aptitude tests',
      'Interest inventory (RIASEC-style) and personality inventory (Big-Five)',
      'Psychologist-scored personalised report (PDF + print)',
      '30-minute mentor-led video debrief to interpret the report',
      'Career fit shortlist with 5 specific roles/degrees for your profile',
      'Realistic salary, growth, and entrance-exam data for each shortlist item',
      'Re-take eligibility after 12 months',
    ],
    steps: [
      {
        title: 'Profile and goal intake',
        body:
          'You fill a 10-minute profile form so we know which streams, degrees, or career clusters to score you against (no point scoring a 15-year-old on MBA fit).',
      },
      {
        title: 'Online assessment battery',
        body:
          'You complete the assessment in one sitting (90–120 minutes) or across multiple sittings. We recommend a quiet 2-hour window with no distractions.',
      },
      {
        title: 'Psychologist scoring',
        body:
          'A trained psychologist scores your responses, builds your profile, and computes fit scores for every relevant career cluster. This is manual, not a script.',
      },
      {
        title: 'Personalised report',
        body:
          'You receive a printed-style PDF report (12–15 pages) with your scores, what they mean in plain English, and a 5-item shortlist of careers that fit your profile.',
      },
      {
        title: 'Mentor-led debrief',
        body:
          'A 30-minute video call with a GCDA mentor to interpret the report, answer your questions, and turn the shortlist into 2–3 actionable next steps.',
      },
    ],
    faqs: [
      {
        q: 'What does the GCDA career assessment actually measure?',
        a: 'We measure numerical aptitude, verbal reasoning, abstract thinking, spatial ability, interest (RIASEC-style: Realistic, Investigative, Artistic, Social, Enterprising, Conventional), and personality (Big-Five traits). Together, these map you to streams, degrees, and careers that match your strengths and motivations — not just your marks.',
      },
      {
        q: 'Is the GCDA career assessment different from free online quizzes?',
        a: 'Yes. Free quizzes give you a personality label. Our assessment uses multiple validated instruments, is scored by trained psychologists, and ends with a mentor-led debrief that translates scores into 5 specific career options you can act on.',
      },
      {
        q: 'How long does the career assessment take?',
        a: 'The online assessment takes 90–120 minutes (you can pause and resume). The mentor debrief call is 30 minutes. The full report is delivered within 3 business days after the debrief.',
      },
      {
        q: 'Will I receive a printed report?',
        a: 'Yes. We deliver a 12–15 page PDF designed to be printed, plus a readable on-screen version. The report includes your scores, what they mean, the 5-item shortlist, and 2–3 next-step recommendations.',
      },
      {
        q: 'Is the assessment suitable for class 10 students?',
        a: 'Yes. We use age-appropriate language and scoring for students in classes 9 and 10. For students under 14, a parent or teacher should be present during the online test.',
      },
      {
        q: 'Can the assessment be done in Hindi?',
        a: 'Yes. The instrument is available in both English and Hindi. Let us know your preference at the time of booking.',
      },
      {
        q: 'What if my results conflict with what I want to do?',
        a: 'That is a common situation and exactly what the mentor debrief is for. We do not force a decision — we surface the conflict honestly and help you weigh it with practical context (salary, growth, family fit).',
      },
      {
        q: 'Can I re-take the assessment?',
        a: 'Yes. Re-takes are available after 12 months, which is the typical interval for major shifts in skills or interests (after a degree, after a first job, etc.).',
      },
    ],
    popularCities: [
      { state: 'Maharashtra', city: 'Mumbai' },
      { state: 'Karnataka', city: 'Bengaluru' },
      { state: 'Delhi', city: 'New Delhi' },
      { state: 'Tamil Nadu', city: 'Chennai' },
      { state: 'Telangana', city: 'Hyderabad' },
      { state: 'West Bengal', city: 'Kolkata' },
    ],
  },

  {
    slug: 'workshops-seminars',
    title: 'Workshops & Seminars',
    icon: '🎓',
    image: '/assets/career-3.webp',
    shortDescription:
      'Interactive career awareness sessions for schools, colleges, parents, and institutions — delivered on-campus or online across India.',
    heroDescription:
      'Deliver structured awareness programs on careers, stream selection, higher education, and employability skills — at scale, with measurable outcomes.',
    longDescription:
      'GCDA runs structured career awareness workshops and seminars for schools, colleges, parent groups, and institutions. Each session is led by a GCDA-certified career counsellor and tailored to the audience — class 10 students about to pick a stream, class 12 students choosing a degree, fresh graduates entering the workforce, or working professionals planning their next move. We run four core seminar tracks (Career Counselling, Self Management, Emotional Intelligence, Leadership Skills), each with a defined agenda, facilitator notes, and take-home resources. Sessions work equally well in a school auditorium, a college seminar hall, or a corporate training room — and online via secure video calls with live polls and Q&A.',
    whyItMatters:
      'Generic career talks ("work hard, follow your passion") do not change decisions. Our workshops do, because each session is structured around a specific audience and ends with a clear next step — a one-page action plan every participant can take home.',
    benefits: [
      '4 dedicated seminar tracks (Career, Self Management, Emotional Intelligence, Leadership)',
      'Tailored content for the audience (class, age, role, industry)',
      'Live polls, Q&A, and breakout activities — not just lectures',
      'Free career interest mini-assessment for every participant',
      'Take-home action plan and resource pack',
      'Customised for batches from 50 to 1000+ participants',
    ],
    idealFor: [
      'Schools running career awareness weeks for classes 8–12',
      'Colleges running first-year orientation or final-year placement prep',
      'Parent groups seeking a structured career orientation session',
      'Training institutions and NGOs running skill-building programs',
      'Corporate L&D teams wanting employee career pathing workshops',
      'Edtech and education brands running co-branded seminars',
    ],
    outcomes: [
      'Higher career awareness and self-knowledge in the audience',
      'Better decision readiness among students or employees',
      'Stronger engagement between the institution and its audience',
      'Tangible next steps (action plan + resource pack) for every participant',
      'Mini-assessment report delivered within a week',
      'Measurable pre/post awareness improvement via optional survey',
    ],
    includes: [
      'Pre-event alignment call to understand audience, goals, and constraints',
      'Tailored session agenda and slide deck (60–90 min or 4-hour formats)',
      'Live polls, Q&A, and breakout activities',
      'Free career interest mini-assessment for participants',
      'Take-home action plan template (one per participant)',
      'Resource pack: relevant colleges, exams, scholarships, courses',
      'Post-session report: attendance, engagement, top questions asked',
      'Optional follow-up: 30-minute group Q&A call 2 weeks later',
    ],
    steps: [
      {
        title: 'Alignment call',
        body:
          'We start with a 30-minute call to understand the audience size, age range, prior exposure, and specific outcomes you want (engagement, awareness, lead capture, etc.).',
      },
      {
        title: 'Tailored agenda',
        body:
          'Within 3 business days we share a tailored agenda with session objectives, topics, activities, and take-home resources. You can request edits before the live date.',
      },
      {
        title: 'Pre-event kit',
        body:
          'You receive a one-page host kit: how to set up the room or video call, what to print, suggested host intro, and a checklist for the day of the event.',
      },
      {
        title: 'Live session',
        body:
          'A GCDA-certified facilitator runs the session using the tailored agenda, live polls, and breakout activities. Sessions can be in English, Hindi, or a mix.',
      },
      {
        title: 'Post-event report and follow-up',
        body:
          'Within 7 days, you receive a post-event report (attendance, engagement, top questions) and the option of a 30-minute group Q&A call 2 weeks later.',
      },
    ],
    faqs: [
      {
        q: 'What sizes of audiences can you handle?',
        a: 'We run sessions for batches of 50 to 1000+ participants. Smaller batches get a more interactive format with role-plays; larger batches get a more presentation-driven format with live polls.',
      },
      {
        q: 'Can workshops be conducted online?',
        a: 'Yes. Online sessions work well via secure video calls with live polls, breakout rooms, and Q&A. The trade-off is slightly less interaction than in-person, but we keep the structure tight.',
      },
      {
        q: 'Do you customise sessions for institutions?',
        a: 'Yes. Every session is tailored by audience, age, prior exposure, and outcomes you want. We do not run a generic talk.',
      },
      {
        q: 'What languages are sessions available in?',
        a: 'English, Hindi, and a mix. We can also arrange Marathi, Tamil, Telugu, Kannada, Bengali, and Gujarati sessions on request (extra lead time).',
      },
      {
        q: 'How long is a typical workshop?',
        a: 'Standard sessions are 60–90 minutes. The Self Management, Emotional Intelligence, and Leadership Skills tracks run for 4 hours across 2 weekends. Custom half-day or full-day formats are also available.',
      },
      {
        q: 'Do participants get any take-home material?',
        a: 'Yes. Every participant gets a one-page action plan, a resource pack (PDF), and an optional free career interest mini-assessment with a short report.',
      },
      {
        q: 'Is there a follow-up after the session?',
        a: 'Optional. We can run a 30-minute group Q&A call 2 weeks after the session, or a 1:1 follow-up for any participant who wants deeper guidance.',
      },
      {
        q: 'How far in advance do I need to book?',
        a: 'For online sessions: 7 days. For in-person sessions: 21 days (to arrange travel and venue logistics). Rush bookings are possible with a small premium.',
      },
    ],
    popularCities: [
      { state: 'Maharashtra', city: 'Mumbai' },
      { state: 'Karnataka', city: 'Bengaluru' },
      { state: 'Delhi', city: 'New Delhi' },
      { state: 'Tamil Nadu', city: 'Chennai' },
      { state: 'Uttar Pradesh', city: 'Lucknow' },
      { state: 'Rajasthan', city: 'Jaipur' },
    ],
  },

  {
    slug: 'stream-selection-guidance',
    title: 'Stream Selection Guidance',
    icon: '🧭',
    image: '/assets/career-4.webp',
    shortDescription:
      'Stream selection after 10th – Science, Commerce, Arts guidance based on aptitude, interest & career fit.',
    heroDescription:
      'Choose between Science, Commerce, Arts, and emerging pathways with clarity instead of pressure or confusion — and a plan both you and your parents can defend.',
    longDescription:
      'Stream selection after class 10 is the highest-leverage decision an Indian student makes — it quietly shapes the next 8 to 12 years of education, exams, and career options. GCDA’s stream selection guidance replaces panic with structured clarity. We run a multi-instrument assessment (aptitude, interest, personality), walk the family through realistic career shortlists under each stream (Science, Commerce, Arts, and new-age options like polytechnic, ITI, diploma), and end with a 30-minute parent-student alignment conversation so the family walks away with the same plan, expectations, and backup options. The result is a stream choice that reflects the student’s strengths and the family’s reality, not just marks or peer pressure.',
    whyItMatters:
      'Marks open doors, but aptitude, interest, and family fit decide which door leads to a sustainable career. A bad stream choice can cost 2–4 years of course corrections and lakhs in re-admission fees. Our guidance helps you avoid that.',
    benefits: [
      'Multi-instrument assessment (aptitude, interest, personality)',
      'Realistic career shortlists under Science, Commerce, Arts, and new-age options',
      'Parent-student alignment conversation (usually the make-or-break)',
      'Backup options and 2-year flexibility plan',
      'List of relevant entrance exams and scholarship windows',
      'A written stream-choice rationale to share with family',
    ],
    idealFor: [
      'Students in class 9 or 10 choosing their 11th–12th stream',
      'Parents evaluating Science, Commerce, and Arts options for their child',
      'Students considering new-age options like polytechnic, ITI, or diploma',
      'Students pushed into a stream by marks, family, or peer pressure',
      'Schools running structured stream selection for their class 10 batch',
    ],
    outcomes: [
      'Clear shortlist of 2–3 realistic streams for the student’s profile',
      'Honest list of careers unlocked by each shortlisted stream',
      'Aligned understanding between student and parents',
      'A stream choice that reflects strengths, not just marks',
      'Backup stream option in case the primary choice does not work out',
      'List of 5–8 entrance exams and scholarship windows to track',
    ],
    includes: [
      'Aptitude, interest, and personality assessment',
      'Realistic career shortlists under Science, Commerce, and Arts',
      'Subject-level fit analysis (Physics, Math, Commerce, Humanities, etc.)',
      'Parent-student alignment conversation (30 minutes)',
      'Written stream-choice rationale (1-page PDF)',
      'Backup options and 2-year flexibility plan',
      'List of entrance exams and scholarship windows',
    ],
    steps: [
      {
        title: 'Profile and context',
        body:
          'We collect the student’s marks (preliminary or final), interests, family constraints, and any career ideas already in play. This sets the scope.',
      },
      {
        title: 'Multi-instrument assessment',
        body:
          'The student completes a 90–120 minute online assessment covering aptitude, interest, and personality. This is what makes our guidance evidence-based, not guess-based.',
      },
      {
        title: 'Stream shortlist',
        body:
          'A GCDA mentor prepares a shortlist of 2–3 streams with realistic careers under each, fit scores, and the relevant entrance exams and scholarship windows.',
      },
      {
        title: 'Family alignment session',
        body:
          'We run a 30-minute video call with the student and parents to walk through the shortlist, answer questions, and reach a decision everyone can defend.',
      },
      {
        title: 'Written plan',
        body:
          'You walk away with a 1-page stream-choice rationale, backup options, and a list of the 5–8 entrance exams to track in the next 12 months.',
      },
    ],
    faqs: [
      {
        q: 'Is stream selection only about marks?',
        a: 'No. Marks open doors, but aptitude, interest, and family fit decide which door leads to a sustainable career. Our guidance weighs all four.',
      },
      {
        q: 'When should we start stream selection guidance?',
        a: 'Ideally mid-class 9 or the first half of class 10. That gives a full year to plan entrance exams, shortlist colleges, and align the family. We also help families that start late.',
      },
      {
        q: 'What if my child is unsure between Science and Commerce?',
        a: 'That is the most common confusion we resolve. We run the assessment, then walk the family through 3 realistic shortlists — one each for Science, Commerce, and Arts — so the decision is evidence-based, not pressured.',
      },
      {
        q: 'Can students change direction later?',
        a: 'Yes, but early clarity often makes future decisions easier and more cost-effective. We also build a 2-year backup plan so a mid-course correction is possible without losing years.',
      },
      {
        q: 'Do you cover CBSE, ICSE, IB, and state board students?',
        a: 'Yes. We work with all major boards. We map the student’s subjects and marks to the relevant entrance exams, scholarship windows, and school-level options available around your city.',
      },
      {
        q: 'What about new-age options like polytechnic, ITI, or diploma?',
        a: 'We cover them seriously. For students whose fit profile points to hands-on or vocational careers, a polytechnic diploma after 10th can be a faster, more affordable path than a generic 11th–12th + degree route.',
      },
      {
        q: 'Is there a parent component?',
        a: 'Yes. We strongly recommend a 30-minute parent-student alignment conversation at the end, so the family walks away with the same plan and expectations.',
      },
      {
        q: 'How long does the whole process take?',
        a: 'From intake to written plan: 5–7 days. The live alignment call is typically 1 week after the assessment, leaving time for the family to reflect.',
      },
    ],
    popularCities: [
      { state: 'Maharashtra', city: 'Mumbai' },
      { state: 'Karnataka', city: 'Bengaluru' },
      { state: 'Delhi', city: 'New Delhi' },
      { state: 'Tamil Nadu', city: 'Chennai' },
      { state: 'Telangana', city: 'Hyderabad' },
      { state: 'Uttar Pradesh', city: 'Lucknow' },
    ],
  },

  {
    slug: 'degree-selection-guidance',
    title: 'Degree Selection Guidance',
    icon: '🏫',
    image: '/assets/career-5.webp',
    shortDescription:
      'Degree selection after 12th – engineering, medical, design, law, commerce, liberal arts. Expert college guidance.',
    heroDescription:
      'Compare degree pathways, institutions, and future opportunities before committing to a college plan — and align with your family on budget, location, and goals.',
    longDescription:
      'After class 12, the choice of degree and college quietly decides the next 10 years. GCDA’s degree selection guidance helps students and parents in India shortlist degrees that match aptitude, fit a realistic budget, and open the careers they actually want — across engineering, medical, design, law, commerce, liberal arts, integrated MBA, and new-age professional courses. We run a degree-suitability analysis using the student’s marks, aptitude, and interests, then walk the family through 6–10 colleges that match the student’s rank, budget, board, and category — mapped to the entrance exams they need to write and the dates they need to track. The output is a 4-year plan inside the degree plus a 2-year view beyond it (higher studies, placements, internships, real career options).',
    whyItMatters:
      'A wrong degree choice can cost 4 years of fees, lakhs in opportunity cost, and a forced restart. A right choice — even at a modest college — opens far more doors than students realise. Our guidance helps families see the full picture before committing.',
    benefits: [
      'Degree-suitability analysis across 10+ course families',
      'College shortlist of 6–10 institutions matching rank, budget, and category',
      'Entrance exam calendar with dates, fees, and prep tips',
      '4-year plan inside the degree + 2-year view beyond it',
      'Realistic salary, growth, and career data for each shortlisted degree',
      'Family alignment on budget, location, and goals',
    ],
    idealFor: [
      'Class 12 students choosing engineering, medical, or design colleges',
      'Students considering professional courses (CA, CS, CMA, law, design)',
      'Parents comparing B.Tech vs BBA vs B.Com vs BA vs B.Des options',
      'Students exploring liberal arts, BSc, integrated MBA, or international pathways',
      'Students unsure between engineering branches (CSE vs ECE vs Mechanical, etc.)',
    ],
    outcomes: [
      'A shortlist of 2–3 degree paths that genuinely fit the student’s profile',
      'A 6–10 college shortlist with realistic admits for the student’s rank',
      'An entrance exam calendar with priority order and prep tips',
      'A 4-year roadmap inside the chosen degree + 2-year view after',
      'Career options for each shortlisted degree with realistic salary data',
      'Aligned family understanding of budget, location, and trade-offs',
    ],
    includes: [
      'Degree-suitability analysis across 10+ course families',
      'Realistic career shortlist with fit scores',
      'College shortlist of 6–10 institutions (rank, budget, category matched)',
      'Entrance exam calendar with dates, fees, and prep tips',
      '4-year plan inside the degree + 2-year view beyond it',
      'Salary, growth, and career data for each shortlisted degree',
      'Family alignment session (60 minutes)',
      'Written action plan (1-page PDF)',
    ],
    steps: [
      {
        title: 'Profile and rank intake',
        body:
          'We collect marks, expected rank, board, budget range, location preference, and any courses the student is already considering. This filters the universe of options.',
      },
      {
        title: 'Degree-suitability analysis',
        body:
          'We run an analysis using the student’s profile, aptitude, and interests to identify 2–3 degree paths that genuinely fit. Common match patterns: engineering + design for creative-technical, BBA + commerce for business-oriented, BA + law for argumentative-readers.',
      },
      {
        title: 'College shortlisting',
        body:
          'We build a 6–10 college shortlist that matches the student’s rank, budget, board, and category — including state, deemed, and private options near your city and across India.',
      },
      {
        title: 'Entrance exam calendar',
        body:
          'We share an entrance exam calendar with dates, fees, syllabus, and prep tips — with priority order (which exams to take first based on admit probability).',
      },
      {
        title: '4-year + 2-year plan',
        body:
          'You walk away with a 4-year plan inside the degree (internships, projects, electives) and a 2-year view after (higher studies, placements, real career options).',
      },
    ],
    faqs: [
      {
        q: 'How do you compare engineering vs BBA vs B.Des for a student?',
        a: 'We run a degree-suitability analysis using aptitude, interest, and personality data, then walk the family through fit scores for each pathway — along with realistic salary, growth, and entrance exam data for careers accessible from each degree.',
      },
      {
        q: 'Can you help with college shortlisting?',
        a: 'Yes. We shortlist 6–10 colleges that match the student’s rank, budget, board, and category — including state, deemed, and private options near your city and across India.',
      },
      {
        q: 'What entrance exams should a student plan for after 12th?',
        a: 'It depends on the stream. Most students plan for JEE Main / state CET (engineering), NEET (medical), CUET (central universities), CLAT (law), NID / NIFT (design), and IPMAT (integrated MBA). We help you decide which ones apply to your shortlist.',
      },
      {
        q: 'What if my rank is borderline for my preferred college?',
        a: 'We build a tiered shortlist: 2–3 "aspirational" colleges (where admission is possible but not guaranteed), 2–3 "likely" colleges (where admission is realistic), and 2–3 "safe" colleges (where admission is highly probable). This protects against single-application risk.',
      },
      {
        q: 'Is there a parent component?',
        a: 'Yes. A 60-minute family alignment session is included so the student and parents agree on budget, location, and trade-offs (e.g., accepting a lower-ranked college for a stronger department).',
      },
      {
        q: 'Do you cover NRI / international options?',
        a: 'We cover Indian options in detail. For students seriously considering international undergraduate programs, we can do a focused 1-hour consult covering US, UK, Canada, Australia, and Singapore paths — at an additional fee.',
      },
      {
        q: 'What about new-age options like BSc in AI or BBA in Business Analytics?',
        a: 'Yes, we cover them. New-age programs (Data Science, AI/ML, FinTech, UX Design, Sports Management, etc.) are part of our degree-suitability analysis, with realistic data on placements and growth.',
      },
      {
        q: 'How long does the whole process take?',
        a: 'From intake to written plan: 5–7 days. The live family alignment call is typically scheduled within 1 week of the analysis, ahead of the first entrance exam date.',
      },
    ],
    popularCities: [
      { state: 'Maharashtra', city: 'Mumbai' },
      { state: 'Karnataka', city: 'Bengaluru' },
      { state: 'Delhi', city: 'New Delhi' },
      { state: 'Tamil Nadu', city: 'Chennai' },
      { state: 'Telangana', city: 'Hyderabad' },
      { state: 'Uttar Pradesh', city: 'Lucknow' },
    ],
  },

  {
    slug: 'working-professionals-guidance',
    title: 'Guidance for Working Professionals',
    icon: '💼',
    image: '/assets/career-6.webp',
    shortDescription:
      'Career growth, transition, MBA, and skill-alignment support for employed professionals — online sessions designed around work hours.',
    heroDescription:
      'Plan career transitions, improve positioning, and pursue higher-value opportunities with structured mentoring — not motivational noise.',
    longDescription:
      'Working professionals in India face a different problem: too many options, not enough time, and a real cost to every wrong move. GCDA helps mid-career professionals pick the right next step — an MBA, a domain switch, a startup, or a promotion plan — with structured mentoring. We start with a 60-minute intake to understand current role, pain points, and 2-year aspirations. Then we map realistic transitions (industry, function, role level), shortlist relevant MBA or executive programs, and build a 90-day execution plan covering resume rewrites, interview prep, skill gaps, and target companies. Sessions are online and flexible around your work hours — evenings, weekends, or a 30-minute consult between meetings.',
    whyItMatters:
      'A wrong career move at 30 costs more than a wrong move at 22 — financially, in lost years, and in family disruption. A right move compounds. Our guidance helps you tell the difference.',
    benefits: [
      '60-minute intake mapped to your 2-year aspiration',
      'Realistic transition map: industry, function, role, and salary band',
      'Shortlist of MBA / executive / certification programs matched to your profile',
      '90-day execution plan (resume, LinkedIn, interview prep, target companies)',
      'Online sessions timed around your work hours',
      'Optional 30-minute follow-up within 30 days',
    ],
    idealFor: [
      'Mid-career professionals considering an MBA or executive MBA',
      'Working professionals planning a domain or industry switch',
      'Employees aiming for promotion, leadership, or general management roles',
      'Returning professionals (post-break, post-maternity) restarting careers',
      'First-time managers seeking structured leadership mentoring',
      'Senior professionals considering independent practice or consulting',
    ],
    outcomes: [
      'Clear next move (MBA, switch, promotion, or stay) with reasoning',
      'Realistic salary, role, and timeline expectations',
      'Shortlist of 3–5 target programs or companies',
      'A 90-day execution plan with concrete actions',
      'Resume and LinkedIn profile updated for the target market',
      'Confidence boost from data, not just motivation',
    ],
    includes: [
      '60-minute intake to map current role and 2-year aspirations',
      'Realistic transition map (industry, function, role, salary band)',
      'Shortlist of MBA / executive / certification programs',
      'Shortlist of target companies and roles',
      '90-day execution plan (resume, LinkedIn, interview, network)',
      '2 follow-up calls within 30 days (30 minutes each)',
      'Resume and LinkedIn feedback (one round)',
      'Optional mock interview (1 round)',
    ],
    steps: [
      {
        title: 'Intake and aspiration mapping',
        body:
          'A 60-minute video call to understand your current role (industry, function, level, salary), pain points, and 2-year aspiration. We then frame 2–3 realistic next moves.',
      },
      {
        title: 'Transition map and shortlists',
        body:
          'Within 3 days, you receive a written transition map: industry / function / role options, salary bands, and a shortlist of 3–5 MBA / executive / certification programs and 5–10 target companies.',
      },
      {
        title: 'Resume and LinkedIn upgrade',
        body:
          'We review your resume and LinkedIn against the target market, with specific edits (not generic advice). Most clients need 1–2 rounds of refinement.',
      },
      {
        title: 'Interview prep (optional)',
        body:
          'If interviews are on the horizon, we run one mock interview with structured feedback, focused on the specific company or program format (MBA interview, lateral interview, etc.).',
      },
      {
        title: '90-day execution + follow-up',
        body:
          'You walk away with a 90-day plan (week-by-week actions). We run 2 follow-up calls within 30 days to review progress and adjust the plan if needed.',
      },
    ],
    faqs: [
      {
        q: 'Is this useful if I already have work experience?',
        a: 'Yes. It is specifically designed for experienced professionals (3+ years) who want to make smarter next moves — MBA, switch, promotion, or independent practice.',
      },
      {
        q: 'Can GCDA help with resumes and interviews?',
        a: 'Yes. One round of resume / LinkedIn feedback and one mock interview (optional) are included. The mock interview is tailored to your target — MBA interview, lateral, or CEO-level.',
      },
      {
        q: 'Do you help with MBA applications?',
        a: 'Yes. We help with CAT / XAT / MAT / GMAT prep planning, IIM and top-B-school shortlisting, statement of purpose (SOP) reviews, and interview prep for working professionals applying to full-time, executive, or online MBA programmes.',
      },
      {
        q: 'I want to switch domains — is that realistic?',
        a: 'Most career switches in India happen at the skill + portfolio + targeted-application level, not at the experience level. We help you build that bridge in 90 days: gap analysis, certifications, and a job-search plan calibrated to your city’s hiring market.',
      },
      {
        q: 'Can sessions be after work hours?',
        a: 'Yes. Most sessions are scheduled in the evening (7 PM – 10 PM IST) or on weekends. We also offer 30-minute consults that fit between meetings.',
      },
      {
        q: 'How is this different from a career coach or LinkedIn influencer?',
        a: 'We are not motivational. We are evidence-based: real salary data, real transition timelines, real program fit, and a written 90-day plan. No vague advice, no upsells.',
      },
      {
        q: 'What about executive coaching for senior leaders?',
        a: 'We work with senior professionals (Director and above) on leadership transitions, board prep, and independent practice setup. These engagements are tailored — please contact us for a custom scope.',
      },
      {
        q: 'Is the 90-day plan realistic for someone in a demanding job?',
        a: 'Yes. The plan is designed for 3–5 hours per week, mostly on weekends. If your job is currently 60+ hours a week, we will start even smaller and ramp up over 90 days.',
      },
    ],
    popularCities: [
      { state: 'Maharashtra', city: 'Mumbai' },
      { state: 'Karnataka', city: 'Bengaluru' },
      { state: 'Delhi', city: 'New Delhi' },
      { state: 'Tamil Nadu', city: 'Chennai' },
      { state: 'Telangana', city: 'Hyderabad' },
      { state: 'West Bengal', city: 'Kolkata' },
    ],
  },
];

export const testimonials = [
  {
    name: 'Parent of a Class 10 student',
    role: 'Pune • Stream Selection Guidance',
    quote:
      'GCDA helped us move from daily arguments about Science versus Commerce to one clear, evidence-based plan. The assessment plus parent-student alignment conversation gave our family the confidence to choose without panic.',
  },
  {
    name: 'Working professional',
    role: 'Bengaluru • MBA & Career Transition Planning',
    quote:
      'I went into the process confused about whether I needed an MBA, a role switch, or both. GCDA helped me compare the options honestly, improve my positioning, and walk away with a practical 90-day execution roadmap.',
  },
  {
    name: 'Class 12 student',
    role: 'Delhi • Career Assessment + Degree Selection',
    quote:
      'The biggest value for me was that GCDA turned a long list of random college ideas into a realistic shortlist I could actually defend to my parents. The guidance felt structured, specific, and much more useful than generic online advice.',
  },
];

export const siteFaqs = [
  {
    q: 'How long does a counselling session take?',
    a: 'A complete counselling session including assessment and discussion typically takes around 60 to 90 minutes, depending on the plan and requirement.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes. You can move to a higher plan later, and the current plan fee can be adjusted toward the upgrade.',
  },
  {
    q: 'Are the counsellors qualified?',
    a: 'Yes. GCDA works with certified professionals experienced in career guidance, mentoring, and assessment-based counselling.',
  },
  {
    q: 'Do you offer online counselling?',
    a: 'Yes. Sessions can be delivered online as well as face-to-face, depending on the service and client preference.',
  },
];

export const journeySteps = [
  {
    title: 'Discover',
    description: 'Understand strengths, interests, personality, and aspirations through structured interaction and assessments.',
  },
  {
    title: 'Decide',
    description: 'Evaluate streams, degrees, institutions, or career moves with expert reasoning and practical context.',
  },
  {
    title: 'Develop',
    description: 'Create a clear roadmap with milestones, preparation guidance, and follow-up support.',
  },
];

export const aboutTimeline = [
  {
    year: '2013',
    title: 'Started with a mission',
    description: 'GCDA began with a focus on practical, trustworthy career counselling for students and families.',
  },
  {
    year: '2018',
    title: 'Expanded service range',
    description: 'Assessment-led counselling, workshops, and higher-education planning became core offerings.',
  },
  {
    year: 'Today',
    title: 'Trusted guidance at scale',
    description: 'GCDA supports students, parents, graduates, and professionals through structured career decision-making.',
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
