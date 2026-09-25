/**
 * import-flashlearners-notes.cjs
 * Comprehensive extraction of ALL FlashLearners notes with case-insensitive mapping
 * and deduplication.
 */
const fs = require('fs');
const path = require('path');

const TOPICS_JSON = path.join(
  'C:\\Users\\WORK SPACE\\Downloads\\flashlearners_unpacked',
  'assets\\flutter_assets\\assets\\data\\topics.json'
);

const OUTPUT_DIR = path.join(__dirname, 'src', 'data', 'comprehensiveNotes');

// Case-insensitive mapping from FlashLearners subject_name to StudyPlug config
const SUBJECT_CONFIG = {
  'english':                  { name: 'English Language',       file: 'english.ts',     export: 'ENGLISH_NOTES' },
  'english studies':          { name: 'English Language',       file: 'english.ts',     export: 'ENGLISH_NOTES' },
  'mathematics':              { name: 'Mathematics',            file: 'mathematics.ts', export: 'MATHEMATICS_NOTES' },
  'physics':                  { name: 'Physics',                file: 'physics.ts',     export: 'PHYSICS_NOTES' },
  'chemistry':                { name: 'Chemistry',              file: 'chemistry.ts',   export: 'CHEMISTRY_NOTES' },
  'biology':                  { name: 'Biology',                file: 'biology.ts',     export: 'BIOLOGY_NOTES' },
  'economics':                { name: 'Economics',              file: 'economics.ts',   export: 'ECONOMICS_NOTES' },
  'government':               { name: 'Government',             file: 'government.ts',  export: 'GOVERNMENT_NOTES' },
  'literature':               { name: 'Literature in English',  file: 'literature.ts',  export: 'LITERATURE_NOTES' },
  'commerce':                 { name: 'Commerce',               file: 'commerce.ts',    export: 'COMMERCE_NOTES' },
  'agriculture':              { name: 'Agriculture',            file: 'agriculture.ts', export: 'AGRICULTURE_NOTES' },
  'geography':                { name: 'Geography',              file: 'geography.ts',   export: 'GEOGRAPHY_NOTES' },
  'history':                  { name: 'History',                file: 'history.ts',     export: 'HISTORY_NOTES' },
  'accounting':               { name: 'Accounting',             file: 'accounting.ts',  export: 'ACCOUNTING_NOTES' },
  'crs':                      { name: 'CRS',                    file: 'crs.ts',         export: 'CRS_NOTES' },
  'crk':                      { name: 'CRS',                    file: 'crs.ts',         export: 'CRS_NOTES' },
  'irk':                      { name: 'IRK',                    file: 'irk.ts',         export: 'IRK_NOTES' },
  'marketing':                { name: 'Marketing',              file: 'marketing.ts',   export: 'MARKETING_NOTES' },
  'civic education':          { name: 'Civic Education',        file: 'civic.ts',       export: 'CIVIC_NOTES' },
  'basic science':            { name: 'Basic Science',          file: 'basicScience.ts',export: 'BASIC_SCIENCE_NOTES' },
  'basic technology':         { name: 'Basic Technology',       file: 'basicTech.ts',   export: 'BASIC_TECH_NOTES' },
  'social studies':           { name: 'Social Studies',         file: 'socialStudies.ts',export: 'SOCIAL_STUDIES_NOTES' },
  'computer':                 { name: 'Computer Studies',       file: 'computer.ts',    export: 'COMPUTER_NOTES' },
  'ict':                      { name: 'Computer Studies',       file: 'computer.ts',    export: 'COMPUTER_NOTES' },
  'digital literacy':         { name: 'Computer Studies',       file: 'computer.ts',    export: 'COMPUTER_NOTES' },
  'digital tech':             { name: 'Computer Studies',       file: 'computer.ts',    export: 'COMPUTER_NOTES' },
  'french':                   { name: 'French',                 file: 'french.ts',      export: 'FRENCH_NOTES' },
  'business studies':         { name: 'Business Studies',       file: 'business.ts',    export: 'BUSINESS_NOTES' },
  'business':                 { name: 'Business Studies',       file: 'business.ts',    export: 'BUSINESS_NOTES' },
  'phe':                      { name: 'Physical & Health Education', file: 'phe.ts',    export: 'PHE_NOTES' }
};

// Strip HTML to plain text summary
function htmlToText(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 280);
}

