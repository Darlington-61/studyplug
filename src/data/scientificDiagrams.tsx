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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CONCORD & SUBJECT-VERB AGREEMENT DECISION TREE</text>

        <rect x="180" y="38" width="160" height="30" rx="8" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1.5" />
        <text x="260" y="57" fill="#FFEA79" fontSize="11" fontWeight="800" textAnchor="middle">IDENTIFY THE SUBJECT</text>

        <line x1="210" y1="68" x2="90" y2="95" stroke="#94A3B8" strokeWidth="2" />
        <line x1="260" y1="68" x2="260" y2="95" stroke="#94A3B8" strokeWidth="2" />
        <line x1="310" y1="68" x2="430" y2="95" stroke="#94A3B8" strokeWidth="2" />

        {/* Branch 1 */}
        <g transform="translate(15, 95)">
          <rect x="0" y="0" width="150" height="140" rx="8" fill="#082318" stroke="#34D399" strokeWidth="1.5" />
          <text x="75" y="20" fill="#34D399" fontSize="10" fontWeight="900" textAnchor="middle">BASIC CONCORD</text>
          <line x1="10" y1="28" x2="140" y2="28" stroke="#1f4e39" strokeWidth="1" />
          <rect x="8" y="34" width="134" height="44" rx="5" fill="#05140e" />
          <text x="14" y="48" fill="#38BDF8" fontSize="9" fontWeight="bold">Singular Subject:</text>
          <text x="14" y="66" fill="#E2E8F0" fontSize="9">The boy <tspan fill="#34D399" fontWeight="bold">RUNS</tspan> (-s)</text>
          <rect x="8" y="84" width="134" height="44" rx="5" fill="#05140e" />
          <text x="14" y="98" fill="#F43F5E" fontSize="9" fontWeight="bold">Plural Subject:</text>
          <text x="14" y="116" fill="#E2E8F0" fontSize="9">The boys <tspan fill="#38BDF8" fontWeight="bold">RUN</tspan> (base)</text>
        </g>

        {/* Branch 2 */}
        <g transform="translate(185, 95)">
          <rect x="0" y="0" width="150" height="140" rx="8" fill="#082318" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="75" y="20" fill="#00BCD4" fontSize="10" fontWeight="900" textAnchor="middle">PROXIMITY RULE</text>
          <line x1="10" y1="28" x2="140" y2="28" stroke="#1f4e39" strokeWidth="1" />
          <text x="75" y="40" fill="#FFEA79" fontSize="8" fontWeight="bold" textAnchor="middle">Either..or / Neither..nor</text>
          <rect x="8" y="46" width="134" height="38" rx="5" fill="#05140e" />
          <text x="12" y="58" fill="#E2E8F0" fontSize="8">Neither John nor the</text>
          <text x="12" y="72" fill="#38BDF8" fontSize="8" fontWeight="bold">students <tspan fill="#34D399">ARE</tspan> here</text>
          <rect x="8" y="88" width="134" height="38" rx="5" fill="#05140e" />
          <text x="12" y="100" fill="#E2E8F0" fontSize="8">Neither students nor</text>
          <text x="12" y="114" fill="#F43F5E" fontSize="8" fontWeight="bold">the teacher <tspan fill="#34D399">IS</tspan> here</text>
        </g>

        {/* Branch 3 */}
        <g transform="translate(355, 95)">
          <rect x="0" y="0" width="150" height="140" rx="8" fill="#082318" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="75" y="20" fill="#FFCC00" fontSize="10" fontWeight="900" textAnchor="middle">JAMB EXAM TRAPS</text>
          <line x1="10" y1="28" x2="140" y2="28" stroke="#1f4e39" strokeWidth="1" />
          <rect x="8" y="34" width="134" height="44" rx="5" fill="#05140e" />
          <text x="12" y="48" fill="#FFCC00" fontSize="8" fontWeight="bold">"Many a" + Sg Noun:</text>
          <text x="12" y="64" fill="#E2E8F0" fontSize="8">Many a boy <tspan fill="#34D399" fontWeight="bold">WAS</tspan> (Sg!)</text>
          <rect x="8" y="84" width="134" height="46" rx="5" fill="#05140e" />
          <text x="12" y="96" fill="#F43F5E" fontSize="8" fontWeight="bold">Parenthetical Phrases:</text>
          <text x="12" y="110" fill="#E2E8F0" fontSize="8">"The king, as well as</text>
          <text x="12" y="122" fill="#E2E8F0" fontSize="8">his chiefs, <tspan fill="#34D399" fontWeight="bold">IS</tspan> coming"</text>
        </g>

        <rect x="30" y="246" width="460" height="24" rx="6" fill="#0C2E20" stroke="#C4823F" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">ORAL ENGLISH VOWEL QUADRILATERAL & STRESS RULES</text>

        <g transform="translate(30, 45)">
          <polygon points="20,20 220,20 180,170 50,170" fill="#082318" stroke="#00BCD4" strokeWidth="2" />
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
          <rect x="0" y="0" width="210" height="175" rx="10" fill="#0C2E20" stroke="#C4823F" strokeWidth="1.5" />
          <text x="105" y="24" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">JAMB STRESS SHIFT RULES</text>
          <line x1="15" y1="32" x2="195" y2="32" stroke="#1f4e39" strokeWidth="1" />

          <rect x="12" y="40" width="186" height="38" rx="6" fill="#05140e" />
          <text x="20" y="54" fill="#34D399" fontSize="9" fontWeight="bold">Noun: 1st Syllable</text>
          <text x="20" y="68" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">EX</tspan>-port, <tspan fill="#FFCC00" fontWeight="bold">RE</tspan>-cord, <tspan fill="#FFCC00" fontWeight="bold">CON</tspan>-duct</text>

          <rect x="12" y="84" width="186" height="38" rx="6" fill="#05140e" />
          <text x="20" y="98" fill="#F43F5E" fontSize="9" fontWeight="bold">Verb: 2nd Syllable</text>
          <text x="20" y="112" fill="#E2E8F0" fontSize="9">ex-<tspan fill="#FFCC00" fontWeight="bold">PORT</tspan>, re-<tspan fill="#FFCC00" fontWeight="bold">RECORD</tspan>, con-<tspan fill="#FFCC00" fontWeight="bold">DUCT</tspan></text>

          <rect x="12" y="128" width="186" height="38" rx="6" fill="#05140e" />
          <text x="20" y="142" fill="#00BCD4" fontSize="9" fontWeight="bold">-tion, -ic, -sion Words</text>
          <text x="20" y="156" fill="#E2E8F0" fontSize="8">Stress penultimate: edu-<tspan fill="#FFCC00" fontWeight="bold">CA</tspan>-tion</text>
        </g>

        <rect x="30" y="240" width="460" height="26" rx="6" fill="#082318" stroke="#00BCD4" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">FIGURES OF SPEECH & LITERARY DEVICES MATRIX</text>

        <g transform="translate(25, 45)">
          {/* Card 1 */}
          <rect x="0" y="0" width="225" height="85" rx="8" fill="#082318" stroke="#00BCD4" strokeWidth="1.5" />
          <text x="15" y="22" fill="#00BCD4" fontSize="11" fontWeight="800">1. COMPARISON</text>
          <text x="15" y="42" fill="#E2E8F0" fontSize="9"><tspan fill="#34D399" fontWeight="bold">Simile:</tspan> As brave as a lion (uses like/as)</text>
          <text x="15" y="60" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">Metaphor:</tspan> The camel is the ship of desert</text>
          <text x="15" y="76" fill="#94A3B8" fontSize="8">Personification: Attributing life to inanimate objects</text>

          {/* Card 2 */}
          <rect x="245" y="0" width="225" height="85" rx="8" fill="#082318" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="260" y="22" fill="#F43F5E" fontSize="11" fontWeight="800">2. CONTRADICTION</text>
          <text x="260" y="42" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">Oxymoron:</tspan> Deafening silence, Bitter sweet</text>
          <text x="260" y="60" fill="#E2E8F0" fontSize="9"><tspan fill="#00BCD4" fontWeight="bold">Paradox:</tspan> The child is father of the man</text>
          <text x="260" y="76" fill="#94A3B8" fontSize="8">Irony: Stating the opposite of actual meaning</text>

          {/* Card 3 */}
          <rect x="0" y="100" width="225" height="85" rx="8" fill="#082318" stroke="#34D399" strokeWidth="1.5" />
          <text x="15" y="122" fill="#34D399" fontSize="11" fontWeight="800">3. ASSOCIATION</text>
          <text x="15" y="142" fill="#E2E8F0" fontSize="9"><tspan fill="#FFCC00" fontWeight="bold">Metonymy:</tspan> The pen is mightier than sword</text>
          <text x="15" y="160" fill="#E2E8F0" fontSize="9"><tspan fill="#00BCD4" fontWeight="bold">Synecdoche:</tspan> Give us our daily bread (food)</text>
          <text x="15" y="176" fill="#94A3B8" fontSize="8">Euphemism: Mild term for unpleasant reality</text>

          {/* Card 4 */}
          <rect x="245" y="100" width="225" height="85" rx="8" fill="#082318" stroke="#FFCC00" strokeWidth="1.5" />
          <text x="260" y="122" fill="#FFCC00" fontSize="11" fontWeight="800">4. SOUND & EXAGGERATION</text>
          <text x="260" y="142" fill="#E2E8F0" fontSize="9"><tspan fill="#34D399" fontWeight="bold">Hyperbole:</tspan> I told you a million times!</text>
          <text x="260" y="160" fill="#E2E8F0" fontSize="9"><tspan fill="#F43F5E" fontWeight="bold">Onomatopoeia:</tspan> Buzz of bees, Hiss of snake</text>
          <text x="260" y="176" fill="#94A3B8" fontSize="8">Alliteration: Peter Piper picked pickled peppers</text>
        </g>

        <rect x="25" y="244" width="470" height="24" rx="6" fill="#0C2E20" stroke="#00BCD4" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="360" y="50" width="145" height="110" rx="8" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1.5" />
        <text x="432" y="70" fill="#FFCC00" fontSize="10" fontWeight="bold" textAnchor="middle">FORMULA VAULT</text>
        <line x1="370" y1="78" x2="495" y2="78" stroke="#1f4e39" strokeWidth="1" />
        <text x="370" y="95" fill="#00BCD4" fontSize="9" fontWeight="bold">x = [-b ± √(Δ)] / 2a</text>
        <text x="370" y="115" fill="#34D399" fontSize="9" fontWeight="bold">Δ = b² - 4ac</text>
        <text x="370" y="135" fill="#FFEA79" fontSize="9" fontWeight="bold">x₁ + x₂ = -b/a</text>
        <text x="370" y="150" fill="#F43F5E" fontSize="9" fontWeight="bold">x₁ · x₂ = c/a</text>

        <rect x="50" y="248" width="420" height="24" rx="6" fill="#082318" stroke="#34D399" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">TRIGONOMETRIC RATIOS & THE "ASTC" RULE</text>

        <g transform="translate(190, 145)">
          <circle cx="0" cy="0" r="95" fill="#082318" stroke="#34D399" strokeWidth="2" />
          <line x1="-115" y1="0" x2="115" y2="0" stroke="#94A3B8" strokeWidth="2" />
          <line x1="0" y1="-115" x2="0" y2="115" stroke="#94A3B8" strokeWidth="2" />

          {/* Q1 */}
          <rect x="15" y="-85" width="70" height="65" rx="6" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
          <text x="50" y="-62" fill="#FFCC00" fontSize="16" fontWeight="900" textAnchor="middle">A</text>
          <text x="50" y="-45" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">ALL +ve</text>
          <text x="50" y="-30" fill="#94A3B8" fontSize="8" textAnchor="middle">0° to 90°</text>

          {/* Q2 */}
          <rect x="-85" y="-85" width="70" height="65" rx="6" fill="#0C2E20" stroke="#00BCD4" strokeWidth="1" />
          <text x="-50" y="-62" fill="#00BCD4" fontSize="16" fontWeight="900" textAnchor="middle">S</text>
          <text x="-50" y="-45" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">SIN +ve</text>
          <text x="-50" y="-30" fill="#94A3B8" fontSize="8" textAnchor="middle">180° - θ</text>

          {/* Q3 */}
          <rect x="-85" y="15" width="70" height="65" rx="6" fill="#0C2E20" stroke="#34D399" strokeWidth="1" />
          <text x="-50" y="38" fill="#34D399" fontSize="16" fontWeight="900" textAnchor="middle">T</text>
          <text x="-50" y="55" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">TAN +ve</text>
          <text x="-50" y="70" fill="#94A3B8" fontSize="8" textAnchor="middle">180° + θ</text>

          {/* Q4 */}
          <rect x="15" y="15" width="70" height="65" rx="6" fill="#0C2E20" stroke="#F43F5E" strokeWidth="1" />
          <text x="50" y="38" fill="#F43F5E" fontSize="16" fontWeight="900" textAnchor="middle">C</text>
          <text x="50" y="55" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">COS +ve</text>
          <text x="50" y="70" fill="#94A3B8" fontSize="8" textAnchor="middle">360° - θ</text>
        </g>

        <g transform="translate(325, 45)">
          <rect x="0" y="0" width="175" height="195" rx="10" fill="#0C2E20" stroke="#C4823F" strokeWidth="1.5" />
          <text x="87" y="24" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">MEMORY MNEMONIC</text>
          <line x1="15" y1="32" x2="160" y2="32" stroke="#1f4e39" strokeWidth="1" />
          <text x="87" y="50" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">"All Students Take Chemistry"</text>

          <rect x="12" y="62" width="150" height="34" rx="5" fill="#05140e" />
          <text x="20" y="76" fill="#00BCD4" fontSize="9" fontWeight="bold">SOH CAH TOA:</text>
          <text x="20" y="88" fill="#E2E8F0" fontSize="8">Sin = O/H, Cos = A/H, Tan = O/A</text>

          <rect x="12" y="104" width="150" height="38" rx="5" fill="#05140e" />
          <text x="20" y="118" fill="#34D399" fontSize="9" fontWeight="bold">Pythagorean Identity:</text>
          <text x="20" y="132" fill="#E2E8F0" fontSize="9">sin² θ + cos² θ = 1</text>

          <rect x="12" y="148" width="150" height="36" rx="5" fill="#05140e" />
          <text x="20" y="162" fill="#F43F5E" fontSize="9" fontWeight="bold">Special Angles (30°, 60°):</text>
          <text x="20" y="174" fill="#E2E8F0" fontSize="8">sin 30° = 0.5, cos 60° = 0.5</text>
        </g>

        <rect x="30" y="248" width="460" height="24" rx="6" fill="#082318" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CORE CIRCLE THEOREMS FOR WAEC & JAMB</text>

        {/* Theorem 1 */}
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#082318" stroke="#FFCC00" strokeWidth="1.5" />
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
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#082318" stroke="#00BCD4" strokeWidth="1.5" />
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
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#082318" stroke="#34D399" strokeWidth="1.5" />
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
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#082318" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="15" y="20" fill="#F43F5E" fontSize="10" fontWeight="900">CYCLIC QUADRILATERAL: A + C = 180°</text>
          <circle cx="50" cy="55" r="28" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
          <polygon points="35,32 68,36 74,70 30,65" fill="#05140e" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="95" y="50" fill="#E2E8F0" fontSize="9">Opposite Angles:</text>
          <text x="95" y="65" fill="#F43F5E" fontSize="9" fontWeight="bold">Angle A + Angle C = 180°</text>
          <text x="95" y="78" fill="#38BDF8" fontSize="8">Angle B + Angle D = 180°</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="135" y="30" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">CYLINDER & MOVABLE PISTON</text>
        <rect x="50" y="55" width="170" height="175" rx="4" fill="#082318" stroke="#34D399" strokeWidth="2.5" />
        
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
        
        <line x1="255" y1="20" x2="255" y2="265" stroke="#1f4e39" strokeWidth="1.5" strokeDasharray="4,4" />
        
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

        <rect x="300" y="240" width="180" height="28" rx="8" fill="#0C2E20" stroke="#00BCD4" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="375" y="60" width="130" height="150" rx="10" fill="#0C2E20" stroke="#C4823F" strokeWidth="1.5" />
        <text x="440" y="85" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">FORMULA VAULT</text>
        <line x1="385" y1="95" x2="495" y2="95" stroke="#1f4e39" strokeWidth="1" />
        
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="30" y="240" width="460" height="28" rx="6" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="50" y="235" width="420" height="30" rx="8" fill="#0C2E20" stroke="#00BCD4" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="28" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">DIRECT CURRENT (DC) CIRCUIT & OHM'S LAW SCHEMATIC</text>

        <path d="M 120 70 L 400 70 L 400 210 L 120 210 Z" fill="none" stroke="#38BDF8" strokeWidth="2.5" />

        <g transform="translate(120, 120)">
          <rect x="-10" y="0" width="20" height="40" fill="#05140e" />
          <line x1="-12" y1="12" x2="12" y2="12" stroke="#FFCC00" strokeWidth="4" />
          <line x1="-6" y1="28" x2="6" y2="28" stroke="#FFCC00" strokeWidth="2" />
          <text x="-25" y="15" fill="#FFCC00" fontSize="12" fontWeight="bold">+</text>
          <text x="-25" y="32" fill="#94A3B8" fontSize="12" fontWeight="bold">-</text>
          <text x="-50" y="25" fill="#FFEA79" fontSize="11" fontWeight="bold">E (V)</text>
        </g>

        <g transform="translate(260, 70)">
          <circle cx="0" cy="0" r="16" fill="#082318" stroke="#00BCD4" strokeWidth="2" />
          <text x="0" y="5" fill="#00BCD4" fontSize="14" fontWeight="900" textAnchor="middle">A</text>
          <text x="0" y="-22" fill="#00BCD4" fontSize="10" fontWeight="bold" textAnchor="middle">AMMETER (Series)</text>
        </g>

        <g transform="translate(400, 140)">
          <rect x="-12" y="-30" width="24" height="60" fill="#0C2E20" stroke="#34D399" strokeWidth="2" />
          <text x="22" y="5" fill="#34D399" fontSize="12" fontWeight="900">R (Ω)</text>
        </g>

        <g transform="translate(470, 140)">
          <path d="M -70 -25 L -20 -25 L -20 25 L -70 25" fill="none" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="-20" cy="0" r="16" fill="#082318" stroke="#F43F5E" strokeWidth="2" />
          <text x="-20" y="5" fill="#F43F5E" fontSize="14" fontWeight="900" textAnchor="middle">V</text>
          <text x="-20" y="28" fill="#F43F5E" fontSize="9" fontWeight="bold" textAnchor="middle">VOLTMETER (Parallel)</text>
        </g>

        <rect x="50" y="235" width="420" height="30" rx="8" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="30" y="248" width="220" height="24" rx="6" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="120" y="110" width="280" height="120" rx="10" fill="#082318" stroke="#34D399" strokeWidth="2" />
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
          <text x="0" y="125" fill="#05140e" fontSize="10" fontWeight="900" textAnchor="middle">CATHODE (-)</text>
          <text x="45" y="100" fill="#00BCD4" fontSize="9" fontWeight="bold">REDUCTION</text>
        </g>

        <text x="220" y="165" fill="#F43F5E" fontSize="11" fontWeight="bold">SO₄²⁻ ➔</text>
        <text x="270" y="185" fill="#00BCD4" fontSize="11" fontWeight="bold">➔ Cu²⁺</text>

        <rect x="40" y="240" width="440" height="28" rx="6" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">PERIODIC TABLE TRENDS & PERIODICITY SUMMARY</text>

        {/* Table layout mockup */}
        <rect x="60" y="45" width="400" height="150" rx="10" fill="#082318" stroke="#34D399" strokeWidth="1.5" />
        
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

        <rect x="30" y="244" width="460" height="26" rx="6" fill="#0C2E20" stroke="#00BCD4" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <line x1="260" y1="45" x2="260" y2="230" stroke="#1f4e39" strokeWidth="2" strokeDasharray="4,4" />

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

        <rect x="40" y="240" width="440" height="28" rx="6" fill="#0C2E20" stroke="#FFCC00" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="25" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">MONOHYBRID CROSS: Tt × Tt PUNNETT SQUARE</text>

        {/* Left Side: Punnett Grid */}
        <g transform="translate(60, 50)">
          {/* Header row / col labels */}
          <text x="80" y="20" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">Female Gametes: T, t</text>
          <text x="-15" y="85" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle" transform="rotate(-90 -15,85)">Male Gametes</text>

          {/* Grid Table */}
          <rect x="25" y="35" width="130" height="130" rx="8" fill="#082318" stroke="#34D399" strokeWidth="2" />
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
          <rect x="0" y="0" width="220" height="175" rx="10" fill="#0C2E20" stroke="#C4823F" strokeWidth="1.5" />
          <text x="110" y="24" fill="#FFCC00" fontSize="11" fontWeight="800" textAnchor="middle">OFFSPRING PROBABILITY RATIOS</text>
          <line x1="15" y1="32" x2="205" y2="32" stroke="#1f4e39" strokeWidth="1" />

          <rect x="12" y="42" width="196" height="50" rx="6" fill="#05140e" />
          <text x="20" y="58" fill="#34D399" fontSize="10" fontWeight="bold">Phenotypic Ratio (Physical Look):</text>
          <text x="20" y="76" fill="#E2E8F0" fontSize="12" fontWeight="bold">
            <tspan fill="#34D399">3 Tall</tspan> : <tspan fill="#F43F5E">1 Dwarf</tspan> (75% : 25%)
          </text>

          <rect x="12" y="102" width="196" height="58" rx="6" fill="#05140e" />
          <text x="20" y="118" fill="#00BCD4" fontSize="10" fontWeight="bold">Genotypic Ratio (Gene Alleles):</text>
          <text x="20" y="136" fill="#E2E8F0" fontSize="11" fontWeight="bold">
            1 TT : 2 Tt : 1 tt
          </text>
          <text x="20" y="150" fill="#94A3B8" fontSize="8">(25% Pure Tall : 50% Hybrid : 25% Pure Dwarf)</text>
        </g>

        <rect x="30" y="244" width="460" height="24" rx="6" fill="#082318" stroke="#34D399" strokeWidth="1" />
        <text x="260" y="260" fill="#FFEA79" fontSize="10" fontWeight="bold" textAnchor="middle">
          MENDEL'S LAW OF SEGREGATION: Allele pairs separate during gamete formation and randomly unite at fertilization.
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
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

        <rect x="40" y="242" width="440" height="26" rx="6" fill="#0C2E20" stroke="#00BCD4" strokeWidth="1" />
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
        <rect width="520" height="280" rx="16" fill="#05140e" stroke="#1f4e39" strokeWidth="2" />
        <text x="260" y="26" fill="#FFCC00" fontSize="13" fontWeight="800" textAnchor="middle">MONTESQUIEU'S SEPARATION OF POWERS & CHECKS</text>

        <g transform="translate(190, 42)">
          <rect x="0" y="0" width="140" height="52" rx="8" fill="#0C2E20" stroke="#FFCC00" strokeWidth="2" />
          <text x="70" y="22" fill="#FFCC00" fontSize="11" fontWeight="900" textAnchor="middle">LEGISLATURE</text>
          <text x="70" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Makes Laws (Parliament)</text>
        </g>

        <g transform="translate(40, 155)">
          <rect x="0" y="0" width="140" height="52" rx="8" fill="#0C2E20" stroke="#00BCD4" strokeWidth="2" />
          <text x="70" y="22" fill="#00BCD4" fontSize="11" fontWeight="900" textAnchor="middle">EXECUTIVE</text>
          <text x="70" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Enforces Laws (President)</text>
        </g>

        <g transform="translate(340, 155)">
          <rect x="0" y="0" width="140" height="52" rx="8" fill="#0C2E20" stroke="#34D399" strokeWidth="2" />
          <text x="70" y="22" fill="#34D399" fontSize="11" fontWeight="900" textAnchor="middle">JUDICIARY</text>
          <text x="70" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Interprets Laws (Courts)</text>
        </g>

        <line x1="210" y1="95" x2="130" y2="155" stroke="#F43F5E" strokeWidth="2" />
        <text x="150" y="120" fill="#F43F5E" fontSize="8" fontWeight="bold">Impeachment / Veto</text>

        <line x1="310" y1="95" x2="390" y2="155" stroke="#F43F5E" strokeWidth="2" />
        <text x="360" y="120" fill="#F43F5E" fontSize="8" fontWeight="bold">Judicial Review</text>

        <line x1="180" y1="180" x2="340" y2="180" stroke="#F43F5E" strokeWidth="2" />
        <text x="260" y="174" fill="#F43F5E" fontSize="8" fontWeight="bold" textAnchor="middle">Appointment vs Nullification</text>

        <rect x="30" y="244" width="460" height="26" rx="6" fill="#082318" stroke="#00BCD4" strokeWidth="1" />
        <text x="260" y="261" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
          CONSTITUTIONAL PRINCIPLE: Powers are separated to prevent tyranny and safeguard citizen liberty.
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
