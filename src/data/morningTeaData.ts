export interface MorningTeaItem {
  id: number;
  phrase: string;
  meaning: string;
  example: string;
  examTip?: string;
  tags?: string[];
}

export interface MorningTeaEdition {
  id: string;
  title: string;
  subtitle: string;
  subject: string;
  badge: string;
  icon: string;
  items: MorningTeaItem[];
}

export const MORNING_TEA_EDITIONS: MorningTeaEdition[] = [
  {
    id: 'phrasal-verbs',
    title: '30 Common Phrasal Verbs Every UTME Student Should Know',
    subtitle: 'High-Yield Daily Morning Tea • Master Lexis & Structure in JAMB / WAEC',
    subject: 'Use of English',
    badge: 'POPULAR • TOP 30',
    icon: '🔥',
    items: [
      {
        id: 1,
        phrase: 'Turn up',
        meaning: 'To arrive or appear',
        example: 'We waited for thirty minutes, but the guest speaker failed to turn up on time.',
        examTip: 'JAMB Trap: Often confused with "turn on" or "turn over". Remember: Turn up = Arrive / Show up.',
        tags: ['Attendance', 'Verbs of Motion']
      },
      {
        id: 2,
        phrase: 'Break into',
        meaning: 'To enter a place by force or illegal means',
        example: 'Burglars attempted to break into the school computer lab during the holidays.',
        examTip: 'Preposition rule: "Break into a building", but "Break in" when used without an object.',
        tags: ['Security', 'Force']
      },
      {
        id: 3,
        phrase: 'Break off',
        meaning: 'To end or stop something suddenly',
        example: 'The two neighboring nations decided to break off diplomatic discussions.',
        examTip: 'UTME context: Commonly tested in peace talks, relationships, or sudden speeches.',
        tags: ['Ending', 'Communication']
      },
      {
        id: 4,
        phrase: 'Bring forward',
        meaning: 'To move an event or meeting to an earlier date/time',
        example: 'Because of the public holiday, the physics mock exam was brought forward to Tuesday.',
        examTip: 'Antonym: "Put off" (postpone to a later time). "Bring forward" means earlier!',
        tags: ['Time', 'Scheduling']
      },
      {
        id: 5,
        phrase: 'Call off',
        meaning: 'To cancel something that was previously planned',
        example: 'The academic staff union resolved to call off the two-week warning strike.',
        examTip: 'High-Frequency Exam Trap: "Call off" means CANCEL completely. "Put off" means POSTPONE.',
        tags: ['Cancellation', 'Events']
      },
      {
        id: 6,
        phrase: 'Come across',
        meaning: 'To find or meet someone or something unexpectedly',
        example: 'While revising past papers, I came across an identical calculus question from 2018.',
        examTip: 'Do not use "with" after "come across"! Saying "I came across with my friend" is incorrect.',
        tags: ['Discovery', 'Encounter']
      },
      {
        id: 7,
        phrase: 'Count on',
        meaning: 'To depend on or place trust in someone/something',
        example: 'Candidates can always count on daily topical drills to hit a 300+ UTME aggregate.',
        examTip: 'Synonyms: Rely on, bank on, lean on, depend on.',
        tags: ['Trust', 'Dependability']
      },
      {
        id: 8,
        phrase: 'Cut down',
        meaning: 'To reduce the amount or consumption of something',
        example: 'The doctor advised the candidate to cut down on excess caffeine during night prep.',
        examTip: 'Usage: Often followed by "on" (cut down ON sweets/screen time).',
        tags: ['Reduction', 'Health']
      },
      {
        id: 9,
        phrase: 'Die down',
        meaning: 'To become less strong, loud, or intense',
        example: 'When the exam invigilator stood up, the murmuring in the hall gradually died down.',
        examTip: 'Used for storms, excitement, rumors, and noise.',
        tags: ['Intensity', 'Calm']
      },
      {
        id: 10,
        phrase: 'Draw up',
        meaning: 'To prepare or write something formally (such as a contract or timetable)',
        example: 'The study group met on Sunday to draw up a comprehensive syllabus timetable.',
        examTip: 'Exam context: "Draw up a contract, timetable, plan, or constitution".',
        tags: ['Planning', 'Formal Writing']
      },
      {
        id: 11,
        phrase: 'Fall apart',
        meaning: 'To break into pieces or fail completely',
        example: 'Without disciplined time management, your preparation schedule will fall apart.',
        examTip: 'Can refer to physical objects (a torn textbook) or systems/plans.',
        tags: ['Failure', 'Breakdown']
      },
      {
        id: 12,
        phrase: 'Fall behind',
        meaning: 'To fail to keep up with others or a schedule',
        example: 'If you skip two study days, you will easily fall behind your peer study group.',
        examTip: 'Often paired with "with" or "in" (fall behind in syllabus coverage).',
        tags: ['Pace', 'Progress']
      },
      {
        id: 13,
        phrase: 'Fall through',
        meaning: 'To fail to happen, materialize, or be completed',
        example: 'The planned study excursion fell through because of heavy morning rainfall.',
        examTip: 'Key difference: Plans "fall through" (collapse before happening).',
        tags: ['Disappointment', 'Plans']
      },
      {
        id: 14,
        phrase: 'Get over',
        meaning: 'To recover from an illness, shock, or disappointment',
        example: 'It took her only one day to get over the disappointing score and resume drilling.',
        examTip: 'Synonym: Overcome, bounce back from.',
        tags: ['Recovery', 'Resilience']
      },
      {
        id: 15,
        phrase: 'Give in',
        meaning: 'To stop resisting or surrender to pressure/argument',
        example: 'Under intense debate, the opposition representative finally gave in to the motion.',
        examTip: 'Difference: "Give in" = yield to someone else. "Give out" = distribute / fail.',
        tags: ['Surrender', 'Debate']
      },
      {
        id: 16,
        phrase: 'Give up',
        meaning: 'To stop trying or abandon a habit or pursuit',
        example: 'Never give up when tackling difficult mechanics questions in physics.',
        examTip: 'Used with gerunds: "Give up smoking", "Give up practicing".',
        tags: ['Perseverance', 'Effort']
      },
      {
        id: 17,
        phrase: 'Go over',
        meaning: 'To examine, review, or verify something carefully',
        example: 'Take five minutes to go over your CBT answers before clicking the submit button.',
        examTip: 'Synonyms: Scrutinize, inspect, double-check.',
        tags: ['Review', 'Inspection']
      },
      {
        id: 18,
        phrase: 'Hand in',
        meaning: 'To submit something to an authority (assignment, test sheet)',
        example: 'All candidates must hand in their scratch papers before leaving the test center.',
        examTip: 'Opposite: "Hand out" (distribute). "Hand in" = submit.',
        tags: ['Submission', 'Exams']
      },
      {
        id: 19,
        phrase: 'Hold back',
        meaning: 'To prevent someone or something from progressing or expressing feelings',
        example: 'Anxiety should not hold you back from displaying your true mastery on exam day.',
        examTip: 'Can mean conceal information ("hold back the truth") or impede progress.',
        tags: ['Obstacle', 'Restraint']
      },
      {
        id: 20,
        phrase: 'Let down',
        meaning: 'To disappoint someone by failing to meet their expectations',
        example: 'He studied relentlessly because he refused to let down his high school teachers.',
        examTip: 'Noun form: "A letdown" (a major disappointment).',
        tags: ['Disappointment', 'Expectations']
      },
      {
        id: 21,
        phrase: 'Look down on',
        meaning: 'To regard someone as inferior or unimportant',
        example: 'A true scholar never looks down on fellow students struggling with mathematics.',
        examTip: 'Opposite: "Look up to" (admire / respect).',
        tags: ['Attitude', 'Social']
      },
      {
        id: 22,
        phrase: 'Look into',
        meaning: 'To investigate, examine, or find out the facts about something',
        example: 'The examination board promised to look into the fingerprint scanner complaint.',
        examTip: 'Synonym: Investigate. Never say "investigate into" — say "investigate" OR "look into"!',
        tags: ['Investigation', 'Official']
      },
      {
        id: 23,
        phrase: 'Make out',
        meaning: 'To understand, decipher, or see something with difficulty',
        example: 'The handwriting was so faint that the examiner could hardly make out the equation.',
        examTip: 'Very common in JAMB Comprehension and Lexis passages.',
        tags: ['Perception', 'Understanding']
      },
      {
        id: 24,
        phrase: 'Put off',
        meaning: 'To postpone, delay, or cause someone to lose interest',
        example: 'Never put off till tomorrow the syllabus chapters you can complete today.',
        examTip: 'Two meanings: 1. Postpone. 2. Repel/disgust ("His bad attitude put me off").',
        tags: ['Procrastination', 'Time']
      },
      {
        id: 25,
        phrase: 'Put forward',
        meaning: 'To suggest an idea, proposal, or theory for consideration',
        example: 'The chemistry candidate put forward a well-reasoned hypothesis during the oral test.',
        examTip: 'Synonym: Propose, advance, submit.',
        tags: ['Ideas', 'Proposals']
      },
      {
        id: 26,
        phrase: 'Rule out',
        meaning: 'To decide that something is impossible or not suitable',
        example: 'The doctor ruled out typhoid after evaluating the candidate\'s lab test results.',
        examTip: 'Critical for multiple choice elimination: Rule out the 2 obvious wrong options first!',
        tags: ['Elimination', 'Decisions']
      },
      {
        id: 27,
        phrase: 'Set off',
        meaning: 'To begin a journey or cause an event/alarm to happen',
        example: 'The students set off for the university campus at early dawn to avoid traffic.',
        examTip: 'Context 1: Start journey. Context 2: Trigger ("The smoke set off the alarm").',
        tags: ['Travel', 'Triggers']
      },
      {
        id: 28,
        phrase: 'Take over',
        meaning: 'To assume control or responsibility of something',
        example: 'The senior invigilator will take over the CBT hall supervision at midday.',
        examTip: 'Noun form: "Takeover" (the acquisition of control).',
        tags: ['Leadership', 'Control']
      },
      {
        id: 29,
        phrase: 'Think over',
        meaning: 'To consider something carefully before making a final decision',
        example: 'Take a deep breath and think over each question prompt before choosing an option.',
        examTip: 'Synonym: Ponder, deliberate, weigh up.',
        tags: ['Thinking', 'Strategy']
      },
      {
        id: 30,
        phrase: 'Turn into',
        meaning: 'To transform or change into something completely different',
        example: 'With continuous daily drills on StudyPlug, your weak areas will turn into your greatest strengths.',
        examTip: 'Indicates total transformation (e.g., caterpillars turn into butterflies).',
        tags: ['Transformation', 'Growth']
      }
    ]
  },
  {
    id: 'physics-shortcuts',
    title: '⚡ 15 High-Yield Physics Formula Shortcuts & SI Traps',
    subtitle: 'High-Yield Daily Morning Tea • Mechanics, Electricity & Waves',
    subject: 'Physics',
    badge: 'HIGH YIELD • SPEED',
    icon: '⚛️',
    items: [
      {
        id: 1,
        phrase: 'Work Done = Force × Distance × cos(θ)',
        meaning: 'Work is zero if force and displacement are perpendicular (cos 90° = 0).',
        example: 'A person carrying a bucket horizontally does ZERO work against gravity!',
        examTip: 'JAMB Classic: Carrying luggage horizontally = 0 J work done against gravity.',
        tags: ['Mechanics', 'Energy']
      },
      {
        id: 2,
        phrase: 'Transformer Rule: Vp / Vs = Np / Ns = Is / Ip',
        meaning: 'Voltage and turns are direct; current is inverse for an ideal transformer.',
        example: 'Step-up transformer increases voltage but decreases current proportionately.',
        examTip: 'Power in = Power out (Vp × Ip = Vs × Is). Current is always INVERTED!',
        tags: ['Electricity', 'Magnetism']
      },
      {
        id: 3,
        phrase: 'Resistors: Series add (R1+R2), Parallel inverse (R1×R2)/(R1+R2)',
        meaning: 'For 2 equal parallel resistors, equivalent resistance is always half (R/2).',
        example: 'Two 8Ω resistors in parallel give: (8×8)/(8+8) = 64/16 = 4Ω.',
        examTip: 'Speed shortcut: For identical parallel resistors, R_eq = R / n.',
        tags: ['Current Electricity', 'Circuits']
      },
      {
        id: 4,
        phrase: 'Projectile: Max Range at 45° | Max Height at 90°',
        meaning: 'Range R = (u² sin 2θ) / g. Max Range occurs when sin 2θ = 1 (θ = 45°).',
        example: 'At 30° and 60°, complementary angles produce the EXACT SAME range!',
        examTip: 'Complementary angles (θ and 90°-θ) always have equal horizontal ranges.',
        tags: ['Mechanics', 'Motion']
      },
      {
        id: 5,
        phrase: 'Simple Harmonic Motion: T = 2π√(L/g)',
        meaning: 'Period of pendulum depends ONLY on length and gravity, NEVER on bob mass!',
        example: 'Doubling the mass of a pendulum bob leaves the period unchanged!',
        examTip: 'JAMB Trap: Pendulum period is completely independent of mass and material.',
        tags: ['Waves', 'Oscillations']
      }
    ]
  },
  {
    id: 'chemistry-traps',
    title: '🧪 15 High-Yield Chemistry Color Changes & Gas Tests',
    subtitle: 'High-Yield Daily Morning Tea • Practical Qualitative Analysis',
    subject: 'Chemistry',
    badge: 'QUALITATIVE • LAB TRAPS',
    icon: '🧪',
    items: [
      {
        id: 1,
        phrase: 'CO₂ Gas: Turns Lime Water Milky',
        meaning: 'Pass CO₂ into Ca(OH)₂ → milky white precipitate of CaCO₃ forms.',
        example: 'Excess CO₂ clears the milkiness because soluble Ca(HCO₃)₂ forms.',
        examTip: 'JAMB Trap: Milkiness disappears with excess CO₂ due to calcium hydrogen trioxocarbonate.',
        tags: ['Gases', 'Inorganic']
      },
      {
        id: 2,
        phrase: 'SO₂ Gas: Decolorizes Acidified KMnO₄ (Purple to Colorless)',
        meaning: 'SO₂ is a powerful reducing agent that reduces MnO₄⁻ (purple) to Mn²⁺ (colorless).',
        example: 'Also turns acidified K₂Cr₂O₇ from orange to green (Cr³⁺).',
        examTip: 'Distinguish CO₂ from SO₂: Both turn lime water milky, but ONLY SO₂ smells pungent and decolorizes KMnO₄.',
        tags: ['Redox', 'Gases']
      },
      {
        id: 3,
        phrase: 'Fe²⁺ vs Fe³⁺: Green vs Reddish-Brown',
        meaning: 'Fe²⁺ precipitates with NaOH as dirty-green Fe(OH)₂; Fe³⁺ forms reddish-brown Fe(OH)₃.',
        example: 'Dirty green Fe(OH)₂ turns brown on standing due to atmospheric oxidation to Fe(OH)₃.',
        examTip: 'Always watch for the phrase "on exposure to air, turns reddish-brown".',
        tags: ['Cations', 'Precipitates']
      },
      {
        id: 4,
        phrase: 'Ammonia (NH₃): Only Alkaline Gas in UTME',
        meaning: 'NH₃ turns damp red litmus blue and produces dense white fumes with concentrated HCl.',
        example: 'NH₃ + HCl → NH₄Cl (dense white fumes of ammonium chloride).',
        examTip: 'The white fumes test with conc. HCl confirms NH₃ gas instantly.',
        tags: ['Gases', 'Acids & Bases']
      },
      {
        id: 5,
        phrase: 'Copper Flame Test: Characteristic Bluish-Green Flame',
        meaning: 'Cu²⁺ salts impart a distinctive bluish-green color to a non-luminous Bunsen flame.',
        example: 'Sodium gives golden yellow; Potassium gives lilac/pale purple; Calcium gives brick-red.',
        examTip: 'Flame Colors: Na (Yellow), K (Lilac), Ca (Brick-red), Cu (Blue-green), Ba (Apple-green).',
        tags: ['Flame Tests', 'Qualitative']
      }
    ]
  }
];
