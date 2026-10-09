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
  },

  // ─── OFFICIAL WASSCE 2024 GENERAL MATHEMATICS CORE 2 (THEORY) ───
  {
    id: 'MATH-WASSCE-2024-Q1',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section A (Core)',
    topic: 'Variations',
    subtopic: 'Joint & Inverse Variation',
    totalMarks: 8,
    title: 'Joint Variation: Fuel Dispensation Time, Vehicles and Pumps',
    questionText: 'The time (t) taken to buy fuel at a filling station varies directly as the number of vehicles (V) in a queue and varies inversely as the number of pumps (P), available at the station. In a station with 5 pumps, it took 10 minutes to fuel 20 vehicles.\n\nFind the:\n(a) relationship between t, P and V;\n(b) time it takes to fuel 50 vehicles at a station with 2 pumps;\n(c) number of pumps required to fuel 40 vehicles in 20 minutes.',
    parts: [
      {
        label: '(a)',
        text: 'Find the relationship between t, P and V.',
        marks: 4,
        rubricHint: 't = kV / P [B1], k = (5 × 10) / 20 = 5/2 [M1, A1], t = 5V / (2P) [B1]'
      },
      {
        label: '(b)',
        text: 'Find the time it takes to fuel 50 vehicles at a station with 2 pumps.',
        marks: 2,
        rubricHint: 'Substitution t = (5 × 50) / (2 × 2) [M1], t = 62.5 minutes or 1 hr 2.5 mins [A1]'
      },
      {
        label: '(c)',
        text: 'Find the number of pumps required to fuel 40 vehicles in 20 minutes.',
        marks: 2,
        rubricHint: 'Substitution P = (5 × 40) / (2 × 20) [M1], P = 5 pumps [A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Formulating the joint variation equation: t = (k × V) / P',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Substituting given values P = 5, t = 10, V = 20 to solve for constant k: 10 = (k × 20) / 5',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'A1',
        description: 'Evaluating constant of variation: k = 50 / 20 = 5/2 or 2.5',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Expressing the final relationship: t = 5V / (2P) or t = 2.5V / P',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Substituting V = 50 and P = 2 into variation relationship: t = (5 × 50) / (2 × 2) = 250 / 4',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'Calculating exact duration: t = 62.5 minutes (or 1 hour 2.5 minutes)',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'M1',
        description: 'Rearranging for P and substituting V = 40 and t = 20: P = (5 × 40) / (2 × 20)',
        allocatedMarks: 1
      },
      {
        stepNumber: 8,
        markType: 'A1',
        description: 'Evaluating number of pumps: P = 200 / 40 = 5 pumps',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

#### (a) Finding the relationship between $t$, $P$, and $V$:
1. Write the variation formula:
   $$t \\propto \\frac{V}{P} \\implies t = \\frac{kV}{P}$$ *(Award **B1**)*
2. Substitute the given initial conditions ($P = 5$, $t = 10\\text{ mins}$, $V = 20$):
   $$10 = \\frac{k \\times 20}{5} \\implies 10 = 4k \\implies k = \\frac{10}{4} = \\frac{5}{2}$$ *(Award **M1, A1**)*
3. Substitute $k = \\frac{5}{2}$ back into the equation:
   $$t = \\frac{5V}{2P}$$ *(Award **B1**)*

---

#### (b) Time to fuel 50 vehicles with 2 pumps:
1. Substitute $V = 50$ and $P = 2$:
   $$t = \\frac{5 \\times 50}{2 \\times 2} = \\frac{250}{4} = \\mathbf{62.5 \\text{ minutes}}$$ *(Award **M1, A1**)*
   *(Or $1\\text{ hr } 2.5\\text{ mins}$ / $1\\text{ hr } 2\\text{ mins } 30\\text{ secs}$)*

---

#### (c) Number of pumps for 40 vehicles in 20 minutes:
1. Rearrange for $P$:
   $$P = \\frac{5V}{2t}$$
2. Substitute $V = 40$ and $t = 20$:
   $$P = \\frac{5 \\times 40}{2 \\times 20} = \\frac{200}{40} = \\mathbf{5 \\text{ pumps}}$$ *(Award **M1, A1**)*`,
    examinerTips: [
      'Always state the constant of proportionality k with its correct fraction value before substituting.',
      'Remember to include proper units (minutes, pumps) on your final numerical answers.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q2',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section A (Core)',
    topic: 'Algebra',
    subtopic: 'Speed, Distance and Time Equations',
    totalMarks: 8,
    title: 'Linear Fractional Equation: Motion and Average Speed',
    questionText: 'A car travelled a distance of (2x + 13) km at 67.5 km/h and (5x - 20) km at 72 km/h. If the total time for the entire journey was 90 minutes, find the value of x.',
    parts: [
      {
        label: '(a)',
        text: 'Express the time taken for each stage and find the value of x.',
        marks: 8,
        rubricHint: 'T₁ = (2x+13)/67.5 [B1], T₂ = (5x-20)/72 [B1], 90 mins = 1.5 hrs [B1], (2x+13)/67.5 + (5x-20)/72 = 1.5 [M1], 481.5x = 7704 [M1], x = 16 [A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Converting journey time to hours: 90 minutes = 90/60 = 1.5 hours',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Expressing time for first leg: T₁ = (2x + 13) / 67.5',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Expressing time for second leg: T₂ = (5x - 20) / 72',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'Equating sum of times to total duration: (2x + 13)/67.5 + (5x - 20)/72 = 1.5',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Clearing denominators by multiplying across by (67.5 × 72) = 4860: 72(2x + 13) + 67.5(5x - 20) = 7290',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'M1',
        description: 'Expanding and grouping like terms: 144x + 936 + 337.5x - 1350 = 7290 ⟹ 481.5x = 7704',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'Solving for x: x = 7704 / 481.5 = 16',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

1. **Unit Conversion**:
   $$\\text{Total time } T = 90\\text{ minutes} = \\frac{90}{60} = 1\\frac{1}{2} = 1.5 \\text{ hours}$$ *(Award **B1**)*

2. **Formulate Time for each stage**:
   $$T_1 = \\frac{\\text{Distance}_1}{\\text{Speed}_1} = \\frac{2x + 13}{67.5}$$ *(Award **B1**)*
   $$T_2 = \\frac{\\text{Distance}_2}{\\text{Speed}_2} = \\frac{5x - 20}{72}$$ *(Award **B1**)*

3. **Set up the Equation**:
   $$T_1 + T_2 = 1.5$$
   $$\\frac{2x + 13}{67.5} + \\frac{5x - 20}{72} = 1.5$$ *(Award **M1**)*

4. **Clear Fractions**:
   Multiply every term by $67.5 \\times 72 = 4860$:
   $$72(2x + 13) + 67.5(5x - 20) = 1.5 \\times 4860$$
   $$72(2x + 13) + 67.5(5x - 20) = 7290$$ *(Award **M1**)*

5. **Expand and Collect Terms**:
   $$144x + 936 + 337.5x - 1350 = 7290$$
   $$(144 + 337.5)x + (936 - 1350) = 7290$$
   $$481.5x - 414 = 7290$$
   $$481.5x = 7290 + 414 = 7704$$ *(Award **M1**)*

6. **Solve for $x$**:
   $$x = \\frac{7704}{481.5} = \\mathbf{16}$$ *(Award **A1**)*`,
    examinerTips: [
      'Ensure the 90 minutes is converted to 1.5 hours before forming the equation, because speeds are given in km/h.',
      'Multiply through by the product of denominators to avoid rounding decimals early.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q3',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section A (Core)',
    topic: 'Mensuration',
    subtopic: 'Circles & Ceramic Tile Flooring',
    totalMarks: 8,
    title: 'Mensuration: Perimeter, Area and Ceramic Tiling',
    questionText: 'A circular floor of a building is to be tiled with ceramic tiles each of side 40 cm × 40 cm. If the perimeter of the floor is 66 m, calculate, correct to the nearest whole number, the number of tiles required to completely tile the floor. [ Take π = 22/7 ]',
    parts: [
      {
        label: '(a)',
        text: 'Calculate the radius and area of the circular floor, and determine the number of tiles needed.',
        marks: 8,
        rubricHint: 'Perimeter 2πr = 66 ⟹ r = 21/2 m [M1, A1], Area = πr² = 346.5 m² [M1, A1], Tile Area = 0.16 m² [B1, B1], Tiles = 346.5/0.16 = 2166 tiles [M1, A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'M1',
        description: 'Equating circumference formula to 66 m: 2 × (22/7) × r = 66',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'A1',
        description: 'Solving for radius of floor: r = (66 × 7) / 44 = 21/2 m = 10.5 m',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Applying area of circle formula: Area = (22/7) × (21/2)²',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Evaluating area of floor: Area = (22/7) × 110.25 = 346.5 m²',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Converting tile side length to metres: 40 cm = 0.4 m (or working in cm²)',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Calculating surface area of one tile: 0.4 m × 0.4 m = 0.16 m² (or 1600 cm²)',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'M1',
        description: 'Dividing total floor area by tile area: Number of tiles = 346.5 / 0.16',
        allocatedMarks: 1
      },
      {
        stepNumber: 8,
        markType: 'A1',
        description: 'Evaluating and rounding to nearest whole integer: 2165.625 ⟹ 2166 tiles',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

1. **Find the Radius of the Circular Floor**:
   $$\\text{Perimeter (Circumference) } C = 2\\pi r = 66 \\text{ m}$$ *(Award **M1**)*
   $$2 \\times \\frac{22}{7} \\times r = 66$$
   $$\\frac{44r}{7} = 66 \\implies 44r = 462$$
   $$r = \\frac{462}{44} = \\frac{21}{2} = \\mathbf{10.5 \\text{ m}}$$ *(Award **A1**)*

2. **Calculate Area of the Floor**:
   $$\\text{Area of floor } A = \\pi r^2 = \\frac{22}{7} \\times \\left(\\frac{21}{2}\\right)^2$$ *(Award **M1**)*
   $$A = \\frac{22}{7} \\times \\frac{441}{4} = \\frac{22 \\times 63}{4} = \\frac{1386}{4} = \\mathbf{346.5 \\text{ m}^2}$$ *(Award **A1**)*

3. **Calculate Area of One Square Ceramic Tile**:
   $$\\text{Side of tile } = 40\\text{ cm} = 0.40\\text{ m}$$ *(Award **B1**)*
   $$\\text{Area of one tile } = 0.40 \\times 0.40 = \\mathbf{0.16 \\text{ m}^2}$$ *(Award **B1**)*

4. **Calculate Number of Tiles**:
   $$\\text{Number of tiles} = \\frac{\\text{Total Area of Floor}}{\\text{Area of One Tile}} = \\frac{346.5}{0.16}$$ *(Award **M1**)*
   $$\\text{Number of tiles} = 2165.625$$
   Rounding to the nearest whole number:
   $$\\mathbf{2166 \\text{ tiles}}$$ *(Award **A1**)*`,
    examinerTips: [
      'Always convert all dimensions to matching units (either all metres or all centimetres) before dividing.',
      'Check whether the question instructs to round to the nearest whole number.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q4',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section A (Core)',
    topic: 'Geometry',
    subtopic: 'Circle Theorems & Rhombus Deductive Proofs',
    totalMarks: 8,
    title: 'Circle Geometry: Inscribed Rhombus and Angle Subtended at Centre',
    questionText: 'In the diagram, ABCD is a circle centre O. The quadrilateral OBCD is a rhombus such that ∠ADO = ∠OBA = y and ∠BAD = t. Find:\n(a) the value of t;\n(b) the value of y;\n(c) ∠ADC.',
    parts: [
      {
        label: '(a)',
        text: 'Find the value of t.',
        marks: 3,
        rubricHint: '∠BOD = 2t [B1], ∠BCD = 180° - t, 2t = 180° - t [M1], t = 60° [A1]'
      },
      {
        label: '(b)',
        text: 'Find the value of y.',
        marks: 2,
        rubricHint: '∠BOD = 120°, ∠OBD = ∠ODB = 30°, 60 + 2(y + 30) = 180 [M1], y = 30° [A1]'
      },
      {
        label: '(c)',
        text: 'Find ∠ADC.',
        marks: 3,
        rubricHint: '∠ADC = ∠ADO + ∠ODB + ∠BDC = 30° + 30° + 30° = 90° [M1, A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Angle subtended at centre is twice angle at circumference: ∠BOD = 2t',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Opposite angles in cyclic quad ABCD sum to 180° (∠BCD = 180° - t), and rhombus property gives ∠BOD = ∠BCD: 2t = 180° - t',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'A1',
        description: 'Evaluating value of t: 3t = 180° ⟹ t = 60°',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'Calculating ∠BOD = 120°, base angles of isosceles △OBD = (180 - 120)/2 = 30°, and setting sum of angles in △ABD = 180°: 60° + 2(y + 30°) = 180°',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'A1',
        description: 'Solving for y: 2y + 120° = 180° ⟹ 2y = 60° ⟹ y = 30°',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'M1',
        description: 'Combining angles to find ∠ADC: ∠ADC = ∠ADO + ∠ODB + ∠BDC = 30° + 30° + 30° (or y + 60°)',
        allocatedMarks: 2
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'Evaluating ∠ADC: ∠ADC = 90°',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

![Circle ABCD with Rhombus OBCD](/diagrams/waec_math_rhombus_circle_q4_2024.png)

#### (a) Finding the value of $t$:
1. Angle subtended at the centre is twice the angle subtended at the circumference:
   $$\\angle BOD = 2 \\times \\angle BAD = 2t$$ *(Award **B1**)*
2. In the cyclic quadrilateral $ABCD$, opposite angles sum to $180^\\circ$:
   $$\\angle BCD = 180^\\circ - \\angle BAD = 180^\\circ - t$$
3. Since quadrilateral $OBCD$ is a rhombus, opposite angles are equal:
   $$\\angle BOD = \\angle BCD$$
   $$2t = 180^\\circ - t$$ *(Award **M1**)*
   $$3t = 180^\\circ \\implies \\mathbf{t = 60^\\circ}$$ *(Award **A1**)*

---

#### (b) Finding the value of $y$:
1. Value of obtuse angle $\\angle BOD = 2t = 2(60^\\circ) = 120^\\circ$.
2. In $\\triangle OBD$, $OB = OD$ (radii of the circle), so $\\triangle OBD$ is isosceles:
   $$\\angle OBD = \\angle ODB = \\frac{180^\\circ - 120^\\circ}{2} = 30^\\circ$$
3. In $\\triangle ABD$, the interior angles are $\\angle BAD = t = 60^\\circ$, $\\angle ABD = y + 30^\\circ$, and $\\angle ADB = y + 30^\\circ$:
   $$60^\\circ + (y + 30^\\circ) + (y + 30^\\circ) = 180^\\circ$$ *(Award **M1**)*
   $$2y + 120^\\circ = 180^\\circ \\implies 2y = 60^\\circ \\implies \\mathbf{y = 30^\\circ}$$ *(Award **A1**)*

---

#### (c) Finding $\\angle ADC$:
1. In rhombus $OBCD$, diagonal $OD$ bisects $\\angle BDC$, with $\\angle BCD = 120^\\circ \\implies \\angle BDC = 30^\\circ$.
2. Summing adjacent angles:
   $$\\angle ADC = \\angle ADO + \\angle ODB + \\angle BDC = 30^\\circ + 30^\\circ + 30^\\circ = \\mathbf{90^\\circ}$$ *(Award **M1, A1**)*
   *(Or using ALITER: $\\angle ADC = y + 60^\\circ = 30^\\circ + 60^\\circ = \\mathbf{90^\\circ}$)*`,
    examinerTips: [
      'In circle geometry questions, state the theorem or property justifying every line of deduction.',
      'Remember that all four sides of a rhombus are equal, and opposite angles are congruent.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q5',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section A (Core)',
    topic: 'Probability',
    subtopic: 'Dependent Probability & Quadratic Equations',
    totalMarks: 8,
    title: 'Probability Without Replacement: Marbles and Quadratic Factorization',
    questionText: 'A basket contains 3 gold-plated marbles, 4 diamond marbles and some silver marbles, all of the same size and shape. Two marbles were drawn from the basket at random one after the other without replacement. If the probability that the two marbles were all silver is 1/15, find the number of silver marbles.',
    parts: [
      {
        label: '(a)',
        text: 'Set up the probability equation and solve for the number of silver marbles.',
        marks: 8,
        rubricHint: 'Total = 7 + x [B1], (x/(7+x)) × ((x-1)/(6+x)) = 1/15 [M1, A1], x² - 2x - 3 = 0 [A1], (x-3)(x+1) = 0 [M1], x = 3 [A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Stating total number of marbles: Total = 3 + 4 + x = 7 + x',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Writing product of probabilities without replacement: P(first silver) × P(second silver) = [x / (7 + x)] × [(x - 1) / (6 + x)]',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'A1',
        description: 'Equating to given probability: [x(x - 1)] / [(7 + x)(6 + x)] = 1/15',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'M1',
        description: 'Cross multiplying and expanding: 15(x² - x) = x² + 13x + 42 ⟹ 14x² - 28x - 42 = 0',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'A1',
        description: 'Dividing across by 14 to reduce quadratic equation: x² - 2x - 3 = 0',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'M1',
        description: 'Factorizing the quadratic expression: (x - 3)(x + 1) = 0',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'Rejecting extraneous negative root (x = -1) and concluding: Number of silver marbles = 3',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

1. **Define Variables**:
   Let the number of silver marbles be $x$.
   $$\\text{Total marbles} = 3\\text{ (gold)} + 4\\text{ (diamond)} + x\\text{ (silver)} = \\mathbf{7 + x}$$ *(Award **B1**)*

2. **Formulate Probability without Replacement**:
   $$\\text{P(1st is silver)} = \\frac{x}{7 + x}$$
   $$\\text{P(2nd is silver)} = \\frac{x - 1}{6 + x}$$
   $$\\text{P(both are silver)} = \\left(\\frac{x}{7 + x}\\right) \\left(\\frac{x - 1}{6 + x}\\right) = \\frac{1}{15}$$ *(Award **M1, A1**)*

3. **Simplify and Form Quadratic Equation**:
   $$\\frac{x(x - 1)}{(7 + x)(6 + x)} = \\frac{1}{15}$$ *(Award **M1**)*
   $$15x(x - 1) = (7 + x)(6 + x)$$
   $$15x^2 - 15x = 42 + 13x + x^2$$
   $$15x^2 - x^2 - 15x - 13x - 42 = 0$$
   $$14x^2 - 28x - 42 = 0$$ *(Award **A1**)*

4. **Solve the Quadratic Equation**:
   Divide through by $14$:
   $$x^2 - 2x - 3 = 0$$
   Factorize:
   $$(x - 3)(x + 1) = 0$$ *(Award **M1**)*
   $$x = 3 \\quad \\text{or} \\quad x = -1$$

5. **Conclusion**:
   Since the number of marbles cannot be negative, discard $x = -1$.
   $$\\mathbf{x = 3 \\text{ silver marbles}}$$ *(Award **A1**)*`,
    examinerTips: [
      'Remember that in sampling without replacement, both the numerator and the denominator decrease by 1 for the second draw.',
      'Always state why a negative root of a quadratic is rejected in real-world count problems.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q6',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section B (Extended)',
    topic: 'Sequences & Series',
    subtopic: 'Geometric Progression (G.P.)',
    totalMarks: 12,
    title: 'Geometric Progression: Consecutive Algebraic Terms and Common Ratio',
    questionText: 'If (x + 2), (4x + 3) and (7x + 24) are three consecutive terms of a Geometric Progression (G.P.), find:\n(a) the possible values of x;\n(b) the common ratio corresponding to each value of x.',
    parts: [
      {
        label: '(a)',
        text: 'Find the possible values of x.',
        marks: 7,
        rubricHint: 'r = (4x+3)/(x+2) = (7x+24)/(4x+3) [B1], (4x+3)² = (x+2)(7x+24) [M1], 9x² - 14x - 39 = 0 [A1], (9x+13)(x-3) = 0 [M1], x = 3 or x = -13/9 [A1, A1]'
      },
      {
        label: '(b)',
        text: 'Find the common ratio corresponding to each value of x.',
        marks: 5,
        rubricHint: 'When x=3: r = 15/5 = 3 [M1, A1], When x=-13/9: r = -5 [M1, A1], r = 3 or -5 [A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Stating common ratio definition: r = T₂ / T₁ = T₃ / T₂ ⟹ (4x + 3)/(x + 2) = (7x + 24)/(4x + 3)',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Clearing fractions by cross-multiplication: (4x + 3)(4x + 3) = (x + 2)(7x + 24)',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Expanding brackets: 16x² + 24x + 9 = 7x² + 38x + 48',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Simplifying to standard quadratic form: 9x² - 14x - 39 = 0',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Factorizing quadratic: (9x + 13)(x - 3) = 0',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'First root: x = 3',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'A1',
        description: 'Second root: x = -13/9',
        allocatedMarks: 1
      },
      {
        stepNumber: 8,
        markType: 'M1',
        description: 'Substituting x = 3 to find r: r = [4(3) + 3] / (3 + 2) = 15 / 5',
        allocatedMarks: 1
      },
      {
        stepNumber: 9,
        markType: 'A1',
        description: 'Evaluating first ratio: r = 3',
        allocatedMarks: 1
      },
      {
        stepNumber: 10,
        markType: 'M1',
        description: 'Substituting x = -13/9 to find r: r = [4(-13/9) + 3] / [(-13/9) + 2]',
        allocatedMarks: 1
      },
      {
        stepNumber: 11,
        markType: 'A1',
        description: 'Evaluating second ratio: r = (-25/9) / (5/9) = -5',
        allocatedMarks: 1
      },
      {
        stepNumber: 12,
        markType: 'A1',
        description: 'Concluding: r = 3 or r = -5',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

#### (a) Finding the possible values of $x$:
1. In a Geometric Progression, consecutive terms share a constant common ratio $r$:
   $$r = \\frac{T_2}{T_1} = \\frac{T_3}{T_2} \\implies \\frac{4x + 3}{x + 2} = \\frac{7x + 24}{4x + 3}$$ *(Award **B1**)*
2. Cross multiply:
   $$(4x + 3)^2 = (x + 2)(7x + 24)$$ *(Award **M1**)*
   $$16x^2 + 24x + 9 = 7x^2 + 24x + 14x + 48$$
   $$16x^2 + 24x + 9 = 7x^2 + 38x + 48$$ *(Award **M1**)*
3. Group all terms on one side:
   $$(16 - 7)x^2 + (24 - 38)x + (9 - 48) = 0$$
   $$9x^2 - 14x - 39 = 0$$ *(Award **A1**)*
4. Factorize the quadratic ($ac = 9 \\times (-39) = -351$, factors $-27$ and $+13$):
   $$9x^2 - 27x + 13x - 39 = 0$$
   $$9x(x - 3) + 13(x - 3) = 0$$
   $$(9x + 13)(x - 3) = 0$$ *(Award **M1**)*
   $$\\mathbf{x = 3} \\quad \\text{or} \\quad \\mathbf{x = -\\frac{13}{9}}$$ *(Award **A1, A1**)*

---

#### (b) Finding the common ratio $r$ for each value of $x$:
1. **Case 1: When $x = 3$**:
   $$r = \\frac{4(3) + 3}{3 + 2} = \\frac{12 + 3}{5} = \\frac{15}{5} = \\mathbf{3}$$ *(Award **M1, A1**)*
   *(Terms are: $5, 15, 45$)*

2. **Case 2: When $x = -\\frac{13}{9}$**:
   $$r = \\frac{4\\left(-\\frac{13}{9}\\right) + 3}{-\\frac{13}{9} + 2} = \\frac{-\\frac{52}{9} + \\frac{27}{9}}{-\\frac{13}{9} + \\frac{18}{9}} = \\frac{-\\frac{25}{9}}{\\frac{5}{9}} = -\\frac{25}{5} = \\mathbf{-5}$$ *(Award **M1, A1**)*
   *(Terms are: $\\frac{5}{9}, -\\frac{25}{9}, \\frac{125}{9}$)*

3. **Conclusion**:
   $$\\mathbf{r = 3 \\quad \\text{or} \\quad r = -5}$$ *(Award **A1**)*`,
    examinerTips: [
      'Remember that for G.P., the middle term squared equals the product of the flanking terms: b² = ac.',
      'Always calculate the common ratio for both roots unless the question explicitly restricts x.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q11',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section B (Extended)',
    topic: 'Coordinate Geometry & Polygons',
    subtopic: 'Line of Intersection & Regular Decagon',
    totalMarks: 12,
    title: 'Coordinate Geometry & Regular Polygon Angle Properties',
    questionText: '(a) Find the equation of the line that passes through the origin and the point of intersection of the lines x + 2y = 7 and x - y = 4.\n\n(b) The ratio of an interior angle to an exterior angle of a regular polygon is 4 : 1. Find the:\n    (i) number of sides;\n    (ii) value of the exterior angle;\n    (iii) sum of the interior angles of the polygon.',
    parts: [
      {
        label: '(a)',
        text: 'Find the equation of the line passing through origin and intersection of x + 2y = 7 and x - y = 4.',
        marks: 5,
        rubricHint: 'Subtract equations: 3y = 3 ⟹ y = 1, x = 5 [M1, A1], gradient m = 1/5 [M1], equation: y = x/5 or x - 5y = 0 [A1]'
      },
      {
        label: '(b)(i)',
        text: 'Find the number of sides of the regular polygon.',
        marks: 3,
        rubricHint: 'Let exterior = e, interior = 4e. e + 4e = 180° ⟹ e = 36° [M1], n = 360°/36° = 10 sides [A1]'
      },
      {
        label: '(b)(ii)',
        text: 'Find the value of the exterior angle.',
        marks: 2,
        rubricHint: 'Exterior angle = 36° [A1]'
      },
      {
        label: '(b)(iii)',
        text: 'Find the sum of the interior angles of the polygon.',
        marks: 2,
        rubricHint: 'Sum = (n - 2) × 180° = (10 - 2) × 180° = 1440° [M1, A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'M1',
        description: 'Solving simultaneous equations x + 2y = 7 and x - y = 4 by elimination or substitution',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'A1',
        description: 'Obtaining coordinates of intersection point: x = 5, y = 1 ⟹ (5, 1)',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Finding slope m of line through origin (0, 0) and (5, 1): m = (1 - 0) / (5 - 0) = 1/5',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Writing linear equation: y = (1/5)x or x - 5y = 0',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Using supplementary angle property: Interior angle + Exterior angle = 180° ⟹ 4e + e = 180° ⟹ 5e = 180°',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'Calculating exterior angle: e = 36°',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'M1',
        description: 'Applying n = 360° / e to find number of sides: n = 360° / 36°',
        allocatedMarks: 1
      },
      {
        stepNumber: 8,
        markType: 'A1',
        description: 'Obtaining number of sides: n = 10 sides (decagon)',
        allocatedMarks: 1
      },
      {
        stepNumber: 9,
        markType: 'M1',
        description: 'Applying interior angle sum formula: S = (n - 2) × 180° = (10 - 2) × 180°',
        allocatedMarks: 2
      },
      {
        stepNumber: 10,
        markType: 'A1',
        description: 'Evaluating total interior sum: S = 8 × 180° = 1440°',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

#### (a) Line passing through origin and point of intersection:
1. Set up simultaneous equations:
   $$x + 2y = 7 \\quad \\text{--- (1)}$$
   $$x - y = 4 \\quad \\text{--- (2)}$$
2. Subtract (2) from (1):
   $$(x - x) + (2y - (-y)) = 7 - 4$$
   $$3y = 3 \\implies y = 1$$ *(Award **M1**)*
3. Substitute $y = 1$ into (2):
   $$x - 1 = 4 \\implies x = 5$$
   The point of intersection is $(5, 1)$. *(Award **A1**)*
4. Gradient of line through origin $(0, 0)$ and $(5, 1)$:
   $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{1 - 0}{5 - 0} = \\frac{1}{5}$$ *(Award **M1**)*
5. Equation of the line:
   $$y - 0 = m(x - 0) \\implies y = \\frac{1}{5}x$$
   $$\\mathbf{x - 5y = 0} \\quad \\text{or} \\quad \\mathbf{y = \\frac{1}{5}x}$$ *(Award **A1**)*

---

#### (b) Regular polygon with interior : exterior = 4 : 1:
1. Let the exterior angle be $e$ and interior angle be $4e$.
   Since interior and exterior angles on any polygon lie on a straight line:
   $$\\text{Interior} + \\text{Exterior} = 180^\\circ$$
   $$4e + e = 180^\\circ \\implies 5e = 180^\\circ \\implies \\mathbf{e = 36^\\circ}$$ *(Award **M1, A1**)*

2. **(i) Number of sides $n$**:
   $$\\text{Sum of all exterior angles} = 360^\\circ$$
   $$n = \\frac{360^\\circ}{e} = \\frac{360^\\circ}{36^\\circ} = \\mathbf{10 \\text{ sides (decagon)}}$$ *(Award **A1**)*

3. **(ii) Value of the exterior angle**:
   $$\\mathbf{e = 36^\\circ}$$ *(Award **A1**)*

4. **(iii) Sum of the interior angles of the polygon**:
   $$\\text{Sum} = (n - 2) \\times 180^\\circ = (10 - 2) \\times 180^\\circ = 8 \\times 180^\\circ = \\mathbf{1440^\\circ}$$ *(Award **M1, A1**)*
   *(Or $\\text{Sum} = n \\times \\text{Interior} = 10 \\times (4 \\times 36^\\circ) = 10 \\times 144^\\circ = \\mathbf{1440^\\circ}$)*`,
    examinerTips: [
      'Always remember that the exterior and interior angles at any vertex of a regular polygon are supplementary (sum = 180°).',
      'The sum of all exterior angles of any convex polygon is ALWAYS 360°, regardless of the number of sides.'
    ]
  },
  {
    id: 'MATH-WASSCE-2024-Q12',
    subject: 'Mathematics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (General Mathematics Core)',
    section: 'Section B (Extended)',
    topic: 'Geometry & Algebra',
    subtopic: 'Tangents to Circle & Simplifying Algebraic Fractions',
    totalMarks: 12,
    title: 'Circle Tangent Deductions and Rational Algebraic Fraction Simplification',
    questionText: '(a) In the diagram, PR is a tangent to the circle centre O at Q. ∠POQ = 56° and PO intersects SQ at V such that ∠SVP = 109°. Calculate:\n    (i) ∠TQP;\n    (ii) ∠QTS.\n\n(b) Simplify: (2n² - 3n - 2)/(2n² + 3n + 1) × (n² - 1)/(n² - 4).',
    parts: [
      {
        label: '(a)(i)',
        text: 'Calculate ∠TQP.',
        marks: 4,
        rubricHint: 'Radius OQ ⊥ PR ⟹ ∠OQP = 90° [B1], ∠OPQ = 180 - (90+56) = 34° [M1], ∠PVQ = 180 - 109 = 71°, ∠PQV = 180 - (34+71) = 75° [A1]'
      },
      {
        label: '(a)(ii)',
        text: 'Calculate ∠QTS.',
        marks: 3,
        rubricHint: 'Alternate segment theorem: ∠QTS = ∠TQP = 75° [M1, A1]'
      },
      {
        label: '(b)',
        text: 'Simplify (2n² - 3n - 2)/(2n² + 3n + 1) × (n² - 1)/(n² - 4).',
        marks: 5,
        rubricHint: '(2n+1)(n-2) / [(2n+1)(n+1)] × (n-1)(n+1) / [(n-2)(n+2)] [M1, M1], (n-1)/(n+2) [A1]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Stating tangent-radius perpendicularity: Radius OQ ⊥ tangent PR ⟹ ∠OQP = 90°',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'M1',
        description: 'Calculating ∠OPQ in right-angled △POQ: ∠OPQ = 180° - (90° + 56°) = 34°',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'M1',
        description: 'Finding ∠PVQ on straight line: ∠PVQ = 180° - 109° = 71°',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'A1',
        description: 'Evaluating ∠TQP (which is ∠PQV in △PVQ): ∠TQP = 180° - (34° + 71°) = 75°',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'M1',
        description: 'Applying Alternate Segment Theorem: angle in alternate segment subtended by chord TQ equals tangent-chord angle: ∠QTS = ∠TQP',
        allocatedMarks: 2
      },
      {
        stepNumber: 6,
        markType: 'A1',
        description: 'Evaluating ∠QTS: ∠QTS = 75°',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'M1',
        description: 'Factorizing 2n² - 3n - 2 = (2n + 1)(n - 2) and 2n² + 3n + 1 = (2n + 1)(n + 1)',
        allocatedMarks: 2
      },
      {
        stepNumber: 8,
        markType: 'M1',
        description: 'Factorizing difference of two squares: n² - 1 = (n - 1)(n + 1) and n² - 4 = (n - 2)(n + 2)',
        allocatedMarks: 1
      },
      {
        stepNumber: 9,
        markType: 'A1',
        description: 'Cancelling common terms (2n + 1), (n - 2), and (n + 1) to obtain final fraction: (n - 1) / (n + 2)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### Official WAEC Marking Scheme Solution & Scoring Rubric

![Circle Tangent Geometry](/diagrams/waec_math_tangent_circle_q12_2024.png)

#### (a) Geometric Deductions:
1. Since $PR$ is a tangent to the circle at $Q$ and $OQ$ is the radius:
   $$\\angle OQP = 90^\\circ \\quad (\\text{radius } \\perp \\text{ tangent})$$ *(Award **B1**)*
2. In right-angled triangle $\\triangle POQ$:
   $$\\angle OPQ = 180^\\circ - (90^\\circ + 56^\\circ) = 180^\\circ - 146^\\circ = 34^\\circ$$ *(Award **M1**)*
3. Line segment $SQ$ intersects $PO$ at $V$. Angles on straight line $SVO$:
   $$\\angle PVQ = 180^\\circ - \\angle SVP = 180^\\circ - 109^\\circ = 71^\\circ$$
4. In $\\triangle PVQ$, the sum of interior angles is $180^\\circ$:
   $$\\angle TQP = \\angle PQV = 180^\\circ - (\\angle OPQ + \\angle PVQ)$$
   $$\\angle TQP = 180^\\circ - (34^\\circ + 71^\\circ) = 180^\\circ - 105^\\circ = \\mathbf{75^\\circ}$$ *(Award **A1**)*

5. **(ii) Finding $\\angle QTS$**:
   By the **Alternate Segment Theorem**, the angle between the tangent $PQ$ and the chord $TQ$ is equal to the angle subtended by chord $TQ$ in the alternate segment:
   $$\\angle QTS = \\angle TQP = \\mathbf{75^\\circ}$$ *(Award **M1, A1**)*

---

#### (b) Simplifying the Algebraic Fraction:
$$\\frac{2n^2 - 3n - 2}{2n^2 + 3n + 1} \\times \\frac{n^2 - 1}{n^2 - 4}$$

1. Factorize each quadratic expression:
   - Numerator 1: $2n^2 - 3n - 2 = 2n^2 - 4n + n - 2 = (2n + 1)(n - 2)$
   - Denominator 1: $2n^2 + 3n + 1 = 2n^2 + 2n + n + 1 = (2n + 1)(n + 1)$ *(Award **M1**)*
   - Numerator 2: $n^2 - 1 = (n - 1)(n + 1)$ *(Difference of two squares)*
   - Denominator 2: $n^2 - 4 = (n - 2)(n + 2)$ *(Difference of two squares)* *(Award **M1**)*

2. Combine and cancel identical factors:
   $$= \\frac{(2n + 1)(n - 2)}{(2n + 1)(n + 1)} \\times \\frac{(n - 1)(n + 1)}{(n - 2)(n + 2)}$$
   Cancel $(2n + 1)$, $(n - 2)$, and $(n + 1)$:
   $$= \\mathbf{\\frac{n - 1}{n + 2}}$$ *(Award **A1**)*`,
    examinerTips: [
      'In algebraic fractions, always factorize completely before attempting any cancellations.',
      'Remember the alternate segment theorem: the angle between tangent and chord equals the angle in the opposite alternate segment.'
    ]
  },

  // ─── OFFICIAL WAEC CIVIC EDUCATION THEORY & ESSAY QUESTIONS ───
  {
    id: 'CIV-WASSCE-2024-Q1',
    subject: 'Civic Education',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section A (Citizenship & Governance)',
    topic: 'Popular Participation',
    subtopic: 'Political Apathy & Citizen Engagement',
    totalMarks: 10,
    title: 'Popular Participation and Factors Responsible for Political Apathy',
    questionText: '(a) What is popular participation?\n(b) Explain four factors that hinder citizens from actively participating in political activities in Nigeria.',
    parts: [
      {
        label: '(a)',
        text: 'Define popular participation.',
        marks: 2,
        rubricHint: 'Active involvement of citizens in political, economic and social affairs, governance and decision-making [2 marks]'
      },
      {
        label: '(b)',
        text: 'Explain four factors responsible for political apathy.',
        marks: 8,
        rubricHint: '2 marks for each well-explained factor: Political apathy/disillusionment, illiteracy, electoral malpractices, political violence, poverty, corruption, lack of civic education, insecurity'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Definition: Active involvement of citizens in political, economic and social affairs of their country, especially in governance, voting, policy formulation and decision-making',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Factor 1: Electoral Malpractices (vote buying, ballot box snatching, rigging causing loss of trust in votes counting)',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Factor 2: Political Violence and Intimidation (thuggery, harassment and fear of injury/loss of lives during campaigns)',
        allocatedMarks: 2
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Factor 3: Corruption and Bad Leadership (unfulfilled campaign promises and embezzlement causing citizens to lose hope)',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Factor 4: Illiteracy and Lack of Civic Education (inability to understand constitutional rights and importance of voting)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Definition of Popular Participation (2 Marks [B2])
Popular participation is the active involvement and engagement of citizens in the political, economic, and social affairs of their country, particularly in governance and public decision-making. It encompasses voting during elections, contesting for political offices, joining political organizations, and expressing viewpoints on national issues.

#### (b) Four Factors Hindering Political Participation (8 Marks [B2 each])
1. **Electoral Malpractices**: Practices such as vote buying, rigging, and falsification of results diminish public trust in elections. When citizens believe election results do not reflect voters' choices, they develop voter apathy.
2. **Political Violence and Intimidation**: Harassment, political thuggery, and destruction of property create atmosphere of fear, discouraging peaceful citizens from attending rallies or voting centers.
3. **Poverty and Economic Hardship**: Vulnerable citizens spend most of their time pursuing daily sustenance. Poverty also exposes individuals to manipulation through vote buying.
4. **Illiteracy and Lack of Civic Awareness**: Citizens without basic civic education often fail to appreciate their constitutional rights and the power of the ballot in shaping national development.`,
    examinerTips: [
      'In Civic Education theory, always state the key heading first before explaining each point to secure full marks.',
      'Ensure clear distinction between the concept of participation and apathy.'
    ]
  },

  {
    id: 'CIV-WASSCE-2024-Q2',
    subject: 'Civic Education',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section B (Social Issues)',
    topic: 'Drug Abuse',
    subtopic: 'Law Enforcement & Prevention Strategies',
    totalMarks: 10,
    title: 'Drug Enforcement Agencies and Measures to Curb Drug Abuse',
    questionText: '(a) Mention two government agencies responsible for combating drug abuse in Nigeria.\n(b) Explain five measures that can be taken to curb drug abuse among Nigerian youths.\n(c) List three examples of commonly abused illicit drugs.',
    parts: [
      {
        label: '(a)',
        text: 'Mention two government agencies responsible for fighting drug trafficking and abuse in Nigeria.',
        marks: 2,
        rubricHint: 'NDLEA and NAFDAC [1 mark each]'
      },
      {
        label: '(b)',
        text: 'Explain five measures to curb drug abuse among youths.',
        marks: 5,
        rubricHint: 'Public enlightenment, strict law enforcement, parental supervision, rehabilitation, school curriculum, regulation of sales [1 mark each]'
      },
      {
        label: '(c)',
        text: 'List three examples of commonly abused illicit drugs.',
        marks: 3,
        rubricHint: 'Cannabis/marijuana, cocaine, heroin, tramadol, codeine, methamphetamine [1 mark each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Mention of NDLEA (National Drug Law Enforcement Agency) and NAFDAC (National Agency for Food and Drug Administration and Control)',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Measure 1: Public Enlightenment and Media Sensitization on dangers of substance abuse',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Measure 2: Strict Law Enforcement and border patrol by anti-narcotic agencies',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Measure 3: Effective Parental Monitoring and moral upbringing',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Measure 4: Provision of Psychiatric Counseling and Rehabilitation Centers',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Measure 5: Restriction of Prescription Drug Sales to certified pharmacists only',
        allocatedMarks: 1
      },
      {
        stepNumber: 7,
        markType: 'B1',
        description: 'Listing 3 illicit drugs: Cannabis, Cocaine, Tramadol (or Heroin/Codeine)',
        allocatedMarks: 3
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Government Agencies Combating Drug Abuse (2 Marks [B2])
1. **NDLEA** (National Drug Law Enforcement Agency)
2. **NAFDAC** (National Agency for Food and Drug Administration and Control)

#### (b) Five Measures to Curb Drug Abuse (5 Marks [B5])
1. **Public Enlightenment**: Massive campaigns by government and NGOs through media and schools to expose the psychological and physiological dangers of narcotics.
2. **Strict Enforcement of Anti-Drug Laws**: Imposing deterrent penalties, arresting drug peddlers, and tightening border surveillance to halt importation.
3. **Parental Supervision**: Parents should monitor peers, behavioral changes, and offer guidance to discourage substance experimentation.
4. **Establishment of Rehabilitation Centres**: Providing medical detoxification, psychiatric therapy, and skill training for recovering substance abusers.
5. **Strict Regulation of Pharmaceuticals**: Restricting over-the-counter access to controlled drugs like tramadol and codeine without doctor prescriptions.

#### (c) Three Examples of Commonly Abused Drugs (3 Marks [B3])
1. Cannabis (Indian hemp / marijuana)
2. Tramadol
3. Cocaine (or Heroin / Methamphetamine)`,
    examinerTips: [
      'Write the acronyms and full names of NAFDAC and NDLEA where possible.',
      'Provide clear examples of social consequences in explanation.'
    ]
  },

  {
    id: 'CIV-WASSCE-2024-Q3',
    subject: 'Civic Education',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section A (Human Rights)',
    topic: 'Human Rights',
    subtopic: 'Fundamental Human Rights & Infringements',
    totalMarks: 10,
    title: 'Fundamental Human Rights and Ways They Can Be Infringed',
    questionText: '(a) What are fundamental human rights?\n(b) Explain four ways by which the fundamental human rights of a citizen can be infringed upon.',
    parts: [
      {
        label: '(a)',
        text: 'Define fundamental human rights.',
        marks: 2,
        rubricHint: 'Inalienable rights and freedoms entitled to every human by virtue of existence, entrenched in the constitution [2 marks]'
      },
      {
        label: '(b)',
        text: 'Explain four ways human rights can be infringed upon.',
        marks: 8,
        rubricHint: '2 marks each: Unlawful arrest/detention, denial of fair hearing, torture/inhuman treatment, freedom of expression suppression, discrimination, unlawful property seizure'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Definition: Entrenched legal, natural and inalienable entitlements and freedoms guaranteed by the Constitution to protect human dignity, liberty and equality',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Infringement 1: Unlawful Arrest and Arbitrary Detention without trial beyond statutory time limits',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Infringement 2: Torture and Extrajudicial Inhuman/Degrading Treatment by law enforcement',
        allocatedMarks: 2
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Infringement 3: Denial of Fair Hearing before competent legal courts/tribunals',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Infringement 4: Suppression of Freedom of Speech and Press censorship',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Definition of Fundamental Human Rights (2 Marks [B2])
Fundamental human rights are the basic, inalienable moral and constitutional entitlements and freedoms naturally enjoyed by every person by virtue of being human. They are entrenched in Chapter IV of the Nigerian Constitution to guarantee human dignity, liberty, equality, and protection from arbitrary state oppression.

#### (b) Four Ways Human Rights Are Infringed (8 Marks [B2 each])
1. **Unlawful Arrest and Prolonged Detention**: Detaining a citizen without a warrant or keeping suspects in custody beyond the constitutional limit (24 to 48 hours) without arraignment in a court of law.
2. **Torture and Inhuman Treatment**: Subjecting citizens to police brutality, corporal torture, or degrading corporal punishments that violate human dignity.
3. **Denial of Fair Hearing**: Denying accused persons access to legal representation or convicting someone without allowing them to defend themselves before an impartial court.
4. **Suppression of Freedom of Expression**: Harassing journalists, banning media stations, or penalizing citizens for expressing legitimate critical opinions on public governance.`,
    examinerTips: [
      'Quote constitutional context (e.g. Chapter IV of the 1999 Constitution) to demonstrate superior mastery.',
      'Give clear real-world examples for each form of infringement.'
    ]
  },

  {
    id: 'CIV-WASSCE-2024-Q6',
    subject: 'Civic Education',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section C (Public Administration)',
    topic: 'Public Service',
    subtopic: 'Structure & Shortcomings of Public Service',
    totalMarks: 10,
    title: 'The Public Service and Its Administrative Shortcomings',
    questionText: '(a) Define public service.\n(b) Explain four shortcomings or challenges facing the Nigerian public service.',
    parts: [
      {
        label: '(a)',
        text: 'Define public service.',
        marks: 2,
        rubricHint: 'Administrative machinery of government consisting of civil servants/agencies executing state policies [2 marks]'
      },
      {
        label: '(b)',
        text: 'Explain four major shortcomings facing the public service in Nigeria.',
        marks: 8,
        rubricHint: '2 marks each: Red tapism/bureaucracy, corruption, political interference, inadequate funding, nepotism/favoritism, poor work ethics/absenteeism'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Definition: Permanent, organized administrative body of workers in government ministries and agencies responsible for policy implementation and public service delivery',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Challenge 1: Bureaucratic Delays and Red Tapism (excessive procedural bottlenecks and slow decision making)',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Challenge 2: Bribery and Corruption (misappropriation of public funds and demanding inducements for official services)',
        allocatedMarks: 2
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Challenge 3: Political Interference (politicians overruling merit in appointments and promotions)',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Challenge 4: Inadequate Remuneration and Low Staff Morale (poor wages leading to absenteeism and low productivity)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Definition of Public Service (2 Marks [B2])
The public service is the permanent administrative machinery of government comprising ministries, departments, and parastatals established to execute government policies, maintain law and order, and provide essential social services to citizens irrespective of changes in political administration.

#### (b) Four Shortcomings of the Public Service (8 Marks [B2 each])
1. **Bureaucratic Red Tapism**: Excessive reliance on protocol, paper-pushing, and rigid procedures slows down government approvals and delays project execution.
2. **Corruption and Mismanagement**: Embezzlement of public funds and bribery for services undermine government efficiency and deplete national resources.
3. **Political Interference**: Partisan political influence in recruitment, promotions, and transfers compromises the traditional civil service neutrality and professional competence.
4. **Poor Remuneration and Infrastructure**: Sub-standard salaries, lack of modern ICT tools, and irregular promotions demoralize workers and encourage brain drain to the private sector.`,
    examinerTips: [
      'Emphasize the permanent, non-partisan nature of the civil service in the definition.',
      'Link administrative bottlenecks directly to poor public service delivery.'
    ]
  },

  // ─── OFFICIAL WAEC AGRICULTURAL SCIENCE THEORY QUESTIONS ───
  {
    id: 'AGR-WASSCE-2024-Q1',
    subject: 'Agricultural Science',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section A (General Agriculture)',
    topic: 'Introduction to Agriculture & Mechanization',
    subtopic: 'Branches of Agriculture & Farm Machinery',
    totalMarks: 10,
    title: 'Branches of Agriculture, Disc Plough Advantages & Tractor Maintenance',
    questionText: '(a)(i) Define agriculture.\n(a)(ii) State four branches of agriculture.\n(b) Mention three advantages of a disc plough over a mouldboard plough.\n(c) State three daily routine maintenance practices for a farm tractor.',
    parts: [
      {
        label: '(a)(i)',
        text: 'Define agriculture.',
        marks: 1,
        rubricHint: 'Science, art and business of cultivating soil, producing crops and rearing animals [1 mark]'
      },
      {
        label: '(a)(ii)',
        text: 'State four branches of agriculture.',
        marks: 2,
        rubricHint: 'Crop production, livestock/animal production, forestry, fisheries, agric economics, agric engineering [0.5 mark each]'
      },
      {
        label: '(b)',
        text: 'Mention three advantages of a disc plough over a mouldboard plough.',
        marks: 3,
        rubricHint: 'Works on stony/hard soils, rolls over obstructions without breaking, self-sharpening, cuts through vegetative trash without clogging [1 mark each]'
      },
      {
        label: '(c)',
        text: 'State three daily maintenance routines for a farm tractor.',
        marks: 4,
        rubricHint: 'Check engine oil level, check radiator water/coolant, check tyre pressure, check fuel level, grease nipples, clean air cleaner [1.33 marks each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Accurate definition of agriculture encompassing science, art and enterprise of crop and animal production',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Listing 4 distinct branches: Crop science, Animal science, Forestry, Fisheries (or Agric Economics/Engineering)',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Disc plough advantage 1: Functions efficiently in hard, dry, rough, or stony soils where mouldboard blades break',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Disc plough advantage 2: Cuts through heavy weed growth and roots without clogging due to rolling circular motion',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Disc plough advantage 3: Discs are self-sharpening as they roll over abrasive soil particles',
        allocatedMarks: 1
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Daily maintenance 1: Checking and topping engine oil dipstick level',
        allocatedMarks: 1.33
      },
      {
        stepNumber: 7,
        markType: 'B1',
        description: 'Daily maintenance 2: Checking radiator coolant level and water cleanliness',
        allocatedMarks: 1.33
      },
      {
        stepNumber: 8,
        markType: 'B1',
        description: 'Daily maintenance 3: Checking tyre pressure and tightening loose wheel nuts',
        allocatedMarks: 1.34
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a)(i) Definition of Agriculture (1 Mark [B1])
Agriculture is the science, art, and business of cultivating crops, managing soil, and rearing animals for the production of food, fibre, medicinal herbs, industrial raw materials, and other products for human consumption.

#### (a)(ii) Four Branches of Agriculture (2 Marks [B2])
1. **Crop Production / Agronomy**
2. **Animal Husbandry / Livestock Production**
3. **Fisheries and Aquaculture**
4. **Forestry and Wildlife Management**

#### (b) Advantages of Disc Plough over Mouldboard Plough (3 Marks [B3])
1. **Adaptability to Hard/Stony Soil**: The disc rolls over hidden stones, stumps, and hard pan without breaking, whereas mouldboard shares fracture or bend.
2. **Resistant to Clogging**: Circular discs roll continuously, slicing through heavy weeds and trash rather than dragging and choking.
3. **Self-Sharpening**: The abrasive friction of the soil sharpens the edge of the circular concave discs during operation.

#### (c) Daily Routine Maintenance of Farm Tractor (4 Marks [B4])
1. **Check Engine Oil**: Pull out the dipstick, wipe clean, reinsert and confirm oil level sits between MIN and MAX marks.
2. **Inspect Radiator Coolant**: Ensure the radiator and expansion bottle have adequate clean water/coolant to avoid engine overheating.
3. **Check Tyre Pressure & Wheel Lug Nuts**: Verify inflation pressure and tighten loose nuts to ensure stability and reduce tread wear.`,
    examinerTips: [
      'In agricultural mechanization questions, always distinguish daily routine maintenance from periodic (50-hour/100-hour) maintenance.',
      'Remember mouldboard plough is preferred for soft, clean soils, while disc plough is built for tropical tough soils.'
    ]
  },

  {
    id: 'AGR-WASSCE-2024-Q4',
    subject: 'Agricultural Science',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section B (Soil & Crops)',
    topic: 'Soil Fertility & Crop Rotation',
    subtopic: 'Principles and 4-Year Rotational Plan',
    totalMarks: 10,
    title: 'Principles of Crop Rotation and Four-Year Rotational Schedule',
    questionText: '(a) State two basic principles of crop rotation.\n(b) Design a four-year crop rotation schedule for four plots using Yam, Groundnut, Cassava, and Millet.\n(c) State two disadvantages of artificial farm drainage.',
    parts: [
      {
        label: '(a)',
        text: 'State two principles of crop rotation.',
        marks: 2,
        rubricHint: 'Alternate deep with shallow rooters, alternate leguminous with non-leguminous, crops of same family should not follow each other [1 mark each]'
      },
      {
        label: '(b)',
        text: 'Design a 4-year crop rotation program on four plots with Yam, Groundnut, Cassava, and Millet.',
        marks: 6,
        rubricHint: 'Complete matrix showing cyclical shift across plots 1-4 for years 1-4 [6 marks]'
      },
      {
        label: '(c)',
        text: 'State two disadvantages of agricultural land drainage.',
        marks: 2,
        rubricHint: 'High installation/maintenance cost, excessive loss of soil moisture in dry season, leaching of soluble nutrients [1 mark each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Principle 1: Legumes (nitrogen fixers) must alternate with non-legumes/heavy feeders',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Principle 2: Deep-rooted crops (yam/cassava) must alternate with shallow-rooted crops (millet/groundnut) to exploit different soil layers',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Correct 4x4 matrix rotational mapping without repeating same family crops in consecutive seasons',
        allocatedMarks: 6
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Drainage disadvantage 1: High capital expenditure required for digging channels, laying tiles, and regular desilting',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Drainage disadvantage 2: Rapid loss of moisture and leaching of soluble plant nutrients into drainage canals',
        allocatedMarks: 1
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Principles of Crop Rotation (2 Marks [B2])
1. **Alternate Root Depths**: Deep-rooted crops (e.g. Yam, Cassava) should be followed by shallow-rooted crops (e.g. Millet) to absorb nutrients from different soil strata.
2. **Incorporate Legumes**: Leguminous crops (e.g. Groundnut) must follow heavy nitrogen feeders to replenish soil fertility via root nodule nitrogen fixation.
3. **Disrupt Pest Cycles**: Crops from the same botanical family must never be planted consecutively on the same plot to break the pest and disease cycle.

#### (b) Four-Year Crop Rotation Schedule (6 Marks [B6])

| Year | Plot 1 | Plot 2 | Plot 3 | Plot 4 |
| :---: | :---: | :---: | :---: | :---: |
| **Year 1** | Yam | Groundnut | Cassava | Millet |
| **Year 2** | Groundnut | Cassava | Millet | Yam |
| **Year 3** | Cassava | Millet | Yam | Groundnut |
| **Year 4** | Millet | Yam | Groundnut | Cassava |

#### (c) Disadvantages of Agricultural Drainage (2 Marks [B2])
1. **High Capital and Maintenance Costs**: Constructing tile drains or open ditches requires expensive machinery and frequent maintenance to prevent silting.
2. **Accelerated Leaching of Nutrients**: Rapid water runoff carries away dissolved plant nutrients (nitrates and potassium), lowering natural soil fertility.`,
    examinerTips: [
      'In the rotation table, verify that each plot grows all 4 crops across the 4 years without repetition in any column or row.',
      'Explain the scientific reason for placing groundnut immediately before heavy feeder crops.'
    ]
  },

  {
    id: 'AGR-WASSCE-2024-Q5',
    subject: 'Agricultural Science',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section B (Crops)',
    topic: 'Tree Crop Production',
    subtopic: 'Cocoa Agronomy, Diseases & Forest Economics',
    totalMarks: 10,
    title: 'Cultivation Requirements, Diseases of Cocoa and Economic Role of Forests',
    questionText: '(a) Discuss the cultivation of Cocoa (*Theobroma cacao*) under the following headings:\n    (i) Climatic requirement;\n    (ii) Soil requirement;\n    (iii) Two cultural practices;\n    (iv) Two major diseases.\n(b) State three economic importance of forests.',
    parts: [
      {
        label: '(a)(i)-(ii)',
        text: 'State climatic and soil requirements for cocoa.',
        marks: 2,
        rubricHint: 'Rainfall 1500-2500mm, temp 21-32°C; deep, well-drained loamy soil rich in humus [1 mark each]'
      },
      {
        label: '(a)(iii)',
        text: 'State two cultural practices in cocoa cultivation.',
        marks: 2,
        rubricHint: 'Weeding, mulching, pruning, shading [1 mark each]'
      },
      {
        label: '(a)(iv)',
        text: 'Mention two diseases of cocoa.',
        marks: 2,
        rubricHint: 'Black pod disease (fungal - Phytophthora), Swollen shoot disease (viral) [1 mark each]'
      },
      {
        label: '(b)',
        text: 'State three economic importance of forests.',
        marks: 4,
        rubricHint: 'Timber provision, medicinal herbs, wildlife habitat, soil conservation, foreign exchange from log exports [1.33 marks each]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Climatic requirement: 1,500 - 2,500 mm rainfall, 21 - 32°C temperature, high relative humidity and partial shade',
        allocatedMarks: 1
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Soil requirement: Deep, fertile, well-drained loamy soil rich in organic matter/humus with pH 6.0 - 7.0',
        allocatedMarks: 1
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Cultural practice 1: Pruning (removing chupons, dead/infected branches to boost air circulation and flowering)',
        allocatedMarks: 1
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Cultural practice 2: Weeding and Mulching (removing competitive weeds and preserving base moisture)',
        allocatedMarks: 1
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Two cocoa diseases: Black pod disease (*Phytophthora palmivora*) and Swollen shoot virus',
        allocatedMarks: 2
      },
      {
        stepNumber: 6,
        markType: 'B1',
        description: 'Forest economic importance: Timber supply for construction, raw materials for pulp/paper, medicinal herbs, and environmental erosion shield',
        allocatedMarks: 4
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Cultivation of Cocoa (*Theobroma cacao*) (6 Marks [B6])
1. **Climatic Requirements**: Cocoa thrives in tropical rainforest zones with evenly distributed annual rainfall between $1,500\text{ mm}$ and $2,500\text{ mm}$, temperatures between $21^\circ\text{C}$ and $32^\circ\text{C}$, high humidity ($>80\%$), and shade during early sapling growth.
2. **Soil Requirements**: Requires deep, fertile, well-drained sandy loam or clay loam rich in humus, with good aeration and slightly acidic to neutral pH ($6.0 - 6.8$).
3. **Cultural Practices**:
   - **Pruning**: Cutting off water sprouts (chupons), interlocking twigs, and diseased branches to promote healthy light penetration and pod formation.
   - **Weeding & Mulching**: Clearing aggressive weeds and applying dry leaf mulch around bases to conserve soil water.
4. **Major Cocoa Diseases**:
   - **Black Pod Disease**: Caused by the fungus *Phytophthora palmivora*, turning developing pods brown/black and rotten.
   - **Swollen Shoot Disease**: Caused by a virus transmitted by mealybugs, leading to characteristic swelling of stems and twig die-back.

#### (b) Three Economic Importance of Forests (4 Marks [B4])
1. **Supply of Timber & Building Materials**: Forests produce valuable hardwood (Iroko, Mahogany, Obeche) used in construction, furniture, and paper milling.
2. **Source of Food and Medicinal Herbs**: Rural populations harvest bushmeat, wild fruits, mushrooms, and active botanical ingredients for pharmaceutical medicine.
3. **Soil Conservation and Climate Moderation**: Forest root canopies intercept heavy raindrops, preventing sheet erosion while storing carbon to mitigate global warming.`,
    examinerTips: [
      'Always specify the causal organism (fungal vs viral) when naming cocoa diseases.',
      'Remember cocoa is propagated primarily by seeds in nurseries before transplanting into field groves.'
    ]
  },

  // ─── OFFICIAL WAEC ECONOMICS THEORY QUESTIONS ───
  {
    id: 'ECO-WASSCE-2024-Q3',
    subject: 'Economics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section B (Applied Economics)',
    topic: 'Agricultural Marketing',
    subtopic: 'Marketing Boards & Commodity Stabilization',
    totalMarks: 10,
    title: 'Marketing Boards and Functions in Agricultural Product Distribution',
    questionText: '(a) What is a marketing board?\n(b) Explain four major functions of marketing boards in agricultural produce trade.',
    parts: [
      {
        label: '(a)',
        text: 'Define a marketing board.',
        marks: 2,
        rubricHint: 'Government agency established to buy, grade, store, stabilize prices, and sell agricultural produce [2 marks]'
      },
      {
        label: '(b)',
        text: 'Explain four functions of a marketing board.',
        marks: 8,
        rubricHint: '2 marks each: Purchase of produce, price stabilization, storage/warehousing, grading/standardization, export marketing, credit to farmers'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Definition: Public statutory organization set up by government to regulate the marketing, grading, pricing, and export of major agricultural cash crops',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Function 1: Price Stabilization (fixing minimum guaranteed prices to protect farmers from global price crashes)',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Function 2: Guaranteed Produce Purchase (buying all harvested produce directly from farmers, eliminating middleman exploitation)',
        allocatedMarks: 2
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Function 3: Grading and Standardization (inspecting quality to ensure export meets international market standards)',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Function 4: Provision of Storage and Warehousing (holding buffer stocks to reduce post-harvest losses and maintain supply)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Definition of Marketing Board (2 Marks [B2])
A marketing board is a government-established public enterprise empowered to regulate, buy, grade, store, transport, and sell agricultural commodities on behalf of domestic producers, while stabilizing prices and shielding farmers from volatile market fluctuations.

#### (b) Four Major Functions of Marketing Boards (8 Marks [B2 each])
1. **Stabilization of Agricultural Prices**: Marketing boards establish buffer funds to maintain stable producer prices. During surplus harvest, they purchase at guaranteed minimum prices; during shortages, they release stock to protect consumer price stability.
2. **Guaranteed Market and Elimination of Middlemen**: They act as buyers of last resort, buying cash crops directly from farmers at fair prices, thereby freeing farmers from exploitation by unscrupulous private middlemen.
3. **Quality Grading and Standardization**: They inspect and grade produce (e.g. cocoa grade 1, palm oil, groundnuts) according to international export benchmarks, ensuring high market credibility abroad.
4. **Provision of Storage and Warehousing Facilities**: By operating silos and warehouses, marketing boards protect crops from pest infestation, rotting, and post-harvest losses, maintaining supply throughout the year.`,
    examinerTips: [
      'Highlight how the stabilization fund works during boom and depression periods.',
      'Clarify that marketing boards primarily handle export cash crops like cocoa, groundnut, and palm produce.'
    ]
  },

  {
    id: 'ECO-WASSCE-2024-Q4',
    subject: 'Economics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section B (Economic Development)',
    topic: 'Industrialisation',
    subtopic: 'Problems of Industrial Development in Nigeria',
    totalMarks: 10,
    title: 'Major Obstacles Hindering Rapid Industrialisation in Nigeria',
    questionText: 'Explain five factors militating against rapid industrialisation in Nigeria.',
    parts: [
      {
        label: '(a)-(e)',
        text: 'Explain five factors militating against rapid industrialisation.',
        marks: 10,
        rubricHint: '2 marks for each well-explained factor: Inadequate capital, irregular electricity/power, poor transport networks, shortage of raw materials, shortage of technical manpower, inconsistent government policy, corruption'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Factor 1: Inadequate Capital and High Interest Rates (commercial banks charging excessive loan rates, preventing long-term factory investment)',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Factor 2: Epileptic Power Supply and High Energy Costs (firms spending over 40% of operational costs running heavy diesel generators)',
        allocatedMarks: 2
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Factor 3: Deteriorating Transportation Infrastructure (bad roads and inefficient rail/ports delaying raw materials and raising haulage fees)',
        allocatedMarks: 2
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Factor 4: Scarcity of Technical and Engineering Manpower (skill gap between university theory and practical industrial machinery operation)',
        allocatedMarks: 2
      },
      {
        stepNumber: 5,
        markType: 'B1',
        description: 'Factor 5: Policy Inconsistency and Multiple Taxation (frequent changes in tariffs, import bans and currency devaluations generating uncertainty)',
        allocatedMarks: 2
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### Five Factors Militating Against Rapid Industrialisation in Nigeria (10 Marks [B2 each])
1. **Epileptic Electric Power Supply**: Frequent blackouts force manufacturers to generate their own power using diesel generators. This drastically inflates operational production overheads, making locally manufactured goods uncompetitive against cheap foreign imports.
2. **Shortage of Long-Term Investment Capital**: Commercial banks in Nigeria prefer short-term trading loans over long-gestation industrial financing. High interest rates ($>25\%$) prohibit entrepreneurs from purchasing modern industrial machinery.
3. **Dilapidated Transport Infrastructure**: Bad roads, lack of functional freight rail lines, and congested seaports slow down the delivery of raw materials and distribution of finished goods, resulting in severe logistics bottlenecks.
4. **Dearth of Technical and Engineering Skills**: While academic degrees are abundant, there is a acute deficit of specialized technicians, mechanical engineers, and process operators, forcing industries to rely on expensive expatriate personnel.
5. **Policy Inconsistency and Multiple Taxation**: Frequent reversals in fiscal policies, import duty tariffs, and foreign exchange restrictions create unpredictable business climates that discourage long-term direct foreign investment.`,
    examinerTips: [
      'Do not just list keywords; provide full economic rationale connecting the challenge to its impact on production costs and output.',
      'Mention energy costs as the number one overhead driver in Nigerian manufacturing.'
    ]
  },

  {
    id: 'ECO-WASSCE-2024-Q10',
    subject: 'Economics',
    exam: 'WAEC',
    year: 2024,
    paper: 'Paper 2 (Theory)',
    section: 'Section A (Basic Economic Principles)',
    topic: 'Basic Economic Concepts',
    subtopic: 'Opportunity Cost and Economic Decision Making',
    totalMarks: 10,
    title: 'Concept of Opportunity Cost and Its Relevance to Individuals, Firms, and Government',
    questionText: '(a) What is opportunity cost?\n(b) Explain why the concept of opportunity cost is important to:\n    (i) an individual;\n    (ii) a business firm;\n    (iii) the government.',
    parts: [
      {
        label: '(a)',
        text: 'Define opportunity cost.',
        marks: 2,
        rubricHint: 'The real cost of satisfying a want expressed in terms of the next best alternative forgone [2 marks]'
      },
      {
        label: '(b)(i)',
        text: 'Explain the importance of opportunity cost to an individual.',
        marks: 2.66,
        rubricHint: 'Helps in scale of preference, maximizing utility with limited income [2.66 marks]'
      },
      {
        label: '(b)(ii)',
        text: 'Explain the importance of opportunity cost to a firm.',
        marks: 2.66,
        rubricHint: 'Guides allocation of scarce capital/labour among competing production lines to maximize profits [2.66 marks]'
      },
      {
        label: '(b)(iii)',
        text: 'Explain the importance of opportunity cost to the government.',
        marks: 2.68,
        rubricHint: 'Aids national budget allocation across competing sectors (e.g. defense vs healthcare vs education) [2.68 marks]'
      }
    ],
    markingRubrics: [
      {
        stepNumber: 1,
        markType: 'B1',
        description: 'Definition: The value or satisfaction of the next best alternative sacrifice or forgone when a choice is made among competing alternatives due to scarcity of resources',
        allocatedMarks: 2
      },
      {
        stepNumber: 2,
        markType: 'B1',
        description: 'Relevance to Individual: Guides rational scale of preference formulation, budget constraint optimization and maximum satisfaction/utility',
        allocatedMarks: 2.66
      },
      {
        stepNumber: 3,
        markType: 'B1',
        description: 'Relevance to Firm: Enables managers to allocate scarce factors of production (capital, labour) to the most profitable investment projects',
        allocatedMarks: 2.66
      },
      {
        stepNumber: 4,
        markType: 'B1',
        description: 'Relevance to Government: Enables national planners to prioritize public sector expenditure (health vs defense vs road construction) for optimal social welfare',
        allocatedMarks: 2.68
      }
    ],
    modelSolution: `### WAEC Official Marking Scheme Model Solution

#### (a) Definition of Opportunity Cost (2 Marks [B2])
Opportunity cost is the value of the next best alternative sacrificed or forgone when a choice is made among several competing mutually exclusive options. It represents the real cost of fulfilling one desire rather than monetary expenditure, arising directly from the fundamental economic problem of **scarcity of resources**.

#### (b) Importance of Opportunity Cost (8 Marks [B8])
1. **To an Individual (2.66 Marks)**:
   - Since personal income and time are limited, an individual uses opportunity cost to rank wants in order of importance (**scale of preference**).
   - It prevents impulsive spending and ensures financial resources are channeled into the most pressing needs (e.g., choosing to pay school fees over buying luxury clothing).
2. **To a Business Firm (2.66 Marks)**:
   - Guides management in allocating scarce productive resources (land, capital, labour) into the most profitable production ventures.
   - Helps evaluate whether investing ₦100 million in modern automated machinery yields higher returns than opening a second distribution depot.
3. **To the Government (2.68 Marks)**:
   - Enables national budget planners to balance competing developmental priorities under restricted tax revenue.
   - For example, determining whether spending ₦500 billion on national defence outweighs the social returns of constructing general hospitals and investing in basic education.`,
    examinerTips: [
      'Always distinguish money cost (monetary price paid) from real/opportunity cost (alternative sacrificed).',
      'Mention that opportunity cost would not exist if resources were infinite and free.'
    ]
  },,

  // ─── WAEC 2024/2025 EXTENDED THEORY (TYPES C & D) ───
  {
  "id": "CIV-WASSCE-2024-QC1",
  "subject": "Civic Education",
  "exam": "WAEC",
  "year": 2024,
  "paper": "Paper 2 (Theory)",
  "section": "Section B (Youth & Empowerment)",
  "topic": "Youth Empowerment",
  "subtopic": "Skill Acquisition & Economic Self-Reliance",
  "totalMarks": 10,
  "title": "Youth Empowerment and Roles of Skill Acquisition Programmes",
  "questionText": "(a) What is youth empowerment?\n(b) Explain four roles of skill acquisition programmes in reducing unemployment in Nigeria.",
  "parts": [
    {
      "label": "(a)",
      "text": "Define youth empowerment.",
      "marks": 2,
      "rubricHint": "Policy or process of providing young people with skills, knowledge and resources to be self-reliant [2 marks]"
    },
    {
      "label": "(b)",
      "text": "Explain four roles of skill acquisition programmes in curbing youth unemployment.",
      "marks": 8,
      "rubricHint": "Self-employment promotion, crime reduction, poverty alleviation, wealth creation, entrepreneurial culture [2 marks each]"
    }
  ],
  "markingRubrics": [
    {
      "stepNumber": 1,
      "markType": "B1",
      "description": "Definition: Structural training and economic assistance designed to empower youths with technical and vocational capabilities for independence and nation-building",
      "allocatedMarks": 2
    },
    {
      "stepNumber": 2,
      "markType": "B1",
      "description": "Role 1: Promotion of Self-Employment (trainees establish small-scale tailoring, carpentry, and tech enterprises instead of seeking white-collar jobs)",
      "allocatedMarks": 2
    },
    {
      "stepNumber": 3,
      "markType": "B1",
      "description": "Role 2: Reduction of Crime and Delinquency (meaningfully engages energetic youths, steering them away from cybercrime and cultism)",
      "allocatedMarks": 2
    },
    {
      "stepNumber": 4,
      "markType": "B1",
      "description": "Role 3: Poverty Alleviation and Family Welfare (generates household income and boosts economic purchasing power)",
      "allocatedMarks": 2
    },
    {
      "stepNumber": 5,
      "markType": "B1",
      "description": "Role 4: Diversification of the National Economy (stimulates grassroots micro-enterprises and non-oil manufacturing)",
      "allocatedMarks": 2
    }
  ],
  "modelSolution": "### WAEC Official Marking Scheme Model Solution\n\n#### (a) Definition of Youth Empowerment (2 Marks [B2])\nYouth empowerment is the conscious process of equipping young citizens with functional vocational skills, financial resources, education, and psychological support necessary to make informed life decisions, achieve economic self-reliance, and contribute constructively to community development.\n\n#### (b) Four Roles of Skill Acquisition Programmes (8 Marks [B2 each])\n1. **Fostering Self-Employment and Job Creation**: Vocational training in trades like fashion design, solar installation, and computer repairs converts job seekers into job creators who employ other youths.\n2. **Drastic Reduction in Crime Rates**: Idleness breeds anti-social vices. Gainfully skilled youths are occupied with productive ventures, diverting them from kidnapping, armed robbery, and online fraud.\n3. **Poverty Alleviation**: Acquiring viable trades guarantees regular income generation, lifting youth and their immediate families above the national poverty baseline.\n4. **Cultivating Grassroots Entrepreneurship**: Hands-on skills stimulate cottage industries, promoting indigenous inventions and reducing national reliance on imported finished goods.",
  "examinerTips": [
    "In youth empowerment, always cite tangible technical and vocational trades (e.g. ICT, automotive mechanics, agriculture).",
    "Explain the direct correlation between youth unemployment and social unrest."
  ]
},

  {
  "id": "CIV-WASSCE-2024-QD1",
  "subject": "Civic Education",
  "exam": "WAEC",
  "year": 2024,
  "paper": "Paper 2 (Theory)",
  "section": "Section A (Governance & Law)",
  "topic": "Rule of Law",
  "subtopic": "Principles and Limitations of Rule of Law",
  "totalMarks": 10,
  "title": "The Rule of Law: Core Principles and Practical Limitations",
  "questionText": "(a) Explain the concept of the Rule of Law according to A.V. Dicey.\n(b) State three core principles of the Rule of Law.\n(c) Explain two factors that can limit the operation of the Rule of Law in a democratic state.",
  "parts": [
    {
      "label": "(a)",
      "text": "Explain A.V. Dicey’s concept of the Rule of Law.",
      "marks": 2,
      "rubricHint": "Supremacy of the law over all individuals and governmental authorities [2 marks]"
    },
    {
      "label": "(b)",
      "text": "State the three core principles of the Rule of Law.",
      "marks": 3,
      "rubricHint": "Supremacy of the law, equality before the law, and protection of fundamental human rights [1 mark each]"
    },
    {
      "label": "(c)",
      "text": "Explain two limitations to the Rule of Law.",
      "marks": 5,
      "rubricHint": "State of emergency, diplomatic immunity, judicial immunity, presidential immunity [2.5 marks each]"
    }
  ],
  "markingRubrics": [
    {
      "stepNumber": 1,
      "markType": "B1",
      "description": "Explanation: Constitutional doctrine asserting that ordinary law of the land is supreme, and no ruler or citizen possesses arbitrary power beyond the law",
      "allocatedMarks": 2
    },
    {
      "stepNumber": 2,
      "markType": "B1",
      "description": "Three Principles: 1. Supremacy of regular law, 2. Equality of all persons before the law, 3. Entrenchment and judicial enforcement of individual human rights",
      "allocatedMarks": 3
    },
    {
      "stepNumber": 3,
      "markType": "B1",
      "description": "Limitation 1: State of Emergency / War (suspension of constitutional rights to restore public safety under Section 305)",
      "allocatedMarks": 2.5
    },
    {
      "stepNumber": 4,
      "markType": "B1",
      "description": "Limitation 2: Diplomatic and Executive Immunity (foreign diplomats and serving presidents/governors shielded from court prosecution)",
      "allocatedMarks": 2.5
    }
  ],
  "modelSolution": "### WAEC Official Marking Scheme Model Solution\n\n#### (a) A.V. Dicey's Concept of the Rule of Law (2 Marks [B2])\nAccording to Professor A.V. Dicey, the Rule of Law means the absolute supremacy or predominance of regular law as opposed to the influence of arbitrary power, excluding the existence of arbitrariness, prerogative, or wide discretionary authority on the part of the government.\n\n#### (b) Three Core Principles of the Rule of Law (3 Marks [B3])\n1. **Supremacy of the Law**: The law is above every citizen, institution, and leader. No person can be punished except for a distinct breach of law proven in ordinary court.\n2. **Equality Before the Law**: All citizens are subject to the same ordinary law and administered by the same regular judicial courts, regardless of wealth, social status, or political affiliation.\n3. **Protection of Fundamental Human Rights**: Individual liberties and rights are legally safeguarded and enforced by an independent judiciary.\n\n#### (c) Two Limitations to the Rule of Law (5 Marks [B2.5 each])\n1. **Declaration of State of Emergency**: In times of civil war, terrorism, or severe national emergencies, the government suspends certain civil liberties (e.g. freedom of movement and assembly), curtailing the rule of law.\n2. **Diplomatic and Executive Immunity**: Under international law, ambassadors and foreign diplomats cannot be arrested or tried in their host country. Similarly, Section 308 of the 1999 Constitution protects the President and Governors from criminal prosecution while in office.",
  "examinerTips": [
    "Quote A.V. Dicey explicitly as the scholar who popularized the concept in 1885.",
    "Mention Section 308 (Immunity Clause) when explaining executive immunity in Nigeria."
  ]
},

  {
  "id": "AGR-WASSCE-2024-QC1",
  "subject": "Agricultural Science",
  "exam": "WAEC",
  "year": 2024,
  "paper": "Paper 2 (Theory)",
  "section": "Section C (Animal Husbandry)",
  "topic": "Livestock Housing",
  "subtopic": "Site Selection Factors & Poultry Management",
  "totalMarks": 10,
  "title": "Site Selection Criteria for Livestock Housing and Poultry Disease Management",
  "questionText": "(a) Explain four factors to consider when selecting a site for locating an animal housing unit.\\n(b) State three symptoms of Newcastle disease in poultry.\\n(c) State three management practices to control coccidiosis in chickens.",
  "parts": [
    {
      "label": "(a)",
      "text": "Explain four factors in livestock housing site selection.",
      "marks": 4,
      "rubricHint": "Hygiene/drainage, topography, direction of prevailing wind, accessibility, availability of water/power [1 mark each]"
    },
    {
      "label": "(b)",
      "text": "State three symptoms of Newcastle disease in poultry.",
      "marks": 3,
      "rubricHint": "Twisting of neck (torticollis), greenish-yellow diarrhea, respiratory gasping, drop in egg production [1 mark each]"
    },
    {
      "label": "(c)",
      "text": "State three management practices to control coccidiosis in broilers.",
      "marks": 3,
      "rubricHint": "Keep litter dry, avoid overcrowding, administer coccidiostats in feed/water, clean drinkers regularly [1 mark each]"
    }
  ],
  "markingRubrics": [
    {
      "stepNumber": 1,
      "markType": "B1",
      "description": "Factor 1: Topography and Drainage (gentle slope to facilitate natural drainage and prevent water-logging)",
      "allocatedMarks": 1
    },
    {
      "stepNumber": 2,
      "markType": "B1",
      "description": "Factor 2: Direction of Prevailing Wind (housing oriented East-West to maximize ventilation and shield birds from direct windstorm)",
      "allocatedMarks": 1
    },
    {
      "stepNumber": 3,
      "markType": "B1",
      "description": "Factor 3: Reliable Water and Power Supply (abundant clean water for drinking, cooling and pen sanitization)",
      "allocatedMarks": 1
    },
    {
      "stepNumber": 4,
      "markType": "B1",
      "description": "Factor 4: Accessibility to Markets and Feed Mills (motorable roads for feed haulage and egg/meat distribution)",
      "allocatedMarks": 1
    },
    {
      "stepNumber": 5,
      "markType": "B1",
      "description": "Newcastle symptoms: 1. Nervous twisting of head and neck (torticollis), 2. Profuse greenish watery diarrhea, 3. Wheezing, coughing, and sudden mass mortality",
      "allocatedMarks": 3
    },
    {
      "stepNumber": 6,
      "markType": "B1",
      "description": "Coccidiosis control: 1. Maintain dry, mold-free litter, 2. Add prophylactic coccidiostats to drinking water, 3. Strict biosecurity footbaths at pen entrance",
      "allocatedMarks": 3
    }
  ],
  "modelSolution": "### WAEC Official Marking Scheme Model Solution\n\n#### (a) Four Factors for Locating Livestock Housing (4 Marks [B4])\n1. **Topography and Soil Drainage**: The building should sit on an elevated, gently sloping terrain with sandy-loam subsoil so that urine, wash-water, and rainwater flow away easily without creating damp, pathogen-breeding puddles.\n2. **Orientation & Wind Direction**: Pens must be oriented with their long axis running **East to West** to prevent scorching direct sunlight from overheating the animals, while allowing gentle cross-ventilation.\n3. **Proximity to Clean Water Supply**: Clean, potable water is mandatory for daily drinking, metabolic cooling, dissolving vaccinations, and washing pen equipment.\n4. **Road Accessibility**: The farm site must be linked by all-weather motorable roads to ensure cheap transport of bulky feed ingredients and prompt delivery of perishable livestock products (eggs and milk).\n\n#### (b) Three Symptoms of Newcastle Disease (3 Marks [B3])\n1. **Nervous Tremors & Torticollis**: Twisting of the neck and head backward or between legs, accompanied by circular staggering walking.\n2. **Severe Respiratory Distress**: Sneezing, coughing, gasping with open beaks, and nasal discharges.\n3. **Digestive Symptoms**: Bright green or yellowish watery diarrhea with foul odor and rapid dehydration.\n\n#### (c) Three Management Practices to Control Coccidiosis (3 Marks [B3])\n1. **Keep Litter Completely Dry**: Prevent leaking drinker nipples; damp, warm litter encourages rapid sporulation of *Eimeria* oocysts.\n2. **Administer Coccidiostats**: Mix anti-coccidial drugs (e.g. Amprolium, Sulfaquinoxaline) into drinking water as preventives.\n3. **Sanitation and Biosecurity**: Regularly clean, disinfect drinkers and feeders, and forbid unauthorized visitors from stepping into rearing pens.",
  "examinerTips": [
    "Remember Newcastle disease is viral (Paramyxovirus), meaning antibiotics do not cure it; only timely vaccination (NDV Lasota/Komarov) protects.",
    "Specify the East-West compass orientation for tropical farm buildings."
  ]
},

  {
  "id": "ECO-WASSCE-2024-QD1",
  "subject": "Economics",
  "exam": "WAEC",
  "year": 2024,
  "paper": "Paper 2 (Theory)",
  "section": "Section A (Production Theory)",
  "topic": "Division of Labour & Specialization",
  "subtopic": "Advantages and Disadvantages in Modern Industry",
  "totalMarks": 10,
  "title": "Division of Labour and Specialization in Factory Production",
  "questionText": "(a) Define division of labour.\\n(b) Explain three advantages of division of labour to a manufacturing enterprise.\\n(c) Explain two disadvantages of division of labour to the industrial worker.",
  "parts": [
    {
      "label": "(a)",
      "text": "Define division of labour.",
      "marks": 2,
      "rubricHint": "Breaking down a complex production process into simpler sequential stages, each performed by a specialist [2 marks]"
    },
    {
      "label": "(b)",
      "text": "Explain three advantages of division of labour to an enterprise.",
      "marks": 4.5,
      "rubricHint": "Increased output, time saving, skill improvement, mechanization facilitation [1.5 marks each]"
    },
    {
      "label": "(c)",
      "text": "Explain two disadvantages to the individual worker.",
      "marks": 3.5,
      "rubricHint": "Monotony/boredom, risk of unemployment, loss of craftsmanship, alienation [1.75 marks each]"
    }
  ],
  "markingRubrics": [
    {
      "stepNumber": 1,
      "markType": "B1",
      "description": "Definition: Industrial organization of production where the entire manufacturing process is broken down into separate distinct operations, with each task assigned to an individual or group specializing in it",
      "allocatedMarks": 2
    },
    {
      "stepNumber": 2,
      "markType": "B1",
      "description": "Advantage 1: Increased Total Output and Productivity (specialization allows repetitive mastery and accelerated speed)",
      "allocatedMarks": 1.5
    },
    {
      "stepNumber": 3,
      "markType": "B1",
      "description": "Advantage 2: Economy of Time (workers remain at a single workstation, eliminating wasted time moving between tools and tasks)",
      "allocatedMarks": 1.5
    },
    {
      "stepNumber": 4,
      "markType": "B1",
      "description": "Advantage 3: Facilitates Mechanization (standardized simple operations can be easily handed over to machines and robotic assembly)",
      "allocatedMarks": 1.5
    },
    {
      "stepNumber": 5,
      "markType": "B1",
      "description": "Disadvantage 1: Monotony and Tediousness (performing one tiny repetitive action all day induces acute boredom and mental fatigue)",
      "allocatedMarks": 1.75
    },
    {
      "stepNumber": 6,
      "markType": "B1",
      "description": "Disadvantage 2: Danger of Unemployment (narrow skills make it difficult to find work if that specific manufacturing process is automated or obsolete)",
      "allocatedMarks": 1.75
    }
  ],
  "modelSolution": "### WAEC Official Marking Scheme Model Solution\n\n#### (a) Definition of Division of Labour (2 Marks [B2])\nDivision of labour is an economic arrangement where the production of a commodity is broken down into numerous separate, sequential, and specialized operations, each performed by an individual worker or designated team suited to the task.\n\n#### (b) Three Advantages to a Manufacturing Firm (4.5 Marks [B1.5 each])\n1. **Substantial Increase in Output & Efficiency**: By focusing continuously on a single operation (e.g. cutting shoe soles), the worker achieves extreme speed, manual dexterity, and precision, vastly multiplying total factory output.\n2. **Elimination of Wasted Time**: Workers stay at their dedicated machines with their tools in hand, eliminating unproductive transit time spent switching between different tasks.\n3. **Facilitates Industrial Mechanization**: Decomposing manufacturing into simple, uniform steps allows engineers to invent purpose-built automated machinery and conveyor belts to replace human effort.\n\n#### (c) Two Disadvantages to the Industrial Worker (3.5 Marks [B1.75 each])\n1. **Monotony and Psychological Fatigue**: Performing the identical task hundreds of times daily (e.g. screwing bottle caps) creates unbearable boredom, kills creative initiative, and leads to worker alienation.\n2. **Occupational Immobility and Unemployment Risk**: A worker who only knows how to thread needles on an assembly line cannot easily switch to other trades if the factory shuts down or automates the process.",
  "examinerTips": [
    "Reference Adam Smith’s classic pin-making factory example for historical authority.",
    "Make sure to clearly separate advantages to the firm from disadvantages to the human worker."
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
