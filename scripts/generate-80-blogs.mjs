#!/usr/bin/env node
// Generate 300+ SEO blogs to boost SEO/AEO/AI Overviews/GEO
// Preserves existing 10 blogs and appends 300 new ones

import fs from 'fs';

const existingPath = 'data/blog.js';
const existingContent = fs.readFileSync(existingPath, 'utf8');

// Extract existing blogPosts array manually? We'll keep existing 10 and append new.
// For simplicity, we will generate a NEW file data/blog.js with 10 existing + 300 new.

// Data pools
const exams = [
  'JEE Main', 'JEE Advanced', 'NEET', 'CUET', 'CLAT', 'NID DAT', 'NIFT', 'CAT', 'XAT', 'MAT',
  'GMAT', 'GATE', 'UPSC CSE', 'SSC CGL', 'Banking PO', 'IPMAT', 'NDA', 'CDS', 'MHT-CET', 'WBJEE',
  'AP EAMCET', 'KCET', 'COMEDK', 'BITSAT', 'VITEEE', 'SRMJEEE', 'JEE Main & Advanced', 'NEET UG',
  'CUET UG', 'CLAT UG'
];
const careers = [
  'Engineering', 'Medical', 'Design', 'Law', 'Commerce', 'Data Science', 'MBA', 'Civil Services',
  'Teaching', 'Journalism', 'Psychology', 'Architecture', 'Fashion Design', 'Hotel Management',
  'CA', 'CS', 'CMA', 'BBA', 'BCA', 'BSc', 'Product Management', 'UX Design', 'AI & ML',
  'Cybersecurity', 'Digital Marketing', 'Content Writing', 'Actuarial Science', 'Aviation',
  'Merchant Navy', 'Defence', 'Pharmacy', 'Nursing', 'Physiotherapy', 'Biotechnology',
  'Environmental Science', 'Forensic Science', 'Animation', 'Game Design', 'Interior Design',
  'Event Management', 'Sports Management', 'Hospitality', 'Social Work', 'Library Science',
  'Public Relations', 'Economics', 'Statistics', 'Agriculture', 'Veterinary Science'
];
const streams = ['Science (PCM)', 'Science (PCB)', 'Science (PCMB)', 'Commerce', 'Commerce with Maths', 'Arts', 'Arts with Maths', 'Diploma', 'Vocational'];
const interests = ['Maths', 'Biology', 'Drawing', 'Writing', 'Debating', 'Coding', 'Design', 'Business', 'Science Experiments', 'History', 'Psychology', 'Sports'];
const cities = [
  { name: 'Mumbai', state: 'Maharashtra' },
  { name: 'Delhi', state: 'Delhi' },
  { name: 'Bengaluru', state: 'Karnataka' },
  { name: 'Chennai', state: 'Tamil Nadu' },
  { name: 'Hyderabad', state: 'Telangana' },
  { name: 'Pune', state: 'Maharashtra' },
  { name: 'Kolkata', state: 'West Bengal' },
  { name: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Jaipur', state: 'Rajasthan' },
  { name: 'Lucknow', state: 'Uttar Pradesh' },
  { name: 'Chandigarh', state: 'Chandigarh' },
  { name: 'Noida', state: 'Uttar Pradesh' },
  { name: 'Navi Mumbai', state: 'Maharashtra' },
  { name: 'Kochi', state: 'Kerala' },
  { name: 'Indore', state: 'Madhya Pradesh' },
  { name: 'Bhopal', state: 'Madhya Pradesh' },
  { name: 'Surat', state: 'Gujarat' },
  { name: 'Nagpur', state: 'Maharashtra' },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { name: 'Patna', state: 'Bihar' },
  { name: 'Kharagpur', state: 'West Bengal' },
  { name: 'Hooghly', state: 'West Bengal' },
  { name: 'Mangalagiri', state: 'Andhra Pradesh' },
  { name: 'Coimbatore', state: 'Tamil Nadu' },
  { name: 'Bhubaneswar', state: 'Odisha' },
];
const categories = ['Stream Selection', 'Career Planning', 'Exam Preparation', 'Career Growth', 'Parenting', 'Degree Selection', 'Working Professionals', 'Study Abroad', 'Skills & Certification', 'Industry Spotlight'];

const years = ['2026', '2027'];

function randomDate() {
  const start = new Date('2025-06-01').getTime();
  const end = new Date('2026-07-20').getTime();
  const d = new Date(start + Math.random() * (end - start));
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function makeAnswerBlock(topic, city, examOrCareer) {
  const templates = [
    `Choosing ${topic} is a high-stakes decision for students in ${city.name}, ${city.state}. The best approach in 2026 is to map three things: aptitude (what you score well in), interest (what you voluntarily explore), and career reality (which degrees and jobs the ${topic} actually opens). Use a structured career assessment and 30-minute counselling with a certified mentor – GCDA's assessment covers aptitude, interest (RIASEC), and personality (Big-Five) with a psychologist-scored report and mentor debrief. Plans start at Rs. 2,999 and include a written action plan you can share with parents.`,
    `For ${topic} in ${city.name}, the 2026 playbook is simple: list 3 aspirational careers, map required degrees, entrance exams like ${examOrCareer}, top colleges near ${city.name}, and 5-year salary bands. Then run a career assessment to get fit scores, and discuss with a GCDA career counsellor who has seen 500+ similar profiles in ${city.state}. Most families find clarity in 60-90 minutes when they replace peer pressure with data. GCDA offers online video sessions across ${city.name} and in-person everywhere.`,
    `If you're exploring ${topic} from ${city.name}, start with evidence not guesswork. GCDA's career assessment measures numerical, verbal, abstract aptitude plus RIASEC interest and Big-Five personality, then a mentor walks you through a 5-item shortlist with realistic salary, growth, and entrance-exam data for ${examOrCareer}. Students in ${city.name} benefit from local context – industries like ${city.name}'s economy, landmarks like nearby colleges, and family budget fit. A short counselling session saves 2-5 years of friction later.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function makeParagraph(sectionType, city, exam, career, stream, interest) {
  const servicePhrases = [
    'personal counselling',
    'career assessment',
    'stream selection guidance',
    'degree selection guidance',
    'working professional guidance',
    'career counselling',
  ];
  const sp = servicePhrases[Math.floor(Math.random() * servicePhrases.length)];
  const templates = {
    exam: [
      `${exam} is a key gateway for ${career} aspirants in ${city.name}, ${city.state}. Students in ${city.name} often juggle board exams and ${exam} prep, which needs structured planning. GCDA's ${sp} and career assessment help ${city.name} families shortlist realistic targets based on marks, aptitude, and family budget.`,
      `In ${city.name}, the coaching landscape for ${exam} is competitive but fragmented. A 70-20-10 split works: 70% NCERT-level concepts, 20% ${exam}-pattern problems, 10% revision and mock analysis. GCDA mentors in ${city.name} suggest 10+ full-length mocks in last 60 days with a mistake journal.`,
      `Many ${city.name} students make the mistake of starting ${exam} prep after 12th results. Starting in 11th with 4-6 focused hours daily, protecting 7+ hours sleep and 1 hobby, yields better percentile than 10 distracted hours. GCDA's career counselling sessions in ${city.name} are online evenings 7-10 PM IST, fitting school schedules.`,
    ],
    career: [
      `${career} in ${city.name} is growing in 2026 due to local industries and remote work. Students from ${city.name} can enter ${career} via multiple degrees – not just one. GCDA's ${sp} maps your strengths to 5 realistic roles in ${career} with salary bands Rs. 3-8 LPA starting, scaling to Rs. 15-25 LPA in 5 years.`,
      `The education path for ${career} from ${city.name} involves shortlisting 6-10 colleges matching rank, budget, board, and category – including options near ${city.name} and across India. GCDA helps ${city.name} families compare ${career} vs adjacent fields like ${careers[Math.floor(Math.random()*careers.length)]} with fit scores and entrance-exam calendar.`,
      `Working professionals in ${city.name} use GCDA for ${career} transitions – domain switch, MBA shortlisting, resume rewrite, and 90-day execution plan. Online sessions fit around work hours. The local hiring market in ${city.name}, ${city.state} values portfolio + communication as much as degree.`,
    ],
    stream: [
      `After 10th, ${stream} opens distinct doors. In ${city.name}, students who love ${interest} often choose ${stream} but need to check career reality – which 3 aspirational careers does ${stream} unlock, what are required degrees, entrance exams, and 5-year outcomes? GCDA's ${sp} in ${city.name} uses aptitude + interest assessment to answer this.`,
      `A common mistake in ${city.name} is choosing ${stream} by peer pressure – 'all friends in Science'. Career fit is personal. GCDA's strength & blocker mapping in ${city.name} helps uncover family pressure, money fear, and indecision, then builds a 2-3 step action plan with dates and backup options.`,
      `Parents in ${city.name}, ${city.state} play a key role in ${stream} choice. GCDA runs a 30-minute alignment conversation so student and parents walk away with same plan. For ${interest}-loving students, ${stream} can be rewarding if paired with right subjects, internships, and entrance exam like ${exams[Math.floor(Math.random()*exams.length)]}.`,
    ],
    growth: [
      `Career growth in ${city.name} in 2026 is polarized – high-skill professionals in demand, mid-skill faces automation. For ${career} professionals in ${city.name}, next move matters more than last 5 years. GCDA's working professional guidance offers 90-day plan: skill gaps, certifications, target companies in ${city.name}'s market.`,
      `MBA for ${city.name} professionals: 1-year ISB, IIM Ahmedabad PGPX, 2-year IIM ABC, XLRI – investment Rs. 25L-35L, ROI 2x-4x salary jump. GCDA helps ${city.name} professionals shortlist CAT/XAT/GMAT programmes based on work experience and post-MBA role – consulting, product, general management.`,
      `Freelancing in ${career} from ${city.name} is realistic with 12-24 months runway. Build niche – writing, design, coding, marketing – strong portfolio, LinkedIn presence. GCDA's ${sp} includes resume review and mock interview tailored to ${city.name} hiring cycle, evenings 7-10 PM IST.`,
    ],
  };
  const pool = templates[sectionType] || templates.career;
  return pool[Math.floor(Math.random() * pool.length)];
}

function makeBlog(index) {
  const city = cities[index % cities.length];
  const exam = exams[index % exams.length];
  const career = careers[index % careers.length];
  const stream = streams[index % streams.length];
  const interest = interests[index % interests.length];
  const category = categories[index % categories.length];
  const year = years[index % 2];
  const datePublished = randomDate();
  const dateModified = addDays(datePublished, Math.floor(Math.random()*60)+5);
  const readTime = `${6 + (index % 10)} min read`;

  let title, description, answerBlock, sections, type;

  const mod = index % 10;
  if (mod < 3) { // exam
    type = 'exam';
    title = `How to Prepare for ${exam} in ${3 + (index % 9)} Months – ${year} Strategy for ${city.name} Students`;
    description = `A realistic, ${city.state}-specific ${exam} preparation plan for ${city.name} students in 12th – syllabus, timetable, mock analysis, and mistakes to avoid in ${year}.`;
    answerBlock = makeAnswerBlock(`${exam} preparation`, city, exam);
    sections = [
      {
        heading: `Why ${exam} Matters More in ${year} for ${city.name} Students`,
        paragraphs: [
          makeParagraph('exam', city, exam, career, stream, interest),
          makeParagraph('exam', city, exam, career, stream, interest),
          makeParagraph('exam', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `${exam} Syllabus & Pattern Breakdown – What ${city.name} Students Must Know`,
        paragraphs: [
          makeParagraph('exam', city, exam, career, stream, interest),
          makeParagraph('exam', city, exam, career, stream, interest),
          `Our GCDA counsellors in ${city.name} map ${exam} syllabus to NCERT and board chapters, so students don't double-study. For ${career} aspirants, we prioritize high-weightage topics first, then build a 12-month calendar around school exams in ${city.state}. This structured ${makeParagraph('exam', city, exam, career, stream, interest).toLowerCase()}`,
        ],
      },
      {
        heading: `A Realistic ${3 + (index % 9)}-Month Study Plan for ${exam} + 12th Boards`,
        paragraphs: [
          makeParagraph('exam', city, exam, career, stream, interest),
          makeParagraph('exam', city, exam, career, stream, interest),
          makeParagraph('exam', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `Common Mistakes ${city.name} Students Make in ${exam} – and How to Avoid`,
        paragraphs: [
          makeParagraph('exam', city, exam, career, stream, interest),
          makeParagraph('exam', city, exam, career, stream, interest),
          `Take 10+ mocks, but analyze every mock for 2 hours – silly mistakes, conceptual gaps, time management. Maintain a mistake journal. After 10 mocks, the journal becomes your most personalized material for ${exam} in ${city.name}. GCDA's career assessment and personal counselling help you stay sustainable.`,
        ],
      },
    ];
  } else if (mod < 6) { // career
    type = 'career';
    title = `Best Career Options After 12th ${stream} in ${city.name} – ${year} Guide with Salaries`;
    description = `Top career options after 12th ${stream} for ${city.name}, ${city.state} students – ${career}, ${careers[(index+1)%careers.length]}, ${careers[(index+2)%careers.length]} with education path, colleges, and salary expectations in ${year}.`;
    answerBlock = makeAnswerBlock(`${career} career options after 12th ${stream}`, city, career);
    sections = [
      {
        heading: `Why ${career} is Growing in ${city.name} in ${year}`,
        paragraphs: [
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `Top 5 Roles in ${career} – Skills, Degrees, and Salary in ${city.name}`,
        paragraphs: [
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `Education Path – How ${city.name} Students Can Enter ${career}`,
        paragraphs: [
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `How GCDA Helps ${city.name} Students Build a ${career} Career`,
        paragraphs: [
          makeParagraph('career', city, exam, career, stream, interest),
          makeParagraph('career', city, exam, career, stream, interest),
          `Book a GCDA session in ${city.name} for ${type} planning – online video across ${city.name} and in-person when needed. Plans start at Rs. 2,999 for Stream Selector. We provide written action plan, college shortlist of 6-10 institutions near ${city.name} and across India, and entrance-exam calendar for ${exam}.`,
        ],
      },
    ];
  } else if (mod < 8) { // stream
    type = 'stream';
    title = `Stream Selection After 10th for Students Who Love ${interest} in ${city.name} – ${year} Framework`;
    description = `A parent-friendly guide to stream selection after 10th for ${interest}-loving students in ${city.name}, ${city.state} – Science vs Commerce vs Arts with career reality, aptitude, and family alignment in ${year}.`;
    answerBlock = makeAnswerBlock(`stream selection for ${interest} students`, city, career);
    sections = [
      {
        heading: `Why ${interest} Matters in Stream Selection After 10th in ${city.name}`,
        paragraphs: [
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `Science vs Commerce vs Arts – What ${interest}-Loving Students in ${city.name} Should Choose`,
        paragraphs: [
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `Common Mistakes ${city.name} Families Make During Stream Selection`,
        paragraphs: [
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `A Simple 5-Step Decision Framework You Can Use This Week in ${city.name}`,
        paragraphs: [
          `Step 1 – Run a structured aptitude + interest assessment with GCDA in ${city.name}. Step 2 – List 3 aspirational careers for each stream and check which path is realistic given ${exam} and family budget. Step 3 – Map degrees, colleges near ${city.name}, and backup options. Step 4 – Have a 30-minute family alignment conversation. Step 5 – Decide with Plan B: if I don't enjoy ${stream}, my exit is X.`,
          makeParagraph('stream', city, exam, career, stream, interest),
          makeParagraph('stream', city, exam, career, stream, interest),
        ],
      },
    ];
  } else { // growth
    type = 'growth';
    title = `${career} Careers in ${city.name} – ${year} Growth Playbook for Working Professionals`;
    description = `Career growth guide for ${career} professionals in ${city.name}, ${city.state} – transitions, MBA planning, freelancing, upskilling with realistic salary and timeline in ${year}.`;
    answerBlock = makeAnswerBlock(`${career} growth for working professionals in ${city.name}`, city, career);
    sections = [
      {
        heading: `${career} in ${city.name} in ${year} – What's Changed`,
        paragraphs: [
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `5 Realistic Growth Options for ${career} Professionals in ${city.name}`,
        paragraphs: [
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `MBA, Certifications, and Skills for ${career} Growth from ${city.name}`,
        paragraphs: [
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
        ],
      },
      {
        heading: `How to Choose the Right Next Step in 30 Days – Framework for ${city.name}`,
        paragraphs: [
          `Week 1 – Self-assessment: rate current role, manager, growth runway, financial needs in ${city.name}. Week 2 – Talk to 5 people in target ${career} path in ${city.state}. Week 3 – Plan 3 concrete actions, cost, 6-month outcome. Week 4 – Decide primary, backup, 90-day review. GCDA's working professional guidance in ${city.name} helps with 90-day execution plan, resume, LinkedIn, target companies.`,
          makeParagraph('growth', city, exam, career, stream, interest),
          makeParagraph('growth', city, exam, career, stream, interest),
        ],
      },
    ];
  }

  const slug = slugify(title) + `-${1000+index}`;

  const faqs = [
    {
      q: `Is ${exam} / ${career} a good fit for students in ${city.name}?`,
      a: `${career} is a strong fit for ${city.name} students who enjoy ${interest} and have aptitude in ${stream}. GCDA's career assessment in ${city.name} measures aptitude, interest, and personality, then a mentor debrief translates scores into 5 specific options you can act on. Most families find clarity in 60-90 minutes. Sessions are online across ${city.name} and in-person when needed, plans start at Rs. 2,999.`,
    },
    {
      q: `How long does it take to prepare for ${exam} / transition to ${career} from ${city.name}?`,
      a: `For ${exam}, ${3 + (index % 9)} months with 4-6 focused hours daily plus school is realistic if 11th base is strong. For ${career} transition from ${city.name}, 6-12 months with portfolio, certifications, and targeted applications is typical. GCDA's structured plan in ${city.name} includes college shortlist, entrance-exam calendar, and 90-day execution for working professionals, evenings 7-10 PM IST.`,
    },
    {
      q: `Can GCDA help ${city.name} students with college shortlisting for ${career}?`,
      a: `Yes. GCDA shortlists 6-10 colleges matching rank, budget, board, and category – including options near ${city.name}, ${city.state} and across India. We cover ${exams[(index+2)%exams.length]}, ${exams[(index+3)%exams.length]}, and map them to degrees for ${career}. We also help with personal counselling and degree selection guidance in ${city.name}.`,
    },
    {
      q: `What if my child is confused between ${stream} and ${careers[(index+5)%careers.length]} in ${city.name}?`,
      a: `This is common in ${city.name}. Run a structured aptitude + interest assessment, list 3 aspirational careers for each stream, and check which path is realistic given ${exam}, family budget, and colleges near ${city.name}. A short GCDA counselling session in ${city.name} – online or in-person – usually resolves this in 60-90 minutes with a written plan.`,
    },
  ];

  const keyTakeaways = [
    `${title.split('–')[0].trim()} needs evidence – aptitude + interest + career reality, not just marks or peer pressure.`,
    `GCDA's career assessment in ${city.name} provides fit scores for ${career} and related fields – psychologist scored, mentor debriefed.`,
    `Shortlist 6-10 colleges near ${city.name} and across India matching rank and budget – include backup options.`,
    `A 60-90 minute structured counselling session in ${city.name} saves 2-5 years of friction – plans start at Rs. 2,999.`,
  ];

  const keywords = [
    `${career.toLowerCase()} in ${city.name.toLowerCase()}`,
    `${exam.toLowerCase()} preparation ${city.name.toLowerCase()}`,
    `career options after 12th ${city.name.toLowerCase()}`,
  ];

  return {
    slug,
    title,
    description,
    category,
    author: 'GCDA Editorial Team',
    authorRole: 'Career Guidance & Counselling',
    datePublished,
    dateModified,
    readTime,
    keywords,
    answerBlock,
    sections,
    faqs,
    keyTakeaways,
  };
}

// Generate 80 more blogs
const newBlogs = [];
for (let i = 300; i < 380; i++) {
  newBlogs.push(makeBlog(i));
}

// Read existing file to preserve original 10 blogs structure
// We'll parse existing 10 from the file using a simple extraction – we already have them in the repo, but we will re-create the whole file fresh with 10 existing + 300 new
// For that, we need to import the existing 10 programmatically by requiring? Simpler: we have the existing file content, we can extract the array via eval? Instead, we will just generate a new file that contains both old and new by reading old file via require in a separate step.

// We'll attempt to read existing blogPosts via dynamic import
// Since this script is ESM, we can try to import
// But we already have existingContent string, we can extract via regex for slug list to avoid duplication
// Simpler: we will create a new file that does NOT include old 10, but we will prepend the old 10 by copying them from the current file manually via reading the JS file and evaluating.

// Quick hack: Use Node to import existing blog.js via import()
const existingModulePath = '../data/blog.js';
let existingBlogs = [];
try {
  // We cannot import directly because file is not ESM? Let's read and eval the array
  const match = existingContent.match(/export const blogPosts = \[([\s\S]*?)\n\];/);
  if (match) {
    // We'll not parse, we'll just keep the file as template and inject new blogs before the closing ];
    // Find the last occurrence of '  },' before '];' and insert after
    // Instead, we will generate a fresh file with header and include existing 10 by hardcoding the import of old file? Easiest: we just read the current file and extract blogPosts via a JS eval in a safe way.
    console.log('Found existing blogPosts array, length approx', (existingContent.match(/slug:/g) || []).length);
  }
} catch (e) {
  console.error(e);
}

// For robustness, we will generate a completely new data/blog.js that includes the original 10 plus 300 new
// To get original 10, we will manually require via creating a temporary file that exports them
// Let's just read the file and use a simple method: copy the existing file's blogPosts array string and then append

// Approach: Find the export const blogPosts = [ ... ]; block and split at the last '  },' before '];' then append new blogs
const startIdx = existingContent.indexOf('export const blogPosts = [');
const endIdx = existingContent.indexOf('\n];', startIdx);
const categoriesIdx = existingContent.indexOf('export const blogCategories');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find blogPosts array');
  process.exit(1);
}

const beforeArray = existingContent.slice(0, startIdx);
const arrayContent = existingContent.slice(startIdx, endIdx); // up to before ];
const afterArray = existingContent.slice(endIdx); // starts with \n]; rest

// arrayContent includes 'export const blogPosts = [' and 10 blogs, but not the closing ];
// We'll generate new entries as JS objects string

function blogToJS(blog) {
  // Escape backticks and ${ in strings? We use JSON.stringify for safe strings, but need to handle multiline
  const escape = (str) => JSON.stringify(str);
  const sectionsJS = blog.sections.map(s => `      {
        heading: ${escape(s.heading)},
        paragraphs: [
${s.paragraphs.map(p => `          ${escape(p)}`).join(',\n')}
        ],
      }`).join(',\n');

  const faqsJS = blog.faqs.map(f => `      {
        q: ${escape(f.q)},
        a: ${escape(f.a)},
      }`).join(',\n');

  const takeawaysJS = blog.keyTakeaways.map(t => `      ${escape(t)}`).join(',\n');

  return `  {
    slug: ${escape(blog.slug)},
    title: ${escape(blog.title)},
    description: ${escape(blog.description)},
    category: ${escape(blog.category)},
    author: ${escape(blog.author)},
    authorRole: ${escape(blog.authorRole)},
    datePublished: ${escape(blog.datePublished)},
    dateModified: ${escape(blog.dateModified)},
    readTime: ${escape(blog.readTime)},
    keywords: [
${blog.keywords.map(k => `      ${escape(k)}`).join(',\n')}
    ],
    answerBlock: ${escape(blog.answerBlock)},
    sections: [
${sectionsJS}
    ],
    faqs: [
${faqsJS}
    ],
    keyTakeaways: [
${takeawaysJS}
    ],
  }`;
}

const newBlogsJS = newBlogs.map(b => blogToJS(b)).join(',\n');

const newArrayContent = arrayContent + ',\n' + newBlogsJS + '\n';

const newFileContent = beforeArray + newArrayContent + afterArray;

fs.writeFileSync(existingPath, newFileContent, 'utf8');

console.log(`Generated ${newBlogs.length} new blogs, total should be ${(existingContent.match(/slug:/g)||[]).length + newBlogs.length}`);
console.log(`New file size: ${(newFileContent.length/1024).toFixed(0)} KB`);
