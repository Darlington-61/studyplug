import React from 'react';

export const NotesHeroArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 200 170"
        className="w-full h-auto drop-shadow-xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Ambient Glow */}
          <radialGradient id="glowNotes" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8C800" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F8C800" stopOpacity="0" />
          </radialGradient>

          {/* Book Spine Gradients */}
          <linearGradient id="gradJamb" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="gradWaec" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="gradNeco" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="gradNabteb" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="gradIelts" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4338CA" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="gradBece" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="penCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
        </defs>

        {/* Background glow */}
        <ellipse cx="110" cy="95" rx="85" ry="65" fill="url(#glowNotes)" />

        {/* ─── Handwritten Chalk Slogan: Study Smarter Not Harder ─── */}
        <g transform="translate(132, 18)">
          {/* Yellow doodle arrow */}
          <path
            d="M 5 6 L 15 12 L 5 18"
            stroke="#F8C800"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="24"
            y="9"
            fill="#F8C800"
            fontSize="10"
            fontWeight="bold"
            fontFamily="'Comic Sans MS', 'Caveat', cursive, sans-serif"
            letterSpacing="0.2"
          >
            Study
          </text>
          <text
            x="24"
            y="21"
            fill="#F8C800"
            fontSize="10"
            fontWeight="bold"
            fontFamily="'Comic Sans MS', 'Caveat', cursive, sans-serif"
            letterSpacing="0.2"
          >
            Smarter
          </text>
          <text
            x="24"
            y="33"
            fill="#F8C800"
            fontSize="9"
            fontWeight="bold"
            fontFamily="'Comic Sans MS', 'Caveat', cursive, sans-serif"
            letterSpacing="0.2"
          >
            Not Harder
          </text>
        </g>

        {/* ─── Stationery Cup (Yellow pot with pens) ─── */}
        <g id="stationery-pen-cup" transform="translate(150, 85)">
          {/* Blue Pen */}
          <rect x="8" y="-30" width="4.5" height="38" rx="1.5" fill="#2563EB" transform="rotate(-12 8 -30)" />
          <polygon points="8,-30 10.25,-36 12.5,-30" fill="#F8C800" transform="rotate(-12 8 -30)" />

          {/* Yellow Pen */}
          <rect x="18" y="-28" width="4.5" height="36" rx="1.5" fill="#F8C800" transform="rotate(8 18 -28)" />
          <polygon points="18,-28 20.25,-34 22.5,-28" fill="#1E293B" transform="rotate(8 18 -28)" />

          {/* Yellow Cup Body */}
          <rect x="2" y="0" width="28" height="34" rx="4" fill="url(#penCupGrad)" stroke="#CA8A04" strokeWidth="1" />
          <line x1="2" y1="6" x2="30" y2="6" stroke="#FEF08A" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* ─── 3D Book Stack ─── */}
        <g id="books-stack" transform="translate(42, 28)">
          {/* BOOK 6: BECE (White) */}
          <g transform="translate(0, 88)">
            <path d="M 0 10 L 80 10 L 96 2 L 16 2 Z" fill="#E2E8F0" />
            <path d="M 80 10 L 96 2 L 96 14 L 80 22 Z" fill="#CBD5E1" />
            <rect x="0" y="10" width="80" height="12" rx="2" fill="url(#gradBece)" stroke="#94A3B8" strokeWidth="0.8" />
            <text x="28" y="19" fill="#0F172A" fontSize="7" fontWeight="bold" letterSpacing="0.8">BECE</text>
          </g>

          {/* BOOK 5: IELTS (Blue/Purple) */}
          <g transform="translate(3, 76)">
            <path d="M 0 10 L 78 10 L 94 2 L 16 2 Z" fill="#C7D2FE" />
            <path d="M 78 10 L 94 2 L 94 14 L 78 22 Z" fill="#818CF8" />
            <rect x="0" y="10" width="78" height="12" rx="2" fill="url(#gradIelts)" stroke="#3730A3" strokeWidth="0.8" />
            <text x="27" y="19" fill="#FFFFFF" fontSize="7" fontWeight="bold" letterSpacing="0.8">IELTS</text>
          </g>

          {/* BOOK 4: NABTEB (Red) */}
          <g transform="translate(6, 64)">
            <path d="M 0 10 L 76 10 L 92 2 L 16 2 Z" fill="#FECDD3" />
            <path d="M 76 10 L 92 2 L 92 14 L 76 22 Z" fill="#F87171" />
            <rect x="0" y="10" width="76" height="12" rx="2" fill="url(#gradNabteb)" stroke="#7F1D1D" strokeWidth="0.8" />
            <text x="23" y="19" fill="#FFFFFF" fontSize="7" fontWeight="bold" letterSpacing="0.8">NABTEB</text>
          </g>

          {/* BOOK 3: NECO (Green) */}
          <g transform="translate(9, 52)">
            <path d="M 0 10 L 74 10 L 90 2 L 16 2 Z" fill="#A7F3D0" />
            <path d="M 74 10 L 90 2 L 90 14 L 74 22 Z" fill="#34D399" />
            <rect x="0" y="10" width="74" height="12" rx="2" fill="url(#gradNeco)" stroke="#065F46" strokeWidth="0.8" />
            <text x="26" y="19" fill="#FFFFFF" fontSize="7" fontWeight="bold" letterSpacing="0.8">NECO</text>
          </g>

          {/* BOOK 2: WAEC (Yellow/Gold) */}
          <g transform="translate(12, 40)">
            <path d="M 0 10 L 72 10 L 88 2 L 16 2 Z" fill="#FDE68A" />
            <path d="M 72 10 L 88 2 L 88 14 L 72 22 Z" fill="#FBBF24" />
            <rect x="0" y="10" width="72" height="12" rx="2" fill="url(#gradWaec)" stroke="#92400E" strokeWidth="0.8" />
            <text x="25" y="19" fill="#001028" fontSize="7" fontWeight="bold" letterSpacing="0.8">WAEC</text>
          </g>

          {/* BOOK 1: JAMB (Dark Blue) */}
          <g transform="translate(15, 28)">
            <path d="M 0 10 L 70 10 L 86 2 L 16 2 Z" fill="#BFDBFE" />
            <path d="M 70 10 L 86 2 L 86 14 L 70 22 Z" fill="#60A5FA" />
            <rect x="0" y="10" width="70" height="12" rx="2" fill="url(#gradJamb)" stroke="#1E3A8A" strokeWidth="0.8" />
            <text x="26" y="19" fill="#FFFFFF" fontSize="7" fontWeight="bold" letterSpacing="0.8">JAMB</text>
          </g>

          {/* ─── Graduation Cap (Mortarboard on Top) ─── */}
          <g transform="translate(8, 0)">
            {/* Skull Base */}
            <path
              d="M 36 26 C 36 34, 66 34, 66 26 Z"
              fill="#0A0E17"
              stroke="#000000"
              strokeWidth="1"
            />
            {/* Mortarboard Diamond */}
            <polygon
              points="51,10 82,21 51,32 20,21"
              fill="#0F172A"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Diamond Inner Highlight */}
            <polygon
              points="51,13 77,21 51,29 25,21"
              fill="#1E293B"
            />
            {/* Center Gold Button */}
            <circle cx="51" cy="21" r="2" fill="#F8C800" />
            {/* Gold Tassel Ribbon */}
            <path
              d="M 51 21 Q 65 24 70 34"
              stroke="#F8C800"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Gold Tassel Fringe */}
            <rect x="68" y="34" width="4" height="7" rx="1" fill="#F8C800" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NotesHeroArtwork;
