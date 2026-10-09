/**
 * Humanized High-Definition Subject Thumbnails with African Student Characters
 * and the Bold Subject Name clearly written on every card.
 * Rendered as self-contained, optimized SVG data URIs.
 */

const svgToDataUri = (svgString: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
};

// 1. MATHEMATICS - Humanized Student with Calculator, Geometry Compass & Bold Name
export const THUMBNAIL_MATHEMATICS = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="math_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#053324"/>
      <stop offset="50%" stop-color="#0E5E44"/>
      <stop offset="100%" stop-color="#031F16"/>
    </linearGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
    <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="100%" stop-color="#001830"/>
    </linearGradient>
    <linearGradient id="gold_banner" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#FF9900"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="280" height="180" rx="18" fill="url(#math_bg)"/>

  <!-- Blackboard Grid & Math Equations Watermark -->
  <g stroke="#34D399" stroke-width="0.75" stroke-opacity="0.18" fill="none">
    <path d="M0 35 H280 M0 70 H280 M0 105 H280 M0 140 H280 M35 0 V180 M70 0 V180 M105 0 V180 M140 0 V180 M175 0 V180 M210 0 V180 M245 0 V180"/>
    <circle cx="215" cy="55" r="30" stroke-dasharray="3,3"/>
    <path d="M190 85 Q 215 25, 245 65" stroke-width="1.8" stroke="#FFCC00" stroke-opacity="0.4"/>
  </g>
  <text x="175" y="30" font-family="system-ui, serif" font-size="12" fill="#FFCC00" fill-opacity="0.35" font-style="italic">y = sin(x) + cos(2x)</text>
  <text x="180" y="110" font-family="system-ui, serif" font-size="12" fill="#34D399" fill-opacity="0.35">∫ eˣ dx = eˣ</text>

  <!-- ── HUMAN STUDENT CHARACTER (African Student Solving Math) ── -->
  <g transform="translate(18, 12)" filter="url(#shadow)">
    <!-- Student Body / Uniform Blazer -->
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="url(#shirt)"/>
    <!-- White Collared Shirt & Gold Tie -->
    <polygon points="50,92 42,106 58,106" fill="#FFFFFF"/>
    <polygon points="46,106 54,106 52,126 48,126" fill="#FACC15"/>

    <!-- Head & Neck -->
    <rect x="42" y="80" width="16" height="15" fill="url(#skin)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin)"/>

    <!-- Hair (Neat African fade haircut) -->
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#1C1917"/>

    <!-- Face Details: Eyes, Eyebrows & Smile -->
    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#1C1917"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#1C1917"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <!-- Stylish Round Glasses -->
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <!-- Smiling Mouth -->
    <path d="M 43 67 Q 50 75 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>

    <!-- Hand holding Golden Geometry Compass -->
    <circle cx="82" cy="85" r="7" fill="url(#skin)"/>
    <path d="M 82 85 L 75 60 L 92 88" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- ── 3D CALCULATOR & DESK APPARATUS (Right Side) ── -->
  <g transform="translate(145, 38)" filter="url(#shadow)">
    <!-- Scientific Calculator -->
    <rect x="0" y="0" width="55" height="78" rx="8" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
    <rect x="6" y="8" width="43" height="18" rx="3" fill="#38BDF8"/>
    <text x="10" y="21" font-family="monospace" font-size="11" fill="#042F2E" font-weight="bold">π=3.1415</text>
    <!-- Buttons Grid -->
    <rect x="6" y="32" width="10" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="22" y="32" width="10" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="38" y="32" width="10" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="6" y="44" width="10" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="22" y="44" width="10" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="38" y="44" width="10" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="6" y="56" width="10" height="7" rx="2" fill="#F59E0B"/>
    <rect x="22" y="56" width="10" height="7" rx="2" fill="#34D399"/>
    <rect x="38" y="56" width="10" height="7" rx="2" fill="#EF4444"/>

    <!-- Transparent Drafting Protractor -->
    <path d="M 60 70 A 30 30 0 0 1 120 70 Z" fill="#FEF08A" fill-opacity="0.75" stroke="#EAB308" stroke-width="1.5"/>
    <circle cx="90" cy="70" r="3" fill="#EAB308"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)" filter="url(#shadow)">
    <rect width="252" height="32" rx="10" fill="#031F16" stroke="url(#gold_banner)" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#FFD700" text-anchor="middle" letter-spacing="2">MATHEMATICS</text>
  </g>
</svg>
`);

// 2. ENGLISH LANGUAGE - Humanized Student Reading Books & Bold Name
export const THUMBNAIL_ENGLISH = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="eng_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A0B1A"/>
      <stop offset="50%" stop-color="#881337"/>
      <stop offset="100%" stop-color="#2E040E"/>
    </linearGradient>
    <linearGradient id="skin_eng" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
    <linearGradient id="gold_banner" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#FF9900"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#eng_bg)"/>

  <!-- Library Bookshelf & Lexicon Watermark -->
  <g stroke="#FDA4AF" stroke-width="0.8" stroke-opacity="0.2" fill="none">
    <rect x="180" y="15" width="85" height="110" rx="4"/>
    <line x1="180" y1="50" x2="265" y2="50"/>
    <line x1="180" y1="85" x2="265" y2="85"/>
  </g>
  <text x="185" y="40" font-family="Georgia, serif" font-size="12" fill="#FFE4E6" fill-opacity="0.3" font-style="italic">Concord &amp; Lexis</text>
  <text x="185" y="75" font-family="Georgia, serif" font-size="12" fill="#FFE4E6" fill-opacity="0.3" font-style="italic">Oral English</text>

  <!-- ── HUMAN STUDENT CHARACTER (African Student Reading with Quill) ── -->
  <g transform="translate(18, 12)" filter="url(#shadow)">
    <!-- School Uniform Blazer (Burgundy/Crimson) -->
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#9F1239"/>
    <!-- Yellow Shirt Collar -->
    <polygon points="50,92 42,106 58,106" fill="#FEF08A"/>

    <!-- Head & Neck -->
    <rect x="42" y="80" width="16" height="15" fill="url(#skin_eng)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_eng)"/>
    <!-- Braided / Neat Natural Hair -->
    <path d="M 28 52 C 28 30, 72 30, 72 52 C 70 36, 30 36, 28 52 Z" fill="#18181B"/>

    <!-- Face Details -->
    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <!-- Reading Glasses -->
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── OPEN BOOK & STACK OF TEXTBOOKS (Right Side) ── -->
  <g transform="translate(145, 45)" filter="url(#shadow)">
    <!-- Stack of Books -->
    <rect x="45" y="35" width="65" height="15" rx="3" fill="#0284C7" stroke="#38BDF8" stroke-width="1"/>
    <rect x="40" y="20" width="68" height="15" rx="3" fill="#16A34A" stroke="#4ADE80" stroke-width="1"/>
    <rect x="35" y="5" width="70" height="15" rx="3" fill="#D97706" stroke="#FCD34D" stroke-width="1"/>

    <!-- Open Book in Foreground -->
    <path d="M 25 70 Q 0 60 -30 68 L -30 30 Q 0 22 25 30 Z" fill="#FFFBEB" stroke="#E2E8F0" stroke-width="1.5"/>
    <path d="M 25 70 Q 50 60 80 68 L 80 30 Q 50 22 25 30 Z" fill="#FEF3C7" stroke="#E2E8F0" stroke-width="1.5"/>
    <line x1="-22" y1="40" x2="10" y2="40" stroke="#9F1239" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="-22" y1="48" x2="5" y2="48" stroke="#9F1239" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="-22" y1="56" x2="10" y2="56" stroke="#9F1239" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="38" y1="40" x2="70" y2="40" stroke="#9F1239" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="38" y1="48" x2="65" y2="48" stroke="#9F1239" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="38" y1="56" x2="70" y2="56" stroke="#9F1239" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Golden Feather Quill Pen -->
    <path d="M 25 65 Q 40 40 50 10 Q 38 18 30 35 Z" fill="#F59E0B"/>
    <polygon points="25,65 22,72 28,68" fill="#FFF"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)" filter="url(#shadow)">
    <rect width="252" height="32" rx="10" fill="#2E040E" stroke="url(#gold_banner)" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#FFD700" text-anchor="middle" letter-spacing="2">USE OF ENGLISH</text>
  </g>
</svg>
`);

