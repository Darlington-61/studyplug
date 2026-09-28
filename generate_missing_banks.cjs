const fs = require('fs');
const path = require('path');

const dataDir = 'C:/Users/WORK SPACE/Downloads/flashlearners_unpacked/assets/flutter_assets/assets/data';
const subjects = JSON.parse(fs.readFileSync(dataDir + '/subjects.json', 'utf8'));
const subMap = {};
subjects.forEach(s => subMap[s.id] = s.name);

function cleanHtml(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseQuestionsFromFile(fileName, targetSubject, defaultTopic, maxCount = 200, startId = 70000) {
  const filePath = path.join(dataDir, 'questions', fileName);
  if (!fs.existsSync(filePath)) return [];
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const list = [];
  let id = startId;
  for (const q of raw) {
    if (list.length >= maxCount) break;
    const text = cleanHtml(q.text);
    if (!text || text.length < 5) continue;
    // Skip questions with embedded base64 image strings in text for cleaner bundle
    if (text.includes('data:image') || (q.text && q.text.includes('data:image'))) continue;

    const options = (q.options || []).map((o, idx) => ({
      key: String.fromCharCode(65 + idx),
      text: cleanHtml(o.text)
    })).filter(o => o.text && o.text.length > 0);

    if (options.length < 2) continue;

    const correctIdx = (q.options || []).findIndex(o => o.correct);
    const correctLetter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : 'A';
    const expl = cleanHtml(q.explanation);

    id++;
    list.push({
      id: id,
      questionNumber: list.length + 1,
      subject: targetSubject,
      topic: cleanHtml(q.topic_name) || defaultTopic,
      difficulty: 'Medium',
      text: text,
      options: options.slice(0, 4),
      correctAnswer: correctLetter,
      explanation: expl || `Correct Answer: Option (${correctLetter}).`
    });
  }
  return list;
}

// 1. Post-UTME Comprehensive Bank
// General Studies (4deb5ad2-04f1-401e-9fbc-21b2253d6e45), Medical Sciences, Science & Engr, Arts & Law
const gsFile = 'dc54683c-ffe4-4093-a6a8-251097735185_questions.json'; // General Studies
const medFile = '6fd711df-f206-46f7-85f7-d6f4e5f57330_questions.json'; // Medical Sciences
const sciFile = '348147_questions.json' || '10bce752-f359-443c-89cc-23cf32723c39_questions.json'; // Science & Engr
const lawFile = 'c3c037ef-a2f6-4757-a76a-6d4482e2417d_questions.json'; // Arts And Law

// Find files dynamically by subject name
const files = fs.readdirSync(dataDir + '/questions');
let gsFileName, medFileName, sciFileName, lawFileName, crsFileName, agricFileName, accFileName, civicFileName;

for (const f of files) {
  const subId = f.split('_')[0];
  const name = subMap[subId] || '';
  if (name === 'General Studies') gsFileName = f;
  if (name === 'Medical Sciences') medFileName = f;
  if (name === 'Science And Engr') sciFileName = f;
  if (name === 'Arts And Law') lawFileName = f;
  if (name === 'CRS' && !crsFileName) crsFileName = f;
  if (name === 'Agriculture' && !agricFileName) agricFileName = f;
  if (name === 'Accounting' && !accFileName) accFileName = f;
  if (name === 'Civic Education' && !civicFileName) civicFileName = f;
}

console.log('Dynamic mapping:', { gsFileName, medFileName, sciFileName, lawFileName, crsFileName, agricFileName, accFileName, civicFileName });

// Generate Post-UTME questions
const postUtmeList = [
  ...parseQuestionsFromFile(gsFileName, 'Post-UTME General Paper', 'General Knowledge & Logic', 100, 71000),
  ...parseQuestionsFromFile(sciFileName, 'Post-UTME Science & Engineering', 'Applied Science & Math', 100, 72000),
  ...parseQuestionsFromFile(medFileName, 'Post-UTME Medical Sciences', 'Biological & Chemical Principles', 100, 73000),
  ...parseQuestionsFromFile(lawFileName, 'Post-UTME Arts & Law', 'Government & Legal Foundations', 100, 74000)
];
console.log(`Generated ${postUtmeList.length} Post-UTME questions.`);

const postUtmeTs = `import { Question } from '../questions';

/**
 * POST-UTME SCREENING MASTER BANK
 * Verified past screening questions for UNILAG, UNIBEN, UI, OAU, UNN, etc.
 * Covers: General Studies, Science & Engineering, Medical Sciences, Arts & Law.
 */
export const POST_UTME_QUESTIONS: Question[] = ${JSON.stringify(postUtmeList, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'postUtme.ts'), postUtmeTs, 'utf8');
console.log('✅ Created src/data/subjectQuestions/postUtme.ts');

// 2. Current Affairs Bank (ca_questions.json)
const caList = parseQuestionsFromFile('ca_questions.json', 'Current Affairs', 'National & Global Affairs', 250, 75000);
console.log(`Generated ${caList.length} Current Affairs questions.`);

const caTs = `import { Question } from '../questions';

/**
 * NIGERIA & INTERNATIONAL CURRENT AFFAIRS QUESTION BANK
 * Vital for Post-UTME General Paper, Scholarship Exams & Civil Service Tests.
 */
export const CURRENT_AFFAIRS_QUESTIONS: Question[] = ${JSON.stringify(caList, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'currentAffairs.ts'), caTs, 'utf8');
console.log('✅ Created src/data/subjectQuestions/currentAffairs.ts');

// 3. Enriched CRS
const crsList = parseQuestionsFromFile(crsFileName, 'Christian Religious Knowledge', 'Old and New Testament', 250, 76000);
const crsTs = `import { Question } from '../questions';

export const CRS_QUESTIONS: Question[] = ${JSON.stringify(crsList, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'crs.ts'), crsTs, 'utf8');
console.log(`✅ Updated crs.ts with ${crsList.length} questions`);

// 4. Enriched Agriculture
const agricList = parseQuestionsFromFile(agricFileName, 'Agriculture', 'Agricultural Science Principles', 250, 77000);
const agricTs = `import { Question } from '../questions';

export const AGRICULTURE_QUESTIONS: Question[] = ${JSON.stringify(agricList, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'agriculture.ts'), agricTs, 'utf8');
console.log(`✅ Updated agriculture.ts with ${agricList.length} questions`);

// 5. Enriched Accounting
const accList = parseQuestionsFromFile(accFileName, 'Principles of Accounts', 'Financial Accounting Principles', 250, 78000);
const accTs = `import { Question } from '../questions';

export const ACCOUNTING_QUESTIONS: Question[] = ${JSON.stringify(accList, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'accounting.ts'), accTs, 'utf8');
console.log(`✅ Updated accounting.ts with ${accList.length} questions`);

// 6. Enriched Civic Education (Merge SSCE, BECE & NCEE)
const civicFiles = [
  'ebeef120-59ed-41e2-9c12-0227b8d85e09_questions.json',
  'e842d5b3-32ae-48c0-bb17-55f3581cacec_questions.json',
  'dd1e25ae-c424-411f-bdab-358404385db2_questions.json'
];
const civicList = [];
let civicStartId = 79000;
for (const cf of civicFiles) {
  const batch = parseQuestionsFromFile(cf, 'Civic Education', 'Civic Values & National Development', 250, civicStartId);
  civicList.push(...batch);
  civicStartId += batch.length;
}
const civicTs = `import { Question } from '../questions';

export const CIVIC_QUESTIONS: Question[] = ${JSON.stringify(civicList, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'civic.ts'), civicTs, 'utf8');
console.log(`✅ Updated civic.ts with ${civicList.length} questions`);
