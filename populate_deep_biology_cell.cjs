// populate_deep_biology_cell.cjs
// Populates 30-slide exhaustive masterclass for Biology: Cell Structure and Functions of Cell Organelles
// Based on official JAMB/WAEC syllabus, S.T. Ramalingam (Modern Biology) & Idodo Umeh (College Biology).

const https = require('https');

function saveLesson(payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = https.request({
      hostname: 'eznonews.com.ng',
      path: '/studyplug-api/save_structured_lesson.php?key=StudyPlug2026',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const clean = body.replace(/^\uFEFF/, '').trim();
          resolve(JSON.parse(clean));
        } catch (e) {
          resolve({ error: body.slice(0, 300) });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// ============================================================================
// SVG DIAGRAMS
// ============================================================================

// 1. Levels of Organization Diagram
const levelsSvg = `<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
  <defs>
    <linearGradient id="gLevel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E382B" />
      <stop offset="100%" stop-color="#1B5E20" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.15" />
    </filter>
  </defs>
  <rect width="700" height="220" fill="#F8FAFC" rx="16" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="350" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0E382B" text-anchor="middle">LEVELS OF STRUCTURAL ORGANIZATION OF LIVING ORGANISMS</text>
  
  <!-- Step 1: Chemical / Molecular -->
  <g transform="translate(20, 50)" filter="url(#shadow)">
    <rect width="115" height="135" fill="#FFFFFF" rx="12" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect width="115" height="28" fill="#E0E7FF" rx="12" />
    <text x="57" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#3730A3" text-anchor="middle">1. MOLECULES</text>
    <text x="57" y="55" font-family="sans-serif" font-size="22" text-anchor="middle">🧬</text>
    <text x="57" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Bio-Molecules</text>
    <text x="57" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Proteins, Lipids,</text>
    <text x="57" y="115" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">DNA, RNA, ATP</text>
  </g>
  <text x="145" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

  <!-- Step 2: Cellular -->
  <g transform="translate(155, 50)" filter="url(#shadow)">
    <rect width="115" height="135" fill="#FFFFFF" rx="12" stroke="#0E382B" stroke-width="2"/>
    <rect width="115" height="28" fill="#0E382B" rx="12" />
    <text x="57" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#FFCC00" text-anchor="middle">2. CELLULAR</text>
    <text x="57" y="55" font-family="sans-serif" font-size="22" text-anchor="middle">🔬</text>
    <text x="57" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0E382B" text-anchor="middle">Basic Unit</text>
    <text x="57" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Amoeba, Neurons,</text>
    <text x="57" y="115" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Erythrocytes</text>
  </g>
  <text x="280" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

  <!-- Step 3: Tissue -->
  <g transform="translate(290, 50)" filter="url(#shadow)">
    <rect width="115" height="135" fill="#FFFFFF" rx="12" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect width="115" height="28" fill="#DCFCE7" rx="12" />
    <text x="57" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#166534" text-anchor="middle">3. TISSUE</text>
    <text x="57" y="55" font-family="sans-serif" font-size="22" text-anchor="middle">🧫</text>
    <text x="57" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Similar Cells</text>
    <text x="57" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Mesophyll, Blood,</text>
    <text x="57" y="115" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Epithelium, Xylem</text>
  </g>
  <text x="415" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

  <!-- Step 4: Organ -->
  <g transform="translate(425, 50)" filter="url(#shadow)">
    <rect width="115" height="135" fill="#FFFFFF" rx="12" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect width="115" height="28" fill="#FEF3C7" rx="12" />
    <text x="57" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#92400E" text-anchor="middle">4. ORGAN</text>
    <text x="57" y="55" font-family="sans-serif" font-size="22" text-anchor="middle">❤️</text>
    <text x="57" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Combined Tissues</text>
    <text x="57" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Heart, Kidney,</text>
    <text x="57" y="115" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Leaf, Root, Brain</text>
  </g>
  <text x="550" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

  <!-- Step 5: System & Organism -->
  <g transform="translate(560, 50)" filter="url(#shadow)">
    <rect width="120" height="135" fill="#FFFFFF" rx="12" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect width="120" height="28" fill="#FEE2E2" rx="12" />
    <text x="60" y="18" font-family="sans-serif" font-size="9.5" font-weight="black" fill="#991B1B" text-anchor="middle">5. SYSTEM / INDIV.</text>
    <text x="60" y="55" font-family="sans-serif" font-size="22" text-anchor="middle">🚶</text>
    <text x="60" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Organ System</text>
    <text x="60" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Circulatory, Excretory,</text>
    <text x="60" y="115" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Complete Organism</text>
  </g>
</svg>`;

// 2. Animal Cell Ultrastructure SVG
const animalCellSvg = `<svg viewBox="0 0 650 360" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xl mx-auto">
  <defs>
    <radialGradient id="cyto" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F1F5F9" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </radialGradient>
  </defs>
  <rect width="650" height="360" fill="#FFFFFF" rx="16" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="325" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0E382B" text-anchor="middle">ULTRASTRUCTURE OF A GENERALIZED EUKARYOTIC ANIMAL CELL</text>

  <!-- Cell Membrane / Cytoplasm boundary -->
  <path d="M 120 180 C 120 80, 200 60, 320 60 C 440 60, 530 100, 530 180 C 530 260, 440 310, 320 310 C 190 310, 120 270, 120 180 Z" fill="url(#cyto)" stroke="#0E382B" stroke-width="3.5"/>

  <!-- Nucleus -->
  <circle cx="280" cy="180" r="55" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2.5"/>
  <!-- Nucleolus -->
  <circle cx="270" cy="175" r="18" fill="#1E3A8A" />
  <text x="270" y="179" font-family="sans-serif" font-size="8" fill="#FFFFFF" font-weight="bold" text-anchor="middle">Nucleolus</text>
  <text x="280" y="215" font-family="sans-serif" font-size="9" fill="#1E40AF" font-weight="bold" text-anchor="middle">Chromatin</text>

  <!-- Rough ER -->
  <path d="M 220 160 C 195 150, 195 130, 220 120 C 235 110, 245 95, 270 95" fill="none" stroke="#7C3AED" stroke-width="3" stroke-dasharray="2,2"/>
  <path d="M 215 180 C 180 180, 180 200, 215 210" fill="none" stroke="#7C3AED" stroke-width="3" stroke-dasharray="2,2"/>

  <!-- Mitochondrion 1 -->
  <g transform="translate(380, 120)">
    <ellipse cx="25" cy="15" rx="28" ry="16" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
    <path d="M 5 15 Q 15 5, 25 15 T 45 15" fill="none" stroke="#B91C1C" stroke-width="2"/>
  </g>

  <!-- Mitochondrion 2 -->
  <g transform="translate(160, 220)">
    <ellipse cx="25" cy="15" rx="25" ry="14" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
    <path d="M 7 15 Q 17 7, 25 15 T 43 15" fill="none" stroke="#B91C1C" stroke-width="2"/>
  </g>

  <!-- Golgi Apparatus -->
  <g transform="translate(370, 210)">
    <path d="M 10 10 C 30 5, 40 5, 60 10" fill="none" stroke="#D97706" stroke-width="4" stroke-linecap="round"/>
    <path d="M 8 20 C 30 15, 40 15, 62 20" fill="none" stroke="#D97706" stroke-width="4" stroke-linecap="round"/>
    <path d="M 12 30 C 30 25, 40 25, 58 30" fill="none" stroke="#D97706" stroke-width="4" stroke-linecap="round"/>
    <circle cx="68" cy="18" r="4" fill="#F59E0B"/>
    <circle cx="5" cy="22" r="3.5" fill="#F59E0B"/>
  </g>

  <!-- Lysosome -->
  <circle cx="450" cy="170" r="12" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
  <circle cx="450" cy="170" r="4" fill="#B45309"/>

  <!-- Centrioles / Centrosome -->
  <g transform="translate(240, 110)">
    <rect x="0" y="0" width="12" height="5" fill="#059669" transform="rotate(45)"/>
    <rect x="6" y="-6" width="12" height="5" fill="#059669" transform="rotate(-45)"/>
  </g>

  <!-- Free Ribosomes -->
  <circle cx="330" cy="120" r="2.5" fill="#475569"/>
  <circle cx="340" cy="130" r="2.5" fill="#475569"/>
  <circle cx="350" cy="115" r="2.5" fill="#475569"/>
  <circle cx="210" cy="250" r="2.5" fill="#475569"/>

  <!-- Labels & Pointers -->
  <line x1="530" y1="180" x2="590" y2="180" stroke="#334155" stroke-width="1"/>
  <text x="595" y="183" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0E382B">Plasma Membrane</text>

  <line x1="435" y1="125" x2="495" y2="105" stroke="#334155" stroke-width="1"/>
  <text x="500" y="108" font-family="sans-serif" font-size="9" font-weight="bold" fill="#DC2626">Mitochondrion</text>

  <line x1="435" y1="225" x2="495" y2="245" stroke="#334155" stroke-width="1"/>
  <text x="500" y="248" font-family="sans-serif" font-size="9" font-weight="bold" fill="#D97706">Golgi Body</text>

  <line x1="280" y1="125" x2="280" y2="80" stroke="#334155" stroke-width="1"/>
  <text x="280" y="74" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1E40AF" text-anchor="middle">Nucleus & DNA</text>

  <line x1="240" y1="110" x2="180" y2="80" stroke="#334155" stroke-width="1"/>
  <text x="175" y="77" font-family="sans-serif" font-size="9" font-weight="bold" fill="#059669" text-anchor="end">Centrioles (Spindle poles)</text>

  <line x1="450" y1="185" x2="495" y2="195" stroke="#334155" stroke-width="1"/>
  <text x="500" y="198" font-family="sans-serif" font-size="9" font-weight="bold" fill="#B45309">Lysosome (Suicide bag)</text>
</svg>`;

// 3. Plant Cell Ultrastructure SVG
const plantCellSvg = `<svg viewBox="0 0 650 360" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xl mx-auto">
  <defs>
    <radialGradient id="cytoP" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F0FDF4" />
      <stop offset="100%" stop-color="#DCFCE7" />
    </radialGradient>
  </defs>
  <rect width="650" height="360" fill="#FFFFFF" rx="16" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="325" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0E382B" text-anchor="middle">ULTRASTRUCTURE OF A GENERALIZED EUKARYOTIC PLANT CELL</text>

  <!-- Rigid Hexagonal / Rectangular Cell Wall Outer -->
  <polygon points="120,80 500,70 540,280 140,295" fill="#E2E8F0" stroke="#15803D" stroke-width="8" stroke-linejoin="round"/>
  <!-- Cell Wall Inner / Middle Lamella -->
  <polygon points="124,84 496,74 535,276 144,291" fill="url(#cytoP)" stroke="#16A34A" stroke-width="3" stroke-linejoin="round"/>

  <!-- Large Central Vacuole -->
  <polygon points="200,110 380,100 400,240 210,250" fill="#CFFAFE" stroke="#0891B2" stroke-width="2.5" rx="10"/>
  <text x="300" y="180" font-family="sans-serif" font-size="11" font-weight="black" fill="#0E7490" text-anchor="middle">Large Central Vacuole</text>
  <text x="300" y="195" font-family="sans-serif" font-size="8.5" fill="#155E75" text-anchor="middle">(Cell Sap + Turgor Pressure)</text>

  <!-- Chloroplast 1 -->
  <g transform="translate(140, 110)">
    <ellipse cx="22" cy="14" rx="24" ry="15" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
    <line x1="8" y1="14" x2="36" y2="14" stroke="#15803D" stroke-width="2"/>
    <line x1="12" y1="10" x2="32" y2="10" stroke="#15803D" stroke-width="1.5"/>
    <line x1="12" y1="18" x2="32" y2="18" stroke="#15803D" stroke-width="1.5"/>
  </g>

  <!-- Chloroplast 2 -->
  <g transform="translate(420, 90)">
    <ellipse cx="22" cy="14" rx="24" ry="15" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
    <line x1="8" y1="14" x2="36" y2="14" stroke="#15803D" stroke-width="2"/>
    <line x1="12" y1="10" x2="32" y2="10" stroke="#15803D" stroke-width="1.5"/>
    <line x1="12" y1="18" x2="32" y2="18" stroke="#15803D" stroke-width="1.5"/>
  </g>

  <!-- Chloroplast 3 -->
  <g transform="translate(150, 220)">
    <ellipse cx="22" cy="14" rx="24" ry="15" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
    <line x1="8" y1="14" x2="36" y2="14" stroke="#15803D" stroke-width="2"/>
  </g>

  <!-- Nucleus pushed to periphery by vacuole -->
  <g transform="translate(440, 200)">
    <circle cx="28" cy="28" r="28" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
    <circle cx="24" cy="24" r="10" fill="#1E3A8A"/>
  </g>

  <!-- Mitochondria -->
  <g transform="translate(425, 150)">
    <ellipse cx="16" cy="10" rx="18" ry="11" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
    <path d="M 4 10 Q 10 5, 16 10 T 28 10" fill="none" stroke="#B91C1C" stroke-width="1.5"/>
  </g>

  <!-- Labels -->
  <line x1="120" y1="80" x2="60" y2="60" stroke="#334155" stroke-width="1"/>
  <text x="55" y="58" font-family="sans-serif" font-size="9" font-weight="bold" fill="#15803D" text-anchor="end">Cellulose Cell Wall (Rigid)</text>

  <line x1="160" y1="110" x2="100" y2="150" stroke="#334155" stroke-width="1"/>
  <text x="95" y="153" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16A34A" text-anchor="end">Chloroplast (Photosynthesis)</text>

  <line x1="400" y1="180" x2="560" y2="180" stroke="#334155" stroke-width="1"/>
  <text x="565" y="183" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0891B2">Tonoplast (Vacuole membrane)</text>

  <line x1="470" y1="228" x2="560" y2="240" stroke="#334155" stroke-width="1"/>
  <text x="565" y="243" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1D4ED8">Peripheral Nucleus</text>
</svg>`;

// 4. Mitochondrion Ultrastructure SVG
const mitochondrionSvg = `<svg viewBox="0 0 550 250" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto">
  <rect width="550" height="250" fill="#FFFFFF" rx="16" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="275" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0E382B" text-anchor="middle">MITOCHONDRION ULTRASTRUCTURE & ATP SYNTHESIS</text>

  <!-- Outer Membrane -->
  <ellipse cx="260" cy="135" rx="200" ry="85" fill="#FEE2E2" stroke="#B91C1C" stroke-width="3"/>
  <!-- Intermembrane space -->
  <ellipse cx="260" cy="135" rx="188" ry="75" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
  
  <!-- Cristae folds of inner membrane -->
  <path d="M 85 135 C 110 90, 140 90, 160 135 C 180 180, 210 180, 230 135 C 250 90, 280 90, 300 135 C 320 180, 350 180, 370 135 C 390 90, 415 100, 435 135" fill="none" stroke="#7F1D1D" stroke-width="5" stroke-linecap="round"/>
  <path d="M 120 150 C 135 120, 150 120, 165 150" fill="none" stroke="#7F1D1D" stroke-width="4" stroke-linecap="round"/>
  <path d="M 260 115 C 275 145, 290 145, 305 115" fill="none" stroke="#7F1D1D" stroke-width="4" stroke-linecap="round"/>

  <!-- Matrix Dots (Enzymes & Ribosomes) -->
  <circle cx="200" cy="115" r="3" fill="#991B1B"/>
  <circle cx="320" cy="155" r="3" fill="#991B1B"/>
  <circle cx="280" cy="165" r="3" fill="#991B1B"/>
  <!-- Circular DNA loop -->
  <circle cx="340" cy="115" r="10" fill="none" stroke="#047857" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="340" y="118" font-family="sans-serif" font-size="7" font-weight="bold" fill="#047857" text-anchor="middle">mtDNA</text>

  <!-- Labels -->
  <line x1="260" y1="50" x2="260" y2="28" stroke="#334155" stroke-width="1"/>
  <text x="260" y="24" font-family="sans-serif" font-size="9" font-weight="bold" fill="#B91C1C" text-anchor="middle">Smooth Outer Membrane</text>

  <line x1="230" y1="135" x2="230" y2="80" stroke="#334155" stroke-width="1"/>
  <text x="230" y="74" font-family="sans-serif" font-size="9" font-weight="bold" fill="#7F1D1D" text-anchor="middle">Cristae (Folded Inner Membrane for ATP)</text>

  <line x1="190" y1="160" x2="140" y2="210" stroke="#334155" stroke-width="1"/>
  <text x="135" y="215" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991B1B" text-anchor="end">Matrix (Krebs Cycle Enzymes)</text>

  <line x1="350" y1="115" x2="420" y2="80" stroke="#334155" stroke-width="1"/>
  <text x="425" y="83" font-family="sans-serif" font-size="9" font-weight="bold" fill="#047857">Circular DNA (Self-Replicating)</text>
</svg>`;

// ============================================================================
// COMPLETE 30-SLIDE MASTERCLASS LESSON PAYLOAD
// ============================================================================
const biologyCellMasterclass = {
  subject: 'Biology',
  topic: 'Cell Structure and Functions of Cell Organelles',
  sections: [
    // Slide 1: Introduction to Cytology
    {
      subtopic: 'Cytology Fundamentals',
      section_order: 1,
      section_type: 'intro',
      section_title: 'Introduction to Cytology & The Discovery of the Cell',
      content: `Cytology (Cell Biology) is the branch of biological science devoted to the study of the structural architecture, biochemical composition, physiology, reproduction, and pathology of cells.\n\nThe cell is universally defined as the fundamental microscopic structural and functional unit of all living organisms. The historical pathway to modern cytology was paved by several pioneering discoveries:\n\n• Robert Hooke (1665): First coined the term "cell" after observing porous compartments in thin slices of bottle cork under a primitive compound microscope.\n• Anton van Leeuwenhoek (1674): First observed living free-moving unicellular microorganisms ("animalcules") including bacteria, protozoa, and spermatozoa.\n• Robert Brown (1831): Discovered and named the nucleus within plant cells.\n• Matthias Schleiden (1838) & Theodor Schwann (1839): Formulated the classical Cell Theory for plants and animals respectively.\n• Rudolf Virchow (1855): Concluded that all cells arise exclusively from pre-existing living cells (*Omnis cellula e cellula*).`,
      examples: [
        'Cork cell observation: Hooke observed empty cell walls of dead cork tissue resembling monks\' monastery rooms ("cella").',
        'Leeuwenhoek pond water discovery: Discovered living Vorticella and spirogyra using single biconvex glass beads with 270x magnification.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB frequently asks: "Who first observed LIVING cells?" The answer is Anton van Leeuwenhoek! Robert Hooke observed only the DEAD, empty cellulose cell walls of cork tissue!'
      ],
      question_ids: []
    },

    // Slide 2: The Cell Theory & Exceptions
    {
      subtopic: 'Cytology Fundamentals',
      section_order: 2,
      section_type: 'rule',
      section_title: 'The Modern Cell Theory & Its Biological Exceptions',
      content: `The Cell Theory is one of the unifying foundational dogmas of modern biological science. It states:\n\n1. All living organisms are composed of one or more cells.\n2. The cell is the fundamental structural and functional unit of life.\n3. All new cells arise solely from pre-existing cells by the division of their genetic material.\n4. Total organismal activity is the cumulative sum of the independent activities of its component cells.\n\nCRITICAL SCIENTIFIC EXCEPTIONS TO THE CELL THEORY:\nExaminers frequently test structures that violate standard cell theory:\n• Viruses: Non-cellular (acellular) biological entities containing only DNA or RNA inside a protein coat (capsid). They exhibit no metabolic activity outside a host cell.\n• Coenocytic & Syncytial Organisms: Fungi like *Rhizopus* and slime molds possess multinucleated masses of protoplasm without division into distinct individual cells.\n• Mature Mammalian Red Blood Cells (Erythrocytes): Lose their nucleus upon maturity to maximize hemoglobin space for oxygen transport.\n• Mature Sieve Tube Elements: Functional plant transport cells that lack a nucleus at functional maturity.`,
      examples: [
        'Acellular virus: Bacteriophages cannot reproduce, respire, or generate ATP without taking over host ribosomal machinery.',
        'Multinucleate coenocyte: Rhizopus mycelium contains thousands of continuous nuclei within an undivided cytoplasm.'
      ],
      formulas: [
        'Omnis cellula e cellula (Rudolf Virchow) = All cells arise from pre-existing cells'
      ],
      exam_tips: [
        'Chief Examiner Trap: If asked "Which organism is an exception to the cell theory?", the primary answer is VIRUS because it lacks a cellular protoplasmic organization.'
      ],
      question_ids: []
    },

    // Slide 3: Levels of Organization Diagram
    {
      subtopic: 'Levels of Organization',
      section_order: 3,
      section_type: 'concept',
      section_title: 'Hierarchy of Structural Organization of Life',
      content: `Living matter exhibits a hierarchical structural organization ranging from sub-microscopic chemical molecules to complex multicellular organisms.\n\n${levelsSvg}\n\nUnderstanding this hierarchy reveals how simple chemical constituents assemble into self-sustaining biological machinery. As complexity increases from molecule to organ system, emergent properties arise that cannot exist at simpler levels.`,
      examples: [
        'Atom → Carbon, Hydrogen, Oxygen, Nitrogen',
        'Molecule → Glucose, Amino Acids, Lipids, Nucleic Acids (DNA/RNA)',
        'Organelle → Mitochondria, Nucleus, Chloroplast',
        'Cell → Epithelial cell, Nerve cell, Mesophyll cell',
        'Tissue → Blood tissue, Xylem tissue, Epidermal tissue',
        'Organ → Heart, Stomach, Leaf, Kidney',
        'System → Circulatory system, Vascular bundle system'
      ],
      formulas: [],
      exam_tips: [
        'Blood is classified as a FLUID CONNECTIVE TISSUE, not an organ! Blood consists of erythrocytes, leukocytes, and platelets suspended in liquid plasma matrix.'
      ],
      question_ids: []
    },

    // Slide 4: Unicellular Organisms
    {
      subtopic: 'Forms of Cell Existence',
      section_order: 4,
      section_type: 'concept',
      section_title: 'Forms of Cell Existence: 1. Independent Free-Living Unicellular Organisms',
      content: `In unicellular organisms, a single complete cell constitutes the entire independent living individual. All vital physiological life processes—nutrition, cellular respiration, excretion, osmoregulation, locomotion, irritability, and reproduction—are performed within the boundary of that single cell.\n\nClassic Examples in the Nigerian Syllabus:\n• *Amoeba proteus*: Moves and engulfs food using temporary cytoplasmic projections called pseudopodia (phagocytosis). Regulates water via contractile vacuole.\n• *Paramecium caudatum*: Slipper-shaped freshwater ciliate with dual nuclei (macronucleus for vegetative functions, micronucleus for sexual reproduction/conjugation). Uses cilia for swimming.\n• *Euglena viridis*: Mixotrophic organism possessing both plant characteristics (chloroplasts with chlorophyll for photosynthesis) and animal characteristics (pellicle, red eyespot / stigma, gullet, flagellum for locomotion).\n• *Chlamydomonas*: Unicellular biflagellate green alga possessing a cup-shaped chloroplast and eyespot.`,
      examples: [
        'Osmoregulation in freshwater Amoeba: Excess water constantly entering via osmosis is actively collected into a contractile vacuole and expelled.',
        'Mixotrophic nutrition in Euglena: Undergoes autotrophic photosynthesis in sunlight; switches to saprophytic / heterotrophic absorption in total darkness.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Examiner Trap: Why is Euglena considered a bridge between plants and animals? Plant features: Chloroplasts, pyrenoid starch storage. Animal features: Flagellum, eyespot (phototaxis), gullet, flexible protein pellicle (no rigid cellulose cell wall)!'
      ],
      question_ids: [71739]
    },

    // Slide 5: Colonial & Filamentous Organisms
    {
      subtopic: 'Forms of Cell Existence',
      section_order: 5,
      section_type: 'concept',
      section_title: 'Forms of Cell Existence: 2. Colonial and Filamentous Organisms',
      content: `1. Colonial Organisms:\nA colony consists of a permanent aggregate of independent or semi-interdependent cells of the same species living together within a common gelatinous or mucilaginous matrix.\n• *Volvox*: A spherical hollow green alga colony containing 500 to 60,000 biflagellated cells interconnected by cytoplasmic strands. Shows rudimentary division of labor (somatic vegetative cells vs. reproductive gonidia).\n• *Pandorina*: A simpler colonial green alga consisting of 16 flagellated cells clustered in a ball.\n\n2. Filamentous Organisms:\nFilaments consist of identical or differentiated single cells joined end-to-end longitudinally to form a multicellular linear thread.\n• *Spirogyra*: Free-floating freshwater filamentous green alga with unbranched cylindrical cells, spiral ribbon-shaped chloroplasts with pyrenoids, and mucilaginous pectin sheaths.\n• *Oscillatoria*: Filamentous photosynthetic cyanobacterium capable of rhythmic gliding oscillations.\n• *Nostoc*: Filamentous cyanobacterium containing specialized nitrogen-fixing cells called heterocysts.`,
      examples: [
        'Volvox daughter colonies: Internal asexual gonidia divide to form miniature daughter colonies within the hollow parent sphere.',
        'Spirogyra conjugation: Lateral and scalariform sexual conjugation where genetic material transfers across conjugation tubes.'
      ],
      formulas: [],
      exam_tips: [
        'Do not confuse colonial Volvox with filamentous Spirogyra! Volvox forms a hollow spherical coenobium; Spirogyra forms an unbranched linear thread of cells.'
      ],
      question_ids: [44227]
    },

    // Slide 6: Cells as Part of Tissues and Organs
    {
      subtopic: 'Forms of Cell Existence',
      section_order: 6,
      section_type: 'concept',
      section_title: 'Forms of Cell Existence: 3. Cells as Specialized Units in Tissues & Organs',
      content: `In complex multicellular animals and plants, individual cells sacrifice independent survival to undergo cellular differentiation and specialization (division of labor). Groups of similar specialized cells performing a specific common function aggregate into Tissues.\n\nMajor Animal Tissues:\n• Epithelial Tissue: Closely packed sheets covering external body surfaces and lining internal organs (e.g., ciliated epithelium in trachea, squamous epithelium in alveoli).\n• Connective Tissue: Binds and supports structures (e.g., bone, cartilage, adipose fat, blood tissue).\n• Muscular Tissue: Contractile cells generating mechanical force (Skeletal/striated, Smooth/visceral, Cardiac muscle).\n• Nervous Tissue: Highly specialized neurons and neuroglia conducting rapid electrochemical impulses.\n\nMajor Plant Tissues:\n• Meristematic Tissue: Undifferentiated, thin-walled, actively dividing embryonic cells located at root and shoot apices.\n• Permanent Ground Tissues: Parenchyma (packing & photosynthesis), Collenchyma (flexible mechanical support), Sclerenchyma (rigid woody support with dead lignified walls).\n• Vascular Tissues: Xylem (conducts water and dissolved minerals upwards; provides mechanical strength) and Phloem (translocates manufactured sucrose and amino acids bidirectionally).`,
      examples: [
        'Ciliated tracheal epithelium: Beating cilia sweep mucus trapped with dust and bacteria upwards towards the pharynx.',
        'Lignified xylem vessels: Hollow, dead tubes with thick walls impregnated with lignin to resist negative hydrostatic pressure during transpiration pull.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Question Alert: Which plant tissue provides flexible support to young growing stems and petioles? Answer: COLLENCHYMA (living cells with unevenly thickened cellulose/pectin cell corners). Sclerenchyma provides RIGID support with DEAD lignified walls!'
      ],
      question_ids: [16886]
    },

    // Slide 7: Prokaryotic vs Eukaryotic Cells
    {
      subtopic: 'Cell Classification',
      section_order: 7,
      section_type: 'concept',
      section_title: 'Prokaryotic vs. Eukaryotic Cellular Architecture',
      content: `Living cells are universally divided into two distinct evolutionary cytological domains based on nuclear compartmentalization and internal organelle architecture.\n\nComprehensive Master Examination Comparison:\n\n| Structural Feature | Prokaryotic Cells (e.g. Bacteria, Cyanobacteria) | Eukaryotic Cells (e.g. Fungi, Plants, Animals) |\n|---|---|---|\n| **Nuclear Membrane** | Strictly Absent; genetic material lies free in the cytoplasm | Strictly Present; enclosed in a distinct double-membrane envelope |\n| **Genetic Material** | Single circular naked DNA molecule (no histone proteins); located in nucleoid region | Multiple linear DNA strands bound to basic histone proteins in chromosomes |\n| **Membrane-Bound Organelles** | Completely Absent (No mitochondria, chloroplasts, ER, Golgi, lysosomes) | Abundant (Mitochondria, chloroplasts, ER, Golgi, lysosomes present) |\n| **Ribosome Size** | 70S ribosomes (consisting of 50S and 30S subunits) | 80S ribosomes in cytoplasm; 70S inside mitochondria and chloroplasts |\n| **Cell Wall Composition** | Peptidoglycan (murein); never cellulose | Cellulose in plants; Chitin in fungi; strictly absent in animals |\n| **Cell Division** | Simple binary fission (No mitotic spindle formed) | Mitosis and Meiosis involving a mitotic spindle apparatus |\n| **Plasmids** | Frequently present (extrachromosomal circular DNA conferring antibiotic resistance) | Absent in animals and plants (rarely present in yeast) |`,
      examples: [
        'Escherichia coli (Prokaryote): Possesses a single circular 70S chromosome, peptidoglycan wall, and small circular plasmids.',
        'Human hepatocyte (Eukaryote): Possesses a true nucleus with 46 linear chromosomes, 80S ribosomes, mitochondria, and rough ER.'
      ],
      formulas: [
        'Prokaryotic Ribosome: 70S (50S + 30S subunits)',
        'Eukaryotic Ribosome: 80S (60S + 40S subunits)'
      ],
      exam_tips: [
        'JAMB High-Frequency Question: "Which organelle is found in BOTH prokaryotic and eukaryotic cells?" Answer: RIBOSOME! (Prokaryotes possess 70S ribosomes despite lacking all membrane-bound organelles).'
      ],
      question_ids: []
    },

    // Slide 8: Animal Cell Ultrastructure & Diagram
    {
      subtopic: 'Cell Ultrastructure',
      section_order: 8,
      section_type: 'concept',
      section_title: 'The Ultrastructure of a Generalized Animal Cell',
      content: `When viewed under the high resolving power of the Transmission Electron Microscope (TEM), an animal cell reveals an intricate intracellular compartmentalization.\n\n${animalCellSvg}\n\nNotice the absence of a rigid outer cell wall and large central vacuole, which gives animal cells a flexible, dynamic shape. The presence of centrioles just outside the nuclear envelope is a diagnostic feature of animal cells.`,
      examples: [
        'Flexible plasma membrane: Enables white blood cells (macrophages) to change shape and squeeze through capillary walls (diapedesis) to engulf pathogens.',
        'Abundant lysosomes: Animal cells have high concentrations of hydrolytic lysosomes to digest foreign particles and cellular debris.'
      ],
      formulas: [],
      exam_tips: [
        'Under light microscopy, animal cells appear bounded only by a thin, flexible cell surface membrane. NEVER label a "cell wall" on an animal cell in WAEC practicals!'
      ],
      question_ids: [16836]
    },

    // Slide 9: Plant Cell Ultrastructure & Diagram
    {
      subtopic: 'Cell Ultrastructure',
      section_order: 9,
      section_type: 'concept',
      section_title: 'The Ultrastructure of a Generalized Plant Cell',
      content: `Plant cells possess distinct botanical structures that reflect their stationary, autotrophic lifestyle, characterized by rigid walls and photosynthetic machinery.\n\n${plantCellSvg}\n\nKey Diagnostic Botanical Features:\n1. Non-living Cellulose Cell Wall: Encloses the protoplast, providing tensile mechanical strength and resisting osmotic bursting (lysis).\n2. Large Central Vacuole: Filled with aqueous cell sap; occupies up to 90% of the mature cell volume, pushing the nucleus and cytoplasm to the peripheral margin.\n3. Plastids (Chloroplasts): Organelles containing chlorophyll pigments that convert solar electromagnetic radiation into chemical bond energy (photosynthesis).`,
      examples: [
        'Turgor pressure: When a plant cell takes up water by osmosis, the central vacuole expands and presses the protoplast against the rigid cell wall, keeping herbaceous plant stems upright.',
        'Peripheral nucleus: In mature palisade mesophyll cells, the large vacuole displaces the nucleus to one side against the plasma membrane.'
      ],
      formulas: [],
      exam_tips: [
        'In plant cell drawings for WAEC, always draw the cell wall with TWO distinct parallel lines (representing middle lamella and primary wall) and clearly show the nucleus in a PERIPHERAL position, not dead center!'
      ],
      question_ids: [44222]
    },

    // Slide 10: Plant vs Animal Cell Comparison
    {
      subtopic: 'Cell Ultrastructure',
      section_order: 10,
      section_type: 'rule',
      section_title: 'Master Examination Comparison: Plant Cell vs. Animal Cell',
      content: `This comprehensive comparison table is tested in almost every WAEC WASSCE Theory Paper and JAMB UTME Biology examination.\n\n| Diagnostic Feature | Plant Cell | Animal Cell |\n|---|---|---|\n| **Cell Wall** | Present; made of rigid cellulose fibers | Strictly Absent; bounded only by delicate plasma membrane |\n| **Shape** | Fixed, rigid, regular shape (hexagonal or rectangular) | Flexible, irregular, dynamic shape |\n| **Chloroplasts / Plastids** | Present in green photosynthetic tissues (leaves, green stems) | Strictly Absent |\n| **Vacuole** | One large, prominent permanent central vacuole filled with cell sap | Absent or small, temporary vacuoles (e.g. food or phagocytic vacuoles) |\n| **Centrosomes & Centrioles** | Absent in higher flowering plants (angiosperms) | Present; organizes spindle fibers during mitosis and meiosis |\n| **Lysosomes** | Rare; vacuole performs equivalent lytic functions | Abundant ("suicide bags") |\n| **Carbohydrate Storage** | Stored as insoluble starch granules | Stored as glycogen granules (animal starch) |\n| **Cytokinesis Mechanism** | Occurs by formation of a **Cell Plate** (phragmoplast) from inside out | Occurs by **Cleavage Furrow** pinching from outside in |\n| **Cilia and Flagella** | Strictly absent in higher plants | Frequently present (e.g. spermatozoa, ciliated epithelial cells) |`,
      examples: [
        'Storage reserve test: Iodine turns plant starch blue-black; iodine turns animal glycogen reddish-brown.',
        'Cytokinesis difference: Plant cells cannot pinch inwards due to the rigid cell wall, so Golgi-derived vesicles fuse to build a cell plate along the equatorial plane.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question Trap: "Higher plant cells divide during cytokinesis through the formation of a..." Answer: CELL PLATE! Animal cells divide by CLEAVAGE FURROW!'
      ],
      question_ids: [71698]
    },

    // Slide 11: The Cell Wall
    {
      subtopic: 'Cell Boundaries',
      section_order: 11,
      section_type: 'concept',
      section_title: 'The Plant Cell Wall: Biochemical Architecture & Plasmodesmata',
      content: `The plant cell wall is an extracellular, non-living, semi-rigid envelope secreted by the protoplast outside the plasma membrane.\n\nBiochemical Layers of the Plant Cell Wall:\n1. Middle Lamella:\n• The outermost cementing layer that binds adjacent plant cells together.\n• Rich in calcium and magnesium pectates (pectin). When fruits ripen, the enzyme pectinase breaks down the middle lamella, causing the fruit to soften.\n2. Primary Cell Wall:\n• Formed by young, actively growing cells.\n• Composed of cellulose microfibrils embedded in an amorphous matrix of hemicellulose and pectin.\n• Fully permeable to water and dissolved mineral solutes.\n3. Secondary Cell Wall:\n• Deposited inside the primary wall after cell expansion ceases.\n• Heavily impregnated with **Lignin** (in xylem vessels and sclerenchyma) or **Suberin** (in cork cells), rendering the wall waterproof and immensely strong.\n\nPlasmodesmata (Singular: Plasmodesma):\nMicroscopic cytoplasmic channels traversing the cell walls of adjacent plant cells, connecting their protoplasts into a continuous living system called the **Symplast**.`
    ,
      examples: [
        'Fruit ripening in mangoes: Middle lamella pectin is hydrolyzed into soluble sugars, transforming hard green fruit into soft, sweet pulp.',
        'Symplastic transport: Water and inorganic ions pass directly from root hair cells across cortex to xylem via plasmodesmata without crossing plasma membranes.'
      ],
      formulas: [],
      exam_tips: [
        'Remember that the plant cell wall is FULLY PERMEABLE to water and solutes! It is the PLASMA MEMBRANE underneath that is selectively (differentially) permeable!'
      ],
      question_ids: []
    },

    // Slide 12: Plasma Membrane & Fluid Mosaic Model
    {
      subtopic: 'Cell Boundaries',
      section_order: 12,
      section_type: 'concept',
      section_title: 'The Plasma Membrane & The Fluid Mosaic Model',
      content: `The plasma membrane (cell surface membrane) is a dynamic, living, selectively permeable barrier approximately 7 to 10 nm thick that delimits the living protoplasm from the external environment.\n\nThe Fluid Mosaic Model (Proposed by S.J. Singer & G.L. Nicolson, 1972):\n• "Fluid": The phospholipid molecules and proteins possess lateral mobility within the plane of the membrane.\n• "Mosaic": Proteins are interspersed irregularly throughout the lipid bilayer, resembling decorative tiles in a mosaic floor.\n\nKey Molecular Components:\n1. Phospholipid Bilayer:\n• Amphipathic molecules with hydrophilic (polar, water-attracting) phosphate heads facing outwards towards aqueous cytosol and extracellular fluid, and hydrophobic (non-polar, water-repelling) fatty acid tails facing inwards towards the membrane interior.\n2. Membrane Proteins:\n• Integral (Intrinsic) Proteins: Penetrate deeply into the lipid bilayer or span it completely (transmembrane channels, carrier proteins, receptors).\n• Peripheral (Extrinsic) Proteins: Attached loosely to the outer or inner membrane surface.\n3. Cholesterol (in Animal Membranes):\n• Wedged between phospholipid tails; acts as a temperature-fluidity buffer (prevents excessive fluidity at high temperatures and prevents crystallization at low temperatures).\n4. Glycocalyx (Glycoproteins & Glycolipids):\n• Carbohydrate chains extending from the outer surface; essential for cell-cell recognition, adhesion, and immunological identity.`,
      examples: [
        'ABO Blood Group Antigens: Unique branched oligosaccharide chains on the surface of erythrocyte glycoproteins determine whether a person is Blood Group A, B, AB, or O.',
        'Hormone Receptors: Insulin binds specifically to transmembrane tyrosine kinase receptor proteins on liver and muscle cell membranes.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Question Alert: Describe the arrangement of phospholipids in the cell membrane. Always state: "Hydrophilic phosphate heads face outwards towards water; hydrophobic fatty acid tails face inwards away from water."'
      ],
      question_ids: [101976]
    },

    // Slide 13: Membrane Transport Mechanisms
    {
      subtopic: 'Cell Physiology',
      section_order: 13,
      section_type: 'worked_example',
      section_title: 'Cellular Transport Mechanisms: Passive vs. Active Transport',
      content: `Substances move across the plasma membrane by three distinct physical and biological mechanisms:\n\n1. Simple Diffusion (Passive):\n• Net movement of solute particles from a region of higher concentration to a region of lower concentration along a concentration gradient. Requires NO cellular ATP.\n• Examples: Respiratory gas exchange ($O_2$ and $CO_2$) across alveolar membranes.\n\n2. Facilitated Diffusion (Passive):\n• Passive transport of polar or charged molecules (glucose, amino acids, ions) via specific transmembrane channel or carrier proteins along their concentration gradient. Requires NO ATP.\n\n3. Osmosis (Passive):\n• Net movement of water molecules from a region of higher water potential (dilute/hypotonic solution) to a region of lower water potential (concentrated/hypertonic solution) through a selectively permeable membrane.\n\n4. Active Transport (Requires ATP):\n• Movement of ions or molecules AGAINST their electrochemical concentration gradient (from lower to higher concentration) using transmembrane protein pumps (e.g. $Na^+/K^+$ ATPase pump).\n• Strictly dependent on cellular respiration and ATP. Inhibited by metabolic poisons like cyanide.\n\n5. Bulk Transport (Cytosis):\n• Endocytosis: Ingestion of materials by invagination of the plasma membrane (Phagocytosis = cell eating; Pinocytosis = cell drinking).\n• Exocytosis: Secretion of substances (enzymes, hormones) by fusion of intracellular vesicles with the plasma membrane.`,
      examples: [
        'Active absorption of mineral ions: Plant root hair cells accumulate nitrate and potassium ions at concentrations hundreds of times higher than in surrounding soil water via active transport.',
        'Amoeba phagocytosis: Amoeba wraps pseudopodia around an algae cell to form an intracellular food vacuole.'
      ],
      formulas: [
        'Osmotic Pressure (π) = MRT',
        'Water Potential (Ψ) = Solute Potential (Ψs) + Pressure Potential (Ψp)'
      ],
      exam_tips: [
        'Chief Examiner Trap: If an experiment shows that mineral ion uptake stops when the cell is treated with potassium cyanide, the transport mechanism MUST be ACTIVE TRANSPORT (because cyanide inhibits ATP production in mitochondria)!'
      ],
      question_ids: [44178, 44182]
    },

    // Slide 14: Cytoplasm & Cyclosis
    {
      subtopic: 'Cytoplasm',
      section_order: 14,
      section_type: 'concept',
      section_title: 'The Cytoplasm, Cytosol & Cytoplasmic Streaming (Cyclosis)',
      content: `The cytoplasm comprises all cellular material contained within the plasma membrane, excluding the nucleus. The living, ground fluid substance in which organelles are suspended is called the **Cytosol**.\n\nPhysical and Chemical Characteristics:\n• Colloidal State: Cytosol is a dynamic aqueous colloidal solution containing water (70–85%), proteins, enzymes, amino acids, glucose, lipids, and mineral electrolytes.\n• Sol-Gel Interconversions: The cytoplasm can rapidly shift reversibly between a fluid liquid state (**Sol**) and a semi-solid jelly-like state (**Gel**), enabling amoeboid movement and cell deformation.\n\nCytoplasmic Streaming (Cyclosis):\n• The continuous, active directed circulation of the fluid cytoplasm within living cells, driven by interactions between actin microfilaments and myosin motor proteins powered by ATP hydrolysis.\n• Functions of Cyclosis:\n  1. Distributes nutrients, dissolved gases, and synthesized proteins uniformly throughout large cells.\n  2. Moves chloroplasts in plant mesophyll cells towards or away from sunlight to maximize light absorption while preventing photodamage.\n  3. Powers pseudopodial extension and locomotion in *Amoeba* and human white blood cells.`,
      examples: [
        'Cyclosis in Elodea (Waterweed): Chloroplasts can be observed under a light microscope flowing steadily in a circular stream around the large central vacuole.',
        'Amoeboid movement: Plasmagel at the advancing tip liquefies into plasmasol, flowing forward to project a pseudopodium.'
      ],
      formulas: [],
      exam_tips: [
        'Do not confuse Cytoplasm with Protoplasm! Protoplasm = Cytoplasm + Nucleus (the entire living contents of a cell). Cytoplasm = Protoplasm minus the Nucleus!'
      ],
      question_ids: []
    },

    // Slide 15: The Nucleus
    {
      subtopic: 'Cell Organelles',
      section_order: 15,
      section_type: 'concept',
      section_title: 'The Nucleus: Director of Cellular Metabolism & Heredity',
      content: `The nucleus is the largest and most prominent organelle in eukaryotic cells, functioning as the master control center that directs all cellular metabolic activities and stores hereditary genetic information.\n\nUltrastructural Anatomy of the Nucleus:\n1. Nuclear Envelope:\n• A double-membrane barrier enclosing the nucleus. The outer membrane is continuous with the Rough Endoplasmic Reticulum and studded with ribosomes.\n2. Nuclear Pores:\n• Complex macromolecular protein channels perforating the envelope; selectively regulate the transport of mRNA, tRNA, and ribosomal subunits out to the cytoplasm, and proteins (polymerases, histones) into the nucleus.\n3. Nucleoplasm (Karyolymph):\n• The viscous, gelatinous matrix containing nucleotides, enzymes, and chromatin.\n4. Chromatin / Chromosomes:\n• Complexes of DNA molecules wrapped around alkaline histone protein cores. In non-dividing cells, it appears as a diffuse, uncoiled fibrous network (**Chromatin**); during cell division (mitosis/meiosis), it condenses into visible, tightly coiled rod-like bodies (**Chromosomes**).\n5. Nucleolus (Plural: Nucleoli):\n• A dense, non-membrane-bound subnuclear structure responsible for synthesizing ribosomal RNA (rRNA) and assembling ribosomal subunits.`,
      examples: [
        'Nuclear transplantation in Acetabularia: Joachim Hämmerling proved that the nucleus located in the rhizoid controls the morphology and cap regeneration of the giant single-celled alga.',
        'Protein synthesis command: The nucleus transcribes genetic codes from DNA into messenger RNA (mRNA), which migrates through nuclear pores to ribosomes for translation.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Exam Question: "Which organelle controls protein and enzyme synthesis in the cytoplasm of the cell?" The answer is the NUCLEUS (via transcription of mRNA)! The organelle that physically synthesizes the protein is the RIBOSOME.'
      ],
      question_ids: [16813]
    },

    // Slide 16: The Mitochondrion
    {
      subtopic: 'Cell Organelles',
      section_order: 16,
      section_type: 'worked_example',
      section_title: 'The Mitochondrion: Cellular Respiration & ATP Production',
      content: `Mitochondria (Singular: Mitochondrion) are rod-shaped or oval double-membrane-bound organelles known as the "Powerhouses of the Cell". They are the primary site of aerobic cellular respiration, where metabolic substrates are oxidized to generate Adenosine Triphosphate (ATP).\n\n${mitochondrionSvg}\n\nUltrastructural Architecture:\n1. Outer Mitochondrial Membrane: Smooth, fully permeable to small molecules due to large pore-forming proteins called **porins**.\n2. Inner Mitochondrial Membrane: Highly folded into numerous shelf-like projections called **Cristae**, which vastly increase the surface area available for the Electron Transport Chain (ETC) and ATP Synthase complexes (stalked particles / $F_0-F_1$ complexes).\n3. Matrix: The semi-fluid interior containing Krebs cycle (TCA cycle) enzymes, circular mitochondrial DNA (mtDNA), and 70S ribosomes.\n\nWhy Active Cells Have More Mitochondria:\nTissues with intense metabolic energy demands (cardiac muscle cells, skeletal muscle fibers, liver hepatocytes, and sperm cell midpieces) contain thousands of packed mitochondria, whereas inactive cells (e.g. skin epidermal cells) contain few. Mature human erythrocytes contain zero mitochondria!`,
      examples: [
        'Sperm locomotion: The midpiece of a human spermatozoon is tightly coiled with mitochondria that generate ATP to power the flagellum for swimming.',
        'Cardiac myocytes: Heart muscle beats continuously without fatigue because mitochondria occupy up to 40% of the cytoplasmic volume!'
      ],
      formulas: [
        'Aerobic Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP (or 36-38 ATP)'
      ],
      exam_tips: [
        'Chief Examiner Trap: Why does the inner mitochondrial membrane have folds (cristae)? Always answer: "To increase the surface area for the attachment of respiratory enzymes and ATP synthase complexes!"'
      ],
      question_ids: [45712, 18031, 45066]
    },

    // Slide 17: Chloroplasts and Plastids
    {
      subtopic: 'Cell Organelles',
      section_order: 17,
      section_type: 'concept',
      section_title: 'Plastids and Chloroplasts: Photosynthetic Energy Conversion',
      content: `Plastids are specialized double-membrane organelles found exclusively in plant cells and photosynthetic protists.\n\nThe Three Types of Plastids:\n1. Chloroplasts: Green plastids containing chlorophyll a, chlorophyll b, and carotenoids. Function: Photosynthesis.\n2. Chromoplasts: Colored plastids containing yellow, orange, and red carotenoid pigments (lutein, carotene, lycopene). Found in flower petals, ripening fruits (tomatoes, peppers), and autumn leaves to attract animal pollinators and seed dispersers.\n3. Leucoplasts: Non-pigmented, colorless plastids found in non-photosynthetic storage tissues (tubers, seeds, roots). Types: Amyloplasts (store starch, e.g. potato tubers), Elaioplasts (store lipids/oils), Aleuroplasts (store proteins).\n\nChloroplast Ultrastructure:\n• Double Membrane: Outer and inner chloroplast envelopes enclosing a central fluid space called the **Stroma**.\n• Thylakoids: Disc-shaped flattened membranous sacs arranged in stacks like piles of coins called **Grana** (singular: Granum).\n• Chlorophyll pigments are embedded within thylakoid membranes to harvest photons during the **Light-Dependent Phase** of photosynthesis (Photolysis of water & ATP generation).\n• Stroma: Fluid interior containing rubisco enzymes for the **Light-Independent Phase** (Calvin Cycle / $CO_2$ fixation into glucose).`,
      examples: [
        'Ripening of green tomato: Chloroplasts lose chlorophyll and structurally transform into chromoplasts filled with bright red lycopene pigment.',
        'Starch storage in cassava: Amyloplasts in cassava roots convert excess sucrose translocated from leaves into insoluble starch granules.'
      ],
      formulas: [
        'Photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂ ↑'
      ],
      exam_tips: [
        'JAMB High-Frequency Question: Where does the light reaction of photosynthesis take place? Answer: IN THE THYLAKOID MEMBRANES (GRANA)! Where does the dark reaction take place? Answer: IN THE STROMA!'
      ],
      question_ids: [71770]
    },

    // Slide 18: Endoplasmic Reticulum (ER)
    {
      subtopic: 'Cell Organelles',
      section_order: 18,
      section_type: 'concept',
      section_title: 'The Endoplasmic Reticulum (ER): Synthesis & Intracellular Transport',
      content: `The Endoplasmic Reticulum (ER) is an extensive interconnected network of branching membranous tubules, flattened cisternae, and vesicles extending from the outer nuclear membrane throughout the cytoplasm.\n\nTwo Structurally and Functionally Distinct Types of ER:\n\n1. Rough Endoplasmic Reticulum (RER):\n• Structural Appearance: Outer surface is heavily studded with 80S ribosomes.\n• Physiological Functions:\n  - Synthesizes proteins destined for secretion outside the cell (digestive enzymes, hormones) or incorporation into the plasma membrane.\n  - Folds nascent polypeptides into proper tertiary configurations and packages them into transport vesicles that bud off to the Golgi apparatus.\n• Predominance: Highly developed in protein-secreting cells (pancreatic acinar cells, plasma B cells producing antibodies, salivary gland cells).\n\n2. Smooth Endoplasmic Reticulum (SER):\n• Structural Appearance: Lacks ribosomes on its surface, consisting primarily of branching tubular networks.\n• Physiological Functions:\n  - Lipid and Phospholipid Synthesis: Synthesizes membrane lipids and steroid hormones (testosterone, estrogen, progesterone, cortisol).\n  - Detoxification of Drugs & Xenobiotics: Abundant in liver hepatocytes where cytochrome P450 enzymes neutralize barbiturates, alcohol, and metabolic toxins.\n  - Calcium Ion ($Ca^{2+}$) Storage: In skeletal muscle fibers, specialized SER called the **Sarcoplasmic Reticulum** sequesters and releases $Ca^{2+}$ to trigger muscle contraction.`,
      examples: [
        'Pancreas protein production: RER in pancreatic cells actively synthesizes millions of insulin and digestive enzyme (amylase, trypsin) molecules per second.',
        'Testicular Leydig cells: Packed with extensive SER to synthesize lipid-based steroid testosterone.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Past Question: "The cell organelle responsible for the transportation of substances within the cell is..." Answer: ENDOPLASMIC RETICULUM!'
      ],
      question_ids: [71821]
    },

    // Slide 19: Ribosomes
    {
      subtopic: 'Cell Organelles',
      section_order: 19,
      section_type: 'concept',
      section_title: 'Ribosomes: The Molecular Protein Synthesis Factories',
      content: `Ribosomes are tiny, dense, non-membrane-bound ribonucleoprotein particles consisting of ribosomal RNA (rRNA) and approximately 80 different structural proteins.\n\nSubunit Architecture:\nEvery ribosome consists of two unequal subunits that associate during protein translation:\n• Prokaryotic Ribosomes (70S): Composed of a large 50S subunit and a small 30S subunit. (Found in bacteria, mitochondria, and chloroplasts).\n• Eukaryotic Ribosomes (80S): Composed of a large 60S subunit and a small 40S subunit. (Found in eukaryotic cytosol and on RER).\n*(Note: S stands for Svedberg unit, a measure of sedimentation rate during ultracentrifugation, not additive mass!).*\n\nCellular Distribution & Functional Fate of Synthesized Proteins:\n1. Membrane-Bound Ribosomes (Attached to RER):\n• Synthesize proteins destined for secretion (insulin, pepsin), packaging into lysosomes (acid hydrolases), or insertion into cellular membranes.\n2. Free Cytoplasmic Ribosomes:\n• Suspended freely in the cytosol; synthesize structural proteins and metabolic enzymes that function internally within the cytosol (e.g., hemoglobin in developing red blood cells, glycolytic enzymes).\n\nPolysomes (Polyribosomes):\nClusters of multiple ribosomes translating a single mRNA molecule simultaneously, rapidly producing multiple copies of the same protein.`,
      examples: [
        'Developing Reticulocytes: Contain dense clusters of free polyribosomes dedicated to mass-producing hemoglobin chains.',
        'Antibiotic Target: Streptomycin and Tetracycline selectively bind to prokaryotic 70S ribosomes, killing pathogenic bacteria without damaging eukaryotic human 80S ribosomes.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question Alert: "The cell organelle responsible for the synthesis of protein is the..." Answer: RIBOSOME! Remember that ribosomes are NOT bounded by any membrane!'
      ],
      question_ids: [17032]
    },

    // Slide 20: The Golgi Apparatus
    {
      subtopic: 'Cell Organelles',
      section_order: 20,
      section_type: 'concept',
      section_title: 'The Golgi Apparatus: Processing, Packaging & Secretion Hub',
      content: `The Golgi apparatus (also known as the Golgi complex or **Dictyosome** in plant cells) was discovered by Camillo Golgi in 1898 using silver nitrate staining. It functions as the shipping, sorting, and packaging department of the eukaryotic cell.\n\nStructural Morphology:\n• Consists of a stack of 4 to 8 flattened, curved, membrane-bound sacs called **Cisternae**, with swollen rims surrounded by small vesicles.\n• Displays structural polarity:\n  - Cis Face (Entry / Forming Face): Convex face directed towards the RER; receives transport vesicles carrying newly synthesized proteins.\n  - Trans Face (Exit / Maturing Face): Concave face directed towards the plasma membrane; buds off secretory vesicles and lysosomes.\n\nKey Physiological Functions:\n1. Post-Translational Chemical Modification:\n• Modifies proteins and lipids by adding carbohydrate groups (**Glycosylation**) to form glycoproteins (mucus, antibodies) and glycolipids.\n2. Packaging & Secretion:\n• Concentrates and packages modified secretory products into secretory vesicles that migrate to the plasma membrane and release their contents by exocytosis.\n3. Biogenesis of Lysosomes:\n• Assembles hydrolytic enzymes into specialized membrane vesicles to form primary lysosomes.\n4. Plant Cell Plate Formation:\n• In dividing plant cells, Golgi vesicles synthesize and align pectins along the equatorial plane to construct the middle lamella of the new cell plate!`,
      examples: [
        'Mucus production in Goblet cells: Intestinal goblet cells possess hypertrophied Golgi bodies that continuously package mucin glycoproteins for gut lubrication.',
        'Acrosome formation: In developing spermatozoa, the Golgi apparatus fuses to form the acrosome cap containing enzymes to penetrate the egg ovum during fertilization.'
      ],
      formulas: [],
      exam_tips: [
        'Chief Examiner Trap: In plant cells, the Golgi apparatus is commonly termed a DICTYOSOME. If a question asks: "Which organelle forms the cell plate during plant cell cytokinesis?", the answer is GOLGI APPARATUS (DICTYOSOME)!'
      ],
      question_ids: []
    },

    // Slide 21: Lysosomes
    {
      subtopic: 'Cell Organelles',
      section_order: 21,
      section_type: 'concept',
      section_title: 'Lysosomes: The Cellular Digestive System & "Suicide Bags"',
      content: `Lysosomes are spherical, single-membrane-bound cytoplasmic vesicles discovered by Christian de Duve in 1955. They contain approximately 50 different acid hydrolytic enzymes (hydrolases) that break down biological macromolecules.\n\nOptimal Enzyme Environment:\n• Lysosomal enzymes (proteases, lipases, nucleases, glycosidases, acid phosphatases) function optimally at an **acidic pH of ~4.5 to 5.0**.\n• Proton pumps ($H^+$ ATPase) in the lysosomal membrane actively pump $H^+$ ions from the cytosol (pH ~7.2) into the lysosome interior to maintain this acidic working environment.\n\nKey Physiological Functions:\n1. Heterophagy (Intracellular Digestion):\n• Primary lysosomes fuse with endocytic food vacuoles or phagosomes to form secondary lysosomes (phagolysosomes), digesting ingested bacteria, viruses, or nutrients.\n2. Autophagy (Self-Digestion of Organelles):\n• Degrades worn-out, obsolete, or damaged cell organelles (e.g. non-functional mitochondria) for recycling of molecular components.\n3. Autolysis ("Suicide Bags"): \n• Under certain physiological or pathological conditions (cell death, starvation, or developmental remodeling), the lysosomal membrane ruptures, releasing hydrolytic enzymes into the cytosol and completely digesting the entire host cell from within!\n• Classic example: Resorption of the tadpole tail during amphibian metamorphosis.`,
      examples: [
        'Tadpole Metamorphosis: Massive autolysis by lysosomal enzymes dissolves and resorbs the tail of a tadpole, converting tail proteins into nutrients for developing adult frog legs.',
        'Phagocytosis in Neutrophils: Human white blood cells engulf pathogenic bacteria and destroy them within secondary lysosomes.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Trap: Why are lysosomes called "suicide bags"? Because if they rupture inside a cell, their hydrolytic enzymes digest the cell itself (Autolysis)!'
      ],
      question_ids: []
    },

    // Slide 22: Vacuoles & Osmoregulation
    {
      subtopic: 'Cell Organelles',
      section_order: 22,
      section_type: 'concept',
      section_title: 'Vacuoles: Turgor Pressure, Storage & Osmoregulation',
      content: `A vacuole is a membrane-bound space within the cytoplasm filled with watery fluid. The nature and function of vacuoles vary dramatically between plant and animal cells.\n\n1. Large Central Vacuole in Plants:\n• Enclosed by a specialized selectively permeable single membrane called the **Tonoplast**.\n• Filled with **Cell Sap**: an aqueous solution containing mineral salts, organic acids, sugars, amino acids, metabolic wastes, and water-soluble anthocyanin pigments (which impart red, purple, or blue colors to flowers and fruits).\n• Physiological Functions in Plants:\n  - Generates Turgor Pressure: Maintains mechanical rigidity and upright posture in herbaceous non-woody plants.\n  - Storage: Stores secondary metabolites, reserves, and toxic waste crystals (calcium oxalate raphides).\n\n2. Vacuoles in Unicellular Animals & Protozoa:\n• Food Vacuoles: Formed during phagocytosis to digest nutrients.\n• **Contractile Vacuoles (Osmoregulatory Organelles)**:\n  - Essential survival mechanism in freshwater protozoans (*Amoeba*, *Paramecium*, *Euglena*).\n  - Because the cytoplasm of freshwater organisms is hypertonic to pond water, water constantly enters the cell via osmosis.\n  - Contractile vacuoles actively collect this excess incoming water and periodically contract (systole) to pump it out of the cell, preventing osmotic lysis (bursting)!`,
      examples: [
        'Osmoregulation in Paramecium: Possesses anterior and posterior contractile vacuoles surrounded by radial feeder canals that fill (diastole) and discharge (systole) rhythmically.',
        'Plasmolysis in plant epidermal cells: Placed in hypertonic salt solution, water exits the central vacuole via exosmosis, causing the vacuole to shrink and the protoplast to pull away from the cell wall.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB High-Frequency Question: "The cell component that stores waste products is the..." Answer: VACUOLE! "The organelle which is contractile in function in Euglena is the..." Answer: CONTRACTILE VACUOLE!'
      ],
      question_ids: [16869, 71739]
    },

    // Slide 23: Centrosomes & Centrioles
    {
      subtopic: 'Cell Organelles',
      section_order: 23,
      section_type: 'concept',
      section_title: 'Centrosomes and Centrioles: Mitotic Spindle Organizers',
      content: `The Centrosome is the primary Microtubule Organizing Center (MTOC) in animal cells, located in the cytoplasm adjacent to the exterior of the nuclear envelope.\n\nCentriole Ultrastructure:\n• Each non-dividing animal centrosome contains a pair of mutually perpendicular cylindrical structures called **Centrioles**.\n• Microtubule Triplet Architecture: Each centriole cylinder is composed of 9 sets of triplet microtubules arranged in an open circle ("9 + 0" pattern), held together by connecting protein spokes resembling a cartwheel.\n• Centrioles are non-membrane-bound.\n\nPhysiological Roles in Cell Division:\n1. Spindle Fiber Generation:\n• During the S-phase of the cell cycle, the centriole pair duplicates.\n• At early prophase of mitosis and meiosis, the two centrosomes migrate to opposite poles of the cell.\n• Polymerize tubulin dimers to organize and extend the **Mitotic Spindle Apparatus**, whose astral rays and spindle fibers attach to the kinetochores of chromosomes to pull sister chromatids apart during anaphase!\n\n2. Formation of Basal Bodies:\n• Centrioles migrate to the cell periphery to form basal bodies (kinetosomes), which nucleate and anchor the axonemes of cilia and flagella!`,
      examples: [
        'Centrosome duplication in cancer: Defective centriole over-duplication leads to multipolar mitotic spindles, unequal chromosome segregation, and aneuploidy in malignant tumor cells.',
        'Spermiogenesis: The distal centriole of a spermatid forms the basal body that drives elongation of the sperm tail flagellum.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB & WAEC Classic Question: "The cell organelle from which spindle fibers originate during cell division in animal cells is known as..." Answer: CENTRIOLE (or CENTROSOME)! Notice: Higher plants LACK centrioles but still form mitotic spindles from diffuse MTOCs.'
      ],
      question_ids: [71698, 72049]
    },

    // Slide 24: Cilia and Flagella
    {
      subtopic: 'Cell Organelles',
      section_order: 24,
      section_type: 'concept',
      section_title: 'Cilia, Flagella & Basal Granules: Cellular Motility',
      content: `Cilia and flagella are hair-like, whip-like motile projections extending from the surface of eukaryotic cells, specialized for cell locomotion or the movement of fluid across cellular surfaces.\n\nStructural Comparison: Cilia vs. Flagella\n• Cilia: Short (5–10 μm), highly numerous (hundreds to thousands per cell), beating in coordinated waves with a fast power stroke followed by a recovery stroke (e.g. *Paramecium*, respiratory tract epithelium, fallopian tubes).\n• Flagella: Long (up to 150 μm), few in number (usually 1 to 4 per cell), executing smooth undulating sinusoidal wave-like movements (e.g. *Euglena*, *Chlamydomonas*, mammalian spermatozoa).\n\nThe Universal "9 + 2" Axoneme Architecture:\n• When cut in transverse cross-section, all eukaryotic cilia and flagella reveal an identical internal structure called the **Axoneme**:\n  - A peripheral ring of **9 doublet microtubules** surrounding a central pair of **2 single microtubules** ("9 + 2" pattern).\n  - Motor protein arms composed of **Dynein** reach from each outer doublet toward its neighbor. Dynein hydrolyzes ATP to walk along adjacent microtubules, causing the doublets to slide and bend the cilium or flagellum!\n\nBasal Granules (Kinetosomes):\n• Centriole-derived structures embedded beneath the cell membrane at the base of each cilium or flagellum, exhibiting a "9 + 0" triplet pattern, which acts as the organizing foundation.`,
      examples: [
        'Clearing respiratory pathways: Ciliated epithelial cells in human trachea beat 1,000 times per minute to push mucus and inhaled soot upwards away from lungs.',
        'Ovum movement in Fallopian tubes: Beating cilia lining the oviduct sweep the non-motile ovum from the ovary towards the uterus.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB UTME Past Question: "The formation of cilia and flagella in living cells is carried out with the help of..." Answer: BASAL GRANULES (CENTRIOLES)!'
      ],
      question_ids: [16932]
    },

    // Slide 25: Microbodies (Peroxisomes & Glyoxysomes)
    {
      subtopic: 'Cell Organelles',
      section_order: 25,
      section_type: 'concept',
      section_title: 'Microbodies: Peroxisomes and Glyoxysomes',
      content: `Microbodies are small, spherical, single-membrane-bound cytoplasmic organelles containing specialized oxidative enzymes.\n\n1. Peroxisomes (Found in both Animal and Plant Cells):\n• Contain flavin oxidases and the crucial antioxidant enzyme **Catalase**.\n• Metabolic Functions:\n  - Break down fatty acids via beta-oxidation into acetyl-CoA for cellular energy.\n  - Protect the cell from oxidative toxicity: During cellular oxidation, toxic hydrogen peroxide ($H_2O_2$) is produced as a dangerous byproduct. Catalase immediately hydrolyzes $H_2O_2$ into harmless water and oxygen gas:\n    $$2H_2O_2 \\xrightarrow{\\text{Catalase}} 2H_2O + O_2 \\uparrow$$\n  - In liver and kidney cells, peroxisomes detoxify circulating alcohol and blood toxins.\n  - In photosynthetic plant leaves, peroxisomes collaborate with chloroplasts and mitochondria to execute **Photorespiration**.\n\n2. Glyoxysomes (Specialized Plant Microbodies):\n• Found exclusively in the oil-storing tissues (cotyledons and endosperm) of germinating oilseeds (castor bean, groundnut, sunflower).\n• Contain enzymes of the **Glyoxylate Cycle**, which convert insoluble storage lipids (triacylglycerols) into soluble carbohydrates (sucrose) to nourish the growing plant seedling before photosynthesis begins!`,
      examples: [
        'Wound disinfection reaction: When hydrogen peroxide is poured onto a bleeding cut, vigorous bubbling occurs because peroxisomal catalase in exposed tissues instantly converts H₂O₂ to oxygen bubbles.',
        'Germinating groundnut seeds: Glyoxysomes rapidly convert peanut peanut oil into sucrose to fuel the emerging radicle and plumule.'
      ],
      formulas: [
        'Peroxisomal Catalase Reaction: 2H₂O₂ → 2H₂O + O₂ ↑'
      ],
      exam_tips: [
        'Chief Examiner Trap: If an exam question mentions the enzymatic breakdown of toxic hydrogen peroxide (H₂O₂), the organelle is PEROXISOME and the enzyme is CATALASE!'
      ],
      question_ids: []
    },

    // Slide 26: The Cytoskeleton
    {
      subtopic: 'Cytoskeleton',
      section_order: 26,
      section_type: 'concept',
      section_title: 'The Cytoskeleton: Cellular Skeleton, Shape & Transport Rails',
      content: `The Cytoskeleton is an intricate three-dimensional dynamic network of protein filaments and cylindrical tubules permeating the entire cytoplasm of eukaryotic cells.\n\nThree Major Structural Filaments:\n\n1. Microtubules:\n• Hollow cylindrical tubes (25 nm diameter) composed of polymerized **Tubulin** heterodimers ($\alpha$ and $\beta$ tubulin).\n• Functions: Form the structural framework of centrioles, mitotic spindle fibers, and cilia/flagella axonemes; act as "intracellular conveyor tracks" along which kinesin and dynein motor proteins drag vesicles.\n\n2. Microfilaments (Actin Filaments):\n• Solid, thin helical strands (7 nm diameter) composed of globular **Actin** protein.\n• Functions: Form the contractile ring that pinches animal cells during cytokinesis (cleavage furrow); power cytoplasmic streaming (cyclosis); enable amoeboid pseudopodial movement and muscle contraction with myosin.\n\n3. Intermediate Filaments:\n• Tough, fibrous cords (8–12 nm diameter) composed of proteins like **Keratin**.\n• Functions: High tensile strength; anchor the nucleus and organelles in fixed positions; maintain overall cellular shape under mechanical shearing stress.`,
      examples: [
        'Vesicle transport: Kinesin motor proteins "walk" step-by-step along microtubule tracks to deliver neurotransmitter vesicles to synaptic terminals in neurons.',
        'Cytokinesis ring: Actin microfilaments form an equatorial contractile belt that tightens to divide an animal mother cell into two daughter cells.'
      ],
      formulas: [],
      exam_tips: [
        'Remember that the cytoskeleton is DYNAMIC, continuously polymerizing and depolymerizing, which allows white blood cells and amoebae to change shape instantly.'
      ],
      question_ids: []
    },

    // Slide 27: Cell Specialization & Differentiation
    {
      subtopic: 'Cell Specialization',
      section_order: 27,
      section_type: 'concept',
      section_title: 'Cell Specialization & Morphological Adaptations',
      content: `In multicellular organisms, cells undergo differentiation—turning specific sets of genes on or off—to acquire specialized structures tailored precisely to their physiological functions.\n\nClassic Examples of Cell Specialization in Examination Syllabuses:\n\n1. Animal Cells:\n• Red Blood Cells (Erythrocytes): Biconcave disc shape increases surface area-to-volume ratio for gas diffusion; lacks nucleus, mitochondria, and ER to pack maximum hemoglobin; flexible to squeeze through 5 μm capillary beds.\n• Motor Neurons: Elongated axon (up to 1 meter long) for rapid impulse transmission; dendrites receive signals; myelin sheath insulates against charge leakage.\n• Spermatozoa: Haploid nucleus; acrosome cap filled with hyaluronidase enzymes to penetrate egg; midpiece packed with mitochondria for ATP; flagellum for swimming.\n• Root Hair Cells: Slender epidermal protrusion dramatically increases surface area for water absorption by osmosis and mineral absorption by active transport; thin wall; large vacuole.\n• Palisade Mesophyll Cells: Closely packed, columnar cells oriented perpendicular to leaf surface; contain dense concentrations of chloroplasts positioned along cell edges to intercept maximum sunlight.\n• Guard Cells: Bean-shaped epidermal cells containing chloroplasts; possessing unevenly thickened inner walls (thick inner wall, thin elastic outer wall) to control stomatal pore opening and closing.`,
      examples: [
        'Sickle Cell Anemia: A single base mutation in hemoglobin gene causes erythrocytes to deform into sickle crescents under low oxygen, blocking capillaries and hemolyzing.',
        'Stomatal opening: Potassium ($K^+$) ions actively pumped into guard cells lower water potential, causing endosmosis. Turgor stretches elastic outer walls, bowing thick inner walls outward to open the stoma.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question Alert: "The heritable disease caused by distorted shape of the red blood cell, hindering free flow of blood is..." Answer: SICKLE CELL ANEMIA!'
      ],
      question_ids: [16918]
    },

    // Slide 28: Chief Examiner Traps & Misconceptions
    {
      subtopic: 'Examiner Traps',
      section_order: 28,
      section_type: 'exam_trap',
      section_title: 'WAEC & JAMB Chief Examiner Traps in Cell Biology',
      content: `Master these high-frequency traps and misconceptions that cost candidates distinctions in examinations:\n\n1. "All plant cells have chloroplasts": FALSE! Only cells exposed to sunlight (leaves, outer green stems, sepals) have chloroplasts. Underground roots, onion bulb scales, and internal pith cells possess leucoplasts, NOT chloroplasts!\n\n2. "All eukaryotic cells have a nucleus": FALSE! Mature mammalian red blood cells and mature plant sieve tube elements lack nuclei at functional maturity, although they arose from nucleated precursor cells.\n\n3. Organelle Membrane Hierarchy Trap:\n• Double Membrane Organelles: Nucleus, Mitochondria, Chloroplasts.\n• Single Membrane Organelles: Endoplasmic Reticulum, Golgi Apparatus, Lysosomes, Vacuoles, Peroxisomes.\n• Non-Membrane Organelles: Ribosomes, Centrioles, Cytoskeleton elements.\n\n4. Cell Wall Permeability: The cell wall is COMPLETELY PERMEABLE to water and solutes. It does NOT control what enters or leaves the cell; the selective permeability resides exclusively in the plasma membrane!\n\n5. "Mitochondria produce energy": FALSE phrasing in WAEC! Mitochondria do not CREATE energy (which violates the First Law of Thermodynamics). Mitochondria CONVERT chemical potential energy in glucose into readily usable ATP energy!`,
      examples: [
        'Onion Epidermal Peel: Onion bulb scales grow underground and appear white. Iodine stain reveals nucleus and cell wall, but zero chloroplasts!'
      ],
      formulas: [],
      exam_tips: [
        'Never state in a WAEC theory exam that the cell wall is selectively permeable. You will lose the mark. Write: "The cell wall is freely permeable, while the plasma membrane is selectively permeable."'
      ],
      question_ids: []
    },

    // Slide 29: Microscopy & Magnification Calculations
    {
      subtopic: 'Practical Cytology',
      section_order: 29,
      section_type: 'worked_example',
      section_title: 'Practical Microscopy: Resolving Power & Magnification Formula',
      content: `Microscopy is the scientific discipline of viewing objects not visible to the naked human eye. Two critical properties define a microscope:\n• Magnification: The factor by which the image of an object is enlarged relative to actual size.\n• Resolving Power (Resolution): The minimum distance between two distinct points at which they can still be distinguished as separate entities. Light microscope resolution is limited by the wavelength of visible light (~200 nm); Electron microscope resolution uses electron beams with wavelengths 100,000x shorter (~0.2 nm).\n\nThe Universal Magnification Formula:\n$$\\text{Magnification } (M) = \\frac{\\text{Size of Drawing / Image } (I)}{\\text{Actual Size of Specimen } (A)}$$\n\n$$\\text{Actual Size } (A) = \\frac{\\text{Image Size } (I)}{\\text{Magnification } (M)}$$\n\n$$\\text{Total Magnification} = \\text{Power of Eyepiece Lens} \\times \\text{Power of Objective Lens}$$\n\nStandard Unit Conversions for Cytology Calculations:\n• $1\\text{ meter } (m) = 1,000\\text{ millimeters } (mm)$\n• $1\\text{ mm} = 1,000\\text{ micrometers } (\\mu m)$\n• $1\\text{ }\\mu m = 1,000\\text{ nanometers } (nm)$`,
      examples: [
        'WAEC Practical Calculation: An onion epidermal cell measures 0.05 mm in actual length. In a student\'s drawing, the cell length measures 20 mm. Calculate the magnification of the drawing:\n• Formula: M = Image Size / Actual Size\n• M = 20 mm / 0.05 mm = 400x (or x400).\n• Note: Magnification is a dimensionless ratio; always prefix with "x" or suffix with "x".'
      ],
      formulas: [
        'M = I / A (Magnification = Image Size / Actual Size)',
        'Total Magnification = Eyepiece (x10) × Objective (x40) = x400'
      ],
      exam_tips: [
        'Unit Trap: Always convert both Image Size and Actual Size to the EXACT SAME units (both in mm or both in μm) before dividing! Forgetting to convert units is the #1 mistake candidates make in magnification questions.'
      ],
      question_ids: []
    },

    // Slide 30: Masterclass Summary
    {
      subtopic: 'Masterclass Summary',
      section_order: 30,
      section_type: 'summary',
      section_title: 'Cell Biology Comprehensive Masterclass Cheat Sheet',
      content: `Cell Biology Rapid-Fire Revision Matrix:\n\n1. The Cell: Basic structural and functional unit of all living organisms.\n2. Cell Theory: Hooke named dead cork cells; Leeuwenhoek saw living cells; Schleiden & Schwann founded theory; Virchow proved biogenesis. Viruses are the primary exception!\n3. Organization Levels: Molecule → Organelle → Cell → Tissue → Organ → System → Organism. (Blood is a tissue; Euglena is an organism).\n4. Plant vs Animal Cells: Plant cells have cellulose wall, chloroplasts, large central vacuole, starch; Animal cells have centrioles, lysosomes, glycogen, cleavage furrow.\n5. Membrane: Fluid Mosaic Model (Singer & Nicolson) with phospholipid bilayer (hydrophilic heads out, hydrophobic tails in).\n6. Nucleus: Master director of metabolism & genetics; nucleolus synthesizes rRNA.\n7. Mitochondria: Powerhouse, aerobic respiration, cristae maximize ATP synthase area, contains circular mtDNA.\n8. Chloroplast: Site of photosynthesis; thylakoids (grana) host light reaction; stroma hosts dark reaction.\n9. Ribosomes: Protein synthesis machines (70S in prokaryotes/mitochondria, 80S in eukaryotic cytosol).\n10. Endoplasmic Reticulum: RER synthesizes export proteins; SER synthesizes lipids/steroids and detoxifies.\n11. Golgi Body / Dictyosome: Packaging, glycosylation, secretion, lysosome formation, cell plate synthesis.\n12. Lysosomes: "Suicide bags", acidic pH 4.5-5.0, hydrolytic enzymes for heterophagy and autolysis.\n13. Vacuoles: Tonoplast membrane, cell sap, turgor pressure; Contractile vacuoles osmoregulate in protozoa.\n14. Centrioles: "9 + 0" triplet pattern; generate mitotic spindle in animal cells and basal bodies of cilia/flagella.\n15. Cilia / Flagella: "9 + 2" axoneme pattern; dynein motor arms produce ATP-driven bending.`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Review this 30-point cheat sheet before entering the examination hall for guaranteed full marks in Cytology!'
      ],
      question_ids: []
    }
  ]
};

async function main() {
  console.log('=== Populating 30-Slide Biology Masterclass to Live DB ===');
  console.log('Subject:', biologyCellMasterclass.subject);
  console.log('Topic:', biologyCellMasterclass.topic);
  console.log('Total Sections:', biologyCellMasterclass.sections.length);

  const res = await saveLesson(biologyCellMasterclass);
  console.log('\nResult:', res);

  console.log('\n--- Verifying Saved Sections via API ---');
  https.get('https://eznonews.com.ng/studyplug-api/get_structured_lesson.php?subject=Biology&topic=' + encodeURIComponent(biologyCellMasterclass.topic), res2 => {
    let body = '';
    res2.on('data', chunk => body += chunk);
    res2.on('end', () => {
      try {
        const j = JSON.parse(body.replace(/^\uFEFF/, '').trim());
        console.log('API Verification: Success =', j.success, '| Found =', j.found, '| Sections returned =', (j.sections || []).length);
        let qTotal = 0;
        (j.sections || []).forEach(s => {
          const qc = (s.questions || []).length;
          qTotal += qc;
          if (qc > 0) {
            console.log(`  [Sec ${s.section_order}] "${s.section_title}" has ${qc} question(s):`, s.questions.map(q => q.id));
          }
        });
        console.log('Total verified past questions attached across 30 slides:', qTotal);
      } catch(e) {
        console.log('Parse error:', e.message, body.slice(0, 300));
      }
    });
  });
}

main().catch(console.error);