// 3. PHYSICS - Humanized Student in Lab with Laser Prism & Bold Name
export const THUMBNAIL_PHYSICS = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="phys_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1D40"/>
      <stop offset="50%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#050E24"/>
    </linearGradient>
    <linearGradient id="skin_phys" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
    <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="25%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#10B981"/>
      <stop offset="75%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <filter id="phys_glow">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.9"/>
    </filter>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#phys_bg)"/>

  <!-- Wave Equation & Atomic Orbitals Watermark -->
  <text x="175" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#38BDF8" fill-opacity="0.35">E = mc² • v = fλ</text>
  <ellipse cx="220" cy="70" rx="45" ry="16" fill="none" stroke="#60A5FA" stroke-width="1" stroke-opacity="0.3" transform="rotate(30 220 70)"/>
  <ellipse cx="220" cy="70" rx="45" ry="16" fill="none" stroke="#60A5FA" stroke-width="1" stroke-opacity="0.3" transform="rotate(-30 220 70)"/>

  <!-- ── HUMAN STUDENT CHARACTER (Student in Lab Coat) ── -->
  <g transform="translate(18, 12)">
    <!-- White Lab Coat over Blue Shirt -->
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>
    <!-- Blue Tie -->
    <polygon points="50,92 45,106 55,106" fill="#0284C7"/>
    <polygon points="47,106 53,106 52,126 48,126" fill="#0369A1"/>

    <!-- Head & Neck -->
    <rect x="42" y="80" width="16" height="15" fill="url(#skin_phys)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_phys)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#1E293B"/>

    <!-- Face Details & Safety Glasses -->
    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#1E293B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#1E293B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <!-- Safety Goggles -->
    <rect x="30" y="46" width="40" height="15" rx="5" fill="#38BDF8" fill-opacity="0.4" stroke="#0284C7" stroke-width="1.5"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── OPTICAL PRISM WITH GLOWING RAINBOW LIGHT BEAM ── -->
  <g transform="translate(145, 45)">
    <!-- Laser Emitter on Left -->
    <rect x="-10" y="30" width="22" height="14" rx="2" fill="#334155" stroke="#94A3B8" stroke-width="1"/>
    <!-- White Laser Beam -->
    <line x1="12" y1="37" x2="45" y2="37" stroke="#FFFFFF" stroke-width="2.5" filter="url(#phys_glow)"/>

    <!-- Triangular Optical Glass Prism -->
    <polygon points="45,15 70,60 20,60" fill="#E0F2FE" fill-opacity="0.75" stroke="#38BDF8" stroke-width="2"/>

    <!-- Refracted Dispersed Rainbow Spectrum -->
    <polygon points="48,37 125,12 125,55 58,45" fill="url(#rainbow)" opacity="0.85" filter="url(#phys_glow)"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#050E24" stroke="#38BDF8" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#38BDF8" text-anchor="middle" letter-spacing="2">PHYSICS</text>
  </g>
