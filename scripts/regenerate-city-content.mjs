#!/usr/bin/env node
// Regenerate per-city unique content for the GCDA website.
//
// What this script does:
//   1. Reads /data/indiaLocations.js and extracts each city + its industries,
//      topColleges, topExams, landmarks, and district.
//   2. Generates 4 unique paragraphs per city (studentNote, professionalNote,
//      deliveryNote) and 3 unique city-specific FAQs.
//   3. Generates 2 unique paragraphs per (city, service) combination
//      (longDescription, whyItMatters) for all 8 services x 346 cities.
//   4. Patches /data/indiaLocations.js in place to add the 4 fields + 3 FAQs
//      to every city() call that doesn't already have them.
//   5. Writes /data/cityServiceContent.js with the per-service content.
//
// Run this after editing the cities in indiaLocations.js to refresh
// the per-city content. Build verification happens via `npm run build`.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const INDIA = path.join(ROOT, 'data/indiaLocations.js');
const CITY_CONTENT = path.join(ROOT, 'data/cityServiceContent.js');

const dataPath = path.relative(process.cwd(), INDIA);
const outPath = path.relative(process.cwd(), CITY_CONTENT);

console.log('Reading cities from', dataPath);
const source = fs.readFileSync(INDIA, 'utf8');

// === Parse cities (only the ones inside CITIES_BY_STATE) ===
const cbsStart = source.indexOf('export const CITIES_BY_STATE = {');
if (cbsStart === -1) throw new Error('CITIES_BY_STATE not found in ' + dataPath);

const stateOrder = [
  'andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 'gujarat',
  'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala', 'madhya-pradesh',
  'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab',
  'rajasthan', 'tamil-nadu', 'telangana', 'tripura', 'uttar-pradesh', 'uttarakhand',
  'west-bengal', 'andaman-and-nicobar-islands', 'chandigarh',
  'dadra-and-nagar-haveli-and-daman-and-diu', 'delhi', 'jammu-and-kashmir', 'ladakh',
  'lakshadweep', 'puducherry',
];

const stateNames = {
  'andhra-pradesh': 'Andhra Pradesh', 'arunachal-pradesh': 'Arunachal Pradesh', 'assam': 'Assam',
  'bihar': 'Bihar', 'chhattisgarh': 'Chhattisgarh', 'goa': 'Goa', 'gujarat': 'Gujarat',
  'haryana': 'Haryana', 'himachal-pradesh': 'Himachal Pradesh', 'jharkhand': 'Jharkhand',
  'karnataka': 'Karnataka', 'kerala': 'Kerala', 'madhya-pradesh': 'Madhya Pradesh',
  'maharashtra': 'Maharashtra', 'manipur': 'Manipur', 'meghalaya': 'Meghalaya',
  'mizoram': 'Mizoram', 'nagaland': 'Nagaland', 'odisha': 'Odisha', 'punjab': 'Punjab',
  'rajasthan': 'Rajasthan', 'tamil-nadu': 'Tamil Nadu', 'telangana': 'Telangana',
  'tripura': 'Tripura', 'uttar-pradesh': 'Uttar Pradesh', 'uttarakhand': 'Uttarakhand',
  'west-bengal': 'West Bengal', 'andaman-and-nicobar-islands': 'Andaman and Nicobar Islands',
  'chandigarh': 'Chandigarh', 'dadra-and-nagar-haveli-and-daman-and-diu': 'Dadra and Nagar Haveli and Daman and Diu',
  'delhi': 'Delhi', 'jammu-and-kashmir': 'Jammu and Kashmir', 'ladakh': 'Ladakh',
  'lakshadweep': 'Lakshadweep', 'puducherry': 'Puducherry',
};

