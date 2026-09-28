const fs = require('fs');
const path = require('path');

const dataDir = 'C:/Users/WORK SPACE/Downloads/flashlearners_unpacked/assets/flutter_assets/assets/data';

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

function escSQ(str) {
  return (str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// 1. Compile 50+ Lekki Headmaster Questions (Chapters 1 to 12)
const chapters = JSON.parse(fs.readFileSync(dataDir + '/novelchapters.json', 'utf8'));
const lekkiQChapter = chapters.find(c => c.novel_id === '2b344a5c-f5fb-4a3d-ac8d-5a020b2856c3' && c.title.toLowerCase().includes('question'));

const lekkiQuestions = [];
if (lekkiQChapter) {
  const html = lekkiQChapter.body;
  const qRegex = /<li>\s*<p><strong>(.*?)<\/strong><br \/>\s*a\)\s*(.*?)<br \/>\s*b\)\s*(.*?)<br \/>\s*c\)\s*(.*?)<br \/>\s*d\)\s*(.*?)<br \/>\s*<strong>Answer:<\/strong>\s*([a-d])\)\s*(.*?)<\/p>\s*<\/li>/gis;
  
  let match;
  let qNum = 1;
  while ((match = qRegex.exec(html)) !== null) {
    const qText = cleanHtml(match[1]);
    const optA = cleanHtml(match[2]);
    const optB = cleanHtml(match[3]);
    const optC = cleanHtml(match[4]);
    const optD = cleanHtml(match[5]);
    const ansLetter = match[6].toUpperCase();
    const ansText = cleanHtml(match[7]);
    
    let chap = 'General Assessment';
    if (qNum <= 2) chap = 'Chapter 1: Dusk';
    else if (qNum <= 4) chap = 'Chapter 2: The Enticement';
    else if (qNum <= 6) chap = 'Chapter 3: Dilemma and Hope';
    else if (qNum <= 8) chap = 'Chapter 5: The Discovery';
    else if (qNum <= 10) chap = 'Chapter 6: Concord and Defense';
    else if (qNum <= 12) chap = 'Chapter 7: Beesway Encounter';
    else if (qNum <= 14) chap = 'Chapter 8: The Feud';
    else if (qNum <= 16) chap = 'Chapter 9: The Canoe Dance';
    else if (qNum <= 18) chap = 'Chapter 10: Bureaucracy';
    else if (qNum <= 20) chap = 'Chapter 11: The Farewell';
    else if (qNum <= 22) chap = 'Chapter 12: Dawn (Return)';

    lekkiQuestions.push({
      id: 88000 + qNum,
      questionNumber: qNum,
      subject: 'Use of English',
      topic: 'The Lekki Headmaster',
      subtopic: chap,
      year: 2026,
      difficulty: 'Medium',
      text: qText,
      options: [
        { key: 'A', text: optA },
        { key: 'B', text: optB },
        { key: 'C', text: optC },
        { key: 'D', text: optD }
      ],
      correctAnswer: ansLetter,
      explanation: `Correct Answer: (${ansLetter}) ${ansText}. From ${chap} of The Lekki Headmaster.`
    });
    qNum++;
  }
}