</svg>
`);

// 4. CHEMISTRY - Humanized Student in Lab with Bubbling Flask & Bold Name
export const THUMBNAIL_CHEMISTRY = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="chem_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2E0854"/>
      <stop offset="50%" stop-color="#581C87"/>
      <stop offset="100%" stop-color="#1E0538"/>
    </linearGradient>
    <linearGradient id="skin_chem" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
    <linearGradient id="potion" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A855F7"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
    <filter id="chem_glow">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#C084FC" flood-opacity="0.9"/>
    </filter>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#chem_bg)"/>

  <!-- Benzene Ring Watermark -->
  <polygon points="215,20 230,12 245,20 245,38 230,46 215,38" fill="none" stroke="#C084FC" stroke-width="1.5" stroke-opacity="0.3"/>
  <circle cx="230" cy="29" r="8" fill="none" stroke="#C084FC" stroke-width="1" stroke-opacity="0.3"/>
  <text x="175" y="65" font-family="system-ui, sans-serif" font-size="12" fill="#C084FC" fill-opacity="0.3">2H₂ + O₂ → 2H₂O</text>

  <!-- ── HUMAN STUDENT CHARACTER (Student in Lab holding Flask) ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#F8FAFC" stroke="#C084FC" stroke-width="1"/>
    <polygon points="50,92 45,106 55,106" fill="#7E22CE"/>

    <!-- Head & Neck -->
    <rect x="42" y="80" width="16" height="15" fill="url(#skin_chem)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_chem)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <!-- Face & Safety Goggles -->
    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <rect x="30" y="46" width="40" height="15" rx="5" fill="#E879F9" fill-opacity="0.4" stroke="#A855F7" stroke-width="1.5"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── BUBBLING CHEMICAL FLASKS & TEST TUBES ── -->
  <g transform="translate(145, 45)">
    <!-- Conical Flask -->
    <path d="M 22 25 L 34 25 L 34 40 L 52 75 Q 54 80 46 80 L 10 80 Q 2 80 4 75 L 22 40 Z" fill="#1E1B4B" stroke="#E9D5FF" stroke-width="2"/>
    <!-- Liquid in Flask -->
    <path d="M 9 74 Q 28 66 47 74 L 46 78 L 10 78 Z" fill="url(#potion)" filter="url(#chem_glow)"/>
    <!-- Rising Bubbles -->
    <circle cx="28" cy="62" r="3.5" fill="#FFF" opacity="0.9"/>
    <circle cx="36" cy="48" r="2.5" fill="#F472B6" opacity="0.8"/>
    <circle cx="26" cy="32" r="3" fill="#C084FC" opacity="0.9"/>
    <circle cx="32" cy="18" r="2" fill="#FFF" opacity="0.9"/>

    <!-- Test Tube Rack with Colored Liquids -->
    <rect x="65" y="38" width="50" height="42" rx="4" fill="#334155" stroke="#64748B" stroke-width="1.5"/>
    <!-- Tube 1 (Cyan) -->
    <rect x="70" y="24" width="8" height="45" rx="4" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
    <rect x="71" y="42" width="6" height="25" rx="3" fill="#38BDF8"/>
    <!-- Tube 2 (Amber) -->
    <rect x="85" y="24" width="8" height="45" rx="4" fill="#0F172A" stroke="#FBBF24" stroke-width="1.5"/>
    <rect x="86" y="36" width="6" height="31" rx="3" fill="#F59E0B"/>
    <!-- Tube 3 (Green) -->
    <rect x="100" y="24" width="8" height="45" rx="4" fill="#0F172A" stroke="#4ADE80" stroke-width="1.5"/>
    <rect x="101" y="48" width="6" height="19" rx="3" fill="#22C55E"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#1E0538" stroke="#C084FC" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#E879F9" text-anchor="middle" letter-spacing="2">CHEMISTRY</text>
  </g>
</svg>
`);

