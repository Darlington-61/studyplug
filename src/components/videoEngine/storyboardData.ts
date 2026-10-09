export interface StoryboardScene {
  sceneNumber: number;
  title: string;
  durationSeconds: number;
  narration: string;
  visualObjects: string[];
  animationType: 'motion-sim' | 'projectile' | 'equation-solver' | 'chemical' | 'cell' | 'graph' | 'comparison' | 'formula' | 'past-question';
  onScreenText: string;
  transition: 'Fade' | 'Slide Left' | 'Zoom In' | 'Cut';
  background: 'Navy Chalkboard' | 'Dark Laboratory' | 'Cosmic Coordinate Grid' | 'Biochemical Matrix';
  audioCue: string;
  animationProps?: Record<string, any>;
}

export interface VideoCourseStoryboard {
  id: string;
  subject: string;
  topic: string;
  exam: string;
  totalDurationSeconds: number;
  hook: string;
  learningObjective: string;
  scenes: StoryboardScene[];
}

export const MASTER_STORYBOARDS: Record<string, VideoCourseStoryboard> = {
  'physics-motion': {
    id: 'physics-motion',
    subject: 'Physics',
    topic: 'Motion & Kinematics',
    exam: 'JAMB / WAEC',
    totalDurationSeconds: 150,
    hook: 'If JAMB gives you a question on velocity and you confuse it with speed, this video can save you several vital marks.',
    learningObjective: 'Master distance, displacement, speed, velocity, acceleration, and solve authentic UTME kinematics questions step-by-step.',
    scenes: [
      {
        sceneNumber: 1,
        title: 'Hook & Examiner Warning',
        durationSeconds: 15,
        narration: 'If JAMB gives you a question on velocity and you still confuse velocity with speed, this video can save you several marks. Let us break down motion from zero.',
        visualObjects: ['StudyPlug Mascot', 'JAMB Exam Warning Badge', 'Point A to Point B Roadmap'],
        animationType: 'comparison',
        onScreenText: 'SPEED (SCALAR) vs VELOCITY (VECTOR)',
        transition: 'Fade',
        background: 'Navy Chalkboard',
        audioCue: 'Gentle energetic intro riser',
        animationProps: {
          left: {
            title: 'Speed',
            badge: 'Scalar Quantity',
            definition: 'Rate of change of distance without regard to direction.',
            keyPoints: ['Always positive magnitude', 'Cannot be negative', 'Distance ÷ Time'],
            formula: 's = d / t',
            example: 'A car travelling at 80 km/h',
            colorScheme: 'cyan'
          },
          right: {
            title: 'Velocity',
            badge: 'Vector Quantity',
            definition: 'Rate of change of displacement in a specified direction.',
            keyPoints: ['Has both magnitude AND direction', 'Can be negative or zero', 'Displacement ÷ Time'],
            formula: 'v = Δx / Δt',
            example: 'A car travelling 80 km/h due North',
            colorScheme: 'amber'
          }
        }
      },
      {
        sceneNumber: 2,
        title: 'Concept from Zero: Car on Nigerian Highway',
        durationSeconds: 22,
        narration: 'Imagine a car travelling from Enugu to Abuja. As it moves from Point A to Point B, notice the displacement arrow growing with the timer. Velocity is displacement per unit time!',
        visualObjects: ['Highway Track', 'Enugu (Point A)', 'Abuja (Point B)', 'Displacement Arrow', 'Live Stopwatch'],
        animationType: 'motion-sim',
        onScreenText: 'VELOCITY = DISPLACEMENT ÷ TIME (v = Δx / Δt)',
        transition: 'Slide Left',
        background: 'Navy Chalkboard',
        audioCue: 'Subtle mechanical engine whoosh',
        animationProps: { speed: 1.2, showFormula: true }
      },
      {
        sceneNumber: 3,
        title: 'Formula Reveal & Physical Units',
        durationSeconds: 18,
        narration: 'Here is the master kinematics formula: v = Δx / Δt. In SI units, displacement is in metres, time in seconds, so velocity is always in metres per second.',
        visualObjects: ['Golden Formula Card', 'Unit Breakdown Badges'],
        animationType: 'formula',
        onScreenText: 'v = Δx / Δt [m/s]',
        transition: 'Zoom In',
        background: 'Cosmic Coordinate Grid',
        audioCue: 'Bright chime shimmer',
        animationProps: {
          title: 'Kinematics Definition Formula',
          formula: 'v = Δx / Δt',
          description: 'Average velocity equals total displacement divided by elapsed time interval.',
          symbols: [
            { symbol: 'v', name: 'Velocity', unit: 'm/s', color: '#38bdf8' },
            { symbol: 'Δx', name: 'Displacement', unit: 'metres (m)', color: '#F8C800' },
            { symbol: 'Δt', name: 'Elapsed Time', unit: 'seconds (s)', color: '#4ade80' },
            { symbol: 'a', name: 'Acceleration', unit: 'm/s²', color: '#f43f5e' }
          ],
          tip: 'Always check if speed is in km/h: multiply by 5/18 to convert instantly to m/s!'
        }
      },
      {
        sceneNumber: 4,
        title: '2D Trajectory & Projectile Motion',
        durationSeconds: 28,
        narration: 'Now watch what happens when an object is thrown into the air, like a football across the pitch. Notice that horizontal velocity vx stays constant, while gravity g acts downward!',
        visualObjects: ['Parabolic Trajectory Arc', 'vx Vector', 'vy Vector', 'Gravity Vector g', 'Apex Hmax'],
        animationType: 'projectile',
        onScreenText: 'PROJECTILE MOTION: vx = CONSTANT | vy = 0 AT PEAK',
        transition: 'Fade',
        background: 'Cosmic Coordinate Grid',
        audioCue: 'Whoosh trajectory tone',
        animationProps: { speed: 1.1 }
      },
      {
        sceneNumber: 5,
        title: 'Verified Past Question Application: JAMB 2023',
        durationSeconds: 35,
        narration: 'Now pause the video and try this authentic JAMB question yourself. A body accelerates uniformly from rest at 2 m/s² for 5 seconds. What is its velocity?',
        visualObjects: ['JAMB Past Question Card', '10-Second Countdown Timer', 'Step-by-Step Solver'],
        animationType: 'past-question',
        onScreenText: 'PAUSE AND TRY THIS: JAMB UTME 2023 #12',
        transition: 'Cut',
        background: 'Navy Chalkboard',
        audioCue: 'Ticking countdown metronome',
        animationProps: {
          question: {
            exam: 'JAMB (UTME)',
            year: '2023',
            subject: 'Physics',
            topic: 'Motion',
            difficulty: 'MEDIUM',
            verifiedStatus: 'VERIFIED PAST QUESTION',
            questionText: 'A body accelerates uniformly from rest at 2 m/s² for 5 seconds. Calculate the final velocity acquired by the body.',
            options: [
              { label: 'A', text: '10 m/s', isCorrect: true },
              { label: 'B', text: '25 m/s', isCorrect: false },
              { label: 'C', text: '5 m/s', isCorrect: false },
              { label: 'D', text: '2.5 m/s', isCorrect: false }
            ],
            given: ['Initial velocity u = 0 (from rest)', 'Acceleration a = 2 m/s²', 'Time t = 5 s'],
            required: 'Final velocity v',
            formula: 'v = u + at',
            whyFormula: 'This is the first equation of motion connecting initial velocity, acceleration, time and final velocity.',
            substitution: ['v = 0 + (2 m/s² × 5 s)', 'v = 10 m/s'],
            calculationSteps: [
              'Step 1: Identify that "from rest" means u = 0 m/s.',
              'Step 2: Choose first equation of motion: v = u + at.',
              'Step 3: Substitute: v = 0 + (2)(5) = 10 m/s.',
              'Step 4: Check units: m/s matches velocity.',
              'Step 5: Match with options: Option A is correct!'
            ],
            unitCheck: 'Velocity in m/s',
            examinerTrap: 'Students who divide acceleration by time instead of multiplying get 0.4 m/s. Remember: v = u + at!',
            finalAnswer: 'A (10 m/s)'
          }
        }
      }
    ]
  },

  'mathematics-algebra': {
    id: 'mathematics-algebra',
    subject: 'Mathematics',
    topic: 'Quadratic Equations & Algebra',
    exam: 'WAEC / JAMB',
    totalDurationSeconds: 140,
    hook: 'If you want to solve any quadratic equation in under 30 seconds, understand the visual balance.',
    learningObjective: 'Master algebraic balancing, standard quadratic forms, and the quadratic formula.',
    scenes: [
      {
        sceneNumber: 1,
        title: 'Algebraic Balancing Scale',
        durationSeconds: 20,
        narration: 'An algebraic equation is like a weighing scale. When we solve 2x + 5 = 15, we must subtract 5 from both sides to keep the balance even.',
        visualObjects: ['Visual Balance Scale', 'Algebraic Expression Card', 'Step Navigator'],
        animationType: 'equation-solver',
        onScreenText: 'BALANCE SCALE PRINCIPLE: 2x + 5 = 15',
        transition: 'Fade',
        background: 'Navy Chalkboard',
        audioCue: 'Wooden scale clink sound',
        animationProps: { autoPlay: true }
      },
      {
        sceneNumber: 2,
        title: 'The Parabola Graph & Real Roots',
        durationSeconds: 25,
        narration: 'Every quadratic equation ax² + bx + c = 0 represents a parabola curve! The solutions or roots are simply where the curve crosses the x-axis.',
        visualObjects: ['Coordinate Plane', 'Parabola Curve', 'Root Intercepts', 'Vertex Point'],
        animationType: 'graph',
        onScreenText: 'y = ax² + bx + c | ROOTS = X-INTERCEPTS',
        transition: 'Slide Left',
        background: 'Cosmic Coordinate Grid',
        audioCue: 'Tone sweep chime',
        animationProps: { isPlaying: true }
      },
      {
        sceneNumber: 3,
        title: 'The Master Quadratic Formula',
        durationSeconds: 20,
        narration: 'When factorization is difficult, use the quadratic formula: x equals minus b, plus or minus square root of b squared minus 4ac, all over 2a.',
        visualObjects: ['Gold Formula Banner', 'Discriminant Breakdown'],
        animationType: 'formula',
        onScreenText: 'x = [-b ± √(b² - 4ac)] / 2a',
        transition: 'Zoom In',
        background: 'Navy Chalkboard',
        audioCue: 'Royal gong shimmer',
        animationProps: {
          title: 'General Quadratic Solution Formula',
          formula: 'x = [-b ± √(b² - 4ac)] / (2a)',
          description: 'Yields the two exact roots of any second-degree polynomial equation.',
          symbols: [
            { symbol: 'a', name: 'Quadratic coeff', unit: 'coeff of x²', color: '#38bdf8' },
            { symbol: 'b', name: 'Linear coeff', unit: 'coeff of x', color: '#F8C800' },
            { symbol: 'c', name: 'Constant term', unit: 'number', color: '#4ade80' },
            { symbol: 'Δ', name: 'Discriminant', unit: 'b² - 4ac', color: '#f43f5e' }
          ],
          tip: 'If b² - 4ac is negative, there are no real roots (roots are imaginary/complex)!'
        }
      },
      {
        sceneNumber: 4,
        title: 'WAEC Solved Question Step-by-Step',
        durationSeconds: 35,
        narration: 'Here is a past WAEC question: Solve 2x² - 4x - 6 = 0. Pause and attempt it before the solution reveals!',
        visualObjects: ['WAEC Past Question Paper', 'Countdown Clock', 'Solution Breakdown'],
        animationType: 'past-question',
        onScreenText: 'WAEC SSCE 2024: QUADRATIC EQUATIONS',
        transition: 'Cut',
        background: 'Navy Chalkboard',
        audioCue: 'Countdown metronome tick',
        animationProps: {
          question: {
            exam: 'WAEC (SSCE)',
            year: '2024',
            subject: 'Mathematics',
            topic: 'Quadratic Equations',
            difficulty: 'MEDIUM',
            verifiedStatus: 'VERIFIED PAST QUESTION',
            questionText: 'Find the truth set of the quadratic equation: 2x² - 4x - 6 = 0',
            options: [
              { label: 'A', text: '{3, -1}', isCorrect: true },
              { label: 'B', text: '{-3, 1}', isCorrect: false },
              { label: 'C', text: '{2, -3}', isCorrect: false },
              { label: 'D', text: '{1, 6}', isCorrect: false }
            ],
            given: ['Equation: 2x² - 4x - 6 = 0'],
            required: 'Roots (truth set) of the equation',
            formula: 'ax² + bx + c = 0 (Factorization / Quadratic formula)',
            whyFormula: 'Dividing through by 2 simplifies the coefficients to monic form x² - 2x - 3 = 0.',
            substitution: ['x² - 2x - 3 = 0', '(x - 3)(x + 1) = 0'],
            calculationSteps: [
              'Step 1: Divide all terms by 2: x² - 2x - 3 = 0',
              'Step 2: Find two numbers whose product is -3 and sum is -2 (-3 and +1)',
              'Step 3: Factorize: (x - 3)(x + 1) = 0',
              'Step 4: Either x - 3 = 0 (x = 3) or x + 1 = 0 (x = -1)',
              'Step 5: The truth set is {3, -1}. Option A is correct!'
            ],
            unitCheck: 'Roots are dimensionless scalars',
            examinerTrap: 'Students frequently forget the sign swap when setting factors equal to zero: (x - 3) = 0 means x = +3, NOT -3!',
            finalAnswer: 'A {3, -1}'
          }
        }
      }
    ]
  },

  'chemistry-neutralization': {
    id: 'chemistry-neutralization',
    subject: 'Chemistry',
    topic: 'Acids, Bases & Neutralization',
    exam: 'WAEC / JAMB',
    totalDurationSeconds: 120,
    hook: 'What actually happens when an acid meets a base? Let us watch the atoms collide.',
    learningObjective: 'Understand ionic neutralization, spectator ions, and exothermic bond formation.',
    scenes: [
      {
        sceneNumber: 1,
        title: 'Molecular Collision & Particle Reaction',
        durationSeconds: 25,
        narration: 'In aqueous hydrochloric acid, hydrogen ions H⁺ float freely. In sodium hydroxide, hydroxide ions OH⁻ float freely. When mixed, they collide and neutralize into water!',
        visualObjects: ['Reaction Flask', 'H⁺ Cations', 'OH⁻ Anions', 'Na⁺ & Cl⁻ Spectators'],
        animationType: 'chemical',
        onScreenText: 'ACID-BASE NEUTRALIZATION: H⁺ + OH⁻ → H₂O',
        transition: 'Fade',
        background: 'Dark Laboratory',
        audioCue: 'Bubbling laboratory glass sound',
        animationProps: { isPlaying: true }
      },
      {
        sceneNumber: 2,
        title: 'Formula & Reaction Stoichiometry',
        durationSeconds: 20,
        narration: 'The complete chemical equation is HCl plus NaOH yields NaCl plus H₂O. Notice that heat is released: neutralization is always exothermic!',
        visualObjects: ['Thermochemical Equation', 'Enthalpy Badge ΔH = -57.3 kJ/mol'],
        animationType: 'formula',
        onScreenText: 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l) (ΔH = -57.3 kJ/mol)',
        transition: 'Zoom In',
        background: 'Dark Laboratory',
        audioCue: 'Chemical sizzle sparkle',
        animationProps: {
          title: 'Standard Enthalpy of Neutralization',
          formula: 'H⁺(aq) + OH⁻(aq) → H₂O(l) | ΔH° = -57.3 kJ/mol',
          description: 'Strong acid reacting with strong base always releases approximately 57.3 kJ per mole of water formed.',
          symbols: [
            { symbol: 'H⁺', name: 'Hydrogen ion', unit: 'from acid', color: '#38bdf8' },
            { symbol: 'OH⁻', name: 'Hydroxide ion', unit: 'from base', color: '#f43f5e' },
            { symbol: 'H₂O', name: 'Water molecule', unit: 'neutral product', color: '#4ade80' },
            { symbol: 'ΔH', name: 'Heat of reaction', unit: 'kJ/mol', color: '#F8C800' }
          ],
          tip: 'JAMB loves to ask: Why is the heat of neutralization between any strong acid and strong base constant? Answer: Because the net reaction is always H⁺ + OH⁻ → H₂O!'
        }
      }
    ]
  },

  'biology-photosynthesis': {
    id: 'biology-photosynthesis',
    subject: 'Biology',
    topic: 'Photosynthesis & Plant Physiology',
    exam: 'WAEC / JAMB',
    totalDurationSeconds: 120,
    hook: 'How do plants turn sunlight and air into food? Watch the chloroplast engine in action.',
    learningObjective: 'Master the light-dependent and dark stages of photosynthesis and the origin of oxygen.',
    scenes: [
      {
        sceneNumber: 1,
        title: 'Chloroplast Light Absorption Engine',
        durationSeconds: 25,
        narration: 'Inside the leaf mesophyll cells, chloroplasts absorb sunlight photons. Carbon dioxide enters through the stomata, water arrives from the roots, and together they synthesize glucose!',
        visualObjects: ['Sunlight Photons', 'Leaf Cross Section', 'Chloroplast Thylakoids', 'Glucose Output'],
        animationType: 'cell',
        onScreenText: 'PHOTOSYNTHESIS: 6CO₂ + 6H₂O + LIGHT → C₆H₁₂O₆ + 6O₂',
        transition: 'Fade',
        background: 'Biochemical Matrix',
        audioCue: 'Sunlight nature breeze tone',
        animationProps: { isPlaying: true }
      }
    ]
  }
};
