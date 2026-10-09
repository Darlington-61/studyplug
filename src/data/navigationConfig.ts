import { ActiveViewType } from '../context/AppContext';

export interface NavSubItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  description?: string;
  targetView: ActiveViewType;
  action?: 'dare-to-dare' | 'open-calculator' | 'open-ai' | 'morning-tea' | 'paper-selector' | 'bookmarks' | 'countdown';
  params?: Record<string, any>;
}

export interface NavCategory {
  id: string;
  label: string;
  icon: string;
  hasDropdown: boolean;
  defaultView: ActiveViewType;
  items: NavSubItem[];
}

export const NAVIGATION_CATEGORIES: NavCategory[] = [
  // 1. Dashboard / Home
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    hasDropdown: true,
    defaultView: 'dashboard',
    items: [
      {
        id: 'home-continue',
        label: 'Dashboard Home',
        icon: '🏠',
        description: 'Continue where you stopped & daily goals',
        targetView: 'dashboard'
      },
      {
        id: 'home-recent',
        label: 'Recent Practice & Drill',
        icon: '⚡',
        description: 'Quick resume your study progress',
        targetView: 'practice'
      },
      {
        id: 'home-recommended',
        label: 'Recommended Syllabus Topics',
        icon: '📚',
        description: 'Key focus areas recommended for you',
        targetView: 'topics'
      },
      {
        id: 'home-challenge',
        label: 'Daily 60s Challenge',
        icon: '🔥',
        badge: 'GAME',
        description: 'Beat the clock & dare your friends',
        targetView: 'dashboard',
        action: 'dare-to-dare'
      },
      {
        id: 'home-quick-start',
        label: 'Quick Start CBT Test',
        icon: '▶',
        description: 'Instant timed exam simulator',
        targetView: 'test'
      }
    ]
  },

  // 2. Questions
  {
    id: 'questions',
    label: 'Questions',
    icon: '❓',
    hasDropdown: true,
    defaultView: 'past-questions',
    items: [
      {
        id: 'qs-past',
        label: 'Past Questions',
        icon: '📝',
        description: 'Official solved past papers with schemes',
        targetView: 'past-questions'
      },
      {
        id: 'qs-repeated',
        label: 'Repeated Questions & Topics',
        icon: '🔁',
        badge: 'HOT',
        description: 'Most frequently tested JAMB & WAEC topics',
        targetView: 'repeated-questions'
      },
      {
        id: 'qs-by-topic',
        label: 'Questions by Topic',
        icon: '📑',
        description: 'Drill specific syllabus subject topics',
        targetView: 'courses'
      },
      {
        id: 'qs-by-year',
        label: 'Questions by Year',
        icon: '📅',
        description: 'Filter from 2026 back to 2010 past papers',
        targetView: 'past-questions'
      },
      {
        id: 'qs-by-exam',
        label: 'Questions by Exam',
        icon: '🎓',
        description: 'JAMB, WAEC, NECO, NABTEB, BECE',
        targetView: 'courses'
      },
      {
        id: 'qs-saved',
        label: 'Saved & Bookmarked Questions',
        icon: '🔖',
        description: 'Review your pinned difficult questions',
        targetView: 'bookmarks'
      }
    ]
  },

  // 3. Practice
  {
    id: 'practice',
    label: 'Practice',
    icon: '⚡',
    hasDropdown: true,
    defaultView: 'practice',
    items: [
      {
        id: 'prac-by-subject',
        label: 'Practice by Subject',
        icon: '📐',
        description: 'Select Mathematics, English, Sciences or Arts',
        targetView: 'practice'
      },
      {
        id: 'prac-by-topic',
        label: 'Practice by Topic',
        icon: '🏷️',
        description: 'Filter by specific syllabus chapters',
        targetView: 'courses'
      },
      {
        id: 'prac-custom',
        label: 'Custom CBT Practice & Drill',
        icon: '⚙️',
        description: 'Choose 1 to 4 subjects with custom timer',
        targetView: 'practice'
      },
      {
        id: 'prac-timed',
        label: 'Timed Practice Simulation',
        icon: '⏱️',
        description: 'Exam speed training with live countdown',
        targetView: 'test'
      },
      {
        id: 'prac-weak-topics',
        label: 'Weak Topics Drill',
        icon: '🎯',
        description: 'Target topics where your accuracy is low',
        targetView: 'practice'
      }
    ]
  },

  // 4. Mock Tests
  {
    id: 'mocks',
    label: 'Mock Tests',
    icon: '📝',
    hasDropdown: true,
    defaultView: 'mock',
    items: [
      {
        id: 'mock-standard',
        label: 'Standard CBT Mock Exam',
        icon: '🏛️',
        description: 'Official conditions with scoring algorithm',
        targetView: 'mock'
      },
      {
        id: 'mock-likely',
        label: '2026 Likely Exam Questions',
        icon: '🔥',
        badge: '2026',
        description: 'Curated high-probability test questions',
        targetView: 'test'
      },
      {
        id: 'mock-full-cbt',
        label: 'Full 4-Subject UTME Mock',
        icon: '💻',
        description: 'Full simulation (Use of English + 3 Subjects)',
        targetView: 'practice'
      },
      {
        id: 'mock-private',
        label: 'Private & School Mock Papers',
        icon: '🏫',
        description: 'Standard termly & preparatory papers',
        targetView: 'mock'
      },
      {
        id: 'mock-history',
        label: 'Mock Exam History & Scores',
        icon: '📜',
        description: 'Review your past test performance',
        targetView: 'results'
      }
    ]
  },

  // 5. Learning
  {
    id: 'learning',
    label: 'Learning',
    icon: '📖',
    hasDropdown: true,
    defaultView: 'notes',
    items: [
      {
        id: 'learn-notes',
        label: 'Classroom Study Notes',
        icon: '📖',
        description: 'Full textbook lesson notes with KaTeX formulas',
        targetView: 'notes'
      },
      {
        id: 'learn-videos',
        label: 'Video Lessons & Tutorials',
        icon: '▶',
        description: 'Morning Tea video explainers & diagrams',
        targetView: 'topics',
        action: 'morning-tea'
      },
      {
        id: 'learn-ai-videos',
        label: 'AI Exam Video Generator',
        icon: '🎬',
        badge: 'NEW',
        description: 'Syllabus tutorials & past question video creator',
        targetView: 'ai-videos'
      },
      {
        id: 'learn-resources',
        label: 'Study Resources & Formula Sheets',
        icon: '📐',
        description: 'Downloadable syllabi & key equations',
        targetView: 'resources'
      },
      {
        id: 'learn-ai',
        label: 'StudyPlug AI Assistant',
        icon: '🤖',
        badge: 'AI',
        description: 'Instant answers, step-by-step math solver',
        targetView: 'ai-helper'
      },
      {
        id: 'learn-saved',
        label: 'Saved Study Materials',
        icon: '📁',
        description: 'Offline reading & pinned textbook chapters',
        targetView: 'notes'
      }
    ]
  },

  // 6. Results & Performance
  {
    id: 'performance',
    label: 'Performance',
    icon: '📊',
    hasDropdown: true,
    defaultView: 'performance',
    items: [
      {
        id: 'perf-results',
        label: 'Latest Quiz & Test Results',
        icon: '🏆',
        description: 'Score report with correct/incorrect breakdown',
        targetView: 'results'
      },
      {
        id: 'perf-analytics',
        label: 'Comprehensive Performance Analytics',
        icon: '📈',
        description: 'Overall accuracy, speed & topic mastery',
        targetView: 'performance'
      },
      {
        id: 'perf-leaderboard',
        label: 'Student Leaderboard',
        icon: '🥇',
        description: 'Global, Friends & School ranking',
        targetView: 'leaderboard'
      },
      {
        id: 'perf-streak',
        label: 'Weekly Study Streak & Points',
        icon: '🔥',
        description: 'Track daily consistency & unlock badges',
        targetView: 'performance'
      }
    ]
  },

  // 7. More (Profile & Tools)
  {
    id: 'more',
    label: 'More',
    icon: '⚙️',
    hasDropdown: true,
    defaultView: 'profile',
    items: [
      {
        id: 'more-profile',
        label: 'Student Profile & Account',
        icon: '👤',
        description: 'Personal info, target score & exam settings',
        targetView: 'profile'
      },
      {
        id: 'more-bookmarks',
        label: 'Bookmarks & Saved Qs',
        icon: '🔖',
        description: 'All pinned questions & revision cards',
        targetView: 'bookmarks'
      },
      {
        id: 'more-calculator',
        label: 'CBT Scientific Calculator',
        icon: '🧮',
        description: 'Built-in official exam onscreen calculator',
        targetView: 'dashboard',
        action: 'open-calculator'
      },
      {
        id: 'more-countdown',
        label: 'Exam Countdown Timetable',
        icon: '⏳',
        description: 'Days left until JAMB, WAEC & NECO exams',
        targetView: 'dashboard',
        action: 'countdown'
      }
    ]
  }
];

export function getCategoryForView(view: ActiveViewType): string {
  for (const cat of NAVIGATION_CATEGORIES) {
    if (cat.defaultView === view) return cat.id;
    if (cat.items.some(item => item.targetView === view)) return cat.id;
  }
  return 'home';
}

export function isViewInCategory(category: NavCategory, currentView: ActiveViewType): boolean {
  if (category.defaultView === currentView) return true;
  return category.items.some(item => item.targetView === currentView);
}

