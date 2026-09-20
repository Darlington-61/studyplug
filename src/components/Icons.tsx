import React from 'react';

// Study Plug Cap & Brand Logo
// Study Plug Cap & Electrical Plug Brand Logo
export const StudyPlugLogo: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#0E382B"
}) => (
  <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Graduation Cap Mortarboard */}
    <path d="M16 2.5L30 8.8L16 15.2L2 8.8L16 2.5Z" fill={color} />
    
    {/* Under-cap Arched Headband / Wave */}
    <path d="M6 16.5C9.5 13.5 22.5 13.5 26 16.5C24.5 20.2 7.5 20.2 6 16.5Z" fill={color} />

    {/* Plug Prongs pointing up into the cap */}
    <rect x="10.8" y="17.8" width="2.4" height="5.2" rx="0.8" fill={color} />
    <rect x="18.8" y="17.8" width="2.4" height="5.2" rx="0.8" fill={color} />

    {/* Plug Housing / Body with tapered cable tip */}
    <path d="M9 22.8H23C23.6 22.8 24 23.3 24 24V27C24 27.8 23.5 28.5 22.8 28.8L17.5 31C17.2 31.2 16.8 31.6 16.6 32L16.2 34C16.1 34.3 15.9 34.3 15.8 34L15.4 32C15.2 31.6 14.8 31.2 14.5 31L9.2 28.8C8.5 28.5 8 27.8 8 27V24C8 23.3 8.4 22.8 9 22.8Z" fill={color} />
  </svg>
);

// Hero Card 3D Trophy, Books & Target Illustration
export const HeroGraphic: React.FC<{ className?: string }> = ({ className = "w-32 h-28" }) => (
  <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="trophyGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE872" />
        <stop offset="40%" stopColor="#FFC837" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="trophyHandle" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE066" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="targetBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="targetDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="bookPurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="bookPink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="100%" stopColor="#DB2777" />
      </linearGradient>
      <linearGradient id="bookCyan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#67E8F9" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
      <filter id="heroShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1e105a" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Stack of Books at bottom */}
    <g filter="url(#heroShadow)">
      {/* Bottom Book (Purple) */}
      <rect x="22" y="102" width="76" height="15" rx="3.5" fill="url(#bookPurple)" />
      <rect x="25" y="105" width="70" height="9" rx="1.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="22" y="102" width="8" height="15" rx="2" fill="#4338CA" />

      {/* Middle Book (Pink) */}
      <rect x="26" y="91" width="70" height="13" rx="3" fill="url(#bookPink)" />
      <rect x="29" y="93.5" width="64" height="8" rx="1.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="26" y="91" width="7" height="13" rx="2" fill="#BE185D" />

      {/* Top Book (Cyan/Blue) */}
      <rect x="32" y="81" width="62" height="12" rx="3" fill="url(#bookCyan)" />
      <rect x="35" y="83" width="56" height="8" rx="1.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="32" y="81" width="6" height="12" rx="2" fill="#0E7490" />
    </g>

    {/* Golden Trophy */}
    <g filter="url(#heroShadow)">
      {/* Trophy Base */}
      <rect x="44" y="68" width="30" height="6" rx="2" fill="#D97706" />
      <rect x="49" y="60" width="20" height="8" rx="2" fill="url(#trophyGold)" />
      
      {/* Trophy Handles */}
      <path d="M43 38C35 38 33 48 41 53C44 55 47 55 47 55" stroke="url(#trophyHandle)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M75 38C83 38 85 48 77 53C74 55 71 55 71 55" stroke="url(#trophyHandle)" strokeWidth="4.5" strokeLinecap="round" />

      {/* Trophy Cup */}
      <path d="M43 32C43 32 44 58 59 58C74 58 75 32 75 32H43Z" fill="url(#trophyGold)" />
      {/* Trophy Rim */}
      <ellipse cx="59" cy="32" rx="16" ry="4.5" fill="#FFE872" />
      <ellipse cx="59" cy="32" rx="13" ry="3" fill="#D97706" />

      {/* Star in Center of Cup */}
      <path d="M59 40L60.5 44.5H65L61.3 47.2L62.7 51.5L59 48.8L55.3 51.5L56.7 47.2L53 44.5H57.5L59 40Z" fill="#FFFFFF" opacity="0.95" />
    </g>

    {/* 3D Bullseye Target on Right */}
    <g filter="url(#heroShadow)" transform="rotate(-8 120 72)">
      {/* Outer Blue Ring */}
      <ellipse cx="118" cy="72" rx="28" ry="28" fill="url(#targetBlue)" />
      {/* Inner White Ring */}
      <ellipse cx="118" cy="72" rx="21" ry="21" fill="#FFFFFF" />
      {/* Middle Blue Ring */}
      <ellipse cx="118" cy="72" rx="14" ry="14" fill="url(#targetBlue)" />
      {/* Center White Ring */}
      <ellipse cx="118" cy="72" rx="8" ry="8" fill="#FFFFFF" />
      {/* Center Bullseye Red/Blue */}
      <ellipse cx="118" cy="72" rx="4" ry="4" fill="#0369A1" />

      {/* Embedded Arrow / Dart */}
      <path d="M142 46L118 72" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      {/* Arrow Flights */}
      <path d="M142 46L146 38L138 42L142 46Z" fill="#F43F5E" />
      <path d="M142 46L150 48L144 54L142 46Z" fill="#FB7185" />
    </g>

    {/* Sparkles / Highlights */}
    <path d="M85 24L86.5 28L90.5 29.5L86.5 31L85 35L83.5 31L79.5 29.5L83.5 28L85 24Z" fill="#FFFBEB" opacity="0.8" />
    <circle cx="34" cy="42" r="2" fill="#FFFFFF" opacity="0.6" />
    <circle cx="108" cy="30" r="2.5" fill="#FFE066" opacity="0.8" />
  </svg>
);

