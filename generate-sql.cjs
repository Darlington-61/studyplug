const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Bundle questions into temporary cjs
esbuild.buildSync({
  entryPoints: ['src/data/physicsQuestions.ts', 'src/data/questions.ts'],
  outdir: 'scratch_bundle',
  bundle: true,
  format: 'cjs',
  platform: 'node'
});

const { PHYSICS_QUESTIONS } = require('./scratch_bundle/physicsQuestions.js');
const { MATHEMATICS_QUESTIONS } = require('./scratch_bundle/questions.js');

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  return ' + String(val).replace(/[\0\x08\x09\x1a\n\r'\\\%]/g, function (char) {
 switch (char) {
 case \0: return \\0;
 case \x08: return \\b;
 case \x09: return \\t;
 case \x1a: return \\z;
 case \n: return \\n;
 case \r: return \\r;
 case ":
 case ':
 case \:
 case %:
 return \ + char;
 default:
 return char;
 }
 }) + ';
}

let sql = -- ==========================================================
-- Study Plug - JAMB UTME Database Schema & Past Questions
-- Compatible with cPanel MySQL 5.7+ / MariaDB 10.3+ / phpMyAdmin
-- ==========================================================

SET SQL_MODE = NO_AUTO_VALUE_ON_ZERO;
START TRANSACTION;
SET time_zone = +00:00;

--
-- Table structure for table \subjects\
--
CREATE TABLE IF NOT EXISTS \subjects\ (
 \id\ int(11) NOT NULL AUTO_INCREMENT,
 \
ame\ varchar(100) NOT NULL,
 \code\ varchar(20) NOT NULL UNIQUE,
 \ otal_questions\ int(11) NOT NULL DEFAULT 0,
 \created_at\ timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (\id\)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO \subjects\ (\id\, \
ame\, \code\, \ otal_questions\) VALUES
(1, 'Physics', 'PHY', ),
(2, 'Mathematics', 'MTH', ),
(3, 'Chemistry', 'CHM', 0),
(4, 'Biology', 'BIO', 0),
(5, 'Use of English', 'ENG', 0)
ON DUPLICATE KEY UPDATE \
ame\=\
ame\;

--
-- Table structure for table \questions\
--
CREATE TABLE IF NOT EXISTS \questions\ (
 \id\ int(11) NOT NULL AUTO_INCREMENT,
 \subject\ varchar(50) NOT NULL DEFAULT 'Physics',
 \exam_year\ int(11) NOT NULL,
 \question_num\ int(11) NOT NULL,
 \ ext\ text NOT NULL,
 \image_url\ varchar(255) DEFAULT NULL,
 \image_svg\ text DEFAULT NULL,
 \option_a\ text NOT NULL,
 \option_b\ text NOT NULL,
 \option_c\ text NOT NULL,
 \option_d\ text NOT NULL,
 \correct_answer\ enum('A','B','C','D') NOT NULL,
 \explanation\ text DEFAULT NULL,
 \ opic\ varchar(100) DEFAULT NULL,
 \difficulty\ enum('Easy','Medium','Hard') DEFAULT 'Medium',
 \created_at\ timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (\id\),
 KEY \idx_subject_year\ (\subject\,\exam_year\),
 KEY \idx_subject_topic\ (\subject\,\ opic\),
 KEY \idx_exam_year\ (\exam_year\)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table \exam_sessions\
--
CREATE TABLE IF NOT EXISTS \exam_sessions\ (
 \id\ int(11) NOT NULL AUTO_INCREMENT,
 \session_uuid\ varchar(64) NOT NULL UNIQUE,
 \student_name\ varchar(100) DEFAULT 'Student',
 \subject\ varchar(50) NOT NULL,
 \exam_year\ varchar(20) NOT NULL,
 \score\ int(11) NOT NULL,
 \ otal_questions\ int(11) NOT NULL,
 \ccuracy\ int(11) NOT NULL,
 \ ime_spent_seconds\ int(11) NOT NULL,
 \completed_at\ timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (\id\),
 KEY \idx_subject_date\ (\subject\,\completed_at\)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping initial authentic JAMB questions into \questions\
--
;

const all = [
 ...PHYSICS_QUESTIONS.map(q => ({ ...q, subject: 'Physics' })),
 ...MATHEMATICS_QUESTIONS.map(q => ({ ...q, subject: 'Mathematics', year: q.year || 2024 }))
];

sql += INSERT INTO questions (subject, exam_year, question_num, 	ext, image_url, image_svg, option_a, option_b, option_c, option_d, correct_answer, explanation, 	opic, difficulty) VALUES\n;

const values = all.map(q => {
 const optA = q.options.find(o => o.key === 'A')?.text || '';
 const optB = q.options.find(o => o.key === 'B')?.text || '';
 const optC = q.options.find(o => o.key === 'C')?.text || '';
 const optD = q.options.find(o => o.key === 'D')?.text || '';
 return (, , , , , , , , , , , , , );
});

sql += values.join(',\n') + ';\n\nCOMMIT;\n';

fs.writeFileSync(path.join(__dirname, 'backend', 'studyplug_db.sql'), sql, 'utf8');

// Clean scratch
fs.rmSync(path.join(__dirname, 'scratch_bundle'), { recursive: true, force: true });

console.log(Generated backend/studyplug_db.sql with questions.);
