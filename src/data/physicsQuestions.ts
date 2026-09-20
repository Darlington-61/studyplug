import { Question } from './questions';

export const PHYSICS_QUESTIONS: Question[] = [
  {
    "id": 1001,
    "questionNumber": 1,
    "subject": "Physics",
    "year": 2024,
    "topic": "Motion & Graphs",
    "difficulty": "Medium",
    "text": "The velocity-time graph represents the motion of a car moving along a straight horizontal highway. Determine the total distance travelled by the car in the 40-second interval.",
    "imageSvg": "<svg viewBox=\"0 0 450 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\">\n      <defs>\n        <pattern id=\"grid1\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n          <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n        </pattern>\n      </defs>\n      <rect width=\"450\" height=\"240\" fill=\"#F8FAFC\" rx=\"12\"/>\n      <rect x=\"50\" y=\"30\" width=\"360\" height=\"160\" fill=\"url(#grid1)\"/>\n      <path d=\"M 50 190 L 140 70 L 320 70 L 410 190 Z\" fill=\"#EEF2FF\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <!-- Axes -->\n      <line x1=\"50\" y1=\"190\" x2=\"420\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <line x1=\"50\" y1=\"190\" x2=\"50\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <!-- Arrowheads -->\n      <polygon points=\"420,186 428,190 420,194\" fill=\"#334155\"/>\n      <polygon points=\"46,20 50,12 54,20\" fill=\"#334155\"/>\n      <!-- Dashed guides -->\n      <line x1=\"140\" y1=\"70\" x2=\"140\" y2=\"190\" stroke=\"#94A3B8\" stroke-dasharray=\"4\"/>\n      <line x1=\"320\" y1=\"70\" x2=\"320\" y2=\"190\" stroke=\"#94A3B8\" stroke-dasharray=\"4\"/>\n      <line x1=\"50\" y1=\"70\" x2=\"140\" y2=\"70\" stroke=\"#94A3B8\" stroke-dasharray=\"4\"/>\n      <!-- Labels -->\n      <text x=\"45\" y=\"195\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">0</text>\n      <text x=\"140\" y=\"208\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">10</text>\n      <text x=\"320\" y=\"208\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">30</text>\n      <text x=\"410\" y=\"208\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">40</text>\n      <text x=\"230\" y=\"230\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">Time t (s)</text>\n      <text x=\"42\" y=\"74\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">30</text>\n      <text x=\"25\" y=\"105\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\" transform=\"rotate(-90 25 105)\">Velocity v (m/s)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "600 m"
      },
      {
        "key": "B",
        "text": "900 m"
      },
      {
        "key": "C",
        "text": "1,200 m"
      },
      {
        "key": "D",
        "text": "750 m"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Total distance travelled is equal to the area under the velocity-time graph (a trapezium):\nArea = 1/2 × (sum of parallel sides) × height\nParallel sides are: a = (30 - 10) = 20 s, and b = 40 s.\nHeight h = 30 m/s.\nDistance = 1/2 × (20 + 40) × 30 = 1/2 × 60 × 30 = 900 m.\n\n💡 Exam Tip: Area under a velocity-time graph always equals distance travelled; the slope (gradient) equals acceleration."
  },
  {
    "id": 1002,
    "questionNumber": 2,
    "subject": "Physics",
    "year": 2024,
    "topic": "Projectiles",
    "difficulty": "Medium",
    "text": "A projectile is launched from ground level with an initial velocity of 50 m/s at an angle of 30° to the horizontal. Calculate the maximum height reached by the projectile. [Take g = 10 m/s²]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "31.25 m"
      },
      {
        "key": "B",
        "text": "62.50 m"
      },
      {
        "key": "C",
        "text": "125.00 m"
      },
      {
        "key": "D",
        "text": "15.60 m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Maximum height H = (u² sin² θ) / (2g).\nu = 50 m/s, θ = 30°, sin 30° = 0.5.\nH = (50² × (0.5)²) / (2 × 10) = (2500 × 0.25) / 20 = 625 / 20 = 31.25 m.\n\n💡 Exam Tip: For maximum height, use H = (u sin θ)² / (2g). For maximum horizontal range, the angle of projection is always 45°."
  },
  {
    "id": 1003,
    "questionNumber": 3,
    "subject": "Physics",
    "year": 2024,
    "topic": "Friction & Inclined Plane",
    "difficulty": "Hard",
    "text": "A block of mass 4 kg rests in limiting equilibrium on a rough plane inclined at 30° to the horizontal. Calculate the coefficient of static friction between the block and the plane.",
    "imageSvg": "<svg viewBox=\"0 0 400 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"400\" height=\"220\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Incline Triangle -->\n      <polygon points=\"50,180 350,180 350,50\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <!-- Angle Arc -->\n      <path d=\"M 100 180 A 50 50 0 0 0 93 158\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"110\" y=\"172\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#DC2626\">30°</text>\n      <!-- Block on Incline -->\n      <g transform=\"translate(200,115) rotate(-23.4)\">\n        <rect x=\"-30\" y=\"-30\" width=\"60\" height=\"30\" fill=\"#6366F1\" stroke=\"#312E81\" stroke-width=\"2\" rx=\"4\"/>\n        <text x=\"0\" y=\"-10\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">4 kg</text>\n        <!-- Reaction R -->\n        <line x1=\"0\" y1=\"-30\" x2=\"0\" y2=\"-70\" stroke=\"#059669\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n        <text x=\"8\" y=\"-60\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#059669\">R</text>\n        <!-- Friction force up plane -->\n        <line x1=\"30\" y1=\"-15\" x2=\"80\" y2=\"-15\" stroke=\"#EA580C\" stroke-width=\"2.5\"/>\n        <text x=\"85\" y=\"-12\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#EA580C\">F_r</text>\n      </g>\n      <!-- Gravity vector W = mg straight down -->\n      <line x1=\"205\" y1=\"110\" x2=\"205\" y2=\"185\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <polygon points=\"201,180 205,189 209,180\" fill=\"#475569\"/>\n      <text x=\"215\" y=\"165\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#475569\">W = mg</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "0.500"
      },
      {
        "key": "B",
        "text": "0.577"
      },
      {
        "key": "C",
        "text": "0.866"
      },
      {
        "key": "D",
        "text": "1.732"
      }
    ],
    "correctAnswer": "B",
    "explanation": "When a body is in limiting equilibrium on an inclined plane, the angle of inclination equals the angle of friction λ.\nCoefficient of static friction μ = tan θ = tan 30° = 1 / √3 ≈ 0.577.\n\n💡 Exam Tip: On an inclined plane at limiting equilibrium, μ = tan θ. Mass does not affect this coefficient!"
  },
  {
    "id": 1004,
    "questionNumber": 4,
    "subject": "Physics",
    "year": 2024,
    "topic": "Simple Machines",
    "difficulty": "Medium",
    "text": "A block and tackle pulley system consisting of 5 pulleys is used to raise a load of 400 N through a vertical height of 2 m by applying an effort of 100 N. Calculate the efficiency of the machine.",
    "imageSvg": "<svg viewBox=\"0 0 320 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-xs mx-auto\">\n      <rect width=\"320\" height=\"280\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Ceiling Support -->\n      <line x1=\"60\" y1=\"25\" x2=\"260\" y2=\"25\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <!-- Top Fixed Block (3 Pulleys) -->\n      <rect x=\"110\" y=\"25\" width=\"100\" height=\"70\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"2\" rx=\"4\"/>\n      <circle cx=\"130\" cy=\"60\" r=\"18\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"160\" cy=\"60\" r=\"22\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"190\" cy=\"60\" r=\"18\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <text x=\"160\" y=\"45\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Fixed Block</text>\n      <!-- Bottom Movable Block (2 Pulleys) -->\n      <rect x=\"120\" y=\"140\" width=\"80\" height=\"60\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"2\" rx=\"4\"/>\n      <circle cx=\"140\" cy=\"170\" r=\"18\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"180\" cy=\"170\" r=\"18\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Load -->\n      <rect x=\"135\" y=\"220\" width=\"50\" height=\"35\" fill=\"#4F46E5\" rx=\"4\"/>\n      <text x=\"160\" y=\"242\" font-size=\"11\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">400 N</text>\n      <line x1=\"160\" y1=\"200\" x2=\"160\" y2=\"220\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Effort String -->\n      <line x1=\"210\" y1=\"60\" x2=\"240\" y2=\"160\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <polygon points=\"236,155 240,165 244,155\" fill=\"#DC2626\"/>\n      <text x=\"255\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">Effort = 100N</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "80%"
      },
      {
        "key": "B",
        "text": "75%"
      },
      {
        "key": "C",
        "text": "85%"
      },
      {
        "key": "D",
        "text": "90%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mechanical Advantage (M.A) = Load / Effort = 400 / 100 = 4.\nFor a block and tackle system, Velocity Ratio (V.R) = total number of pulleys = 5.\nEfficiency η = (M.A / V.R) × 100% = (4 / 5) × 100% = 80%.\n\n💡 Exam Tip: For any pulley system, V.R equals the number of pulleys (or strings supporting the load). Efficiency is always M.A / V.R × 100%."
  },
  {
    "id": 1005,
    "questionNumber": 5,
    "subject": "Physics",
    "year": 2024,
    "topic": "Momentum & Collisions",
    "difficulty": "Medium",
    "text": "A body of mass 3 kg moving with velocity 8 m/s collides with a stationary body of mass 5 kg. If the two bodies stick together after the collision, calculate their common velocity.",
    "imageSvg": "<svg viewBox=\"0 0 380 140\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"140\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <line x1=\"20\" y1=\"105\" x2=\"360\" y2=\"105\" stroke=\"#64748B\" stroke-width=\"2\"/>\n      <!-- Sphere 1 -->\n      <circle cx=\"80\" cy=\"80\" r=\"25\" fill=\"#3B82F6\"/>\n      <text x=\"80\" y=\"85\" font-size=\"12\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">3 kg</text>\n      <!-- Velocity arrow 1 -->\n      <line x1=\"110\" y1=\"80\" x2=\"160\" y2=\"80\" stroke=\"#1D4ED8\" stroke-width=\"3\"/>\n      <polygon points=\"155,75 165,80 155,85\" fill=\"#1D4ED8\"/>\n      <text x=\"135\" y=\"70\" font-size=\"11\" font-weight=\"bold\" fill=\"#1D4ED8\" text-anchor=\"middle\">8 m/s</text>\n      <!-- Sphere 2 -->\n      <circle cx=\"260\" cy=\"75\" r=\"30\" fill=\"#64748B\"/>\n      <text x=\"260\" y=\"80\" font-size=\"12\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">5 kg</text>\n      <text x=\"260\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">At Rest (u₂ = 0)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "5.0 m/s"
      },
      {
        "key": "B",
        "text": "3.0 m/s"
      },
      {
        "key": "C",
        "text": "4.8 m/s"
      },
      {
        "key": "D",
        "text": "2.5 m/s"
      }
    ],
    "correctAnswer": "B",
    "explanation": "By the law of conservation of linear momentum for an inelastic collision:\nm₁u₁ + m₂u₂ = (m₁ + m₂)v\n(3 × 8) + (5 × 0) = (3 + 5)v\n24 = 8v ⇒ v = 24 / 8 = 3.0 m/s.\n\n💡 Exam Tip: In a completely inelastic collision, bodies coalesce and kinetic energy is lost as heat/sound, but linear momentum is strictly conserved."
  },
  {
    "id": 1006,
    "questionNumber": 6,
    "subject": "Physics",
    "year": 2024,
    "topic": "Work, Energy & Power",
    "difficulty": "Medium",
    "text": "An electric pump lifts 1,200 kg of water through a vertical height of 15 m in 30 seconds. Calculate the useful power output of the pump. [g = 10 m/s²]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "6,000 W"
      },
      {
        "key": "B",
        "text": "3,000 W"
      },
      {
        "key": "C",
        "text": "18,000 W"
      },
      {
        "key": "D",
        "text": "600 W"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Work done = mgh = 1,200 × 10 × 15 = 180,000 J.\nPower = Work done / time = 180,000 / 30 = 6,000 W (or 6 kW).\n\n💡 Exam Tip: Power is rate of doing work (mgh / t). Remember 1 Horsepower (hp) ≈ 746 Watts."
  },
  {
    "id": 1007,
    "questionNumber": 7,
    "subject": "Physics",
    "year": 2024,
    "topic": "Elasticity & Hooke's Law",
    "difficulty": "Medium",
    "text": "The graph shows the force-extension curve of an elastic metal wire. What physical quantity is represented by the area under the curve up to the elastic limit P?",
    "imageSvg": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"220\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Shaded Area -->\n      <polygon points=\"50,180 200,60 200,180\" fill=\"#EEF2FF\"/>\n      <!-- Curve -->\n      <line x1=\"50\" y1=\"180\" x2=\"200\" y2=\"60\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <path d=\"M 200 60 Q 240 50 270 55 T 320 110\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2.5\"/>\n      <!-- Axes -->\n      <line x1=\"50\" y1=\"180\" x2=\"350\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"180\" x2=\"50\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Point P -->\n      <circle cx=\"200\" cy=\"60\" r=\"4\" fill=\"#4F46E5\"/>\n      <text x=\"205\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#4F46E5\">P (Elastic Limit)</text>\n      <text x=\"200\" y=\"200\" font-size=\"12\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Extension e (m)</text>\n      <text x=\"25\" y=\"105\" font-size=\"12\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\" transform=\"rotate(-90 25 105)\">Force F (N)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Young's Modulus"
      },
      {
        "key": "B",
        "text": "Work done in stretching the wire (Strain Energy)"
      },
      {
        "key": "C",
        "text": "Tensile Stress"
      },
      {
        "key": "D",
        "text": "Elastic Rigidity"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The area under a force versus extension graph represents the work done in stretching the material, also called the elastic strain energy: W = 1/2 × F × e.\n\n💡 Exam Tip: Area under F-e graph = Strain Energy (1/2 Fe = 1/2 ke²). Slope = Spring constant k."
  },
  {
    "id": 1008,
    "questionNumber": 8,
    "subject": "Physics",
    "year": 2024,
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "text": "A stone of mass 0.5 kg attached to the end of a string 0.8 m long is whirled in a horizontal circle at a constant angular speed of 5 rad/s. Calculate the tension in the string.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "10.0 N"
      },
      {
        "key": "B",
        "text": "4.0 N"
      },
      {
        "key": "C",
        "text": "8.0 N"
      },
      {
        "key": "D",
        "text": "2.0 N"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Centripetal force F = mω²r provides the tension in the string.\nm = 0.5 kg, ω = 5 rad/s, r = 0.8 m.\nT = 0.5 × (5)² × 0.8 = 0.5 × 25 × 0.8 = 10.0 N.\n\n💡 Exam Tip: Centripetal force formulas: F = mv²/r = mω²r. Always ensure ω is in radians/second."
  },
  {
    "id": 1009,
    "questionNumber": 9,
    "subject": "Physics",
    "year": 2024,
    "topic": "Simple Harmonic Motion",
    "difficulty": "Medium",
    "text": "A simple pendulum has a period of 2.0 s at a place where g = 10 m/s². What will be the new period if the length of the pendulum is quadrupled (increased by a factor of 4)?",
    "imageSvg": "<svg viewBox=\"0 0 280 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-xs mx-auto\">\n      <rect width=\"280\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <line x1=\"80\" y1=\"20\" x2=\"200\" y2=\"20\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <!-- String & Bob -->\n      <line x1=\"140\" y1=\"20\" x2=\"185\" y2=\"135\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <circle cx=\"185\" cy=\"135\" r=\"14\" fill=\"#3B82F6\" stroke=\"#1D4ED8\" stroke-width=\"2\"/>\n      <!-- Equilibrium dashed -->\n      <line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"145\" stroke=\"#94A3B8\" stroke-dasharray=\"4\"/>\n      <path d=\"M 140 60 A 40 40 0 0 1 154 58\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <text x=\"156\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">θ</text>\n      <text x=\"150\" y=\"85\" font-size=\"12\" font-weight=\"bold\" fill=\"#475569\">L</text>\n      <!-- Oscillation path -->\n      <path d=\"M 95 135 Q 140 148 185 135\" fill=\"none\" stroke=\"#6366F1\" stroke-dasharray=\"3\" stroke-width=\"1.5\"/>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "4.0 s"
      },
      {
        "key": "B",
        "text": "1.0 s"
      },
      {
        "key": "C",
        "text": "8.0 s"
      },
      {
        "key": "D",
        "text": "0.5 s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Period T = 2π√(L/g), meaning T is directly proportional to √L.\nT₂ / T₁ = √(L₂ / L₁) = √4 = 2.\nT₂ = 2 × T₁ = 2 × 2.0 = 4.0 s.\n\n💡 Exam Tip: Period of a pendulum depends only on length and g: T ∝ √L. Mass of the bob and amplitude (for small angles) have zero effect."
  },
  {
    "id": 1010,
    "questionNumber": 10,
    "subject": "Physics",
    "year": 2024,
    "topic": "Equilibrium of Moments",
    "difficulty": "Medium",
    "text": "A uniform meter rule of mass 100 g is balanced horizontally on a knife edge placed at the 40 cm mark by hanging a mass m at the 10 cm mark. Calculate the value of mass m.",
    "imageSvg": "<svg viewBox=\"0 0 450 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\">\n      <rect width=\"450\" height=\"160\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Meter rule (0 to 100 cm) -->\n      <rect x=\"40\" y=\"60\" width=\"370\" height=\"16\" fill=\"#FDE68A\" stroke=\"#B45309\" stroke-width=\"2\" rx=\"2\"/>\n      <!-- Knife edge pivot at 40 cm mark -->\n      <polygon points=\"177,76 188,98 166,98\" fill=\"#475569\"/>\n      <line x1=\"150\" y1=\"98\" x2=\"204\" y2=\"98\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <text x=\"177\" y=\"112\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Pivot (40 cm)</text>\n      <!-- Center of gravity (50 cm mark) -->\n      <line x1=\"214\" y1=\"76\" x2=\"214\" y2=\"120\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <polygon points=\"211,115 214,124 217,115\" fill=\"#DC2626\"/>\n      <text x=\"214\" y=\"138\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">100g (50 cm)</text>\n      <!-- Hanging mass at 10 cm mark -->\n      <line x1=\"77\" y1=\"76\" x2=\"77\" y2=\"115\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n      <rect x=\"67\" y=\"115\" width=\"20\" height=\"18\" fill=\"#2563EB\" rx=\"3\"/>\n      <text x=\"77\" y=\"128\" font-size=\"10\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">m</text>\n      <text x=\"77\" y=\"52\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\" text-anchor=\"middle\">10 cm</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "33.3 g"
      },
      {
        "key": "B",
        "text": "25.0 g"
      },
      {
        "key": "C",
        "text": "50.0 g"
      },
      {
        "key": "D",
        "text": "66.7 g"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since the meter rule is uniform, its weight acts at the 50 cm mark.\nPivot is at 40 cm mark.\nDistance of mass m from pivot = 40 - 10 = 30 cm.\nDistance of center of gravity (50 cm) from pivot = 50 - 40 = 10 cm.\nTaking moments about the knife edge:\nm × 30 = 100 × 10\nm = 1000 / 30 = 33.3 g.\n\n💡 Exam Tip: Always identify the center of gravity of a uniform body (the exact midpoint, e.g. 50 cm for a 100 cm rule)."
  },
  {
    "id": 1011,
    "questionNumber": 11,
    "subject": "Physics",
    "year": 2024,
    "topic": "Vectors & Lami's Theorem",
    "difficulty": "Hard",
    "text": "A body of weight W is suspended by two light inextensible strings making angles of 60° and 30° with a horizontal ceiling. If the tension in the first string is 60 N, calculate the weight W.",
    "imageSvg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-xs mx-auto\">\n      <rect width=\"360\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Ceiling -->\n      <line x1=\"40\" y1=\"30\" x2=\"320\" y2=\"30\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <!-- Strings -->\n      <line x1=\"80\" y1=\"30\" x2=\"180\" y2=\"130\" stroke=\"#4F46E5\" stroke-width=\"2.5\"/>\n      <line x1=\"280\" y1=\"30\" x2=\"180\" y2=\"130\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"110\" y=\"70\" font-size=\"11\" font-weight=\"bold\" fill=\"#4F46E5\">T₁ = 60N</text>\n      <text x=\"235\" y=\"70\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">T₂</text>\n      <!-- Angles with ceiling -->\n      <path d=\"M 105 30 A 25 25 0 0 1 95 45\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"112\" y=\"45\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">60°</text>\n      <path d=\"M 255 30 A 25 25 0 0 0 263 42\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"245\" y=\"45\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">30°</text>\n      <!-- Weight W -->\n      <line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <circle cx=\"180\" cy=\"130\" r=\"4\" fill=\"#334155\"/>\n      <polygon points=\"176,174 180,184 184,174\" fill=\"#334155\"/>\n      <text x=\"195\" y=\"165\" font-size=\"12\" font-weight=\"bold\" fill=\"#334155\">W</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "120 N"
      },
      {
        "key": "B",
        "text": "69.3 N"
      },
      {
        "key": "C",
        "text": "103.9 N"
      },
      {
        "key": "D",
        "text": "80 N"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The angle between the two strings is 180° - (60° + 30°) = 90°.\nResolving forces vertically: T₁ sin 60° + T₂ sin 30° = W.\nResolving horizontally: T₁ cos 60° = T₂ cos 30° ⇒ T₂ = T₁ (cos 60° / cos 30°) = 60 × (0.5 / 0.866) = 34.64 N.\nTherefore, W = (60 × sin 60°) + (34.64 × sin 30°) = (60 × 0.866) + (34.64 × 0.5) = 51.96 + 17.32 = 69.28 N ≈ 69.3 N.\n\n💡 Exam Tip: When forces are in equilibrium, resolve vertically (ΣFy = 0) and horizontally (ΣFx = 0)."
  },
  {
    "id": 1012,
    "questionNumber": 12,
    "subject": "Physics",
    "year": 2024,
    "topic": "Gravitation",
    "difficulty": "Medium",
    "text": "Given that the radius of the Earth is 6.4 × 10⁶ m and acceleration due to gravity g = 9.8 m/s², calculate the escape velocity of a satellite launched from the surface of the Earth.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "11.2 km/s"
      },
      {
        "key": "B",
        "text": "7.9 km/s"
      },
      {
        "key": "C",
        "text": "15.4 km/s"
      },
      {
        "key": "D",
        "text": "9.8 km/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Escape velocity v_e = √(2gR).\nv_e = √(2 × 9.8 × 6.4 × 10⁶) = √(1.2544 × 10⁸) = 11,200 m/s = 11.2 km/s.\n\n💡 Exam Tip: Escape velocity v_e = √(2gR) ≈ 11.2 km/s. Orbital velocity for low Earth orbit is v_0 = √(gR) ≈ 7.9 km/s."
  },
  {
    "id": 1013,
    "questionNumber": 13,
    "subject": "Physics",
    "year": 2024,
    "topic": "Hydrostatics",
    "difficulty": "Medium",
    "text": "A piece of metal weighs 50 N in air and 40 N when completely submerged in water. Calculate the relative density of the metal. [Density of water = 1,000 kg/m³]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "5.0"
      },
      {
        "key": "B",
        "text": "1.25"
      },
      {
        "key": "C",
        "text": "4.0"
      },
      {
        "key": "D",
        "text": "0.8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Apparent loss in weight (upthrust) = Weight in air - Weight in water = 50 - 40 = 10 N.\nRelative density = (Weight in air) / (Upthrust in water) = 50 / 10 = 5.0.\n\n💡 Exam Tip: Relative Density of a solid = Weight in air / Apparent loss of weight in water. It has no units."
  },
  {
    "id": 1014,
    "questionNumber": 14,
    "subject": "Physics",
    "year": 2024,
    "topic": "Fluid Dynamics",
    "difficulty": "Easy",
    "text": "According to Bernoulli's principle, along a streamline in a non-viscous, incompressible fluid flowing horizontally:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Where velocity increases, pressure decreases"
      },
      {
        "key": "B",
        "text": "Where velocity increases, pressure increases"
      },
      {
        "key": "C",
        "text": "Pressure remains constant regardless of velocity"
      },
      {
        "key": "D",
        "text": "Velocity is inversely proportional to temperature"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bernoulli's principle states that for an ideal fluid along a streamline, P + 1/2 ρv² + ρgh = constant. For horizontal flow, regions of higher fluid velocity experience lower static pressure.\n\n💡 Exam Tip: Bernoulli explains aerofoil lift and atomizer spray: High fluid speed = Low pressure."
  },
  {
    "id": 1015,
    "questionNumber": 15,
    "subject": "Physics",
    "year": 2024,
    "topic": "Measurement & Precision",
    "difficulty": "Easy",
    "text": "The diagram shows a vernier caliper reading when measuring the diameter of a metal cylinder. What is the correct measurement?",
    "imageSvg": "<svg viewBox=\"0 0 440 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\">\n      <rect width=\"440\" height=\"160\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Main Scale -->\n      <rect x=\"30\" y=\"30\" width=\"380\" height=\"45\" fill=\"#F1F5F9\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <text x=\"80\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">3</text>\n      <text x=\"240\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">4 cm</text>\n      <!-- Main Scale Ticks -->\n      <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"75\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"96\" y1=\"60\" x2=\"96\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"112\" y1=\"60\" x2=\"112\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"128\" y1=\"60\" x2=\"128\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"144\" y1=\"60\" x2=\"144\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"160\" y1=\"55\" x2=\"160\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <line x1=\"176\" y1=\"60\" x2=\"176\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"192\" y1=\"60\" x2=\"192\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"208\" y1=\"60\" x2=\"208\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"224\" y1=\"60\" x2=\"224\" y2=\"75\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <line x1=\"240\" y1=\"50\" x2=\"240\" y2=\"75\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Vernier Slider -->\n      <rect x=\"134\" y=\"75\" width=\"160\" height=\"40\" fill=\"#E2E8F0\" stroke=\"#4F46E5\" stroke-width=\"2\"/>\n      <text x=\"138\" y=\"90\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\">0</text>\n      <text x=\"278\" y=\"90\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\">10</text>\n      <!-- Coinciding Vernier line at 6 (aligned with main scale) -->\n      <line x1=\"224\" y1=\"75\" x2=\"224\" y2=\"100\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"224\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">6 (coincides)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "3.46 cm"
      },
      {
        "key": "B",
        "text": "3.36 cm"
      },
      {
        "key": "C",
        "text": "3.40 cm"
      },
      {
        "key": "D",
        "text": "3.56 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The main scale zero mark lies just past 3.4 cm (between 3.4 and 3.5 cm).\nThe vernier scale division that coincides exactly with a main scale division is the 6th mark (0.06 cm).\nTotal reading = 3.4 cm + 0.06 cm = 3.46 cm.\n\n💡 Exam Tip: Vernier reading = Main Scale + (Coinciding Mark × 0.01 cm)."
  },
  {
    "id": 1016,
    "questionNumber": 16,
    "subject": "Physics",
    "year": 2024,
    "topic": "Thermal Expansion",
    "difficulty": "Medium",
    "text": "A metal rod of length 2.0 m at 25°C expands by 1.6 mm when heated to 75°C. Calculate the linear expansivity of the metal.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "1.6 × 10⁻⁵ K⁻¹"
      },
      {
        "key": "B",
        "text": "3.2 × 10⁻⁵ K⁻¹"
      },
      {
        "key": "C",
        "text": "8.0 × 10⁻⁶ K⁻¹"
      },
      {
        "key": "D",
        "text": "4.8 × 10⁻⁵ K⁻¹"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Linear expansivity α = ΔL / (L₀ × Δθ).\nΔL = 1.6 mm = 1.6 × 10⁻³ m.\nL₀ = 2.0 m.\nΔθ = 75 - 25 = 50 K.\nα = (1.6 × 10⁻³) / (2.0 × 50) = (1.6 × 10⁻³) / 100 = 1.6 × 10⁻⁵ K⁻¹.\n\n💡 Exam Tip: Area expansivity β = 2α; Volume expansivity γ = 3α. Remember to convert mm to meters."
  },
  {
    "id": 1017,
    "questionNumber": 17,
    "subject": "Physics",
    "year": 2024,
    "topic": "Thermometry",
    "difficulty": "Easy",
    "text": "The upper and lower fixed points of an ungraduated mercury thermometer are 96 cm and 16 cm apart on its stem. If the mercury thread stands at 36 cm, what is the temperature in degrees Celsius?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "25°C"
      },
      {
        "key": "B",
        "text": "37.5°C"
      },
      {
        "key": "C",
        "text": "20°C"
      },
      {
        "key": "D",
        "text": "30°C"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Temperature θ = [(l_θ - l₀) / (l₁₀₀ - l₀)] × 100°C.\nl₀ = 16 cm, l₁₀₀ = 96 cm, l_θ = 36 cm.\nθ = [(36 - 16) / (96 - 16)] × 100 = (20 / 80) × 100 = 25°C.\n\n💡 Exam Tip: Thermometer formula: θ = (X_θ - X₀)/(X₁₀₀ - X₀) × 100 where X is any thermometric property."
  },
  {
    "id": 1018,
    "questionNumber": 18,
    "subject": "Physics",
    "year": 2024,
    "topic": "Gas Laws",
    "difficulty": "Medium",
    "text": "A fixed mass of gas occupies a volume of 400 cm³ at 27°C and pressure of 750 mmHg. What volume will it occupy at standard temperature and pressure (s.t.p., 0°C and 760 mmHg)?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "359.2 cm³"
      },
      {
        "key": "B",
        "text": "438.4 cm³"
      },
      {
        "key": "C",
        "text": "382.5 cm³"
      },
      {
        "key": "D",
        "text": "298.0 cm³"
      }
    ],
    "correctAnswer": "A",
    "explanation": "General gas equation: (P₁V₁) / T₁ = (P₂V₂) / T₂.\nT₁ = 27 + 273 = 300 K; T₂ = 0 + 273 = 273 K.\nP₁ = 750 mmHg, V₁ = 400 cm³; P₂ = 760 mmHg.\nV₂ = (P₁ × V₁ × T₂) / (P₂ × T₁) = (750 × 400 × 273) / (760 × 300) = 81,900,000 / 228,000 ≈ 359.2 cm³.\n\n💡 Exam Tip: Always convert temperature to absolute scale (Kelvin) before applying gas equations: T(K) = °C + 273."
  },
  {
    "id": 1019,
    "questionNumber": 19,
    "subject": "Physics",
    "year": 2024,
    "topic": "Calorimetry",
    "difficulty": "Medium",
    "text": "A piece of iron of mass 0.2 kg at 100°C is dropped into 0.4 kg of water at 20°C in an insulated vessel of negligible heat capacity. Calculate the final equilibrium temperature. [c_iron = 460 J/(kg·K), c_water = 4200 J/(kg·K)]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "24.2°C"
      },
      {
        "key": "B",
        "text": "28.5°C"
      },
      {
        "key": "C",
        "text": "32.0°C"
      },
      {
        "key": "D",
        "text": "21.5°C"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Heat lost by iron = Heat gained by water\nm₁c₁(100 - θ) = m₂c₂(θ - 20)\n0.2 × 460 × (100 - θ) = 0.4 × 4200 × (θ - 20)\n92(100 - θ) = 1680(θ - 20)\n9200 - 92θ = 1680θ - 33600\n1772θ = 42800 ⇒ θ = 24.15°C ≈ 24.2°C.\n\n💡 Exam Tip: In mixture calorimetry without state change, Heat Lost = Heat Gained. Water has a very high specific heat capacity."
  },
  {
    "id": 1020,
    "questionNumber": 20,
    "subject": "Physics",
    "year": 2024,
    "topic": "Latent Heat",
    "difficulty": "Hard",
    "text": "Calculate the total heat required to convert 20 g of ice at 0°C to steam at 100°C. [Specific latent heat of fusion of ice = 3.36 × 10⁵ J/kg, Specific heat capacity of water = 4200 J/(kg·K), Specific latent heat of vaporization of water = 2.26 × 10⁶ J/kg]",
    "imageSvg": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Axes -->\n      <line x1=\"50\" y1=\"170\" x2=\"350\" y2=\"170\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"170\" x2=\"50\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Heating Curve -->\n      <line x1=\"50\" y1=\"150\" x2=\"110\" y2=\"150\" stroke=\"#3B82F6\" stroke-width=\"3\"/>\n      <line x1=\"110\" y1=\"150\" x2=\"220\" y2=\"50\" stroke=\"#10B981\" stroke-width=\"3\"/>\n      <line x1=\"220\" y1=\"50\" x2=\"330\" y2=\"50\" stroke=\"#EF4444\" stroke-width=\"3\"/>\n      <!-- Labels -->\n      <text x=\"80\" y=\"142\" font-size=\"10\" font-weight=\"bold\" fill=\"#3B82F6\" text-anchor=\"middle\">Melting (mL_f)</text>\n      <text x=\"165\" y=\"90\" font-size=\"10\" font-weight=\"bold\" fill=\"#10B981\" text-anchor=\"middle\">Liquid (mcΔθ)</text>\n      <text x=\"275\" y=\"42\" font-size=\"10\" font-weight=\"bold\" fill=\"#EF4444\" text-anchor=\"middle\">Vaporization (mL_v)</text>\n      <text x=\"42\" y=\"154\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">0°C</text>\n      <text x=\"42\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">100°C</text>\n      <text x=\"200\" y=\"190\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Heat Energy Added (J)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "60,320 J"
      },
      {
        "key": "B",
        "text": "53,600 J"
      },
      {
        "key": "C",
        "text": "45,200 J"
      },
      {
        "key": "D",
        "text": "67,200 J"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Total heat Q = Q₁ (melting ice) + Q₂ (heating water 0°C to 100°C) + Q₃ (boiling water):\nm = 20 g = 0.02 kg.\nQ₁ = m L_f = 0.02 × 336,000 = 6,720 J.\nQ₂ = m c Δθ = 0.02 × 4200 × 100 = 8,400 J.\nQ₃ = m L_v = 0.02 × 2,260,000 = 45,200 J.\nTotal Q = 6,720 + 8,400 + 45,200 = 60,320 J.\n\n💡 Exam Tip: Latent heat involves no temperature change: Q = mL. Specific heat involves temperature change: Q = mcΔθ."
  },
  {
    "id": 1021,
    "questionNumber": 21,
    "subject": "Physics",
    "year": 2024,
    "topic": "Vapour Pressure & Humidity",
    "difficulty": "Easy",
    "text": "The temperature at which the saturated vapour pressure of a liquid equals the external atmospheric pressure is the liquid's:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Boiling point"
      },
      {
        "key": "B",
        "text": "Dew point"
      },
      {
        "key": "C",
        "text": "Triple point"
      },
      {
        "key": "D",
        "text": "Critical temperature"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A liquid boils when its saturated vapour pressure (S.V.P.) becomes equal to the surrounding atmospheric pressure. Hence, reducing external pressure lowers the boiling point.\n\n💡 Exam Tip: Boiling occurs throughout the liquid when S.V.P. = external pressure. Evaporation occurs only at the surface at any temperature."
  },
  {
    "id": 1022,
    "questionNumber": 22,
    "subject": "Physics",
    "year": 2024,
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "text": "In an adiabatic expansion of an ideal gas, which of the following statements is true?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "No heat enters or leaves the system (Q = 0)"
      },
      {
        "key": "B",
        "text": "The temperature remains constant throughout"
      },
      {
        "key": "C",
        "text": "The internal energy of the gas increases"
      },
      {
        "key": "D",
        "text": "The pressure remains strictly constant"
      }
    ],
    "correctAnswer": "A",
    "explanation": "An adiabatic process is one in which no heat energy enters or leaves the system (ΔQ = 0). By the First Law (ΔU = ΔQ - ΔW), the work done by the gas during adiabatic expansion comes entirely from its internal energy, causing the gas to cool.\n\n💡 Exam Tip: Adiabatic: Q = 0. Isothermal: T = constant (ΔU = 0). Isobaric: P = constant. Isochoric: V = constant (W = 0)."
  },
  {
    "id": 1023,
    "questionNumber": 23,
    "subject": "Physics",
    "year": 2024,
    "topic": "Pressure in Fluids",
    "difficulty": "Medium",
    "text": "The diagram shows an open-ended U-tube manometer connected to a gas supply. If atmospheric pressure is 76 cmHg and the mercury levels differ by 14 cm, what is the pressure of the gas supply?",
    "imageSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-xs mx-auto\">\n      <rect width=\"320\" height=\"220\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- U tube outlines -->\n      <path d=\"M 90 40 L 90 160 A 40 40 0 0 0 170 160 L 170 40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"18\" stroke-linecap=\"round\"/>\n      <path d=\"M 90 40 L 90 160 A 40 40 0 0 0 170 160 L 170 40\" fill=\"none\" stroke=\"#F8FAFC\" stroke-width=\"12\"/>\n      <!-- Mercury liquid column -->\n      <path d=\"M 90 120 L 90 160 A 40 40 0 0 0 170 160 L 170 65\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"12\"/>\n      <!-- Labels -->\n      <line x1=\"90\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#DC2626\" stroke-dasharray=\"3\"/>\n      <line x1=\"170\" y1=\"65\" x2=\"220\" y2=\"65\" stroke=\"#DC2626\" stroke-dasharray=\"3\"/>\n      <line x1=\"210\" y1=\"65\" x2=\"210\" y2=\"120\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"97\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">h = 14 cm</text>\n      <text x=\"70\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">Gas Supply</text>\n      <text x=\"175\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">P_atm (Open)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "90 cmHg"
      },
      {
        "key": "B",
        "text": "62 cmHg"
      },
      {
        "key": "C",
        "text": "76 cmHg"
      },
      {
        "key": "D",
        "text": "14 cmHg"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since the open limb has a higher mercury level than the closed limb, the gas pressure is greater than atmospheric pressure:\nP_gas = P_atm + h = 76 cmHg + 14 cmHg = 90 cmHg.\n\n💡 Exam Tip: If open limb is higher: P_gas = P_atm + h. If open limb is lower: P_gas = P_atm - h."
  },
  {
    "id": 1024,
    "questionNumber": 24,
    "subject": "Physics",
    "year": 2024,
    "topic": "Thermal Radiation",
    "difficulty": "Easy",
    "text": "Which surface is both the best absorber and the best radiator of radiant heat energy?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Dull, rough black surface"
      },
      {
        "key": "B",
        "text": "Polished silver surface"
      },
      {
        "key": "C",
        "text": "White glossy surface"
      },
      {
        "key": "D",
        "text": "Smooth grey surface"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Good absorbers of radiation are also good emitters (Kirchhoff's law of radiation). Black, matte (dull) surfaces absorb nearly all incident radiation and emit infrared maximally, while polished shiny surfaces reflect radiation.\n\n💡 Exam Tip: Dull black = best absorber & best emitter. Shiny silver = best reflector & worst emitter."
  },
  {
    "id": 1025,
    "questionNumber": 25,
    "subject": "Physics",
    "year": 2024,
    "topic": "Heat Transfer",
    "difficulty": "Easy",
    "text": "A thermos flask (vacuum flask) minimizes heat loss by conduction, convection, and radiation. The silvered inner walls specifically minimize heat loss by:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Radiation"
      },
      {
        "key": "B",
        "text": "Convection"
      },
      {
        "key": "C",
        "text": "Conduction"
      },
      {
        "key": "D",
        "text": "Evaporation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Silvered walls act as thermal mirrors, reflecting radiant infrared heat waves back into the flask and thus preventing loss by radiation. The vacuum prevents conduction and convection, and the stopper prevents evaporation.\n\n💡 Exam Tip: Vacuum flask functions: Vacuum = stops conduction & convection; Silvered walls = stops radiation; Cork/plastic stopper = stops evaporation."
  },
  {
    "id": 1026,
    "questionNumber": 26,
    "subject": "Physics",
    "year": 2024,
    "topic": "Waves Properties",
    "difficulty": "Medium",
    "text": "The progressive wave equation is given by y = 0.05 sin(200πt - 0.5πx), where x and y are in meters and t is in seconds. Determine the wave speed.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "400 m/s"
      },
      {
        "key": "B",
        "text": "200 m/s"
      },
      {
        "key": "C",
        "text": "100 m/s"
      },
      {
        "key": "D",
        "text": "800 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Standard wave equation: y = A sin(ωt - kx).\nHere, angular frequency ω = 200π rad/s and wave number k = 0.5π m⁻¹.\nWave speed v = ω / k = (200π) / (0.5π) = 400 m/s.\n\n💡 Exam Tip: Quick formula: Wave speed v = (coefficient of t) / (coefficient of x) = 200π / 0.5π = 400 m/s."
  },
  {
    "id": 1027,
    "questionNumber": 27,
    "subject": "Physics",
    "year": 2024,
    "topic": "Wave Characteristics",
    "difficulty": "Easy",
    "text": "In the transverse wave shown, what is the wavelength λ of the wave?",
    "imageSvg": "<svg viewBox=\"0 0 450 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\">\n      <rect width=\"450\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Wave Axis -->\n      <line x1=\"40\" y1=\"90\" x2=\"410\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"160\" x2=\"50\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Sine curve (2 full cycles) -->\n      <path d=\"M 50 90 Q 95 20 140 90 T 230 90 T 320 90 T 410 90\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <!-- Wavelength Dimension Line between crest 1 and crest 2 -->\n      <line x1=\"95\" y1=\"20\" x2=\"95\" y2=\"10\" stroke=\"#DC2626\" stroke-dasharray=\"2\"/>\n      <line x1=\"275\" y1=\"20\" x2=\"275\" y2=\"10\" stroke=\"#DC2626\" stroke-dasharray=\"2\"/>\n      <line x1=\"95\" y1=\"12\" x2=\"275\" y2=\"12\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"185\" y=\"8\" font-size=\"12\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">Distance = 0.6 m</text>\n      <text x=\"230\" y=\"110\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">x (m)</text>\n      <text x=\"35\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">y (m)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "0.6 m"
      },
      {
        "key": "B",
        "text": "0.3 m"
      },
      {
        "key": "C",
        "text": "1.2 m"
      },
      {
        "key": "D",
        "text": "0.15 m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By definition, the wavelength λ of a wave is the distance between two successive identical points in phase, such as from one crest to the next consecutive crest. As indicated on the diagram, that distance is 0.6 m.\n\n💡 Exam Tip: Wavelength is distance between consecutive crests, troughs, or consecutive points in phase."
  },
  {
    "id": 1028,
    "questionNumber": 28,
    "subject": "Physics",
    "year": 2024,
    "topic": "Sound & Echoes",
    "difficulty": "Medium",
    "text": "A boy standing 85 m away from a high vertical cliff claps his hands and hears the echo 0.5 seconds later. What is the speed of sound in air?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "340 m/s"
      },
      {
        "key": "B",
        "text": "170 m/s"
      },
      {
        "key": "C",
        "text": "330 m/s"
      },
      {
        "key": "D",
        "text": "680 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For an echo, sound travels to the cliff and reflects back, covering twice the distance:\nSpeed v = (2d) / t = (2 × 85) / 0.5 = 170 / 0.5 = 340 m/s.\n\n💡 Exam Tip: Always remember the factor of 2 in echo calculations: v = 2d / t."
  },
  {
    "id": 1029,
    "questionNumber": 29,
    "subject": "Physics",
    "year": 2024,
    "topic": "Reflection & Mirrors",
    "difficulty": "Medium",
    "text": "An object of height 4 cm is placed 15 cm in front of a concave mirror of focal length 10 cm. What is the nature and height of the image formed?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Principal Axis -->\n      <line x1=\"30\" y1=\"90\" x2=\"350\" y2=\"90\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <!-- Concave mirror arc -->\n      <path d=\"M 310 30 A 100 100 0 0 1 310 150\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"4\"/>\n      <!-- Focus F & Center C -->\n      <circle cx=\"210\" cy=\"90\" r=\"3\" fill=\"#334155\"/>\n      <text x=\"210\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">F (10cm)</text>\n      <circle cx=\"110\" cy=\"90\" r=\"3\" fill=\"#334155\"/>\n      <text x=\"110\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">C (20cm)</text>\n      <!-- Object between C and F -->\n      <line x1=\"160\" y1=\"90\" x2=\"160\" y2=\"45\" stroke=\"#16A34A\" stroke-width=\"3\"/>\n      <polygon points=\"156,47 160,40 164,47\" fill=\"#16A34A\"/>\n      <text x=\"160\" y=\"35\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\" text-anchor=\"middle\">Object</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Real, inverted, and 8 cm high"
      },
      {
        "key": "B",
        "text": "Virtual, erect, and 8 cm high"
      },
      {
        "key": "C",
        "text": "Real, inverted, and 2 cm high"
      },
      {
        "key": "D",
        "text": "Virtual, inverted, and 4 cm high"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Using the mirror formula: 1/f = 1/u + 1/v.\nFor a concave mirror, f = +10 cm, u = +15 cm.\n1/10 = 1/15 + 1/v ⇒ 1/v = 1/10 - 1/15 = 1/30 ⇒ v = +30 cm (Real image).\nMagnification m = |v/u| = 30 / 15 = 2.\nImage height = m × object height = 2 × 4 cm = 8 cm. Real images are always inverted.\n\n💡 Exam Tip: Object between C and F forms a real, inverted, magnified image located beyond C."
  },
  {
    "id": 1030,
    "questionNumber": 30,
    "subject": "Physics",
    "year": 2024,
    "topic": "Refraction & Snell's Law",
    "difficulty": "Medium",
    "text": "A ray of light traveling in air is incident on a rectangular glass block at an angle of incidence of 60°. If the refractive index of glass is 1.5, what is the angle of refraction? [sin 60° = 0.866]",
    "imageSvg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-xs mx-auto\">\n      <rect width=\"360\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Glass block -->\n      <rect x=\"50\" y=\"100\" width=\"260\" height=\"80\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n      <text x=\"65\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E40AF\">Glass (n = 1.5)</text>\n      <text x=\"65\" y=\"85\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">Air (n = 1.0)</text>\n      <!-- Normal -->\n      <line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"170\" stroke=\"#64748B\" stroke-dasharray=\"4\"/>\n      <!-- Incident ray -->\n      <line x1=\"80\" y1=\"42\" x2=\"180\" y2=\"100\" stroke=\"#DC2626\" stroke-width=\"2.5\"/>\n      <polygon points=\"135,68 143,76 133,76\" fill=\"#DC2626\"/>\n      <!-- Refracted ray -->\n      <line x1=\"180\" y1=\"100\" x2=\"230\" y2=\"180\" stroke=\"#DC2626\" stroke-width=\"2.5\"/>\n      <!-- Angle Arc -->\n      <path d=\"M 180 65 A 35 35 0 0 0 155 78\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <text x=\"162\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">60°</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "35.3°"
      },
      {
        "key": "B",
        "text": "30.0°"
      },
      {
        "key": "C",
        "text": "45.0°"
      },
      {
        "key": "D",
        "text": "28.2°"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By Snell's law: n = sin i / sin r\n1.5 = sin 60° / sin r\nsin r = 0.866 / 1.5 = 0.5773\nr = sin⁻¹(0.5773) ≈ 35.3°.\n\n💡 Exam Tip: When light travels from rarer to denser medium (air to glass), it bends towards the normal (r < i)."
  },
  {
    "id": 1031,
    "questionNumber": 31,
    "subject": "Physics",
    "year": 2024,
    "topic": "Total Internal Reflection",
    "difficulty": "Medium",
    "text": "What is the critical angle for a transparent medium whose refractive index is 1.414 (√2)?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "45°"
      },
      {
        "key": "B",
        "text": "30°"
      },
      {
        "key": "C",
        "text": "60°"
      },
      {
        "key": "D",
        "text": "90°"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Critical angle c is given by: sin c = 1 / n.\nsin c = 1 / 1.414 = 1 / √2 = 0.7071.\nc = sin⁻¹(0.7071) = 45°.\n\n💡 Exam Tip: Total internal reflection occurs only when light moves from denser to rarer medium and angle of incidence i > c."
  },
  {
    "id": 1032,
    "questionNumber": 32,
    "subject": "Physics",
    "year": 2024,
    "topic": "Lenses & Optical Instruments",
    "difficulty": "Medium",
    "text": "A converging lens produces an image four times the size of an object on a screen placed 100 cm from the lens. Calculate the focal length of the lens.",
    "imageSvg": "<svg viewBox=\"0 0 400 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"400\" height=\"160\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Principal Axis -->\n      <line x1=\"30\" y1=\"80\" x2=\"370\" y2=\"80\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <!-- Convex lens double convex -->\n      <path d=\"M 180 20 Q 195 80 180 140 Q 165 80 180 20\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n      <!-- Object -->\n      <line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"50\" stroke=\"#16A34A\" stroke-width=\"2.5\"/>\n      <polygon points=\"97,52 100,45 103,52\" fill=\"#16A34A\"/>\n      <text x=\"100\" y=\"38\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\" text-anchor=\"middle\">Object</text>\n      <!-- Real Inverted Screen Image -->\n      <line x1=\"320\" y1=\"80\" x2=\"320\" y2=\"150\" stroke=\"#DC2626\" stroke-width=\"3\"/>\n      <polygon points=\"317,144 320,152 323,144\" fill=\"#DC2626\"/>\n      <text x=\"320\" y=\"100\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">v = 100 cm</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "20 cm"
      },
      {
        "key": "B",
        "text": "25 cm"
      },
      {
        "key": "C",
        "text": "15 cm"
      },
      {
        "key": "D",
        "text": "30 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since the image is formed on a screen, it is real.\nMagnification m = v / u ⇒ 4 = 100 / u ⇒ u = 25 cm.\nUsing the lens formula: 1/f = 1/u + 1/v\n1/f = 1/25 + 1/100 = 4/100 + 1/100 = 5/100 = 1/20.\nTherefore, focal length f = 20 cm.\n\n💡 Exam Tip: Real images on a screen are always inverted; for lenses 1/f = 1/u + 1/v (both u and v are positive for real objects & real images)."
  },
  {
    "id": 1033,
    "questionNumber": 33,
    "subject": "Physics",
    "year": 2024,
    "topic": "Optical Instruments",
    "difficulty": "Easy",
    "text": "In a compound microscope, the intermediate image formed by the objective lens is:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Real, inverted, and magnified"
      },
      {
        "key": "B",
        "text": "Virtual, erect, and magnified"
      },
      {
        "key": "C",
        "text": "Real, erect, and diminished"
      },
      {
        "key": "D",
        "text": "Virtual, inverted, and magnified"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In a compound microscope, the objective lens forms a real, inverted, and magnified intermediate image. This image then serves as an object for the eyepiece lens, which acts as a simple magnifying glass to produce a final virtual, inverted, magnified image.\n\n💡 Exam Tip: Objective forms Real, Inverted, Magnified image. Eyepiece acts as magnifier to produce Final Virtual, Inverted, Highly Magnified image."
  },
  {
    "id": 1034,
    "questionNumber": 34,
    "subject": "Physics",
    "year": 2024,
    "topic": "Defects of Vision",
    "difficulty": "Easy",
    "text": "A person suffering from myopia (short-sightedness) cannot see distant objects clearly because parallel light rays are focused in front of the retina. This defect is corrected using a:",
    "imageSvg": "<svg viewBox=\"0 0 380 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"150\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Eyeball -->\n      <circle cx=\"280\" cy=\"75\" r=\"50\" fill=\"#FFFFFF\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <path d=\"M 230 50 A 50 50 0 0 1 230 100\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n      <!-- Concave diverging spectacle lens -->\n      <path d=\"M 120 40 Q 130 75 120 110 L 135 110 Q 125 75 135 40 Z\" fill=\"#EEF2FF\" stroke=\"#4F46E5\" stroke-width=\"2\"/>\n      <!-- Parallel rays diverged to focus exactly on retina -->\n      <line x1=\"40\" y1=\"55\" x2=\"122\" y2=\"55\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <line x1=\"40\" y1=\"95\" x2=\"122\" y2=\"95\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <line x1=\"133\" y1=\"52\" x2=\"230\" y2=\"50\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <line x1=\"133\" y1=\"98\" x2=\"230\" y2=\"100\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <line x1=\"230\" y1=\"50\" x2=\"330\" y2=\"75\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <line x1=\"230\" y1=\"100\" x2=\"330\" y2=\"75\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <text x=\"330\" y=\"65\" font-size=\"9\" font-weight=\"bold\" fill=\"#059669\">Retina</text>\n      <text x=\"128\" y=\"130\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">Concave Lens</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Diverging (concave) lens"
      },
      {
        "key": "B",
        "text": "Converging (convex) lens"
      },
      {
        "key": "C",
        "text": "Bifocal lens"
      },
      {
        "key": "D",
        "text": "Cylindrical lens"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Myopia is caused by an eyeball that is too long or a lens that is too convergent, focusing rays in front of the retina. A diverging (concave) lens spreads the rays slightly before they enter the eye, allowing them to focus exactly onto the retina.\n\n💡 Exam Tip: Myopia (short-sight) = Concave (diverging) lens. Hypermetropia (long-sight) = Convex (converging) lens. Astigmatism = Cylindrical lens."
  },
  {
    "id": 1035,
    "questionNumber": 35,
    "subject": "Physics",
    "year": 2024,
    "topic": "Dispersion of Light",
    "difficulty": "Easy",
    "text": "When a beam of white light passes through a glass triangular prism, which color of light is deviated through the GREATEST angle?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Glass Prism -->\n      <polygon points=\"180,30 250,150 110,150\" fill=\"#EFF6FF\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n      <!-- Incident White Beam -->\n      <line x1=\"40\" y1=\"120\" x2=\"135\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"3\"/>\n      <text x=\"80\" y=\"98\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\">White light</text>\n      <!-- Emergent dispersed spectrum -->\n      <line x1=\"210\" y1=\"105\" x2=\"330\" y2=\"90\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n      <text x=\"340\" y=\"94\" font-size=\"10\" font-weight=\"bold\" fill=\"#EF4444\">Red (least deviated)</text>\n      <line x1=\"215\" y1=\"115\" x2=\"330\" y2=\"140\" stroke=\"#8B5CF6\" stroke-width=\"2\"/>\n      <text x=\"340\" y=\"144\" font-size=\"10\" font-weight=\"bold\" fill=\"#8B5CF6\">Violet (most deviated)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Violet"
      },
      {
        "key": "B",
        "text": "Red"
      },
      {
        "key": "C",
        "text": "Yellow"
      },
      {
        "key": "D",
        "text": "Green"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Violet light has the shortest wavelength and the highest refractive index in glass, causing it to travel slowest and deviate the most. Red light has the longest wavelength and deviates the least (ROYGBIV).\n\n💡 Exam Tip: Red = Longest wavelength, least deviated. Violet = Shortest wavelength, most deviated."
  },
  {
    "id": 1036,
    "questionNumber": 36,
    "subject": "Physics",
    "year": 2024,
    "topic": "Sound & Speed of Waves",
    "difficulty": "Medium",
    "text": "A sound wave of frequency 512 Hz travels through air at 340 m/s. What is the wavelength of the sound wave?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "0.664 m"
      },
      {
        "key": "B",
        "text": "1.506 m"
      },
      {
        "key": "C",
        "text": "0.332 m"
      },
      {
        "key": "D",
        "text": "0.850 m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Using the wave formula v = fλ:\nλ = v / f = 340 / 512 ≈ 0.664 m.\n\n💡 Exam Tip: Fundamental wave equation v = fλ applies to all mechanical and electromagnetic waves."
  },
  {
    "id": 1037,
    "questionNumber": 37,
    "subject": "Physics",
    "year": 2024,
    "topic": "Acoustics & Resonance Tube",
    "difficulty": "Hard",
    "text": "In a resonance tube experiment, the first resonance (fundamental) occurs when the length of the vibrating air column is 16 cm. If the speed of sound is 330 m/s, neglecting end correction, calculate the frequency of the tuning fork.",
    "imageSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-xs mx-auto\">\n      <rect width=\"320\" height=\"220\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Glass tube -->\n      <line x1=\"120\" y1=\"30\" x2=\"120\" y2=\"180\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"180\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <!-- Water level (Node) -->\n      <rect x=\"122\" y=\"130\" width=\"56\" height=\"50\" fill=\"#93C5FD\"/>\n      <line x1=\"120\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n      <text x=\"150\" y=\"160\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E3A8A\" text-anchor=\"middle\">Water</text>\n      <!-- Standing wave mode: 1/4 wavelength -->\n      <path d=\"M 122 30 Q 150 80 150 130 Q 150 80 178 30\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n      <!-- Tuning fork at top -->\n      <path d=\"M 140 10 L 140 25 M 160 10 L 160 25 M 140 25 L 160 25 M 150 25 L 150 35\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <!-- Length L -->\n      <line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"130\" stroke=\"#059669\" stroke-width=\"2\"/>\n      <text x=\"210\" y=\"85\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">L = 16 cm (λ/4)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "515.6 Hz"
      },
      {
        "key": "B",
        "text": "1031.2 Hz"
      },
      {
        "key": "C",
        "text": "257.8 Hz"
      },
      {
        "key": "D",
        "text": "480.0 Hz"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For a closed pipe at fundamental resonance, length L = λ / 4.\nλ = 4L = 4 × 0.16 m = 0.64 m.\nFrequency f = v / λ = 330 / 0.64 ≈ 515.6 Hz.\n\n💡 Exam Tip: Closed pipe: L = λ/4 (fundamental, f = v/4L). Open pipe: L = λ/2 (fundamental, f = v/2L)."
  },
  {
    "id": 1038,
    "questionNumber": 38,
    "subject": "Physics",
    "year": 2024,
    "topic": "Vibrations in Strings",
    "difficulty": "Medium",
    "text": "The diagram shows a stationary wave on a stretched string of length 1.2 m vibrating in 3 loops. What is the wavelength of the wave?",
    "imageSvg": "<svg viewBox=\"0 0 420 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\">\n      <rect width=\"420\" height=\"160\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Bridges at ends -->\n      <polygon points=\"50,110 60,80 70,110\" fill=\"#334155\"/>\n      <polygon points=\"350,110 360,80 370,110\" fill=\"#334155\"/>\n      <!-- Stationary wave 3 loops -->\n      <path d=\"M 60 80 Q 110 30 160 80 Q 210 30 260 80 Q 310 30 360 80\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"2.5\"/>\n      <path d=\"M 60 80 Q 110 130 160 80 Q 210 130 260 80 Q 310 130 360 80\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"2.5\" stroke-dasharray=\"4\"/>\n      <!-- Nodes and Antinodes labels -->\n      <circle cx=\"60\" cy=\"80\" r=\"3\" fill=\"#DC2626\"/>\n      <circle cx=\"160\" cy=\"80\" r=\"3\" fill=\"#DC2626\"/>\n      <circle cx=\"260\" cy=\"80\" r=\"3\" fill=\"#DC2626\"/>\n      <circle cx=\"360\" cy=\"80\" r=\"3\" fill=\"#DC2626\"/>\n      <text x=\"160\" y=\"98\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">Node</text>\n      <text x=\"210\" y=\"25\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">Antinode</text>\n      <!-- Total length label -->\n      <line x1=\"60\" y1=\"130\" x2=\"360\" y2=\"130\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <text x=\"210\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Total Length L = 1.2 m</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "0.8 m"
      },
      {
        "key": "B",
        "text": "0.4 m"
      },
      {
        "key": "C",
        "text": "1.2 m"
      },
      {
        "key": "D",
        "text": "1.6 m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Each loop represents half a wavelength (λ / 2).\nFor 3 loops: L = 3(λ / 2) = 1.5λ.\n1.2 = 1.5λ ⇒ λ = 1.2 / 1.5 = 0.8 m.\n\n💡 Exam Tip: Distance between two consecutive nodes = λ/2. Total string length with n loops is L = n(λ/2)."
  },
  {
    "id": 1039,
    "questionNumber": 39,
    "subject": "Physics",
    "year": 2024,
    "topic": "Doppler Effect",
    "difficulty": "Easy",
    "text": "An ambulance emitting a continuous siren approaches a stationary observer. The pitch (frequency) of the sound heard by the observer is:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Higher than the emitted frequency"
      },
      {
        "key": "B",
        "text": "Lower than the emitted frequency"
      },
      {
        "key": "C",
        "text": "The same as the emitted frequency"
      },
      {
        "key": "D",
        "text": "Zero"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Due to the Doppler effect, as a sound source moves towards an observer, sound wave crests are compressed closer together, reducing apparent wavelength and increasing the observed frequency (higher pitch).\n\n💡 Exam Tip: Approaching source = higher observed frequency (apparent wavelength compresses). Receding source = lower observed frequency."
  },
  {
    "id": 1040,
    "questionNumber": 40,
    "subject": "Physics",
    "year": 2024,
    "topic": "Polarization",
    "difficulty": "Easy",
    "text": "Which of the following wave phenomena confirms that light is a transverse wave and NOT a longitudinal wave?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Polarization"
      },
      {
        "key": "B",
        "text": "Diffraction"
      },
      {
        "key": "C",
        "text": "Interference"
      },
      {
        "key": "D",
        "text": "Refraction"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Only transverse waves (where vibrations occur perpendicular to the direction of wave travel) can be polarized. Longitudinal waves like sound cannot be polarized because their oscillations are parallel to the direction of propagation.\n\n💡 Exam Tip: Diffraction, interference, and refraction occur in both transverse and longitudinal waves. Polarization ONLY occurs in transverse waves!"
  },
  {
    "id": 1041,
    "questionNumber": 41,
    "subject": "Physics",
    "year": 2024,
    "topic": "Electrostatics & Coulomb's Law",
    "difficulty": "Medium",
    "text": "Two point charges of +4 μC and +6 μC are separated by a distance of 0.2 m in a vacuum. Calculate the repulsive electrostatic force between them. [1 / (4πε₀) = 9.0 × 10⁹ N·m²/C²]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "5.4 N"
      },
      {
        "key": "B",
        "text": "2.7 N"
      },
      {
        "key": "C",
        "text": "10.8 N"
      },
      {
        "key": "D",
        "text": "1.35 N"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By Coulomb's law: F = (k × |q₁ × q₂|) / r²\nF = (9 × 10⁹ × 4 × 10⁻⁶ × 6 × 10⁻⁶) / (0.2)²\nF = (216 × 10⁻³) / 0.04 = 0.216 / 0.04 = 5.4 N.\n\n💡 Exam Tip: Coulomb's Law F = k q₁ q₂ / r² obeys inverse-square law. Convert microcoulombs (μC) to Coulombs (× 10⁻⁶)."
  },
  {
    "id": 1042,
    "questionNumber": 42,
    "subject": "Physics",
    "year": 2024,
    "topic": "Electric Fields",
    "difficulty": "Easy",
    "text": "The electric field pattern between two opposite point charges shows that electric field lines:",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Charges -->\n      <circle cx=\"100\" cy=\"90\" r=\"18\" fill=\"#EF4444\"/>\n      <text x=\"100\" y=\"96\" font-size=\"18\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">+</text>\n      <circle cx=\"280\" cy=\"90\" r=\"18\" fill=\"#3B82F6\"/>\n      <text x=\"280\" y=\"96\" font-size=\"18\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">−</text>\n      <!-- Central straight line -->\n      <line x1=\"118\" y1=\"90\" x2=\"262\" y2=\"90\" stroke=\"#6366F1\" stroke-width=\"2\"/>\n      <polygon points=\"190,86 198,90 190,94\" fill=\"#6366F1\"/>\n      <!-- Curved upper lines -->\n      <path d=\"M 112 77 Q 190 20 268 77\" fill=\"none\" stroke=\"#6366F1\" stroke-width=\"2\"/>\n      <polygon points=\"190,45 198,48 190,53\" fill=\"#6366F1\"/>\n      <!-- Curved lower lines -->\n      <path d=\"M 112 103 Q 190 160 268 103\" fill=\"none\" stroke=\"#6366F1\" stroke-width=\"2\"/>\n      <polygon points=\"190,128 198,132 190,136\" fill=\"#6366F1\"/>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Originate from the positive charge and terminate on the negative charge"
      },
      {
        "key": "B",
        "text": "Originate from the negative charge and terminate on the positive charge"
      },
      {
        "key": "C",
        "text": "Intersect each other at the midpoint"
      },
      {
        "key": "D",
        "text": "Form closed circular continuous loops"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By convention, electric field lines represent the path a positive test charge would take. Thus, they always emerge from positive charges and end on negative charges, and never cross one another.\n\n💡 Exam Tip: Electric field lines start on (+) and end on (-). They never cross (if they did, the field would have two directions at one point)."
  },
  {
    "id": 1043,
    "questionNumber": 43,
    "subject": "Physics",
    "year": 2024,
    "topic": "Capacitors",
    "difficulty": "Medium",
    "text": "In the circuit shown, two capacitors of 4 μF and 6 μF are connected in parallel, and this combination is connected in series with a 10 μF capacitor. What is the equivalent capacitance of the network?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Main line left -->\n      <line x1=\"30\" y1=\"90\" x2=\"80\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <!-- Parallel branch split -->\n      <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <!-- Top branch 4uF -->\n      <line x1=\"80\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"65\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n      <line x1=\"140\" y1=\"35\" x2=\"140\" y2=\"65\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n      <line x1=\"140\" y1=\"50\" x2=\"190\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <text x=\"135\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\" text-anchor=\"middle\">4 μF</text>\n      <!-- Bottom branch 6uF -->\n      <line x1=\"80\" y1=\"130\" x2=\"130\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <line x1=\"130\" y1=\"115\" x2=\"130\" y2=\"145\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n      <line x1=\"140\" y1=\"115\" x2=\"140\" y2=\"145\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n      <line x1=\"140\" y1=\"130\" x2=\"190\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <text x=\"135\" y=\"162\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\" text-anchor=\"middle\">6 μF</text>\n      <!-- Rejoin -->\n      <line x1=\"190\" y1=\"50\" x2=\"190\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <line x1=\"190\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <!-- Series 10uF -->\n      <line x1=\"250\" y1=\"75\" x2=\"250\" y2=\"105\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <line x1=\"260\" y1=\"75\" x2=\"260\" y2=\"105\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <line x1=\"260\" y1=\"90\" x2=\"340\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <text x=\"255\" y=\"68\" font-size=\"11\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">10 μF</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "5.0 μF"
      },
      {
        "key": "B",
        "text": "20.0 μF"
      },
      {
        "key": "C",
        "text": "2.4 μF"
      },
      {
        "key": "D",
        "text": "8.0 μF"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Parallel capacitors add directly: C_p = 4 μF + 6 μF = 10 μF.\nThis 10 μF combination is in series with the other 10 μF capacitor:\n1 / C_eq = 1 / 10 + 1 / 10 = 2 / 10 = 1 / 5.\nC_eq = 5.0 μF.\n\n💡 Exam Tip: Capacitors in parallel ADD directly (C = C₁ + C₂). Capacitors in series combine reciprocally like parallel resistors!"
  },
  {
    "id": 1044,
    "questionNumber": 44,
    "subject": "Physics",
    "year": 2024,
    "topic": "Current Electricity & Internal Resistance",
    "difficulty": "Medium",
    "text": "A battery of e.m.f. 12 V and internal resistance r is connected across a 5 Ω resistor. If the circuit current is 2.0 A, determine the internal resistance r of the battery.",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Rectangular circuit loop -->\n      <rect x=\"60\" y=\"40\" width=\"260\" height=\"100\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Battery top -->\n      <line x1=\"160\" y1=\"30\" x2=\"160\" y2=\"50\" stroke=\"#EF4444\" stroke-width=\"3\"/>\n      <line x1=\"170\" y1=\"35\" x2=\"170\" y2=\"45\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <text x=\"165\" y=\"24\" font-size=\"10\" font-weight=\"bold\" fill=\"#EF4444\" text-anchor=\"middle\">E = 12V, r</text>\n      <!-- Resistor bottom -->\n      <rect x=\"150\" y=\"132\" width=\"60\" height=\"16\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <text x=\"180\" y=\"144\" font-size=\"10\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">R = 5 Ω</text>\n      <!-- Current Arrow -->\n      <polygon points=\"280,85 285,95 290,85\" fill=\"#2563EB\"/>\n      <text x=\"295\" y=\"94\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">I = 2.0 A</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "1.0 Ω"
      },
      {
        "key": "B",
        "text": "2.0 Ω"
      },
      {
        "key": "C",
        "text": "0.5 Ω"
      },
      {
        "key": "D",
        "text": "2.5 Ω"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From Ohm's law for an entire circuit: E = I(R + r)\n12 = 2(5 + r)\n6 = 5 + r ⇒ r = 1.0 Ω.\n\n💡 Exam Tip: Remember: Terminal potential difference V = E - Ir. Lost volts across internal resistance = Ir."
  },
  {
    "id": 1045,
    "questionNumber": 45,
    "subject": "Physics",
    "year": 2024,
    "topic": "Resistor Networks",
    "difficulty": "Medium",
    "text": "In the network shown, two parallel resistors of 6 Ω and 12 Ω are connected in series with a 4 Ω resistor across a 24 V supply. Calculate the total current drawn from the supply.",
    "imageSvg": "<svg viewBox=\"0 0 420 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\">\n      <rect width=\"420\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Source left -->\n      <line x1=\"40\" y1=\"90\" x2=\"90\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Parallel branch -->\n      <line x1=\"90\" y1=\"50\" x2=\"90\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Top 6 ohm -->\n      <line x1=\"90\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <rect x=\"130\" y=\"42\" width=\"50\" height=\"16\" fill=\"#EEF2FF\" stroke=\"#4F46E5\" stroke-width=\"2\"/>\n      <text x=\"155\" y=\"54\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">6 Ω</text>\n      <line x1=\"180\" y1=\"50\" x2=\"220\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Bottom 12 ohm -->\n      <line x1=\"90\" y1=\"130\" x2=\"130\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <rect x=\"130\" y=\"122\" width=\"50\" height=\"16\" fill=\"#EEF2FF\" stroke=\"#4F46E5\" stroke-width=\"2\"/>\n      <text x=\"155\" y=\"134\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">12 Ω</text>\n      <line x1=\"180\" y1=\"130\" x2=\"220\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Rejoin -->\n      <line x1=\"220\" y1=\"50\" x2=\"220\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"220\" y1=\"90\" x2=\"270\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Series 4 ohm -->\n      <rect x=\"270\" y=\"82\" width=\"50\" height=\"16\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <text x=\"295\" y=\"94\" font-size=\"10\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">4 Ω</text>\n      <line x1=\"320\" y1=\"90\" x2=\"380\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Supply text -->\n      <text x=\"40\" y=\"70\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">24 V</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "3.0 A"
      },
      {
        "key": "B",
        "text": "4.0 A"
      },
      {
        "key": "C",
        "text": "2.0 A"
      },
      {
        "key": "D",
        "text": "6.0 A"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Equivalent resistance of parallel branch: R_p = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω.\nTotal circuit resistance R_total = R_p + 4 Ω = 4 + 4 = 8 Ω.\nCircuit current I = V / R_total = 24 / 8 = 3.0 A.\n\n💡 Exam Tip: Product over sum shortcut for two parallel resistors: R = (R₁ × R₂) / (R₁ + R₂)."
  },
  {
    "id": 1046,
    "questionNumber": 46,
    "subject": "Physics",
    "year": 2024,
    "topic": "Wheatstone Bridge",
    "difficulty": "Medium",
    "text": "The Wheatstone bridge circuit shown is balanced when no current flows through the central galvanometer G. What is the value of the unknown resistor R_x?",
    "imageSvg": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Diamond bridge -->\n      <line x1=\"190\" y1=\"30\" x2=\"90\" y2=\"100\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"190\" y1=\"30\" x2=\"290\" y2=\"100\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"90\" y1=\"100\" x2=\"190\" y2=\"170\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"290\" y1=\"100\" x2=\"190\" y2=\"170\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Central Galvanometer -->\n      <line x1=\"190\" y1=\"30\" x2=\"190\" y2=\"80\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"190\" cy=\"100\" r=\"16\" fill=\"#FFFFFF\" stroke=\"#4F46E5\" stroke-width=\"2\"/>\n      <text x=\"190\" y=\"105\" font-size=\"12\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">G</text>\n      <line x1=\"190\" y1=\"116\" x2=\"190\" y2=\"170\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Resistor labels -->\n      <text x=\"125\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">R₁ = 4 Ω</text>\n      <text x=\"235\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">R₂ = 6 Ω</text>\n      <text x=\"125\" y=\"150\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">R₃ = 8 Ω</text>\n      <text x=\"245\" y=\"150\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">R_x = ?</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "12 Ω"
      },
      {
        "key": "B",
        "text": "16 Ω"
      },
      {
        "key": "C",
        "text": "8 Ω"
      },
      {
        "key": "D",
        "text": "10 Ω"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For a balanced Wheatstone bridge: R₁ / R₂ = R₃ / R_x.\n4 / 6 = 8 / R_x\n4 R_x = 48 ⇒ R_x = 12 Ω.\n\n💡 Exam Tip: Wheatstone bridge balance condition: Opposite products are equal (R₁ × R_x = R₂ × R₃)."
  },
  {
    "id": 1047,
    "questionNumber": 47,
    "subject": "Physics",
    "year": 2024,
    "topic": "Potentiometer",
    "difficulty": "Medium",
    "text": "A slide-wire potentiometer of length 100 cm is used to compare the e.m.f. of two cells. The balance point is obtained at 60 cm for cell E₁ of e.m.f. 1.5 V. If cell E₂ gives a balance length of 80 cm, calculate the e.m.f. of cell E₂.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "2.0 V"
      },
      {
        "key": "B",
        "text": "1.8 V"
      },
      {
        "key": "C",
        "text": "1.2 V"
      },
      {
        "key": "D",
        "text": "2.5 V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The e.m.f. of a cell on a potentiometer is directly proportional to the balancing length L:\nE₁ / E₂ = L₁ / L₂\n1.5 / E₂ = 60 / 80 = 3 / 4\n3 E₂ = 6.0 ⇒ E₂ = 2.0 V.\n\n💡 Exam Tip: Potentiometers measure true e.m.f. without drawing any current from the cell at balance point."
  },
  {
    "id": 1048,
    "questionNumber": 48,
    "subject": "Physics",
    "year": 2024,
    "topic": "Electrical Energy & Power",
    "difficulty": "Medium",
    "text": "An electric boiling kettle rated 2.0 kW is used for 3 hours daily for 30 days. If the cost of electricity is ₦50 per kWh, calculate the monthly electricity bill for running the kettle.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "₦9,000"
      },
      {
        "key": "B",
        "text": "₦4,500"
      },
      {
        "key": "C",
        "text": "₦18,000"
      },
      {
        "key": "D",
        "text": "₦3,000"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Energy consumed daily = Power (kW) × time (h) = 2.0 kW × 3 h = 6 kWh.\nTotal energy in 30 days = 6 × 30 = 180 kWh.\nTotal cost = 180 kWh × ₦50/kWh = ₦9,000.\n\n💡 Exam Tip: Electrical energy consumed in units (kWh) = (Power in Watts × Hours) / 1000."
  },
  {
    "id": 1049,
    "questionNumber": 49,
    "subject": "Physics",
    "year": 2024,
    "topic": "Electromagnetism & Force",
    "difficulty": "Medium",
    "text": "A straight wire of length 0.5 m carrying a current of 4.0 A is placed in a uniform magnetic field of 0.6 T at an angle of 30° to the magnetic field lines. Calculate the magnetic force on the wire.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "0.6 N"
      },
      {
        "key": "B",
        "text": "1.2 N"
      },
      {
        "key": "C",
        "text": "0.3 N"
      },
      {
        "key": "D",
        "text": "2.4 N"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Magnetic force F = B I L sin θ.\nF = 0.6 × 4.0 × 0.5 × sin 30° = 1.2 × 0.5 = 0.6 N.\n\n💡 Exam Tip: Force on a current-carrying wire F = BIL sin θ. Force is maximum when perpendicular (90°) and zero when parallel (0°)."
  },
  {
    "id": 1050,
    "questionNumber": 50,
    "subject": "Physics",
    "year": 2024,
    "topic": "Magnetic Fields",
    "difficulty": "Easy",
    "text": "The direction of the magnetic field created around a straight current-carrying wire can be determined using:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Right-hand grip rule"
      },
      {
        "key": "B",
        "text": "Fleming's left-hand rule"
      },
      {
        "key": "C",
        "text": "Lenz's law"
      },
      {
        "key": "D",
        "text": "Coulomb's law"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The right-hand grip rule states that if the thumb points along the direction of conventional current, the curling fingers indicate the circular direction of magnetic field lines.\n\n💡 Exam Tip: Right-hand grip rule = Magnetic field around current. Fleming's Left Hand = Motor force. Fleming's Right Hand = Dynamo induced current."
  },
  {
    "id": 1051,
    "questionNumber": 51,
    "subject": "Physics",
    "year": 2024,
    "topic": "Electromagnetic Induction",
    "difficulty": "Easy",
    "text": "Lenz's law of electromagnetic induction is a direct consequence of the law of conservation of:",
    "imageSvg": "<svg viewBox=\"0 0 380 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"160\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Solenoid coil -->\n      <rect x=\"60\" y=\"55\" width=\"160\" height=\"50\" fill=\"#F1F5F9\" stroke=\"#334155\" stroke-width=\"2\" rx=\"4\"/>\n      <!-- Wire loops -->\n      <path d=\"M 80 55 C 80 35, 100 35, 100 55 M 110 55 C 110 35, 130 35, 130 55 M 140 55 C 140 35, 160 35, 160 55 M 170 55 C 170 35, 190 35, 190 55\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"3\"/>\n      <!-- Bar Magnet entering -->\n      <rect x=\"270\" y=\"65\" width=\"45\" height=\"30\" fill=\"#EF4444\"/>\n      <text x=\"292\" y=\"85\" font-size=\"12\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">N</text>\n      <rect x=\"315\" y=\"65\" width=\"45\" height=\"30\" fill=\"#3B82F6\"/>\n      <text x=\"337\" y=\"85\" font-size=\"12\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">S</text>\n      <!-- Motion Arrow -->\n      <line x1=\"260\" y1=\"80\" x2=\"230\" y2=\"80\" stroke=\"#DC2626\" stroke-width=\"2.5\"/>\n      <polygon points=\"234,75 225,80 234,85\" fill=\"#DC2626\"/>\n      <text x=\"245\" y=\"102\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">v (push in)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Energy"
      },
      {
        "key": "B",
        "text": "Momentum"
      },
      {
        "key": "C",
        "text": "Charge"
      },
      {
        "key": "D",
        "text": "Mass"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Lenz's law states that an induced electromotive force always opposes the change in magnetic flux that causes it. This ensures that mechanical work done against the opposing force is converted into electrical energy, satisfying conservation of energy.\n\n💡 Exam Tip: Lenz's Law = Conservation of Energy. Kirchhoff's Current Law = Conservation of Charge. Kirchhoff's Voltage Law = Conservation of Energy."
  },
  {
    "id": 1052,
    "questionNumber": 52,
    "subject": "Physics",
    "year": 2024,
    "topic": "Alternating Current & Resonance",
    "difficulty": "Hard",
    "text": "A series R-L-C circuit has an inductance of 0.2 H and a capacitance of 5.0 μF. Calculate the resonant frequency of the circuit.",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Loop -->\n      <rect x=\"50\" y=\"40\" width=\"280\" height=\"100\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Resistor -->\n      <rect x=\"90\" y=\"32\" width=\"40\" height=\"16\" fill=\"#EEF2FF\" stroke=\"#4F46E5\" stroke-width=\"2\"/>\n      <text x=\"110\" y=\"44\" font-size=\"9\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">R</text>\n      <!-- Inductor -->\n      <path d=\"M 160 40 C 160 25, 175 25, 175 40 C 175 25, 190 25, 190 40 C 190 25, 205 25, 205 40\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <text x=\"182\" y=\"22\" font-size=\"9\" font-weight=\"bold\" fill=\"#D97706\" text-anchor=\"middle\">L=0.2H</text>\n      <!-- Capacitor -->\n      <line x1=\"245\" y1=\"28\" x2=\"245\" y2=\"52\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n      <line x1=\"255\" y1=\"28\" x2=\"255\" y2=\"52\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n      <text x=\"250\" y=\"20\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\" text-anchor=\"middle\">C=5μF</text>\n      <!-- AC source bottom -->\n      <circle cx=\"190\" cy=\"140\" r=\"14\" fill=\"#FFFFFF\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <path d=\"M 182 140 Q 186 134 190 140 T 198 140\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"190\" y=\"168\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">AC Source</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "159.2 Hz"
      },
      {
        "key": "B",
        "text": "318.3 Hz"
      },
      {
        "key": "C",
        "text": "500.0 Hz"
      },
      {
        "key": "D",
        "text": "79.6 Hz"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Resonant frequency f₀ = 1 / (2π√(LC)).\nLC = 0.2 × 5 × 10⁻⁶ = 1.0 × 10⁻⁶.\n√(LC) = √(10⁻⁶) = 10⁻³.\nf₀ = 1 / (2π × 10⁻³) = 1000 / (2π) = 1000 / 6.283 ≈ 159.2 Hz.\n\n💡 Exam Tip: At resonance in series RLC, inductive reactance equals capacitive reactance (X_L = X_C), impedance is minimum (Z = R), and current is maximum."
  },
  {
    "id": 1053,
    "questionNumber": 53,
    "subject": "Physics",
    "year": 2024,
    "topic": "Transformers",
    "difficulty": "Medium",
    "text": "A step-down transformer transforms 240 V mains down to 12 V to operate a lamp drawing 4 A. Assuming 100% efficiency, what current is drawn by the primary coil?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Soft iron core -->\n      <rect x=\"110\" y=\"30\" width=\"160\" height=\"120\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"16\" rx=\"6\"/>\n      <rect x=\"126\" y=\"46\" width=\"128\" height=\"88\" fill=\"#F8FAFC\"/>\n      <!-- Primary winding -->\n      <path d=\"M 100 50 C 90 50, 90 70, 100 70 M 100 70 C 90 70, 90 90, 100 90 M 100 90 C 90 90, 90 110, 100 110 M 100 110 C 90 110, 90 130, 100 130\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"3\"/>\n      <text x=\"60\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#EF4444\">Primary</text>\n      <text x=\"60\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#EF4444\">240 V</text>\n      <!-- Secondary winding -->\n      <path d=\"M 270 70 C 280 70, 280 90, 270 90 M 270 90 C 280 90, 280 110, 270 110\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"3\"/>\n      <text x=\"310\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#3B82F6\">Secondary</text>\n      <text x=\"310\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#3B82F6\">12 V, 4A</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "0.2 A"
      },
      {
        "key": "B",
        "text": "0.5 A"
      },
      {
        "key": "C",
        "text": "1.0 A"
      },
      {
        "key": "D",
        "text": "0.1 A"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For an ideal transformer, Input Power = Output Power:\nV_p × I_p = V_s × I_s\n240 × I_p = 12 × 4\n240 I_p = 48 ⇒ I_p = 48 / 240 = 0.2 A.\n\n💡 Exam Tip: Transformer ratios: V_p / V_s = N_p / N_s = I_s / I_p. Note the inverse relation for current!"
  },
  {
    "id": 1054,
    "questionNumber": 54,
    "subject": "Physics",
    "year": 2024,
    "topic": "Meters Conversion",
    "difficulty": "Hard",
    "text": "A moving coil galvanometer has a full-scale deflection of 10 mA and a coil resistance of 20 Ω. Calculate the shunt resistance required to convert it into an ammeter reading up to 5 A.",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "0.040 Ω"
      },
      {
        "key": "B",
        "text": "0.400 Ω"
      },
      {
        "key": "C",
        "text": "0.025 Ω"
      },
      {
        "key": "D",
        "text": "0.050 Ω"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Shunt resistance R_s is connected in parallel with the galvanometer:\nR_s = (I_g × R_g) / (I - I_g)\nI_g = 10 mA = 0.01 A, R_g = 20 Ω, I = 5 A.\nR_s = (0.01 × 20) / (5 - 0.01) = 0.2 / 4.99 ≈ 0.040 Ω.\n\n💡 Exam Tip: Ammeter: low resistance SHUNT in parallel. Voltmeter: high resistance MULTIPLIER in series."
  },
  {
    "id": 1055,
    "questionNumber": 55,
    "subject": "Physics",
    "year": 2024,
    "topic": "AC Circuits",
    "difficulty": "Easy",
    "text": "If an alternating voltage is represented by V = 311 sin(100πt) volts, what is the root-mean-square (r.m.s.) value of the voltage?",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "220 V"
      },
      {
        "key": "B",
        "text": "311 V"
      },
      {
        "key": "C",
        "text": "110 V"
      },
      {
        "key": "D",
        "text": "440 V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Peak voltage V₀ = 311 V.\nRoot-mean-square voltage V_rms = V₀ / √2 = 311 / 1.414 ≈ 220 V.\n\n💡 Exam Tip: Standard domestic AC in Nigeria: Peak is ~311 V, which gives 220 V r.m.s."
  },
  {
    "id": 1056,
    "questionNumber": 56,
    "subject": "Physics",
    "year": 2024,
    "topic": "Cathode Rays",
    "difficulty": "Medium",
    "text": "A beam of cathode rays is directed between two charged parallel plates. Which diagram correctly indicates the path of the beam?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Positive top plate -->\n      <rect x=\"100\" y=\"35\" width=\"160\" height=\"10\" fill=\"#EF4444\" rx=\"2\"/>\n      <text x=\"180\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#EF4444\" text-anchor=\"middle\">+ Positive Plate</text>\n      <!-- Negative bottom plate -->\n      <rect x=\"100\" y=\"135\" width=\"160\" height=\"10\" fill=\"#3B82F6\" rx=\"2\"/>\n      <text x=\"180\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#3B82F6\" text-anchor=\"middle\">− Negative Plate</text>\n      <!-- Cathode beam curving towards positive plate -->\n      <path d=\"M 40 90 L 120 90 Q 200 90 280 50 L 340 40\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"3\"/>\n      <polygon points=\"334,35 344,39 336,44\" fill=\"#10B981\"/>\n      <text x=\"50\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#10B981\">Electron Beam</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Deflects upwards towards the positive plate"
      },
      {
        "key": "B",
        "text": "Deflects downwards towards the negative plate"
      },
      {
        "key": "C",
        "text": "Passes straight through without any deflection"
      },
      {
        "key": "D",
        "text": "Reflects backwards towards the cathode"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cathode rays are streams of fast-moving negatively charged electrons. In an electric field, negative charges are attracted to the positive anode plate and repelled by the negative plate, curving upwards.\n\n💡 Exam Tip: Cathode rays are electrons (negative). They deflect towards positive plates in electric fields and obey Fleming's left hand rule in magnetic fields."
  },
  {
    "id": 1057,
    "questionNumber": 57,
    "subject": "Physics",
    "year": 2024,
    "topic": "Photoelectric Effect",
    "difficulty": "Hard",
    "text": "The graph shows the variation of stopping potential V_s with frequency f of incident radiation for a photosensitive metal surface. What does the intercept on the horizontal frequency axis represent?",
    "imageSvg": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Axes -->\n      <line x1=\"50\" y1=\"160\" x2=\"350\" y2=\"160\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"160\" x2=\"50\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Linear line intercepting f-axis at f0 -->\n      <line x1=\"140\" y1=\"160\" x2=\"320\" y2=\"40\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <!-- Threshold frequency f0 -->\n      <circle cx=\"140\" cy=\"160\" r=\"4\" fill=\"#DC2626\"/>\n      <text x=\"140\" y=\"178\" font-size=\"12\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">f₀</text>\n      <!-- Labels -->\n      <text x=\"240\" y=\"190\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Frequency f (Hz)</text>\n      <text x=\"25\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\" transform=\"rotate(-90 25 95)\">Stopping Potential V_s</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Threshold frequency (f₀)"
      },
      {
        "key": "B",
        "text": "Work function in Joules"
      },
      {
        "key": "C",
        "text": "Planck's constant"
      },
      {
        "key": "D",
        "text": "Maximum kinetic energy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Einstein's photoelectric equation: eV_s = hf - W₀ ⇒ V_s = (h/e)f - (W₀/e).\nWhen stopping potential V_s = 0, hf₀ = W₀. Thus, the x-intercept represents the threshold frequency f₀ (the minimum frequency required to emit photoelectrons).\n\n💡 Exam Tip: Slope of V_s vs f graph = h/e. X-intercept = threshold frequency f₀. Y-intercept = -W₀/e."
  },
  {
    "id": 1058,
    "questionNumber": 58,
    "subject": "Physics",
    "year": 2024,
    "topic": "X-Rays",
    "difficulty": "Medium",
    "text": "In an X-ray tube operating at an accelerating potential of 40 kV, what is the minimum wavelength of the emitted X-rays? [h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "0.031 nm"
      },
      {
        "key": "B",
        "text": "0.310 nm"
      },
      {
        "key": "C",
        "text": "0.015 nm"
      },
      {
        "key": "D",
        "text": "0.062 nm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Minimum wavelength λ_min = (h × c) / (e × V).\nλ_min = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (1.6 × 10⁻¹⁹ × 40,000)\nλ_min = (1.989 × 10⁻²⁵) / (6.4 × 10⁻¹⁵) = 3.107 × 10⁻¹¹ m ≈ 0.031 nm.\n\n💡 Exam Tip: X-ray minimum wavelength λ_min = hc / (eV). Higher accelerating potential creates more penetrating (\"harder\") X-rays with shorter wavelength."
  },
  {
    "id": 1059,
    "questionNumber": 59,
    "subject": "Physics",
    "year": 2024,
    "topic": "Wave-Particle Duality",
    "difficulty": "Medium",
    "text": "According to de Broglie's hypothesis, an electron of mass 9.1 × 10⁻³¹ kg moving at 2.0 × 10⁶ m/s exhibits an associated matter wavelength of: [h = 6.63 × 10⁻³⁴ J·s]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "3.64 × 10⁻¹⁰ m"
      },
      {
        "key": "B",
        "text": "1.82 × 10⁻¹⁰ m"
      },
      {
        "key": "C",
        "text": "7.28 × 10⁻¹⁰ m"
      },
      {
        "key": "D",
        "text": "5.46 × 10⁻¹⁰ m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "De Broglie wavelength λ = h / (m × v).\nλ = (6.63 × 10⁻³⁴) / (9.1 × 10⁻³¹ × 2.0 × 10⁶)\nλ = (6.63 × 10⁻³⁴) / (1.82 × 10⁻²⁴) ≈ 3.64 × 10⁻¹⁰ m.\n\n💡 Exam Tip: De Broglie matter wavelength λ = h / p = h / (mv)."
  },
  {
    "id": 1060,
    "questionNumber": 60,
    "subject": "Physics",
    "year": 2024,
    "topic": "Atomic Physics & Energy Levels",
    "difficulty": "Medium",
    "text": "The diagram shows the energy levels of a hydrogen atom. What spectral series is produced when an electron transitions from higher energy levels down to the ground state (n = 1)?",
    "imageSvg": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"200\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Energy lines -->\n      <line x1=\"60\" y1=\"40\" x2=\"320\" y2=\"40\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <text x=\"330\" y=\"44\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">n=∞ (0 eV)</text>\n      <line x1=\"60\" y1=\"65\" x2=\"320\" y2=\"65\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <text x=\"330\" y=\"69\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">n=4 (-0.85 eV)</text>\n      <line x1=\"60\" y1=\"95\" x2=\"320\" y2=\"95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <text x=\"330\" y=\"99\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">n=3 (-1.51 eV)</text>\n      <line x1=\"60\" y1=\"130\" x2=\"320\" y2=\"130\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <text x=\"330\" y=\"134\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">n=2 (-3.40 eV)</text>\n      <line x1=\"60\" y1=\"175\" x2=\"320\" y2=\"175\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <text x=\"330\" y=\"179\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">n=1 (-13.6 eV)</text>\n      <!-- Downward arrows to n=1 -->\n      <line x1=\"120\" y1=\"65\" x2=\"120\" y2=\"175\" stroke=\"#8B5CF6\" stroke-width=\"2\"/>\n      <line x1=\"150\" y1=\"95\" x2=\"150\" y2=\"175\" stroke=\"#8B5CF6\" stroke-width=\"2\"/>\n      <line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"175\" stroke=\"#8B5CF6\" stroke-width=\"2\"/>\n      <polygon points=\"117,167 120,175 123,167\" fill=\"#8B5CF6\"/>\n      <polygon points=\"147,167 150,175 153,167\" fill=\"#8B5CF6\"/>\n      <polygon points=\"177,167 180,175 183,167\" fill=\"#8B5CF6\"/>\n      <text x=\"150\" y=\"192\" font-size=\"11\" font-weight=\"bold\" fill=\"#8B5CF6\" text-anchor=\"middle\">Transitions to n = 1</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Lyman series (Ultraviolet region)"
      },
      {
        "key": "B",
        "text": "Balmer series (Visible light)"
      },
      {
        "key": "C",
        "text": "Paschen series (Infrared region)"
      },
      {
        "key": "D",
        "text": "Brackett series"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Transitions ending on n = 1 belong to the Lyman series (in the ultraviolet spectrum). Transitions ending on n = 2 form the Balmer series (visible spectrum), and transitions ending on n = 3 form the Paschen series (infrared).\n\n💡 Exam Tip: Lyman = n=1 (UV). Balmer = n=2 (Visible). Paschen = n=3 (IR)."
  },
  {
    "id": 1061,
    "questionNumber": 61,
    "subject": "Physics",
    "year": 2024,
    "topic": "Radioactivity & Radiation Types",
    "difficulty": "Medium",
    "text": "A radioactive source emits alpha (α), beta (β), and gamma (γ) radiations through a magnetic field directed perpendicularly into the page. Which radiation suffers the greatest deflection and in which direction?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Lead cavity with source -->\n      <rect x=\"40\" y=\"70\" width=\"50\" height=\"40\" fill=\"#64748B\" rx=\"3\"/>\n      <circle cx=\"65\" cy=\"90\" r=\"6\" fill=\"#F59E0B\"/>\n      <!-- Magnetic field crosses -->\n      <g fill=\"#CBD5E1\" font-size=\"14\" font-weight=\"bold\">\n        <text x=\"130\" y=\"55\">×</text><text x=\"180\" y=\"55\">×</text><text x=\"230\" y=\"55\">×</text>\n        <text x=\"130\" y=\"95\">×</text><text x=\"180\" y=\"95\">×</text><text x=\"230\" y=\"95\">×</text>\n        <text x=\"130\" y=\"135\">×</text><text x=\"180\" y=\"135\">×</text><text x=\"230\" y=\"135\">×</text>\n      </g>\n      <!-- Undeflected gamma -->\n      <line x1=\"90\" y1=\"90\" x2=\"320\" y2=\"90\" stroke=\"#10B981\" stroke-width=\"2.5\"/>\n      <text x=\"330\" y=\"94\" font-size=\"11\" font-weight=\"bold\" fill=\"#10B981\">γ (straight)</text>\n      <!-- Deflected alpha upward -->\n      <path d=\"M 90 90 Q 200 85 280 40\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.5\"/>\n      <text x=\"290\" y=\"40\" font-size=\"11\" font-weight=\"bold\" fill=\"#EF4444\">α (slightly curved)</text>\n      <!-- Deflected beta downward sharply -->\n      <path d=\"M 90 90 Q 170 100 240 160\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.5\"/>\n      <text x=\"250\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#3B82F6\">β (sharply deflected)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Beta particles, because they have a much smaller mass-to-charge ratio"
      },
      {
        "key": "B",
        "text": "Alpha particles, because they carry a double positive charge"
      },
      {
        "key": "C",
        "text": "Gamma rays, because they have zero mass"
      },
      {
        "key": "D",
        "text": "All three suffer identical deflections"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Beta particles (electrons) have a very tiny mass (~1/7300 of an alpha particle) compared to their charge, giving them a very large specific charge (q/m). Therefore, they undergo far greater deflection than heavy alpha particles. Gamma rays carry zero charge and are unaffected.\n\n💡 Exam Tip: Beta = greatest deflection (tiny mass). Alpha = slight deflection in opposite direction. Gamma = zero deflection (neutral)."
  },
  {
    "id": 1062,
    "questionNumber": 62,
    "subject": "Physics",
    "year": 2024,
    "topic": "Radioactive Decay & Half-Life",
    "difficulty": "Medium",
    "text": "A radioactive isotope has a half-life of 4 hours. If an initial sample contains 80 g of the isotope, what mass of the isotope remains undecayed after 16 hours?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Axes -->\n      <line x1=\"50\" y1=\"150\" x2=\"350\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"50\" y1=\"150\" x2=\"50\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Exponential curve -->\n      <path d=\"M 50 30 Q 90 90 130 110 T 210 138 T 330 148\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"3\"/>\n      <!-- Labels -->\n      <text x=\"42\" y=\"34\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">80g (N₀)</text>\n      <text x=\"42\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">40g</text>\n      <text x=\"42\" y=\"120\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">20g</text>\n      <text x=\"130\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">4h</text>\n      <text x=\"210\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">8h</text>\n      <text x=\"290\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">16h</text>\n      <text x=\"200\" y=\"178\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Time Elapsed</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "5.0 g"
      },
      {
        "key": "B",
        "text": "10.0 g"
      },
      {
        "key": "C",
        "text": "2.5 g"
      },
      {
        "key": "D",
        "text": "20.0 g"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Number of half-lives n = Total time / T₁/₂ = 16 / 4 = 4.\nRemaining mass N = N₀ / (2ⁿ) = 80 / (2⁴) = 80 / 16 = 5.0 g.\n\n💡 Exam Tip: Remaining mass after n half-lives: N = N₀ / 2ⁿ. Fraction decayed = 1 - (1 / 2ⁿ)."
  },
  {
    "id": 1063,
    "questionNumber": 63,
    "subject": "Physics",
    "year": 2024,
    "topic": "Nuclear Reactions",
    "difficulty": "Easy",
    "text": "When a Uranium-238 (₉₂U²³⁸) nucleus emits an alpha particle (₂He⁴), the resulting daughter nucleus has an atomic number and mass number of:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Atomic number = 90, Mass number = 234 (Thorium-234)"
      },
      {
        "key": "B",
        "text": "Atomic number = 93, Mass number = 238 (Neptunium-238)"
      },
      {
        "key": "C",
        "text": "Atomic number = 91, Mass number = 234 (Protactinium-234)"
      },
      {
        "key": "D",
        "text": "Atomic number = 90, Mass number = 238"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Alpha decay decreases atomic number (proton count) by 2 and mass number (nucleon count) by 4:\n₉₂U²³⁸ → ₉₀Th²³⁴ + ₂He⁴.\n\n💡 Exam Tip: Alpha decay: A decreases by 4, Z decreases by 2. Beta minus decay: A unchanged, Z increases by 1."
  },
  {
    "id": 1064,
    "questionNumber": 64,
    "subject": "Physics",
    "year": 2024,
    "topic": "Binding Energy & Mass Defect",
    "difficulty": "Hard",
    "text": "If the mass defect in a nuclear fusion reaction is 0.025 a.m.u., calculate the energy released in mega-electron-volts (MeV). [1 a.m.u. = 931.5 MeV]",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "23.29 MeV"
      },
      {
        "key": "B",
        "text": "37.26 MeV"
      },
      {
        "key": "C",
        "text": "14.50 MeV"
      },
      {
        "key": "D",
        "text": "46.58 MeV"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Energy released E = Δm × 931.5 MeV\nE = 0.025 × 931.5 = 23.2875 MeV ≈ 23.29 MeV.\n\n💡 Exam Tip: Direct conversion: 1 atomic mass unit (u) equivalent energy = 931.5 MeV. Just multiply mass defect by 931.5."
  },
  {
    "id": 1065,
    "questionNumber": 65,
    "subject": "Physics",
    "year": 2024,
    "topic": "Semiconductor Physics",
    "difficulty": "Easy",
    "text": "A pure silicon crystal (tetravalent) is converted into a p-type semiconductor by doping it with an impurity atom of:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Boron (trivalent)"
      },
      {
        "key": "B",
        "text": "Phosphorus (pentavalent)"
      },
      {
        "key": "C",
        "text": "Arsenic (pentavalent)"
      },
      {
        "key": "D",
        "text": "Antimony (pentavalent)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Trivalent impurity atoms (e.g. Boron, Aluminium, Gallium, Indium) have 3 valence electrons, leaving a vacant spot (\"hole\") in the covalent bond lattice to form a p-type semiconductor where holes are majority charge carriers.\n\n💡 Exam Tip: p-type = Trivalent dopant (Boron, Indium). n-type = Pentavalent dopant (Phosphorus, Arsenic)."
  },
  {
    "id": 1066,
    "questionNumber": 66,
    "subject": "Physics",
    "year": 2024,
    "topic": "P-N Junction Diode",
    "difficulty": "Medium",
    "text": "The graph illustrates the current-voltage (I-V) characteristic curve of a silicon p-n junction diode. The forward knee voltage (threshold conduction voltage) is approximately:",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Axes -->\n      <line x1=\"80\" y1=\"120\" x2=\"350\" y2=\"120\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"160\" y1=\"170\" x2=\"160\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Forward bias curve -->\n      <path d=\"M 160 120 L 220 120 Q 240 115 250 30\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n      <!-- Knee voltage marker -->\n      <line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <text x=\"230\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">~0.7 V</text>\n      <!-- Labels -->\n      <text x=\"320\" y=\"112\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">V_f (V)</text>\n      <text x=\"175\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">I_f (mA)</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "0.7 V"
      },
      {
        "key": "B",
        "text": "0.3 V"
      },
      {
        "key": "C",
        "text": "1.5 V"
      },
      {
        "key": "D",
        "text": "0.1 V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For a silicon p-n junction diode, the potential barrier is approximately 0.7 V. Conduction increases rapidly once the applied forward bias voltage exceeds this knee voltage. (For germanium, it is 0.3 V).\n\n💡 Exam Tip: Threshold knee voltage: Silicon = 0.7 V; Germanium = 0.3 V."
  },
  {
    "id": 1067,
    "questionNumber": 67,
    "subject": "Physics",
    "year": 2024,
    "topic": "Rectification",
    "difficulty": "Medium",
    "text": "The circuit diagram shows a full-wave bridge rectifier using four semiconductor diodes. How many diodes conduct during any single half-cycle of the AC input?",
    "imageSvg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"180\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Diamond Bridge of 4 diodes -->\n      <polygon points=\"190,30 110,90 190,150 270,90\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Diode Symbols on the arms -->\n      <text x=\"145\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#4F46E5\">D₁</text>\n      <text x=\"235\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#4F46E5\">D₂</text>\n      <text x=\"145\" y=\"130\" font-size=\"11\" font-weight=\"bold\" fill=\"#4F46E5\">D₃</text>\n      <text x=\"235\" y=\"130\" font-size=\"11\" font-weight=\"bold\" fill=\"#4F46E5\">D₄</text>\n      <!-- AC Input left and right -->\n      <circle cx=\"50\" cy=\"90\" r=\"14\" fill=\"#FFFFFF\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n      <path d=\"M 42 90 Q 46 84 50 90 T 58 90\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n      <text x=\"50\" y=\"118\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">AC in</text>\n      <line x1=\"64\" y1=\"90\" x2=\"110\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"270\" y1=\"90\" x2=\"330\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <text x=\"345\" y=\"94\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">Load</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "Two diodes"
      },
      {
        "key": "B",
        "text": "Four diodes"
      },
      {
        "key": "C",
        "text": "One diode"
      },
      {
        "key": "D",
        "text": "Three diodes"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In a bridge rectifier, during the positive half-cycle, one diagonally opposite pair of diodes (e.g. D₁ and D₄) conducts in forward bias while the other pair is reverse-biased. During the negative half-cycle, the other pair (D₂ and D₃) conducts.\n\n💡 Exam Tip: Full-wave bridge rectifier: 4 diodes total, exactly 2 diodes conduct per half-cycle."
  },
  {
    "id": 1068,
    "questionNumber": 68,
    "subject": "Physics",
    "year": 2024,
    "topic": "Logic Gates",
    "difficulty": "Medium",
    "text": "The logic circuit consists of an AND gate followed immediately by a NOT gate. What single basic logic gate is equivalent to this combination?",
    "imageSvg": "<svg viewBox=\"0 0 380 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-sm mx-auto\">\n      <rect width=\"380\" height=\"150\" fill=\"#F8FAFC\" rx=\"10\"/>\n      <!-- Input lines -->\n      <line x1=\"40\" y1=\"55\" x2=\"100\" y2=\"55\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"40\" y1=\"95\" x2=\"100\" y2=\"95\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <text x=\"30\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">A</text>\n      <text x=\"30\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">B</text>\n      <!-- AND Gate -->\n      <path d=\"M 100 40 L 140 40 A 35 35 0 0 1 140 110 L 100 110 Z\" fill=\"#EEF2FF\" stroke=\"#4F46E5\" stroke-width=\"2.5\"/>\n      <text x=\"125\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#4F46E5\" text-anchor=\"middle\">AND</text>\n      <!-- Intermediate line -->\n      <line x1=\"175\" y1=\"75\" x2=\"220\" y2=\"75\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- NOT Gate -->\n      <polygon points=\"220,50 260,75 220,100\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <circle cx=\"265\" cy=\"75\" r=\"4\" fill=\"#FFFFFF\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <!-- Output line -->\n      <line x1=\"270\" y1=\"75\" x2=\"330\" y2=\"75\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <text x=\"345\" y=\"80\" font-size=\"12\" font-weight=\"bold\" fill=\"#DC2626\">Y</text>\n    </svg>",
    "options": [
      {
        "key": "A",
        "text": "NAND gate"
      },
      {
        "key": "B",
        "text": "NOR gate"
      },
      {
        "key": "C",
        "text": "XOR gate"
      },
      {
        "key": "D",
        "text": "OR gate"
      }
    ],
    "correctAnswer": "A",
    "explanation": "An AND gate produces output A · B. The following NOT gate inverts this output to produce Y = NOT(A · B) = (A · B)‾, which defines the NAND gate. NAND is a universal logic gate.\n\n💡 Exam Tip: AND + NOT = NAND gate. OR + NOT = NOR gate. NAND and NOR are universal gates because any logic circuit can be built entirely from them."
  },
  {
    "id": 1069,
    "questionNumber": 69,
    "subject": "Physics",
    "year": 2024,
    "topic": "Thermionic Emission",
    "difficulty": "Easy",
    "text": "Thermionic emission is the process whereby free electrons are liberated from the surface of a metal as a result of:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Thermal energy (heating the metal)"
      },
      {
        "key": "B",
        "text": "Incident light photons"
      },
      {
        "key": "C",
        "text": "High electric field application"
      },
      {
        "key": "D",
        "text": "Bombardment by positive ions"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Thermionic emission occurs when a metal is heated to a high temperature, transferring sufficient thermal kinetic energy to free conduction electrons to overcome the surface work function barrier.\n\n💡 Exam Tip: Thermionic emission = heating. Photoelectric emission = light photons. Secondary emission = electron bombardment."
  },
  {
    "id": 1070,
    "questionNumber": 70,
    "subject": "Physics",
    "year": 2024,
    "topic": "Lasers & Modern Physics",
    "difficulty": "Medium",
    "text": "A LASER beam differs from ordinary light because laser light is strictly:",
    "imageSvg": null,
    "options": [
      {
        "key": "A",
        "text": "Monochromatic, coherent, and highly unidirectional"
      },
      {
        "key": "B",
        "text": "Polychromatic, incoherent, and divergent"
      },
      {
        "key": "C",
        "text": "Composed solely of longitudinal sound waves"
      },
      {
        "key": "D",
        "text": "Infinitely energetic with zero frequency"
      }
    ],
    "correctAnswer": "A",
    "explanation": "LASER (Light Amplification by Stimulated Emission of Radiation) produces light that is monochromatic (single precise wavelength), coherent (all waves in phase), and highly collimated (unidirectional with minimal divergence).\n\n💡 Exam Tip: Key properties of laser: Monochromatic (single λ), Coherent (constant phase relationship), and Collimated (parallel beam)."
  }
];
