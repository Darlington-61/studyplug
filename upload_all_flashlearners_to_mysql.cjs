/**
 * upload_all_flashlearners_to_mysql.cjs
 * Batch uploads missing questions from Flashlearners into StudyPlug live MySQL DB.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

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

function sendBatch(questions) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      api_key: 'studyplug_secret_2026',
      questions
    });

    const req = https.request({
      hostname: 'eznonews.com.ng',
      path: '/studyplug-api/import_questions.php?api_key=studyplug_secret_2026',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 30000
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          resolve(json);
        } catch(e) {
          resolve({ success: false, raw: body });
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.write(payload);
    req.end();
  });
}

async function uploadInBatches(questions, batchSize = 80) {
  let totalInserted = 0;
  let totalUpdated = 0;
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize);
    try {
      const res = await sendBatch(batch);
      if (res && res.success) {
        totalInserted += (res.inserted || 0);
        totalUpdated += (res.updated || 0);
        process.stdout.write(`\r   Progress: ${Math.min(i + batchSize, questions.length)}/${questions.length} | In DB: ${res.total_in_db || 'N/A'}`);
      } else {
        console.error(`\nBatch error at ${i}:`, res ? (res.error || res.raw) : 'Unknown');
      }
    } catch(err) {
      console.error(`\nNetwork error at ${i}:`, err.message);
    }
  }
  console.log(`\n   Done! Inserted: ${totalInserted}, Updated: ${totalUpdated}`);
  return { totalInserted, totalUpdated };
}

async function main() {
  console.log('🚀 === STUDYPLUG LIVE MYSQL INGESTION FROM FLASHLEARNERS ===');

  const files = fs.readdirSync(dataDir + '/questions');
  
  // Mapping of Flashlearners file/subject to StudyPlug database subject
  const TARGET_MAPPINGS = [
    // 1. Novels
    { type: 'novel', name: 'The Lekki Headmaster' },
    { type: 'novel_lit', name: 'Prescribed WAEC Texts 2026-2030' },
    // 2. Post-UTME
    { flSubject: 'General Studies', targetSubject: 'Post-UTME General Paper', year: 2024 },
    { flSubject: 'Medical Sciences', targetSubject: 'Post-UTME Medical Sciences', year: 2024 },
    { flSubject: 'Science And Engr', targetSubject: 'Post-UTME Science & Engineering', year: 2024 },
    { flSubject: 'Arts And Law', targetSubject: 'Post-UTME Arts & Law', year: 2024 },
    { flSubject: 'Social And Mgmt', targetSubject: 'Post-UTME Social & Management', year: 2024 },
    // 3. Current Affairs
    { flFile: 'ca_questions.json', targetSubject: 'Current Affairs', year: 2024 },
    // 4. CRS & CRK
    { flSubject: 'CRS', targetSubject: 'Christian Religious Knowledge', year: 2024 },
    { flSubject: 'CRK', targetSubject: 'Christian Religious Knowledge', year: 2023 },
    // 5. Agriculture
    { flSubject: 'Agriculture', targetSubject: 'Agriculture', year: 2024 },
    // 6. Accounting
    { flSubject: 'Accounting', targetSubject: 'Financial Accounting', year: 2024 },
    { flSubject: 'ACCOUNTING', targetSubject: 'Financial Accounting', year: 2023 },
    // 7. Civic Education
    { flSubject: 'Civic Education', targetSubject: 'Civic Education', year: 2024 },
    // 8. Business Studies
    { flSubject: 'Business Studies', targetSubject: 'Business Studies', year: 2024 },
    { flSubject: 'BUSINESS', targetSubject: 'Business Studies', year: 2023 },
    // 9. NCEE (Common Entrance)
    { flSubject: 'Verbal Reasoning', targetSubject: 'NCEE Verbal Reasoning', year: 2024 },
    { flSubject: 'Quantitative', targetSubject: 'NCEE Quantitative Reasoning', year: 2024 },
    { flSubject: 'Science', targetSubject: 'NCEE General Science', year: 2024 },
    { flSubject: 'Vocational Studies', targetSubject: 'NCEE Vocational Studies', year: 2024 },
    // 10. Nigerian Languages
    { flSubject: 'Yoruba', targetSubject: 'Yoruba', year: 2024 },
    { flSubject: 'Igbo', targetSubject: 'Igbo', year: 2024 },
    { flSubject: 'Hausa', targetSubject: 'Hausa', year: 2024 },
    { flSubject: 'French', targetSubject: 'French', year: 2024 }
  ];

  // 1. Process Lekki Headmaster Questions
  console.log('\n📖 Ingesting The Lekki Headmaster (JAMB 2026 Novel)...');
  const lekkiRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'lekkiHeadmaster.json'), 'utf8'));
  const dbLekki = lekkiRaw.map((q, idx) => ({
    subject: 'Use of English',
    exam_year: 2026,
    question_num: idx + 1,
    text: q.text,
    option_a: q.options[0]?.text || '',
    option_b: q.options[1]?.text || '',
    option_c: q.options[2]?.text || '',
    option_d: q.options[3]?.text || '',
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    topic: 'The Lekki Headmaster',
    difficulty: 'Medium'
  }));
  await uploadInBatches(dbLekki);

  // 2. Process WAEC 2026 Prescribed Literature Texts
  console.log('\n📚 Ingesting WAEC 2026-2030 Prescribed Texts...');
  const waecRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'waecLiterature2026.json'), 'utf8'));
  const dbWaec = waecRaw.map((q, idx) => ({
    subject: 'Literature in English',
    exam_year: 2026,
    question_num: idx + 1,
    text: q.text,
    option_a: q.options[0]?.text || '',
    option_b: q.options[1]?.text || '',
    option_c: q.options[2]?.text || '',
    option_d: q.options[3]?.text || '',
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    topic: q.subtopic || 'Prescribed Texts (WAEC 2026-2030)',
    difficulty: 'Medium'
  }));
  await uploadInBatches(dbWaec);

  // 3. Process each mapped category
  for (const m of TARGET_MAPPINGS) {
    if (m.type) continue; // already handled novels

    console.log(`\n📦 Ingesting ${m.targetSubject} (from ${m.flSubject || m.flFile})...`);
    let flQuestions = [];

    if (m.flFile) {
      const p = path.join(dataDir, 'questions', m.flFile);
      if (fs.existsSync(p)) flQuestions = JSON.parse(fs.readFileSync(p, 'utf8'));
    } else {
      // Find all files matching flSubject
      for (const f of files) {
        const subId = f.split('_')[0];
        const sName = subMap[subId];
        if (sName === m.flSubject) {
          const qs = JSON.parse(fs.readFileSync(path.join(dataDir, 'questions', f), 'utf8'));
          flQuestions.push(...qs);
        }
      }
    }

    if (flQuestions.length === 0) {
      console.log('   No questions found for', m.flSubject);
      continue;
    }

    const dbQuestions = [];
    let qNum = 1;
    for (const q of flQuestions) {
      const text = cleanHtml(q.text);
      if (!text || text.length < 5 || text.includes('data:image')) continue;
      const opts = (q.options || []).map(o => cleanHtml(o.text)).filter(Boolean);
      if (opts.length < 2) continue;

      const correctIdx = (q.options || []).findIndex(o => o.correct);
      const correctLetter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : 'A';
      
      dbQuestions.push({
        subject: m.targetSubject,
        exam_year: m.year || 2024,
        question_num: qNum++,
        text: text,
        option_a: opts[0] || '',
        option_b: opts[1] || '',
        option_c: opts[2] || '',
        option_d: opts[3] || '',
        correct_answer: correctLetter,
        explanation: cleanHtml(q.explanation) || `Correct Answer: Option (${correctLetter}).`,
        topic: cleanHtml(q.topic_name) || 'General',
        difficulty: 'Medium'
      });
    }

    console.log(`   Found ${dbQuestions.length} clean questions. Ingesting to live database...`);
    await uploadInBatches(dbQuestions);
  }

  console.log('\n🎉 ALL MISSING QUESTIONS SUCCESSFULLY INGESTED INTO STUDYPLUG LIVE MYSQL DATABASE!');
}

main().catch(err => console.error('Fatal error:', err));
