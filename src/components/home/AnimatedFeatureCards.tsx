import React from 'react';

/**
 * High-End 3D Animated Illustration Badges for StudyPlug HomeScreen Feature Cards
 * 100% Offline, Vector Scalable, Lightweight, 60fps Smooth CSS Keyframe Animations.
 */

// ─── 1. Study Notes Animated Icon (Smart Open Book with Floating Pages & Sparkle) ───
export const AnimatedStudyNotesIcon: React.FC = () => (
  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-50 border border-emerald-200/80 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
    {/* Ambient Glow */}
    <div className="absolute inset-0 bg-radial-gradient from-emerald-400/20 to-transparent rounded-2xl animate-pulse" />
    
    {/* Floating Animated 3D Book SVG */}
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-300 group-hover:rotate-3"
      style={{ animation: 'subtleFloat 3.5s ease-in-out infinite' }}
    >
      {/* Book Cover Shadow */}
      <ellipse cx="32" cy="54" rx="20" ry="3.5" fill="#004D40" fillOpacity="0.15" />
      
      {/* Left Page Base (Emerald) */}
      <path
        d="M10 20C10 18 20 15 32 19V47C20 43 10 46 10 48V20Z"
        fill="url(#emeraldBookLeft)"
      />
      {/* Right Page Base (Deep Teal) */}
      <path
        d="M54 20C54 18 44 15 32 19V47C44 43 54 46 54 48V20Z"
        fill="url(#emeraldBookRight)"
      />

      {/* Pages Layer (Crisp White / Cream Paper) */}
      <path
        d="M12 21.5C12 20 21 17.5 32 20.5V45.5C21 42.5 12 45 12 46.5V21.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M52 21.5C52 20 43 17.5 32 20.5V45.5C43 42.5 52 45 52 46.5V21.5Z"
        fill="#F8FAFC"
      />

      {/* Text lines on Left Page */}
      <line x1="16" y1="26" x2="28" y2="24.5" stroke="#004D40" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="16" y1="31" x2="28" y2="29.5" stroke="#004D40" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.35" />
      <line x1="16" y1="36" x2="25" y2="34.8" stroke="#004D40" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.35" />

      {/* Text lines on Right Page */}
      <line x1="36" y1="24.5" x2="48" y2="26" stroke="#004D40" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="36" y1="29.5" x2="48" y2="31" stroke="#004D40" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.35" />
      <line x1="36" y1="34.8" x2="44" y2="36" stroke="#004D40" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.35" />

      {/* Golden Bookmark Ribbon */}
      <path
        d="M32 19V38L35 35L38 38V20C36 19.3 34 19 32 19Z"
        fill="#FFD600"
      />

      {/* Animated Twinkling Star */}
      <circle cx="48" cy="14" r="2.5" fill="#FFD600" className="animate-ping" style={{ animationDuration: '2.5s' }} />
      <path
        d="M48 9L49.2 12.8L53 14L49.2 15.2L48 19L46.8 15.2L43 14L46.8 12.8L48 9Z"
        fill="#FFCC00"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="emeraldBookLeft" x1="10" y1="18" x2="32" y2="47" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#004D40" />
        </linearGradient>
        <linearGradient id="emeraldBookRight" x1="54" y1="18" x2="32" y2="47" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// ─── 2. Practice Animated Icon (Pulsing Archery Target & Golden Dart Bolt) ───
export const AnimatedPracticeIcon: React.FC = () => (
  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-sky-100/90 via-cyan-50 to-blue-50 border border-sky-200/80 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
    {/* Expanding Concentric Pulse Wave */}
    <div
      className="absolute w-12 h-12 rounded-full border border-sky-400/40 animate-ping"
      style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
    />

    {/* 3D Target SVG */}
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
      style={{ animation: 'subtleFloat 4s ease-in-out infinite' }}
    >
      {/* Ground Shadow */}
      <ellipse cx="32" cy="55" rx="18" ry="3.5" fill="#0284C7" fillOpacity="0.15" />

      {/* Outer Ring (Deep Ocean Blue) */}
      <circle cx="32" cy="32" r="23" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
      {/* Middle Ring (Cyan) */}
      <circle cx="32" cy="32" r="16.5" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
      {/* Inner Ring (White) */}
      <circle cx="32" cy="32" r="10.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.8" />
      {/* Bullseye Center (Vibrant Coral Red / Crimson) */}
      <circle cx="32" cy="32" r="5.5" fill="#EF4444" />
      <circle cx="32" cy="32" r="2.5" fill="#FEE2E2" />

      {/* Crosshairs */}
      <line x1="32" y1="6" x2="32" y2="12" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="52" x2="32" y2="58" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="32" x2="12" y2="32" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <line x1="52" y1="32" x2="58" y2="32" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />

      {/* Flying Dart / Golden Arrow striking target */}
      <path
        d="M48 16L34 30L32 32L34 34L48 20L51 23L52 13L42 14L45 17L48 16Z"
        fill="url(#dartGoldGradient)"
        className="animate-pulse"
      />

      <defs>
        <linearGradient id="dartGoldGradient" x1="32" y1="13" x2="52" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// ─── 3. Mock Exams Animated Icon (Gleaming 3D Golden Trophy Cup & Timer Dial) ───
export const AnimatedMockExamsIcon: React.FC = () => (
  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-100/90 via-fuchsia-50 to-indigo-50 border border-purple-200/80 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
    {/* Radial Violet Glow */}
    <div className="absolute inset-0 bg-radial-gradient from-purple-400/20 to-transparent rounded-2xl animate-pulse" />

    {/* 3D Trophy Cup & Timer SVG */}
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-300 group-hover:rotate-[-3deg]"
      style={{ animation: 'subtleFloat 3s ease-in-out infinite' }}
    >
      {/* Trophy Shadow */}
      <ellipse cx="32" cy="56" rx="16" ry="3.5" fill="#7E3FC7" fillOpacity="0.15" />

      {/* Pedestal Base */}
      <path d="M22 52H42V56H22V52Z" fill="#7E22CE" rx="1" />
      <path d="M25 48H39L41 52H23L25 48Z" fill="#9333EA" />
      <path d="M29 40H35V48H29V40Z" fill="#EAB308" />

      {/* Trophy Handles */}
      <path
        d="M20 22C14 22 13 32 21 34"
        stroke="#EAB308"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M44 22C50 22 51 32 43 34"
        stroke="#EAB308"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Main Trophy Cup (Polished Gold Gradient) */}
      <path
        d="M19 16H45V27C45 35 39 41 32 41C25 41 19 35 19 27V16Z"
        fill="url(#goldTrophyGradient)"
      />

      {/* Cup Rim Highlight */}
      <ellipse cx="32" cy="16" rx="13" ry="2.5" fill="#FEF08A" />

      {/* Trophy Star Emblem */}
      <path
        d="M32 23L33.5 26.5L37.5 27L34.5 29.8L35.5 34L32 31.8L28.5 34L29.5 29.8L26.5 27L30.5 26.5L32 23Z"
        fill="#FFFFFF"
        className="animate-pulse"
      />

      {/* CBT Clock Badge Overlay on top-right */}
      <circle cx="46" cy="15" r="7.5" fill="#FFFFFF" stroke="#7E3FC7" strokeWidth="1.8" />
      <circle cx="46" cy="15" r="6" fill="#7E3FC7" />
      {/* Clock Hands ticking */}
      <line x1="46" y1="15" x2="46" y2="11.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="46" y1="15" x2="49" y2="15" stroke="#FFD600" strokeWidth="1.4" strokeLinecap="round" />

      <defs>
        <linearGradient id="goldTrophyGradient" x1="19" y1="16" x2="45" y2="41" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FACC15" />
          <stop offset="0.5" stopColor="#EAB308" />
          <stop offset="1" stopColor="#CA8A04" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// ─── 4. Motivation Animated Icon (Radiant Glowing Lightbulb & Energy Spark) ───
export const AnimatedMotivationIcon: React.FC = () => (
  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-100/90 via-orange-50 to-yellow-50 border border-amber-200/80 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
    {/* Warm Amber Glowing Halo */}
    <div className="absolute inset-0 bg-radial-gradient from-amber-400/30 to-transparent rounded-2xl animate-pulse" />

    {/* 3D Lightbulb & Sparks SVG */}
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
      style={{ animation: 'subtleFloat 3.2s ease-in-out infinite' }}
    >
      {/* Ground Shadow */}
      <ellipse cx="32" cy="56" rx="14" ry="3" fill="#D97706" fillOpacity="0.15" />

      {/* Light Rays Radiating */}
      <line x1="32" y1="6" x2="32" y2="10" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
      <line x1="16" y1="12" x2="19" y2="15" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
      <line x1="48" y1="12" x2="45" y2="15" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
      <line x1="10" y1="26" x2="14" y2="26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
      <line x1="54" y1="26" x2="50" y2="26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />

      {/* Glass Bulb Head (Bright Amber / Lemon Glow) */}
      <path
        d="M32 12C23.7 12 17 18.7 17 27C17 32.5 20.3 37.2 24.5 40V44C24.5 45.1 25.4 46 26.5 46H37.5C38.6 46 39.5 45.1 39.5 44V40C43.7 37.2 47 32.5 47 27C47 18.7 40.3 12 32 12Z"
        fill="url(#bulbGlowGradient)"
        stroke="#F59E0B"
        strokeWidth="1.8"
      />

      {/* Filament Element (Vibrant Orange Fire) */}
      <path
        d="M28 29C28 25 30 22 32 22C34 22 36 25 36 29"
        stroke="#EA580C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="24" r="3" fill="#FEF08A" />

      {/* Screw Base & Contact Point */}
      <rect x="26.5" y="46" width="11" height="2.5" rx="1" fill="#78716C" />
      <rect x="27.5" y="49" width="9" height="2.5" rx="1" fill="#A8A29E" />
      <path d="M29 52C29 53.5 30.5 54.5 32 54.5C33.5 54.5 35 53.5 35 52H29Z" fill="#44403C" />

      <defs>
        <linearGradient id="bulbGlowGradient" x1="32" y1="12" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF08A" />
          <stop offset="0.6" stopColor="#FDE047" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
