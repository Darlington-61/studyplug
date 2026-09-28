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

// 1. Extract The Lekki Headmaster Questions from novelchapters.json
const chapters = JSON.parse(fs.readFileSync(dataDir + '/novelchapters.json', 'utf8'));
const lekkiQChapter = chapters.find(c => c.novel_id === '2b344a5c-f5fb-4a3d-ac8d-5a020b2856c3' && c.title.toLowerCase().includes('question'));

const lekkiQuestions = [];
if (lekkiQChapter) {
  const html = lekkiQChapter.body;
  // Parse chapters and questions from HTML
  const parts = html.split(/<hr \/>|<p><strong>Chapter \d+:/i);
  let currentChapter = 'Chapter 1: Dusk';
  
  // Use regex to find each question block
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
    
    // Determine chapter based on question number
    let chap = 'General Questions';
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

console.log(`Extracted ${lekkiQuestions.length} Lekki Headmaster questions from novelchapters.json`);

// 2. Extract Literature Texts questions from questions/ folder
const litFile1 = JSON.parse(fs.readFileSync(dataDir + '/questions/77a300bc-eb73-4ad1-a4c1-11f4b935bb25_questions.json', 'utf8'));
const litFile2 = JSON.parse(fs.readFileSync(dataDir + '/questions/fad5def2-3ff4-4d48-ba21-daca937e945c_questions.json', 'utf8'));

const allLit = [...litFile1, ...litFile2].filter(q => q.topic_name === 'Literature Texts');
console.log(`Found ${allLit.length} Literature Texts questions in questions JSON files.`);

const parsedLitQuestions = [];
let litId = 89000;
for (const q of allLit) {
  litId++;
  const rawText = cleanHtml(q.text);
  const expl = cleanHtml(q.explanation);
  const options = (q.options || []).map((o, idx) => ({
    key: String.fromCharCode(65 + idx),
    text: cleanHtml(o.text)
  }));
  
  const correctIdx = (q.options || []).findIndex(o => o.correct);
  const correctLetter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : 'A';
  
  // Extract book title
  let subtopic = 'General Literature Texts';
  const match = rawText.match(/Based on ([^.]+)/i) || rawText.match(/drama \"([^\"]+)\"/i);
  if (match) subtopic = match[1].trim();

  parsedLitQuestions.push({
    id: litId,
    questionNumber: parsedLitQuestions.length + 1,
    subject: 'Literature in English',
    topic: 'Prescribed Texts (WAEC 2026-2030)',
    subtopic: subtopic,
    year: 2026,
    difficulty: 'Medium',
    text: rawText,
    options: options.slice(0, 4),
    correctAnswer: correctLetter,
    explanation: expl || `Correct Answer: Option (${correctLetter}). Prescribed WAEC literature text: ${subtopic}.`
  });
}

console.log(`Parsed ${parsedLitQuestions.length} WAEC 2026-2030 literature questions.`);