// 5. BIOLOGY - Humanized Student with Microscope, DNA Helix & Bold Name
export const THUMBNAIL_BIOLOGY = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="bio_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#001830"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#001028"/>
    </linearGradient>
    <linearGradient id="skin_bio" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
    <linearGradient id="gold_banner" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#FF9900"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#bio_bg)"/>

  <!-- DNA Spiral Watermark -->
  <g stroke="#34D399" stroke-width="1.2" stroke-opacity="0.3" fill="none">
    <path d="M 210 15 Q 230 40 210 65 Q 190 90 210 115"/>
    <path d="M 230 15 Q 210 40 230 65 Q 250 90 230 115"/>
    <line x1="210" y1="28" x2="230" y2="28"/>
    <line x1="205" y1="52" x2="235" y2="52"/>
    <line x1="210" y1="78" x2="230" y2="78"/>
    <line x1="205" y1="102" x2="235" y2="102"/>
  </g>

  <!-- ── HUMAN STUDENT CHARACTER (Student Looking into Microscope) ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#F8FAFC" stroke="#059669" stroke-width="1"/>
    <polygon points="50,92 45,106 55,106" fill="#047857"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_bio)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_bio)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── PRECISION OPTICAL MICROSCOPE (Right Side) ── -->
  <g transform="translate(145, 35)">
    <!-- Base -->
    <rect x="15" y="70" width="50" height="12" rx="4" fill="#0F172A" stroke="#34D399" stroke-width="1.5"/>
    <rect x="22" y="65" width="36" height="6" fill="#1E293B"/>
    <!-- Curved Arm -->
    <path d="M 52 65 Q 70 40 54 18 L 40 18" stroke="#E2E8F0" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- Eyepiece Tube -->
    <rect x="20" y="2" width="12" height="32" rx="2" fill="#F8FAFC" transform="rotate(22 26 18)" stroke="#059669" stroke-width="1.5"/>
    <rect x="18" y="-5" width="16" height="8" rx="2" fill="#F59E0B"/>
    <!-- Stage with Glass Slide -->
    <line x1="20" y1="52" x2="56" y2="52" stroke="#34D399" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="38" cy="52" r="4.5" fill="#38BDF8"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#001028" stroke="url(#gold_banner)" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#FFD700" text-anchor="middle" letter-spacing="2">BIOLOGY</text>
  </g>
