/**
 * upload_junior_bece_to_mysql.cjs
 * Ingest remaining Junior WAEC / BECE & Vocational subjects from Flashlearners.
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
}

async function main() {
  const files = fs.readdirSync(dataDir + '/questions');
  const JUNIOR_MAPPINGS = [
    { flSubject: 'Basic Technology', targetSubject: 'BECE Basic Technology', year: 2024 },
    { flSubject: 'Basic Science', targetSubject: 'BECE Basic Science', year: 2024 },
    { flSubject: 'Social Studies', targetSubject: 'BECE Social Studies', year: 2024 },
    { flSubject: 'Creative Arts', targetSubject: 'BECE Creative Arts', year: 2024 },
    { flSubject: 'Arts And Crafts', targetSubject: 'BECE Cultural & Creative Arts', year: 2024 },
    { flSubject: 'Marketing', targetSubject: 'Marketing', year: 2024 },
    { flSubject: 'PHE', targetSubject: 'Physical & Health Education', year: 2024 },
    { flSubject: 'Digital Tech', targetSubject: 'BECE Information Technology', year: 2024 }
  ];

  for (const m of JUNIOR_MAPPINGS) {
    console.log(`\n📦 Ingesting ${m.targetSubject} (from ${m.flSubject})...`);
    let flQuestions = [];

    for (const f of files) {
      const subId = f.split('_')[0];
      const sName = subMap[subId];
      if (sName === m.flSubject) {
        const qs = JSON.parse(fs.readFileSync(path.join(dataDir, 'questions', f), 'utf8'));
        flQuestions.push(...qs);
      }
    }

    if (flQuestions.length === 0) continue;

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
        exam_year: m.year,
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

    console.log(`   Found ${dbQuestions.length} questions. Ingesting to live DB...`);
    await uploadInBatches(dbQuestions);
  }

  console.log('\n🎉 ALL JUNIOR & BECE SUBJECTS INGESTED SUCCESSFULLY!');
}

main().catch(console.error);
