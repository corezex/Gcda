import { getCity, getStateBySlug } from '@/data/indiaLocations';

export const CITY_FEE_PAGE_CONFIGS = [
  { pageSlug: 'mumbai', stateSlug: 'maharashtra', citySlug: 'mumbai' },
  { pageSlug: 'delhi', stateSlug: 'delhi', citySlug: 'new-delhi', displayName: 'Delhi' },
  { pageSlug: 'bengaluru', stateSlug: 'karnataka', citySlug: 'bengaluru' },
  { pageSlug: 'hyderabad', stateSlug: 'telangana', citySlug: 'hyderabad' },
  { pageSlug: 'pune', stateSlug: 'maharashtra', citySlug: 'pune' },
  { pageSlug: 'chennai', stateSlug: 'tamil-nadu', citySlug: 'chennai' },
  { pageSlug: 'kolkata', stateSlug: 'west-bengal', citySlug: 'kolkata' },
  { pageSlug: 'ahmedabad', stateSlug: 'gujarat', citySlug: 'ahmedabad' },
  { pageSlug: 'noida', stateSlug: 'uttar-pradesh', citySlug: 'noida' },
  { pageSlug: 'nagpur', stateSlug: 'maharashtra', citySlug: 'nagpur' },
  { pageSlug: 'jaipur', stateSlug: 'rajasthan', citySlug: 'jaipur' },
  { pageSlug: 'lucknow', stateSlug: 'uttar-pradesh', citySlug: 'lucknow' },
  { pageSlug: 'chandigarh', stateSlug: 'chandigarh', citySlug: 'chandigarh' },
  { pageSlug: 'kochi', stateSlug: 'kerala', citySlug: 'kochi' },
  { pageSlug: 'indore', stateSlug: 'madhya-pradesh', citySlug: 'indore' },
  { pageSlug: 'surat', stateSlug: 'gujarat', citySlug: 'surat' },
  { pageSlug: 'bhopal', stateSlug: 'madhya-pradesh', citySlug: 'bhopal' },
  { pageSlug: 'patna', stateSlug: 'bihar', citySlug: 'patna' },
  { pageSlug: 'coimbatore', stateSlug: 'tamil-nadu', citySlug: 'coimbatore' },
  { pageSlug: 'bhubaneswar', stateSlug: 'odisha', citySlug: 'bhubaneswar' },
];

function formatList(items = [], limit = 3) {
  const clean = items.filter(Boolean).slice(0, limit);
  if (clean.length === 0) return '';
  if (clean.length === 1) return clean[0];
  if (clean.length === 2) return `${clean[0]} and ${clean[1]}`;
  return `${clean.slice(0, -1).join(', ')}, and ${clean[clean.length - 1]}`;
}