// Escape backticks and template string interpolations
function esc(str) {
  return (str || '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

// Escape single-quoted strings
function escSQ(str) {
  return (str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

console.log('📖 Reading FlashLearners topics.json...');
const raw = fs.readFileSync(TOPICS_JSON, 'utf8');
const allTopics = JSON.parse(raw);
console.log(`✅ Loaded ${allTopics.length} total topics from APK.`);

// Group and deduplicate by target subject
const subjectNotesMap = {};

for (const topic of allTopics) {
  if (!topic.notes || topic.notes.trim() === '') continue;
  const rawSub = (topic.subject_name || '').toLowerCase().trim();
  const cfg = SUBJECT_CONFIG[rawSub];
  if (!cfg) continue;

  const targetSub = cfg.name;
  if (!subjectNotesMap[targetSub]) subjectNotesMap[targetSub] = new Map();

  const normTopicName = topic.name.trim().toLowerCase();
  const existing = subjectNotesMap[targetSub].get(normTopicName);

  // If topic already exists, keep whichever note is longer/richer
  if (!existing || (topic.notes.length > existing.notes.length)) {
    subjectNotesMap[targetSub].set(normTopicName, topic);
  }
}

let globalId = 1000;
const subjectSummary = [];

// Read handcrafted English notes (IDs 401, 402, 403) from existing english.ts if present
let handcraftedEnglishHeader = null;
const englishPath = path.join(OUTPUT_DIR, 'english.ts');
if (fs.existsSync(englishPath)) {
  const currentEnglish = fs.readFileSync(englishPath, 'utf8');
  // Find where ID 403 ends (around line 540)
  const id403Match = currentEnglish.indexOf('id: 403');
  if (id403Match !== -1) {
    // Look for the end of note 403
    const nextNoteIdx = currentEnglish.indexOf('id: 1133');
    if (nextNoteIdx !== -1) {
      // Find the comma before id: 1133
      const commaBefore = currentEnglish.lastIndexOf(',', nextNoteIdx);
      if (commaBefore !== -1) {
        handcraftedEnglishHeader = currentEnglish.slice(0, commaBefore).trim();
      }
    }
  }
}

// Extract and write each subject file
for (const [targetSub, topicsMap] of Object.entries(subjectNotesMap)) {
  // Find matching config for file name and export name
  const sampleKey = Object.keys(SUBJECT_CONFIG).find(k => SUBJECT_CONFIG[k].name === targetSub);
  const cfg = SUBJECT_CONFIG[sampleKey];
  if (!cfg) continue;

  const topicsList = Array.from(topicsMap.values());
  subjectSummary.push({ subject: targetSub, count: topicsList.length, file: cfg.file });

  const noteEntries = topicsList.map(topic => {
    const id = globalId++;
    const summaryText = escSQ(htmlToText(topic.notes));
    const topicName = escSQ(topic.name);
    const htmlContent = esc(topic.notes);

    return `  {
    id: ${id},
    subject: '${targetSub}',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: '${topicName}',
    subtopic: '',
    summary_60s: '${summaryText}',
    key_formulas: '',
    content: \`${htmlContent}\`,
    pro_tips_95: '',
    syllabus_objectives: '',
    updated_at: '2026/2027 Syllabus Masterclass',
  }`;
  });

  const filePath = path.join(OUTPUT_DIR, cfg.file);

  if (cfg.file === 'english.ts' && handcraftedEnglishHeader) {
    // Append FlashLearners notes after handcrafted notes 401, 402, 403
    const combinedContent = `${handcraftedEnglishHeader},\n${noteEntries.join(',\n')}\n];\n`;
    fs.writeFileSync(filePath, combinedContent, 'utf8');
    console.log(`✅ ${cfg.file}: Preserved handcrafted notes 401-403 + added ${topicsList.length} FlashLearners notes`);
  } else {
    // Pure overwrite with clean header
    const fileContent = `import { LessonNote } from '../masterLessonNotes';\n\nexport const ${cfg.export}: LessonNote[] = [\n${noteEntries.join(',\n')}\n];\n`;
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`✅ ${cfg.file}: Wrote ${topicsList.length} notes`);
  }
}

console.log('\n📊 === EXTRACTION SUMMARY ===');
let grandTotal = 0;
subjectSummary.sort((a,b) => b.count - a.count).forEach(s => {
  console.log(`   • ${s.subject} (${s.file}): ${s.count} notes`);
  grandTotal += s.count;
});
console.log(`\n🎉 Total Notes Extracted: ${grandTotal}`);

// Update index.ts to export all subjects
const indexImports = [];
const indexExports = [];

const uniqueConfigs = [];
const seenFiles = new Set();
for (const val of Object.values(SUBJECT_CONFIG)) {
  if (!seenFiles.has(val.file)) {
    seenFiles.add(val.file);
    uniqueConfigs.push(val);
  }
}

for (const cfg of uniqueConfigs) {
  const baseName = cfg.file.replace('.ts', '');
  indexImports.push(`import { ${cfg.export} } from './${baseName}';`);
  indexExports.push(`  ...${cfg.export},`);
}

const indexContent = `/**
 * StudyPlug Comprehensive Notes Index
 * ====================================
 * Combines all subject lesson notes extracted from FlashLearners + StudyPlug Handcrafted Master Notes.
 */

import { LessonNote } from '../masterLessonNotes';

// ─── Subject Files ───────────────────────────────────────────────────────────
${indexImports.join('\n')}

// ─── Master Comprehensive Notes Export ─────────────────────────────────────────
export const COMPREHENSIVE_NOTES: LessonNote[] = [
${indexExports.join('\n')}
];
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent, 'utf8');
console.log('✅ Updated src/data/comprehensiveNotes/index.ts with all subjects');