// Quick Start Icons
export const MockTestCardIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M10 13l1.5 2 3-3.5" />
  </svg>
);

export const PracticeCardIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const PreviousTestsCardIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h5" />
  </svg>
);

export const BookmarksCardIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M6 3C4.89543 3 4 3.89543 4 5V21L12 17.5L20 21V5C20 3.89543 19.1046 3 18 3H6Z" />
  </svg>
);

// Subject Icons
export const EnglishSubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
    <path d="M8 7h8" />
    <path d="M8 11h6" />
  </svg>
);

export const MathSubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 13L6.5 13L9 20L13.5 5H20" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 11L19 15" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M19 11L15 15" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const PhysicsSubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="2.5" fill="#0284C7" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(90 12 12)" />
  </svg>
);

export const ChemistrySubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2v5l-5.5 9.5A3 3 0 0 0 7.1 21h9.8a3 3 0 0 0 2.6-4.5L14 7V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
    <circle cx="10" cy="18.5" r="0.75" fill="#EA580C" />
    <circle cx="14" cy="18" r="1" fill="#EA580C" />
  </svg>
);

export const BiologySubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22V11" />
    <path d="M12 14C8 14 4 10 4 5C9 5 12 8 12 11Z" fill="#10B981" fillOpacity="0.25" />
    <path d="M12 14C16 14 20 10 20 5C15 5 12 8 12 11Z" fill="#10B981" fillOpacity="0.25" />
  </svg>
);

export const GovernmentSubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21h18" />
    <path d="M4 18h16" />
    <path d="M6 18v-7" />
    <path d="M10 18v-7" />
    <path d="M14 18v-7" />
    <path d="M18 18v-7" />
    <path d="M12 2l9 5H3l9-5z" />
  </svg>
);

export const LiteratureSubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2.5" />
    <path d="M9 7h6" />
    <path d="M9 11h6" />
    <path d="M9 15h4" />
    <path d="M12 3v5l2-1.5 2 1.5V3" fill="#DB2777" fillOpacity="0.3" />
  </svg>
);

export const EconomicsSubjectIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 20h18" />
    <rect x="6" y="13" width="3" height="7" rx="1" fill="#D97706" fillOpacity="0.4" />
    <rect x="11" y="9" width="3" height="11" rx="1" fill="#D97706" fillOpacity="0.6" />
    <rect x="16" y="5" width="3" height="15" rx="1" fill="#D97706" />
    <path d="M6 11l4.5-4 4 3 5.5-5" strokeLinecap="round" />
    <polyline points="16 5 20 5 20 9" />
  </svg>
);

// Streak Fire Icon
export const FlameIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="#F97316" className={className}>
    <path d="M12 2C10.5 4.5 9 6.5 9 9C9 10.7 9.8 12.1 11.1 13C10.4 12 10.2 10.9 10.5 10C10.8 9.1 11.6 8.3 12 7.5C13.5 10 16 11.5 16 14.5C16 17.5 13.8 20 11 20C7.7 20 5 17.3 5 14C5 10.2 8.3 6.9 12 2Z" />
    <path d="M12 14C11.4 14 11 14.4 11 15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15C13 14.4 12.6 14 12 14Z" fill="#FDE047" />
  </svg>
);

// Checkmark in Circle
export const CheckCircleFilled: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <circle cx="10" cy="10" r="9" stroke="#16A34A" strokeWidth="1.6" fill="#F0FDF4" />
    <path d="M6 10.2L8.5 12.7L14 7.2" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
