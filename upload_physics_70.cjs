const https = require('https');
const batch1 = require('./physics_batch1.cjs');
const batch2 = require('./physics_batch2.cjs');

const allQuestions = [...batch1, ...batch2];
console.log(`Total Physics 2024 questions to upload: ${allQuestions.length}`);

// Map to API format
const payload = allQuestions.map(q => ({
  subject: q.subject,
  exam_year: q.exam_year,
  question_num: q.question_num,
  text: q.text,
  image_url: null,
  image_svg: q.image_svg,
  option_a: q.option_a,
  option_b: q.option_b,
  option_c: q.option_c,
  option_d: q.option_d,
  correct_answer: q.correct_answer,
  explanation: q.explanation + (q.tip ? '\n\n💡 Exam Tip: ' + q.tip : ''),
  topic: q.topic,
  difficulty: q.difficulty
}));

const postData = JSON.stringify(payload);

const options = {
  hostname: 'eznonews.com.ng',
  port: 443,
  path: '/studyplug-api/import_questions.php?api_key=studyplug_secret_2026',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    try {
      const json = JSON.parse(body);
      console.log('API Response:', JSON.stringify(json, null, 2));
    } catch (e) {
      console.log('Raw Response:', body);
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.write(postData);
req.end();
