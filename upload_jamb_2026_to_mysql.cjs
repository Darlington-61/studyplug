/**
 * upload_jamb_2026_to_mysql.cjs
 * Ingests 2026 JAMB UTME Student-Recalled questions into live MySQL DB.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

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

async function uploadInBatches(questions, batchSize = 50) {
  let totalInserted = 0;
  let totalUpdated = 0;
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize);
    try {
      const res = await sendBatch(batch);
      if (res && res.success) {
        totalInserted += (res.inserted || 0);
        totalUpdated += (res.updated || 0);
        console.log(`   Progress: ${Math.min(i + batchSize, questions.length)}/${questions.length} | In DB: ${res.total_in_db || 'N/A'}`);
      } else {
        console.error(`\nBatch error at ${i}:`, res ? (res.error || res.raw) : 'Unknown');
      }
    } catch(err) {
      console.error(`\nNetwork error at ${i}:`, err.message);
    }
  }
  console.log(`\n   Upload Complete! Inserted: ${totalInserted}, Updated: ${totalUpdated}`);
}

async function main() {
  console.log('🚀 === UPLOADING 2026 JAMB UTME STUDENT-RECALLED QUESTIONS TO LIVE MYSQL ===');
  const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'subjectQuestions', 'jamb2026StudentRecalled.json'), 'utf8'));

  const dbQuestions = raw.map((q, idx) => ({
    subject: q.subject,
    exam_year: 2026,
    question_num: idx + 1,
    text: q.text,
    option_a: q.options[0]?.text || '',
    option_b: q.options[1]?.text || '',
    option_c: q.options[2]?.text || '',
    option_d: q.options[3]?.text || '',
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    topic: q.topic,
    difficulty: q.difficulty || 'Medium'
  }));

  await uploadInBatches(dbQuestions);
}

main().catch(console.error);
