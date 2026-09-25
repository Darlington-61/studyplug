export interface TopicPedagogy {
  topicKeywords: string[];
  examYield: string; // e.g. "High Frequency (Avg. 3-4 UTME Questions)"
  tutorMnemonic: {
    title: string;
    hook: string;
    explanation: string;
  };
  classroomAnchor: {
    title: string;
    scenario: string;
    lessonTakeaway: string;
  };
  examinerTrap: {
    pitfall: string;
    whyStudentsFail: string;
    correctStrategy: string;
  };
}

export const STUDYPLUG_PEDAGOGY: Record<string, TopicPedagogy> = {
  // ── ENGLISH LANGUAGE ──
  concord: {
    topicKeywords: ['concord', 'grammatical agreement', 'subject-verb', 'verb agreement'],
    examYield: 'High Frequency (Guaranteed 3–5 UTME & WAEC Questions)',
    tutorMnemonic: {
      title: "The 'Nearest Neighbor' Rule (FLE / E-N-N-B)",
      hook: "In Either/Or and Neither/Nor, look only at the neighbor right beside the verb!",
      explanation: "Forget how many people were mentioned earlier in the sentence. Whichever noun sits right before the verb controls the verb's singular or plural status. Example: 'Neither the principal nor the teachers ARE present', BUT 'Neither the teachers nor the principal IS present'."
    },
    classroomAnchor: {
      title: "Nigerian Radio News Traps: 'The Police IS' vs 'The Police ARE'",
      scenario: "You often hear Nigerian newscasters say 'The police is currently investigating...'. But under standard British English tested by WAEC and JAMB, 'Police' is a plural collective noun without singular form.",
      lessonTakeaway: "Always write: 'The police ARE investigating'. If you need singular, say 'A police officer IS'."
    },
    examinerTrap: {
      pitfall: "Distraction by parenthetical phrases ('as well as', 'together with', 'accompanied by').",
      whyStudentsFail: "Students see 'The Senator, as well as his four wives and ten children...' and naturally pick the plural verb 'were' because of all the people mentioned.",
      correctStrategy: "Cross out everything between commas mentally! The real subject is just 'The Senator', so the answer is singular: 'The Senator... WAS invited'."
    }
  },

  oral_english: {
    topicKeywords: ['oral', 'phonetics', 'vowel', 'vowels', 'stress', 'rhyme', 'intonation'],
    examYield: 'Core Exam Section (15–20 compulsory test of orals marks)',
    tutorMnemonic: {
      title: "The 2-Syllable Stress Rule: N-1 / V-2",
      hook: "Nouns take the FIRST punch; Verbs take the SECOND punch!",
      explanation: "For two-syllable words that exist as both nouns and verbs: if it's a noun, stress syllable 1 ('PRE-sent', 'CON-duct', 'EX-port'). If it's a verb, stress syllable 2 ('pre-SENT', 'con-DUCT', 'ex-PORT')."
    },
    classroomAnchor: {
      title: "Silent Letters in Daily Conversation",
      scenario: "In daily Nigerian speech, many pronounce the 'b' in 'comb', 'climb', 'bomb', or the 'p' in 'receipt'.",
      lessonTakeaway: "In JAMB, letters following 'm' at the end of root words are almost always silent: comb (/kəʊm/), bomb (/bɒm/), subtle (/ˈsʌt.l/). Remember: listen to the phonetics, not the spelling!"
    },
    examinerTrap: {
      pitfall: "Falling for deceptive spelling rhymes.",
      whyStudentsFail: "Examiners will ask: Which word rhymes with 'cough'? They put 'rough', 'tough', 'dough', 'bough'. Students match the letters -ough and pick blindly.",
      correctStrategy: "'Cough' has the sound /ɒf/. 'Rough' and 'tough' have /ʌf/. 'Dough' has /əʊ/. The trick is pronouncing each word's vowel sound out loud quietly to your ears during the exam."
    }
  },

  figures_of_speech: {
    topicKeywords: ['figures of speech', 'literary devices', 'literary terms', 'simile', 'metaphor', 'irony'],
    examYield: 'Compulsory in Literature & English Paper 1',
    tutorMnemonic: {
      title: "Oxymoron vs. Paradox: The Distance Rule",
      hook: "Oxymoron is a marriage (side-by-side); Paradox is a full house (entire sentence)!",
      explanation: "Oxymoron places two conflicting words directly side-by-side ('cruel kindness', 'deafening silence'). A Paradox is an entire philosophical sentence that seems impossible at first glance, but carries a deep truth ('The child is father of the man')."
    },
    classroomAnchor: {
      title: "Everyday Nigerian Irony & Sarcasm",
      scenario: "When heavy Lagos rain destroys someone's umbrella and a bystander exclaims: 'What beautiful weather we are enjoying today!'",
      lessonTakeaway: "That is Verbal Irony: expressing the direct opposite of what is actually happening for dramatic emphasis or humor."
    },
    examinerTrap: {
      pitfall: "Confusing Metonymy with Synecdoche.",
      whyStudentsFail: "Both represent something else, so students guess 50/50.",
      correctStrategy: "Synecdoche uses a literal PART of the physical object ('all hands on deck' — hands are physically part of the sailors). Metonymy uses an associated item that is completely separate ('the crown decided' — the crown is an accessory worn by the monarch)."
    }
  },

  // ── MATHEMATICS ──
  quadratic_equations: {
    topicKeywords: ['quadratic', 'parabola', 'roots', 'discriminant', 'polynomial'],
    examYield: 'Very High Yield (Directly in Paper 1 & Section B Theory)',
    tutorMnemonic: {
      title: "The Delta (Δ) Signpost: 'B-squared minus 4AC'",
      hook: "Δ > 0: Two Real Roads. Δ = 0: One Dead End. Δ < 0: Floating in the Sky!",
      explanation: "Before wasting 10 minutes attempting to factorize an ugly quadratic equation, calculate b² - 4ac first. If it's a perfect square (1, 4, 9, 16, 25...), factorize! If not, use the Almighty Formula immediately."
    },
    classroomAnchor: {
      title: "The Arc of a Free-Kick in Football",
      scenario: "When a football is kicked over a defensive wall, it rises to a maximum height (Vertex) and drops back to the ground (x-intercepts / roots).",
      lessonTakeaway: "Because gravity pulls downward, 'a' is negative (a < 0), giving the upside-down curve with a peak maximum height at x = -b / 2a."
    },
    examinerTrap: {
      pitfall: "Dropping the negative sign when -b is already negative.",
      whyStudentsFail: "If the equation is x² - 6x + 8 = 0, then b = -6. When substituting into -b ± ..., students write -6 instead of -(-6) = +6.",
      correctStrategy: "Always put parentheses around negative values: -(-6) ± √((-6)² - 4(1)(8)). This avoids 80% of algebraic sign slips."
    }
  },

  trigonometry: {
    topicKeywords: ['trigonometry', 'trig', 'unit circle', 'astc', 'soh cah toa'],
    examYield: 'High Yield (Coordinate geometry, bearings, and calculus)',
    tutorMnemonic: {
      title: "The Quadrant Password: 'All Students Take Chemistry' (A-S-T-C)",
      hook: "Q1: All (+). Q2: Sin (+). Q3: Tan (+). Q4: Cos (+).",
      explanation: "Moving anti-clockwise from positive x-axis: in Quadrant 1 (0-90°), all are positive. In Q2 (90-180°), only Sin is positive. In Q3 (180-270°), only Tan is positive. In Q4 (270-360°), only Cos is positive."
    },
    classroomAnchor: {
      title: "Estimating the Height of a Telecommunications Mast",
      scenario: "You are standing 50 meters away from an MTN transmission mast, looking up at its blinking beacon with an angle of elevation of 30°.",
      lessonTakeaway: "You have Adjacent (50m) and want Opposite (Height). Tan 30° = Height / 50. So Height = 50 × tan 30° = 50 × (1/√3) ≈ 28.87m."
    },
    examinerTrap: {
      pitfall: "Angle of depression drawn from the ground.",
      whyStudentsFail: "Students draw the angle of depression inside the bottom triangle instead of from the horizontal line of sight at the top.",
      correctStrategy: "Angle of depression ALWAYS equals the alternate interior angle of elevation at the ground. Immediately transfer the angle to the ground level before calculating."
    }
  },

  circle_theorems: {
    topicKeywords: ['circle geometry', 'circle theorems', 'cyclic quadrilateral', 'angles in a circle', 'tangent'],
    examYield: 'Guaranteed 12-mark WAEC Theory Question & 2 JAMB Questions',
    tutorMnemonic: {
      title: "The Arrowhead Rule: Center is Double",
      hook: "The bullseye in the middle eats twice the cake!",
      explanation: "Any angle subtended at the center of a circle by an arc is exactly twice (2×) whatever angle that same arc creates at the circumference. If circumference is 35°, center is 70°."
    },
    classroomAnchor: {
      title: "The Semicircle Window (90° Corner)",
      scenario: "Look at the arched window frame above a church or school hall. If you draw straight lines from any point on that curved arch to the two bottom corner ends of the sill...",
      lessonTakeaway: "Those two lines will ALWAYS meet at a perfect 90° right angle. Angle in a semicircle is forever 90°."
    },
    examinerTrap: {
      pitfall: "Assuming cyclic quadrilaterals have equal opposite angles.",
      whyStudentsFail: "Students mix up parallelograms (opposite angles equal) with cyclic quadrilaterals (opposite angles add up to 180°).",
      correctStrategy: "In any 4-sided shape touched by a circle's edge: Angle A + Angle C = 180°. Angle B + Angle D = 180°."
    }
  },

  // ── PHYSICS ──
  gas_laws: {
    topicKeywords: ['gas laws', 'boyle', 'charles', 'kinetic theory', 'ideal gas'],
    examYield: 'Core Heat Energy Topic (Appears annually in WAEC & JAMB)',
    tutorMnemonic: {
      title: "The Law Pairing: 'Can Pressure Be Temperature?' (CP BT)",
      hook: "Charles = Constant Pressure (V ∝ T); Boyle = Constant Temperature (P ∝ 1/V)!",
      explanation: "Remember: Charles had Pressure problems (so Pressure is constant). Boyle boiled at constant Temperature (so Temperature is constant). Pressure Law holds Volume constant."
    },
    classroomAnchor: {
      title: "Bicycle Tires on Hot Asphalt Roads",
      scenario: "Why do vulcanizers warn drivers not to over-inflate their tires when driving on long interstate highways like the Lagos-Ibadan expressway in March?",
      lessonTakeaway: "Friction and hot tar increase temperature T. Since the tire volume is rigid, Charles/Pressure law dictates that Pressure P surges until the tire bursts!"
    },
    examinerTrap: {
      pitfall: "Plugging Celsius temperatures (°C) directly into equations.",
      whyStudentsFail: "If given 27°C and 127°C, students write V₁ / 27 = V₂ / 127, leading to a completely wrong answer.",
      correctStrategy: "ALL gas law calculations REQUIRE absolute Kelvin: T(K) = θ(°C) + 273. 27°C is 300K, and 127°C is 400K. Always convert first!"
    }
  },

  simple_machines: {
    topicKeywords: ['simple machines', 'machine', 'lever', 'levers', 'pulley', 'mechanical advantage'],
    examYield: 'High Yield in Mechanics Paper 1 & Practical Questions',
    tutorMnemonic: {
      title: "The Golden FLE Rule (1-2-3)",
      hook: "Class 1 has F in middle; Class 2 has L in middle; Class 3 has E in middle!",
      explanation: "1-F: Fulcrum centered (Crowbar, See-saw, Pliers). 2-L: Load centered (Wheelbarrow, Nutcracker). 3-E: Effort centered (Tweezers, Forearm, Tongs)."
    },
    classroomAnchor: {
      title: "Pushing a Wheelbarrow of Dangote Cement",
      scenario: "When a laborer lifts a wheelbarrow carrying 2 bags of cement, the wheel on the ground is the Fulcrum, the cement sits in the middle (Load), and his hands lift at the handles (Effort).",
      lessonTakeaway: "Because Load is in the middle, it's a 2nd Class lever. The effort arm is longer than the load arm, so Mechanical Advantage is always greater than 1."
    },
    examinerTrap: {
      pitfall: "Believing that friction reduces Velocity Ratio (VR).",
      whyStudentsFail: "Examiners ask: 'If friction increases in a machine, which decreases?' Students pick Velocity Ratio.",
      correctStrategy: "VR is purely geometric (distance ratio or number of pulleys). Friction CANNOT change geometry. Friction ONLY reduces Mechanical Advantage (MA) and Efficiency (η)."
    }
  },

  optics_lenses: {
    topicKeywords: ['optics', 'reflection', 'refraction', 'lenses', 'convex lens', 'concave lens'],
    examYield: 'Guaranteed WAEC Optics question & JAMB ray tracing',
    tutorMnemonic: {
      title: "Convex vs. Concave Lens Memory Rule",
      hook: "Convex CONVERGES (Focuses light together like magnifying glass). Concave DIVERGES (Spreads light apart like a cave entrance)!",
      explanation: "Convex lenses can form both real and virtual images. Concave lenses can ONLY form virtual, erect, and diminished images."
    },
    classroomAnchor: {
      title: "The Projector in Your Classroom or Cinema",
      scenario: "A cinema projector has a small film slide inside the machine and projects an enormous movie onto a giant wall across the room.",
      lessonTakeaway: "The slide is placed between F and 2F of a convex lens, creating a Real, Inverted, and Magnified image on the screen."
    },
    examinerTrap: {
      pitfall: "Sign convention errors in the Lens Formula (1/f = 1/u + 1/v).",
      whyStudentsFail: "Students treat real and virtual focal lengths identically.",
      correctStrategy: "'Real is Positive, Virtual is Negative'. A convex lens has a positive focal length (+f). A concave lens has a negative focal length (-f). If image is virtual, v is negative (-v)."
    }
  },

  // ── CHEMISTRY ──
  electrochemistry: {
    topicKeywords: ['electrochemistry', 'electrolysis', 'faraday', 'anode', 'cathode', 'redox'],
    examYield: 'Heavyweight Topic (10+ marks in WAEC Theory & 4 JAMB Questions)',
    tutorMnemonic: {
      title: "The Farm Animals: 'AN OX' and 'RED CAT'",
      hook: "AN OX = Anode Oxidation. RED CAT = Reduction Cathode!",
      explanation: "Oxidation is loss of electrons; it occurs at the ANODE. Reduction is gain of electrons; it occurs at the CATHODE. This rule NEVER fails in any electrochemical cell."
    },
    classroomAnchor: {
      title: "Gold Electroplating in Local Markets",
      scenario: "Ever wonder how cheap iron spoons or costume jewelry get coated with real gold or silver in workshops?",
      lessonTakeaway: "The jewelry is made the CATHODE (-), so positive metal cations (Au³⁺ or Ag⁺) are attracted to it and reduce to form a shiny metallic layer."
    },
    examinerTrap: {
      pitfall: "Discharge order of ions in aqueous solutions.",
      whyStudentsFail: "In dilute NaCl, students assume Na⁺ and Cl⁻ discharge because they are abundant.",
      correctStrategy: "In dilute solution, water ions compete! H⁺ is discharged instead of Na⁺ because H⁺ is lower in the electrochemical series. OH⁻ discharges instead of Cl⁻ unless the solution is concentrated brine!"
    }
  },

  periodic_table: {
    topicKeywords: ['periodic table', 'periodicity', 'periodic trends', 'electronegativity', 'ionization'],
    examYield: 'Foundational Topic (Appears across Papers 1, 2, and 3)',
    tutorMnemonic: {
      title: "The Fluorine Magnet: Top-Right King",
      hook: "Fluorine (top-right) is the greedies element; Francium (bottom-left) is the most generous!",
      explanation: "Electronegativity and Ionization Energy increase as you move towards Fluorine (up and right). Atomic size increases as you move towards Francium (down and left)."
    },
    classroomAnchor: {
      title: "Why Sodium Metal Catches Fire in Water",
      scenario: "Group 1 alkali metals have just one loose valence electron on their outermost shell that they are desperate to lose.",
      lessonTakeaway: "Because of large atomic radius and low ionization energy, Sodium and Potassium react violently with cold water to release flammable hydrogen gas."
    },
    examinerTrap: {
      pitfall: "Selecting Noble Gases as most electronegative.",
      whyStudentsFail: "Students see Group 8/0 on the far right and assume they have the highest electronegativity.",
      correctStrategy: "Noble gases already have a complete stable octet (8 electrons). They have ZERO desire to attract bonding electrons, so their electronegativity is practically nil."
    }
  },

  // ── BIOLOGY ──
  cell_biology: {
    topicKeywords: ['cell structure', 'the cell', 'plant and animal', 'organelle', 'chloroplast'],
    examYield: 'Core Foundation of Biology (Guaranteed in every exam)',
    tutorMnemonic: {
      title: "The Plant Armor Rule: C-C-V",
      hook: "Plants wear Armor: Cell Wall, Chloroplast, and Giant Vacuole!",
      explanation: "Animal cells have flexible cell membranes, small temporary vacuoles, and no chloroplasts. Plant cells have rigid cellulose walls, permanent large central vacuoles, and chloroplasts."
    },
    classroomAnchor: {
      title: "Why Fresh Vegetables Turn Limp After a Week",
      scenario: "When fresh bitterleaf or spinach loses water, it wilts and loses its crisp stiffness.",
      lessonTakeaway: "Water has escaped the plant cell's central vacuole, reducing turgor pressure against the cellulose cell wall (plasmolysis)."
    },
    examinerTrap: {
      pitfall: "Claiming plant cells don't have cell membranes.",
      whyStudentsFail: "Students memorize that plant cells have cell walls and assume they lack a cell membrane.",
      correctStrategy: "Plant cells have BOTH! The cell wall is on the outside for mechanical support, and the cell membrane is right underneath it controlling what enters and exits."
    }
  },

  genetics_heredity: {
    topicKeywords: ['genetics', 'heredity', 'mendel', 'punnett square', 'monohybrid'],
    examYield: 'High Frequency (Guaranteed 5-mark Section B question)',
    tutorMnemonic: {
      title: "The Magic 3:1 Monohybrid Cross",
      hook: "Two hybrid parents (Tt × Tt) ALWAYS give 3 Dominant : 1 Recessive!",
      explanation: "Whenever you cross two heterozygous individuals (Tt × Tt), the offspring ratio is always 75% dominant phenotype to 25% recessive phenotype (3:1), with a 1:2:1 genotypic ratio (1 TT : 2 Tt : 1 tt)."
    },
    classroomAnchor: {
      title: "Sickle Cell Genotype Compatibility (AS × AS)",
      scenario: "Why do Nigerian churches and doctors advise couples with AS genotypes not to marry?",
      lessonTakeaway: "Crossing AS × AS yields: AA (25%), AS (50%), and SS (25%). Each pregnancy carries a 1-in-4 (25%) risk of having a child with sickle cell disease (SS)."
    },
    examinerTrap: {
      pitfall: "Assuming the 25% risk resets after having an SS child.",
      whyStudentsFail: "People think: 'If the first child is SS, the next three must be healthy.'",
      correctStrategy: "Probability has no memory! Each single birth is an independent event with an exact 25% chance of SS, regardless of previous children."
    }
  },

  // ── ECONOMICS ──
  market_equilibrium: {
    topicKeywords: ['market equilibrium', 'demand', 'supply', 'price determination'],
    examYield: 'Core Microeconomics Topic (10+ marks guaranteed)',
    tutorMnemonic: {
      title: "The Letter Shapes: D = Down, S = Skywards",
      hook: "Demand curves slope DOWN from left to right; Supply curves reach UP towards the Sky!",
      explanation: "Law of Demand: As price falls, quantity demanded rises (inverse relationship). Law of Supply: As price rises, quantity supplied rises (direct relationship). Equilibrium is where the 'X' crosses."
    },
    classroomAnchor: {
      title: "Tomato Price Surges at Mile 12 Market",
      scenario: "During the dry season or when fuel transport prices jump, fewer tomato trucks arrive from the North (Supply shifts left).",
      lessonTakeaway: "With supply constrained and buyer demand constant, scarcity forces the market clearing equilibrium price to shoot up."
    },
    examinerTrap: {
      pitfall: "Confusing 'Change in Demand' with 'Change in Quantity Demanded'.",
      whyStudentsFail: "Examiners deliberately test if a price change shifts the entire curve.",
      correctStrategy: "A change in PRICE ONLY causes movement ALONG the existing curve (Change in Quantity Demanded). Non-price factors (income, taste, population) shift the ENTIRE curve left or right (Change in Demand)."
    }
  },

  // ── GOVERNMENT ──
  separation_of_powers: {
    topicKeywords: ['separation of powers', 'arms of government', 'checks and balances', 'legislature'],
    examYield: 'Core Constitutional Law Topic in Government Paper 1 & 2',
    tutorMnemonic: {
      title: "The Triad: L-E-J (Make, Enforce, Judge)",
      hook: "Legislature writes it, Executive runs it, Judiciary interprets it!",
      explanation: "Montesquieu argued that concentrating power in one person's hand creates tyranny. Each arm must be distinct and endowed with constitutional checks on the other two."
    },
    classroomAnchor: {
      title: "The National Assembly Budget Veto",
      scenario: "When the President sends a national budget bill, the Senate and House can scrutinize or reject clauses before passing it.",
      lessonTakeaway: "The President cannot spend public money without legislative appropriation; this is the classic 'Power of the Purse' check."
    },
    examinerTrap: {
      pitfall: "Believing separation of powers means zero overlap.",
      whyStudentsFail: "Students think the arms operate in complete total isolation.",
      correctStrategy: "Pure separation is impossible! The real engine is Checks & Balances: The President appoints judges, but Senate must confirm them; Courts can declare presidential acts unconstitutional."
    }
  }
};

/**
 * Helper to locate pedagogy data matching a note's topic or subtopic
 */
export function findTopicPedagogy(subject: string, topic: string, subtopic = ''): TopicPedagogy | null {
  const query = `${topic} ${subtopic}`.toLowerCase().trim();

  for (const entry of Object.values(STUDYPLUG_PEDAGOGY)) {
    if (entry.topicKeywords.some(kw => query.includes(kw.toLowerCase()))) {
      return entry;
    }
  }

  return null;
}
