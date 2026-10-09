import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';
import { MenuDrawer } from '../common/MenuDrawer';
import { CourseSubjectExplorer } from '../brochure/CourseSubjectExplorer';
import { CourseEligibilityChecker } from '../brochure/CourseEligibilityChecker';
import { UniversityExplorer } from '../brochure/UniversityExplorer';

// ─── Available Screen Views (Matching 10-screen Reference Mockup media_1791398225257.png) ───
export type CourseScreenView =
  | 'select-exam'         // Screen 1: Select Exam (7 exams with badges)
  | 'exam-filters'        // Screen 2 & 3: [Exam] Selected – Filters (WAEC, GCE, NECO, etc.)
  | 'ielts-filters'       // Screen 4: IELTS Selected – Filters
  | 'objective-practice'  // Screen 5: JAMB – Question Screen (Objective)
  | 'theory-practice'     // Screen 6: WAEC – Theory Question
  | 'ai-marking'          // Screen 7: AI Marking & Feedback (Theory)
  | 'ai-tutor'            // Screen 8: AI Tutor
  | 'results-summary'     // Screen 9: Results Summary
  | 'select-subject'      // Screen 10 (Left): Select Subject
  | 'ielts-quick-access'  // Screen 10 (Right): Quick Access to IELTS
  | 'explorer';           // University Explorer brochure

export interface ExamDefinition {
  id: string;
  name: string;
  fullName: string;
  badgeText: string;
  badgeType: 'yellow' | 'blue';
}

export const OFFICIAL_EXAMS: ExamDefinition[] = [
  {
    id: 'JAMB',
    name: 'JAMB',
    fullName: 'Unified Tertiary Matriculation Examination',
    badgeText: 'Objective Only',
    badgeType: 'yellow'
  },
  {
    id: 'WAEC',
    name: 'WAEC',
    fullName: 'West African Examinations Council',
    badgeText: 'Theory • Practical • Objective',
    badgeType: 'blue'
  },
  {
    id: 'NECO',
    name: 'NECO',
    fullName: 'National Examinations Council',
    badgeText: 'Theory • Practical • Objective',
    badgeType: 'blue'
  },
  {
    id: 'GCE',
    name: 'GCE',
    fullName: 'General Certificate Examination',
    badgeText: 'Theory • Practical • Objective',
    badgeType: 'blue'
  },
  {
    id: 'NABTEB',
    name: 'NABTEB',
    fullName: 'National Business and Technical Examinations Board',
    badgeText: 'Theory • Practical • Objective',
    badgeType: 'blue'
  },
  {
    id: 'Post UTME',
    name: 'Post UTME',
    fullName: 'Tertiary Institution Screening',
    badgeText: 'Objective Only',
    badgeType: 'yellow'
  },
  {
    id: 'IELTS',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    badgeText: 'All (Listening • Reading • Writing • Speaking)',
    badgeType: 'blue'
  }
];

export interface SubjectItem {
  id: string;
  name: string;
  icon: string;
  topicsCount: number;
}

const SUBJECT_LIST: SubjectItem[] = [
  { id: 'math', name: 'Mathematics', icon: '📐', topicsCount: 7 },
  { id: 'english', name: 'English Language', icon: '📖', topicsCount: 6 },
  { id: 'biology', name: 'Biology', icon: '🌿', topicsCount: 8 },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', topicsCount: 7 },
  { id: 'physics', name: 'Physics', icon: '⚡', topicsCount: 7 },
  { id: 'economics', name: 'Economics', icon: '📊', topicsCount: 5 },
  { id: 'literature', name: 'Literature in English', icon: '📚', topicsCount: 4 },
  { id: 'government', name: 'Government', icon: '🏛️', topicsCount: 6 },
  { id: 'commerce', name: 'Commerce', icon: '🏢', topicsCount: 5 },
  { id: 'accounting', name: 'Financial Accounting', icon: '🪙', topicsCount: 5 }
];

