import { Question } from '../questions';

export const MATHEMATICS_QUESTIONS: Question[] = [
  {
    "id": 1,
    "questionNumber": 1,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Permutation & Combination",
    "year": 2015,
    "difficulty": "Medium",
    "text": "In how many ways can 7 directors sit round a table?",
    "options": [
      {
        "key": "A",
        "text": "720"
      },
      {
        "key": "B",
        "text": "120"
      },
      {
        "key": "C",
        "text": "24"
      },
      {
        "key": "D",
        "text": "5040"
      }
    ],
    "optionsMap": {
      "A": "720",
      "B": "120",
      "C": "24",
      "D": "5040"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When 7 directors sit around a circular table, the arrangements are considered distinct if the relative positions of the directors with respect to each other are different. To calculate the number of ways 7 directors can sit around a circular table, you can use the formula for arranging items in a circle: (n − 1)! Where n is the number of items to be arranged in a circle. In this case, n = 7, so: Ways = (7 − 1)! = 6! Now, calculate 6!: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 So, there are 720 distinct ways in which 7 directors can sit around a circular table.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2016"
  },
  {
    "id": 2,
    "questionNumber": 2,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Permutation & Combination",
    "year": 2016,
    "difficulty": "Hard",
    "text": "In how many ways can 7 directors sit round a table?",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "100"
      },
      {
        "key": "C",
        "text": "720"
      },
      {
        "key": "D",
        "text": "5040"
      }
    ],
    "optionsMap": {
      "A": "24",
      "B": "100",
      "C": "720",
      "D": "5040"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "We have 7 directors sitting round a table in (7 - 1)! ways = 6 ways! = 6 × 5 × 4 × 3 × 2 × 1 = 720 ways When 7 directors sit around a circular table, the arrangements are considered distinct if the relative positions of the directors with respect to each other are different. To calculate the number of ways 7 directors can sit around a circular table, you can use the formula for arranging items in a circle: (n − 1)! Where n is the number of items to be arranged in a circle. In this case, n = 7, so: Ways = (7 − 1)! = 6! Now, calculate 6!: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 So, there are 720 distinct ways in which 7 directors can sit around a circular table.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2016"
  },
  {
    "id": 3,
    "questionNumber": 3,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Permutation & Combination",
    "year": 2005,
    "difficulty": "Easy",
    "text": "For what value of n is <sup>n+1</sup> C₃ = 4(ⁿC<sub>3</sub> )?",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "optionsMap": {
      "A": "6",
      "B": "5",
      "C": "4",
      "D": "3"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "<sup>n+1</sup> C₃ = 4( \\(^nC_3\\) ) Recall that; \\(n_c\\) = \\(\\frac{n!}{r!\\times(n-r)!)}\\)<sup>n+1</sup> C₃ = 4( \\(^nC_3\\) ) \\(\\frac{(n+1)!}{3!\\times(n+1-3)!)}\\) = \\(4\\times\\frac{(n)!}{3!\\times(n-3)!)}\\)\\(\\frac{(n+1)!}{3!\\times(n-2)!)}\\) = \\(4\\times\\frac{(n)!}{3!\\times(n-3)!)}\\)\\(\\frac{(n+1)(n)(n-1)(n-2)}{3!\\times(n-2)!)}\\) = \\(4\\times\\)\\(\\frac{n+1\\times\\ n\\times\\ n-2\\times\\ (n-3)}{3!\\times(n-3)!)}\\) (n+1)(n)(n-1) = 4 x n x n – 1 x n – 2 n(n² - 1) = 4n(n² - 3n + 2) n² - 1 = 4n² - 12n + 8 3n² - 12n + 9 = 0 Divide through by 3 n² - 4n + 3 = 0 (n – 3)(n – 1) = 0 n = 3 or 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2006
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2006"
  },
  {
    "id": 4,
    "questionNumber": 4,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Permutation & Combination",
    "year": 2013,
    "difficulty": "Medium",
    "text": "In how many ways can a student select 2 subjects from 5 subjects?",
    "options": [
      {
        "key": "A",
        "text": "\\(5!\\over2!2!\\)"
      },
      {
        "key": "B",
        "text": "\\(5!\\over2!3!\\)"
      },
      {
        "key": "C",
        "text": "\\(5!\\over2!\\)"
      },
      {
        "key": "D",
        "text": "\\(5!\\over3!\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(5!\\over2!2!\\)",
      "B": "\\(5!\\over2!3!\\)",
      "C": "\\(5!\\over2!\\)",
      "D": "\\(5!\\over3!\\)"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The number of ways a student can select r items (subjects in this case) from a total of n distinc items is given by the combination formula \\(^nC_r={n!\\over r!(n-r)!}\\) Given: A student is to select 2 subjects from 5 subjects This can be done in <sup>5</sup> C<sub>2</sub> ways \\(={5!\\over2!3!}\\) Where n! is the factorial of n, which is the product of all positive integers from 1 to n and r! and (n – r)! are the factorials of r and n – r respectively. In your case, the student wants to select 2 subjects from 5 subjects, so n = 5 and r = 2 \\(^5C_2={5!\\over2!(5-2)!}={5!\\over2!3!}\\) You can decide to solve further according to the requirements of the question: \\(^nC_r={5\\times4\\times3!\\over(2\\times1)\\times3!}={20\\over2}=10\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 5,
    "questionNumber": 5,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Probability Theory",
    "year": 2023,
    "difficulty": "Hard",
    "text": "The probability of a student passing any examination is <sup>2</sup>/3 , if the student takes three examinations, what is the probability that he will not pass any of them?",
    "options": [
      {
        "key": "A",
        "text": "<sup>1</sup>/27"
      },
      {
        "key": "B",
        "text": "<sup>8</sup>/27"
      },
      {
        "key": "C",
        "text": "<sup>4</sup>/9"
      },
      {
        "key": "D",
        "text": "<sup>2</sup>/3"
      }
    ],
    "optionsMap": {
      "A": "<sup>1</sup>/27",
      "B": "<sup>8</sup>/27",
      "C": "<sup>4</sup>/9",
      "D": "<sup>2</sup>/3"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Probability of failing one exam: Since the probability of passing is \\(2\\over3\\) , the probability of failing one exam is: \\(​ 1 - \\frac{2}{3} \\) = \\(\\frac{1}{3} ​\\) Independent Events: The events of passing or failing each examination are independent. This means the outcome of one exam does not affect the outcome of another. Probability of failing all three exams: To find the probability of failing all three exams, we multiply the probabilities of failing each individual exam: \\(​ \\frac{1}{3} \\times \\frac{1}{3} \\times \\frac{1}{3}\\) = \\(\\frac{1}{27} ​\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2009,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2009, 2023"
  },
  {
    "id": 6,
    "questionNumber": 6,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Probability Theory",
    "year": 2016,
    "difficulty": "Easy",
    "text": "A bag contains 10 black balls and 15 white balls. If a ball is picked at random without replacement, what is the probability of picking a white ball?",
    "options": [
      {
        "key": "A",
        "text": "<sup>4</sup>/5"
      },
      {
        "key": "B",
        "text": "<sup>3</sup>/5"
      },
      {
        "key": "C",
        "text": "<sup>2</sup>/5"
      },
      {
        "key": "D",
        "text": "<sup>1</sup>/5"
      }
    ],
    "optionsMap": {
      "A": "<sup>4</sup>/5",
      "B": "<sup>3</sup>/5",
      "C": "<sup>2</sup>/5",
      "D": "<sup>1</sup>/5"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To find the probability of picking a white ball from the bag, you can use the following steps: Determine the total number of balls in the bag. In this case, there are 10 black balls and 15 white balls, so the total number of balls is 10 + 15 = 25. Determine the number of favorable outcomes, which is the number of white balls. In this case, there are 15 white balls. Use the probability formula: Probability (P) = \\(\\frac{(Number\\ of\\ Favmorable\\ Outcoes)} {(Total\\ Number\\ of\\ Outcomes)}\\) P(white ball) = \\(\\frac{(Number\\ of\\ white\\ balls)} {(Total\\ Number\\ of\\ balls)}\\) P(white ball) = \\(\\frac{15}{25}\\) Simplify the fraction if necessary: P(white ball) = \\(\\frac{3}{5}\\) So, the probability of picking a white ball at random without replacement from the bag is \\(\\frac{3}{5}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2016"
  },
  {
    "id": 7,
    "questionNumber": 7,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Probability Theory",
    "year": 2015,
    "difficulty": "Medium",
    "text": "A bag contains 10 black balls and 15 white balls. If a ball is picked at random without replacement, what is the probability of picking a white ball?",
    "options": [
      {
        "key": "A",
        "text": "<sup>2</sup>/5"
      },
      {
        "key": "B",
        "text": "<sup>3</sup>/5"
      },
      {
        "key": "C",
        "text": "<sup>4</sup>/5"
      },
      {
        "key": "D",
        "text": "<sup>1</sup>/5"
      }
    ],
    "optionsMap": {
      "A": "<sup>2</sup>/5",
      "B": "<sup>3</sup>/5",
      "C": "<sup>4</sup>/5",
      "D": "<sup>1</sup>/5"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To find the probability of picking a white ball at random from the bag without replacement, you can use the following steps: Determine the total number of balls in the bag: 10 black balls + 15 white balls = 25 balls in total. Determine the number of white balls: There are 15 white balls in the bag. Use the formula for probability: Probability = \\(\\frac{Number\\ of\\ favourable\\ outcomes}{total\\ number\\ of\\ possible\\ outcomes}\\) In this case, the favorable outcome is picking a white ball, and there are 15 white balls. The total number of possible outcomes is the total number of balls in the bag, which is 25. So, the probability of picking a white ball is: Probability = \\(\\frac{Number\\ of\\ white\\ balls}{total\\ number\\ of\\ balls}\\) = \\(\\frac{15}{25}\\) Now, you can simplify this fraction: Probability = \\(\\frac{3}{5}\\) So, the probability of picking a white ball at random without replacement is <sup>3</sup>/5 .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2016"
  },
  {
    "id": 8,
    "questionNumber": 8,
    "subject": "Mathematics",
    "topic": "Probability",
    "subtopic": "Probability Theory",
    "year": 2005,
    "difficulty": "Hard",
    "text": "The probabilities that John and James pass an examination are 3/4 and 3/5 respectively. Find the probability of both boys failing the examination.",
    "options": [
      {
        "key": "A",
        "text": "<sup>1</sup>/10"
      },
      {
        "key": "B",
        "text": "<sup>3</sup>/10"
      },
      {
        "key": "C",
        "text": "<sup>9</sup>/10"
      },
      {
        "key": "D",
        "text": "<sup>11</sup>/10"
      }
    ],
    "optionsMap": {
      "A": "<sup>1</sup>/10",
      "B": "<sup>3</sup>/10",
      "C": "<sup>9</sup>/10",
      "D": "<sup>11</sup>/10"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To find the probability that both John and James fail the examination, you can use the complement rule, which states that the probability of an event not happening is 1 minus the probability of it happening. Probability(John Pass ) = \\(\\frac{3}{4}\\) Probability(John failed) = \\(1- \\frac{3}{4} = \\frac{1}{4}\\) Probability(James pass) = \\(\\frac{3}{5}\\) Probability(James failed) = \\(1- \\frac{3}{5} = \\frac{2}{5}\\) Now, to find the probability that john and james fail, you can multiply their individual failure properties: Probability(Both failed) = \\(\\frac{1}{4} \\times \\frac{2}{5} = \\frac{1}{10}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2018"
  },
  {
    "id": 9,
    "questionNumber": 9,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Lines & Angles",
    "year": 2009,
    "difficulty": "Easy",
    "text": "Find the value of x in the diagram.",
    "imageUrl": "/diagrams/mathematics_q9_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "50⁰"
      },
      {
        "key": "B",
        "text": "60⁰"
      },
      {
        "key": "C",
        "text": "70⁰"
      },
      {
        "key": "D",
        "text": "80⁰"
      }
    ],
    "optionsMap": {
      "A": "50⁰",
      "B": "60⁰",
      "C": "70⁰",
      "D": "80⁰"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "(1) Letter the diagram above. (2)∠EXO =∠DOX = 30° (alternate angles) (3)∠BAO =∠AOD = x° (alternate angles) (4)∠COX +∠DOX = 180° (angle on a straight line) ∴∠COX + 30° = 180° ∠COX = 150° (5)∠COX +∠COA = 250 ∴∠COA = 100 ∠COA + x = 180° (angle on a straight line) 100 + x = 180° x = 80°",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2007,
      2009,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2007, 2009, 2024"
  },
  {
    "id": 10,
    "questionNumber": 10,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Lines & Angles",
    "year": 2007,
    "difficulty": "Medium",
    "text": "Find the value of x in the diagram",
    "imageUrl": "/diagrams/mathematics_q10_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "281⁰"
      },
      {
        "key": "B",
        "text": "269⁰"
      },
      {
        "key": "C",
        "text": "201⁰"
      },
      {
        "key": "D",
        "text": "179⁰"
      }
    ],
    "optionsMap": {
      "A": "281⁰",
      "B": "269⁰",
      "C": "201⁰",
      "D": "179⁰"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Let the angle between 45° and 85° be y 45° + y° + 85° = 180° (sum of angles on a straight line) y° + 130° = 180° y = 50° x = 360 - (45 + 34) x = 360 - 79 = 281°",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2007,
      2009,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2007, 2009, 2024"
  },
  {
    "id": 11,
    "questionNumber": 11,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "General Polygons",
    "year": 2025,
    "difficulty": "Hard",
    "text": "How many sides has a regular polygon whose interior angle is 135⁰ each",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "optionsMap": {
      "A": "8",
      "B": "9",
      "C": "10",
      "D": "12"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Recall the formula for interior angle of a regular polygon \\(\\text{Interior angle} = \\frac{(n-2) \\times 180^\\circ}{n}\\) Substitute the given angle\\(135 = \\frac{(n-2) \\times 180}{n}\\) N = 8 sides",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2025,
      2026
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2025, 2026"
  },
  {
    "id": 12,
    "questionNumber": 12,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "General Polygons",
    "year": 2014,
    "difficulty": "Easy",
    "text": "How many sides has a regular polygon whose interior angle is 135° each",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "optionsMap": {
      "A": "9",
      "B": "8",
      "C": "12",
      "D": "10"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The formula to find the interior angle of a regular polygon is given by: Interior Angle = \\({180(n-2)\\over n}\\) Where \"n\" is the number of sides of the polygon. In your case, the interior angle is given as 135°. Let's plug that into the formula and solve for \"n\": \\(135={180(n-2)\\over n}\\) To simplify the equation, multiply both sides by \"n\" to eliminate the fraction: 135n = 180 × (n - 2) Distribute the 180: 135n = 180n - 360 Subtract 135n from both sides: 0 = 180n - 135n - 360 Simplify: 0 = 45n - 360 Add 360 to both sides: 45n = 360 Now, divide both sides by 45: n = 8 So, a regular polygon with an interior angle of 135° has 8 sides.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2025,
      2026
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2025, 2026"
  },
  {
    "id": 13,
    "questionNumber": 13,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "General Polygons",
    "year": 2026,
    "difficulty": "Medium",
    "text": "How many sides has a regular polygon whose interior angle is 135° each?",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "optionsMap": {
      "A": "9",
      "B": "8",
      "C": "7",
      "D": "6"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "For a regular polygon, each interior angle is given by: \\(\\frac{(n-2)\\times 180^\\circ}{n}\\) Set this equal to 135°: \\(\\frac{(n-2)\\times 180}{n} = 135\\) Multiply both sides by nnn: 180 (n−2) = 135n Expand: 180n − 360 = 135n Bring like terms together: 180n−135n = 360 45n = 360 n = 8",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2025,
      2026
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2025, 2026"
  },
  {
    "id": 14,
    "questionNumber": 14,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Triangles & Quadrilaterals",
    "year": 2022,
    "difficulty": "Hard",
    "text": "In a regular polygon, each interior angle doubles its corresponding exterior angle. Find the number of sides of the polygon.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "2x + x = 180 <sup>0</sup> 3x = 180 <sup>0</sup> x = 60 <sup>0</sup> (exterior angle of the polygon) \\(\\mathsf{angle={total\\space angle\\over number\\space of\\space sides}}\\)\\(60={360\\over n}\\)\\(\\implies n={360\\over60}\\) n = 6 sides",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2000,
      2017,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2000, 2017, 2022"
  },
  {
    "id": 15,
    "questionNumber": 15,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Construction & Loci",
    "year": 2019,
    "difficulty": "Easy",
    "text": "The locus of a point which moves so that it is equidistant from two intersecting straight lines is the",
    "options": [
      {
        "key": "A",
        "text": "angle bisector of the two lines"
      },
      {
        "key": "B",
        "text": "line parallel to the two lines"
      },
      {
        "key": "C",
        "text": "perpendicular bisector of the two lines"
      },
      {
        "key": "D",
        "text": "bisector of the two lines"
      }
    ],
    "optionsMap": {
      "A": "angle bisector of the two lines",
      "B": "line parallel to the two lines",
      "C": "perpendicular bisector of the two lines",
      "D": "bisector of the two lines"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The locus of a point which moves so that it is equidistant from two intersecting straight lines is the angle bisector of the angle formed by the intersecting lines. Imagine two intersecting lines L1 and L2 forming an angle at their point of intersection, P. <ul><li> Consider a point Q that is equidistant from L1 and L2. Draw perpendiculars from Q to L1 and L2, forming triangles QPL1 and QPL2. .</li><li> Since Q is equidistant from L1 and L2, the perpendiculars will have equal lengths (QL1 = QL2). .</li><li> This makes triangles QPL1 and QPL2 congruent by the side-side-side (SSS) congruence condition. .</li><li> Consequently, angles QLP1 and QLP2 must also be equal, making PQ the angle bisector of the angle formed by L1 and L2. .</li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1990,
      2019
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1990, 2019"
  },
  {
    "id": 16,
    "questionNumber": 16,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Construction & Loci",
    "year": 2015,
    "difficulty": "Medium",
    "text": "A. Using ruler and a pair of compasses only, construct a:(i) trapezium WXYZ, such that |WX| = 8cm, |XY| = 5.5cm, |XY| = 8.3cm,∠WXY = 60o and WX//ZY & rectangle PQYZ where P and Q are on WX Bi. Measure |QX| Bii. Measure∠XWZ",
    "options": [
      {
        "key": "A",
        "text": "A. for |WX| = 8 cm + 0.1 cmfor < WXY = 60<sup>o</sup>for ZY parallel to WXfor locating Zfor constructing perpendiculars from Y and Z to meet WX at P and Q respectively."
      },
      {
        "key": "B",
        "text": "Bi. B1 for |QX| = 2.8 cm + 1⁰ Bii. B1 for < XWZ = 76<sup>o</sup> + 1⁰"
      }
    ],
    "optionsMap": {
      "A": "A. for |WX| = 8 cm + 0.1 cmfor < WXY = 60<sup>o</sup>for ZY parallel to WXfor locating Zfor constructing perpendiculars from Y and Z to meet WX at P and Q respectively.",
      "B": "Bi. B1 for |QX| = 2.8 cm + 1⁰ Bii. B1 for < XWZ = 76<sup>o</sup> + 1⁰",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Construction & Loci.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2015"
  },
  {
    "id": 17,
    "questionNumber": 17,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Construction & Loci",
    "year": 2017,
    "difficulty": "Hard",
    "text": "Find the equation of the locus of a point p (x, y) such that pv = pw, where v= (1, 1) and w = (3, 5)",
    "options": [
      {
        "key": "A",
        "text": "2x + 2y = 9"
      },
      {
        "key": "B",
        "text": "2x + 3y = 8"
      },
      {
        "key": "C",
        "text": "2x + y = 9"
      },
      {
        "key": "D",
        "text": "x + 2y = 8"
      }
    ],
    "optionsMap": {
      "A": "2x + 2y = 9",
      "B": "2x + 3y = 8",
      "C": "2x + y = 9",
      "D": "x + 2y = 8"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The locus of a point P(x,y) such that PV = PW where V = (1,1) and W = (3,5). This means that the point P moves so that its distance from V and W are equidistance. PV = PW \\(\\sqrt{(x − x_1)^2 + (y − y_1)^2}\\) = \\(\\sqrt{(x − x_2)^2 + (y − y_2)^2}\\)\\(\\sqrt{(x -1)^2 + (y - 1)^2}\\) = \\(\\sqrt{(x - 3)^2 + (y - 5)^2}\\) Squaring both sides of the equation, (x – 1)² + (y – 1)² = (x – 3) + (y – 5)² x² - 2x + 1 + y² - 2y + 1 = x² - 6x + 9 + y² - 10y + 25 Collecting like terms and solving, x + 2y = 8",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2017"
  },
  {
    "id": 18,
    "questionNumber": 18,
    "subject": "Mathematics",
    "topic": "Geometry",
    "subtopic": "Construction & Loci",
    "year": 1990,
    "difficulty": "Easy",
    "text": "The locus of a point which moves so that it is equidistant from two intersecting straight lines is the",
    "options": [
      {
        "key": "A",
        "text": "perpendicular bisector of the two lines"
      },
      {
        "key": "B",
        "text": "angle bisector of the two lines"
      },
      {
        "key": "C",
        "text": "bisector of the two lines"
      },
      {
        "key": "D",
        "text": "line parallel to the two lines"
      }
    ],
    "optionsMap": {
      "A": "perpendicular bisector of the two lines",
      "B": "angle bisector of the two lines",
      "C": "bisector of the two lines",
      "D": "line parallel to the two lines"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The correct option is \"angle bisector of the two lines\".",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1990,
      2019
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1990, 2019"
  },
  {
    "id": 19,
    "questionNumber": 19,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Central Tendency",
    "year": 2016,
    "difficulty": "Medium",
    "text": "Find the median of 5, 9, 1, 10, 3, 8, 9, 2, 4, 5, 5, 5, 7, 3 and 6",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find the median of a set of numbers, you first need to arrange the numbers in either ascending or descending order. Once the numbers are in order, the median is the middle value if there is an odd number of values, or the average of the two middle values if there is an even number of values. Let's arrange the numbers in ascending order: 1, 2, 3, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 9, 10 Now, you can see that there are 15 numbers in the list, which is an odd number. So, the median is the middle value, which is the 8th number in the sorted list: Median = 5 So, the median of the given set of numbers is 5.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015, 2016"
  },
  {
    "id": 20,
    "questionNumber": 20,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Pie Chart",
    "year": 2018,
    "difficulty": "Hard",
    "text": "The probabilities that John and James pass an examination are <sup>3</sup>/4 and <sup>3</sup>/5 respectively. Find the probability of both boys failing the examination.",
    "options": [
      {
        "key": "A",
        "text": "<sup>1</sup>/10"
      },
      {
        "key": "B",
        "text": "<sup>2</sup>/10"
      },
      {
        "key": "C",
        "text": "<sup>9</sup>/20"
      },
      {
        "key": "D",
        "text": "<sup>11</sup>/20"
      }
    ],
    "optionsMap": {
      "A": "<sup>1</sup>/10",
      "B": "<sup>2</sup>/10",
      "C": "<sup>9</sup>/20",
      "D": "<sup>11</sup>/20"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\text{P(John pass)}={3\\over4}\\)\\(\\text{P(James pass)}={3\\over5}\\) P(John fail) = 1 - P(John pass) \\(=1-{3\\over4} \\)\\(={1\\over4}\\) P(James fail) = 1 - P(James pass) \\(=1-{3\\over5}\\)\\(={2\\over5}\\) P(both boys fail) = P(John fail) × P( James fail) \\(={1\\over4}×{2\\over5}\\)\\(={1\\over10}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2018"
  },
  {
    "id": 21,
    "questionNumber": 21,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Pie Chart",
    "year": 2024,
    "difficulty": "Easy",
    "text": "The pie chart shows the population of men, women and children in a city, if the population of the city is 1,800,000, how many men are in the city.",
    "imageUrl": "/diagrams/mathematics_q21_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "845,000"
      },
      {
        "key": "B",
        "text": "600, 000"
      },
      {
        "key": "C",
        "text": "355,000"
      },
      {
        "key": "D",
        "text": "250,000"
      }
    ],
    "optionsMap": {
      "A": "845,000",
      "B": "600, 000",
      "C": "355,000",
      "D": "250,000"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "120 <sup>∘</sup> + 169 <sup>∘</sup> + men = 360 <sup>∘</sup> (sum of angles at a point) 289 + M = 360 <sup>∘</sup> M = 360 <sup>∘</sup> - 289 = 71 <sup>∘</sup> The angles of sector equivalent to men is 71 <sup>∘</sup> Men population = \\(\\frac{71}{360} \\times 1,800000\\) = 35,5000",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2024"
  },
  {
    "id": 22,
    "questionNumber": 22,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Pie Chart",
    "year": 2020,
    "difficulty": "Medium",
    "text": "The pie chart shows the population of men, women and children in a city, if the population of the city is 1,800,000, how many men are in the city.",
    "imageUrl": "/diagrams/mathematics_q22_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "845,000"
      },
      {
        "key": "B",
        "text": "600, 000"
      },
      {
        "key": "C",
        "text": "355,000"
      },
      {
        "key": "D",
        "text": "250,000"
      }
    ],
    "optionsMap": {
      "A": "845,000",
      "B": "600, 000",
      "C": "355,000",
      "D": "250,000"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "120 <sup>∘</sup> + 169 <sup>∘</sup> + men = 360 <sup>∘</sup> (sum of angles at a point) 289 + M = 360 <sup>∘</sup> M = 360 <sup>∘</sup> - 289 = 71 <sup>∘</sup> The angles of sector equivalent to men is 71 <sup>∘</sup> Men population = \\(\\frac{71}{360} \\times 1,800000\\) = 35,5000",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2024"
  },
  {
    "id": 23,
    "questionNumber": 23,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Frequency Distribution",
    "year": 2021,
    "difficulty": "Hard",
    "text": "The inter-quartile range of a distribution is 7. If the 25th percentile is 16, find the upper quartile",
    "options": [
      {
        "key": "A",
        "text": "35"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "23"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "optionsMap": {
      "A": "35",
      "B": "30",
      "C": "23",
      "D": "3"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The interquartile range (IQR) is the difference between the third quartile (upper quartile) and the first quartile. If the IQR is 7, it means: Upper Quartile - First Quartile = 7 We are given that the 25th percentile is 16. This is equivalent to the first quartile (Q1). So, Q1 = 16. Now, we can solve for the upper quartile (Q3): Upper Quartile - 16 = 7 Upper Quartile = 7 + 16 Upper Quartile = 23 So, the upper quartile (Q3) is 23.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2021"
  },
  {
    "id": 24,
    "questionNumber": 24,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Frequency Distribution",
    "year": 2020,
    "difficulty": "Easy",
    "text": "The interquartile range of a distribution is 7. If the 25th percentile is 16, find the upper quartile",
    "options": [
      {
        "key": "A",
        "text": "35"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "23"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "optionsMap": {
      "A": "35",
      "B": "30",
      "C": "23",
      "D": "9"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The interquartile range (IQR) is the range between the first quartile (Q1) and the third quartile (Q3). You're given that the IQR is 7, and you know the 25th percentile (Q1) is 16. First, calculate Q3 (the upper quartile) using the IQR: Q3 = Q1 + IQR Q3 = 16 + 7 Q3 = 23 So, the upper quartile (Q3) is 23.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2021"
  },
  {
    "id": 25,
    "questionNumber": 25,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Frequency Distribution",
    "year": 2018,
    "difficulty": "Medium",
    "text": "The table shown gives the marks scored by a group of student in a test. Use the table to answer the question given.<table border=\"2\" style=\"width:300px\"><tbody><tr><td> Mark </td><td> 0 </td><td> 1 </td><td> 2 </td><td> 3 </td><td> 4 </td><td> 5 </td></tr><tr><td> Frequency </td><td> 1 </td><td> 2 </td><td> 7 </td><td> 5 </td><td> 4 </td><td> 3 </td></tr></tbody></table> What is the probability of selecting a student from the group that scored 2 or 3",
    "options": [
      {
        "key": "A",
        "text": "<sup>1</sup>/11"
      },
      {
        "key": "B",
        "text": "<sup>5</sup>/22"
      },
      {
        "key": "C",
        "text": "<sup>7</sup>/22"
      },
      {
        "key": "D",
        "text": "<sup>6</sup>/11"
      }
    ],
    "optionsMap": {
      "A": "<sup>1</sup>/11",
      "B": "<sup>5</sup>/22",
      "C": "<sup>7</sup>/22",
      "D": "<sup>6</sup>/11"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To find the probability of selecting a student who scored 2 or 3, we'll follow these steps: a. Count the total number of students in the group: Total students = 1 + 2 + 7 + 5 + 4 + 3 = 22 b. Count the number of students who scored 2 or 3: Students scoring 2 or 3 = 7 (scored 2) + 5 (scored 3) = 12 C. Divide the number of successful outcomes (scoring 2 or 3) by the total possible outcomes (total students): \\(\\text{Probability}\\)\\( = \\frac{\\text{Number of students who scored 2 or 3}}{\\text{Total number of students}} = \\frac{12}{22}\\) Simplifying the fraction: \\(\\text{Probability} = \\frac{6}{11}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2018, 2024"
  },
  {
    "id": 26,
    "questionNumber": 26,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Frequency Distribution",
    "year": 2018,
    "difficulty": "Hard",
    "text": "The table shown gives the marks scored by a group of student in a test. Use the table to answer the question given.<table border=\"2\" style=\"width:238.375px\"><tbody><tr><td> Mark </td><td> 0 </td><td> 1 </td><td> 2 </td><td> 3 </td><td> 4 </td><td> 5 </td></tr><tr><td> Frequency </td><td> 1 </td><td> 2 </td><td> 7 </td><td> 5 </td><td> 4 </td><td> 3 </td></tr></tbody></table> What is the median mark?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Total Frequency = 1 + 2 + 7 + 5 + 4 + 3 = 22 Step 1: Find the Median Positio The position of the median is given by: \\(\\text{Term} = \\frac{N_{\\text{th}}}{2}\\) Where N = 22 (total number of terms): \\(\\text{Term} = \\frac{22}{2} = 11\\text{th term}\\) Step 2: Identify the 11th Term<ul><li> Going in ascending order, the 11th term is 3. .</li><li> Going in descending order, the 11th term is also 3. .</li></ul> Step 3: Calculate the Median Since both the 11th and 12th terms are the same: \\(\\text{Median} = \\frac{3 + 3}{2} = \\frac{6}{2} = 3\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2018, 2024"
  },
  {
    "id": 27,
    "questionNumber": 27,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Central Tendency",
    "year": 1990,
    "difficulty": "Easy",
    "text": "The mean of ten positive numbers is 16. When another number is added, the mean becomes 18. Find the eleventh number",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "18"
      },
      {
        "key": "D",
        "text": "38"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "16",
      "C": "18",
      "D": "38"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "38 To find the eleventh number, we'll use the given information about the mean of the ten numbers and the new mean after adding the eleventh number. <ol start=\"1\"><li> Mean of the first ten numbers = 16<ul><li> Total sum of ten numbers =10 × 16 = 160 </li></ul></li><li> New mean after adding the eleventh number = 18<ul><li> Total sum of eleven numbers =11 × 18 = 198 </li></ul></li><li> Calculating the eleventh number:<ul><li> Subtract the original sum from the new sum: </li></ul></li></ol> 198 − 160 = 38",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1990,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1990, 2021"
  },
  {
    "id": 28,
    "questionNumber": 28,
    "subject": "Mathematics",
    "topic": "Statistics",
    "subtopic": "Central Tendency",
    "year": 2015,
    "difficulty": "Medium",
    "text": "Find the mode of the distribution above",
    "imageUrl": "/diagrams/mathematics_q28_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "optionsMap": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The mode of a dataset is the value that appears most frequently. In your dataset, you have the following values and their corresponding frequencies: Values: 0, 1, 2, 3, 4 Frequencies: 1, 2, 2, 1, 9 From these frequencies, you can see that the value 4 has the highest frequency, which is 9.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015"
  },
  {
    "id": 29,
    "questionNumber": 29,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Bearings",
    "year": 2017,
    "difficulty": "Hard",
    "text": "A ship sails a distance 50km in the direction S50°E and then sails a distance of 50km in the direction N40°E. Find the bearing of the ship from its original position",
    "options": [
      {
        "key": "A",
        "text": "N40°E"
      },
      {
        "key": "B",
        "text": "N85°E"
      },
      {
        "key": "C",
        "text": "S95°E"
      },
      {
        "key": "D",
        "text": "S90°E"
      }
    ],
    "optionsMap": {
      "A": "N40°E",
      "B": "N85°E",
      "C": "S95°E",
      "D": "S90°E"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "<img src=\"data:image/png;base64,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\" style=\"height:226px; width:300px\"/>Let θ be the bearing of the ship from its original position. From trigonometry, tanα = \\(\\frac {50}{50}\\)tanα = 1 α = tan⁻¹1 α = 45° 50 + 45 + θ = 180° (sum of angles on a straight line) 95 + θ = 180 θ = 180 - 95 θ = 85° ∴ The bearing is N85°E",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2023"
  },
  {
    "id": 30,
    "questionNumber": 30,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Bearings",
    "year": 2005,
    "difficulty": "Easy",
    "text": "From a point R, 300m north of P, a man walks eastwards to a place Q which is 600m from P. Find the bearing of P from Q correct to the nearest degree.",
    "options": [
      {
        "key": "A",
        "text": "026°"
      },
      {
        "key": "B",
        "text": "045°"
      },
      {
        "key": "C",
        "text": "210°"
      },
      {
        "key": "D",
        "text": "240⁰"
      }
    ],
    "optionsMap": {
      "A": "026°",
      "B": "045°",
      "C": "210°",
      "D": "240⁰"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "<img src=\"data:image/png;base64,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\" style=\"height:157px; width:300px\"/> To find the bearing of point P from point Q, you can use trigonometry. The bearing is typically measured in degrees clockwise from the north direction. Let's label the points as follows: P (the starting point) R (300m north of P) Q (600m east of R) Using \\(Sin \\theta = \\frac{opp}{hyp}\\)\\(Sin \\theta = \\frac{300}{600} = 0.5\\) θ = sin <sup>-1</sup> (0.5) (Taking the sine inverse of 0.5) We have; θ = 30° θ + a = 90 30 + a = 90 a = 90 - 30 a = 60° ∴ 90 + 90 + a 90 + 90 + 60⇒ 240° The bearing of P from Q is 240 <sup>0</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2018"
  },
  {
    "id": 31,
    "questionNumber": 31,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Bearings",
    "year": 2018,
    "difficulty": "Medium",
    "text": "From a point R, 300m north of P, a man walks eastwards to a place; Q which is 600m from P. Find the bearing of P from Q correct to the nearest degree",
    "options": [
      {
        "key": "A",
        "text": "026°"
      },
      {
        "key": "B",
        "text": "045°"
      },
      {
        "key": "C",
        "text": "210°"
      },
      {
        "key": "D",
        "text": "240°"
      }
    ],
    "optionsMap": {
      "A": "026°",
      "B": "045°",
      "C": "210°",
      "D": "240°"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAQUBSgMBIgACEQEDEQH/xAAtAAEBAAMBAQEAAAAAAAAAAAAABQMEBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA78AAAAAAAAAAAAAAAAAAAAAAHxyuidy8zSoAAAAAAAAAAAACVV4+uWTQN9zdw2AAAQ8PQhMpwy6AAAAAAAAAAAAfCHSmXjnVfQNfPk3TaABP1rIhLohRu2hHmf18cxe7QjLIjLIjY7ohLohLohZLIjeLgjLIh+7Ii+LvkhxNjpDk+g8XCHO62YU2tsgAAACDe5A6+N9xlwAAAAAAAAAmmzA2Lxy3qPaMvRSaw1tmUeqetsgAAACFdiloAAAAAAAAB444sZsNs+gl0dXCUwOeq6JaAAAAAl1JZUAAAAAAAA1tXSMNGqPz/ucsUuIGU+YPekdXpy85rdGAAAAACXUllQAAAAAA8n2Hr2TWqgAAx5BobWUAAAAAAJ1GCZsmtslQAAAAAmmxDy3z57AAAAAAAAAAABDuQT08/S6AAAA8c4bL1OM23jvgAAAAAAAAAAADW2RralSWVAAANXW0zDd2BwXWUPoAAAAAAAAAAAAAAl1IBfc90IPB6h61s1KwAAAAAAAAAAAAAAAAOK7XjSb28zbNuHnvHn2AAAAAAAAAAAAAAAA0Dfaw2edocSVL+vtFNp7gAAAAAAAAAAAAAAAA1doaqZrluJ0kw2fu0MOYAAAAAAAAAAAAAAAAAOV2OiHyZUnlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/xABFEAABAwMAAwsICAQGAwAAAAABAgMEAAURBjGTEhMhIjA1QUJRYXQQFBUyQFBVsiAjM1JUcXKSJEVThDREYGJzkYGisf/aAAgBAQABPwD/AEZnlN0K3VZoe1HVUCW89MujTh4GXglFDyHkdJ0NKctCHvslygF1IagwJluNpfy84+lK2kubsKRWurLJfmQN+fWCvfnEagOBJ9rZZuXpK8OQZKAUSAC04OKuol4SXhGmsGLJ6Eq9Vf5Gs1crgzboxecBOVBKEDWpRpVyvrLe/vWpotAZUhLmXAmocpmZGafZVlDicj6Rq8WxdxcgYCC20+FOhXSijZRFnx5kBDSOo80elJoVorzWfEve12n/AB988Sj5alwo01gsyGwtBqNKk2mQmFNdLjK+BiQfkXWkLLxZhym0FwRZAcWjtTT2kloEYuIfDiz6rQHCTWjsR6Ha2G3hhZKllPZn6Ofoaq0c5t/uHvmrNZrNZrPlzWazWazWaz5c8laT/H3vxKPl8k2IxNjLYeGUqH/kHtFWeU8pD8OUrMmKQkn76DqXUuyRJLqH0LVHkI1Os4SahRTEaKC+66SclbhyfozbaJikK88ktbkaml7ml6OhA51uG1o2BPxS47avQI+J3DbUbAMc6XDbVZbKiVCLpnTG/rnBhDuBR0caH8zuG2p60b1cYLAuM7cvIeKiXvuV6CHxS4baho6fic/bUvR0IHOtw2tK0dSkc63Da0NHT8Tn7al6OhA51uG1pWjqUjnW4bWjYR8TuG2r0CPidw21Gwo+KXHa0bAn4pcdtXoEfE7htqNhR8UuO1pWjqUjnW4bWl6OhA51uG1o2FHxS47WlaOpSOdbhtaXo6EDnW4bWjYUfFLjtaVo6lI51uG1oaOn4nP21GwAfzS4bavQQ+J3HbVMYUHvNIE+e/K631/Eb/XVos6nH7kh24Sg406kFba8bulaOpSOdbhtaVYQP5pcNtT8H0NNhzkPvupW7vDxdUFHC6HJ6N82f3D3zUalc9Wr/ik/KPZlLSlJKjgAZJ7hUy9+eSGokV/eGHVlBln5UVCgxoLIaYRgdJ6VHtVVpOLjfPEjy32OHbPOT0hor/ZxqhPF+JHe/qMoV/2M8no3zYfEPfN5JXPNq/45HshqVLjxGVOvrCECgzLvZC5AWxB1pZ1Ld711LuEBxt6Gi2vSYzPFcLSeIioludcjtu229voYWMpStAcqwNuMybwh54urS+kFZGCfLPKRb5eRrZX/APKshItMDw6eSNWRd1ENQisxlN7+7grWQr1qC7/+GhbRdIj3RyfEkSW46EMocGG1k+vQ9juF0YhJSkpK3nOBppPCpZqLa3pLwl3NQW6OFtnqNUQQk4qyLurMOQhh+E2ll5e/B4HdpNaJpWLTlWpTyyirYy+xOu61oKQ68Cg+W+v7xZ5p6VNFH7+LUNneIsdn+myhH7RjkjWjnNn9y983smam3VZdMOA2HpXSeo13rq32puKVPuLL0pfrvKoDFGpVltUt/fnoiVL7aQ2ltCUISEpSMAAYAHlOqrifPrlAgJ1JX5w9+SKHJ6N80nxL3salpCSVEAAZJPYKut8W6nEUuohl3ely0j5KtL1mQwhqC+33jrqPfQ8s66RrchCnycrOEJSMqV+VQrzGlulgMPtO7kqw6gprPknTWYMZb72pOodJPYKs8R5CHZcofxMk7pY+4noRymivNZ8S97FLmR4bCnX1hCBQYl3shclKmIOtLGpbveurtCQ7Z5DDLWChGWwgdKOEAU5v778G5zraW4qMFRbADhP31Uw+zIbS6y4laFaik0DRq629ct6K8xJDMpgkt5GQai3O4tXBqBcGmSp5BKHWTQODU2fFgsl19YSOgdJPYKiRJNxkonT0FCEcLEfs/wB66xjlNFeaz4l72G4XRiElKMFx9f2bSdaqiWt6Q8mZclBbuttnqNVjFEZrcaweEGn7IGnVP22SqK6daQMtq/NNekLtDOJtsLoGtyMc/wDoab0htDvFMoNq6UuAoqadHrgEGRMYyj1FJeCSKYkaM21wuNyi8+RgHJdVRuF1mcEKAWUf1pPF/wCk1Es7bb3nMp1cmT0OL6v6BQGOV0V5rPiXuXzU26rU6YdvbD0nrHqNd6qt9rbiFTziy9Kc9d5VY+jinWGHRhxpCx/uAVXou25z5jH2aabYYa+yZQjuQkCsUOUz5NFeaz4l7llLSlJKjuUgZJPZS5cu8LUzAUWoo4HJXb3N1CgxoLIaYQEp1ntUe00B7MauKbkWQqApsOAklKxndCrRKfkh0uyUObjiKRvW4UhQrRXms+Je5QnFS5ceGyXn1hCBSY8u9qC5SVMQtaWNS3O9dNtIaQlDaQlKRgAe0Gr7hTLTRlPtlZ+zYRu1Lqxrwh1nf1fVpH1K2QyUVorzWfEvcmauN0YhJQgJLj7n2bSPWVUW2uOuiddFBTo4UNdRmkkHhB4CPaTV4UGlxXmnnUSklYaDbe+FQPrDFWglx2U4+86qXuUIWhbW9FKK0c5s/uHvm5LNTbo4t5UK3oDsnrq6jXeqo0SFasvypKTIdPHfdUATUq7bsT4TsRz7FW5cb+sCkL1KqxCUywhlwFTO8IWy4fkP6faTV2eYakRFGWYr+F7hzcBSMdIVVlWl52S6446qQUIzu2w1xOjCRWjnNn9w983IrWlKVKUQABkk6gKXKl3hamYKi1F1OSu3uao+bWqM0xCaQVLdDQyeuelZpT8g3IKkQd2tlktutI4/EWchxFWy3goQ4ttxren3FMJOtLSuqax7U9CYdeS45x8Nqb3JAKSF03EaakPPpJy4hCMdACOytFeaz4l76ZOKlzI8NhTz6whApMeVe1ByWFMQh6kfrud66cZUmMtuOEtkNlLfQEnHBTG7fbZhYDat/CXY4SQ6kjW8V1EgFh1x5ySt51SQjdqATxR3JoDHtuivNZ8S99InFXG5swglG5Lr6/s2Ua1VDtbz7yZtyUFv622uozWKIrc99Y9u0V5rPiXvo5qZdXFvGFbkB2T119Rr86t1rahlTq1l6SvhW8vWaAx7isDqGrQtazhKX3io9wNI0micVxcSUmMVYD5RxKSQQCMEEeRa0pSVKISAMkk4AApcqVeFlqCVMxNTknpX3N1DhR4TIZYbCU9PaT3+5EJWvRKeEaw6789SXrmdHk7tcHzUtISAMldW0LRb4SHPXEdsH9tTJkaGwp6Q4EIFIjS70oOTEqYha0R+s53rpDaG0JQgBKUjAAGABWPcZqzXq1xIa48iSELDzvAUnpNRbXo++551FZZWc9CsgVcLmzDCUBJdkOfZsp1modsedeEy4qDj/Ub6jVAe5TWjyGlW05Qk5fd+aprTCrkhNmRuZiT9atHA0P11brW1D3Till6SvhceVrNY9xrutsaWptyYylaTggrFen7P+PY/eK9P2f8AHsfvFembT+Pj7QVAuJeYMFMxqIyHHFOPFeFkLOpuocywQmAyxMjIT+sULzafiDH7xTFxt8le9sy2nF/dSoE+4iKVChqUpaorClHWS2KMGAf8lH2aaMCB+Cj7MUYEAj/BsbNNaPQYbltK1sNEh90cKB216Pgfg4+zFej4H4KPsxSIkRpe7ajNIV2pQAfcZq9TpkMwURQ0VyHtxx6Nzu9vfjCezGWy+6G92z0GhWivNZ8S97n0lDi3rMGl72sywELpNmlvvsOz7iX0tL3aGg2EJzWK0V5rPiXvc+PIatURcGIWFqSol1a8jvP+jf/EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8AMv8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPwAy/wD/2Q==\" style=\"height:261px; width:330px\"/><span>\\(Cos \\theta = \\frac{adj}{hyp} \\)\\(= \\frac{300}{600} \\) = 0.5 θ = cos – 10.5 = 60 < RPQ = < PQs So, the bearing of P from Q is 180 + 60 = 240° </span>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2018"
  },
  {
    "id": 32,
    "questionNumber": 32,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Bearings",
    "year": 2023,
    "difficulty": "Hard",
    "text": "A ship sails a distance 50km in the direction S50°E and then sails a distance of 50km in the direction N40°E. Find the bearing of the ship from its original position",
    "options": [
      {
        "key": "A",
        "text": "N40°E"
      },
      {
        "key": "B",
        "text": "N85°E"
      },
      {
        "key": "C",
        "text": "S95°E"
      },
      {
        "key": "D",
        "text": "S90°E"
      }
    ],
    "optionsMap": {
      "A": "N40°E",
      "B": "N85°E",
      "C": "S95°E",
      "D": "S90°E"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "<img src=\"data:image/png;base64,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\" style=\"height:226px; width:300px\"/>Let θ be the bearing of the ship from its original position.From trigonometry,tan α = 1α = tan⁻¹1α = 45°50 + 45 + θ = 180° (sum of angles on a straight line)95 + θ = 180θ = 180 - 95θ = 85°∴ The bearing is N85°E",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2023"
  },
  {
    "id": 33,
    "questionNumber": 33,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Sine & Cosine Rules",
    "year": 2022,
    "difficulty": "Easy",
    "text": "If sec²θ + tan²θ = 3, then the angleθ is equal to?",
    "options": [
      {
        "key": "A",
        "text": "90º"
      },
      {
        "key": "B",
        "text": "30º"
      },
      {
        "key": "C",
        "text": "45º"
      },
      {
        "key": "D",
        "text": "60º"
      }
    ],
    "optionsMap": {
      "A": "90º",
      "B": "30º",
      "C": "45º",
      "D": "60º"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given that sec <sup>2</sup> θ + tan <sup>2</sup> θ = 3 Where sec <sup>2</sup> θ= 1 + tan <sup>2</sup> θ : 1 + tan <sup>2</sup> θ + tan <sup>2</sup> θ = 3 2tan <sup>2</sup> θ = 3 - 1 2tan <sup>2</sup> θ = 2 divide both sides by 2 tan <sup>2</sup> θ = 1 tanθ= √1 tanθ= 1 θ = tan <sup>−1</sup> (1) θ = 45º",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2022"
  },
  {
    "id": 34,
    "questionNumber": 34,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Sine & Cosine Rules",
    "year": 2016,
    "difficulty": "Medium",
    "text": "In a right-angled triangle, if tanθ = <sup>3</sup>/4 , what is cosθ - sinθ ?",
    "options": [
      {
        "key": "A",
        "text": "<sup>1</sup>/5"
      },
      {
        "key": "B",
        "text": "<sup>2</sup>/5"
      },
      {
        "key": "C",
        "text": "<sup>3</sup>/5"
      },
      {
        "key": "D",
        "text": "<sup>4</sup>/5"
      }
    ],
    "optionsMap": {
      "A": "<sup>1</sup>/5",
      "B": "<sup>2</sup>/5",
      "C": "<sup>3</sup>/5",
      "D": "<sup>4</sup>/5"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: tanθ = <sup>3</sup>/4 Cosθ – sinθ = ? Draw the right angle for tanθ = <sup>3</sup>/4 Recall that: tanθ = \\(\\frac{opp}{adj}\\) Cosθ = \\(\\frac{opp}{hyp}\\) sinθ = \\(\\frac{opp}{hyp}\\)<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAAGSDZWTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL6UExURf////7+/vv7++fn5+bm5vr6+uvr64eHh4uLi+3t7f39/V9fX2VlZejo6ENDQ6ysrPHx8enp6WNjYwcHBzo6OrGxsfT09GRkZAAAAAQEBD4+Pvb29gICAkJCQqqqqvX19UFBQa+vr/Pz8wEBAQUFBRcXFwsLCwMDAzw8PLCwsCgoKIODg1JSUj8/P7Kysvz8/DY2NsPDw7q6ulFRUQoKCpKSkmJiYjIyMsnJyZiYmA8PD2ZmZs3NzcjIyK6uri4uLhAQENLS0jMzM+Xl5ZeXlywsLBEREWFhYc/Pz8bGxurq6pSUlC8vL2hoaMvLy+7u7pCQkAwMDMfHx9HR0SsrKxISEs7OzpGRkWlpacrKypOTk4mJiQ4ODnl5eaurqx4eHoqKim1tbRUVFSkpKY6OjtbW1iUlJWtrayQkJI+Pj29vb2xsbBQUFNXV1SMjI+Pj49TU1F1dXZ2dnfn5+Xp6egYGBoCAgPf390pKSkdHR7Ozs0RERLm5ube3t0hISElJSbS0tLW1tUBAQLu7u/j4+Ht7e35+fpqamtfX1yEhIdra2iYmJmpqauzs7CcnJyAgIA0NDR8fHxMTE9zc3BYWFnh4eAkJCSoqKszMzO/v72BgYNjY2JmZmfDw8C0tLZWVlV5eXtPT00xMTK2trZubm1NTU7i4uDs7O0tLS7+/vzg4OEVFRcLCwj09Pby8vFBQUDk5OUZGRvLy8nNzc93d3eTk5IiIiBkZGXFxcd/f3+Li4hoaGnJycoGBgYKCgh0dHXd3d+Hh4YaGhhsbG9vb25ycnDExMTQ0NFRUVFZWVk1NTVpaWqGhoVVVVVxcXJ6enjc3N8HBwb29vU9PT1lZWRwcHE5OTtnZ2d7e3o2NjcTExMXFxaampqKioltbW5+fn6ioqKSkpKOjo2dnZ3V1dQgICFdXV9DQ0KWlpaenp8DAwCIiIlhYWDU1NaCgoH9/f3R0dBgYGH19fXx8fODg4L6+vqmpqYyMjIWFhYSEhLa2tpaWlnZ2dgAAACpP/S0AAAD+dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A2NkMcQAAAAlwSFlzAAAXEQAAFxEByibzPwAAC7hJREFUeF7tncuZtCoQhg2DlYmwY8GWgFyahAvD4HFNAkZiElMFqGijIuJlun3P+aftHqX4KCguYk8WCLWvi9DWHixBs8YeLQAmpD30s50H+FebQz86Ba4P/egTBNHHXmwelrIi8v43Av4xczihcy4tPYYoGU4QWeXNyZjCQok6JvxSnBP8xUEzZY8A53DAOQESQ7EznBMK7wk5VT36yH78wXqdAHL7ushqlfgHbOd/rUobVqq0xa0TfjxO3MtiCOjsq84o81gawwuc4VMDtayHeFuey2Jts4htsUsnWIlFsSTWftwVasEr7nUez9JJw6HRXtmuEgkcfjZ0W8U6NKu3eq51sN3wzSC1gml4B3TYlhuvY2j6KtLjTuwgUbXGSQCSiEhhkkDWTN9uwSF4zK8wmSjDsiIgPH2YFNh2oQ8PVePJc7MVpyZ4RfMdhblQatu9Sw8lwDTPEhOttuJxD56spnGTK55J0iwPECZ4EpDKdgdB9cqTAEBtH3w02uznqEVwiD16uZDNQekG5GACLLzRemFRUXgExnOH6h20WDmMCSPAFn8kAR0xilIfx2AiTnwC5vr4MrTXRyfQXx+bwHB9pBOG6yMTGK+Pc4JzfcYiEnCvjynDyfVDAmFNksHF0+v7twp/tUVVwHBodl5lnBAoBELH3GmVjmckMKyxuX34qNIvITkg4LBPnZgAgTlXGJ5y2uVFXznvScB3PTgmGN/14cOwheuzNrglLDTa4KaEA8lZeVEcmoWWIeZ/cq4ozBJCYAIf12eF6qpMkSZsgvN5fS3bjMA8sQzyIpbfLKsKEkDKEC96rh/WUGxTWsV7ff9JQAIUsIsUDvYz7ckrCSmxFdhnSezCv4wbDCMkehxhOJj/l39Nc2gkfxx6dDJzENq1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\"/> Given that tan(θ) = <sup>3</sup>/4 , you can use trigonometric identities to find cos(θ) and sin(θ) and then calculate cos(θ) − sin(θ). First, note that tan(θ) = \\(\\frac{sinθ}{cosθ}\\) So, you can write: \\(\\frac{sinθ}{cosθ}\\) = <sup>3</sup>/4 Now, let's solve for sin(θ) and cos(θ): ​sin(θ) = <sup>3</sup>/4 cos(θ). Now, use the Pythagorean identity sin2(θ) + cos2(θ) = 1: (43​⋅cos(θ)) <sup>2</sup> + cos <sup>2</sup> (θ) = 1 Now, simplify and solve for cos(θ): <sup>9</sup>/16 cos2(θ) +cos2(θ)= 1 Multiply both sides by 16 to eliminate fractions: 9⋅ cos <sup>2</sup> (θ) + 16⋅ cos <sup>2</sup> (θ) = 16 Combine like terms: 25⋅ cos <sup>2</sup> (θ) = 16 Now, divide by 25 to find cos2(θ): Cos2(θ) = <sup>9</sup>/16 Now, take the square root of both sides to find cos(θ): Cos(θ) = ± <sup>4</sup>/5 Now that you have cos(θ), you can find sin(θ) using the relationship: ​sin(θ) = <sup>3</sup>/4 cos(θ)​ sin(θ) = \\(\\frac34 \\times \\frac45\\) ​ sin(θ) = <sup>3</sup>/5 Now, you can calculate cos(θ) − sin(θ): Cosθ – sinθ = \\(\\frac45\\times \\frac35 = \\frac15\\) So, cosθ – sinθ = <sup>1</sup>/5",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 35,
    "questionNumber": 35,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Triangles",
    "year": 2014,
    "difficulty": "Hard",
    "text": "Find the value of x in the figure above.",
    "imageUrl": "/diagrams/mathematics_q35_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "5√3 cm"
      },
      {
        "key": "B",
        "text": "4√3 cm"
      },
      {
        "key": "C",
        "text": "20√3 cm"
      },
      {
        "key": "D",
        "text": "10√3 cm"
      }
    ],
    "optionsMap": {
      "A": "5√3 cm",
      "B": "4√3 cm",
      "C": "20√3 cm",
      "D": "10√3 cm"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The value of x can be gotten by sine rule.\\({\\sin A\\over a}={\\sin B\\over b}\\)\\({\\sin 60^\\circ\\over x}={\\sin 30^\\circ\\over10}\\)\\({\\sqrt3\\over2x}={0.5\\over10}\\)\\({\\sqrt3\\over 2x}={1\\over20}\\) 20√3 = 2x x = 10√3 cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 36,
    "questionNumber": 36,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Triangles",
    "year": 2011,
    "difficulty": "Easy",
    "text": "In a right angled triangle, if tanθ = <sup>3</sup>/4 . What is cosθ - sinθ?",
    "options": [
      {
        "key": "A",
        "text": "<sup>2</sup>/5"
      },
      {
        "key": "B",
        "text": "<sup>3</sup>/5"
      },
      {
        "key": "C",
        "text": "<sup>1</sup>/5"
      },
      {
        "key": "D",
        "text": "<sup>4</sup>/5"
      }
    ],
    "optionsMap": {
      "A": "<sup>2</sup>/5",
      "B": "<sup>3</sup>/5",
      "C": "<sup>1</sup>/5",
      "D": "<sup>4</sup>/5"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given A right-angled triangle, where tanθ = <sup>3</sup>/4<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACBCAYAAABdA1EwAAASPklEQVR4Ae2dB8wURRSAsSsqYom9xK4ooliwIiKIHbFX7F1jF0UwUbH3rtGosfcajUaj2BVj7BoLauwiWBGxjvmeeevccnf/7v/f7d3Mvknu372d2dndN9//7u3MmzfdnCWTQEAS6BbQvdqtmgScAWsQBCUBAzao5rKbNWCNgaAkYMAG1Vx2swasMRCUBAzYoJrLbtaANQaCkoABG1Rz2c0asMZAUBIwYINqLrtZA9YYCEoCBmxQzWU3Gy2w//zzj7VuhBKICtjff//dffPNN+7PP/+UpjJo4yM2eGCBUsF84403XJ8+fdyoUaPcX3/9FV9r2RPF4V6owL788stupplmct26dXOjR49ONK21czwSCF7D+k0xbtw417NnT7ftttu6tdZay40YMcKg9QUUwX5UwL700ktujjnmcNddd5175ZVXXO/evd3IkSMTaFUTR9BupX2EqIDFJOjevbu77LLLpEHHjh0r0KJp//jjj9I2ckwPHiWwl1xySdJGTz/9tFtxxRXdsccem7yImaZNxBPcTvTA0iLPPPOMW2mllSrMg+Baym5YJBA9sKpN1Tw44YQTzDwIGP7ogfXbBmhXWGEFd9xxx9mLmC+YgPZLBSztArS9evVyJ554otm0AYGqt1oaYNU04MGfeuop6T0AWus9UBTC2JYGWJrDhxZNS+8B5sHUqVPDaC27yziGZrUdtR/W79bSvGpburzoPbjooouSbB/q5KDttI0ESqVhq0n9xhtvdEOGDBEvL/L//vvvasXsWJtIoLTAqibFHXGLLbZww4YNcxMmTGiTZrHbqCWB0gLrC+Tjjz92G264odt6663dd999l2QBtYKdHLSdlkqg9MAqkJ988onbeOON3fbbb59Aa8C2lM2qFzdgvak0aNrBgweLe6KZB1V5aflBA9YDltaoZx60vLXsBsrdreW3v5oGCu1GG23ktttuu+RFzMwDX1qt2y+9hlXRp4FE0w4aNEhs2okTJ0oxH2o9z7bFSsCArSNvoB0wYIAbOnRo8iKmxQ1elUSxWwO2A3mPHz9eoKX3QF/EgNUGGDoQXJOyDdgMglXzYIcddkg0rWnYDIJrQhEDNqNQVdP65gHQ6idjNVasixIwYDMIULUp0Pbv3196D3REzIDNIMAGFjFgMwhTgaUo5gEjYpgH2nvAcb9MhiqtSCclYMBmEFxai6JpBw4c6HbccUf3ww8/ZKjBijRKAgZsTkmqJv3www8lusxDDz2UswYr3hUJGLBdkN7JJ58s0L722mudqkXh122nKsl5UvrXIufpLS9uwHahCX7++Wd34IEHujXXXNMROVFTkQDqNTvahg6qPp8Bq5LIuE3DOHnyZLfPPvu4NdZYI4E2XaZW1Qw+YAMDfrOT3tMvv/zivv32W/f555+7Tz/91H399dfJ7OFm30Mj6jdgc0pRG94/DeCAloiJr7/+up8l+9XOIQN4mOnA7N2iEoFE+vbt6/bff393wAEHuNNPP72Qf5hGPZ8B2yBJomkPOugggTZtHtQC9scff3RLLLGEdJF19jaou1b91epkOtBiiy3mPvroIzdp0iQZuSP4c956qtVdxDEDtotS9n0Kfv31V9G0q6++emIeUH0toH766Se3yiqruEUWWcQdfPDBbr/99nM33HCDu/nmm2X6+ZQpU9zDDz/sjjjiCPfEE0+4I4880u25557yj7Hvvvs6ZglrIkz+5Zdf7g477DB39NFHy4f9Rx99VIvIlv7j5ZZbzn3xxRcV/hAGbIWYivmSd5p3o+7KB5Kf+b333ltexLT3wM/3rwmwq666qptlllkkuiLaFhNh1113dT169JBBir322kumol9xxRUSWXzJJZcUKIkyjinBug4k/nEwRwgSQvA7prCzj52q6auvvnL9+vVzM844o9tkk03cuuuuK/8QocDKc5iG1dZs4BbzAPsQONQ8UCh8eAGWWF94gqFNKc/+9ddfL2s17LbbbhJR/K677hL4AA0NjCnBEDFQE7iZxM/6Y489JsGcmbrOh8DO+k9DGSBGQ5966qlSz7zzzisvi5gGoSQDtoEt5cOIecDPNl1eb731llzFz+cA4C2//PKikQEOU4Jw9+zjPI4W5YM58Pzzz4tmvO2228TNkeFh1nN44YUXpG7Ouf32290ZZ5zhzjnnHPnwQvXcc88l1+afgvvStMsuu7iFF144icmgx9t5a8A2sHXSQPrmgWpaLqfl6NJafPHFZYiXn3ZCJ2222WaSj1kBrPPMM4/Yqs8++6ybddZZ3dJLLy02KHnYtAqg1lnvcQCfqT/Dhw93Z511lpttttlEU4c0vGzA1mvhBuQBLS9Tvnmg1QIbL0aEVuKliSjhZ555pmS//fbbbq655nKHHnqo2KePP/642LpAveWWW8osCCDWlAXY77//XhYq4Z9i5513Fm3OuhBZztXrtHprwBbQAti0mAcMLqh5oJcFFv/DcbQtGhAtetppp0lRegv4jl1K4iVLQdOtZFT5o/VrFuYD1/DP8/e1XDtuDdgmtooPCpqWN34GF1599dVpruoDw0sWfaXYqe+9956UffLJJx09BPfee2/Fuf41KjJSX+qV86+dOq3tvhqwTWwShUSBYEQMaHfaaackArheXsvwnWHTN998M5lDxjG09AcffODoWSBp3bovB+v80fr1PH9b57S2yzJgC26Szz77TPo/77jjjuTKCk9ywHZqSsCArSma5mRge5577rnS/5r+ea93RYP6P+kYsPUoaWBeGjj6Spdddll39913N/Aq8VfVEGBpjCJTreu1amg267OnoT3vvPPcMsssU/EilS6Tte6ylGsIsAirFkSNFGS1a/jH2h3YarJA0+KM8sADDyTZ+ky6TTJsJxxfgiyNFxKw/vOcffbZAu0999yTIOnnJwdtp/PAMtR45ZVXOryIrr76anFXQ57NFjQOHpdeeqm75ppr3JdfflnRhCEBm5YVL2LYtP6LWLNlWSG8QL50yiTAjQ23OEZe8CBiS7j1NEAdyYAGydMovKCwvDzX45OODRAasGn5YB7gvZU2D/LIKF1nbN9zA8siFmuvvbabffbZRdO9+OKL7vjjjxeAcIcD2nfeeUfc6gCb8XIE/u6774q/JpoZl7e0wwVj6e+//77k0WnOuXw0wgqCx/uoT58+4r3EFI+ZZ55ZOti1UUIF1gcSaPHgst4DbdXKbW5gGW1By+GUoYnVBFnUAphY82qhhRYSP06gBmYAxnVuvvnmEx/O7t27i8cQ8GvCMWO99dZz5M0999xyPtfB7NDEKA8OyXgdEWwY5xAduqRMyMD60GIe0HtgNq22/P/b3MASQALH31GjRv1fi3PiQcQ4+ZgxY0TbLrjgguLTiUsc3kG4svEzjtscHvXs33fffUkd+GpeeOGF4rHERLkRI0bINBH159SCzPjExY7zAdt3JgkdWB9a1bR+oA7y/TIqkzJtcwPL5DV8NAki4SdsWJyV8S4CTn7ScPjgOHDx0Z9wzAicj30Nwjg785pwXAbwTTfdVBbIUKj9hmIKCPOc0Ma47uk0EYBFq2ddCdG//3bZ95+T3gPMg/SLmF+mXe67qPvIDSwaFii22WabxHmY8XGWwFxttdVk+gXAMlbOT/hWW21VASw2LD6YvKz5wFIWF7wNNthA4lbhaIyZ4ZfhXHoJSJgmTN7jzVrn9ccAbLrhgTbde0CZskKbG1jAUm94gqExJQPIpptuOnfBBReIdkObzj///OLdjkmw+eabi71JGebvq0lw//33J+1DA/BRP09/XwuxkDF142mP690MM8wgGl1X5I4JWB9INQ/8GbB+vsqnDNtcwKqQeMMH2jnnnFNeojARmNhG4iUJqHgh4vhJJ50kdib+nRznRapnz54CLvYoSeuVL3X+0LugL2bUjfmBM7KmUG1Yvf96W2x6XBM1ZZWZlo9lmxtYFRQT6HjhYSoHXVZqR55//vnyc3/nnXfKzzbdVcRUBTCAvfbaa+U455O0vo4EquXoNqPby7+mnhsjsPrcPDN937zUljllBhbB6aeewOiS0ZcrLUfXExoXYJlq7CetUxvGz/P3tZx/jH3/vFiB1WfEhKK7S+d9pWVRhu+ZgfWFoQL0j+k+Gvemm26q6PBHm956660yH4lgDqR6dWhd6S3n1DsvRmDTsqKbi9Ew7Noypk4Bm1VQtQCrB13WuquVixXY9LMydAu0vPCWLTUc2FqQqmA7ytdyndnGDqz/jw60DKCUDdrCge0MiFnPiR1Y5OBD++CDD8rAQpnMg4YDmxWuZpQrA7BpuaFpCa5BHANNPtR6LJatARtBS5bJPDBgAwbW16R0eTHVhqHcmJMBG1Hrau9BzOaBARsRsDyKDi7E2ntgwEYCbNo8wMMrxt4DAzYSYHmMNLS9evUSaNWbzc8P9bEN2FBbLsN94/yOA/gjjzwipQEW982QkwEbcutluHegPeWUUxLfjtC1rAGbodFDLOKDyUIce+yxRzIzg+fx80N6vlIDG2qjdQRY+rnwpWWJI5zumWenwKbLdVRvO+RHB2zWSYg0lv9ph8bIcw84sLOQHJF3iIRD9B3WjSVVAxFne6baM2tB58BVK5fnHlpRNjpgmUl71VVXtUKWhV0T0HDixiHe/zCJc+rUqTXvA03LVHw0rUJbs3CbZkQHLHPGWLqS+V/jxo2r+2H2LrMh/HlhbdpOFbeFtuTtH1hZ0RB4mSdHvAhdt6viBO8LQU2YFwfcah542W2/GxWwrApIcA1m5zJblyUxma6jn/R3ygwePDg4bTN27Fg3/fTTu/XXXz9ZmhMAAZiXq3RS00ePM0WeczlHNW26jJZtt21UwKJRmcnLitVMOWdMvdoHBxE+rO3K4sRMXQ8pMS+Ofz5sV038qgAsKynWs02ZqUwgZWJIUP6QQw6ZBtp65+v1WrWNClj1h81qwxLkY+WVVw4OWBaUw/RZYIEFZG1aAGZlGgAkVoSffPiY0czUGpZPYuh25MiR8gtDrAg1D/zyfj3tsh8lsL7mqSdoNHHv3r2DA5ZQTfSGcO8spsxCzETeAVi+V4OO8E24Hw4dOlTs+okTJ0o5Jo2y4F36RaxaHfVkWVRelMBmja1FRJoQgcWGJeoN/3AaAZIYYwDLkpzpxC8OeYcffng6S74TAoouL6BV8whg2xFaAzZADctKiosuuqhAuPvuu8tS8qzKTewHjT3mk4npQyhUP9JjGkjy1llnnYreAwPWl2IT9tWGjVXDKmRE0xk9erQAi+bUz7Bhw5IAfSpegkIPGTLEoZVJWoe/1bKYB/TTYtNq74HmtcvWNGxAGlYD5QEP/5ys/s3nqKOOkhcouqtICiP7eGoxLOtrVylU4w/mQd++fcU8yBtOqkaVDT1swAYELC0PjPWSwuq7EfIiho2LZs6SGBHDPCB6erslAzZSYH2wBwwYIP3NWYEFUkwIzsNnoZ1SlMDiEJIl8ZbNwMFvv/2WpXiwZQjFz+wD1obImoCbkTAioY8fPz45zf9HSA4WuBMFsCpE7Dr6J1lthhi2rEAzYcKEaT70QZJHUGSCUBAOdNKkSdOUq3ZuaMd4LrQkC6UMHz7csfhJLbnwbJrHefhZEAW9f//+EiIVLtXkKJDRiktFAaw+Ec4s9E8Ssp6wlIzoVPsstdRSclzfrhmi1WPVyod8jPhbGkyadSX4Xu9ZNY8t/8w9evSQXgi6xvSXSBWEyr3IbRTAqgDRlIyN03nOonMdfejDROswnNlR2ZDzGbblOVlHrd5zVJMD4f2RE9NsFNgiAU1fKypg0w9n3xsrAVUMja01X21RAMsjt4Mw84k+vNIqY9224gkM2AKkXq2Bqx0r4FaCv0Q0wLZzSyicdBWxys7FF19cdypLOz9Lq+/NgC2wBVhZhwX1cJ5W/9MCLx/FpQzYgpqRcXl1sqZfU4FV7VvQbQR/GQO2oCbECYU5ZPT9AuzkyZPlygZsvgYwYPPJK1dphZH1eQcOHCgatl+/fuJYogvx5arQCjsDtskQAC0DGWhWOu9xKGEUCT9VS/klYMDml1muM3DzGzRokADLsDFT0IH3mGOOyVWPFf5PAgZsk0lAw+Kqx+qQt9xyi/g4EPCCma+W8kvAgM0vsy6dQfwAogmqb6rauV2qtEQnG7BNbOxqME6ZMkV6CMjTTxNvIbqqDdjomjTuBzJg427f6J7OgI2uSeN+IAM27vaN7ukM2OiaNO4HMmDjbt/ons6Aja5J434gAzbu9o3u6f4FzlgrtIx+IecAAAAASUVORK5CYII=\"/> Cosθ– sinθ= ? tanθ = \\(\\frac{opp}{adj}\\) Cosθ = \\(\\frac{adj}{hyp}\\) sinθ = \\(\\frac{opp}{adj}\\) Using Pythagoras’s theorem 4² + 3² = (hyp)² 25 = (hyp)² Hyp = \\(\\sqrt{25}\\) = 5 Cosθ – sinθ = <sup>4</sup>/5 - <sup>3</sup>/5 = <sup>1</sup>/5",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 37,
    "questionNumber": 37,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Triangles",
    "year": 2013,
    "difficulty": "Medium",
    "text": "In the diagram above, find the value of x.",
    "imageUrl": "/diagrams/mathematics_q37_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "40⁰"
      },
      {
        "key": "B",
        "text": "45⁰"
      },
      {
        "key": "C",
        "text": "15⁰"
      },
      {
        "key": "D",
        "text": "30⁰"
      }
    ],
    "optionsMap": {
      "A": "40⁰",
      "B": "45⁰",
      "C": "15⁰",
      "D": "30⁰"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "We have an isosceles triangle <img src=\"data:image/png;base64,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\" style=\"height:102px; width:224px\"/> The base angles are equa. K = 15⁰ L = 180⁰ - 30⁰ = 150⁰ L + P = 180⁰ (angle on a straight line) 150⁰ + 180⁰ P = 30⁰ hence : x + 110⁰ + 30⁰ = 180⁰, x = 180 - 140 = x = 40⁰",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2006,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2006, 2013"
  },
  {
    "id": 38,
    "questionNumber": 38,
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "subtopic": "Angles of Elevation",
    "year": 1995,
    "difficulty": "Hard",
    "text": "A school boy lying on the ground 30m away from the foot of a water tank tower observes that the angle of elevation of the top of the tank 60°. Calculate the height of the water tank.",
    "options": [
      {
        "key": "A",
        "text": "60m"
      },
      {
        "key": "B",
        "text": "30√3m"
      },
      {
        "key": "C",
        "text": "20√3m"
      },
      {
        "key": "D",
        "text": "10√3m"
      }
    ],
    "optionsMap": {
      "A": "60m",
      "B": "30√3m",
      "C": "20√3m",
      "D": "10√3m"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "We have a right triangle formed by the school boy, the water tank, and the ground. The angle of elevation from the school boy to the top of the water tank is 60°. The horizontal distance from the school boy to the base of the water tank is 30 meters. Let's label the points: A: Top of the water tank B: Foot of the water tank (where the school boy is located) C: School boy's position on the ground We are given: Angle BAC = 60° (angle of elevation) BC = 30 meters (horizontal distance) We want to find the height of the water tank, which is A Using trigonometry, we can use the tangent function to relate the angle of elevation to the sides of the triangle: \\(\\tan\\theta={opposite\\over adjacent}\\)\\(\\tan60^\\circ={AC\\over BC}\\) Solving for AC: AC = BC × tan(60°) Now, plug in the values: AC = 30 × tan(60°) Using the value of √3 for tan(60°): AC = 30 × √3 Calculate the value: AC ≈ 30 × 1.732 ≈ 51.96 So, the height of the water tank is approximately 51.96 meters",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2022"
  },
  {
    "id": 39,
    "questionNumber": 39,
    "subject": "Mathematics",
    "topic": "Simultaneous Equations",
    "subtopic": "Simultaneous Equations",
    "year": 2017,
    "difficulty": "Easy",
    "text": "Solve these simultaneous equations and evaluate 4y - x, given that 3x - 4y = 1 and x + 2y = 2.",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "-1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "-1",
      "C": "2",
      "D": "3"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "3x - 4y = 1 . . . . (i) x + 2y = 2 . . . . (ii) From (ii) x = 2 - 2y . . . . (iii) put x = 2 - 2y into (i) 3(2 - 2y) - 4y = 1 Combine like terms 6 - 6y - 4y = 1 6 - 10y = 1 6 - 1 = 10y 5 = 10y Divide both sides by 10 to solve for \\(y = \\frac{5}{10}\\\\y = \\frac12\\) put y = 1 into (iii) x = 2 - 2 \\((\\frac12)\\) x = 2 -1 x = 1 Now that we have found the values of x and y, we can evaluate 4y - x 4y - x = 4 \\((\\frac12)\\) - 1 = 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2023"
  },
  {
    "id": 40,
    "questionNumber": 40,
    "subject": "Mathematics",
    "topic": "Simultaneous Equations",
    "subtopic": "Simultaneous Equations",
    "year": 2007,
    "difficulty": "Medium",
    "text": "Solve the simultaneous equations: x + y = 2 and 3x - 2y = 1",
    "options": [
      {
        "key": "A",
        "text": "x = 2 and y = 1"
      },
      {
        "key": "B",
        "text": "x = 1 and y = 1"
      },
      {
        "key": "C",
        "text": "x = 1 and y = 2"
      },
      {
        "key": "D",
        "text": "x = -1 and y = 1"
      }
    ],
    "optionsMap": {
      "A": "x = 2 and y = 1",
      "B": "x = 1 and y = 1",
      "C": "x = 1 and y = 2",
      "D": "x = -1 and y = 1"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Using the substitution method x + y = 2 ......(1) 3x - 2y = 1 ......(2) from (1) x = 2 - y substitute for x = 2-y in (2) 3(2 - y) - 2y = 1 6 - 3y - 2y = 1 6 - 5y = 1 5 = 5y y = 1 substitute for y = 1 in (1) x + 1 = 2 x = 1 ∴ x = 1 and y = 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2007,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2007, 2024"
  },
  {
    "id": 41,
    "questionNumber": 41,
    "subject": "Mathematics",
    "topic": "Simultaneous Equations",
    "subtopic": "Simultaneous Equations",
    "year": 2024,
    "difficulty": "Hard",
    "text": "Solve the simultaneous equations: x + y = 2 and 3x - 2y = 1",
    "options": [
      {
        "key": "A",
        "text": "x = 2 and y = 1"
      },
      {
        "key": "B",
        "text": "x = 1 and y = 1"
      },
      {
        "key": "C",
        "text": "x = 1 and y = 2"
      },
      {
        "key": "D",
        "text": "x = -1 and y = 1"
      }
    ],
    "optionsMap": {
      "A": "x = 2 and y = 1",
      "B": "x = 1 and y = 1",
      "C": "x = 1 and y = 2",
      "D": "x = -1 and y = 1"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Using the substitution method x + y = 2 ......(1) 3x - 2y = 1 ......(2) from (1) x = 2 - y substitute for x = 2-y in (2) 3(2 - y) - 2y = 1 6 - 3y - 2y = 1 6 - 5y = 1 5 = 5y y = 1 substitute for y = 1 in (1) x + 1 = 2 x = 1 ∴ x = 1 and y = 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2007,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2007, 2024"
  },
  {
    "id": 42,
    "questionNumber": 42,
    "subject": "Mathematics",
    "topic": "Simultaneous Equations",
    "subtopic": "Simultaneous Equations",
    "year": 2023,
    "difficulty": "Easy",
    "text": "Solve these simultaneous equations and evaluate 4y - x, given that 3x - 4y = 1 and x + 2y = 2.",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "-1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "-1",
      "C": "2",
      "D": "3"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "3x - 4y = 1 . . . . (i) x + 2y = 2 . . . . (ii) From (ii) x = 2 - 2y . . . . (iii) put x = 2 - 2y into (i) 3(2 - 2y) - 4y = 1 Combine like terms 6 - 6y - 4y = 1 6 - 10y = 1 6 - 1 = 10y 5 = 10y Divide both sides by 10 to solve for y \\(y = \\frac{5}{10} = \\frac{1}{2}\\) put y = 1 into (iii) \\(x = 2 - 2\\left(\\frac{1}{2}\\right)\\) x = 2 -1 x = 1 Now that we have found the values of x and y, we can evaluate 4y - x \\(4y - x = 4\\left(\\frac{1}{2}\\right) - 1\\) = 2 – 1 = 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2023"
  },
  {
    "id": 43,
    "questionNumber": 43,
    "subject": "Mathematics",
    "topic": "Simultaneous Equations",
    "subtopic": "Graphical Method",
    "year": 2012,
    "difficulty": "Medium",
    "text": "If x + y = 2y - x + 1 = 5, Find the value of x.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "-1"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "-1"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "First, we can rewrite the second equation to isolate the terms with x: 2y –x+1=5 Subtract 1 from both sides: 2y –x=4 Now, let's solve the first equation for x: x+y = 5 Subtract y from both sides: x = 5−y Now that we have expressions for x in both equations, we can equate them: 2y –x = 4 2y−(5−y) = 4 Now, distribute the negative sign to both terms within the parentheses: 2y –5+y = 4 Combine like terms: 3y−5 = 4 Add 5 to both sides: 3y = 4+5 3y = 9 Now, divide by 3 to find y: y = 3 Now that we have found the value of y, we can substitute it back into one of the original equations to find x. Let's use the first equation: x + y = 5 x + 3 = 5 Subtract 3 from both sides: x = 5 − 3 x = 2 So, the value of x is 2.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2007,
      2012
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2007, 2012)"
  },
  {
    "id": 44,
    "questionNumber": 44,
    "subject": "Mathematics",
    "topic": "Simultaneous Equations",
    "subtopic": "Graphical Method",
    "year": 2011,
    "difficulty": "Hard",
    "text": "Solve for x and y respectively in the simultaneous equations -2x - 5y = 3, x + 3y = 0",
    "options": [
      {
        "key": "A",
        "text": "-3, -9"
      },
      {
        "key": "B",
        "text": "9, -3"
      },
      {
        "key": "C",
        "text": "-9, 3"
      },
      {
        "key": "D",
        "text": "3, -9"
      }
    ],
    "optionsMap": {
      "A": "-3, -9",
      "B": "9, -3",
      "C": "-9, 3",
      "D": "3, -9"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given: 2x - 5y = 3 .....(i) x + 3y = 0 .....(ii) from (2) x = -3y substitute -3y for x in equation (i) 2(-3y) - 5y = 3 6y - 5y = 3 ; y = 3 substitute 3 for y in x = -3y x = -3(3); x = -9 (x, y) = (-9, 3) So, the solution to the simultaneous equation is x = -9 and y = 3 i.e -9, 3",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 45,
    "questionNumber": 45,
    "subject": "Mathematics",
    "topic": "Binary Operations",
    "subtopic": "Binary Operations",
    "year": 2019,
    "difficulty": "Easy",
    "text": "The operation * on the set R of real number is defined by x * y = 3x + 2y − 1, find 3* − 1",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "-9"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "-6"
      }
    ],
    "optionsMap": {
      "A": "9",
      "B": "-9",
      "C": "6",
      "D": "-6"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given the operation:x * y = 3x + 2y − 1We are to find:3 * (−1)Substitute into the formula:3 * (−1) = 3(3) + 2(−1) − 1= 9 − 2 − 1= 6",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2017,
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2019, 2024"
  },
  {
    "id": 46,
    "questionNumber": 46,
    "subject": "Mathematics",
    "topic": "Binary Operations",
    "subtopic": "Binary Operations",
    "year": 2024,
    "difficulty": "Medium",
    "text": "The operation * on the set R of real number is defined by x * y = 3x + 2y − 1, find 3* − 1",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "-9"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "-6"
      }
    ],
    "optionsMap": {
      "A": "9",
      "B": "-9",
      "C": "6",
      "D": "-6"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "x * y is an operation on 3x + 2y − 1 Find 3A − 1 x = 3, y = −1 3 * − 1 on 3x + 2y − 1 3(3) + 2(−1) −1 = 9 − 2 − 1 = 6",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2017,
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2019, 2024"
  },
  {
    "id": 47,
    "questionNumber": 47,
    "subject": "Mathematics",
    "topic": "Binary Operations",
    "subtopic": "Binary Operations",
    "year": 2017,
    "difficulty": "Hard",
    "text": "The operation * on the set R of real number is defined by x * y = 3x + 2y − 1, find 3* − 1",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "-9"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "-6"
      }
    ],
    "optionsMap": {
      "A": "9",
      "B": "-9",
      "C": "6",
      "D": "-6"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "x * y is an operation on 3x + 2y − 1 Find 3A − 1 x = 3, y = −1 3 * − 1 on 3x + 2y − 1 3(3) + 2(−1) −1 = 9 − 2 − 1 = 6",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2017,
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2019, 2024"
  },
  {
    "id": 48,
    "questionNumber": 48,
    "subject": "Mathematics",
    "topic": "Binary Operations",
    "subtopic": "Binary Operations",
    "year": 2007,
    "difficulty": "Easy",
    "text": "A binary operation * on real numbers is defined by x * y = xy + x + y for any two real numbers x and y. The value of \\({-3\\over4}*6\\) is",
    "options": [
      {
        "key": "A",
        "text": "<sup>3</sup>/4"
      },
      {
        "key": "B",
        "text": "\\(-9\\over2\\)"
      },
      {
        "key": "C",
        "text": "<sup>45</sup>/4"
      },
      {
        "key": "D",
        "text": "\\(-3\\over4\\)"
      }
    ],
    "optionsMap": {
      "A": "<sup>3</sup>/4",
      "B": "\\(-9\\over2\\)",
      "C": "<sup>45</sup>/4",
      "D": "\\(-3\\over4\\)"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given the binary operation * defined as x * y = xy + x + y \\({-3\\over4}*6=({-3\\over4}×6)+(-{3\\over4})+6\\)\\(=-{18\\over4}-{3\\over4}+6\\)\\(=6-{21\\over4}={(6×4)-21\\over4}\\)\\(\\therefore{-3\\over4}*6={3\\over4}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2007,
      2011
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2007, 2011"
  },
  {
    "id": 49,
    "questionNumber": 49,
    "subject": "Mathematics",
    "topic": "Binary Operations",
    "subtopic": "Binary Operation Table",
    "year": 2011,
    "difficulty": "Medium",
    "text": "A binary operation ⊕ on real numbers is defined by x ⊕ y = xy + x + y for any two real numbers x and y. The value of <sup>3</sup>/4 ⊕ 6 is",
    "options": [
      {
        "key": "A",
        "text": "<sup>3</sup>/4"
      },
      {
        "key": "B",
        "text": "\\(-9 \\over 2\\)"
      },
      {
        "key": "C",
        "text": "<sup>45</sup>/4"
      },
      {
        "key": "D",
        "text": "\\(-3 \\over 4\\)"
      }
    ],
    "optionsMap": {
      "A": "<sup>3</sup>/4",
      "B": "\\(-9 \\over 2\\)",
      "C": "<sup>45</sup>/4",
      "D": "\\(-3 \\over 4\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find the value of 3/4⊕6 using the operation x⊕y=xy+x+y:<ol start=\"1\"><li>Substitute the values:3/4⊕6=(3/4×6)+3/4+6</li><li>Calculate:<ul><li>(3/4×6)=18/4=4.5</li><li>4.5+0.75+6=11.25</li></ul></li><li>Fraction form:</li></ol>\\(\\frac{18}{4} + \\frac{3}{4} + \\frac{24}{4} = \\frac{45}{4} = 11\\frac{1}{4}\\)Answer: 45/4",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2007,
      2011
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2007, 2011"
  },
  {
    "id": 50,
    "questionNumber": 50,
    "subject": "Mathematics",
    "topic": "Binary Operations",
    "subtopic": "Binary Operation Table",
    "year": 1994,
    "difficulty": "Hard",
    "text": "\\(\\begin{array}{c|c} \\oplus mod 10 & 2 & 4 & 6 & 8 \\\\ \\hline 2 & 4 & 8 & 2 & 6 \\\\4 & 8 & 6 & 4 & 2\\\\ 4 & 8 & 6 & 4 & 2\\\\ 6 & 2 & 4 & 6 & 8\\\\ 8 & 6 & 2 & 8 & 4\\end{array}\\) The multiplication table above has modulo 10 on the set S = (2, 4, 6, 8). Find the inverse of 2",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "optionsMap": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The inverse of 2 is 6 since 2 x 6 = 12; under mod 10 12 = 2 which is also the value required",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 51,
    "questionNumber": 51,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Fractions • % • Decimals",
    "year": 2023,
    "difficulty": "Easy",
    "text": "Convert 3.1415926 to 5 decimal places",
    "options": [
      {
        "key": "A",
        "text": "3.14160"
      },
      {
        "key": "B",
        "text": "0.31415"
      },
      {
        "key": "C",
        "text": "3.14159"
      },
      {
        "key": "D",
        "text": "3.14200"
      }
    ],
    "optionsMap": {
      "A": "3.14160",
      "B": "0.31415",
      "C": "3.14159",
      "D": "3.14200"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To convert 3.1415926 to 5 decimal places:Look at the 6th decimal place (which is 2). Since it is less than 5, the 5th decimal place remains unchanged.3.14159",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2022,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2022, 2023"
  },
  {
    "id": 52,
    "questionNumber": 52,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Fractions • % • Decimals",
    "year": 2022,
    "difficulty": "Medium",
    "text": "Convert 3.1415926 to 5 decimal places",
    "options": [
      {
        "key": "A",
        "text": "3.14160"
      },
      {
        "key": "B",
        "text": "3.14159"
      },
      {
        "key": "C",
        "text": "0.31415"
      },
      {
        "key": "D",
        "text": "3.14200"
      }
    ],
    "optionsMap": {
      "A": "3.14160",
      "B": "3.14159",
      "C": "0.31415",
      "D": "3.14200"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To convert a number to a certain number of decimal places, you need to round the number to that many decimal places. In this case, we are asked to round the number 3.1415926 to 5 decimal places. First, identify the digit in the fifth decimal place, which is 9 in this case. Now, look at the digit immediately to the right of the fifth decimal place, which is 2. If this digit is 5 or greater, we round up the digit in the fifth decimal place. If it is less than 5, we leave the digit in the fifth decimal place unchanged. Since the digit to the right of the fifth decimal place is 2, which is less than 5, we keep the digit in the fifth decimal place unchanged.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2022,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2022, 2023"
  },
  {
    "id": 53,
    "questionNumber": 53,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Fractions • % • Decimals",
    "year": 2015,
    "difficulty": "Hard",
    "text": "Evaluate: \\(​\\frac{1.25 \\times 0.025}{0.05} \\) Correct to 1 decimal place",
    "options": [
      {
        "key": "A",
        "text": "0.5"
      },
      {
        "key": "B",
        "text": "6.3"
      },
      {
        "key": "C",
        "text": "6.2"
      },
      {
        "key": "D",
        "text": "0.6"
      }
    ],
    "optionsMap": {
      "A": "0.5",
      "B": "6.3",
      "C": "6.2",
      "D": "0.6"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Step 1: Multiply the numerator: Begin by multiplying the numbers in the numerator (the top part of the fraction): 1.25 × 0.025 = 0.03125 Step 2: Divide by the denominator: Now, divide the result from step 1 by the denominator (the bottom part of the fraction): \\(\\frac{0.03125} {0.05} = 0.625\\) Step 3: Round to one decimal place: The question asks for the answer correct to one decimal place. Since the second decimal place is '2', we round down: 0.625 ≈ 0.6",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2015"
  },
  {
    "id": 54,
    "questionNumber": 54,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Fractions • % • Decimals",
    "year": 1979,
    "difficulty": "Easy",
    "text": "Father reduced the quantity of food bought for the family by 10% when he found that the cost of living had increased 15%. Thus the fractional increase in the family food bill is now",
    "options": [
      {
        "key": "A",
        "text": "<sup>1</sup>/12"
      },
      {
        "key": "B",
        "text": "<sup>6</sup>/35"
      },
      {
        "key": "C",
        "text": "<sup>19</sup>/300"
      },
      {
        "key": "D",
        "text": "<sup>7</sup>/200"
      }
    ],
    "optionsMap": {
      "A": "<sup>1</sup>/12",
      "B": "<sup>6</sup>/35",
      "C": "<sup>19</sup>/300",
      "D": "<sup>7</sup>/200"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Let's denote the original quantity of food as Q and the original price per unit of food as P. Given: <ul><li> The cost of living increased by 15%, so the new price per unit of food is 1.15P. .</li><li> The father reduced the quantity of food bought by 10%, so the new quantity of food is 0.9Q. .</li></ul> Step 1: Express the original food bill ( and the new food bill (B') in terms of P and Q. B = P × Q B' = 1.15P × 0.9Q Step 2: Express the fractional increase in the family food bill as \\(\\frac{(B' -} B\\) . Fractional increase = \\(\\frac{(B' -} B\\) = \\(\\frac{(1.15P × 0.9Q - P × Q)}{(P × Q)}\\) = \\(\\frac{(1.035PQ - PQ)}{PQ}\\) = 0.035",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      1979
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 1979"
  },
  {
    "id": 55,
    "questionNumber": 55,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Significant Figures",
    "year": 2025,
    "difficulty": "Medium",
    "text": "The length and width of a rectangular field are measured to be 123.4 m and 78.90 m, respectively. Calculate the area of the field and express your answer with the appropriate number of significant figures.",
    "options": [
      {
        "key": "A",
        "text": "9736 m <sup>2</sup>"
      },
      {
        "key": "B",
        "text": "9736.26 m <sup>2</sup>"
      },
      {
        "key": "C",
        "text": "9740 m <sup>2</sup>"
      },
      {
        "key": "D",
        "text": "9700 m <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "9736 m <sup>2</sup>",
      "B": "9736.26 m <sup>2</sup>",
      "C": "9740 m <sup>2</sup>",
      "D": "9700 m <sup>2</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Step 1: Calculate the Area \\(A = l \\times w = 123.4 \\times 78.90\\) \\(A = 9736.26 \\text{ m}^2\\) Step 2: Determine Significant Figures When multiplying, the answer must have the same number of significant figures as the measurement with the fewest. <table border=\"1\"> <thead> <tr> <th>Measurement</th> <th>Significant Figures</th> </tr> </thead> <tbody> <tr> <td>123.4 m</td> <td>4 s.f.</td> </tr> <tr> <td>78.90 m</td> <td>4 s.f.</td> </tr> </tbody> </table> Both have 4 significant figures, so the answer must also have 4 s.f. Step 3: Round to 4 Significant Figures \\(9736.26 \\rightarrow 9736 \\text{ m}^2\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2025
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2020, 2025)"
  },
  {
    "id": 56,
    "questionNumber": 56,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Significant Figures",
    "year": 2009,
    "difficulty": "Hard",
    "text": "Evaluate correct to 3 significant figures \\(\\frac{81.81 + 99.44}{20.09 + 36.16}\\)",
    "options": [
      {
        "key": "A",
        "text": "6.21"
      },
      {
        "key": "B",
        "text": "3.22"
      },
      {
        "key": "C",
        "text": "2.78"
      },
      {
        "key": "D",
        "text": "2.13"
      }
    ],
    "optionsMap": {
      "A": "6.21",
      "B": "3.22",
      "C": "2.78",
      "D": "2.13"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Step 1: Perform the addition in both the numerator and the denominator: \\(\\frac{181.25}{56.25}\\) Step 2: Now, divide the values: \\(181.25 \\div 56.25 = 3.2222...\\) Step 3: Round the result to three significant figures. The result is approximately 3.22 (to 3 significant figures). Answer: The value of the expression, correct to 3 significant figures, is 3.22 .",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 57,
    "questionNumber": 57,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Significant Figures",
    "year": 2019,
    "difficulty": "Easy",
    "text": "Simplify, correct to three significant figures, (27.63) <sup>2</sup> - (12.37) <sup>2</sup>.",
    "options": [
      {
        "key": "A",
        "text": "614"
      },
      {
        "key": "B",
        "text": "612"
      },
      {
        "key": "C",
        "text": "611"
      },
      {
        "key": "D",
        "text": "610"
      }
    ],
    "optionsMap": {
      "A": "614",
      "B": "612",
      "C": "611",
      "D": "610"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To simplify (27.63) <sup>2</sup> − (12.37) <sup>2</sup> correct to three significant figures, follow these steps: Calculate (27.63) <sup>2</sup> : (27.63)2 ≈ 763.27 (rounded to three significant figures) Calculate (12.37) <sup>2</sup> : (12.37)2 ≈ 152.82 (rounded to three significant figures) Now, subtract the two results: 763.27 − 152.82 ≈ 610.45 So, (27.63) <sup>2</sup> − (12.37) <sup>2</sup> simplified to three significant figures is approximately 610.45 = 610",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 58,
    "questionNumber": 58,
    "subject": "Mathematics",
    "topic": "Fractions & Decimals",
    "subtopic": "Significant Figures",
    "year": 2003,
    "difficulty": "Medium",
    "text": "Given that x ≈ 0.0102 correct to 3 significant figures, which of the following cannot be the actual value of x?",
    "options": [
      {
        "key": "A",
        "text": "0.01014"
      },
      {
        "key": "B",
        "text": "0.01021"
      },
      {
        "key": "C",
        "text": "0.01015"
      },
      {
        "key": "D",
        "text": "0.01016"
      }
    ],
    "optionsMap": {
      "A": "0.01014",
      "B": "0.01021",
      "C": "0.01015",
      "D": "0.01016"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "0.01014 cannot be the actual value of x.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 59,
    "questionNumber": 59,
    "subject": "Mathematics",
    "topic": "Progression",
    "subtopic": "Ap & Gp",
    "year": 2021,
    "difficulty": "Hard",
    "text": "What is the n-th term of the sequence 2, 6, 12, 20...?",
    "options": [
      {
        "key": "A",
        "text": "4n - 2"
      },
      {
        "key": "B",
        "text": "2(3<sup>n - 1</sup>)"
      },
      {
        "key": "C",
        "text": "n<sup>2</sup> + n"
      },
      {
        "key": "D",
        "text": "n<sup>2</sup> + 3n + 2"
      }
    ],
    "optionsMap": {
      "A": "4n - 2",
      "B": "2(3<sup>n - 1</sup>)",
      "C": "n<sup>2</sup> + n",
      "D": "n<sup>2</sup> + 3n + 2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given that 2, 6, 12, 20...? the nth term = n <sup>2</sup> + nCheck: n = 1, u<sub>1</sub> = 2n = 2, u<sub>2</sub> = 4 + 2 = 6n = 3, u<sub>3</sub> = 9 + 3 = 12∴ n = 4, u<sub>4</sub> = 16 + 4 = 20Alternatively:Sequence: 2, 6, 12, 20, ...First find the differences:6 − 2 = 412 − 6 = 620 − 12 = 8The differences increase by 2 each time, so the pattern fits n(n + 1).Check:n = 1 → 1 × 2 = 2n = 2 → 2 × 3 = 6n = 3 → 3 × 4 = 12n = 4 → 4 × 5 = 20Therefore, the n-th term is:Tₙ = n(n + 1).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1992,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1992, 2021"
  },
  {
    "id": 60,
    "questionNumber": 60,
    "subject": "Mathematics",
    "topic": "Progression",
    "subtopic": "Ap & Gp",
    "year": 2014,
    "difficulty": "Easy",
    "text": "The 4th term of an A.P is 13 while the 10th term is 31. Find the 24th term.",
    "options": [
      {
        "key": "A",
        "text": "73"
      },
      {
        "key": "B",
        "text": "69"
      },
      {
        "key": "C",
        "text": "89"
      },
      {
        "key": "D",
        "text": "75"
      }
    ],
    "optionsMap": {
      "A": "73",
      "B": "69",
      "C": "89",
      "D": "75"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: The fourth term of an P, T4 = 13 The tenth term of an P, T10 = 31 The 24th term, T24 = ? Recall that: Tn = a + (n - 1)d for an P T4 = a + 3d and T10 = a + 9d a + 3d = 13 ......(1) a + 9d = 31 ......(2) subtract (2) from (1) -6d = -18 d = 3 substitute 3 for d in equation (1) a + 3(3) = 13 a = 13 - 9 = 4 T24 = a + 23d; T24 = 4 + 23(3) = 4 + 69 = 73",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 61,
    "questionNumber": 61,
    "subject": "Mathematics",
    "topic": "Progression",
    "subtopic": "Ap & Gp",
    "year": 2003,
    "difficulty": "Medium",
    "text": "Three consecutive terms of a geometric progression are given as n – 2, n and n + 3. Find the common ratio.",
    "options": [
      {
        "key": "A",
        "text": "<sup>3</sup>/2"
      },
      {
        "key": "B",
        "text": "<sup>2</sup>/3"
      },
      {
        "key": "C",
        "text": "<sup>1</sup>/2"
      },
      {
        "key": "D",
        "text": "<sup>1</sup>/4"
      }
    ],
    "optionsMap": {
      "A": "<sup>3</sup>/2",
      "B": "<sup>2</sup>/3",
      "C": "<sup>1</sup>/2",
      "D": "<sup>1</sup>/4"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "In a progression (GP), the common ratio ® is the factor by which each term is multiplied to get the next term. Given three consecutive terms of the G.P: n – 2, n, and n + 3, we can set up the ratios to find the common ratio: (n - 2), n and (n + 3) Common ratio (r) = ? T1 = n - 2; T2 = n; T3 = n + 3 Recall that: \\(r=\\frac{T_2}{T_1}= \\frac{T_3}{T_2}= \\frac{T_n}{T_n}-1....(1)\\)\\(\\implies\\frac{n}{n-2}=\\frac{n+3}{n}\\) Cross multiply n² = (n - 2)(n + 3) n² + n – 6 = n² n = 6 Now that we know n, we can find the common ratio (r) by comparing any two consecutive terms. Let’s use the first and second terms: \\(r=\\frac{T_2}{T_1}=\\frac{n}{n-2}\\) = \\(=\\frac{6}{6-2}= \\frac64\\)<sup>3</sup>/2 So, the common ratio (r) is \\(\\frac{n}{4}= \\frac64=\\frac32\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2016"
  },
  {
    "id": 62,
    "questionNumber": 62,
    "subject": "Mathematics",
    "topic": "Progression",
    "subtopic": "Ap & Gp",
    "year": 2016,
    "difficulty": "Hard",
    "text": "The 4th term of an A.P is 13 while the 10th term is 31. Find the 24th term.",
    "options": [
      {
        "key": "A",
        "text": "69"
      },
      {
        "key": "B",
        "text": "73"
      },
      {
        "key": "C",
        "text": "75"
      },
      {
        "key": "D",
        "text": "89"
      }
    ],
    "optionsMap": {
      "A": "69",
      "B": "73",
      "C": "75",
      "D": "89"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "a + 3d = 13 .......... (1)a + 9d = 31 .......... (2) (2) - (1): 6d = 18 d = 18/6 = 3 From (1), a + 3(3) = 13 a + 9 = 13 a = 13 - 9 = 4 Hence,T<sub>24</sub> = a + 23dT<sub>24</sub> = 4 + 23(3)T<sub>24</sub> = 4 + 69T<sub>24</sub> = 73",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 63,
    "questionNumber": 63,
    "subject": "Mathematics",
    "topic": "Progression",
    "subtopic": "Sequence & Series",
    "year": 1992,
    "difficulty": "Easy",
    "text": "What is the n-th term of the sequence 2, 6, 12, 20...?",
    "options": [
      {
        "key": "A",
        "text": "4n - 2"
      },
      {
        "key": "B",
        "text": "2(3 <sup>n - 1</sup> )"
      },
      {
        "key": "C",
        "text": "n <sup>2</sup> + n"
      },
      {
        "key": "D",
        "text": "n <sup>2</sup> + 3n + 2"
      }
    ],
    "optionsMap": {
      "A": "4n - 2",
      "B": "2(3 <sup>n - 1</sup> )",
      "C": "n <sup>2</sup> + n",
      "D": "n <sup>2</sup> + 3n + 2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given that 2, 6, 12, 20...? = the nth term = n <sup>2</sup> + n Check: n = 1, u1 = 2 n = 2, u2 = 4 + 2 = 6 n = 3, u3 = 9 + 3 = 12 ∴ n = 4, u4 = 16 + 4 = 20",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1992,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1992, 2021"
  },
  {
    "id": 64,
    "questionNumber": 64,
    "subject": "Mathematics",
    "topic": "Progression",
    "subtopic": "Sequence & Series",
    "year": 1980,
    "difficulty": "Medium",
    "text": "Which of the formula below represents the general terms of the following set of numbers(-1, <sup>2</sup>/3 , \\(-\\frac {1}{2}\\) , <sup>2</sup>/5 .....) for n = 1, 2, 3, 4.......?",
    "options": [
      {
        "key": "A",
        "text": "\\(2\\over n+1\\)"
      },
      {
        "key": "B",
        "text": "\\(-1^{n+1}\\)"
      },
      {
        "key": "C",
        "text": "\\(\\frac {-1^2} {n+1}\\)"
      },
      {
        "key": "D",
        "text": "\\(n\\over2n-1\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(2\\over n+1\\)",
      "B": "\\(-1^{n+1}\\)",
      "C": "\\(\\frac {-1^2} {n+1}\\)",
      "D": "\\(n\\over2n-1\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "(-1, \\(\\frac {2}{3}\\) , \\(-\\frac {1}{2}\\) , \\(\\frac {2}{5}\\) ......)nth term is \\(\\frac {-1^2} {n+1}\\)Since (-1)n will always be negative for n = odd",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 65,
    "questionNumber": 65,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Order of Operations",
    "year": 2020,
    "difficulty": "Hard",
    "text": "\\(Evaluate \\; \\frac{(81^{\\frac{3}{4}}-27^{\\frac{1}{3}})}{3 \\times 2^3} \\)",
    "options": [
      {
        "key": "A",
        "text": "27"
      },
      {
        "key": "B",
        "text": "11"
      },
      {
        "key": "C",
        "text": "<sup>1</sup>/3"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "optionsMap": {
      "A": "27",
      "B": "11",
      "C": "<sup>1</sup>/3",
      "D": "1"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Evaluate the following expression: \\(​ \\frac{(81^{\\frac{3}{4}} - 27^{\\frac{1}{3}})}{3 \\times 2^3} ​\\) Detailed Solution: Express the bases as powers of prime numbers: 81 can be expressed as 3⁴ (3 to the power of 4). 27 can be expressed as 3³ (3 to the power of 3).\\(​ \\frac{(3^4)^{\\frac{3}{4}} - (3^3)^{\\frac{1}{3}}}{3 \\times 2^3} ​\\) Apply the power of a power rule: (aᵐ)ⁿ = aᵐⁿ \\(​ \\frac{3^{4 \\times \\frac{3}{4}} - 3^{3 \\times \\frac{1}{3}}}{3 \\times 2^3} ​\\) Simplify the exponents:\\(​ \\frac{3^3 - 3^1}{3 \\times 8} ​\\) Evaluate the powers: 3³ = 27 3¹ = 3 2³ = 8 \\(​ \\frac{27 - 3}{3 \\times 8} ​\\) Simplify the numerator and denominator:\\(​ \\frac{24}{24} ​\\) Final answer: 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2020"
  },
  {
    "id": 66,
    "questionNumber": 66,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Order of Operations",
    "year": 1995,
    "difficulty": "Easy",
    "text": "Evaluate \\(\\frac{81^{^{\\frac{3}{4}}}-\\;27^{^{\\frac{1}{3}}}}{3 \\times 2^3} \\)",
    "options": [
      {
        "key": "A",
        "text": "27"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "<sup>1</sup>/3"
      },
      {
        "key": "D",
        "text": "<sup>1</sup>/8"
      }
    ],
    "optionsMap": {
      "A": "27",
      "B": "1",
      "C": "<sup>1</sup>/3",
      "D": "<sup>1</sup>/8"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Let's break down the expression step by step: First, let's simplify \\(81^{\\frac{3}{4}}: 81^{\\frac{3}{4}} = (3^4)^{\\frac{3}{4}} = 3^{4 \\cdot \\frac{3}{4}} = 3^3 = 27\\) Now, let's simplify \\(27^{\\frac{1}{3}}: 27^{\\frac{1}{3}} = (3^3)^{\\frac{1}{3}} = 3^{3 \\cdot \\frac{1}{3}} = 3^1 = 3\\) So, the numerator becomes: 27 - 3 = 24 Now, let's simplify the denominator: \\(3 \\times 2^3 = 3 \\times 8 = 24\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2020"
  },
  {
    "id": 67,
    "questionNumber": 67,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Number Bases",
    "year": 2015,
    "difficulty": "Medium",
    "text": "Convert 27<sub>10</sub> to another number in base three",
    "options": [
      {
        "key": "A",
        "text": "1000₃"
      },
      {
        "key": "B",
        "text": "1100₃"
      },
      {
        "key": "C",
        "text": "1010₃"
      },
      {
        "key": "D",
        "text": "1001₃"
      }
    ],
    "optionsMap": {
      "A": "1000₃",
      "B": "1100₃",
      "C": "1010₃",
      "D": "1001₃"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: To convert 27<sub>10</sub> to a number in base three ⇒ Divide 27 by 3 and write the remainders upwards as the required number. | 3 | 27 | | 3 | 9r0 | | 3 | 3r0 | | 3 | 1r0 | | | 0r1 | 1000₃",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2012,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2012, 2015"
  },
  {
    "id": 68,
    "questionNumber": 68,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Number Bases",
    "year": 2012,
    "difficulty": "Hard",
    "text": "Convert 27<sub>10</sub> to another number in base three",
    "options": [
      {
        "key": "A",
        "text": "1010₃"
      },
      {
        "key": "B",
        "text": "1100₃"
      },
      {
        "key": "C",
        "text": "1000₃"
      },
      {
        "key": "D",
        "text": "1001₃"
      }
    ],
    "optionsMap": {
      "A": "1010₃",
      "B": "1100₃",
      "C": "1000₃",
      "D": "1001₃"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "<table style=\"width:300px\"><tbody><tr><td> 3 </td><td> 27 </td></tr><tr><td> 3 </td><td> 9 r 0 </td></tr><tr><td> 3 </td><td> 3 r 0 </td></tr><tr><td> 3 </td><td> 1 r 0 </td></tr><tr><td> - </td><td> 0 r 1 </td></tr></tbody></table> = 1000₃",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2012,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2012, 2015"
  },
  {
    "id": 69,
    "questionNumber": 69,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Numbers",
    "year": 1986,
    "difficulty": "Easy",
    "text": "Find the smallest number by which 252 can be multiplied to obtain a perfect square",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "optionsMap": {
      "A": "2",
      "B": "3",
      "C": "5",
      "D": "7"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To obtain a perfect square by multiplying 252, the smallest number you would need to multiply it by is 7. Step 1: Prime Factorization of 252 First, let's break down 252 into its prime factors: 252 = 2 × 2 × 3 × 3 × 7 <ul> <li>Prime factors: 2, 3, 7 .</li> <li>In exponent form: 2 <sup>2</sup> ×3 <sup>2</sup> ×7 <sup>1</sup></li> </ul> Step 2: Analyze Prime Factors A perfect square requires all prime factors to be raised to an even power. From the factorization, we notice: <ul> <li>The prime factor 7 is raised to the power of 1, which is odd. .</li> </ul> Step 3: Find the Smallest Multiplier To make the power of 7 even, we need another factor of 7. Thus, multiplying 252 by 7 will adjust the exponent of 7 to be 2, making it even: 2 <sup>2</sup> ×3 <sup>2</sup> ×7 <sup>1</sup> Now, every prime factor is raised to an even power, fulfilling the condition for a perfect square. Conclusion The smallest number by which 252 must be multiplied to obtain a perfect square is 7 . This ensures that all prime factors of the resulting product are to an even power, making the product a perfect square.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      1986
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1981, 1986)"
  },
  {
    "id": 70,
    "questionNumber": 70,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Factors & Multiples",
    "year": 1986,
    "difficulty": "Medium",
    "text": "Divide the L.C.M of 48, 64, and 80 by their H.C.F",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "48"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "optionsMap": {
      "A": "20",
      "B": "30",
      "C": "48",
      "D": "60"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "48 = 2 <sup>4</sup> x 3 64 = 2 <sup>6</sup> 80 = 2 <sup>4</sup> x 5 L.M = 2 <sup>6</sup> x 3 x 5 H.F = 2 <sup>4</sup> \\(\\frac{(2^6×3×5)}{2^4} \\) = 2 <sup>2</sup> x 3 x 5 = 4 x 3 x 5 = 12 x 5 = 60",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1986,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1986, 2018"
  },
  {
    "id": 71,
    "questionNumber": 71,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Factors & Multiples",
    "year": 2018,
    "difficulty": "Hard",
    "text": "Divide the L.C.M of 48, 64 and 80 by their H.C.F",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "48"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "optionsMap": {
      "A": "20",
      "B": "30",
      "C": "48",
      "D": "60"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Sure, to divide the LCM of 48, 64 and 80 by their HCF, we can follow these steps: <ol><li><span> Find the Least Common Multiple (LCM) of 48, 64 and 80.</span></li></ol> The LCM of 48, 64 and 80 is 960. <ol><li><span> Find the Highest Common Factor (HCF) of 48, 64 and 80.</span></li></ol> The HCF of 48, 64 and 80 is 16. <ol><li><span> Divide the LCM by the HCF.</span></li></ol>\\({\\text{LCM}\\over\\text{HCF}}={960\\over16}=60\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1986,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1986, 2018"
  },
  {
    "id": 72,
    "questionNumber": 72,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Place Values",
    "year": 2011,
    "difficulty": "Easy",
    "text": "What is the value of 3 in the number 42.7531?",
    "options": [
      {
        "key": "A",
        "text": "3/10000"
      },
      {
        "key": "B",
        "text": "3/1000"
      },
      {
        "key": "C",
        "text": "3/100"
      },
      {
        "key": "D",
        "text": "3/10"
      }
    ],
    "optionsMap": {
      "A": "3/10000",
      "B": "3/1000",
      "C": "3/100",
      "D": "3/10"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Given: 42.7531 Express the number in base 10 since no base is assigned to is 4 <sup>1</sup> 2 <sup>0</sup>. 7-1 5 <sup>-2</sup> 3 <sup>-3</sup> 1 <sup>-4</sup> 4 × 10 <sup>1</sup> + 2 × 10 <sup>0</sup> + 7 × 10 <sup>-1</sup> + 5 × 10 <sup>-2</sup> + 3 × 10 <sup>-3</sup> + 1 × 10 <sup>-4</sup> The value of 3 is 3 × 10 <sup>-3</sup>\\(= 3 \\times \\frac{1}{10^3} = \\frac{3}{1000}\\) The value of 3 in the number 42.7531 is \\(\\frac{3}{1000}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2006,
      2011
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2006, 2011)"
  },
  {
    "id": 73,
    "questionNumber": 73,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Mathematics Basics",
    "year": 2009,
    "difficulty": "Medium",
    "text": "A. How many numbers between 75 and 500 are divisible by 7?(Leaving the answer in whole number format ab) B. The 8th term of an Arithmetic progression (A.P) is 5 times the third term while the 7th term is 9 greater than the 4th term. Write the first five terms of the A.P.",
    "options": [
      {
        "key": "A",
        "text": "A. Numbers between 75 and 500 divisible by 7 include 77 and 497nth = a + (n - 1)d497 = a + (n - 1)7497 = 77 + 7n - 7497 = 70 +7n427 = 7nn = 61"
      },
      {
        "key": "B",
        "text": "B. a + 7d = 5(a + 2d) .....(1)a + 6d = (a + 3d) + 9 ...... (2)In (1) a + 7d = 5a + 10di.e 4a = -3d ......(3)In (2) a + 6d = a + 3d + 93d = 9d = 3since, 4a = -3da = -3d/4substitute for d = 3 in -3/4 = a∴ a, a = d, a + 2, a + 3d, a + 4d",
    "imageUrl": "/diagrams/mathematics_q78154_img1.png"
      }
    ],
    "optionsMap": {
      "A": "A. Numbers between 75 and 500 divisible by 7 include 77 and 497nth = a + (n - 1)d497 = a + (n - 1)7497 = 77 + 7n - 7497 = 70 +7n427 = 7nn = 61",
      "B": "B. a + 7d = 5(a + 2d) .....(1)a + 6d = (a + 3d) + 9 ...... (2)In (1) a + 7d = 5a + 10di.e 4a = -3d ......(3)In (2) a + 6d = a + 3d + 93d = 9d = 3since, 4a = -3da = -3d/4substitute for d = 3 in -3/4 = a<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAdCAIAAAAvuHXAAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAApRJREFUaEPtWT2WgjAQDnsW2YLHCfAEuo3VttuRUhs7SzsbKN0jWG2z5ATrCXgWkru4E/6JAcMSYvY9UqFOZr58fpmZBOt2u6FpDGbgZbCHyQFjYOJRjQ6M55GSEGNCBaulBONQ9IMaZnp6gfxowEgCz8uAe36QVIAi3ys/imzgOz/Shh/QFCD5oIboMbmg95S+yP08fRcio+Ee7dazXBkim9l6h/aaREnwMs5AJu9oiUlDsIbwuDj+ML4ouSJ/95YzR79P7mpRwhXaINtBFfE992JvczebMXtFXnxtpBS9PNJwbnFjXqiJYMuylyfk2JUAz9xK721gTe75kvRmpGNCG8jFKog3NoM/38d387UlF6lASeQjVGQ8eBYlv4YNZAKxlVS4PxpBVuaR6dVjmwpAApkuZ7aTp3L4UH+GPS+0QfQae46tUo8PfEED8bFBwbZKOOmEP/4liqeBxgSlsFmNxTb1iq4Y1L07JkSuo8iNDOGxjYFHLOntezr+J8N5hB4jCvwgqrWU5WJAn41ec3Q1dgXIeGRbprXF5Ken4m4bVdv81GXddIMEHlmJzJef7f/6geK5bPyf6Ny+ZkSOx+OoVVUV5/Ig6xHTvie9C5jDsOwN3/reuxX0qVVvXbbVIjiqlir00wyoA2QjYppJSgmOq8dReXyu8xeUXM4oPzfS8HCSl/VkWWcAinVef9mNVf6s8S7quTJSFt0CT5OwhjNgxvlasA5WKDqL1vC1S3qQQmIoj5CpL25Huy9JgQIzSSRG8kjwAW23jgIWhrqQRmIgjwR/rY7F2wQSanprIGK8DxJlFUuRI/5gPN7p6hHgXkjMve9hrwfNOOnLIDGWxySA65MRz/qP1Fj9LoVk6h+HlqJs/i+riD6bsKhdbgAAAABJRU5ErkJggg==\"/>∴ a, a = d, a + 2, a + 3d, a + 4d<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAdCAIAAAAvuHXAAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuBJREFUaEPtWD12ozAQlnMWSMHzCfAJcBpXbtNBaTfuUqajgZJ0aV2lWesE2RP4uQjcxTuSAPMrjRCbePdJTfLsmW9mvvmRNYvr9UrsMWbgwRjBAjAGLI/z1IHl8e/zSKPVgp9VRFXWinRVC6eFSrrzfcEs3WzQSJhllrWwOI5wWOg1kPSwBsKRszFejzRan7c5XEPXfEvWKibzCxHCp+Xb8ZcGkRB7lBOvzWx4YlBwPncOOidF+vzqvTN/wYd9DKkHNxLuFLgVhtsnPFYvHBUb0r5eihicR+Kfv+TcBBkPuaBfJHzRcJg4QZYFLposiaCz+xS0O67nh5sA/gkykYci/SAbjZSQoXCkbDyAjbIh62YS3RRskvPe5V3yesbEyZrIXR+J5+LzPoL7tp7S1iVYkcaXlwxorA+Nj96h+YF+OEo2ygaS/ckTn9SdppDPTyFBC9dYwxbyJCR+1ZgIP/kMSsKkGgqlCoBjve8ZGQhn2FflfV3Q9HlPEkU62Vzmo531FCbbEhkY6Fq3yw2qSKP4MdtB5cHQra5GKMatbjGOhjPOhqoQiR9iSgISV/Knm3xWwNXh1XeC8hcHoMprAlONrFBupyxB+FC3pHlZD4TD8cfYWNh3oWH7CHVlX89i5f8HsTzOk2PL4zw8LvAwkkkKv/b6OJjJO6j4L0LZewZfSDJJ29c/ySN7S076sTxZsR/tfUHZevzJeswvv32dNVTt62TFfrR3BtV/msPzR/6Ugl3eyFORPZ0kuuOKrY0F5iF3b1DdvmZLp6Vi0wAbw8FdnlJ3TLEuNiVCLXlvUG0eaRSTw6GznEYOEBNdYcIcoXb126GaPNLoY1NXGk21llcmuhWL0613Um3uTCMhSK9ak6npD2ZKVcrtlRVslzCrttZkNkeYJZDObYH3ivQ3exNXdhzIRFd4Yo7QJFQ/ocObTqVXfR7ZNn9KRZVb/cm6FY3TrfeK6Ruh7PsaeY0qxP4A9Cjn5uNtKaQAAAAASUVORK5CYII=\"/>",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Mathematics Basics.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2009
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2004, 2009)"
  },
  {
    "id": 74,
    "questionNumber": 74,
    "subject": "Mathematics",
    "topic": "Number & Numeration",
    "subtopic": "Order of Operations",
    "year": 2014,
    "difficulty": "Hard",
    "text": "A. Simplify 3√75 - √12+ √108 , leaving the answer in surd form (radicals). B. If 124<sub>n</sub> = 232<sub>five</sub>, find n",
    "options": [
      {
        "key": "A",
        "text": "A. for 3√25x3 - √4x3 + √36x3 (any two terms correct)for simplifyingfor Ans. = 19√3"
      },
      {
        "key": "B",
        "text": "B. 124<sub>n</sub>= 232<sub>5</sub>n<sup>2</sup> + 2n + 4 = 2 x 25 + 3 x 5 + 2 x 1n<sup>2</sup> + 2n + 4 - 67 = 0n<sup>2</sup> + 2n - 63 = 0n<sup>2</sup> + 9n - 7n - 63 = 0n(n+9) 7 (n+9) = 0n = 7 or -9n cannot be negativen = 7"
      }
    ],
    "optionsMap": {
      "A": "A. for 3√25x3 - √4x3 + √36x3 (any two terms correct)for simplifyingfor Ans. = 19√3",
      "B": "B. 124<sub>n</sub>= 232<sub>5</sub>n<sup>2</sup> + 2n + 4 = 2 x 25 + 3 x 5 + 2 x 1n<sup>2</sup> + 2n + 4 - 67 = 0n<sup>2</sup> + 2n - 63 = 0n<sup>2</sup> + 9n - 7n - 63 = 0n(n+9) 7 (n+9) = 0n = 7 or -9n cannot be negativen = 7",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Order of Operations.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 75,
    "questionNumber": 75,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Word Problems",
    "year": 1999,
    "difficulty": "Easy",
    "text": "A group of market women sell at least one of yam, plantain and maize. 12 of them sell maize, 10 sell yam and 14 sell plantain. 5 sell plantain and maize, 4 sell yam and maize, 2 sell yam and plantain only while 3 sell all the three items. How many women are in the group?",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "19"
      },
      {
        "key": "C",
        "text": "18"
      },
      {
        "key": "D",
        "text": "17"
      }
    ],
    "optionsMap": {
      "A": "25",
      "B": "19",
      "C": "18",
      "D": "17"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given <ul> <li>Maize = 12</li> <li>Yam = 10</li> <li>Plantain = 14</li> <li>Plantain and maize = 5</li> <li>Yam and maize = 4</li> <li>Yam and plantain only = 2</li> <li>All three = 3</li> </ul> Since the figures for plantain and maize and yam and maize include those who sell all three: Step 1: Find the two-way-only groups Plantain and maize only: 5 − 3 = 2 Yam and maize only: 4 − 3 = 1 Yam and plantain only = 2 Step 2: Find those selling only one item Maize only: 12 − 2 − 1 − 3 = 6 Yam only: 10 − 2 − 1 − 3 = 4 Plantain only: 14 − 2 − 2 − 3 = 7 Step 3: Find the total 6 + 4 + 7 + 2 + 1 + 2 + 3 = 25",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2021"
  },
  {
    "id": 76,
    "questionNumber": 76,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Word Problems",
    "year": 2026,
    "difficulty": "Medium",
    "text": "It takes 15 minutes to fill 125 gallons with petrol from a tanker. How long will it take to fill 72 gallons?",
    "options": [
      {
        "key": "A",
        "text": "9min"
      },
      {
        "key": "B",
        "text": "45min"
      },
      {
        "key": "C",
        "text": "87min"
      },
      {
        "key": "D",
        "text": "102min"
      }
    ],
    "optionsMap": {
      "A": "9min",
      "B": "45min",
      "C": "87min",
      "D": "102min"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "We can use a proportion to solve this problem:\\(\\frac{\\text{time}}{72} = \\frac{15}{125}\\)Where \"time\" is the time it takes to fill 72 gallons. To solve for \"time,\" we can cross-multiply the proportion:\\(\\text{time} \\times 125 = 72 \\times 15\\)\\(\\text{time} = \\frac{72 \\times 15}{125}\\)Calculate the value:\\(\\text{time} = \\frac{1080}{125} = 8.64\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2024,
      2026
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2024, 2026"
  },
  {
    "id": 77,
    "questionNumber": 77,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Word Problems",
    "year": 2024,
    "difficulty": "Hard",
    "text": "It takes 15 minutes to fill 125 gallons with petrol from a tanker. How long will it take to fill 72gallons?",
    "options": [
      {
        "key": "A",
        "text": "9min"
      },
      {
        "key": "B",
        "text": "45min"
      },
      {
        "key": "C",
        "text": "87min"
      },
      {
        "key": "D",
        "text": "102min"
      }
    ],
    "optionsMap": {
      "A": "9min",
      "B": "45min",
      "C": "87min",
      "D": "102min"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "We can use a proportion to solve this problem: \\(\\frac{\\text{time}}{72} = \\frac{15}{125}\\) Where \"time\" is the time it takes to fill 72 gallons. To solve for \"time,\" we can cross-multiply the proportion: \\(\\text{time} \\times 125 = 72 \\times 15\\)\\(\\text{time} = \\frac{72 \\times 15}{125}\\) Calculate the value: \\(\\text{time} = \\frac{1080}{125} = 8.64\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2024,
      2026
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2024, 2026"
  },
  {
    "id": 78,
    "questionNumber": 78,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Word Problems",
    "year": 1989,
    "difficulty": "Easy",
    "text": "A square tile has side 30cm. How many of these tiles will cover a rectangular floor of length 7.2m and width 4.2?",
    "options": [
      {
        "key": "A",
        "text": "336"
      },
      {
        "key": "B",
        "text": "420"
      },
      {
        "key": "C",
        "text": "576"
      },
      {
        "key": "D",
        "text": "720"
      }
    ],
    "optionsMap": {
      "A": "336",
      "B": "420",
      "C": "576",
      "D": "720"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Total floor area = 720 x 420Area of one tile = 30 x 30No. of tile required = \\(\\frac{720 \\times 420}{30 \\times 30}\\)= 24 x 14= 336 tiles",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1989,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1989, 2013"
  },
  {
    "id": 79,
    "questionNumber": 79,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Linear Equations",
    "year": 2023,
    "difficulty": "Medium",
    "text": "If x and y are two real numbers such that 3x+2y=5 and 5x+4y=9, then 4x+3y= ?",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "optionsMap": {
      "A": "0",
      "B": "2",
      "C": "5",
      "D": "6"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To solve this problem, we can use the following steps: Multiply the first equation by -2: -6x - 4y = -10 Add the second equation to the modified first equation: 5x + 4y = 9 -6x - 4y = -10 -x = -1 Divide both sides by -1 to solve for x: x = 1 Substitute x = 1 into either of the original equations to solve for y: 3x + 2y = 5 3(1) + 2y = 5 3 + 2y = 5 2y = 2 y = 1 Now that we know x = 1 and y = 1, we can substitute these values into the expression 4x + 3y to find its value: 4x + 3y = 4(1) + 3(1) = 4 + 3 = 7",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2023
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2018, 2023)"
  },
  {
    "id": 80,
    "questionNumber": 80,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Change of Subject Formular",
    "year": 2014,
    "difficulty": "Hard",
    "text": "If gt² - k – w = 0, make g the subject of the formula.",
    "options": [
      {
        "key": "A",
        "text": "\\((k+w)\\over t\\)"
      },
      {
        "key": "B",
        "text": "\\((k-w)\\over t\\)"
      },
      {
        "key": "C",
        "text": "\\((k+w)\\over t^2\\)"
      },
      {
        "key": "D",
        "text": "\\((k-w)\\over t^2\\)"
      }
    ],
    "optionsMap": {
      "A": "\\((k+w)\\over t\\)",
      "B": "\\((k-w)\\over t\\)",
      "C": "\\((k+w)\\over t^2\\)",
      "D": "\\((k-w)\\over t^2\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To make g the subject of the formula gt <sup>2</sup> – k – w = 0, you can follow these steps: Step 1: Start with the equation gt2 – k – w = 0. Step 2: Add k and w to both sides of the equation to isolate the gt <sup>2</sup> term: gt² - k -w = 0 gt² = k + w Dividing both sides by t² \\(g={k+w\\over t^2}\\) so g is the subject of the formula",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015"
  },
  {
    "id": 81,
    "questionNumber": 81,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Change of Subject Formular",
    "year": 2015,
    "difficulty": "Easy",
    "text": "If gt² - k - w = 0, make g the subject of the formula.",
    "options": [
      {
        "key": "A",
        "text": "\\(\\frac{k + w}{t²}\\)"
      },
      {
        "key": "B",
        "text": "\\(\\frac{k - w}{t}\\)"
      },
      {
        "key": "C",
        "text": "\\(\\frac{k + w}{t}\\)"
      },
      {
        "key": "D",
        "text": "\\( \\frac{k - w}{t²}\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\frac{k + w}{t²}\\)",
      "B": "\\(\\frac{k - w}{t}\\)",
      "C": "\\(\\frac{k + w}{t}\\)",
      "D": "\\( \\frac{k - w}{t²}\\)"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To make \"g\" the subject of the formula \"gt² - k - w = 0,\" follow these steps: Add \"k\" and \"w\" to both sides of the equation to isolate the term \"gt²\": gt² = k + w Divide both sides by \"t²\" to solve for \"g\": \\(g= \\frac{k + w}{t²}\\) So, \"g\" is the subject of the formula: \\(g= \\frac{k + w}{t²}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015"
  },
  {
    "id": 82,
    "questionNumber": 82,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "How to Plot Graphs",
    "year": 1990,
    "difficulty": "Medium",
    "text": "What is the equation of the quadratic function represented by the graph?",
    "imageUrl": "/diagrams/mathematics_q82_diagram.jpg",
    "options": [
      {
        "key": "A",
        "text": "y = x <sup>2</sup> + x - 2"
      },
      {
        "key": "B",
        "text": "y = -x <sup>2</sup> - x + 2"
      },
      {
        "key": "C",
        "text": "y = x <sup>2</sup> - x - 2"
      },
      {
        "key": "D",
        "text": "y = -x <sup>2</sup> - x + 2"
      }
    ],
    "optionsMap": {
      "A": "y = x <sup>2</sup> + x - 2",
      "B": "y = -x <sup>2</sup> - x + 2",
      "C": "y = x <sup>2</sup> - x - 2",
      "D": "y = -x <sup>2</sup> - x + 2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The graph touches the x axis when x = -1, x = 2 and y = 0 (x - a)(x - b) = 0 Where a and b are the x-intercepts Where: a = -1, b = 2 (x - -1)(x - 2) = 0 (x + 1)(x - 2) = 0 x <sup>2</sup> - 2x + x - 2 = 0",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1985,
      1990
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1985, 1990)"
  },
  {
    "id": 83,
    "questionNumber": 83,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Algebraic Simplifications",
    "year": 2015,
    "difficulty": "Hard",
    "text": "\\(Simplify \\quad \\frac{3x - y}{xy}-\\frac{2x + 3y}{2xy}+\\frac{1}{2}\\)",
    "options": [
      {
        "key": "A",
        "text": "\\(\\frac{4x + 5y - xy}{2xy}\\)"
      },
      {
        "key": "B",
        "text": "\\(\\frac{5y - 4x + xy}{2xy}\\)"
      },
      {
        "key": "C",
        "text": "\\(\\frac{5x + 4y - xy}{2xy}\\)"
      },
      {
        "key": "D",
        "text": "\\(\\frac{4x - 5y + xy}{2xy}\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\frac{4x + 5y - xy}{2xy}\\)",
      "B": "\\(\\frac{5y - 4x + xy}{2xy}\\)",
      "C": "\\(\\frac{5x + 4y - xy}{2xy}\\)",
      "D": "\\(\\frac{4x - 5y + xy}{2xy}\\)"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Take the L.M. and Combine the Fractions Combine the fractions by finding the least common multiple (L.M.) of the denominators xy and 2xy, which is 2xy: \\(\\frac{2(3x - y) - (2x + 3y) + xy}{2xy}\\) Simplify the Numerator Distribute and combine like terms in the numerator: \\(\\frac{6x - 2y - 2x - 3y + xy}{2xy}\\) Simplify the numerator: \\(\\frac{(6x - 2x) + (xy) - (2y + 3y)}{2xy} = \\frac{4x + xy - 5y}{2xy}\\) \\(= \\frac{4x - 5y + xy}{2xy}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2010,
      2015
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2010, 2015)"
  },
  {
    "id": 84,
    "questionNumber": 84,
    "subject": "Mathematics",
    "topic": "Algebraic Process",
    "subtopic": "Functions & Relations",
    "year": 1984,
    "difficulty": "Easy",
    "text": "If f(x) = \\(2(x - 3)^2\\) + 3(x - 3) + 4 and g(y) = \\(\\sqrt{5 + y}\\) , find g [f(3)] and f[g(4)].",
    "options": [
      {
        "key": "A",
        "text": "3 and 4"
      },
      {
        "key": "B",
        "text": "-3 and 4"
      },
      {
        "key": "C",
        "text": "-3 and -4"
      },
      {
        "key": "D",
        "text": "3 and -4"
      }
    ],
    "optionsMap": {
      "A": "3 and 4",
      "B": "-3 and 4",
      "C": "-3 and -4",
      "D": "3 and -4"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "f(x)= 2(x - 3)22 + 3(x - 3) + 4= (2 + 3)(x - 3) + 4= 5(x - 3) + 4= 5x - 15 + 4= 5x - 11f(3) = 5 x 3 - 11= 4g(f(3)) = g(4)= \\(\\sqrt{5 + y}\\)= \\(\\sqrt{9}\\)= 3g(4) = 3f(g(4)) = f(3)= 4g[f(3)] and f[g(4)] = 3 and 4 respectively.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      1984
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1979, 1984)"
  },
  {
    "id": 85,
    "questionNumber": 85,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Operations On Matrices",
    "year": 2010,
    "difficulty": "Medium",
    "text": "Evaluate\\(\\begin{vmatrix} 2 & 0 & 5 \\\\ 4 & 6 & 3 \\\\ 8 & 9 & 1 \\end{vmatrix}\\)",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "102"
      },
      {
        "key": "C",
        "text": "-102"
      },
      {
        "key": "D",
        "text": "-42"
      }
    ],
    "optionsMap": {
      "A": "18",
      "B": "102",
      "C": "-102",
      "D": "-42"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Expand along the first row:\\( = 2 \\begin{vmatrix} 6 & 3 \\\\ 9 & 1 \\end{vmatrix} - 0 \\begin{vmatrix} 4 & 3 \\\\ 8 & 1 \\end{vmatrix} + 5 \\begin{vmatrix} 4 & 6 \\\\ 8 & 9 \\end{vmatrix} \\)Compute the smaller determinants:\\(\\begin{vmatrix} 6 & 3 \\\\ 9 & 1 \\end{vmatrix} = (6 \\times 1) - (3 \\times 9) = 6 - 27 = -21\\)The second term becomes 0 because it is multiplied by 0.\\(\\begin{vmatrix} 4 & 6 \\\\ 8 & 9 \\end{vmatrix} = (4 \\times 9) - (6 \\times 8) = 36 - 48 = -12\\)Substitute back:= 2(-21) + 5(-12)= -42 - 60= -102",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2010
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2005, 2010)"
  },
  {
    "id": 86,
    "questionNumber": 86,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Determinants & Inverse",
    "year": 2016,
    "difficulty": "Hard",
    "text": "Find the value of \\(\\begin{pmatrix} 0 & 3 & 2 \\\\ 1 & 7 & 8 \\\\ 0 & 5 & 4 \\end{pmatrix}\\)",
    "options": [
      {
        "key": "A",
        "text": "-2"
      },
      {
        "key": "B",
        "text": "-1"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "optionsMap": {
      "A": "-2",
      "B": "-1",
      "C": "10",
      "D": "12"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Determinants & Inverse.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2011, 2016)"
  },
  {
    "id": 87,
    "questionNumber": 87,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Operations On Matrices",
    "year": 2025,
    "difficulty": "Easy",
    "text": "Given that\\(\\begin{pmatrix} 1 & -3 \\\\1& 4 \\end{pmatrix} \\begin{pmatrix} -6 \\\\P \\end{pmatrix} =\\begin{pmatrix} 3 \\\\-26 \\end{pmatrix} \\) Find the value of P",
    "options": [
      {
        "key": "A",
        "text": "-3"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "-5"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "optionsMap": {
      "A": "-3",
      "B": "3",
      "C": "-5",
      "D": "5"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To find P, we use matrix multiplication (multiplying the rows of the first matrix by the column vector).Using the bottom row:(1×−6)+(4×P)=−26−6+4P=−26Add 6 to both sides:4P=−20Divide by 4:ans-P=−5Using the top row:(1×−6)+(−3×P)=3−6−3P=3Add 6 to both sides:−3P=9Divide by -3:ans-P=−3",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 88,
    "questionNumber": 88,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Operations On Matrices",
    "year": 2015,
    "difficulty": "Medium",
    "text": "IfP = \\(\\begin{bmatrix} {5} & {3} \\\\[0.3em] 2 & 1 \\\\[0.3em] \\end{bmatrix}\\)Q = \\(\\begin{bmatrix} {4} & {2} \\\\[0.3em] 3 & 5 \\\\[0.3em] \\end{bmatrix}\\)Find 2P + Q",
    "options": [
      {
        "key": "A",
        "text": "\\(\\begin{bmatrix} 8 & {14} \\\\[0.3em] 7 & 7 \\\\[0.3em] \\end{bmatrix}\\)"
      },
      {
        "key": "B",
        "text": "\\(\\begin{bmatrix} {7} & {7} \\\\[0.3em] 14 & 8 \\\\[0.3em] \\end{bmatrix}\\)"
      },
      {
        "key": "C",
        "text": "\\(\\begin{bmatrix} {14} & {8} \\\\[0.3em] 7 & 7 \\\\[0.3em] \\end{bmatrix}\\)"
      },
      {
        "key": "D",
        "text": "\\(\\begin{bmatrix} {7} & {7} \\\\[0.3em] 8& 14 \\\\[0.3em] \\end{bmatrix}\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\begin{bmatrix} 8 & {14} \\\\[0.3em] 7 & 7 \\\\[0.3em] \\end{bmatrix}\\)",
      "B": "\\(\\begin{bmatrix} {7} & {7} \\\\[0.3em] 14 & 8 \\\\[0.3em] \\end{bmatrix}\\)",
      "C": "\\(\\begin{bmatrix} {14} & {8} \\\\[0.3em] 7 & 7 \\\\[0.3em] \\end{bmatrix}\\)",
      "D": "\\(\\begin{bmatrix} {7} & {7} \\\\[0.3em] 8& 14 \\\\[0.3em] \\end{bmatrix}\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "P = \\(\\begin{bmatrix} {5} & {3} \\\\[0.3em] 2 & 1 \\\\[0.3em] \\end{bmatrix}\\) andQ = \\(\\begin{bmatrix} {4} & {2} \\\\[0.3em] 3 & 5 \\\\[0.3em] \\end{bmatrix}\\)2P + Q =\\(\\begin{bmatrix} {10} & {6} \\\\[0.3em] 4 & 2 \\\\[0.3em] \\end{bmatrix}\\) + \\(\\begin{bmatrix} {4} & {2} \\\\[0.3em] 3 & 5 \\\\[0.3em] \\end{bmatrix}\\)P = \\(\\begin{bmatrix} {14} & {8} \\\\[0.3em] 7 & 7 \\\\[0.3em] \\end{bmatrix}\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 89,
    "questionNumber": 89,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Operations On Matrices",
    "year": 2001,
    "difficulty": "Hard",
    "text": "\\(\\text{Evaluate} \\begin{bmatrix} -1 & -1 & -1 \\\\[0.3em] 3 & 1 & -1 \\\\[0.3em] 1 & 2 & 1 \\end{bmatrix}\\)",
    "options": [
      {
        "key": "A",
        "text": "-12"
      },
      {
        "key": "B",
        "text": "-4"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "-2"
      }
    ],
    "optionsMap": {
      "A": "-12",
      "B": "-4",
      "C": "4",
      "D": "-2"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Given: \\(\\begin{bmatrix} -1 & -1 & -1 \\\\[0.3em] 3 & 1 & -1 \\\\[0.3em] 1 & 2 & 1 \\end{bmatrix}\\) Let the given matrix be X Determinant of X would be |X| = ? *Alternate signs on the elements in the first row + - + \\(\\begin{bmatrix} -1 & -1 & -1 \\\\[0.3em] 3 & 1 & -1 \\\\[0.3em] 1 & 2 & 1 \\end{bmatrix}\\) 1[(1 x 1) - (-1 x 2)] - - 1[(3 x 1) - (-1 x 1)] + -1[(3 x 2) – (1 x 1)] = -1[1 + 2)] + 1[3 + 1] - 1[6 - 1) = - 3 + 4 – 5 = -4",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 90,
    "questionNumber": 90,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Determinants & Inverse",
    "year": 2011,
    "difficulty": "Easy",
    "text": "Evaluate \\(\\begin{vmatrix} 4 & 2 & -1 \\\\ 2 & 3 & -1 \\\\ -1 & 1 & 3 \\end{vmatrix}\\)",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "45"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "55"
      }
    ],
    "optionsMap": {
      "A": "25",
      "B": "45",
      "C": "15",
      "D": "55"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given to evaluate the matrix; \\(\\begin{vmatrix} 4 & 2 & -1 \\\\ 2 & 3 & -1 \\\\ -1 & 1 & 3 \\end{vmatrix}\\) The determinant of the matrix is 4[(3)(3) – (-1) (1)] -2[(2)(3) - (-1)] -1[(2)(1) - (3)(-1)] = 4[10] -2[5] – 1[5] = 40 – 10 – 5 = 25",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 91,
    "questionNumber": 91,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Determinants & Inverse",
    "year": 2015,
    "difficulty": "Medium",
    "text": "\\(\\text{Find the value of} \\begin{bmatrix} 0 & 3 & 2 \\\\[0.3em] 1 & 7 & 8 \\\\[0.3em] 0 & 5 & 4 \\end{bmatrix}\\)",
    "options": [
      {
        "key": "A",
        "text": "-1"
      },
      {
        "key": "B",
        "text": "-2"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "optionsMap": {
      "A": "-1",
      "B": "-2",
      "C": "12",
      "D": "10"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Given: \\(\\begin{bmatrix} 0 & 3 & 2 \\\\[0.3em] 1 & 7 & 8 \\\\[0.3em] 0 & 5 & 4 \\end{bmatrix} \\\\ \\;\\; + \\;\\; - \\; \\; +\\) Alternate signs on the elements in the first row = + 0(4 × 7 - 5 × 8) - 3(4 × 1 - 0 × 8) + 2(5 - 0 × 7) = +0 (28 - 40) - 3(4 - 0) + 2(5 - 0) = +0(-12) - 3(4) + 2(5) = 0 - 12 + 10 = -2 |K| = -2",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 92,
    "questionNumber": 92,
    "subject": "Mathematics",
    "topic": "Matrices",
    "subtopic": "Determinants & Inverse",
    "year": 1995,
    "difficulty": "Hard",
    "text": "Solve the Matrix \\(\\begin{vmatrix} -2 & 1 & 1 \\\\ 2 & 1 & k \\\\ 1 & 3 & -1 \\end{vmatrix}=23\\)",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "-2(-1-3k) -1(-2-k) + 1(6-1) = 23 2 + 6k + 2 + k + 5 = 23 7k + 9 = 23 7k = 14 k = 2",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 93,
    "questionNumber": 93,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Simple & Compound Interest",
    "year": 1993,
    "difficulty": "Easy",
    "text": "If ₦225.00 yields ₦27.00 in x years simple interest at the rate of 4% per annum, find x",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "17"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "4",
      "C": "12",
      "D": "17"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "I = Prt P=₦225.00 I=₦27.00 r=0.04 (4% expressed as a decimal) t = ? ₦27.00 = ₦225.00 × 0.04 × t t = \\(27\\over9\\) t = 3",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1993,
      1995
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1993, 1995"
  },
  {
    "id": 94,
    "questionNumber": 94,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Simple & Compound Interest",
    "year": 1995,
    "difficulty": "Medium",
    "text": "If ₦225.00 yields ₦27.00 in x years simple interest at the rate of 4% per annum, find x",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "27"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "4",
      "C": "12",
      "D": "27"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The formula for calculating simple interest is: \\(\\text{Simple Interest (SI)}={\\text{Principal (P)}×\\text{Rate (R)}×\\text{Time (T)}\\over100}\\) Simple Interest (SI) = Principal (P) × Rate (R) × Time (T) In this case, the principal (P) is ₦225.00, the rate (R) is 4% per annum, and the interest earned (SI) is ₦27.00. We need to solve for time (T). Rearrange the formula to solve for T: \\(\\text{Time (T)}={\\text{Simple Interest (SI)}×100\\over{\\text{Principal (P)}×\\text{Rate (R)}}}\\) Substitute the given values: \\(T={₦27.00×100\\over₦225.00×4}\\)\\(T={₦27×25\\over₦225}={₦27\\over₦9}\\) Time (T) = 3",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1993,
      1995
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1993, 1995"
  },
  {
    "id": 95,
    "questionNumber": 95,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Ratio, Proportions & Rates",
    "year": 2022,
    "difficulty": "Hard",
    "text": "Three boys shared some oranges. The first received <sup>1</sup>/<sub>3</sub> of the oranges and the second received <sup>2</sup>/<sub>3</sub> of the remaining. If the third boy received the remaining 12 oranges, how many oranges did they share",
    "options": [
      {
        "key": "A",
        "text": "40"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "70"
      },
      {
        "key": "D",
        "text": "80"
      }
    ],
    "optionsMap": {
      "A": "40",
      "B": "30",
      "C": "70",
      "D": "80"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Let's denote the total number of biscuits as \"\" We'll break down the information given step by step to solve forThe first boy received \\(3\\over8\\) of the biscuits.This means the first boy received \\(({3\\over8})\\) × B biscuits.The second boy received \\(4\\over5\\) of the remainder.The remainder after the first boy received his share is:\\((1-{3\\over8})×B=({5\\over8})×B\\) biscuits.The second boy received \\({4\\over5}×{5\\over8}={1\\over2}B\\) biscuits.The third boy got 5 biscuits.Now, we can set up an equation to represent the sharing of biscuits:\\({3\\over8}B+{1\\over2}B+5=B\\)Multiply through with the LCM of the denominators (8)\\(\\implies3B+4B+40=8B\\)Collect like terms:8B - 3B - 4B =40B = 40So, there were a total of 40 biscuits shared among the three boys.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 96,
    "questionNumber": 96,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Ratio, Proportions & Rates",
    "year": 1985,
    "difficulty": "Easy",
    "text": "The ratio of the length of two similar rectangular blocks is 2 : 3. If the volume of the larger block is 351cm <sup>3</sup> , then the volume of the other block is",
    "options": [
      {
        "key": "A",
        "text": "234.00 cm <sup>3</sup>"
      },
      {
        "key": "B",
        "text": "526.50 cm <sup>3</sup>"
      },
      {
        "key": "C",
        "text": "166.00 cm <sup>3</sup>"
      },
      {
        "key": "D",
        "text": "687 cm <sup>3</sup>"
      }
    ],
    "optionsMap": {
      "A": "234.00 cm <sup>3</sup>",
      "B": "526.50 cm <sup>3</sup>",
      "C": "166.00 cm <sup>3</sup>",
      "D": "687 cm <sup>3</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\" 234.00 cm <sup>3</sup> \". Let x represent total vol. 2 : 3 = 2 + 3 = 5 \\(\\frac{3}{5}x = 351 \\) \\(x = \\frac{351 \\times 5}{3} \\) = 585 Volume of smaller block \\(= \\frac{2}{5} \\times 585\\) \\(= 234.00cm^3\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1985,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2021"
  },
  {
    "id": 97,
    "questionNumber": 97,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Profit & Loss Percent",
    "year": 1980,
    "difficulty": "Medium",
    "text": "When a dealer sells a bicycle for ₦81 he makes a profit of 8%. What did he pay for the bicycle?",
    "options": [
      {
        "key": "A",
        "text": "₦73"
      },
      {
        "key": "B",
        "text": "₦74.52"
      },
      {
        "key": "C",
        "text": "₦75"
      },
      {
        "key": "D",
        "text": "₦75.52"
      }
    ],
    "optionsMap": {
      "A": "₦73",
      "B": "₦74.52",
      "C": "₦75",
      "D": "₦75.52"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Let cost price = C Selling price = C + 8% of C = 1.08C 1.08C = 81 \\(C = \\frac{81}{1.08}\\) C = 75",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      1983
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 1983"
  },
  {
    "id": 98,
    "questionNumber": 98,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Profit & Loss Percent",
    "year": 1983,
    "difficulty": "Hard",
    "text": "When a dealer sells a bicycle for ₦81 he makes a profit of 8%. What did he pay for the bicycle?",
    "options": [
      {
        "key": "A",
        "text": "₦73"
      },
      {
        "key": "B",
        "text": "₦74.52"
      },
      {
        "key": "C",
        "text": "₦75"
      },
      {
        "key": "D",
        "text": "₦87.48"
      }
    ],
    "optionsMap": {
      "A": "₦73",
      "B": "₦74.52",
      "C": "₦75",
      "D": "₦87.48"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Selling price = <span> ₦81 </span> Cost price = ? percentage profit = 8% \\(\\mathsf{{selling\\space price\\over cost\\space price}={108\\over100}}\\)\\(\\implies\\mathsf{cost\\space price={selling\\space price\\times100\\over108}={8\\times100\\over108}}\\) Cost price = ₦75",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      1983
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 1983"
  },
  {
    "id": 99,
    "questionNumber": 99,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Shares • Vat • Commissions",
    "year": 2025,
    "difficulty": "Easy",
    "text": "A company declares a dividend of ₦3.50 per share. If an investor owns 2,000 shares and the dividend is subject to a 7.5% VAT, how much will the investor receive after the tax deduction?",
    "options": [
      {
        "key": "A",
        "text": "₦6,475"
      },
      {
        "key": "B",
        "text": "₦6,500"
      },
      {
        "key": "C",
        "text": "₦6,525"
      },
      {
        "key": "D",
        "text": "₦6,550"
      }
    ],
    "optionsMap": {
      "A": "₦6,475",
      "B": "₦6,500",
      "C": "₦6,525",
      "D": "₦6,550"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "₦6,475Total Dividend2,000 shares×₦3.50=₦7,0002. VAT Deduction (7.5%)7.5% of ₦7,000 = 0.075×7,000=₦5253. Net Amount Received₦7,000−₦525=₦6,475The investor will receive ₦6,475.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2025
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2020, 2025)"
  },
  {
    "id": 100,
    "questionNumber": 100,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Simple & Compound Interest",
    "year": 2020,
    "difficulty": "Medium",
    "text": "If N225.00 yields N27.00 in x years simple interest at the rate of 4% per annum, find x.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "17"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "4",
      "C": "12",
      "D": "17"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To find the number of years (x) it takes for N225.00 to yield N27.00 in simple interest at a rate of 4% per annum, we can use the following formula for simple interest: Simple Interest (SI) = Principal (P) × Rate (R) × Time (T) We are given: Principal (P) = N225.00 Simple Interest (SI) = N27.00 Rate (R) = 4% per annum We need to find the Time (T) in years. Rearranging the formula to solve for T, we get: \\(T = \\frac {SI}{P \\times R}\\) Substituting the given values: \\(T = \\frac {27.00}{(225.00 \\times 4/100)}\\)\\(T = \\frac {27.00}{9}\\) T = 3 years",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 101,
    "questionNumber": 101,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Simple & Compound Interest",
    "year": 2020,
    "difficulty": "Hard",
    "text": "Find the simple interest rate percent annum at which N1000 accumulates to N1240 in 3 years.",
    "options": [
      {
        "key": "A",
        "text": "6%"
      },
      {
        "key": "B",
        "text": "8%"
      },
      {
        "key": "C",
        "text": "10%"
      },
      {
        "key": "D",
        "text": "12%"
      }
    ],
    "optionsMap": {
      "A": "6%",
      "B": "8%",
      "C": "10%",
      "D": "12%"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To find the simple interest rate percent annum at which N1000 accumulates to N1240 in 3 years, we can use the formula for simple interest: Simple Interest (SI) = Principal (P) x Rate (R) x Time (T) Where : <ul> <li>P = N1000 (initial principal amount) .</li> <li>SI = N240 (difference between final and initial amount). (1240 - 1000)</li> <li>T = 3 years (time period) .</li> </ul> We need to solve for the rate (R). Rearrange the formula to isolate R: \\(R = {S.I \\over P \\times T}\\) Substitute the known values: \\(R = {N240 \\over N 1000 \\, \\times \\, 3 \\,years}\\) Calculate the rate: \\(R = {N240 \\over N3000}\\) R = 0.08 (expressed as a decimal) Convert the decimal rate to a percentage: R = 0.08 x 100% R = 8%",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 102,
    "questionNumber": 102,
    "subject": "Mathematics",
    "topic": "Financial Maths",
    "subtopic": "Ratio, Proportions & Rates",
    "year": 2007,
    "difficulty": "Easy",
    "text": "₦140,000 is shared between Abu, Kayode and Uche. Abu has twice as much as Kayode and Kayode has twice as much as Uche. What is Kayode's share?",
    "options": [
      {
        "key": "A",
        "text": "₦80,000"
      },
      {
        "key": "B",
        "text": "₦40,000"
      },
      {
        "key": "C",
        "text": "₦20,000"
      },
      {
        "key": "D",
        "text": "₦10,000"
      }
    ],
    "optionsMap": {
      "A": "₦80,000",
      "B": "₦40,000",
      "C": "₦20,000",
      "D": "₦10,000"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Given: 1. The amount shared = ₦140,000 2. Abu = 2 × kayode 3. Kayode = 2 × Uche Kayode's share is unknown 140,000 = Abu's share + kayode's + uche's ₦140,000 = 2 x Kaode’s + kayode’s + \\(\\frac{kayode's}{2}\\) ₦140,000 = 3.5 × kayode's Kayode's share = ₦140,000/3.5 = ₦40,000 Further Explanation Let's use variables to represent the shares of each person: Let U represent Uche's share. Since Kayode has twice as much as Uche, we can represent Kayode's share as 2U. And since Abu has twice as much as Kayode, we can represent Abu's share as 2(2U) = 4U. Now, we know that the total amount shared is ₦140,000. So we can write an equation based on the sum of their shares: U + 2U + 4U = ₦140,000 Combine like terms: 7U = ₦140,000 Now, we need to solve for Uche's share (U). To do that, divide both sides by 7: \\(U =\\frac{₦140,000}{7}\\) U = ₦20,000 So, Uche's share is ₦20,000. Now, you wanted to find Kayode's share, which is twice as much as Uche's: Kayode's share = 2U = 2 × ₦20,000 = ₦40,000",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 103,
    "questionNumber": 103,
    "subject": "Mathematics",
    "topic": "Vectors & Transform",
    "subtopic": "Vectors",
    "year": 1978,
    "difficulty": "Medium",
    "text": "The vectors a and b are given in terms of two perpendicular units vectors i and j on a plane by a = 2i - 3j, b = -i + 2j. Find the magnitude of the vector a + 3b",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "√10"
      },
      {
        "key": "D",
        "text": "35"
      }
    ],
    "optionsMap": {
      "A": "2",
      "B": "4",
      "C": "√10",
      "D": "35"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The topic this question belongs to is Vector Algebra . Problem: The vectors a and b are given in terms of two perpendicular unit vectors i and j on a plane by a = 2i - 3j, b = -i + 2j. Find the magnitude of the vector a + 3b. Solution:<ol><li> Calculate 3b: 3b = 3(-i + 2j) = -3i + 6j </li><li> Calculate a + 3b: a + 3b = (2i - 3j) + (-3i + 6j) = -i + 3j </li><li> Find the magnitude of a + 3b: The magnitude of a vector -i + 3j is found using the Pythagorean theorem: Magnitude = √((-1)^2 + 3^2) = √(1 + 9) = √10 </li></ol> Answer: The magnitude of the vector a + 3b is √10.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1973,
      1978
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1973, 1978)"
  },
  {
    "id": 104,
    "questionNumber": 104,
    "subject": "Mathematics",
    "topic": "Vectors & Transform",
    "subtopic": "Vectors",
    "year": 2018,
    "difficulty": "Hard",
    "text": "A. If x = ⅔ , y = -5/2 and z = -4/13 find scalars p and q that px + qy = z Bi. Using a scale of 2cm to 2 units on both axes, draw on a graph paper two perpendicular axes 0x and 0y for -5 ≤ x ≤ 5, -5 ≤ y ≤ 5 respectively Bii. Draw, on the graph paper, indicating clearly the vertices and their coordinates, the quadrilateral WXYZ with W(2, 3), X(4, -1), Y(-3, -4) and Z(-3, 2) Biii. Draw, on the graph paper, indicating clearly the vertices and their coordinates, the image W1 X1 Y1 Z1 of the quadrilateral WXYZ under an anticlockwise rotation of 90° about the origin where W → W1, X → X1, Y → Y1 and Z → Z1.",
    "options": [
      {
        "key": "A",
        "text": "A. P = 3 and q = -2"
      },
      {
        "key": "B",
        "text": "Bi. Bii. Biii."
      }
    ],
    "optionsMap": {
      "A": "A. P = 3 and q = -2",
      "B": "Bi. Bii. Biii.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Vectors.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 105,
    "questionNumber": 105,
    "subject": "Mathematics",
    "topic": "Vectors & Transform",
    "subtopic": "Vectors",
    "year": 1979,
    "difficulty": "Easy",
    "text": "The area under the speed time graph given the total distance covered by car. What is the average velocity to two places of decimals?",
    "imageUrl": "/diagrams/mathematics_q105_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "17.72 meter/sec."
      },
      {
        "key": "B",
        "text": "21.67 meters/sec"
      },
      {
        "key": "C",
        "text": "2.5 meter/sec."
      },
      {
        "key": "D",
        "text": "20.45 meters/sec."
      }
    ],
    "optionsMap": {
      "A": "17.72 meter/sec.",
      "B": "21.67 meters/sec",
      "C": "2.5 meter/sec.",
      "D": "20.45 meters/sec."
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Time(sec) areas of the three sides are \\(\\frac{1}{2} \\times 2 \\times 20 = 20 \\times 2 = 40\\)\\(\\frac{1}{2} \\times 4 \\times 20 = 40 \\) 40 + 40 = 80 \\(vel. = \\frac{80}{4} \\) 20 + 0.45 = 20.45 meter/sec.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 106,
    "questionNumber": 106,
    "subject": "Mathematics",
    "topic": "Vectors & Transform",
    "subtopic": "Vectors",
    "year": 1978,
    "difficulty": "Medium",
    "text": "A force of 5 units acts on a particle in the direction to the east and another force of 4 units acts on the particle in the direction north-east. The resultants of the two forces is",
    "options": [
      {
        "key": "A",
        "text": "\\((\\sqrt{3}) units\\)"
      },
      {
        "key": "B",
        "text": "3 units"
      },
      {
        "key": "C",
        "text": "\\((\\sqrt{41 + 20 \\sqrt{2}})units\\)"
      },
      {
        "key": "D",
        "text": "\\((\\sqrt{41 - 20 \\sqrt{2}}) units\\)"
      }
    ],
    "optionsMap": {
      "A": "\\((\\sqrt{3}) units\\)",
      "B": "3 units",
      "C": "\\((\\sqrt{41 + 20 \\sqrt{2}})units\\)",
      "D": "\\((\\sqrt{41 - 20 \\sqrt{2}}) units\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "This question belongs to the topic of Vectors , specifically dealing with the addition of vectors . Vector Representation:",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 107,
    "questionNumber": 107,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Sets",
    "year": 2003,
    "difficulty": "Hard",
    "text": "Given: U = {Even numbers between 0 and 30} P = {Multiples of 6 between 0 and 30} Q = {Multiples of 4 between 0 and 30}. Find (PuQ)c",
    "options": [
      {
        "key": "A",
        "text": "{0, 2, 6, 22, 26}"
      },
      {
        "key": "B",
        "text": "{2, 10, 14, 22, 26}"
      },
      {
        "key": "C",
        "text": "{0, 10, 14, 22, 26}"
      },
      {
        "key": "D",
        "text": "{2, 4, 14, 18, 26}"
      }
    ],
    "optionsMap": {
      "A": "{0, 2, 6, 22, 26}",
      "B": "{2, 10, 14, 22, 26}",
      "C": "{0, 10, 14, 22, 26}",
      "D": "{2, 4, 14, 18, 26}"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "First, let's find the union of sets P and Q, denoted as P∪Q. Then, we'll find the complement of that union, denoted as (P∪Q)c. Set P: Multiples of 6 between 0 and 30 P = {0, 6, 12, 18, 24, 30} Set Q: Multiples of 4 between 0 and 30 Q = {0, 4, 8, 12, 16, 20, 24, 28} Now, find the union of sets P and Q: P∪Q={0,4,6,8,12,16,18,20,24,28,30} Next, find the complement of the union (P∪Q)c: The universal set U consists of even numbers between 0 and 30. U={0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30} The complement ((P∪Q)c will consist of the elements in the universal set U that are not in the union P∪Q: (P∪Q)c={2,10,14,22,26}",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2003,
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2015, 2016"
  },
  {
    "id": 108,
    "questionNumber": 108,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Sets",
    "year": 2016,
    "difficulty": "Easy",
    "text": "Given: U = {Even numbers between 0 and 30} P = {Multiples of 6 between 0 and 30} Q = {Multiples of 4 between 0 and 30} Find: \\((P \\cup Q)^c \\)",
    "options": [
      {
        "key": "A",
        "text": "{0, 10, 14, 22, 16}"
      },
      {
        "key": "B",
        "text": "{2, 10, 14, 22, 26}"
      },
      {
        "key": "C",
        "text": "(2, 4, 14, 18, 26}"
      },
      {
        "key": "D",
        "text": "{0, 2, 6, 22, 26}"
      }
    ],
    "optionsMap": {
      "A": "{0, 10, 14, 22, 16}",
      "B": "{2, 10, 14, 22, 26}",
      "C": "(2, 4, 14, 18, 26}",
      "D": "{0, 2, 6, 22, 26}"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "First, let's find the union of sets P and Q, denoted as P∪ Q. This consists of all elements that are in either set P or set Q or both. P = {0, 6, 12, 18, 24, 30} Q = {0, 4, 8, 12, 16, 20, 24, 28} Now, find the union of P and Q: P∪ Q = {0, 4, 6, 8, 12, 16, 18, 20, 24, 28, 30} Now, to find (P∪ Q)c, you need to consider all the elements in the universal set U = {0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30} that are not in P∪ Q. In other words, find the complement of the union of sets P and Q with respect to the universal set U. (P∪ Q)c = {2, 10, 14, 22, 26} So, (P∪ Q)c is the set {2, 10, 14, 22, 26}.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2003,
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2015, 2016"
  },
  {
    "id": 109,
    "questionNumber": 109,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Venn Diagrams",
    "year": 2021,
    "difficulty": "Medium",
    "text": "A group of market women sell at least one of yam, plantain and maize. 12 of them sell maize, 10 sell yam and 14 sell plantain. 5 sell plantain and maize, 4 sell yam and maize, 2 sell yam and plantain only while 3 sell all the three items. How many women are in the group?",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "19"
      },
      {
        "key": "C",
        "text": "18"
      },
      {
        "key": "D",
        "text": "17"
      }
    ],
    "optionsMap": {
      "A": "25",
      "B": "19",
      "C": "18",
      "D": "17"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Let the three items be M, Y and P. n{M ∩ Y} only = 4-3 = 1 n{M ∩ P) only = 5-3 = 2 n{Y ∩ P} only = 2 n{M} only = 12-(1+3+2) = 6 n{Y} only = 10-(1+2+3) = 4 n{P} only = 14-(2+3+2) = 7 n{M∩P∩Y} = 3 Number of women in the group = 6+4+7+(1+2+2+3) as above =25 women.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2021"
  },
  {
    "id": 110,
    "questionNumber": 110,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Venn Diagrams",
    "year": 2015,
    "difficulty": "Hard",
    "text": "P, Q and R are subsets of the universal set U. The venn diagram showing the relationship.(P∩Q)∪R is",
    "imageUrl": "/diagrams/mathematics_q110_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given:The venn diagrams in the options(P ∩ Q)∪ R = The combination of (the elements that are in both P and Q) and (all the elements in R)→ The Venn diagram that depicts this is<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACkCAMAAABCbSd2AAAAOVBMVEX////v8fHf1t+1tbUjHyJfY2POzs5KTkqRh4yUnJx2eXehqZDk5uL//+8xMTEAAAC9tcVze4yMe2MRfNtWAAAIMklEQVR4Xu2bi3KjuBKG0xfdL5B5/4c9NJEtM8aWZbFZ9pR/sAs8Sbnzzd+tloCvf0kfffTRRx999BGSI4KfY036LADIMHtcD8EZC+eABcTTpEpYVgI8h9w2rJPQSpQXWvpstCDc0PrO/jTeyhtvxY+3nunWW+E83rI3tPx5aGneeuuMtM5jeSq0RDafJiybeVIa0gILT+QtdIbZSw+hQz7PmAjR5YmVBrQ8sXQQZ+KlvDdTFmqnEbjMolJMT8TLe+t9+GGVzoIrwY++/sMC/A1Fef1s5eQ5NdDWe3Xgvr8pecmB7OsRQaNvZM6/tF0OMnOrdjnOPthgD9mDdQ9fy1430xiAwLFC+Dpsk/3RK11/Cj1/P6cVsvn18tZubsBm9e+E1fDWKcMCx6ekFc5Jy/4CLUC9Cs/lLe2NSDl8ORP/+bBAW+Ys8lRGwngCWtpnzpYWWeWg0hrNxHFW7BEWWaUI4QyZWFjplVIkr1wNq1Xl0zVhSNP88waHLYoIq9tv6/UWkDIXKYKjwiqsRMmxir3eAs/TxNnknJn9DActuBl9WyV9t7fA8sSGFlkz8UG8ali1HKUNrZa30F9mvDFk5rCh+g4pedulFf/0eOs6EU9Ihu0xtIyh60kSWr0dRPy+rg+gy9ltAaCmqzRUHA2mxNkhyK9rAFI/lo/d3vqG9cgwO7j9tqRVNpfNYg2hXSCyFAhSFskwX2nFZgeRaiayEhputXwt1OtnylzlSSQQWkpa8cqLvHeK2bi3MnHinM1fBUJ7qRkm6HmRvJEVZjlsmZUTqNt6imXw0dbwZAjLJYM/L3cQ4KdpYrPqhtX8w8nqyoBWcj4UYhXqVjOU4WfKgUjxNBmHhdZ3XyYq0vOy6VtWYf1kM/7qWZMVYhdckFDON1Ia1nBtZinR8kdnC71VPi602G5pCiuv90kLM8IrKefNX1KOSIqyrra8DtW2PxOrEnol3Ku2zDRC+iqpa6wwvNFMSojVplmEqbeDiKWctllVIWlhJaQU7TXL3u40I9H3VnkPG1YmaHjqARNQWFmt76EmRO2Muourt4MQb8GW1dxoEJR35HwldU9MuXlLpr9ubcJCbxymxnA8S5p5jQ95Rmu2Puiu8qRulsOAWr6qeWLl6Bkv2rDpHBMBUeOG1XPSdXyPT6ACusprcJ4I5Lywakk7M5Xi/ZSXJRhasamsbJtVQpd5WpQdfLV49Wbinq3R5ND2lbBaxTY1pmXeztDrrXuhYteEBSHzJSxsYTUeB1cD009YL2VhoWVcw4hSH8e9pVUOLVogo1UR5+dwgaSfSGPeAgre6qazyv/hS+6arbcEY95Cn9t5CDZPVWzhBXd1Vfkdw+e2s1LgjrC2o++7tJ7nIYii3Q+r/U3pJW/FPVphl+21tntrvZluxKFFy9Zvij63ad17Oyq2sBsQQARc1wL4yqrSSs1chBLiwd5C5+23vXDq8VbSkotDa6cotPYchVQ49YYlii57HLmKIbTSHilveNoXF7yt7xqqWyrf0QIkI5weiD02cQVWr9Ky+2Gxu2clpB6rTLtbudjlrTatSGZ6LrbCCxqGGRkThVbqYlV4tX080kHEa29afTW19XBoKAyD8XGklwey3uouViIOrcafYLQ7zQ52fNV210NBROifJ26FptZ5tG1W7WyE2V79GgdmPgQX9oXVGC+g3G5s2vNEunqr2r0t4x/xgjDcb4kAEIQXFGd18IJGzvddxdgqOq+rs0Z5jXen1V0BoTirR0wL4v2ZdRzp5euKjdXvhOX2rmiQV2GG0UwU6bW9mftpPWCFnSs2aZ8kGqY3aGXaIS9rgun1WXV6Qgu9sVrbblpW313boDpjaGeiyD4MqywgG+4NK3t9X7PMrVXin6Er++jLdH7MXVtn9a3L7/OqE/pud8FtFjqd/l47TQN3jWgzTAv0lVWllZvd6fFh5duwYJaKtWURO675HEgrVFIatNr6qrvfOp7W7D2inlPjKsZveatc9JxDHbgH1uUPpIXeLFKb0jq60lxdgN+Z+2l5oqCyybusjvAWYMhv4MpGuXnRHauBDmLUXWwWqV1OQ718VXojLLZyVwLCP3nf6XttYEtv9/JV81C/ta/4+7SypyNo8bFhsdU78I/PRLSGB5w1kImpEVfurPANjfTy22vzfJCzxnv5KkCXe5ZG2op/8ndHJg7bvqxttgTf7GFgTCwiMzB1Ha1b49mYPR33dEFsU4+v9BHMFg98FkN/tYVWqefEslKefvs5H0B8no9sESP87nM+1WG9rhrvt9p6zIu/S72CGy1ng5k4xktYpctanbU2WBHhYAeRXo8rMC9slq2IZWN/cxO5KOfMbAgO6iDaKg9/elOyzy+6yUBUCzujvPKGWT3kdfxzPhFX2SzUvJZjsVGRXsLKLmIEMsxGH99BtKl5cdRWQovXTyMZzvR2gSi9fK8AMKJQug8rE5S2w8zDmTiuSqvc/8iGBnv5cVVvsYsAsXjrRLTMmp7MKqCQeZdWPDasiVdNmfAkz76mQsuut+zT0Jh4tLeyAyAjtGBkTDTHZ+Kah2wCnicTyxqE8DI0MiYeTcvBpW7Nb9Nyh9LC1VOlx8mZ4jmeq0ZTJ2WzYeP0KZ6rRs/XIUdLRdWPvZV+z1tAzlIhhBQs4QNauevq67gS1MNndcs2wjrnM/uBDaHWB+2y1YNytn2tu2rWLWajVpnufV/m8o9Gjsx6Ul+rDLdokcnHidlwfkXcuu0dyQUXQnCyUeh6326L3KL6Cd28b3+HAunXTFjeut7lBCT3difQkOqPbn4TJFv/D/TRRx999D+ABfIkWqN/QAAAAABJRU5ErkJggg==\" style=\"height:164px; width:150px\"/>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2015"
  },
  {
    "id": 111,
    "questionNumber": 111,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Sets",
    "year": 2018,
    "difficulty": "Easy",
    "text": "In a class of 40 students, 32 offer Mathematics, 24 offer Physics and 4 offer neither Mathematics nor Physics. How many offer both Mathematics and Physics?",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "16"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "optionsMap": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "20"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "20 We are given:<ul><li> Total number of students = 40 .</li><li> Students who offer Mathematics = 32 </li><li> Students who offer Physics = 24 </li><li> Students who offer neither = 4 </li></ul> We need to find how many students offer both Mathematics and Physics . Let: <ul><li> x= number of students who offer both Mathematics and Physics. </li></ul> Then: <ul><li> Students who offer only Mathematics = 32−x </li><li> Students who offer only Physics = 24−x </li></ul> Now add: <ul><li> Only Maths + Only Physics + Both + Neither = Total .</li></ul> (32 - x) + (24 - x) + x + 4 = 40 Simplify: 32 - x + 24 - x + x + 4 = 40 ⇒ 60 - x = 40 ⇒ x = 20",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2018, 2020"
  },
  {
    "id": 112,
    "questionNumber": 112,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Sets",
    "year": 2020,
    "difficulty": "Medium",
    "text": "In a class of 40 students, 32 offer mathematics, 24 offer physics and 4 offer neither mathematics nor physics. How many offer both mathematics and physics?",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "16"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "optionsMap": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "20"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "<ol><li> Total Students Offering at Least One Subject:<ul><li> Total students = 40 .</li><li> Students offering neither = 4 .</li><li> Students offering at least one subject = Total students - Students offering neither .</li><li> Students offering at least one subject = 40 - 4 = 36 .</li></ul></li><li> Set up Variables:<ul><li> Let M = number of students offering mathematics = 32 .</li><li> Let P = number of students offering physics = 24 .</li><li> Let B = number of students offering both mathematics and physics (what we need to find) .</li></ul></li><li> Apply the Inclusion-Exclusion Principle:<ul><li> The number of students offering at least one subject is given by: <ul><li> M + P - B = Total students offering at least one subject .</li><li> 32 + 24 - B = 36 .</li></ul></li></ul></li><li> Solve for B:<ul><li> 56 - B = 36 .</li><li> B = 56 - 36 .</li><li> B = 20 .</li></ul></li></ol>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2018, 2020"
  },
  {
    "id": 113,
    "questionNumber": 113,
    "paperType": "Theory",
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Venn Diagrams",
    "year": 2017,
    "difficulty": "Hard",
    "text": "Out of 120 customers in a shop, 45 bought both bags and shoes. If all the customers bought either bags or shoes and 11 more customers bought shoes than bags:(a) Illustrate the this information in a diagram;(b) find the number of customers who bought shoes;(c) calculate the probability that a customer selected at random bought bags.",
    "options": [
      {
        "key": "A",
        "text": "A. Before we put anything in the diagram above, let us analyse the information given in the question.U = 120(S∪ B) = U = 120(S∪ B)c =∅S ∩ B = 45S = S<sub>o</sub> + S ∩ B --------------- (1) B = B<sub>o</sub> + S ∩ B ------------ (2)S = B + 11 ------------------ (3)S = S<sub>o</sub> + 45 ----------------(1) B = B<sub>o</sub> + 45 ---------------- (2)S = B + 11 ------------------------ (3)substitute for (3) in (1) B + 11 = S<sub>o</sub> + 45S<sub>o</sub> = B - 34 B<sub>o</sub> = B - 45 {from (2)}",
    "imageUrl": "/diagrams/mathematics_q46972_img1.png"
      },
      {
        "key": "B",
        "text": "B. To find the number of customers who bought shoes.From what we have in the diagram:U = (S ∪ B) = S + B - (S ∩ B)120 = (B - 34) + (45) + (B - 45)120 = B - 34 + B154 = 2B B = 77S = B + 11 = 77 + 11 = 88 88 customers bought shoes."
      },
      {
        "key": "C",
        "text": "C. Probability that a customer selected at random bought bags.\\(\\text{P(bags)}=\\frac{\\text{Number of customers who bought bags}}{\\text{Total number of customers}}\\)\\(= \\frac{77}{120}\\)"
      }
    ],
    "optionsMap": {
      "A": "A.<img src=\"data:image/png;base64,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\" style=\"height:229px; width:300px\"/> Before we put anything in the diagram above, let us analyse the information given in the question.U = 120(S∪ B) = U = 120(S∪ B)c =∅S ∩ B = 45S = S<sub>o</sub> + S ∩ B --------------- (1) B = B<sub>o</sub> + S ∩ B ------------ (2)S = B + 11 ------------------ (3)S = S<sub>o</sub> + 45 ----------------(1) B = B<sub>o</sub> + 45 ---------------- (2)S = B + 11 ------------------------ (3)substitute for (3) in (1) B + 11 = S<sub>o</sub> + 45S<sub>o</sub> = B - 34 B<sub>o</sub> = B - 45 {from (2)}",
      "B": "B. To find the number of customers who bought shoes.From what we have in the diagram:U = (S ∪ B) = S + B - (S ∩ B)120 = (B - 34) + (45) + (B - 45)120 = B - 34 + B154 = 2B B = 77S = B + 11 = 77 + 11 = 88 88 customers bought shoes.",
      "C": "C. Probability that a customer selected at random bought bags.\\(\\text{P(bags)}=\\frac{\\text{Number of customers who bought bags}}{\\text{Total number of customers}}\\)\\(= \\frac{77}{120}\\)",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Venn Diagrams.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 114,
    "questionNumber": 114,
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Venn Diagrams",
    "year": 2003,
    "difficulty": "Easy",
    "text": "Use the Venn diagram to answer this question Find Q' ∩ R.",
    "imageUrl": "/diagrams/mathematics_q114_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "{e}"
      },
      {
        "key": "B",
        "text": "{c, h}"
      },
      {
        "key": "C",
        "text": "{c, g, h}"
      },
      {
        "key": "D",
        "text": "{c, e, g, h}"
      }
    ],
    "optionsMap": {
      "A": "{e}",
      "B": "{c, h}",
      "C": "{c, g, h}",
      "D": "{c, e, g, h}"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Q ∩ R is {c,g,h}",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 115,
    "questionNumber": 115,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Integration",
    "year": 2005,
    "difficulty": "Medium",
    "text": "\\(Evaluate \\; \\int_0^{\\pi \\over 2} sin2x{d}x \\)",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "\\(- {1 \\over 2}\\)"
      },
      {
        "key": "D",
        "text": "-1"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "0",
      "C": "\\(- {1 \\over 2}\\)",
      "D": "-1"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Detailed<ol><li> Find the Antiderivative: The antiderivative of sin(2x) is found using the following rule: \\(​ ∫ sin(ax) dx = - (\\frac1a) cos(ax) + C ​\\)</li></ol> Where C is the constant of integration. In our case, a = 2, so the antiderivative is: \\(​ ∫ sin(2x) dx = - (\\frac12) cos(2x) + C ​\\)<ol start=\"2\"><li> Apply the Fundamental Theorem of Calculus: The definite integral is evaluated as follows: <span class=\"mathjax-latex\">\\(​ ∫[a, b] f(x) dx = F(b) - F(a) ​\\)</li></ol> Where F(x) is the antiderivative of f(x). <ol start=\"3\"><li> Evaluate the Antiderivative at the Limits: Substitute the upper and lower limits of integration into the antiderivative and subtract: </li></ol>\\(​ [- (\\frac12) cos(2x)] \\;evaluated \\;from \\;0 \\;to \\;\\fracπ2 \\\\ = [- (\\frac12) cos(2 \\times \\fracπ2)] - [- (\\frac12) cos(2 \\times 0)] \\\\ = [- (\\frac12) cos(π)] - [- (\\frac12) cos(0)] \\\\ = [- (\\frac12) \\times -1] - [- (\\frac12) \\times 1] \\\\ = \\frac12 + \\frac12 \\\\ = 1 ​\\) The value of the definite integral ∫[0, \\(\\frac π2\\) ] sin(2x) dx is 1 (Option .</span>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2000,
      2005
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2000, 2005)"
  },
  {
    "id": 116,
    "questionNumber": 116,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Area Under Curve",
    "year": 2002,
    "difficulty": "Hard",
    "text": "The slope of the tangent to the curve; y = 3x²– 2x + 5 at the point (1, 6) is?",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "optionsMap": {
      "A": "6",
      "B": "5",
      "C": "4",
      "D": "1"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "y = 3x <sup>2</sup> - 2x + 5 Slope = y' y' = 6x - 2 At point (1, 6), x = 1 y' = 6(1) - 2 y' = 4",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1997,
      2002
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1997, 2002)"
  },
  {
    "id": 117,
    "questionNumber": 117,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Integration",
    "year": 2007,
    "difficulty": "Easy",
    "text": "Determine the value of \\(\\int{^{π\\over2}_0(-2\\cos x)dx}\\)",
    "options": [
      {
        "key": "A",
        "text": "-2"
      },
      {
        "key": "B",
        "text": "-1/2"
      },
      {
        "key": "C",
        "text": "-3"
      },
      {
        "key": "D",
        "text": "-3/2"
      }
    ],
    "optionsMap": {
      "A": "-2",
      "B": "-1/2",
      "C": "-3",
      "D": "-3/2"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given → To determine the value of \\(\\int{^{π\\over2}_0(-2\\cos x)dx}\\) Recall that π = 180⁰; \\(π\\over2\\) = 90⁰ \\(\\int{^{π\\over2}_0(-2\\cos x)dx}\\) = \\(0^{π\\over2} [-2\\sin x]\\) = \\((-2\\sin{90})\\)\\(-(-2\\sin0)\\) = -2 - 0 = -2",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 118,
    "questionNumber": 118,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Integration",
    "year": 2000,
    "difficulty": "Medium",
    "text": "Find the value of \\(\\int^{\\pi}_{0}\\frac{cos^{2}\\theta-1}{sin^{2}\\theta}d\\theta\\)",
    "options": [
      {
        "key": "A",
        "text": "\\(\\pi \\)"
      },
      {
        "key": "B",
        "text": "\\(\\frac {\\pi}{2} \\)"
      },
      {
        "key": "C",
        "text": "- \\(\\frac {\\pi}{2} \\)"
      },
      {
        "key": "D",
        "text": "- \\(\\pi \\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\pi \\)",
      "B": "\\(\\frac {\\pi}{2} \\)",
      "C": "- \\(\\frac {\\pi}{2} \\)",
      "D": "- \\(\\pi \\)"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Correct answer is Option (D). Refer to official syllabus principles under Integration.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 119,
    "questionNumber": 119,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Integration",
    "year": 2006,
    "difficulty": "Hard",
    "text": "Evaluate ʃ¹₋₄ (1 – 2x)dx",
    "options": [
      {
        "key": "A",
        "text": "-16"
      },
      {
        "key": "B",
        "text": "-20"
      },
      {
        "key": "C",
        "text": "20"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "optionsMap": {
      "A": "-16",
      "B": "-20",
      "C": "20",
      "D": "10"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given: ʃ¹₋₄ (1 – 2x)dx ⁰₋₄[x - x²] = (0 –4) – (0 – (-4)²) = 4 – (0 – 16) 4 + 16 = 20",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 120,
    "questionNumber": 120,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Area Under Curve",
    "year": 2017,
    "difficulty": "Easy",
    "text": "Find the area bounded by the curve y = 3x <sup>2</sup> – 2x + 1, the ordinates x = 1 and x = 3 and the x-axis.",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "22"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "optionsMap": {
      "A": "24",
      "B": "22",
      "C": "21",
      "D": "20"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To find the area bounded by the curve y = 3x <sup>2</sup> - 2x + 1, the ordinates x = 1 and x = 3, and the x-axis, you can use definite integration. The area under the curve between the given bounds can be found using the following definite integral: Area = ∫[1 to 3] (3x <sup>2</sup> - 2x + 1) dx Let's compute this integral step by step: Area = [x <sup>3</sup> - x <sup>2</sup> + x] from 1 to 3 Now, substitute the upper and lower bounds: Area = [(3 <sup>3</sup> - 3 <sup>2</sup> + 3) - (1 <sup>3</sup> - 1 <sup>2</sup> + 1)] Area = [(27 - 9 + 3) - (1 - 1 + 1)] Area = [(21) - (1)] Area = 20 So, the area bounded by the curve, the ordinates x = 1 and x = 3, and the x-axis is 20 square units",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 121,
    "questionNumber": 121,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Area Under Curve",
    "year": 1999,
    "difficulty": "Medium",
    "text": "The diagram above is the graph of y = x², the shaded area is",
    "imageUrl": "/diagrams/mathematics_q121_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "64 square units"
      },
      {
        "key": "B",
        "text": "\\({128\\over3}\\text{square units}\\)"
      },
      {
        "key": "C",
        "text": "\\({64\\over3}\\text{square units}\\)"
      },
      {
        "key": "D",
        "text": "32 square units"
      }
    ],
    "optionsMap": {
      "A": "64 square units",
      "B": "\\({128\\over3}\\text{square units}\\)",
      "C": "\\({64\\over3}\\text{square units}\\)",
      "D": "32 square units"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Correct answer is Option (C). Refer to official syllabus principles under Area Under Curve.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 122,
    "questionNumber": 122,
    "subject": "Mathematics",
    "topic": "Integral Calculus",
    "subtopic": "Area Under Curve",
    "year": 1995,
    "difficulty": "Hard",
    "text": "Find the area bounded by the curve y = 3x² - 2x + 1, the ordinates x = 1 and x = 3 and the x-axis.",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "22"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "optionsMap": {
      "A": "24",
      "B": "22",
      "C": "21",
      "D": "20"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To find the area bounded by the curve y = 3x² - 2x + 1, the ordinates x = 1 and x = 3, and the x-axis, we need to compute the definite integral of the curve's positive portion within the given interval [1, 3]. The area can be calculated using the definite integral: Area = ∫[1, 3] (3x² - 2x + 1) dx Let's evaluate this integral step by step: Area = ∫[1, 3] (3x² - 2x + 1) dx = [x³ - x² + x] evaluated from 1 to 3 Now substitute the upper and lower limits: = [(3)³ - (3)² + 3] - [(1)³ - (1)² + 1] = [27 - 9 + 3] - [1 - 1 + 1] = 21 - 1 = 20 square units So, the area bounded by the curve y = 3x² - 2x + 1, the ordinates x = 1 and x = 3, and the x-axis is 20 square units.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 123,
    "questionNumber": 123,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequalities",
    "year": 2024,
    "difficulty": "Easy",
    "text": "For what values of x is \\(\\frac{x - 3}{4} + \\frac{x + 1}{8} ≥ 2\\)",
    "options": [
      {
        "key": "A",
        "text": "x≥5"
      },
      {
        "key": "B",
        "text": "x≥6"
      },
      {
        "key": "C",
        "text": "x≥7"
      },
      {
        "key": "D",
        "text": "x≥8"
      }
    ],
    "optionsMap": {
      "A": "x≥5",
      "B": "x≥6",
      "C": "x≥7",
      "D": "x≥8"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\\(\\frac{x - 3}{4} + \\frac{x + 1}{8} ≥ 2\\) The LCM of the two denominators is 8, so we multiply the inequality by 8 2(x - 3) + x + 1 ≥ 16 2x - 6 + x + 1 ≥ 16 3x ≥ 16 + 6 - 1 3x ≥ 21 ∴ x ≥ 7",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2019,
      2024
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2019, 2024)"
  },
  {
    "id": 124,
    "questionNumber": 124,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequality Graph",
    "year": 2016,
    "difficulty": "Medium",
    "text": "Which of the following number lines illustrates the solution of the inequality \\(4 ≤ \\frac{1}{3}(2x-1) < 5\\)",
    "imageUrl": "/diagrams/mathematics_q124_img1.png",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "optionsMap": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "D"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "\\(4 ≤ \\frac{1}{3}(2x-1) < 5\\) \\(4 ≤ \\frac{1}{3}(2x-1) \\) Or \\(\\frac{1}{3}(2x-1) <5 \\) \\(4 ≤ 2x -\\frac{1}{3}\\) Or \\(2x -\\frac{1}{3}<5\\) 12 ≤ 2x - 1 or 2x - 1 < 15 12 + 1 ≤ 2x or 2x < 15 + 1 13 ≤ 2x or 2x < 16 x ≤ <sup>13</sup>/2 or x < <sup>16</sup>/2 \\(x \\geq 6\\frac{1}{2} \\) orx < 8",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2011, 2016)"
  },
  {
    "id": 125,
    "questionNumber": 125,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Quadratic Inequalities",
    "year": 2007,
    "difficulty": "Hard",
    "text": "Solve the inequality -3(x -2) < -2(x + 3)",
    "options": [
      {
        "key": "A",
        "text": "x > 12"
      },
      {
        "key": "B",
        "text": "x < 12"
      },
      {
        "key": "C",
        "text": "x > -12"
      },
      {
        "key": "D",
        "text": "x < -12"
      }
    ],
    "optionsMap": {
      "A": "x > 12",
      "B": "x < 12",
      "C": "x > -12",
      "D": "x < -12"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To solve the inequality −3(x−2)<−2(x+3), follow these steps: Distribute the constants: Distribute the constants on both sides of the inequality: −3x+6<−2x−6 Group like terms: Combine the like terms on each side: −3x+2x<−6−6 −x<−12 Multiply or divide by a negative number: Since we have a negative coefficient for x (−x), we need to flip the inequality sign when multiplying or dividing by a negative number: x>12 The solution to the inequality −3(x−2)<−2(x+3) is x>12. This means that any value of x greater than 12 will satisfy the inequality.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2007
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2002, 2007)"
  },
  {
    "id": 126,
    "questionNumber": 126,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequalities",
    "year": 1992,
    "difficulty": "Easy",
    "text": "Find all values of x satisfying the inequality -11 \\(\\leq\\) 4 - 3x \\(\\leq\\) 28",
    "options": [
      {
        "key": "A",
        "text": "\\(-5 \\leq x \\leq 8\\)"
      },
      {
        "key": "B",
        "text": "\\(5 \\leq x \\leq 8\\)"
      },
      {
        "key": "C",
        "text": "\\(-8 \\leq x \\leq 5\\)"
      },
      {
        "key": "D",
        "text": "\\(-5 < x \\leq 8\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(-5 \\leq x \\leq 8\\)",
      "B": "\\(5 \\leq x \\leq 8\\)",
      "C": "\\(-8 \\leq x \\leq 5\\)",
      "D": "\\(-5 < x \\leq 8\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To solve -11 ≤4 - 3x ≤28 -11 ≤4 - 3x also 4 -3x ≤28 - 11 - 4≤ - 3x and -3x ≤28 - 4 -15≤ -3x and -3x ≤24 I.e. x ≤5 and x≥ -8 ∴ -8 ≤x ≤5",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 127,
    "questionNumber": 127,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequalities",
    "year": 2019,
    "difficulty": "Medium",
    "text": "Solve the inequality: -7 ≤ 9 - 8x < 16 - x",
    "options": [
      {
        "key": "A",
        "text": "-1 ≤ x ≤ 2"
      },
      {
        "key": "B",
        "text": "-1 < x ≤ 2"
      },
      {
        "key": "C",
        "text": "-1 ≤ x < 2"
      },
      {
        "key": "D",
        "text": "-1 < x < 2"
      }
    ],
    "optionsMap": {
      "A": "-1 ≤ x ≤ 2",
      "B": "-1 < x ≤ 2",
      "C": "-1 ≤ x < 2",
      "D": "-1 < x < 2"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To solve the compound inequality -7 ≤ 9 - 8x < 16 - x, you need to solve each part separately: Solve the left part of the inequality: -7 ≤ 9 - 8x First, subtract 9 from both sides: -7 - 9 ≤ -8x -16 ≤ -8x Now, divide both sides by -8, but remember that when you divide by a negative number, you need to reverse the inequality sign: 2 ≥ x So, the solution to the left part of the inequality is x ≤ 2. Solve the right part of the inequality: 9 - 8x < 16 - x First, add x to both sides: 9 - 8x + x < 16 9 - 7x < 16 Next, subtract 9 from both sides: -7x < 16 - 9 -7x < 7 Now, divide both sides by -7, but remember to reverse the inequality sign because you're dividing by a negative number: x > -1 So, the solution to the right part of the inequality is x > -1. Now, combine the solutions for both parts of the inequality: x ≤ 2 and x > -1 These two conditions can be combined as -1 < x ≤ 2. So, the solution to the original compound inequality -7 ≤ 9 - 8x < 16 - x is: -1 < x ≤ 2",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 128,
    "questionNumber": 128,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequalities",
    "year": 1991,
    "difficulty": "Hard",
    "text": "Find the range of values of x which satisfy the inequality \\(\\frac 12\\) + \\(\\frac 13\\) + \\(\\frac 14\\) < 1",
    "options": [
      {
        "key": "A",
        "text": "x < <sup>12</sup>/13"
      },
      {
        "key": "B",
        "text": "x < 13"
      },
      {
        "key": "C",
        "text": "x < 9"
      },
      {
        "key": "D",
        "text": "<sup>12</sup>/13"
      }
    ],
    "optionsMap": {
      "A": "x < <sup>12</sup>/13",
      "B": "x < 13",
      "C": "x < 9",
      "D": "<sup>12</sup>/13"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\frac 12\\)<span> + </span>\\(\\frac 13\\)<span> + </span>\\(\\frac 14\\)<span> < 1 </span> = \\(\\frac {(6x+4x+3x<12)} {12}\\) I.e. 13 x < 12 = x < \\(\\frac {12}{13}\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 129,
    "questionNumber": 129,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequality Graph",
    "year": 2006,
    "difficulty": "Easy",
    "text": "The solution set of the shaded area above is",
    "imageUrl": "/diagrams/mathematics_q129_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "y ≥ 0, y ≥ x and y + x ≤ 4"
      },
      {
        "key": "B",
        "text": "y ≤ x, y + x ≤ 4"
      },
      {
        "key": "C",
        "text": "y + x ≥ 4, y ≤ x"
      },
      {
        "key": "D",
        "text": "y ≤ x, y + x ≤ 4 and y ≥ 0"
      }
    ],
    "optionsMap": {
      "A": "y ≥ 0, y ≥ x and y + x ≤ 4",
      "B": "y ≤ x, y + x ≤ 4",
      "C": "y + x ≥ 4, y ≤ x",
      "D": "y ≤ x, y + x ≤ 4 and y ≥ 0"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "y = x implies y ≤ x y + x = 4 implies y = 4 – x y = 4 – x ∴ y ≤ x, y + x ≤ 4 and y ≥ 0",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 130,
    "questionNumber": 130,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequality Graph",
    "year": 1982,
    "difficulty": "Medium",
    "text": "If the function y = 5x is graphed, what would be its intercept on the y-axis?",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "<sup>1</sup>/5"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "optionsMap": {
      "A": "5",
      "B": "<sup>1</sup>/5",
      "C": "1",
      "D": "2"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\"zero\". This question belongs to the topic of Coordinate Geometry, specifically focusing on linear functions and their graphs. <ol><li> Understanding Intercepts:<ul><li> y-intercept: The point where a graph crosses the y-axis. At this point, the x-coordinate is always 0. </li><li> x-intercept: The point where a graph crosses the x-axis. At this point, the y-coordinate is always 0. </li></ul></li><li> Given Function: We have the linear function y = 5x. </li><li> Finding the y-intercept:<ul><li> To find the y-intercept, substitute x = 0 into the equation. .</li><li> y = 5(0) .</li><li> y = 0 .</li></ul></li><li> Interpreting the Result:<ul><li> The y-intercept is 0. This means the graph of the function y = 5x passes through the origin (0,0). .</li></ul></li></ol> Answer: ( zero.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 131,
    "questionNumber": 131,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Inequality Graph",
    "year": 2008,
    "difficulty": "Hard",
    "text": "Which of the number lines below best represents the inequality -3 ≥ x ≤ 4?",
    "imageUrl": "/diagrams/mathematics_q131_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "optionsMap": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "D"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "This best represents the inequality −3 ≤ x < 4:<ul><li> The shaded point at −3 means x = −3 .</li><li> The line extends to the right, showing x ≥ −3 .</li><li> The open (unshaded) point at 4 means x < 4 (since the line stops at 4). </li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 132,
    "questionNumber": 132,
    "subject": "Mathematics",
    "topic": "Inequality",
    "subtopic": "Quadratic Inequalities",
    "year": 2012,
    "difficulty": "Easy",
    "text": "Solve the Inequality: \\(\\frac{-m}{2}-\\frac{5}{4} \\leq \\frac{5m}{12}-\\frac{7}{6}\\)",
    "options": [
      {
        "key": "A",
        "text": "\\(m\\geq{5\\over4}\\)"
      },
      {
        "key": "B",
        "text": "\\(m\\leq{5\\over4}\\)"
      },
      {
        "key": "C",
        "text": "\\(m\\geq-{1\\over11}\\)"
      },
      {
        "key": "D",
        "text": "\\(m\\leq-{1\\over11}\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(m\\geq{5\\over4}\\)",
      "B": "\\(m\\leq{5\\over4}\\)",
      "C": "\\(m\\geq-{1\\over11}\\)",
      "D": "\\(m\\leq-{1\\over11}\\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\\(\\frac{-m}{2} - \\frac{5}{4} \\leq \\frac{5m}{12} - \\frac{7}{6}\\) Cross multiply Multiply by the lcm of the denominators (12) \\(12(\\frac{-m}{2}) -12( \\frac{5}{4}) \\leq 12(\\frac{5m}{12}) - 12(\\frac{7}{6})\\) 6m - 15 ≤ 5m - 14 Collect like terms: 6m - 5m ≤ - 14 + 15 11m ≤ 1 \\(m\\geq-{1\\over11}\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 133,
    "questionNumber": 133,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Differentiation",
    "year": 2024,
    "difficulty": "Medium",
    "text": "The derivative of cosec x is",
    "options": [
      {
        "key": "A",
        "text": "tan x cosec x"
      },
      {
        "key": "B",
        "text": "-cot x cosec x"
      },
      {
        "key": "C",
        "text": "tan x sec x"
      },
      {
        "key": "D",
        "text": "-cot x sec x"
      }
    ],
    "optionsMap": {
      "A": "tan x cosec x",
      "B": "-cot x cosec x",
      "C": "tan x sec x",
      "D": "-cot x sec x"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Let’s see; \\(\\text{cosec x}={1\\over\\sin x}\\) differentiating \\({dy\\over dx}={Vdu-Udv\\over v^2}\\) u = 1, v = sinx \\({dy\\over dx}={\\sin x(0)-1(\\cos x)\\over \\sin^2x}\\)\\({dy\\over dx}={-\\cos x\\over\\sin^2x}\\)\\(=({-\\cos x\\over\\sin x})({1\\over\\sin x})\\) Here, cot(x) is the cotangent function, which is the reciprocal of the tangent function: \\(\\cot x={1\\over\\tan x}\\) So, the derivative of cosec(x) is equal to negative cosec(x) times cot(x): = -cotx cosecx",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2023,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2023, 2024"
  },
  {
    "id": 134,
    "questionNumber": 134,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Differentiation",
    "year": 2023,
    "difficulty": "Hard",
    "text": "The derivative of cosec x is",
    "options": [
      {
        "key": "A",
        "text": "tanx cosec x"
      },
      {
        "key": "B",
        "text": "-cot x cosec x"
      },
      {
        "key": "C",
        "text": "tan x secx"
      },
      {
        "key": "D",
        "text": "-cot x sec"
      }
    ],
    "optionsMap": {
      "A": "tanx cosec x",
      "B": "-cot x cosec x",
      "C": "tan x secx",
      "D": "-cot x sec"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The derivative of cosec x is -cot x cosec x. This can be derived using the following trigonometric identity: Cosec(x) = \\( \\frac{1}{\\sin(x)}\\)\\(\\frac{d}{dx} \\) cosec(x) = \\( \\frac{d}{dx} \\left( \\frac{1}{\\sin(x)} \\right)\\) Apply the chain rule: \\(\\frac{1}{u(x)}\\) is - \\(\\frac{1}{u(x)^2} \\) x u'(x) Where, u(x) = sin(x) So, \\(\\frac{d}{dx} \\) cosec(x) = \\(- \\frac{1}{\\sin^2(x)}\\) x \\(\\frac{d}{dx} \\) sin(x) Differentiate sin⁡(x): The derivative of sin⁡(x) is cos⁡(x).\\(\\frac{d}{dx} \\) cosec(x) = \\(-\\frac{\\cos(x)}{\\sin^2(x)}\\) Simplify the expression:\\(-\\frac{\\cos(x)}{\\sin^2(x)}\\) Can be rewritten using trigonometric identities \\(\\frac{\\cos(x)}{\\sin(x)} \\) = cot(x) and \\(\\frac{1}{\\sin(x)}\\) = cosec(x) Simplifying, we get: \\(\\frac{d}{dx} \\) cosec(x) = -cosec(x) cot(x)",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2023,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2023, 2024"
  },
  {
    "id": 135,
    "questionNumber": 135,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Differentiation",
    "year": 1995,
    "difficulty": "Easy",
    "text": "The derivative of cosec x is",
    "options": [
      {
        "key": "A",
        "text": "tan x cosec x"
      },
      {
        "key": "B",
        "text": "-cot x cosec x"
      },
      {
        "key": "C",
        "text": "tan x sec x"
      },
      {
        "key": "D",
        "text": "-cot x sec x"
      }
    ],
    "optionsMap": {
      "A": "tan x cosec x",
      "B": "-cot x cosec x",
      "C": "tan x sec x",
      "D": "-cot x sec x"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Let’s see; \\(\\text{cosec x}={1\\over\\sin x}\\) differentiating \\({dy\\over dx}={Vdu-Udv\\over v^2}\\) u = 1, v = sinx \\({dy\\over dx}={\\sin x(0)-1(\\cos x)\\over \\sin^2x}\\)\\({dy\\over dx}={-\\cos x\\over\\sin^2x}\\)\\(=({-\\cos x\\over\\sin x})({1\\over\\sin x})\\) Here, cot(x) is the cotangent function, which is the reciprocal of the tangent function: \\(\\cot x={1\\over\\tan x}\\) So, the derivative of cosec(x) is equal to negative cosec(x) times cot(x): = -cotx cosecx",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2023,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2023, 2024"
  },
  {
    "id": 136,
    "questionNumber": 136,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Differentiation",
    "year": 2009,
    "difficulty": "Medium",
    "text": "If s = (2 + 3t)(5t -4), find \\(\\frac{ds}{dt}\\) when t = <sup>4</sup>/5 seconds",
    "options": [
      {
        "key": "A",
        "text": "0 unit per sec"
      },
      {
        "key": "B",
        "text": "15 units per sec"
      },
      {
        "key": "C",
        "text": "22 units per sec"
      },
      {
        "key": "D",
        "text": "26 units per sec"
      }
    ],
    "optionsMap": {
      "A": "0 unit per sec",
      "B": "15 units per sec",
      "C": "22 units per sec",
      "D": "26 units per sec"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find ds/dt​ for the given expression s = (2 + 3t)(5t − 4), we'll differentiate the expression with respect to t. s = 10t - 8 + 15t <sup>2</sup> - 12t s = 15t <sup>2</sup> - 2t - 8 \\({ds\\over dt}={d\\over dt}(15t^2-2t-8)\\)\\({ds\\over dt}=30t-2\\) When t = <sup>4</sup>/5 seconds: \\({ds\\over dt}=30\\times{4\\over5}-2\\)\\(\\frac{ds}{dt}=24-2=22\\) units per second",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2009,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2009, 2024"
  },
  {
    "id": 137,
    "questionNumber": 137,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Applications of Differentiation",
    "year": 2015,
    "difficulty": "Hard",
    "text": "Determine the maximum value of y = 3x² - x³",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "optionsMap": {
      "A": "6",
      "B": "4",
      "C": "2",
      "D": "0"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "1.Find the derivative of y with respect to x: y = \\(\\frac{d}{dx}\\) (3x <sup>2</sup> - x <sup>3</sup> ) y = 6x -3x <sup>2</sup> 2.Set the derivative equal to zero and solve for x to find critical points: 6x−3x <sup>2</sup> =0. Factor out 3x from both terms: 3x(2−x)=0. Now, set each factor equal to zero and solve for x: a.3x=0⇒ x=0. b. 2–x=0⇒x=2. So, we have two critical points: x =0 and x=2. When x = 0: y = 3(0) <sup>2</sup> - (0) <sup>3</sup> = 0 When x = 2: y = 3(2) <sup>2</sup> - (2) <sup>3</sup> = 4 To determine whether these critical points correspond to a maximum or minimum, we can use the second derivative test. Take the second derivative of y: y′′ = \\(\\frac{d}{dx}\\) (3x <sup>2</sup> - x <sup>3</sup> ) = \\(\\frac{d}{dx}\\) (6x- 3x <sup>2</sup> ) = 6 - 6x So, the maximum value of y is 4, and it occurs when x=2.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2016"
  },
  {
    "id": 138,
    "questionNumber": 138,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Applications of Differentiation",
    "year": 2016,
    "difficulty": "Easy",
    "text": "Determine the maximum value of y = 3x² - x³.",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "optionsMap": {
      "A": "4",
      "B": "2",
      "C": "0",
      "D": "6"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "1. Find the derivative of y with respect to x: y′ = 6x − 3x <sup>2</sup> 2. Set the derivative equal to zero to find critical points: 6x − 3x <sup>2</sup> = 0 3. Factor out 3x from the equation: 3x(2 − x) = 0 4. Solve for x: 3x = 0 or 2 – x = 0 From 3x = 0, we get x=0. From 2 – x = 0, we get x = 2. Now, we have two critical points: x = 0 and x = 2. To determine if these points correspond to maximum or minimum values, we can use the second derivative test. Calculate the second derivative: y′′ = 6 − 6x Now, evaluate y′′ at the critical points: At x = 0: y′′(0)=6−6(0)=6 Since y′′(0) is positive, this indicates a local minimum at x = 0. At x = 2: y′′(2)=6−6(2)=6−12=−6 Since y′′(2) is negative, this indicates a local maximum at x = 2. Now that we've determined there is a local maximum at x = 2, let's find the corresponding maximum value of y by plugging x = 2 back into the original function: y = 3(2) <sup>2</sup> − (2) <sup>3</sup> = 12 – 8 = 4 So, the maximum value of y is 4, and it occurs at x = 2.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2016"
  },
  {
    "id": 139,
    "questionNumber": 139,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Applications of Differentiation",
    "year": 2024,
    "difficulty": "Medium",
    "text": "If s = (2 + 3t)(5t -4), find \\(\\frac{ds}{dt}\\) when t = <sup>4</sup>/5 seconds",
    "options": [
      {
        "key": "A",
        "text": "0 unit per sec"
      },
      {
        "key": "B",
        "text": "15 units per sec"
      },
      {
        "key": "C",
        "text": "22 units per sec"
      },
      {
        "key": "D",
        "text": "26 units per sec"
      }
    ],
    "optionsMap": {
      "A": "0 unit per sec",
      "B": "15 units per sec",
      "C": "22 units per sec",
      "D": "26 units per sec"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find ds/dt​ for the given expression s = (2 + 3t)(5t − 4), we'll differentiate the expression with respect to t. s = 10t - 8 + 15t <sup>2</sup> - 12t s = 15t <sup>2</sup> - 2t - 8 \\({ds\\over dt}={d\\over dt}(15t^2-2t-8)\\)\\({ds\\over dt}=30t-2\\) When t = <sup>4</sup>/5 seconds: \\({ds\\over dt}=30\\times{4\\over5}-2\\)\\(\\frac{ds}{dt}=24-2=22\\) units per second",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2009,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2009, 2024"
  },
  {
    "id": 140,
    "questionNumber": 140,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Limit of A Function",
    "year": 2022,
    "difficulty": "Hard",
    "text": "Find the limit of y = \\(\\frac{x^3 + 6x - 7}{x-1}\\) as x tends to 1",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "optionsMap": {
      "A": "9",
      "B": "8",
      "C": "0",
      "D": "7"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\frac{x^3 + 6x - 7}{x-1}\\) When numerator is differentiated - 3x <sup>2</sup> + 6 When denominator is differentiated -1 \\(​​\\frac{3x^2+6}{1} \\) Substitute x for 1 \\(\\frac{3(1)^2 + 6}{1}= \\frac{3+6}{1}\\) = 9",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2022
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2017, 2022)"
  },
  {
    "id": 141,
    "questionNumber": 141,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Applications of Differentiation",
    "year": 1990,
    "difficulty": "Easy",
    "text": "At what value of x is the function x <sup>2</sup> + x + 1 minimum?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "\\(\\frac 34\\)"
      },
      {
        "key": "C",
        "text": "<sup>5</sup>/3"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "\\(\\frac 34\\)",
      "C": "<sup>5</sup>/3",
      "D": "9"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The correct option is \"1\". The function x² + x + 1 represents a parabola. Since the coefficient of the x² term is positive, the parabola opens upwards, indicating it has a minimum point. Here's how to find the x-value where this minimum occurs: 1. Use the Vertex Formula:<ul><li> For a quadratic function in the form ax² + bx + c, the x-coordinate of the vertex (which is the minimum point in this case) is given by: x = \\(\\frac{-b}{2a} \\) </li><li> In our function, a = 1, b = 1, and c = 1 .</li><li> Substitute these values into the formula: x = \\(\\frac{-1}{2*1} \\) = - \\(\\frac 12\\) </li></ul> 2. Finding the Minimum Value:<ul><li> To find the actual minimum value of the function, substitute x = - <sup>1</sup>/2 back into the original equation: (- \\(\\frac 12\\) )² + (- \\(\\frac 12\\) ) + 1 = \\(\\frac 14\\) - \\(\\frac 12\\) + 1 = \\(\\frac 34\\)</li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 142,
    "questionNumber": 142,
    "subject": "Mathematics",
    "topic": "Differential Calculus",
    "subtopic": "Limit of A Function",
    "year": 2005,
    "difficulty": "Medium",
    "text": "The maximum value of the function f(x) = 2 + x - x² is",
    "options": [
      {
        "key": "A",
        "text": "<sup>9</sup>/4"
      },
      {
        "key": "B",
        "text": "<sup>7</sup>/4"
      },
      {
        "key": "C",
        "text": "<sup>3</sup>/2"
      },
      {
        "key": "D",
        "text": "<sup>1</sup>/2"
      }
    ],
    "optionsMap": {
      "A": "<sup>9</sup>/4",
      "B": "<sup>7</sup>/4",
      "C": "<sup>3</sup>/2",
      "D": "<sup>1</sup>/2"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\frac{9}{4} \\) Completing the Square - Rewrite the function by completing the square: f(x) = - (x² - x) + 2 f(x) = - (x² - x + \\(\\frac{1}{4} \\)) + 2 + <span class=\"mathjax-latex\">\\(\\frac{1}{4} \\)</span> (To complete the square, add and subtract ( \\(\\frac{1}{2} \\))²) f(x) = - (x - <span class=\"mathjax-latex\">\\(\\frac{1}{2} \\))² + <span class=\"mathjax-latex\">\\(\\frac{9}{4} \\)</span></span> - Since the term -(x - \\(\\frac{1}{2} \\))² is always zero or negative, the maximum value occurs when it's 0. The maximum value of the function is therefore <span class=\"mathjax-latex\">\\(\\frac{9}{4} \\). This happens when x = <span class=\"mathjax-latex\">\\(\\frac{1}{2} \\). </span></span>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 143,
    "questionNumber": 143,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Equations From Roots",
    "year": 2023,
    "difficulty": "Hard",
    "text": "If m and m (m + 4) are the roots of 4x <sup>2</sup> – 4x - 15 = 0, find the equation whose roots are 2m and (2m + 8)",
    "options": [
      {
        "key": "A",
        "text": "x <sup>2</sup> + 8x + 15 = 0"
      },
      {
        "key": "B",
        "text": "x <sup>2</sup> 8x - 15 = 0"
      },
      {
        "key": "C",
        "text": "x <sup>2</sup> + 2x +15 = 0"
      },
      {
        "key": "D",
        "text": "x <sup>2</sup> 2x - 15 = 0"
      }
    ],
    "optionsMap": {
      "A": "x <sup>2</sup> + 8x + 15 = 0",
      "B": "x <sup>2</sup> 8x - 15 = 0",
      "C": "x <sup>2</sup> + 2x +15 = 0",
      "D": "x <sup>2</sup> 2x - 15 = 0"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "x <sup>2</sup> – (sum of roots)x + (product of roots) = 4x <sup>2</sup> – 4x - 15 = 0 Divide through by 4 \\(= x^2 – x -\\frac{15} 4 = 0\\) = \\(= x^2 – x +\\frac{15} 4 = 0\\)\\(= x^2 – (1)x + (− \\frac{15}4 ) = 0\\) Sum of roots = 1 =m + (m + 4) = 1 = 2m + 4 =1 =2m = -3 \\(=m = - \\frac3 2 \\) The equation whose roots are 2m and 2m + 8 \\(2m = 2 x-−\\frac 3 2 = −3 \\space{and}\\space{2m}+ 8 = 2 x − \\frac3 2 + 8 = 5\\) = x <sup>2</sup> – -(-3 + 5)x + (-3)(5) =0 = x <sup>2</sup> – 2x +(-15) =0 x <sup>2</sup> – 2x -15 =0",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2023
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2018, 2023)"
  },
  {
    "id": 144,
    "questionNumber": 144,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Quadratic Equations",
    "year": 2024,
    "difficulty": "Easy",
    "text": "The positive root of t in the following equation, 4t<sup>2</sup>+ 7t - 1 = 0 , correct to 4 places of decimal, is",
    "options": [
      {
        "key": "A",
        "text": "1.0622"
      },
      {
        "key": "B",
        "text": "10.6225"
      },
      {
        "key": "C",
        "text": "0.1328"
      },
      {
        "key": "D",
        "text": "0.0218"
      }
    ],
    "optionsMap": {
      "A": "1.0622",
      "B": "10.6225",
      "C": "0.1328",
      "D": "0.0218"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "<ul><li>a = 4.</li><li>b = 7.</li><li>c = -1.</li></ul>Apply the quadratic formula:The quadratic formula solves for the roots (x-intercepts) of a quadratic equation in the form ax² + bx + c = 0:\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)Substitute the coefficients into the formula:\\(t = \\frac{(-7 ± \\sqrt{(7² - 4 \\times4 \\times -1)})}{(2 \\times4)}\\)\\(t = \\frac{(-7 ± \\sqrt{(65)})} 8\\)Calculate the roots:t₁ = \\(\\frac{(-7 ± \\sqrt{(65)})} 8\\) ≈ 0.1328t₂ = \\(\\frac{(-7 -\\sqrt{(65)})} 8\\) (negative root)Answer:The positive root of t, correct to 4 decimal places, is 0.1328 (Option .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2024"
  },
  {
    "id": 145,
    "questionNumber": 145,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Quadratic Equations",
    "year": 1983,
    "difficulty": "Medium",
    "text": "Which of the following equations represents the graph above?",
    "imageUrl": "/diagrams/mathematics_q145_diagram.jpg",
    "options": [
      {
        "key": "A",
        "text": "y = 2 + 7x + 4x <sup>2</sup>"
      },
      {
        "key": "B",
        "text": "y = 2 - 7x + 4x <sup>2</sup>"
      },
      {
        "key": "C",
        "text": "y = 2 + 7x - 4x <sup>2</sup>"
      },
      {
        "key": "D",
        "text": "y = 2 - 7x - 4x <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "y = 2 + 7x + 4x <sup>2</sup>",
      "B": "y = 2 - 7x + 4x <sup>2</sup>",
      "C": "y = 2 + 7x - 4x <sup>2</sup>",
      "D": "y = 2 - 7x - 4x <sup>2</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "y = 2 - 7x - 4x <sup>2</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1983,
      2009
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1983, 2009"
  },
  {
    "id": 146,
    "questionNumber": 146,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Quadratic Equations",
    "year": 2009,
    "difficulty": "Hard",
    "text": "Which of the following equations represents the graph above?",
    "imageUrl": "/diagrams/mathematics_q146_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "y = 2 + 7x + 4x²"
      },
      {
        "key": "B",
        "text": "y = 2 - 7x + 4x²"
      },
      {
        "key": "C",
        "text": "y = 2 + 7x - 4x²"
      },
      {
        "key": "D",
        "text": "y = 2 - 7x - 4x²"
      }
    ],
    "optionsMap": {
      "A": "y = 2 + 7x + 4x²",
      "B": "y = 2 - 7x + 4x²",
      "C": "y = 2 + 7x - 4x²",
      "D": "y = 2 - 7x - 4x²"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "x = -2 and x = <sup>1</sup>/4 x = -2 and 4x = 1 x+2 and 4x-1 (x+2)(4x-1) = 0 4x <sup>2</sup> - x + 8x -2 = 0 \\(4x^2+ 7x – 2 = 0 \\) but y intercept is positive. Multiply the equation by -1 \\(-4x^2- 7x + 2 = 0\\)\\(\\therefore y = 2 – 7x – 4x^2\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1983,
      2009
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1983, 2009"
  },
  {
    "id": 147,
    "questionNumber": 147,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Equations From Roots",
    "year": 2015,
    "difficulty": "Easy",
    "text": "Find the equation whose roots are <sup>3</sup>/4 and -4",
    "options": [
      {
        "key": "A",
        "text": "4x² - 13x + 12 = 0"
      },
      {
        "key": "B",
        "text": "4x² - 13x - 12 = 0"
      },
      {
        "key": "C",
        "text": "4x² + 13x - 12 = 0"
      },
      {
        "key": "D",
        "text": "4x² + 13x + 12 = 0"
      }
    ],
    "optionsMap": {
      "A": "4x² - 13x + 12 = 0",
      "B": "4x² - 13x - 12 = 0",
      "C": "4x² + 13x - 12 = 0",
      "D": "4x² + 13x + 12 = 0"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find the equation whose roots are <sup>3</sup>/4 and −4, you can use the fact that for a quadratic equation in the form ax <sup>2</sup> +bx+c=0, the roots are given by the solutions to the equation. Given the roots <sup>3</sup>/4 and −4, you can set up two separate linear factors, each corresponding to one of the roots: For the root \\(x=\\frac{3}{4}\\) , you have the factor \\((x-\\frac{3}{4})\\) For the root x=−4, you have the factor (x+4). To find the equation, multiply these two factors together: \\((x-\\frac{3}{4})(x+4) = 0\\) Now, expand and simplify this expression: (4x−3)(x+4)=0 Distribute the terms: 4x <sup>2</sup> +16x−3x –12=0 Combine like terms: 4x <sup>2</sup> +13x –12= 0 So, the equation whose roots are <sup>3</sup>/4 and −4 is 4x² + 13x - 12 = 0",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 148,
    "questionNumber": 148,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Equations From Roots",
    "year": 2024,
    "difficulty": "Medium",
    "text": "If α and β are the roots of the quadratic equation 4x <sup>2</sup> −7x+3 = 0, find the value of \\(\\frac{1}{\\alpha}+\\frac{1}{\\beta}\\)",
    "options": [
      {
        "key": "A",
        "text": "-2"
      },
      {
        "key": "B",
        "text": "\\(\\frac{-7}{4}\\)"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "<sup>7</sup>/3"
      }
    ],
    "optionsMap": {
      "A": "-2",
      "B": "\\(\\frac{-7}{4}\\)",
      "C": "2",
      "D": "<sup>7</sup>/3"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "\\(\\frac{7}{3}\\) The sum of the roots: \\(\\alpha + \\beta = -\\frac{b}{a} = -\\frac{-7}{4} = \\frac{7}{4}\\) The product of the roots: \\(\\alpha \\beta = \\frac{c}{a} = \\frac{3}{4}\\) Using the identity: \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha \\beta}\\) Substituting the values: \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\frac{7}{4}}{\\frac{3}{4}}\\) Since the denominators are the same, we simplify: \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{7}{4} \\times \\frac{4}{3} = \\frac{7}{3}\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 149,
    "questionNumber": 149,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Equations From Roots",
    "year": 2005,
    "difficulty": "Hard",
    "text": "Find the equation whose roots are 2 and \\(-3\\frac{1}{2}\\) .",
    "options": [
      {
        "key": "A",
        "text": "2x² + 3x + 14 = 0"
      },
      {
        "key": "B",
        "text": "2x² + 5x + 7 = 0"
      },
      {
        "key": "C",
        "text": "2x² + 5x - 7 = 0"
      },
      {
        "key": "D",
        "text": "2x³ + 3x - 14 = 0"
      }
    ],
    "optionsMap": {
      "A": "2x² + 3x + 14 = 0",
      "B": "2x² + 5x + 7 = 0",
      "C": "2x² + 5x - 7 = 0",
      "D": "2x³ + 3x - 14 = 0"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To find an equation with roots 2 and \\(-3\\frac{1}{2}\\) , you can use the factored form of a quadratic equation. The factored form of a quadratic equation with roots r1​ and r2​ is: a(x − r<sub>1</sub> ​)(x − r<sub>2</sub> ​) = 0 In this case, r1 ​ = 2 and r2 ​= \\(-3\\frac{1}{2}\\) So, the equation with these roots is: \\(( x – 2)(x + \\frac{7}{2} )\\)\\(x² + \\frac{7}{2} x – 2x – 7 = 0\\) Multiply through by 2 2x² + 7x - 4x - 14 = 0 2x³ + 3x - 14 = 0",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 150,
    "questionNumber": 150,
    "subject": "Mathematics",
    "topic": "Quadratic Equations",
    "subtopic": "Quadratic Equations",
    "year": 1991,
    "difficulty": "Easy",
    "text": "Multiply (x <sup>2</sup> - 3x + 1) by (x - a)",
    "options": [
      {
        "key": "A",
        "text": "x <sup>3</sup> - (3 + a) x <sup>2</sup> + (1 + 3a)x - a"
      },
      {
        "key": "B",
        "text": "x <sup>3</sup> - (3 - a)x <sup>2</sup> + 3ax - a"
      },
      {
        "key": "C",
        "text": "x <sup>3</sup> - (3 - a)x <sup>2</sup> - (1 = 3a) - a"
      },
      {
        "key": "D",
        "text": "x <sup>3</sup> + (3 - a)x <sup>2</sup> + (1 + 3a) - a"
      }
    ],
    "optionsMap": {
      "A": "x <sup>3</sup> - (3 + a) x <sup>2</sup> + (1 + 3a)x - a",
      "B": "x <sup>3</sup> - (3 - a)x <sup>2</sup> + 3ax - a",
      "C": "x <sup>3</sup> - (3 - a)x <sup>2</sup> - (1 = 3a) - a",
      "D": "x <sup>3</sup> + (3 - a)x <sup>2</sup> + (1 + 3a) - a"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "(x <sup>2</sup> - 3x + 1)(x - a) = x <sup>3</sup> - 3x <sup>2</sup> + x - ax <sup>2</sup> + 3ax - a = x <sup>3</sup> - (3 + a) x <sup>2</sup> + (1 + 3a)x - a",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 151,
    "questionNumber": 151,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Gradients & Midpoints",
    "year": 2016,
    "difficulty": "Medium",
    "text": "Find the midpoint of S(-5, 4) and T(-3, -2)",
    "options": [
      {
        "key": "A",
        "text": "4, -1"
      },
      {
        "key": "B",
        "text": "-4, 1"
      },
      {
        "key": "C",
        "text": "4, -2"
      },
      {
        "key": "D",
        "text": "-4, 2"
      }
    ],
    "optionsMap": {
      "A": "4, -1",
      "B": "-4, 1",
      "C": "4, -2",
      "D": "-4, 2"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The midpoint formula is:\\(M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)\\)Step 1: Average the x-coordinates\\(x_m = \\frac{-5 + (-3)}{2} = \\frac{-8}{2} = -4\\)Step 2: Average the y-coordinates\\(y_m = \\frac{4 + (-2)}{2} = \\frac{2}{2} = 1\\)Midpoint-4, 1",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015, 2016"
  },
  {
    "id": 152,
    "questionNumber": 152,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Gradients & Midpoints",
    "year": 2015,
    "difficulty": "Hard",
    "text": "Find the mid point of S(-5, 4) and T(-3, -2)",
    "options": [
      {
        "key": "A",
        "text": "-4,2"
      },
      {
        "key": "B",
        "text": "4,-1"
      },
      {
        "key": "C",
        "text": "-4,1"
      },
      {
        "key": "D",
        "text": "4,-2"
      }
    ],
    "optionsMap": {
      "A": "-4,2",
      "B": "4,-1",
      "C": "-4,1",
      "D": "4,-2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Mid point of S(-5, 4) and T(-3, -2) is \\([\\frac{1}{2}(x_1 + x_2), \\frac{1}{2}(y_1 + y_2)]\\)\\(=[\\frac{1}{2}(-5 + -3), \\frac{1}{2}(4 + (-2))]\\)\\(=[\\frac{1}{2}(-8), \\frac{1}{2}(2)]\\)\\(=[-4, 1]\\)",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015, 2016"
  },
  {
    "id": 153,
    "questionNumber": 153,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Gradients & Midpoints",
    "year": 2014,
    "difficulty": "Easy",
    "text": "Find the mid-point of S(-5,4) and T(-3,-2)",
    "options": [
      {
        "key": "A",
        "text": "-4, 1"
      },
      {
        "key": "B",
        "text": "4, -1"
      },
      {
        "key": "C",
        "text": "-4, 2"
      },
      {
        "key": "D",
        "text": "4, -2"
      }
    ],
    "optionsMap": {
      "A": "-4, 1",
      "B": "4, -1",
      "C": "-4, 2",
      "D": "4, -2"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "To find the midpoint of two points in a coordinate plane, you can use the midpoint formula: Midpoint = \\(({x_1+x_2\\over2}, {y_1+y_2\\over2})\\) Given the points S(-5, 4) and T(-3, -2), you can plug the coordinates into the formula: Midpoint = \\(({-5+(-3)\\over2}, {4+(-2)\\over2})\\) Simplify the coordinates: Midpoint = \\(({-8\\over2}, {2\\over2})\\) ​​ Midpoint = (−4, 1) So, the midpoint of points S and T is (-4, 1).",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2014,
      2015,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015, 2016"
  },
  {
    "id": 154,
    "questionNumber": 154,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Equation of Line",
    "year": 1994,
    "difficulty": "Medium",
    "text": "The equation of the line in the graph is",
    "imageUrl": "/diagrams/mathematics_q154_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "3y = 4x + 12"
      },
      {
        "key": "B",
        "text": "3y = 3x + 12"
      },
      {
        "key": "C",
        "text": "3y = -4x + 12"
      },
      {
        "key": "D",
        "text": "3y = -4x + 9"
      }
    ],
    "optionsMap": {
      "A": "3y = 4x + 12",
      "B": "3y = 3x + 12",
      "C": "3y = -4x + 12",
      "D": "3y = -4x + 9"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Gradient of the line \\(={\\text{Change in y}\\over\\text{Change in x}}={y_2-y_1\\over x_2-x_1}\\) y₂ = 0, y₁ = 4 x₂ = 3 and x₁ = 0 \\({y_2-y_1\\over x_2-x_1}={0-4\\over3-0}={-4\\over3}\\) Equation of straight line = y = mx + c Where m = gradient and c = y Intercept = 4 \\(y=-4x+{4\\over3}\\) , multiple through by 3 3y = -4x + 12",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1994,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1994, 2020"
  },
  {
    "id": 155,
    "questionNumber": 155,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Equation of Line",
    "year": 2020,
    "difficulty": "Hard",
    "text": "The equation of the line in the graph is",
    "imageUrl": "/diagrams/mathematics_q155_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "3y = 3x + 12"
      },
      {
        "key": "B",
        "text": "3y = 3x + 12"
      },
      {
        "key": "C",
        "text": "3y = -4x + 12"
      },
      {
        "key": "D",
        "text": "3y = -4x + 9"
      }
    ],
    "optionsMap": {
      "A": "3y = 3x + 12",
      "B": "3y = 3x + 12",
      "C": "3y = -4x + 12",
      "D": "3y = -4x + 9"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "From the graph, we can see the line passes through the points (0, 4) and (3, 0). Gradient of line (m) = \\({(y₂ - y₁)} \\over {(x₂ - x₁)} \\) Y<sub>2</sub> = 0, y<sub>1</sub> = 4 X<sub>2</sub> = 3 and x<sub>1</sub> = 0 \\(={{(0 - 4)} \\over {(3 - 0)}}={-4 \\over 3}\\) Equation of straight line = y = mx + c Where m = gradient and c = y We already have the slope (m = \\(-4\\over3\\) ). To find the y-intercept (b), notice that the line crosses the y-axis at (0, 4).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1994,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1994, 2020"
  },
  {
    "id": 156,
    "questionNumber": 156,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Equation of Line",
    "year": 2016,
    "difficulty": "Easy",
    "text": "Find the equation of the straight line through (-2, 3) and perpendicular to 4x + 3y - 5 = 0",
    "options": [
      {
        "key": "A",
        "text": "5x - 2y - 11 = 0"
      },
      {
        "key": "B",
        "text": "4x + 5y + 3 = 0"
      },
      {
        "key": "C",
        "text": "3x + 2y - 18 = 0"
      },
      {
        "key": "D",
        "text": "3x - 4y + 18 = 0"
      }
    ],
    "optionsMap": {
      "A": "5x - 2y - 11 = 0",
      "B": "4x + 5y + 3 = 0",
      "C": "3x + 2y - 18 = 0",
      "D": "3x - 4y + 18 = 0"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Step 1: Determine the slope of the given line. To find the slope of the given line, 4x + 3y - 5 = 0, we need to rewrite it in slope-intercept form (y = mx + b): 3y = -4x + 5 \\(y=-\\frac43x+{5\\over3}\\) ​​​ So, the slope of the given line is - <sup>4</sup>/3 . Step 2: Find the slope of the perpendicular line. The slope of a line perpendicular to another line is the negative reciprocal of its slope.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 157,
    "questionNumber": 157,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Equation of Line",
    "year": 2014,
    "difficulty": "Medium",
    "text": "Find the equation of the straight line through (-2,3) and perpendicular to 4x + 3y - 5 = 0",
    "options": [
      {
        "key": "A",
        "text": "4x + 5y + 3 = 0"
      },
      {
        "key": "B",
        "text": "5x 2y - 11 = 0"
      },
      {
        "key": "C",
        "text": "3x 4y + 18 = 0"
      },
      {
        "key": "D",
        "text": "3x + 2y 18 = 0"
      }
    ],
    "optionsMap": {
      "A": "4x + 5y + 3 = 0",
      "B": "5x 2y - 11 = 0",
      "C": "3x 4y + 18 = 0",
      "D": "3x + 2y 18 = 0"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given: The point (-2, 3) The equation of the line given: 4x + 3y - 5 = 0 * If two lines are perpendicular, the product of their slopes = -1 M1m2 = -1 ......(1) Conform 4x + 3y - 5 = 0 to y = mx + c 3y = -4x + 5 \\(y=-{4\\over3}x+{5\\over3}\\)\\(m_1=-{4\\over3}\\) M₂ = ? from (1) \\(-{4\\over3}\\times m_2=-1\\)\\(m_2={3\\over4}\\) Recall that: \\(m={y_2-y_1\\over x_2-x_1}\\)\\({3\\over4}={y-3\\over x--2}\\)\\({3\\over4}={y-3\\over x+2}\\) 3x + 6 = 4y -12 3x – 4y = -18 3x – 4y + 18 = 0",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 158,
    "questionNumber": 158,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Gradients & Midpoints",
    "year": 1991,
    "difficulty": "Hard",
    "text": "Find the gradient of the line passing through the points (-2, 0) and (0, -4).",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "-4"
      },
      {
        "key": "C",
        "text": "-2"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "optionsMap": {
      "A": "2",
      "B": "-4",
      "C": "-2",
      "D": "4"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Gradient =<sub>\\(\\frac{y_2-y_1}{x_2-x_1}\\)</sub> = \\(\\frac{-4-0}{0+2} \\) = ​​​​ \\(-2\\) Where (( x 1​, y 1​) and ( x 2​, y 2​) are the coordinates of the two points. In this case, ( x <sub>1</sub> ​, y <sub>1​</sub> ) = (−2,0) and ( x <sub>2</sub> ​, y <sub>2​</sub> ) = (0,−4). Final Answer The gradient of the line passing through the points (−2,0) and (0,−4) is −2. ath widgetmath widgeath widget",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1991,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1991, 2020"
  },
  {
    "id": 159,
    "questionNumber": 159,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Distance Between Two Points",
    "year": 2001,
    "difficulty": "Easy",
    "text": "P(-6, 1) and Q(6, 6) are the two ends of the diameter of a given circle. Calculate the radius.",
    "options": [
      {
        "key": "A",
        "text": "6.5 units"
      },
      {
        "key": "B",
        "text": "13.0 units"
      },
      {
        "key": "C",
        "text": "3.5 units"
      },
      {
        "key": "D",
        "text": "7.0 units"
      }
    ],
    "optionsMap": {
      "A": "6.5 units",
      "B": "13.0 units",
      "C": "3.5 units",
      "D": "7.0 units"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "PQ <sup>2</sup> = (x<sub>2</sub> – x<sub>1</sub> ) + (y<sub>2</sub> – y<sub>1</sub> )= 12 <sup>2</sup> + 5 <sup>2</sup>= 144 + 25= 169\\(\\mathsf{PQ=\\sqrt{169}=13}\\)But PQ = diameter = 2rr = \\(PQ\\over2\\) = 6.5 units",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2021"
  },
  {
    "id": 160,
    "questionNumber": 160,
    "subject": "Mathematics",
    "topic": "Coordinate Geometry",
    "subtopic": "Distance Between Two Points",
    "year": 2021,
    "difficulty": "Medium",
    "text": "P(-6, 1) and Q(6, 6) are the two ends of the diameter of a given circle. Calculate the radius.",
    "options": [
      {
        "key": "A",
        "text": "6.5 units"
      },
      {
        "key": "B",
        "text": "13.0 units"
      },
      {
        "key": "C",
        "text": "3.5 units"
      },
      {
        "key": "D",
        "text": "7.0 units"
      }
    ],
    "optionsMap": {
      "A": "6.5 units",
      "B": "13.0 units",
      "C": "3.5 units",
      "D": "7.0 units"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "PQ <sup>2</sup> = (x<sub>2</sub> – x<sub>1</sub> ) + (y<sub>2</sub> – y<sub>1</sub> ) = 12 <sup>2</sup> + 5 <sup>2</sup> = 144 + 25 = 169 \\(\\mathsf{PQ=\\sqrt{169}=13}\\) But PQ = diameter = 2r r = \\(PQ\\over2\\) = 6.5 units",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2021"
  },
  {
    "id": 161,
    "questionNumber": 161,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Solid Shapes",
    "year": 2023,
    "difficulty": "Hard",
    "text": "A steel ball of radius 1cm is dropped into a cylinder of radius 2cm and height 4cm. If the cylinder is now filled with water, what is the volume of the water in the cylinder?",
    "options": [
      {
        "key": "A",
        "text": "\\(\\frac{44 \\pi}{3} cm^3\\)"
      },
      {
        "key": "B",
        "text": "12πcm³"
      },
      {
        "key": "C",
        "text": "\\(\\frac{40 \\pi}{3} cm^3\\)"
      },
      {
        "key": "D",
        "text": "32πcm³"
      }
    ],
    "optionsMap": {
      "A": "\\(\\frac{44 \\pi}{3} cm^3\\)",
      "B": "12πcm³",
      "C": "\\(\\frac{40 \\pi}{3} cm^3\\)",
      "D": "32πcm³"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Volume of steel ball = \\(\\frac{4\\pi r^2}{3}\\) = \\(\\frac{4}{3}\\) \\(\\pi\\) x 1 = \\(\\frac{4 \\pi}{3}\\)cm3 Vol. of cylinder = \\(\\pi\\)r2h = \\(\\pi\\) x 22 x 4 Vol. of water = 16\\(\\pi\\) - \\(\\frac{4 \\pi}{3}\\) = \\(\\frac{48 - 4 \\pi}{3}\\) = \\(\\frac{44 \\pi}{3}\\)cm\\(^3\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2023"
  },
  {
    "id": 162,
    "questionNumber": 162,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Solid Shapes",
    "year": 1979,
    "difficulty": "Easy",
    "text": "A steel ball of radius 1 cm is dropped into a cylinder of radius 2cm and height 4cm. If the cylinder is now filled with water, what is the volume of the water in the cylinder?",
    "options": [
      {
        "key": "A",
        "text": "\\((\\frac{44}{3}\\pi) cm³\\)"
      },
      {
        "key": "B",
        "text": "12 \\(\\pi\\) cm <sup>3</sup>"
      },
      {
        "key": "C",
        "text": "\\((\\frac{38}{3}\\pi) cm³\\)"
      },
      {
        "key": "D",
        "text": "\\((\\frac{40}{3}\\pi) cm³\\)"
      }
    ],
    "optionsMap": {
      "A": "\\((\\frac{44}{3}\\pi) cm³\\)",
      "B": "12 \\(\\pi\\) cm <sup>3</sup>",
      "C": "\\((\\frac{38}{3}\\pi) cm³\\)",
      "D": "\\((\\frac{40}{3}\\pi) cm³\\)"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Topic: Mensuration (Volumes of Cylinder and Sphere) The volume of a cylinder is calculated using the formula: \\(​ Volume_{{cylinder}} = πr^2h ​\\) Where: In this case, the radius of the cylinder (r) is 2 cm, and the height (h) is 4 cm.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2023"
  },
  {
    "id": 163,
    "questionNumber": 163,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Solid Shapes",
    "year": 2020,
    "difficulty": "Medium",
    "text": "A cylindrical tank has a capacity of 3080m³. What is the depth of the tank if the diameter of its base is 14m?",
    "options": [
      {
        "key": "A",
        "text": "25m"
      },
      {
        "key": "B",
        "text": "23m"
      },
      {
        "key": "C",
        "text": "22m"
      },
      {
        "key": "D",
        "text": "20m"
      }
    ],
    "optionsMap": {
      "A": "25m",
      "B": "23m",
      "C": "22m",
      "D": "20m"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Capacity = Volume = 3080m <sup>3</sup> Base Diameter = 14m \\(Radius =\\frac {diameter} {2} = 7m \\) Volume of cylinder = Capacity of cylinder πr <sup>2</sup> h = 3080 \\(\\frac {22}{7} \\times 7 \\times 7 \\times h =3080 \\) 3.142 × 49 × h = 3080 153.958h = 3080 \\(h = \\frac {3080}{153.958} =20 \\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2020"
  },
  {
    "id": 164,
    "questionNumber": 164,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Solid Shapes",
    "year": 2001,
    "difficulty": "Hard",
    "text": "A cylindrical tank has a capacity of 3080m³. What is the depth of the tank if the diameter of its base is 14m?",
    "options": [
      {
        "key": "A",
        "text": "23m"
      },
      {
        "key": "B",
        "text": "25m"
      },
      {
        "key": "C",
        "text": "20m"
      },
      {
        "key": "D",
        "text": "22m"
      }
    ],
    "optionsMap": {
      "A": "23m",
      "B": "25m",
      "C": "20m",
      "D": "22m"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given Volume = capacity =3080m³ Depth = Height = h Diameter = 14m Radius= <sup>1</sup>/2 Diameter = 7m Recall that: π = <sup>22</sup>/7 Volume = π²h (for a cylinder) V = <sup>22</sup>/7 × 49 × h 3080 = <sup>22</sup>/7 × 49 × h H = 20m",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2020"
  },
  {
    "id": 165,
    "questionNumber": 165,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Plane Shapes",
    "year": 1979,
    "difficulty": "Easy",
    "text": "A square of cardboard is taped at the perimeter by a piece of ribbon 20cm long. What is the area of the board?",
    "options": [
      {
        "key": "A",
        "text": "20sq.cm"
      },
      {
        "key": "B",
        "text": "100sq.cm"
      },
      {
        "key": "C",
        "text": "25sq.cm"
      },
      {
        "key": "D",
        "text": "16sq.cm"
      }
    ],
    "optionsMap": {
      "A": "20sq.cm",
      "B": "100sq.cm",
      "C": "25sq.cm",
      "D": "16sq.cm"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\" 25sq.cm \".<ol><li>Perimeter and Sides: The perimeter of a square is the total length of all its sides. Since a square has four equal sides, we can find the length of one side by dividing the perimeter by 4.</li><li>Side Length: The ribbon is 20 cm long and represents the perimeter. So, each side of the square is \\(\\frac{20 cm} 4\\) = 5 cm.</li><li>Area: The area of a square is calculated by squaring the length of one side.</li></ol>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1974,
      1979
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1974, 1979)"
  },
  {
    "id": 166,
    "questionNumber": 166,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Plane Shapes",
    "year": 2023,
    "difficulty": "Medium",
    "text": "The length of the diagonal of a square is 12 cm. Calculate the area of the square.",
    "options": [
      {
        "key": "A",
        "text": "36cm²"
      },
      {
        "key": "B",
        "text": "48cm²"
      },
      {
        "key": "C",
        "text": "72cm²"
      },
      {
        "key": "D",
        "text": "18cm²"
      }
    ],
    "optionsMap": {
      "A": "36cm²",
      "B": "48cm²",
      "C": "72cm²",
      "D": "18cm²"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACwCAMAAACRgrQWAAAAJ1BMVEX///8BAQHr6+tvb29XV1f6+vrc3Ny0tLTFxcXT09MiIiI6OjqZmZkb67LpAAAD70lEQVR42u3b204cMRCEYbfPp/d/3syMgR/lBiI5kYtsXSCWC/Sp1G7vrLTOC8a98sorr/yP8eGw+G+gsx2W9oPRo5yR8SfomI5IMLP+fbQ7Ibd5Ril0esxJB43Z6aAx66Ax66Ax66Ax66AxS6Exi6DpWQWN2TkZNGYdNGYdNGYdNGYdNGYdNGYdNGYdNGYdNGYptI+YJdD0rIPGrIPGrILGXJwOGrMU2mOWQaeIWQLNbOig2Rs6aHrWQWPWQWPWQWPWQWPWQWPWQXOn6KDpWQfNnXIs2peSvuj5OHQbZrF+YT4M7YddGQgxn4uu1mO/1JU/+Yj5RLQvs9dUBmrMp6Lr6NYvbbm7Lumz+Vh0fuY5+qUOac045hPRvlgftzrd6tEcPR+LrnH0moOtjkt2fPZ1LLrdc5ycf9T+tzN4LHqY9fmmnp/Nx6Lb9I+6uFs9vMN8LLp0C6m+q+djTnG9PBVd+7OWV9eJee7VnYlevpEfPFch5kPRrVtw7k0d/Ye5uBPRvrWbWN7WRZ6pBOa5uhPRNfYe2xrp2zr7bafnE9Gl25WRnX/e97fJfqbnU9BM8oiXOyx+5z0S5tPQKVj0qfTrp0vzEv9mPhKdxy3z4xnnVEMM5bP5TLQPz3KLFv1qnmdEzKegUdd0G9cb0QWn5z3olFvehi7lQ96fg/jMCLtuF7qajbQJXc0KK2S6uc4gd8om9POPdzU9eRypF3pu2RsEdDCbW9Crz/euc7e+p2cCupu1Tej2QJfaR9vbM+jViNuEnjbKeFfPvtsMuizWFnSN070/pbgUljlj3oFmpHfNtL+Y7UO9zB3zHvT6pe5AkzoMZubFPrQf1vNedHrUnru7uM3oxtWy8f30usLpeSOac7gJjXquvYF5K3qajZJ3ogk972/azO9H0/NfQKc5xlcrb3/PRz6NY9ZBMxsqaHpuTgdNzyJozKM5KbRnNmTQmZ410PSsgqbn7HTQ7DodNLtOB80866DpWQfNnaKDZjZ00NwpOmh2nQ6aO0UHTc86aJ6tpNCtcwZV0LkzGxJoetZB07MOmp6PQH8X3ehZA83n/DpoehZB0/OoTgXNGcxOCp0xa6DpWQdNzzpoetZBY5ZCZ+5uDTQ966DpWQdNz1LojFkDTc86aHrWQdOzDhqzDppdp4OmZyl0o2cZdP27Pe9HY5ZCF8waaMxS6MoZFEHTsxCanoXQ7A0ddMesgzbMSujoDkn4E3Q4JP176GlH5eehST0syb3yVZJgSbmUpuTlS0BqiWZFycuXgMTSzKJXQxez8DqH/+gcVjVz6tblRrqaDaeWqXoOk+A5jHLqaZdaDZ1mCNW98sorPz5eML8Ahj09bGf/jcIAAAAASUVORK5CYII=\" style=\"height:176px; width:180px\"/> Let each side be l, then area = l² Using Pythagoras theorem \\(l²+l² = 12²\\)\\(2l² = 144\\) divide both sides by 2 \\(l² = 72\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 167,
    "questionNumber": 167,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Plane Shapes",
    "year": 1983,
    "difficulty": "Hard",
    "text": "On a square paper of length 2.524375cm is inscribed square diagram of length 0.524375cm. Find the area of the paper not covered by the diagram. correct to 3 significant figures.",
    "options": [
      {
        "key": "A",
        "text": "6.00cm <sup>2</sup>"
      },
      {
        "key": "B",
        "text": "6.10cm <sup>2</sup>"
      },
      {
        "key": "C",
        "text": "6cm <sup>2</sup>"
      },
      {
        "key": "D",
        "text": "6.09cm <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "6.00cm <sup>2</sup>",
      "B": "6.10cm <sup>2</sup>",
      "C": "6cm <sup>2</sup>",
      "D": "6.09cm <sup>2</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "\"6.10cm <sup>2</sup> \". Area of the paper = area of square = L x B or S <sup>2</sup> Where s = S x k Area of the paper = (2.524375) <sup>2</sup> area of the diagram = (0.524375) <sup>2</sup> area not covered: = (2.524375) <sup>2</sup> - (0.524375) <sup>2</sup> = 6.37246914063 - 0.27496914062 = 6.0975 = 6.10cm <sup>2</sup> (3 s.f)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 168,
    "questionNumber": 168,
    "subject": "Mathematics",
    "topic": "Mensuration",
    "subtopic": "Plane Shapes",
    "year": 1990,
    "difficulty": "Easy",
    "text": "Find the curved surface area of the frustrum in the figure",
    "imageUrl": "/diagrams/mathematics_q168_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "\\(16π\\sqrt{10}cm^2\\)"
      },
      {
        "key": "B",
        "text": "\\(20π\\sqrt{10}cm^2\\)"
      },
      {
        "key": "C",
        "text": "\\(24π\\sqrt{10}cm^2\\)"
      },
      {
        "key": "D",
        "text": "\\(36π\\sqrt{10}cm^2\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(16π\\sqrt{10}cm^2\\)",
      "B": "\\(20π\\sqrt{10}cm^2\\)",
      "C": "\\(24π\\sqrt{10}cm^2\\)",
      "D": "\\(36π\\sqrt{10}cm^2\\)"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "\\(\\frac{x}{4} = \\frac{6 + x}{6}\\) 6x = 4(6 + x) = 24 + 4x x = 12cm CSA =πRL−πrl \\(\\pi (6) \\sqrt{{18^2} + 6^2} - \\pi \\times 4 \\times \\sqrt{{12^2} + 4^2}\\) = \\(6\\pi \\sqrt{360} - 4 \\pi \\sqrt{160}\\) = \\(36\\pi \\sqrt{10} - 16 \\pi \\sqrt{10}\\) = \\(20π\\sqrt{10}cm^2\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 169,
    "questionNumber": 169,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Operations On Polynomials",
    "year": 2025,
    "difficulty": "Medium",
    "text": "The mean of 2-t, 4+t, 3-2t,2+t and t-1 is",
    "options": [
      {
        "key": "A",
        "text": "t"
      },
      {
        "key": "B",
        "text": "-2"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "-t"
      }
    ],
    "optionsMap": {
      "A": "t",
      "B": "-2",
      "C": "2",
      "D": "-t"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The set of data: (2 - t), (4 + t), (3 - 2t), (2 + t) and (t - 1) The mean X isunknown Recall that: \\(\\bar{x} = \\frac{\\Sigma x}{n}\\) Substitute the given values: \\(\\bar{x} = \\frac{(2 - t) + (4 + t) + (3 - 2t) + (2 + t) + (t - 1)}{5}\\) Simplify further \\(\\bar{x} = \\frac{10}{5}\\) Mean = 2",
    "isRepeated": true,
    "repeatCount": 4,
    "repeatYears": [
      2014,
      2015,
      2016,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2015, 2016, 2025"
  },
  {
    "id": 170,
    "questionNumber": 170,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Factor & Remainder",
    "year": 2014,
    "difficulty": "Hard",
    "text": "Find the value of k if y - 1 is a factor of y³ + 4y² + ky - 6",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "-6"
      },
      {
        "key": "D",
        "text": "-4"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "0",
      "C": "-6",
      "D": "-4"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: A polynomial f(y) = y³ + 4y² + ky - 6 Which has a factor of y - 1 The value of k is unknown Let y - 1 = 0 is a factor, then y = 1 Given the equation, f(1) = y³+ 4y²+ ky - 6 = 0 Substituting for y = 1 1³ + 4(1)² + k(1) - 6 = 0 k - 1 = 0 k = 1 The value of k if y - 1 is a factor of y³ + 4y² + ky – 6 is k = 1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 171,
    "questionNumber": 171,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Factor & Remainder",
    "year": 2016,
    "difficulty": "Easy",
    "text": "Find the value of k if y - 1 is a factor of y³ + 4y² + ky - 6",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "-6"
      }
    ],
    "optionsMap": {
      "A": "0",
      "B": "1",
      "C": "4",
      "D": "-6"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "In this case, y − 1 is the factor, so we will substitute y = 1 into y <sup>3</sup> + 4y <sup>2</sup> + ky − 6 and set it equal to zero: 1 <sup>3</sup> + 4(1) <sup>2</sup> + k(1) – 6 = 0 Simplify: 1 + 4 + k – 6 = 0 Combine like terms: 5 + k – 6 = 0 Now, solve for k: k – 1 = 0 k = 1 So, the value of k that makes y − 1 a factor of y <sup>3</sup> + 4y <sup>2</sup> + ky − 6 is k = 1.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 172,
    "questionNumber": 172,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Factor & Remainder",
    "year": 1981,
    "difficulty": "Medium",
    "text": "The positive root of t in the following equation, \\(4t^2 + 7t - 1 = 0\\) , correct to 4 places of decimal, is",
    "options": [
      {
        "key": "A",
        "text": "1.0622"
      },
      {
        "key": "B",
        "text": "10.6225"
      },
      {
        "key": "C",
        "text": "0.1328"
      },
      {
        "key": "D",
        "text": "0.0218"
      }
    ],
    "optionsMap": {
      "A": "1.0622",
      "B": "10.6225",
      "C": "0.1328",
      "D": "0.0218"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "<ul><li> a = 4 .</li><li> b = 7 .</li><li> c = -1 .</li></ul> Apply the quadratic formula: The quadratic formula solves for the roots (x-intercepts) of a quadratic equation in the form ax² + bx + c = 0: \\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\) Substitute the coefficients into the formula: \\(t = \\frac{(-7 ± \\sqrt{(7² - 4 \\times4 \\times -1)})}{(2 \\times4)}\\)\\(t = \\frac{(-7 ± \\sqrt{(65)})} 8\\) Calculate the roots:<ul><li> t₁ = \\(\\frac{(-7 ± \\sqrt{(65)})} 8\\) ≈ 0.1328 </li><li> t₂ = \\(\\frac{(-7 -\\sqrt{(65)})} 8\\) (negative root) </li></ul> Answer: The positive root of t, correct to 4 decimal places, is 0.1328 (Option .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2024"
  },
  {
    "id": 173,
    "questionNumber": 173,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Factor & Remainder",
    "year": 1985,
    "difficulty": "Hard",
    "text": "The factors of 9 - (x <sup>2</sup> - 3x - 1) <sup>2</sup> are",
    "options": [
      {
        "key": "A",
        "text": "-(x - 4)(x + 1) (x - 1)(x - 2)"
      },
      {
        "key": "B",
        "text": "(x - 4)(x - 2) (x - 1)(x + 1)"
      },
      {
        "key": "C",
        "text": "-(x - 2)(x + 1) (x - 2) (x - 1)"
      },
      {
        "key": "D",
        "text": "(x - 2)(x + 2) (x - 1)(x + 1)"
      }
    ],
    "optionsMap": {
      "A": "-(x - 4)(x + 1) (x - 1)(x - 2)",
      "B": "(x - 4)(x - 2) (x - 1)(x + 1)",
      "C": "-(x - 2)(x + 1) (x - 2) (x - 1)",
      "D": "(x - 2)(x + 2) (x - 1)(x + 1)"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "9 - (x <sup>2</sup> - 3x - 1) <sup>2</sup> = [3 - (x <sup>2</sup> - 3x - 1)] [3 + (x <sup>2</sup> - 3x - 1) = (3 - x <sup>2</sup> + 3x + 1)(3 + x <sup>2</sup> - 3x - 1) = (4 + 3x - x <sup>2</sup> )(x <sup>2</sup> - 3x + 2) = (4 - x)(1 + x)(x - 1)(x - 2) = -(x - 4)(x + 1) (x - 1)(x - 2)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 174,
    "questionNumber": 174,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Operations On Polynomials",
    "year": 1990,
    "difficulty": "Easy",
    "text": "If a = 2, b = -2 and c = - <sup>1</sup>/2 , evaluate (ab <sup>2</sup><span> - bc </span><sup>2</sup><span> )(a </span><sup>2</sup><span> c - abc) </span>",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "-28"
      },
      {
        "key": "C",
        "text": "-30"
      },
      {
        "key": "D",
        "text": "-34"
      }
    ],
    "optionsMap": {
      "A": "2",
      "B": "-28",
      "C": "-30",
      "D": "-34"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "(ab <sup>2</sup> - bc <sup>2</sup> )(a <sup>2</sup> c - abc) [2(2) <sup>2</sup> - (- 2x <sup>1</sup>/2 )] [2 <sup>2</sup> (- <sup>1</sup>/2 ) - 2(-2)(- <sup>1</sup>/2 )] [8 = <sup>1</sup>/2 ][-2- 2] = \\(\\frac{17}{2} \\times 4^2\\) = -34",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 175,
    "questionNumber": 175,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Operations On Polynomials",
    "year": 2023,
    "difficulty": "Medium",
    "text": "If x + 1 is a factor of the polynomial h(x) = x³ + 7x - k. The value of k is",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "-4"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "-8"
      }
    ],
    "optionsMap": {
      "A": "4",
      "B": "-4",
      "C": "8",
      "D": "-8"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "If x + 1 is a factor of the polynomial h(x) = x³ + 7x – k, it means that when you substitute -1 for x in the polynomial, it should equal zero. This is because a factor of x + 1 means that x = 1 is a root of the polynomial Let x + 1 = 0; x = -1 Since x + 1 is a factor of the polynomial, then f(-1) = 0 f(-1) = (-1)³ + 7(-1) - K = 0 Simplify -1 - 7 - K = 0 Now combine like terms -8 - K = 0 To solve for k, add 8 to both sides -8 = K Now multiply both sides by -1 to isolate k <img src=\"\"/> K = -8 So, the value pof k is -8",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 176,
    "questionNumber": 176,
    "subject": "Mathematics",
    "topic": "Polynomials",
    "subtopic": "Operations On Polynomials",
    "year": 1986,
    "difficulty": "Hard",
    "text": "Factorize x <sup>2</sup> + 2a + ax + 2x",
    "options": [
      {
        "key": "A",
        "text": "(x + 2a)(x + 1)"
      },
      {
        "key": "B",
        "text": "(x + 2a)(x - 1)"
      },
      {
        "key": "C",
        "text": "(x <sup>2</sup> - 1)(x - a)"
      },
      {
        "key": "D",
        "text": "(x + 2)(x + a)"
      }
    ],
    "optionsMap": {
      "A": "(x + 2a)(x + 1)",
      "B": "(x + 2a)(x - 1)",
      "C": "(x <sup>2</sup> - 1)(x - a)",
      "D": "(x + 2)(x + a)"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The correct option isStart by rearranging the terms to bring like terms closer:\\(x^2 + ax + 2x + 2a\\)Group terms that have common factors, which often simplifies factorization:\\((x^2 + ax) + (2x + 2a)\\)Factor out the common term from each group:\\(x(x + a) + 2(x + a)\\)Factor by Grouping :Notice that (x+a) is a common factor in both groups\\((x + 2)(x + a)\\)Reasons People Fail<ul><li>Overlooking Grouping : Not rearranging or correctly grouping terms to facilitate factorization.</li><li>Misidentifying Common Factors : Failing to see common factors across different terms.</li><li>Simple Calculation Errors : Mistakes in algebraic manipulation or arithmetic can lead to incorrect factorization.</li></ul>Hints and Shortcuts<ul><li>Rearrange terms to see potential common factors clearly. .</li><li>Factor out obvious common factors before attempting more complex methods. .</li><li>Verify by expansion to ensure factorization is correct. .</li></ul>Similar QuestionFactorizey <sup>2</sup> + 3b + by + 3yAnswer:(y + 3)(y + b)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 177,
    "questionNumber": 177,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Standard Form",
    "year": 2021,
    "difficulty": "Easy",
    "text": "Express the product of 0.0014 and 0.011 in standard form",
    "options": [
      {
        "key": "A",
        "text": "1.54 x 10 <sup>4</sup>"
      },
      {
        "key": "B",
        "text": "1.54 x 10 <sup>-3</sup>"
      },
      {
        "key": "C",
        "text": "1.54 x 10 <sup>-4</sup>"
      },
      {
        "key": "D",
        "text": "1.54 x 10 <sup>-5</sup>"
      }
    ],
    "optionsMap": {
      "A": "1.54 x 10 <sup>4</sup>",
      "B": "1.54 x 10 <sup>-3</sup>",
      "C": "1.54 x 10 <sup>-4</sup>",
      "D": "1.54 x 10 <sup>-5</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To express the product of 0.0014 and 0.011 in standard form, we can first convert the numbers to scientific notation. 0.0014 = 1.4 × 10 <sup>−3</sup> 0.011 = 1.1 × 10 <sup>−2</sup> Then, we can multiply the two numbers in scientific notation. (1.4 × 10 <sup>−3</sup> ) × (1.1 × 10 <sup>−2</sup> ) = 1.54 × 10 <sup>−5</sup> Finally, we can convert the result back to decimal notation. 1.54 × 10 <sup>−5</sup> = 0.000 0154",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2020, 2021"
  },
  {
    "id": 178,
    "questionNumber": 178,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Standard Form",
    "year": 1995,
    "difficulty": "Medium",
    "text": "Express the product of 0.0014 and 0.011 in standard form",
    "options": [
      {
        "key": "A",
        "text": "1.54 x 10 <sup>-2</sup>"
      },
      {
        "key": "B",
        "text": "1.54 x 10 <sup>-2</sup>"
      },
      {
        "key": "C",
        "text": "1.54 x 10 <sup>-4</sup>"
      },
      {
        "key": "D",
        "text": "1.54 x 10 <sup>-5</sup>"
      }
    ],
    "optionsMap": {
      "A": "1.54 x 10 <sup>-2</sup>",
      "B": "1.54 x 10 <sup>-2</sup>",
      "C": "1.54 x 10 <sup>-4</sup>",
      "D": "1.54 x 10 <sup>-5</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "0.0014 x 0.011 = 1.54 x 10 <sup>-5</sup> To express the product of 0.0014 and 0.011 in standard form, We need to first calculate the product and then rewrite it in the form a×10 <sup>n</sup>, where 1≤ a < 10 and n is an integer. Step 1: Multiply the two numbers, 0.0014 × 0.011 = 0.0000154 Step 2: Express the result in scientific notation, where the first factor is a number between 1 and 10, and the second factor is a power of 10. To express this in standard form, we can write it as 1.54×10 <sup>−5</sup>.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2020, 2021"
  },
  {
    "id": 179,
    "questionNumber": 179,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Standard Form",
    "year": 2020,
    "difficulty": "Hard",
    "text": "Express the product of 0.0014 and 0.011 in standard form.",
    "options": [
      {
        "key": "A",
        "text": "1.54×10 <sup>4</sup>"
      },
      {
        "key": "B",
        "text": "1.54×10 <sup>-3</sup>"
      },
      {
        "key": "C",
        "text": "1.54×10 <sup>-4</sup>"
      },
      {
        "key": "D",
        "text": "1.54×10 <sup>-5</sup>"
      }
    ],
    "optionsMap": {
      "A": "1.54×10 <sup>4</sup>",
      "B": "1.54×10 <sup>-3</sup>",
      "C": "1.54×10 <sup>-4</sup>",
      "D": "1.54×10 <sup>-5</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To express the product of 0.0014 and 0.011 in standard form, we first need to calculate the product. 0.0014 × 0.011 = 0.0000154 Next, we need to move the decimal point one place to the right and increase the exponent by 1. 0.0000154 = 1.54 × 10 <sup>-5</sup>",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2020, 2021"
  },
  {
    "id": 180,
    "questionNumber": 180,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Standard Form",
    "year": 2020,
    "difficulty": "Easy",
    "text": "Express the product of 0.0014 and 0.011 in standard form",
    "options": [
      {
        "key": "A",
        "text": "1.54×10 <sup>4</sup>"
      },
      {
        "key": "B",
        "text": "1.54×10 <sup>-3</sup>"
      },
      {
        "key": "C",
        "text": "1.54×10 <sup>-4</sup>"
      },
      {
        "key": "D",
        "text": "1.54×10 <sup>-5</sup>"
      }
    ],
    "optionsMap": {
      "A": "1.54×10 <sup>4</sup>",
      "B": "1.54×10 <sup>-3</sup>",
      "C": "1.54×10 <sup>-4</sup>",
      "D": "1.54×10 <sup>-5</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To express the product of 0.0014 and 0.011 in standard form, we first need to calculate the product. 0.0014 × 0.011 = 0.0000154 Next, we need to move the decimal point one place to the right and increase the exponent by 1. 0.0000154 = 1.54 × 10 <sup>-5</sup>",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1995,
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2020, 2021"
  },
  {
    "id": 181,
    "questionNumber": 181,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Logarithm",
    "year": 1985,
    "difficulty": "Medium",
    "text": "Find x if \\(\\log_9x = 1.5\\)",
    "options": [
      {
        "key": "A",
        "text": "72.0"
      },
      {
        "key": "B",
        "text": "27.0"
      },
      {
        "key": "C",
        "text": "36.0"
      },
      {
        "key": "D",
        "text": "3.5"
      }
    ],
    "optionsMap": {
      "A": "72.0",
      "B": "27.0",
      "C": "36.0",
      "D": "3.5"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "27.0 To solve for x, let's use the properties of logarithms. Given: \\(log_9 x = 1.5\\) Step 1: Express the equation in exponential form. In general: If log<sub>b</sub> (x) = y, then b <sup>y</sup> = x​​​​​​. So, 9 <sup>1.5</sup> = x Step 2: Simplify the left side of the equation.\\(9^1.5 = (9^1)(9^0.5) \\)\\( = 9 × \\sqrt9 \\) = 9 × 3",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1985,
      2005
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2005"
  },
  {
    "id": 182,
    "questionNumber": 182,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Logarithm",
    "year": 2005,
    "difficulty": "Hard",
    "text": "Find x if log<sub>9</sub> x = 1.5",
    "options": [
      {
        "key": "A",
        "text": "36"
      },
      {
        "key": "B",
        "text": "27"
      },
      {
        "key": "C",
        "text": "24.5"
      },
      {
        "key": "D",
        "text": "13.5"
      }
    ],
    "optionsMap": {
      "A": "36",
      "B": "27",
      "C": "24.5",
      "D": "13.5"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Given that log<sub>9</sub> x = 1.5, this means that x is the number that 9 needs to be raised to the power of 1.5 to equal. This can be rewritten in exponential form: \\(9^{1.5} = x\\) Rewriting 1.5 as a fraction \\(9^{\\frac{3}{2}} = x\\)\\((9^1)^{\\frac{3}{2}} = (\\sqrt{9})^3 = 3^3 = 27\\)\\(x = 27\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1985,
      2005
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2005"
  },
  {
    "id": 183,
    "questionNumber": 183,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Surds",
    "year": 1993,
    "difficulty": "Easy",
    "text": "\\(If \\quad \\sqrt{x^2 + 9} = x + 1\\) Solve for x",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "optionsMap": {
      "A": "5",
      "B": "4",
      "C": "3",
      "D": "2"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "√(x <sup>2</sup> +9) = x + 1 x <sup>2</sup> + 9 = (x + 1) <sup>2</sup> + 1 0 = x <sup>2</sup> + 2x + 1 - x <sup>2</sup> - 9 = 2x - 8 = 0 2(x - 4) = 0 x = 4",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1988,
      1993
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1988, 1993)"
  },
  {
    "id": 184,
    "questionNumber": 184,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Indices",
    "year": 1988,
    "difficulty": "Medium",
    "text": "\\(Evaluate \\; \\frac{8^{^{\\frac{1}{3}}} \\times \\; {5^{^{\\frac{2}{3}}}}}{10^{^{\\frac{2}{3}}}} \\)",
    "options": [
      {
        "key": "A",
        "text": "<sup>2</sup>/5"
      },
      {
        "key": "B",
        "text": "<sup>5</sup>/3"
      },
      {
        "key": "C",
        "text": "<sup>3</sup> √5"
      },
      {
        "key": "D",
        "text": "<sup>3</sup> √2"
      }
    ],
    "optionsMap": {
      "A": "<sup>2</sup>/5",
      "B": "<sup>5</sup>/3",
      "C": "<sup>3</sup> √5",
      "D": "<sup>3</sup> √2"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "\\(3 \\sqrt 2\\) Using the laws of indices, 8 = 2 <sup>3</sup> (ab) <sup>c</sup> = a <sup>c</sup> x b <sup>c</sup> \\( \\frac{(2^3)^{^{\\frac{1}{3}}} \\times \\; {5^{^{\\frac{2}{3}}}}}{(2 \\times 5)^{^{\\frac{2}{3}}}} \\) \\( \\frac{2^{^{}} \\times \\; {5^{^{\\frac{2}{3}}}}}{(2)^ {2\\over3}\\times ( 5)^{^{\\frac{2}{3}}}} \\) \\(\\frac{2}{2^{2 \\over 3}} = 2^{1 \\over 3} = \\sqrt [3]{2} \\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1983,
      1988
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1983, 1988)"
  },
  {
    "id": 185,
    "questionNumber": 185,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Indices, Log & Surds",
    "year": 2009,
    "difficulty": "Hard",
    "text": "If M and N are two fixed points in a plane, find the locus L = {P : PM = PN}",
    "options": [
      {
        "key": "A",
        "text": "A line equal to MN"
      },
      {
        "key": "B",
        "text": "A line parallel to MN"
      },
      {
        "key": "C",
        "text": "Perpendicular bisector of MN"
      },
      {
        "key": "D",
        "text": "A circle centre P, radius MN"
      }
    ],
    "optionsMap": {
      "A": "A line equal to MN",
      "B": "A line parallel to MN",
      "C": "Perpendicular bisector of MN",
      "D": "A circle centre P, radius MN"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The Locus is a perpendicular bisector of MN <figure class=\"image image-style-align-left\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAACSCAYAAAAjFtTaAAAM2ElEQVR4Ae2daUgV3x/GLbPF9o2MstU2iyS0EivM0BZRWoggW4yixTZNLSuCoDe9iKJXvQzCFiSI0jIsqGwzSiMiMo02TStotUUr6/vne/7NzZum/lLmud77DEx6Z7nPnOc5nzkzZ86Yl3CCO1BRUSF+fn6SkZHRLMeyaNEimTVrVrN8F7+keRzwap6v4bc0xYHPnz/LtGnTJCcnpylf49h327ZtkpCQ4PjMX/AOEDR8Bs1+BD9//hSdPW0qKyuTgoKCWnNVVRXcCoJmUwTfv3+XvLw8ycrKkuzs7Frz2bNn5eHDhzYdjXvKJCcni5eXV625sLAQXmCCZlMEHz58kPDwcPH29q5VEbRytGnTRqZPny737t2z6YjcT+bIkSMSGxsrc+fONfOcOXNk3rx5Ul5eDi8sQbMpAgUtODjYQBYTEyNLly6VuLg4iY+Pl9DQUAd8aWlpNh2R+8no5XJ1dbX8+PHDaXaFkhI0m1JQ0MaNGyc9evSodYmolzbammnLppc/nNzPAYJmU6YWaD179pRHjx7VUj1+/DhBq+WK+ywgaDZlaYGmLdqTJ0+cVPWz3ldoi5aSkuK0jh/cwwGCZlOOCtqECRPEx8dHFi9eLImJibJ+/XpJSkqSqKgoxz1aamqqTUdEGTsdIGg2ua2ghYWFOYCqqxt68uTJkp+fb9MRUcZOBwiaTW4raCEhIdKhQwfZt2+f6D3ZsWPHHHN6errcuXPHpqOhjN0OEDSbHLfu0bQzpLS01CZVyriKAwTNpiQs0LQzpKioyCZVyriKAwTNpiQUtMDAQPH19ZUHDx7YpEoZV3GAoNmUhL4KEx0dLUFBQfL48WObVCnjKg4QNJuS0GFBJSUlBrJv377ZpEoZV3GAoLlKEjwOt3aAoLl1vCycqzhA0ABJfPr0SXJzcyUzM9M8oNbLSk7u7QBBA+RbXFwsAQEB5t007SCprKwEHAUl7XSAoNnp9i8t7d7XP8ajw7AiIiIIGiADuyUJmt2Oi5gH1v7+/gY0HVDMFg0Qgs2SBM1mw1VOR4YQNIDxQEmCBjCfoAFMB0sSNEAABA1gOliSoAECIGgA08GSBA0QAEEDmA6WJGiAAAgawHSwJEEDBEDQAKaDJQkaIACCBjAdLEnQAAEQNIDpYEmCBgiAoAFMB0sSNEAABA1gOliSoAECIGgA08GSBA0QAEEDmA6WJGiAAAgawHSwJEEDBEDQAKaDJQkaIACCBjAdLEnQAAEQNIDpYEmCBgiAoAFMB0sSNEAABA1gOliSoAECIGgA08GSBA0QAEEDmA6WJGiAAAgawHSwJEEDBEDQAKaDJQkaIACCBjAdLEnQAAEQNIDpYEmCBgiAoAFMB0sSNEAABA1gOliSoAECIGgA08GSBA0QAEEDmA6WJGiAAAgawHSwJEEDBEDQAKaDJQkaIACCBjAdLEnQAAEQNIDpYEmCBgiAoAFMB0sSNEAABA1gOliSoAECIGgA08GSBA0QAEEDmA6WJGiAAIqLix3/WXxkZKRUVlYCjoKSdjpA0Ox0+5cWQQOYDpYkaIAACBrAdLAkQQMEQNAApoMlCRogAIIGMB0sSdAAARA0gOlgSYIGCICgAUwHSxI0QAAEDWA6WJKgAQIgaADTwZIEDRAAQQOYDpYkaIAACBrAdLAkQQMEQNAApoMlCRogAIIGMB0sSdAAARA0gOlgSYIGCICgAUwHSxI0QAAEDWA6WJKgAQIgaADTwZIEDRAAQQOYDpYkaIAACBrAdLAkQQMEQNAApoMlCRogAIIGMB0sSdAAARA0gOlgSYIGCICgAUwHSxI0QAAEDWA6WJKgAQIgaADTwZIEDRAAQQOYDpYkaIAACBrAdLAkQQMEQNAApoMlCRogAIIGMB0sSdAAARA0gOlgSYIGCICgAUwHSxI0QAAEDWA6WJKgAQIgaADTwZIEDRAAQQOYDpYkaIAACBrAdLAkQQMEQNAApoMlCRogAIIGMB0sSdAAARA0gOlgSYIGCICgAUwHSxI0QABFRUXi7+8vXl5eEhUVJZWVlYCjoKSdDhA0O93+pUXQAKaDJQkaIACCBjAdLEnQAAEQNIDpYEmCBgiAoAFMB0sSNEAABA1gOliSoAECIGgA08GSBA0QAEEDmA6WJGiAAAgawHSwJEEDBEDQAKaDJQkaIIDHjx/LgAEDzMiQGTNmyI8fP+o9iu/fv8uXL1/MCBIdRaK/f/36td59uNK1HCBoNuXx8+dP+fTpk3z48EEKCgqkX79+BrSIiAh59eqVVFRUmHW63pp12Zs3byQtLU2mTp0qkZGRZsiW7rNu3Tqzj02HT5kmOkDQmmhgY3dXyFatWiWhoaEybtw4adu2rQGta9euZtmkSZMkLCzMadZlun2HDh3Mtjo20poDAwPl9evXjZXndmAHCJpNAbx//14UDguUpv4MCQkxrZ1Nh0+ZJjpA0JpoYGN3//jxoyxYsECGDh0qAwcOlDZt2hjotLUKCAiQ4cOHy7Bhw/466/rBgwc7WkKC1ljnXWM7gmZTDtrh8fLlSykpKZFLly5J3759DWhTpkwRfT+ttLRUnj179tdZ19+6dcsAqa0hQbMpuGaSaRA0rRhXrlyRGzduyOfPn+uU1bO1VoLLly/L06dP69yGC387oB7V7HX8vab+37RjZMyYMQZQgla/V662tkHQdu7cKZ06dZJu3brJ7t276+zpunv3rrkc6tixo0RHR8uDBw9crZwudTz/+hytvLxcRo8eTdBcKs3GHUyDoKWmpppg9XJFQbpw4YLTN2srt3//fvH29nZst379eqdt+MHZAYLm7IcnfGoQNH2GY/WQ6Q38xYsXnXzR1sy637C2W7FihdM2/ODsAEFz9uO/fHr79q1kZGSY+9y69tNbmPT0dHM/XNd61LIGQdu6dasDNAVpy5YtTt3KhYWF0qtXL6dtVq9ejSpPi9AlaP8ekz7s11sZ7bk9f/58rS/SqymtpwkJCS4FW4OgKVh64PpHZLQbWh+0Xrt2zRRQO0F27drl6HK2WjSCVit/pwUEzcmO//RBQevevbupkyNGjJCzZ8867b9hwwazrnXr1nLmzBmndcgPDYJm3aMdOnRIFi5caAqhPZA6PXz40LRmfn5+Mn/+fAdwOgKC098dUN9q/hWsxo5b1KFaVmfI+PHj5d27d38XcdM1t2/fdrqCWrJkiVNJExMTTR3VPoPTp087rUN+aDRoBw8edIC2cuVK0dbs+fPn5uyiQ4UyMzNFhxNpq8YWrf5Iaw4qnj59ulRXV9e/w6+1OuTK6t5X0HQspKdNf4KmD/m17lmTBZqPj0/LbdG0x1GvjX19fSU3N1d27NghrVq1kvDwcDlx4oQDNG2+9aGsXievXbuWcw0PNm7cKHFxceY+Q09K/fv3Nycmvbeozyv1dNmyZdKjRw9zMuvdu7csX75cdHl9+7XUdWvWrJGkpKRaj4oUtM6dO8uoUaMkPj7eeDFo0CDJzs42rLV40A4fPmwKovdqFlx6v9anTx/JysoyN6ba/a+VZ9OmTbJnzx7zu3Xfxp+/BwTTi8Z7kZOTYzVW5qeC1q5dO5k9e7Y5uWvLZdU53SA5Odl8brEtmgVaTEyME0Bjx441lz5Xr16V9u3bOwq9d+9ep+1YuRpfuejV/73S+6xz584ZwPQ1I520M0Trmb4yVFZWJps3bzbPcHUM6alTpyQlJaVlgqatkwav92g66SXjkCFDHBBNnDjRvJCoy7WnR7fVy5kDBw6YyyPtitWmnnPTPOjSpYvx0/JYK6F6q8vd0Vstm14e//ncVls0BU1vV3TS14+0T0DrnV5CWnVTr7ZaVK+jDsHS4VdHjx41BdO3fWNjY024+tqH1bTreEh9mVE7RPQs8+LFCzNGUpdzbroH169fl5MnT5oR/FqpRo4caSqSLndHf/XErY+R/uxZrQlaVVWVqZNaN61LSPVG5xYHmvYs3rx50/GSoY5C1+dAeXl5cv/+fVNQ/Ud7wNQE7frXUeicmt8BrXT6uoxWpKCgII/8zzHqAk1Hi2zfvt100rVY0Jq/uvAb/9UBfY42c+ZM01OpnQF/nu3/9Xtb0n75+fnmRKNvnlstmh6/jrnVXlkLNP1Zs9sfXcYGn6OhD5D6vx3Q5216haEPvLUjoLHP335/Q8v/Ta+igoODDVR/PujXfgG9pNZbGv1zEfralqtMBM1VkuBxNMqBb9++mTGM+m6e1RNp7ai3L3oC0teJ9CXbmi2etQ3qJ0FDOU9dj3KAoHlU3CwsygGChnKeuh7lAEHzqLhZWJQDBA3lPHU9ygGC5lFxs7AoBwgaynnqepQDBM2j4mZhUQ4QNJTz1PUoBwiaR8XNwqIcIGgo56nrUQ4QNI+Km4VFOUDQUM5T16McIGgeFTcLi3Lgf3NGoID1ijBrAAAAAElFTkSuQmCC\"/></figure>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2009
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2004, 2009)"
  },
  {
    "id": 186,
    "questionNumber": 186,
    "subject": "Mathematics",
    "topic": "Indices, Log & Surds",
    "subtopic": "Logarithm",
    "year": 1993,
    "difficulty": "Easy",
    "text": "Solve without using tables \\(\\log_5(62.5)-\\log_5({1\\over2})\\)",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "optionsMap": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "8"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "log<sub>5</sub> (62.5) - log<sub>5</sub> (0.5) \\(=\\log_5({62.5\\over0.5})\\) = log<sub>5</sub> (125) let 5 <sup>x</sup> = 125 5 <sup>x</sup> = 5 <sup>3</sup> Therefore x= 3",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 187,
    "questionNumber": 187,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Types of Variation",
    "year": 2016,
    "difficulty": "Medium",
    "text": "The length a person can jump is inversely proportional to his weight. If a 20kg person can jump 1.5m, find the constant of proportionality",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "60"
      },
      {
        "key": "D",
        "text": "30"
      }
    ],
    "optionsMap": {
      "A": "20",
      "B": "15",
      "C": "60",
      "D": "30"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Given: The length a person can drive is inversely proportional to its weight That is, \\(L\\ \\alpha\\ \\frac1W\\)\\(L\\ =\\frac{K}W\\) K = KW L = 1.5 when W = 20kg ; K = L x W = 1.5 x 20 = 30.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2016"
  },
  {
    "id": 188,
    "questionNumber": 188,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Types of Variation",
    "year": 2021,
    "difficulty": "Hard",
    "text": "If N varies directly as M and N = 8 when M = 20. Find M when N = 7.",
    "options": [
      {
        "key": "A",
        "text": "13"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "17<sup>1</sup>/2"
      },
      {
        "key": "D",
        "text": "18<sup>1</sup>/2"
      }
    ],
    "optionsMap": {
      "A": "13",
      "B": "15",
      "C": "17<sup>1</sup>/2",
      "D": "18<sup>1</sup>/2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "When two quantities vary directly, it means they change at the same rate. This relationship can be represented by the equation: N = kM Where k is the constant of variation. Step 1: Find the constant of variation (k):<ul><li> We are given N = 8 when M = 20. Substitute these values into the equation: 8 = k * 20 .</li><li> Solve for k: k = <sup>8</sup>/20 = <sup>2</sup>/5 </li></ul> Step 2: Find M when N = 7:<ul><li> Now we know k = <sup>2</sup>/5 . Substitute this and N = 7 into the equation: 7 = <sup>2</sup>/5 x M </li><li> Solve for M: \\(M = 7 \\times (\\frac52) = \\frac{35}2 = 17(\\frac{1}{2})\\)</li></ul> Answer: The value of M when N = 7 is \\((17\\frac{1}{2}) (Option .\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2021"
  },
  {
    "id": 189,
    "questionNumber": 189,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Types of Variation",
    "year": 2005,
    "difficulty": "Easy",
    "text": "The time taken to do a piece of work is inversely proportional to the number of men employed. If it takes 30 men to do a piece of work in 6 days, how many men are required to do the work in 4 days?",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "35"
      },
      {
        "key": "C",
        "text": "45"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "optionsMap": {
      "A": "20",
      "B": "35",
      "C": "45",
      "D": "60"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given: The time taken to do a piece of work is inversely proportional to the number of men employed ∴ T α \\(\\frac1M\\) , Where T is the time taken and M is the number of men employed. Given that it takes 30 men to do a piece of work in 6 days, we can write the equation as: T = \\(\\frac{K}M\\) TM = K where K is a constant When T = 6 days, M = 30 men; Solving for k: k = T x M Then K = 30 × 6 = 180 Now we have the constant of proportionality (k), and we can use it to find the number of men ( M) required to do the work in 4 days (T<sub>2</sub> = 4): ∴ From K = TM, Solving for M 180 = TM When T = 4 days; M = ? 180 = 4M M = 45 men",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2005
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2005"
  },
  {
    "id": 190,
    "questionNumber": 190,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Types of Variation",
    "year": 2002,
    "difficulty": "Medium",
    "text": "The time taken to do a piece of work is inversely proportional to the number of men employed. If it takes 45 men to do a piece of work in 5 days, how long will it take 25 men?",
    "options": [
      {
        "key": "A",
        "text": "15 days"
      },
      {
        "key": "B",
        "text": "12 Days"
      },
      {
        "key": "C",
        "text": "9 Days"
      },
      {
        "key": "D",
        "text": "5 Days"
      }
    ],
    "optionsMap": {
      "A": "15 days",
      "B": "12 Days",
      "C": "9 Days",
      "D": "5 Days"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given: <ul><li> The time taken to do a piece of work is inversely proportional to the number of men employed. .</li><li> 45 men can complete the work in 5 days. .</li><li> We need to find the time it takes for 25 men to complete the same work. .</li></ul> Let's define the variables: <ul><li> Let t1 be the time taken by 45 men (5 days). .</li><li> Let t2 be the time taken by 25 men (unknown). .</li><li> Let n1 be the number of men in the first case (45 men). .</li><li> Let n2 be the number of men in the second case (25 men). .</li></ul> According to the given information, the time taken to do the work is inversely proportional to the number of men. This can be represented as: \\(t \\propto {1 \\over m}\\) In mathematical terms, this can be written as: \\(t = {k \\over m}\\) Where \"k\" is a constant of proportionality. Given that it takes 45 men to do the work in 5 days, we can use this information to find the value of the constant \"k\". Plugging in the values: \\(5 = {k \\over 45}\\) Now, solve for \"k\": k = 5 × 45 k = 225 So, the equation becomes: \\(t = \\frac{225}{m}\\) Now, you want to find out how long it will take for 25 men to complete the work. Plug in the values: \\(t_2 = \\frac{225}{25} = 9\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2005
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2005"
  },
  {
    "id": 191,
    "questionNumber": 191,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Percentage Change",
    "year": 2005,
    "difficulty": "Hard",
    "text": "The monthly salary of a man increases from ₦2,700 to ₦3,200. Find the percentage increase.",
    "options": [
      {
        "key": "A",
        "text": "10%"
      },
      {
        "key": "B",
        "text": "15%"
      },
      {
        "key": "C",
        "text": "15.6%"
      },
      {
        "key": "D",
        "text": "18.5%"
      }
    ],
    "optionsMap": {
      "A": "10%",
      "B": "15%",
      "C": "15.6%",
      "D": "18.5%"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To find the percentage increase, you can use the following formula: Percentage Increase = \\({\\text {New Value - Old Value} \\over \\text{Old Value}} \\times 100\\%\\) In this case: Old Value (initial salary) = ₦2,700 New Value (increased salary) = ₦3,200 Plug these values into the formula: Percentage Increase = \\({₦3200 - ₦2700 \\over ₦2700} \\times 100 \\%\\) Calculate the numerator first: Percentage Increase = \\({₦500 \\over ₦2700} \\times 100\\%\\) Now, divide to find the fraction: Percentage Increase ≈ 0.1852 × 100% Now, multiply by 100% to express it as a percentage: Percentage Increase ≈ 18.52% So, the percentage increase in the monthly salary is approximately 18.52%.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2000,
      2005
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2000, 2005)"
  },
  {
    "id": 192,
    "questionNumber": 192,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Percentage Change",
    "year": 2018,
    "difficulty": "Easy",
    "text": "A machine valued at N20,000 depreciates by 10% every year. What will be the value of the machine at the end of two years?",
    "options": [
      {
        "key": "A",
        "text": "N16,200"
      },
      {
        "key": "B",
        "text": "N14,200"
      },
      {
        "key": "C",
        "text": "N12,000"
      },
      {
        "key": "D",
        "text": "N8,000"
      }
    ],
    "optionsMap": {
      "A": "N16,200",
      "B": "N14,200",
      "C": "N12,000",
      "D": "N8,000"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Step-by-Step Solution <ol start=\"1\"> <li> Calculate the value at the end of Year 1: Depreciation in Year 1=10% of ₦20,000=0.10×20,000=₦2,000 Value at end of Year 1=₦20,000−₦2,000=₦18,000 </li> <li> Calculate the value at the end of Year 2: Depreciation in Year 2=10% of ₦18,000=0.10×18,000=₦1,800 Value at end of Year 2=₦18,000−₦1,800=₦16,200 </li> </ol> (Alternatively, using the depreciation formula V=P(1−r)^n:) V=20,000(1−0.10)^2=20,000(0.90)^2=20,000(0.81)=₦16,200 Final Answer: The value of the machine at the end of two years will be ₦16,200.00.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 193,
    "questionNumber": 193,
    "paperType": "Theory",
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Percentage Change",
    "year": 2025,
    "difficulty": "Medium",
    "text": "In a certain year, the consumption pattern of electricity charges in a town was as follows:<ul><li>the cost of the first 30 units was $1.00 per unit,.</li><li>the cost of the next 30 units was $7.00 per unit,.</li><li>the cost of each additional unit was $5.00.</li></ul>(a) If Amaka used 420 units of electricity in January that year, calculate the amount paid(b) If Amaka paid $2,740.00 in the month of February, calculate the number of units of electricity consumed(c) Find, correct to two decimal places, the percentage change in units of electricity consumed by Amaka in January and February.",
    "options": [
      {
        "key": "A",
        "text": "Given:<ul><li>First 30 units: $1.00 per unit.</li><li>Next 30 units: $7.00 per unit.</li><li>Additional units: $5.00 per unit.</li></ul> (a) Calculate the amount paid for 420 units in January:For the first 30 units: Cost = 30 × $1.00 = $30.00For the next 30 units: Cost = 30 × $7.00 = $210.00For the remaining units:Remaining units = 420 - 30 - 30 = 360 units Cost = 360 × $5.00 = $1,800.00 Total amount paid: Total = $30.00 + $210.00 + $1,800.00 Total = $2,040.00"
      },
      {
        "key": "B",
        "text": "(b) Calculate the number of units consumed for $2,740.00 in February: Cost for first 30 units = $30.00 Cost for next 30 units = $210.00 Total for first 60 units = $30.00 + $210.00 = $240.00Remaining amount = $2,740.00 - $240.00 = $2,500.00Number of additional units = $2,500.00 ÷ $5.00 = 500 units Total units consumed: Total = 30 + 30 + 500 Total = 560 units"
      },
      {
        "key": "C",
        "text": "(c) Calculate the percentage change in units consumed:Units in January = 420 units Units in February = 560 units Change in units = 560 - 420 = 140 unitsPercentage change = (Change/Original) × 100%Percentage change = (140/420) × 100%Percentage change = 0.3333... × 100% Percentage change = 33.33%"
      }
    ],
    "optionsMap": {
      "A": "Given:<ul><li>First 30 units: $1.00 per unit.</li><li>Next 30 units: $7.00 per unit.</li><li>Additional units: $5.00 per unit.</li></ul> (a) Calculate the amount paid for 420 units in January:For the first 30 units: Cost = 30 × $1.00 = $30.00For the next 30 units: Cost = 30 × $7.00 = $210.00For the remaining units:Remaining units = 420 - 30 - 30 = 360 units Cost = 360 × $5.00 = $1,800.00 Total amount paid: Total = $30.00 + $210.00 + $1,800.00 Total = $2,040.00",
      "B": "(b) Calculate the number of units consumed for $2,740.00 in February: Cost for first 30 units = $30.00 Cost for next 30 units = $210.00 Total for first 60 units = $30.00 + $210.00 = $240.00Remaining amount = $2,740.00 - $240.00 = $2,500.00Number of additional units = $2,500.00 ÷ $5.00 = 500 units Total units consumed: Total = 30 + 30 + 500 Total = 560 units",
      "C": "(c) Calculate the percentage change in units consumed:Units in January = 420 units Units in February = 560 units Change in units = 560 - 420 = 140 unitsPercentage change = (Change/Original) × 100%Percentage change = (140/420) × 100%Percentage change = 0.3333... × 100% Percentage change = 33.33%",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Percentage Change.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 194,
    "questionNumber": 194,
    "subject": "Mathematics",
    "topic": "Variation",
    "subtopic": "Percentage Change",
    "year": 2025,
    "difficulty": "Hard",
    "text": "A shopkeeper bought a television for ₦80,000 and marked it up by 25%. He then offered a discount of 10% during a sale. What was the selling price of the television during the sale?",
    "options": [
      {
        "key": "A",
        "text": "₦95,000"
      },
      {
        "key": "B",
        "text": "₦90,000"
      },
      {
        "key": "C",
        "text": "₦88,000"
      },
      {
        "key": "D",
        "text": "₦82,000"
      }
    ],
    "optionsMap": {
      "A": "₦95,000",
      "B": "₦90,000",
      "C": "₦88,000",
      "D": "₦82,000"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "₦90,000 <ol><li> Calculate the markup:<ul><li> Markup amount = 25% of ₦80,000 = ₦20,000 .</li><li> Marked price = Original price + Markup = ₦80,000 + ₦20,000 = ₦100,000 .</li></ul></li><li> Calculate the discount:<ul><li> Discount amount = 10% of ₦100,000 = ₦10,000 .</li></ul></li><li> Calculate the selling price:<ul><li> Selling price = Marked price - Discount = ₦100,000 - ₦10,000 = ₦90,000 .</li></ul></li></ol>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 195,
    "questionNumber": 195,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Modular Arithmetic",
    "year": 2020,
    "difficulty": "Easy",
    "text": "The implication x⇒ y is equivalent to",
    "options": [
      {
        "key": "A",
        "text": "-y⇒-x"
      },
      {
        "key": "B",
        "text": "y⇒-x"
      },
      {
        "key": "C",
        "text": "-x⇒-y"
      },
      {
        "key": "D",
        "text": "y = x"
      }
    ],
    "optionsMap": {
      "A": "-y⇒-x",
      "B": "y⇒-x",
      "C": "-x⇒-y",
      "D": "y = x"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The expression ∿y ⇒ ∿x means \"if x then y\" (x ⇒ y). This is a conditional statement in logic. If x and y are two different propositions, their possible truth values are shown in the truth table below: <table border=\"1\" style=\"width:250px\"><thead><tr><th> x</th><th> y</th><th> x ⇒ y</th></tr></thead><tbody><tr><td> T </td><td> T </td><td> T </td></tr><tr><td> T </td><td> F </td><td> F </td></tr><tr><td> F </td><td> T </td><td> T </td></tr><tr><td> F </td><td> F </td><td> T </td></tr></tbody></table> Another truth table is constructed below to compare different logical expressions and determine which one is equivalent to x ⇒ y .<table border=\"1\" style=\"width:400px\"><thead><tr><th> x</th><th> y</th><th> ∿y</th><th> ∿x</th><th> ∿y ⇒ ∿x</th><th> x ⇒ y</th></tr></thead><tbody><tr><td> T </td><td> T </td><td> F </td><td> F </td><td> T </td><td> T </td></tr><tr><td> T </td><td> F </td><td> T </td><td> F </td><td> F </td><td> F </td></tr><tr><td> F </td><td> T </td><td> F </td><td> T </td><td> T </td><td> T </td></tr><tr><td> F </td><td> F </td><td> T </td><td> T </td><td> T </td><td> T </td></tr></tbody></table> From the above truth table, it is clearly seen that ∿y ⇒ ∿x has the same truth values as x ⇒ y .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2020
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2015, 2020)"
  },
  {
    "id": 196,
    "questionNumber": 196,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Logical Reasoning",
    "year": 2022,
    "difficulty": "Medium",
    "text": "Consider the statements: P: Stephen is intelligent q: Stephen is good at Mathematics If p⇨ q, which of the following is a valid conclusion?",
    "options": [
      {
        "key": "A",
        "text": "If Stephen is good at Mathhematics, then he is intelligent"
      },
      {
        "key": "B",
        "text": "If Stephen is not good at Mathematics, then he is not intelligent"
      },
      {
        "key": "C",
        "text": "If Stephen is not intelligent, then he is not good at Mathematics"
      },
      {
        "key": "D",
        "text": "If Stephen is not good at Mathematics, then he is intelligent"
      }
    ],
    "optionsMap": {
      "A": "If Stephen is good at Mathhematics, then he is intelligent",
      "B": "If Stephen is not good at Mathematics, then he is not intelligent",
      "C": "If Stephen is not intelligent, then he is not good at Mathematics",
      "D": "If Stephen is not good at Mathematics, then he is intelligent"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "P implies Q, if P is true then Q If P is met then Q can hold since P is not met then Q can't hold \"If Stephen is not intelligent, then he is not good at Mathematics\" is closest answer",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2022
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2017, 2022)"
  },
  {
    "id": 197,
    "questionNumber": 197,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Modular Arithmetic",
    "year": 2019,
    "difficulty": "Hard",
    "text": "If 7 + y = 4 (mod 8), find the least value of y, 10 ≤ y ≤ 30.",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "19"
      },
      {
        "key": "D",
        "text": "21"
      }
    ],
    "optionsMap": {
      "A": "11",
      "B": "13",
      "C": "19",
      "D": "21"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "7 + y = 4(mod 8), where 10 ≤ y ≤ 30 To find the least value of y, we test values from 10 to 30. When y = 10, 7 + 10 = 1 (mod 8) When y = 11, 7 + 11 = 2 (mod 8) When y = 12, 7 + 12 = 3 (mod 8) When y = 13, 7 + 13 = 4 (mod 8) ∴ 13 is the least value of y",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 198,
    "questionNumber": 198,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Modular Arithmetic",
    "year": 2024,
    "difficulty": "Easy",
    "text": "Consider the following statements M: Edna is respectful N: Edna is brilliant If m ⇒ n, which of the following is valid",
    "options": [
      {
        "key": "A",
        "text": "~m ⇒~n"
      },
      {
        "key": "B",
        "text": "n ⇒~m"
      },
      {
        "key": "C",
        "text": "~n ⇒~m"
      },
      {
        "key": "D",
        "text": "n ⇒ m"
      }
    ],
    "optionsMap": {
      "A": "~m ⇒~n",
      "B": "n ⇒~m",
      "C": "~n ⇒~m",
      "D": "n ⇒ m"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "<table border=\"1\" style=\"width:500px\"><tbody><tr><td> m </td><td> n </td><td> ~m </td><td> ~n </td><td> m ⇒ n </td><td> ~m ⇒~n </td><td> n ⇒~m </td><td> ~n⇒~m </td><td> n ⇒ m </td></tr><tr><td> F </td><td> F </td><td> T </td><td> T </td><td> T </td><td> T </td><td> T </td><td> T </td><td> T </td></tr><tr><td> F </td><td> T </td><td> T </td><td> F </td><td> T </td><td> F </td><td> T </td><td> T </td><td> F </td></tr><tr><td> T </td><td> F </td><td> F </td><td> T </td><td> F </td><td> T </td><td> T </td><td> F </td><td> T </td></tr><tr><td> T </td><td> T </td><td> F </td><td> F </td><td> T </td><td> T </td><td> F </td><td> T </td><td> T </td></tr></tbody></table> From the table, it's only \"~n⇒~m\" that has the same output as \"m ⇒ n\"",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 199,
    "questionNumber": 199,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Modular Arithmetic",
    "year": 2014,
    "difficulty": "Medium",
    "text": "Copy and complete the following table for multiplication modulo 11.Use the table to: Ai. Evaluate (9 ⊗ 5) ⊗ (10 ⊗ 10) Aii. Find the truth set of 10 ⊗ m = 2 B. When a fraction is reduced to its lowest term, it is equal to 3/4 . The numerator of the fraction when doubled would be greater than the denominator. Find the fraction.",
    "imageUrl": "/diagrams/mathematics_q199_diagram.png",
    "options": [
      {
        "key": "A",
        "text": "Ai.<table border=\"1\"><tbody><tr><td></td><td>1 </td><td>5 </td><td>9 </td><td>10 </td></tr><tr><td>1 </td><td>1 </td><td>5 </td><td>9 </td><td>10 </td></tr><tr><td>5 </td><td>5 </td><td>3 </td><td>1 </td><td>6 </td></tr><tr><td>9 </td><td>9 </td><td>1 </td><td>4 </td><td>2 </td></tr><tr><td>5 </td><td>5 </td><td>6 </td><td>2 </td><td>1 </td></tr></tbody></table>for any two correct entries(- 1/2 ee) for entriesfor 1 Aii. for {m : m = 9} or {9}",
    "imageUrl": "/diagrams/mathematics_q16699_img1.png"
      },
      {
        "key": "B",
        "text": "B. For\\(\\frac{x}{y}=\\frac{3}{4} \\tag{1}\\)\\(y=\\frac{4x}{3} \\tag{2}\\)2x = y + 34 ......(3)sub y = 4x/3 into eqn 32x = 4x/3 + 346x = 4x + 1022x = 02x = 51sub x = 51 into eqn ....2\\(y=\\frac{4 \\times 51}{3}\\)y = 68\\(\\frac{x}{y}=\\frac{51}{68}\\)"
      }
    ],
    "optionsMap": {
      "A": "Ai.<table border=\"1\"><tbody><tr><td><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAIAAABGyIsrAAAAjElEQVR42t2SwRHCMBADVZcKUj2uRs2omPDAREM8EDJ8GPSzrT3fWcZ2Ufh1ILFIPERSTl4AGSKo4aS875vOEcggAI5siywCkJ8ACxzJ4JGxyHki70C6nEzds5tasNfvLCRlC5juEgXkpe3WKHD5hvczpEwt568EcEz04xxwzKHMmrTYpL/4Syf6O+AG/R9xyH46TWAAAAAASUVORK5CYII=\" style=\"height:22px; width:16px\"/></td><td>1 </td><td>5 </td><td>9 </td><td>10 </td></tr><tr><td>1 </td><td>1 </td><td>5 </td><td>9 </td><td>10 </td></tr><tr><td>5 </td><td>5 </td><td>3 </td><td>1 </td><td>6 </td></tr><tr><td>9 </td><td>9 </td><td>1 </td><td>4 </td><td>2 </td></tr><tr><td>5 </td><td>5 </td><td>6 </td><td>2 </td><td>1 </td></tr></tbody></table>for any two correct entries(- 1/2 ee) for entriesfor 1 Aii. for {m : m = 9} or {9}",
      "B": "B. For\\(\\frac{x}{y}=\\frac{3}{4} \\tag{1}\\)\\(y=\\frac{4x}{3} \\tag{2}\\)2x = y + 34 ......(3)sub y = 4x/3 into eqn 32x = 4x/3 + 346x = 4x + 1022x = 02x = 51sub x = 51 into eqn ....2\\(y=\\frac{4 \\times 51}{3}\\)y = 68\\(\\frac{x}{y}=\\frac{51}{68}\\)",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Modular Arithmetic.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 200,
    "questionNumber": 200,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Logical Reasoning",
    "year": 2017,
    "difficulty": "Hard",
    "text": "Consider the statements: p: it is hot. q: it is raining. Which of the following symbols correctly represents the statement \"it is raining if and only if it is cold?",
    "options": [
      {
        "key": "A",
        "text": "p⇔~q"
      },
      {
        "key": "B",
        "text": "q⇔p"
      },
      {
        "key": "C",
        "text": "~q⇔ ~q"
      },
      {
        "key": "D",
        "text": "q⇔~p"
      }
    ],
    "optionsMap": {
      "A": "p⇔~q",
      "B": "q⇔p",
      "C": "~q⇔ ~q",
      "D": "q⇔~p"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The statement \"it is raining if and only if it is cold\" can be represented using the biconditional (if and only if) symbol, which is represented as⇔. So, the correct symbol to represent the statement \"it is raining if and only if it is cold\" is: q⇔ p",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 201,
    "questionNumber": 201,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Logical Reasoning",
    "year": 2025,
    "difficulty": "Easy",
    "text": "Consider the following statements: p: The weather is warm. q: The sun is shining. Which of the following correctly represents the statement: \"The sun is shining if and only if the weather is warm\"?",
    "options": [
      {
        "key": "A",
        "text": "p → ¬q"
      },
      {
        "key": "B",
        "text": "¬p → ¬q"
      },
      {
        "key": "C",
        "text": "¬q → p"
      },
      {
        "key": "D",
        "text": "q ↔ p"
      }
    ],
    "optionsMap": {
      "A": "p → ¬q",
      "B": "¬p → ¬q",
      "C": "¬q → p",
      "D": "q ↔ p"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "\"The sun is shining if and only if the weather is warm\" This is a biconditional statement: q ↔ p . q ↔ p",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 202,
    "questionNumber": 202,
    "subject": "Mathematics",
    "topic": "Modulo & Logic",
    "subtopic": "Logical Reasoning",
    "year": 2016,
    "difficulty": "Medium",
    "text": "Which of the following is a valid conclusion from the premise: \"Nigerian footballers are good footballers\"?",
    "options": [
      {
        "key": "A",
        "text": "Joseph plays football in Nigeria therefore he is a good footballer"
      },
      {
        "key": "B",
        "text": "Joseph is a good footballer therefore he is a Nigerian footballer"
      },
      {
        "key": "C",
        "text": "Joseph is a Nigerian footballer therefore he is a good footballer"
      },
      {
        "key": "D",
        "text": "Joseph plays good football therefore he is a Nigerian footballer"
      }
    ],
    "optionsMap": {
      "A": "Joseph plays football in Nigeria therefore he is a good footballer",
      "B": "Joseph is a good footballer therefore he is a Nigerian footballer",
      "C": "Joseph is a Nigerian footballer therefore he is a good footballer",
      "D": "Joseph plays good football therefore he is a Nigerian footballer"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The valid conclusion from the premise \"Nigerian footballers are good footballers\" is: Joseph is a Nigerian footballer, therefore he is a good footballer. This conclusion follows logically from the premise because it asserts that someone who is a Nigerian footballer is also a good footballer based on the premise that Nigerian footballers are good footballers.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 203,
    "questionNumber": 203,
    "subject": "Mathematics",
    "topic": "Stock Valuation",
    "subtopic": "Methods of Stock Valuation",
    "year": 2008,
    "difficulty": "Hard",
    "text": "Use the information below to answer this question. Aug. 1 Received 20 units at ₦60 each Aug. 6 Received 20 units at ₦68 each Aug. 10 Issued 16 units Aug. 20 Received 40 units at ₦80 each Aug. 31 Issued 48 units Using the simple average method, What is the cost per unit of the closing stock?",
    "options": [
      {
        "key": "A",
        "text": "₦80"
      },
      {
        "key": "B",
        "text": "₦74"
      },
      {
        "key": "C",
        "text": "₦64"
      },
      {
        "key": "D",
        "text": "₦60"
      }
    ],
    "optionsMap": {
      "A": "₦80",
      "B": "₦74",
      "C": "₦64",
      "D": "₦60"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The Simple Average Method is used for inventory valuation or calculating delivery costs. When goods are received at different unit prices, the average unit cost is calculated by adding the unit prices and dividing by the number of price entries (not by quantity). In this question, the cost per unit is ₦80 .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2008
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2003, 2008)"
  }
];
