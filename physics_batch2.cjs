// physics_batch2.cjs - Questions 36 to 70 for JAMB 2024 Physics
module.exports = [
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 36,
    topic: 'Sound & Speed of Waves',
    difficulty: 'Medium',
    text: 'A sound wave of frequency 512 Hz travels through air at 340 m/s. What is the wavelength of the sound wave?',
    image_svg: null,
    option_a: '0.664 m',
    option_b: '1.506 m',
    option_c: '0.332 m',
    option_d: '0.850 m',
    correct_answer: 'A',
    explanation: 'Using the wave formula v = fλ:\nλ = v / f = 340 / 512 ≈ 0.664 m.',
    tip: 'Fundamental wave equation v = fλ applies to all mechanical and electromagnetic waves.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 37,
    topic: 'Acoustics & Resonance Tube',
    difficulty: 'Hard',
    text: 'In a resonance tube experiment, the first resonance (fundamental) occurs when the length of the vibrating air column is 16 cm. If the speed of sound is 330 m/s, neglecting end correction, calculate the frequency of the tuning fork.',
    image_svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xs mx-auto">
      <rect width="320" height="220" fill="#F8FAFC" rx="10"/>
      <!-- Glass tube -->
      <line x1="120" y1="30" x2="120" y2="180" stroke="#334155" stroke-width="4"/>
      <line x1="180" y1="30" x2="180" y2="180" stroke="#334155" stroke-width="4"/>
      <!-- Water level (Node) -->
      <rect x="122" y="130" width="56" height="50" fill="#93C5FD"/>
      <line x1="120" y1="130" x2="180" y2="130" stroke="#2563EB" stroke-width="2"/>
      <text x="150" y="160" font-size="10" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Water</text>
      <!-- Standing wave mode: 1/4 wavelength -->
      <path d="M 122 30 Q 150 80 150 130 Q 150 80 178 30" fill="none" stroke="#DC2626" stroke-width="2" stroke-dasharray="3"/>
      <!-- Tuning fork at top -->
      <path d="M 140 10 L 140 25 M 160 10 L 160 25 M 140 25 L 160 25 M 150 25 L 150 35" stroke="#475569" stroke-width="2"/>
      <!-- Length L -->
      <line x1="200" y1="30" x2="200" y2="130" stroke="#059669" stroke-width="2"/>
      <text x="210" y="85" font-size="11" font-weight="bold" fill="#059669">L = 16 cm (λ/4)</text>
    </svg>`,
    option_a: '515.6 Hz',
    option_b: '1031.2 Hz',
    option_c: '257.8 Hz',
    option_d: '480.0 Hz',
    correct_answer: 'A',
    explanation: 'For a closed pipe at fundamental resonance, length L = λ / 4.\nλ = 4L = 4 × 0.16 m = 0.64 m.\nFrequency f = v / λ = 330 / 0.64 ≈ 515.6 Hz.',
    tip: 'Closed pipe: L = λ/4 (fundamental, f = v/4L). Open pipe: L = λ/2 (fundamental, f = v/2L).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 38,
    topic: 'Vibrations in Strings',
    difficulty: 'Medium',
    text: 'The diagram shows a stationary wave on a stretched string of length 1.2 m vibrating in 3 loops. What is the wavelength of the wave?',
    image_svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="160" fill="#F8FAFC" rx="10"/>
      <!-- Bridges at ends -->
      <polygon points="50,110 60,80 70,110" fill="#334155"/>
      <polygon points="350,110 360,80 370,110" fill="#334155"/>
      <!-- Stationary wave 3 loops -->
      <path d="M 60 80 Q 110 30 160 80 Q 210 30 260 80 Q 310 30 360 80" fill="none" stroke="#4F46E5" stroke-width="2.5"/>
      <path d="M 60 80 Q 110 130 160 80 Q 210 130 260 80 Q 310 130 360 80" fill="none" stroke="#4F46E5" stroke-width="2.5" stroke-dasharray="4"/>
      <!-- Nodes and Antinodes labels -->
      <circle cx="60" cy="80" r="3" fill="#DC2626"/>
      <circle cx="160" cy="80" r="3" fill="#DC2626"/>
      <circle cx="260" cy="80" r="3" fill="#DC2626"/>
      <circle cx="360" cy="80" r="3" fill="#DC2626"/>
      <text x="160" y="98" font-size="10" font-weight="bold" fill="#DC2626" text-anchor="middle">Node</text>
      <text x="210" y="25" font-size="10" font-weight="bold" fill="#4F46E5" text-anchor="middle">Antinode</text>
      <!-- Total length label -->
      <line x1="60" y1="130" x2="360" y2="130" stroke="#334155" stroke-width="1.5"/>
      <text x="210" y="148" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Total Length L = 1.2 m</text>
    </svg>`,
    option_a: '0.8 m',
    option_b: '0.4 m',
    option_c: '1.2 m',
    option_d: '1.6 m',
    correct_answer: 'A',
    explanation: 'Each loop represents half a wavelength (λ / 2).\nFor 3 loops: L = 3(λ / 2) = 1.5λ.\n1.2 = 1.5λ ⇒ λ = 1.2 / 1.5 = 0.8 m.',
    tip: 'Distance between two consecutive nodes = λ/2. Total string length with n loops is L = n(λ/2).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 39,
    topic: 'Doppler Effect',
    difficulty: 'Easy',
    text: 'An ambulance emitting a continuous siren approaches a stationary observer. The pitch (frequency) of the sound heard by the observer is:',
    image_svg: null,
    option_a: 'Higher than the emitted frequency',
    option_b: 'Lower than the emitted frequency',
    option_c: 'The same as the emitted frequency',
    option_d: 'Zero',
    correct_answer: 'A',
    explanation: 'Due to the Doppler effect, as a sound source moves towards an observer, sound wave crests are compressed closer together, reducing apparent wavelength and increasing the observed frequency (higher pitch).',
    tip: 'Approaching source = higher observed frequency (apparent wavelength compresses). Receding source = lower observed frequency.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 40,
    topic: 'Polarization',
    difficulty: 'Easy',
    text: 'Which of the following wave phenomena confirms that light is a transverse wave and NOT a longitudinal wave?',
    image_svg: null,
    option_a: 'Polarization',
    option_b: 'Diffraction',
    option_c: 'Interference',
    option_d: 'Refraction',
    correct_answer: 'A',
    explanation: 'Only transverse waves (where vibrations occur perpendicular to the direction of wave travel) can be polarized. Longitudinal waves like sound cannot be polarized because their oscillations are parallel to the direction of propagation.',
    tip: 'Diffraction, interference, and refraction occur in both transverse and longitudinal waves. Polarization ONLY occurs in transverse waves!'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 41,
    topic: 'Electrostatics & Coulomb\'s Law',
    difficulty: 'Medium',
    text: 'Two point charges of +4 μC and +6 μC are separated by a distance of 0.2 m in a vacuum. Calculate the repulsive electrostatic force between them. [1 / (4πε₀) = 9.0 × 10⁹ N·m²/C²]',
    image_svg: null,
    option_a: '5.4 N',
    option_b: '2.7 N',
    option_c: '10.8 N',
    option_d: '1.35 N',
    correct_answer: 'A',
    explanation: 'By Coulomb\'s law: F = (k × |q₁ × q₂|) / r²\nF = (9 × 10⁹ × 4 × 10⁻⁶ × 6 × 10⁻⁶) / (0.2)²\nF = (216 × 10⁻³) / 0.04 = 0.216 / 0.04 = 5.4 N.',
    tip: 'Coulomb\'s Law F = k q₁ q₂ / r² obeys inverse-square law. Convert microcoulombs (μC) to Coulombs (× 10⁻⁶).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 42,
    topic: 'Electric Fields',
    difficulty: 'Easy',
    text: 'The electric field pattern between two opposite point charges shows that electric field lines:',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Charges -->
      <circle cx="100" cy="90" r="18" fill="#EF4444"/>
      <text x="100" y="96" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">+</text>
      <circle cx="280" cy="90" r="18" fill="#3B82F6"/>
      <text x="280" y="96" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">−</text>
      <!-- Central straight line -->
      <line x1="118" y1="90" x2="262" y2="90" stroke="#6366F1" stroke-width="2"/>
      <polygon points="190,86 198,90 190,94" fill="#6366F1"/>
      <!-- Curved upper lines -->
      <path d="M 112 77 Q 190 20 268 77" fill="none" stroke="#6366F1" stroke-width="2"/>
      <polygon points="190,45 198,48 190,53" fill="#6366F1"/>
      <!-- Curved lower lines -->
      <path d="M 112 103 Q 190 160 268 103" fill="none" stroke="#6366F1" stroke-width="2"/>
      <polygon points="190,128 198,132 190,136" fill="#6366F1"/>
    </svg>`,
    option_a: 'Originate from the positive charge and terminate on the negative charge',
    option_b: 'Originate from the negative charge and terminate on the positive charge',
    option_c: 'Intersect each other at the midpoint',
    option_d: 'Form closed circular continuous loops',
    correct_answer: 'A',
    explanation: 'By convention, electric field lines represent the path a positive test charge would take. Thus, they always emerge from positive charges and end on negative charges, and never cross one another.',
    tip: 'Electric field lines start on (+) and end on (-). They never cross (if they did, the field would have two directions at one point).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 43,
    topic: 'Capacitors',
    difficulty: 'Medium',
    text: 'In the circuit shown, two capacitors of 4 μF and 6 μF are connected in parallel, and this combination is connected in series with a 10 μF capacitor. What is the equivalent capacitance of the network?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Main line left -->
      <line x1="30" y1="90" x2="80" y2="90" stroke="#334155" stroke-width="2.5"/>
      <!-- Parallel branch split -->
      <line x1="80" y1="50" x2="80" y2="130" stroke="#334155" stroke-width="2.5"/>
      <!-- Top branch 4uF -->
      <line x1="80" y1="50" x2="130" y2="50" stroke="#334155" stroke-width="2.5"/>
      <line x1="130" y1="35" x2="130" y2="65" stroke="#2563EB" stroke-width="3"/>
      <line x1="140" y1="35" x2="140" y2="65" stroke="#2563EB" stroke-width="3"/>
      <line x1="140" y1="50" x2="190" y2="50" stroke="#334155" stroke-width="2.5"/>
      <text x="135" y="28" font-size="11" font-weight="bold" fill="#2563EB" text-anchor="middle">4 μF</text>
      <!-- Bottom branch 6uF -->
      <line x1="80" y1="130" x2="130" y2="130" stroke="#334155" stroke-width="2.5"/>
      <line x1="130" y1="115" x2="130" y2="145" stroke="#2563EB" stroke-width="3"/>
      <line x1="140" y1="115" x2="140" y2="145" stroke="#2563EB" stroke-width="3"/>
      <line x1="140" y1="130" x2="190" y2="130" stroke="#334155" stroke-width="2.5"/>
      <text x="135" y="162" font-size="11" font-weight="bold" fill="#2563EB" text-anchor="middle">6 μF</text>
      <!-- Rejoin -->
      <line x1="190" y1="50" x2="190" y2="130" stroke="#334155" stroke-width="2.5"/>
      <line x1="190" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="2.5"/>
      <!-- Series 10uF -->
      <line x1="250" y1="75" x2="250" y2="105" stroke="#4F46E5" stroke-width="3"/>
      <line x1="260" y1="75" x2="260" y2="105" stroke="#4F46E5" stroke-width="3"/>
      <line x1="260" y1="90" x2="340" y2="90" stroke="#334155" stroke-width="2.5"/>
      <text x="255" y="68" font-size="11" font-weight="bold" fill="#4F46E5" text-anchor="middle">10 μF</text>
    </svg>`,
    option_a: '5.0 μF',
    option_b: '20.0 μF',
    option_c: '2.4 μF',
    option_d: '8.0 μF',
    correct_answer: 'A',
    explanation: 'Parallel capacitors add directly: C_p = 4 μF + 6 μF = 10 μF.\nThis 10 μF combination is in series with the other 10 μF capacitor:\n1 / C_eq = 1 / 10 + 1 / 10 = 2 / 10 = 1 / 5.\nC_eq = 5.0 μF.',
    tip: 'Capacitors in parallel ADD directly (C = C₁ + C₂). Capacitors in series combine reciprocally like parallel resistors!'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 44,
    topic: 'Current Electricity & Internal Resistance',
    difficulty: 'Medium',
    text: 'A battery of e.m.f. 12 V and internal resistance r is connected across a 5 Ω resistor. If the circuit current is 2.0 A, determine the internal resistance r of the battery.',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Rectangular circuit loop -->
      <rect x="60" y="40" width="260" height="100" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Battery top -->
      <line x1="160" y1="30" x2="160" y2="50" stroke="#EF4444" stroke-width="3"/>
      <line x1="170" y1="35" x2="170" y2="45" stroke="#334155" stroke-width="3"/>
      <text x="165" y="24" font-size="10" font-weight="bold" fill="#EF4444" text-anchor="middle">E = 12V, r</text>
      <!-- Resistor bottom -->
      <rect x="150" y="132" width="60" height="16" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
      <text x="180" y="144" font-size="10" font-weight="bold" fill="#B45309" text-anchor="middle">R = 5 Ω</text>
      <!-- Current Arrow -->
      <polygon points="280,85 285,95 290,85" fill="#2563EB"/>
      <text x="295" y="94" font-size="11" font-weight="bold" fill="#2563EB">I = 2.0 A</text>
    </svg>`,
    option_a: '1.0 Ω',
    option_b: '2.0 Ω',
    option_c: '0.5 Ω',
    option_d: '2.5 Ω',
    correct_answer: 'A',
    explanation: 'From Ohm\'s law for an entire circuit: E = I(R + r)\n12 = 2(5 + r)\n6 = 5 + r ⇒ r = 1.0 Ω.',
    tip: 'Remember: Terminal potential difference V = E - Ir. Lost volts across internal resistance = Ir.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 45,
    topic: 'Resistor Networks',
    difficulty: 'Medium',
    text: 'In the network shown, two parallel resistors of 6 Ω and 12 Ω are connected in series with a 4 Ω resistor across a 24 V supply. Calculate the total current drawn from the supply.',
    image_svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Source left -->
      <line x1="40" y1="90" x2="90" y2="90" stroke="#334155" stroke-width="2"/>
      <!-- Parallel branch -->
      <line x1="90" y1="50" x2="90" y2="130" stroke="#334155" stroke-width="2"/>
      <!-- Top 6 ohm -->
      <line x1="90" y1="50" x2="130" y2="50" stroke="#334155" stroke-width="2"/>
      <rect x="130" y="42" width="50" height="16" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
      <text x="155" y="54" font-size="10" font-weight="bold" fill="#4F46E5" text-anchor="middle">6 Ω</text>
      <line x1="180" y1="50" x2="220" y2="50" stroke="#334155" stroke-width="2"/>
      <!-- Bottom 12 ohm -->
      <line x1="90" y1="130" x2="130" y2="130" stroke="#334155" stroke-width="2"/>
      <rect x="130" y="122" width="50" height="16" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
      <text x="155" y="134" font-size="10" font-weight="bold" fill="#4F46E5" text-anchor="middle">12 Ω</text>
      <line x1="180" y1="130" x2="220" y2="130" stroke="#334155" stroke-width="2"/>
      <!-- Rejoin -->
      <line x1="220" y1="50" x2="220" y2="130" stroke="#334155" stroke-width="2"/>
      <line x1="220" y1="90" x2="270" y2="90" stroke="#334155" stroke-width="2"/>
      <!-- Series 4 ohm -->
      <rect x="270" y="82" width="50" height="16" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
      <text x="295" y="94" font-size="10" font-weight="bold" fill="#B45309" text-anchor="middle">4 Ω</text>
      <line x1="320" y1="90" x2="380" y2="90" stroke="#334155" stroke-width="2"/>
      <!-- Supply text -->
      <text x="40" y="70" font-size="11" font-weight="bold" fill="#DC2626">24 V</text>
    </svg>`,
    option_a: '3.0 A',
    option_b: '4.0 A',
    option_c: '2.0 A',
    option_d: '6.0 A',
    correct_answer: 'A',
    explanation: 'Equivalent resistance of parallel branch: R_p = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω.\nTotal circuit resistance R_total = R_p + 4 Ω = 4 + 4 = 8 Ω.\nCircuit current I = V / R_total = 24 / 8 = 3.0 A.',
    tip: 'Product over sum shortcut for two parallel resistors: R = (R₁ × R₂) / (R₁ + R₂).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 46,
    topic: 'Wheatstone Bridge',
    difficulty: 'Medium',
    text: 'The Wheatstone bridge circuit shown is balanced when no current flows through the central galvanometer G. What is the value of the unknown resistor R_x?',
    image_svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="200" fill="#F8FAFC" rx="10"/>
      <!-- Diamond bridge -->
      <line x1="190" y1="30" x2="90" y2="100" stroke="#334155" stroke-width="2"/>
      <line x1="190" y1="30" x2="290" y2="100" stroke="#334155" stroke-width="2"/>
      <line x1="90" y1="100" x2="190" y2="170" stroke="#334155" stroke-width="2"/>
      <line x1="290" y1="100" x2="190" y2="170" stroke="#334155" stroke-width="2"/>
      <!-- Central Galvanometer -->
      <line x1="190" y1="30" x2="190" y2="80" stroke="#334155" stroke-width="2"/>
      <circle cx="190" cy="100" r="16" fill="#FFFFFF" stroke="#4F46E5" stroke-width="2"/>
      <text x="190" y="105" font-size="12" font-weight="bold" fill="#4F46E5" text-anchor="middle">G</text>
      <line x1="190" y1="116" x2="190" y2="170" stroke="#334155" stroke-width="2"/>
      <!-- Resistor labels -->
      <text x="125" y="55" font-size="11" font-weight="bold" fill="#2563EB">R₁ = 4 Ω</text>
      <text x="235" y="55" font-size="11" font-weight="bold" fill="#2563EB">R₂ = 6 Ω</text>
      <text x="125" y="150" font-size="11" font-weight="bold" fill="#059669">R₃ = 8 Ω</text>
      <text x="245" y="150" font-size="11" font-weight="bold" fill="#DC2626">R_x = ?</text>
    </svg>`,
    option_a: '12 Ω',
    option_b: '16 Ω',
    option_c: '8 Ω',
    option_d: '10 Ω',
    correct_answer: 'A',
    explanation: 'For a balanced Wheatstone bridge: R₁ / R₂ = R₃ / R_x.\n4 / 6 = 8 / R_x\n4 R_x = 48 ⇒ R_x = 12 Ω.',
    tip: 'Wheatstone bridge balance condition: Opposite products are equal (R₁ × R_x = R₂ × R₃).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 47,
    topic: 'Potentiometer',
    difficulty: 'Medium',
    text: 'A slide-wire potentiometer of length 100 cm is used to compare the e.m.f. of two cells. The balance point is obtained at 60 cm for cell E₁ of e.m.f. 1.5 V. If cell E₂ gives a balance length of 80 cm, calculate the e.m.f. of cell E₂.',
    image_svg: null,
    option_a: '2.0 V',
    option_b: '1.8 V',
    option_c: '1.2 V',
    option_d: '2.5 V',
    correct_answer: 'A',
    explanation: 'The e.m.f. of a cell on a potentiometer is directly proportional to the balancing length L:\nE₁ / E₂ = L₁ / L₂\n1.5 / E₂ = 60 / 80 = 3 / 4\n3 E₂ = 6.0 ⇒ E₂ = 2.0 V.',
    tip: 'Potentiometers measure true e.m.f. without drawing any current from the cell at balance point.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 48,
    topic: 'Electrical Energy & Power',
    difficulty: 'Medium',
    text: 'An electric boiling kettle rated 2.0 kW is used for 3 hours daily for 30 days. If the cost of electricity is ₦50 per kWh, calculate the monthly electricity bill for running the kettle.',
    image_svg: null,
    option_a: '₦9,000',
    option_b: '₦4,500',
    option_c: '₦18,000',
    option_d: '₦3,000',
    correct_answer: 'A',
    explanation: 'Energy consumed daily = Power (kW) × time (h) = 2.0 kW × 3 h = 6 kWh.\nTotal energy in 30 days = 6 × 30 = 180 kWh.\nTotal cost = 180 kWh × ₦50/kWh = ₦9,000.',
    tip: 'Electrical energy consumed in units (kWh) = (Power in Watts × Hours) / 1000.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 49,
    topic: 'Electromagnetism & Force',
    difficulty: 'Medium',
    text: 'A straight wire of length 0.5 m carrying a current of 4.0 A is placed in a uniform magnetic field of 0.6 T at an angle of 30° to the magnetic field lines. Calculate the magnetic force on the wire.',
    image_svg: null,
    option_a: '0.6 N',
    option_b: '1.2 N',
    option_c: '0.3 N',
    option_d: '2.4 N',
    correct_answer: 'A',
    explanation: 'Magnetic force F = B I L sin θ.\nF = 0.6 × 4.0 × 0.5 × sin 30° = 1.2 × 0.5 = 0.6 N.',
    tip: 'Force on a current-carrying wire F = BIL sin θ. Force is maximum when perpendicular (90°) and zero when parallel (0°).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 50,
    topic: 'Magnetic Fields',
    difficulty: 'Easy',
    text: 'The direction of the magnetic field created around a straight current-carrying wire can be determined using:',
    image_svg: null,
    option_a: 'Right-hand grip rule',
    option_b: 'Fleming\'s left-hand rule',
    option_c: 'Lenz\'s law',
    option_d: 'Coulomb\'s law',
    correct_answer: 'A',
    explanation: 'The right-hand grip rule states that if the thumb points along the direction of conventional current, the curling fingers indicate the circular direction of magnetic field lines.',
    tip: 'Right-hand grip rule = Magnetic field around current. Fleming\'s Left Hand = Motor force. Fleming\'s Right Hand = Dynamo induced current.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 51,
    topic: 'Electromagnetic Induction',
    difficulty: 'Easy',
    text: 'Lenz\'s law of electromagnetic induction is a direct consequence of the law of conservation of:',
    image_svg: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="160" fill="#F8FAFC" rx="10"/>
      <!-- Solenoid coil -->
      <rect x="60" y="55" width="160" height="50" fill="#F1F5F9" stroke="#334155" stroke-width="2" rx="4"/>
      <!-- Wire loops -->
      <path d="M 80 55 C 80 35, 100 35, 100 55 M 110 55 C 110 35, 130 35, 130 55 M 140 55 C 140 35, 160 35, 160 55 M 170 55 C 170 35, 190 35, 190 55" fill="none" stroke="#D97706" stroke-width="3"/>
      <!-- Bar Magnet entering -->
      <rect x="270" y="65" width="45" height="30" fill="#EF4444"/>
      <text x="292" y="85" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">N</text>
      <rect x="315" y="65" width="45" height="30" fill="#3B82F6"/>
      <text x="337" y="85" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">S</text>
      <!-- Motion Arrow -->
      <line x1="260" y1="80" x2="230" y2="80" stroke="#DC2626" stroke-width="2.5"/>
      <polygon points="234,75 225,80 234,85" fill="#DC2626"/>
      <text x="245" y="102" font-size="10" font-weight="bold" fill="#DC2626">v (push in)</text>
    </svg>`,
    option_a: 'Energy',
    option_b: 'Momentum',
    option_c: 'Charge',
    option_d: 'Mass',
    correct_answer: 'A',
    explanation: 'Lenz\'s law states that an induced electromotive force always opposes the change in magnetic flux that causes it. This ensures that mechanical work done against the opposing force is converted into electrical energy, satisfying conservation of energy.',
    tip: 'Lenz\'s Law = Conservation of Energy. Kirchhoff\'s Current Law = Conservation of Charge. Kirchhoff\'s Voltage Law = Conservation of Energy.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 52,
    topic: 'Alternating Current & Resonance',
    difficulty: 'Hard',
    text: 'A series R-L-C circuit has an inductance of 0.2 H and a capacitance of 5.0 μF. Calculate the resonant frequency of the circuit.',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Loop -->
      <rect x="50" y="40" width="280" height="100" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Resistor -->
      <rect x="90" y="32" width="40" height="16" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
      <text x="110" y="44" font-size="9" font-weight="bold" fill="#4F46E5" text-anchor="middle">R</text>
      <!-- Inductor -->
      <path d="M 160 40 C 160 25, 175 25, 175 40 C 175 25, 190 25, 190 40 C 190 25, 205 25, 205 40" fill="none" stroke="#D97706" stroke-width="2"/>
      <text x="182" y="22" font-size="9" font-weight="bold" fill="#D97706" text-anchor="middle">L=0.2H</text>
      <!-- Capacitor -->
      <line x1="245" y1="28" x2="245" y2="52" stroke="#2563EB" stroke-width="2.5"/>
      <line x1="255" y1="28" x2="255" y2="52" stroke="#2563EB" stroke-width="2.5"/>
      <text x="250" y="20" font-size="9" font-weight="bold" fill="#2563EB" text-anchor="middle">C=5μF</text>
      <!-- AC source bottom -->
      <circle cx="190" cy="140" r="14" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
      <path d="M 182 140 Q 186 134 190 140 T 198 140" fill="none" stroke="#DC2626" stroke-width="2"/>
      <text x="190" y="168" font-size="10" font-weight="bold" fill="#DC2626" text-anchor="middle">AC Source</text>
    </svg>`,
    option_a: '159.2 Hz',
    option_b: '318.3 Hz',
    option_c: '500.0 Hz',
    option_d: '79.6 Hz',
    correct_answer: 'A',
    explanation: 'Resonant frequency f₀ = 1 / (2π√(LC)).\nLC = 0.2 × 5 × 10⁻⁶ = 1.0 × 10⁻⁶.\n√(LC) = √(10⁻⁶) = 10⁻³.\nf₀ = 1 / (2π × 10⁻³) = 1000 / (2π) = 1000 / 6.283 ≈ 159.2 Hz.',
    tip: 'At resonance in series RLC, inductive reactance equals capacitive reactance (X_L = X_C), impedance is minimum (Z = R), and current is maximum.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 53,
    topic: 'Transformers',
    difficulty: 'Medium',
    text: 'A step-down transformer transforms 240 V mains down to 12 V to operate a lamp drawing 4 A. Assuming 100% efficiency, what current is drawn by the primary coil?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Soft iron core -->
      <rect x="110" y="30" width="160" height="120" fill="none" stroke="#64748B" stroke-width="16" rx="6"/>
      <rect x="126" y="46" width="128" height="88" fill="#F8FAFC"/>
      <!-- Primary winding -->
      <path d="M 100 50 C 90 50, 90 70, 100 70 M 100 70 C 90 70, 90 90, 100 90 M 100 90 C 90 90, 90 110, 100 110 M 100 110 C 90 110, 90 130, 100 130" fill="none" stroke="#EF4444" stroke-width="3"/>
      <text x="60" y="80" font-size="10" font-weight="bold" fill="#EF4444">Primary</text>
      <text x="60" y="95" font-size="10" font-weight="bold" fill="#EF4444">240 V</text>
      <!-- Secondary winding -->
      <path d="M 270 70 C 280 70, 280 90, 270 90 M 270 90 C 280 90, 280 110, 270 110" fill="none" stroke="#3B82F6" stroke-width="3"/>
      <text x="310" y="80" font-size="10" font-weight="bold" fill="#3B82F6">Secondary</text>
      <text x="310" y="95" font-size="10" font-weight="bold" fill="#3B82F6">12 V, 4A</text>
    </svg>`,
    option_a: '0.2 A',
    option_b: '0.5 A',
    option_c: '1.0 A',
    option_d: '0.1 A',
    correct_answer: 'A',
    explanation: 'For an ideal transformer, Input Power = Output Power:\nV_p × I_p = V_s × I_s\n240 × I_p = 12 × 4\n240 I_p = 48 ⇒ I_p = 48 / 240 = 0.2 A.',
    tip: 'Transformer ratios: V_p / V_s = N_p / N_s = I_s / I_p. Note the inverse relation for current!'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 54,
    topic: 'Meters Conversion',
    difficulty: 'Hard',
    text: 'A moving coil galvanometer has a full-scale deflection of 10 mA and a coil resistance of 20 Ω. Calculate the shunt resistance required to convert it into an ammeter reading up to 5 A.',
    image_svg: null,
    option_a: '0.040 Ω',
    option_b: '0.400 Ω',
    option_c: '0.025 Ω',
    option_d: '0.050 Ω',
    correct_answer: 'A',
    explanation: 'Shunt resistance R_s is connected in parallel with the galvanometer:\nR_s = (I_g × R_g) / (I - I_g)\nI_g = 10 mA = 0.01 A, R_g = 20 Ω, I = 5 A.\nR_s = (0.01 × 20) / (5 - 0.01) = 0.2 / 4.99 ≈ 0.040 Ω.',
    tip: 'Ammeter: low resistance SHUNT in parallel. Voltmeter: high resistance MULTIPLIER in series.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 55,
    topic: 'AC Circuits',
    difficulty: 'Easy',
    text: 'If an alternating voltage is represented by V = 311 sin(100πt) volts, what is the root-mean-square (r.m.s.) value of the voltage?',
    image_svg: null,
    option_a: '220 V',
    option_b: '311 V',
    option_c: '110 V',
    option_d: '440 V',
    correct_answer: 'A',
    explanation: 'Peak voltage V₀ = 311 V.\nRoot-mean-square voltage V_rms = V₀ / √2 = 311 / 1.414 ≈ 220 V.',
    tip: 'Standard domestic AC in Nigeria: Peak is ~311 V, which gives 220 V r.m.s.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 56,
    topic: 'Cathode Rays',
    difficulty: 'Medium',
    text: 'A beam of cathode rays is directed between two charged parallel plates. Which diagram correctly indicates the path of the beam?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Positive top plate -->
      <rect x="100" y="35" width="160" height="10" fill="#EF4444" rx="2"/>
      <text x="180" y="28" font-size="11" font-weight="bold" fill="#EF4444" text-anchor="middle">+ Positive Plate</text>
      <!-- Negative bottom plate -->
      <rect x="100" y="135" width="160" height="10" fill="#3B82F6" rx="2"/>
      <text x="180" y="160" font-size="11" font-weight="bold" fill="#3B82F6" text-anchor="middle">− Negative Plate</text>
      <!-- Cathode beam curving towards positive plate -->
      <path d="M 40 90 L 120 90 Q 200 90 280 50 L 340 40" fill="none" stroke="#10B981" stroke-width="3"/>
      <polygon points="334,35 344,39 336,44" fill="#10B981"/>
      <text x="50" y="80" font-size="10" font-weight="bold" fill="#10B981">Electron Beam</text>
    </svg>`,
    option_a: 'Deflects upwards towards the positive plate',
    option_b: 'Deflects downwards towards the negative plate',
    option_c: 'Passes straight through without any deflection',
    option_d: 'Reflects backwards towards the cathode',
    correct_answer: 'A',
    explanation: 'Cathode rays are streams of fast-moving negatively charged electrons. In an electric field, negative charges are attracted to the positive anode plate and repelled by the negative plate, curving upwards.',
    tip: 'Cathode rays are electrons (negative). They deflect towards positive plates in electric fields and obey Fleming\'s left hand rule in magnetic fields.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 57,
    topic: 'Photoelectric Effect',
    difficulty: 'Hard',
    text: 'The graph shows the variation of stopping potential V_s with frequency f of incident radiation for a photosensitive metal surface. What does the intercept on the horizontal frequency axis represent?',
    image_svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="200" fill="#F8FAFC" rx="10"/>
      <!-- Axes -->
      <line x1="50" y1="160" x2="350" y2="160" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="160" x2="50" y2="30" stroke="#334155" stroke-width="2"/>
      <!-- Linear line intercepting f-axis at f0 -->
      <line x1="140" y1="160" x2="320" y2="40" stroke="#4F46E5" stroke-width="3"/>
      <!-- Threshold frequency f0 -->
      <circle cx="140" cy="160" r="4" fill="#DC2626"/>
      <text x="140" y="178" font-size="12" font-weight="bold" fill="#DC2626" text-anchor="middle">f₀</text>
      <!-- Labels -->
      <text x="240" y="190" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Frequency f (Hz)</text>
      <text x="25" y="95" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle" transform="rotate(-90 25 95)">Stopping Potential V_s</text>
    </svg>`,
    option_a: 'Threshold frequency (f₀)',
    option_b: 'Work function in Joules',
    option_c: 'Planck\'s constant',
    option_d: 'Maximum kinetic energy',
    correct_answer: 'A',
    explanation: 'Einstein\'s photoelectric equation: eV_s = hf - W₀ ⇒ V_s = (h/e)f - (W₀/e).\nWhen stopping potential V_s = 0, hf₀ = W₀. Thus, the x-intercept represents the threshold frequency f₀ (the minimum frequency required to emit photoelectrons).',
    tip: 'Slope of V_s vs f graph = h/e. X-intercept = threshold frequency f₀. Y-intercept = -W₀/e.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 58,
    topic: 'X-Rays',
    difficulty: 'Medium',
    text: 'In an X-ray tube operating at an accelerating potential of 40 kV, what is the minimum wavelength of the emitted X-rays? [h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C]',
    image_svg: null,
    option_a: '0.031 nm',
    option_b: '0.310 nm',
    option_c: '0.015 nm',
    option_d: '0.062 nm',
    correct_answer: 'A',
    explanation: 'Minimum wavelength λ_min = (h × c) / (e × V).\nλ_min = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (1.6 × 10⁻¹⁹ × 40,000)\nλ_min = (1.989 × 10⁻²⁵) / (6.4 × 10⁻¹⁵) = 3.107 × 10⁻¹¹ m ≈ 0.031 nm.',
    tip: 'X-ray minimum wavelength λ_min = hc / (eV). Higher accelerating potential creates more penetrating ("harder") X-rays with shorter wavelength.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 59,
    topic: 'Wave-Particle Duality',
    difficulty: 'Medium',
    text: 'According to de Broglie\'s hypothesis, an electron of mass 9.1 × 10⁻³¹ kg moving at 2.0 × 10⁶ m/s exhibits an associated matter wavelength of: [h = 6.63 × 10⁻³⁴ J·s]',
    image_svg: null,
    option_a: '3.64 × 10⁻¹⁰ m',
    option_b: '1.82 × 10⁻¹⁰ m',
    option_c: '7.28 × 10⁻¹⁰ m',
    option_d: '5.46 × 10⁻¹⁰ m',
    correct_answer: 'A',
    explanation: 'De Broglie wavelength λ = h / (m × v).\nλ = (6.63 × 10⁻³⁴) / (9.1 × 10⁻³¹ × 2.0 × 10⁶)\nλ = (6.63 × 10⁻³⁴) / (1.82 × 10⁻²⁴) ≈ 3.64 × 10⁻¹⁰ m.',
    tip: 'De Broglie matter wavelength λ = h / p = h / (mv).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 60,
    topic: 'Atomic Physics & Energy Levels',
    difficulty: 'Medium',
    text: 'The diagram shows the energy levels of a hydrogen atom. What spectral series is produced when an electron transitions from higher energy levels down to the ground state (n = 1)?',
    image_svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="200" fill="#F8FAFC" rx="10"/>
      <!-- Energy lines -->
      <line x1="60" y1="40" x2="320" y2="40" stroke="#334155" stroke-width="1.5"/>
      <text x="330" y="44" font-size="10" font-weight="bold" fill="#334155">n=∞ (0 eV)</text>
      <line x1="60" y1="65" x2="320" y2="65" stroke="#334155" stroke-width="1.5"/>
      <text x="330" y="69" font-size="10" font-weight="bold" fill="#334155">n=4 (-0.85 eV)</text>
      <line x1="60" y1="95" x2="320" y2="95" stroke="#334155" stroke-width="1.5"/>
      <text x="330" y="99" font-size="10" font-weight="bold" fill="#334155">n=3 (-1.51 eV)</text>
      <line x1="60" y1="130" x2="320" y2="130" stroke="#334155" stroke-width="1.5"/>
      <text x="330" y="134" font-size="10" font-weight="bold" fill="#334155">n=2 (-3.40 eV)</text>
      <line x1="60" y1="175" x2="320" y2="175" stroke="#334155" stroke-width="2.5"/>
      <text x="330" y="179" font-size="10" font-weight="bold" fill="#334155">n=1 (-13.6 eV)</text>
      <!-- Downward arrows to n=1 -->
      <line x1="120" y1="65" x2="120" y2="175" stroke="#8B5CF6" stroke-width="2"/>
      <line x1="150" y1="95" x2="150" y2="175" stroke="#8B5CF6" stroke-width="2"/>
      <line x1="180" y1="130" x2="180" y2="175" stroke="#8B5CF6" stroke-width="2"/>
      <polygon points="117,167 120,175 123,167" fill="#8B5CF6"/>
      <polygon points="147,167 150,175 153,167" fill="#8B5CF6"/>
      <polygon points="177,167 180,175 183,167" fill="#8B5CF6"/>
      <text x="150" y="192" font-size="11" font-weight="bold" fill="#8B5CF6" text-anchor="middle">Transitions to n = 1</text>
    </svg>`,
    option_a: 'Lyman series (Ultraviolet region)',
    option_b: 'Balmer series (Visible light)',
    option_c: 'Paschen series (Infrared region)',
    option_d: 'Brackett series',
    correct_answer: 'A',
    explanation: 'Transitions ending on n = 1 belong to the Lyman series (in the ultraviolet spectrum). Transitions ending on n = 2 form the Balmer series (visible spectrum), and transitions ending on n = 3 form the Paschen series (infrared).',
    tip: 'Lyman = n=1 (UV). Balmer = n=2 (Visible). Paschen = n=3 (IR).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 61,
    topic: 'Radioactivity & Radiation Types',
    difficulty: 'Medium',
    text: 'A radioactive source emits alpha (α), beta (β), and gamma (γ) radiations through a magnetic field directed perpendicularly into the page. Which radiation suffers the greatest deflection and in which direction?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Lead cavity with source -->
      <rect x="40" y="70" width="50" height="40" fill="#64748B" rx="3"/>
      <circle cx="65" cy="90" r="6" fill="#F59E0B"/>
      <!-- Magnetic field crosses -->
      <g fill="#CBD5E1" font-size="14" font-weight="bold">
        <text x="130" y="55">×</text><text x="180" y="55">×</text><text x="230" y="55">×</text>
        <text x="130" y="95">×</text><text x="180" y="95">×</text><text x="230" y="95">×</text>
        <text x="130" y="135">×</text><text x="180" y="135">×</text><text x="230" y="135">×</text>
      </g>
      <!-- Undeflected gamma -->
      <line x1="90" y1="90" x2="320" y2="90" stroke="#10B981" stroke-width="2.5"/>
      <text x="330" y="94" font-size="11" font-weight="bold" fill="#10B981">γ (straight)</text>
      <!-- Deflected alpha upward -->
      <path d="M 90 90 Q 200 85 280 40" fill="none" stroke="#EF4444" stroke-width="2.5"/>
      <text x="290" y="40" font-size="11" font-weight="bold" fill="#EF4444">α (slightly curved)</text>
      <!-- Deflected beta downward sharply -->
      <path d="M 90 90 Q 170 100 240 160" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
      <text x="250" y="165" font-size="11" font-weight="bold" fill="#3B82F6">β (sharply deflected)</text>
    </svg>`,
    option_a: 'Beta particles, because they have a much smaller mass-to-charge ratio',
    option_b: 'Alpha particles, because they carry a double positive charge',
    option_c: 'Gamma rays, because they have zero mass',
    option_d: 'All three suffer identical deflections',
    correct_answer: 'A',
    explanation: 'Beta particles (electrons) have a very tiny mass (~1/7300 of an alpha particle) compared to their charge, giving them a very large specific charge (q/m). Therefore, they undergo far greater deflection than heavy alpha particles. Gamma rays carry zero charge and are unaffected.',
    tip: 'Beta = greatest deflection (tiny mass). Alpha = slight deflection in opposite direction. Gamma = zero deflection (neutral).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 62,
    topic: 'Radioactive Decay & Half-Life',
    difficulty: 'Medium',
    text: 'A radioactive isotope has a half-life of 4 hours. If an initial sample contains 80 g of the isotope, what mass of the isotope remains undecayed after 16 hours?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Axes -->
      <line x1="50" y1="150" x2="350" y2="150" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="150" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
      <!-- Exponential curve -->
      <path d="M 50 30 Q 90 90 130 110 T 210 138 T 330 148" fill="none" stroke="#4F46E5" stroke-width="3"/>
      <!-- Labels -->
      <text x="42" y="34" font-size="11" font-weight="bold" fill="#475569" text-anchor="end">80g (N₀)</text>
      <text x="42" y="90" font-size="11" font-weight="bold" fill="#475569" text-anchor="end">40g</text>
      <text x="42" y="120" font-size="11" font-weight="bold" fill="#475569" text-anchor="end">20g</text>
      <text x="130" y="165" font-size="10" font-weight="bold" fill="#475569">4h</text>
      <text x="210" y="165" font-size="10" font-weight="bold" fill="#475569">8h</text>
      <text x="290" y="165" font-size="10" font-weight="bold" fill="#475569">16h</text>
      <text x="200" y="178" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Time Elapsed</text>
    </svg>`,
    option_a: '5.0 g',
    option_b: '10.0 g',
    option_c: '2.5 g',
    option_d: '20.0 g',
    correct_answer: 'A',
    explanation: 'Number of half-lives n = Total time / T₁/₂ = 16 / 4 = 4.\nRemaining mass N = N₀ / (2ⁿ) = 80 / (2⁴) = 80 / 16 = 5.0 g.',
    tip: 'Remaining mass after n half-lives: N = N₀ / 2ⁿ. Fraction decayed = 1 - (1 / 2ⁿ).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 63,
    topic: 'Nuclear Reactions',
    difficulty: 'Easy',
    text: 'When a Uranium-238 (₉₂U²³⁸) nucleus emits an alpha particle (₂He⁴), the resulting daughter nucleus has an atomic number and mass number of:',
    image_svg: null,
    option_a: 'Atomic number = 90, Mass number = 234 (Thorium-234)',
    option_b: 'Atomic number = 93, Mass number = 238 (Neptunium-238)',
    option_c: 'Atomic number = 91, Mass number = 234 (Protactinium-234)',
    option_d: 'Atomic number = 90, Mass number = 238',
    correct_answer: 'A',
    explanation: 'Alpha decay decreases atomic number (proton count) by 2 and mass number (nucleon count) by 4:\n₉₂U²³⁸ → ₉₀Th²³⁴ + ₂He⁴.',
    tip: 'Alpha decay: A decreases by 4, Z decreases by 2. Beta minus decay: A unchanged, Z increases by 1.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 64,
    topic: 'Binding Energy & Mass Defect',
    difficulty: 'Hard',
    text: 'If the mass defect in a nuclear fusion reaction is 0.025 a.m.u., calculate the energy released in mega-electron-volts (MeV). [1 a.m.u. = 931.5 MeV]',
    image_svg: null,
    option_a: '23.29 MeV',
    option_b: '37.26 MeV',
    option_c: '14.50 MeV',
    option_d: '46.58 MeV',
    correct_answer: 'A',
    explanation: 'Energy released E = Δm × 931.5 MeV\nE = 0.025 × 931.5 = 23.2875 MeV ≈ 23.29 MeV.',
    tip: 'Direct conversion: 1 atomic mass unit (u) equivalent energy = 931.5 MeV. Just multiply mass defect by 931.5.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 65,
    topic: 'Semiconductor Physics',
    difficulty: 'Easy',
    text: 'A pure silicon crystal (tetravalent) is converted into a p-type semiconductor by doping it with an impurity atom of:',
    image_svg: null,
    option_a: 'Boron (trivalent)',
    option_b: 'Phosphorus (pentavalent)',
    option_c: 'Arsenic (pentavalent)',
    option_d: 'Antimony (pentavalent)',
    correct_answer: 'A',
    explanation: 'Trivalent impurity atoms (e.g. Boron, Aluminium, Gallium, Indium) have 3 valence electrons, leaving a vacant spot ("hole") in the covalent bond lattice to form a p-type semiconductor where holes are majority charge carriers.',
    tip: 'p-type = Trivalent dopant (Boron, Indium). n-type = Pentavalent dopant (Phosphorus, Arsenic).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 66,
    topic: 'P-N Junction Diode',
    difficulty: 'Medium',
    text: 'The graph illustrates the current-voltage (I-V) characteristic curve of a silicon p-n junction diode. The forward knee voltage (threshold conduction voltage) is approximately:',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Axes -->
      <line x1="80" y1="120" x2="350" y2="120" stroke="#334155" stroke-width="2"/>
      <line x1="160" y1="170" x2="160" y2="20" stroke="#334155" stroke-width="2"/>
      <!-- Forward bias curve -->
      <path d="M 160 120 L 220 120 Q 240 115 250 30" fill="none" stroke="#2563EB" stroke-width="3"/>
      <!-- Knee voltage marker -->
      <line x1="230" y1="120" x2="230" y2="135" stroke="#DC2626" stroke-width="2"/>
      <text x="230" y="148" font-size="11" font-weight="bold" fill="#DC2626" text-anchor="middle">~0.7 V</text>
      <!-- Labels -->
      <text x="320" y="112" font-size="11" font-weight="bold" fill="#475569">V_f (V)</text>
      <text x="175" y="30" font-size="11" font-weight="bold" fill="#475569">I_f (mA)</text>
    </svg>`,
    option_a: '0.7 V',
    option_b: '0.3 V',
    option_c: '1.5 V',
    option_d: '0.1 V',
    correct_answer: 'A',
    explanation: 'For a silicon p-n junction diode, the potential barrier is approximately 0.7 V. Conduction increases rapidly once the applied forward bias voltage exceeds this knee voltage. (For germanium, it is 0.3 V).',
    tip: 'Threshold knee voltage: Silicon = 0.7 V; Germanium = 0.3 V.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 67,
    topic: 'Rectification',
    difficulty: 'Medium',
    text: 'The circuit diagram shows a full-wave bridge rectifier using four semiconductor diodes. How many diodes conduct during any single half-cycle of the AC input?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Diamond Bridge of 4 diodes -->
      <polygon points="190,30 110,90 190,150 270,90" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Diode Symbols on the arms -->
      <text x="145" y="55" font-size="11" font-weight="bold" fill="#4F46E5">D₁</text>
      <text x="235" y="55" font-size="11" font-weight="bold" fill="#4F46E5">D₂</text>
      <text x="145" y="130" font-size="11" font-weight="bold" fill="#4F46E5">D₃</text>
      <text x="235" y="130" font-size="11" font-weight="bold" fill="#4F46E5">D₄</text>
      <!-- AC Input left and right -->
      <circle cx="50" cy="90" r="14" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
      <path d="M 42 90 Q 46 84 50 90 T 58 90" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      <text x="50" y="118" font-size="10" font-weight="bold" fill="#DC2626" text-anchor="middle">AC in</text>
      <line x1="64" y1="90" x2="110" y2="90" stroke="#334155" stroke-width="2"/>
      <line x1="270" y1="90" x2="330" y2="90" stroke="#334155" stroke-width="2"/>
      <text x="345" y="94" font-size="11" font-weight="bold" fill="#059669">Load</text>
    </svg>`,
    option_a: 'Two diodes',
    option_b: 'Four diodes',
    option_c: 'One diode',
    option_d: 'Three diodes',
    correct_answer: 'A',
    explanation: 'In a bridge rectifier, during the positive half-cycle, one diagonally opposite pair of diodes (e.g. D₁ and D₄) conducts in forward bias while the other pair is reverse-biased. During the negative half-cycle, the other pair (D₂ and D₃) conducts.',
    tip: 'Full-wave bridge rectifier: 4 diodes total, exactly 2 diodes conduct per half-cycle.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 68,
    topic: 'Logic Gates',
    difficulty: 'Medium',
    text: 'The logic circuit consists of an AND gate followed immediately by a NOT gate. What single basic logic gate is equivalent to this combination?',
    image_svg: `<svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="150" fill="#F8FAFC" rx="10"/>
      <!-- Input lines -->
      <line x1="40" y1="55" x2="100" y2="55" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="95" x2="100" y2="95" stroke="#334155" stroke-width="2"/>
      <text x="30" y="60" font-size="11" font-weight="bold" fill="#334155">A</text>
      <text x="30" y="100" font-size="11" font-weight="bold" fill="#334155">B</text>
      <!-- AND Gate -->
      <path d="M 100 40 L 140 40 A 35 35 0 0 1 140 110 L 100 110 Z" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2.5"/>
      <text x="125" y="80" font-size="10" font-weight="bold" fill="#4F46E5" text-anchor="middle">AND</text>
      <!-- Intermediate line -->
      <line x1="175" y1="75" x2="220" y2="75" stroke="#334155" stroke-width="2"/>
      <!-- NOT Gate -->
      <polygon points="220,50 260,75 220,100" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
      <circle cx="265" cy="75" r="4" fill="#FFFFFF" stroke="#D97706" stroke-width="2"/>
      <!-- Output line -->
      <line x1="270" y1="75" x2="330" y2="75" stroke="#334155" stroke-width="2"/>
      <text x="345" y="80" font-size="12" font-weight="bold" fill="#DC2626">Y</text>
    </svg>`,
    option_a: 'NAND gate',
    option_b: 'NOR gate',
    option_c: 'XOR gate',
    option_d: 'OR gate',
    correct_answer: 'A',
    explanation: 'An AND gate produces output A · B. The following NOT gate inverts this output to produce Y = NOT(A · B) = (A · B)‾, which defines the NAND gate. NAND is a universal logic gate.',
    tip: 'AND + NOT = NAND gate. OR + NOT = NOR gate. NAND and NOR are universal gates because any logic circuit can be built entirely from them.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 69,
    topic: 'Thermionic Emission',
    difficulty: 'Easy',
    text: 'Thermionic emission is the process whereby free electrons are liberated from the surface of a metal as a result of:',
    image_svg: null,
    option_a: 'Thermal energy (heating the metal)',
    option_b: 'Incident light photons',
    option_c: 'High electric field application',
    option_d: 'Bombardment by positive ions',
    correct_answer: 'A',
    explanation: 'Thermionic emission occurs when a metal is heated to a high temperature, transferring sufficient thermal kinetic energy to free conduction electrons to overcome the surface work function barrier.',
    tip: 'Thermionic emission = heating. Photoelectric emission = light photons. Secondary emission = electron bombardment.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 70,
    topic: 'Lasers & Modern Physics',
    difficulty: 'Medium',
    text: 'A LASER beam differs from ordinary light because laser light is strictly:',
    image_svg: null,
    option_a: 'Monochromatic, coherent, and highly unidirectional',
    option_b: 'Polychromatic, incoherent, and divergent',
    option_c: 'Composed solely of longitudinal sound waves',
    option_d: 'Infinitely energetic with zero frequency',
    correct_answer: 'A',
    explanation: 'LASER (Light Amplification by Stimulated Emission of Radiation) produces light that is monochromatic (single precise wavelength), coherent (all waves in phase), and highly collimated (unidirectional with minimal divergence).',
    tip: 'Key properties of laser: Monochromatic (single λ), Coherent (constant phase relationship), and Collimated (parallel beam).'
  }
];
