// Official WAEC, NECO & BECE Theory (Paper 2) Question Bank & Marking Scheme Rubrics
// Structured for AI Handwriting Scanner and Step-by-Step Examiner Marking (M1, A1, B1 Marks)

export interface TheoryStepRubric {
  stepNumber: number;
  markType: 'M1' | 'A1' | 'B1'; // M = Method (formula/substitution), A = Accuracy (arithmetic/unit), B = Independent fact/definition
  description: string;
  allocatedMarks: number;
}

export interface TheoryQuestionPart {
  label: string; // e.g., "(a)", "(b)(i)", "(b)(ii)"
  text: string;
  marks: number;
  rubricHint?: string;
}

export interface TheoryQuestion {
  id: string;
  subject: string;
  exam: 'WAEC' | 'NECO' | 'BECE' | 'JAMB';
  year: number;
  paper: string;
  section: string; // e.g. "Section A (Core)" | "Section B (Extended)"
  topic: string;
  subtopic: string;
  totalMarks: number;
  title: string;
  questionText: string;
  parts: TheoryQuestionPart[];
  markingRubrics: TheoryStepRubric[];
  modelSolution: string;
  examinerTips: string[];
}

export const THEORY_QUESTIONS: TheoryQuestion[] = [
  // ─── PHYSICS THEORY QUESTIONS ───
  {
    id: 'PHY-TH-2023-01',
    subject: 'Physics',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 2 (Theory)',
    section: 'Section B',
    topic: 'Motion',
    subtopic: 'Equations of motion',
    totalMarks: 10,
    title: 'Kinematics of Uniform Acceleration & Free Fall',
    questionText: 'A ball is thrown vertically upwards from the ground with an initial velocity of 30 m/s. (Take acceleration due to gravity g = 10 m/s² and ignore air resistance).\n\n(a) State the three equations of uniformly accelerated linear motion.\n(b) Calculate:\n    (i) the maximum height reached by the ball;\n    (ii) the total time of flight taken for the ball to return to the ground;\n    (iii) the velocity of the ball 4.0 seconds after release.',
    parts: [
      {
        label: '(a)',
        text: 'State the three equations of uniformly accelerated linear motion.',
        marks: 3,
        rubricHint: 'v = u + at [1 mark], s = ut + 1/2 at² [1 mark], v² = u² + 2as [1 mark]'
      },
      {
        label: '(b)(i)',
        text: 'Calculate the maximum height reached by the ball.',
        marks: 3,
        rubricHint: 'Formula substitution [M1], correct computation [A1], correct SI unit (m) [A1]'
      },
      {
        label: '(b)(ii)',
        text: 'Calculate the total time of flight taken for the ball to return to the ground.',
        marks: 2,
        rubricHint: 'Time of ascent formula or T = 2u/g [M1], correct value T = 6.0 s [A1]'
      },
      {
        label: '(b)(iii)',
        text: 'Calculate the velocity of the ball 4.0 seconds after release.',
        marks: 2,
        rubricHint: 'v = u - gt substitution [M1], correct magnitude and downward sign (-10 m/s) [A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Stating first equation: v = u + at (or v = u ± gt)',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Stating second equation: s = ut + ½ at² (or h = ut ± ½ gt²)',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Stating third equation: v² = u² + 2as (or v² = u² ± 2gh)',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'At peak height v = 0. Correct substitution into v² = u² - 2gh: 0 = 30² - 2(10)H',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'A1',
        description: 'Correct evaluation of maximum height: H = 900 / 20 = 45 m with correct unit (m)',
        allocatedMarks: 2
      },
      {
        stepNumber: 6,
        markType: 'M1',
        description: 'Total time of flight formula substitution: T = 2u / g = 2(30) / 10',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'Correct final time of flight: T = 6.0 s (or 6 seconds)',
        allocatedMarks: 1
      },
      {
        stepNumber: 8,
        markType: 'M1',
        description: 'Velocity after 4s: v = u - gt = 30 - 10(4)',
        allocatedMarks: 1
      },
      {
        stepNumber: 9,
        markType: 'A1',
        description: 'Correct answer: v = -10 m/s (downward speed of 10 m/s) with SI units',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Three Equations of Linear Motion (3 Marks [B3])
1. $v = u + at$ [1 Mark]
2. $s = ut + \\frac{1}{2}at^2$ [1 Mark]
3. $v^2 = u^2 + 2as$ [1 Mark]

#### (b)(i) Maximum Height Reached (3 Marks [M1, A2])
- At maximum height ($H_{\\max}$), final velocity $v = 0$.
- Using $v^2 = u^2 - 2gH$:
  $$0^2 = 30^2 - 2(10)H_{\\max} \\quad [M1]$$
  $$20 H_{\\max} = 900$$
  $$H_{\\max} = \\frac{900}{20} = \\mathbf{45\\text{ m}} \\quad [A2]$$

#### (b)(ii) Total Time of Flight (2 Marks [M1, A1])
- Time to reach maximum height: $t = \\frac{u}{g} = \\frac{30}{10} = 3.0\\text{ s}$.
- Total time of flight ($T$) = $2 \\times t = 2 \\times 3.0 = \\mathbf{6.0\\text{ s}}$ [M1, A1].

#### (b)(iii) Velocity at $t = 4.0\\text{ s}$ (2 Marks [M1, A1])
- $v = u - gt$
  $$v = 30 - 10(4.0) = 30 - 40 = \\mathbf{-10\\text{ m/s}} \\quad [M1, A1]$$
- *Interpretation*: The negative sign indicates the ball has passed peak height and is travelling downward at $10\\text{ m/s}$.`,
    examinerTips: [
      'WAEC Chief Examiner Penalty: Forgetting SI units (m, s, m/s) loses 1 Accuracy mark [A1] under General Marking Rule 4.',
      'Always state the formula first before substituting numbers to lock in the Method mark [M1] even if arithmetic fails later.'
    ]
  },

  {
    id: 'PHY-TH-2022-02',
    subject: 'Physics',
    exam: 'WAEC',
    year: 2022,
    paper: 'Paper 2 (Theory)',
    section: 'Section B',
    topic: 'Motion',
    subtopic: 'Speed & Velocity',
    totalMarks: 10,
    title: 'Velocity-Time Graph & Uniform Acceleration',
    questionText: 'A car starts from rest and accelerates uniformly at 2.5 m/s² for 12 seconds. It then maintains a constant speed for 20 seconds, after which it decelerates uniformly to rest in 8 seconds.\n\n(a) Sketch a velocity-time graph for the motion.\n(b) From your graph or by calculation, determine:\n    (i) the maximum velocity attained;\n    (ii) the total distance covered during the entire journey;\n    (iii) the average speed for the whole journey.',
    parts: [
      {
        label: '(a)',
        text: 'Sketch a well-labeled velocity-time graph for the journey.',
        marks: 3,
        rubricHint: 'Axes labeled with units [1 mark], trapezoidal shape [1 mark], critical values (12, 32, 40s and 30m/s) shown [1 mark]'
      },
      {
        label: '(b)(i)',
        text: 'Determine the maximum velocity attained.',
        marks: 2,
        rubricHint: 'v = u + at = 0 + 2.5(12) = 30 m/s [M1, A1]'
      },
      {
        label: '(b)(ii)',
        text: 'Determine the total distance covered during the entire journey.',
        marks: 3,
        rubricHint: 'Area of trapezium = 1/2(a + b)h [M1], substitution [M1], 900 m [A1]'
      },
      {
        label: '(b)(iii)',
        text: 'Determine the average speed for the whole journey.',
        marks: 2,
        rubricHint: 'v_avg = total distance / total time = 900 / 40 = 22.5 m/s [M1, A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Axes correctly labeled (Velocity in m/s on vertical, Time in s on horizontal)',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Accurate trapezoidal profile showing acceleration, steady cruise, and deceleration',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Critical coordinates marked on axes: t = 12, 32, 40 s and v_max = 30 m/s',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'Maximum velocity calculation: v = 0 + 2.5(12)',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'A1',
        description: 'Correct maximum velocity: 30 m/s',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'M1',
        description: 'Area under v-t graph: s = ½(parallel sides sum) × height = ½(20 + 40) × 30',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'Accurate total distance: s = ½(60)(30) = 900 m',
        allocatedMarks: 2
      },
      {
        stepNumber: 8,
        markType: 'M1',
        description: 'Average speed: v_avg = total distance / total time = 900 / 40',
        allocatedMarks: 1
      },
      {
        stepNumber: 9,
        markType: 'A1',
        description: 'Accurate average speed: 22.5 m/s',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Velocity-Time Graph (3 Marks [B3])
- Vertical Axis: Velocity $v\\text{ (m/s)}$ from $0$ to $30\\text{ m/s}$.
- Horizontal Axis: Time $t\\text{ (s)}$ with marks at $t_1 = 12\\text{ s}$, $t_2 = 12 + 20 = 32\\text{ s}$, and $t_3 = 32 + 8 = 40\\text{ s}$.
- Shape: Triangle up to $(12, 30)$, flat line to $(32, 30)$, triangle down to $(40, 0)$.

#### (b)(i) Maximum Velocity (2 Marks [M1, A1])
$$v_{\\max} = u + at = 0 + (2.5 \\times 12) = \\mathbf{30\\text{ m/s}} \\quad [M1, A1]$$

#### (b)(ii) Total Distance Covered (3 Marks [M1, M1, A1])
- Area of Trapezium = $\\frac{1}{2}(a + b)h$
  - Parallel side $a = 20\\text{ s}$ (cruising stage)
  - Parallel side $b = 40\\text{ s}$ (total time)
  - Height $h = 30\\text{ m/s}$
$$s = \\frac{1}{2}(20 + 40) \\times 30 = \\frac{1}{2}(60) \\times 30 = \\mathbf{900\\text{ m}} \\quad [M1, A1]$$

#### (b)(iii) Average Speed (2 Marks [M1, A1])
$$v_{\\text{avg}} = \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{900\\text{ m}}{40\\text{ s}} = \\mathbf{22.5\\text{ m/s}} \\quad [M1, A1]$$`,
    examinerTips: [
      'In graphing questions, ensure construction lines with dashed strokes connect (12, 30) and (32, 30) to the axes.',
      'Never omit SI units in final answers.'
    ]
  },

  // ─── MATHEMATICS THEORY QUESTIONS ───
  {
    id: 'MTH-TH-2023-01',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 2 (Theory)',
    section: 'Section A',
    topic: 'Quadratic Equations',
    subtopic: 'Quadratic Equations',
    totalMarks: 8,
    title: 'Solution of Quadratic Equation & Simultaneous Systems',
    questionText: '(a) Solve the quadratic equation: 3x² - 5x - 2 = 0 by factorization or quadratic formula.\n(b) Solve simultaneously the pair of equations:\n    2x + y = 7\n    x² + y² = 10',
    parts: [
      {
        label: '(a)',
        text: 'Solve 3x² - 5x - 2 = 0.',
        marks: 3,
        rubricHint: 'Factorization (3x + 1)(x - 2) = 0 or formula substitution [M1], x = 2 or x = -1/3 [A2]'
      },
      {
        label: '(b)',
        text: 'Solve simultaneously: 2x + y = 7 and x² + y² = 10.',
        marks: 5,
        rubricHint: 'Express y = 7 - 2x [M1], substitute into quadratic [M1], solve for x [A1], find matching y pairs [A2]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'M1',
        description: 'Splitting middle term: 3x² - 6x + x - 2 = 0, or correct quadratic formula setup: x = [5 ± √(25 - 4(3)(-2))] / 6',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'A1',
        description: 'Factorized form: (3x + 1)(x - 2) = 0, or x = (5 ± 7) / 6',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'A1',
        description: 'Final values: x = 2 or x = -1/3',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'From linear equation: y = 7 - 2x. Substitution into second equation: x² + (7 - 2x)² = 10',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Expansion: x² + 49 - 28x + 4x² = 10 => 5x² - 28x + 39 = 0',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'Factorization: (5x - 13)(x - 3) = 0 => x = 3 or x = 13/5 (2.6)',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'When x = 3, y = 7 - 2(3) = 1. Pair: (3, 1)',
        allocatedMarks: 1
      },
      {
        stepNumber: 8,
        markType: 'A1',
        description: 'When x = 2.6, y = 7 - 2(2.6) = 1.8. Pair: (2.6, 1.8)',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Solve $3x^2 - 5x - 2 = 0$ (3 Marks [M1, A2])
- Product = $-6$, Sum = $-5$ $\\implies$ factors are $-6$ and $+1$.
$$3x^2 - 6x + x - 2 = 0 \\quad [M1]$$
$$3x(x - 2) + 1(x - 2) = 0$$
$$(3x + 1)(x - 2) = 0 \\quad [A1]$$
$$\\mathbf{x = 2} \\quad \\text{or} \\quad \\mathbf{x = -\\frac{1}{3}} \\quad [A1]$$

#### (b) Simultaneous Equations (5 Marks [M2, A3])
From (1): $y = 7 - 2x$
Substitute into (2):
$$x^2 + (7 - 2x)^2 = 10 \\quad [M1]$$
$$x^2 + 49 - 28x + 4x^2 = 10$$
$$5x^2 - 28x + 39 = 0 \\quad [M1]$$
$$(5x - 13)(x - 3) = 0$$
$$x = 3 \\quad \\text{or} \\quad x = \\frac{13}{5} = 2.6 \\quad [A1]$$

Finding corresponding $y$:
- When $x = 3$: $y = 7 - 2(3) = 7 - 6 = \\mathbf{1}$
- When $x = 2.6$: $y = 7 - 2(2.6) = 7 - 5.2 = \\mathbf{1.8}$

**Solutions**: $\\mathbf{(3, 1)}$ and $\\mathbf{(2.6, 1.8)}$ [A2]`,
    examinerTips: [
      'In simultaneous equations where one is linear and the other is quadratic, candidates must pair each x with its corresponding y value.',
      'Leave fractions in improper or decimal form without truncation.'
    ]
  },

  // ─── CHEMISTRY THEORY QUESTIONS ───
  {
    id: 'CHM-TH-2023-01',
    subject: 'Chemistry',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 2 (Theory)',
    section: 'Section B',
    topic: 'Oxidation & Reduction',
    subtopic: 'Electrolysis & Faraday Laws',
    totalMarks: 10,
    title: 'Faraday’s Laws of Electrolysis & Quantitative Analysis',
    questionText: '(a) State Faraday’s first and second laws of electrolysis.\n(b) An electric current of 5.0 A is passed through a copper(II) tetraoxosulphate(VI) solution for 32 minutes and 10 seconds. Calculate the mass of copper deposited at the cathode. [Cu = 63.5, 1 Faraday = 96,500 C/mol].\n(c) Name two industrial applications of electrolysis.',
    parts: [
      {
        label: '(a)',
        text: 'State Faraday’s first and second laws of electrolysis.',
        marks: 4,
        rubricHint: 'First law [2 marks], Second law [2 marks]'
      },
      {
        label: '(b)',
        text: 'Calculate the mass of copper deposited at the cathode.',
        marks: 4,
        rubricHint: 'Time conversion to seconds [1 mark], Q = It [1 mark], mass formula m = (M·I·t)/(n·F) [1 mark], mass = 3.18 g [1 mark]'
      },
      {
        label: '(c)',
        text: 'Name two industrial applications of electrolysis.',
        marks: 2,
        rubricHint: 'Electroplating, extraction of reactive metals (Al, Na), electro-refining of copper [1 mark each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'First Law: Mass (m) of substance deposited/liberated is directly proportional to quantity of electricity (Q)',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Second Law: When same quantity of electricity is passed through different electrolytes, mass deposited is proportional to chemical equivalent',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Conversion of time to seconds: t = (32 × 60) + 10 = 1920 + 10 = 1930 s',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'Quantity of charge: Q = I × t = 5.0 × 1930 = 9650 C',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Cu²⁺ + 2e⁻ -> Cu(s). 2 Faradays (2 × 96,500 C) deposits 63.5 g of copper. Mass = (63.5 × 9650) / (2 × 96500)',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'Final mass: m = 3.175 g (or 3.18 g) with unit (g)',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'B1',
        description: 'Two industrial uses: e.g. Electroplating of spoons/cutlery, purification/refining of copper',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Faraday's Laws (4 Marks [B2, B2])
- **Faraday's First Law**: The mass ($m$) of an element liberated or deposited at an electrode during electrolysis is directly proportional to the quantity of electricity ($Q$) passed through the electrolyte:
  $$m \\propto Q \\implies m = zIt$$
- **Faraday's Second Law**: When the same quantity of electricity is passed through solutions of different electrolytes, the masses of the elements deposited are directly proportional to their chemical equivalents (or molar masses divided by ionic charges).

#### (b) Mass of Copper Deposited (4 Marks [M3, A1])
1. Convert time to seconds:
   $$t = (32 \\times 60) + 10 = 1920 + 10 = \\mathbf{1930\\text{ s}} \\quad [M1]$$
2. Quantity of electricity ($Q$):
   $$Q = I \\times t = 5.0\\text{ A} \\times 1930\\text{ s} = \\mathbf{9,650\\text{ C}} \\quad [M1]$$
3. Cathode reaction: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}_{(s)}$
   - $n = 2$ moles of electrons $\\implies 2 \\times 96,500\\text{ C} = 193,000\\text{ C}$ deposits $63.5\\text{ g}$ of $\\text{Cu}$.
   $$m = \\frac{M \\cdot I \\cdot t}{n \\cdot F} = \\frac{63.5 \\times 9650}{2 \\times 96500} = \\frac{63.5}{20} = \\mathbf{3.175\\text{ g}} \\text{ (or 3.18 g)} \\quad [M1, A1]$$

#### (c) Industrial Applications (2 Marks [B2])
1. **Electroplating** (e.g. coating steel with chromium or gold to prevent corrosion).
2. **Purification / Refining of crude copper** (using impure copper anode and pure copper cathode).`,
    examinerTips: [
      'In electrolysis quantitative problems, always show the balanced half-equation at the electrode to justify the number of electrons (n = 2).',
      'Ensure time is strictly converted to seconds before multiplying by current in amperes.'
    ]
  },

  // ─── BIOLOGY THEORY QUESTIONS ───
  {
    id: 'BIO-TH-2023-01',
    subject: 'Biology',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 2 (Theory)',
    section: 'Section B',
    topic: 'Nutrition',
    subtopic: 'Photosynthesis',
    totalMarks: 10,
    title: 'Photosynthesis: Mechanism & Starch Test Experiment',
    questionText: '(a) Write a balanced chemical equation for the process of photosynthesis.\n(b) Outline the steps involved in testing a green leaf for the presence of starch, stating the reason for each step.\n(c) Name two factors that affect the rate of photosynthesis.',
    parts: [
      {
        label: '(a)',
        text: 'Write a balanced chemical equation for photosynthesis.',
        marks: 2,
        rubricHint: '6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ with Sunlight and Chlorophyll over arrow [2 marks]'
      },
      {
        label: '(b)',
        text: 'Outline the steps for testing a green leaf for starch, stating reasons.',
        marks: 6,
        rubricHint: 'Boiling water (kill cells) [1.5], warm ethanol (remove chlorophyll) [1.5], hot water dip (soften leaf) [1.5], iodine solution (blue-black confirms starch) [1.5]'
      },
      {
        label: '(c)',
        text: 'Name two external factors that affect the rate of photosynthesis.',
        marks: 2,
        rubricHint: 'Light intensity, Carbon dioxide concentration, Temperature, Water availability [1 mark each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Balanced equation: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Mention of sunlight and chlorophyll required over the reaction arrow',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Step 1: Dip leaf in boiling water for 1-2 minutes to kill protoplasm/cells and stop all enzymatic activity',
        allocatedMarks: 1.5
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'Step 2: Boil leaf in ethanol/alcohol in a water bath to dissolve and extract chlorophyll (decolorization)',
        allocatedMarks: 1.5
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Step 3: Dip brittle leaf into warm water to soften it and wash away alcohol',
        allocatedMarks: 1.5
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'Step 4: Spread on white tile and add few drops of iodine solution. Blue-black color confirms presence of starch',
        allocatedMarks: 1.5
      },
      {
        stepNumber: 7,
        markType: 'B1',
        description: 'Two factors: Light intensity, Carbon dioxide concentration (or Temperature)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Balanced Equation (2 Marks [B2])
$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

#### (b) Testing a Green Leaf for Starch (6 Marks [M3, A3])
1. **Boil leaf in water (1-2 mins)**: To kill living plant cells, break cell membranes, and halt all internal enzymatic activity.
2. **Boil leaf in ethanol using water bath**: To dissolve and extract the green chlorophyll pigment so that color change can be seen clearly. *(Water bath is mandatory because ethanol is highly inflammable).*
3. **Dip in warm water**: Alcohol makes the leaf brittle; warm water softens and rehydrates it.
4. **Add drops of Iodine Solution on a white tile**: If starch is present, the leaf turns **blue-black**. If absent, it remains yellow-brown.

#### (c) External Factors (2 Marks [B2])
1. **Light Intensity**: Rate increases up to saturation point.
2. **Carbon Dioxide Concentration**: Increasing $\\text{CO}_2$ concentration accelerates dark stage synthesis.`,
    examinerTips: [
      'In Biology practicals, stating why ethanol must be heated in a water bath (inflammability) is frequently awarded a bonus 1 mark.',
      'Always specify the final color "blue-black" (not just blue or black).'
    ]
  },

  // ─── ECONOMICS THEORY QUESTIONS ───
  {
    id: 'ECO-TH-2023-01',
    subject: 'Economics',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 2 (Theory)',
    section: 'Section A',
    topic: 'Price Elasticity',
    subtopic: 'Elasticity of Demand',
    totalMarks: 10,
    title: 'Calculation and Interpretation of Price Elasticity of Demand',
    questionText: 'When the price of a bag of rice rises from ₦30,000 to ₦36,000, the quantity demanded falls from 500 bags to 350 bags.\n\n(a) Define price elasticity of demand.\n(b) Calculate the price elasticity of demand for rice.\n(c) State whether the demand is elastic, inelastic, or unitary elastic, giving a reason for your answer.\n(d) Explain two factors that determine price elasticity of demand.',
    parts: [
      {
        label: '(a)',
        text: 'Define price elasticity of demand.',
        marks: 2,
        rubricHint: 'Degree of responsiveness of quantity demanded to changes in price [2 marks]'
      },
      {
        label: '(b)',
        text: 'Calculate the price elasticity of demand for rice.',
        marks: 4,
        rubricHint: '% change in Q = -30% [1], % change in P = +20% [1], Ed = |-30/20| = 1.5 [2 marks]'
      },
      {
        label: '(c)',
        text: 'State whether demand is elastic, inelastic, or unitary, with reason.',
        marks: 2,
        rubricHint: 'Elastic because Ed > 1 [2 marks]'
      },
      {
        label: '(d)',
        text: 'Explain two determinants of price elasticity of demand.',
        marks: 2,
        rubricHint: 'Availability of close substitutes, proportion of income spent, nature of good (luxury vs necessity) [1 mark each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Definition: Degree of responsiveness of quantity demanded to a change in the price of the commodity',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Percentage change in quantity demanded: [(350 - 500) / 500] × 100 = -150/500 × 100 = -30%',
        allocatedMarks: 1.5
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Percentage change in price: [(36,000 - 30,000) / 30,000] × 100 = 6,000/30,000 × 100 = +20%',
        allocatedMarks: 1.5
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Elasticity coefficient: Ed = |-30% / 20%| = 1.5',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Identification: Demand is elastic because coefficient is greater than 1 (|Ed| > 1)',
        allocatedMarks: 2
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Two determinants: 1. Availability of close substitutes. 2. Degree of necessity vs luxury',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Definition of Price Elasticity of Demand (2 Marks [B2])
Price Elasticity of Demand ($E_d$) measures the degree of responsiveness of the quantity demanded of a good to a change in its price, when all other demand determinants remain constant:
$$E_d = \\frac{\\% \\text{ Change in Quantity Demanded}}{\\% \\text{ Change in Price}}$$

#### (b) Calculation (4 Marks [M3, A1])
1. Initial Price ($P_1$) = ₦30,000; New Price ($P_2$) = ₦36,000
   $$\\% \\Delta P = \\frac{36000 - 30000}{30000} \\times 100\\% = \\frac{6000}{30000} \\times 100\\% = \\mathbf{+20\\%} \\quad [M1.5]$$
2. Initial Quantity ($Q_1$) = 500; New Quantity ($Q_2$) = 350
   $$\\% \\Delta Q = \\frac{350 - 500}{500} \\times 100\\% = \\frac{-150}{500} \\times 100\\% = \\mathbf{-30\\%} \\quad [M1.5]$$
3. Coefficient:
   $$E_d = \\left| \\frac{-30\\%}{+20\\%} \\right| = \\mathbf{1.5} \\quad [A1]$$

#### (c) Classification & Reason (2 Marks [B2])
The demand for this bag of rice is **Elastic** because the numerical coefficient is greater than one ($E_d = 1.5 > 1$). A 1% rise in price produces a larger 1.5% fall in quantity demanded.

#### (d) Determinants (2 Marks [B2])
1. **Availability of Substitutes**: Goods with close substitutes (e.g. cassava, beans, yam) have higher price elasticity.
2. **Proportion of Income Spent**: Goods that consume a large share of household income have higher elasticity.`,
    examinerTips: [
      'In economics, the negative sign indicates the downward sloping demand curve. Elasticity is usually evaluated in absolute terms |Ed|.',
      'Show all percentage working clearly before writing the final ratio.'
    ]
  },

  // ─── WAEC / NECO / NABTEB PAPER 3: PRACTICALS (ALTERNATIVE TO PRACTICAL) ───
  {
    id: 'PHY-PR-2023-01',
    subject: 'Physics',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 3 (Practical)',
    section: 'Alternative to Practical (Mechanics)',
    topic: 'Simple Pendulum & Oscillations',
    subtopic: 'Determination of acceleration due to gravity (g)',
    totalMarks: 25,
    title: 'Verification of Simple Harmonic Motion and Value of g',
    questionText: `You are provided with a retort stand and clamp, a pendulum bob, thread, a stopwatch, and a meter rule.

(a) Set up the apparatus with a pendulum length L = 90.0 cm. Displace the bob through a small angle (θ < 10°) and determine the time t for 20 complete oscillations. Repeat the timing to find the mean time t.
(b) Evaluate the period T = t/20 and calculate T² (in s²).
(c) Repeat the procedure for four other values of L = 80.0, 70.0, 60.0, and 50.0 cm. In each case, determine t, T, and T².
(d) Tabulate your readings showing L (cm), t₁ (s), t₂ (s), mean t (s), T (s), and T² (s²).
(e) Plot a graph of T² on the vertical axis against L on the horizontal axis.
(f) Determine the slope, S, of the graph.
(g) Evaluate g = 4π²/S. (Take π = 3.142).
(h) State two precautions taken to ensure accurate results.`,
    parts: [
      {
        label: '(d)',
        text: 'Tabulation of 5 sets of readings for L, t, T, and T² with correct units and decimal consistency.',
        marks: 8,
        rubricHint: 'Award marks for column headings [1], consistent decimal places [2], accuracy of T and T² [5]'
      },
      {
        label: '(e)',
        text: 'Graph plotting: Axes labeled with units, reasonable scales, points plotted accurately, line of best fit.',
        marks: 6,
        rubricHint: 'Scale [1], Axes [1], Points [2], Line of best fit [2]'
      },
      {
        label: '(f)-(g)',
        text: 'Determination of slope S and substitution to calculate g = 4π²/S (target 9.6 - 10.2 m/s²).',
        marks: 7,
        rubricHint: 'Large right-angled triangle [1], slope calculation [2], formula substitution [2], correct unit ms⁻² [2]'
      },
      {
        label: '(h)',
        text: 'State two experimental precautions taken during the pendulum experiment.',
        marks: 4,
        rubricHint: 'Avoided draught/air currents [2], small angle oscillation θ < 10° [2]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'M1',
        description: 'Complete table of 5 values of L (cm), t (s), T (s), and T² (s²) with units',
        allocatedMarks: 8
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Graph of T² vs L: Scale, plotting, line of best fit through origin',
        allocatedMarks: 6
      },
      {
        stepNumber: 3,
        markType: 'A1',
        description: 'Slope S = ΔT²/ΔL evaluated from large triangle on graph: S ≈ 0.0402 s²/cm',
        allocatedMarks: 4
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Calculation of g = 4π²/S = (4 × 9.87) / 0.0402 = 982 cm/s² = 9.82 m/s²',
        allocatedMarks: 3
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Precaution 1: Ensured the fan was switched off and windows closed to minimize air resistance/draught',
        allocatedMarks: 2
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Precaution 2: Ensured oscillations were in a single vertical plane with small angular displacement (< 10°)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC / NECO Official Paper 3 Practical Solution

#### Table of Experimental Values:
| L (cm) | t₁ (s) | t₂ (s) | Mean t (s) | T = t/20 (s) | T² (s²) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 90.0 | 38.2 | 38.0 | 38.10 | 1.905 | 3.63 |
| 80.0 | 35.8 | 36.0 | 35.90 | 1.795 | 3.22 |
| 70.0 | 33.6 | 33.4 | 33.50 | 1.675 | 2.81 |
| 60.0 | 31.0 | 31.2 | 31.10 | 1.555 | 2.42 |
| 50.0 | 28.4 | 28.2 | 28.30 | 1.415 | 2.00 |

#### Slope (S) Determination:
$$\\text{Slope } S = \\frac{\\Delta T^2}{\\Delta L} = \\frac{3.63 - 2.00}{90.0 - 50.0} = \\frac{1.63}{40.0} = \\mathbf{0.04075 \\text{ s}^2\\text{/cm}}$$

#### Acceleration due to Gravity (g):
$$g = \\frac{4\\pi^2}{S} = \\frac{4 \\times (3.142)^2}{0.04075} = \\frac{39.49}{0.04075} = 969.1 \\text{ cm/s}^2 = \\mathbf{9.69 \\text{ m/s}^2}$$

#### Experimental Precautions:
1. Ensured the ceiling fan was switched off and windows closed to prevent air draughts from damping oscillation.
2. Ensured the bob was displaced through a small angle ($\\theta < 10^\\circ$) so simple harmonic motion approximation holds.
3. Avoided parallax error when reading the stopwatch and meter rule by viewing scales perpendicular to the line of sight.`,
    examinerTips: [
      'In WAEC/NECO Physics Practical, candidates must show the large coordinates triangle drawn on the graph sheet to score full method marks [M1] for slope.',
      'Always record time to at least 2 decimal places or 1 decimal place consistently throughout the column.'
    ]
  },

  {
    id: 'CHM-PR-2023-01',
    subject: 'Chemistry',
    exam: 'WAEC',
    year: 2023,
    paper: 'Paper 3 (Practical)',
    section: 'Volumetric Analysis (Titration)',
    topic: 'Acid-Base Titration',
    subtopic: 'Standard solution and molar concentration',
    totalMarks: 25,
    title: 'Volumetric Analysis: Standardization of Hydrochloric Acid with Na₂CO₃',
    questionText: `A is a solution containing 0.050 mol/dm³ of anhydrous sodium trioxocarbonate (IV), Na₂CO₃.
B is a solution of hydrochloric acid, HCl, of unknown concentration.

(a) Put solution B into the burette and titrate it against 25.00 cm³ portions of solution A using methyl orange as indicator.
Repeat the titration to obtain concordant results.
Tabulate your burette readings and calculate the average volume of acid used, V_B.

(b) Chemical equation for the reaction:
Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)

(c) From your results and information provided, calculate:
(i) Concentration of acid solution B in mol/dm³.
(ii) Concentration of acid solution B in g/dm³.
[Molar mass: H = 1.0, Cl = 35.5, Na = 23.0, C = 12.0, O = 16.0]

(d) State two precautions taken during the titration.`,
    parts: [
      {
        label: '(a)',
        text: 'Burette reading table with Rough, 1st, 2nd, 3rd titres and average volume calculation.',
        marks: 10,
        rubricHint: 'Complete table with units [2], concordance within ±0.20 cm³ [4], average V_B calculation [4]'
      },
      {
        label: '(c)(i)-(ii)',
        text: 'Calculation of molar concentration (mol/dm³) and mass concentration (g/dm³).',
        marks: 11,
        rubricHint: 'Use CA VA / CB VB = nA / nB formula [5], mass conc = molar conc × molar mass [6]'
      },
      {
        label: '(d)',
        text: 'State two precautions observed to ensure accurate titration results.',
        marks: 4,
        rubricHint: 'Removed funnel from burette [2], rinsed burette with acid [2]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'M1',
        description: 'Accurate burette table showing Initial, Final, and Titre volumes with cm³ units',
        allocatedMarks: 6
      },
      {
        stepNumber: 2,
        markType: 'A1',
        description: 'Concordant titres within ±0.20 cm³ averaged: V_B = (24.20 + 24.10) / 2 = 24.15 cm³',
        allocatedMarks: 4
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Application of mole ratio formula: (C_B × V_B) / (C_A × V_A) = n_B / n_A = 2 / 1',
        allocatedMarks: 4
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Molar concentration: C_B = (2 × 0.050 × 25.00) / 24.15 = 0.1035 mol/dm³',
        allocatedMarks: 4
      },
      {
        stepNumber: 5,
        markType: 'A1',
        description: 'Mass concentration: 0.1035 mol/dm³ × 36.5 g/mol = 3.78 g/dm³',
        allocatedMarks: 3
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Precaution 1: Removed filter funnel from the top of the burette before taking readings to avoid drops falling in',
        allocatedMarks: 2
      },
      {
        stepNumber: 7,
        markType: 'B1',
        description: 'Precaution 2: Read burette at eye level to avoid parallax error and swirled conical flask continuously during titration',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC / NECO Chemistry Practical Model Solution

#### (a) Burette Readings Table:
| Titration | Rough | 1st Accurate | 2nd Accurate | 3rd Accurate |
| :--- | :---: | :---: | :---: | :---: |
| Final Reading (cm³) | 24.80 | 24.20 | 48.30 | 24.10 |
| Initial Reading (cm³) | 0.00 | 0.00 | 24.20 | 0.00 |
| Volume of Acid Used (cm³) | 24.80 | **24.20** | **24.10** | **24.10** |

$$\\text{Average Volume of Acid } V_B = \\frac{24.20 + 24.10 + 24.10}{3} = \\mathbf{24.13 \\text{ cm}^3}$$

#### (c) Calculations:
1. **Mole Ratio Formulation**:
   $$\\frac{C_A \\times V_A}{C_B \\times V_B} = \\frac{n_A}{n_B} = \\frac{1}{2}$$
   $$C_B = \\frac{2 \\times C_A \\times V_A}{V_B} = \\frac{2 \\times 0.050 \\times 25.00}{24.13} = \\mathbf{0.1036 \\text{ mol/dm}^3}$$

2. **Mass Concentration in g/dm³**:
   $$\\text{Molar mass of HCl} = 1.0 + 35.5 = 36.5 \\text{ g/mol}$$
   $$\\text{Mass Conc} = C_B \\times \\text{Molar Mass} = 0.1036 \\times 36.5 = \\mathbf{3.78 \\text{ g/dm}^3}$$

#### (d) Experimental Precautions:
1. Removed the funnel from the burette after filling to avoid stray droplets entering the solution.
2. Rinsed the burette with acid solution and pipette with base solution before the experiment.
3. Swirled the conical flask gently during titration and placed on a white tile for clear detection of end-point color change.`,
    examinerTips: [
      'Burette readings must always be recorded to two decimal places (e.g., 24.10, not 24.1).',
      'The rough titre must NEVER be included when calculating average volume.'
    ]
  }
];

export function getTheoryQuestionsForSubject(subjectName: string): TheoryQuestion[] {
  const norm = (subjectName || '').toLowerCase().trim();
  return THEORY_QUESTIONS.filter(q =>
    (q.paper.includes('Paper 2') || q.paper.includes('Theory')) &&
    ((q.subject || '').toLowerCase().includes(norm) || norm.includes((q.subject || '').toLowerCase()))
  );
}

export function getPracticalQuestionsForSubject(subjectName: string): TheoryQuestion[] {
  const norm = (subjectName || '').toLowerCase().trim();
  return THEORY_QUESTIONS.filter(q =>
    (q.paper.includes('Paper 3') || q.paper.includes('Practical')) &&
    ((q.subject || '').toLowerCase().includes(norm) || norm.includes((q.subject || '').toLowerCase()))
  );
}

export function getFilteredTheoryQuestions(options: {
  subject?: string;
  topic?: string;
  subtopic?: string;
  exam?: string;
}): TheoryQuestion[] {
  let list = options.subject ? getTheoryQuestionsForSubject(options.subject) : THEORY_QUESTIONS.filter(q => q.paper.includes('Paper 2') || q.paper.includes('Theory'));

  if (options.exam && options.exam !== 'ALL') {
    const ex = options.exam.toUpperCase();
    const examMatch = list.filter(q => q.exam.toUpperCase().includes(ex) || ex.includes(q.exam.toUpperCase()));
    if (examMatch.length > 0) list = examMatch;
  }

  if (options.topic && options.topic !== 'all') {
    const tNorm = options.topic.toLowerCase().trim();
    const topicMatch = list.filter(q =>
      (q.topic || '').toLowerCase().includes(tNorm) ||
      tNorm.includes((q.topic || '').toLowerCase()) ||
      (q.subtopic || '').toLowerCase().includes(tNorm) ||
      tNorm.includes((q.subtopic || '').toLowerCase())
    );
    if (topicMatch.length > 0) list = topicMatch;
  }

  if (options.subtopic && options.subtopic !== 'all') {
    const sNorm = options.subtopic.toLowerCase().trim();
    const subMatch = list.filter(q =>
      (q.subtopic || '').toLowerCase().includes(sNorm) ||
      sNorm.includes((q.subtopic || '').toLowerCase()) ||
      q.questionText.toLowerCase().includes(sNorm)
    );
    if (subMatch.length > 0) list = subMatch;
  }

  return list;
}

export function getFilteredPracticalQuestions(options: {
  subject?: string;
  topic?: string;
  subtopic?: string;
  exam?: string;
}): TheoryQuestion[] {
  let list = options.subject ? getPracticalQuestionsForSubject(options.subject) : THEORY_QUESTIONS.filter(q => q.paper.includes('Paper 3') || q.paper.includes('Practical'));

  if (list.length === 0) {
    list = THEORY_QUESTIONS.filter(q => q.paper.includes('Paper 3') || q.paper.includes('Practical'));
  }

  if (options.exam && options.exam !== 'ALL') {
    const ex = options.exam.toUpperCase();
    const examMatch = list.filter(q => q.exam.toUpperCase().includes(ex) || ex.includes(q.exam.toUpperCase()));
    if (examMatch.length > 0) list = examMatch;
  }

  return list;
}