</svg>
`);

// 6. ECONOMICS - Humanized Student with Market Chart, Naira Coin & Bold Name
export const THUMBNAIL_ECONOMICS = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="econ_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#451A03"/>
      <stop offset="50%" stop-color="#78350F"/>
      <stop offset="100%" stop-color="#270F02"/>
    </linearGradient>
    <linearGradient id="skin_econ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
    <linearGradient id="gold_coin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#EAB308"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#econ_bg)"/>

  <!-- Supply & Demand Curve Watermark -->
  <path d="M 160 85 Q 210 20 260 85" stroke="#FDE047" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
  <text x="175" y="30" font-family="sans-serif" font-size="12" fill="#FDE047" fill-opacity="0.35">Supply &amp; Demand</text>

  <!-- ── HUMAN STUDENT CHARACTER (Student in Business Attire) ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#1E293B"/>
    <polygon points="50,92 42,106 58,106" fill="#FFFFFF"/>
    <polygon points="46,106 54,106 52,126 48,126" fill="#EAB308"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_econ)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_econ)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── 3D ECONOMIC GROWTH BARS, ARROW & NAIRA COIN ── -->
  <g transform="translate(145, 45)">
    <!-- 3D Bar Columns -->
    <rect x="0" y="45" width="15" height="35" rx="3" fill="#A16207" stroke="#FDE047" stroke-width="1"/>
    <rect x="20" y="30" width="15" height="50" rx="3" fill="#CA8A04" stroke="#FDE047" stroke-width="1"/>
    <rect x="40" y="15" width="15" height="65" rx="3" fill="#EAB308" stroke="#FFF" stroke-width="1.5"/>
    <rect x="60" y="-2" width="15" height="82" rx="3" fill="#FACC15" stroke="#FFF" stroke-width="1.5"/>

    <!-- Green Rising Profit Arrow -->
    <path d="M -5 55 L 20 38 L 40 22 L 72 -8" stroke="#22C55E" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <polygon points="72,-16 82,-4 66,-2" fill="#22C55E"/>

    <!-- Golden Nigerian Naira Coin ₦ -->
    <circle cx="85" cy="45" r="16" fill="url(#gold_coin)" stroke="#FFF" stroke-width="2"/>
    <text x="85" y="52" font-family="sans-serif" font-weight="900" font-size="16" fill="#713F12" text-anchor="middle">₦</text>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#270F02" stroke="#FACC15" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#FFD700" text-anchor="middle" letter-spacing="2">ECONOMICS</text>
  </g>
</svg>
`);

