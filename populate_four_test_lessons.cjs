// populate_four_test_lessons.cjs
// Populates high-quality, authentic structured lesson notes for 4 test subjects
// adhering strictly to official JAMB, WAEC, and NECO syllabuses.

const https = require('https');

function saveLesson(payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = https.request({
      hostname: 'eznonews.com.ng',
      path: '/studyplug-api/save_structured_lesson.php?key=StudyPlug2026',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const clean = body.replace(/^\uFEFF/, '').trim();
          resolve(JSON.parse(clean));
        } catch (e) {
          resolve({ error: body.slice(0, 300) });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// ============================================================================
// 1. ENGLISH LANGUAGE: Concord and Grammatical Agreement
// ============================================================================
const englishConcord = {
  subject: 'English Language',
  topic: 'Concord and Grammatical Agreement',
  sections: [
    {
      subtopic: 'Core Foundations',
      section_order: 1,
      section_type: 'intro',
      section_title: 'Introduction to Grammatical Concord',
      content: `Concord is the grammatical agreement between words in gender, number, case, or person within a sentence. In Nigerian secondary school examinations (JAMB UTME, WAEC WASSCE, and NECO SSCE), Concord is consistently the single most heavily tested grammar topic in Lexis and Structure.\n\nMastering concord requires understanding that verbs in English change form depending on whether their subject is singular or plural. The primary goal of examiner traps is to distract you with words placed between the true subject and the verb. Once you master identifying the true subject, concord questions become effortless points.`,
      examples: [
        'The candidate writes the UTME examination with confidence.',
        'The candidates write the UTME examination with confidence.'
      ],
      formulas: [
        'Singular Subject + Singular Verb (verb ends in -s or -es: writes, goes, has, is, does)',
        'Plural Subject + Plural Verb (verb does NOT end in -s: write, go, have, are, do)'
      ],
      exam_tips: [
        'Never determine the verb based on the noun right next to it! Always isolate the true grammatical subject first.',
        'In present simple tense, only singular third-person verbs carry the -s/-es suffix.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Fundamental Rules',
      section_order: 2,
      section_type: 'rule',
      section_title: 'Rule 1: The Primary Rule of Concord',
      content: `A singular subject requires a singular verb, and a plural subject requires a plural verb.\n\nNotice the key difference in English verbs: Unlike nouns, where adding "-s" makes them plural (boy → boys), adding "-s" to a present tense verb makes it singular (write → writes).`,
      examples: [
        'The student prepares diligently for WASSCE. ("student" is singular → "prepares")',
        'The students prepare diligently for WASSCE. ("students" is plural → "prepare")'
      ],
      formulas: [
        'Subject (Singular) → Verb + s/es',
        'Subject (Plural) → Base Verb (no s/es)'
      ],
      exam_tips: [
        'Modal auxiliary verbs (can, could, may, might, shall, should, will, would, must) DO NOT take -s even with a singular subject: "She can write", never "She cans write".'
      ],
      question_ids: []
    },
    {
      subtopic: 'Compound Subjects',
      section_order: 3,
      section_type: 'rule',
      section_title: 'Rule 2: Compound Subjects Joined by AND',
      content: `When two or more singular nouns are joined by "and", they usually form a plural compound subject and take a plural verb.\n\nCRITICAL EXCEPTION: When two nouns connected by "and" refer to a single entity, idea, or an inseparable pair (such as a popular meal or a single profession), they take a SINGULAR verb.`,
      examples: [
        'Tunde and Emeka attend the tutorial centre every Saturday. (Two separate individuals → Plural verb "attend")',
        'Rice and beans is my favorite lunch meal. (Single dish idea → Singular verb "is")',
        'The author and publisher has arrived. (One person with two titles → Singular verb "has")',
        'The author and the publisher have arrived. (Two distinct individuals indicated by two articles "the" → Plural verb "have")'
      ],
      formulas: [
        'Noun A + AND + Noun B (Separate entities) → Plural Verb',
        'Noun A + AND + Noun B (Single unit/dish) → Singular Verb',
        'The [Title A] and [Title B] → Singular (1 Person)',
        'The [Title A] and THE [Title B] → Plural (2 Persons)'
      ],
      exam_tips: [
        'Count the articles! If "the" appears only once ("The secretary and treasurer"), it is ONE person. If "the" appears twice ("The secretary and the treasurer"), they are TWO people.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Correlative Conjunctions',
      section_order: 4,
      section_type: 'rule',
      section_title: 'Rule 3: The Rule of Proximity (Either...or / Neither...nor)',
      content: `When two subjects are connected by correlative conjunctions such as:\n• Either ... or\n• Neither ... nor\n• Not only ... but also\n\nThe verb agrees strictly with the subject closest (nearest in proximity) to it. If the closer subject is singular, use a singular verb. If the closer subject is plural, use a plural verb.`,
      examples: [
        'Neither the teacher nor the students were present in the hall. (Subject closest to verb is "students" [plural] → "were")',
        'Neither the students nor the teacher was present in the hall. (Subject closest to verb is "teacher" [singular] → "was")'
      ],
      formulas: [
        'Either A or B + Verb [agrees with B]',
        'Neither A nor B + Verb [agrees with B]',
        'Not only A but also B + Verb [agrees with B]'
      ],
      exam_tips: [
        'Do not average the subjects! In proximity concord, the first subject has zero grammatical power over the verb. Focus exclusively on the noun immediately preceding the blank.'
      ],
      question_ids: [116, 105021]
    },
    {
      subtopic: 'Parenthetical Interveners',
      section_order: 5,
      section_type: 'rule',
      section_title: 'Rule 4: Parenthetical & Intervening Expressions',
      content: `When a subject is separated from the verb by parenthetical phrases, the intervening words DO NOT change the number of the subject. The verb must agree with the primary subject that began the clause.\n\nCommon intervening phrases to watch for:\n• as well as\n• together with\n• along with\n• in addition to\n• accompanied by\n• including\n• no less than`,
      examples: [
        'The teacher, as well as his students, has arrived. ("teacher" is singular → "has arrived", despite the plural "students")',
        'The players, together with their coach, are celebrating. ("players" is plural → "are celebrating")'
      ],
      formulas: [
        'Subject 1 + [as well as / together with / along with / accompanied by] + Subject 2 + Verb [agrees ONLY with Subject 1]'
      ],
      exam_tips: [
        'Mental deletion technique: In the exam hall, physically place your finger over the phrase between the commas (e.g. ", as well as his students,"). Read what remains: "The teacher has arrived." The correct verb will instantly become obvious.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Indefinite Pronouns',
      section_order: 6,
      section_type: 'rule',
      section_title: 'Rule 5: Indefinite Pronouns Concord',
      content: `Indefinite pronouns that end in "-one", "-body", or "-thing", as well as "each", "every", "either", and "neither", are grammatically SINGULAR and take singular verbs in formal standard English.\n\nThis rule applies even when the pronoun is followed by a plural prepositional phrase such as "of the boys" or "of the candidates".`,
      examples: [
        'Each of the candidates was assigned a unique examination number. ("Each" is singular → "was")',
        'Every boy and girl in the school has registered. ("Every" distributes individually → "has")',
        'One of the passengers was injured in the accident. ("One" is singular → "was")'
      ],
      formulas: [
        'Each / Every / Either / Neither + of + [Plural Noun] → Singular Verb',
        'Everyone / Somebody / Nobody / Anything → Singular Verb'
      ],
      exam_tips: [
        'Do not let "of the students" deceive you! The object of a preposition ("students") cannot be the subject of a sentence. "Each" or "One" is the subject, so the verb MUST be singular.'
      ],
      question_ids: [123, 127]
    },
    {
      subtopic: 'Collective Nouns',
      section_order: 7,
      section_type: 'rule',
      section_title: 'Rule 6: Collective Nouns & Notional Concord',
      content: `Collective nouns (such as committee, jury, audience, family, team, government, crowd) take a SINGULAR verb when the group acts together as a single unified whole.\n\nHowever, when the individual members of the group act separately or are in disagreement, the noun takes a PLURAL verb.`,
      examples: [
        'The committee has submitted its report to the governing council. (Acting as one unit → "has submitted its report")',
        'The committee are divided in their opinions on the budget. (Members disagreeing individually → "are divided in their opinions")'
      ],
      formulas: [
        'Collective Noun as a Unit → Singular Verb + its',
        'Collective Noun in Disagreement / Individual Action → Plural Verb + their'
      ],
      exam_tips: [
        'Check the possessive pronoun clue in the sentence! If the sentence uses "its", the verb must be singular ("has / is"). If it uses "their", the verb must be plural ("have / are").'
      ],
      question_ids: [117]
    },
    {
      subtopic: 'Measurements & Quantities',
      section_order: 8,
      section_type: 'rule',
      section_title: 'Rule 7: Quantities of Time, Money, and Distance',
      content: `Expressions of time, money, measurement, weight, and distance take a SINGULAR verb when considered as a single aggregate quantity or lump sum, even though the noun form looks plural.`,
      examples: [
        'Ten million naira is a substantial investment in modern educational software.',
        'Fifty kilometers is a long journey on bad roads.',
        'Three years in senior secondary school passes very quickly.'
      ],
      formulas: [
        'Sum of Money / Period of Time / Distance / Weight → Singular Verb'
      ],
      exam_tips: [
        'Do not be misled by "naira", "kilometers", or "years". The speaker is thinking of the total amount or whole block of time, which is treated as a singular concept.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Summary & Revision',
      section_order: 9,
      section_type: 'summary',
      section_title: 'Concord Examination Summary & Cheat Sheet',
      content: `Here is your high-yield quick review checklist for Concord before stepping into the exam hall:\n\n1. Identify the True Subject: Strip away prepositional phrases (in, on, with, of) and parentheticals (as well as, together with).\n2. Apply the Proximity Rule: Only for Either...or / Neither...nor / Not only...but also. The verb obeys the closest noun.\n3. Indefinite Pronouns are Singular: Each, everyone, one of, neither of take singular verbs.\n4. Singular Verbs have -s: In present tense, singular verbs end with -s (is, has, does, writes); plural verbs do not.\n5. Single Dishes / Units are Singular: "Bread and butter is...", "Rice and beans is...".`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Review these 7 rules before every English examination. They account for 5 to 10 direct questions in every JAMB UTME paper!'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// 2. MATHEMATICS: Quadratic Equations and Functions
// ============================================================================
const mathQuadratic = {
  subject: 'Mathematics',
  topic: 'Quadratic Equations and Functions',
  sections: [
    {
      subtopic: 'Introduction',
      section_order: 1,
      section_type: 'intro',
      section_title: 'Introduction to Quadratic Equations',
      content: `A quadratic equation is a second-degree polynomial equation in a single variable where the highest power of the variable is 2. The standard canonical form of a quadratic equation is:\n\nax² + bx + c = 0 (where a ≠ 0, and a, b, c are real numbers)\n\nIn JAMB UTME and WAEC WASSCE, quadratic equations form the backbone of secondary school algebra. You will be tested on four fundamental methods of solution: Factorisation, Completing the Square, the Quadratic Formula (Almighty Formula), and Graphical Analysis.`,
      examples: [
        'x² - 5x + 6 = 0 (Standard quadratic equation: a = 1, b = -5, c = 6)',
        '3x² = 7x - 2 → Rearrange to standard form: 3x² - 7x + 2 = 0'
      ],
      formulas: [
        'Standard Form: ax² + bx + c = 0, where a ≠ 0'
      ],
      exam_tips: [
        'Always rearrange the equation into standard form (ax² + bx + c = 0) with all terms on one side before attempting any solution method!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Solution Methods',
      section_order: 2,
      section_type: 'concept',
      section_title: 'Method 1: Solving by Factorisation',
      content: `Factorisation is the fastest method to solve quadratic equations when the roots are rational numbers.\n\nTo factorise ax² + bx + c = 0:\n1. Find two numbers p and q such that their product is equal to a × c and their sum is equal to b.\n2. Split the middle term bx into px + qx.\n3. Factorise by grouping the first two terms and the last two terms.\n4. Apply the Zero Product Principle: If A × B = 0, then A = 0 or B = 0.`,
      examples: [
        'Solve: x² - 5x + 6 = 0\n• Product = a × c = 1 × 6 = 6\n• Sum = b = -5\n• Two numbers are -2 and -3 (since (-2) × (-3) = 6 and (-2) + (-3) = -5)\n• Rewrite: (x - 2)(x - 3) = 0\n• Therefore: x - 2 = 0 → x = 2, or x - 3 = 0 → x = 3\n• Roots: x = 2 or x = 3'
      ],
      formulas: [
        'Zero Product Property: If (x - p)(x - q) = 0, then x = p or x = q'
      ],
      exam_tips: [
        'If the product a × c cannot be factored into two integers that sum to b, factorisation will NOT work easily. Immediately switch to the Quadratic Formula.'
      ],
      question_ids: [77]
    },
    {
      subtopic: 'Completing the Square',
      section_order: 3,
      section_type: 'worked_example',
      section_title: 'Method 2: Completing the Square and Almighty Formula',
      content: `Completing the square is the algebraic technique used to convert any quadratic expression into a perfect square trinomial. It is also the mathematical foundation from which the Almighty Formula is derived.\n\nProcedure:\n1. Ensure the coefficient of x² is 1 (divide through by a if a ≠ 1).\n2. Transfer the constant term c/a to the right-hand side.\n3. Add the square of half the coefficient of x, which is (b / 2a)², to both sides.\n4. Factorise the left-hand side as a perfect square: (x + b/(2a))².\n5. Take the square root of both sides and solve for x.`,
      examples: [
        'Solve: x² - 6x + 7 = 0 by completing the square.\n• Step 1: x² - 6x = -7\n• Step 2: Half of -6 is -3. Square it: (-3)² = 9. Add 9 to both sides:\n  x² - 6x + 9 = -7 + 9\n• Step 3: (x - 3)² = 2\n• Step 4: x - 3 = ±√2\n• Step 5: x = 3 ± √2 → x = 3 + 1.414 = 4.4, or x = 3 - 1.414 = 1.6 (to 1 d.p.)'
      ],
      formulas: [
        'The Quadratic Formula (Almighty Formula): x = (-b ± √(b² - 4ac)) / (2a)'
      ],
      exam_tips: [
        'Remember that dividing by 2a applies to the ENTIRE numerator (-b ± √Δ), not just the square root portion!'
      ],
      question_ids: [43733]
    },
    {
      subtopic: 'Nature of Roots',
      section_order: 4,
      section_type: 'concept',
      section_title: 'The Discriminant and Nature of Roots',
      content: `The quantity under the square root in the quadratic formula, Δ = b² - 4ac, is called the Discriminant. It completely determines the nature of the roots without needing to solve the full equation:\n\n1. If b² - 4ac > 0 and a perfect square: Two real, distinct, and rational roots.\n2. If b² - 4ac > 0 and NOT a perfect square: Two real, distinct, and irrational (surd) roots.\n3. If b² - 4ac = 0: Two real and EQUAL roots (coincident or repeated roots, tangent to x-axis).\n4. If b² - 4ac < 0: No real roots (roots are complex/imaginary numbers, parabola does not touch x-axis).`,
      examples: [
        'For 2x² - 4x + 2 = 0: Δ = (-4)² - 4(2)(2) = 16 - 16 = 0 → Roots are real and equal.',
        'For x² + 2x + 5 = 0: Δ = (2)² - 4(1)(5) = 4 - 20 = -16 < 0 → Roots are non-real (complex).'
      ],
      formulas: [
        'Discriminant: Δ = b² - 4ac',
        'Equal / Repeated Roots: b² - 4ac = 0',
        'Real Roots Condition: b² - 4ac ≥ 0'
      ],
      exam_tips: [
        'WAEC and JAMB frequently give questions like: "If px² + 4x + 1 = 0 has equal roots, find p." Set b² - 4ac = 0: 4² - 4(p)(1) = 0 → 16 = 4p → p = 4.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Symmetric Properties',
      section_order: 5,
      section_type: 'rule',
      section_title: 'Symmetric Properties of Roots & Forming Equations',
      content: `Let α and β be the roots of ax² + bx + c = 0. By comparing with x² - (α + β)x + αβ = 0, we establish the fundamental relations:\n\n• Sum of roots: α + β = -b / a\n• Product of roots: αβ = c / a\n\nTo construct a quadratic equation when given the roots:\nEquation: x² - (Sum of Roots)x + (Product of Roots) = 0`,
      examples: [
        'Form the quadratic equation whose roots are 2/3 and -1:\n• Sum of roots = 2/3 + (-1) = -1/3\n• Product of roots = (2/3) × (-1) = -2/3\n• Equation: x² - (-1/3)x + (-2/3) = 0 → x² + (1/3)x - 2/3 = 0\n• Multiply through by 3: 3x² + x - 2 = 0'
      ],
      formulas: [
        'Sum of Roots: α + β = -b / a',
        'Product of Roots: αβ = c / a',
        'Constructed Equation: x² - (Sum)x + Product = 0'
      ],
      exam_tips: [
        'Notice the minus sign before the sum of roots: x² MINUS (Sum of roots)x PLUS (Product of roots) = 0. Do not forget to clear fractions by multiplying by the common denominator!'
      ],
      question_ids: [46366, 63021]
    },
    {
      subtopic: 'Quadratic Functions',
      section_order: 6,
      section_type: 'concept',
      section_title: 'Quadratic Functions, Maximum/Minimum & Graphs',
      content: `A quadratic function has the form y = ax² + bx + c. Its graph is a parabola:\n• If a > 0: The parabola opens upwards (U-shape) and has a MINIMUM turning point.\n• If a < 0: The parabola opens downwards (inverted U-shape) and has a MAXIMUM turning point.\n\nThe axis of symmetry and the x-coordinate of the turning point (vertex) occurs at:\nx = -b / (2a)\n\nTo find the maximum or minimum value of the function, substitute x = -b / (2a) back into the equation!`,
      examples: [
        'Find the maximum value of f(x) = -2x² + 8x + 3:\n• Here a = -2 (which is negative, so f(x) has a maximum value), b = 8, c = 3.\n• x-coordinate of vertex: x = -b / (2a) = -8 / (2 × -2) = -8 / -4 = 2.\n• Substitute x = 2 into f(x):\n  f(2) = -2(2)² + 8(2) + 3 = -2(4) + 16 + 3 = -8 + 16 + 3 = 11.\n• Therefore, the maximum value is 11.'
      ],
      formulas: [
        'Axis of Symmetry / Vertex x-coordinate: x = -b / (2a)',
        'Optimum Value: y = 4ac - b² / (4a) or substitute x = -b/(2a)'
      ],
      exam_tips: [
        'Whenever a question asks for the maximum value of a function with a negative x² coefficient, simply evaluate x = -b/(2a) and find f(x)!'
      ],
      question_ids: [101937]
    },
    {
      subtopic: 'Summary',
      section_order: 7,
      section_type: 'summary',
      section_title: 'Quadratic Equations Masterclass Summary',
      content: `Quadratic Equations Quick Formula Vault:\n\n1. Standard Form: ax² + bx + c = 0\n2. Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)\n3. Discriminant: Δ = b² - 4ac\n   • Δ > 0: Two real, distinct roots\n   • Δ = 0: Two real, equal roots\n   • Δ < 0: No real roots\n4. Sum of Roots: α + β = -b/a\n5. Product of Roots: αβ = c/a\n6. Equation Construction: x² - (Sum)x + Product = 0\n7. Optimum Value of Parabola: x = -b / (2a)`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Practice switching fluidly between factorisation and the formula depending on how quickly factors appear.'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// 3. PHYSICS: Motion and Kinematics
// ============================================================================
const physicsMotion = {
  subject: 'Physics',
  topic: 'Motion and Kinematics',
  sections: [
    {
      subtopic: 'Types of Motion',
      section_order: 1,
      section_type: 'intro',
      section_title: 'Introduction: Types of Motion & Frame of Reference',
      content: `Motion is defined as the continuous change in position of an object with respect to a stationary reference point over time. Mechanics, the study of motion, is divided into Kinematics (describing motion without reference to the forces causing it) and Dynamics (studying forces that cause or change motion).\n\nIn the Nigerian physics syllabus, motion is classified into four fundamental types:\n1. Translational (Linear) Motion: Object moves along a line without rotation (e.g., a car driving along a straight highway).\n2. Rotational Motion: An object turns or spins about an axis passing through it (e.g., the spinning blades of a ceiling fan or the rotation of the Earth).\n3. Oscillatory (Vibratory) Motion: Periodic to-and-fro movement about a fixed equilibrium position (e.g., simple pendulum, plucked guitar string).\n4. Random Motion: Irregular, erratic motion with no specific direction or pattern (e.g., smoke particles in air, Brownian motion of pollen grains).`,
      examples: [
        'Linear motion: A bullet fired from a rifle barrel.',
        'Rotational motion: The flywheel of an engine.',
        'Oscillatory motion: The balance wheel of a wristwatch.',
        'Random motion: Gas molecules colliding within a sealed cylinder.'
      ],
      formulas: [],
      exam_tips: [
        'Many physical systems combine two types of motion simultaneously. For example, the wheels of a moving car execute both rotational motion (spinning about axle) and translational motion (moving forward along road)!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Scalars and Vectors in Motion',
      section_order: 2,
      section_type: 'concept',
      section_title: 'Distance vs Displacement, Speed vs Velocity',
      content: `Examiners test whether you can clearly distinguish between scalar and vector kinematic quantities:\n\n• Distance (scalar, d): Total path length covered regardless of direction. Always positive.\n• Displacement (vector, s): Shortest straight-line distance from initial position to final position in a specified direction. Can be positive, negative, or zero.\n• Speed (scalar, v): Rate of change of distance with time: Speed = Distance / Time. Unit: m/s.\n• Velocity (vector, v): Rate of change of displacement with time: Velocity = Displacement / Time. Unit: m/s.\n• Acceleration (vector, a): Rate of change of velocity with time: a = (v - u) / t. Unit: m/s².`,
      examples: [
        'An athlete runs one complete lap around a 400 m circular track in 50 seconds.\n• Total distance covered = 400 m\n• Average speed = 400 m / 50 s = 8 m/s\n• Net displacement = 0 m (returned to starting point)\n• Average velocity = 0 m / 50 s = 0 m/s'
      ],
      formulas: [
        'Speed = Total Distance / Total Time',
        'Velocity (v) = Displacement (s) / Time (t)',
        'Acceleration (a) = (Final Velocity v - Initial Velocity u) / Time t'
      ],
      exam_tips: [
        'Whenever an object returns to its original starting point, its net displacement and average velocity are exactly ZERO, even if it traveled millions of meters!'
      ],
      question_ids: [50845]
    },
    {
      subtopic: 'Equations of Linear Motion',
      section_order: 3,
      section_type: 'formula',
      section_title: 'The Four Equations of Uniformly Accelerated Motion',
      content: `When an object moves with constant (uniform) acceleration in a straight line, its motion is governed by four standard kinematic equations:\n\n1. First Equation: v = u + at\n2. Second Equation: s = ut + ½at²\n3. Third Equation: v² = u² + 2as\n4. Fourth Equation (Average Velocity Form): s = ((u + v) / 2) × t\n\nWhere:\n• u = initial velocity (m/s)\n• v = final velocity (m/s)\n• a = acceleration (m/s²)\n• t = time taken (s)\n• s = distance/displacement covered (m)`,
      examples: [
        'A car starts from rest (u = 0) and accelerates uniformly at 2.5 m/s² for 8 seconds. Find its final velocity and distance covered:\n• Final velocity: v = u + at = 0 + (2.5 × 8) = 20 m/s\n• Distance: s = ut + ½at² = 0 + ½(2.5)(8)² = ½(2.5)(64) = 80 m'
      ],
      formulas: [
        'v = u + at',
        's = ut + ½at²',
        'v² = u² + 2as',
        's = ((u + v) / 2)t'
      ],
      exam_tips: [
        'Look out for hidden initial conditions in question phrasing:\n• "Starts from rest" → u = 0\n• "Comes to a halt / stops / applies brakes" → v = 0\n• "Decelerates / retards" → a is negative (-a)!'
      ],
      question_ids: [8016]
    },
    {
      subtopic: 'Motion Under Gravity',
      section_order: 4,
      section_type: 'worked_example',
      section_title: 'Motion Under Gravity (Free Fall & Projectiles)',
      content: `Free fall is the motion of an object solely under the influence of Earth's gravitational pull, ignoring air resistance. Near Earth's surface, all bodies fall with the same uniform acceleration due to gravity: g ≈ 9.8 m/s² (usually taken as 10 m/s² in JAMB and WAEC).\n\nRules for vertical motion under gravity:\n• For bodies falling downwards: a = +g (acceleration)\n• For bodies projected vertically upwards: a = -g (deceleration)\n• At maximum height: Instantaneous vertical velocity v = 0\n• Time of flight: Total time to go up and return to starting level is T = 2u / g\n• Maximum height reached: H_max = u² / (2g)`,
      examples: [
        'A ball is thrown vertically upwards with an initial velocity of 30 m/s. Taking g = 10 m/s²:\n• Time to reach maximum height: t = u / g = 30 / 10 = 3 seconds\n• Maximum height reached: H = u² / (2g) = (30)² / (2 × 10) = 900 / 20 = 45 meters\n• Velocity when returning to hand: v = 30 m/s downwards'
      ],
      formulas: [
        'v = u ± gt',
        'h = ut ± ½gt²',
        'v² = u² ± 2gh',
        'Time to peak: t = u / g',
        'Maximum Height: H = u² / (2g)',
        'Total Time of Flight: T = 2u / g'
      ],
      exam_tips: [
        'In the absence of air resistance, acceleration due to gravity (g) is independent of the mass or shape of the falling body. A heavy lead ball and a feather dropped in a vacuum fall with the exact same acceleration!'
      ],
      question_ids: [50837]
    },
    {
      subtopic: 'Motion Graphs',
      section_order: 5,
      section_type: 'worked_example',
      section_title: 'Graphical Analysis of Motion (Displacement-Time & Velocity-Time)',
      content: `Motion graphs are one of the most frequently tested areas in JAMB and WAEC. Two golden rules unlock almost every graph question:\n\n1. Displacement-Time Graph (s-t graph):\n• The gradient (slope) of an s-t graph equals the instantaneous VELOCITY.\n• A horizontal flat line represents a stationary object (velocity = 0).\n• A straight sloped line represents uniform (constant) velocity.\n\n2. Velocity-Time Graph (v-t graph):\n• The gradient (slope) of a v-t graph equals the ACCELERATION: a = Δv / Δt\n• The AREA under a velocity-time graph equals the total DISTANCE / DISPLACEMENT covered!\n• For a trapezoidal velocity-time profile: Area = ½(a + b)h, where a is time at constant speed, b is total time, and h is maximum velocity.`,
      examples: [
        'JAMB 2024 Question: A car accelerates from rest to 30 m/s in 10 s, travels at constant speed for 20 s (from t = 10 to t = 30), and decelerates to rest in 10 s (from t = 30 to t = 40).\n• Shape: Trapezium with parallel sides a = 20 s (30 - 10) and b = 40 s, height h = 30 m/s.\n• Total Distance = Area = ½(a + b)h = ½(20 + 40) × 30 = ½(60) × 30 = 30 × 30 = 900 meters.'
      ],
      formulas: [
        'Slope of s-t graph = Velocity',
        'Slope of v-t graph = Acceleration = Δv / Δt',
        'Area under v-t graph = Total Distance travelled',
        'Trapezium Area: Distance = ½(t_top + t_base) × v_max'
      ],
      exam_tips: [
        'Never use s = vt for motion that involves acceleration! The formula s = vt is valid ONLY when velocity is constant (a = 0). For accelerated motion, you must use s = ut + ½at² or calculate the area under the v-t graph.'
      ],
      question_ids: [171]
    },
    {
      subtopic: 'Summary',
      section_order: 6,
      section_type: 'summary',
      section_title: 'Motion & Kinematics High-Yield Cheat Sheet',
      content: `Key Takeaways for Motion in JAMB & WAEC:\n\n1. Vector vs Scalar: Displacement and velocity have direction; distance and speed do not.\n2. When returning to starting point: Net displacement = 0, average velocity = 0.\n3. The 4 Linear Equations: v = u + at | s = ut + ½at² | v² = u² + 2as | s = ½(u+v)t.\n4. Free Fall: Upward motion: a = -g, v_top = 0. Downward motion: a = +g.\n5. Max Height: H = u² / (2g); Time of flight: T = 2u / g.\n6. Velocity-Time Graph: Slope = Acceleration; Area underneath = Distance.`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Always check units! Convert km/h to m/s by multiplying by 5/18 (or dividing by 3.6).'
      ],
      question_ids: []
    }
  ]
};

// ============================================================================
// 4. CHEMISTRY: Acids, Bases and Salts
// ============================================================================
const chemistryAcids = {
  subject: 'Chemistry',
  topic: 'Acids, Bases & Salts',
  sections: [
    {
      subtopic: 'Definitions & Theories',
      section_order: 1,
      section_type: 'intro',
      section_title: 'Theories of Acids and Bases (Arrhenius, Brønsted-Lowry, Lewis)',
      content: `Acids, bases, and salts form the foundation of inorganic and analytical chemistry in secondary school science. To score high in JAMB and WAEC, you must master the three historical theories defining acids and bases:\n\n1. Arrhenius Theory:\n• Acid: A substance that produces hydrogen ions (H⁺) or hydronium ions (H₃O⁺) as the only positive ion when dissolved in water. (e.g., HCl → H⁺ + Cl⁻)\n• Base: A substance that produces hydroxide ions (OH⁻) as the only negative ion in aqueous solution. (e.g., NaOH → Na⁺ + OH⁻)\n• Limitation: Applies only to aqueous (water) solutions.\n\n2. Brønsted-Lowry Theory:\n• Acid: A proton (H⁺) donor.\n• Base: A proton (H⁺) acceptor.\n• Conjugate Acid-Base Pairs: Differ by exactly one proton (H⁺). (e.g. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; NH₃ is a base, its conjugate acid is NH₄⁺).\n\n3. Lewis Theory:\n• Acid: An electron-pair acceptor (e.g., BF₃, AlCl₃, H⁺).\n• Base: An electron-pair donor (e.g., NH₃ with lone pair, H₂O).`,
      examples: [
        'In the reaction NH₃ + HCl → NH₄⁺ + Cl⁻: NH₃ accepts a proton (Brønsted base) and donates an electron pair (Lewis base); HCl donates a proton (Brønsted acid).'
      ],
      formulas: [
        'Arrhenius Acid: HA(aq) → H⁺(aq) + A⁻(aq)',
        'Brønsted-Lowry: Acid ⇌ Conjugate Base + H⁺',
        'Lewis Base (electron pair donor :) + Lewis Acid (electron pair acceptor) → Coordinate Bond'
      ],
      exam_tips: [
        'Remember the easy mnemonic: "Acids Donate, Bases Accept" (Protons in Brønsted-Lowry). For Lewis, it is the reverse: Lewis acids accept electron pairs, Lewis bases donate electron pairs.'
      ],
      question_ids: []
    },
    {
      subtopic: 'Basicity & Properties',
      section_order: 2,
      section_type: 'concept',
      section_title: 'Basicity of Acids and Acid Properties',
      content: `The basicity of an acid is the number of replaceable hydrogen ions (H⁺) in one molecule of the acid.\n\nClassification by Basicity:\n1. Monobasic Acids (Basicity = 1): Produce 1 H⁺ ion per molecule.\n   • Examples: Hydrochloric acid (HCl), Nitric acid (HNO₃), Ethanoic acid (CH₃COOH - only the carboxylic hydrogen is replaceable!)\n2. Dibasic Acids (Basicity = 2): Produce 2 H⁺ ions per molecule.\n   • Examples: Tetraoxosulphate(VI) acid (H₂SO₄), Trioxocarbonate(IV) acid (H₂CO₃)\n3. Tribasic Acids (Basicity = 3): Produce 3 H⁺ ions per molecule.\n   • Example: Tetraoxophosphate(V) acid (H₃PO₄)\n\nPhysical and Chemical Properties:\n• Acids have a sour taste, turn blue litmus paper RED, and have pH < 7.\n• Acid + Reactive Metal → Salt + Hydrogen gas (H₂ ↑)\n• Acid + Base/Alkali → Salt + Water only (Neutralization)\n• Acid + Trioxocarbonate(IV) / Hydrogen trioxocarbonate(IV) → Salt + Water + Carbon(IV) oxide (CO₂ ↑, turns lime water milky)`,
      examples: [
        'Reaction with metal: Zn + 2HCl → ZnCl₂ + H₂ ↑',
        'Reaction with carbonate: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ ↑'
      ],
      formulas: [
        'Basicity of HCl = 1 (monobasic)',
        'Basicity of H₂SO₄ = 2 (dibasic)',
        'Basicity of H₃PO₄ = 3 (tribasic)',
        'Basicity of CH₃COOH = 1 (monobasic, NOT tetrabasic!)'
      ],
      exam_tips: [
        'WAEC Trap Alert: Ethanoic acid (CH₃COOH) has 4 hydrogen atoms in total, but its basicity is strictly 1 because only the terminal acidic hydrogen attached to oxygen can ionize in water!'
      ],
      question_ids: []
    },
    {
      subtopic: 'The pH Scale',
      section_order: 3,
      section_type: 'worked_example',
      section_title: 'The pH Scale and Calculations',
      content: `The pH scale (introduced by Sørensen) measures the acidity or alkalinity of an aqueous solution based on the concentration of hydrogen ions:\n\npH = -log₁₀[H⁺] or pH = -log₁₀[H₃O⁺]\n\nSimilarly, pOH measures the concentration of hydroxide ions:\npOH = -log₁₀[OH⁻]\n\nAt standard room temperature (25 °C / 298 K), the ionic product of water is:\nKw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶\n\nTaking negative logarithms of both sides yields the universal relation:\npH + pOH = 14\n\nInterpretation:\n• pH < 7: Acidic solution ([H⁺] > 10⁻⁷ M)\n• pH = 7: Neutral solution ([H⁺] = 10⁻⁷ M)\n• pH > 7: Basic/Alkaline solution ([H⁺] < 10⁻⁷ M)`,
      examples: [
        'Calculate the pH of a 0.001 M KOH solution:\n• Potassium hydroxide is a strong base: KOH → K⁺ + OH⁻\n• [OH⁻] = 0.001 M = 1.0 × 10⁻³ mol dm⁻³\n• pOH = -log₁₀[OH⁻] = -log₁₀(10⁻³) = 3\n• pH + pOH = 14 → pH = 14 - pOH = 14 - 3 = 11.\n• Therefore, pH = 11 (strongly alkaline).'
      ],
      formulas: [
        'pH = -log₁₀[H⁺]',
        'pOH = -log₁₀[OH⁻]',
        '[H⁺] = 10^(-pH)',
        'pH + pOH = 14 (at 25 °C)'
      ],
      exam_tips: [
        'When calculating the pH of a base like NaOH, KOH, or Ca(OH)₂, always calculate pOH first, then subtract from 14 to find pH. Do not confuse pOH with pH!'
      ],
      question_ids: [11829]
    },
    {
      subtopic: 'Neutralization & Thermochemistry',
      section_order: 4,
      section_type: 'concept',
      section_title: 'Neutralization Reactions & Heat of Neutralization',
      content: `Neutralization is the reaction between an acid and a base to produce salt and water only:\nAcid + Base → Salt + Water\nNet ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)\n\nThermodynamic Properties of Neutralization:\n• Neutralization is ALWAYS an EXOTHERMIC reaction (heat is evolved to the surroundings; ΔH is negative).\n• Standard Heat of Neutralization (ΔH_neut): The enthalpy change when one mole of water is formed from the reaction of an acid and a base under standard conditions.\n\nKey Comparison for Examinations:\n1. Strong Acid + Strong Base (e.g. HCl + NaOH):\n   • Both are 100% completely dissociated in solution.\n   • The net reaction is purely H⁺ + OH⁻ → H₂O.\n   • ΔH_neut is constant and has the highest value: approximately -57.3 kJ/mol.\n2. Weak Acid + Strong Base or Strong Acid + Weak Base:\n   • Part of the evolved heat is absorbed to completely ionize the weak electrolyte.\n   • Therefore, the heat of neutralization is LESS than -57.3 kJ/mol (e.g. around -55 kJ/mol).`,
      examples: [
        'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)  [ΔH = -57.3 kJ/mol (Maximum Heat)]',
        'CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)  [ΔH = -55.2 kJ/mol (Lower due to heat of dissociation)]'
      ],
      formulas: [
        'Net ionic neutralization: H⁺(aq) + OH⁻(aq) → H₂O(l)',
        'ΔH_neut (Strong Acid + Strong Base) ≈ -57.3 kJ mol⁻¹'
      ],
      exam_tips: [
        'JAMB frequently asks: "Which pair of reactants produces the highest heat of neutralization?" Always choose the pair consisting of a STRONG acid and a STRONG base (such as HCl and NaOH or HNO₃ and KOH)!'
      ],
      question_ids: [12176, 52489, 52543]
    },
    {
      subtopic: 'Salts & Preparation',
      section_order: 5,
      section_type: 'concept',
      section_title: 'Classification of Salts and Preparation Methods',
      content: `A salt is a compound formed when all or part of the ionizable hydrogen of an acid is replaced by a metallic ion or ammonium ion (NH₄⁺).\n\nTypes of Salts:\n1. Normal Salt: Formed when ALL replaceable hydrogen ions of the acid are replaced (e.g., NaCl, K₂SO₄, NaNO₃). Neutral to litmus.\n2. Acid Salt: Formed when ONLY PART of the replaceable hydrogen of a polybasic acid is replaced. Contains replaceable hydrogen (e.g., NaHSO₄, NaHCO₃). Turns blue litmus red.\n3. Basic Salt: Contains unreacted hydroxide ions due to insufficient acid (e.g., Zn(OH)Cl, Mg(OH)Cl).\n4. Double Salt: Crystallizes as two different simple salts in equimolar proportions (e.g., Potash Alum: KAl(SO₄)₂·12H₂O, Mohr\'s salt).\n5. Complex Salt: Contains complex ions (e.g., Potassium hexacyanoferrate(II): K₄[Fe(CN)₆]).\n\nMethods of Preparing Soluble Salts:\n• Action of acid on reactive metal: Zn + H₂SO₄ → ZnSO₄ + H₂ ↑\n• Action of acid on insoluble base: CuO + H₂SO₄ → CuSO₄ + H₂O\n• Action of acid on insoluble carbonate: CuCO₃ + 2HNO₃ → Cu(NO₃)₂ + H₂O + CO₂ ↑\n• Titration (acid + soluble alkali): HCl + NaOH → NaCl + H₂O\n\nMethod for Preparing Insoluble Salts:\n• Double Decomposition (Precipitation): Mixing two soluble salts to precipitate an insoluble salt (e.g., AgNO₃(aq) + NaCl(aq) → AgCl(s) ↓ + NaNO₃(aq)).`,
      examples: [
        'Preparation of insoluble barium sulphate: BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) ↓ + 2NaCl(aq)',
        'Acid salt formation: H₂SO₄ + NaOH → NaHSO₄ + H₂O (partial replacement)'
      ],
      formulas: [
        'Normal Salt: Full neutralization',
        'Acid Salt: Contains replaceable H (e.g. NaHSO₄, KHCO₃)',
        'Precipitation: Soluble Salt A + Soluble Salt B → Insoluble Salt ↓ + Soluble Salt C'
      ],
      exam_tips: [
        'All sodium, potassium, and ammonium salts are 100% soluble in water. All nitrate salts (NO₃⁻) are 100% soluble. Memorize this to immediately identify precipitates in exam questions!'
      ],
      question_ids: []
    },
    {
      subtopic: 'Volumetric Analysis',
      section_order: 6,
      section_type: 'worked_example',
      section_title: 'Volumetric Analysis: Acid-Base Titration Calculations',
      content: `Acid-base titration is quantitative volumetric analysis used to determine the unknown concentration of an acid or base solution using a standard solution of known concentration.\n\nThe Universal Titration Stoichiometry Formula:\n(C_A × V_A) / (C_B × V_B) = n_A / n_B\n\nWhere:\n• C_A = Molarity (concentration) of acid in mol/dm³\n• V_A = Volume of acid used from burette (cm³)\n• C_B = Molarity (concentration) of base in mol/dm³\n• V_B = Volume of base pipetted into conical flask (usually 25.0 cm³ or 20.0 cm³)\n• n_A = Mole ratio of acid from balanced chemical equation\n• n_B = Mole ratio of base from balanced chemical equation`,
      examples: [
        'WAEC Titration Question: 20 cm³ of 0.09 mol dm⁻³ tetraoxosulphate(VI) acid requires 30 cm³ of sodium hydroxide solution for complete neutralization. Calculate the molarity of the sodium hydroxide solution.\n• Balanced Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n• Stoichiometric Mole Ratio: n_A = 1, n_B = 2\n• Given: C_A = 0.09 M, V_A = 20 cm³, V_B = 30 cm³\n• Formula: (C_A × V_A) / (C_B × V_B) = n_A / n_B\n  (0.09 × 20) / (C_B × 30) = 1 / 2\n• Cross-multiply:\n  1.8 / (30 C_B) = 1 / 2 → 30 C_B = 3.6 → C_B = 3.6 / 30 = 0.12 mol dm⁻³.'
      ],
      formulas: [
        '(C_A × V_A) / (C_B × V_B) = n_A / n_B',
        'Concentration (g/dm³) = Molarity (mol/dm³) × Molar Mass (g/mol)'
      ],
      exam_tips: [
        'Always write and balance the chemical equation first! If the acid is H₂SO₄ and the base is NaOH, n_A = 1 and n_B = 2. Forgetting the mole ratio factor is the #1 reason students lose marks in titration calculations.'
      ],
      question_ids: [84090]
    },
    {
      subtopic: 'Summary',
      section_order: 7,
      section_type: 'summary',
      section_title: 'Acids, Bases & Salts Cheat Sheet & Summary',
      content: `Mastery Summary for Acids, Bases and Salts:\n\n1. Theories: Arrhenius (H⁺ / OH⁻ in water), Brønsted-Lowry (proton donor / acceptor), Lewis (electron pair acceptor / donor).\n2. Basicity: Number of replaceable H⁺ ions per acid molecule. HCl = 1, H₂SO₄ = 2, H₃PO₄ = 3, CH₃COOH = 1.\n3. pH Formula: pH = -log₁₀[H⁺] | pH + pOH = 14 at 25 °C.\n4. Neutralization Heat: Always exothermic; Strong acid + Strong base has maximum ΔH ≈ -57.3 kJ/mol.\n5. Solubility Rules: All nitrates, Na⁺, K⁺, and NH₄⁺ salts are soluble. AgCl and BaSO₄ are classic insoluble precipitates.\n6. Titration Equation: (C_A × V_A) / (C_B × V_B) = n_A / n_B.`,
      examples: [],
      formulas: [],
      exam_tips: [
        'Keep this cheat sheet handy during past question CBT drills for instant recall.'
      ],
      question_ids: []
    }
  ]
};

async function run() {
  console.log('--- Populating 4 Structured Test Lessons to Live DB ---');

  console.log('\n1. English Language: Concord and Grammatical Agreement...');
  const resEng = await saveLesson(englishConcord);
  console.log('Result:', resEng);

  console.log('\n2. Mathematics: Quadratic Equations and Functions...');
  const resMath = await saveLesson(mathQuadratic);
  console.log('Result:', resMath);

  console.log('\n3. Physics: Motion and Kinematics...');
  const resPhys = await saveLesson(physicsMotion);
  console.log('Result:', resPhys);

  console.log('\n4. Chemistry: Acids, Bases & Salts...');
  const resChem = await saveLesson(chemistryAcids);
  console.log('Result:', resChem);

  console.log('\nAll 4 test lessons processed!');
}

run().catch(console.error);
