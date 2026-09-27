const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\WORK SPACE\\.gemini\\antigravity\\brain\\344c1ee8-440e-4c0f-9e9a-a347f183ae45';

const notesPath = path.join(brainDir, 'card_study_notes_1790432596242.jpg');
const practicePath = path.join(brainDir, 'card_practice_1790432615350.jpg');
const mockPath = path.join(brainDir, 'card_mock_exam_1790432633705.jpg');
const motivationPath = path.join(__dirname, 'public', 'images', 'crop_motivation.png');

const notesB64 = 'data:image/jpeg;base64,' + fs.readFileSync(notesPath).toString('base64');
const practiceB64 = 'data:image/jpeg;base64,' + fs.readFileSync(practicePath).toString('base64');
const mockB64 = 'data:image/jpeg;base64,' + fs.readFileSync(mockPath).toString('base64');
const motivationB64 = 'data:image/png;base64,' + fs.readFileSync(motivationPath).toString('base64');

const tsContent = `/**
 * Real High-Resolution Photographic & 3D Artwork Assets for StudyPlug Feature Cards
 * Self-contained Base64 Data URLs (100% offline, zero network latency, no 404s).
 */

export const CARD_IMAGE_STUDY_NOTES = '${notesB64}';
export const CARD_IMAGE_PRACTICE = '${practiceB64}';
export const CARD_IMAGE_MOCK_EXAM = '${mockB64}';
export const CARD_IMAGE_MOTIVATION = '${motivationB64}';
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'cardImages.ts'), tsContent, 'utf8');
console.log('Successfully generated src/data/cardImages.ts with all 4 real card images!');