function toCitySlug(name) {
  return name.toLowerCase().replace(/['\s,&.]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function parseCities(src) {
  let i = cbsStart;
  const cities = [];
  while (i < src.length) {
    const start = src.indexOf('city(', i);
    if (start === -1) break;
    let pos = start + 5;
    let pd = 1, bd = 0, is = false, sc = null, es = false;
    while (pos < src.length && pd > 0) {
      const ch = src[pos];
      if (es) { es = false; pos++; continue; }
      if (is) { if (ch === '\\') { es = true; pos++; continue; } if (ch === sc) { is = false; pos++; continue; } pos++; continue; }
      if (ch === "'" || ch === '"' || ch === '`') { is = true; sc = ch; pos++; continue; }
      if (ch === '(') pd++;
      if (ch === ')') pd--;
      if (ch === '{') bd++;
      if (ch === '}') bd--;
      pos++;
    }
    const call = src.substring(start, pos);
    const args = call.substring(5, call.length - 1);
    const argsList = [];
    let cur = '', apd = 0, asd = 0, abd = 0, ais = false, asc = null, aes = false;
    for (let k = 0; k < args.length; k++) {
      const c = args[k];
      if (aes) { cur += c; aes = false; continue; }
      if (ais) { cur += c; if (c === '\\') aes = true; else if (c === asc) ais = false; continue; }
      if (c === "'" || c === '"' || c === '`') { ais = true; asc = c; cur += c; continue; }
      if (c === '(') apd++;
      if (c === ')') apd--;
      if (c === '[') asd++;
      if (c === ']') asd--;
      if (c === '{') abd++;
      if (c === '}') abd--;
      if (c === ',' && apd === 0 && asd === 0 && abd === 0) { argsList.push(cur.trim()); cur = ''; continue; }
      cur += c;
    }
    if (cur.trim()) argsList.push(cur.trim());
    const nameMatch = call.match(/^city\(\s*'([^']+)'/);
    if (!nameMatch) { i = pos; continue; }
    const optsStr = argsList[4] || '';
    function extractField(fn) {
      const re = new RegExp(fn + ":\\s*'((?:[^'\\\\]|\\\\.)*)'");
      const m = optsStr.match(re);
      return m ? m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : null;
    }
    function extractArray(fn) {
      const re = new RegExp(fn + ":\\s*\\[([^\\]]*)\\]", 's');
      const m = optsStr.match(re);
      if (!m) return [];
      return m[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '').replace(/\\'/g, "'")).filter(Boolean);
    }
    cities.push({
      name: nameMatch[1],
      district: argsList[1] ? argsList[1].replace(/['"]/g, '') : '?',
      population: null,
      tier: argsList[2] ? argsList[2].replace(/['"]/g, '') : '?',
      industries: extractField('industries'),
      topColleges: extractArray('topColleges'),
      topExams: extractArray('topExams'),
      landmarks: extractField('landmarks'),
    });
    i = pos;
  }
  // Assign state by sequential order
  const stateCounts = {
    'andhra-pradesh': 28, 'arunachal-pradesh': 6, 'assam': 9, 'bihar': 18, 'chhattisgarh': 9,
    'goa': 5, 'gujarat': 16, 'haryana': 11, 'himachal-pradesh': 8, 'jharkhand': 8,
    'karnataka': 20, 'kerala': 11, 'madhya-pradesh': 14, 'maharashtra': 39, 'manipur': 3,
    'meghalaya': 3, 'mizoram': 2, 'nagaland': 3, 'odisha': 8, 'punjab': 8, 'rajasthan': 12,
    'tamil-nadu': 19, 'telangana': 7, 'tripura': 2, 'uttar-pradesh': 32, 'uttarakhand': 9,
    'west-bengal': 12, 'andaman-and-nicobar-islands': 2, 'chandigarh': 1,
    'dadra-and-nagar-haveli-and-daman-and-diu': 2, 'delhi': 11, 'jammu-and-kashmir': 5,
    'ladakh': 2, 'lakshadweep': 1, 'puducherry': 2,
  };
  let sIdx = 0, sCount = 0;
  for (const c of cities) {
    c.stateSlug = stateOrder[sIdx];
    c.stateName = stateNames[c.stateSlug];
    sCount++;
    if (sCount >= stateCounts[stateOrder[sIdx]]) { sIdx++; sCount = 0; }
  }
  return cities;
}

// === Content generation functions (same logic as the original generate script) ===
function getKeyIndustries(c) {
  if (!c.industries) return [];
  return c.industries.split(/,|&|;/).map(s => s.trim()).filter(Boolean).slice(0, 4);
}
function getEducationCenters(c) { return c.topColleges.slice(0, 2); }
function getKeyExams(c) { return c.topExams.slice(0, 3); }
function getKeyLandmarks(c) {
  if (!c.landmarks) return [];
  return c.landmarks.split(/,|·/).map(s => s.trim()).filter(Boolean).slice(0, 3);
}

function generateStudentNote(c) {
  const industries = getKeyIndustries(c);
  const colleges = getEducationCenters(c);
  const exams = getKeyExams(c);
  const landmarks = getKeyLandmarks(c);
  const tierLabel = c.tier === 'tier1' ? 'major metropolitan' : c.tier === 'tier2' ? 'regional hub' : 'growing';
  const indStr = industries.length > 0 ? industries.slice(0, 2).join(' and ').toLowerCase() : 'local industries';
  const hash = (c.name.length * 7 + c.name.charCodeAt(0) * 3) % 4;
  const collegeStr = colleges.length > 0 ? `, with ${colleges[0]}${colleges[1] ? ' and ' + colleges[1] : ''} as the most-considered options` : '';
  const examStr = exams.length > 0 ? ` Entrance tracks most students in ${c.name} plan around are ${exams.slice(0, 3).join(', ')}.` : '';
  const landmarkStr = landmarks.length > 0 ? ` Familiar landmarks like ${landmarks[0]} shape the day-to-day, and the colleges and exams within reach narrow the decision further.` : '';
  const templates = [
    `Students in ${c.name} typically grow up around the ${indStr} economy and gravitate toward careers that match local opportunity. After 10th, most weigh engineering, medical, commerce, and arts paths${collegeStr}. Career guidance helps them compare these against their actual aptitude, family budget, and the entrance calendar relevant to ${c.stateName}.${examStr} Our ${c.name} counsellors walk each student through a structured shortlist so the stream and college plan reflects strengths, not peer pressure.`,
    `In ${c.name}, a ${tierLabel} city in ${c.stateName}'s ${c.district} district, students typically plan around ${indStr}. The class 10-to-12 decision is high-stakes because the local college and exam mix is narrow.${examStr} Our mentors help ${c.name} families compare the realistic options against marks, aptitude, and family context${colleges.length > 0 ? ' — ' + colleges[0] + ' and ' + (colleges[1] || 'similar institutions') + ' are common reference points' : ''}.`,
    `${c.name} students see career paths through the lens of ${indStr}, the dominant local industries${landmarkStr} The most common question from class 10–12 students is whether to lean engineering, medical, commerce, or arts, and which colleges and exams are realistically reachable${collegeStr}.${examStr} Career counselling helps ${c.name} families replace speculation with a structured, evidence-based plan.`,
    `Career decisions in ${c.name} (${c.district}, ${c.stateName}) are anchored in the local ${indStr} economy and the colleges within reach. Class 10 students usually start by weighing ${exams.length > 0 ? exams.slice(0, 2).join(' or ') : 'JEE/NEET/state CETs'} and the streams each exam unlocks${collegeStr}. Our counsellors help ${c.name} students cut through the noise with a personalized 2–3 step plan that fits their marks, interests, and the family's budget.`,
  ];
  return templates[hash];
}

function generateProfessionalNote(c) {
  const industries = getKeyIndustries(c);
  if (industries.length === 0) return `Working professionals in and around ${c.name} use career counselling for transitions, MBA planning, and skill alignment. Online sessions make it easy to access expert guidance from ${c.name} without travel.`;
  const indShort = industries.slice(0, 2).join(' and ').toLowerCase();
  const hash = (c.name.length * 11 + c.name.charCodeAt(0) * 5) % 3;
  const templates = [
    `${c.name}'s professional community is rooted in ${industries.join(', ').toLowerCase()}, and our working-professionals service maps specifically to that mix. Mid-career professionals in ${c.name} use GCDA for industry-switch planning, MBA or executive-MBA shortlisting, resume rewrites, and interview prep — sessions are online and fit around work hours. We tailor every plan to ${c.name}'s hiring market and salary bands, not generic national averages.`,
    `Working professionals in ${c.name} typically operate in ${indShort} and use career counselling for three common needs: domain switching, MBA/EMBA planning, and promotion strategy. Our mentors run online sessions from 7 PM to 10 PM IST and on weekends, calibrated to ${c.name}'s hiring cycle and the realities of the local ${industries[0].toLowerCase()} sector.`,
    `In ${c.name} (${c.stateName}), the professional career path often runs through ${industries.join(', ').toLowerCase()}. Mid-career professionals here come to GCDA for transitions into new roles or industries, MBA shortlisting, resume rewrites, and structured interview prep. We also help returning professionals (post-maternity, post-sabbatical) restart their careers — every engagement is online and tailored to ${c.name}'s specific hiring market.`,
  ];
  return templates[hash];
}

function generateDeliveryNote(c) {
  const landmarks = getKeyLandmarks(c);
  const hash = (c.name.length * 13) % 3;
  const landmarkRef = landmarks.length > 0 ? `near landmarks like ${landmarks[0]}` : 'in centrally accessible parts of the city';
  const primaryExam = c.topExams[0] || 'JEE/NEET';
  const templates = [
    `GCDA delivers career counselling in ${c.name} through secure online video sessions available across ${c.district} and ${c.stateName}. For families who prefer in-person meetings, we run face-to-face sessions ${landmarkRef}. Online sessions are scheduled evenings and weekends to fit student and working-professional schedules; in-person slots are typically 60–90 minutes with a written follow-up plan emailed within 24 hours.`,
    `In ${c.name}, we deliver career counselling primarily through online video calls, with in-person sessions available on request ${landmarkRef}. The online model works well for families across ${c.district} and students preparing for ${primaryExam}; in-person works for parents who want a structured family-alignment conversation. Sessions are available 7 days a week, with evening slots for working professionals.`,
    `GCDA's delivery in ${c.name} is hybrid: secure video sessions across ${c.district} for one-on-one mentoring, plus in-person sessions at centrally located venues ${landmarkRef}. Most students and working professionals start online and move to in-person for the family-alignment conversation. Every session ends with a written action plan delivered within 24 hours.`,
  ];
  return templates[hash];
}

function generateCityFaqs(c) {
  const industries = getKeyIndustries(c);
  const colleges = getEducationCenters(c);
  const exams = getKeyExams(c);
  const landmarks = getKeyLandmarks(c);
  const primaryExam = exams[0] || 'JEE Main';
  const secondaryExam = exams[1] || 'NEET';
  const collegeRef = colleges[0] || 'the most-considered local colleges';
  const landmarkRef = landmarks.length > 0 ? landmarks[0] : `central ${c.name}`;
  const indProf = industries.length > 0 ? `, particularly in ${industries[0]}` : '';
  return [
    {
      q: `Do you cover ${c.name} students appearing for ${primaryExam} and other entrance exams?`,
      a: `Yes. GCDA's ${c.name} counsellors work with class 10–12 students on the full entrance-exam cycle, not just career exploration. The most common entrance tracks we plan around for ${c.name} students are ${exams.slice(0, 3).join(', ') || 'JEE Main, NEET, and state CETs'}. We frequently help families shortlist ${collegeRef} alongside other options that match the student's rank and budget. The 12-month prep calendar accounts for school exams, board deadlines, and the local coaching landscape in ${c.name}.`
    },
    {
      q: `How is career counselling in ${c.name} different from generic online counselling?`,
      a: `Generic online counselling gives you personality labels. Our ${c.name} service is rooted in local context — the actual colleges, exams, industries, and salary bands that apply here. Given that ${c.name}'s economy is anchored in ${industries.slice(0, 2).join(' and ') || 'a mix of local industries'}, we pay special attention to careers that are realistic in this context — both the entry paths and the long-term growth. We also factor in commute, family schedules, and the realities of attending sessions from ${landmarkRef} and surrounding neighbourhoods. The output is a plan that is implementable, not aspirational.`
    },
    {
      q: `Can working professionals in ${c.name} use GCDA for career transitions and MBA planning?`,
      a: `Yes. Most working-professional sessions in ${c.name} cover one of three tracks: domain or industry switching, MBA / executive-MBA shortlisting, or promotion and leadership planning${indProf}. Sessions are online and timed around work hours — evenings 7–10 PM IST and weekends. We help with resume rewrites, mock interviews (MBA interview, lateral interview, CEO-level), and a 90-day execution plan tailored to ${c.name}'s hiring market.`
    }
  ];
}

const SERVICE_KEYS = [
  'career-counselling', 'personal-counselling', 'career-assessment',
  'career-counselling-seminar', 'career-certification',
  'stream-selection-guidance', 'degree-selection-guidance', 'guidance-for-working-professionals',
];

function generateCityLongDescription(c, serviceKey) {
  const industries = getKeyIndustries(c);
  const colleges = getEducationCenters(c);
  const exams = getKeyExams(c);
  const landmarks = getKeyLandmarks(c);
  const indStr = industries.length > 0 ? industries.slice(0, 3).join(', ').toLowerCase() : 'a mix of local industries';
  const collegeShort = colleges.length > 0 ? colleges[0] : '';
  const examShort = exams.length > 0 ? exams[0] : 'JEE Main';
  const landmarkShort = landmarks.length > 0 ? landmarks[0] : `central ${c.name}`;
  const servicePhrases = {
    'career-counselling': 'career counselling', 'personal-counselling': 'personal career counselling',
    'career-assessment': 'career assessment', 'career-counselling-seminar': 'career counselling seminars',
    'career-certification': 'career counselling certification',
    'stream-selection-guidance': 'stream selection guidance',
    'degree-selection-guidance': 'degree selection guidance',
    'guidance-for-working-professionals': 'career guidance for working professionals',
  };
  const servicePhrase = servicePhrases[serviceKey] || 'career counselling';
  const hash = (c.name.length * 17 + c.name.charCodeAt(0) * 7) % 4;
  const templates = [
    `GCDA's ${servicePhrase} in ${c.name} is built around the realities of ${c.stateName}'s ${c.district} district. We pair structured assessments with mentor-led sessions, calibrated to the local ${indStr} economy${collegeShort ? ` and the colleges ${c.name} students realistically shortlist — including ${collegeShort}` : ''}. Sessions are online across ${c.district} and in-person on request.`,
    `In ${c.name}, ${servicePhrase} is most effective when it accounts for the local ${indStr} economy and the entrance calendar students face${examShort ? `, with ${examShort}` : ''} as the most-considered option. Our ${c.name} mentors run structured one-on-one sessions that turn aptitude data and family context into a clear next step. Plans start at Rs. 2,999 for the Stream Selector and are tailored end-to-end to ${c.district}.`,
    `${c.name} families come to GCDA for ${servicePhrase} because we work with the actual colleges, exams, and industries that apply here${collegeShort ? ` — ${collegeShort}` : ''} — not generic national averages. Sessions are hybrid: online video across ${c.district} and in-person in ${c.name} on request. Every plan ends with a written action plan delivered within 24 hours.`,
    `For ${c.name} residents, GCDA delivers ${servicePhrase} that is locally calibrated: we work with the ${indStr} economy, the colleges and entrance exams ${c.name} students actually plan around${landmarks.length > 0 ? `, and the commute patterns around ${landmarkShort}` : ''}. Online sessions run across ${c.district} and ${c.stateName}; in-person sessions are scheduled on request.`,
  ];
  return templates[hash];
}

function generateCityWhyItMatters(c, serviceKey) {
  const industries = getKeyIndustries(c);
  const exams = getKeyExams(c);
  const indShort = industries.length > 0 ? industries[0].toLowerCase() : 'the local economy';
  const exam1 = exams[0] || 'JEE Main';
  const exam2 = (exams[1] && exams[1] !== exam1) ? exams[1] : 'state-level exams';
  const serviceContext = {
    'career-counselling': 'career confusion', 'personal-counselling': 'career confusion',
    'career-assessment': 'the difference between marks-based and evidence-based decisions',
    'career-counselling-seminar': 'institutional career-awareness programming',
    'career-certification': 'becoming a certified career counsellor',
    'stream-selection-guidance': 'the stream choice after class 10',
    'degree-selection-guidance': 'the degree and college choice after class 12',
    'guidance-for-working-professionals': 'mid-career decision-making',
  };
  const context = serviceContext[serviceKey] || 'career decisions';
  const hash = (c.name.length * 19 + c.stateSlug.length * 3) % 3;
  const templates = [
    `In ${c.name}, ${context} is high-stakes because the local ${indShort} economy and the ${exam1} / ${exam2} calendar create a narrow decision window. Generic online advice doesn't account for that. GCDA's ${c.name} mentors pair assessment data with local context, so the plan fits the actual colleges, salary bands, and family budgets that apply here — not national averages.`,
    `Most ${c.name} families face too much information and not enough time. The ${indShort} economy creates one set of expectations, ${exam1} creates another, and family pressure adds a third. Our job is to cut through that with structured guidance grounded in the ${c.name}-specific reality.`,
    `For ${c.name} (${c.stateName}), ${context} carries real cost: a wrong stream or degree can cost 2–4 years and lakhs in re-admission fees. Our ${c.name} mentors are trained to surface the conflict between marks, aptitude, family context, and the local ${indShort} job market — and turn it into a concrete 30/60/90-day plan.`,
  ];
  return templates[hash];
}

// === MAIN ===
const cities = parseCities(source);
console.log('Parsed', cities.length, 'cities');

// Generate the per-city content
const cityContent = cities.map(c => ({
  name: c.name,
  stateSlug: c.stateSlug,
  studentNote: generateStudentNote(c),
  professionalNote: generateProfessionalNote(c),
  deliveryNote: generateDeliveryNote(c),
  cityFaqs: generateCityFaqs(c),
}));

// Generate the per-service content
const perService = {};
for (const sk of SERVICE_KEYS) {
  perService[sk] = {};
  for (const c of cities) {
    perService[sk][c.stateSlug + '/' + toCitySlug(c.name)] = {
      longDescription: generateCityLongDescription(c, sk),
      whyItMatters: generateCityWhyItMatters(c, sk),
    };
  }
}

// === Patch indiaLocations.js (only adds fields that are missing) ===
let patched = source;
let patched_count = 0;
function escapeForJsString(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const cbsEndSearch = patched.indexOf('};', cbsStart);
let pos = cbsStart;
let curState = 0, curCount = 0;
const stateCounts = {
  'andhra-pradesh': 28, 'arunachal-pradesh': 6, 'assam': 9, 'bihar': 18, 'chhattisgarh': 9,
  'goa': 5, 'gujarat': 16, 'haryana': 11, 'himachal-pradesh': 8, 'jharkhand': 8,
  'karnataka': 20, 'kerala': 11, 'madhya-pradesh': 14, 'maharashtra': 39, 'manipur': 3,
  'meghalaya': 3, 'mizoram': 2, 'nagaland': 3, 'odisha': 8, 'punjab': 8, 'rajasthan': 12,
  'tamil-nadu': 19, 'telangana': 7, 'tripura': 2, 'uttar-pradesh': 32, 'uttarakhand': 9,
  'west-bengal': 12, 'andaman-and-nicobar-islands': 2, 'chandigarh': 1,
  'dadra-and-nagar-haveli-and-daman-and-diu': 2, 'delhi': 11, 'jammu-and-kashmir': 5,
  'ladakh': 2, 'lakshadweep': 1, 'puducherry': 2,
};
let result = patched.substring(0, cbsStart);
while (pos < cbsEndSearch) {
  const cityStart = patched.indexOf('city(', pos);
  if (cityStart === -1 || cityStart >= cbsEndSearch) break;
  let end = cityStart + 5, pd = 1, bd = 0, is = false, sc = null, es = false;
  while (end < patched.length && pd > 0) {
    const ch = patched[end];
    if (es) { es = false; end++; continue; }
    if (is) { if (ch === '\\') { es = true; end++; continue; } if (ch === sc) { is = false; end++; continue; } end++; continue; }
    if (ch === "'" || ch === '"' || ch === '`') { is = true; sc = ch; end++; continue; }
    if (ch === '(') pd++;
    if (ch === ')') pd--;
    if (ch === '{') bd++;
    if (ch === '}') bd--;
    end++;
  }
  const call = patched.substring(cityStart, end);
  const nameMatch = call.match(/^city\(\s*'([^']+)'/);
  if (!nameMatch) { pos = end; continue; }
  const name = nameMatch[1];
  const citySlug = toCitySlug(name);
  const stateSlug = stateOrder[curState];
  const key = stateSlug + '/' + citySlug;
  const cData = cityContent.find(c => c.name === name && c.stateSlug === stateSlug);

  let newCall = call;
  if (cData) {
    const hasSN = /studentNote:\s*'/.test(call);
    const hasPN = /professionalNote:\s*'/.test(call);
    const hasDN = /deliveryNote:\s*'/.test(call);
    const hasFAQs = /faqs:\s*\[/.test(call);

    if (!hasSN || !hasPN || !hasDN || !hasFAQs) {
      const optsEnd = newCall.length - 2;
      let depth = 1, optsStart = -1, pp = optsEnd - 1;
      let s = false, sc2 = null, es2 = false;
      while (pp >= 0) {
        const ch = newCall[pp];
        if (es2) { es2 = false; pp--; continue; }
        if (s) {
          if (ch === sc2) { if (pp > 0 && newCall[pp-1] === '\\') { es2 = true; pp--; continue; } s = false; pp--; continue; }
          pp--; continue;
        }
        if (ch === "'" || ch === '"' || ch === '`') { s = true; sc2 = ch; pp--; continue; }
        if (ch === '}') depth++;
        if (ch === '{') { depth--; if (depth === 0) { optsStart = pp; break; } }
        pp--;
      }
      if (optsStart !== -1) {
        const optsBody = newCall.substring(optsStart + 1, optsEnd).trim();
        const fieldsToAdd = [];
        if (!hasSN) fieldsToAdd.push(`      studentNote: '${escapeForJsString(cData.studentNote)}',`);
        if (!hasPN) fieldsToAdd.push(`      professionalNote: '${escapeForJsString(cData.professionalNote)}',`);
        if (!hasDN) fieldsToAdd.push(`      deliveryNote: '${escapeForJsString(cData.deliveryNote)}',`);
        if (!hasFAQs) {
          const faqLines = ['      faqs: ['];
          for (const faq of cData.cityFaqs) {
            faqLines.push(`        { q: '${escapeForJsString(faq.q)}', a: '${escapeForJsString(faq.a)}' },`);
          }
          faqLines.push('      ]');
          fieldsToAdd.push(faqLines.join('\n'));
        }
        if (fieldsToAdd.length > 0) {
          const sep = optsBody.length > 0 ? '\n' : '';
          newCall = newCall.substring(0, optsEnd) + sep + fieldsToAdd.join('\n') + newCall.substring(optsEnd);
          patched_count++;
        }
      }
    }
  }
  result += patched.substring(pos, cityStart) + newCall;
  pos = end;
  curCount++;
  if (curCount >= stateCounts[stateOrder[curState]]) { curState++; curCount = 0; }
}
result += patched.substring(pos);

fs.writeFileSync(INDIA, result);
console.log(`Patched ${patched_count} cities in ${dataPath}`);

// === Write cityServiceContent.js ===
let out = `// Per-city, per-service content for the 2,768 city pages.
// Auto-generated by scripts/regenerate-city-content.mjs.
//
// Each city has 8 service-specific content blocks (one per service), each
// containing a city-specific longDescription and whyItMatters paragraph.
// This is the layer that makes every city page genuinely unique per service.
//
// To regenerate after editing the cities in indiaLocations.js, run:
//   node scripts/regenerate-city-content.mjs

const CITY_SERVICE_CONTENT = {\n`;
for (const [serviceSlug, cities2] of Object.entries(perService)) {
  out += `  '${serviceSlug}': {\n`;
  for (const [key, content] of Object.entries(cities2)) {
    out += `    '${key}': {\n`;
    out += `      longDescription: ${JSON.stringify(content.longDescription)},\n`;
    out += `      whyItMatters: ${JSON.stringify(content.whyItMatters)},\n`;
    out += `    },\n`;
  }
  out += `  },\n`;
}
out += `};\n\nexport default CITY_SERVICE_CONTENT;\n`;

fs.writeFileSync(CITY_CONTENT, out);
console.log(`Wrote ${outPath} (${out.length} bytes)`);
console.log('Done. Run `npm run build` to verify.');