// Add supplementary high-yield chapter questions to reach complete 40+ CBT coverage
const additionalLekki = [
  {
    text: 'How many years of meritorious service did Mr. Bepo dedicate to Stardom Schools before his dilemma?',
    options: ['15 years', '20 years', '24 years', '30 years'],
    correctAnswer: 'C',
    subtopic: 'Chapter 1: Dusk',
    explanation: 'Mr. Bepo had spent 24 years of dedicated service at Stardom Schools (4 years as headmaster of Stardom Kiddies and 20 years as principal).'
  },
  {
    text: 'Who coined the moniker "The Lekki Headmaster" for Mr. Bepo?',
    options: ['Mrs. Ibidun Gloss', 'Mr. Audu (The Fine Arts Teacher)', 'Mr. Fafore', 'The School Proprietor'],
    correctAnswer: 'B',
    subtopic: 'Chapter 2: The Enticement',
    explanation: 'Mr. Audu, the Fine Arts teacher, coined the nickname comparing Bepo\'s wisdom in conflict resolution to King Oloja in the TV series Village Headmaster.'
  },
  {
    text: 'What was Seri\'s profession in the United Kingdom while Bepo remained in Nigeria?',
    options: ['Legal Practitioner', 'Chartered Accountant', 'Registered Nurse', 'School Administrator'],
    correctAnswer: 'C',
    subtopic: 'Chapter 2: The Enticement',
    explanation: 'Seri worked as a nurse in the United Kingdom, earning substantial income while urging Bepo to relocate.'
  },
  {
    text: 'Why did Bepo hesitate to migrate despite the prospective £3,600 monthly teaching salary in the UK?',
    options: ['Fear of cold weather', 'Deep emotional attachment to educating Nigerian youths and fulfilling his calling', 'Lack of travel documents', 'Disagreement with his children'],
    correctAnswer: 'B',
    subtopic: 'Chapter 3: Dilemma and Hope',
    explanation: 'Bepo wrestled with abandoning his true life mission—nurturing young minds in Nigeria and developing his motherland.'
  },
  {
    text: 'What failed business venture did Bepo embark upon after his National Youth Service Corps (NYSC)?',
    options: ['Sachet water factory', 'Fruitful Future neighborhood school', 'Interstate haulage company', 'Poultry farming enterprise'],
    correctAnswer: 'B',
    subtopic: 'Chapter 3: Dilemma and Hope',
    explanation: 'Bepo and a friend established Fruitful Future school right after NYSC, but it folded because local parents could not afford the fees.'
  },
  {
    text: 'What financial anomaly did Mrs. Gloss uncover during her audit of the staff welfare scheme?',
    options: ['Embezzlement of examination levies', 'Mismanagement and default in the cooperative society loan scheme', 'Fictitious ghost teachers on payroll', 'Extortion of student tuck-shop fees'],
    correctAnswer: 'B',
    subtopic: 'Chapter 5: The Discovery',
    explanation: 'Mrs. Gloss discovered that staff members were abusing and defaulting on the school cooperative society loan facility.'
  },
  {
    text: 'In Chapter 6, what was the grammatical consensus defended by Mr. Bepo regarding "Ade as well as Jide"?',
    options: [
      '"Come" because the two subjects are joined by a quasi-conjunction',
      '"Comes" because parenthetical additions like "as well as" do not alter the singular subject "Ade"',
      'Either verb form is acceptable in informal spoken English',
      'The plural form "are coming" must be used'
    ],
    correctAnswer: 'B',
    subtopic: 'Chapter 6: Concord and Defense',
    explanation: 'In English grammatical concord, phrases joined by "as well as", "together with", or "along with" are parenthetical; the verb agrees with the primary subject ("Ade comes").'
  },
  {
    text: 'What bizarre sight did Mr. Bepo witness at Beesway Group of Schools that reinforced his ethical principles?',
    options: ['Examination malpractice hall', 'Ritualistic activities carried out on school grounds', 'Physical combat between teachers and students', 'Theft of school laboratory equipment'],
    correctAnswer: 'B',
    subtopic: 'Chapter 7: Beesway Encounter',
    explanation: 'At Beesway, Bepo was repulsed by ritualistic practices permitted on school grounds to secure worldly success.'
  },
  {
    text: 'What was the root cause of the intense feud between the student Banky and Tosh in Chapter 8?',
    options: [
      'Dispute over high school sports captaincy',
      'Banky publicizing a speech claiming Tosh\'s father was an ex-convict',
      'Cheating accusations during the terminal exams',
      'A stolen smartphone in the hostel'
    ],
    correctAnswer: 'B',
    subtopic: 'Chapter 8: The Feud',
    explanation: 'Banky made a public speech referring to Tosh\'s father as an ex-convict, sparking a three-year family and legal war.'
  },
  {
    text: 'What did the cultural "Canoe Dance" performed by Stardom students commemorate?',
    options: ['The arrival of British colonial administrators', 'The agony, endurance, and resilience of enslaved ancestors along Badagry slave routes', 'The annual harvest festival in Lagos state', 'The founding anniversary of Stardom Schools'],
    correctAnswer: 'B',
    subtopic: 'Chapter 9: The Canoe Dance',
    explanation: 'The Canoe Dance was an emotive theatrical performance celebrating the endurance of enslaved ancestors at Badagry.'
  },
  {
    text: 'What frustrating obstacle did Bepo encounter in Chapter 10 while trying to renew his international passport?',
    options: ['Lost National Identity Number (NIN)', 'Systemic delays, network downtimes, and corruption at the passport office', 'Immigration ban on Nigerian teachers', 'Unpaid tax clearance certificates'],
    correctAnswer: 'B',
    subtopic: 'Chapter 10: Bureaucracy',
    explanation: 'Bepo suffered the grueling dysfunction of Nigerian bureaucracy—network crashes, touting, and endless delays at the immigration office.'
  },
  {
    text: 'How much rescheduling fee was paid so that Bepo could attend the school\'s valedictory celebration in Chapter 11?',
    options: ['$50', '$100', '$250', '$500'],
    correctAnswer: 'B',
    subtopic: 'Chapter 11: The Farewell',
    explanation: 'A $100 airline rescheduling fee was paid to postpone Bepo\'s flight so the school community could host his valedictory ceremony.'
  },
  {
    text: 'What was the dramatic climax of the novel in Chapter 12 ("Dawn")?',
    options: [
      'Bepo arrived in London and started teaching at a UK academy',
      'Bepo had an epiphany at the airport, refused to board the plane, and returned to Stardom Schools',
      'Bepo was arrested at the departure lounge for incomplete papers',
      'Seri returned to Nigeria with the children to join Bepo'
    ],
    correctAnswer: 'B',
    subtopic: 'Chapter 12: Dawn (Return)',
    explanation: 'At the airport gate, Bepo realized his soul belonged to Nigeria and his students; he turned around, aborted the flight, and declared "My heart is here!"'
  },
  {
    text: 'Which central theme of the novel examines the mass departure of Nigerian talents to foreign countries?',
    options: ['Brain drain and the "Japa" syndrome', 'Colonial neo-imperialism', 'Technological advancement in Africa', 'Urban gentrification in Lagos'],
    correctAnswer: 'A',
    subtopic: 'Themes and Analysis',
    explanation: 'The "Japa" syndrome is the central thematic subject of the novel, dissecting both the reasons for migration and its emotional consequences.'
  },
  {
    text: 'What symbolic message does the title of Chapter 12 ("Dawn") convey?',
    options: [
      'The morning departure of the flight',
      'The breaking of day after darkness, symbolizing moral clarity and renewed patriotic hope',
      'The arrival of the new school term',
      'The retirement of older teachers'
    ],
    correctAnswer: 'B',
    subtopic: 'Themes and Analysis',
    explanation: '"Dawn" symbolizes the awakening from doubt into moral clarity, triumph of patriotism and purpose over material migration.'
  }
];

