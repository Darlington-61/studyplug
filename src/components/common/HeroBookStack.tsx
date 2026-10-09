import React from 'react';

interface HeroBookStackProps {
  className?: string;
  variant?: 'desktop' | 'mobile' | 'cap-only' | 'books-only';
}

export const HeroBookStack: React.FC<HeroBookStackProps> = ({
  className = '',
  variant = 'desktop'
}) => {
  if (variant === 'cap-only' || variant === 'mobile') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        {/* Background Soft Glow */}
        <div className="absolute inset-0 bg-[#F8C800]/10 rounded-full blur-xl pointer-events-none" />

        <svg
          viewBox="0 0 150 145"
          className="w-full h-auto drop-shadow-xl overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="capTopGradMobile" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#2D3A4F" />
              <stop offset="35%" stopColor="#1E2738" />
              <stop offset="100%" stopColor="#090E17" />
            </linearGradient>
            <linearGradient id="capFrontBevelMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0E1524" />
              <stop offset="50%" stopColor="#1E2738" />
              <stop offset="100%" stopColor="#0E1524" />
            </linearGradient>
            <linearGradient id="goldButtonGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF085" />
              <stop offset="40%" stopColor="#F8C800" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="tasselGradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F8C800" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <filter id="cap3dShadowMobile" x="-25%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="0" dy="6" stdDeviation="4.5" floodColor="#000000" floodOpacity="0.65" />
            </filter>
          </defs>

          {/* GRADUATION CAP (Positioned proudly in the upper space) */}
          <g filter="url(#cap3dShadowMobile)">
            {/* Cap Skull Base (Headband) */}
            <path
              d="M 46 45 C 46 64, 104 64, 104 45 L 100 40 C 100 56, 50 56, 50 40 Z"
              fill="#0A0E1A"
              stroke="#161F30"
              strokeWidth="1.2"
            />

            {/* 3D Mortarboard Thickness / Underside Edge */}
            <polygon points="12,32 75,56 138,32 138,35 75,59 12,35" fill="url(#capFrontBevelMobile)" />

            {/* Mortarboard Diamond Top Surface */}
            <polygon points="75,8 138,32 75,56 12,32" fill="url(#capTopGradMobile)" stroke="#3E4C63" strokeWidth="1.2" />

            {/* Crisp Inner Highlight Border on Diamond Top */}
            <polygon points="75,13 130,32 75,51 20,32" fill="none" stroke="#64748B" strokeWidth="0.75" opacity="0.4" />

            {/* Golden Center Button */}
            <ellipse cx="75" cy="32" rx="4.8" ry="3.2" fill="url(#goldButtonGradMobile)" stroke="#92400E" strokeWidth="0.8" />

            {/* Golden Braided Tassel Cord */}
            <path d="M 75 32 Q 98 40 108 55" fill="none" stroke="#F8C800" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 75 32 Q 98 40 108 55" fill="none" stroke="#FFF085" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

            {/* Tassel Fringe Ring / Bell */}
            <rect x="105.5" y="55" width="5.5" height="6.5" rx="1.5" fill="url(#goldButtonGradMobile)" stroke="#92400E" strokeWidth="0.6" />

            {/* Hanging Golden Tassel Threads */}
            <g stroke="url(#tasselGradMobile)" strokeWidth="1.4" strokeLinecap="round">
              <line x1="106" y1="61.5" x2="104.5" y2="76" />
              <line x1="107.5" y1="61.5" x2="107" y2="79" strokeWidth="1.6" />
              <line x1="109" y1="61.5" x2="109.5" y2="78" />
              <line x1="110.5" y1="61.5" x2="112" y2="76" />
            </g>
          </g>

          {/* DREAM STUDY ACHIEVE (Centered gracefully under the cap) */}
          <g textAnchor="middle">
            {/* Radiating Starburst Lines */}
            <g stroke="#F8C800" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
              {/* Left side rays */}
              <line x1="26" y1="95" x2="17" y2="91" />
              <line x1="24" y1="107" x2="14" y2="107" strokeWidth="1.8" />
              <line x1="26" y1="119" x2="17" y2="123" />
              {/* Right side rays */}
              <line x1="124" y1="95" x2="133" y2="91" />
              <line x1="126" y1="107" x2="136" y2="107" strokeWidth="1.8" />
              <line x1="124" y1="119" x2="133" y2="123" />
            </g>

            {/* Sparkle Dots */}
            <circle cx="20" cy="100" r="1.3" fill="#FFE066" />
            <circle cx="130" cy="100" r="1.3" fill="#FFE066" />
            <circle cx="21" cy="114" r="1" fill="#F8C800" />
            <circle cx="129" cy="114" r="1" fill="#F8C800" />

            {/* Text Lines in Gold Script */}
            <text
              x="75"
              y="97"
              fill="#F8C800"
              fontSize="14.5"
              fontFamily="'Caveat', 'Comic Sans MS', 'Segoe Script', cursive, sans-serif"
              fontWeight="900"
              letterSpacing="0.5"
            >
              Dream
            </text>
            <text
              x="75"
              y="113"
              fill="#F8C800"
              fontSize="14.5"
              fontFamily="'Caveat', 'Comic Sans MS', 'Segoe Script', cursive, sans-serif"
              fontWeight="900"
              letterSpacing="0.5"
            >
              Study
            </text>
            <text
              x="75"
              y="129"
              fill="#F8C800"
              fontSize="14.5"
              fontFamily="'Caveat', 'Comic Sans MS', 'Segoe Script', cursive, sans-serif"
              fontWeight="900"
              letterSpacing="0.5"
            >
              Achieve
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'books-only') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg
          viewBox="0 0 140 100"
          className="w-full h-auto max-w-[110px] drop-shadow-md overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bBlueSmall" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="bGreenSmall" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="bYellowSmall" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" /><stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="bRedSmall" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" /><stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
          </defs>
          <g transform="translate(10, 8)">
            {/* Book 4 (bottom, Blue) */}
            <path d="M 5 72 L 105 72 L 115 62 L 15 62 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="5" y="70" width="100" height="14" rx="2.5" fill="url(#bBlueSmall)" />
            {/* Book 3 (Green) */}
            <path d="M 8 58 L 100 58 L 109 49 L 17 49 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="8" y="56" width="92" height="14" rx="2.5" fill="url(#bGreenSmall)" />
            {/* Book 2 (Yellow) */}
            <path d="M 12 44 L 95 44 L 103 36 L 20 36 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="12" y="42" width="83" height="14" rx="2.5" fill="url(#bYellowSmall)" />
            {/* Book 1 (top, Red) */}
            <path d="M 16 30 L 90 30 L 97 23 L 23 23 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="16" y="28" width="74" height="14" rx="2.5" fill="url(#bRedSmall)" />
          </g>
        </svg>
      </div>
    );
  }

  // Full Desktop Version
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[#F8C800]/10 rounded-full blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 520 440"
        className="w-full h-auto max-w-[500px] drop-shadow-2xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001830" />
            <stop offset="100%" stopColor="#001028" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD21F" />
            <stop offset="100%" stopColor="#F8C800" />
          </linearGradient>
          <linearGradient id="jambGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="waecGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="necoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="nabtebGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="ieltsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="beceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* ----------------- CHALK ANNOTATION & SUNBURST RAYS ----------------- */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          <text
            x="350"
            y="65"
            fill="#FFD200"
            fontSize="26"
            fontFamily="'Comic Sans MS', 'Caveat', cursive, sans-serif"
            fontWeight="bold"
            letterSpacing="0.5"
            transform="rotate(6, 350, 65)"
          >
            Your Goals Matter
          </text>
          {/* Curved Underline Arrow */}
          <path
            d="M 330 80 Q 430 88 470 74"
            stroke="#FFD200"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 465 67 L 474 74 L 463 80"
            stroke="#FFD200"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sparkles / Sunburst rays */}
          <path d="M 480 35 L 480 20 M 472 28 L 488 28" stroke="#FFD200" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 310 40 L 310 25 M 302 33 L 318 33" stroke="#FFD200" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="280" cy="70" r="3" fill="#FFD200" />
          <circle cx="495" cy="65" r="3" fill="#FFD200" />
        </g>

        {/* ----------------- STATIONERY CUP (Back Right) ----------------- */}
        <g id="stationery-cup" transform="translate(370, 160)">
          {/* Ruler sticking out */}
          <rect x="35" y="-60" width="16" height="80" rx="3" fill="#FDE047" transform="rotate(18, 35, -60)" stroke="#CA8A04" strokeWidth="1.5" />
          <line x1="38" y1="-50" x2="48" y2="-50" stroke="#854D0E" strokeWidth="1.5" transform="rotate(18, 35, -60)" />
          <line x1="38" y1="-40" x2="45" y2="-40" stroke="#854D0E" strokeWidth="1.5" transform="rotate(18, 35, -60)" />
          <line x1="38" y1="-30" x2="48" y2="-30" stroke="#854D0E" strokeWidth="1.5" transform="rotate(18, 35, -60)" />

          {/* Pens / Pencils */}
          <rect x="10" y="-70" width="10" height="90" rx="2" fill="#3B82F6" transform="rotate(-15, 10, -70)" stroke="#1D4ED8" strokeWidth="1.5" />
          <polygon points="10,-70 15,-85 20,-70" fill="#FCD34D" transform="rotate(-15, 10, -70)" />
          <polygon points="13,-80 15,-85 17,-80" fill="#1E293B" transform="rotate(-15, 10, -70)" />

          <rect x="25" y="-65" width="8" height="85" rx="2" fill="#EC4899" transform="rotate(2, 25, -65)" stroke="#BE185D" strokeWidth="1.5" />
          <polygon points="25,-65 29,-78 33,-65" fill="#FCD34D" transform="rotate(2, 25, -65)" />
          <polygon points="28,-74 29,-78 30,-74" fill="#1E293B" transform="rotate(2, 25, -65)" />

          {/* Pen Cup Container */}
          <rect x="0" y="0" width="55" height="75" rx="8" fill="url(#goldGrad)" stroke="#B45309" strokeWidth="2" filter="url(#shadowFilter)" />
          {/* Cup Stripes */}
          <path d="M 5 25 Q 27.5 30 50 25" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M 5 50 Q 27.5 55 50 50" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.6" />
        </g>

        {/* ----------------- BOOK STACK (Perspective Isometric) ----------------- */}
        <g id="books" filter="url(#shadowFilter)">
          {/* BOOK 6 (Bottom): BECE (Cyan) */}
          <g id="book-bece">
            <path d="M 60 380 L 380 380 L 400 355 L 80 355 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 380 380 L 400 355 L 400 380 L 380 405 Z" fill="#E2E8F0" />
            <rect x="60" y="375" width="320" height="30" rx="4" fill="url(#beceGrad)" stroke="#0E7490" strokeWidth="1.5" />
            <text x="90" y="396" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2">BECE JUNIOR EXAMS</text>
            <circle cx="355" cy="390" r="5" fill="#FFD200" />
          </g>

          {/* BOOK 5: IELTS (Purple) */}
          <g id="book-ielts">
            <path d="M 70 345 L 375 345 L 392 322 L 88 322 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 375 345 L 392 322 L 392 347 L 375 370 Z" fill="#E2E8F0" />
            <rect x="70" y="340" width="305" height="30" rx="4" fill="url(#ieltsGrad)" stroke="#6D28D9" strokeWidth="1.5" />
            <text x="100" y="361" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2">IELTS ACADEMIC</text>
            <circle cx="345" cy="355" r="5" fill="#FFD200" />
          </g>

          {/* BOOK 4: NABTEB (Amber / Gold) */}
          <g id="book-nabteb">
            <path d="M 80 310 L 370 310 L 385 288 L 95 288 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 370 310 L 385 288 L 385 313 L 370 335 Z" fill="#E2E8F0" />
            <rect x="80" y="305" width="290" height="30" rx="4" fill="url(#nabtebGrad)" stroke="#B45309" strokeWidth="1.5" />
            <text x="110" y="326" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2">NABTEB TECHNICAL</text>
            <circle cx="335" cy="320" r="5" fill="#FFFFFF" />
          </g>

          {/* BOOK 3: NECO (Blue) */}
          <g id="book-neco">
            <path d="M 90 275 L 365 275 L 378 254 L 102 254 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 365 275 L 378 254 L 378 279 L 365 300 Z" fill="#E2E8F0" />
            <rect x="90" y="270" width="275" height="30" rx="4" fill="url(#necoGrad)" stroke="#1D4ED8" strokeWidth="1.5" />
            <text x="120" y="291" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2">NECO SENIOR SEC</text>
            <circle cx="330" cy="285" r="5" fill="#FFD200" />
          </g>

          {/* BOOK 2: WAEC (Emerald Green) */}
          <g id="book-waec">
            <path d="M 100 240 L 360 240 L 370 220 L 110 220 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 360 240 L 370 220 L 370 245 L 360 265 Z" fill="#E2E8F0" />
            <rect x="100" y="235" width="260" height="30" rx="4" fill="url(#waecGrad)" stroke="#047857" strokeWidth="1.5" />
            <text x="130" y="256" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2">WAEC / SSCE MAY/JUNE</text>
            <circle cx="325" cy="250" r="5" fill="#FFD200" />
          </g>

          {/* BOOK 1 (Top): JAMB (Red / Coral) */}
          <g id="book-jamb">
            <path d="M 110 205 L 350 205 L 360 185 L 120 185 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 350 205 L 360 185 L 360 210 L 350 230 Z" fill="#E2E8F0" />
            <rect x="110" y="200" width="240" height="30" rx="4" fill="url(#jambGrad)" stroke="#B91C1C" strokeWidth="1.5" />
            <text x="140" y="221" fill="#FFFFFF" fontSize="17" fontWeight="900" letterSpacing="2.5">JAMB UTME CBT</text>
            <circle cx="315" cy="215" r="5" fill="#FFD200" />
          </g>
        </g>

        {/* ----------------- GRADUATION CAP (MORTARBOARD) ON TOP ----------------- */}
        <g id="graduation-cap" transform="translate(10, 0)">
          {/* Cap Skull Base */}
          <path
            d="M 175 165 C 175 190, 275 190, 275 165 Z"
            fill="#0F172A"
            stroke="#0B1320"
            strokeWidth="3"
          />

          {/* Mortarboard Diamond Top */}
          <polygon
            points="225,95 320,135 225,175 130,135"
            fill="url(#capGrad)"
            stroke="#334155"
            strokeWidth="2"
            filter="url(#shadowFilter)"
          />

          {/* Diamond Top Inner Trim Highlight */}
          <polygon
            points="225,102 308,135 225,168 142,135"
            fill="none"
            stroke="#475569"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Center Golden Button */}
          <ellipse cx="225" cy="135" rx="7" ry="5" fill="url(#goldGrad)" stroke="#B45309" strokeWidth="1.5" />

          {/* Hanging Golden Tassel */}
          <path
            d="M 225 135 Q 260 150 278 185"
            fill="none"
            stroke="#FFD200"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Tassel Fringe Bell & Threads */}
          <rect x="274" y="185" width="8" height="15" rx="3" fill="url(#goldGrad)" stroke="#B45309" strokeWidth="1" />
          <line x1="275" y1="200" x2="275" y2="215" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
          <line x1="278" y1="200" x2="278" y2="218" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
          <line x1="281" y1="200" x2="281" y2="215" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default HeroBookStack;