// ─── Authentic Exam SVG Logos ───
export const ExamOfficialLogo: React.FC<{ examId: string; size?: 'sm' | 'md' | 'lg' }> = ({ examId, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';

  if (examId === 'JAMB') {
    return (
      <div className={`${sizeClasses} rounded-full bg-[#055b38] flex items-center justify-center p-1 border border-[#04442a] shadow-xs shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="18" fill="#047857" stroke="#F8C800" strokeWidth="2" />
          <path d="M20 7v24M14 15l6-7 6 7M13 27h14" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="13" r="2.5" fill="#F8C800" />
          <path d="M10 22c2 3 8 5 10 5s8-2 10-5" stroke="#F8C800" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (examId === 'WAEC') {
    return (
      <div className={`${sizeClasses} rounded-full bg-[#001433] flex items-center justify-center p-1 border border-[#F8C800]/60 shadow-xs shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="18" fill="#001838" stroke="#F8C800" strokeWidth="2" />
          {/* Sunburst golden spikes */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="20"
              y1="4"
              x2="20"
              y2="8"
              stroke="#F8C800"
              strokeWidth="1.8"
              strokeLinecap="round"
              transform={`rotate(${deg} 20 20)`}
            />
          ))}
          <circle cx="20" cy="20" r="10" fill="#002244" stroke="#F8C800" strokeWidth="1.5" />
          <path d="M20 12l2.5 5.5h6l-4.8 3.8 1.8 6-5.5-3.8-5.5 3.8 1.8-6-4.8-3.8h6z" fill="#F8C800" />
        </svg>
      </div>
    );
  }

  if (examId === 'NECO') {
    return (
      <div className={`${sizeClasses} rounded-full bg-[#059669] flex items-center justify-center p-1 border border-emerald-700 shadow-xs shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="18" fill="#059669" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="11" y="11" width="18" height="18" rx="3" fill="#FFFFFF" />
          <path d="M15 15l10 10M25 15l-10 10" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#F8C800" />
        </svg>
      </div>
    );
  }

  if (examId === 'GCE') {
    return (
      <div className={`${sizeClasses} rounded-lg bg-white border border-stone-200 flex items-center justify-center p-0.5 shadow-xs shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          {/* Quartered Maroon & Forest Green Shield */}
          <path d="M7 6h26v16c0 10-13 14-13 14S7 32 7 22V6z" fill="#881337" />
          <path d="M20 6h13v16c0 10-13 14-13 14V6z" fill="#065F46" />
          <path d="M7 6h26v16c0 10-13 14-13 14S7 32 7 22V6z" stroke="#F8C800" strokeWidth="2" fill="none" />
          <line x1="20" y1="6" x2="20" y2="35" stroke="#F8C800" strokeWidth="1.5" />
          <line x1="7" y1="18" x2="33" y2="18" stroke="#F8C800" strokeWidth="1.5" />
          <circle cx="20" cy="18" r="4" fill="#F8C800" />
        </svg>
      </div>
    );
  }

  if (examId === 'NABTEB') {
    return (
      <div className={`${sizeClasses} rounded-full bg-[#166534] flex items-center justify-center p-1 border border-amber-400 shadow-xs shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="18" fill="#15803d" stroke="#F8C800" strokeWidth="2" />
          <path d="M20 8v24M8 20h24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="6" fill="#F8C800" />
          <circle cx="20" cy="20" r="2.5" fill="#15803d" />
        </svg>
      </div>
    );
  }

  if (examId === 'Post UTME') {
    return (
      <div className={`${sizeClasses} rounded-full bg-[#001028] flex items-center justify-center p-1 border border-stone-600 shadow-xs shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="18" fill="#001830" stroke="#F8C800" strokeWidth="2" />
          {/* Mortarboard graduation cap */}
          <polygon points="20,11 31,17 20,23 9,17" fill="#F8C800" />
          <path d="M13 20v6c0 2 3.5 4 7 4s7-2 7-4v-6" fill="#FFFFFF" />
          <path d="M29 18v8" stroke="#F8C800" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="29" cy="27" r="1.5" fill="#F8C800" />
        </svg>
      </div>
    );
  }

  if (examId === 'IELTS') {
    return (
      <div className={`${sizeClasses} rounded-full bg-[#E11D48] flex items-center justify-center shadow-xs shrink-0 text-white font-black text-[11px] tracking-tight border border-red-600`}>
        IELTS
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center font-bold text-sm shrink-0`}>
      🎓
    </div>
  );
};

export const CoursesScreen: React.FC = () => {
  const {
    setActiveView,
    goBack,
    selectedSubject: appSelectedSubject,
    setSelectedSubject,
    setSelectedExam: setAppSelectedExam
  } = useApp();

  // Active Screen state (Defaults to Screen 1: Select Exam)
  const [currentScreen, setCurrentScreen] = useState<CourseScreenView>('select-exam');

  // Menu Drawer
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Selection states
  const [selectedExamId, setSelectedExamId] = useState<string>('WAEC');
  const [paperType, setPaperType] = useState<string>('Theory / Essay');
  const [selectedSubject, setSelectedSubjectLocal] = useState<string>('Biology');
  const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
  const [selectedYear, setSelectedYear] = useState<string>('All Years');
  const [questionCount, setQuestionCount] = useState<string>('10');

  // IELTS specific filters
  const [ieltsModule, setIeltsModule] = useState<'Academic' | 'General Training'>('Academic');
  const [ieltsSections, setIeltsSections] = useState<{ [key: string]: boolean }>({
    Listening: true,
    Reading: true,
    Writing: true,
    Speaking: true
  });
  const [ieltsQuestionCount, setIeltsQuestionCount] = useState<string>('10');

  // Screen 5 (Objective test state)
  const [objectiveAnswer, setObjectiveAnswer] = useState<string>('B');
  const [objectiveBookmarked, setObjectiveBookmarked] = useState<boolean>(false);

  // Screen 6 (Theory question state)
  const [theoryMode, setTheoryMode] = useState<'type' | 'upload'>('type');
  const [theoryAnswerText, setTheoryAnswerText] = useState<string>(
    '1. Carbohydrates\n2. Vitamins\n3. Fats and oils\n4. Mineral salts'
  );

  // Screen 7 (AI Marking Model Answer Modal)
  const [showModelAnswerModal, setShowModelAnswerModal] = useState<boolean>(false);

  // Screen 8 (AI Tutor state)
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Chinedu, you got 4 out of 4! 🎉 Would you like me to explain why each point earns a mark?',
      time: '10:42 AM'
    },
    {
      sender: 'user',
      text: 'Yes, please explain in simpler terms.',
      time: '10:43 AM'
    },
    {
      sender: 'ai',
      text: 'Sure, Chinedu! Here\'s a simple explanation:\n• Carbohydrates - give energy.\n• Vitamins - help your body function.\n• Fats and oils - provide long-term energy.\n• Mineral salts - keep your bones, teeth and body in good condition.',
      time: '10:44 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Screen 10 (Select Subject Exam Tab)
  const [subjectExamTab, setSubjectExamTab] = useState<'WAEC' | 'NECO' | 'GCE' | 'NABTEB'>('WAEC');

  // Screen 10 Right (IELTS Quick Access Module Tab)
  const [ieltsQuickTab, setIeltsQuickTab] = useState<'All' | 'Listening' | 'Reading' | 'Writing' | 'Speaking'>('All');

  // University Explorer Sub-tabs
  const [explorerTab, setExplorerTab] = useState<'catalog' | 'eligibility' | 'universities'>('catalog');

  // Find currently selected exam object
  const currentExam = useMemo(() => {
    return OFFICIAL_EXAMS.find((e) => e.id === selectedExamId) || OFFICIAL_EXAMS[1];
  }, [selectedExamId]);

  // Voice narration for AI Tutor using Web Speech API
  const handlePlayVoiceExplanation = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak =
      "Sure, Chinedu! Here's a simple explanation: Carbohydrates give energy. Vitamins help your body function properly. Fats and oils provide long-term energy. Mineral salts keep your bones, teeth and body in good condition.";
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userText = inputMessage.trim();
    setInputMessage('');
    const newMsg = {
      sender: 'user' as const,
      text: userText,
      time: 'Just now'
    };
    setChatMessages((prev) => [...prev, newMsg]);

    // Simulated instant teacher tutor response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Great question regarding "${userText}"! In WAEC and NECO marking schemes, precision is rewarded. Always list the scientific class first, followed by clear examples like starch for carbohydrates or calcium for mineral salts.`,
          time: 'Just now'
        }
      ]);
    }, 700);
  };

  // Nav back handler
  const handleBack = () => {
    if (currentScreen === 'exam-filters' || currentScreen === 'ielts-filters') {
      setCurrentScreen('select-exam');
    } else if (currentScreen === 'objective-practice') {
      setCurrentScreen(selectedExamId === 'JAMB' ? 'exam-filters' : 'select-exam');
    } else if (currentScreen === 'theory-practice') {
      setCurrentScreen('exam-filters');
    } else if (currentScreen === 'ai-marking') {
      setCurrentScreen('theory-practice');
    } else if (currentScreen === 'ai-tutor') {
      setCurrentScreen('ai-marking');
    } else if (currentScreen === 'results-summary') {
      setCurrentScreen('select-exam');
    } else if (currentScreen === 'select-subject') {
      setCurrentScreen('exam-filters');
    } else if (currentScreen === 'ielts-quick-access') {
      setCurrentScreen('ielts-filters');
    } else if (currentScreen === 'explorer') {
      setCurrentScreen('select-exam');
    } else {
      goBack();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#001028] text-[#001028] flex flex-col font-sans select-none pb-20 sm:pb-24">
      {/* ─── Top Navy Header Bar ─── */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm">
        <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
          {/* Left: Back Arrow or StudyPlug Logo */}
          <div className="flex items-center space-x-2">
            {currentScreen !== 'select-exam' ? (
              <button
                type="button"
                onClick={handleBack}
                className="p-1.5 text-white/90 hover:text-[#F8C800] active:scale-95 transition cursor-pointer"
                aria-label="Back"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            ) : (
              <div onClick={() => setCurrentScreen('select-exam')} className="cursor-pointer">
                <BrandLogo size="sm" />
              </div>
            )}

            {/* Screen Title in Header if not on Home/Select screen */}
            {currentScreen === 'exam-filters' && (
              <h2 className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-none">
                {selectedExamId} Selected – Filters
              </h2>
            )}
            {currentScreen === 'ielts-filters' && (
              <h2 className="text-sm font-bold text-white truncate">
                IELTS Selected – Filters
              </h2>
            )}
            {currentScreen === 'objective-practice' && (
              <h2 className="text-sm font-bold text-white truncate">
                {selectedExamId} – Question Screen (Objective)
              </h2>
            )}
            {currentScreen === 'theory-practice' && (
              <h2 className="text-sm font-bold text-white truncate">
                {selectedExamId} – Theory Question
              </h2>
            )}
            {currentScreen === 'ai-marking' && (
              <h2 className="text-sm font-bold text-white truncate">
                AI Marking &amp; Feedback (Theory)
              </h2>
            )}
            {currentScreen === 'ai-tutor' && (
              <div className="flex items-center space-x-1.5">
                <h2 className="text-sm font-bold text-white">AI Tutor</h2>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                  Online
                </span>
              </div>
            )}
            {currentScreen === 'results-summary' && (
              <h2 className="text-sm font-bold text-white truncate">
                Results Summary
              </h2>
            )}
            {currentScreen === 'select-subject' && (
              <h2 className="text-sm font-bold text-white truncate">
                Select Subject
              </h2>
            )}
            {currentScreen === 'ielts-quick-access' && (
              <h2 className="text-sm font-bold text-white truncate">
                Quick Access to IELTS
              </h2>
            )}
            {currentScreen === 'explorer' && (
              <h2 className="text-sm font-bold text-white truncate">
                University Explorer
              </h2>
            )}
          </div>

          {/* Right Action: Profile Avatar or Dots Menu */}
          <div className="flex items-center space-x-2">
            {currentScreen === 'exam-filters' || currentScreen === 'ielts-filters' ? (
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="p-1.5 text-white/90 hover:text-[#F8C800] transition cursor-pointer"
                aria-label="Options"
              >
                <span className="text-lg font-black leading-none">⋮</span>
              </button>
            ) : (
              <div
                onClick={() => setIsMenuOpen(true)}
                className="w-8 h-8 rounded-full bg-[#F8C800] text-[#001028] font-black text-xs flex items-center justify-center cursor-pointer border-2 border-white/60 shadow-xs hover:scale-105 transition"
                title="Profile & Menu"
              >
                CP
              </div>
            )}
          </div>
        </div>

        {/* ─── Fast Demo Navigation Strip (Quickly Jump Between Any of the 10 Mockup Screens) ─── */}
        <div className="bg-[#001830] px-3 py-1.5 overflow-x-auto no-scrollbar flex items-center space-x-1.5 border-t border-white/5 text-[11px]">
          <span className="text-stone-400 font-bold shrink-0 text-[10px] uppercase tracking-wider pr-1">
            Screens:
          </span>
          <button
            type="button"
            onClick={() => setCurrentScreen('select-exam')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'select-exam' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            1. Select Exam
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedExamId('WAEC');
              setCurrentScreen('exam-filters');
            }}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'exam-filters' && selectedExamId === 'WAEC'
                ? 'bg-[#F8C800] text-[#001028]'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            2. WAEC Filters
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedExamId('GCE');
              setCurrentScreen('exam-filters');
            }}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'exam-filters' && selectedExamId === 'GCE'
                ? 'bg-[#F8C800] text-[#001028]'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            3. GCE Filters
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('ielts-filters')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'ielts-filters' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            4. IELTS Filters
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedExamId('JAMB');
              setCurrentScreen('objective-practice');
            }}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'objective-practice' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            5. JAMB Objective
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedExamId('WAEC');
              setCurrentScreen('theory-practice');
            }}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'theory-practice' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            6. WAEC Theory
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('ai-marking')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'ai-marking' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            7. AI Marking
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('ai-tutor')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'ai-tutor' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            8. AI Tutor
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('results-summary')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'results-summary' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            9. Results
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('select-subject')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'select-subject' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            10a. Subjects
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('ielts-quick-access')}
            className={`px-2 py-0.5 rounded-md font-bold shrink-0 transition ${
              currentScreen === 'ielts-quick-access' ? 'bg-[#F8C800] text-[#001028]' : 'text-stone-300 hover:text-white'
            }`}
          >
            10b. IELTS Quick
          </button>
        </div>
      </header>

      {/* ─── Main White Body Sheet ─── */}
      <main className="flex-1 w-full bg-[#F8F9FA] rounded-t-[30px] px-3.5 sm:px-6 pt-5 pb-24 shadow-2xl">
        <div className="max-w-md mx-auto sm:max-w-lg lg:max-w-xl">

          {/* ══════════════════════════════════════════════════════
              SCREEN 1: SELECT EXAM (media_1791398225257.png Row 1 Col 1)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'select-exam' && (
            <div className="space-y-4 animate-page-enter">
              {/* Header Title & Subtitle */}
              <div className="space-y-0.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#001028] tracking-tight">
                  Select Exam
                </h1>
                <p className="text-xs sm:text-[13px] text-stone-500 font-medium">
                  Choose the exam you want to practise.
                </p>
              </div>

              {/* 7 Official Exams List */}
              <div className="space-y-2.5 pt-1">
                {OFFICIAL_EXAMS.map((exam) => (
                  <div
                    key={exam.id}
                    onClick={() => {
                      setSelectedExamId(exam.id);
                      if (setAppSelectedExam) {
                        setAppSelectedExam(exam.id as any);
                      }
                      if (exam.id === 'IELTS') {
                        setCurrentScreen('ielts-filters');
                      } else {
                        setCurrentScreen('exam-filters');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#E9ECEF] hover:border-amber-300 hover:shadow-md transition cursor-pointer flex items-center justify-between group active:scale-[0.99]"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      {/* Authentic Logo */}
                      <ExamOfficialLogo examId={exam.id} size="md" />

                      {/* Exam Title, Subtitle, and Badge */}
                      <div className="min-w-0">
                        <h3 className="font-black text-sm text-[#001028] leading-tight">
                          {exam.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-medium mt-0.5 truncate max-w-[200px] sm:max-w-xs">
                          {exam.fullName}
                        </p>
                        <div className="mt-1.5">
                          <span
                            className={`inline-block text-[9.5px] font-bold px-2 py-0.5 rounded ${
                              exam.badgeType === 'yellow'
                                ? 'bg-[#FEF08A] text-[#854D0E]'
                                : 'bg-[#E0F2FE] text-[#0284C7]'
                            }`}
                          >
                            {exam.badgeText}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Chevron */}
                    <span className="text-stone-300 group-hover:text-[#001028] text-lg font-bold pr-1 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                      &gt;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 2 & 3: [EXAM] SELECTED – FILTERS (Row 1 Col 2 & 3)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'exam-filters' && (
            <div className="space-y-4 animate-page-enter">
              {/* Selected Exam Highlight Card */}
              <div
                onClick={() => setCurrentScreen('select-exam')}
                className="bg-white rounded-2xl p-3.5 border border-stone-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-amber-400 transition"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="text-stone-400 font-bold text-sm shrink-0">&lt;</span>
                  <ExamOfficialLogo examId={selectedExamId} size="md" />
                  <div className="min-w-0">
                    <h3 className="font-black text-sm text-[#001028] leading-tight">
                      {selectedExamId}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-medium mt-0.5 truncate">
                      {currentExam.fullName}
                    </p>
                  </div>
                </div>
                <span className="text-stone-400 text-xs font-bold">Change</span>
              </div>

              {/* 1. Paper Type Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Paper Type</label>
                <div className="grid grid-cols-4 gap-1.5">
                  {['All', 'Theory / Essay', 'Practical', 'Objective'].map((type) => {
                    const isActive = paperType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPaperType(type)}
                        className={`py-2 px-1 text-[11px] font-bold rounded-xl transition text-center truncate ${
                          isActive
                            ? 'bg-[#001028] text-white shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Subject Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Subject</label>
                <div
                  onClick={() => setCurrentScreen('select-subject')}
                  className="bg-white rounded-2xl p-3 border border-stone-200 flex items-center justify-between cursor-pointer hover:border-blue-400 transition"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-lg">🌿</span>
                    <span className="text-xs font-black text-[#001028]">{selectedSubject}</span>
                  </div>
                  <span className="text-stone-400 text-xs font-bold">▼</span>
                </div>
              </div>

              {/* 3. Topic Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Topic</label>
                <div className="bg-white rounded-2xl p-3 border border-stone-200 flex items-center justify-between cursor-pointer hover:border-blue-400 transition">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-sm">🔍</span>
                    <span className="text-xs font-bold text-stone-800">{selectedTopic}</span>
                  </div>
                  <span className="text-stone-400 text-xs font-bold">▼</span>
                </div>
              </div>

              {/* 4. Year Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Year</label>
                <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
                  {['All Years', '2025', '2024', '2023', '2022'].map((yr) => {
                    const isActive = selectedYear === yr;
                    return (
                      <button
                        key={yr}
                        type="button"
                        onClick={() => setSelectedYear(yr)}
                        className={`py-1.5 px-3 rounded-xl text-xs font-bold transition shrink-0 ${
                          isActive
                            ? 'bg-[#0284C7] text-white shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {yr}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Number of Questions Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Number of Questions</label>
                <div className="flex items-center space-x-2">
                  {['5', '10', '15', '20', 'Custom'].map((cnt) => {
                    const isActive = questionCount === cnt;
                    return (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setQuestionCount(cnt)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition text-center ${
                          isActive
                            ? 'bg-[#F8C800] text-[#001028] shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {cnt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Big Gold Start Practice CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (paperType.includes('Theory')) {
                      setCurrentScreen('theory-practice');
                    } else {
                      setCurrentScreen('objective-practice');
                    }
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-sm tracking-wide shadow-md transition flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>Start Practice</span>
                  <span className="text-base font-bold">→</span>
                </button>
              </div>

              {/* Bottom Helper Notice Card */}
              <div className="p-3.5 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center space-x-3 mt-2">
                <ExamOfficialLogo examId={selectedExamId} size="sm" />
                <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
                  You've selected <strong className="text-blue-900">{selectedExamId} ({paperType.split('/')[0].trim()})</strong> for{' '}
                  <strong className="text-blue-900">{selectedSubject}</strong>. Questions will be fetched from past years.
                </p>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 4: IELTS SELECTED – FILTERS (Row 1 Col 4)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'ielts-filters' && (
            <div className="space-y-4 animate-page-enter">
              {/* Selected Exam Highlight Card */}
              <div
                onClick={() => setCurrentScreen('select-exam')}
                className="bg-white rounded-2xl p-3.5 border border-stone-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-red-400 transition"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="text-stone-400 font-bold text-sm shrink-0">&lt;</span>
                  <ExamOfficialLogo examId="IELTS" size="md" />
                  <div className="min-w-0">
                    <h3 className="font-black text-sm text-[#001028] leading-tight">IELTS</h3>
                    <p className="text-[11px] text-stone-500 font-medium mt-0.5 truncate">
                      International English Language Testing System
                    </p>
                  </div>
                </div>
                <span className="text-stone-400 text-xs font-bold">Change</span>
              </div>

              {/* 1. Module Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Module</label>
                <div className="flex space-x-2">
                  {(['Academic', 'General Training'] as const).map((mod) => {
                    const isActive = ieltsModule === mod;
                    return (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => setIeltsModule(mod)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition text-center ${
                          isActive
                            ? 'bg-[#0284C7] text-white shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {mod}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Section Checkboxes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Section</label>
                <div className="bg-white rounded-2xl border border-stone-200 divide-y divide-stone-100 overflow-hidden">
                  {[
                    { key: 'Listening', label: 'Listening', icon: '🎧' },
                    { key: 'Reading', label: 'Reading', icon: '📖' },
                    { key: 'Writing', label: 'Writing', icon: '✍️' },
                    { key: 'Speaking', label: 'Speaking', icon: '🗣️' }
                  ].map((sec) => (
                    <div
                      key={sec.key}
                      onClick={() =>
                        setIeltsSections((prev) => ({ ...prev, [sec.key]: !prev[sec.key] }))
                      }
                      className="p-3 flex items-center justify-between cursor-pointer hover:bg-stone-50 transition"
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className="text-base">{sec.icon}</span>
                        <span className="text-xs font-bold text-[#001028]">{sec.label}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center transition ${
                          ieltsSections[sec.key]
                            ? 'bg-[#0284C7] text-white'
                            : 'border border-stone-300 bg-white'
                        }`}
                      >
                        {ieltsSections[sec.key] && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Number of Questions */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700">Number of Questions</label>
                <div className="flex items-center space-x-2">
                  {['5', '10', '15', '20', 'Custom'].map((cnt) => {
                    const isActive = ieltsQuestionCount === cnt;
                    return (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setIeltsQuestionCount(cnt)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition text-center ${
                          isActive
                            ? 'bg-[#F8C800] text-[#001028] shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {cnt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Start Practice CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('objective-practice')}
                  className="w-full py-3.5 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-sm tracking-wide shadow-md transition flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>Start Practice</span>
                  <span className="text-base font-bold">→</span>
                </button>
              </div>

              {/* Helper Notice */}
              <div className="p-3.5 rounded-2xl bg-[#FEF2F2] border border-[#FEE2E2] flex items-center space-x-3 mt-2">
                <ExamOfficialLogo examId="IELTS" size="sm" />
                <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
                  You've selected <strong className="text-red-700">IELTS ({ieltsModule})</strong>. Questions will be fetched from official sources.
                </p>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 5: JAMB – QUESTION SCREEN (Row 1 Col 5)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'objective-practice' && (
            <div className="space-y-4 animate-page-enter">
              {/* Sub-bar: Subject pill, Objective pill, Timer badge, 3/20 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <span className="bg-[#E0F2FE] text-[#0284C7] font-bold text-[11px] px-2.5 py-1 rounded-lg">
                    📐 Mathematics
                  </span>
                  <span className="bg-stone-200/80 text-stone-700 font-bold text-[11px] px-2.5 py-1 rounded-lg">
                    🎯 Objective
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-[#001028] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg">
                    ⏱️ 00:45:32
                  </span>
                  <span className="text-xs font-black text-stone-600">3/20</span>
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs space-y-3">
                <h3 className="text-base sm:text-lg font-black text-[#001028] leading-snug">
                  Which of the following is the value of sin 30°?
                </h3>

                {/* Radio Options */}
                <div className="space-y-2 pt-2">
                  {[
                    { key: 'A', value: '0' },
                    { key: 'B', value: '1/2' },
                    { key: 'C', value: '√3/2' },
                    { key: 'D', value: '1' }
                  ].map((opt) => {
                    const isSelected = objectiveAnswer === opt.key;
                    return (
                      <div
                        key={opt.key}
                        onClick={() => setObjectiveAnswer(opt.key)}
                        className={`p-3.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition ${
                          isSelected
                            ? 'bg-[#F0F9FF] border-[#0284C7] ring-1 ring-[#0284C7]/40 shadow-xs'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition ${
                            isSelected
                              ? 'border-[#0284C7] bg-[#0284C7] text-white'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-xs font-bold text-stone-500 w-3">{opt.key}</span>
                        <span className={`text-sm ${isSelected ? 'font-black text-[#001028]' : 'font-medium text-stone-700'}`}>
                          {opt.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons: Bookmark & Report */}
              <div className="flex items-center space-x-2 pt-1">
                <button
                  type="button"
                  onClick={() => setObjectiveBookmarked(!objectiveBookmarked)}
                  className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-1.5 transition ${
                    objectiveBookmarked
                      ? 'bg-amber-50 border-amber-300 text-amber-800'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span>🔖</span>
                  <span>{objectiveBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => alert('Question flagged for review.')}
                  className="flex-1 py-2 px-3 rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 text-xs font-bold flex items-center justify-center space-x-1.5 transition"
                >
                  <span>🚩</span>
                  <span>Report</span>
                </button>
              </div>

              {/* Navigation Row: Previous & Next */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('exam-filters')}
                  className="py-2.5 px-4 text-xs font-bold text-stone-600 hover:text-[#001028] transition"
                >
                  &lt; Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentScreen('results-summary')}
                  className="py-2.5 px-7 rounded-xl bg-[#001028] hover:bg-[#001838] text-white font-bold text-xs tracking-wide shadow-sm transition flex items-center space-x-1.5 active:scale-95"
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 6: WAEC – THEORY QUESTION (Row 2 Col 1)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'theory-practice' && (
            <div className="space-y-4 animate-page-enter">
              {/* Sub-bar: WAEC badge, Timer, 2/6 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ExamOfficialLogo examId="WAEC" size="sm" />
                  <span className="font-black text-xs text-[#001028]">WAEC 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-[#001028] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg">
                    ⏱️ 01:12:16
                  </span>
                  <span className="text-xs font-black text-stone-600">2/6</span>
                </div>
              </div>

              {/* Subject & Theory Badges */}
              <div className="flex items-center space-x-2">
                <span className="bg-[#E0F2FE] text-[#0284C7] font-bold text-[11px] px-2.5 py-1 rounded-lg">
                  🌿 Biology
                </span>
                <span className="bg-[#F3E8FF] text-[#7E22CE] font-bold text-[11px] px-2.5 py-1 rounded-lg">
                  ⭐ Theory / Essay
                </span>
              </div>

              {/* Theory Question Multi-part Content */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs space-y-3">
                <div className="space-y-2 text-stone-900 text-sm sm:text-[15px] leading-relaxed">
                  <p className="font-bold">A. What is a balanced diet?</p>
                  <p className="font-bold">B. (i) Name four classes of food other than proteins.</p>
                  <p className="font-medium text-stone-600 pl-4">
                    (ii) Give one example of a food substance for each class.
                  </p>
                </div>

                {/* Input Mode Selector: Type Answer vs Upload Photo */}
                <div className="flex space-x-2 pt-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setTheoryMode('type')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
                      theoryMode === 'type'
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700'
                    }`}
                  >
                    <span>✍️</span>
                    <span>Type Answer</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheoryMode('upload')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
                      theoryMode === 'upload'
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>📷</span>
                    <span>Upload Photo</span>
                  </button>
                </div>

                {/* Textarea for typing */}
                {theoryMode === 'type' ? (
                  <textarea
                    rows={4}
                    value={theoryAnswerText}
                    onChange={(e) => setTheoryAnswerText(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-[#001028] placeholder-stone-400 focus:outline-none focus:border-[#0284C7] leading-relaxed font-sans"
                  />
                ) : (
                  <div className="p-6 rounded-xl border-2 border-dashed border-stone-300 text-center space-y-2 bg-stone-50">
                    <span className="text-3xl block">📸</span>
                    <p className="text-xs font-bold text-stone-700">Snap or Upload Handwritten Sheet</p>
                    <p className="text-[11px] text-stone-500">StudyPlug AI will transcribe and mark your handwriting accurately.</p>
                  </div>
                )}
              </div>

              {/* Action Buttons: Save & Exit vs Submit Answer */}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('exam-filters')}
                  className="flex-1 py-3 rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 text-xs font-bold transition text-center"
                >
                  Save &amp; Exit
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentScreen('ai-marking')}
                  className="flex-1 py-3 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-xs tracking-wide shadow-xs transition text-center active:scale-95"
                >
                  Submit Answer
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 7: AI MARKING & FEEDBACK (Row 2 Col 2)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'ai-marking' && (
            <div className="space-y-4 animate-page-enter">
              {/* Green Success Banner */}
              <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-2xl p-3 flex items-center space-x-2 text-emerald-800">
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-xs font-bold">Excellent! Your answer has been marked.</span>
              </div>

              {/* Score & Accuracy Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-stone-500 block">Score</span>
                  <div className="text-3xl font-black text-[#001028] mt-0.5">4/4</div>
                </div>

                {/* Circular Accuracy Ring */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3.5"
                      strokeDasharray="100, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[12px] font-black text-emerald-600">100%</span>
                    <span className="text-[8px] font-bold text-stone-400 uppercase">Accuracy</span>
                  </div>
                </div>
              </div>

              {/* Your Answer Breakdown */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-2">
                <h4 className="text-xs font-black text-[#001028] uppercase tracking-wide">
                  Your Answer
                </h4>
                <div className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl leading-relaxed">
                  <p>1. Carbohydrates</p>
                  <p>2. Vitamins</p>
                  <p>3. Fats and oils</p>
                  <p>4. Mineral salts</p>
                </div>
              </div>

              {/* Marking Points Breakdown */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-2.5">
                <h4 className="text-xs font-black text-[#001028] uppercase tracking-wide">
                  Marking Points
                </h4>
                <div className="space-y-2">
                  {[
                    'Carbohydrates',
                    'Vitamins',
                    'Fats and oils',
                    'Mineral salts'
                  ].map((pt) => (
                    <div key={pt} className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[10px]">
                          ✓
                        </span>
                        <span className="font-bold text-stone-800">{pt}</span>
                      </div>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        (1 mark)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: View Model Answer vs Ask AI Tutor */}
              <div className="flex items-center space-x-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowModelAnswerModal(true)}
                  className="flex-1 py-3 rounded-xl border border-blue-600 text-blue-700 hover:bg-blue-50 text-xs font-bold transition text-center"
                >
                  View Model Answer
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentScreen('ai-tutor')}
                  className="flex-1 py-3 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-xs tracking-wide shadow-xs transition text-center flex items-center justify-center space-x-1.5 active:scale-95"
                >
                  <span>🤖</span>
                  <span>Ask AI Tutor</span>
                </button>
              </div>

              {/* Model Answer Modal */}
              {showModelAnswerModal && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-sm w-full p-5 space-y-3 shadow-2xl animate-scaleIn">
                    <div className="flex items-center justify-between border-b pb-2">
                      <h3 className="font-black text-sm text-[#001028]">Official WAEC Marking Scheme</h3>
                      <button
                        type="button"
                        onClick={() => setShowModelAnswerModal(false)}
                        className="text-stone-400 hover:text-stone-800 text-lg font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-xs text-stone-700 space-y-2 leading-relaxed max-h-64 overflow-y-auto">
                      <p><strong>A. Definition:</strong> A balanced diet contains all the necessary food substances in the correct proportions.</p>
                      <p><strong>B. Classes &amp; Examples:</strong></p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Carbohydrates (Rice, Yam, Cassava) — 1 mark</li>
                        <li>Vitamins (Fruits, Vegetables) — 1 mark</li>
                        <li>Fats &amp; Oils (Palm oil, Groundnut oil) — 1 mark</li>
                        <li>Mineral Salts (Table salt, Milk, Fish) — 1 mark</li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowModelAnswerModal(false)}
                      className="w-full py-2.5 rounded-xl bg-[#001028] text-white text-xs font-bold"
                    >
                      Close Marking Scheme
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 8: AI TUTOR CONVERSATION (Row 2 Col 3)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'ai-tutor' && (
            <div className="space-y-4 animate-page-enter">
              {/* Messages Container */}
              <div className="space-y-3 min-h-[320px]">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-xs ${
                        msg.sender === 'user'
                          ? 'bg-[#0284C7] text-white rounded-br-none'
                          : 'bg-white border border-stone-200 text-stone-800 rounded-bl-none'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-stone-400 font-medium mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Spoken Narration Audio Pill */}
              <div className="flex justify-center pt-1">
                <button
                  type="button"
                  onClick={handlePlayVoiceExplanation}
                  className={`py-2 px-4 rounded-full text-xs font-bold flex items-center space-x-2 transition shadow-xs ${
                    isSpeaking
                      ? 'bg-red-600 text-white animate-pulse'
                      : 'bg-[#0284C7] text-white hover:bg-blue-700'
                  }`}
                >
                  <span>{isSpeaking ? '⏹️' : '🎙️'}</span>
                  <span>{isSpeaking ? 'Stop Audio' : 'Tap to listen'}</span>
                </button>
              </div>

              {/* Chat Input Bar */}
              <div className="pt-2 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handlePlayVoiceExplanation}
                  className="p-2.5 rounded-xl bg-stone-100 text-stone-600 hover:text-stone-900 transition"
                  title="Voice input"
                >
                  🎙️
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 py-2.5 px-3.5 rounded-xl bg-white border border-stone-200 text-xs text-[#001028] placeholder-stone-400 focus:outline-none focus:border-[#0284C7]"
                />
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="p-2.5 rounded-xl bg-[#0284C7] text-white hover:bg-blue-700 transition"
                >
                  →
                </button>
              </div>

              {/* Advance to Results Summary */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('results-summary')}
                  className="w-full py-3 rounded-xl bg-[#F8C800] text-[#001028] font-black text-xs tracking-wide shadow-xs"
                >
                  View Full Practice Results →
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 9: RESULTS SUMMARY (Row 2 Col 4)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'results-summary' && (
            <div className="space-y-4 animate-page-enter">
              {/* Trophy Celebration Card */}
              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs text-center space-y-1.5">
                <div className="text-4xl animate-bounce">🏆</div>
                <h2 className="text-xl font-black text-[#001028]">Practice Complete!</h2>
                <p className="text-xs text-stone-500 font-medium">Here's how you performed</p>

                {/* Score & Circular Ring */}
                <div className="pt-4 flex items-center justify-around">
                  <div className="text-left">
                    <span className="text-xs font-bold text-stone-400 block">Score</span>
                    <span className="text-3xl font-black text-[#001028]">4/4</span>
                  </div>

                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3.5"
                        strokeDasharray="100, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black text-emerald-600">100%</span>
                      <span className="text-[7.5px] font-bold text-emerald-700">Excellent!</span>
                    </div>
                  </div>
                </div>

                {/* Performance Stats: Correct, Incorrect, Time Spent */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-stone-100">
                  <div className="p-2 bg-emerald-50 rounded-xl">
                    <span className="text-[10px] text-emerald-700 font-bold block">✓ Correct</span>
                    <span className="text-sm font-black text-emerald-800">4</span>
                  </div>
                  <div className="p-2 bg-rose-50 rounded-xl">
                    <span className="text-[10px] text-rose-700 font-bold block">✗ Incorrect</span>
                    <span className="text-sm font-black text-rose-800">0</span>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <span className="text-[10px] text-blue-700 font-bold block">⏱️ Time Spent</span>
                    <span className="text-sm font-black text-blue-800">12 min</span>
                  </div>
                </div>
              </div>

              {/* Topic Performance Bar */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-[#001028]">Topic Performance</span>
                  <span className="font-bold text-emerald-600">100%</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-stone-600 font-medium">
                    <span>Biology - Nutrition</span>
                    <span>4 / 4 Marks</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-full" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('select-exam')}
                  className="w-full py-3.5 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-xs tracking-wide shadow-md transition"
                >
                  Practice More Questions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView('notes')}
                  className="w-full py-3 rounded-xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 text-xs font-bold transition"
                >
                  Back to Notes
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 10 (LEFT): SELECT SUBJECT (Row 2 Col 5)
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'select-subject' && (
            <div className="space-y-4 animate-page-enter">
              {/* Header Title */}
              <div className="space-y-0.5">
                <h2 className="text-xl font-black text-[#001028]">Select Subject</h2>
                <p className="text-xs text-stone-500">Choose a subject to filter practice questions.</p>
              </div>

              {/* Exam Selector Pills: WAEC, NECO, GCE, NABTEB */}
              <div className="flex space-x-1.5 p-1 bg-stone-100 rounded-xl">
                {(['WAEC', 'NECO', 'GCE', 'NABTEB'] as const).map((tab) => {
                  const isActive = subjectExamTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setSubjectExamTab(tab)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition text-center ${
                        isActive
                          ? 'bg-[#F8C800] text-[#001028] shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Subject Cards List */}
              <div className="space-y-2 pt-1">
                {SUBJECT_LIST.map((subj) => {
                  const isHighlighted = subj.name === 'Biology';
                  return (
                    <div
                      key={subj.id}
                      onClick={() => {
                        setSelectedSubjectLocal(subj.name);
                        setSelectedSubject(subj.name);
                        setCurrentScreen('exam-filters');
                      }}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                        isHighlighted
                          ? 'bg-[#ECFDF5] border-emerald-300 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-lg shrink-0">
                          {subj.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-xs text-[#001028] leading-tight">
                            {subj.name}
                          </h4>
                          <span className="text-[11px] text-stone-500 font-medium">
                            {subj.topicsCount} topics
                          </span>
                        </div>
                      </div>

                      <span className="text-stone-300 text-sm font-bold">&gt;</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              SCREEN 10 (RIGHT): QUICK ACCESS TO IELTS
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'ielts-quick-access' && (
            <div className="space-y-4 animate-page-enter">
              {/* Top IELTS Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-stone-200 shadow-xs flex items-center space-x-3">
                <ExamOfficialLogo examId="IELTS" size="md" />
                <div>
                  <h3 className="font-black text-sm text-[#001028]">IELTS</h3>
                  <p className="text-[11px] text-stone-500 font-medium">
                    International English Language Testing System
                  </p>
                </div>
              </div>

              {/* Module Filter Pills */}
              <div className="flex space-x-1 overflow-x-auto no-scrollbar py-1">
                {(['All', 'Listening', 'Reading', 'Writing', 'Speaking'] as const).map((tab) => {
                  const isActive = ieltsQuickTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setIeltsQuickTab(tab)}
                      className={`py-1.5 px-3 rounded-xl text-xs font-bold transition shrink-0 ${
                        isActive
                          ? 'bg-[#0284C7] text-white shadow-xs'
                          : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Practice Sets List */}
              <div className="space-y-2 pt-1">
                {[
                  { name: 'Listening Practice', icon: '🎧', sets: '10 sets • 40 questions' },
                  { name: 'Reading Practice', icon: '📖', sets: '10 sets • 40 questions' },
                  { name: 'Writing Practice', icon: '✍️', sets: '10 sets • 40 questions' },
                  { name: 'Speaking Practice', icon: '🗣️', sets: '10 sets • 40 questions' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentScreen('objective-practice')}
                    className="p-3.5 bg-white rounded-2xl border border-stone-200 hover:border-amber-300 shadow-xs flex items-center justify-between cursor-pointer transition"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-xs text-[#001028] leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-stone-500 font-medium">
                          {item.sets}
                        </span>
                      </div>
                    </div>
                    <span className="text-stone-300 text-sm font-bold">&gt;</span>
                  </div>
                ))}
              </div>

              {/* Start Practice CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentScreen('objective-practice')}
                  className="w-full py-3.5 rounded-xl bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-xs tracking-wide shadow-md transition"
                >
                  Start Practice →
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              UNIVERSITY EXPLORER BROCHURE
          ══════════════════════════════════════════════════════ */}
          {currentScreen === 'explorer' && (
            <div className="space-y-4 animate-page-enter">
              <div className="flex items-center space-x-2 border-b border-stone-200 pb-2 text-xs">
                <button
                  type="button"
                  onClick={() => setExplorerTab('catalog')}
                  className={`pb-1.5 font-bold transition cursor-pointer ${
                    explorerTab === 'catalog'
                      ? 'text-[#001028] border-b-2 border-[#001028]'
                      : 'text-[#607080] hover:text-[#001028]'
                  }`}
                >
                  Course Directory
                </button>
                <span className="text-stone-300">|</span>
                <button
                  type="button"
                  onClick={() => setExplorerTab('eligibility')}
                  className={`pb-1.5 font-bold transition cursor-pointer ${
                    explorerTab === 'eligibility'
                      ? 'text-[#001028] border-b-2 border-[#001028]'
                      : 'text-[#607080] hover:text-[#001028]'
                  }`}
                >
                  Eligibility &amp; Waivers
                </button>
                <span className="text-stone-300">|</span>
                <button
                  type="button"
                  onClick={() => setExplorerTab('universities')}
                  className={`pb-1.5 font-bold transition cursor-pointer ${
                    explorerTab === 'universities'
                      ? 'text-[#001028] border-b-2 border-[#001028]'
                      : 'text-[#607080] hover:text-[#001028]'
                  }`}
                >
                  University Explorer
                </button>
              </div>

              {explorerTab === 'catalog' && (
                <CourseSubjectExplorer
                  onSelectCourseSubjects={(subjs) => {
                    if (subjs && subjs.length > 0) {
                      setSelectedSubjectLocal(subjs[0]);
                      setCurrentScreen('exam-filters');
                    }
                  }}
                />
              )}
              {explorerTab === 'eligibility' && (
                <CourseEligibilityChecker
                  onSelectCourse={(c) => {
                    if (c && c.jambSubjects && c.jambSubjects.length > 0) {
                      setSelectedSubjectLocal(c.jambSubjects[0]);
                      setCurrentScreen('exam-filters');
                    }
                  }}
                />
              )}
              {explorerTab === 'universities' && (
                <UniversityExplorer
                  onSelectCourse={(c) => {
                    if (c && c.jambSubjects && c.jambSubjects.length > 0) {
                      setSelectedSubjectLocal(c.jambSubjects[0]);
                      setCurrentScreen('exam-filters');
                    }
                  }}
                />
              )}
            </div>
          )}

        </div>
      </main>

      {/* ─── Navigation Menu Drawer ─── */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* ─── Fixed Bottom Navigation Bar (Home, Courses, Notes, Challenges, Profile) ─── */}
      <BottomNavigation activeTab="courses" />
    </div>
  );
};

export default CoursesScreen;
