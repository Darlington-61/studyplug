const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const brainDir = 'C:\\Users\\WORK SPACE\\.gemini\\antigravity\\brain\\344c1ee8-440e-4c0f-9e9a-a347f183ae45';

// 1. Study Notes 3D Book & Notes
const notesSrc = path.join(brainDir, 'card_study_notes_1790432596242.jpg');
if (fs.existsSync(notesSrc)) {
  fs.copyFileSync(notesSrc, path.join(destDir, 'card_notes.jpg'));
  console.log('Copied card_notes.jpg');
}

// 2. Practice 3D Dartboard & Timer
const practiceSrc = path.join(brainDir, 'card_practice_1790432615350.jpg');
if (fs.existsSync(practiceSrc)) {
  fs.copyFileSync(practiceSrc, path.join(destDir, 'card_practice.jpg'));
  console.log('Copied card_practice.jpg');
}

// 3. Mock Exams 3D Computer Workstation
const mockSrc = path.join(brainDir, 'card_mock_exam_1790432633705.jpg');
if (fs.existsSync(mockSrc)) {
  fs.copyFileSync(mockSrc, path.join(destDir, 'card_mock.jpg'));
  console.log('Copied card_mock.jpg');
}

// 4. Motivation Student / Scholar
const studentSrc = path.join(__dirname, 'public', 'student.jpg');
if (fs.existsSync(studentSrc)) {
  fs.copyFileSync(studentSrc, path.join(destDir, 'card_motivation.jpg'));
  console.log('Copied card_motivation.jpg from student.jpg');
}

console.log('All card images set up successfully in public/images/');
