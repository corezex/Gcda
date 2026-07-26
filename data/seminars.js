// Catalogue of seminar & workshop types offered by GCDA.
// Used on:
//   - /career-counselling-seminar (top-level main service page)
//   - /<state>/career-counselling-seminar-<city> (city-specific pages)
//   - /career-counselling-seminar/<slug> (if we add detail pages)
//
// Each seminar has:
//   - slug:    url-safe identifier
//   - title:   human title (e.g. "Self Management Seminar")
//   - tag:     short label shown above the title (e.g. "4 hrs • 2 weekends")
//   - format:  duration & delivery format
//   - blurb:   1-2 sentence summary
//   - topics:  array of topic bullets covered in the seminar
//   - heroImage: optional hero image path

export const SEMINAR_TYPES = [
  {
    slug: 'career-counselling-seminar',
    title: 'Career Counselling Seminar',
    shortTitle: 'Career Counselling',
    tag: 'Awareness + assessment',
    format: '60–90 min sessions • In-person or online',
    heroImage: '/assets/career-3.png',
    blurb:
      'A guided seminar for students and parents covering how to make a career decision, plan for entrance exams after 12th, explore offbeat options, and prepare for studying abroad.',
    topics: [
      'How one should make a career decision',
      'Different degrees, entrance exams after 12th (science, commerce, arts)',
      'Offbeat career options',
      'Study habits and exam techniques',
      'Study Abroad',
      'Motivational videos and case studies',
    ],
    whoIsItFor: [
      'Schools running career awareness weeks',
      'Class 11–12 students and parents',
      'Colleges running first-year orientation',
    ],
  },
  {
    slug: 'self-management-seminar',
    title: 'Self Management Seminar',
    shortTitle: 'Self Management',
    tag: 'Total 4 hrs • 2 weekends',
    format: '4 hours total • 2 weekend sessions • Online + in-person',
    heroImage: '/assets/career-4.png',
    blurb:
      'A 4-hour, 2-weekend workshop that gives students practical self-management skills — the routines, habits, and mental frameworks that determine exam and career outcomes.',
    topics: [
      'Study habits',
      'Time management',
      'Goal alignment',
      'Handling exam anxiety',
    ],
    whoIsItFor: [
      'Class 9–12 students preparing for board and competitive exams',
      'College students juggling coursework and entrance prep',
      'Parents who want their child to build stronger study routines',
    ],
  },
  {
    slug: 'emotional-intelligence-seminar',
    title: 'Emotional Intelligence Seminar',
    shortTitle: 'Emotional Intelligence',
    tag: 'Total 4 hrs • 2 weekends',
    format: '4 hours total • 2 weekend sessions • Online + in-person',
    heroImage: '/assets/career-5.png',
    blurb:
      'A 4-hour, 2-weekend workshop that helps students and professionals develop emotional intelligence — managing relationships, pressure, and habits in a structured, evidence-based way.',
    topics: [
      'Relationship management',
      'Managing success, failure, and stress',
      'Anxiety and peer pressure',
      'Developing healthy habits',
      'Identifying addictions and early interventions',
    ],
    whoIsItFor: [
      'Teenagers dealing with peer pressure and exam stress',
      'College students managing new independence',
      'Working professionals navigating high-pressure roles',
    ],
  },
  {
    slug: 'leadership-skills-seminar',
    title: 'Leadership Skills Seminar',
    shortTitle: 'Leadership Skills',
    tag: 'Total 4 hrs • 2 weekends',
    format: '4 hours total • 2 weekend sessions • Online + in-person',
    heroImage: '/assets/career-6.png',
    blurb:
      'A 4-hour, 2-weekend workshop that builds leadership, communication, and interview skills for students and early-career professionals who want to stand out.',
    topics: [
      'Communication skills',
      'Interpersonal skills',
      'Negotiation skills',
      'Conflict management',
      'Interview skills',
    ],
    whoIsItFor: [
      'College students preparing for placements',
      'First-year graduates entering the workforce',
      'Working professionals preparing for promotion or new roles',
    ],
  },
];

// Quick lookup by slug
export function getSeminarBySlug(slug) {
  return SEMINAR_TYPES.find((s) => s.slug === slug);
}

// Group key for the seminar type pages (used to filter city content)
export const SEMINAR_KEY = 'career-counselling-seminar';
