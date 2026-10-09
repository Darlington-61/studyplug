import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export interface RepeatedQuestion {
  id: string | number;
  questionNumber: number;
  question: string;
  options: { [key: string]: string };
  answer: string;
  solution: string;
  exam: string;
  years: string;
  repeatedCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface RepeatedTopicGroup {
  id: string;
  topicTitle: string;
  subject: string;
  examType: string;
  repeatedTimes: number;
  yearsTested: string;
  description: string;
  questions: RepeatedQuestion[];
}

export const REPEATED_TOPICS_DATA: RepeatedTopicGroup[] = [
  // ─── MATHEMATICS ───
  {
    id: 'math-logarithms',
    topicTitle: 'Number System, Indices & Logarithms',
    subject: 'Mathematics',
    examType: 'JAMB UTME',
    repeatedTimes: 5,
    yearsTested: '2018, 2021, 2023, 2025, 2026',
    description: 'High-frequency problems testing logarithmic laws, base conversions, and fractional exponent simplification.',
    questions: [
      {
        id: 'math-log-1',
        questionNumber: 1,
        question: 'Evaluate without using logarithm tables: log₁₀(25) + log₁₀(4) - log₁₀(10).',
        options: { A: '0', B: '1', C: '2', D: '10' },
        answer: 'B',
        solution: 'Using the fundamental laws of logarithms:\n1. log₁₀(25) + log₁₀(4) = log₁₀(25 × 4) = log₁₀(100).\n2. log₁₀(100) - log₁₀(10) = log₁₀(100 / 10) = log₁₀(10) = 1.\nTherefore, the correct answer is Option B.',
        exam: 'JAMB 2026',
        years: '2018, 2021, 2023, 2025',
        repeatedCount: 5,
        difficulty: 'Medium'
      },
      {
        id: 'math-log-2',
        questionNumber: 2,
        question: 'If 3^(2x - 1) = 81, determine the value of x.',
        options: { A: '2', B: '2.5', C: '3', D: '1.5' },
        answer: 'B',
        solution: 'Express both sides with base 3:\n3^(2x - 1) = 3^4.\nEquating exponents: 2x - 1 = 4 → 2x = 5 → x = 2.5.\nCorrect option is B.',
        exam: 'WAEC 2025',
        years: '2017, 2020, 2022, 2024',
        repeatedCount: 4,
        difficulty: 'Easy'
      },
      {
        id: 'math-log-3',
        questionNumber: 3,
        question: 'Simplify: (16)^(3/4) × (8)^(-2/3).',
        options: { A: '2', B: '4', C: '8', D: '1' },
        answer: 'A',
        solution: '16^(3/4) = (2^4)^(3/4) = 2^3 = 8.\n8^(-2/3) = (2^3)^(-2/3) = 2^(-2) = 1/4.\nProduct: 8 × (1/4) = 2.\nCorrect option is A.',
        exam: 'JAMB 2025',
        years: '2019, 2021, 2024',
        repeatedCount: 3,
        difficulty: 'Medium'
      },
      {
        id: 'math-log-4',
        questionNumber: 4,
        question: 'Given that log₂ x + log₂ (x - 2) = 3, find the positive value of x.',
        options: { A: '2', B: '4', C: '-2', D: '8' },
        answer: 'B',
        solution: 'Combine logs: log₂[x(x - 2)] = 3 → x(x - 2) = 2^3 = 8.\nx² - 2x - 8 = 0 → (x - 4)(x + 2) = 0.\nSince log argument must be positive, x = 4.\nCorrect option is B.',
        exam: 'NECO 2024',
        years: '2016, 2019, 2023',
        repeatedCount: 3,
        difficulty: 'Hard'
      }
    ]
  },
  {
    id: 'math-quadratics',
    topicTitle: 'Quadratic Equations & Theory of Roots',
    subject: 'Mathematics',
    examType: 'JAMB UTME',
    repeatedTimes: 4,
    yearsTested: '2017, 2019, 2022, 2024, 2026',
    description: 'Repeated questions requiring sum and product of roots (α, β), symmetric functions, and discriminant criteria.',
    questions: [
      {
        id: 'math-quad-1',
        questionNumber: 1,
        question: 'If α and β are the roots of 2x² - 5x + 3 = 0, evaluate (1/α + 1/β).',
        options: { A: '5/3', B: '3/5', C: '-5/3', D: '2/3' },
        answer: 'A',
        solution: 'For ax² + bx + c = 0:\nSum of roots α + β = -b/a = -(-5)/2 = 5/2.\nProduct of roots αβ = c/a = 3/2.\nThen 1/α + 1/β = (α + β) / (αβ) = (5/2) / (3/2) = 5/3.\nCorrect option is A.',
        exam: 'JAMB 2026',
        years: '2017, 2019, 2022, 2024',
        repeatedCount: 4,
        difficulty: 'Medium'
      },
      {
        id: 'math-quad-2',
        questionNumber: 2,
        question: 'Find the condition for which the quadratic equation kx² - 6x + 1 = 0 has equal real roots.',
        options: { A: 'k = 9', B: 'k = -9', C: 'k = 3', D: 'k = 36' },
        answer: 'A',
        solution: 'For equal real roots, discriminant Δ = b² - 4ac = 0.\n(-6)² - 4(k)(1) = 0 → 36 - 4k = 0 → 4k = 36 → k = 9.\nCorrect option is A.',
        exam: 'WAEC 2024',
        years: '2018, 2020, 2023',
        repeatedCount: 3,
        difficulty: 'Easy'
      },
      {
        id: 'math-quad-3',
        questionNumber: 3,
        question: 'Form the quadratic equation whose roots are -3 and 5.',
        options: { A: 'x² + 2x - 15 = 0', B: 'x² - 2x - 15 = 0', C: 'x² - 8x + 15 = 0', D: 'x² + 8x - 15 = 0' },
        answer: 'B',
        solution: 'Equation formula: x² - (sum)x + (product) = 0.\nSum = -3 + 5 = 2. Product = (-3)(5) = -15.\nx² - 2x - 15 = 0.\nCorrect option is B.',
        exam: 'NECO 2025',
        years: '2016, 2019, 2022',
        repeatedCount: 3,
        difficulty: 'Easy'
      }
    ]
  },

  // ─── ENGLISH LANGUAGE ───
  {
    id: 'eng-concord',
    topicTitle: 'Concord & Subject-Verb Agreement',
    subject: 'English Language',
    examType: 'JAMB UTME',
    repeatedTimes: 5,
    yearsTested: '2018, 2020, 2022, 2024, 2026',
    description: 'Examiner traps on proximity rules, neither/nor, parenthetical interrupters, and "many a" constructions.',
    questions: [
      {
        id: 'eng-concord-1',
        questionNumber: 1,
        question: 'Choose the correct option: "Neither the teacher nor the students ______ present at the seminar yesterday."',
        options: { A: 'was', B: 'were', C: 'is', D: 'are' },
        answer: 'B',
        solution: 'Rule of Proximity: When subjects are connected by "neither...nor", the verb must agree with the subject closest to it. Here, "students" is plural and past tense, so "were" is correct.\nCorrect option is B.',
        exam: 'JAMB 2026',
        years: '2018, 2021, 2023, 2025',
        repeatedCount: 5,
        difficulty: 'Medium'
      },
      {
        id: 'eng-concord-2',
        questionNumber: 2,
        question: 'Fill in the blank: "The principal, along with all the senior prefects, ______ arriving this afternoon."',
        options: { A: 'are', B: 'is', C: 'were', D: 'have been' },
        answer: 'B',
        solution: 'Parenthetical phrases introduced by "along with", "as well as", or "together with" do not make the subject plural. The true subject is "The principal" (singular), so the verb is "is".\nCorrect option is B.',
        exam: 'WAEC 2025',
        years: '2017, 2020, 2023',
        repeatedCount: 4,
        difficulty: 'Medium'
      },
      {
        id: 'eng-concord-3',
        questionNumber: 3,
        question: 'Select the standard sentence: "Many a student ______ the UTME examination with flying colours."',
        options: { A: 'has passed', B: 'have passed', C: 'are passing', D: 'were passed' },
        answer: 'A',
        solution: 'The structure "Many a + singular noun" is strictly followed by a singular verb: "has passed".\nCorrect option is A.',
        exam: 'JAMB 2025',
        years: '2019, 2022, 2024',
        repeatedCount: 4,
        difficulty: 'Hard'
      }
    ]
  },

  // ─── PHYSICS ───
  {
    id: 'phys-work-energy',
    topicTitle: 'Work, Energy & Conservation of Momentum',
    subject: 'Physics',
    examType: 'WAEC WASSCE',
    repeatedTimes: 5,
    yearsTested: '2016, 2019, 2021, 2023, 2025',
    description: 'Calculations on mechanical energy conservation, height-velocity conversions, and inelastic collisions.',
    questions: [
      {
        id: 'phys-work-1',
        questionNumber: 1,
        question: 'A body of mass 4kg is released from rest from a height of 20m above the ground. Calculate its kinetic energy when it has fallen through a distance of 15m. (Take g = 10 m/s²)',
        options: { A: '200 J', B: '600 J', C: '800 J', D: '400 J' },
        answer: 'B',
        solution: 'By Conservation of Mechanical Energy:\nKinetic energy gained = Potential energy lost = m × g × h_fallen.\nKE = 4 kg × 10 m/s² × 15 m = 600 J.\nHence, the correct option is B.',
        exam: 'WAEC 2025',
        years: '2016, 2019, 2021, 2023, 2025',
        repeatedCount: 5,
        difficulty: 'Hard'
      },
      {
        id: 'phys-work-2',
        questionNumber: 2,
        question: 'A bullet of mass 20g travelling at 200 m/s embeds itself in a stationary wooden block of mass 980g. Find the combined velocity immediately after collision.',
        options: { A: '4 m/s', B: '2 m/s', C: '5 m/s', D: '10 m/s' },
        answer: 'A',
        solution: 'Principle of Conservation of Linear Momentum:\nm₁u₁ + m₂u₂ = (m₁ + m₂)V.\nm₁ = 0.02 kg, u₁ = 200 m/s; m₂ = 0.98 kg, u₂ = 0.\n(0.02 × 200) + 0 = (0.02 + 0.98)V → 4 = 1.0V → V = 4 m/s.\nCorrect option is A.',
        exam: 'JAMB 2026',
        years: '2018, 2021, 2024',
        repeatedCount: 3,
        difficulty: 'Medium'
      },
      {
        id: 'phys-work-3',
        questionNumber: 3,
        question: 'Which of the following is a unit of electrical energy?',
        options: { A: 'Kilowatt', B: 'Kilowatt-hour', C: 'Joule per second', D: 'Volt-ampere' },
        answer: 'B',
        solution: 'Energy = Power × Time. Kilowatt (kW) is power, while Kilowatt-hour (kWh) is energy (1 kWh = 3.6 × 10⁶ J).\nCorrect option is B.',
        exam: 'NECO 2024',
        years: '2017, 2020, 2023',
        repeatedCount: 4,
        difficulty: 'Easy'
      }
    ]
  },

  // ─── CHEMISTRY ───
  {
    id: 'chem-stoichiometry',
    topicTitle: 'Stoichiometry & Gas Laws',
    subject: 'Chemistry',
    examType: 'JAMB UTME',
    repeatedTimes: 4,
    yearsTested: '2017, 2019, 2022, 2024, 2026',
    description: 'Volume-volume calculations at STP, molar masses, and Gay-Lussac reacting volume ratios.',
    questions: [
      {
        id: 'chem-st-1',
        questionNumber: 1,
        question: 'What volume of oxygen gas at S.T.P. is required to burn completely 50 cm³ of carbon (II) oxide?',
        options: { A: '25 cm³', B: '50 cm³', C: '100 cm³', D: '12.5 cm³' },
        answer: 'A',
        solution: 'Chemical equation: 2CO(g) + O₂(g) → 2CO₂(g).\nFrom Gay-Lussac\'s Law: 2 volumes of CO require 1 volume of O₂.\nTherefore, 50 cm³ of CO requires 50/2 = 25 cm³ of O₂ at S.T.P.\nCorrect option is A.',
        exam: 'JAMB 2026',
        years: '2017, 2020, 2023, 2025',
        repeatedCount: 4,
        difficulty: 'Medium'
      },
      {
        id: 'chem-st-2',
        questionNumber: 2,
        question: 'Calculate the percentage by mass of nitrogen in ammonium trioxonitrate (V), NH₄NO₃. (N=14, H=1, O=16)',
        options: { A: '28%', B: '35%', C: '17.5%', D: '42%' },
        answer: 'B',
        solution: 'Molar mass of NH₄NO₃ = (14×2) + (1×4) + (16×3) = 28 + 4 + 48 = 80 g/mol.\nTotal mass of N = 28 g.\n% N = (28 / 80) × 100 = 35%.\nCorrect option is B.',
        exam: 'WAEC 2025',
        years: '2018, 2021, 2024',
        repeatedCount: 3,
        difficulty: 'Medium'
      }
    ]
  },

  // ─── BIOLOGY ───
  {
    id: 'bio-genetics',
    topicTitle: 'Genetics, Mendel’s Laws & Heredity',
    subject: 'Biology',
    examType: 'JAMB UTME',
    repeatedTimes: 5,
    yearsTested: '2018, 2020, 2022, 2024, 2026',
    description: 'Monohybrid and dihybrid crosses, phenotypic vs genotypic ratios, and sex-linked inheritance (haemophilia, color blindness).',
    questions: [
      {
        id: 'bio-gen-1',
        questionNumber: 1,
        question: 'In a cross between two heterozygous tall pea plants (Tt × Tt), what proportion of the offspring will be homozygous dwarf (tt)?',
        options: { A: '1/4 (25%)', B: '1/2 (50%)', C: '3/4 (75%)', D: '0%' },
        answer: 'A',
        solution: 'Punnett square cross (Tt × Tt) gives genotypes: 1 TT : 2 Tt : 1 tt.\nHomozygous dwarf (tt) occurs in 1 out of 4 offspring (25%).\nCorrect option is A.',
        exam: 'JAMB 2026',
        years: '2018, 2021, 2023, 2025',
        repeatedCount: 5,
        difficulty: 'Easy'
      },
      {
        id: 'bio-gen-2',
        questionNumber: 2,
        question: 'Which of the following traits in humans is sex-linked and carried on the X chromosome?',
        options: { A: 'Sickle cell anaemia', B: 'Red-green colour blindness', C: 'Albinism', D: 'ABO Blood group' },
        answer: 'B',
        solution: 'Red-green colour blindness and haemophilia are classic sex-linked recessive traits carried on the non-homologous segment of the X chromosome.\nCorrect option is B.',
        exam: 'WAEC 2025',
        years: '2016, 2019, 2022, 2024',
        repeatedCount: 4,
        difficulty: 'Medium'
      }
    ]
  },

  // ─── ECONOMICS ───
  {
    id: 'econ-elasticity',
    topicTitle: 'Price Elasticity of Demand & Supply',
    subject: 'Economics',
    examType: 'JAMB UTME',
    repeatedTimes: 4,
    yearsTested: '2017, 2020, 2022, 2025',
    description: 'Numerical formula calculations for price elasticity, unitary elasticity, and total revenue curves.',
    questions: [
      {
        id: 'econ-el-1',
        questionNumber: 1,
        question: 'When the price of a commodity increases from ₦100 to ₦120, quantity demanded falls from 50 units to 40 units. Calculate the price elasticity of demand.',
        options: { A: '1.0 (Unitary)', B: '0.5', C: '1.5', D: '2.0' },
        answer: 'A',
        solution: '% change in quantity = ((40 - 50) / 50) × 100 = -20%.\n% change in price = ((120 - 100) / 100) × 100 = +20%.\nElasticity Ed = |-20% / 20%| = 1.0 (Unitary elasticity).\nCorrect option is A.',
        exam: 'JAMB 2025',
        years: '2017, 2020, 2023',
        repeatedCount: 4,
        difficulty: 'Medium'
      }
    ]
  },

  // ─── GOVERNMENT ───
  {
    id: 'govt-federalism',
    topicTitle: 'Nigerian Federalism & Constitutional History',
    subject: 'Government',
    examType: 'WAEC WASSCE',
    repeatedTimes: 4,
    yearsTested: '2018, 2020, 2023, 2025',
    description: 'Characteristics of Clifford (1922), Richards (1946), Macpherson (1951), and Lyttelton (1954) constitutions.',
    questions: [
      {
        id: 'govt-fed-1',
        questionNumber: 1,
        question: 'Which constitutional development introduced true federalism into Nigeria with residual powers given to the regions?',
        options: { A: 'Richards Constitution of 1946', B: 'Lyttelton Constitution of 1954', C: 'Macpherson Constitution of 1951', D: 'Independence Constitution of 1960' },
        answer: 'B',
        solution: 'The 1954 Oliver Lyttelton Constitution formally established a federal structure in Nigeria by clearly dividing powers into Exclusive, Concurrent, and Residual lists (assigned to regions).\nCorrect option is B.',
        exam: 'WAEC 2025',
        years: '2018, 2021, 2024',
        repeatedCount: 4,
        difficulty: 'Medium'
      }
    ]
  }
];

export const RepeatedQuestionsScreen: React.FC = () => {
  const { setActiveView, goBack, setLastTestResult, setTestHistory } = useApp();

  // Filters
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  // View States
  // 'topics-list' | 'topic-drill' | 'practice-session'
  const [viewState, setViewState] = useState<'topics-list' | 'topic-drill' | 'practice-session'>('topics-list');
  const [selectedTopic, setSelectedTopic] = useState<RepeatedTopicGroup | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Practice Session States
  const [userPracticeAnswers, setUserPracticeAnswers] = useState<Record<number, string>>({});
  const [practiceTimeRemaining, setPracticeTimeRemaining] = useState<number>(600); // 10 minutes

  // Filtered Topic List
  const filteredTopics = useMemo(() => {
    return REPEATED_TOPICS_DATA.filter((group) => {
      const matchSubj = selectedSubject === 'All' || group.subject.toLowerCase() === selectedSubject.toLowerCase();
      const matchExam = selectedExam === 'All' || group.examType.toLowerCase().includes(selectedExam.toLowerCase());
      const matchYear = selectedYear === 'All' || group.yearsTested.includes(selectedYear);
      const matchSearch =
        !search.trim() ||
        group.topicTitle.toLowerCase().includes(search.toLowerCase()) ||
        group.subject.toLowerCase().includes(search.toLowerCase()) ||
        group.questions.some((q) => q.question.toLowerCase().includes(search.toLowerCase()));

      return matchSubj && matchExam && matchYear && matchSearch;
    });
  }, [selectedSubject, selectedExam, selectedYear, search]);

  // Current Questions for selected topic
  const currentQuestions = useMemo(() => {
    return selectedTopic ? selectedTopic.questions : [];
  }, [selectedTopic]);

  // Handle Opening a Topic Drill
  const handleOpenTopic = (group: RepeatedTopicGroup) => {
    setSelectedTopic(group);
    setActiveQuestionIndex(0);
    setViewState('topic-drill');
  };

  // Handle Starting Practice Session on a Topic
  const handleStartPracticeTopic = (group: RepeatedTopicGroup) => {
    setSelectedTopic(group);
    setUserPracticeAnswers({});
    setActiveQuestionIndex(0);
    setPracticeTimeRemaining(group.questions.length * 90); // 1.5 mins per question
    setViewState('practice-session');
  };

  // Submit Practice Session -> Navigate to Results Screen
  const handleSubmitPractice = () => {
    if (!selectedTopic) return;

    const questions = selectedTopic.questions;
    let score = 0;
    questions.forEach((q) => {
      if (userPracticeAnswers[q.questionNumber] === q.answer) {
        score++;
      }
    });

    const total = questions.length;
    const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
    const timeSpent = Math.max(30, (total * 90) - practiceTimeRemaining);

    const result = {
      id: Date.now().toString(),
      subject: `${selectedTopic.subject} • ${selectedTopic.topicTitle}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      score,
      total,
      accuracy,
      timeSpentSeconds: timeSpent,
      userAnswers: { ...userPracticeAnswers },
      flaggedQuestions: [],
      compositeScore: accuracy
    };

    if (setLastTestResult) setLastTestResult(result);
    if (setTestHistory) setTestHistory((prev) => [result, ...prev]);

    // Navigate to Results Screen as requested
    setActiveView('results');
  };

  // Topic Navigation Arrows in Drill View
  const currentTopicIndex = useMemo(() => {
    if (!selectedTopic) return -1;
    return filteredTopics.findIndex((t) => t.id === selectedTopic.id);
  }, [selectedTopic, filteredTopics]);

  const handlePrevTopic = () => {
    if (currentTopicIndex > 0) {
      setSelectedTopic(filteredTopics[currentTopicIndex - 1]);
      setActiveQuestionIndex(0);
    }
  };

  const handleNextTopic = () => {
    if (currentTopicIndex >= 0 && currentTopicIndex < filteredTopics.length - 1) {
      setSelectedTopic(filteredTopics[currentTopicIndex + 1]);
      setActiveQuestionIndex(0);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] text-[#001028] flex flex-col font-sans select-none">
      
      {/* ─── 1. TOP STUDYPLUG DARK NAVY HEADER (#001028) ─── */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm shrink-0">
        <div className="h-14 px-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (viewState === 'practice-session') {
                if (window.confirm('Are you sure you want to exit practice mode? Your progress will be lost.')) {
                  setViewState('topic-drill');
                }
              } else if (viewState === 'topic-drill') {
                setViewState('topics-list');
              } else {
                goBack();
              }
            }}
            className="flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-[#F8C800] transition cursor-pointer"
          >
            <span className="text-base font-bold">←</span>
            <span>{viewState === 'topics-list' ? 'Back' : 'Topics'}</span>
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-base">🔁</span>
            <span className="font-bold text-xs sm:text-sm text-white truncate max-w-[200px]">
              {viewState === 'practice-session'
                ? 'Repeated Practice CBT'
                : viewState === 'topic-drill'
                ? selectedTopic?.topicTitle
                : 'Repeated Questions & Topics'}
            </span>
          </div>

          <BrandLogo size="sm" />
        </div>

        {/* Global Filters on Topics List Mode */}
        {viewState === 'topics-list' && (
          <div className="px-4 pb-3 space-y-2.5">
            {/* Search Input */}
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-[#607080] text-xs">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search repeated topics, questions, or subjects..."
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#001830] border border-[#001020] text-xs text-white placeholder-[#607080] focus:outline-none focus:border-[#F8C800] transition"
              />
            </div>

            {/* Subject Filter Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
              {['All', 'Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Government'].map((subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSelectedSubject(subj)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition shrink-0 cursor-pointer ${
                    selectedSubject === subj
                      ? 'bg-[#F8C800] text-[#001028] shadow-xs'
                      : 'bg-[#001830] text-[#607080] hover:text-white border border-[#001020]'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>

            {/* Exam & Year Filters Row */}
            <div className="flex items-center space-x-2 text-xs">
              <div className="flex items-center space-x-1">
                <span className="text-[#607080] text-[11px] font-medium">Exam:</span>
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="bg-[#001830] text-white border border-[#001020] rounded-lg px-2 py-1 text-[11px] font-bold focus:outline-none focus:border-[#F8C800]"
                >
                  <option value="All">All Exams</option>
                  <option value="JAMB">JAMB UTME</option>
                  <option value="WAEC">WAEC WASSCE</option>
                  <option value="NECO">NECO SSCE</option>
                </select>
              </div>

              <div className="flex items-center space-x-1">
                <span className="text-[#607080] text-[11px] font-medium">Year:</span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-[#001830] text-white border border-[#001020] rounded-lg px-2 py-1 text-[11px] font-bold focus:outline-none focus:border-[#F8C800]"
                >
                  <option value="All">All Years</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ─── 2. VIEW STATE A: TOPICS LIST (GROUPED BY TOPIC) ─── */}
      {viewState === 'topics-list' && (
        <main className="flex-1 max-w-md sm:max-w-xl lg:max-w-2xl w-full mx-auto px-4 pt-4 pb-28 space-y-3.5 text-left">
          
          {/* Header Stats */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-[#607080] uppercase tracking-wider">
              High-Frequency Tested Topics
            </span>
            <span className="text-[11px] font-bold text-[#001028] bg-white border border-[#E8E8E8] px-2.5 py-0.5 rounded-full shadow-2xs">
              {filteredTopics.length} Topics
            </span>
          </div>

          {filteredTopics.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-[22px] border border-[#E8E8E8] space-y-2">
              <span className="text-3xl">🔍</span>
              <h4 className="font-bold text-sm text-[#001028]">No Matching Repeated Topics Found</h4>
              <p className="text-xs text-[#607080]">Try adjusting your search terms or filter selection.</p>
              <button
                type="button"
                onClick={() => { setSelectedSubject('All'); setSelectedExam('All'); setSelectedYear('All'); setSearch(''); }}
                className="mt-2 px-4 py-2 rounded-full bg-[#001028] text-[#F8C800] text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredTopics.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-[22px] p-4 sm:p-5 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] hover:shadow-md transition-all space-y-3 group"
              >
                {/* Topic Header: Subject, Exam & Repetition Badge */}
                <div
                  onClick={() => handleOpenTopic(group)}
                  className="flex items-start justify-between cursor-pointer"
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10.5px] font-black text-[#001028] bg-[#F8F8F8] border border-[#E8E8E8] px-2 py-0.5 rounded-full uppercase">
                        {group.subject}
                      </span>
                      <span className="text-[10px] font-bold text-[#F8C800] bg-[#001028] px-2 py-0.5 rounded-full">
                        Repeated {group.repeatedTimes} Times
                      </span>
                    </div>

                    <h3 className="font-extrabold text-sm sm:text-base text-[#001028] group-hover:text-[#001830] transition leading-snug pt-1">
                      {group.topicTitle}
                    </h3>

                    <p className="text-[11px] text-[#607080] leading-snug line-clamp-2">
                      {group.description}
                    </p>
                  </div>

                  <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-lg shrink-0 pt-1">
                    →
                  </span>
                </div>

                {/* Years Tested Metadata */}
                <div className="pt-2 border-t border-[#F0F0F0] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="text-[11px] text-[#607080]">
                    Tested in: <strong className="text-[#001028]">{group.yearsTested}</strong>
                  </div>
                  <span className="text-[11px] font-semibold text-[#001028]">
                    {group.questions.length} Solved Questions
                  </span>
                </div>

                {/* Action Buttons: ⚡ Start Practice | 📖 View Questions */}
                <div className="pt-1 flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleStartPracticeTopic(group)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition cursor-pointer"
                  >
                    <span>⚡</span>
                    <span>Start Practice</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenTopic(group)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-white hover:bg-slate-50 border border-[#E8E8E8] text-[#001028] font-bold text-xs flex items-center justify-center space-x-1.5 transition cursor-pointer active:scale-95"
                  >
                    <span>📖</span>
                    <span>View Questions</span>
                    <span className="font-bold">→</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      )}

      {/* ─── 3. VIEW STATE B: TOPIC QUESTIONS DRILL VIEW (CLICKABLE TOPIC DETAILS) ─── */}
      {viewState === 'topic-drill' && selectedTopic && (
        <main className="flex-1 max-w-md sm:max-w-xl lg:max-w-2xl w-full mx-auto px-4 pt-4 pb-28 space-y-4 text-left">
          
          {/* Topic Detail Hero Card */}
          <div className="bg-[#001028] text-white rounded-[24px] p-5 border border-[#001830] shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#001830] text-[#F8C800] border border-[#001020]">
                {selectedTopic.subject} • {selectedTopic.examType}
              </span>
              <span className="text-[11px] font-black text-[#F8C800] bg-white/10 px-2.5 py-0.5 rounded-full">
                Repeated {selectedTopic.repeatedTimes}x
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-extrabold text-white leading-tight">
              {selectedTopic.topicTitle}
            </h2>

            <p className="text-xs text-[#607080] leading-relaxed">
              {selectedTopic.description}
            </p>

            <div className="pt-2 border-t border-[#001830] flex items-center justify-between">
              <span className="text-xs text-white/80">
                Years: <strong className="text-[#F8C800]">{selectedTopic.yearsTested}</strong>
              </span>

              {/* Start Practice on this topic */}
              <button
                type="button"
                onClick={() => handleStartPracticeTopic(selectedTopic)}
                className="px-4 py-2 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-xs shadow-md transition cursor-pointer flex items-center space-x-1.5"
              >
                <span>⚡</span>
                <span>Start Practice</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* List of Repeated Questions under this Topic */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[#607080] uppercase tracking-wider">
                Questions Under This Topic ({currentQuestions.length})
              </span>
              <span className="text-[11px] text-[#607080]">
                Click options to view solutions
              </span>
            </div>

            {currentQuestions.map((q, idx) => {
              const isSolutionOpen = revealedSolutions[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-[22px] p-4 sm:p-5 border border-[#E8E8E8] shadow-sm space-y-3 text-left"
                >
                  {/* Question Meta Header: Exam & Year */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-full bg-[#001028] text-[#F8C800] font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="font-extrabold text-[#001028]">
                        {q.exam}
                      </span>
                      <span className="text-[10.5px] text-[#607080]">
                        ({q.years})
                      </span>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F8F8F8] text-[#001028] border border-[#E8E8E8]">
                      {q.difficulty}
                    </span>
                  </div>

                  {/* Question Text */}
                  <p className="text-xs sm:text-sm font-semibold text-[#001028] leading-relaxed bg-[#F8F8F8] p-3.5 rounded-xl border border-[#E8E8E8]">
                    {q.question}
                  </p>

                  {/* Options */}
                  <div className="space-y-1.5">
                    {Object.entries(q.options).map(([key, val]) => (
                      <div
                        key={key}
                        className={`p-2.5 rounded-xl border text-xs flex items-center space-x-2.5 ${
                          key === q.answer && isSolutionOpen
                            ? 'bg-[#F8C800]/15 border-[#F8C800] text-[#001028] font-bold'
                            : 'bg-white border-[#E8E8E8] text-[#001028]'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            key === q.answer && isSolutionOpen
                              ? 'bg-[#F8C800] text-[#001028]'
                              : 'bg-[#F8F8F8] text-[#607080]'
                          }`}
                        >
                          {key}
                        </span>
                        <span className="flex-1">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Model Solution & Examiner Tips */}
                  <div className="pt-2 border-t border-[#E8E8E8]">
                    <button
                      type="button"
                      onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="text-xs font-bold text-[#001028] hover:text-[#F8C800] flex items-center space-x-1 cursor-pointer"
                    >
                      <span>💡</span>
                      <span>{isSolutionOpen ? 'Hide Model Solution' : 'View Verified Model Solution'}</span>
                      <span>{isSolutionOpen ? '▲' : '▼'}</span>
                    </button>

                    {isSolutionOpen && (
                      <div className="mt-2 p-3.5 rounded-xl bg-[#001028] text-white border border-[#001830] space-y-1.5 animate-fadeIn">
                        <div className="text-[10px] font-black uppercase text-[#F8C800] tracking-wider">
                          Correct Answer: Option {q.answer}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                          {q.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows (← Previous Topic | Next Topic →) */}
          <div className="pt-4 flex items-center justify-between border-t border-[#E8E8E8]">
            <button
              type="button"
              onClick={handlePrevTopic}
              disabled={currentTopicIndex <= 0}
              className="px-4 py-2.5 rounded-full bg-white border border-[#E8E8E8] text-[#001028] font-bold text-xs shadow-xs disabled:opacity-40 cursor-pointer flex items-center space-x-1.5"
            >
              <span>←</span>
              <span>Previous Topic</span>
            </button>

            <button
              type="button"
              onClick={() => setViewState('topics-list')}
              className="text-xs font-bold text-[#607080] hover:text-[#001028] cursor-pointer"
            >
              All Topics
            </button>

            <button
              type="button"
              onClick={handleNextTopic}
              disabled={currentTopicIndex >= filteredTopics.length - 1}
              className="px-4 py-2.5 rounded-full bg-[#001028] text-[#F8C800] font-bold text-xs shadow-xs disabled:opacity-40 cursor-pointer flex items-center space-x-1.5"
            >
              <span>Next Topic</span>
              <span>→</span>
            </button>
          </div>
        </main>
      )}

      {/* ─── 4. VIEW STATE C: INTERACTIVE TOPIC PRACTICE MODE ─── */}
      {viewState === 'practice-session' && selectedTopic && (
        <main className="flex-1 max-w-md sm:max-w-xl lg:max-w-2xl w-full mx-auto px-4 pt-4 pb-28 space-y-4 text-left">
          
          {/* Practice Session Progress & Timer Bar */}
          <div className="bg-white rounded-[20px] p-4 border border-[#E8E8E8] shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#607080]">
                {selectedTopic.subject}
              </span>
              <h4 className="font-bold text-xs text-[#001028] truncate max-w-[200px]">
                {selectedTopic.topicTitle}
              </h4>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-full bg-[#001028] text-[#F8C800] font-mono text-xs font-bold">
                ⏱️ {Math.floor(practiceTimeRemaining / 60)}:{(practiceTimeRemaining % 60).toString().padStart(2, '0')}
              </span>
              <span className="text-xs font-bold text-[#607080]">
                {activeQuestionIndex + 1} / {currentQuestions.length}
              </span>
            </div>
          </div>

          {/* Active Question Card */}
          {(() => {
            const currentQ = currentQuestions[activeQuestionIndex];
            if (!currentQ) return null;

            const selectedOpt = userPracticeAnswers[currentQ.questionNumber];

            return (
              <div className="bg-white rounded-[24px] p-5 sm:p-6 border border-[#E8E8E8] shadow-sm space-y-4 text-left animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-3">
                  <span className="text-xs font-extrabold text-[#001028]">
                    Question {activeQuestionIndex + 1} of {currentQuestions.length}
                  </span>
                  <span className="text-[10.5px] font-bold text-[#F8C800] bg-[#001028] px-2 py-0.5 rounded-full">
                    {currentQ.exam} • {currentQ.years}
                  </span>
                </div>

                {/* Question */}
                <p className="text-xs sm:text-sm font-semibold text-[#001028] leading-relaxed">
                  {currentQ.question}
                </p>

                {/* Options */}
                <div className="space-y-2 pt-1">
                  {Object.entries(currentQ.options).map(([key, val]) => {
                    const isSelected = selectedOpt === key;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setUserPracticeAnswers(prev => ({ ...prev, [currentQ.questionNumber]: key }));
                        }}
                        className={`w-full p-3.5 rounded-xl border text-xs text-left transition cursor-pointer flex items-center space-x-3 ${
                          isSelected
                            ? 'bg-[#001028] text-[#F8C800] border-[#001028] font-bold shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-[#E8E8E8] text-[#001028]'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            isSelected
                              ? 'bg-[#F8C800] text-[#001028]'
                              : 'bg-[#F8F8F8] text-[#607080] border border-[#E8E8E8]'
                          }`}
                        >
                          {key}
                        </span>
                        <span className="flex-1 leading-snug">{val}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Question Navigation Controls (← Previous Question | Next Question →) */}
                <div className="pt-3 border-t border-[#E8E8E8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={activeQuestionIndex <= 0}
                    className="px-4 py-2 rounded-full border border-[#E8E8E8] bg-white text-xs font-bold text-[#001028] disabled:opacity-40 cursor-pointer"
                  >
                    ← Previous
                  </button>

                  {/* Question Palette jump buttons */}
                  <div className="flex items-center space-x-1">
                    {currentQuestions.map((q, idx) => {
                      const isAnswered = !!userPracticeAnswers[q.questionNumber];
                      const isCurrent = idx === activeQuestionIndex;

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => setActiveQuestionIndex(idx)}
                          className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center cursor-pointer ${
                            isCurrent
                              ? 'bg-[#001028] text-[#F8C800] ring-2 ring-[#F8C800]'
                              : isAnswered
                              ? 'bg-[#F8C800] text-[#001028]'
                              : 'bg-[#F8F8F8] text-[#607080] border border-[#E8E8E8]'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {activeQuestionIndex < currentQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveQuestionIndex(prev => Math.min(currentQuestions.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-full bg-[#001028] text-[#F8C800] text-xs font-bold cursor-pointer"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmitPractice}
                      className="px-4 py-2 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] text-xs font-black shadow-sm cursor-pointer"
                    >
                      Submit Test ✓
                    </button>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Submit Test Button at bottom */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSubmitPractice}
              className="w-full py-3.5 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Submit &amp; View Results</span>
              <span>→</span>
            </button>
          </div>
        </main>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="courses" />
    </div>
  );
};

export default RepeatedQuestionsScreen;