// 7. GOVERNMENT - Humanized Student Scholar with Constitution & Bold Name
export const THUMBNAIL_GOVERNMENT = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="gov_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#042F2E"/>
      <stop offset="50%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#021C1B"/>
    </linearGradient>
    <linearGradient id="skin_gov" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#gov_bg)"/>

  <!-- Pillars of Justice Watermark -->
  <g stroke="#2DD4BF" stroke-width="1" stroke-opacity="0.3" fill="none">
    <polygon points="180,30 220,12 260,30"/>
    <line x1="185" y1="30" x2="185" y2="85"/>
    <line x1="205" y1="30" x2="205" y2="85"/>
    <line x1="235" y1="30" x2="235" y2="85"/>
    <line x1="255" y1="30" x2="255" y2="85"/>
    <rect x="175" y="85" width="90" height="8" rx="2"/>
  </g>

  <!-- ── HUMAN STUDENT CHARACTER (Student Scholar holding Constitution) ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#0D9488"/>
    <polygon points="50,92 42,106 58,106" fill="#FFFFFF"/>
    <polygon points="46,106 54,106 52,126 48,126" fill="#14B8A6"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_gov)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_gov)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── CONSTITUTION BOOK & SCALES OF JUSTICE ── -->
  <g transform="translate(150, 40)">
    <!-- Constitution Book -->
    <rect x="0" y="5" width="45" height="60" rx="4" fill="#042F2E" stroke="#5EEAD4" stroke-width="2"/>
    <rect x="6" y="10" width="33" height="16" rx="2" fill="#0F766E"/>
    <text x="22" y="22" font-family="sans-serif" font-size="7" fill="#FFD700" font-weight="900" text-anchor="middle">LAW</text>
    <line x1="6" y1="34" x2="39" y2="34" stroke="#FFF" stroke-width="1"/>
    <line x1="6" y1="42" x2="39" y2="42" stroke="#FFF" stroke-width="1"/>
    <line x1="6" y1="50" x2="28" y2="50" stroke="#FFF" stroke-width="1"/>

    <!-- Scales of Justice Emblem -->
    <circle cx="75" cy="20" r="12" fill="#0F766E" stroke="#FFD700" stroke-width="1.5"/>
    <line x1="66" y1="20" x2="84" y2="20" stroke="#FFD700" stroke-width="2"/>
    <line x1="75" y1="12" x2="75" y2="28" stroke="#FFD700" stroke-width="1.5"/>
    <polygon points="63,28 69,28 66,22" fill="#FFD700"/>
    <polygon points="81,28 87,28 84,22" fill="#FFD700"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#021C1B" stroke="#2DD4BF" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#5EEAD4" text-anchor="middle" letter-spacing="2">GOVERNMENT</text>
  </g>
</svg>
`);

// 8. LITERATURE IN ENGLISH - Humanized Student Actor with Drama Masks & Bold Name
export const THUMBNAIL_LITERATURE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="lit_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A044E"/>
      <stop offset="50%" stop-color="#86198F"/>
      <stop offset="100%" stop-color="#240228"/>
    </linearGradient>
    <linearGradient id="skin_lit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#lit_bg)"/>

  <!-- ── HUMAN STUDENT CHARACTER ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#A21CAF"/>
    <polygon points="50,92 42,106 58,106" fill="#FDF4FF"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_lit)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_lit)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── THEATRICAL DRAMA MASKS (COMEDY & TRAGEDY) ── -->
  <g transform="translate(150, 40)">
    <!-- Comedy Mask (Left) -->
    <g transform="translate(0, 0)">
      <ellipse rx="20" ry="24" fill="#FDF4FF" stroke="#C084FC" stroke-width="2"/>
      <ellipse cx="-6" cy="-6" rx="3" ry="3.5" fill="#581C87"/>
      <ellipse cx="6" cy="-6" rx="3" ry="3.5" fill="#581C87"/>
      <path d="M -10 4 Q 0 16 10 4" stroke="#581C87" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </g>
    <!-- Tragedy Mask (Right) -->
    <g transform="translate(38, 12)">
      <ellipse rx="20" ry="24" fill="#F5D0FE" stroke="#A855F7" stroke-width="2"/>
      <ellipse cx="-6" cy="-6" rx="3" ry="3.5" fill="#581C87"/>
      <ellipse cx="6" cy="-6" rx="3" ry="3.5" fill="#581C87"/>
      <path d="M -10 10 Q 0 0 10 10" stroke="#581C87" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </g>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#240228" stroke="#E879F9" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#F5D0FE" text-anchor="middle" letter-spacing="2">LITERATURE</text>
  </g>
</svg>
`);

