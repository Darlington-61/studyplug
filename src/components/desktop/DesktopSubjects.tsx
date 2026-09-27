import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { getTopicsForSubject, getYearsForSubject } from '../../data/allQuestionsHub';
import {
  EnglishSubjectIcon,
  MathSubjectIcon,
  PhysicsSubjectIcon,
  ChemistrySubjectIcon,
  BiologySubjectIcon,
  GovernmentSubjectIcon,
  LiteratureSubjectIcon,
  EconomicsSubjectIcon
} from '../Icons';

interface DesktopSubjectsProps {
  onSelectMathematics: () => void;
  onBackToDashboard: () => void;
}

interface SubjectCardData {
  id: string;
  name: string;
  category: string;
  questionsCount: number;
  completedQuestions: number;
  topicsCount: number;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
  topics: string[];
}

export const DesktopSubjects: React.FC<DesktopSubjectsProps> = ({
  onSelectMathematics,
  onBackToDashboard
}) => {
  const { startTestForSubject, startMultiSubjectTest, setActiveView, availableYears, setSelectedSubject, setSelectedSubjects, openDareToDare } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPhysicsYear, setSelectedPhysicsYear] = useState<number | 'all'>(2024);
  const [selectedEnglishYear, setSelectedEnglishYear] = useState<number | 'all'>(1980);
  const [isMultiMode, setIsMultiMode] = useState<boolean>(false);
  const [selectedSubjectNames, setSelectedSubjectNames] = useState<string[]>(['Mathematics', 'Use of English']);
  const [desktopExamYear, setDesktopExamYear] = useState<number | 'all'>('all');
  const [desktopExamTopic, setDesktopExamTopic] = useState<string>('all');

  const categories = ['All', 'JAMB', 'WAEC (Paper 1 CBT)', 'WAEC (Paper 2 Theory)', 'WAEC (Paper 3 Practicals)', 'WAEC GCE', 'NECO', 'NECO GCE', 'BECE', 'POST UTME'];

  const allSubjects: (SubjectCardData & { examType: 'JAMB' | 'WAEC' | 'WAEC (Theory)' | 'WAEC (Practical)' | 'WAEC GCE' | 'NECO' | 'NECO GCE' | 'BECE' | 'POST UTME' })[] = [
    // --- JAMB UTME (43,962 Questions Live) ---
    {
      id: 'jamb-math',
      name: 'Mathematics',
      category: 'JAMB UTME (4,676 Questions)',
      examType: 'JAMB',
      questionsCount: 4676,
      completedQuestions: 28,
      topicsCount: 22,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Algebra & Functions', 'Calculus & Limits', 'Trigonometry', 'Statistics']
    },
    {
      id: 'jamb-english',
      name: 'Use of English',
      category: 'JAMB UTME (3,144 Questions)',
      examType: 'JAMB',
      questionsCount: 3144,
      completedQuestions: 15,
      topicsCount: 20,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Reading Comprehension', 'Sentence Completion', 'Lexis & Structure', 'Antonyms & Synonyms']
    },
    {
      id: 'jamb-physics',
      name: 'Physics',
      category: 'JAMB UTME (4,007 Questions)',
      examType: 'JAMB',
      questionsCount: 4007,
      completedQuestions: 35,
      topicsCount: 30,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Mechanics & Motion', 'Waves & Optics', 'Electricity & Circuits', 'Atomic & Nuclear']
    },
    {
      id: 'jamb-chemistry',
      name: 'Chemistry',
      category: 'JAMB UTME (4,990 Questions)',
      examType: 'JAMB',
      questionsCount: 4990,
      completedQuestions: 95,
      topicsCount: 13,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Organic Chemistry', 'Stoichiometry', 'Atomic Structure', 'Equilibrium']
    },
    {
      id: 'jamb-biology',
      name: 'Biology',
      category: 'JAMB UTME (5,128 Questions)',
      examType: 'JAMB',
      questionsCount: 5128,
      completedQuestions: 120,
      topicsCount: 11,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Cell Biology', 'Genetics & Evolution', 'Ecology', 'Physiology']
    },
    {
      id: 'jamb-economics',
      name: 'Economics',
      category: 'JAMB UTME (5,062 Questions)',
      examType: 'JAMB',
      questionsCount: 5062,
      completedQuestions: 50,
      topicsCount: 9,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Microeconomics', 'Macroeconomics', 'Public Finance', 'Trade Theory']
    },
    {
      id: 'jamb-government',
      name: 'Government',
      category: 'JAMB UTME (4,846 Questions)',
      examType: 'JAMB',
      questionsCount: 4846,
      completedQuestions: 60,
      topicsCount: 10,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Political Systems', 'Constitutional Law', 'International Relations', 'Local Govt']
    },
    {
      id: 'jamb-literature',
      name: 'Literature in English',
      category: 'JAMB UTME (4,778 Questions)',
      examType: 'JAMB',
      questionsCount: 4778,
      completedQuestions: 45,
      topicsCount: 8,
      icon: <LiteratureSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FCE7F3]',
      accentColor: '#DB2777',
      topics: ['African Prose', 'Drama & Shakespeare', 'Poetic Forms', 'Literary Terms']
    },

    // --- BECE / JUNIOR WAEC (8,118 Questions Live) ---
    {
      id: 'bece-math',
      name: 'BECE Mathematics',
      category: 'BECE Standard (1,452 Questions • 1990–2025)',
      examType: 'BECE',
      questionsCount: 1452,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Numbers & Numeration', 'Algebraic Expressions', 'Plane Geometry', 'Basic Statistics']
    },
    {
      id: 'bece-english',
      name: 'BECE English Language',
      category: 'BECE Standard (1,410 Questions • 1990–2025)',
      examType: 'BECE',
      questionsCount: 1410,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Reading Comprehension', 'Grammar & Lexis', 'Punctuation & Spelling', 'Oral Forms']
    },
    {
      id: 'bece-science',
      name: 'BECE Basic Science',
      category: 'BECE Standard (1,478 Questions • 1990–2025)',
      examType: 'BECE',
      questionsCount: 1478,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Living & Non-Living Things', 'Energy & Forces', 'Matter & Changes', 'Environmental Health']
    },
    {
      id: 'bece-social',
      name: 'BECE Social Studies',
      category: 'BECE Standard (1,480 Questions • 1990–2025)',
      examType: 'BECE',
      questionsCount: 1480,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Culture & Social Values', 'Civic Rights & Governance', 'Physical Environment', 'National Economy']
    },
    {
      id: 'bece-computer',
      name: 'BECE Computer Studies',
      category: 'BECE ICT & Computing (640 Questions)',
      examType: 'BECE',
      questionsCount: 640,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0E7FF]',
      accentColor: '#4F46E5',
      topics: ['Computer Hardware & OS', 'Word Processing & Data', 'Internet & Digital Safety', 'Basic Programming']
    },
    {
      id: 'bece-tech',
      name: 'BECE Basic Technology',
      category: 'BECE Pre-Technical (347 Questions)',
      examType: 'BECE',
      questionsCount: 347,
      completedQuestions: 0,
      topicsCount: 10,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Workshop Safety', 'Materials (Wood & Metals)', 'Technical Drawing', 'Simple Mechanisms']
    },
    {
      id: 'bece-civic',
      name: 'BECE Civic & Moral Education',
      category: 'BECE Standard (1,080 Questions)',
      examType: 'BECE',
      questionsCount: 1080,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#F3E8FF]',
      accentColor: '#9333EA',
      topics: ['Values & Citizenship', 'Democracy & Rule of Law', 'National Consciousness', 'Human Rights']
    },
    {
      id: 'bece-home-ec',
      name: 'BECE Home Economics',
      category: 'BECE Standard (231 Questions)',
      examType: 'BECE',
      questionsCount: 231,
      completedQuestions: 0,
      topicsCount: 8,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FCE7F3]',
      accentColor: '#DB2777',
      topics: ['Food & Nutrition', 'Clothing & Textiles', 'Home Management', 'Child Care']
    },

    // --- POST UTME (Top Universities & Core Screening) ---
    {
      id: 'putme-unilag',
      name: 'UNILAG Post-UTME',
      category: 'University of Lagos Screening Test',
      examType: 'POST UTME',
      questionsCount: 120,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Mathematics & Quantitative', 'Use of English', 'General Paper', 'Current Affairs']
    },
    {
      id: 'putme-uniben',
      name: 'UNIBEN Post-UTME',
      category: 'University of Benin Screening Exam',
      examType: 'POST UTME',
      questionsCount: 120,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['General Aptitude', 'Sciences & Mathematics', 'Social Sciences', 'Verbal Reasoning']
    },
    {
      id: 'putme-oau',
      name: 'OAU Post-UTME',
      category: 'Obafemi Awolowo University Screening',
      examType: 'POST UTME',
      questionsCount: 120,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Physics & Chemistry', 'Biology & Mathematics', 'English Comprehension', 'Aptitude Test']
    },
    {
      id: 'putme-ui',
      name: 'UI Post-UTME',
      category: 'University of Ibadan Screening',
      examType: 'POST UTME',
      questionsCount: 120,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Core Sciences', 'Mathematics', 'Use of English', 'Analytical Reasoning']
    },
    {
      id: 'putme-unn',
      name: 'UNN Post-UTME',
      category: 'University of Nigeria Nsukka Screening',
      examType: 'POST UTME',
      questionsCount: 120,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Physics & Chemistry', 'Biology & Mathematics', 'General Knowledge', 'English Language']
    },
    {
      id: 'putme-general',
      name: 'Post-UTME General Paper',
      category: 'Aptitude & Current Affairs Standard',
      examType: 'POST UTME',
      questionsCount: 150,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Nigerian Politics & History', 'Quantitative Reasoning', 'Verbal Logic', 'Global Affairs']
    },
    {
      id: 'putme-math',
      name: 'Post-UTME Mathematics',
      category: 'Advanced Screening Mathematics',
      examType: 'POST UTME',
      questionsCount: 150,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Advanced Algebra', 'Calculus & Derivatives', 'Coordinate Geometry', 'Trigonometry']
    },
    {
      id: 'putme-physics',
      name: 'Post-UTME Physics',
      category: 'Advanced Screening Physics',
      examType: 'POST UTME',
      questionsCount: 150,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Mechanics & Motion', 'Optics & Waves', 'Electromagnetism', 'Modern Physics']
    },
    {
      id: 'putme-chem',
      name: 'Post-UTME Chemistry',
      category: 'Advanced Screening Chemistry',
      examType: 'POST UTME',
      questionsCount: 150,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Organic Mechanisms', 'Equilibrium & Kinetics', 'Stoichiometry & Gas Laws', 'Electrochemistry']
    },
    {
      id: 'putme-bio',
      name: 'Post-UTME Biology',
      category: 'Advanced Screening Biology',
      examType: 'POST UTME',
      questionsCount: 150,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Human Physiology & Organs', 'Genetics & Inheritance', 'Cell Metabolism', 'Ecology & Biosphere']
    },

    // --- WAEC Paper 1: Objectives / CBT Mock (19,008 Questions Live) ---
    {
      id: 'waec-math',
      name: 'WAEC Mathematics',
      category: 'WAEC Paper 1 (Objectives / CBT • 1,288 Qs)',
      examType: 'WAEC',
      questionsCount: 1288,
      completedQuestions: 0,
      topicsCount: 22,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['General Mathematics', 'Algebra & Graphs', 'Trigonometry & Vectors', 'Statistics & Probability']
    },
    {
      id: 'waec-english',
      name: 'WAEC English Language',
      category: 'WAEC Paper 1 (Objectives / CBT • 2,588 Qs)',
      examType: 'WAEC',
      questionsCount: 2588,
      completedQuestions: 0,
      topicsCount: 20,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Lexis & Structure', 'Comprehension Passages', 'Oral English Test', 'Grammar Skills']
    },
    {
      id: 'waec-biology',
      name: 'WAEC Biology',
      category: 'WAEC Paper 1 (Objectives / CBT • 2,099 Qs)',
      examType: 'WAEC',
      questionsCount: 2099,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Cell & Tissue Organisation', 'Plant & Animal Nutrition', 'Ecology & Energy Flow', 'Genetics & Heredity']
    },
    {
      id: 'waec-physics',
      name: 'WAEC Physics',
      category: 'WAEC Paper 1 (Objectives / CBT • 1,174 Qs)',
      examType: 'WAEC',
      questionsCount: 1174,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Mechanics & Properties of Matter', 'Heat Energy & Gas Laws', 'Waves & Sound', 'Electricity & Magnetism']
    },
    {
      id: 'waec-chemistry',
      name: 'WAEC Chemistry',
      category: 'WAEC Paper 1 (Objectives / CBT • 1,551 Qs)',
      examType: 'WAEC',
      questionsCount: 1551,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Atomic Structure & Bonding', 'Acids, Bases & Salts', 'Organic Chemistry', 'Metals & Non-metals']
    },
    {
      id: 'waec-economics',
      name: 'WAEC Economics',
      category: 'WAEC Paper 1 (Objectives / CBT • 675 Qs)',
      examType: 'WAEC',
      questionsCount: 675,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Microeconomics', 'Macroeconomics', 'Financial Institutions', 'International Trade']
    },
    {
      id: 'waec-government',
      name: 'WAEC Government',
      category: 'WAEC Paper 1 (Objectives / CBT • 895 Qs)',
      examType: 'WAEC',
      questionsCount: 895,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Political Concepts & Systems', 'Constitutional Development', 'Public Administration', 'Foreign Policy']
    },
    {
      id: 'waec-literature',
      name: 'WAEC Literature in English',
      category: 'WAEC Paper 1 (Objectives / CBT • 3,482 Qs)',
      examType: 'WAEC',
      questionsCount: 3482,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <LiteratureSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FCE7F3]',
      accentColor: '#DB2777',
      topics: ['African Drama & Poetry', 'Non-African Prose', 'Literary Devices', 'Shakespearean Text']
    },
    {
      id: 'waec-commerce',
      name: 'WAEC Commerce',
      category: 'WAEC Paper 1 (Objectives / CBT • 935 Qs)',
      examType: 'WAEC',
      questionsCount: 935,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Trade & Aids to Trade', 'Business Organisation', 'Money & Banking', 'Marketing & Advertising']
    },
    {
      id: 'waec-accounts',
      name: 'WAEC Principles of Accounts',
      category: 'WAEC Paper 1 (Objectives / CBT • 2,153 Qs)',
      examType: 'WAEC',
      questionsCount: 2153,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Double Entry Bookkeeping', 'Final Accounts & Balance Sheet', 'Bank Reconciliation', 'Partnership Accounts']
    },

    // --- WAEC Paper 2: Theory & Essay (Step-by-Step Marking Schemes) ---
    {
      id: 'waec-theory-physics',
      name: 'WAEC Physics (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 219 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 219,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Full Derivations & Calculations', 'Mechanics Theory', 'Waves & Optics Theory', 'Electricity Calculations']
    },
    {
      id: 'waec-theory-chemistry',
      name: 'WAEC Chemistry (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 359 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 359,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Chemical Equations & Stoichiometry', 'Organic Mechanisms', 'Equilibrium & Energetics', 'Industrial Chemistry']
    },
    {
      id: 'waec-theory-biology',
      name: 'WAEC Biology (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 248 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 248,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Labelled Biological Diagrams', 'Genetics Crosses', 'Physiology & Nutrition', 'Ecology Systems']
    },
    {
      id: 'waec-theory-math',
      name: 'WAEC Mathematics (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 321 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 321,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Circle Theorems & Geometry', 'Trigonometry & Bearings', 'Matrices & Quadratic', 'Statistics & Frequency Curves']
    },
    {
      id: 'waec-theory-english',
      name: 'WAEC English Language (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 219 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 219,
      completedQuestions: 0,
      topicsCount: 10,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Continuous Writing (Essays & Letters)', 'Summary Passage Analysis', 'Comprehension Analysis']
    },
    {
      id: 'waec-theory-lit',
      name: 'WAEC Literature in English (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 207 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 207,
      completedQuestions: 0,
      topicsCount: 10,
      icon: <LiteratureSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FCE7F3]',
      accentColor: '#DB2777',
      topics: ['Character Analysis & Themes', 'Poetic Devices & Tone', 'Contextual Essay Questions']
    },
    {
      id: 'waec-theory-gov',
      name: 'WAEC Government (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 183 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 183,
      completedQuestions: 0,
      topicsCount: 10,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Constitutional Structures', 'Electoral Systems', 'Pre-colonial Administration']
    },
    {
      id: 'waec-theory-comm',
      name: 'WAEC Commerce (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 142 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 142,
      completedQuestions: 0,
      topicsCount: 10,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Business Finance & Capital', 'Wholesale & Retail Structure', 'Consumer Protection']
    },
    {
      id: 'waec-theory-econ',
      name: 'WAEC Economics (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 132 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 132,
      completedQuestions: 0,
      topicsCount: 10,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Elasticity of Demand & Supply', 'National Income Calculations', 'Production Cost Curves']
    },
    {
      id: 'waec-theory-acc',
      name: 'WAEC Principles of Accounts (Theory)',
      category: 'WAEC Paper 2 (Theory & Essay • 51 Qs)',
      examType: 'WAEC (Theory)',
      questionsCount: 51,
      completedQuestions: 0,
      topicsCount: 8,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Preparation of Financial Statements', 'Partnership Accounts', 'Departmental & Branch Accounts']
    },

    // --- WAEC Paper 3: Laboratory Practicals & Specimen Guides ---
    {
      id: 'waec-prac-physics',
      name: 'WAEC Physics (Practical)',
      category: 'WAEC Paper 3 (Laboratory Practicals • 8 Qs)',
      examType: 'WAEC (Practical)',
      questionsCount: 8,
      completedQuestions: 0,
      topicsCount: 5,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Mechanics (Pendulum & Hooke\'s Law)', 'Light & Ray Box Experiments', 'Electricity (Potentiometer & Resistance)']
    },
    {
      id: 'waec-prac-chem',
      name: 'WAEC Chemistry (Practical)',
      category: 'WAEC Paper 3 (Laboratory Practicals • 15 Qs)',
      examType: 'WAEC (Practical)',
      questionsCount: 15,
      completedQuestions: 0,
      topicsCount: 6,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Volumetric Titration Analysis', 'Qualitative Inorganic Salt Analysis', 'Confirmatory Ion Tests']
    },
    {
      id: 'waec-prac-bio',
      name: 'WAEC Biology (Practical)',
      category: 'WAEC Paper 3 (Laboratory Practicals • 59 Qs)',
      examType: 'WAEC (Practical)',
      questionsCount: 59,
      completedQuestions: 0,
      topicsCount: 8,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Specimen Identification & Adaptation', 'Microscope Slide Examinations', 'Food Tests & Biochemical Reactions']
    },
    {
      id: 'waec-prac-eng',
      name: 'WAEC English Language (Practical)',
      category: 'WAEC Paper 3 (Oral English Test • 2 Qs)',
      examType: 'WAEC (Practical)',
      questionsCount: 2,
      completedQuestions: 0,
      topicsCount: 4,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Vowel & Consonant Sounds', 'Word Stress & Intonation Patterns', 'Rhyme & Emphatic Stress']
    },
    {
      id: 'waec-prac-lit',
      name: 'WAEC Literature in English (Practical)',
      category: 'WAEC Paper 3 (Practicals • 3 Qs)',
      examType: 'WAEC (Practical)',
      questionsCount: 3,
      completedQuestions: 0,
      topicsCount: 4,
      icon: <LiteratureSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FCE7F3]',
      accentColor: '#DB2777',
      topics: ['Unseen Poetry Analysis', 'Unseen Prose Analysis', 'Literary Appreciation']
    },

    // --- NECO (35,675 Questions Live) ---
    {
      id: 'neco-biology',
      name: 'NECO Biology',
      category: 'NECO Standard (6,318 Questions)',
      examType: 'NECO',
      questionsCount: 6318,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Ecological Management', 'Reproduction in Plants & Animals', 'Microorganisms in Action', 'Genetics']
    },
    {
      id: 'neco-physics',
      name: 'NECO Physics',
      category: 'NECO Standard (6,118 Questions)',
      examType: 'NECO',
      questionsCount: 6118,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Scalars, Vectors & Motion', 'Pressure & Fluid Mechanics', 'Thermal Physics & Heat', 'Electric Circuits']
    },
    {
      id: 'neco-government',
      name: 'NECO Government',
      category: 'NECO Standard (5,611 Questions)',
      examType: 'NECO',
      questionsCount: 5611,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Concepts of the State & Power', 'Constitutions & Colonial Admin', 'Nigerian Federalism', 'Foreign Policy']
    },
    {
      id: 'neco-economics',
      name: 'NECO Economics',
      category: 'NECO Standard (5,249 Questions)',
      examType: 'NECO',
      questionsCount: 5249,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Demand, Supply & Price Theory', 'Production & Cost Analysis', 'National Income & Inflation', 'Public Finance']
    },
    {
      id: 'neco-english',
      name: 'NECO English Language',
      category: 'NECO Standard (5,103 Questions)',
      examType: 'NECO',
      questionsCount: 5103,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Grammar & Concord', 'Vocabulary Development', 'Summary & Comprehension', 'Oral English']
    },
    {
      id: 'neco-chemistry',
      name: 'NECO Chemistry',
      category: 'NECO Standard (3,696 Questions)',
      examType: 'NECO',
      questionsCount: 3696,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Chemical Equations & Stoichiometry', 'Thermodynamics & Kinetics', 'Electrochemistry', 'Hydrocarbons']
    },
    {
      id: 'neco-math',
      name: 'NECO Mathematics',
      category: 'NECO Standard (3,580 Questions)',
      examType: 'NECO',
      questionsCount: 3580,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Number Bases & Modular Arith', 'Quadratic Equations & Graphs', 'Trigonometric Ratios', 'Probability']
    },

    // --- WAEC GCE (Nov/Dec Private Candidates - Live Bank) ---
    {
      id: 'waec-gce-math',
      name: 'WAEC GCE Mathematics',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 22,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['General Mathematics', 'Algebra & Graphs', 'Trigonometry & Vectors', 'Statistics & Probability']
    },
    {
      id: 'waec-gce-english',
      name: 'WAEC GCE English Language',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 20,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Lexis & Structure', 'Comprehension Passages', 'Oral English Test', 'Essay Writing']
    },
    {
      id: 'waec-gce-physics',
      name: 'WAEC GCE Physics',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Mechanics & Properties of Matter', 'Heat Energy & Gas Laws', 'Waves & Sound', 'Electricity & Magnetism']
    },
    {
      id: 'waec-gce-chemistry',
      name: 'WAEC GCE Chemistry',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Atomic Structure & Bonding', 'Acids, Bases & Salts', 'Organic Chemistry', 'Metals & Non-metals']
    },
    {
      id: 'waec-gce-biology',
      name: 'WAEC GCE Biology',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Cell & Tissue Organisation', 'Plant & Animal Nutrition', 'Ecology & Energy Flow', 'Genetics & Heredity']
    },
    {
      id: 'waec-gce-economics',
      name: 'WAEC GCE Economics',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Microeconomics', 'Macroeconomics', 'Financial Institutions', 'International Trade']
    },
    {
      id: 'waec-gce-government',
      name: 'WAEC GCE Government',
      category: 'WASSCE Private Candidates (400 Questions)',
      examType: 'WAEC GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 14,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Political Concepts', 'Nigerian Federalism', 'Constitutional Development', 'Foreign Policy']
    },

    // --- NECO GCE (Nov/Dec SSCE External - Live Bank) ---
    {
      id: 'neco-gce-math',
      name: 'NECO GCE Mathematics',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <MathSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#16A34A',
      topics: ['Number Bases & Modular Arith', 'Quadratic Equations & Graphs', 'Trigonometric Ratios', 'Probability']
    },
    {
      id: 'neco-gce-english',
      name: 'NECO GCE English Language',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 16,
      icon: <EnglishSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEE2E2]',
      accentColor: '#EF4444',
      topics: ['Grammar & Concord', 'Vocabulary Development', 'Summary & Comprehension', 'Oral English']
    },
    {
      id: 'neco-gce-physics',
      name: 'NECO GCE Physics',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <PhysicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#E0F2FE]',
      accentColor: '#0284C7',
      topics: ['Scalars, Vectors & Motion', 'Pressure & Fluid Mechanics', 'Thermal Physics & Heat', 'Electric Circuits']
    },
    {
      id: 'neco-gce-chemistry',
      name: 'NECO GCE Chemistry',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <ChemistrySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFEDD5]',
      accentColor: '#EA580C',
      topics: ['Chemical Equations & Stoichiometry', 'Thermodynamics & Kinetics', 'Electrochemistry', 'Hydrocarbons']
    },
    {
      id: 'neco-gce-biology',
      name: 'NECO GCE Biology',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 18,
      icon: <BiologySubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#DCFCE7]',
      accentColor: '#10B981',
      topics: ['Ecological Management', 'Reproduction in Plants & Animals', 'Microorganisms in Action', 'Genetics']
    },
    {
      id: 'neco-gce-economics',
      name: 'NECO GCE Economics',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 12,
      icon: <EconomicsSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FEF3C7]',
      accentColor: '#D97706',
      topics: ['Demand & Supply Mechanisms', 'Production & Costs', 'Money & Banking', 'Public Finance']
    },
    {
      id: 'neco-gce-government',
      name: 'NECO GCE Government',
      category: 'NECO SSCE External (400 Questions)',
      examType: 'NECO GCE',
      questionsCount: 400,
      completedQuestions: 0,
      topicsCount: 15,
      icon: <GovernmentSubjectIcon className="w-6 h-6" />,
      iconBg: 'bg-[#FFE4E6]',
      accentColor: '#E11D48',
      topics: ['Concepts of the State & Power', 'Constitutions & Colonial Admin', 'Nigerian Federalism', 'Foreign Policy']
    }
  ];

  const filteredSubjects = allSubjects.filter((s) => {
    let matchesCategory = false;
    if (activeCategory === 'All') {
      matchesCategory = true;
    } else if (activeCategory === 'WAEC (Paper 1 CBT)') {
      matchesCategory = s.examType === 'WAEC';
    } else if (activeCategory === 'WAEC (Paper 2 Theory)') {
      matchesCategory = s.examType === 'WAEC (Theory)';
    } else if (activeCategory === 'WAEC (Paper 3 Practicals)') {
      matchesCategory = s.examType === 'WAEC (Practical)';
    } else {
      matchesCategory = s.examType === activeCategory;
    }
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 text-white">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-200/70 mb-1">
            <button type="button" onClick={onBackToDashboard} className="hover:text-[#FFCC00] transition">
              Dashboard
            </button>
            <span>/</span>
            <span className="text-[#FFCC00]">Subject Library</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Choose Subject
          </h1>
          <p className="text-xs text-emerald-200/80 mt-1">
            Select a subject to take a full-length CBT simulation or practice topical past questions.
          </p>
        </div>

        {/* Search & Stats */}
        <div className="flex items-center space-x-3">
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#061710] border border-[#C4823F]/50 rounded-xl text-xs text-white placeholder-emerald-200/40 focus:outline-none focus:border-[#FFCC00] shadow-inner transition"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 text-emerald-300/50 absolute left-3 top-3 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <button
            type="button"
            onClick={() => openDareToDare({ subject: 'Mathematics' })}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition flex items-center space-x-2 border border-amber-300/40 cursor-pointer shrink-0"
          >
            <span className="animate-pulse">🔥</span>
            <span>DARE TO DARE (60s GAME)</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                isActive
                  ? 'bg-[#C4823F] text-slate-950 font-black shadow-md border-2 border-amber-300'
                  : 'bg-[#082218] text-emerald-100 border border-[#C4823F]/40 hover:bg-[#0E3526]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Mode Switcher & Presets Header */}
      <div className="bg-[#082218] border-2 border-[#C4823F]/60 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setIsMultiMode(false)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              !isMultiMode
                ? 'bg-[#FFCC00] text-slate-950 font-black shadow'
                : 'bg-[#061911] text-white/70 hover:text-white border border-[#C4823F]/40'
            }`}
          >
            🎯 Single Subject Examination
          </button>
          <button
            type="button"
            onClick={() => setIsMultiMode(true)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
              isMultiMode
                ? 'bg-[#FFCC00] text-slate-950 font-black shadow'
                : 'bg-[#061911] text-white/70 hover:text-white border border-[#C4823F]/40'
            }`}
          >
            <span>📚 Multi-Subject CBT Mock (JAMB UTME)</span>
            <span className="text-[10px] bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded font-mono font-bold">4 SUBJ</span>
          </button>
        </div>

        {isMultiMode && (
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-black uppercase text-[#FFCC00]">Presets:</span>
            <button
              type="button"
              onClick={() => setSelectedSubjectNames(['Use of English', 'Mathematics', 'Physics', 'Chemistry'])}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-[#061911] border border-[#C4823F]/50 text-white hover:bg-[#FFCC00] hover:text-slate-950 cursor-pointer transition"
            >
              🔬 Science
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubjectNames(['Use of English', 'Biology', 'Chemistry', 'Physics'])}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-[#061911] border border-[#C4823F]/50 text-white hover:bg-[#FFCC00] hover:text-slate-950 cursor-pointer transition"
            >
              🩺 Medical
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubjectNames(['Use of English', 'Mathematics', 'Economics', 'Government'])}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-[#061911] border border-[#C4823F]/50 text-white hover:bg-[#FFCC00] hover:text-slate-950 cursor-pointer transition"
            >
              ⚖️ Arts/Commercial
            </button>
          </div>
        )}
      </div>

      {/* Subjects Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
        {filteredSubjects.map((subject) => {
          const isMath = subject.id === 'math';
          const isPhysics = subject.id === 'physics';
          const isEnglish = subject.id === 'english';
          const isSelected = selectedSubjectNames.includes(subject.name);
          const progressPercent = Math.round((subject.completedQuestions / subject.questionsCount) * 100);

          return (
            <div
              key={subject.id}
              className={`rounded-2xl p-5 border-2 shadow-xl transition duration-200 flex flex-col justify-between group ${
                isMultiMode && isSelected
                  ? 'bg-gradient-to-br from-[#103D2C] to-[#0A261B] border-[#FFCC00] ring-2 ring-[#FFCC00]/50 shadow-2xl'
                  : 'bg-gradient-to-br from-[#0E3526] to-[#082218] border-[#C4823F] hover:border-[#FFCC00]'
              }`}
            >
              <div>
                {/* Icon & Count */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] flex items-center justify-center group-hover:scale-105 transition-transform text-[#FFCC00]">
                    {subject.icon}
                  </div>
                  <span className="text-[11px] font-extrabold text-amber-300 bg-amber-950/60 border border-[#C4823F]/50 px-2.5 py-1 rounded-full">
                    {subject.questionsCount} Questions
                  </span>
                </div>

                {/* Title & Category */}
                <h3 className="text-base font-extrabold text-white mt-4 group-hover:text-[#FFCC00] transition-colors leading-tight">
                  {subject.name}
                </h3>
                <p className="text-[11px] text-emerald-200/70 font-medium mt-0.5">
                  {subject.topicsCount} Syllabus Units • {subject.category}
                </p>

                {/* Topics pills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {subject.topics.slice(0, 2).map((topic) => (
                    <span key={topic} className="text-[10px] bg-[#061911] text-emerald-200 border border-[#C4823F]/30 px-2 py-0.5 rounded-md">
                      {topic}
                    </span>
                  ))}
                  <span className="text-[10px] text-emerald-300/60 self-center">
                    +{subject.topicsCount - 2} more
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-[#C4823F]/30">
                  <div className="flex justify-between text-[11px] font-medium text-emerald-200/80 mb-1.5">
                    <span>Progress</span>
                    <span className="font-bold text-amber-300">{progressPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#061911] rounded-full overflow-hidden border border-[#C4823F]/20">
                    <div
                      className="h-full bg-[#FFCC00] rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-[#C4823F]/30">
                {isMultiMode ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSubjectNames((prev) =>
                        prev.includes(subject.name)
                          ? (prev.length > 1 ? prev.filter((s) => s !== subject.name) : prev)
                          : (prev.length < 4 ? [...prev, subject.name] : prev)
                      );
                    }}
                    className={`w-full py-2.5 rounded-xl font-black text-xs transition cursor-pointer flex items-center justify-center space-x-2 ${
                      isSelected
                        ? 'bg-[#FFCC00] text-slate-950 border-2 border-yellow-300 shadow-md'
                        : 'bg-[#061911] text-white/80 border border-[#C4823F]/40 hover:text-white'
                    }`}
                  >
                    <span>{isSelected ? '☑️ Included in Mock' : '+ Add to 4-Subject Mock'}</span>
                  </button>
                ) : (
                  <div className="w-full flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        startTestForSubject(subject.name);
                        if (onSelectMathematics) onSelectMathematics();
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-[#C4823F] hover:bg-[#FFCC00] text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <span>
                        {subject.name.includes('(Theory)')
                          ? '📋 Study Theory & Schemes'
                          : subject.name.includes('(Practical)')
                          ? '🔬 Lab Practical Guide'
                          : 'Launch CBT'}
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                    {!subject.name.includes('(Theory)') && !subject.name.includes('(Practical)') && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSubject(subject.name);
                          setSelectedSubjects([subject.name]);
                          setActiveView('practice');
                        }}
                        className="px-3 py-2.5 rounded-xl bg-[#061911] hover:bg-[#0E3526] border border-[#C4823F]/40 text-amber-200 font-bold text-xs transition cursor-pointer"
                      >
                        Practice
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Sticky Bottom Multi-Subject Launch Drawer (Desktop) ─────────── */}
      {isMultiMode && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 z-40 animate-fade-up">
          <div className="bg-[#082218] border-2 border-[#C4823F] rounded-3xl p-4 shadow-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="text-xs font-black uppercase text-[#FFCC00]">Selected ({selectedSubjectNames.length}/4):</span>
              {selectedSubjectNames.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-xl bg-[#061911] border border-[#FFCC00]/50 text-xs font-bold text-[#FFCC00] flex items-center space-x-1">
                  <span>{s}</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedSubjectNames.length > 1) {
                        setSelectedSubjectNames((prev) => prev.filter((sub) => sub !== s));
                      }
                    }}
                    className="hover:text-rose-400 font-black ml-1"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <select
                value={desktopExamYear}
                onChange={(e) => setDesktopExamYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                className="bg-[#061911] border border-[#C4823F]/60 text-xs text-[#FFCC00] font-bold rounded-xl px-3 py-2 outline-none cursor-pointer"
              >
                <option value="all">📅 All Years Combined</option>
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>JAMB {yr} Exam</option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  startMultiSubjectTest(selectedSubjectNames, desktopExamYear);
                  if (onSelectMathematics) onSelectMathematics();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#FFCC00] text-slate-950 font-black text-xs hover:bg-yellow-300 transition shadow-lg cursor-pointer"
              >
                🚀 Launch CBT Exam ({selectedSubjectNames.length} Subjects)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