function titleCaseWords(str = '') {
  return str
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function normalizeIndustries(industries = '') {
  return industries
    .replace(/\bit\b/gi, 'IT')
    .replace(/\bbfsi\b/gi, 'BFSI')
    .replace(/\bai\b/gi, 'AI')
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildCityFeePage(config) {
  const city = getCity(config.stateSlug, config.citySlug);
  const state = getStateBySlug(config.stateSlug);
  if (!city || !state) return null;

  const cityName = city.name;
  const displayName = config.displayName || city.name;
  const stateName = state.name;
  const industries = normalizeIndustries(city.industries || 'local services and education');
  const exams = formatList(city.topExams || [], 3) || 'major entrance exams';
  const colleges = formatList(city.topColleges || [], 3) || 'leading local colleges';
  const feesSlug = `career-counselling-fees-in-${config.pageSlug}`;
  const cityPage = `/${config.stateSlug}/career-counsellor-${config.citySlug}`;
  const streamPage = `/${config.stateSlug}/stream-selection-${config.citySlug}`;
  const degreePage = `/${config.stateSlug}/degree-selection-${config.citySlug}`;
  const workingPage = `/${config.stateSlug}/working-professional-${config.citySlug}`;

  return {
    ...config,
    slug: feesSlug,
    city,
    state,
    cityPage,
    title: `Career Counselling Fees in ${displayName}`,
    description: `Career counselling fees in ${displayName}, ${stateName} – compare GCDA plans, online guidance pricing, and the right option for students and professionals.`,
    keywords: [
      `career counselling fees in ${displayName}`,
      `career counselling cost ${displayName}`,
      `online career counselling charges ${displayName}`,
      `career counsellor fees ${displayName}`,
    ],
    eyebrow: `${displayName} pricing guide`,
    h1: `Career Counselling Fees in ${displayName}`,
    heroCopy: `Compare GCDA career counselling fees in ${displayName}, ${stateName} for stream selection, degree planning, and working-professional guidance. This page helps families and professionals in ${displayName} understand pricing, what each plan includes, and which option is the most practical fit.`,
    answerBlock: `Career counselling fees in ${displayName} start at Rs. 2,999 for Stream Selector, Rs. 3,499 for Degree Selector, and Rs. 3,999 for Working Professionals. The right plan depends on whether the decision is after 10th, after 12th, or mid-career, and whether the client needs assessment, shortlisting, or transition planning.`,
    quickStats: [
      { label: 'City context', value: `${displayName}, ${stateName}` },
      { label: 'Strong local sectors', value: industries },
      { label: 'Common exam focus', value: exams },
      { label: 'Top local references', value: colleges },
    ],
    pricingTable: {
      headers: ['Plan', 'Best for', 'Fees', 'What is included', 'Typical outcome'],
      rows: [
        ['Stream Selector', 'Class 8–10 students choosing a stream', 'Rs. 2,999', 'Assessment, counselling, stream shortlist, written summary', 'A clear stream decision with backup options'],
        ['Degree Selector', 'Class 11–12 students choosing a degree or college path', 'Rs. 3,499', 'All Stream Selector benefits plus degree analysis and college shortlist', 'A realistic after-12th degree and college plan'],
        ['Working Professionals', 'Professionals planning transitions, MBA, or growth strategy', 'Rs. 3,999', 'All Degree Selector benefits plus transition planning and growth roadmap', 'A 90-day professional action plan'],
      ],
      caption: `Career counselling fees in ${displayName} at a glance.`,
    },
    sections: [
      {
        heading: `How much does career counselling cost in ${displayName}?`,
        paragraphs: [
          `For most families in ${displayName}, career counselling cost depends less on the city itself and more on the type of decision being made. A student choosing a stream after 10th usually needs a lighter plan than a class 12 student comparing degrees, colleges, and exams, while working professionals often need deeper transition planning.`,
          `GCDA keeps pricing transparent so families in ${displayName} can compare support levels clearly. The practical question is not only “what does it cost?” but also “what outcome do we need?” — stream clarity, degree selection, or a working-professional roadmap.`,
          `Because ${displayName} students and professionals often plan around ${exams}, a structured counselling process can reduce expensive confusion before applications, coaching, or admissions decisions begin to compound.`,
        ],
      },
      {
        heading: `What affects career counselling fees for ${displayName} families?`,
        paragraphs: [
          `The biggest fee factor is complexity. Stream selection is usually faster and narrower, while after-12th planning often requires comparing multiple degree paths, college options, exam routes, and budget trade-offs.`,
          `In ${displayName}, local context also matters. Families often want the plan tied to realistic colleges like ${colleges} and to the work culture of sectors such as ${industries}. That kind of tailored guidance creates more value than a generic one-size-fits-all session.`,
          `Another factor is whether the client needs only decision clarity or also execution support, such as report interpretation, follow-up, role positioning, or a working-professional roadmap.`,
        ],
      },
      {
        heading: `Online vs in-person counselling fees in ${displayName}`,
        paragraphs: [
          `Most GCDA clients in ${displayName} choose online sessions because they are easier to schedule and still include the same structured decision process. For students, that means easier parent participation. For professionals, it means sessions can fit around work hours without weakening the planning quality.`,
          `In-person guidance can still be useful for families who strongly prefer face-to-face discussion, but the value is created by the process, not just the meeting format. Assessments, interpretation, and action planning remain the real core.`,
          `For most people in ${displayName}, the more useful question is whether the process is strong enough to produce a clear decision, not whether the call happened in a room or on a screen.`,
        ],
      },
      {
        heading: `Which counselling plan usually fits people in ${displayName} best?`,
        paragraphs: [
          `Students in and around ${displayName} who are still deciding between Science, Commerce, Arts, diploma, or skill-first routes usually fit the Stream Selector plan best. That is often the right starting point when the family wants clarity without overbuying support.`,
          `Class 11–12 students and parents comparing degree options, exams, and colleges usually need the Degree Selector plan because the decision is broader and more expensive if handled badly. The stronger the choice pressure, the more useful structured shortlisting becomes.`,
          `Working professionals in ${displayName}, especially those operating in ${industries}, typically need the Working Professionals plan because the decision involves salary trade-offs, resume positioning, MBA thinking, or role transition strategy.`,
        ],
      },
    ],
    faqs: [
      {
        q: `What are GCDA career counselling fees in ${displayName}?`,
        a: `GCDA fees in ${displayName} start at Rs. 2,999 for Stream Selector, Rs. 3,499 for Degree Selector, and Rs. 3,999 for Working Professionals. The right plan depends on whether the decision is after 10th, after 12th, or career-stage related.`,
      },
      {
        q: `Are online career counselling charges lower in ${displayName}?`,
        a: `The pricing is based on guidance scope rather than only format. Most clients in ${displayName} choose online sessions because they are more flexible and still include the same structured decision support.`,
      },
      {
        q: `Which counselling plan is best for students in ${displayName}?`,
        a: `Class 8–10 students usually start with Stream Selector, while class 11–12 students usually benefit more from Degree Selector. Families deciding between local colleges, exams, and long-term fit often need the deeper after-12th planning support.`,
      },
      {
        q: `Why use a city-specific counselling fees page for ${displayName}?`,
        a: `Because families in ${displayName} usually want pricing explained in the context of local exams, colleges, and the actual kinds of decisions students and professionals here are making. Local context makes the pricing decision easier to understand.`,
      },
    ],
    relatedLinks: [
      { href: '/plan', label: 'Career Counselling Fees & Plans in India' },
      { href: cityPage, label: `Career Counsellor in ${displayName}` },
      { href: '/career-counselling-online-india', label: 'Online Career Counselling in India' },
      { href: '/career-counsellor-near-me', label: 'Career Counsellor Near Me' },
      { href: streamPage, label: `Stream Selection in ${displayName}` },
      { href: degreePage, label: `Degree Selection in ${displayName}` },
      { href: workingPage, label: `Working Professional Guidance in ${displayName}` },
    ],
  };
}

export const CITY_FEE_PAGES = CITY_FEE_PAGE_CONFIGS.map((config) => buildCityFeePage(config)).filter(Boolean);

export function getCityFeePageByPageSlug(pageSlug) {
  return CITY_FEE_PAGES.find((page) => page.pageSlug === pageSlug) || null;
}

export function getCityFeePageByRouteSlug(routeSlug) {
  return CITY_FEE_PAGES.find((page) => page.slug === routeSlug) || null;
}

export function getCityFeePageByStateCity(stateSlug, citySlug) {
  return CITY_FEE_PAGES.find((page) => page.stateSlug === stateSlug && page.citySlug === citySlug) || null;
}
