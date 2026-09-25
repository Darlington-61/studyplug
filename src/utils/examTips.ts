/**
 * High-Yield JAMB Exam Tips & Topic Memorization Guides
 * Provides instant exam tips and memory aids for all CBT questions.
 */

export const getExamTipForQuestion = (
  subjectOrQuestion: any,
  topic?: string,
  questionText?: string,
  explanation?: string
): string => {
  let subject = '';
  let top = '';
  let qText = '';
  let expl = '';

  if (typeof subjectOrQuestion === 'object' && subjectOrQuestion !== null) {
    subject = subjectOrQuestion.subject || '';
    top = subjectOrQuestion.topic || '';
    qText = subjectOrQuestion.text || subjectOrQuestion.question || '';
    expl = subjectOrQuestion.explanation || '';
  } else {
    subject = String(subjectOrQuestion || '');
    top = String(topic || '');
    qText = String(questionText || '');
    expl = String(explanation || '');
  }

  const qLower = (qText || '').toLowerCase();
  const topLower = (top || '').toLowerCase();
  const expLower = (expl || '').toLowerCase();

  // 1. If explanation already contains an explicit tip or note, highlight it
  const tipMatch = expl.match(/(?:tip|note|remember|caution|exam tip|shortcut|rule):\s*(.+)/i);
  if (tipMatch && tipMatch[1]) {
    return tipMatch[1].trim();
  }

  // 2. Use of English Rules & Traps
  if (subject.toLowerCase().includes('english')) {
    if (topLower.includes('concord') || qLower.includes('neither') || qLower.includes('either')) {
      return 'Proximity Rule: In "neither... nor" and "either... or", the verb agrees strictly with the noun nearest to it. Also, singular indefinite pronouns (each, everyone, neither of) always take singular verbs.';
    }
    if (topLower.includes('preposition') || qLower.includes('comprise') || qLower.includes('congratulat')) {
      return 'JAMB Trap: "Comprise" never takes "of" in the active voice! Also remember you congratulate someone ON (not for) an achievement.';
    }
    if (topLower.includes('subjunctive') || qLower.includes('high time')) {
      return 'Subjunctive Rule: "It is high time" + subject pronoun ALWAYS takes a past simple verb (e.g., "It is high time you studied", not "study").';
    }
    if (topLower.includes('antonym') || topLower.includes('opposite')) {
      return 'Elimination Tip: Read the full sentence in context. JAMB deliberately includes the direct synonym in option A or B as a trap for hasty readers!';
    }
    if (topLower.includes('synonym') || topLower.includes('nearest')) {
      return 'Contextual Tip: A word can have multiple dictionary definitions. Choose the option that fits seamlessly into the sentence without altering the speaker\'s tone.';
    }
    if (topLower.includes('oral') || topLower.includes('vowel') || topLower.includes('sound')) {
      return 'Phonetic Tip: Focus on pronunciation, never on spelling! English vowel spelling is notoriously irregular (e.g., "plait" /æ/, "heart" /ɑ:/, "suite" /swi:t/).';
    }
    if (topLower.includes('stress')) {
      return 'Stress Pattern: Suffixes like "-tion", "-ic", and "-cian" place primary stress on the penultimate (second to last) syllable (e.g., e-co-NOM-ic). Suffix "-cracy" stresses the third syllable from the end (de-MOC-ra-cy).';
    }
    if (topLower.includes('idiom')) {
      return 'Idiom Strategy: Idiomatic expressions are figurative and cannot be taken literally. Eliminate any option that gives the literal physical interpretation of the words.';
    }
    return 'JAMB English Strategy: Always identify the grammatical category (tense, concord, or part of speech) before selecting your final answer.';
  }

  // 3. Mathematics Rules & Shortcuts
  if (subject.toLowerCase().includes('math')) {
    if (topLower.includes('base') || qLower.includes('base')) {
      return 'Base Conversion Shortcut: Convert from base n to base 10 by expanding powers of n. Convert from base 10 to base n using successive division and recording remainders backwards.';
    }
    if (topLower.includes('indices') || topLower.includes('logarithm')) {
      return 'Formula Check: When bases are equal in a^x = a^y, equate powers x = y. For logs: log(AB) = log A + log B, and log(A^k) = k·log A.';
    }
    if (topLower.includes('quadratic') || qLower.includes('roots')) {
      return 'Quick Root Check: For ax² + bx + c = 0, sum of roots α + β = -b/a, and product of roots αβ = c/a. This saves time over full factorization!';
    }
    if (topLower.includes('calculus') || topLower.includes('differentiat')) {
      return 'Calculus Tip: For maximum or minimum turning points, set first derivative dy/dx = 0. If d²y/dx² < 0, it is a maximum; if > 0, it is a minimum.';
    }
    if (topLower.includes('trig') || topLower.includes('geometry')) {
      return 'Special Angles Recall: sin 30° = cos 60° = 1/2; sin 45° = cos 45° = 1/√2; sin 60° = cos 30° = √3/2. Keep these memorized for non-calculator exams!';
    }
    return 'Math CBT Tip: Plug in options (backsolving) when algebra is messy. Start with option B or C to quickly test values!';
  }

  // 4. Physics Rules & Tips
  if (subject.toLowerCase().includes('physic')) {
    if (topLower.includes('momentum') || topLower.includes('collis')) {
      return 'Conservation Rule: Total linear momentum (m₁u₁ + m₂u₂) is conserved in ALL collisions (elastic and inelastic), provided no external force acts.';
    }
    if (topLower.includes('circuit') || topLower.includes('resistor') || topLower.includes('electr')) {
      return 'Circuit Shortcut: For two parallel resistors R₁ and R₂, equivalent resistance R = (R₁ × R₂) / (R₁ + R₂). Remember voltage is constant across parallel branches!';
    }
    if (topLower.includes('optics') || topLower.includes('mirror') || topLower.includes('lens')) {
      return 'Sign Convention Reminder: Focal length is POSITIVE for converging elements (concave mirror, convex lens) and NEGATIVE for diverging elements (convex mirror, concave lens).';
    }
    if (topLower.includes('wave') || topLower.includes('shm')) {
      return 'Wave Formula: v = fλ (Speed = Frequency × Wavelength). In SHM, velocity is maximum at mean position (x=0) and zero at extreme displacement.';
    }
    return 'Physics Unit Check: Always check that values are converted to standard S.I. units (kg, m, s, A) before substituting into formulas!';
  }

  // 5. Chemistry Rules & Traps
  if (subject.toLowerCase().includes('chem')) {
    if (topLower.includes('periodic') || topLower.includes('atomic') || qLower.includes('electronegativ')) {
      return 'Periodic Trend: Across a period (L to R), atomic radius decreases while electronegativity and ionization energy increase. Down a group, atomic radius increases.';
    }
    if (topLower.includes('redox') || topLower.includes('oxidation') || qLower.includes('oxidiz')) {
      return 'OIL RIG Mnemonic: Oxidation Is Loss of electrons (oxidation state increases); Reduction Is Gain of electrons (oxidation state decreases). The oxidizing agent is reduced!';
    }
    if (topLower.includes('gas') || topLower.includes('charles') || topLower.includes('boyle') || topLower.includes('graham')) {
      return 'Gas Law Tip: Always convert temperature to Kelvin (T = °C + 273.15). For Graham\'s law: Rate ∝ 1/√(Molar Mass), lighter gases diffuse faster!';
    }
    if (topLower.includes('organic') || topLower.includes('alkane') || topLower.includes('isomer') || topLower.includes('alcohol')) {
      return 'Organic IUPAC Rule: Number the longest carbon chain from the end that gives the highest-priority functional group or substituent the lowest locant number.';
    }
    if (topLower.includes('electro') || topLower.includes('faraday') || topLower.includes('cell')) {
      return 'Faraday\'s Law Shortcut: m = (I × t × M) / (n × F), where F = 96,500 C/mol and n is the number of electrons transferred per ion.';
    }
    if (topLower.includes('acid') || topLower.includes('base') || topLower.includes('ph') || topLower.includes('salt')) {
      return 'pH Calculation: pH = -log₁₀[H⁺]. Remember pH + pOH = 14 at 25°C. Acidic salts are formed from strong acid + weak base; basic salts from weak acid + strong base.';
    }
    return 'Chemistry CBT Tip: Check oxidation states, valence electrons, and balanced stoichiometric mole ratios before choosing an option!';
  }

  // 6. Biology Rules & Memory Aids
  if (subject.toLowerCase().includes('bio')) {
    if (topLower.includes('genet') || topLower.includes('mendel') || qLower.includes('allele') || qLower.includes('cross')) {
      return 'Genetics Tip: In a monohybrid cross between two heterozygous parents (Aa × Aa), the phenotypic ratio is 3:1 (dominant to recessive), and genotypic ratio is 1:2:1.';
    }
    if (topLower.includes('ecology') || topLower.includes('pyramid') || topLower.includes('trophic') || topLower.includes('food chain')) {
      return '10% Energy Rule: Only approximately 10% of energy is transferred from one trophic level to the next. The pyramid of energy is always upright!';
    }
    if (topLower.includes('cell') || topLower.includes('organelle') || topLower.includes('mitochond')) {
      return 'Cell Biology Recall: Mitochondria = ATP synthesis (cellular respiration); Ribosomes = Protein synthesis; Chloroplasts = Photosynthesis; Lysosomes = Intracellular digestion.';
    }
    if (topLower.includes('circulat') || topLower.includes('heart') || topLower.includes('blood')) {
      return 'Circulation Rule: Arteries carry blood away from heart (usually oxygenated, except pulmonary artery); Veins carry blood towards heart (usually deoxygenated, except pulmonary vein).';
    }
    if (topLower.includes('plant') || topLower.includes('xylem') || topLower.includes('phloem') || topLower.includes('transpirat')) {
      return 'Plant Transport Mnemonic: Xylem transports Water and dissolved mineral salts upwards (unidirectional). Phloem translocates synthesized organic Food (bidirectional).';
    }
    return 'Biology CBT Strategy: Pay close attention to taxonomic rank (Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species) and functional adaptations to environment.';
  }

  // 7. Default General Exam Tip
  return 'JAMB CBT Strategy: Read the question stem twice, eliminate obviously incorrect distractors, and verify your answer with the fundamental syllabus principle.';
};

