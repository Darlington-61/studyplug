const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Bundle questions into temporary cjs
esbuild.buildSync({
  entryPoints: ['src/data/physicsQuestions.ts', 'src/data/questions.ts'],
  outdir: 'scratch_sql',
  outExtension: { '.js': '.cjs' },
  bundle: true,
  format: 'cjs',
  platform: 'node'
});

const { PHYSICS_QUESTIONS } = require('./scratch_sql/physicsQuestions.cjs');
const { MATHEMATICS_QUESTIONS } = require('./scratch_sql/questions.cjs');

function esc(val) {
  if (val === null || val === undefined) return 'NULL';
  return "'" + String(val).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

let sql = `-- ==========================================================
-- Study Plug - JAMB UTME Database Schema & Past Questions
-- Compatible with cPanel MySQL 5.7+ / MariaDB 10.3+ / phpMyAdmin
-- ==========================================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS \`subjects\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`name\` varchar(100) NOT NULL,
  \`code\` varchar(20) NOT NULL UNIQUE,
  \`total_questions\` int(11) NOT NULL DEFAULT 0,
  \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO \`subjects\` (\`id\`, \`name\`, \`code\`, \`total_questions\`) VALUES
(1, 'Physics', 'PHY', ${PHYSICS_QUESTIONS.length}),
(2, 'Mathematics', 'MTH', ${MATHEMATICS_QUESTIONS.length}),
(3, 'Chemistry', 'CHM', 0),
(4, 'Biology', 'BIO', 0),
(5, 'Use of English', 'ENG', 0)
ON DUPLICATE KEY UPDATE \`name\`=\`name\`;

CREATE TABLE IF NOT EXISTS \`questions\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`subject\` varchar(50) NOT NULL DEFAULT 'Physics',
  \`exam_year\` int(11) NOT NULL,
  \`question_num\` int(11) NOT NULL,
  \`text\` text NOT NULL,
  \`image_url\` varchar(255) DEFAULT NULL,
  \`image_svg\` text DEFAULT NULL,
  \`option_a\` text NOT NULL,
  \`option_b\` text NOT NULL,
  \`option_c\` text NOT NULL,
  \`option_d\` text NOT NULL,
  \`correct_answer\` enum('A','B','C','D') NOT NULL,
  \`explanation\` text DEFAULT NULL,
  \`topic\` varchar(100) DEFAULT NULL,
  \`difficulty\` enum('Easy','Medium','Hard') DEFAULT 'Medium',
  \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  KEY \`idx_subject_year\` (\`subject\`,\`exam_year\`),
  KEY \`idx_subject_topic\` (\`subject\`,\`topic\`),
  KEY \`idx_exam_year\` (\`exam_year\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS \`exam_sessions\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`session_uuid\` varchar(64) NOT NULL UNIQUE,
  \`student_name\` varchar(100) DEFAULT 'Student',
  \`subject\` varchar(50) NOT NULL,
  \`exam_year\` varchar(20) NOT NULL,
  \`score\` int(11) NOT NULL,
  \`total_questions\` int(11) NOT NULL,
  \`accuracy\` int(11) NOT NULL,
  \`time_spent_seconds\` int(11) NOT NULL,
  \`completed_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  KEY \`idx_subject_date\` (\`subject\`,\`completed_at\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO \`questions\` (\`subject\`, \`exam_year\`, \`question_num\`, \`text\`, \`image_url\`, \`image_svg\`, \`option_a\`, \`option_b\`, \`option_c\`, \`option_d\`, \`correct_answer\`, \`explanation\`, \`topic\`, \`difficulty\`) VALUES
`;

const allQuestions = [
  ...PHYSICS_QUESTIONS.map(q => ({ ...q, subject: 'Physics' })),
  ...MATHEMATICS_QUESTIONS.map(q => ({ ...q, subject: 'Mathematics', year: q.year || 2024 }))
];

const rows = allQuestions.map(q => {
  const a = (q.options.find(o => o.key === 'A') || {}).text || '';
  const b = (q.options.find(o => o.key === 'B') || {}).text || '';
  const c = (q.options.find(o => o.key === 'C') || {}).text || '';
  const d = (q.options.find(o => o.key === 'D') || {}).text || '';
  return '(' + [
    esc(q.subject),
    q.year || 2024,
    q.questionNumber || 1,
    esc(q.text),
    esc(q.imageUrl || null),
    esc(q.imageSvg || null),
    esc(a),
    esc(b),
    esc(c),
    esc(d),
    esc(q.correctAnswer),
    esc(q.explanation || ''),
    esc(q.topic || 'General'),
    esc(q.difficulty || 'Medium')
  ].join(', ') + ')';
});

sql += rows.join(',\n') + ';\n\nCOMMIT;\n';

fs.writeFileSync(path.join(__dirname, 'backend', 'studyplug_db.sql'), sql, 'utf8');
fs.rmSync(path.join(__dirname, 'scratch_sql'), { recursive: true, force: true });
console.log('SUCCESS: Generated backend/studyplug_db.sql with ' + allQuestions.length + ' questions');