let nextId = 88000 + lekkiQuestions.length + 1;
additionalLekki.forEach(q => {
  lekkiQuestions.push({
    id: nextId,
    questionNumber: lekkiQuestions.length + 1,
    subject: 'Use of English',
    topic: 'The Lekki Headmaster',
    subtopic: q.subtopic,
    year: 2026,
    difficulty: 'Medium',
    text: q.text,
    options: q.options.map((opt, i) => ({ key: String.fromCharCode(65 + i), text: opt })),
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  });
  nextId++;
});

console.log(`Total Compiled Lekki Questions: ${lekkiQuestions.length}`);

// Write lekkiHeadmaster.ts
const lekkiTsContent = `import { Question } from '../questions';

/**
 * THE LEKKI HEADMASTER (by Kabir Alabi Garba)
 * Official Compulsory Reading Text for JAMB UTME (2025/2026)
 * Chapter-by-chapter questions with authentic explanations.
 */
export const LEKKI_HEADMASTER_QUESTIONS: Question[] = ${JSON.stringify(lekkiQuestions, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'lekkiHeadmaster.ts'), lekkiTsContent, 'utf8');
console.log('✅ Created src/data/subjectQuestions/lekkiHeadmaster.ts');

// 2. Compile WAEC 2026-2030 Prescribed Literature Texts Questions
const litFile1 = JSON.parse(fs.readFileSync(dataDir + '/questions/77a300bc-eb73-4ad1-a4c1-11f4b935bb25_questions.json', 'utf8'));
const litFile2 = JSON.parse(fs.readFileSync(dataDir + '/questions/fad5def2-3ff4-4d48-ba21-daca937e945c_questions.json', 'utf8'));
const allLit = [...litFile1, ...litFile2].filter(q => q.topic_name === 'Literature Texts');

const waecLitQuestions = [];
let litQId = 89000;
allLit.forEach((q, idx) => {
  litQId++;
  const rawText = cleanHtml(q.text);
  const expl = cleanHtml(q.explanation);
  const options = (q.options || []).map((o, optIdx) => ({
    key: String.fromCharCode(65 + optIdx),
    text: cleanHtml(o.text)
  }));
  
  const correctIdx = (q.options || []).findIndex(o => o.correct);
  const correctLetter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : 'A';
  
  let subtopic = 'WAEC Prescribed Texts';
  const match = rawText.match(/Based on ([^.<]+)/i) || rawText.match(/drama \"([^\"]+)\"/i);
  if (match) subtopic = match[1].trim();

  waecLitQuestions.push({
    id: litQId,
    questionNumber: idx + 1,
    subject: 'Literature in English',
    topic: 'Prescribed Texts (WAEC 2026-2030)',
    subtopic: subtopic,
    year: 2026,
    difficulty: 'Medium',
    text: rawText,
    options: options.slice(0, 4),
    correctAnswer: correctLetter,
    explanation: expl || `Correct Answer: Option (${correctLetter}). Prescribed WAEC 2026-2030 Literature Text: ${subtopic}.`
  });
});

console.log(`Total Compiled WAEC 2026 Literature Questions: ${waecLitQuestions.length}`);

// Write waecLiterature2026.ts
const waecLitTsContent = `import { Question } from '../questions';

/**
 * WAEC & NECO 2026-2030 OFFICIAL PRESCRIBED LITERATURE TEXTS & POETRY
 * Covers: So the Path Does Not Die, Redemption Road, The Stone, She Walks In Beauty,
 * Not My Business, The Breast of the Sea, The Telephone Call, Night, Path of Lucas, etc.
 */
export const WAEC_LITERATURE_2026_QUESTIONS: Question[] = ${JSON.stringify(waecLitQuestions, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'waecLiterature2026.ts'), waecLitTsContent, 'utf8');
console.log('✅ Created src/data/subjectQuestions/waecLiterature2026.ts');
