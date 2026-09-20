const batch1 = require('./physics_batch1.cjs');
const batch2 = require('./physics_batch2.cjs');
const fs = require('fs');

const all = [...batch1, ...batch2];
const tsQuestions = all.map((q) => ({
  id: 1000 + q.question_num,
  questionNumber: q.question_num,
  subject: q.subject,
  year: q.exam_year,
  topic: q.topic,
  difficulty: q.difficulty,
  text: q.text,
  imageSvg: q.image_svg,
  options: [
    { key: 'A', text: q.option_a },
    { key: 'B', text: q.option_b },
    { key: 'C', text: q.option_c },
    { key: 'D', text: q.option_d }
  ],
  correctAnswer: q.correct_answer,
  explanation: q.explanation + (q.tip ? '\n\n💡 Exam Tip: ' + q.tip : '')
}));

const header = "import { Question } from './questions';\n\nexport const PHYSICS_QUESTIONS: Question[] = ";
const tsContent = header + JSON.stringify(tsQuestions, null, 2) + ';\n';

fs.writeFileSync('src/data/physicsQuestions.ts', tsContent, 'utf8');
console.log('Successfully updated src/data/physicsQuestions.ts! File size:', fs.statSync('src/data/physicsQuestions.ts').size);
