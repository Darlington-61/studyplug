import React from 'react';

export interface ScientificDiagram {
  id: string;
  title: string;
  caption: string;
  category: string;
  subjects: string[];
  topicKeywords: string[];
  labels: { name: string; desc: string; color?: string }[];
  render: () => React.ReactNode;
}

export const SCIENTIFIC_DIAGRAMS: ScientificDiagram[] = [
  // ══════════════════════════════════════════════════════════
  // 1. ENGLISH LANGUAGE
  // ══════════════════════════════════════════════════════════
  {
    id: 'english-concord-syntax',
    title: "Concord & Subject-Verb Agreement Flowchart",
    caption: "Grammar decision tree for proximity rule, correlative conjunctions (neither/nor, either/or), 'many a', parenthetical phrases, and plural-form singular nouns.",
    category: 'English Language • Syntax Matrix',
    subjects: ['english', 'english language', 'literature'],
    topicKeywords: ['concord', 'grammatical agreement', 'subject-verb agreement', 'concord and grammatical agreement', 'verb agreement', 'agreement in grammar'],
    labels: [
      { name: '1. Basic Concord Rule', desc: 'Singular subject demands singular verb (ends in -s/-es). Plural subject demands plural verb (base form).', color: '#34D399' },
      { name: '2. Proximity Rule', desc: 'In Either...or / Neither...nor, the verb strictly agrees with the closest subject noun.', color: '#00BCD4' },
      { name: '3. "Many a" Trap', desc: '"Many a" + singular noun always takes a singular verb (e.g. "Many a student has failed").', color: '#FFCC00' },
      { name: '4. Parenthetical Interrupters', desc: 'Phrases like "as well as", "together with", "in addition to" do not alter the verb; verb agrees only with the 1st subject.', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CONCORD & SUBJECT-VERB AGREEMENT DECISION TREE</text>

        <rect x="180" y="38" width="160" height="30" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
        <text x="260" y="57" fill="#FFEA79" fontSize="11" fontWeight="800" textAnchor="middle">IDENTIFY THE SUBJECT</text>

        <line x1="210" y1="68" x2="90" y2="95" stroke="#94A3B8" strokeWidth="2" />
        <line x1="260" y1="68" x2="260" y2="95" stroke="#94A3B8" strokeWidth="2" />
        <line x1="310" y1="68" x2="430" y2="95" stroke="#94A3B8" strokeWidth="2" />

        {/* Branch 1 */}
        <g transform="translate(15, 95)">
          <rect x="0" y="0" width="150" height="140" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="75" y="20" fill="#34D399" fontSize="10" fontWeight="900" textAnchor="middle">BASIC CONCORD</text>
          <line x1="10" y1="28" x2="140" y2="28" stroke="#001020" strokeWidth="1" />
          <rect x="8" y="34" width="134" height="44" rx="5" fill="#001028" />
          <text x="14" y="48" fill="#38BDF8" fontSize="9" fontWeight="bold">Singular Subject:</text>
          <text x="14" y="66" fill="#E2E8F0" fontSize="9">The boy <tspan fill="#34D399" fontWeight="bold">RUNS</tspan> (-s)</text>
          <rect x="8" y="84" width="134" height="44" rx="5" fill="#001028" />
          <text x="14" y="98" fill="#F43F5E" fontSize="9" fontWeight="bold">Plural Subject:</text>
          <text x="14" y="116" fill="#E2E8F0" fontSize="9">The boys <tspan fill="#38BDF8" fontWeight="bold">RUN</tspan> (base)</text>
        </g>

        {/* Branch 2 */}
        <g transform="translate(185, 95)">
          <rect x="0" y="0" width="150" height="140" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="75" y="20" fill="#00BCD4" fontSize="10" fontWeight="900" textAnchor="middle">PROXIMITY RULE</text>
          <line x1="10" y1="28" x2="140" y2="28" stroke="#001020" strokeWidth="1" />
          <text x="75" y="40" fill="#FFEA79" fontSize="8" fontWeight="bold" textAnchor="middle">Either..or / Neither..nor</text>
          <rect x="8" y="46" width="134" height="38" rx="5" fill="#001028" />
          <text x="12" y="58" fill="#E2E8F0" fontSize="8">Neither John nor the</text>
          <text x="12" y="72" fill="#38BDF8" fontSize="8" fontWeight="bold">students <tspan fill="#34D399">ARE</tspan> here</text>
          <rect x="8" y="88" width="134" height="38" rx="5" fill="#001028" />
          <text x="12" y="100" fill="#E2E8F0" fontSize="8">Neither students nor</text>
          <text x="12" y="114" fill="#F43F5E" fontSize="8" fontWeight="bold">the teacher <tspan fill="#34D399">IS</tspan> here</text>
        </g>

        {/* Branch 3 */}
        <g transform="translate(355, 95)">
          <rect x="0" y="0" width="150" height="140" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="75" y="20" fill="#FFCC00" fontSize="10" fontWeight="900" textAnchor="middle">JAMB EXAM TRAPS</text>
          <line x1="10" y1="28" x2="140" y2="28" stroke="#001020" strokeWidth="1" />
          <rect x="8" y="34" width="134" height="44" rx="5" fill="#001028" />
          <text x="12" y="48" fill="#FFCC00" fontSize="8" fontWeight="bold">"Many a" + Sg Noun:</text>
          <text x="12" y="64" fill="#E2E8F0" fontSize="8">Many a boy <tspan fill="#34D399" fontWeight="bold">WAS</tspan> (Sg!)</text>
          <rect x="8" y="84" width="134" height="46" rx="5" fill="#001028" />
          <text x="12" y="96" fill="#F43F5E" fontSize="8" fontWeight="bold">Parenthetical Phrases:</text>
          <text x="12" y="110" fill="#E2E8F0" fontSize="8">"The king, as well as</text>
          <text x="12" y="122" fill="#E2E8F0" fontSize="8">his chiefs, <tspan fill="#34D399" fontWeight="bold">IS</tspan> coming"</text>
        </g>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#C4823F" strokeWidth="1" />
        <text x="260" y="262" fill="#FFEA79" fontSize="10" fontWeight="800" textAnchor="middle">
          RULE SUMMARY: Match Singular to Singular, Plural to Plural. In Proximity, the verb bows to the closest noun!
        </text>
      </svg>
    )
  },

  {
    id: 'english-oral-phonetics',
    title: "JAMB Oral English: Vowel Chart & Stress Matrix",
    caption: "Anatomy of English vowels: Monophthongs (Pure Vowels: Front, Central, Back), Diphthongs, and Syllable Stress rules.",
    category: 'English Language • Oral English',
    subjects: ['english', 'english language', 'oral english'],
    topicKeywords: ['oral english', 'phonetics', 'vowel', 'vowels', 'monophthong', 'diphthong', 'stress', 'syllable stress', 'rhyme', 'consonants'],
    labels: [
      { name: 'Front Vowels', desc: '/iː/ (seat), /ɪ/ (sit), /e/ (set), /æ/ (sat) — produced at the front of the mouth', color: '#00BCD4' },
      { name: 'Central Vowels', desc: '/ə/ (schwa: about), /ɜː/ (bird), /ʌ/ (cup) — neutral tongue position', color: '#34D399' },
      { name: 'Back Vowels', desc: '/uː/ (boot), /ʊ/ (foot), /ɔː/ (port), /ɒ/ (pot), /ɑː/ (part) — rounded lips', color: '#FFCC00' },
      { name: 'Syllable Stress', desc: 'Nouns stress 1st syllable (PRE-sent); Verbs stress 2nd syllable (pre-SENT)', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">ORAL ENGLISH VOWEL QUADRILATERAL & STRESS RULES</text>

        <g transform="translate(30, 45)">
          <polygon points="20,20 220,20 180,170 50,170" fill="#001830" stroke="#00BCD4" strokeWidth="2" />
          <text x="35" y="12" fill="#00BCD4" fontSize="9" fontWeight="bold">FRONT</text>
          <text x="110" y="12" fill="#34D399" fontSize="9" fontWeight="bold">CENTRAL</text>
          <text x="190" y="12" fill="#FFCC00" fontSize="9" fontWeight="bold">BACK</text>

          <text x="0" y="35" fill="#94A3B8" fontSize="8">HIGH</text>
          <text x="5" y="100" fill="#94A3B8" fontSize="8">MID</text>
          <text x="10" y="165" fill="#94A3B8" fontSize="8">LOW</text>

          <text x="35" y="38" fill="#38BDF8" fontSize="12" fontWeight="bold">/iː/</text>
          <text x="50" y="65" fill="#38BDF8" fontSize="11" fontWeight="bold">/ɪ/</text>
          <text x="55" y="105" fill="#38BDF8" fontSize="11" fontWeight="bold">/e/</text>
          <text x="65" y="155" fill="#38BDF8" fontSize="11" fontWeight="bold">/æ/</text>

          <text x="120" y="75" fill="#34D399" fontSize="12" fontWeight="bold">/ɜː/</text>
          <text x="115" y="105" fill="#34D399" fontSize="12" fontWeight="bold">/ə/</text>
          <text x="115" y="150" fill="#34D399" fontSize="11" fontWeight="bold">/ʌ/</text>

          <text x="195" y="38" fill="#FFCC00" fontSize="12" fontWeight="bold">/uː/</text>
          <text x="180" y="65" fill="#FFCC00" fontSize="11" fontWeight="bold">/ʊ/</text>
          <text x="175" y="105" fill="#FFCC00" fontSize="11" fontWeight="bold">/ɔː/</text>
          <text x="165" y="145" fill="#FFCC00" fontSize="11" fontWeight="bold">/ɒ/</text>
          <text x="150" y="165" fill="#FFCC00" fontSize="11" fontWeight="bold">/ɑː/</text>
        </g>

        <g transform="translate(280, 45)">
          <rect x="0" y="0" width="210" height="175" rx="10" fill="#001830" stroke="#C4823F" strokeWidth="1.5" />
          <text x="105" y="24" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">JAMB STRESS SHIFT RULES</text>
          <line x1="15" y1="32" x2="195" y2="32" stroke="#001020" strokeWidth="1" />

          <rect x="12" y="40" width="186" height="38" rx="6" fill="#001028" />
          <text x="20" y="54" fill="#34D399" fontSize="9" fontWeight="bold">Noun: 1st Syllable</text>
          <text x="20" y="68" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">EX</tspan>-port, <tspan fill="#FFCC00" fontWeight="bold">RE</tspan>-cord, <tspan fill="#FFCC00" fontWeight="bold">CON</tspan>-duct</text>

          <rect x="12" y="84" width="186" height="38" rx="6" fill="#001028" />
          <text x="20" y="98" fill="#F43F5E" fontSize="9" fontWeight="bold">Verb: 2nd Syllable</text>
          <text x="20" y="112" fill="#E2E8F0" fontSize="9">ex-<tspan fill="#FFCC00" fontWeight="bold">PORT</tspan>, re-<tspan fill="#FFCC00" fontWeight="bold">RECORD</tspan>, con-<tspan fill="#FFCC00" fontWeight="bold">DUCT</tspan></text>

          <rect x="12" y="128" width="186" height="38" rx="6" fill="#001028" />
          <text x="20" y="142" fill="#00BCD4" fontSize="9" fontWeight="bold">-tion, -ic, -sion Words</text>
          <text x="20" y="156" fill="#E2E8F0" fontSize="8">Stress penultimate: edu-<tspan fill="#FFCC00" fontWeight="bold">CA</tspan>-tion</text>
        </g>

        <rect x="30" y="240" width="460" height="26" rx="6" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="258" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          ORAL HINT: Pure vowels have stable quality (12 Monophthongs); Diphthongs glide from one sound to another (8 Diphthongs).
        </text>
      </svg>
    )
  },

  {
    id: 'english-figures-of-speech',
    title: "Figures of Speech & Literary Devices Matrix",
    caption: "Classification of literary devices: Comparison, Contradiction, Association, and Sound devices tested in JAMB & WAEC.",
    category: 'English & Literature • Literary Devices',
    subjects: ['english', 'english language', 'literature'],
    topicKeywords: ['figures of speech', 'literary devices', 'literary terms', 'poetic devices', 'simile', 'metaphor', 'personification', 'irony', 'hyperbole'],
    labels: [
      { name: 'Comparison', desc: 'Simile (direct with like/as) vs Metaphor (implicit equation)', color: '#00BCD4' },
      { name: 'Contradiction', desc: 'Oxymoron (juxtaposed contradictory words: bitter sweet) vs Paradox (seemingly absurd statement harboring truth)', color: '#F43F5E' },
      { name: 'Association', desc: 'Metonymy (representing by attribute: "the crown" = monarch) vs Synecdoche (part for whole: "all hands on deck")', color: '#34D399' },
      { name: 'Sound Devices', desc: 'Alliteration (consonant repetition) vs Onomatopoeia (word mimics sound: sizzle, splash)', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">FIGURES OF SPEECH & LITERARY DEVICES MATRIX</text>

        <g transform="translate(25, 45)">
          {/* Card 1 */}
          <rect x="0" y="0" width="225" height="85" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="15" y="22" fill="#00BCD4" fontSize="11" fontWeight="800">1. COMPARISON</text>
          <text x="15" y="42" fill="#E2E8F0" fontSize="9"><tspan fill="#34D399" fontWeight="bold">Simile:</tspan> As brave as a lion (uses like/as)</text>
          <text x="15" y="60" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">Metaphor:</tspan> The camel is the ship of desert</text>
          <text x="15" y="76" fill="#94A3B8" fontSize="8">Personification: Attributing life to inanimate objects</text>

          {/* Card 2 */}
          <rect x="245" y="0" width="225" height="85" rx="8" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="260" y="22" fill="#F43F5E" fontSize="11" fontWeight="800">2. CONTRADICTION</text>
          <text x="260" y="42" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">Oxymoron:</tspan> Deafening silence, Bitter sweet</text>
          <text x="260" y="60" fill="#E2E8F0" fontSize="9"><tspan fill="#00BCD4" fontWeight="bold">Paradox:</tspan> The child is father of the man</text>
          <text x="260" y="76" fill="#94A3B8" fontSize="8">Irony: Stating the opposite of actual meaning</text>

          {/* Card 3 */}
          <rect x="0" y="100" width="225" height="85" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="15" y="122" fill="#34D399" fontSize="11" fontWeight="800">3. ASSOCIATION</text>
          <text x="15" y="142" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">Metonymy:</tspan> The pen is mightier than sword</text>
          <text x="15" y="160" fill="#E2E8F0" fontSize="9"><tspan fill="#00BCD4" fontWeight="bold">Synecdoche:</tspan> Give us our daily bread (food)</text>
          <text x="15" y="176" fill="#94A3B8" fontSize="8">Euphemism: Mild term for unpleasant reality</text>

          {/* Card 4 */}
          <rect x="245" y="100" width="225" height="85" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="260" y="122" fill="#FFCC00" fontSize="11" fontWeight="800">4. SOUND & EXAGGERATION</text>
          <text x="260" y="142" fill="#E2E8F0" fontSize="9"><tspan fill="#34D399" fontWeight="bold">Hyperbole:</tspan> I told you a million times!</text>
          <text x="260" y="160" fill="#E2E8F0" fontSize="9"><tspan fill="#F43F5E" fontWeight="bold">Onomatopoeia:</tspan> Buzz of bees, Hiss of snake</text>
          <text x="260" y="176" fill="#94A3B8" fontSize="8">Alliteration: Peter Piper picked pickled peppers</text>
        </g>

        <rect x="25" y="244" width="470" height="24" rx="6" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="260" fill="#E2E8F0" fontSize="10" fontWeight="bold" textAnchor="middle">
          EXAM MEMORY: Oxymoron = 2 conflicting words side-by-side; Paradox = entire sentence containing deeper truth.
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 2. MATHEMATICS
  // ══════════════════════════════════════════════════════════
  {
    id: 'maths-quadratic-parabola',
    title: "Quadratic Function Anatomy & Parabola Graph",
    caption: "Parabola curve y = ax² + bx + c: Vertex (-b/2a, -Δ/4a), axis of symmetry, discriminant Δ = b² - 4ac, and roots x₁ and x₂.",
    category: 'Mathematics • Coordinate Geometry & Algebra',
    subjects: ['mathematics', 'further mathematics', 'general mathematics'],
    topicKeywords: ['quadratic', 'quadratic equations', 'quadratic functions', 'parabola', 'quadratic graph', 'roots of equation', 'polynomials'],
    labels: [
      { name: 'Vertex (Turning Point)', desc: 'Coordinates (-b / 2a, -Δ / 4a). Minimum if a > 0; Maximum if a < 0', color: '#FFCC00' },
      { name: 'Roots / x-intercepts', desc: 'Points where y = 0 solved via Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a', color: '#00BCD4' },
      { name: 'Discriminant (Δ)', desc: 'Δ = b² - 4ac: If Δ > 0 (2 distinct real roots), Δ = 0 (repeated root), Δ < 0 (no real roots)', color: '#34D399' },
      { name: 'Axis of Symmetry', desc: 'Vertical line x = -b / 2a dividing the parabola symmetrically', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">QUADRATIC PARABOLA: y = ax² + bx + c (a &gt; 0)</text>

        <line x1="50" y1="180" x2="470" y2="180" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="475,180 467,176 467,184" fill="#94A3B8" />
        <text x="460" y="196" fill="#94A3B8" fontSize="11" fontWeight="bold">x</text>

        <line x1="140" y1="230" x2="140" y2="45" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="140,40 136,48 144,48" fill="#94A3B8" />
        <text x="125" y="55" fill="#94A3B8" fontSize="11" fontWeight="bold">y</text>

        <path d="M 120 70 Q 260 270 400 70" fill="none" stroke="#00BCD4" strokeWidth="3.5" />

        <circle cx="178" cy="180" r="5" fill="#34D399" />
        <text x="178" y="170" fill="#34D399" fontSize="11" fontWeight="900" textAnchor="middle">x₁</text>

        <circle cx="342" cy="180" r="5" fill="#34D399" />
        <text x="342" y="170" fill="#34D399" fontSize="11" fontWeight="900" textAnchor="middle">x₂</text>

        <circle cx="260" cy="220" r="6" fill="#FFCC00" stroke="#fff" strokeWidth="1.5" />
        <text x="260" y="240" fill="#FFCC00" fontSize="11" fontWeight="900" textAnchor="middle">Vertex (-b/2a, -Δ/4a)</text>

        <line x1="260" y1="50" x2="260" y2="220" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4,4" />
        <text x="260" y="65" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">Axis: x = -b/2a</text>

        <rect x="360" y="50" width="145" height="110" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
        <text x="432" y="70" fill="#FFCC00" fontSize="10" fontWeight="bold" textAnchor="middle">FORMULA VAULT</text>
        <line x1="370" y1="78" x2="495" y2="78" stroke="#001020" strokeWidth="1" />
        <text x="370" y="95" fill="#00BCD4" fontSize="9" fontWeight="bold">x = [-b ± √(Δ)] / 2a</text>
        <text x="370" y="115" fill="#34D399" fontSize="9" fontWeight="bold">Δ = b² - 4ac</text>
        <text x="370" y="135" fill="#FFEA79" fontSize="9" fontWeight="bold">x₁ + x₂ = -b/a</text>
        <text x="370" y="150" fill="#F43F5E" fontSize="9" fontWeight="bold">x₁ · x₂ = c/a</text>

        <rect x="50" y="248" width="420" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="264" fill="#E2E8F0" fontSize="10" fontWeight="bold" textAnchor="middle">
          KEY CONCEPT: If a &gt; 0, parabola opens upward (minimum); if a &lt; 0, it opens downward (maximum).
        </text>
      </svg>
    )
  },

  {
    id: 'maths-trig-unit-circle',
    title: "Trigonometric Unit Circle & ASTC Quadrants",
    caption: "All Students Take Chemistry (ASTC) quadrant rules for positive signs of Sin, Cos, and Tan across 0° to 360°.",
    category: 'Mathematics • Trigonometry',
    subjects: ['mathematics', 'further mathematics'],
    topicKeywords: ['trigonometry', 'trig ratios', 'unit circle', 'astc', 'angles of elevation', 'trigonometric identities', 'soh cah toa'],
    labels: [
      { name: 'Quadrant 1 (0° - 90°)', desc: 'ALL functions (Sin, Cos, Tan) are POSITIVE [A]', color: '#FFCC00' },
      { name: 'Quadrant 2 (90° - 180°)', desc: 'Only SINE is positive (180° - θ) [S]', color: '#00BCD4' },
      { name: 'Quadrant 3 (180° - 270°)', desc: 'Only TANGENT is positive (180° + θ) [T]', color: '#34D399' },
      { name: 'Quadrant 4 (270° - 360°)', desc: 'Only COSINE is positive (360° - θ) [C]', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">TRIGONOMETRIC RATIOS & THE "ASTC" RULE</text>

        <g transform="translate(190, 145)">
          <circle cx="0" cy="0" r="95" fill="#001830" stroke="#34D399" strokeWidth="2" />
          <line x1="-115" y1="0" x2="115" y2="0" stroke="#94A3B8" strokeWidth="2" />
          <line x1="0" y1="-115" x2="0" y2="115" stroke="#94A3B8" strokeWidth="2" />

          {/* Q1 */}
          <rect x="15" y="-85" width="70" height="65" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
          <text x="50" y="-62" fill="#FFCC00" fontSize="16" fontWeight="900" textAnchor="middle">A</text>
          <text x="50" y="-45" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">ALL +ve</text>
          <text x="50" y="-30" fill="#94A3B8" fontSize="8" textAnchor="middle">0° to 90°</text>

          {/* Q2 */}
          <rect x="-85" y="-85" width="70" height="65" rx="6" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
          <text x="-50" y="-62" fill="#00BCD4" fontSize="16" fontWeight="900" textAnchor="middle">S</text>
          <text x="-50" y="-45" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">SIN +ve</text>
          <text x="-50" y="-30" fill="#94A3B8" fontSize="8" textAnchor="middle">180° - θ</text>

          {/* Q3 */}
          <rect x="-85" y="15" width="70" height="65" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
          <text x="-50" y="38" fill="#34D399" fontSize="16" fontWeight="900" textAnchor="middle">T</text>
          <text x="-50" y="55" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">TAN +ve</text>
          <text x="-50" y="70" fill="#94A3B8" fontSize="8" textAnchor="middle">180° + θ</text>

          {/* Q4 */}
          <rect x="15" y="15" width="70" height="65" rx="6" fill="#001830" stroke="#F43F5E" strokeWidth="1" />
          <text x="50" y="38" fill="#F43F5E" fontSize="16" fontWeight="900" textAnchor="middle">C</text>
          <text x="50" y="55" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">COS +ve</text>
          <text x="50" y="70" fill="#94A3B8" fontSize="8" textAnchor="middle">360° - θ</text>
        </g>

        <g transform="translate(325, 45)">
          <rect x="0" y="0" width="175" height="195" rx="10" fill="#001830" stroke="#C4823F" strokeWidth="1.5" />
          <text x="87" y="24" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">MEMORY MNEMONIC</text>
          <line x1="15" y1="32" x2="160" y2="32" stroke="#001020" strokeWidth="1" />
          <text x="87" y="50" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">"All Students Take Chemistry"</text>

          <rect x="12" y="62" width="150" height="34" rx="5" fill="#001028" />
          <text x="20" y="76" fill="#00BCD4" fontSize="9" fontWeight="bold">SOH CAH TOA:</text>
          <text x="20" y="88" fill="#E2E8F0" fontSize="8">Sin = O/H, Cos = A/H, Tan = O/A</text>

          <rect x="12" y="104" width="150" height="38" rx="5" fill="#001028" />
          <text x="20" y="118" fill="#34D399" fontSize="9" fontWeight="bold">Pythagorean Identity:</text>
          <text x="20" y="132" fill="#E2E8F0" fontSize="9">sin² θ + cos² θ = 1</text>

          <rect x="12" y="148" width="150" height="36" rx="5" fill="#001028" />
          <text x="20" y="162" fill="#F43F5E" fontSize="9" fontWeight="bold">Special Angles (30°, 60°):</text>
          <text x="20" y="174" fill="#E2E8F0" fontSize="8">sin 30° = 0.5, cos 60° = 0.5</text>
        </g>

        <rect x="30" y="248" width="460" height="24" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="264" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          EXAM TRAP: sin(150°) = sin(180° - 30°) = +sin 30° = 0.5 • cos(120°) = -cos 60° = -0.5
        </text>
      </svg>
    )
  },

  {
    id: 'maths-circle-theorems',
    title: "Cardinal Circle Theorems & Geometric Proofs",
    caption: "The 4 essential WAEC & JAMB circle theorems: Angle at centre = 2 × angle at circumference, semicircle angle = 90°, cyclic quadrilateral, and alternate segment.",
    category: 'Mathematics • Circle Geometry',
    subjects: ['mathematics', 'further mathematics'],
    topicKeywords: ['circle geometry', 'circle theorems', 'angles in a circle', 'cyclic quadrilateral', 'tangent to circle', 'geometry of circles'],
    labels: [
      { name: 'Theorem 1: Centre Angle', desc: 'Angle subtended at the centre is TWICE the angle at the circumference (2θ at centre, θ at circumference)', color: '#FFCC00' },
      { name: 'Theorem 2: Semicircle', desc: 'The angle subtended in a semicircle by the diameter is ALWAYS 90°', color: '#00BCD4' },
      { name: 'Theorem 3: Same Segment', desc: 'Angles in the same segment of a circle are equal', color: '#34D399' },
      { name: 'Theorem 4: Cyclic Quad', desc: 'Opposite angles in a cyclic quadrilateral sum up to 180° (supplementary)', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CORE CIRCLE THEOREMS FOR WAEC & JAMB</text>

        {/* Theorem 1 */}
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="15" y="20" fill="#FFCC00" fontSize="10" fontWeight="900">ANGLE AT CENTRE = 2 × CIRCUMFERENCE</text>
          <circle cx="50" cy="55" r="28" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="50" cy="55" r="2.5" fill="#FFCC00" />
          <line x1="28" y1="72" x2="50" y2="55" stroke="#34D399" strokeWidth="1.5" />
          <line x1="72" y1="72" x2="50" y2="55" stroke="#34D399" strokeWidth="1.5" />
          <line x1="28" y1="72" x2="50" y2="28" stroke="#00BCD4" strokeWidth="1.5" />
          <line x1="72" y1="72" x2="50" y2="28" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="50" y="44" fill="#00BCD4" fontSize="8" fontWeight="bold" textAnchor="middle">θ</text>
          <text x="50" y="68" fill="#FFCC00" fontSize="9" fontWeight="bold" textAnchor="middle">2θ</text>
          <text x="95" y="55" fill="#E2E8F0" fontSize="9">Centre Angle = 2θ</text>
          <text x="95" y="70" fill="#38BDF8" fontSize="8">Subtended by same arc</text>
        </g>

        {/* Theorem 2 */}
        <g transform="translate(270, 45)">
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="15" y="20" fill="#00BCD4" fontSize="10" fontWeight="900">ANGLE IN A SEMICIRCLE = 90°</text>
          <circle cx="50" cy="55" r="28" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="22" y1="55" x2="78" y2="55" stroke="#FFCC00" strokeWidth="2" />
          <line x1="22" y1="55" x2="50" y2="28" stroke="#34D399" strokeWidth="1.5" />
          <line x1="78" y1="55" x2="50" y2="28" stroke="#34D399" strokeWidth="1.5" />
          <rect x="46" y="32" width="7" height="7" fill="none" stroke="#00BCD4" strokeWidth="1" />
          <text x="95" y="50" fill="#E2E8F0" fontSize="9">Diameter AB</text>
          <text x="95" y="65" fill="#34D399" fontSize="9" fontWeight="bold">Angle APB = 90°</text>
        </g>

        {/* Theorem 3 */}
        <g transform="translate(30, 145)">
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="15" y="20" fill="#34D399" fontSize="10" fontWeight="900">ANGLES IN SAME SEGMENT ARE EQUAL</text>
          <circle cx="50" cy="55" r="28" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="28" y1="72" x2="72" y2="72" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2,2" />
          <line x1="28" y1="72" x2="40" y2="28" stroke="#34D399" strokeWidth="1.5" />
          <line x1="72" y1="72" x2="40" y2="28" stroke="#34D399" strokeWidth="1.5" />
          <line x1="28" y1="72" x2="65" y2="30" stroke="#00BCD4" strokeWidth="1.5" />
          <line x1="72" y1="72" x2="65" y2="30" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="95" y="55" fill="#E2E8F0" fontSize="9">Angles x = y</text>
          <text x="95" y="70" fill="#FFEA79" fontSize="8">Subtended by common chord</text>
        </g>

        {/* Theorem 4 */}
        <g transform="translate(270, 145)">
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="15" y="20" fill="#F43F5E" fontSize="10" fontWeight="900">CYCLIC QUADRILATERAL: A + C = 180°</text>
          <circle cx="50" cy="55" r="28" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
          <polygon points="35,32 68,36 74,70 30,65" fill="#001028" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="95" y="50" fill="#E2E8F0" fontSize="9">Opposite Angles:</text>
          <text x="95" y="65" fill="#F43F5E" fontSize="9" fontWeight="bold">Angle A + Angle C = 180°</text>
          <text x="95" y="78" fill="#38BDF8" fontSize="8">Angle B + Angle D = 180°</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          EXAM PROOF TIP: When radius meets tangent at point of contact, angle is ALWAYS 90°.
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 3. PHYSICS
  // ══════════════════════════════════════════════════════════
  {
    id: 'gas-laws-ideal-gas',
    title: "Gas Laws & Molecular Kinetic Cylinder",
    caption: "Piston-cylinder apparatus showing gas molecules under pressure P, volume V, and temperature T in accordance with PV = nRT.",
    category: 'Physics & Chemistry • Official Apparatus',
    subjects: ['physics', 'chemistry', 'general science'],
    topicKeywords: ['gas laws', 'gas law', 'boyle', 'charles', 'ideal gas', 'kinetic theory of gases', 'kinetic theory', 'dalton\'s law'],
    labels: [
      { name: 'Piston & Weights', desc: 'Applies variable external pressure P on the confined gas', color: '#FFCC00' },
      { name: 'Gas Molecules', desc: 'Random microscopic motion colliding elastically with chamber walls', color: '#00BCD4' },
      { name: 'Heat Source (T)', desc: 'Supplies thermal kinetic energy directly proportional to temperature', color: '#F43F5E' },
      { name: 'P-V Isotherm', desc: 'Hyperbolic curve showing inverse relationship P ∝ 1/V (Boyle\'s Law)', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="135" y="30" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CYLINDER & MOVABLE PISTON</text>
        <rect x="50" y="55" width="170" height="175" rx="4" fill="#001830" stroke="#34D399" strokeWidth="2.5" />
        
        <rect x="115" y="45" width="40" height="20" rx="3" fill="#C4823F" stroke="#FFCC00" strokeWidth="1.5" />
        <text x="135" y="59" fill="#061710" fontSize="10" fontWeight="900" textAnchor="middle">WEIGHT</text>
        
        <rect x="130" y="65" width="10" height="50" fill="#94A3B8" />
        <rect x="52" y="115" width="166" height="16" rx="2" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
        <text x="135" y="127" fill="#082f49" fontSize="10" fontWeight="900" textAnchor="middle">PISTON HEAD (P)</text>
        
        <circle cx="80" cy="155" r="4.5" fill="#38BDF8" />
        <line x1="80" y1="155" x2="95" y2="165" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="120" cy="180" r="4.5" fill="#38BDF8" />
        <circle cx="170" cy="150" r="4.5" fill="#38BDF8" />
        <circle cx="150" cy="205" r="4.5" fill="#38BDF8" />
        <circle cx="95" cy="215" r="4.5" fill="#38BDF8" />
        <circle cx="185" cy="190" r="4.5" fill="#38BDF8" />

        <path d="M 90 240 Q 100 230 110 240 T 130 240 T 150 240 T 170 240 T 180 240" fill="none" stroke="#F43F5E" strokeWidth="3" />
        <text x="135" y="260" fill="#F43F5E" fontSize="11" fontWeight="800" textAnchor="middle">HEAT INPUT (T in Kelvin)</text>
        
        <line x1="255" y1="20" x2="255" y2="265" stroke="#001020" strokeWidth="1.5" strokeDasharray="4,4" />
        
        <text x="385" y="30" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">BOYLE'S LAW: P vs V GRAPH</text>
        <line x1="290" y1="220" x2="480" y2="220" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="485,220 477,216 477,224" fill="#94A3B8" />
        <text x="475" y="238" fill="#94A3B8" fontSize="11" fontWeight="700">V</text>

        <line x1="290" y1="220" x2="290" y2="55" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="290,50 286,58 294,58" fill="#94A3B8" />
        <text x="270" y="65" fill="#94A3B8" fontSize="11" fontWeight="700">P</text>

        <path d="M 305 75 Q 325 175 460 205" fill="none" stroke="#00BCD4" strokeWidth="3" />
        <circle cx="330" cy="140" r="4" fill="#FFCC00" />
        <text x="340" y="135" fill="#FFCC00" fontSize="10" fontWeight="bold">P₁V₁</text>
        
        <circle cx="410" cy="190" r="4" fill="#34D399" />
        <text x="420" y="185" fill="#34D399" fontSize="10" fontWeight="bold">P₂V₂</text>

        <rect x="300" y="240" width="180" height="28" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="390" y="258" fill="#FFFFFF" fontSize="12" fontWeight="800" textAnchor="middle">P₁V₁ = P₂V₂ = Constant (T)</text>
      </svg>
    )
  },

  {
    id: 'vector-resolution-triangle',
    title: "Vector Resolution into Orthogonal Components",
    caption: "Resolving force vector F inclined at angle θ into rectangular components: Horizontal Fx = F cos θ and Vertical Fy = F sin θ.",
    category: 'Physics & Mathematics • Vector Analysis',
    subjects: ['physics', 'mathematics', 'further mathematics'],
    topicKeywords: ['vector', 'vectors', 'scalars and vectors', 'resolution of forces', 'resultant force', 'equilibrium of forces'],
    labels: [
      { name: 'Resultant Vector (F)', desc: 'The magnitude and directional diagonal of the force vector', color: '#FFCC00' },
      { name: 'Horizontal Component (Fx)', desc: 'Fx = F · cos θ acting along the x-axis', color: '#00BCD4' },
      { name: 'Vertical Component (Fy)', desc: 'Fy = F · sin θ acting along the y-axis', color: '#34D399' },
      { name: 'Inclination Angle (θ)', desc: 'Direction measured anti-clockwise from positive horizontal', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">ORTHOGONAL VECTOR RESOLUTION (Fx & Fy)</text>
        
        <circle cx="90" cy="210" r="5" fill="#FFFFFF" />
        <text x="75" y="215" fill="#FFFFFF" fontSize="12" fontWeight="bold">O</text>

        <line x1="90" y1="210" x2="340" y2="210" stroke="#00BCD4" strokeWidth="3" />
        <polygon points="345,210 335,205 335,215" fill="#00BCD4" />
        <text x="215" y="235" fill="#00BCD4" fontSize="13" fontWeight="800" textAnchor="middle">F_x = F · cos θ</text>

        <line x1="340" y1="210" x2="340" y2="70" stroke="#34D399" strokeWidth="3" strokeDasharray="4,4" />
        <line x1="90" y1="210" x2="90" y2="70" stroke="#34D399" strokeWidth="3" />
        <polygon points="90,65 85,75 95,75" fill="#34D399" />
        <text x="45" y="145" fill="#34D399" fontSize="13" fontWeight="800" textAnchor="middle">F_y = F · sin θ</text>

        <line x1="90" y1="210" x2="340" y2="70" stroke="#FFCC00" strokeWidth="3.5" />
        <polygon points="343,68 330,73 336,83" fill="#FFCC00" />
        <text x="200" y="125" fill="#FFCC00" fontSize="14" fontWeight="900">Resultant F</text>

        <path d="M 140 210 A 50 50 0 0 0 133 186" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
        <text x="150" y="195" fill="#F43F5E" fontSize="14" fontWeight="bold">θ</text>

        <path d="M 325 210 L 325 195 L 340 195" fill="none" stroke="#94A3B8" strokeWidth="1.5" />

        <rect x="375" y="60" width="130" height="150" rx="10" fill="#001830" stroke="#C4823F" strokeWidth="1.5" />
        <text x="440" y="85" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">FORMULA VAULT</text>
        <line x1="385" y1="95" x2="495" y2="95" stroke="#001020" strokeWidth="1" />
        
        <text x="385" y="120" fill="#00BCD4" fontSize="11" fontWeight="700">F_x = F cos θ</text>
        <text x="385" y="145" fill="#34D399" fontSize="11" fontWeight="700">F_y = F sin θ</text>
        <text x="385" y="170" fill="#FFEA79" fontSize="11" fontWeight="700">F = √(Fx² + Fy²)</text>
        <text x="385" y="195" fill="#F43F5E" fontSize="11" fontWeight="700">tan θ = Fy / Fx</text>
      </svg>
    )
  },

  {
    id: 'simple-machines-levers-fle',
    title: "Classification of Levers (1st, 2nd & 3rd Class - FLE)",
    caption: "Demonstration of the Fulcrum (F), Load (L), and Effort (E) positions across the three classes of levers.",
    category: 'Physics & Basic Technology • Mechanics',
    subjects: ['physics', 'basic technology', 'introductory technology', 'general science'],
    topicKeywords: ['simple machines', 'machine', 'lever', 'levers', 'pulley', 'pulleys', 'mechanical advantage', 'velocity ratio', 'work, energy and power'],
    labels: [
      { name: '1st Class (F in Middle)', desc: 'Fulcrum between Load and Effort (e.g. Crowbar, Pliers, Scissors)', color: '#00BCD4' },
      { name: '2nd Class (L in Middle)', desc: 'Load between Fulcrum and Effort (e.g. Wheelbarrow, Nutcracker)', color: '#34D399' },
      { name: '3rd Class (E in Middle)', desc: 'Effort between Fulcrum and Load (e.g. Tongs, Forearm, Fishing rod)', color: '#F43F5E' },
      { name: 'Golden Rule', desc: 'Efficiency = (MA / VR) × 100%. VR never changes with friction!', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">THE THREE CLASSES OF LEVERS (FLE MEMORY AID)</text>

        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="460" height="55" rx="8" fill="#0a2318" stroke="#00BCD4" strokeWidth="1" />
          <text x="15" y="22" fill="#00BCD4" fontSize="11" fontWeight="800">1ST CLASS: FULCRUM IN MIDDLE (Crowbar, See-saw)</text>
          <rect x="60" y="32" width="340" height="6" rx="2" fill="#94A3B8" />
          <polygon points="230,38 220,50 240,50" fill="#00BCD4" />
          <text x="230" y="52" fill="#00BCD4" fontSize="9" fontWeight="bold" textAnchor="middle">F</text>
          <line x1="80" y1="20" x2="80" y2="32" stroke="#F43F5E" strokeWidth="2.5" />
          <polygon points="80,34 76,26 84,26" fill="#F43F5E" />
          <text x="80" y="16" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">LOAD</text>
          <line x1="380" y1="20" x2="380" y2="32" stroke="#34D399" strokeWidth="2.5" />
          <polygon points="380,34 376,26 384,26" fill="#34D399" />
          <text x="380" y="16" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">EFFORT</text>
        </g>

        <g transform="translate(30, 110)">
          <rect x="0" y="0" width="460" height="55" rx="8" fill="#0a2318" stroke="#34D399" strokeWidth="1" />
          <text x="15" y="22" fill="#34D399" fontSize="11" fontWeight="800">2ND CLASS: LOAD IN MIDDLE (Wheelbarrow, Nutcracker)</text>
          <rect x="60" y="32" width="340" height="6" rx="2" fill="#94A3B8" />
          <polygon points="80,38 70,50 90,50" fill="#00BCD4" />
          <text x="80" y="52" fill="#00BCD4" fontSize="9" fontWeight="bold" textAnchor="middle">F</text>
          <line x1="230" y1="20" x2="230" y2="32" stroke="#F43F5E" strokeWidth="2.5" />
          <polygon points="230,34 226,26 234,26" fill="#F43F5E" />
          <text x="230" y="16" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">LOAD</text>
          <line x1="380" y1="46" x2="380" y2="34" stroke="#34D399" strokeWidth="2.5" />
          <polygon points="380,32 376,40 384,40" fill="#34D399" />
          <text x="380" y="20" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">EFFORT ↑</text>
        </g>

        <g transform="translate(30, 175)">
          <rect x="0" y="0" width="460" height="55" rx="8" fill="#0a2318" stroke="#F43F5E" strokeWidth="1" />
          <text x="15" y="22" fill="#F43F5E" fontSize="11" fontWeight="800">3RD CLASS: EFFORT IN MIDDLE (Tweezers, Forearm, Tongs)</text>
          <rect x="60" y="32" width="340" height="6" rx="2" fill="#94A3B8" />
          <polygon points="80,38 70,50 90,50" fill="#00BCD4" />
          <text x="80" y="52" fill="#00BCD4" fontSize="9" fontWeight="bold" textAnchor="middle">F</text>
          <line x1="230" y1="46" x2="230" y2="34" stroke="#34D399" strokeWidth="2.5" />
          <polygon points="230,32 226,40 234,40" fill="#34D399" />
          <text x="230" y="20" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">EFFORT ↑</text>
          <line x1="380" y1="20" x2="380" y2="32" stroke="#F43F5E" strokeWidth="2.5" />
          <polygon points="380,34 376,26 384,26" fill="#F43F5E" />
          <text x="380" y="16" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">LOAD</text>
        </g>

        <rect x="30" y="240" width="460" height="28" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="258" fill="#FFEA79" fontSize="11" fontWeight="800" textAnchor="middle">
          MA = Load / Effort • VR = Distance(Effort) / Distance(Load) • Efficiency = (MA / VR) × 100%
        </text>
      </svg>
    )
  },

  {
    id: 'wave-motion-transverse',
    title: "Anatomy of a Transverse Wave",
    caption: "Parameters of wave motion showing Crest, Trough, Amplitude (A), Wavelength (λ), and Period.",
    category: 'Physics • Wave Mechanics',
    subjects: ['physics'],
    topicKeywords: ['wave motion', 'waves', 'transverse waves', 'longitudinal waves', 'properties of waves', 'wave equation'],
    labels: [
      { name: 'Wavelength (λ)', desc: 'Distance between two successive in-phase points (e.g. crest to crest)', color: '#00BCD4' },
      { name: 'Amplitude (A)', desc: 'Maximum displacement from the undisturbed rest position', color: '#FFCC00' },
      { name: 'Crest & Trough', desc: 'Highest point (crest) and lowest point (trough) of wave disturbance', color: '#34D399' },
      { name: 'Wave Equation', desc: 'v = f · λ where v is velocity (m/s), f is frequency (Hz), λ is wavelength (m)', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">ANATOMY OF A SINE / TRANSVERSE WAVE</text>

        <line x1="50" y1="140" x2="480" y2="140" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4,4" />
        <text x="445" y="132" fill="#94A3B8" fontSize="10" fontWeight="bold">Rest Position</text>

        <line x1="60" y1="230" x2="60" y2="50" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="60,45 56,53 64,53" fill="#94A3B8" />
        <text x="35" y="55" fill="#94A3B8" fontSize="11" fontWeight="bold">y (m)</text>

        <path
          d="M 60 140 Q 110 50, 160 140 T 260 140 T 360 140 T 460 140"
          fill="none"
          stroke="#00BCD4"
          strokeWidth="3.5"
        />

        <circle cx="160" cy="95" r="5" fill="#34D399" />
        <text x="160" y="80" fill="#34D399" fontSize="12" fontWeight="900" textAnchor="middle">CREST</text>

        <circle cx="360" cy="95" r="5" fill="#34D399" />
        <text x="360" y="80" fill="#34D399" fontSize="12" fontWeight="900" textAnchor="middle">CREST</text>

        <circle cx="260" cy="185" r="5" fill="#F43F5E" />
        <text x="260" y="208" fill="#F43F5E" fontSize="12" fontWeight="900" textAnchor="middle">TROUGH</text>

        <line x1="160" y1="65" x2="360" y2="65" stroke="#FFCC00" strokeWidth="2" />
        <polygon points="160,65 168,61 168,69" fill="#FFCC00" />
        <polygon points="360,65 352,61 352,69" fill="#FFCC00" />
        <text x="260" y="58" fill="#FFCC00" fontSize="12" fontWeight="900" textAnchor="middle">WAVELENGTH (λ)</text>

        <line x1="160" y1="95" x2="160" y2="140" stroke="#FFEA79" strokeWidth="2" />
        <text x="175" y="125" fill="#FFEA79" fontSize="11" fontWeight="bold">Amplitude (A)</text>

        <rect x="50" y="235" width="420" height="30" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="255" fill="#FFFFFF" fontSize="12" fontWeight="800" textAnchor="middle">
          FUNDAMENTAL WAVE EQUATION: v = f · λ  •  T = 1 / f
        </text>
      </svg>
    )
  },

  {
    id: 'electricity-dc-circuit-schematic',
    title: "DC Circuit Schematic: Ohm's Law & Meters",
    caption: "Closed electrical circuit demonstrating series Ammeter connection, parallel Voltmeter connection across resistor R, and Ohm's Law V = IR.",
    category: 'Physics & Basic Tech • Circuit Analysis',
    subjects: ['physics', 'basic technology'],
    topicKeywords: ['current electricity', 'electric circuit', 'electric circuits', 'ohm\'s law', 'resistors in series', 'resistors in parallel', 'electrical energy', 'resistance and resistivity'],
    labels: [
      { name: 'DC Source / Battery', desc: 'Supplies electromotive force (EMF) and drives current from positive to negative terminal', color: '#FFCC00' },
      { name: 'Ammeter (A)', desc: 'Connected in SERIES; possesses negligible internal resistance to measure total current I', color: '#00BCD4' },
      { name: 'Voltmeter (V)', desc: 'Connected in PARALLEL; possesses extremely high internal resistance to measure potential difference', color: '#34D399' },
      { name: 'Ohm\'s Law', desc: 'V = I · R at constant physical temperature', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">DIRECT CURRENT (DC) CIRCUIT & OHM'S LAW SCHEMATIC</text>

        <path d="M 120 70 L 400 70 L 400 210 L 120 210 Z" fill="none" stroke="#38BDF8" strokeWidth="2.5" />

        <g transform="translate(120, 120)">
          <rect x="-10" y="0" width="20" height="40" fill="#001028" />
          <line x1="-12" y1="12" x2="12" y2="12" stroke="#FFCC00" strokeWidth="4" />
          <line x1="-6" y1="28" x2="6" y2="28" stroke="#FFCC00" strokeWidth="2" />
          <text x="-25" y="15" fill="#FFCC00" fontSize="12" fontWeight="bold">+</text>
          <text x="-25" y="32" fill="#94A3B8" fontSize="12" fontWeight="bold">-</text>
          <text x="-50" y="25" fill="#FFEA79" fontSize="11" fontWeight="bold">E (V)</text>
        </g>

        <g transform="translate(260, 70)">
          <circle cx="0" cy="0" r="16" fill="#001830" stroke="#00BCD4" strokeWidth="2" />
          <text x="0" y="5" fill="#00BCD4" fontSize="14" fontWeight="900" textAnchor="middle">A</text>
          <text x="0" y="-22" fill="#00BCD4" fontSize="10" fontWeight="bold" textAnchor="middle">AMMETER (Series)</text>
        </g>

        <g transform="translate(400, 140)">
          <rect x="-12" y="-30" width="24" height="60" fill="#001830" stroke="#34D399" strokeWidth="2" />
          <text x="22" y="5" fill="#34D399" fontSize="12" fontWeight="900">R (Ω)</text>
        </g>

        <g transform="translate(470, 140)">
          <path d="M -70 -25 L -20 -25 L -20 25 L -70 25" fill="none" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="-20" cy="0" r="16" fill="#001830" stroke="#F43F5E" strokeWidth="2" />
          <text x="-20" y="5" fill="#F43F5E" fontSize="14" fontWeight="900" textAnchor="middle">V</text>
          <text x="-20" y="28" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">VOLTMETER (Parallel)</text>
        </g>

        <rect x="50" y="235" width="420" height="30" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="255" fill="#FFEA79" fontSize="12" fontWeight="800" textAnchor="middle">
          OHM'S LAW: V = I · R  •  P = V · I = I² · R = V² / R
        </text>
      </svg>
    )
  },

  {
    id: 'physics-optics-lens',
    title: "Geometrical Optics: Convex Lens Ray Diagram",
    caption: "Image formation by a converging (convex) lens: Principal axis, focal point F, center of curvature 2F, and real inverted magnified image.",
    category: 'Physics • Optics & Light Waves',
    subjects: ['physics'],
    topicKeywords: ['optics', 'reflection of light', 'refraction of light', 'lenses', 'curved mirrors', 'convex lens', 'concave lens', 'optical instruments'],
    labels: [
      { name: 'Principal Axis', desc: 'Straight line passing through the optical centre O and focal points F', color: '#94A3B8' },
      { name: 'Focal Point (F)', desc: 'Point where rays parallel to principal axis converge after refraction', color: '#FFCC00' },
      { name: 'Lens Formula', desc: '1/f = 1/u + 1/v (where u is object distance, v is image distance)', color: '#00BCD4' },
      { name: 'Magnification (m)', desc: 'm = Image height / Object height = v / u', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CONVEX LENS RAY TRACING: OBJECT BETWEEN F & 2F</text>

        {/* Principal axis */}
        <line x1="30" y1="140" x2="490" y2="140" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Lens */}
        <ellipse cx="260" cy="140" rx="14" ry="90" fill="#0284c7" fillOpacity="0.2" stroke="#00BCD4" strokeWidth="2.5" />

        {/* Optical center O */}
        <circle cx="260" cy="140" r="4" fill="#FFFFFF" />
        <text x="260" y="156" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">O</text>

        {/* F and 2F marks */}
        <circle cx="180" cy="140" r="3" fill="#FFCC00" />
        <text x="180" y="155" fill="#FFCC00" fontSize="9" fontWeight="bold" textAnchor="middle">F₁</text>

        <circle cx="100" cy="140" r="3" fill="#FFCC00" />
        <text x="100" y="155" fill="#FFCC00" fontSize="9" fontWeight="bold" textAnchor="middle">2F₁</text>

        <circle cx="340" cy="140" r="3" fill="#FFCC00" />
        <text x="340" y="155" fill="#FFCC00" fontSize="9" fontWeight="bold" textAnchor="middle">F₂</text>

        <circle cx="420" cy="140" r="3" fill="#FFCC00" />
        <text x="420" y="155" fill="#FFCC00" fontSize="9" fontWeight="bold" textAnchor="middle">2F₂</text>

        {/* Object Arrow between F and 2F at x=140 */}
        <line x1="140" y1="140" x2="140" y2="80" stroke="#34D399" strokeWidth="3.5" />
        <polygon points="140,75 135,85 145,85" fill="#34D399" />
        <text x="140" y="68" fill="#34D399" fontSize="10" fontWeight="900" textAnchor="middle">OBJECT (u)</text>

        {/* Ray 1: Parallel to axis, then through F2 */}
        <line x1="140" y1="80" x2="260" y2="80" stroke="#F43F5E" strokeWidth="2" />
        <line x1="260" y1="80" x2="440" y2="230" stroke="#F43F5E" strokeWidth="2" />

        {/* Ray 2: Through optical center O */}
        <line x1="140" y1="80" x2="440" y2="230" stroke="#FFEA79" strokeWidth="2" />

        {/* Image Arrow beyond 2F at x=440 (inverted) */}
        <line x1="440" y1="140" x2="440" y2="230" stroke="#00BCD4" strokeWidth="3.5" />
        <polygon points="440,235 435,225 445,225" fill="#00BCD4" />
        <text x="440" y="250" fill="#00BCD4" fontSize="10" fontWeight="900" textAnchor="middle">REAL IMAGE (v)</text>

        <rect x="30" y="248" width="220" height="24" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="140" y="264" fill="#FFEA79" fontSize="9" fontWeight="bold" textAnchor="middle">
          IMAGE: Real, Inverted & Magnified (v &gt; 2F)
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 4. CHEMISTRY
  // ══════════════════════════════════════════════════════════
  {
    id: 'electrochemistry-electrolytic-cell',
    title: "Electrolytic Cell & Faraday's Laws Apparatus",
    caption: "Electrochemical apparatus for electrolysis showing DC battery source, Anode (oxidation), Cathode (reduction), and ion migration.",
    category: 'Chemistry • Electrochemistry',
    subjects: ['chemistry', 'physics'],
    topicKeywords: ['electrochemistry', 'electrolysis', 'faraday\'s law', 'faraday', 'electrolytic cell', 'anode and cathode', 'electrochemical cell'],
    labels: [
      { name: 'Anode (+)', desc: 'Connected to positive battery terminal. Site of OXIDATION (loss of electrons: AN OX)', color: '#F43F5E' },
      { name: 'Cathode (-)', desc: 'Connected to negative battery terminal. Site of REDUCTION (gain of electrons: RED CAT)', color: '#00BCD4' },
      { name: 'Electrolyte', desc: 'Molten or aqueous ionic conductor allowing migration of anions and cations', color: '#38BDF8' },
      { name: 'Faraday\'s 1st Law', desc: 'm = Z · I · t = (M · I · t) / (n · F) where F = 96,500 Coulombs/mol', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">ELECTROLYTIC CELL APPARATUS (AN OX & RED CAT)</text>

        <g transform="translate(260, 45)">
          <line x1="-30" y1="0" x2="-80" y2="0" stroke="#94A3B8" strokeWidth="2" />
          <line x1="30" y1="0" x2="80" y2="0" stroke="#94A3B8" strokeWidth="2" />
          <line x1="-10" y1="-12" x2="-10" y2="12" stroke="#F43F5E" strokeWidth="3" />
          <line x1="10" y1="-7" x2="10" y2="7" stroke="#00BCD4" strokeWidth="2" />
          <text x="-15" y="-16" fill="#F43F5E" fontSize="11" fontWeight="bold">+</text>
          <text x="15" y="-16" fill="#00BCD4" fontSize="11" fontWeight="bold">-</text>
          <text x="0" y="-18" fill="#FFCC00" fontSize="10" fontWeight="bold" textAnchor="middle">DC POWER</text>
        </g>

        <rect x="120" y="110" width="280" height="120" rx="10" fill="#001830" stroke="#34D399" strokeWidth="2" />
        <rect x="124" y="145" width="272" height="80" rx="6" fill="#0284c7" fillOpacity="0.25" />
        <text x="260" y="215" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">AQUEOUS ELECTROLYTE (e.g. CuSO4)</text>

        <g transform="translate(180, 45)">
          <line x1="0" y1="0" x2="0" y2="75" stroke="#94A3B8" strokeWidth="2" />
          <rect x="-10" y="75" width="20" height="85" rx="3" fill="#F43F5E" />
          <text x="0" y="125" fill="#FFF" fontSize="10" fontWeight="900" textAnchor="middle">ANODE (+)</text>
          <text x="-40" y="100" fill="#F43F5E" fontSize="9" fontWeight="bold">OXIDATION</text>
        </g>

        <g transform="translate(340, 45)">
          <line x1="0" y1="0" x2="0" y2="75" stroke="#94A3B8" strokeWidth="2" />
          <rect x="-10" y="75" width="20" height="85" rx="3" fill="#00BCD4" />
          <text x="0" y="125" fill="#001028" fontSize="10" fontWeight="900" textAnchor="middle">CATHODE (-)</text>
          <text x="45" y="100" fill="#00BCD4" fontSize="9" fontWeight="bold">REDUCTION</text>
        </g>

        <text x="220" y="165" fill="#F43F5E" fontSize="11" fontWeight="bold">SO₄²⁻ ➔</text>
        <text x="270" y="185" fill="#00BCD4" fontSize="11" fontWeight="bold">➔ Cu²⁺</text>

        <rect x="40" y="240" width="440" height="28" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="258" fill="#FFEA79" fontSize="11" fontWeight="800" textAnchor="middle">
          FARADAY'S 1ST LAW: m = (M · I · t) / (n · 96500)  •  AN OX & RED CAT
        </text>
      </svg>
    )
  },

  {
    id: 'chemistry-periodic-trends',
    title: "Periodic Table Trends & Periodicity Matrix",
    caption: "Systematic trends across periods and down groups: Atomic radius, Electronegativity, Ionization energy, and Metallic character.",
    category: 'Chemistry • Periodicity & Atomic Structure',
    subjects: ['chemistry'],
    topicKeywords: ['periodic table', 'periodicity', 'periodic trends', 'atomic properties', 'electronic configuration', 'periodic law'],
    labels: [
      { name: 'Atomic Radius', desc: 'Decreases ACROSS period (increased nuclear pull); Increases DOWN group (added electron shells)', color: '#FFCC00' },
      { name: 'Electronegativity', desc: 'Increases ACROSS period (Fluorine is most electronegative at 4.0); Decreases DOWN group', color: '#00BCD4' },
      { name: 'Ionization Energy', desc: 'Energy required to remove outermost electron: Increases across, decreases down', color: '#34D399' },
      { name: 'Metallic Character', desc: 'Metals lose electrons readily (Group 1 alkali metals most reactive down the group)', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PERIODIC TABLE TRENDS & PERIODICITY SUMMARY</text>

        {/* Table layout mockup */}
        <rect x="60" y="45" width="400" height="150" rx="10" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
        
        {/* Across Period Arrow */}
        <g transform="translate(80, 70)">
          <line x1="0" y1="0" x2="330" y2="0" stroke="#00BCD4" strokeWidth="3" />
          <polygon points="335,0 325,-5 325,5" fill="#00BCD4" />
          <text x="165" y="-10" fill="#00BCD4" fontSize="11" fontWeight="800" textAnchor="middle">ACROSS A PERIOD (LEFT ➔ RIGHT)</text>
          <text x="165" y="16" fill="#E2E8F0" fontSize="9" textAnchor="middle">
            • <tspan fill="#FFCC00">Atomic Radius DECREASES</tspan>  • <tspan fill="#34D399">Electronegativity INCREASES</tspan>  • <tspan fill="#F43F5E">Ionization Energy INCREASES</tspan>
          </text>
        </g>

        {/* Down Group Arrow */}
        <g transform="translate(80, 115)">
          <line x1="20" y1="0" x2="20" y2="65" stroke="#FFCC00" strokeWidth="3" />
          <polygon points="20,70 15,60 25,60" fill="#FFCC00" />
          <text x="35" y="15" fill="#FFCC00" fontSize="11" fontWeight="800">DOWN A GROUP (TOP ➔ BOTTOM)</text>
          <text x="35" y="32" fill="#E2E8F0" fontSize="9">• <tspan fill="#34D399">Atomic Radius INCREASES</tspan> (New electron shells added)</text>
          <text x="35" y="48" fill="#E2E8F0" fontSize="9">• <tspan fill="#00BCD4">Electronegativity & Ionization Energy DECREASE</tspan> (Shielding effect)</text>
        </g>

        <rect x="30" y="244" width="460" height="26" rx="6" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="261" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          EXAM TRAP: Noble Gases (Group 0/8) have zero electronegativity because their octet is complete!
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 5. BIOLOGY
  // ══════════════════════════════════════════════════════════
  {
    id: 'cell-structure-plant-vs-animal',
    title: "Comparative Cell Structure: Plant vs Animal Cell",
    caption: "Side-by-side structural comparison of eukaryotic cells highlighting chloroplasts, large central vacuole, cell wall, and nucleus.",
    category: 'Biology • Cytology & Cell Biology',
    subjects: ['biology', 'agricultural science', 'basic science'],
    topicKeywords: ['cell structure', 'the cell', 'plant and animal cells', 'cell biology', 'organization of life', 'cell physiology', 'plant cell', 'animal cell'],
    labels: [
      { name: 'Cell Wall (Plant only)', desc: 'Rigid cellulose outer layer providing mechanical support and turgidity', color: '#34D399' },
      { name: 'Chloroplast (Plant only)', desc: 'Site of photosynthesis containing chlorophyll pigments to trap solar photons', color: '#00BCD4' },
      { name: 'Central Vacuole (Plant)', desc: 'Large fluid-filled sap vacuole maintaining osmotic turgor pressure', color: '#38BDF8' },
      { name: 'Nucleus & Mitochondria', desc: 'Common to both: Nucleus controls heredity (DNA); Mitochondria generates ATP power', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">COMPARATIVE CYTOLOGY: PLANT CELL VS ANIMAL CELL</text>

        <g transform="translate(40, 45)">
          <text x="100" y="15" fill="#34D399" fontSize="12" fontWeight="900" textAnchor="middle">PLANT CELL (Rigid)</text>
          <polygon points="20,30 180,30 200,80 180,180 20,180 0,80" fill="#08281a" stroke="#34D399" strokeWidth="4" />
          <polygon points="24,35 176,35 194,80 176,175 24,175 6,80" fill="#0a3322" stroke="#00BCD4" strokeWidth="1.5" />
          <ellipse cx="100" cy="115" rx="45" ry="35" fill="#0284c7" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="100" y="118" fill="#E0F2FE" fontSize="9" fontWeight="bold" textAnchor="middle">Large Vacuole</text>
          <circle cx="150" cy="65" r="14" fill="#FFCC00" fillOpacity="0.5" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="150" y="68" fill="#FFF" fontSize="8" fontWeight="bold" textAnchor="middle">Nucleus</text>
          <ellipse cx="50" cy="65" rx="10" ry="6" fill="#10B981" stroke="#34D399" strokeWidth="1.5" />
          <text x="50" y="80" fill="#34D399" fontSize="8" textAnchor="middle">Chloroplast</text>
        </g>

        <line x1="260" y1="45" x2="260" y2="230" stroke="#001020" strokeWidth="2" strokeDasharray="4,4" />

        <g transform="translate(280, 45)">
          <text x="100" y="15" fill="#F43F5E" fontSize="12" fontWeight="900" textAnchor="middle">ANIMAL CELL (Flexible)</text>
          <ellipse cx="100" cy="105" rx="85" ry="70" fill="#1c1917" stroke="#F43F5E" strokeWidth="2.5" />
          <circle cx="100" cy="105" r="22" fill="#FFCC00" fillOpacity="0.4" stroke="#FFCC00" strokeWidth="2" />
          <circle cx="100" cy="105" r="8" fill="#FFCC00" />
          <text x="100" y="80" fill="#FFEA79" fontSize="9" fontWeight="bold" textAnchor="middle">Nucleus & DNA</text>
          <ellipse cx="45" cy="90" rx="9" ry="5" fill="#C4823F" stroke="#F59E0B" strokeWidth="1" />
          <ellipse cx="150" cy="125" rx="9" ry="5" fill="#C4823F" stroke="#F59E0B" strokeWidth="1" />
          <text x="150" y="142" fill="#F59E0B" fontSize="8" textAnchor="middle">Mitochondria</text>
          <circle cx="55" cy="130" r="5" fill="#38BDF8" fillOpacity="0.4" stroke="#38BDF8" />
          <text x="55" y="145" fill="#38BDF8" fontSize="7" textAnchor="middle">Small Vacuole</text>
        </g>

        <rect x="40" y="240" width="440" height="28" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="258" fill="#FFEA79" fontSize="11" fontWeight="800" textAnchor="middle">
          KEY DISTINCTIONS: Plant cell has cellulose cell wall & chloroplasts; animal cell lacks rigid wall.
        </text>
      </svg>
    )
  },

  {
    id: 'biology-genetics-punnett-square',
    title: "Mendelian Genetics & Monohybrid Cross (Punnett Square)",
    caption: "Mendel's First Law (Law of Segregation): Crossing two heterozygous parents (Tt × Tt) yielding 3:1 phenotypic and 1:2:1 genotypic ratios.",
    category: 'Biology • Genetics & Heredity',
    subjects: ['biology', 'agricultural science'],
    topicKeywords: ['genetics', 'heredity', 'mendel\'s law', 'mendel', 'monohybrid cross', 'punnett square', 'chromosomes and genes', 'inheritance'],
    labels: [
      { name: 'Dominant Allele (T)', desc: 'Expressed in both homozygous (TT) and heterozygous (Tt) states for tall phenotype', color: '#34D399' },
      { name: 'Recessive Allele (t)', desc: 'Only expressed in homozygous state (tt) yielding dwarf phenotype', color: '#F43F5E' },
      { name: 'Genotypic Ratio', desc: '1 TT : 2 Tt : 1 tt (25% homozygous tall, 50% heterozygous tall, 25% dwarf)', color: '#FFCC00' },
      { name: 'Phenotypic Ratio', desc: '3 Tall : 1 Dwarf (75% tall : 25% short)', color: '#00BCD4' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">MONOHYBRID CROSS: Tt × Tt PUNNETT SQUARE</text>

        {/* Left Side: Punnett Grid */}
        <g transform="translate(60, 50)">
          {/* Header row / col labels */}
          <text x="80" y="20" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">Female Gametes: T, t</text>
          <text x="-15" y="85" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle" transform="rotate(-90 -15,85)">Male Gametes</text>

          {/* Grid Table */}
          <rect x="25" y="35" width="130" height="130" rx="8" fill="#001830" stroke="#34D399" strokeWidth="2" />
          <line x1="90" y1="35" x2="90" y2="165" stroke="#34D399" strokeWidth="1.5" />
          <line x1="25" y1="100" x2="155" y2="100" stroke="#34D399" strokeWidth="1.5" />

          {/* Allele labels outside */}
          <text x="58" y="28" fill="#FFCC00" fontSize="14" fontWeight="900" textAnchor="middle">T</text>
          <text x="122" y="28" fill="#F43F5E" fontSize="14" fontWeight="900" textAnchor="middle">t</text>
          <text x="15" y="72" fill="#FFCC00" fontSize="14" fontWeight="900" textAnchor="middle">T</text>
          <text x="15" y="137" fill="#F43F5E" fontSize="14" fontWeight="900" textAnchor="middle">t</text>

          {/* Cell 1: TT */}
          <text x="58" y="73" fill="#34D399" fontSize="16" fontWeight="900" textAnchor="middle">TT</text>
          <text x="58" y="88" fill="#94A3B8" fontSize="8" textAnchor="middle">Homozygous Tall</text>

          {/* Cell 2: Tt */}
          <text x="122" y="73" fill="#FFEA79" fontSize="16" fontWeight="900" textAnchor="middle">Tt</text>
          <text x="122" y="88" fill="#94A3B8" fontSize="8" textAnchor="middle">Heterozygous Tall</text>

          {/* Cell 3: Tt */}
          <text x="58" y="138" fill="#FFEA79" fontSize="16" fontWeight="900" textAnchor="middle">Tt</text>
          <text x="58" y="153" fill="#94A3B8" fontSize="8" textAnchor="middle">Heterozygous Tall</text>

          {/* Cell 4: tt */}
          <text x="122" y="138" fill="#F43F5E" fontSize="16" fontWeight="900" textAnchor="middle">tt</text>
          <text x="122" y="153" fill="#94A3B8" fontSize="8" textAnchor="middle">Homozygous Dwarf</text>
        </g>

        {/* Right Side: Ratios Breakdown */}
        <g transform="translate(265, 50)">
          <rect x="0" y="0" width="220" height="175" rx="10" fill="#001830" stroke="#C4823F" strokeWidth="1.5" />
          <text x="110" y="24" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">OFFSPRING PROBABILITY RATIOS</text>
          <line x1="15" y1="32" x2="205" y2="32" stroke="#001020" strokeWidth="1" />

          <rect x="12" y="42" width="196" height="50" rx="6" fill="#001028" />
          <text x="20" y="58" fill="#34D399" fontSize="10" fontWeight="bold">Phenotypic Ratio (Physical Look):</text>
          <text x="20" y="76" fill="#E2E8F0" fontSize="12" fontWeight="bold">
            <tspan fill="#34D399">3 Tall</tspan> : <tspan fill="#F43F5E">1 Dwarf</tspan> (75% : 25%)
          </text>

          <rect x="12" y="102" width="196" height="58" rx="6" fill="#001028" />
          <text x="20" y="118" fill="#00BCD4" fontSize="10" fontWeight="bold">Genotypic Ratio (Gene Alleles):</text>
          <text x="20" y="136" fill="#E2E8F0" fontSize="11" fontWeight="bold">
            1 TT : 2 Tt : 1 tt
          </text>
          <text x="20" y="150" fill="#94A3B8" fontSize="8">(25% Pure Tall : 50% Hybrid : 25% Pure Dwarf)</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          MENDEL'S LAW OF SEGREGATION: Allele pairs separate during gamete formation and randomly unite at fertilization.
        </text>
      </svg>
    )
  },

  {
    id: 'biology-human-heart',
    title: "The Human Heart & Double Circulation System",
    caption: "Longitudinal section showing atria, ventricles, bicuspid & tricuspid valves, aorta, vena cava, and pulmonary vessels.",
    category: 'Biology • Circulatory & Transport System',
    subjects: ['biology', 'basic science', 'health science'],
    topicKeywords: ['heart', 'circulatory system', 'transport system', 'blood circulation', 'mammalian heart', 'cardiac', 'blood vessels', 'circulation', 'double circulation'],
    labels: [
      { name: 'Right Atrium', desc: 'Receives deoxygenated blood from the body via superior and inferior vena cava', color: '#38BDF8' },
      { name: 'Right Ventricle', desc: 'Pumps deoxygenated blood to the lungs through the pulmonary artery', color: '#00BCD4' },
      { name: 'Left Atrium', desc: 'Receives oxygenated blood from the lungs via pulmonary veins', color: '#F43F5E' },
      { name: 'Left Ventricle', desc: 'Has thickest muscular myocardium; pumps oxygenated blood at high pressure to systemic circulation via aorta', color: '#EF4444' },
      { name: 'Aorta', desc: 'Largest systemic artery distributing oxygenated blood to head, limbs, and organs', color: '#FFCC00' },
      { name: 'Bicuspid & Tricuspid Valves', desc: 'Atrioventricular valves with chordae tendineae preventing backflow during systole', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">LONGITUDINAL SECTION OF THE MAMMALIAN HEART</text>

        {/* Left Side: Heart Diagram */}
        <g transform="translate(40, 35)">
          {/* Main muscular heart outline */}
          <path d="M 60 70 C 40 10, 110 5, 125 35 C 140 5, 210 10, 190 70 C 180 120, 125 180, 125 180 C 125 180, 70 120, 60 70 Z" fill="#450a0a" stroke="#ef4444" strokeWidth="3" />
          
          {/* Thick Left Ventricular Wall */}
          <path d="M 125 178 C 125 178, 175 125, 185 75 C 190 40, 155 20, 130 45 L 125 80 L 125 178 Z" fill="#881337" opacity="0.8" />
          
          {/* Septum */}
          <rect x="120" y="55" width="10" height="120" rx="4" fill="#7f1d1d" stroke="#f43f5e" strokeWidth="1" />
          <text x="125" y="125" fill="#fecdd3" fontSize="8" fontWeight="bold" textAnchor="middle" transform="rotate(-90 125 125)">Septum</text>

          {/* Vena Cava (Blue) */}
          <rect x="35" y="10" width="16" height="50" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="43" y="8" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Vena Cava</text>

          {/* Aorta Arch (Red) */}
          <path d="M 115 45 C 115 10, 160 5, 165 30" fill="none" stroke="#dc2626" strokeWidth="14" strokeLinecap="round" />
          <text x="145" y="8" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">Aorta</text>

          {/* Right Atrium (Deoxygenated - Blue) */}
          <ellipse cx="85" cy="55" rx="22" ry="18" fill="#0369a1" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="85" y="58" fill="#e0f2fe" fontSize="8" fontWeight="bold" textAnchor="middle">Rt. Atrium</text>

          {/* Right Ventricle */}
          <ellipse cx="88" cy="115" rx="24" ry="26" fill="#075985" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="88" y="118" fill="#e0f2fe" fontSize="8" fontWeight="bold" textAnchor="middle">Rt. Ventricle</text>

          {/* Left Atrium (Oxygenated - Red) */}
          <ellipse cx="160" cy="55" rx="20" ry="18" fill="#be123c" fillOpacity="0.7" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="160" y="58" fill="#ffe4e6" fontSize="8" fontWeight="bold" textAnchor="middle">Lt. Atrium</text>

          {/* Left Ventricle (Thick) */}
          <ellipse cx="158" cy="115" rx="22" ry="26" fill="#9f1239" fillOpacity="0.8" stroke="#f43f5e" strokeWidth="2" />
          <text x="158" y="118" fill="#ffe4e6" fontSize="8" fontWeight="bold" textAnchor="middle">Lt. Ventricle</text>

          {/* Valves */}
          <line x1="72" y1="80" x2="100" y2="80" stroke="#FFD600" strokeWidth="2.5" />
          <text x="50" y="88" fill="#FFD600" fontSize="7" fontWeight="bold">Tricuspid</text>
          
          <line x1="145" y1="80" x2="172" y2="80" stroke="#FFD600" strokeWidth="2.5" />
          <text x="178" y="88" fill="#FFD600" fontSize="7" fontWeight="bold">Bicuspid</text>
        </g>

        {/* Right Side: Chief Examiner Circulation Rules */}
        <g transform="translate(285, 40)">
          <rect x="0" y="0" width="205" height="190" rx="10" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="102" y="22" fill="#FFCC00" fontSize="10.5" fontWeight="900" textAnchor="middle">DOUBLE CIRCULATION PATHWAY</text>
          <line x1="12" y1="30" x2="193" y2="30" stroke="#001020" strokeWidth="1" />

          {/* Step 1: Pulmonary */}
          <rect x="10" y="38" width="185" height="42" rx="6" fill="#001028" />
          <text x="16" y="52" fill="#38BDF8" fontSize="9" fontWeight="bold">1. Pulmonary Circuit (To Lungs):</text>
          <text x="16" y="68" fill="#E2E8F0" fontSize="8">Rt. Ventricle → Pulm. Artery → Lungs</text>

          {/* Step 2: Systemic */}
          <rect x="10" y="88" width="185" height="42" rx="6" fill="#001028" />
          <text x="16" y="102" fill="#F43F5E" fontSize="9" fontWeight="bold">2. Systemic Circuit (To Body):</text>
          <text x="16" y="118" fill="#E2E8F0" fontSize="8">Lt. Ventricle → Aorta → All Body Organs</text>

          {/* High yield exam rule */}
          <rect x="10" y="138" width="185" height="44" rx="6" fill="#001028" stroke="#FFD600" strokeWidth="1" />
          <text x="16" y="152" fill="#FFD600" fontSize="8.5" fontWeight="bold">⚠️ WAEC / JAMB Marking Rule:</text>
          <text x="16" y="168" fill="#D1FAE5" fontSize="7.5">Lt. ventricle wall is 3× thicker than right!</text>
        </g>

        {/* Bottom Banner */}
        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          RULE OF BLOOD: Arteries carry blood AWAY from heart (usually oxygenated); Veins carry blood TOWARD heart.
        </text>
      </svg>
    )
  },

  {
    id: 'biology-human-eye',
    title: "The Human Eye: Sagittal Section & Optical Refraction",
    caption: "Diagram of the human eye showing cornea, iris, pupil, biconvex crystalline lens, ciliary body, retina, fovea, and optic nerve.",
    category: 'Biology • Sense Organs & Nervous Coordination',
    subjects: ['biology', 'basic science', 'physics'],
    topicKeywords: ['eye', 'sense organs', 'the eye', 'vision', 'optical system', 'sight', 'defects of vision', 'refraction in the eye', 'sensory receptors'],
    labels: [
      { name: 'Cornea', desc: 'Transparent curved front layer responsible for about 70% of optical light refraction', color: '#38BDF8' },
      { name: 'Crystalline Lens', desc: 'Flexible biconvex transparent protein structure altering focal length for accommodation', color: '#00BCD4' },
      { name: 'Iris & Pupil', desc: 'Colored muscular diaphragm with circular and radial muscles controlling light aperture', color: '#FFCC00' },
      { name: 'Retina & Fovea', desc: 'Light-sensitive inner layer with rods (dim light) and cones (color); Fovea gives sharpest vision', color: '#F43F5E' },
      { name: 'Ciliary Muscles', desc: 'Contract for near vision (slackens suspensory ligaments; lens rounds); relax for distance', color: '#34D399' },
      { name: 'Optic Nerve', desc: 'Transmits visual electrochemical impulses directly to the visual cortex of the brain', color: '#A855F7' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">SAGITTAL SECTION OF THE MAMMALIAN EYE</text>

        {/* Eye Globe Structure */}
        <g transform="translate(50, 40)">
          {/* Sclera & Choroid & Retina 3-layer globe */}
          <path d="M 60 70 A 65 65 0 1 0 60 130 C 40 120, 25 110, 25 100 C 25 90, 40 80, 60 70 Z" fill="#0f172a" stroke="#94A3B8" strokeWidth="3" />
          <path d="M 60 73 A 62 62 0 1 0 60 127" fill="none" stroke="#7f1d1d" strokeWidth="2.5" />
          <path d="M 60 76 A 59 59 0 1 0 60 124" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

          {/* Bulging Cornea */}
          <path d="M 60 70 C 35 80, 20 90, 20 100 C 20 110, 35 120, 60 130" fill="none" stroke="#38BDF8" strokeWidth="4" />
          <text x="18" y="103" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="end">Cornea</text>

          {/* Iris and Pupil */}
          <rect x="68" y="72" width="6" height="18" rx="2" fill="#0284c7" />
          <rect x="68" y="110" width="6" height="18" rx="2" fill="#0284c7" />
          <text x="56" y="68" fill="#0284c7" fontSize="8" fontWeight="bold">Iris</text>
          <text x="60" y="103" fill="#FEF08A" fontSize="7" fontWeight="bold">Pupil</text>

          {/* Biconvex Crystalline Lens */}
          <ellipse cx="85" cy="100" rx="10" ry="22" fill="#bae6fd" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="2" />
          <text x="85" y="132" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Lens</text>

          {/* Suspensory Ligaments */}
          <line x1="85" y1="78" x2="85" y2="70" stroke="#fff" strokeWidth="1.5" strokeDasharray="2,2" />
          <line x1="85" y1="122" x2="85" y2="130" stroke="#fff" strokeWidth="1.5" strokeDasharray="2,2" />

          {/* Vitreous Chamber */}
          <text x="130" y="100" fill="#64748b" fontSize="8" textAnchor="middle">Vitreous Humour</text>

          {/* Fovea / Yellow Spot */}
          <circle cx="188" cy="100" r="4" fill="#ef4444" />
          <text x="185" y="90" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="end">Fovea (Yellow Spot)</text>

          {/* Optic Nerve exit */}
          <rect x="180" y="115" width="30" height="18" fill="#475569" stroke="#94A3B8" strokeWidth="1" transform="rotate(25 180 115)" />
          <text x="215" y="145" fill="#a855f7" fontSize="8" fontWeight="bold">Optic Nerve (Blind Spot)</text>

          {/* Light Rays */}
          <line x1="0" y1="90" x2="85" y2="98" stroke="#FFD600" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="0" y1="110" x2="85" y2="102" stroke="#FFD600" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="85" y1="98" x2="188" y2="100" stroke="#FFD600" strokeWidth="1.5" />
          <line x1="85" y1="102" x2="188" y2="100" stroke="#FFD600" strokeWidth="1.5" />
        </g>

        {/* Accommodation & Defects Guide */}
        <g transform="translate(300, 40)">
          <rect x="0" y="0" width="190" height="190" rx="10" fill="#001830" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="95" y="22" fill="#FFCC00" fontSize="10.5" fontWeight="900" textAnchor="middle">CHIEF EXAMINER EYE RULES</text>
          <line x1="12" y1="30" x2="178" y2="30" stroke="#001020" strokeWidth="1" />

          <rect x="10" y="38" width="170" height="42" rx="6" fill="#001028" />
          <text x="16" y="52" fill="#38BDF8" fontSize="9" fontWeight="bold">Near Vision Accommodation:</text>
          <text x="16" y="68" fill="#E2E8F0" fontSize="8">Ciliary muscles CONTRACT → Lens rounder</text>

          <rect x="10" y="88" width="170" height="42" rx="6" fill="#001028" />
          <text x="16" y="102" fill="#34D399" fontSize="9" fontWeight="bold">Distant Vision Accommodation:</text>
          <text x="16" y="118" fill="#E2E8F0" fontSize="8">Ciliary muscles RELAX → Lens flattens</text>

          <rect x="10" y="138" width="170" height="44" rx="6" fill="#001028" stroke="#FFD600" strokeWidth="1" />
          <text x="16" y="152" fill="#FFD600" fontSize="8.5" fontWeight="bold">Optical Defects Summary:</text>
          <text x="16" y="168" fill="#D1FAE5" fontSize="7.5">Myopia: Concave Lens | Hypermetropia: Convex</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          IMAGE CHARACTERISTICS ON RETINA: Real, inverted (upside down), and smaller than the object.
        </text>
      </svg>
    )
  },

  {
    id: 'biology-human-nephron-kidney',
    title: "The Human Kidney & Nephron: Ultrafiltration & Osmoregulation",
    caption: "Microscopic functional unit of the kidney showing Bowman's capsule, glomerulus, proximal convoluted tubule, Loop of Henle, and collecting duct.",
    category: 'Biology • Excretion & Osmoregulation',
    subjects: ['biology', 'basic science', 'health science'],
    topicKeywords: ['kidney', 'excretion', 'excretory system', 'nephron', 'osmoregulation', 'urinary system', 'ultrafiltration', 'selective reabsorption'],
    labels: [
      { name: 'Bowman\'s Capsule & Glomerulus', desc: 'Site of ultrafiltration under high hydrostatic pressure filtering urea, water, salts, and glucose', color: '#F43F5E' },
      { name: 'Proximal Convoluted Tubule', desc: '100% of glucose and amino acids plus 80% of water & salts selectively reabsorbed into capillaries', color: '#FFCC00' },
      { name: 'Loop of Henle', desc: 'Descends into hypertonic medulla establishing osmotic concentration gradient for water conservation', color: '#00BCD4' },
      { name: 'Distal Convoluted Tubule & Duct', desc: 'Tubular secretion and final hormonal water reabsorption regulated by ADH (vasopressin)', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">FUNCTIONAL UNIT OF EXCRETION: THE NEPHRON</text>

        {/* Nephron SVG Path */}
        <g transform="translate(30, 45)">
          {/* Bowman's cup */}
          <path d="M 50 35 C 20 35, 20 85, 50 85 C 65 85, 65 75, 55 60 C 65 45, 65 35, 50 35 Z" fill="#08281a" stroke="#34D399" strokeWidth="3" />
          
          {/* Glomerulus capillary tuft */}
          <circle cx="36" cy="60" r="14" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
          <text x="36" y="63" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Glomerulus</text>

          {/* Afferent / Efferent Arterioles */}
          <path d="M 0 50 L 24 54" stroke="#dc2626" strokeWidth="4" />
          <text x="8" y="44" fill="#f87171" fontSize="7" fontWeight="bold">Afferent</text>
          <path d="M 0 70 L 24 66" stroke="#dc2626" strokeWidth="2" />
          <text x="8" y="80" fill="#f87171" fontSize="7" fontWeight="bold">Efferent (narrow)</text>

          {/* Proximal Convoluted Tubule */}
          <path d="M 50 35 Q 75 20, 95 40 T 130 35" fill="none" stroke="#FFCC00" strokeWidth="7" strokeLinecap="round" />
          <text x="90" y="24" fill="#FFCC00" fontSize="8" fontWeight="bold" textAnchor="middle">Proximal Tubule (PCT)</text>

          {/* Loop of Henle descending & ascending */}
          <path d="M 130 35 L 130 145 C 130 165, 160 165, 160 145 L 160 55" fill="none" stroke="#00BCD4" strokeWidth="5" />
          <text x="145" y="178" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">Loop of Henle</text>

          {/* Distal Convoluted Tubule */}
          <path d="M 160 55 Q 180 40, 200 60 T 225 50" fill="none" stroke="#34D399" strokeWidth="6" strokeLinecap="round" />
          <text x="195" y="38" fill="#34D399" fontSize="8" fontWeight="bold" textAnchor="middle">Distal Tubule (DCT)</text>

          {/* Collecting Duct */}
          <rect x="225" y="30" width="12" height="150" rx="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <text x="245" y="100" fill="#94a3b8" fontSize="8" fontWeight="bold">Collecting Duct → Ureter</text>
        </g>

        {/* 3 Steps of Urine Formation Guide */}
        <g transform="translate(305, 40)">
          <rect x="0" y="0" width="185" height="190" rx="10" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="92" y="22" fill="#FFCC00" fontSize="10.5" fontWeight="900" textAnchor="middle">3 STAGES OF URINE FORMATION</text>
          <line x1="12" y1="30" x2="173" y2="30" stroke="#001020" strokeWidth="1" />

          <rect x="8" y="36" width="169" height="42" rx="6" fill="#001028" />
          <text x="14" y="50" fill="#F43F5E" fontSize="8.5" fontWeight="bold">1. Ultrafiltration (Glomerulus):</text>
          <text x="14" y="66" fill="#E2E8F0" fontSize="7.5">Blood cells & proteins stay; fluid enters</text>

          <rect x="8" y="84" width="169" height="44" rx="6" fill="#001028" />
          <text x="14" y="98" fill="#FFCC00" fontSize="8.5" fontWeight="bold">2. Selective Reabsorption (PCT):</text>
          <text x="14" y="114" fill="#E2E8F0" fontSize="7.5">100% Glucose & amino acids recovered</text>

          <rect x="8" y="134" width="169" height="46" rx="6" fill="#001028" stroke="#34D399" strokeWidth="1" />
          <text x="14" y="148" fill="#34D399" fontSize="8.5" fontWeight="bold">3. Osmoregulation & ADH:</text>
          <text x="14" y="164" fill="#D1FAE5" fontSize="7.5">Pituitary secretes ADH to conserve water</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          EXAMINER TEST QUESTION: Glucose in urine indicates DIABETES MELLITUS (pancreatic insulin deficiency).
        </text>
      </svg>
    )
  },

  {
    id: 'biology-flower-reproduction',
    title: "The Generalized Flower: Anatomy of Angiosperm Reproduction",
    caption: "Longitudinal section of an insect-pollinated flower showing stamen (male), pistil/carpel (female), petals (corolla), and sepals (calyx).",
    category: 'Biology • Plant Reproduction & Morphology',
    subjects: ['biology', 'agricultural science', 'basic science'],
    topicKeywords: ['flower', 'reproduction in plants', 'floral parts', 'pollination', 'plant reproduction', 'angiosperm', 'fertilization in plants', 'sexual reproduction in flowering plants'],
    labels: [
      { name: 'Stamen (Male Organ)', desc: 'Consists of the Anther (produces pollen grains/male gametes) and supportive Filament', color: '#FFCC00' },
      { name: 'Carpel / Pistil (Female)', desc: 'Consists of Stigma (sticky receptive surface), Style (pollen tube pathway), and Ovary (contains ovules)', color: '#F43F5E' },
      { name: 'Petals (Corolla)', desc: 'Brightly colored, scented with nectar guides to attract biotic insect pollinators', color: '#EC4899' },
      { name: 'Sepals (Calyx)', desc: 'Green protective leaf-like structures enclosing the delicate flower bud before opening', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">LONGITUDINAL SECTION OF A GENERALIZED FLOWER</text>

        {/* Flower SVG Art */}
        <g transform="translate(60, 40)">
          {/* Stem / Receptacle */}
          <rect x="95" y="150" width="10" height="40" fill="#15803d" />
          <path d="M 80 150 C 80 135, 120 135, 120 150 Z" fill="#166534" stroke="#22c55e" strokeWidth="2" />
          <text x="100" y="165" fill="#86efac" fontSize="7" textAnchor="middle">Receptacle</text>

          {/* Green Sepals (Calyx) */}
          <path d="M 80 145 C 50 140, 45 125, 55 120 C 65 130, 80 140, 80 145 Z" fill="#15803d" />
          <path d="M 120 145 C 150 140, 155 125, 145 120 C 135 130, 120 140, 120 145 Z" fill="#15803d" />
          <text x="45" y="145" fill="#22c55e" fontSize="8" fontWeight="bold">Sepal (Calyx)</text>

          {/* Bright Pink Petals (Corolla) */}
          <path d="M 80 140 C 30 110, 10 40, 60 40 C 85 40, 85 90, 85 130 Z" fill="#db2777" opacity="0.8" stroke="#f472b6" strokeWidth="2" />
          <path d="M 120 140 C 170 110, 190 40, 140 40 C 115 40, 115 90, 115 130 Z" fill="#db2777" opacity="0.8" stroke="#f472b6" strokeWidth="2" />
          <text x="25" y="55" fill="#f472b6" fontSize="9" fontWeight="bold">Petal (Corolla)</text>

          {/* Female Pistil: Ovary, Style, Stigma */}
          <ellipse cx="100" cy="120" rx="16" ry="18" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
          <circle cx="96" cy="116" r="4" fill="#fef08a" />
          <circle cx="104" cy="124" r="4" fill="#fef08a" />
          <text x="100" y="123" fill="#fff" fontSize="6" fontWeight="bold" textAnchor="middle">Ovules</text>
          
          <rect x="98" y="60" width="4" height="45" fill="#22c55e" />
          <text x="88" y="85" fill="#86efac" fontSize="7" fontWeight="bold" textAnchor="end">Style</text>
          
          {/* Stigma */}
          <ellipse cx="100" cy="55" rx="10" ry="6" fill="#84cc16" stroke="#bef264" strokeWidth="1.5" />
          <text x="100" y="46" fill="#facc15" fontSize="8" fontWeight="bold" textAnchor="middle">Stigma (Sticky)</text>

          {/* Male Stamens: Filaments and Anthers */}
          <path d="M 85 130 Q 60 90, 70 50" fill="none" stroke="#eab308" strokeWidth="2" />
          <ellipse cx="70" cy="46" rx="6" ry="4" fill="#ca8a04" stroke="#fef08a" strokeWidth="1" />
          
          <path d="M 115 130 Q 140 90, 130 50" fill="none" stroke="#eab308" strokeWidth="2" />
          <ellipse cx="130" cy="46" rx="6" ry="4" fill="#ca8a04" stroke="#fef08a" strokeWidth="1" />
          <text x="145" y="48" fill="#facc15" fontSize="8" fontWeight="bold">Anther (Pollen)</text>
        </g>

        {/* Flower Physiology Breakdown */}
        <g transform="translate(295, 40)">
          <rect x="0" y="0" width="195" height="190" rx="10" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="97" y="22" fill="#FFCC00" fontSize="10.5" fontWeight="900" textAnchor="middle">POLLINATION &amp; FERTILIZATION</text>
          <line x1="12" y1="30" x2="183" y2="30" stroke="#001020" strokeWidth="1" />

          <rect x="10" y="38" width="175" height="42" rx="6" fill="#001028" />
          <text x="16" y="52" fill="#EC4899" fontSize="8.5" fontWeight="bold">Pollination Process:</text>
          <text x="16" y="68" fill="#E2E8F0" fontSize="7.5">Pollen transfer from Anther to Stigma</text>

          <rect x="10" y="88" width="175" height="42" rx="6" fill="#001028" />
          <text x="16" y="102" fill="#34D399" fontSize="8.5" fontWeight="bold">Post-Fertilization Fate:</text>
          <text x="16" y="118" fill="#E2E8F0" fontSize="7.5">Ovary develops into FRUIT; Ovule into SEED</text>

          <rect x="10" y="138" width="175" height="44" rx="6" fill="#001028" stroke="#FFD600" strokeWidth="1" />
          <text x="16" y="152" fill="#FFD600" fontSize="8.5" fontWeight="bold">Insect vs Wind Pollinated:</text>
          <text x="16" y="168" fill="#D1FAE5" fontSize="7.5">Wind flowers: Dull petals, feathery stigma!</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          WAEC CHIEF EXAMINER FORMULA: Floral parts are grouped into Calyx (K), Corolla (C), Androecium (A), Gynoecium (G).
        </text>
      </svg>
    )
  },

  {
    id: 'biology-leaf-photosynthesis',
    title: "Transverse Section of a Dicot Leaf (Photosynthesis Anatomy)",
    caption: "Microscopic cross-section showing upper cuticle, palisade mesophyll, spongy mesophyll, stomata with guard cells, xylem, and phloem.",
    category: 'Biology • Plant Physiology & Nutrition',
    subjects: ['biology', 'agricultural science', 'basic science'],
    topicKeywords: ['photosynthesis', 'leaf structure', 'internal structure of a leaf', 'chloroplast', 'plant nutrition', 'stomata', 'transpiration', 'dicot leaf'],
    labels: [
      { name: 'Waxy Cuticle & Epidermis', desc: 'Transparent waterproof outer barrier reducing transpirational water loss while letting sunlight penetrate', color: '#38BDF8' },
      { name: 'Palisade Mesophyll', desc: 'Densely packed columnar cells loaded with chloroplasts; principal site of light absorption and carbon fixation', color: '#22C55E' },
      { name: 'Spongy Mesophyll', desc: 'Loosely arranged irregular cells with large intercellular air spaces for gas exchange (CO2 and O2)', color: '#86EFAC' },
      { name: 'Vascular Bundle (Vein)', desc: 'Xylem transports water and dissolved mineral salts; Phloem translocates manufactured carbohydrates', color: '#FFCC00' },
      { name: 'Stomata & Guard Cells', desc: 'Microscopic pores regulated by turgid/flaccid guard cells governing transpiration and CO2 intake', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CROSS-SECTION OF A DICOTYLEDONOUS LEAF</text>

        {/* Leaf Layers */}
        <g transform="translate(40, 40)">
          {/* Upper Cuticle & Epidermis */}
          <rect x="0" y="10" width="230" height="6" fill="#38BDF8" opacity="0.7" />
          <text x="-8" y="15" fill="#38BDF8" fontSize="7" textAnchor="end">Cuticle</text>
          
          <rect x="0" y="16" width="230" height="16" fill="#14532d" stroke="#22c55e" strokeWidth="1" />
          <text x="115" y="28" fill="#dcfce7" fontSize="8" fontWeight="bold" textAnchor="middle">Upper Epidermis (No chloroplasts)</text>

          {/* Palisade Mesophyll Layer */}
          <g transform="translate(0, 32)">
            {[0, 23, 46, 69, 92, 115, 138, 161, 184, 207].map(x => (
              <rect key={x} x={x} y="0" width="22" height="60" rx="3" fill="#166534" stroke="#4ade80" strokeWidth="1" />
            ))}
            <text x="115" y="35" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle">Palisade Mesophyll (Dense Chloroplasts)</text>
          </g>

          {/* Spongy Mesophyll Layer with Air Spaces */}
          <g transform="translate(0, 95)">
            <ellipse cx="30" cy="18" rx="14" ry="10" fill="#15803d" stroke="#86efac" />
            <ellipse cx="70" cy="22" rx="16" ry="12" fill="#15803d" stroke="#86efac" />
            <ellipse cx="160" cy="18" rx="14" ry="10" fill="#15803d" stroke="#86efac" />
            <ellipse cx="200" cy="24" rx="16" ry="12" fill="#15803d" stroke="#86efac" />

            {/* Vascular Bundle in middle */}
            <circle cx="115" cy="24" r="22" fill="#042f2e" stroke="#FFCC00" strokeWidth="2" />
            <circle cx="115" cy="16" r="10" fill="#0284c7" />
            <text x="115" y="19" fill="#fff" fontSize="6" fontWeight="bold" textAnchor="middle">Xylem</text>
            <circle cx="115" cy="32" r="7" fill="#ca8a04" />
            <text x="115" y="34" fill="#fff" fontSize="5" fontWeight="bold" textAnchor="middle">Phloem</text>

            <text x="25" y="45" fill="#86efac" fontSize="7">Air Spaces</text>
          </g>

          {/* Lower Epidermis with Stomata */}
          <rect x="0" y="145" width="230" height="16" fill="#14532d" stroke="#22c55e" strokeWidth="1" />
          {/* Stomatal Pore & Guard Cells */}
          <rect x="95" y="145" width="40" height="16" fill="#001028" />
          <ellipse cx="98" cy="153" rx="4" ry="6" fill="#22c55e" stroke="#bef264" />
          <ellipse cx="132" cy="153" rx="4" ry="6" fill="#22c55e" stroke="#bef264" />
          <text x="115" y="156" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle">Stoma</text>
        </g>

        {/* Photosynthesis Reaction Guide */}
        <g transform="translate(290, 40)">
          <rect x="0" y="0" width="200" height="190" rx="10" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="100" y="22" fill="#FFCC00" fontSize="10" fontWeight="900" textAnchor="middle">BIOCHEMICAL EQUATION</text>
          <line x1="12" y1="30" x2="188" y2="30" stroke="#001020" strokeWidth="1" />

          <rect x="8" y="36" width="184" height="46" rx="6" fill="#001028" />
          <text x="12" y="52" fill="#38BDF8" fontSize="8" fontWeight="bold">Balanced Equation:</text>
          <text x="12" y="70" fill="#FFEA79" fontSize="10.5" fontWeight="900">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</text>

          <rect x="8" y="88" width="184" height="42" rx="6" fill="#001028" />
          <text x="12" y="102" fill="#34D399" fontSize="8.5" fontWeight="bold">Light Reaction (Grana):</text>
          <text x="12" y="118" fill="#E2E8F0" fontSize="7.5">Photolysis of water releases O₂; forms ATP</text>

          <rect x="8" y="136" width="184" height="46" rx="6" fill="#001028" stroke="#FFD600" strokeWidth="1" />
          <text x="12" y="150" fill="#FFD600" fontSize="8.5" fontWeight="bold">Dark Reaction / Calvin (Stroma):</text>
          <text x="12" y="166" fill="#D1FAE5" fontSize="7.5">CO₂ reduced to glucose (independent of light)</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          ADAPTATIONS FOR PHOTOSYNTHESIS: Broad flat lamina, thin profile for gas diffusion, dense palisade chloroplasts.
        </text>
      </svg>
    )
  },

  {
    id: 'biology-respiratory-system',
    title: "Human Respiratory System: Trachea, Lungs & Alveolar Gas Exchange",
    caption: "Diagram of the human respiratory tract from trachea to microscopic alveoli surrounded by blood capillaries showing O2 and CO2 diffusion.",
    category: 'Biology • Respiration & Gaseous Exchange',
    subjects: ['biology', 'basic science', 'health science'],
    topicKeywords: ['respiration', 'respiratory system', 'breathing', 'lungs', 'gaseous exchange', 'alveoli', 'gas exchange', 'mechanism of breathing'],
    labels: [
      { name: 'Trachea (Windpipe)', desc: 'Reinforced with C-shaped rings of cartilage preventing collapse during pressure drops', color: '#38BDF8' },
      { name: 'Bronchi & Bronchioles', desc: 'Bifurcating bronchial tree channeling air deep into left and right lobes of the lungs', color: '#00BCD4' },
      { name: 'Alveoli (Air Sacs)', desc: 'Millions of thin-walled (one-cell thick) moist sacs providing enormous surface area for diffusion', color: '#F43F5E' },
      { name: 'Capillary Network', desc: 'Deoxygenated blood absorbs O2 and sheds CO2 across the respiratory membrane', color: '#FFCC00' },
      { name: 'Diaphragm & Intercostals', desc: 'Muscles contracting to increase thoracic volume during inspiration (inhalation)', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">HUMAN RESPIRATORY TRACT &amp; ALVEOLAR DIFFUSION</text>

        {/* Respiratory System Artwork */}
        <g transform="translate(40, 40)">
          {/* Trachea */}
          <rect x="75" y="10" width="16" height="50" rx="4" fill="#1e293b" stroke="#38BDF8" strokeWidth="2" />
          {[20, 30, 40, 50].map(y => (
            <line key={y} x1="75" y1={y} x2="91" y2={y} stroke="#fff" strokeWidth="1.5" />
          ))}
          <text x="70" y="25" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="end">Trachea (Cartilage rings)</text>

          {/* Left & Right Bronchi */}
          <path d="M 83 60 L 55 90" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />
          <path d="M 83 60 L 115 90" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />

          {/* Left Lung Lobe */}
          <path d="M 45 80 C 15 90, 10 160, 50 165 C 75 165, 75 120, 65 90 Z" fill="#be123c" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
          
          {/* Right Lung Lobe */}
          <path d="M 120 80 C 150 90, 155 160, 115 165 C 90 165, 90 120, 100 90 Z" fill="#be123c" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
          <text x="83" y="140" fill="#fecdd3" fontSize="9" fontWeight="bold" textAnchor="middle">Lungs</text>

          {/* Diaphragm Curve */}
          <path d="M 10 175 Q 85 155, 160 175" fill="none" stroke="#FFD600" strokeWidth="4" />
          <text x="85" y="185" fill="#FFD600" fontSize="8" fontWeight="bold" textAnchor="middle">Diaphragm</text>
        </g>

        {/* Zoomed Alveolus Gaseous Exchange */}
        <g transform="translate(265, 45)">
          <rect x="0" y="0" width="225" height="185" rx="10" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="112" y="20" fill="#FFCC00" fontSize="10.5" fontWeight="900" textAnchor="middle">ZOOM: ALVEOLAR GASEOUS EXCHANGE</text>
          <line x1="12" y1="28" x2="213" y2="28" stroke="#001020" strokeWidth="1" />

          {/* Alveolar Bulb */}
          <ellipse cx="70" cy="85" rx="35" ry="30" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
          <text x="70" y="80" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Alveolus</text>
          <text x="70" y="94" fill="#67e8f9" fontSize="7" textAnchor="middle">Air space</text>

          {/* Blood Capillary running around */}
          <path d="M 25 125 C 60 125, 110 115, 115 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
          <text x="120" y="65" fill="#f87171" fontSize="7" fontWeight="bold">Capillary</text>

          {/* Diffusion Arrows */}
          <path d="M 75 75 L 95 65" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#arrow)" />
          <text x="85" y="62" fill="#4ade80" fontSize="8" fontWeight="bold">O₂ →</text>
          <path d="M 90 90 L 70 100" stroke="#00BCD4" strokeWidth="2.5" />
          <text x="80" y="105" fill="#38BDF8" fontSize="8" fontWeight="bold">← CO₂</text>

          {/* Characteristics for Efficient Diffusion Box */}
          <rect x="8" y="128" width="209" height="48" rx="6" fill="#001028" stroke="#34D399" strokeWidth="1" />
          <text x="14" y="142" fill="#34D399" fontSize="8" fontWeight="bold">Respiratory Surface Features:</text>
          <text x="14" y="156" fill="#E2E8F0" fontSize="7.5">• 1-cell thick wall • Moist surface</text>
          <text x="14" y="168" fill="#E2E8F0" fontSize="7.5">• Rich capillary network • Large surface area</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          INHALATION MECHANISM: External intercostals contract, ribs move up/out, diaphragm flattens, pressure falls.
        </text>
      </svg>
    )
  },

  {
    id: 'biology-amoeba-paramecium',
    title: "Unicellular Organisms: Amoeba proteus & Paramecium caudatum",
    caption: "Comparative cellular anatomy of free-living protozoans highlighting pseudopodia, contractile vacuole, cilia, and oral groove.",
    category: 'Biology • Unicellular Organisms & Protozoa',
    subjects: ['biology', 'basic science'],
    topicKeywords: ['amoeba', 'paramecium', 'unicellular organisms', 'protozoa', 'living organisms', 'concept of living things', 'micro-organisms', 'feeding in amoeba'],
    labels: [
      { name: 'Pseudopodia (Amoeba)', desc: 'Temporary cytoplasmic projections utilized for amoeboid locomotion and phagocytosis (food capture)', color: '#34D399' },
      { name: 'Contractile Vacuole', desc: 'Osmoregulatory organelle constantly collecting and expelling excess water in hypotonic freshwater', color: '#00BCD4' },
      { name: 'Cilia (Paramecium)', desc: 'Hair-like locomotive structures beating in coordinated metachronal rhythm', color: '#FFCC00' },
      { name: 'Nuclear Dualism (Paramecium)', desc: 'Macronucleus controls physiological metabolism; Micronucleus directs reproduction/conjugation', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CYTOLOGY: AMOEBA PROTEUS VS PARAMECIUM CAUDATUM</text>

        {/* Amoeba */}
        <g transform="translate(30, 45)">
          <text x="100" y="15" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">AMOEBA PROTEUS (Irregular)</text>
          {/* Amoeba shape */}
          <path d="M 40 40 C 20 60, 10 90, 30 120 C 50 150, 90 160, 120 140 C 150 150, 180 120, 170 90 C 180 50, 150 30, 120 40 C 90 20, 60 30, 40 40 Z" fill="#042f2e" stroke="#34D399" strokeWidth="2.5" />
          
          <text x="20" y="55" fill="#34D399" fontSize="8" fontWeight="bold">Pseudopodium</text>
          
          {/* Nucleus */}
          <circle cx="95" cy="85" r="14" fill="#f59e0b" opacity="0.8" stroke="#FFD600" />
          <text x="95" y="88" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Nucleus</text>

          {/* Contractile Vacuole */}
          <circle cx="130" cy="70" r="10" fill="#0284c7" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="130" y="60" fill="#38BDF8" fontSize="7" fontWeight="bold" textAnchor="middle">Contractile Vacuole</text>

          {/* Food Vacuoles */}
          <circle cx="65" cy="115" r="7" fill="#78350f" stroke="#d97706" />
          <circle cx="115" cy="120" r="6" fill="#78350f" stroke="#d97706" />
          <text x="90" y="138" fill="#d97706" fontSize="7">Food Vacuoles</text>
        </g>

        {/* Divider */}
        <line x1="260" y1="40" x2="260" y2="235" stroke="#001020" strokeWidth="2" strokeDasharray="4,4" />

        {/* Paramecium (Slipper shape) */}
        <g transform="translate(280, 45)">
          <text x="110" y="15" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">PARAMECIUM CAUDATUM (Slipper)</text>
          {/* Slipper outline */}
          <ellipse cx="110" cy="100" rx="80" ry="40" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2.5" transform="rotate(-15 110 100)" />
          
          {/* Cilia hairs fringe */}
          <ellipse cx="110" cy="100" rx="84" ry="44" fill="none" stroke="#FFD600" strokeWidth="1" strokeDasharray="2,3" transform="rotate(-15 110 100)" />
          <text x="180" y="55" fill="#FFD600" fontSize="8" fontWeight="bold">Cilia</text>

          {/* Oral groove & Gullet */}
          <path d="M 85 90 C 100 95, 115 110, 110 120" fill="none" stroke="#f43f5e" strokeWidth="3" />
          <text x="65" y="125" fill="#f43f5e" fontSize="8" fontWeight="bold">Oral Groove</text>

          {/* Dual Nuclei: Macro and Micro */}
          <ellipse cx="110" cy="85" rx="14" ry="9" fill="#f59e0b" stroke="#fef08a" />
          <text x="110" y="87" fill="#fff" fontSize="6" fontWeight="bold" textAnchor="middle">Macronucleus</text>
          <circle cx="110" cy="72" r="3.5" fill="#ef4444" />
          <text x="110" y="66" fill="#f87171" fontSize="6" textAnchor="middle">Micronucleus</text>

          {/* Star-shaped Contractile Vacuoles at both ends */}
          <circle cx="55" cy="85" r="7" fill="#0284c7" stroke="#38BDF8" />
          <circle cx="160" cy="115" r="7" fill="#0284c7" stroke="#38BDF8" />
          <text x="160" y="135" fill="#38BDF8" fontSize="7">Radial Vacuole</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          OSMOREGULATION: If placed in saltwater, the contractile vacuole bursts/disappears because water stops entering!
        </text>
      </svg>
    )
  },

  {
    id: 'biology-mitosis-cell-division',
    title: "Stages of Mitosis: Equational Somatic Cell Division",
    caption: "Sequential cellular diagram of Mitosis: Prophase, Metaphase, Anaphase, and Telophase producing two identical diploid (2n) daughter cells.",
    category: 'Biology • Cell Division & Cytogenetics',
    subjects: ['biology', 'basic science', 'agricultural science'],
    topicKeywords: ['mitosis', 'cell division', 'meiosis', 'stages of mitosis', 'chromosomes', 'nuclear division', 'somatic cells', 'cytokinesis'],
    labels: [
      { name: 'Prophase', desc: 'Chromatin condenses into visible double-chromatid chromosomes; nuclear envelope disintegrates; spindle forms', color: '#38BDF8' },
      { name: 'Metaphase', desc: 'Chromosomes line up single-file along the equatorial (metaphase) plate attached to spindle fibers', color: '#FFCC00' },
      { name: 'Anaphase', desc: 'Centromeres split; sister chromatids are pulled apart toward opposite spindle poles', color: '#F43F5E' },
      { name: 'Telophase & Cytokinesis', desc: 'Nuclear membranes reform; cytoplasm cleaves yielding two genetically identical diploid daughter cells', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="24" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">FOUR STAGES OF MITOSIS (P-M-A-T)</text>

        {/* 4 Stage Boxes */}
        <g transform="translate(15, 45)">
          {/* Stage 1: Prophase */}
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="115" height="175" rx="8" fill="#001830" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="57" y="20" fill="#38BDF8" fontSize="10.5" fontWeight="900" textAnchor="middle">1. PROPHASE</text>
            <ellipse cx="57" cy="85" rx="42" ry="42" fill="#0f172a" stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
            {/* Condensed X chromosomes */}
            <path d="M 45 75 L 55 95 M 55 75 L 45 95" stroke="#ef4444" strokeWidth="3" />
            <path d="M 60 75 L 70 95 M 70 75 L 60 95" stroke="#3b82f6" strokeWidth="3" />
            <text x="57" y="145" fill="#e2e8f0" fontSize="7.5" textAnchor="middle">Chromosomes</text>
            <text x="57" y="158" fill="#e2e8f0" fontSize="7.5" textAnchor="middle">condense</text>
          </g>

          {/* Stage 2: Metaphase */}
          <g transform="translate(125, 0)">
            <rect x="0" y="0" width="115" height="175" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
            <text x="57" y="20" fill="#FFCC00" fontSize="10.5" fontWeight="900" textAnchor="middle">2. METAPHASE</text>
            <ellipse cx="57" cy="85" rx="44" ry="44" fill="#0f172a" stroke="#fff" strokeWidth="1.5" />
            {/* Equator line */}
            <line x1="57" y1="45" x2="57" y2="125" stroke="#FFCC00" strokeWidth="1" strokeDasharray="2,2" />
            {/* Chromosomes at equator */}
            <path d="M 54 65 L 60 75 M 60 65 L 54 75" stroke="#ef4444" strokeWidth="3" />
            <path d="M 54 85 L 60 95 M 60 85 L 54 95" stroke="#3b82f6" strokeWidth="3" />
            <path d="M 54 105 L 60 115 M 60 105 L 54 115" stroke="#22c55e" strokeWidth="3" />
            <text x="57" y="145" fill="#e2e8f0" fontSize="7.5" textAnchor="middle">Aligned along</text>
            <text x="57" y="158" fill="#FFCC00" fontSize="7.5" fontWeight="bold" textAnchor="middle">Equator Plate</text>
          </g>

          {/* Stage 3: Anaphase */}
          <g transform="translate(250, 0)">
            <rect x="0" y="0" width="115" height="175" rx="8" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
            <text x="57" y="20" fill="#F43F5E" fontSize="10.5" fontWeight="900" textAnchor="middle">3. ANAPHASE</text>
            <ellipse cx="57" cy="85" rx="48" ry="40" fill="#0f172a" stroke="#fff" strokeWidth="1.5" />
            {/* Chromatids moving to poles */}
            <path d="M 38 65 L 34 75 M 34 75 L 38 85" fill="none" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 76 65 L 80 75 M 80 75 L 76 85" fill="none" stroke="#ef4444" strokeWidth="2.5" />
            
            <path d="M 38 95 L 34 105 M 34 105 L 38 115" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            <path d="M 76 95 L 80 105 M 80 105 L 76 115" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            
            <text x="57" y="145" fill="#e2e8f0" fontSize="7.5" textAnchor="middle">Sister chromatids</text>
            <text x="57" y="158" fill="#F43F5E" fontSize="7.5" fontWeight="bold" textAnchor="middle">separate to poles</text>
          </g>

          {/* Stage 4: Telophase */}
          <g transform="translate(375, 0)">
            <rect x="0" y="0" width="115" height="175" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
            <text x="57" y="20" fill="#34D399" fontSize="10.5" fontWeight="900" textAnchor="middle">4. TELOPHASE</text>
            {/* Cleavage furrow */}
            <ellipse cx="38" cy="85" rx="26" ry="34" fill="#0f172a" stroke="#34D399" strokeWidth="1.5" />
            <ellipse cx="76" cy="85" rx="26" ry="34" fill="#0f172a" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="38" cy="85" r="10" fill="#14532d" />
            <circle cx="76" cy="85" r="10" fill="#14532d" />
            <text x="57" y="145" fill="#e2e8f0" fontSize="7.5" textAnchor="middle">2 identical diploid</text>
            <text x="57" y="158" fill="#34D399" fontSize="7.5" fontWeight="bold" textAnchor="middle">daughter cells (2n)</text>
          </g>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          MNEMONIC: "People Meet And Talk" = Prophase, Metaphase, Anaphase, Telophase.
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECONOMICS
  // ══════════════════════════════════════════════════════════
  {
    id: 'economics-market-equilibrium',
    title: "Market Price Determination: Demand & Supply Curves",
    caption: "Graphical equilibrium where the downward-sloping Demand curve intersects the upward-sloping Supply curve at equilibrium price Pe and quantity Qe.",
    category: 'Economics & Commerce • Price Theory',
    subjects: ['economics', 'commerce', 'marketing'],
    topicKeywords: ['market equilibrium', 'theory of demand', 'theory of supply', 'price determination', 'demand and supply', 'equilibrium price', 'elasticity of demand'],
    labels: [
      { name: 'Equilibrium (E)', desc: 'The price point Pe where Quantity Demanded equals Quantity Supplied (Qd = Qs)', color: '#FFCC00' },
      { name: 'Demand Curve (D)', desc: 'Law of Demand: Downward sloping from left to right (inverse price relationship)', color: '#00BCD4' },
      { name: 'Supply Curve (S)', desc: 'Law of Supply: Upward sloping from left to right (direct price relationship)', color: '#34D399' },
      { name: 'Surplus & Shortage', desc: 'Prices above Pe cause excess supply (surplus); prices below Pe cause excess demand (shortage)', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">MARKET PRICE DETERMINATION (D = S EQUILIBRIUM)</text>

        <line x1="80" y1="220" x2="440" y2="220" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="445,220 437,216 437,224" fill="#94A3B8" />
        <text x="425" y="238" fill="#94A3B8" fontSize="11" fontWeight="bold">Quantity (Q)</text>

        <line x1="80" y1="220" x2="80" y2="50" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="80,45 76,53 84,53" fill="#94A3B8" />
        <text x="50" y="60" fill="#94A3B8" fontSize="11" fontWeight="bold">Price (P)</text>

        <line x1="120" y1="70" x2="400" y2="200" stroke="#00BCD4" strokeWidth="3.5" />
        <text x="408" y="205" fill="#00BCD4" fontSize="13" fontWeight="900">D</text>

        <line x1="120" y1="200" x2="400" y2="70" stroke="#34D399" strokeWidth="3.5" />
        <text x="408" y="75" fill="#34D399" fontSize="13" fontWeight="900">S</text>

        <circle cx="260" cy="135" r="6" fill="#FFCC00" stroke="#ffffff" strokeWidth="1.5" />
        <text x="275" y="132" fill="#FFCC00" fontSize="14" fontWeight="900">E (Equilibrium)</text>

        <line x1="260" y1="135" x2="260" y2="220" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="4,4" />
        <text x="260" y="235" fill="#FFCC00" fontSize="12" fontWeight="bold" textAnchor="middle">Qe</text>

        <line x1="260" y1="135" x2="80" y2="135" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="4,4" />
        <text x="60" y="139" fill="#FFCC00" fontSize="12" fontWeight="bold">Pe</text>

        <text x="260" y="80" fill="#F43F5E" fontSize="11" fontWeight="bold" textAnchor="middle">EXCESS SUPPLY (SURPLUS)</text>
        <text x="260" y="185" fill="#F43F5E" fontSize="11" fontWeight="bold" textAnchor="middle">EXCESS DEMAND (SHORTAGE)</text>

        <rect x="40" y="242" width="440" height="26" rx="6" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="259" fill="#FFFFFF" fontSize="11" fontWeight="800" textAnchor="middle">
          At Equilibrium: Quantity Demanded (Qd) = Quantity Supplied (Qs)
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 7. GOVERNMENT
  // ══════════════════════════════════════════════════════════
  {
    id: 'gov-separation-of-powers',
    title: "Separation of Powers & Constitutional Checks",
    caption: "Tripartite democratic governance: Legislature (law making), Executive (law execution), and Judiciary (law interpretation) with checks & balances.",
    category: 'Government • Political Architecture',
    subjects: ['government', 'civic education', 'civics'],
    topicKeywords: ['separation of powers', 'arms of government', 'organs of government', 'checks and balances', 'legislature, executive', 'constitutionalism'],
    labels: [
      { name: '1. Legislature', desc: 'The National Assembly (Senate & House of Reps) enacts laws and holds purse control.', color: '#FFCC00' },
      { name: '2. Executive', desc: 'The President, Ministers, and Civil Service execute and implement laws.', color: '#00BCD4' },
      { name: '3. Judiciary', desc: 'The Supreme Court and Judges interpret laws and conduct judicial review.', color: '#34D399' },
      { name: 'Checks & Balances', desc: 'Presidential veto, legislative impeachment, and judicial invalidation of unconstitutional acts.', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">MONTESQUIEU'S SEPARATION OF POWERS & CHECKS</text>

        <g transform="translate(190, 42)">
          <rect x="0" y="0" width="140" height="52" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="2" />
          <text x="70" y="22" fill="#FFCC00" fontSize="11" fontWeight="900" textAnchor="middle">LEGISLATURE</text>
          <text x="70" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Makes Laws (Parliament)</text>
        </g>

        <g transform="translate(40, 155)">
          <rect x="0" y="0" width="140" height="52" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="2" />
          <text x="70" y="22" fill="#00BCD4" fontSize="11" fontWeight="900" textAnchor="middle">EXECUTIVE</text>
          <text x="70" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Enforces Laws (President)</text>
        </g>

        <g transform="translate(340, 155)">
          <rect x="0" y="0" width="140" height="52" rx="8" fill="#001830" stroke="#34D399" strokeWidth="2" />
          <text x="70" y="22" fill="#34D399" fontSize="11" fontWeight="900" textAnchor="middle">JUDICIARY</text>
          <text x="70" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Interprets Laws (Courts)</text>
        </g>

        <line x1="210" y1="95" x2="130" y2="155" stroke="#F43F5E" strokeWidth="2" />
        <text x="150" y="120" fill="#F43F5E" fontSize="8" fontWeight="bold">Impeachment / Veto</text>

        <line x1="310" y1="95" x2="390" y2="155" stroke="#F43F5E" strokeWidth="2" />
        <text x="360" y="120" fill="#F43F5E" fontSize="8" fontWeight="bold">Judicial Review</text>

        <line x1="180" y1="180" x2="340" y2="180" stroke="#F43F5E" strokeWidth="2" />
        <text x="260" y="174" fill="#F43F5E" fontSize="8" fontWeight="bold" textAnchor="middle">Appointment vs Nullification</text>

        <rect x="30" y="244" width="460" height="26" rx="6" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="261" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          CONSTITUTIONAL PRINCIPLE: Powers are separated to prevent tyranny and safeguard citizen liberty.
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 26. MATHEMATICS: VENN DIAGRAM & SET THEORY
  // ══════════════════════════════════════════════════════════
  {
    id: 'maths-venn-diagram-set-theory',
    title: "Set Theory & 2-Set/3-Set Venn Diagram Operations",
    caption: "Universal set notation (ξ), Intersection (A ∩ B), Union (A ∪ B), Disjoint sets, and Complement (A') cardinality.",
    category: 'Mathematics • Set Theory',
    subjects: ['mathematics', 'further mathematics', 'general mathematics', 'basic science'],
    topicKeywords: ['venn', 'venn diagram', 'venn diagrams', 'set theory', 'sets', 'set', 'intersection', 'universal set', 'union of sets'],
    labels: [
      { name: '1. Universal Set (ξ)', desc: 'The entire master set containing all elements under consideration.', color: '#94A3B8' },
      { name: '2. Intersection (A ∩ B)', desc: 'Elements common to both set A AND set B (shaded overlap region).', color: '#FFCC00' },
      { name: '3. Union (A ∪ B)', desc: 'Elements belonging to set A OR set B OR both: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).', color: '#38BDF8' },
      { name: '4. Complement (A\')', desc: 'Elements inside the universal set that do NOT belong to set A.', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">SET THEORY &amp; VENN DIAGRAM OPERATIONS</text>

        {/* Master Universal Rectangle */}
        <rect x="30" y="42" width="460" height="190" rx="12" fill="#001830" stroke="#94A3B8" strokeWidth="2" />
        <text x="50" y="62" fill="#94A3B8" fontSize="13" fontWeight="bold">ξ (Universal Set)</text>

        {/* Left Circle: Set A */}
        <circle cx="200" cy="135" r="70" fill="#0284C7" fillOpacity="0.35" stroke="#38BDF8" strokeWidth="2.5" />
        <text x="160" y="135" fill="#38BDF8" fontSize="14" fontWeight="bold">Only A</text>
        <text x="160" y="152" fill="#BAE6FD" fontSize="10">[A ∩ B']</text>

        {/* Right Circle: Set B */}
        <circle cx="300" cy="135" r="70" fill="#E11D48" fillOpacity="0.35" stroke="#F43F5E" strokeWidth="2.5" />
        <text x="340" y="135" fill="#F43F5E" fontSize="14" fontWeight="bold">Only B</text>
        <text x="340" y="152" fill="#FECDD3" fontSize="10">[B ∩ A']</text>

        {/* Shaded Overlap */}
        <text x="250" y="130" fill="#FFCC00" fontSize="11" fontWeight="bold" textAnchor="middle">A ∩ B</text>
        <text x="250" y="146" fill="#FFEA79" fontSize="9" textAnchor="middle">(Both)</text>

        {/* Outside Complement */}
        <text x="440" y="215" fill="#94A3B8" fontSize="10" fontWeight="bold">(A ∪ B)'</text>

        {/* Bottom Formula Banner */}
        <rect x="30" y="244" width="460" height="26" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="261" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          KEY CARDINALITY FORMULA: n(A ∪ B) = n(A) + n(B) − n(A ∩ B) | For Disjoint Sets: n(A ∩ B) = 0
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 27. MATHEMATICS: PYTHAGORAS & TRIGONOMETRY
  // ══════════════════════════════════════════════════════════
  {
    id: 'maths-pythagoras-trigonometry',
    title: "Right-Angled Triangle, Pythagoras & SOH CAH TOA",
    caption: "Trigonometric ratios, hypotenuse-opposite-adjacent geometry, and standard special angles (30°, 45°, 60°).",
    category: 'Mathematics • Trigonometry',
    subjects: ['mathematics', 'further mathematics', 'physics'],
    topicKeywords: ['trigonometry', 'pythagoras', 'right angled triangle', 'soh cah toa', 'sine', 'cosine', 'tangent', 'trig ratios', 'hypotenuse'],
    labels: [
      { name: '1. Hypotenuse (c)', desc: 'The longest side, directly opposite the 90° right angle: c² = a² + b².', color: '#38BDF8' },
      { name: '2. Opposite (b)', desc: 'The side directly facing angle θ: sin θ = Opposite / Hypotenuse.', color: '#F43F5E' },
      { name: '3. Adjacent (a)', desc: 'The side adjacent to angle θ (between θ and 90°): cos θ = Adjacent / Hypotenuse.', color: '#34D399' },
      { name: '4. Tangent (tan θ)', desc: 'Ratio of Opposite to Adjacent: tan θ = sin θ / cos θ = b / a.', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PYTHAGORAS THEOREM &amp; SOH CAH TOA RATIOS</text>

        {/* Triangle Graphic */}
        <polygon points="60,220 280,220 280,60" fill="#001830" stroke="#38BDF8" strokeWidth="3" />
        {/* Right Angle Box */}
        <rect x="256" y="196" width="24" height="24" fill="none" stroke="#FFCC00" strokeWidth="2" />
        {/* Theta Arc */}
        <path d="M 100 220 A 40 40 0 0 0 94 200" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
        <text x="108" y="210" fill="#F43F5E" fontSize="13" fontWeight="bold">θ</text>

        {/* Labels on sides */}
        <text x="170" y="240" fill="#34D399" fontSize="12" fontWeight="bold" textAnchor="middle">Adjacent (a)</text>
        <text x="315" y="145" fill="#F43F5E" fontSize="12" fontWeight="bold">Opposite (b)</text>
        <text x="150" y="130" fill="#38BDF8" fontSize="12" fontWeight="bold" transform="rotate(-36 150 130)">Hypotenuse (c)</text>

        {/* Formula Boxes Right */}
        <g transform="translate(350, 48)">
          <rect x="0" y="0" width="145" height="42" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="72" y="18" fill="#FFCC00" fontSize="10" fontWeight="bold" textAnchor="middle">PYTHAGORAS</text>
          <text x="72" y="34" fill="#E2E8F0" fontSize="11" fontWeight="bold" textAnchor="middle">c² = a² + b²</text>

          <rect x="0" y="48" width="145" height="42" rx="6" fill="#001830" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="72" y="66" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">SOH</text>
          <text x="72" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">sin θ = Opp / Hyp</text>

          <rect x="0" y="96" width="145" height="42" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="72" y="114" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">CAH</text>
          <text x="72" y="130" fill="#E2E8F0" fontSize="10" textAnchor="middle">cos θ = Adj / Hyp</text>

          <rect x="0" y="144" width="145" height="42" rx="6" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="72" y="162" fill="#F43F5E" fontSize="10" fontWeight="bold" textAnchor="middle">TOA</text>
          <text x="72" y="178" fill="#E2E8F0" fontSize="10" textAnchor="middle">tan θ = Opp / Adj</text>
        </g>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#38BDF8" strokeWidth="1" />
        <text x="260" y="262" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          SPECIAL ANGLES: sin 30° = 0.5 | cos 60° = 0.5 | tan 45° = 1.0 | sin 45° = 1/√2 | cos 30° = √3/2
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 28. PHYSICS: PROJECTILE MOTION
  // ══════════════════════════════════════════════════════════
  {
    id: 'physics-projectile-motion',
    title: "2D Projectile Trajectory & Parabolic Ballistics",
    caption: "Initial velocity vectors, Angle of projection θ, Peak Height (H_max), Time of Flight (T), and Horizontal Range (R).",
    category: 'Physics • Mechanics & Ballistics',
    subjects: ['physics', 'further mathematics'],
    topicKeywords: ['projectile', 'projectile motion', 'trajectory', 'flight time', 'range', 'maximum height', '2d motion', 'launch angle'],
    labels: [
      { name: '1. Launch Velocity (u)', desc: 'Initial speed resolved into u_x = u cos θ (constant) and u_y = u sin θ (under gravity).', color: '#F43F5E' },
      { name: '2. Maximum Height (H_max)', desc: 'Highest vertical peak where v_y = 0: H = u² sin²θ / (2g).', color: '#38BDF8' },
      { name: '3. Time of Flight (T)', desc: 'Total airtime from launch to landing: T = 2u sin θ / g.', color: '#34D399' },
      { name: '4. Horizontal Range (R)', desc: 'Total horizontal displacement: R = u² sin(2θ) / g. Max range at θ = 45°.', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PROJECTILE MOTION: TRAJECTORY &amp; KINEMATICS</text>

        {/* Ground Line */}
        <line x1="40" y1="210" x2="480" y2="210" stroke="#64748B" strokeWidth="2.5" />

        {/* Trajectory Parabola */}
        <path d="M 50 210 Q 250 30 450 210" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 4" />

        {/* Launch Vector */}
        <line x1="50" y1="210" x2="110" y2="140" stroke="#F43F5E" strokeWidth="2.5" />
        <polygon points="110,140 98,145 105,155" fill="#F43F5E" />
        <text x="120" y="145" fill="#F43F5E" fontSize="12" fontWeight="bold">u</text>

        {/* Launch Angle Theta */}
        <path d="M 90 210 A 40 40 0 0 0 80 185" fill="none" stroke="#FFCC00" strokeWidth="2" />
        <text x="96" y="200" fill="#FFCC00" fontSize="11" fontWeight="bold">θ</text>

        {/* Peak Height Point & Vector */}
        <circle cx="250" cy="120" r="5" fill="#38BDF8" />
        <line x1="250" y1="120" x2="250" y2="210" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="255" y="165" fill="#38BDF8" fontSize="11" fontWeight="bold">H_max = u²sin²θ / 2g</text>

        {/* Range measurement arrow */}
        <line x1="50" y1="230" x2="450" y2="230" stroke="#FFCC00" strokeWidth="2" />
        <polygon points="50,230 60,226 60,234" fill="#FFCC00" />
        <polygon points="450,230 440,226 440,234" fill="#FFCC00" />
        <text x="250" y="226" fill="#FFCC00" fontSize="11" fontWeight="bold" textAnchor="middle">Horizontal Range R = u² sin(2θ) / g</text>

        {/* Velocity component callouts */}
        <rect x="330" y="50" width="160" height="60" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
        <text x="410" y="68" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">VELOCITY COMPONENTS</text>
        <text x="410" y="85" fill="#E2E8F0" fontSize="9" textAnchor="middle">u_x = u cos θ (constant)</text>
        <text x="410" y="100" fill="#E2E8F0" fontSize="9" textAnchor="middle">u_y = u sin θ − gt (accelerates)</text>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#38BDF8" strokeWidth="1" />
        <text x="260" y="262" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          EXAM TRAP: Air resistance is assumed zero. At peak height, vertical velocity v_y = 0, but v_x remains u cos θ!
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 29. CHEMISTRY: REDOX & GALVANIC CELL
  // ══════════════════════════════════════════════════════════
  {
    id: 'chemistry-redox-galvanic-cell',
    title: "Daniell Galvanic Cell & Redox Potential Flow",
    caption: "Zinc Anode (Oxidation), Copper Cathode (Reduction), KNO₃ Salt Bridge, and external electron flow from Anode to Cathode.",
    category: 'Chemistry • Electrochemistry',
    subjects: ['chemistry', 'basic science', 'physics'],
    topicKeywords: ['redox', 'galvanic cell', 'electrochemical cell', 'daniell cell', 'anode', 'cathode', 'salt bridge', 'half cell', 'oxidation reduction', 'redox reactions'],
    labels: [
      { name: '1. Zinc Anode (-)', desc: 'Oxidation occurs: Zn(s) → Zn²⁺(aq) + 2e⁻. Mass decreases over time.', color: '#94A3B8' },
      { name: '2. Copper Cathode (+)', desc: 'Reduction occurs: Cu²⁺(aq) + 2e⁻ → Cu(s). Mass increases over time.', color: '#F97316' },
      { name: '3. Salt Bridge (KNO₃)', desc: 'Maintains electrical neutrality by migrating K⁺ to cathode and NO₃⁻ to anode.', color: '#FFCC00' },
      { name: '4. Cell Voltage (E°)', desc: 'Standard electromotive force: E°cell = E°cathode - E°anode = +0.34 - (-0.76) = +1.10 V.', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">DANIELL GALVANIC CELL (ELECTROCHEMISTRY)</text>

        {/* Left Beaker (Anode) */}
        <rect x="70" y="100" width="120" height="110" rx="6" fill="#002444" stroke="#38BDF8" strokeWidth="2" />
        <text x="130" y="195" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">1.0 M ZnSO₄ (aq)</text>
        {/* Zinc Plate */}
        <rect x="105" y="70" width="22" height="120" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="1.5" />
        <text x="116" y="60" fill="#CBD5E1" fontSize="10" fontWeight="bold" textAnchor="middle">Zn Anode (-)</text>
        <text x="116" y="140" fill="#001028" fontSize="8" fontWeight="bold" textAnchor="middle">Oxidation</text>

        {/* Right Beaker (Cathode) */}
        <rect x="330" y="100" width="120" height="110" rx="6" fill="#002820" stroke="#34D399" strokeWidth="2" />
        <text x="390" y="195" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">1.0 M CuSO₄ (aq)</text>
        {/* Copper Plate */}
        <rect x="395" y="70" width="22" height="120" fill="#EA580C" stroke="#FDBA74" strokeWidth="1.5" />
        <text x="406" y="60" fill="#FDBA74" fontSize="10" fontWeight="bold" textAnchor="middle">Cu Cathode (+)</text>
        <text x="406" y="140" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">Reduction</text>

        {/* Salt Bridge */}
        <path d="M 160 120 C 160 60, 360 60, 360 120" fill="none" stroke="#FFCC00" strokeWidth="14" strokeLinecap="round" />
        <path d="M 160 120 C 160 60, 360 60, 360 120" fill="none" stroke="#001830" strokeWidth="8" strokeLinecap="round" />
        <text x="260" y="80" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">Salt Bridge (KNO₃)</text>

        {/* Wire & Voltmeter */}
        <path d="M 116 70 L 116 38 L 406 38 L 406 70" fill="none" stroke="#F43F5E" strokeWidth="2" />
        <circle cx="260" cy="38" r="14" fill="#001028" stroke="#F43F5E" strokeWidth="2" />
        <text x="260" y="42" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">1.10 V</text>

        {/* Electron Flow Arrow */}
        <text x="180" y="32" fill="#38BDF8" fontSize="9" fontWeight="bold">e⁻ flow →</text>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="262" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          AN OX &amp; RED CAT: Anode = Oxidation (Loss of e⁻) | Cathode = Reduction (Gain of e⁻)
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 30. CHEMISTRY: ACIDS, BASES & pH
  // ══════════════════════════════════════════════════════════
  {
    id: 'chemistry-acids-bases-ph',
    title: "Acids, Bases, pH Spectrum & Neutralization",
    caption: "Hydronium [H⁺] vs Hydroxide [OH⁻] concentrations, pH 0-14 scale, and indicator color transitions.",
    category: 'Chemistry • Inorganic Chemistry',
    subjects: ['chemistry', 'basic science'],
    topicKeywords: ['acid', 'acids', 'base', 'bases', 'ph', 'ph scale', 'titration', 'indicators', 'neutralization', 'alkali'],
    labels: [
      { name: '1. Acidic Range (pH 0 - 6)', desc: '[H⁺] > 10⁻⁷ M. Turns blue litmus red, sour taste, reacts with carbonates to liberate CO₂.', color: '#EF4444' },
      { name: '2. Neutral Point (pH 7)', desc: '[H⁺] = [OH⁻] = 10⁻⁷ M at 25°C. Pure water and neutral salts (e.g. NaCl).', color: '#22C55E' },
      { name: '3. Alkaline Range (pH 8 - 14)', desc: '[OH⁻] > 10⁻⁷ M. Turns red litmus blue, slippery feel, neutralizes acids to form salt and water.', color: '#3B82F6' },
      { name: '4. Common Indicators', desc: 'Litmus (Red/Blue), Methyl Orange (Red/Yellow at pH 3.7), Phenolphthalein (Colorless/Pink at pH 8.3).', color: '#FFCC00' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">THE pH SPECTRUM &amp; INDICATOR BEHAVIOR</text>

        <defs>
          <linearGradient id="sciPhGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="25%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#16A34A" />
            <stop offset="75%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>
        </defs>

        {/* Gradient Bar */}
        <rect x="40" y="60" width="440" height="40" rx="8" fill="url(#sciPhGrad)" />
        {/* Tick marks */}
        <line x1="40" y1="105" x2="40" y2="115" stroke="#FFFFFF" strokeWidth="2" />
        <text x="40" y="130" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">0</text>
        <line x1="260" y1="105" x2="260" y2="115" stroke="#FFFFFF" strokeWidth="2" />
        <text x="260" y="130" fill="#22C55E" fontSize="11" fontWeight="bold" textAnchor="middle">7 (Neutral)</text>
        <line x1="480" y1="105" x2="480" y2="115" stroke="#FFFFFF" strokeWidth="2" />
        <text x="480" y="130" fill="#A855F7" fontSize="11" fontWeight="bold" textAnchor="middle">14</text>

        {/* Descriptive blocks */}
        <rect x="40" y="145" width="135" height="75" rx="6" fill="#001830" stroke="#EF4444" strokeWidth="1.5" />
        <text x="107" y="165" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STRONG ACID</text>
        <text x="107" y="182" fill="#E2E8F0" fontSize="9" textAnchor="middle">HCl, H₂SO₄, HNO₃</text>
        <text x="107" y="198" fill="#FCA5A5" fontSize="8" textAnchor="middle">[H⁺] &gt;&gt; [OH⁻]</text>
        <text x="107" y="210" fill="#FCA5A5" fontSize="8" textAnchor="middle">Litmus: RED</text>

        <rect x="192" y="145" width="135" height="75" rx="6" fill="#001830" stroke="#22C55E" strokeWidth="1.5" />
        <text x="259" y="165" fill="#22C55E" fontSize="11" fontWeight="bold" textAnchor="middle">NEUTRAL</text>
        <text x="259" y="182" fill="#E2E8F0" fontSize="9" textAnchor="middle">Pure H₂O, NaCl</text>
        <text x="259" y="198" fill="#86EFAC" fontSize="8" textAnchor="middle">[H⁺] = [OH⁻] = 10⁻⁷</text>
        <text x="259" y="210" fill="#86EFAC" fontSize="8" textAnchor="middle">pH = 7.0 at 25°C</text>

        <rect x="345" y="145" width="135" height="75" rx="6" fill="#001830" stroke="#A855F7" strokeWidth="1.5" />
        <text x="412" y="165" fill="#A855F7" fontSize="11" fontWeight="bold" textAnchor="middle">STRONG BASE</text>
        <text x="412" y="182" fill="#E2E8F0" fontSize="9" textAnchor="middle">NaOH, KOH, Ca(OH)₂</text>
        <text x="412" y="198" fill="#D8B4FE" fontSize="8" textAnchor="middle">[OH⁻] &gt;&gt; [H⁺]</text>
        <text x="412" y="210" fill="#D8B4FE" fontSize="8" textAnchor="middle">Litmus: BLUE</text>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#38BDF8" strokeWidth="1" />
        <text x="260" y="262" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          TITRATION FORMULA: (C_A × V_A) / (C_B × V_B) = n_A / n_B | pH = -log₁₀[H⁺]
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 31. BIOLOGY: DIGESTIVE SYSTEM
  // ══════════════════════════════════════════════════════════
  {
    id: 'biology-human-digestive-system',
    title: "Human Alimentary Canal & Digestive Enzyme Map",
    caption: "Step-by-step chemical breakdown: Salivary Amylase, Gastric Pepsin/HCl, Bile emulsification, Pancreatic Lipase & Trypsin, and Ileum villi absorption.",
    category: 'Biology • Human Physiology',
    subjects: ['biology', 'basic science', 'health science', 'phe'],
    topicKeywords: ['digestive', 'digestive system', 'digestion', 'alimentary canal', 'stomach', 'intestine', 'enzyme', 'enzymes', 'nutrition', 'digestive enzymes'],
    labels: [
      { name: '1. Mouth / Saliva', desc: 'Ptyalin (salivary amylase) digests cooked starch into maltose at neutral pH 6.8.', color: '#38BDF8' },
      { name: '2. Stomach (Gastric Juice)', desc: 'Hydrochloric acid (pH 1.5-2.0) kills microbes; Pepsin converts proteins into peptones.', color: '#F43F5E' },
      { name: '3. Liver & Pancreas', desc: 'Bile emulsifies fats (physical breakdown); Pancreas secretes Trypsin, Amylase, and Lipase.', color: '#FFCC00' },
      { name: '4. Small Intestine (Ileum)', desc: 'Final digestion by Erepsin, Maltase, Lactase; microvilli absorb glucose and amino acids into blood.', color: '#34D399' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">HUMAN ALIMENTARY CANAL &amp; ENZYMATIC PATHWAY</text>

        {/* Flowchart Boxes */}
        <g transform="translate(30, 48)">
          <rect x="0" y="0" width="105" height="85" rx="8" fill="#001830" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="52" y="20" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">1. MOUTH</text>
          <text x="52" y="40" fill="#E2E8F0" fontSize="8" textAnchor="middle">• Salivary Amylase</text>
          <text x="52" y="55" fill="#BAE6FD" fontSize="8" textAnchor="middle">Starch → Maltose</text>
          <text x="52" y="72" fill="#94A3B8" fontSize="7.5" textAnchor="middle">pH ~ 6.8</text>

          <line x1="105" y1="42" x2="120" y2="42" stroke="#FFCC00" strokeWidth="2" />

          <rect x="120" y="0" width="105" height="85" rx="8" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="172" y="20" fill="#F43F5E" fontSize="10" fontWeight="bold" textAnchor="middle">2. STOMACH</text>
          <text x="172" y="40" fill="#E2E8F0" fontSize="8" textAnchor="middle">• Pepsin + HCl</text>
          <text x="172" y="55" fill="#FECDD3" fontSize="8" textAnchor="middle">Protein → Peptones</text>
          <text x="172" y="72" fill="#94A3B8" fontSize="7.5" textAnchor="middle">pH ~ 1.5 (Acidic)</text>

          <line x1="225" y1="42" x2="240" y2="42" stroke="#FFCC00" strokeWidth="2" />

          <rect x="240" y="0" width="105" height="85" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="292" y="20" fill="#FFCC00" fontSize="10" fontWeight="bold" textAnchor="middle">3. DUODENUM</text>
          <text x="292" y="40" fill="#E2E8F0" fontSize="8" textAnchor="middle">• Bile (Emulsifies fats)</text>
          <text x="292" y="55" fill="#FEF08A" fontSize="8" textAnchor="middle">• Pancreatic Lipase</text>
          <text x="292" y="72" fill="#94A3B8" fontSize="7.5" textAnchor="middle">pH ~ 8.0 (Alkaline)</text>

          <line x1="345" y1="42" x2="360" y2="42" stroke="#FFCC00" strokeWidth="2" />

          <rect x="360" y="0" width="100" height="85" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="410" y="20" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">4. ILEUM</text>
          <text x="410" y="40" fill="#E2E8F0" fontSize="8" textAnchor="middle">• Erepsin (Peptides)</text>
          <text x="410" y="55" fill="#A7F3D0" fontSize="8" textAnchor="middle">• Villi Absorption</text>
          <text x="410" y="72" fill="#94A3B8" fontSize="7.5" textAnchor="middle">Glucose &amp; Amino Acids</text>
        </g>

        {/* End Products Matrix */}
        <g transform="translate(40, 155)">
          <rect x="0" y="0" width="440" height="75" rx="8" fill="#001830" stroke="#00BCD4" strokeWidth="1" />
          <text x="220" y="22" fill="#00BCD4" fontSize="10" fontWeight="bold" textAnchor="middle">FINAL DIGESTION END-PRODUCTS ABSORBED BY VILLI</text>
          <text x="30" y="45" fill="#38BDF8" fontSize="9" fontWeight="bold">Carbohydrates → Glucose</text>
          <text x="180" y="45" fill="#F43F5E" fontSize="9" fontWeight="bold">Proteins → Amino Acids</text>
          <text x="320" y="45" fill="#FFCC00" fontSize="9" fontWeight="bold">Fats → Fatty Acids &amp; Glycerol</text>
          <text x="220" y="65" fill="#94A3B8" fontSize="8" textAnchor="middle">Lacteals absorb fatty acids; Blood capillaries absorb glucose &amp; amino acids directly.</text>
        </g>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="262" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">
          WAEC TIP: Bile contains NO enzymes — its action is purely physical emulsification of lipid droplets!
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 32. BIOLOGY: PHOTOSYNTHESIS & CHLOROPLAST
  // ══════════════════════════════════════════════════════════
  {
    id: 'biology-photosynthesis-chloroplast',
    title: "Chloroplast Ultrastructure & Photosynthesis Cycle",
    caption: "Thylakoid Light-dependent Photolysis (producing ATP, NADPH, O₂) and Stroma Light-independent Calvin Cycle (synthesizing Glucose).",
    category: 'Biology • Plant Physiology',
    subjects: ['biology', 'agricultural science', 'agriculture', 'basic science'],
    topicKeywords: ['photosynthesis', 'chloroplast', 'chlorophyll', 'light reaction', 'calvin cycle', 'dark reaction', 'photolysis', 'stomata'],
    labels: [
      { name: '1. Light Reaction (Thylakoids)', desc: 'Solar photons split water (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂↑. Generates ATP & NADPH.', color: '#38BDF8' },
      { name: '2. Dark Reaction (Stroma)', desc: 'Calvin cycle fixes CO₂ with RuBisCO using ATP and NADPH to synthesize glucose (C₆H₁₂O₆).', color: '#34D399' },
      { name: '3. Stomata Regulation', desc: 'Guard cells control CO₂ intake and transpiration water loss based on turgor pressure.', color: '#FFCC00' },
      { name: '4. Factors Affecting Rate', desc: 'Light intensity, CO₂ concentration, and temperature (enzyme-limited above 40°C).', color: '#F43F5E' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PHOTOSYNTHESIS: LIGHT &amp; DARK REACTIONS IN CHLOROPLAST</text>

        {/* Chloroplast Outer Boundary */}
        <ellipse cx="260" cy="135" rx="220" ry="85" fill="#001830" stroke="#16A34A" strokeWidth="2.5" />

        {/* Left Side: Thylakoids (Light Reaction) */}
        <g transform="translate(80, 80)">
          <rect x="0" y="0" width="140" height="95" rx="8" fill="#002444" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="70" y="20" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">LIGHT REACTION</text>
          <text x="70" y="34" fill="#94A3B8" fontSize="8" textAnchor="middle">(In Thylakoids / Grana)</text>
          <text x="70" y="52" fill="#E2E8F0" fontSize="8.5" textAnchor="middle">Photolysis of H₂O</text>
          <text x="70" y="68" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">H₂O → O₂ (released) + e⁻</text>
          <text x="70" y="84" fill="#FFCC00" fontSize="8" textAnchor="middle">Generates ATP &amp; NADPH</text>
        </g>

        {/* Arrow linking Light to Dark */}
        <g transform="translate(230, 110)">
          <line x1="0" y1="0" x2="50" y2="0" stroke="#FFCC00" strokeWidth="2" />
          <polygon points="50,0 42,-4 42,4" fill="#FFCC00" />
          <text x="25" y="-8" fill="#FFCC00" fontSize="8" fontWeight="bold" textAnchor="middle">ATP + NADPH</text>
          <line x1="50" y1="25" x2="0" y2="25" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="0,25 8,21 8,29" fill="#94A3B8" />
          <text x="25" y="38" fill="#94A3B8" fontSize="7.5" textAnchor="middle">ADP + NADP⁺</text>
        </g>

        {/* Right Side: Calvin Cycle (Dark Reaction) */}
        <g transform="translate(295, 80)">
          <rect x="0" y="0" width="145" height="95" rx="8" fill="#002820" stroke="#34D399" strokeWidth="1.5" />
          <text x="72" y="20" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">DARK REACTION</text>
          <text x="72" y="34" fill="#94A3B8" fontSize="8" textAnchor="middle">(Calvin Cycle in Stroma)</text>
          <text x="72" y="52" fill="#E2E8F0" fontSize="8.5" textAnchor="middle">CO₂ Fixation (RuBisCO)</text>
          <text x="72" y="68" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">Produces C₆H₁₂O₆ (Glucose)</text>
          <text x="72" y="84" fill="#A7F3D0" fontSize="8" textAnchor="middle">Independent of light</text>
        </g>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="262" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">
          OVERALL CHEMICAL EQUATION: 6CO₂ + 6H₂O ──(Light &amp; Chlorophyll)──&gt; C₆H₁₂O₆ + 6O₂↑
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 33. ECONOMICS: PRODUCTION POSSIBILITY CURVE (PPC)
  // ══════════════════════════════════════════════════════════
  {
    id: 'economics-production-possibility-curve',
    title: "Production Possibility Curve (PPC) & Opportunity Cost",
    caption: "Economic scarcity, efficiency frontier, underutilized capacity, unattainable points, and increasing marginal opportunity cost.",
    category: 'Economics • Microeconomic Foundations',
    subjects: ['economics', 'commerce', 'business'],
    topicKeywords: ['production possibility', 'ppc', 'ppf', 'opportunity cost', 'scarcity', 'attainable', 'economic efficiency', 'production possibility curve'],
    labels: [
      { name: '1. Point on Curve (A, B)', desc: 'Productive efficiency: all national resources are fully employed with modern technology.', color: '#34D399' },
      { name: '2. Point Inside Curve (C)', desc: 'Inefficient underemployment or recession: resources are wasted or idle.', color: '#CA8A04' },
      { name: '3. Point Outside Curve (D)', desc: 'Unattainable given current resources; can only be reached through economic growth or capital investment.', color: '#F43F5E' },
      { name: '4. Concave Bowed Shape', desc: 'Reflects the Law of Increasing Opportunity Cost (resources are not equally adaptable).', color: '#38BDF8' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PRODUCTION POSSIBILITY CURVE &amp; SCARCITY</text>

        {/* Axes */}
        <line x1="60" y1="210" x2="320" y2="210" stroke="#94A3B8" strokeWidth="2" />
        <line x1="60" y1="210" x2="60" y2="50" stroke="#94A3B8" strokeWidth="2" />
        <text x="50" y="46" fill="#38BDF8" fontSize="10" fontWeight="bold">Capital Goods</text>
        <text x="325" y="214" fill="#38BDF8" fontSize="10" fontWeight="bold">Consumer Goods</text>

        {/* PPC Arc */}
        <path d="M 60 65 Q 200 80 300 210" fill="none" stroke="#38BDF8" strokeWidth="3" />

        {/* Points */}
        <circle cx="160" cy="115" r="5" fill="#34D399" />
        <text x="170" y="112" fill="#34D399" fontSize="10" fontWeight="bold">A (Efficient)</text>

        <circle cx="230" cy="155" r="5" fill="#34D399" />
        <text x="240" y="152" fill="#34D399" fontSize="10" fontWeight="bold">B (Efficient)</text>

        <circle cx="130" cy="165" r="5" fill="#FFCC00" />
        <text x="140" y="168" fill="#FFCC00" fontSize="10" fontWeight="bold">C (Inefficient / Idle)</text>

        <circle cx="260" cy="85" r="5" fill="#F43F5E" />
        <text x="270" y="85" fill="#F43F5E" fontSize="10" fontWeight="bold">D (Unattainable)</text>

        {/* Explanatory Cards on Right */}
        <g transform="translate(350, 48)">
          <rect x="0" y="0" width="140" height="48" rx="6" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="70" y="18" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">ON THE CURVE</text>
          <text x="70" y="34" fill="#E2E8F0" fontSize="8" textAnchor="middle">Full employment &amp; efficiency</text>

          <rect x="0" y="56" width="140" height="48" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="70" y="74" fill="#FFCC00" fontSize="9" fontWeight="bold" textAnchor="middle">INSIDE CURVE</text>
          <text x="70" y="90" fill="#E2E8F0" fontSize="8" textAnchor="middle">Waste / Unemployment</text>

          <rect x="0" y="112" width="140" height="48" rx="6" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="70" y="130" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">OUTSIDE CURVE</text>
          <text x="70" y="146" fill="#E2E8F0" fontSize="8" textAnchor="middle">Unattainable with present tech</text>
        </g>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#38BDF8" strokeWidth="1" />
        <text x="260" y="262" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          OPPORTUNITY COST: To produce more Consumer Goods, a country MUST sacrifice some Capital Goods!
        </text>
      </svg>
    )
  },

  // ══════════════════════════════════════════════════════════
  // 34. ECONOMICS: ELASTICITY OF DEMAND
  // ══════════════════════════════════════════════════════════
  {
    id: 'economics-elasticity-of-demand',
    title: "Price Elasticity of Demand (PED) Spectrum",
    caption: "Slope analysis for Perfectly Inelastic (Ed = 0), Relatively Inelastic (Ed < 1), Unitary (Ed = 1), and Relatively Elastic (Ed > 1) demand.",
    category: 'Economics • Price Theory',
    subjects: ['economics', 'commerce', 'marketing'],
    topicKeywords: ['elasticity', 'price elasticity', 'elasticity of demand', 'ped', 'inelastic', 'elastic', 'unitary elasticity', 'demand elasticity'],
    labels: [
      { name: '1. Perfectly Inelastic (Ed = 0)', desc: 'Vertical demand line. Quantity demanded does not change at all regardless of price (e.g. insulin).', color: '#F43F5E' },
      { name: '2. Inelastic Demand (|Ed| < 1)', desc: 'Steep demand curve. %Δ Quantity < %Δ Price (e.g. food essentials, petrol, salt).', color: '#F97316' },
      { name: '3. Unitary Elastic (|Ed| = 1)', desc: 'Rectangular hyperbola. %Δ Quantity = %Δ Price. Total revenue remains constant.', color: '#34D399' },
      { name: '4. Elastic Demand (|Ed| > 1)', desc: 'Flatter demand curve. %Δ Quantity > %Δ Price (e.g. luxury items with many close substitutes).', color: '#38BDF8' }
    ],
    render: () => (
      <svg viewBox="0 0 520 280" className="w-full max-h-[300px] select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="520" height="280" rx="16" fill="#001028" stroke="#001020" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PRICE ELASTICITY OF DEMAND (PED) SPECTRUM</text>

        {/* 4 Comparative Mini Graphs */}
        {/* Graph 1: Inelastic */}
        <g transform="translate(35, 55)">
          <rect x="0" y="0" width="105" height="145" rx="8" fill="#001830" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="52" y="20" fill="#F43F5E" fontSize="9.5" fontWeight="bold" textAnchor="middle">INELASTIC (|Ed| &lt; 1)</text>
          <line x1="20" y1="115" x2="90" y2="115" stroke="#64748B" strokeWidth="1" />
          <line x1="20" y1="115" x2="20" y2="40" stroke="#64748B" strokeWidth="1" />
          {/* Steep slope */}
          <line x1="35" y1="45" x2="65" y2="110" stroke="#F43F5E" strokeWidth="2.5" />
          <text x="52" y="132" fill="#E2E8F0" fontSize="8" textAnchor="middle">Steep: %ΔQ &lt; %ΔP</text>
        </g>

        {/* Graph 2: Unitary */}
        <g transform="translate(150, 55)">
          <rect x="0" y="0" width="105" height="145" rx="8" fill="#001830" stroke="#34D399" strokeWidth="1.5" />
          <text x="52" y="20" fill="#34D399" fontSize="9.5" fontWeight="bold" textAnchor="middle">UNITARY (|Ed| = 1)</text>
          <line x1="20" y1="115" x2="90" y2="115" stroke="#64748B" strokeWidth="1" />
          <line x1="20" y1="115" x2="20" y2="40" stroke="#64748B" strokeWidth="1" />
          {/* 45 degree slope */}
          <line x1="28" y1="48" x2="82" y2="108" stroke="#34D399" strokeWidth="2.5" />
          <text x="52" y="132" fill="#E2E8F0" fontSize="8" textAnchor="middle">%ΔQ = %ΔP</text>
        </g>

        {/* Graph 3: Elastic */}
        <g transform="translate(265, 55)">
          <rect x="0" y="0" width="105" height="145" rx="8" fill="#001830" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="52" y="20" fill="#38BDF8" fontSize="9.5" fontWeight="bold" textAnchor="middle">ELASTIC (|Ed| &gt; 1)</text>
          <line x1="20" y1="115" x2="90" y2="115" stroke="#64748B" strokeWidth="1" />
          <line x1="20" y1="115" x2="20" y2="40" stroke="#64748B" strokeWidth="1" />
          {/* Flat slope */}
          <line x1="25" y1="65" x2="88" y2="95" stroke="#38BDF8" strokeWidth="2.5" />
          <text x="52" y="132" fill="#E2E8F0" fontSize="8" textAnchor="middle">Flatter: %ΔQ &gt; %ΔP</text>
        </g>

        {/* Graph 4: Perfectly Inelastic */}
        <g transform="translate(380, 55)">
          <rect x="0" y="0" width="105" height="145" rx="8" fill="#001830" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="52" y="20" fill="#FFCC00" fontSize="9.5" fontWeight="bold" textAnchor="middle">PERFECT (Ed = 0)</text>
          <line x1="20" y1="115" x2="90" y2="115" stroke="#64748B" strokeWidth="1" />
          <line x1="20" y1="115" x2="20" y2="40" stroke="#64748B" strokeWidth="1" />
          {/* Vertical line */}
          <line x1="55" y1="42" x2="55" y2="115" stroke="#FFCC00" strokeWidth="2.5" />
          <text x="52" y="132" fill="#E2E8F0" fontSize="8" textAnchor="middle">Vertical: ΔQ = 0</text>
        </g>

        {/* Bottom Formula Banner */}
        <rect x="30" y="246" width="460" height="24" rx="6" fill="#001830" stroke="#FFCC00" strokeWidth="1" />
        <text x="260" y="262" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          FORMULA: Ed = (%Δ Quantity Demanded) / (%Δ Price) = (ΔQ / Q₁) ÷ (ΔP / P₁)
        </text>
      </svg>
    )
  }
];

/**
 * Strict Topic Matching Engine:
 * 1. Checks that the note's subject matches diagram.subjects.
 * 2. Checks that the note's topic or subtopic STRICTLY contains at least one of the diagram's designated topicKeywords.
 * 3. If no topic match is found, returns NULL. Never falls back to arbitrary diagrams.
 */
export function findScientificDiagram(subject: string, topic: string, subtopic = ''): ScientificDiagram | null {
  if (!subject || !topic) return null;
  const sLower = subject.toLowerCase().trim();
  const tLower = topic.toLowerCase().trim();
  const subLower = subtopic.toLowerCase().trim();
  const combined = `${tLower} ${subLower}`;

  // 1. Filter diagrams belonging to this subject
  const subjectDiagrams = SCIENTIFIC_DIAGRAMS.filter(d =>
    d.subjects.some(s => sLower.includes(s) || s.includes(sLower))
  );

  if (subjectDiagrams.length === 0) {
    return null;
  }

  // 2. Strict topic matching: Diagram MUST have a topicKeyword that matches the note's topic or subtopic!
  let bestDiagram: ScientificDiagram | null = null;
  let maxScore = 0;

  for (const diagram of subjectDiagrams) {
    let score = 0;
    let hasStrictTopicMatch = false;

    for (const kw of diagram.topicKeywords) {
      const kwLower = kw.toLowerCase().trim();
      // Match against topic or subtopic
      if (tLower.includes(kwLower)) {
        score += kwLower.length >= 6 ? 12 : 7;
        hasStrictTopicMatch = true;
      } else if (subLower.includes(kwLower)) {
        score += kwLower.length >= 6 ? 10 : 5;
        hasStrictTopicMatch = true;
      } else if (combined.includes(kwLower)) {
        score += 6;
        hasStrictTopicMatch = true;
      }
    }

    if (hasStrictTopicMatch && score > maxScore) {
      maxScore = score;
      bestDiagram = diagram;
    }
  }

  // STRICT REQUIREMENT: Only return if a strict topic match was found!
  if (bestDiagram && maxScore > 0) {
    return bestDiagram;
  }

  // Return null if topic does not match any diagram
  return null;
}