// 9. AGRICULTURAL SCIENCE - Humanized Student with Sprouting Crops & Bold Name
export const THUMBNAIL_AGRICULTURE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="agric_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#143407"/>
      <stop offset="50%" stop-color="#286012"/>
      <stop offset="100%" stop-color="#0B1E04"/>
    </linearGradient>
    <linearGradient id="skin_agric" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#agric_bg)"/>

  <!-- ── HUMAN STUDENT CHARACTER ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#15803D"/>
    <polygon points="50,92 42,106 58,106" fill="#FEF08A"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_agric)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_agric)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── SPROUTING CROPS & SOIL (Right Side) ── -->
  <g transform="translate(155, 45)">
    <ellipse cx="40" cy="40" rx="35" ry="10" fill="#3E2723" stroke="#8D6E63" stroke-width="1.5"/>
    <path d="M 40 40 Q 40 10 36 -10" stroke="#86EFAC" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M 38 6 Q 16 -6 18 16 Q 30 20 38 6" fill="#22C55E" stroke="#86EFAC" stroke-width="1.5"/>
    <path d="M 37 -2 Q 60 -14 56 10 Q 45 15 37 -2" fill="#16A34A" stroke="#86EFAC" stroke-width="1.5"/>
    <circle cx="36" cy="-12" r="4.5" fill="#FACC15"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#0B1E04" stroke="#86EFAC" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#86EFAC" text-anchor="middle" letter-spacing="2">AGRIC SCIENCE</text>
  </g>
</svg>
`);

// 10. COMMERCE & ACCOUNTING - Humanized Student with Ledger & Bold Name
export const THUMBNAIL_COMMERCE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="comm_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="skin_comm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#comm_bg)"/>

  <!-- ── HUMAN STUDENT CHARACTER ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#0284C7"/>
    <polygon points="50,92 42,106 58,106" fill="#FFFFFF"/>
    <polygon points="46,106 54,106 52,126 48,126" fill="#FACC15"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_comm)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_comm)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ── FINANCIAL LEDGER & CALCULATOR ── -->
  <g transform="translate(150, 40)">
    <rect x="0" y="5" width="45" height="55" rx="4" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/>
    <line x1="8" y1="16" x2="37" y2="16" stroke="#0284C7" stroke-width="2"/>
    <line x1="8" y1="26" x2="37" y2="26" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="8" y1="36" x2="37" y2="36" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="8" y1="46" x2="37" y2="46" stroke="#16A34A" stroke-width="2"/>

    <rect x="35" y="20" width="30" height="42" rx="4" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
    <rect x="39" y="24" width="22" height="9" rx="2" fill="#0284C7"/>
    <circle cx="44" cy="38" r="2" fill="#94A3B8"/>
    <circle cx="50" cy="38" r="2" fill="#94A3B8"/>
    <circle cx="56" cy="38" r="2" fill="#94A3B8"/>
    <circle cx="44" cy="45" r="2" fill="#94A3B8"/>
    <circle cx="50" cy="45" r="2" fill="#94A3B8"/>
    <circle cx="56" cy="45" r="2" fill="#38BDF8"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#38BDF8" text-anchor="middle" letter-spacing="2">COMMERCE</text>
  </g>
</svg>
`);

