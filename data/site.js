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
  { href: '/services', label: 'Services' },
  { href: '/cities', label: 'Cities' },
  { href: '/plans', label: 'Plans' },
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
    image: '/assets/career-1.png',
    shortDescription: 'One-on-one guidance sessions designed around the individual student or professional.',
    heroDescription:
      'Build confidence, gain clarity, and move ahead with a mentor-led counselling process tailored to your unique goals.',
    idealFor: ['Students who feel confused about streams or careers', 'Parents who need expert clarity', 'Graduates exploring next steps'],
    outcomes: ['Better self-awareness', 'A clearer direction', 'A practical action plan'],
    includes: [
      'Profile and goal discussion',
      'Strength and challenge mapping',
      'Personalised guidance session',
      'Recommended next steps and checkpoints',
    ],
    steps: [
      'Understand the student or professional background in detail.',
      'Identify gaps, opportunities, and immediate priorities.',
      'Create a practical path with support for execution.',
    ],
    faqs: [
      {
        q: 'Is personal counselling suitable for younger students?',
        a: 'Yes. Sessions can be adapted for school students, college students, and professionals.',
      },
      {
        q: 'Can parents join the counselling session?',
        a: 'Absolutely. Parent involvement is helpful in academic and stream-selection decisions.',
      },
    ],
  },
  {
    slug: 'career-assessment',
    title: 'Career Assessment',
    icon: '📊',
    image: '/assets/career-2.png',
    shortDescription: 'Structured assessments to evaluate aptitude, interests, personality, and career fit.',
    heroDescription:
      'Make informed decisions using data-backed assessments that reveal strengths, interests, and suitable pathways.',
    idealFor: ['Students choosing streams or degrees', 'Graduates comparing career options', 'Professionals exploring a shift'],
    outcomes: ['Evidence-based decisions', 'Stronger confidence', 'Reduced guesswork'],
    includes: [
      'Interest assessment',
      'Aptitude and personality insights',
      'Career-fit interpretation',
      'Report walkthrough with mentor',
    ],
    steps: [
      'Complete structured online or guided assessments.',
      'Review the generated profile and suitability markers.',
      'Translate findings into real education and career choices.',
    ],
    faqs: [
      {
        q: 'Are the assessment results enough to make a final decision?',
        a: 'They are highly useful, but best results come when assessments are combined with counselling and planning.',
      },
      {
        q: 'Will I receive a report?',
        a: 'Yes. Each assessment includes result interpretation and counselling support.',
      },
    ],
  },
  {
    slug: 'workshops-seminars',
    title: 'Workshops & Seminars',
    icon: '🎓',
    image: '/assets/career-3.png',
    shortDescription: 'Interactive sessions for schools, colleges, parents, and institutions.',
    heroDescription:
      'Deliver structured awareness programs on careers, stream selection, higher education, and employability skills.',
    idealFor: ['Schools and colleges', 'Parent groups', 'Training institutions'],
    outcomes: ['Higher career awareness', 'Better decision readiness', 'Stronger student engagement'],
    includes: [
      'Career awareness workshops',
      'Stream and degree selection sessions',
      'Parent orientation seminars',
      'Employability and roadmap talks',
    ],
    steps: [
      'Understand the audience and institution needs.',
      'Design a focused workshop agenda and delivery format.',
      'Conduct engaging sessions with practical takeaways.',
    ],
    faqs: [
      {
        q: 'Can workshops be conducted online?',
        a: 'Yes. GCDA can support both in-person and virtual sessions.',
      },
      {
        q: 'Do you customise sessions for institutions?',
        a: 'Yes. Content can be tailored by grade, stream, or audience type.',
      },
    ],
  },
  {
    slug: 'stream-selection-guidance',
    title: 'Stream Selection Guidance',
    icon: '🧭',
    image: '/assets/career-4.png',
    shortDescription: 'Expert support for selecting the right stream after school based on suitability and long-term career goals.',
    heroDescription:
      'Choose between Science, Commerce, Arts, and emerging pathways with clarity instead of pressure or confusion.',
    idealFor: ['Students in middle school and secondary school', 'Parents evaluating future academic options'],
    outcomes: ['Right-fit stream choices', 'Reduced academic pressure', 'Long-term planning confidence'],
    includes: [
      'Aptitude and interest review',
      'Stream suitability discussion',
      'Career pathway mapping',
      'Parent-student alignment conversation',
    ],
    steps: [
      'Assess aptitude, interests, and learning preferences.',
      'Match student profile to stream possibilities.',
      'Recommend a realistic and growth-oriented route.',
    ],
    faqs: [
      {
        q: 'Is stream selection only about marks?',
        a: 'No. Marks matter, but aptitude, interest, and future career fit matter just as much.',
      },
      {
        q: 'Can students change direction later?',
        a: 'Yes, but early clarity often makes future decisions easier and more cost-effective.',
      },
    ],
  },
  {
    slug: 'degree-selection-guidance',
    title: 'Degree Selection Guidance',
    icon: '🏫',
    image: '/assets/career-5.png',
    shortDescription: 'Choose the right undergraduate or professional course with expert college and career guidance.',
    heroDescription:
      'Compare degree pathways, institutions, and future opportunities before committing to a college plan.',
    idealFor: ['Students after 12th', 'Families comparing course outcomes', 'Students considering professional programs'],
    outcomes: ['Better course fit', 'Improved college shortlisting', 'Clearer higher-education roadmap'],
    includes: [
      'Degree suitability review',
      'Career scope analysis',
      'College recommendation support',
      'Admission guidance and roadmap',
    ],
    steps: [
      'Define goals, strengths, and budget expectations.',
      'Compare degree pathways and institutions.',
      'Shortlist options and map the admission journey.',
    ],
    faqs: [
      {
        q: 'Do you help compare colleges and universities?',
        a: 'Yes. The guidance includes comparing fit, outcomes, and practical decision factors.',
      },
      {
        q: 'Can this help if I am undecided between multiple degrees?',
        a: 'Yes. That is one of the most common reasons students choose this service.',
      },
    ],
  },
  {
    slug: 'working-professionals-guidance',
    title: 'Guidance for Working Professionals',
    icon: '💼',
    image: '/assets/career-6.png',
    shortDescription: 'Career growth, transition, and skill-alignment support for employed professionals.',
    heroDescription:
      'Plan career transitions, improve positioning, and pursue higher-value opportunities with strategic mentoring.',
    idealFor: ['Mid-career professionals', 'Job changers', 'Employees aiming for growth or role change'],
    outcomes: ['Sharper career direction', 'Stronger growth roadmap', 'Improved readiness for change'],
    includes: [
      'Career transition planning',
      'Professional skill assessment',
      'Resume and interview guidance',
      'Growth and upskilling roadmap',
    ],
    steps: [
      'Review current role, pain points, and aspirations.',
      'Identify suitable industries, roles, or advancement tracks.',
      'Build a transition or growth action plan.',
    ],
    faqs: [
      {
        q: 'Is this useful if I already have work experience?',
        a: 'Yes. It is specifically designed to help experienced professionals make smarter next moves.',
      },
      {
        q: 'Can GCDA help with resumes and interviews?',
        a: 'Yes. Preparation support is included in the professional guidance journey.',
      },
    ],
  },
];

export const testimonials = [
  {
    name: 'Samantha H.',
    role: 'Client',
    quote:
      'Working with GCDA was a game-changer for me. Their career assessments helped me understand my strengths and align them with my career goals. The coaching sessions were insightful and motivating, leading me to a job that truly fits my passion.',
  },
  {
    name: 'Hirendra S.',
    role: 'Client',
    quote:
      'I highly recommend GCDA to anyone feeling stuck in their career. The one-on-one counselling sessions helped me develop a clear action plan and regain my professional confidence. I now have a renewed sense of purpose and direction.',
  },
  {
    name: 'Tom H.',
    role: 'Client',
    quote:
      'The career counselling I received from GCDA was outstanding. They provided me with the tools, resources, and confidence to pursue my career aspirations. I am grateful for their support and highly recommend their services.',
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
