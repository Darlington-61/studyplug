import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { MenuDrawer } from '../common/MenuDrawer';
import { quizSoundFx } from '../../utils/quizSoundFx';

// ─── Quiz Item Data Structure ──────────────────────────────────────────────
interface QuizStepItem {
  id: number;
  subject: string;
  subjectBadgeColor: string; // e.g. 'bg-[#FEF08A] text-[#854D0E]'
  questionText: string;
  mathFormula?: string;
  options: { key: string; text: string }[];
  correctKey: string;
  correctAnswerText: string;
  quickHint: string;
  solutionSteps: { title: string; lines: string[] }[];
  diagramType: 'physics-motion' | 'periodic-trend' | 'cell-membrane' | 'math-steps' | 'none';
}

// Exact 10-screen Quiz Sequence matching media_1791398253590.png
const QUIZ_ITEMS: QuizStepItem[] = [
  {
    id: 1,
    subject: 'PHYSICS',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'A ball is thrown vertically upwards with an initial velocity of 20 m/s. What is the maximum height it reaches? (Take g = 10 m/s²)',
    options: [
      { key: 'A', text: '10 m' },
      { key: 'B', text: '20 m' },
      { key: 'C', text: '30 m' },
      { key: 'D', text: '40 m' }
    ],
    correctKey: 'B',
    correctAnswerText: 'B 20 m',
    quickHint: 'Use v² = u² - 2gh or the fact that at maximum height v = 0.',
    solutionSteps: [
      {
        title: 'Step 1: Use the kinematic equation at maximum height (v = 0)',
        lines: [
          'v² = u² - 2gh',
          '0 = (20)² - 2(10)h',
          '0 = 400 - 20h',
          '20h = 400',
          'h = 400 / 20 = 20 m'
        ]
      }
    ],
    diagramType: 'physics-motion'
  },
  {
    id: 2,
    subject: 'MATHS',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'Solve for x:',
    mathFormula: '2x + 5 = 17',
    options: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '10' }
    ],
    correctKey: 'B',
    correctAnswerText: 'B 6',
    quickHint: 'Subtract 5 from both sides first, then divide by 2.',
    solutionSteps: [
      {
        title: 'Step 1: Subtract 5 from both sides.',
        lines: [
          '2x = 17 - 5',
          '2x = 12'
        ]
      },
      {
        title: 'Step 2: Divide by 2.',
        lines: [
          'x = 12 / 2',
          'x = 6'
        ]
      }
    ],
    diagramType: 'math-steps'
  },
  {
    id: 3,
    subject: 'CHEMISTRY',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'Which element has the highest electronegativity?',
    options: [
      { key: 'A', text: 'Sodium (Na)' },
      { key: 'B', text: 'Oxygen (O)' },
      { key: 'C', text: 'Chlorine (Cl)' },
      { key: 'D', text: 'Magnesium (Mg)' }
    ],
    correctKey: 'C',
    correctAnswerText: 'C Chlorine (Cl)',
    quickHint: 'Electronegativity increases across a period from left to right.',
    solutionSteps: [
      {
        title: 'Electronegativity increases across a period and up a group. Chlorine (Cl) has the highest electronegativity among the options.',
        lines: []
      }
    ],
    diagramType: 'periodic-trend'
  },
  {
    id: 4,
    subject: 'BIOLOGY',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'Which part of the cell controls what enters and leaves the cell?',
    options: [
      { key: 'A', text: 'Mitochondrion' },
      { key: 'B', text: 'Nucleus' },
      { key: 'C', text: 'Cell membrane' },
      { key: 'D', text: 'Ribosome' }
    ],
    correctKey: 'C',
    correctAnswerText: 'C Cell membrane',
    quickHint: 'It is a selectively permeable phospholipid bilayer surrounding the cell.',
    solutionSteps: [
      {
        title: 'The cell membrane is selectively permeable and controls the movement of substances in and out of the cell.',
        lines: []
      }
    ],
    diagramType: 'cell-membrane'
  },
  {
    id: 5,
    subject: 'PHYSICS',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'According to Ohm\'s Law, what is the current when a 12V battery is connected across a 4Ω resistor?',
    options: [
      { key: 'A', text: '2 A' },
      { key: 'B', text: '3 A' },
      { key: 'C', text: '4 A' },
      { key: 'D', text: '48 A' }
    ],
    correctKey: 'B',
    correctAnswerText: 'B 3 A',
    quickHint: 'Use Ohm\'s law: V = I × R, therefore I = V / R.',
    solutionSteps: [
      {
        title: 'Step 1: Apply Ohm\'s Law (I = V / R)',
        lines: [
          'V = 12 V, R = 4 Ω',
          'I = 12 / 4 = 3 A'
        ]
      }
    ],
    diagramType: 'math-steps'
  },
  {
    id: 6,
    subject: 'MATHS',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'Evaluate the quadratic roots of:',
    mathFormula: 'x² - 9 = 0',
    options: [
      { key: 'A', text: 'x = ±3' },
      { key: 'B', text: 'x = 3 only' },
      { key: 'C', text: 'x = ±9' },
      { key: 'D', text: 'x = 0' }
    ],
    correctKey: 'A',
    correctAnswerText: 'A x = ±3',
    quickHint: 'Difference of two squares: (x - 3)(x + 3) = 0.',
    solutionSteps: [
      {
        title: 'Step 1: Factorize difference of squares',
        lines: [
          'x² - 3² = 0',
          '(x - 3)(x + 3) = 0',
          'x = 3 or x = -3'
        ]
      }
    ],
    diagramType: 'math-steps'
  },
  {
    id: 7,
    subject: 'CHEMISTRY',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'What is the pH of a neutral aqueous solution at 25°C?',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '7' },
      { key: 'C', text: '14' },
      { key: 'D', text: '1' }
    ],
    correctKey: 'B',
    correctAnswerText: 'B 7',
    quickHint: 'On the pH scale: pH < 7 is acidic, pH > 7 is alkaline, pH 7 is neutral.',
    solutionSteps: [
      {
        title: 'Step 1: Neutral water ionization',
        lines: [
          '[H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M',
          'pH = -log(10⁻⁷) = 7'
        ]
      }
    ],
    diagramType: 'math-steps'
  },
  {
    id: 8,
    subject: 'BIOLOGY',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'Which organelle is known as the powerhouse of the cell?',
    options: [
      { key: 'A', text: 'Chloroplast' },
      { key: 'B', text: 'Mitochondrion' },
      { key: 'C', text: 'Ribosome' },
      { key: 'D', text: 'Golgi apparatus' }
    ],
    correctKey: 'B',
    correctAnswerText: 'B 3 A',
    quickHint: 'It produces cellular energy in the form of ATP through cellular respiration.',
    solutionSteps: [
      {
        title: 'The mitochondrion carries out aerobic respiration and synthesizes ATP, hence known as the powerhouse.',
        lines: []
      }
    ],
    diagramType: 'none'
  },
  {
    id: 9,
    subject: 'PHYSICS',
    subjectBadgeColor: 'bg-[#FEF08A] text-[#854D0E]',
    questionText: 'What is the SI unit of electric potential difference?',
    options: [
      { key: 'A', text: 'Ampere' },
      { key: 'B', text: 'Volt' },
      { key: 'C', text: 'Ohm' },
      { key: 'D', text: 'Joule' }
    ],
    correctKey: 'B',
    correctAnswerText: 'B Volt',
    quickHint: 'Potential difference is work done per unit charge: 1 Volt = 1 Joule / Coulomb.',
    solutionSteps: [
      {
        title: 'Electric potential difference is measured in Volts (V), named after Alessandro Volta.',
        lines: []
      }
    ],
    diagramType: 'none'
  }
];