// 11. GENERAL / DEFAULT - Humanized Student Scholar & Bold Name
export const THUMBNAIL_GENERAL = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
  <defs>
    <linearGradient id="gen_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#001830"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#001028"/>
    </linearGradient>
    <linearGradient id="skin_gen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D5524"/>
      <stop offset="100%" stop-color="#5C3317"/>
    </linearGradient>
  </defs>

  <rect width="280" height="180" rx="18" fill="url(#gen_bg)"/>

  <!-- ── HUMAN STUDENT CHARACTER ── -->
  <g transform="translate(18, 12)">
    <path d="M 15 130 C 15 90, 85 90, 85 130 Z" fill="#047857"/>
    <polygon points="50,92 42,106 58,106" fill="#FFFFFF"/>
    <polygon points="46,106 54,106 52,126 48,126" fill="#FFD700"/>

    <rect x="42" y="80" width="16" height="15" fill="url(#skin_gen)"/>
    <ellipse cx="50" cy="56" rx="22" ry="26" fill="url(#skin_gen)"/>
    <path d="M 28 54 C 28 32, 72 32, 72 54 C 70 38, 30 38, 28 54 Z" fill="#18181B"/>

    <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#18181B"/>
    <circle cx="43" cy="53" r="1" fill="#FFF"/>
    <circle cx="59" cy="53" r="1" fill="#FFF"/>
    <circle cx="42" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <circle cx="58" cy="54" r="8" fill="none" stroke="#FDE047" stroke-width="1.8"/>
    <line x1="50" y1="54" x2="50" y2="54" stroke="#FDE047" stroke-width="2"/>
    <path d="M 43 67 Q 50 74 57 67" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- Graduation Cap & Certificate -->
  <g transform="translate(150, 45)">
    <polygon points="35,10 75,25 35,40 -5,25" fill="#1E293B" stroke="#FFD700" stroke-width="1.5"/>
    <rect x="15" y="35" width="40" height="15" rx="3" fill="#047857" stroke="#34D399" stroke-width="1.5"/>
    <circle cx="35" cy="25" r="4" fill="#FFD700"/>
    <path d="M 35 25 Q 60 32 58 48" stroke="#FFD700" stroke-width="2" fill="none"/>
  </g>

  <!-- ── BOLD SUBJECT NAME BANNER (Written Clearly on Card) ── -->
  <g transform="translate(14, 138)">
    <rect width="252" height="32" rx="10" fill="#001028" stroke="#34D399" stroke-width="2"/>
    <text x="126" y="21" font-family="sans-serif" font-weight="900" font-size="15" fill="#34D399" text-anchor="middle" letter-spacing="2">STUDY PLUG</text>
  </g>
</svg>
`);

/**
 * Returns the humanized image thumbnail with student character and bold subject title.
 */
export const getSubjectThumbnail = (subjectName: string): string => {
  const norm = (subjectName || '').toLowerCase().trim();

  if (norm.includes('math') || norm.includes('further')) {
    return THUMBNAIL_MATHEMATICS;
  }
  if (norm.includes('english') || norm.includes('lexis') || norm.includes('oral') || norm.includes('use of english')) {
    return THUMBNAIL_ENGLISH;
  }
  if (norm.includes('physic')) {
    return THUMBNAIL_PHYSICS;
  }
  if (norm.includes('chem')) {
    return THUMBNAIL_CHEMISTRY;
  }
  if (norm.includes('bio')) {
    return THUMBNAIL_BIOLOGY;
  }
  if (norm.includes('econ')) {
    return THUMBNAIL_ECONOMICS;
  }
  if (norm.includes('gov') || norm.includes('civic') || norm.includes('politic')) {
    return THUMBNAIL_GOVERNMENT;
  }
  if (norm.includes('lit')) {
    return THUMBNAIL_LITERATURE;
  }
  if (norm.includes('agric')) {
    return THUMBNAIL_AGRICULTURE;
  }
  if (norm.includes('comm') || norm.includes('acc') || norm.includes('market') || norm.includes('finan') || norm.includes('bus')) {
    return THUMBNAIL_COMMERCE;
  }

  return THUMBNAIL_GENERAL;
};
