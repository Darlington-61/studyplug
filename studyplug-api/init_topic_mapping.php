<?php
/**
 * StudyPlug — Topic Mapping Table Setup & Pre-Population
 * Run once: https://eznonews.com.ng/studyplug-api/init_topic_mapping.php?key=StudyPlug2026
 */
require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

if (($_GET['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403); echo json_encode(['error' => 'Forbidden']); exit();
}

$log = [];

// Create topic_mapping table
$pdo->exec("CREATE TABLE IF NOT EXISTS topic_mapping (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject VARCHAR(50) NOT NULL,
  lesson_topic VARCHAR(150) NOT NULL,
  question_tags TEXT NOT NULL COMMENT 'JSON array of primary question topic strings',
  secondary_tags TEXT COMMENT 'JSON array of secondary/related question topic strings',
  INDEX idx_stopic (subject, lesson_topic)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
$log[] = 'topic_mapping table: OK';

// Pre-built mapping: StudyPlug syllabus topic -> existing question topic column values
$mappings = [
  // ─── PHYSICS ────────────────────────────────────────────────────────────────
  ['Physics','Motion',                  '["Motion & Graphs","Projectiles","Circular Motion"]',              '["Momentum & Collisions","Friction & Inclined Plane","Gravitation"]'],
  ['Physics','Gravitational Field',     '["Gravitation"]',                                                  '["Circular Motion"]'],
  ['Physics','Equilibrium of Forces',   '["Equilibrium of Moments","Friction & Inclined Plane"]',           '["Simple Machines"]'],
  ['Physics','Work, Energy and Power',  '["Electrical Energy & Power","Thermodynamics"]',                   '["Fluid Dynamics","Hydrostatics","Simple Machines"]'],
  ['Physics','Friction',                '["Friction & Inclined Plane"]',                                    '["Simple Machines","Equilibrium of Moments"]'],
  ['Physics','Simple Machines',         '["Simple Machines","Equilibrium of Moments"]',                     '["Friction & Inclined Plane"]'],
  ['Physics','Elasticity',              '["Elasticity & Hooke\'s Law"]',                                    '[]'],
  ['Physics','Pressure',                '["Hydrostatics","Pressure in Fluids","Fluid Dynamics"]',           '["Measurement & Precision"]'],
  ['Physics','Temperature',             '["Thermometry","Thermal Expansion"]',                              '["Calorimetry","Heat Transfer"]'],
  ['Physics','Gas Laws',                '["Gas Laws","Thermodynamics"]',                                    '["Calorimetry"]'],
  ['Physics','Quantity of Heat',        '["Calorimetry","Latent Heat","Heat Transfer"]',                    '["Thermal Expansion","Thermal Radiation"]'],
  ['Physics','Waves',                   '["Sound & Echoes","Sound & Speed of Waves","Simple Harmonic Motion","Acoustics & Resonance Tube","Doppler Effect","Polarization"]','["Measurement & Precision"]'],
  ['Physics','Light',                   '["Reflection & Mirrors","Refraction & Snell\'s Law","Total Internal Reflection","Lenses & Optical Instruments","Dispersion of Light","Defects of Vision","Optical Instruments"]','["Polarization"]'],
  ['Physics','Electrostatics',          '["Electrostatics & Coulomb\'s Law","Electric Fields","Capacitors"]','[]'],
  ['Physics','Current Electricity',     '["Current Electricity & Internal Resistance","Resistor Networks","Electrical Energy & Power","Potentiometer","Meters Conversion"]','["Capacitors"]'],
  ['Physics','Electromagnetic Induction','["Electromagnetic Induction","Alternating Current & Resonance","AC Circuits","Electromagnetism & Force"]','["Magnetic Fields","Rectification"]'],
  ['Physics','Modern Physics',          '["Photoelectric Effect","Radioactive Decay & Half-Life","Nuclear Reactions","Atomic Physics & Energy Levels","Binding Energy & Mass Defect","Thermionic Emission","Cathode Rays","Lasers & Modern Physics"]','["Semiconductor Physics","P-N Junction Diode","Logic Gates"]'],
  ['Physics','Momentum',                '["Momentum & Collisions"]',                                        '["Motion & Graphs","Circular Motion"]'],

  // ─── MATHEMATICS ────────────────────────────────────────────────────────────
  ['Mathematics','Number Bases',        '["Number Bases"]',                                                 '["Algebra"]'],
  ['Mathematics','Indices and Logarithms','["Indices & Logarithms"]',                                       '["Algebra","Sequences & Series"]'],
  ['Mathematics','Surds',               '["Surds"]',                                                        '["Indices & Logarithms"]'],
  ['Mathematics','Sets',                '["Sets & Venn Diagrams"]',                                         '["Probability"]'],
  ['Mathematics','Algebra',             '["Algebra","Linear Equations","Polynomials","Variation"]',         '["Quadratic Equations","Simultaneous Equations"]'],
  ['Mathematics','Quadratic Equations', '["Quadratic Equations"]',                                          '["Algebra","Polynomials"]'],
  ['Mathematics','Polynomials',         '["Polynomials"]',                                                  '["Algebra","Quadratic Equations"]'],
  ['Mathematics','Variation',           '["Variation"]',                                                    '["Algebra"]'],
  ['Mathematics','Matrices and Determinants','["Matrices"]',                                                '["Algebra"]'],
  ['Mathematics','Sequences and Series','["Sequences & Series"]',                                           '["Algebra"]'],
  ['Mathematics','Trigonometry',        '["Trigonometry","Circle Geometry"]',                               '["Coordinate Geometry","Mensuration"]'],
  ['Mathematics','Coordinate Geometry', '["Coordinate Geometry"]',                                          '["Circle Geometry","Trigonometry"]'],
  ['Mathematics','Mensuration',         '["Mensuration"]',                                                  '["Coordinate Geometry","Circle Geometry"]'],
  ['Mathematics','Differentiation',     '["Calculus","Calculus & Functions"]',                              '["Algebra"]'],
  ['Mathematics','Integration',         '["Integration"]',                                                  '["Calculus","Mensuration"]'],
  ['Mathematics','Probability',         '["Probability"]',                                                  '["Statistics","Sets & Venn Diagrams"]'],
  ['Mathematics','Statistics',          '["Statistics"]',                                                   '["Probability"]'],
  ['Mathematics','Commercial Mathematics','["Commercial Math"]',                                            '["Algebra","Statistics"]'],
  ['Mathematics','Circle Geometry',     '["Circle Geometry"]',                                              '["Trigonometry","Mensuration"]'],

  // ─── CHEMISTRY (basic — to be expanded) ─────────────────────────────────────
  ['Chemistry','Acids, Bases and Salts','["Acids, Bases & Salts"]',                                        '[]'],
  ['Chemistry','Atomic Structure',      '["Atomic Structure & Electron Configuration"]',                    '["Chemical Bonding"]'],
  ['Chemistry','Gas Laws',              '["Gas Laws & Stoichiometry","Gaseous State & Gas Laws"]',          '[]'],
  ['Chemistry','Electrochemistry',      '["Electrochemistry & Electrolysis"]',                              '[]'],
  ['Chemistry','Organic Chemistry',     '["Organic Chemistry & IUPAC Nomenclature","Organic Chemistry Reactions"]','[]'],

  // ─── BIOLOGY (basic) ────────────────────────────────────────────────────────
  ['Biology','Cell Biology',            '["Cell Biology & Organelles"]',                                    '[]'],
  ['Biology','Genetics',                '["Mendelian Genetics","Blood Group Genetics & Transfusion","Genetics & Blood Disorders"]','[]'],
  ['Biology','Photosynthesis',          '["Photosynthesis & Plant Physiology"]',                            '["Plant Hormones & Growth Regulators"]'],
  ['Biology','Ecology',                 '["Ecology & Symbiosis"]',                                          '[]'],

  // ─── ENGLISH ────────────────────────────────────────────────────────────────
  ['English Language','Lexis and Structure','["Lexis & Structure","Synonyms"]',                             '[]'],
  ['English Language','Comprehension',  '["Reading Comprehension"]',                                        '[]'],
  ['English Language','Concord',        '["Concord & Grammatical Agreement"]',                              '[]'],
  ['English Language','Oral English',   '["Oral English & Phonetics"]',                                     '[]'],
];

$inserted = 0;
$skipped  = 0;
$stmt = $pdo->prepare("INSERT IGNORE INTO topic_mapping (subject, lesson_topic, question_tags, secondary_tags) VALUES (:s,:t,:q,:sec)");
foreach ($mappings as $m) {
    $stmt->execute([':s'=>$m[0], ':t'=>$m[1], ':q'=>$m[2], ':sec'=>$m[3]]);
    if ($stmt->rowCount()) $inserted++; else $skipped++;
}
$log[] = "Inserted {$inserted} mappings, {$skipped} already existed";

echo json_encode(['success'=>true,'log'=>$log,'total_mappings'=>count($mappings)], JSON_PRETTY_PRINT);