// ─── Flow Phase State ───────────────────────────────────────────────────────
// question (3s) -> countdown (15s) -> time-up -> reveal (2s) -> explanation (7s) -> next question
type AutoPhase = 'question' | 'countdown' | 'reveal' | 'explanation' | 'final-score';
type AspectRatio = '9:16' | '16:9';

export const AiVideoGeneratorScreen: React.FC = () => {
  const { goBack } = useApp();

  // Aspect Ratio: 9:16 (Shorts/TikTok) vs 16:9 (YouTube)
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('9:16');

  // Video State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [phase, setPhase] = useState<AutoPhase>('question');
  const [countdownSeconds, setCountdownSeconds] = useState<number>(15);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  const [isTeacherVoiceActive, setIsTeacherVoiceActive] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Audio Reference for the user's authentic teacher voiceover
  const teacherAudioRef = useRef<HTMLAudioElement | null>(null);

  // Manual screen inspector mode (1 to 10) for instant jump / review
  const [inspectorActiveScreen, setInspectorActiveScreen] = useState<number | null>(null);

  // Sync sound FX
  useEffect(() => {
    quizSoundFx.isSoundEnabled = isSoundOn;
  }, [isSoundOn]);

  // Sync Teacher Audio with Play/Pause
  useEffect(() => {
    if (!teacherAudioRef.current) return;
    if (isPlaying && isTeacherVoiceActive) {
      teacherAudioRef.current.playbackRate = playbackSpeed;
      teacherAudioRef.current.play().catch(() => {});
    } else {
      teacherAudioRef.current.pause();
    }
  }, [isPlaying, isTeacherVoiceActive, playbackSpeed]);

  const currentItem = QUIZ_ITEMS[currentQuestionIndex] || QUIZ_ITEMS[0];

  // ─── Automated Video Flow Engine ──────────────────────────────────────────
  useEffect(() => {
    if (!isPlaying || inspectorActiveScreen !== null) return;

    let timer: NodeJS.Timeout;

    if (phase === 'question') {
      setCountdownSeconds(15);
      quizSoundFx.playQuestionTransition();
      // Show question card for 3 seconds, then start countdown
      timer = setTimeout(() => {
        setPhase('countdown');
      }, 3000 / playbackSpeed);
    } else if (phase === 'countdown') {
      if (countdownSeconds > 0) {
        timer = setTimeout(() => {
          setCountdownSeconds((prev) => {
            const next = prev - 1;
            if (next <= 5 && next > 0) {
              quizSoundFx.playUrgentTick();
            } else if (next > 0) {
              quizSoundFx.playTick();
            }
            return next;
          });
        }, 1000 / playbackSpeed);
      } else {
        // Time is up!
        quizSoundFx.playTimeUp();
        timer = setTimeout(() => {
          quizSoundFx.playCorrect();
          setPhase('reveal');
        }, 500 / playbackSpeed);
      }
    } else if (phase === 'reveal') {
      // Show highlighted answer for 2 seconds, then transition to step-by-step explanation
      timer = setTimeout(() => {
        setPhase('explanation');
      }, 2000 / playbackSpeed);
    } else if (phase === 'explanation') {
      // Show step-by-step math equations & diagrams for 6.5 seconds, then advance
      timer = setTimeout(() => {
        if (currentQuestionIndex < QUIZ_ITEMS.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setPhase('question');
        } else {
          setPhase('final-score');
          quizSoundFx.playCompletion();
        }
      }, 6500 / playbackSpeed);
    }

    return () => clearTimeout(timer);
  }, [phase, countdownSeconds, isPlaying, currentQuestionIndex, playbackSpeed, inspectorActiveScreen]);

  // Restart video from beginning
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setPhase('question');
    setCountdownSeconds(15);
    setIsPlaying(true);
    setInspectorActiveScreen(null);
    if (teacherAudioRef.current) {
      teacherAudioRef.current.currentTime = 0;
      if (isTeacherVoiceActive) {
        teacherAudioRef.current.play().catch(() => {});
      }
    }
    quizSoundFx.playQuestionTransition();
  };

  // Jump to specific screen index in inspector mode
  const handleInspectScreen = (screenNum: number) => {
    setInspectorActiveScreen(screenNum);
    setIsPlaying(false);
    if (screenNum <= 10) {
      if (screenNum === 1) {
        setCurrentQuestionIndex(0);
        setPhase('question');
      } else if (screenNum === 2) {
        setCurrentQuestionIndex(0);
        setPhase('countdown');
        setCountdownSeconds(12);
      } else if (screenNum === 3) {
        setCurrentQuestionIndex(0);
        setPhase('explanation');
      } else if (screenNum === 4) {
        setCurrentQuestionIndex(1);
        setPhase('question');
      } else if (screenNum === 5) {
        setCurrentQuestionIndex(1);
        setPhase('explanation');
      } else if (screenNum === 6) {
        setCurrentQuestionIndex(2);
        setPhase('question');
      } else if (screenNum === 7) {
        setCurrentQuestionIndex(2);
        setPhase('explanation');
      } else if (screenNum === 8) {
        setCurrentQuestionIndex(3);
        setPhase('question');
      } else if (screenNum === 9) {
        setCurrentQuestionIndex(3);
        setPhase('explanation');
      } else if (screenNum === 10) {
        setPhase('final-score');
      }
    }
  };

  // ─── SVG DIAGRAMS (Identical to media_1791398253590.png) ──────────────────

  // 1. Physics Vertical Motion Diagram (Screen 3)
  const renderPhysicsMotionDiagram = () => (
    <div className="flex flex-col items-center justify-center p-2 bg-white rounded-xl">
      <svg viewBox="0 0 160 210" fill="none" className="w-32 h-44 sm:w-36 sm:h-48">
        {/* Top ball (Blue) at maximum height */}
        <circle cx="95" cy="30" r="7.5" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
        <text x="108" y="27" fill="#001028" fontSize="10" fontWeight="bold">v = 0</text>
        <text x="108" y="38" fill="#64748B" fontSize="8">(at max height)</text>

        {/* Dashed vertical trajectory line */}
        <line x1="95" y1="38" x2="95" y2="170" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Height label 'h' with double arrow */}
        <line x1="120" y1="35" x2="120" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M120 35l-2.5 5h5zM120 170l-2.5-5h5z" fill="#64748B" />
        <text x="128" y="105" fill="#001028" fontSize="11" fontWeight="bold">h</text>

        {/* Bottom ball (Orange/Red) with initial velocity */}
        <circle cx="95" cy="170" r="7.5" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
        {/* Upward arrow next to ball */}
        <path d="M78 175v-18M75 161l3-5 3 5" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="110" y="174" fill="#001028" fontSize="10" fontWeight="bold">u = 20 m/s</text>

        {/* Ground baseline */}
        <line x1="20" y1="185" x2="150" y2="185" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        {/* Ground hatchings */}
        <line x1="30" y1="185" x2="25" y2="192" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="50" y1="185" x2="45" y2="192" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="70" y1="185" x2="65" y2="192" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="90" y1="185" x2="85" y2="192" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="110" y1="185" x2="105" y2="192" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="130" y1="185" x2="125" y2="192" stroke="#94A3B8" strokeWidth="1.5" />
      </svg>
    </div>
  );

  // 2. Chemistry Periodic Trend Diagram (Screen 7)
  const renderPeriodicTrendDiagram = () => (
    <div className="w-full space-y-2 p-2 bg-white rounded-xl">
      {/* Top Trend Arrow */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-blue-600 font-bold mb-0.5">increases</span>
        <div className="w-3/4 flex items-center">
          <div className="h-0.5 bg-[#0284C7] flex-1" />
          <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-[#0284C7]" />
        </div>
      </div>

      {/* 3 Trend Boxes: Na (0.9), Mg (1.2), Cl (3.0) */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2 rounded-xl bg-white border border-stone-200 text-center">
          <span className="font-bold text-xs text-[#001028] block">Na</span>
          <span className="text-[11px] text-stone-500 font-medium">0.9</span>
        </div>
        <div className="p-2 rounded-xl bg-white border border-stone-200 text-center">
          <span className="font-bold text-xs text-[#001028] block">Mg</span>
          <span className="text-[11px] text-stone-500 font-medium">1.2</span>
        </div>
        <div className="p-2 rounded-xl bg-blue-50 border border-blue-300 text-center shadow-xs">
          <span className="font-black text-xs text-[#001028] block">Cl</span>
          <span className="text-[11px] text-[#0284C7] font-bold">3.0</span>
        </div>
      </div>

      {/* Yellow Callout Box */}
      <div className="p-2 bg-[#FEF08A] rounded-xl text-center border border-amber-300">
        <span className="text-[11px] font-bold text-[#854D0E]">
          Chlorine has the highest electronegativity (3.0).
        </span>
      </div>
    </div>
  );

  // 3. Biology Cell Membrane Phospholipid Bilayer Diagram (Screen 9)
  const renderCellMembraneDiagram = () => (
    <div className="w-full flex flex-col items-center p-2 bg-white rounded-xl">
      <svg viewBox="0 0 240 120" fill="none" className="w-full h-28 sm:h-32">
        {/* Outside Cell Label */}
        <text x="180" y="20" fill="#001028" fontSize="9" fontWeight="bold">Outside cell</text>
        {/* Inside Cell Label */}
        <text x="180" y="110" fill="#001028" fontSize="9" fontWeight="bold">Inside cell</text>
        {/* Cell membrane bracket label */}
        <text x="182" y="65" fill="#475569" fontSize="9" fontWeight="bold">Cell membrane</text>
        <line x1="175" y1="35" x2="175" y2="90" stroke="#94A3B8" strokeWidth="1" />
        <path d="M175 62.5h4" stroke="#94A3B8" strokeWidth="1" />

        {/* Phospholipid Heads - Top Row (Blue/Purple) */}
        {[10, 26, 42, 58, 74, 90, 106, 122, 138, 154].map((x) => (
          <g key={`top-${x}`}>
            <circle cx={x} cy="42" r="5" fill="#818CF8" stroke="#4F46E5" strokeWidth="1" />
            <line x1={x - 2} y1="47" x2={x - 2} y2="58" stroke="#A5B4FC" strokeWidth="1.5" />
            <line x1={x + 2} y1="47" x2={x + 2} y2="58" stroke="#A5B4FC" strokeWidth="1.5" />
          </g>
        ))}

        {/* Central Transport Protein Channel (Orange/Yellow) */}
        <path
          d="M82 32c-4 12-4 44 0 56h18c-4-12-4-44 0-56z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="1.5"
        />
        <path
          d="M102 32c4 12 4 44 0 56h-18c4-12 4-44 0-56z"
          fill="#FBBF24"
          stroke="#D97706"
          strokeWidth="1.5"
        />

        {/* Phospholipid Heads - Bottom Row */}
        {[10, 26, 42, 58, 74, 90, 106, 122, 138, 154].map((x) => (
          <g key={`bot-${x}`}>
            <line x1={x - 2} y1="73" x2={x - 2} y2="62" stroke="#A5B4FC" strokeWidth="1.5" />
            <line x1={x + 2} y1="73" x2={x + 2} y2="62" stroke="#A5B4FC" strokeWidth="1.5" />
            <circle cx={x} cy="78" r="5" fill="#818CF8" stroke="#4F46E5" strokeWidth="1" />
          </g>
        ))}

        {/* Diffusing solute particles (Green & Red dots) */}
        <circle cx="35" cy="22" r="3" fill="#10B981" />
        <circle cx="65" cy="18" r="3" fill="#EF4444" />
        <circle cx="95" cy="22" r="3" fill="#10B981" />
        <circle cx="125" cy="16" r="3" fill="#EF4444" />
        <circle cx="92" cy="60" r="3" fill="#10B981" />
        <circle cx="45" cy="102" r="3" fill="#EF4444" />
        <circle cx="85" cy="108" r="3" fill="#10B981" />
        <circle cx="130" cy="104" r="3" fill="#10B981" />
      </svg>
    </div>
  );

  // ─── CIRCULAR COUNTDOWN RING (Screen 2) ──────────────────────────────────
  const renderCountdownGauge = (seconds: number) => {
    const total = 15;
    const progress = Math.max(0, Math.min(100, (seconds / total) * 100));
    return (
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mx-auto my-2">
        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#F1F5F9"
            strokeWidth="3.2"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#F8C800"
            strokeWidth="3.2"
            strokeDasharray={`${progress}, 100`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-2xl sm:text-3xl font-black text-[#001028] leading-none">
            {seconds}
          </span>
          <span className="text-[10px] text-stone-500 font-bold mt-1">
            seconds left
          </span>
        </div>
      </div>
    );
  };

  // ══════════════════════════════════════════════════════════════════════════
  // RENDER: INDIVIDUAL QUIZ CARD (Works in both 9:16 and 16:9 layout)
  // ══════════════════════════════════════════════════════════════════════════
  const renderQuizCard = () => {
    // FINAL SCORE SCREEN (Screen 10)
    if (phase === 'final-score') {
      return (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xl text-center space-y-4 animate-page-enter">
          {/* Top Counter Header */}
          <div className="flex items-center justify-between text-xs font-bold text-stone-500">
            <span>10/10</span>
            <div className="w-24 bg-stone-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#F8C800] h-full w-full" />
            </div>
          </div>

          {/* Trophy & Celebration Bursts */}
          <div className="relative pt-2">
            <div className="text-5xl animate-bounce">🏆</div>
            <h2 className="text-xl sm:text-2xl font-black text-[#001028] mt-2">
              Quiz Complete!
            </h2>
            <p className="text-xs text-stone-500 font-medium">You scored</p>
          </div>

          {/* Circular Score Ring */}
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="3.2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#F8C800"
                strokeWidth="3.2"
                strokeDasharray="80, 100"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-base font-black text-[#001028]">8/10</span>
              <span className="text-[10px] font-bold text-stone-500">80%</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm text-[#001028]">Great job!</h4>
            <p className="text-xs text-stone-500">Your knowledge is growing!</p>
          </div>

          {/* Sponsored Ad Box */}
          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-2">
            <div className="flex items-center space-x-1.5">
              <span className="bg-blue-100 text-[#0284C7] font-bold text-[9px] px-1.5 py-0.5 rounded">
                SPONSORED
              </span>
            </div>
            <div className="flex items-start space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                ▶
              </div>
              <div className="min-w-0">
                <h5 className="font-bold text-xs text-[#001028] leading-tight">
                  Boost Your Learning with StudyPlug Premium
                </h5>
                <p className="text-[10px] text-stone-500 mt-0.5 leading-snug">
                  • Unlimited quizzes • Detailed explanations • Track your progress
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="w-full py-2.5 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-xs shadow-xs transition"
            >
              Try Premium Now →
            </button>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="w-full py-2 rounded-xl text-xs font-bold text-stone-600 hover:text-[#001028] transition"
          >
            Replay Quiz Video ↺
          </button>
        </div>
      );
    }

    // REGULAR QUIZ SCREENS (1 to 9)
    const progressPercent = ((currentQuestionIndex + 1) / QUIZ_ITEMS.length) * 100;

    return (
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200 shadow-xl space-y-3.5 animate-page-enter">
        {/* Top Progress & Counter */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-black text-stone-500">
            <span>{currentQuestionIndex + 1}/{QUIZ_ITEMS.length}</span>
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#F8C800] h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ─── PHASE: COUNTDOWN RING & QUICK HINT (Screen 2) ─── */}
        {phase === 'countdown' ? (
          <div className="space-y-4 py-2">
            {/* Circular Gauge */}
            {renderCountdownGauge(countdownSeconds)}

            {/* Quick Hint Card */}
            <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-1">
              <div className="flex items-center space-x-1.5 text-xs font-black text-[#001028]">
                <span>💡</span>
                <span>Quick hint</span>
              </div>
              <p className="text-xs text-stone-600 font-medium leading-relaxed">
                {currentItem.quickHint}
              </p>
            </div>

            <p className="text-[11px] text-stone-400 font-medium text-center">
              You'll see the answer after the timer ends.
            </p>
          </div>
        ) : phase === 'explanation' ? (
          /* ─── PHASE: STEP-BY-STEP EXPLANATION & DIAGRAMS (Screens 3, 5, 7, 9) ─── */
          <div className="space-y-3 animate-fadeIn">
            {/* Yellow Solution Badge */}
            <div>
              <span className="inline-block bg-[#FEF08A] text-[#854D0E] font-extrabold text-[10.5px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                SOLUTION
              </span>
            </div>

            {/* Step-by-Step Math or Science Lines */}
            <div className="space-y-2 text-left">
              {currentItem.solutionSteps.map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#001028] leading-snug">
                    {step.title}
                  </h4>
                  {step.lines.length > 0 && (
                    <div className="p-2.5 bg-stone-50 rounded-xl font-mono text-xs text-stone-800 space-y-1 border border-stone-100">
                      {step.lines.map((l, li) => (
                        <div key={li}>{l}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Diagrams */}
            {currentItem.diagramType === 'physics-motion' && renderPhysicsMotionDiagram()}
            {currentItem.diagramType === 'periodic-trend' && renderPeriodicTrendDiagram()}
            {currentItem.diagramType === 'cell-membrane' && renderCellMembraneDiagram()}

            {/* Green Answer Reveal Banner */}
            <div className="bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0] font-black text-xs py-2 px-3 rounded-xl flex items-center space-x-2 shadow-xs">
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                ✓
              </span>
              <span>Correct answer: {currentItem.correctAnswerText}</span>
            </div>
          </div>
        ) : (
          /* ─── PHASE: QUESTION & OPTIONS (Screens 1, 4, 6, 8) ─── */
          <div className="space-y-3">
            {/* Subject Badge */}
            <div>
              <span className={`inline-block font-extrabold text-[10.5px] px-2.5 py-1 rounded-md uppercase tracking-wider ${currentItem.subjectBadgeColor}`}>
                {currentItem.subject}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-sm sm:text-base font-black text-[#001028] leading-snug text-left">
              {currentItem.questionText}
            </h3>

            {/* Optional Math Formula display */}
            {currentItem.mathFormula && (
              <div className="p-2 bg-stone-50 rounded-xl font-mono text-center font-bold text-sm text-[#001028] border border-stone-200">
                {currentItem.mathFormula}
              </div>
            )}

            {/* Options List A, B, C, D */}
            <div className="space-y-1.5 pt-1 text-left">
              {currentItem.options.map((opt) => {
                const isCorrect = opt.key === currentItem.correctKey;
                const isRevealed = phase === 'reveal';

                return (
                  <div
                    key={opt.key}
                    className={`p-2.5 sm:p-3 rounded-xl border flex items-center space-x-3 transition ${
                      isRevealed && isCorrect
                        ? 'bg-[#DCFCE7] border-emerald-500 font-bold text-emerald-900 ring-1 ring-emerald-500 shadow-xs'
                        : 'bg-white border-stone-200 text-stone-800'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                        isRevealed && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {isRevealed && isCorrect ? '✓' : opt.key}
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium">{opt.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Bottom 15s Timer Bar (Matching Mockup Screen 1, 4, 6, 8) */}
            <div className="pt-1">
              <div className="bg-[#F8C800] text-[#001028] font-black text-xs sm:text-sm py-2 rounded-xl flex items-center justify-center space-x-1.5 shadow-xs">
                <span>⏱️</span>
                <span>00:15</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ══════════════════════════════════════════════════════════════════════════
  // RENDER: LANDSCAPE 16:9 ADAPTATION (Bottom of media_1791398253590.png)
  // ══════════════════════════════════════════════════════════════════════════
  const renderLandscapeLayout = () => {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-4">
        {/* Landscape Frame */}
        <div className="bg-[#001028] p-3 sm:p-5 rounded-3xl border border-stone-700 shadow-2xl">
          {/* Top Bar inside 16:9 video */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white text-xs">
            <div className="flex items-center space-x-2">
              <BrandLogo size="xs" />
              <span className="font-black text-[#F8C800]">StudyPlug Quiz</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-stone-300">
              <span>Question {currentQuestionIndex + 1} of {QUIZ_ITEMS.length}</span>
              <span>•</span>
              <span className="font-mono text-[#F8C800]">⏱️ 00:{countdownSeconds < 10 ? `0${countdownSeconds}` : countdownSeconds}</span>
            </div>
          </div>

          {/* 16:9 Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 items-center min-h-[300px]">
            {/* Left Column: Question / Equations / Options */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 text-left space-y-3 h-full flex flex-col justify-between">
              <div>
                <span className={`inline-block font-bold text-[10px] px-2 py-0.5 rounded ${currentItem.subjectBadgeColor}`}>
                  {currentItem.subject}
                </span>
                <h3 className="text-sm sm:text-base font-black text-[#001028] mt-1.5 leading-snug">
                  {currentItem.questionText}
                </h3>
                {currentItem.mathFormula && (
                  <div className="p-2 bg-stone-50 rounded-xl font-mono text-center font-bold text-sm text-[#001028] my-2">
                    {currentItem.mathFormula}
                  </div>
                )}
              </div>

              {/* Options grid */}
              <div className="grid grid-cols-2 gap-2">
                {currentItem.options.map((opt) => (
                  <div
                    key={opt.key}
                    className={`p-2 rounded-xl border text-xs flex items-center space-x-2 ${
                      phase === 'explanation' && opt.key === currentItem.correctKey
                        ? 'bg-emerald-50 border-emerald-400 font-bold text-emerald-900'
                        : 'bg-white border-stone-200'
                    }`}
                  >
                    <span className="w-5 h-5 rounded bg-stone-100 flex items-center justify-center font-bold text-[10px]">
                      {opt.key}
                    </span>
                    <span className="truncate">{opt.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8C800] text-[#001028] font-bold text-xs py-1.5 rounded-lg text-center">
                ⏱️ 00:15
              </div>
            </div>

            {/* Right Column: Dynamic Diagrams or Countdown Gauge */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 h-full flex flex-col items-center justify-center border border-stone-200">
              {phase === 'countdown' ? (
                <div className="text-center space-y-2">
                  {renderCountdownGauge(countdownSeconds)}
                  <p className="text-xs font-bold text-stone-600 max-w-xs">{currentItem.quickHint}</p>
                </div>
              ) : currentItem.diagramType === 'physics-motion' ? (
                renderPhysicsMotionDiagram()
              ) : currentItem.diagramType === 'periodic-trend' ? (
                renderPeriodicTrendDiagram()
              ) : currentItem.diagramType === 'cell-membrane' ? (
                renderCellMembraneDiagram()
              ) : (
                <div className="text-center space-y-2 p-4">
                  <span className="text-3xl">📐</span>
                  <p className="text-xs font-bold text-stone-700">Detailed step-by-step breakdown</p>
                  <div className="bg-[#DCFCE7] text-[#166534] font-bold text-xs p-2 rounded-xl">
                    ✓ Correct answer: {currentItem.correctAnswerText}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 16:9 YouTube Outro End Card (Right box at bottom of media_1791398253590.png) */}
        <div className="bg-[#001028] p-5 rounded-3xl border border-stone-700 text-center space-y-3 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <BrandLogo size="sm" />
            <span className="text-white font-black text-lg">StudyPlug</span>
          </div>
          <p className="text-xs text-stone-300 font-medium">
            Learn • Practice • Excel
          </p>

          <button
            type="button"
            className="w-full py-2.5 rounded-xl bg-[#F8C800] text-[#001028] font-black text-xs shadow-xs"
          >
            Subscribe for more amazing quizzes
          </button>

          {/* Social Icons: YouTube, TikTok, Instagram */}
          <div className="flex items-center justify-center space-x-3 pt-1">
            <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
              ▶
            </span>
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
              ♪
            </span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold">
              📷
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#001028] text-[#001028] flex flex-col font-sans select-none pb-24">
      {/* ─── Hidden Audio Player for Authentic Teacher Voiceover ─── */}
      <audio
        ref={teacherAudioRef}
        src="/audio/redox_teacher_voice_full.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      {/* ─── Top Navy App Bar with Phone Status (9:41) & StudyPlug Quiz Header ─── */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-md">
        {/* Mock Phone Status Row */}
        <div className="px-4 pt-1.5 flex items-center justify-between text-[11px] text-white/70 font-medium">
          <span>9:41</span>
          <div className="flex items-center space-x-1.5">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="h-12 px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={goBack}
              className="p-1 text-white/80 hover:text-[#F8C800] transition"
              title="Back"
            >
              ←
            </button>
            <BrandLogo size="xs" />
            <h1 className="text-sm font-black text-white tracking-tight">
              StudyPlug <span className="text-[#F8C800]">Quiz</span>
            </h1>
          </div>

          {/* Right: Hamburger / Options */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="p-1 text-white hover:text-[#F8C800] transition text-base font-bold"
            >
              ☰
            </button>
          </div>
        </div>

        {/* ─── Video Control Ribbon (Aspect Ratio, Play/Pause, Speed, Sound, Teacher Voice) ─── */}
        <div className="bg-[#001830] px-3 py-2 border-t border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs text-white">
          {/* Aspect Ratio Switcher */}
          <div className="flex items-center space-x-1 bg-white/10 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setAspectRatio('9:16')}
              className={`px-2 py-1 rounded-lg font-bold transition ${
                aspectRatio === '9:16'
                  ? 'bg-[#F8C800] text-[#001028] shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              📱 9:16 Vertical
            </button>
            <button
              type="button"
              onClick={() => setAspectRatio('16:9')}
              className={`px-2 py-1 rounded-lg font-bold transition ${
                aspectRatio === '16:9'
                  ? 'bg-[#F8C800] text-[#001028] shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              🖥️ 16:9 Landscape
            </button>
          </div>

          {/* Video Player Controls */}
          <div className="flex items-center space-x-2 flex-wrap">
            {/* Play / Pause */}
            <button
              type="button"
              onClick={() => {
                setInspectorActiveScreen(null);
                setIsPlaying(!isPlaying);
              }}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-bold transition flex items-center space-x-1"
            >
              <span>{isPlaying ? '⏸️' : '▶️'}</span>
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            {/* Teacher Real Voice Toggle */}
            <button
              type="button"
              onClick={() => {
                setIsTeacherVoiceActive(!isTeacherVoiceActive);
              }}
              className={`px-2 py-1 rounded-lg font-bold transition flex items-center space-x-1 ${
                isTeacherVoiceActive
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white/10 text-stone-400 hover:text-white'
              }`}
              title="Toggle Authentic Teacher Voiceover"
            >
              <span>🎙️</span>
              <span>{isTeacherVoiceActive ? 'Voice: ON' : 'Voice: OFF'}</span>
            </button>

            {/* Speed Toggle */}
            <button
              type="button"
              onClick={() => {
                setPlaybackSpeed((prev) => (prev === 1.0 ? 1.5 : prev === 1.5 ? 2.0 : 1.0));
              }}
              className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-bold"
              title="Playback Speed"
            >
              {playbackSpeed}x
            </button>

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={() => setIsSoundOn(!isSoundOn)}
              className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-bold"
              title="Toggle Sound Effects"
            >
              {isSoundOn ? '🔊' : '🔇'}
            </button>

            {/* Restart Video */}
            <button
              type="button"
              onClick={handleRestart}
              className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-bold text-amber-300"
              title="Restart Video"
            >
              ↺ Restart
            </button>

            {/* Download Voice Sample */}
            <a
              href="/audio/teacher_voice_clone_sample.mp3"
              download="StudyPlug_Teacher_Voice_Sample.mp3"
              className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 font-bold flex items-center space-x-1 text-[11px]"
              title="Download clean 2-minute voice clone audio"
            >
              <span>📥</span>
              <span>Clone Sample</span>
            </a>
          </div>
        </div>

        {/* ─── 10 Clean Quiz Screens Inspector Strip (From Mockup) ─── */}
        <div className="bg-[#001028] px-3 py-1.5 overflow-x-auto no-scrollbar flex items-center space-x-1 border-t border-white/5 text-[11px]">
          <span className="text-stone-400 font-bold shrink-0 text-[10px] uppercase tracking-wider pr-1">
            10 Screens:
          </span>
          {[
            { num: 1, label: 'Q1 Physics' },
            { num: 2, label: 'Q1 Countdown' },
            { num: 3, label: 'Q1 Solution' },
            { num: 4, label: 'Q2 Maths' },
            { num: 5, label: 'Q2 Solution' },
            { num: 6, label: 'Q3 Chemistry' },
            { num: 7, label: 'Q3 Solution' },
            { num: 8, label: 'Q4 Biology' },
            { num: 9, label: 'Q4 Solution' },
            { num: 10, label: 'Final Score' }
          ].map((s) => (
            <button
              key={s.num}
              type="button"
              onClick={() => handleInspectScreen(s.num)}
              className={`px-2 py-0.5 rounded font-bold shrink-0 transition ${
                inspectorActiveScreen === s.num
                  ? 'bg-[#F8C800] text-[#001028]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {s.num}. {s.label}
            </button>
          ))}
        </div>
      </header>

      {/* ─── Main Body Container ─── */}
      <main className="flex-1 w-full bg-[#F8F9FA] rounded-t-[30px] px-3 sm:px-6 pt-5 pb-16 shadow-2xl">
        {aspectRatio === '9:16' ? (
          <div className="max-w-sm sm:max-w-md mx-auto">
            {renderQuizCard()}
          </div>
        ) : (
          renderLandscapeLayout()
        )}
      </main>

      {/* ─── Navigation Menu Drawer ─── */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default AiVideoGeneratorScreen;
