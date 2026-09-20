// populate_five_biology_cell_topics.cjs
// Populates the 5 distinct, strong Cell Biology topics according to official JAMB & WAEC syllabuses
// and approved textbooks (S.T. Ramalingam's Modern Biology & Idodo Umeh's College Biology).

const https = require('https');

function postJson(path, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = https.request({
      hostname: 'eznonews.com.ng',
      path: path,
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
        } catch(e) {
          resolve({ error: body.slice(0, 300) });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// ─── SVG DIAGRAM DEFINITIONS ──────────────────────────────────────────────────

// Diagram 1: Hierarchy of Organization
const levelsSvg = `<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
  <rect width="700" height="200" fill="#F8FAFC" rx="16" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="350" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0E382B" text-anchor="middle">THE HIERARCHY OF STRUCTURAL ORGANIZATION OF LIFE</text>
  <g transform="translate(15, 45)">
    <!-- 1. Molecule -->
    <rect x="0" y="0" width="115" height="130" fill="#FFFFFF" rx="10" stroke="#CBD5E1"/>
    <rect x="0" y="0" width="115" height="25" fill="#E0E7FF" rx="10"/>
    <text x="57" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#3730A3" text-anchor="middle">1. MOLECULES</text>
    <text x="57" y="55" font-size="20" text-anchor="middle">🧬</text>
    <text x="57" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Bio-Molecules</text>
    <text x="57" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Proteins, DNA, Lipids</text>

    <text x="127" y="70" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

    <!-- 2. Cell -->
    <rect x="140" y="0" width="115" height="130" fill="#FFFFFF" rx="10" stroke="#0E382B" stroke-width="2"/>
    <rect x="0" y="0" width="115" height="25" fill="#0E382B" rx="10" transform="translate(140, 0)"/>
    <text x="197" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFCC00" text-anchor="middle">2. CELLULAR</text>
    <text x="197" y="55" font-size="20" text-anchor="middle">🔬</text>
    <text x="197" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0E382B" text-anchor="middle">Basic Living Unit</text>
    <text x="197" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Amoeba, Neuron, RBC</text>

    <text x="267" y="70" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

    <!-- 3. Tissue -->
    <rect x="280" y="0" width="115" height="130" fill="#FFFFFF" rx="10" stroke="#CBD5E1"/>
    <rect x="0" y="0" width="115" height="25" fill="#DCFCE7" rx="10" transform="translate(280, 0)"/>
    <text x="337" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">3. TISSUE</text>
    <text x="337" y="55" font-size="20" text-anchor="middle">🧫</text>
    <text x="337" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Similar Cells</text>
    <text x="337" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Blood, Mesophyll, Xylem</text>

    <text x="407" y="70" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

    <!-- 4. Organ -->
    <rect x="420" y="0" width="115" height="130" fill="#FFFFFF" rx="10" stroke="#CBD5E1"/>
    <rect x="0" y="0" width="115" height="25" fill="#FEF3C7" rx="10" transform="translate(420, 0)"/>
    <text x="477" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#92400E" text-anchor="middle">4. ORGAN</text>
    <text x="477" y="55" font-size="20" text-anchor="middle">❤️</text>
    <text x="477" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Combined Tissues</text>
    <text x="477" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Heart, Leaf, Kidney</text>

    <text x="547" y="70" font-size="16" font-weight="bold" fill="#0E382B">➔</text>

    <!-- 5. System -->
    <rect x="560" y="0" width="115" height="130" fill="#FFFFFF" rx="10" stroke="#CBD5E1"/>
    <rect x="0" y="0" width="115" height="25" fill="#FEE2E2" rx="10" transform="translate(560, 0)"/>
    <text x="617" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991B1B" text-anchor="middle">5. SYSTEM</text>
    <text x="617" y="55" font-size="20" text-anchor="middle">🚶</text>
    <text x="617" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Organ System</text>
    <text x="617" y="100" font-family="sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Circulatory, Excretory</text>
  </g>
</svg>`;

// Diagram 2: Animal Cell Ultrastructure
const animalCellSvg = `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xl mx-auto">
  <rect width="600" height="300" fill="#F8FAFC" rx="14" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="300" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0E382B" text-anchor="middle">ULTRASTRUCTURE OF A GENERALIZED ANIMAL CELL</text>
  <path d="M 120 150 C 120 70, 180 50, 300 50 C 420 50, 480 80, 480 150 C 480 220, 400 260, 300 260 C 180 260, 120 220, 120 150 Z" fill="#F1F5F9" stroke="#0E382B" stroke-width="3"/>
  <!-- Nucleus -->
  <circle cx="260" cy="150" r="48" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
  <circle cx="250" cy="145" r="15" fill="#1E3A8A"/>
  <text x="250" y="149" font-family="sans-serif" font-size="8" fill="#FFFFFF" font-weight="bold" text-anchor="middle">Nucleolus</text>
  <!-- Mitochondria -->
  <ellipse cx="380" cy="110" rx="24" ry="14" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
  <path d="M 360 110 Q 370 102, 380 110 T 400 110" fill="none" stroke="#B91C1C" stroke-width="1.5"/>
  <!-- Golgi Body -->
  <path d="M 360 180 C 375 175, 385 175, 400 180" stroke="#D97706" stroke-width="3" fill="none"/>
  <path d="M 358 190 C 375 185, 385 185, 402 190" stroke="#D97706" stroke-width="3" fill="none"/>
  <!-- Centrioles -->
  <rect x="220" y="95" width="10" height="4" fill="#059669" transform="rotate(45 220 95)"/>
  <rect x="226" y="90" width="10" height="4" fill="#059669" transform="rotate(-45 226 90)"/>
  <!-- Labels -->
  <text x="490" y="153" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0E382B">Plasma Membrane</text>
  <text x="415" y="112" font-family="sans-serif" font-size="9" font-weight="bold" fill="#DC2626">Mitochondrion</text>
  <text x="415" y="188" font-family="sans-serif" font-size="9" font-weight="bold" fill="#D97706">Golgi Apparatus</text>
  <text x="260" y="215" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1E40AF" text-anchor="middle">Nucleus & DNA</text>
  <text x="180" y="85" font-family="sans-serif" font-size="9" font-weight="bold" fill="#059669">Centrioles</text>
</svg>`;

// Diagram 3: Plant Cell Ultrastructure
const plantCellSvg = `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xl mx-auto">
  <rect width="600" height="300" fill="#F8FAFC" rx="14" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="300" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0E382B" text-anchor="middle">ULTRASTRUCTURE OF A GENERALIZED PLANT CELL</text>
  <!-- Cell Wall -->
  <polygon points="110,65 470,55 500,255 125,268" fill="#F0FDF4" stroke="#15803D" stroke-width="6" stroke-linejoin="round"/>
  <!-- Central Vacuole -->
  <polygon points="180,95 360,85 375,215 190,225" fill="#CFFAFE" stroke="#0891B2" stroke-width="2"/>
  <text x="280" y="160" font-family="sans-serif" font-size="10" font-weight="black" fill="#0E7490" text-anchor="middle">Central Sap Vacuole (Tonoplast)</text>
  <!-- Chloroplasts -->
  <ellipse cx="145" cy="110" rx="20" ry="12" fill="#BBF7D0" stroke="#16A34A" stroke-width="1.5"/>
  <ellipse cx="410" cy="90" rx="20" ry="12" fill="#BBF7D0" stroke="#16A34A" stroke-width="1.5"/>
  <!-- Peripheral Nucleus -->
  <circle cx="430" cy="190" r="25" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="60" y="65" font-family="sans-serif" font-size="9" font-weight="bold" fill="#15803D">Cellulose Wall</text>
  <text x="145" y="140" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16A34A" text-anchor="middle">Chloroplast</text>
  <text x="430" y="235" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1D4ED8" text-anchor="middle">Peripheral Nucleus</text>
</svg>`;

// Diagram 4: Osmosis & Plasmolysis Diagram
const osmosisSvg = `<svg viewBox="0 0 650 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xl mx-auto">
  <rect width="650" height="220" fill="#FFFFFF" rx="14" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="325" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0E382B" text-anchor="middle">CELLULAR BEHAVIOR IN DIFFERENT OSMOTIC ENVIRONMENTS</text>
  
  <!-- 1. Hypotonic Medium -->
  <g transform="translate(30, 45)">
    <rect width="170" height="150" fill="#F0FDF4" rx="10" stroke="#16A34A" stroke-width="1.5"/>
    <text x="85" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#15803D" text-anchor="middle">HYPOTONIC (DILUTE)</text>
    <!-- Plant Cell Turgid -->
    <rect x="35" y="35" width="100" height="70" fill="#BBF7D0" stroke="#15803D" stroke-width="3" rx="4"/>
    <rect x="42" y="42" width="86" height="56" fill="#CFFAFE" stroke="#0891B2" rx="4"/>
    <text x="85" y="73" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0E382B" text-anchor="middle">TURGID</text>
    <text x="85" y="122" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Water enters (Endosmosis)</text>
    <text x="85" y="136" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Turgor pressure supports plant</text>
  </g>

  <!-- 2. Isotonic Medium -->
  <g transform="translate(240, 45)">
    <rect width="170" height="150" fill="#F8FAFC" rx="10" stroke="#64748B" stroke-width="1.5"/>
    <text x="85" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#334155" text-anchor="middle">ISOTONIC (BALANCED)</text>
    <rect x="35" y="35" width="100" height="70" fill="#E2E8F0" stroke="#64748B" stroke-width="2" rx="4"/>
    <rect x="45" y="45" width="80" height="50" fill="#E0F2FE" stroke="#0284C7" rx="4"/>
    <text x="85" y="73" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">FLACCID</text>
    <text x="85" y="122" font-family="sans-serif" font-size="8" fill="#64748B" text-anchor="middle">Equal water in and out</text>
    <text x="85" y="136" font-family="sans-serif" font-size="8" fill="#64748B" text-anchor="middle">No net water movement</text>
  </g>

  <!-- 3. Hypertonic Medium -->
  <g transform="translate(450, 45)">
    <rect width="170" height="150" fill="#FEF2F2" rx="10" stroke="#DC2626" stroke-width="1.5"/>
    <text x="85" y="18" font-family="sans-serif" font-size="10" font-weight="black" fill="#B91C1C" text-anchor="middle">HYPERTONIC (CONC.)</text>
    <rect x="35" y="35" width="100" height="70" fill="#FEE2E2" stroke="#DC2626" stroke-width="2" rx="4"/>
    <!-- Shrunk Protoplast -->
    <ellipse cx="85" cy="70" rx="28" ry="18" fill="#FECDD3" stroke="#E11D48" stroke-width="2"/>
    <text x="85" y="73" font-family="sans-serif" font-size="9" font-weight="bold" fill="#9F1239" text-anchor="middle">PLASMOLYZED</text>
    <text x="85" y="122" font-family="sans-serif" font-size="8" fill="#B91C1C" text-anchor="middle">Water leaves (Exosmosis)</text>
    <text x="85" y="136" font-family="sans-serif" font-size="8" fill="#B91C1C" text-anchor="middle">Protoplast shrinks from wall</text>
  </g>
</svg>`;

// Diagram 5: Stages of Mitosis Diagram
const mitosisSvg = `<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
  <rect width="680" height="180" fill="#F8FAFC" rx="14" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="340" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0E382B" text-anchor="middle">THE FOUR STAGES OF MITOTIC CELL DIVISION (PMAT)</text>
  
  <!-- Prophase -->
  <g transform="translate(20, 35)">
    <circle cx="65" cy="65" r="55" fill="#FFFFFF" stroke="#0E382B" stroke-width="2"/>
    <text x="65" y="20" font-family="sans-serif" font-size="10" font-weight="black" fill="#0E382B" text-anchor="middle">PROPHASE</text>
    <!-- Chromosomes condensing -->
    <line x1="50" y1="50" x2="65" y2="65" stroke="#DC2626" stroke-width="3"/>
    <line x1="65" y1="50" x2="50" y2="65" stroke="#DC2626" stroke-width="3"/>
    <line x1="65" y1="65" x2="80" y2="80" stroke="#2563EB" stroke-width="3"/>
    <line x1="80" y1="65" x2="65" y2="80" stroke="#2563EB" stroke-width="3"/>
    <text x="65" y="135" font-family="sans-serif" font-size="8" fill="#64748B" text-anchor="middle">Chromosomes condense</text>
  </g>

  <!-- Metaphase -->
  <g transform="translate(180, 35)">
    <circle cx="65" cy="65" r="55" fill="#FFFFFF" stroke="#0E382B" stroke-width="2"/>
    <text x="65" y="20" font-family="sans-serif" font-size="10" font-weight="black" fill="#0E382B" text-anchor="middle">METAPHASE</text>
    <!-- Equator alignment -->
    <line x1="65" y1="20" x2="65" y2="110" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="58" y1="50" x2="72" y2="50" stroke="#DC2626" stroke-width="3.5"/>
    <line x1="58" y1="80" x2="72" y2="80" stroke="#2563EB" stroke-width="3.5"/>
    <text x="65" y="135" font-family="sans-serif" font-size="8" fill="#64748B" text-anchor="middle">Equatorial alignment</text>
  </g>

  <!-- Anaphase -->
  <g transform="translate(340, 35)">
    <circle cx="65" cy="65" r="55" fill="#FFFFFF" stroke="#0E382B" stroke-width="2"/>
    <text x="65" y="20" font-family="sans-serif" font-size="10" font-weight="black" fill="#0E382B" text-anchor="middle">ANAPHASE</text>
    <!-- Separating chromatids -->
    <path d="M 40 45 L 30 55 L 40 65" fill="none" stroke="#DC2626" stroke-width="3"/>
    <path d="M 90 45 L 100 55 L 90 65" fill="none" stroke="#DC2626" stroke-width="3"/>
    <path d="M 40 75 L 30 85 L 40 95" fill="none" stroke="#2563EB" stroke-width="3"/>
    <path d="M 90 75 L 100 85 L 90 95" fill="none" stroke="#2563EB" stroke-width="3"/>
    <text x="65" y="135" font-family="sans-serif" font-size="8" fill="#64748B" text-anchor="middle">Sister chromatids separate</text>
  </g>

  <!-- Telophase -->
  <g transform="translate(500, 35)">
    <ellipse cx="75" cy="65" rx="70" ry="48" fill="#FFFFFF" stroke="#0E382B" stroke-width="2"/>
    <line x1="75" y1="20" x2="75" y2="110" stroke="#0E382B" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="75" y="20" font-family="sans-serif" font-size="10" font-weight="black" fill="#0E382B" text-anchor="middle">TELOPHASE</text>
    <circle cx="45" cy="65" r="18" fill="#DBEAFE" stroke="#1D4ED8"/>
    <circle cx="105" cy="65" r="18" fill="#DBEAFE" stroke="#1D4ED8"/>
    <text x="75" y="135" font-family="sans-serif" font-size="8" fill="#64748B" text-anchor="middle">2 Diploid Nuclei (2n)</text>
  </g>
</svg>`;


// ============================================================================
// TOPIC 1: Cell as a Living Unit and Organization of Life
// ============================================================================
const topic1_Organization = {
  subject: 'Biology',
  topic: 'Cell as a Living Unit and Organization of Life',
  subtopic: 'Cell Theory, Forms of Cellular Existence & Biological Organization',
  summary_60s: 'The cell is the basic structural and functional unit of life. Life exists in 4 major forms: independent unicellular (Amoeba, Chlamydomonas), colonial (Volvox), filamentous (Spirogyra), and specialized multicellular tissues/organs. Organization flows from Molecule → Cell → Tissue → Organ → System → Organism.',
  key_formulas: 'Organization Hierarchy: Molecule → Organelle → Cell → Tissue → Organ → System → Organism\nBlood = Fluid Connective Tissue (NOT an organ!)',
  pro_tips_95: 'Viruses are the primary exception to the cell theory because they are non-cellular. Sieve tube elements and mature mammalian RBCs lack nuclei at maturity. Volvox is colonial; Spirogyra is filamentous!',
  syllabus_objectives: '1. Trace the history of cytology and state the cell theory. 2. Identify exceptions to cell theory. 3. Describe unicellular, colonial, filamentous, and multicellular forms of life with examples. 4. Outline levels of organization from cell to organism.',
  sections: [
    {
      subtopic: 'Cytology History',
      section_order: 1,
      section_type: 'intro',
      section_title: 'The Concept of the Cell & Pioneers of Cytology',
      content: `Cytology is the branch of biological science that studies the structural architecture, physiology, biochemistry, and pathology of cells.\n\nThe historical pathway to modern cell biology was established by five key scientists whose contributions are frequently tested in JAMB & WAEC:\n\n• Robert Hooke (1665): First coined the term "cell" after observing porous compartments in thin slices of bottle cork under a primitive compound microscope.\n• Anton van Leeuwenhoek (1674): First observed living free-moving unicellular microorganisms ("animalcules") including bacteria, protozoa, and spermatozoa.\n• Robert Brown (1831): Discovered and named the nucleus within plant cells.\n• Matthias Schleiden (1838) & Theodor Schwann (1839): Formulated the classical Cell Theory for plants and animals respectively.\n• Rudolf Virchow (1855): Concluded that all cells arise exclusively from pre-existing living cells (*Omnis cellula e cellula*).`,
      examples: [
        'Hooke\'s cork observation: Hooke examined dead cellulose cell walls of cork tissue that looked like monks\' small rooms ("cella").',
        'Leeuwenhoek\'s discovery: Observed living bacteria and pond water protozoa using polished single glass lenses at 270x magnification.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB High-Frequency Question: "Who first observed LIVING cells?" The answer is Anton van Leeuwenhoek! Robert Hooke observed only the DEAD, empty cell walls of cork!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Cell Theory',
      section_order: 2,
      section_type: 'rule',
      section_title: 'The Modern Cell Theory & Its Biological Exceptions',
      content: `The Cell Theory is one of the unifying foundations of biology. It states:\n\n1. All living organisms are composed of one or more cells.\n2. The cell is the basic structural and functional unit of life.\n3. All new cells arise solely from pre-existing cells through division (*Omnis cellula e cellula*).\n4. Total organismal activity is the sum of the independent activities of its component cells.\n\nCRITICAL SCIENTIFIC EXCEPTIONS TO THE CELL THEORY:\nExaminers frequently test structures that do NOT conform to standard cell theory:\n• Viruses: Non-cellular (acellular) biological entities containing only genetic material (DNA or RNA) inside a protein coat (capsid). They exhibit zero metabolic activity outside a host cell.\n• Coenocytic Fungi (*Rhizopus*): Consist of continuous multinucleate masses of protoplasm without division into distinct individual cells.\n• Mature Mammalian Red Blood Cells: Lack nuclei at maturity to maximize space for hemoglobin.\n• Mature Sieve Tube Elements: Functional plant phloem cells that lose their nuclei at maturity.`,
      examples: [
        'Acellular virus: A bacteriophage has no cytoplasm, ribosomes, or cell membrane and cannot generate ATP.',
        'Rhizopus mycelium: A non-septate fungal hypha containing hundreds of nuclei in an undivided cytoplasm.'
      ],
      formulas: [
        'Omnis cellula e cellula = All cells arise from pre-existing cells (Rudolf Virchow, 1855)'
      ],
      exam_tips: [
        'WAEC & JAMB Trap: If asked "Which of the following is an exception to the cell theory?", the primary answer is VIRUS because it is completely non-cellular!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Levels of Organization',
      section_order: 3,
      section_type: 'concept',
      section_title: 'Hierarchy of Structural Organization of Life',
      content: `Living matter exhibits a clear hierarchy from simple chemical molecules up to complex multicellular organisms:\n\n${levelsSvg}\n\n1. Molecular Level: Biochemicals (Proteins, Lipids, Carbohydrates, Nucleic Acids, ATP).\n2. Cellular Level: The basic living structural unit (e.g. *Amoeba*, red blood cell, palisade mesophyll cell).\n3. Tissue Level: Groups of similar specialized cells performing a specific common function (e.g. blood tissue, xylem, ciliated epithelium).\n4. Organ Level: Two or more tissues working together as a functional unit (e.g. heart, kidney, leaf, stomach).\n5. System Level: A collection of organs coordinating a major physiological process (e.g. circulatory system, digestive system, vascular bundle system).\n6. Complex Organism: An independent individual living entity (e.g. human, flowering plant).`,
      examples: [
        'Blood is a tissue: Blood contains red cells, white cells, and platelets suspended in liquid plasma matrix.',
        'A leaf is an organ: Composed of upper epidermis, palisade mesophyll, spongy mesophyll, and vascular bundles (xylem/phloem).'
      ],
      formulas: [],
      exam_tips: [
        'Chief Examiner Trap: Is blood an organ or a tissue? Blood is a FLUID CONNECTIVE TISSUE, NOT an organ!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Unicellular Organisms',
      section_order: 4,
      section_type: 'concept',
      section_title: 'Forms of Cell Existence: 1. Independent Free-Living Single Cells',
      content: `In unicellular organisms, a single complete cell constitutes the entire independent individual organism. That single cell carries out all vital life activities: nutrition, respiration, excretion, osmoregulation, locomotion, sensitivity, and reproduction.\n\nKey Examples in the Syllabus:\n• *Amoeba proteus*: Moves and feeds using temporary projections of cytoplasm called pseudopodia (phagocytosis). Osmoregulates using a contractile vacuole.\n• *Paramecium caudatum*: Slipper-shaped ciliate with a fixed shape, two nuclei (macronucleus and micronucleus), oral groove, and beating cilia for swimming.\n• *Euglena viridis*: Mixotrophic flagellate possessing both plant characteristics (chloroplasts for photosynthesis) and animal characteristics (flagellum, red eyespot / stigma, gullet, flexible protein pellicle).\n• *Chlamydomonas*: Single-celled biflagellate green alga with a cup-shaped chloroplast and eyespot.`,
      examples: [
        'Osmoregulation in Amoeba: Excess water entering by osmosis is collected into a contractile vacuole and expelled.',
        'Mixotrophic Euglena: Undergoes autotrophic photosynthesis in light; switches to heterotrophic saprophytic feeding in dark.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question Trap: Why is Euglena considered a plant-animal intermediate? Plant features: Chloroplasts, pyrenoids. Animal features: Flagellum, eyespot, gullet, pellicle (no cellulose wall)!'
      ],
      question_ids: [71739]
    },
    {
      subtopic: 'Colonial & Filamentous',
      section_order: 5,
      section_type: 'concept',
      section_title: 'Forms of Cell Existence: 2. Colonial and Filamentous Organisms',
      content: `1. Colonial Organisms:\nA colony consists of an aggregate of independent or semi-independent cells of the same species living together within a common mucilaginous matrix.\n• *Volvox*: A hollow spherical green alga colony containing 500 to 60,000 biflagellated cells. Displays primitive division of labor: vegetative somatic cells for swimming and photosynthetic feeding vs. reproductive gonidia.\n• *Pandorina*: A simpler colony consisting of 16 flagellated cells clustered in a ball.\n\n2. Filamentous Organisms:\nA filament consists of single cells joined end-to-end longitudinally to form a thread-like chain.\n• *Spirogyra*: Freshwater filamentous green alga with unbranched cylindrical cells, spiral ribbon-shaped chloroplasts with pyrenoids, and pectin sheaths.\n• *Oscillatoria*: Filamentous cyanobacterium capable of rhythmic gliding oscillations.`,
      examples: [
        'Spirogyra conjugation: Sexual reproduction where cells in adjacent filaments form conjugation tubes to exchange gametes.',
        'Volvox daughter colonies: Asexual reproductive cells divide internally to form miniature daughter colonies inside the parent sphere.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Past Question: "Which of the following organisms consists of unicellular cells joined to form a filament?" Answer: SPIROGYRA!'
      ],
      question_ids: [44227]
    },
    {
      subtopic: 'Specialized Multicellular',
      section_order: 6,
      section_type: 'concept',
      section_title: 'Forms of Cell Existence: 3. Cells as Specialized Units in Tissues & Organs',
      content: `In multicellular plants and animals, cells undergo differentiation—specializing in structure to perform specific physiological duties (division of labor).\n\nMajor Animal Tissues:\n• Epithelial Tissue: Sheets covering surfaces (e.g. ciliated epithelium in respiratory tract sweeping mucus).\n• Connective Tissue: Binds and supports (bone, cartilage, blood, adipose).\n• Muscular Tissue: Contractile cells (skeletal, smooth, cardiac).\n• Nervous Tissue: Neurons conducting electrochemical impulses.\n\nMajor Plant Tissues:\n• Meristematic Tissue: Actively dividing apical and cambial cells.\n• Parenchyma: Living packing and photosynthetic ground tissue.\n• Collenchyma: Flexible mechanical support in young stems.\n• Sclerenchyma: Rigid support with dead, lignified secondary walls.\n• Xylem: Conducts water and mineral salts upwards.\n• Phloem: Translocates manufactured sucrose and amino acids.`,
      examples: [
        'Apical meristem: Actively dividing cells at root and shoot tips that drive primary growth in plants.',
        'Ciliated epithelium: Lines the human trachea, sweeping dust-laden mucus upwards away from the lungs.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question: "The constantly dividing cells found at the apex of roots and stems during growth is..." Answer: MERISTEMATIC TISSUE!'
      ],
      question_ids: [16886]
    },
    {
      subtopic: 'Summary',
      section_order: 7,
      section_type: 'summary',
      section_title: 'Organization of Life Masterclass Summary',
      content: `Key Revision Points for Organization of Life:\n\n1. Pioneers: Hooke (named cork cells), Leeuwenhoek (first saw living cells), Schleiden & Schwann (Cell Theory), Virchow (all cells from cells).\n2. Exceptions: Viruses are non-cellular; Sieve tubes and mature RBCs lack nuclei; Coenocytes lack individual cell boundaries.\n3. Hierarchy: Molecule → Organelle → Cell → Tissue → Organ → System → Organism.\n4. Blood is a tissue, NOT an organ! A leaf is an organ!\n5. Forms: Amoeba (single cell), Volvox (colony), Spirogyra (filament), Epithelium (tissue).`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Always verify whether an exam question is asking about a tissue (blood, xylem) or an organ (heart, leaf, kidney)!'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// TOPIC 2: Cell Structure and Functions of Cell Organelles
// ============================================================================
const topic2_Organelles = {
  subject: 'Biology',
  topic: 'Cell Structure and Functions of Cell Organelles',
  subtopic: 'Plant & Animal Cell Ultrastructure, Organelle Functions & Microscopy',
  summary_60s: 'Eukaryotic cells are partitioned into functional organelles. Nucleus directs metabolism/heredity; Mitochondria produce ATP via respiration; Chloroplasts execute photosynthesis; Ribosomes synthesize proteins; RER transports proteins; SER synthesizes lipids/steroids; Golgi packages and secretes; Lysosomes digest wastes; Centrioles organize spindle fibers.',
  key_formulas: 'Magnification (M) = Image Size (I) / Actual Size (A)\nDouble Membrane Organelles: Nucleus, Mitochondria, Chloroplasts\nNon-Membrane Organelles: Ribosomes, Centrioles',
  pro_tips_95: 'Plant cells have cellulose wall, chloroplasts, and large central vacuole; animal cells have centrioles, lysosomes, and flexible membranes. Ribosomes are in BOTH prokaryotes and eukaryotes!',
  syllabus_objectives: '1. Compare plant and animal cell ultrastructure. 2. Distinguish prokaryotes from eukaryotes. 3. Detail the structure and functions of all major organelles. 4. Calculate magnification from microscopic measurements.',
  sections: [
    {
      subtopic: 'Prokaryotes vs Eukaryotes',
      section_order: 1,
      section_type: 'intro',
      section_title: 'Prokaryotic vs. Eukaryotic Cell Organization',
      content: `All living cells fall into two broad evolutionary cytological categories based on internal compartmentalization:\n\n1. Prokaryotes (Bacteria, Cyanobacteria):\n• Lack a nuclear membrane; DNA lies free in the cytoplasm as a circular chromosome in the **Nucleoid** region.\n• Possess NO membrane-bound organelles (no mitochondria, chloroplasts, ER, Golgi, lysosomes).\n• Possess smaller **70S ribosomes**.\n• Cell wall made of **Peptidoglycan (murein)**, never cellulose.\n• Divide by simple binary fission without a mitotic spindle.\n\n2. Eukaryotes (Fungi, Plants, Animals, Protists):\n• Possess a true nucleus enclosed by a double-membrane envelope.\n• Contain abundant membrane-bound organelles.\n• Possess larger **80S ribosomes** in the cytoplasm.\n• Divide by mitosis and meiosis involving a mitotic spindle.`,
      examples: [
        'Escherichia coli: Prokaryotic bacterium with circular DNA, 70S ribosomes, and peptidoglycan wall.',
        'Human skin cell: Eukaryote with true nucleus, 80S ribosomes, mitochondria, and mitotic division.'
      ],
      formulas: [
        'Prokaryotic Ribosome: 70S (50S + 30S subunits)',
        'Eukaryotic Ribosome: 80S (60S + 40S subunits)'
      ],
      exam_tips: [
        'JAMB High-Frequency Question: "Which organelle is found in BOTH prokaryotes and eukaryotes?" Answer: RIBOSOME! (Prokaryotes have 70S ribosomes).'
      ],
      question_ids: []
    },
    {
      subtopic: 'Animal Cell Ultrastructure',
      section_order: 2,
      section_type: 'concept',
      section_title: 'Ultrastructure of a Generalized Animal Cell',
      content: `When viewed under an electron microscope, the animal cell shows extensive internal compartmentalization:\n\n${animalCellSvg}\n\nNotice the absence of a rigid outer cell wall, which gives the animal cell a flexible, dynamic shape. Centrioles are prominently located just outside the nuclear envelope to organize mitotic spindles during cell division.`,
      examples: [
        'Flexible white blood cells: Macrophages change shape to squeeze through capillary pores (diapedesis) and engulf invading bacteria.',
        'Abundant lysosomes: Animal cells have high concentrations of hydrolytic lysosomes to digest foreign pathogens.'
      ],
      formulas: [],
      exam_tips: [
        'Under the light microscope, animal cells are bounded only by a thin plasma membrane. NEVER draw or label a cell wall on an animal cell!'
      ],
      question_ids: [16836]
    },
    {
      subtopic: 'Plant Cell Ultrastructure',
      section_order: 3,
      section_type: 'concept',
      section_title: 'Ultrastructure of a Generalized Plant Cell',
      content: `Plant cells possess distinctive botanical structures reflecting their stationary, autotrophic nature:\n\n${plantCellSvg}\n\nDiagnostic Botanical Structures:\n1. Cellulose Cell Wall: Non-living, rigid outer box providing mechanical strength and preventing osmotic bursting.\n2. Large Central Vacuole: Occupies up to 90% of mature cell volume, filled with cell sap, and bounded by the **Tonoplast** membrane.\n3. Chloroplasts: Green plastids containing chlorophyll that execute photosynthesis.\n4. Peripheral Nucleus: The large central vacuole pushes the cytoplasm and nucleus to the edge of the cell.`,
      examples: [
        'Turgor pressure support: When central vacuoles fill with water, they press against the rigid cell wall, holding herbaceous plant stems upright.',
        'Peripheral nucleus: In leaf palisade cells, the nucleus is pressed against the side wall by the central vacuole.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Practical Drawing Rule: In plant cell diagrams, always show TWO parallel lines for the cell wall (representing middle lamella and primary wall) and draw the nucleus at the PERIPHERY, not in the center!'
      ],
      question_ids: [44222]
    },
    {
      subtopic: 'Plant vs Animal Comparison',
      section_order: 4,
      section_type: 'rule',
      section_title: 'Master Examination Comparison: Plant Cell vs. Animal Cell',
      content: `This comparison table is tested in almost every WAEC WASSCE Theory Paper and JAMB UTME examination:\n\n| Diagnostic Feature | Plant Cell | Animal Cell |\n|---|---|---|\n| **Cell Wall** | Present; made of rigid cellulose fibers | Strictly Absent; bounded only by plasma membrane |\n| **Shape** | Fixed, definite polygonal or rectangular shape | Flexible, irregular, dynamic shape |\n| **Chloroplasts / Plastids** | Present in photosynthetic cells | Strictly Absent |\n| **Vacuole** | Large, permanent, single central vacuole filled with cell sap | Small, temporary vacuoles or absent |\n| **Centrioles** | Absent in higher flowering plants | Present; organizes spindle fibers during mitosis |\n| **Food Storage** | Stored as insoluble starch granules | Stored as glycogen granules (animal starch) |\n| **Cytokinesis** | Divides by forming a **Cell Plate** from inside out | Divides by **Cleavage Furrow** pinching from outside in |`,
      examples: [
        'Starch vs Glycogen test: Iodine solution stains plant starch blue-black; iodine stains animal glycogen reddish-brown.',
        'Cytokinesis: Plant cells cannot pinch inward due to rigid walls, so Golgi vesicles build a cell plate along the equator.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question Trap: "Higher plant cells divide during cytokinesis through the formation of a..." Answer: CELL PLATE! Animal cells divide by CLEAVAGE FURROW!'
      ],
      question_ids: [71698]
    },
    {
      subtopic: 'The Nucleus',
      section_order: 5,
      section_type: 'concept',
      section_title: 'The Nucleus: Master Director of Cellular Metabolism & Heredity',
      content: `The nucleus is the control center of the eukaryotic cell, directing all metabolic activities and storing genetic information.\n\nAnatomy of the Nucleus:\n1. Nuclear Envelope: Double membrane perforated by nuclear pores that regulate transport of mRNA and proteins.\n2. Nucleoplasm: Fluid matrix containing enzymes and nucleotides.\n3. Chromatin / Chromosomes: Complexes of DNA and histone proteins. Chromatin condenses into distinct chromosomes during cell division.\n4. Nucleolus: Dense, non-membrane-bound subnuclear body that synthesizes ribosomal RNA (rRNA) and assembles ribosome subunits.\n\nPhysiological Role:\nTranscribes DNA into messenger RNA (mRNA), which leaves via nuclear pores to ribosomes in the cytoplasm to direct enzyme and protein synthesis!`,
      examples: [
        'Hämmerling\'s experiment: Grafting experiments on single-celled Acetabularia proved the nucleus in the rhizoid controls cell cap morphology.',
        'Transcription command: Nuclear DNA transcribes the code for insulin, directing ribosomes to build the insulin protein.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Exam Question: "Which organelle controls protein and enzyme syntheses in the cytoplasm of the cell?" Answer: NUCLEUS! (The organelle that physically builds the protein is the ribosome).'
      ],
      question_ids: [16813]
    },
    {
      subtopic: 'The Mitochondrion',
      section_order: 6,
      section_type: 'worked_example',
      section_title: 'The Mitochondrion: Powerhouse of the Cell & ATP Production',
      content: `Mitochondria are double-membrane-bound organelles responsible for aerobic cellular respiration, generating Adenosine Triphosphate (ATP).\n\nStructure:\n• Smooth outer membrane.\n• Highly folded inner membrane called **Cristae**, which vastly increases the surface area for Electron Transport Chain enzymes and ATP Synthase complexes.\n• Matrix: Semi-fluid interior containing Krebs cycle enzymes, circular mitochondrial DNA (mtDNA), and 70S ribosomes.\n\nWhy Active Cells Have More Mitochondria:\nTissues with high energy demands (cardiac muscle, skeletal muscle, liver, sperm cell midpiece) contain thousands of packed mitochondria. Inactive cells have few; mature red blood cells have zero!`,
      examples: [
        'Sperm midpiece: Packed with spirally coiled mitochondria to supply ATP for swimming to fertilize the ovum.',
        'Cardiac muscle cells: Mitochondria occupy 40% of the cell volume to power continuous heartbeat without fatigue.'
      ],
      formulas: [
        'Aerobic Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP'
      ],
      exam_tips: [
        'WAEC Question: "What is the function of cristae in mitochondria?" Answer: To increase the surface area for the attachment of respiratory enzymes and ATP synthase!'
      ],
      question_ids: [45712, 18031, 45066]
    },
    {
      subtopic: 'Chloroplasts & Plastids',
      section_order: 7,
      section_type: 'concept',
      section_title: 'Plastids & Chloroplasts: Photosynthetic Energy Converters',
      content: `Plastids are specialized double-membrane organelles found exclusively in plant cells and photosynthetic algae.\n\nThree Types of Plastids:\n1. Chloroplasts: Green plastids containing chlorophyll. Site of photosynthesis.\n2. Chromoplasts: Colored plastids with red, yellow, orange carotenoids. Found in flower petals and ripening fruits to attract pollinators.\n3. Leucoplasts: Colorless plastids in storage roots and tubers (e.g. Amyloplasts storing starch in potatoes).\n\nChloroplast Ultrastructure:\n• Stroma: Fluid interior where the **Dark Reaction (Calvin Cycle / CO₂ fixation)** takes place.\n• Thylakoids: Flattened disc-like sacs arranged in stacks called **Grana** (singular: Granum). Thylakoid membranes contain chlorophyll for the **Light-Dependent Reaction** (water photolysis & ATP production).`,
      examples: [
        'Ripening fruit: Tomato chloroplasts lose chlorophyll and transform into chromoplasts filled with red lycopene.',
        'Starch in cassava: Colorless amyloplasts in roots store manufactured sugars as insoluble starch.'
      ],
      formulas: [
        'Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ ↑'
      ],
      exam_tips: [
        'JAMB Question: "Where does the light reaction of photosynthesis occur?" Answer: In the GRANA (THYLAKOIDS)! "Where does the dark reaction occur?" Answer: In the STROMA!'
      ],
      question_ids: [71770]
    },
    {
      subtopic: 'ER & Ribosomes',
      section_order: 8,
      section_type: 'concept',
      section_title: 'Endoplasmic Reticulum & Ribosomes: Synthesis & Transport',
      content: `1. Endoplasmic Reticulum (ER):\nAn extensive network of branching membranous tubules and cisternae extending from the nuclear envelope throughout the cytoplasm.\n• Rough ER (RER): Studded with ribosomes. Synthesizes proteins destined for secretion outside the cell (enzymes, hormones).\n• Smooth ER (SER): Lacks ribosomes. Synthesizes lipids and steroid hormones (testosterone, estrogen); detoxifies drugs and alcohol in liver cells.\n\n2. Ribosomes:\nTiny non-membrane-bound particles made of ribosomal RNA (rRNA) and proteins.\n• Function: Protein synthesis (translating mRNA into polypeptide chains).\n• 70S in prokaryotes, mitochondria, and chloroplasts; 80S in eukaryotic cytosol.`,
      examples: [
        'Pancreas cells: Packed with RER to synthesize millions of digestive enzymes and insulin molecules.',
        'Liver cells: Packed with SER to detoxify drugs and circulating toxins.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question: "The cell organelle responsible for intracellular transport of substances is the..." Answer: ENDOPLASMIC RETICULUM! "The organelle for protein synthesis is the..." Answer: RIBOSOME!'
      ],
      question_ids: [71821, 17032]
    },
    {
      subtopic: 'Golgi & Lysosomes',
      section_order: 9,
      section_type: 'concept',
      section_title: 'Golgi Apparatus and Lysosomes: Packaging & Digestion',
      content: `1. Golgi Apparatus (Dictyosome in plants):\nA stack of flattened membranous sacs (cisternae).\n• Functions: Modifies proteins and lipids (glycosylation into glycoproteins), packages secretions into vesicles for exocytosis, produces lysosomes, and builds the cell plate during plant cytokinesis.\n\n2. Lysosomes ("Suicide Bags"):\nSpherical single-membrane vesicles containing acid hydrolytic enzymes (optimal pH 4.5–5.0).\n• Functions: Digests food vacuoles (heterophagy), breaks down worn-out organelles (autophagy), and destroys the entire cell when ruptured (autolysis, e.g. tadpole tail resorption during metamorphosis).`,
      examples: [
        'Goblet cells: In gut lining, Golgi apparatus continuously packages mucin glycoproteins for mucus secretion.',
        'Tadpole metamorphosis: Lysosomal autolysis dissolves the tadpole tail into nutrients to build frog legs.'
      ],
      formulas: [],
      exam_tips: [
        'Why are lysosomes called "suicide bags"? Because if they rupture, their hydrolytic enzymes completely digest the host cell itself (Autolysis)!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Vacuoles, Centrioles & Cilia',
      section_order: 10,
      section_type: 'concept',
      section_title: 'Vacuoles, Centrosomes, Cilia and Flagella',
      content: `1. Vacuoles:\n• Plant Vacuole: Enclosed by the **Tonoplast** membrane, filled with cell sap; maintains turgor pressure and stores metabolic wastes.\n• Contractile Vacuole: In freshwater protozoa (*Amoeba*, *Euglena*, *Paramecium*), actively collects excess water entering via osmosis and expels it (osmoregulation).\n\n2. Centrosomes & Centrioles:\n• Located outside animal nucleus; pair of centrioles with "9 + 0" triplet microtubule pattern. Organizes mitotic spindle fibers during cell division.\n\n3. Cilia and Flagella:\n• Hair-like projections for locomotion with "9 + 2" microtubule axoneme pattern and ATP-powered dynein arms. Anchored by centriole-derived basal granules.`,
      examples: [
        'Osmoregulation: Paramecium contractile vacuoles pump out incoming water to prevent bursting in hypotonic pond water.',
        'Sperm locomotion: The flagellar tail is powered by ATP to swim towards the ovum.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question: "The cell component that stores waste products is the..." Answer: VACUOLE! "Cell organelle from which spindle fibers originate..." Answer: CENTRIOLE!'
      ],
      question_ids: [16869, 71698, 16932]
    },
    {
      subtopic: 'Microscopy & Summary',
      section_order: 11,
      section_type: 'worked_example',
      section_title: 'Microscopy Calculations & Organelle Summary Matrix',
      content: `The Universal Magnification Formula:\n$$\\text{Magnification } (M) = \\frac{\\text{Image Size } (I)}{\\text{Actual Size } (A)}$$\n\n$$\\text{Total Magnification} = \\text{Power of Eyepiece} \\times \\text{Power of Objective}$$\n\nWorked Example:\nA cell has an actual length of $0.04\\text{ mm}$. In a student's drawing, it measures $24\\text{ mm}$. Calculate the magnification of the drawing:\n$$M = \\frac{\\text{Image Size}}{\\text{Actual Size}} = \\frac{24\\text{ mm}}{0.04\\text{ mm}} = 600\\times$$\n\nOrganelle Membrane Quick Hierarchy:\n• Double Membrane: Nucleus, Mitochondria, Chloroplasts.\n• Single Membrane: ER, Golgi, Lysosomes, Vacuoles, Peroxisomes.\n• No Membrane: Ribosomes, Centrioles.`,
      examples: [
        'Unit conversion rule: Always convert both Image size and Actual size to millimeters (or micrometers) before dividing!'
      ],
      formulas: [
        'M = I / A',
        'Total Mag = Eyepiece (10x) × Objective (40x) = 400x'
      ],
      exam_tips: [
        'Magnification has no units! Always write "x600" or "600x".'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// TOPIC 3: Cellular Environment and Membrane Transport
// ============================================================================
const topic3_Transport = {
  subject: 'Biology',
  topic: 'Cellular Environment and Membrane Transport',
  subtopic: 'Diffusion, Osmosis, Plasmolysis, Turgidity & Active Transport',
  summary_60s: 'Cell membrane regulates transport. Diffusion is passive solute movement along concentration gradient; Osmosis is water movement across selectively permeable membrane from dilute (high water potential) to concentrated solution. Plant cells in hypotonic media become turgid; in hypertonic media they plasmolyze. Animal cells burst (hemolysis) in hypotonic and shrink (crenate) in hypertonic media. Active transport requires ATP.',
  key_formulas: 'Water Potential (Ψ) = Solute Potential (Ψs) + Pressure Potential (Ψp)\nPlant in Hypotonic = Turgid | Hypertonic = Plasmolyzed\nAnimal in Hypotonic = Hemolysis | Hypertonic = Crenation',
  pro_tips_95: 'Cell wall is freely permeable; cell membrane is selectively permeable. Cyanide stops active transport because it inhibits ATP production. Turgor pressure supports non-woody plants!',
  syllabus_objectives: '1. Distinguish between diffusion, osmosis, and active transport. 2. Explain hypotonic, isotonic, and hypertonic media. 3. Describe plasmolysis, turgidity, hemolysis, and crenation. 4. Explain bulk transport (phagocytosis/pinocytosis/exocytosis).',
  sections: [
    {
      subtopic: 'Membrane Permeability',
      section_order: 1,
      section_type: 'intro',
      section_title: 'The Cell Surface Membrane as a Selectively Permeable Barrier',
      content: `The plasma membrane controls the internal chemical environment of the living cell, maintaining homeostasis.\n\nMembrane Permeability States:\n• Freely Permeable: Allows both solvent and all solute molecules to pass unrestricted (e.g. Cellulose plant cell wall).\n• Selectively (Differentially) Permeable: Allows water and small uncharged molecules to pass freely, while regulating or restricting large polar molecules and ions (e.g. Plasma membrane, Tonoplast, Visking dialysis tubing).\n• Impermeable: Blocks passage of all substances (e.g. Suberized cork cell walls).\n\nMechanisms of Transport:\n1. Passive Transport: Requires NO cellular energy (ATP); driven purely by concentration gradients (Simple Diffusion, Facilitated Diffusion, Osmosis).\n2. Active Transport: Requires metabolic energy (ATP); moves substances AGAINST their concentration gradient via protein pumps.\n3. Bulk Transport: Involves membrane vesicles (Endocytosis and Exocytosis).`,
      examples: [
        'Visking tubing experiment: Water and small glucose molecules diffuse through pore channels, but large starch molecules cannot pass.',
        'Capillary exchange: Oxygen diffuses out of red blood cells into tissues, while carbon dioxide diffuses in.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Theory Alert: The plant cell wall is FREELY permeable. The plasma membrane underneath is SELECTIVELY permeable!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Diffusion',
      section_order: 2,
      section_type: 'concept',
      section_title: 'Diffusion and Its Biological Importance',
      content: `Diffusion is the net movement of particles (molecules, atoms, or ions) from a region of higher concentration to a region of lower concentration down a concentration gradient until distributed evenly.\n\nFactors Affecting Rate of Diffusion (Fick's Law):\n• Concentration Gradient: The steeper the difference in concentration, the faster the diffusion.\n• Temperature: Higher temperature increases kinetic energy of molecules, speeding up diffusion.\n• Surface Area: Larger surface area increases diffusion rate (e.g. alveoli in lungs, villi in ileum).\n• Diffusion Distance: Thinner membranes allow faster diffusion.\n• Size of Molecules: Smaller molecules diffuse faster than large ones.\n\nVital Biological Roles of Diffusion:\n1. Respiratory gas exchange: Oxygen diffuses from alveoli into lung capillaries; carbon dioxide diffuses out.\n2. Plant gas exchange: $CO_2$ diffuses into leaves through stomata for photosynthesis; $O_2$ diffuses out.\n3. Nutrient absorption: Digested amino acids and glucose diffuse into blood capillaries in intestinal villi.\n4. Translocation of neurotransmitters across synaptic clefts in nervous coordination.`,
      examples: [
        'Potassium permanganate crystal in water: Deep purple color gradually diffuses evenly throughout the beaker without stirring.',
        'Alveolar gas exchange: Thin 1-cell thick squamous epithelium allows rapid O₂ and CO₂ diffusion.'
      ],
      formulas: [
        'Rate of Diffusion ∝ (Surface Area × Concentration Difference) / Membrane Thickness'
      ],
      exam_tips: [
        'Remember that simple diffusion is a PASSIVE physical process and continues even in dead or non-living systems!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Osmosis & Water Potential',
      section_order: 3,
      section_type: 'concept',
      section_title: 'Osmosis and Water Potential',
      content: `Osmosis is a special case of diffusion. It is defined as the net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution) across a selectively permeable membrane.\n\nWater Potential ($\\Psi$):\n• Water potential is the tendency of water molecules to move from one area to another.\n• Pure water has the highest possible water potential, defined as **Zero Pascals ($\\Psi = 0\\text{ Pa}$)**.\n• Adding solute molecules lowers water potential, making $\\Psi$ **negative**.\n• Water ALWAYS moves from a less negative (higher) $\\Psi$ to a more negative (lower) $\\Psi$!\n\n$$\\Psi = \\Psi_s + \\Psi_p$$\nWhere:\n• $\\Psi$ = Total Water Potential\n• $\\Psi_s$ = Solute Potential (always negative; decreases as solute concentration increases)\n• $\\Psi_p$ = Pressure Potential (hydrostatic pressure exerted by cell wall/turgor; positive in living plant cells)`,
      examples: [
        'Yam osmometer: A peeled yam cup filled with concentrated sucrose solution and placed in a dish of pure water shows a rising liquid level inside the yam cup as water enters by osmosis.',
        'Raisins in pure water: Dried raisins swell and expand due to endosmosis of water into their concentrated sugar cells.'
      ],
      formulas: [
        'Water Potential Equation: Ψ = Ψs + Ψp',
        'Pure Water: Ψ = 0 Pa (Maximum)'
      ],
      exam_tips: [
        'Never say "water moves from low water concentration to high". Say: "Water moves from high water potential (dilute) to low water potential (concentrated) across a selectively permeable membrane!"'
      ],
      question_ids: [44178, 44179]
    },
    {
      subtopic: 'Osmotic Environments',
      section_order: 4,
      section_type: 'worked_example',
      section_title: 'Plasmolysis, Turgidity, Hemolysis and Crenation',
      content: `The response of living cells depends on the tonicity of the external surrounding solution:\n\n${osmosisSvg}\n\n1. Behavior of Plant Cells:\n• In Hypotonic Solution (Pure water / dilute):\n  - Water enters cell via **Endosmosis**.\n  - The central vacuole expands, pushing the protoplast against the rigid cell wall.\n  - The cell becomes firm and swollen: **TURGID**.\n  - The rigid cellulose cell wall exerts **Wall Pressure**, preventing the plant cell from bursting!\n• In Isotonic Solution:\n  - Equal rates of endosmosis and exosmosis; no net movement. Cell is **FLACCID**.\n• In Hypertonic Solution (Concentrated salt/sugar):\n  - Water leaves cell via **Exosmosis**.\n  - The central vacuole shrinks, and the cytoplasm pulls away from the cell wall.\n  - The cell becomes **PLASMOLYZED** (the phenomenon is **Plasmolysis**).\n  - If placed back in pure water, it recovers (**Deplasmolysis**).\n\n2. Behavior of Animal Cells (Red Blood Cells):\n• In Hypotonic Solution: Water rushes in by endosmosis. Lacking a cell wall, the cell swells and bursts (**HEMOLYSIS / Lysis**).\n• In Hypertonic Solution: Water exits by exosmosis. The cell shrinks and develops a notched, crinkled margin (**CRENATION**).`,
      examples: [
        'Wilting in fertilizer burn: Adding too much fertilizer to dry soil makes soil water hypertonic. Root cells lose water by exosmosis, causing the plant to plasmolyze and wilt.',
        'Red blood cells in distilled water: Rapid hemolysis occurs within seconds, turning the opaque blood suspension clear red.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB High-Frequency Question: Why do plant cells not burst in pure water, while red blood cells burst? Answer: Plant cells possess a rigid CELLULOSE CELL WALL that exerts wall pressure to prevent bursting!'
      ],
      question_ids: [44182, 44193]
    },
    {
      subtopic: 'Active Transport',
      section_order: 5,
      section_type: 'concept',
      section_title: 'Active Transport & Bulk Transport (Endo/Exocytosis)',
      content: `1. Active Transport:\nThe movement of ions or molecules across a cellular membrane AGAINST their concentration gradient (from lower to higher concentration) using transmembrane carrier protein pumps and metabolic energy in the form of **ATP**.\n\nKey Characteristics of Active Transport:\n• Requires living cells with active cellular respiration.\n• Strictly dependent on ATP produced by mitochondria.\n• **Inhibited by respiratory poisons like Potassium Cyanide**, lack of oxygen, or cold temperatures (which inactivate enzymes).\n• Example: The $Na^+/K^+$ ATPase pump (pumps $3Na^+$ out and $2K^+$ in per ATP consumed); root hair cells accumulating mineral nitrates from soil.\n\n2. Bulk Transport (Cytosis):\n• Endocytosis: Ingestion of large particles by membrane invagination:\n  - **Phagocytosis ("Cell Eating")**: Engulfing large solid particles (e.g. *Amoeba* engulfing food; White blood cells engulfing bacteria).\n  - **Pinocytosis ("Cell Drinking")**: Ingestion of extracellular liquid droplets via micro-vesicles.\n• Exocytosis: Secretion of substances (digestive enzymes from pancreas, neurotransmitters from synaptic vesicles) by fusing vesicles with the plasma membrane.`,
      examples: [
        'Cyanide experiment: When cyanide is added to root tissue, nitrate ion uptake instantly drops to zero, proving nitrate absorption is by ACTIVE TRANSPORT.',
        'Phagocytosis by neutrophils: White blood cells extend pseudopodia around pathogenic bacteria, enclosing them in a phagosome for lysosomal digestion.'
      ],
      formulas: [],
      exam_tips: [
        'Chief Examiner Trap: If an experiment shows that mineral ion uptake stops when the cell is treated with respiratory inhibitors (cyanide or dinitrophenol), the mechanism MUST be ACTIVE TRANSPORT!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Transport Summary',
      section_order: 6,
      section_type: 'summary',
      section_title: 'Cellular Transport Masterclass Summary',
      content: `Transport Mechanisms Quick Cheat Sheet:\n\n1. Diffusion: Passive solute movement from high to low concentration (respiratory gases, stomatal CO₂).\n2. Osmosis: Passive water movement from high water potential (dilute) to low water potential (concentrated) across a selectively permeable membrane.\n3. Plant Cells: Hypotonic = Turgid (cell wall prevents bursting); Hypertonic = Plasmolyzed.\n4. Animal Cells (RBCs): Hypotonic = Hemolysis (bursts); Hypertonic = Crenation (shrinks).\n5. Active Transport: Moves AGAINST concentration gradient; requires ATP; inhibited by cyanide.\n6. Phagocytosis = Cell eating; Pinocytosis = Cell drinking; Exocytosis = Secretion.`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Master the difference between Turgidity (plant in dilute solution) and Hemolysis (animal cell bursting in dilute solution)!'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// TOPIC 4: Cellular Respiration and Energy Production
// ============================================================================
const topic4_Respiration = {
  subject: 'Biology',
  topic: 'Cellular Respiration and Energy Production',
  subtopic: 'Glycolysis, Krebs Cycle, Oxidative Phosphorylation & Fermentation',
  summary_60s: 'Cellular respiration oxidizes glucose to generate ATP. Aerobic respiration produces 36-38 ATP across 4 stages: Glycolysis (cytoplasm), Link Reaction (mitochondrial matrix), Krebs Cycle (matrix), and Electron Transport Chain (cristae). Anaerobic respiration produces only 2 ATP per glucose, yielding lactic acid in fatigued muscles and ethanol + CO2 in yeast fermentation.',
  key_formulas: 'Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP\nLactic Fermentation: C₆H₁₂O₆ → 2 Lactic Acid + 2 ATP\nAlcoholic Fermentation: C₆H₁₂O₆ → 2 Ethanol + 2 CO₂ + 2 ATP\nRespiratory Quotient (RQ) = Vol CO₂ produced / Vol O₂ consumed (Carbs = 1.0, Fats = 0.7, Proteins = 0.8)',
  pro_tips_95: 'Glycolysis occurs in the cytoplasm and requires NO oxygen. Krebs cycle occurs in mitochondrial matrix. The electron transport chain on cristae produces the most ATP (32-34 ATP) and uses oxygen as the terminal electron acceptor!',
  syllabus_objectives: '1. Differentiate between aerobic and anaerobic respiration. 2. Outline the stages of aerobic respiration and their cellular locations. 3. Describe lactic acid and alcoholic fermentation. 4. Calculate and interpret Respiratory Quotient (RQ).',
  sections: [
    {
      subtopic: 'Respiration Basics',
      section_order: 1,
      section_type: 'intro',
      section_title: 'The Concept of Cellular Respiration & ATP as Energy Currency',
      content: `Cellular respiration is the catabolic, exergonic biochemical process by which living cells break down organic food substrates (primarily glucose) to release chemical energy in the form of **Adenosine Triphosphate (ATP)**.\n\nWhy ATP is the "Universal Energy Currency":\n• ATP consists of Adenine (nitrogenous base), Ribose (5-carbon sugar), and three high-energy phosphate groups.\n• When the terminal phosphate bond is hydrolyzed by the enzyme ATPase, energy is instantly released to drive cellular work:\n  $$\\text{ATP} + H_2O \\xrightarrow{\\text{ATPase}} \\text{ADP} + P_i + 30.6\\text{ kJ/mol (Energy)}$$\n• The cell uses ATP for active transport, muscle contraction, protein synthesis, cell division, and nerve impulse transmission.\n\nTwo Types of Respiration:\n1. Aerobic Respiration: Requires molecular oxygen ($O_2$); completely oxidizes glucose into $CO_2$ and $H_2O$, yielding 36 to 38 ATP molecules per glucose.\n2. Anaerobic Respiration: Occurs in the absence of oxygen; partially breaks down glucose, yielding only 2 ATP molecules per glucose.`,
      examples: [
        'Muscle contraction: Myosin heads hydrolyze ATP to bind actin filaments, pulling them inward to shorten muscle fibers.',
        'Active ion pumping: 1 molecule of ATP powers the export of 3 Na⁺ and import of 2 K⁺ ions across nerve membranes.'
      ],
      formulas: [
        'ATP Hydrolysis: ATP + H₂O → ADP + Pi + 30.6 kJ/mol energy',
        'Overall Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP'
      ],
      exam_tips: [
        'WAEC Theory Trap: Respiration does NOT "create" energy! It transforms chemical potential energy stored in glucose bonds into usable ATP energy.'
      ],
      question_ids: [52489]
    },
    {
      subtopic: 'Stages of Aerobic Respiration',
      section_order: 2,
      section_type: 'concept',
      section_title: 'The Four Sequential Stages of Aerobic Respiration',
      content: `Aerobic respiration takes place across four distinct, coordinated stages in two cellular compartments:\n\n1. Stage 1: Glycolysis (Location: Cytoplasm / Cytosol)\n• Anaerobic splitting of 1 molecule of Glucose (6-carbon) into 2 molecules of Pyruvate (3-carbon).\n• Net Yield: **2 ATP** (by substrate-level phosphorylation) and **2 NADH**.\n• Requires NO oxygen and occurs in both aerobic and anaerobic pathways!\n\n2. Stage 2: The Link Reaction (Location: Mitochondrial Matrix)\n• Each pyruvate enters the mitochondrion and undergoes oxidative decarboxylation.\n• Pyruvate loses a carbon as $CO_2$ and binds Coenzyme A to form **Acetyl-CoA** (2-carbon).\n• Yield per glucose: **2 Acetyl-CoA + 2 CO₂ + 2 NADH**.\n\n3. Stage 3: The Krebs Cycle / Citric Acid Cycle (Location: Mitochondrial Matrix)\n• Acetyl-CoA (2C) combines with Oxaloacetate (4C) to form Citrate (6C).\n• Through cyclical enzyme reactions, 2 $CO_2$ molecules are released, oxaloacetate is regenerated, and high-energy electron carriers are formed.\n• Yield per glucose: **2 ATP + 4 CO₂ + 6 NADH + 2 FADH₂**.\n\n4. Stage 4: Oxidative Phosphorylation & Electron Transport Chain (Location: Inner Mitochondrial Membrane / Cristae)\n• Electrons from NADH and $FADH_2$ are passed along a chain of electron carriers (cytochromes).\n• Energy released pumps protons ($H^+$) into the intermembrane space, creating a chemiosmotic gradient.\n• Protons rush back through **ATP Synthase**, driving the phosphorylation of ADP into ATP!\n• **Oxygen acts as the terminal electron acceptor**, combining with electrons and protons to form water ($H_2O$)!\n• Yield: **32 to 34 ATP**!`,
      examples: [
        'Cyanide poisoning mechanism: Cyanide binds to Cytochrome c oxidase in the electron transport chain, blocking oxygen reduction. ATP production halts, causing death within minutes.',
        'High-altitude adaptation: At low oxygen levels, mitochondrial electron transport slows down, triggering the body to produce more red blood cells (erythropoietin).'
      ],
      formulas: [
        'Total ATP Balance: 2 (Glycolysis) + 2 (Krebs) + 34 (ETC) = 38 ATP'
      ],
      exam_tips: [
        'JAMB High-Frequency Question: "Where does the Krebs cycle take place?" Answer: In the MITOCHONDRIAL MATRIX! "Where does the Electron Transport Chain take place?" Answer: In the CRISTAE (INNER MEMBRANE)!'
      ],
      question_ids: [45066]
    },
    {
      subtopic: 'Anaerobic Respiration',
      section_order: 3,
      section_type: 'concept',
      section_title: 'Anaerobic Respiration: Lactic Acid & Alcoholic Fermentation',
      content: `When oxygen is deficient or absent, pyruvate cannot enter the mitochondrion. Instead, it undergoes anaerobic fermentation in the cytoplasm to regenerate $NAD^+$ so glycolysis can continue generating 2 ATP.\n\n1. Lactic Acid Fermentation (in Fatigued Animal Skeletal Muscle):\n• During strenuous sprint exercise, the circulatory system cannot deliver oxygen fast enough to muscles.\n• Pyruvate is reduced directly into **Lactic Acid** by enzyme lactate dehydrogenase:\n  $$\\text{Glucose} \\rightarrow 2\\text{ Lactic Acid} + 2\\text{ ATP}$$\n• Accumulation of lactic acid lowers muscle pH, causing muscle fatigue, cramps, and soreness.\n• **Oxygen Debt**: The extra volume of oxygen consumed during rapid breathing after exercise to transport lactic acid to the liver, where it is oxidized back to pyruvate or converted into glycogen.\n\n2. Alcoholic Fermentation (in Yeast & Plants):\n• In yeast (*Saccharomyces cerevisiae*) and germinating seeds under waterlogged soil:\n  $$\\text{Glucose} \\rightarrow 2\\text{ Ethanol} + 2CO_2 + 2\\text{ ATP}$$\n• Industrial Applications:\n  - Brewing industry: Yeast ferments malt sugars into ethanol (beer/wine).\n  - Baking industry: Yeast produces $CO_2$ gas bubbles that get trapped in dough, causing bread to rise!`,
      examples: [
        'Athlete oxygen debt: A 100m sprinter continues panting heavily for minutes after crossing the finish line to pay off the oxygen debt incurred by lactic acid fermentation.',
        'Bread baking: Trapped CO₂ expands under oven heat, creating the spongy, porous texture of baked bread while the alcohol evaporates.'
      ],
      formulas: [
        'Lactic Fermentation: C₆H₁₂O₆ → 2 CH₃CH(OH)COOH + 2 ATP',
        'Alcoholic Fermentation: C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + 2 ATP'
      ],
      exam_tips: [
        'JAMB Question: "The gas produced during anaerobic respiration in yeast that causes bread dough to rise is..." Answer: CARBON(IV) OXIDE (CO₂)!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Respiratory Quotient',
      section_order: 4,
      section_type: 'worked_example',
      section_title: 'The Respiratory Quotient (RQ) & Substrate Identification',
      content: `The Respiratory Quotient (RQ) is the volumetric ratio of carbon dioxide produced to oxygen consumed in cellular respiration during a given period:\n\n$$\\text{RQ} = \\frac{\\text{Volume of } CO_2 \\text{ evolved}}{\\text{Volume of } O_2 \\text{ absorbed}}$$\n\nRQ Values for Different Respiratory Substrates:\n1. Carbohydrates (e.g. Glucose):\n$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$$\n$$\\text{RQ} = \\frac{6\\text{ CO}_2}{6\\text{ O}_2} = 1.0$$\n\n2. Fats / Lipids (e.g. Tripalmitin):\n$$2C_{51}H_{98}O_6 + 145O_2 \\rightarrow 102CO_2 + 98H_2O$$\n$$\\text{RQ} = \\frac{102}{145} \\approx 0.70$$\n*(Fats contain very little oxygen in their molecules, requiring far more oxygen for oxidation, hence RQ < 1.0)*\n\n3. Proteins (e.g. Albumin):\n$$\\text{RQ} \\approx 0.80 - 0.85$$\n\n4. Organic Acids (e.g. Malic acid, Citric acid):\n$$\\text{RQ} > 1.0\\text{ (e.g. 1.33)}$$ *(Organic acids are already oxygen-rich, requiring less oxygen).*`,
      examples: [
        'Germinating castor oil seeds: Storing fats, their measured RQ is ~0.70. When the seedling leaves emerge and switch to carbohydrate metabolism, RQ rises to 1.0.',
        'Anaerobic respiration RQ: In yeast fermenting without oxygen ($O_2 = 0$), $\\text{RQ} = \\frac{2CO_2}{0} = \\infty$ (Infinity)!'
      ],
      formulas: [
        'RQ = Vol CO₂ produced / Vol O₂ consumed',
        'Carbohydrate RQ = 1.0 | Fat RQ = 0.7 | Protein RQ = 0.8'
      ],
      exam_tips: [
        'Chief Examiner Trap: If an unknown germinating seed exhibits an RQ of 0.70, what food reserve is being respired? Answer: FATS (LIPIDS) / OILS!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Respiration Summary',
      section_order: 5,
      section_type: 'summary',
      section_title: 'Cellular Respiration Masterclass Summary',
      content: `Respiration Quick Matrix:\n\n1. Aerobic: Requires O₂; yields 36-38 ATP, CO₂, H₂O.\n2. Glycolysis: In cytoplasm; splits glucose into 2 pyruvate; yields 2 ATP, 2 NADH; NO oxygen needed.\n3. Link Reaction: In mitochondrial matrix; pyruvate → Acetyl-CoA + CO₂.\n4. Krebs Cycle: In mitochondrial matrix; yields 2 ATP, 4 CO₂, 6 NADH, 2 FADH₂.\n5. Electron Transport Chain: On cristae; produces 32-34 ATP; O₂ is terminal electron acceptor forming H₂O.\n6. Lactic Fermentation: In fatigued muscles; causes oxygen debt; 2 ATP.\n7. Alcoholic Fermentation: In yeast; yields Ethanol + CO₂ + 2 ATP.\n8. RQ: Carbs = 1.0 | Fats = 0.7 | Proteins = 0.8.`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Memorize the 4 stages and their cellular locations: Glycolysis = Cytoplasm, Krebs = Matrix, ETC = Cristae!'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// TOPIC 5: Cell Division (Mitosis and Meiosis)
// ============================================================================
const topic5_Division = {
  subject: 'Biology',
  topic: 'Cell Division: Mitosis and Meiosis',
  subtopic: 'Cell Cycle, Mitosis Stages, Meiosis Crossing Over & Significance',
  summary_60s: 'Mitosis is equational division producing 2 identical diploid (2n) daughter cells for growth, tissue repair, and asexual reproduction. Stages: Prophase, Metaphase, Anaphase, Telophase (PMAT). Meiosis is reduction division producing 4 genetically diverse haploid (n) gametes for sexual reproduction. Crossing over at chiasmata in Prophase I drives genetic variation.',
  key_formulas: 'Mitosis: 2n → 2n (2 identical diploid daughter cells)\nMeiosis: 2n → n (4 non-identical haploid gametes)\nStages: Prophase → Metaphase → Anaphase → Telophase (PMAT)',
  pro_tips_95: 'Centromeres divide in Anaphase of Mitosis and Anaphase II of Meiosis, NOT in Anaphase I! Homologous pairs separate in Anaphase I. Crossing over occurs at Chiasmata in Prophase I.',
  syllabus_objectives: '1. Describe the stages of the eukaryotic cell cycle. 2. Detail the stages of mitosis and its biological significance. 3. Detail the stages of meiosis, synapsis, and crossing over. 4. Contrast mitosis and meiosis in tabular format.',
  sections: [
    {
      subtopic: 'The Cell Cycle',
      section_order: 1,
      section_type: 'intro',
      section_title: 'The Eukaryotic Cell Cycle & Chromosome Structure',
      content: `The cell cycle is the ordered sequence of biochemical events through which a eukaryotic cell duplicates its genome and divides into daughter cells.\n\nTwo Main Phases of the Cell Cycle:\n1. Interphase (90% of cycle duration; resting/growth phase):\n• $G_1$ Phase (Gap 1): Intensive cellular growth, active transcription, protein synthesis, and organelle replication.\n• $S$ Phase (Synthesis): **DNA Replication** occurs! Each chromosome duplicates to form two identical sister chromatids joined at a constricted centromere. Centrosomes duplicate.\n• $G_2$ Phase (Gap 2): Synthesis of tubulin proteins for the mitotic spindle; final metabolic checks before division.\n\n2. M-Phase (Cell Division Phase):\n• Karyokinesis (Nuclear division via Mitosis or Meiosis).\n• Cytokinesis (Cytoplasmic division).\n\nChromosome Anatomy:\n• Chromatin: Relaxed DNA-histone fibers in non-dividing cells.\n• Chromosome: Tightly condensed chromatin rod visible during M-phase.\n• Centromere: Central primary constriction where sister chromatids are joined, possessing protein discs called **Kinetochores** where spindle fibers attach!`,
      examples: [
        'Skin cell turnover: Basal epidermal skin cells complete the cell cycle every 24 hours to replace shedding surface cells.',
        'Nerve cells in G0 phase: Mature human neurons permanently exit the cell cycle into G0 phase and cannot undergo cell division.'
      ],
      formulas: [
        'Cell Cycle = G₁ → S (DNA Replication) → G₂ → M-Phase (Mitosis + Cytokinesis)'
      ],
      exam_tips: [
        'JAMB Question Alert: "At which stage of the cell cycle does DNA replication occur?" Answer: INTERPHASE (specifically the S-PHASE)!'
      ],
      question_ids: [44275]
    },
    {
      subtopic: 'Mitosis Stages',
      section_order: 2,
      section_type: 'concept',
      section_title: 'The Four Stages of Mitosis: Prophase, Metaphase, Anaphase, Telophase',
      content: `Mitosis is equational nuclear division where one diploid parent cell ($2n$) divides to produce two genetically identical diploid daughter cells ($2n$).\n\n${mitosisSvg}\n\nThe Four Continuous Stages (Mnemonic: PMAT):\n\n1. Prophase:\n• Chromatin tightly coils into visible chromosomes (each with 2 sister chromatids).\n• Nucleolus disappears; nuclear envelope breaks down into vesicles.\n• Centrioles migrate to opposite poles, polymerizing tubulin into astral rays and the **Mitotic Spindle**.\n\n2. Metaphase:\n• Chromosomes migrate and align in a single file along the **Equatorial Plane (Metaphase Plate)**.\n• Spindle fibers attach securely to kinetochores of centromeres.\n\n3. Anaphase:\n• **Centromeres split!** Spindle fibers shorten, pulling sister chromatids apart toward opposite poles as individual daughter chromosomes (V-shaped or L-shaped).\n\n4. Telophase:\n• Daughter chromosomes reach the poles and uncoil back into diffuse chromatin.\n• Nuclear envelopes reassemble around each chromosome cluster; nucleoli reappear.\n• Spindle fibers disintegrate.`,
      examples: [
        'Root tip squash practical: Allium (onion) root tip squash viewed under high power reveals cells frozen in Prophase, Metaphase, Anaphase, and Telophase.',
        'Anaphase chromosome migration: Motor proteins at the kinetochores chew through microtubule tracks to pull chromatids toward the spindle poles.'
      ],
      formulas: [],
      exam_tips: [
        'JAMB Question: "At which stage of mitosis do chromosomes align along the equator of the spindle?" Answer: METAPHASE! "At which stage do centromeres split?" Answer: ANAPHASE!'
      ],
      question_ids: [71698]
    },
    {
      subtopic: 'Cytokinesis & Significance',
      section_order: 3,
      section_type: 'rule',
      section_title: 'Cytokinesis & The Biological Significance of Mitosis',
      content: `1. Cytokinesis (Division of the Cytoplasm):\n• In Animal Cells: A contractile ring of actin microfilaments constricts the plasma membrane, forming a **Cleavage Furrow** that pinches the cell into two from the outside inward.\n• In Plant Cells: Rigid walls prevent furrowing. Golgi vesicles align along the equatorial plane and fuse to construct a **Cell Plate (Phragmoplast)** from the inside outward, developing into the middle lamella and new primary cell walls!\n\n2. Biological Significance of Mitosis:\n• Genetic Stability: Produces daughter cells with the exact same chromosome number ($2n \\rightarrow 2n$) and identical genetic code as the parent cell.\n• Multicellular Growth: Enables a single fertilized zygote to develop into a complex adult organism containing trillions of cells.\n• Tissue Repair and Regeneration: Replaces worn-out, dead, or damaged cells (e.g. healing of skin cuts, continuous replacement of 2 million red blood cells per second in bone marrow).\n• Asexual Reproduction: Powers budding in *Hydra* and yeast, binary fission in *Amoeba*, and vegetative propagation in cassava and yam!`,
      examples: [
        'Grafting and stem cutting: Cassava stems sprout roots and shoots exclusively through mitotic division, ensuring the crop clone has identical high-yield traits.',
        'Wound healing: Fibroblasts and epidermal cells undergo rapid mitosis to close a bleeding skin wound.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Theory Question: State 3 biological significances of mitosis. Answer: 1. Growth of multicellular organisms. 2. Repair of worn-out tissues. 3. Basis of asexual reproduction / maintaining genetic continuity.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Meiosis Stages & Crossing Over',
      section_order: 4,
      section_type: 'worked_example',
      section_title: 'Meiosis: Reduction Division & Genetic Crossing Over',
      content: `Meiosis is a specialized form of cell division that occurs exclusively in reproductive germ cells (in ovaries, testes, anthers, and ovules). It involves two successive nuclear divisions ($Meiosis\\text{ }I$ and $Meiosis\\text{ }II$) but only ONE round of DNA replication, reducing the chromosome number by half from diploid ($2n$) to haploid ($n$).\n\n1. Meiosis I (The Reduction Division):\n• Prophase I (The longest and most crucial stage):\n  - **Synapsis**: Homologous maternal and paternal chromosomes pair up gene-for-gene to form a **Bivalent (Tetrad)**.\n  - **Crossing Over**: Non-sister chromatids intertwine and break at contact points called **Chiasmata** (singular: Chiasma), exchanging reciprocal segments of genetic material! This reshuffles maternal and paternal alleles, producing novel recombinant gene combinations!\n• Metaphase I: Homologous pairs align in double rows along the equator.\n• Anaphase I: **Homologous chromosome pairs separate!** (Centromeres do NOT divide!). One chromosome from each pair moves to opposite poles. The chromosome number is officially halved to haploid ($n$)!\n• Telophase I: Two haploid ($n$) nuclei form.\n\n2. Meiosis II (Equational Division of Haploid Cells):\n• Resembles normal mitosis. Centromeres split in Anaphase II, separating sister chromatids.\n• Yields **4 genetically non-identical haploid ($n$) gametes / spores**!`,
      examples: [
        'Spermatogenesis in humans: One diploid primary spermatocyte (46 chromosomes) undergoes meiosis to produce 4 mature haploid spermatozoa (23 chromosomes each).',
        'Genetic diversity among siblings: Crossing over in Prophase I and random independent assortment in Metaphase I ensure that no two children from the same parents are genetically identical (except identical twins)!'
      ],
      formulas: [
        'Meiosis Formula: 1 Diploid Parent (2n) → 4 Non-identical Haploid Gametes (n)',
        'Human Gamete: 46 chromosomes (2n) → 23 chromosomes (n)'
      ],
      exam_tips: [
        'JAMB High-Frequency Question: "In which stage of meiosis does crossing over take place?" Answer: PROPHASE I! "At what points do non-sister chromatids cross over?" Answer: CHIASMATA!'
      ],
      question_ids: [16918]
    },
    {
      subtopic: 'Mitosis vs Meiosis Comparison',
      section_order: 5,
      section_type: 'rule',
      section_title: 'Master Examination Comparison: Mitosis vs. Meiosis',
      content: `This tabular comparison is one of the most heavily tested topics in WAEC WASSCE Theory and JAMB Biology:\n\n| Diagnostic Feature | Mitosis | Meiosis |\n|---|---|---|\n| **Site of Occurrence** | Somatic (body) vegetative cells | Germline reproductive cells (gonads: testes, ovaries, anthers) |\n| **Number of Divisions** | One single nuclear division | Two successive nuclear divisions (Meiosis I & II) |\n| **Number of Daughter Cells** | **2 daughter cells** | **4 daughter cells** |\n| **Ploidy of Daughter Cells** | **Diploid ($2n$)**; identical to parent | **Haploid ($n$)**; half the parent chromosome count |\n| **Genetic Composition** | Genetically identical clones (no variation) | Genetically diverse / unique (recombinant) |\n| **Synapsis & Chiasmata** | Strictly Absent | Present during Prophase I (Crossing over occurs) |\n| **Centromere Division** | Occurs during Anaphase | Does NOT divide in Anaphase I; divides in Anaphase II |\n| **Biological Role** | Growth, tissue repair, asexual reproduction | Gamete formation (sperm, ova, pollen) for sexual reproduction |`,
      examples: [
        'Skin regeneration vs Gamete production: Skin heals by mitosis producing identical diploid cells; ovaries produce haploid ova by meiosis to preserve 46 chromosomes upon fertilization.'
      ],
      formulas: [],
      exam_tips: [
        'WAEC Trap Alert: In which anaphase do centromeres divide during meiosis? Answer: ANAPHASE II, NOT Anaphase I! In Anaphase I, whole homologous chromosomes separate.'
      ],
      question_ids: [44275]
    },
    {
      subtopic: 'Division Summary',
      section_order: 6,
      section_type: 'summary',
      section_title: 'Cell Division Masterclass Summary',
      content: `Cell Division Rapid Revision Points:\n\n1. Cell Cycle: G₁ (growth) → S (DNA replication) → G₂ (prep) → M-Phase.\n2. Mitosis: 2n → 2n; 2 identical cells; for growth and repair; PMAT (Prophase, Metaphase, Anaphase, Telophase).\n3. Metaphase: Equator alignment; Anaphase: Centromeres split.\n4. Cytokinesis: Cleavage furrow (animals) vs Cell plate (plants).\n5. Meiosis: 2n → n; 4 haploid gametes; for sexual reproduction.\n6. Prophase I: Synapsis of homologous chromosomes and Crossing Over at Chiasmata produce genetic variation!\n7. Anaphase I: Homologous pairs separate (reduction); Anaphase II: Centromeres split.`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Always remember: Mitosis maintains chromosome number; Meiosis cuts chromosome number in half!'
      ],
      question_ids: []
    }
  ]
};

// ─── RUN FUNCTION ─────────────────────────────────────────────────────────────
async function main() {
  console.log('================================================================');
  console.log('POPULATING 5 DISTINCT, COMPREHENSIVE BIOLOGY CELL TOPICS');
  console.log('Approved JAMB Textbooks: S.T. Ramalingam (Modern Biology) & Idodo Umeh');
  console.log('================================================================\n');

  const topics = [
    topic1_Organization,
    topic2_Organelles,
    topic3_Transport,
    topic4_Respiration,
    topic5_Division
  ];

  for (let i = 0; i < topics.length; i++) {
    const t = topics[i];
    console.log(`\n--- Topic ${i + 1}: ${t.topic} ---`);
    console.log(`Subtopic: ${t.subtopic}`);
    console.log(`Total Structured Slides: ${t.sections.length}`);

    // 1. Save into lesson_notes table so it displays in student dashboard
    const lessonNotePayload = {
      subject: t.subject,
      exam_type: 'JAMB • WAEC • NECO Standard',
      class_level: 'SS1-SS3 Comprehensive',
      topic: t.topic,
      subtopic: t.subtopic,
      summary_60s: t.summary_60s,
      key_formulas: t.key_formulas,
      pro_tips_95: t.pro_tips_95,
      syllabus_objectives: t.syllabus_objectives,
      content: t.sections.map(s => `## ${s.section_title}\n\n${s.content}`).join('\n\n---\n\n')
    };

    console.log('  -> Saving to lesson_notes table...');
    const resNote = await postJson('/studyplug-api/import_lesson_notes.php?api_key=studyplug_secret_2026', lessonNotePayload);
    console.log('     lesson_notes status:', resNote.message || resNote);

    // 2. Save into structured_lessons table for the interactive PowerPoint presenter
    console.log('  -> Saving to structured_lessons table...');
    const resStructured = await postJson('/studyplug-api/save_structured_lesson.php?key=StudyPlug2026', {
      subject: t.subject,
      topic: t.topic,
      sections: t.sections
    });
    console.log('     structured_lessons status:', resStructured.message || resStructured);
  }

  console.log('\n================================================================');
  console.log('ALL 5 BIOLOGY CELL MASTERCLASS TOPICS SUCCESSFULLY POPULATED!');
  console.log('================================================================');
}

main().catch(console.error);
