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
    "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAAECCAMAAADKPV4MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURf///wAAAPfv9+bv797m5hAICAAICBAZGSkhKTExOpScnL29vTEpMVpjYyEhGd7e1tbOzoyEjMW9xbWttUJKSnuEe4yUlGtja1JaUoRS770Z74QZ7xlS7xkZ771SxYRSxb0ZxYQZxZzO5kJCQlJKSsXFzntSlKWlnMVSQkpS71JSjEoZ78UZQsVSEMUZEL2EnO9rte8Qte9aOu8ZOu+cOu9aEO8ZEO+cEO9aY+8ZY++cY5zv5ilKEGsZQkoZlGtSGRlSlGsZEAhKEEoZQkpSGUoZEHNza6WtrRApQu9r5u8Q5u/eOu+cte9Cte/eEO/eY8WE5ozvEIzFEFLOEFKEEBnOEBmEEAhSvQgZvXtze+9ahO8ZhO+chGvOpWuEpSnOpSmEpUrOpUqEpQjOpQiEpe+c5u9C5r3vEJSE773FEJSExSlSQghSQpRCQkpCvUoIvZQIQpRCEJQIEMXv5u/ehMWl5sVSnMUZnIzvMYzvc4ycOozFMcVSc8UZc4zFc4ycEFLOMVKEMRnOMRmEMWvO5lLOc6Wca2uE5lKEcynO5imE5pzOtRnOcxmEcxkpc+/mtVLvEFKlEBnvEBmlEKVSnKUZnIzvUox7OqVSc6UZc4zFUox7EErO5lLOUqV7a0qE5lKEUgjO5giE5pzOlBnOUhmEUhkIc61S72vvpWulpSnvpSmlpUrvpUqlpQjvpQilpSlSvSkZve/Frb3vc72cOr3vMXspnJSl773FMZSlxb3Fc72cEHspc0opcylSc+/F73uUYxkIKb3vUr17OnsInL3FUr17EHsIc0oIcwhSc2vv5lLvc8Wca2ul5lKlc8XmtVLvMVKlMSnv5iml5hnvMRmlMZzvtRnvcxmlcxkplErv5lLvUsV7a0ql5lKlUsXmlAjv5gil5pzvlBnvUhmlUhkIlJRjQkpjvUopvZQpQpRjEJQpEM5S78WMve/FzhkISmtSSoRSa8XF7+//Ou//vcWtnMW9nFJKYwghCCkICCEIAPfm7/fv5ub//wAIAAAAACla8g8AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAABcRAAAXEQHKJvM/AAAaHUlEQVR4Xu2dW3bqOpOAcYQj5IuEDbb1Lnt5EucZj8Fj6Hn8w+jVQ+mM4J9KHnqRpnFYXSUJAgmQ7L2TcxJcn3yHEJJylarKukwIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIizC/J0ZGXDb+iBgTbF7NSqUapZS/8rmwOX72lUWRyflnaFIZitropem/QvVZqfGz9bKGcnKAezyoO/9W4u+llYFHZnH8Ib1neRd3i/Vi8c4ODhat8J9+kfts6z+X+FvpDpK/5zKJGPh7W1ivbRstEzmbSSFn13cyScQmCANc4PNhxQO7x42DZ/6bEH8vL5JHTHaWwq77orl/93tI3a9W/SUKg/eB7GP/TYhPgm3V9J2itkpFD05KHh7u+G4X2vKyCfmOSwmKjCWZyQcpuS1XdnB7mHjCnplnYpeXPVM9vIVXc/99ic+iq/R7ReunVFhL/IodLvuNR5Rd1EKJ2rbt9iVanNt1uKlB8tfcBtWDCyC/xK28RVgT5/H7K2ziykvsEuHMCGNM8iJbJJTGXha2HBYo2a9FfdtOcBFd/hkVQTVDGv9hci0+hhEn9fcZRNQ0eZ4Xp++TUZPD5Xnz7waAfT63Jc+n/it8FLYwocguBeuql/cB7ymY/xgsrpxzhXp6bQVtqtMKDHp6ec0G+5mLI8lLXfWfl89ROghWFyI2laGpr8jUfxBVSR5+rOhmmA5MQRkUOFNn9l7bXnx7zqtmf/UzQMlX5y2Fc+4+8S67de7WZVZ+jPVHRbiXfKizcu2vfQ4oebnK/dkxc6vxFM79As93uLUW9NrG7j9It0G5y5npJvbDf5s7BY6Bwl99t4WDyWRqFbs4o9h4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\" style=\"height:128px; width:250px\"/> Find the value of x in the diagram.",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:224px; width:299px\"/> Find the value of x in the diagram",
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
    "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAEWCAMAAADfO5uQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURf///wAAAN7m5hAQGff399bWzjo6Ou/m7729vYyMjGtrY0JKQrWttZScnGNaWqWcnFqM5msQUpxaGWsQGYRazhlazhlahJTO5ggACN7e3ggQCMXFziEZIXt7c+Y65mtaOnuca+Y6rebereYQ5mtaEOYQrbVazubWWkpazuZj5uZaWkpahObWEOZaEOZjrVJKUjoQShAQSr2Uzr1aUlrv5rVapVqt5msxUr1aGWsxGYRa7xla7xlapZTv5lrO5jExKbXvY0rvY0qtY0reMbUZpbUZ70oZ70oZpeaUe+YZe+aUMeYZMYzvpYyU70rOY3t7hCkpKeatpRBjGXNrcxA6GYTOEBmMEFJaWqWtpbVa7+bWe0pa7+aE5uZae0papebWMeZaMeaErb2U7ymMpQiMpbXOEEqMEOatxb2MnHtKnL3v5oSlOoSlEITOMRmMMSmM5pwpUlqMtZwpGYTOcxmMcxnvEIQphIQpzhkpzhkphITvEBmtEISEOoSEEAiM5pwIUlqMlJwIGYTOUhmMUhnOEIQIhIQIzhkIzhkIhDpKGQhjUgg6UpxKUqVahOb3jCmtpSnvpQjvpQitpSnOpQjOpbWlOr3mtebF77WlELXOMUqMMbXOc0qMc0rvELUphLUpzkopzkophOalWuYpWualEOYpEIzOtYylzrXvEEqtELWEOr3mlOal77WEELXOUkqMUkrOELUIhLUIzkoIzkoIhOaEWuYIWuaEEOYIEIzOlIyEzr2laymt5r0pUinv5lqttb0pGYTvMRmtMVrvtYTvcxmtcxnvMYQppYQp7xkp7xkppRnvc5ylawjv5lrOtRnOc72Eawit5r0IUinO5lqtlL0IGVrvlITvUhmtUhnOMYQIpYQI7xkI7xkIpRnvUpyEawjO5lrOlBnOUntrnDEQCDprGSljUik6UpxrUsVahLXvMUqtMb3FnHtSe+b31oyEpb3F7zoQIToxEEJaWub3Qub3EEIxWu/ezkJjQr2tnAAQCOb3/9739wAACP/3/wAAAM6faxMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAABcRAAAXEQHKJvM/AAAbZUlEQVR4Xu1dSW7rOpQ1TVlUYzlT0yKB2oGXwCXEgD8g7qw2mGGQDP4gBRsO6lxKbvISJ1ZDWXo/J+8lkhuJPDq8vJft5Be/+MUvfvGLX/ziF7/4xS9+8Ytf/OIXHeIlv4SsXv3FJwh5xvZJHfHPkyry6mWCqD7+30YgxBQ/MjEmxL90na7Xmx1fVVjyncIrRZq6901q3cf/w9wJMBaHKWGt2AE/JrNza+dzGz1Hz/PnuftlgYc1OxA4WAW0xHerq/y3MNXrolCMwDUxM3+Iqrc+I6cPAJlxn8c3i+sf/jthk22iix2yn8aE7HbZRO4LC3w31dskqfHNMSPI9CPJhSePWuu8erUmXl7xXVIp1zr+2+tXmWWUV7NNitfWGsmSJFmDuCSLG3I/Akgb6SU7mHRtcRaUL7ZEXqxTzlhh7V9p4vKoWKI4mSJ/79IOiQDuSqiWPLVR9FcZuCDPo/UKjG2KWfcZE/BcDGd8abL8r6FNTOdGKf6ktDeXXkxjxcHbJp7+FbQJYUPFdir2G0ZCzM8hxBzq8dMmgjhFdbnJom4M/7fIbbhkimjr4Wb+IGLy+U323FMuIgsfBLFWMl4fRMYFJ5+fPIy+gIiBwoViVp2PDDJOkHjdv/+EG9OzGqHjlmeOst6KyYfyL3TxxNajo02CMra4X1S4f0ScEGbjcHfLRObPBVumyT0j6SCGo8PMaMQmETDxzfZtX53fB4HIECYo60KQAQuutCsRIuhlPIDm/EBmCqGbHXwRDUSUsiWPp9X5/eCeoHViG3qMYOH/8zh/qU7vhFNVGuRWIUaIq9PBwSU0Moyp+EP1f29USRJI4KDSBZTpsYZt4qHZkCgOmUrigRZRq5G6rDoZEmBmGddgbWhSmwhYDxjd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\" style=\"height:278px; width:308px\"/> The pie chart shows the population of men, women and children in a city, if the population of the city is 1,800,000, how many men are in the city.",
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
    "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAEWCAMAAADfO5uQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURf///wAAAN7m5hAQGff399bWzjo6Ou/m7729vYyMjGtrY0JKQrWttZScnGNaWqWcnFqM5msQUpxaGWsQGYRazhlazhlahJTO5ggACN7e3ggQCMXFziEZIXt7c+Y65mtaOnuca+Y6rebereYQ5mtaEOYQrbVazubWWkpazuZj5uZaWkpahObWEOZaEOZjrVJKUjoQShAQSr2Uzr1aUlrv5rVapVqt5msxUr1aGWsxGYRa7xla7xlapZTv5lrO5jExKbXvY0rvY0qtY0reMbUZpbUZ70oZ70oZpeaUe+YZe+aUMeYZMYzvpYyU70rOY3t7hCkpKeatpRBjGXNrcxA6GYTOEBmMEFJaWqWtpbVa7+bWe0pa7+aE5uZae0papebWMeZaMeaErb2U7ymMpQiMpbXOEEqMEOatxb2MnHtKnL3v5oSlOoSlEITOMRmMMSmM5pwpUlqMtZwpGYTOcxmMcxnvEIQphIQpzhkpzhkphITvEBmtEISEOoSEEAiM5pwIUlqMlJwIGYTOUhmMUhnOEIQIhIQIzhkIzhkIhDpKGQhjUgg6UpxKUqVahOb3jCmtpSnvpQjvpQitpSnOpQjOpbWlOr3mtebF77WlELXOMUqMMbXOc0qMc0rvELUphLUpzkopzkophOalWuYpWualEOYpEIzOtYylzrXvEEqtELWEOr3mlOal77WEELXOUkqMUkrOELUIhLUIzkoIzkoIhOaEWuYIWuaEEOYIEIzOlIyEzr2laymt5r0pUinv5lqttb0pGYTvMRmtMVrvtYTvcxmtcxnvMYQppYQp7xkp7xkppRnvc5ylawjv5lrOtRnOc72Eawit5r0IUinO5lqtlL0IGVrvlITvUhmtUhnOMYQIpYQI7xkI7xkIpRnvUpyEawjO5lrOlBnOUntrnDEQCDprGSljUik6UpxrUsVahLXvMUqtMb3FnHtSe+b31oyEpb3F7zoQIToxEEJaWub3Qub3EEIxWu/ezkJjQr2tnAAQCOb3/9739wAACP/3/wAAAM6faxMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAABcRAAAXEQHKJvM/AAAbZUlEQVR4Xu1dSW7rOpQ1TVlUYzlT0yKB2oGXwCXEgD8g7qw2mGGQDP4gBRsO6lxKbvISJ1ZDWXo/J+8lkhuJPDq8vJft5Be/+MUvfvGLX/ziF7/4xS9+8Ytf/OIXHeIlv4SsXv3FJwh5xvZJHfHPkyry6mWCqD7+30YgxBQ/MjEmxL90na7Xmx1fVVjyncIrRZq6901q3cf/w9wJMBaHKWGt2AE/JrNza+dzGz1Hz/PnuftlgYc1OxA4WAW0xHerq/y3MNXrolCMwDUxM3+Iqrc+I6cPAJlxn8c3i+sf/jthk22iix2yn8aE7HbZRO4LC3w31dskqfHNMSPI9CPJhSePWuu8erUmXl7xXVIp1zr+2+tXmWWUV7NNitfWGsmSJFmDuCSLG3I/Akgb6SU7mHRtcRaUL7ZEXqxTzlhh7V9p4vKoWKI4mSJ/79IOiQDuSqiWPLVR9FcZuCDPo/UKjG2KWfcZE/BcDGd8abL8r6FNTOdGKf6ktDeXXkxjxcHbJp7+FbQJYUPFdir2G0ZCzM8hxBzq8dMmgjhFdbnJom4M/7fIbbhkimjr4Wb+IGLy+U323FMuIgsfBLFWMl4fRMYFJ5+fPIy+gIiBwoViVp2PDDJOkHjdv/+EG9OzGqHjlmeOst6KyYfyL3TxxNajo02CMra4X1S4f0ScEGbjcHfLRObPBVumyT0j6SCGo8PMaMQmETDxzfZtX53fB4HIECYo60KQAQuutCsRIuhlPIDm/EBmCqGbHXwRDUSUsiWPp9X5/eCeoHViG3qMYOH/8zh/qU7vhFNVGuRWIUaIq9PBwSU0Moyp+EP1f29USRJI4KDSBZTpsYZt4qHZkCgOmUrigRZRq5G6rDoZEmBmGddgbWhSmwhYDxjd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\"/> The pie chart shows the population of men, women and children in a city, if the population of the city is 1,800,000, how many men are in the city.",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:76px; width:400px\"/> Find the mode of the distribution above",
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
    "explanation": "<img src=\"data:image/jpeg;base64,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\" style=\"height:261px; width:330px\"/><span>\\(Cos \\theta = \\frac{adj}{hyp} \\)\\(= \\frac{300}{600} \\) = 0.5 θ = cos – 10.5 = 60 < RPQ = < PQs So, the bearing of P from Q is 180 + 60 = 240° </span>",
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
    "explanation": "Given: tanθ = <sup>3</sup>/4 Cosθ – sinθ = ? Draw the right angle for tanθ = <sup>3</sup>/4 Recall that: tanθ = \\(\\frac{opp}{adj}\\) Cosθ = \\(\\frac{opp}{hyp}\\) sinθ = \\(\\frac{opp}{hyp}\\)<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAAGSDZWTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL6UExURf////7+/vv7++fn5+bm5vr6+uvr64eHh4uLi+3t7f39/V9fX2VlZejo6ENDQ6ysrPHx8enp6WNjYwcHBzo6OrGxsfT09GRkZAAAAAQEBD4+Pvb29gICAkJCQqqqqvX19UFBQa+vr/Pz8wEBAQUFBRcXFwsLCwMDAzw8PLCwsCgoKIODg1JSUj8/P7Kysvz8/DY2NsPDw7q6ulFRUQoKCpKSkmJiYjIyMsnJyZiYmA8PD2ZmZs3NzcjIyK6uri4uLhAQENLS0jMzM+Xl5ZeXlywsLBEREWFhYc/Pz8bGxurq6pSUlC8vL2hoaMvLy+7u7pCQkAwMDMfHx9HR0SsrKxISEs7OzpGRkWlpacrKypOTk4mJiQ4ODnl5eaurqx4eHoqKim1tbRUVFSkpKY6OjtbW1iUlJWtrayQkJI+Pj29vb2xsbBQUFNXV1SMjI+Pj49TU1F1dXZ2dnfn5+Xp6egYGBoCAgPf390pKSkdHR7Ozs0RERLm5ube3t0hISElJSbS0tLW1tUBAQLu7u/j4+Ht7e35+fpqamtfX1yEhIdra2iYmJmpqauzs7CcnJyAgIA0NDR8fHxMTE9zc3BYWFnh4eAkJCSoqKszMzO/v72BgYNjY2JmZmfDw8C0tLZWVlV5eXtPT00xMTK2trZubm1NTU7i4uDs7O0tLS7+/vzg4OEVFRcLCwj09Pby8vFBQUDk5OUZGRvLy8nNzc93d3eTk5IiIiBkZGXFxcd/f3+Li4hoaGnJycoGBgYKCgh0dHXd3d+Hh4YaGhhsbG9vb25ycnDExMTQ0NFRUVFZWVk1NTVpaWqGhoVVVVVxcXJ6enjc3N8HBwb29vU9PT1lZWRwcHE5OTtnZ2d7e3o2NjcTExMXFxaampqKioltbW5+fn6ioqKSkpKOjo2dnZ3V1dQgICFdXV9DQ0KWlpaenp8DAwCIiIlhYWDU1NaCgoH9/f3R0dBgYGH19fXx8fODg4L6+vqmpqYyMjIWFhYSEhLa2tpaWlnZ2dgAAACpP/S0AAAD+dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A2NkMcQAAAAlwSFlzAAAXEQAAFxEByibzPwAAC7hJREFUeF7tncuZtCoQhg2DlYmwY8GWgFyahAvD4HFNAkZiElMFqGijIuJlun3P+aftHqX4KCguYk8WCLWvi9DWHixBs8YeLQAmpD30s50H+FebQz86Ba4P/egTBNHHXmwelrIi8v43Av4xczihcy4tPYYoGU4QWeXNyZjCQok6JvxSnBP8xUEzZY8A53DAOQESQ7EznBMK7wk5VT36yH78wXqdAHL7ushqlfgHbOd/rUobVqq0xa0TfjxO3MtiCOjsq84o81gawwuc4VMDtayHeFuey2Jts4htsUsnWIlFsSTWftwVasEr7nUez9JJw6HRXtmuEgkcfjZ0W8U6NKu3eq51sN3wzSC1gml4B3TYlhuvY2j6KtLjTuwgUbXGSQCSiEhhkkDWTN9uwSF4zK8wmSjDsiIgPH2YFNh2oQ8PVePJc7MVpyZ4RfMdhblQatu9Sw8lwDTPEhOttuJxD56spnGTK55J0iwPECZ4EpDKdgdB9cqTAEBtH3w02uznqEVwiD16uZDNQekG5GACLLzRemFRUXgExnOH6h20WDmMCSPAFn8kAR0xilIfx2AiTnwC5vr4MrTXRyfQXx+bwHB9pBOG6yMTGK+Pc4JzfcYiEnCvjynDyfVDAmFNksHF0+v7twp/tUVVwHBodl5lnBAoBELH3GmVjmckMKyxuX34qNIvITkg4LBPnZgAgTlXGJ5y2uVFXznvScB3PTgmGN/14cOwheuzNrglLDTa4KaEA8lZeVEcmoWWIeZ/cq4ozBJCYAIf12eF6qpMkSZsgvN5fS3bjMA8sQzyIpbfLKsKEkDKEC96rh/WUGxTWsV7ff9JQAIUsIsUDvYz7ckrCSmxFdhnSezCv4wbDCMkehxhOJj/l39Nc2gkfxx6dDJzENq1t+aAdllNji0yHgLsQ/dzXw60fehSuiOrpAegNvxX/J4c9PahJc4Wx65htA9DgBtagmsfxlGX52BqH1oCjVqjjmZm3+TgQj7sZ5J34roy+LSv2+Kt9m09vCQPfvuYg4PDukCW7GeCHFwlDGPR/skBsXfuin3MwWlOaHmrK9mqfZgcuLe7BWtp26aqlqXCtNftY1tkQ79YkjpPWCCSg+0t+zjD6W1WoL09tvTcI7sSZv1B9uE8mwNcIKrT2IcKUOi1xwD7MLvHlgB2myJ4jSqUIPs2B2cQaP+0oUGw/VlbTEW4fWyLOxb5AtljH9tiwPLQLijhhCOBXX7qHNBOaBT5uK87InleElv2qyfux85/1pMtYHrWGvuyJSRlDsLsg39web7lHLsfSdKNz/r6t2pfcF5zScmw2S1dWwyyr4Ge0B4hVaJ6GG4fmspks1/HqwRDVEpYh0Ar1K+rEGIPEAaXJKsGz+ReebK7ZAS+RM6bO5eGaSFgrCVuc0FVlooUt9YAcdrs4+Xl5dcRJ66vBCBujq6nzOeCEeRW+4I0ZNfULy2CVHXyuWQ4YF7g+PkmwHwm0s+lQxG4nnWfflQPP49unIjFmM/ylLPoHejCBwImfGfQm7/J/mAeJp7N9eFvNJ+RVAu5O3DMlzdEf8c82L+893XN32B/Yv56+1PzWYfb/S5kZv7q6D8zD/Yv1T83f7H+eeHDvyuj74d6HX3h5zUtwGPe2r8En/kL7XvNX7fVxm8+v2rDl9/8ZdF3wTzoT38nzcOSedRvj85k0fw11X/ZPETf86P/svlLov+K+Q/9pi0kbRFr5sF+d1bsrxnDpr1qHuYekztZgnWsS7IWJUhLMbSsm4fq79qvu7btn+E9BgW35ji3Xzc/tW+Vp/FH3uHGtQ3z0PuM9rsir1PVBcExrtgJ9grteOOQkZTrYCqg8HXv11tUNcTiJFs+8U6VXtfZNI+9D1RR/R/Akuz3pNChhFQ9pNdfQhSUPIF5bHCswL0BIebRvn5lvEgViPOixTSDzPfRV7RtkbYbCjKfybM2u4eZx/vKp9gPNI8bjM+wH2oet6/Yo5QEm59E32SEmz9l7rHD/Kz3TcIe86AfwqQ9TsMu8zBGsUep2GUeH/bBrsq+S8B2f2+wJlM/bCRw/yA+Ecy3qxVmwehPhkDTBvuJF9VS2+q6wOIKA3yv9y9CNpZVCVWIwpqVPGX0H3y/pl4SOZ4oUkZ/x/yyejQvzYmigpoC+hNVgKHhraun1HxxY8MIa+p0+gPV844TloFyjt9YlW4fdZB6USg4UVaE2daJ9u3I9xi9+dWaD61dMSX4OMVI9WBNSM0Ho41qUL/9AEhU/k7hb5Ul9ncjDCYKW1dsE9TuDcOpmjTRf4d61/dAAvs4ywlWj9uGp/aPz7egxzNbcCf7cReYnUMS6Nff04Df1BDA9Dw4PmHs+/IMmsYe3EJz3S0lDzLpUxl7gV6W32iedtmN5iXPBb9hM4ml0mP/M5YUghBlWfKr7ib6Qd/fVvxZVp6xmvTy8vLy8vIyct8DeQ9AtvF/UeH/I1rCAr/z/gsB9YQUt46zb0RSQjj/Vf+DelaVbcgdpi9EQruvspwRTt2V3B8Box7IFnX3i/p1zceDn9Q/qHf0/04AdNSD7IaT2L8A9C+ZqM8qyklX40LTb5TBVD2+R/1G+/eXwFy99f99a8yX8qkePoPRL24t/n7v+9RneQFjfzv2/eoC8KrPROno/2L86gHX/1/Lovre//bdd7KsHlAw98fHNL62BqyqFw2Ofb/4LtuqeqOfqJUT/jcb6if+/74GsKne6v/Olb8A9bizhrA799acRpB6GPvD2DfZM3LPIaTm44/v1B/me0S249z3WwhXb258fNfC9w71MPZnXzb23aU+E2buY9+Yl//MPvXAV/l/t/p+7gsH/9/5Eepx3Zuofu7zr4sgQj1chGPfQf8/Jko9eFzh3A/0/1fXm3xHqt/t/weUks6CqMoK/rfZiVavL10b+wlpDFXVc5qIaPBLNYAi1xk/oF5UMPZlWr+vDPQfo9A8ZV+UECUDtfACWStQtb1/vxsjqIJkjP4PwBDVT94+ZUscZEPWTY1Ol6pj2vlm70Y8o/9nlN14O9jz6/vAO5W8Ma0x1vcjWr+uRua9BdTrv1rzuP1QomxAP9P6j6nXwoQi/PPveoP6oqkbbGHPWxWDFqtVH4h6AwI3PbV9L9IjpP4g7x4T9bKqUaYmQns/FPWmoH4y8X+pGpMs1IHHqMfbU0Uppc4t1vwUvkfm/hd1x1UlJcwJbnzgbI6eoSPWU2l8j0hI2Nz11+BYEHnQfACdAO1RStn3wkd7PAepwM+OVjQzGHqM+yek8r1WB6MIq/+ZYj9I1e4tqL8z/v8PBZCw5hu0/228fzzpol4P1CbCF+c+zyJxzdfoKZSZQsKPJ5dB8pqv1aJ+M4t6Nmf4HnH8/2DS+96Co8pzUk5I+qjXI2oYTdNn3/dI6PuhmvcHqB/G/vbdEwHfd6p2afKYgbm/hRv/g/6HBgDsned0sdHKLONNFvL0Ax96NvlEoObzgrbjf7ggFblHp6K8aPVNPke/nvvgMhJ89rga8BH1sC5EqZeUM4hxuGo8/S5g1P/QDf/z/l7gODVOfWFU96+AUVzlONXv7DLqo/hQj3tzo9RXc/WoXeQF098mCjzQ//Me75DvB/TmRvA5Ci8Kvdenguifqm9NRtKaz/KqrHKmh/i4zE+4KvvEBdSNxy1up6v5uKEdgrvIGVfS3OKyn/fghv9n3dz4qPmgPrbH0ws7DMMb1APvoEHP/bBjsO/vZt7jYc0//IVzuLw97fUG0P/91yTfXwbp2r0DDnAX1GP0e84DDz71x79scKnmI/qBh4foT9nuewQM+HTUW9L/mIfdcY5Xlw6QbZiVHwP6vRL7epbbD+bk2oq5zXknUPNv4+I/D+lDT0kH9Fv8/iX97gA2DU865jf6l7dye9Hf7/uXKGTz7BXLM8FtCb/67dp6a8Jvfj0TRKu84/xH1Zs5bM1/Ur2oClyizn/P99hBl7g7QylcqaH6q3l+iqrVf89Br1U++jbVmeR8uj3xt8iZsznv5eXl5eXl5eXl5Vyy7A/uZGcYIbYdZQAAAABJRU5ErkJggg==\"/> Given that tan(θ) = <sup>3</sup>/4 , you can use trigonometric identities to find cos(θ) and sin(θ) and then calculate cos(θ) − sin(θ). First, note that tan(θ) = \\(\\frac{sinθ}{cosθ}\\) So, you can write: \\(\\frac{sinθ}{cosθ}\\) = <sup>3</sup>/4 Now, let's solve for sin(θ) and cos(θ): ​sin(θ) = <sup>3</sup>/4 cos(θ). Now, use the Pythagorean identity sin2(θ) + cos2(θ) = 1: (43​⋅cos(θ)) <sup>2</sup> + cos <sup>2</sup> (θ) = 1 Now, simplify and solve for cos(θ): <sup>9</sup>/16 cos2(θ) +cos2(θ)= 1 Multiply both sides by 16 to eliminate fractions: 9⋅ cos <sup>2</sup> (θ) + 16⋅ cos <sup>2</sup> (θ) = 16 Combine like terms: 25⋅ cos <sup>2</sup> (θ) = 16 Now, divide by 25 to find cos2(θ): Cos2(θ) = <sup>9</sup>/16 Now, take the square root of both sides to find cos(θ): Cos(θ) = ± <sup>4</sup>/5 Now that you have cos(θ), you can find sin(θ) using the relationship: ​sin(θ) = <sup>3</sup>/4 cos(θ)​ sin(θ) = \\(\\frac34 \\times \\frac45\\) ​ sin(θ) = <sup>3</sup>/5 Now, you can calculate cos(θ) − sin(θ): Cosθ – sinθ = \\(\\frac45\\times \\frac35 = \\frac15\\) So, cosθ – sinθ = <sup>1</sup>/5",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:137px; width:250px\"/> Find the value of x in the figure above.",
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
    "explanation": "Given A right-angled triangle, where tanθ = <sup>3</sup>/4<img src=\"data:image/png;base64,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\"/> Cosθ– sinθ= ? tanθ = \\(\\frac{opp}{adj}\\) Cosθ = \\(\\frac{adj}{hyp}\\) sinθ = \\(\\frac{opp}{adj}\\) Using Pythagoras’s theorem 4² + 3² = (hyp)² 25 = (hyp)² Hyp = \\(\\sqrt{25}\\) = 5 Cosθ – sinθ = <sup>4</sup>/5 - <sup>3</sup>/5 = <sup>1</sup>/5",
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
    "text": "<img src=\"data:image/png;base64,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\"/> In the diagram above, find the value of x.",
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
        "text": "B. a + 7d = 5(a + 2d) .....(1)a + 6d = (a + 3d) + 9 ...... (2)In (1) a + 7d = 5a + 10di.e 4a = -3d ......(3)In (2) a + 6d = a + 3d + 93d = 9d = 3since, 4a = -3da = -3d/4substitute for d = 3 in -3/4 = a<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAdCAIAAAAvuHXAAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAApRJREFUaEPtWT2WgjAQDnsW2YLHCfAEuo3VttuRUhs7SzsbKN0jWG2z5ATrCXgWkru4E/6JAcMSYvY9UqFOZr58fpmZBOt2u6FpDGbgZbCHyQFjYOJRjQ6M55GSEGNCBaulBONQ9IMaZnp6gfxowEgCz8uAe36QVIAi3ys/imzgOz/Shh/QFCD5oIboMbmg95S+yP08fRcio+Ee7dazXBkim9l6h/aaREnwMs5AJu9oiUlDsIbwuDj+ML4ouSJ/95YzR79P7mpRwhXaINtBFfE992JvczebMXtFXnxtpBS9PNJwbnFjXqiJYMuylyfk2JUAz9xK721gTe75kvRmpGNCG8jFKog3NoM/38d387UlF6lASeQjVGQ8eBYlv4YNZAKxlVS4PxpBVuaR6dVjmwpAApkuZ7aTp3L4UH+GPS+0QfQae46tUo8PfEED8bFBwbZKOOmEP/4liqeBxgSlsFmNxTb1iq4Y1L07JkSuo8iNDOGxjYFHLOntezr+J8N5hB4jCvwgqrWU5WJAn41ec3Q1dgXIeGRbprXF5Ken4m4bVdv81GXddIMEHlmJzJef7f/6geK5bPyf6Ny+ZkSOx+OoVVUV5/Ig6xHTvie9C5jDsOwN3/reuxX0qVVvXbbVIjiqlir00wyoA2QjYppJSgmOq8dReXyu8xeUXM4oPzfS8HCSl/VkWWcAinVef9mNVf6s8S7quTJSFt0CT5OwhjNgxvlasA5WKDqL1vC1S3qQQmIoj5CpL25Huy9JgQIzSSRG8kjwAW23jgIWhrqQRmIgjwR/rY7F2wQSanprIGK8DxJlFUuRI/5gPN7p6hHgXkjMve9hrwfNOOnLIDGWxySA65MRz/qP1Fj9LoVk6h+HlqJs/i+riD6bsKhdbgAAAABJRU5ErkJggg==\"/>∴ a, a = d, a + 2, a + 3d, a + 4d<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAdCAIAAAAvuHXAAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuBJREFUaEPtWD12ozAQlnMWSMHzCfAJcBpXbtNBaTfuUqajgZJ0aV2lWesE2RP4uQjcxTuSAPMrjRCbePdJTfLsmW9mvvmRNYvr9UrsMWbgwRjBAjAGLI/z1IHl8e/zSKPVgp9VRFXWinRVC6eFSrrzfcEs3WzQSJhllrWwOI5wWOg1kPSwBsKRszFejzRan7c5XEPXfEvWKibzCxHCp+Xb8ZcGkRB7lBOvzWx4YlBwPncOOidF+vzqvTN/wYd9DKkHNxLuFLgVhtsnPFYvHBUb0r5eihicR+Kfv+TcBBkPuaBfJHzRcJg4QZYFLposiaCz+xS0O67nh5sA/gkykYci/SAbjZSQoXCkbDyAjbIh62YS3RRskvPe5V3yesbEyZrIXR+J5+LzPoL7tp7S1iVYkcaXlwxorA+Nj96h+YF+OEo2ygaS/ckTn9SdppDPTyFBC9dYwxbyJCR+1ZgIP/kMSsKkGgqlCoBjve8ZGQhn2FflfV3Q9HlPEkU62Vzmo531FCbbEhkY6Fq3yw2qSKP4MdtB5cHQra5GKMatbjGOhjPOhqoQiR9iSgISV/Knm3xWwNXh1XeC8hcHoMprAlONrFBupyxB+FC3pHlZD4TD8cfYWNh3oWH7CHVlX89i5f8HsTzOk2PL4zw8LvAwkkkKv/b6OJjJO6j4L0LZewZfSDJJ29c/ySN7S076sTxZsR/tfUHZevzJeswvv32dNVTt62TFfrR3BtV/msPzR/6Ugl3eyFORPZ0kuuOKrY0F5iF3b1DdvmZLp6Vi0wAbw8FdnlJ3TLEuNiVCLXlvUG0eaRSTw6GznEYOEBNdYcIcoXb126GaPNLoY1NXGk21llcmuhWL0613Um3uTCMhSK9ak6npD2ZKVcrtlRVslzCrttZkNkeYJZDObYH3ivQ3exNXdhzIRFd4Yo7QJFQ/ocObTqVXfR7ZNn9KRZVb/cm6FY3TrfeK6Ruh7PsaeY0qxP4A9Cjn5uNtKaQAAAAASUVORK5CYII=\"/>"
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
    "text": "What is the equation of the quadratic function represented by the graph? <img src=\"data:image/jpeg;base64,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\" style=\"height:216px; width:238px\"/>",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:163px; width:300px\"/> The area under the speed time graph given the total distance covered by car. What is the average velocity to two places of decimals?",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:287px; width:250px\"/>P, Q and R are subsets of the universal set U. The venn diagram showing the relationship.(P∩Q)∪R is",
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
    "explanation": "Given:The venn diagrams in the options(P ∩ Q)∪ R = The combination of (the elements that are in both P and Q) and (all the elements in R)→ The Venn diagram that depicts this is<img src=\"data:image/png;base64,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\" style=\"height:164px; width:150px\"/>",
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
    "subject": "Mathematics",
    "topic": "Set Theory",
    "subtopic": "Venn Diagrams",
    "year": 2017,
    "difficulty": "Hard",
    "text": "Out of 120 customers in a shop, 45 bought both bags and shoes. If all the customers bought either bags or shoes and 11 more customers bought shoes than bags:(a) Illustrate the this information in a diagram;(b) find the number of customers who bought shoes;(c) calculate the probability that a customer selected at random bought bags.",
    "options": [
      {
        "key": "A",
        "text": "A.<img src=\"data:image/png;base64,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\" style=\"height:229px; width:300px\"/> Before we put anything in the diagram above, let us analyse the information given in the question.U = 120(S∪ B) = U = 120(S∪ B)c =∅S ∩ B = 45S = S<sub>o</sub> + S ∩ B --------------- (1) B = B<sub>o</sub> + S ∩ B ------------ (2)S = B + 11 ------------------ (3)S = S<sub>o</sub> + 45 ----------------(1) B = B<sub>o</sub> + 45 ---------------- (2)S = B + 11 ------------------------ (3)substitute for (3) in (1) B + 11 = S<sub>o</sub> + 45S<sub>o</sub> = B - 34 B<sub>o</sub> = B - 45 {from (2)}"
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:167px; width:297px\"/> Use the Venn diagram to answer this question Find Q' ∩ R.",
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
    "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACmBAMAAAAIZS/4AAAALVBMVEX////+/v79/f0KCgqoqKj5+fkqKipCQkLe3t7v7+9eXl6Li4vQ0NC9vb1ycnKs6/snAAAJqUlEQVR4Xu3b729b1RnA8ecc5WqJm0TnXu1KwEC694gj0WrwxlFisBdF6a/R0ereIx6xtBNvzGwPogopmw2hnQJhJGvZZFhLSQpVtdB0bQUKS5sVskWWKloJFRQopBpQKSylpWjr3zDHoSGO7WuH3pOraf3Kr+6LfPQ898TKlR343t3qVrrFWZC+RHSD9IUI1r/t9FY9SL++/TKw4HjSkPk7CY5nunVhLDheQ/uh9WNWUDyRoiv92+ckBJXga8LvaW5QPJX2mnCncALz0f1R+DfCDsonwrkQTmkWBJWwzsXbtcD2T3QGI2+gG5gPeb8vuPsPJO8/KxwIsJE+tAPkV2v/jAFhrLxvQWm6v7xh8PkXKeeXG59KS/rpcyFRIK/ZJxyR+eibEm0UEmqeX0fho89MKbrkSnyf/yoVBv9bzhW1+7jBYOBj6Mzl0K7ZJ43tmp8+kdamU0LW7jc9Rvz0gcEPfqUhqdVnw3+W4G+hbq32+eFPT/rtNz5OV+DPzArmr68lNWQ1++ks+u1PdNbum+ms9NmH/llZo6/ra1q47rOvv/C0UZtvSGyOUA7+Zta1aFCTL9Ad+IspffZpU5TWNj9FZ30Hos++3jD6LNTm2zg+Lf0+/4Y9niO1+bKxXXIEAKYDYz751Jk5Vdv8BjZFNWHP6wBE98knPHQ/talV3dfc4W7QADRnX/ZnWb/m19xQjApeg0+d/n/J/T8f3L92dN/OjcQvX972OErBqvtCXtx7qfPQW7m6xME3PvXNR0y6EqG6r2G6eSp38Po7De/v7f0K/ArFRCcXVg3+3U/cdTR7cPIdMrx36zGygkcMr0zB+g8jZ9V9CEXgBHKgzvCLV4+U8Uk5QDegWgeOQEkjWSjpkfvrrxWABng1W84yCCu9JvdtqNK29tJrPSdLr81Ft1ze4NFWKUt96pwJr1JtL0koSRTm927kZC3zbwtHvfe4FbHUN9CCao3narn/jeEU6LYOlSIMy8xPkTPdOxg/hY5eVOH5f9mlHYluDdHVK8bL+8ir+MbZiGFX9Vn/9YgmUdiVeKPswyGxeDWfhe7X9BK/eG2GbZ05HgGXGZXH4JYNZSJQJb05VvX935DaSGvK82cR+J7RtUlpVfGFMOPvpjRQ4RP36v5qvune/URzxAQVUeeFt6vO74Zi22OMqfCJ038YqvgoD7TGu0FJxB54itjevrDWJ3u6mRof74pSl3j6/J5M3/YYUeQ3RSmazMvHuhYIRRT54vYrH0n09PnD0cE9ynxnpoNzy8t3zobD4ZQaH1BsPybQ02dnd16/0k2V8FRic0Tz9huubBzaHlPkM7txt2F6+lo8k4ingIGSiJbJCsfLb0pmMj3dBFT5iSy6Xn4oZeD2CAVF0U2d6Dn/upSw1sWU+dB/2Ntf35o+0aPs/gMMPGV6+uPJTG/eVxWpi2pWJZ/YvD7z3tDQ9ggBVTVFNaeij6KppfD8R5Xtv+FKruL8IMTDuwcH8+//miqeOOPTFX1dOK+E50sRZb49c41U8gkXE8fzjUYoqEo0xyr60NWQhHzN6vYP/Me7QQdW3hf3JAYL958wZb6WyXLbLu9bzeFCKYW+cTWLsrxPZKi3cP9j6s4fWgNjaDoV5p+ZhnwhdT5ozitPU1HBd+ZyC+dPnS/4w1HDleX9tXMPnc93TuH8JtY/oyEr798bXiilq/Ml25xDq9QnNrWGn5nKNzkRIaCw8Q4hS33K0TozC/m4yvNHADZ18HI+CrlpTLDC+Qd1EfZoB5bxAUVDxoGF809BXay5Q9ilPpX2jtbrhQrPH+q682ujzPyEy1D421KgMu1y2fMn3AO7zxc6p3T/YH/4u5dLfYLO+DSA2ve/Qs6el9xy/p2Zl3mhdRFNpS9e/71dxpdNrUczhXpSVKnf+Bgp9YHvaE0sFFfrG43JvlKfWP3HhhYaVrt/wzrXAYwt99mZWcPQbcOw71B7/ky3uQO5tcwHbTQHN84/qEzDNX8V6LBinza2nf+29yNUrX/7iZfRXeaTULgtHp4vGU5RptAXCOmsdJfvf+at/0xdn+8fE90EFEaEGH1OYrFPYC5HYaGQ4v1zPPelkMU+NIz26eyGT5jK+TnW7TKKfYM2tSwCoRgojbHGds1e6lOUex6Y/Lapz9TOX/h6nyg6f5pc+ulpoluxD9rcR0U+RXvzpcUuRkB1M1+Rpb6JWhIWKzyiK02/L6YV+aIuisJgN86fptpv2k3JEp8aj/xy6fyG4vNHRcYVur7oa8746cHF9qi+/8TEKx+jw/VFf6gnvKQUBbWZvP9JlJIs+nVt3xxfbDRCVPvujhbNkIv7h4GnYTXPv4n1D0jB2Q2frB8r/v6Lch/Hp3H/4vwNPW9e+q6LyvdPpXP2mCsXfGpbdeGiUhSUt+Ynms0WfHQORCeXNBHRlPOkPvkc3vCt8Q4oOn8U1Dd3GAv755psSGdtvuRrGpHV8F+J0QVfuMO7yFJgXYSo59mOdrqwf+Fc2L3hzaHFnt8UAfUROtcJOsvPb9b3JDNL3v9Ge1Ie8xsGAwADCIObyzoTodwZ6RPWQPv58y+e/673Pc6fKdABABTCujmeih9GQVrz/ty1IsLz83+BXAJQRPcm5zeEtX5M5PdvNe10io1mj8+f1iLyeV9KuNn52SNRPb//tTMtg8XtiYnK8ztQ2D/y0vnJinzkjfG36UjfHYneo73HlzbajRXn57/4AggB4XH/a+9s+/TIqxPXhp5/cGhpw16//3VtPwVS/7Epl/nUMXBF7Ue8c25n/Gp7lqOrS8M20OaGdIkdimHlura0nTY3zwpc7ruNmRU3/1dX2/FM5mjx1baMR+lw68Z4TiAUZ/CmxMrLhNPhcGs8HG+LJ8KJ/Ks1kS+d8Cjvn0o+i8vvv3C6hr5HI59vSZ/a8fjWrz/b1za0d/STa0PV2tL6ddeGzpLzb3CElUYIjEwe2js2cPrI5IZ1vfDhoQ++BO/o7T27QHNQluzfEC7RVxYiG5364/NjF945Mnls07vZDx/950mKLqKtV8oUn+QEOporlvu2sPQVZjr0rW3D28buu3xk6tpE+sGLFz89qQmHC71iBgcqXG673J///x2dOpi+dCk+O/nrrs2HtiX/8BUh4J1OOCGMEfClkc+nP7h74+ev/fsb2Hdv7ou6WVjdRgZzYLrQmHvNthiy+txq+32a5FIgBSE5Coesus8F54gShUSO0lp13zClcPN44WWwVfdtalGLUw6cC4ME4EOQ3fJv+QF1y7/lk//3+V90GASZYQXKEx3+h9J1PUieAATqw+s5FiS/9sQJYCXAfwEn52Bf94oNCQAAAABJRU5ErkJggg==\" style=\"height:166px; width:254px\"/> The diagram above is the graph of y = x², the shaded area is",
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
    "text": "Which of the following number lines illustrates the solution of the inequality \\(4 ≤ \\frac{1}{3}(2x-1) < 5\\) <img src=\"data:image/png;base64,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\" style=\"height:211px; width:250px\"/>",
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
    "text": "<img src=\"data:image/png;base64,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\"/> The solution set of the shaded area above is",
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
    "text": "Which of the number lines below best represents the inequality -3 ≥ x ≤ 4? <img src=\"data:image/png;base64,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\" style=\"height:238px; width:250px\"/>",
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
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:238px; width:300px\"/> Which of the following equations represents the graph above?",
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
    "text": "<img src=\"data:image/png;base64,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\"/> Which of the following equations represents the graph above?",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:117px; width:180px\"/> The equation of the line in the graph is",
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
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:185px; width:300px\"/> The equation of the line in the graph is",
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
    "text": "Find the curved surface area of the frustrum in the figure <img src=\"data:image/png;base64,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\" style=\"height:183px; width:218px\"/>",
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
    "text": "Copy and complete the following table for multiplication modulo 11.<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADiBAMAAACVR8f4AAAAAXNSR0IArs4c6QAAAC1QTFRF////8/Tz5OTk09PTxMTEs7Ozl5eXfI+jmIZ8hISEenp6hXBjb29vTExMHBwc6TE6iwAABNlJREFUeNrt3OFLG3ccx/Hf7y4GKhn8LllCWxQuiRZ0DVyaKGi9cRlxzFHh3HaBihlRyEHEDrb9CXs2NlhlCAnpQB0OpdvfMF0rKDpYYgrC2ifd/o8Vs4efn3Cl/lLx+3n4fvICOU/4SsJY1OjRogZjWr1ne8IY3/d6tNI/jPEn3MATHHdmvJmun+lhH++HSZiXrRruSR+umVyDvRE709/J4e3FYB53c3BTsl6Q9HRXFwxuFeeQi3tE0q85kp47T+cSvY900kknnfTLqvOhYrZ3evzb7bUs1DWsa6kk1LU7AumaydOmTOcPloy7baTzewLqg4d7UJ9quki/7YZO/5Dp+sES/+gXAfS+F1jP5CyoH8RbQNd/cwceNmV6/Cs//+OkA3S9jHW7hPUT3ga6NlXJmLaQ6NfdxJFz3QU6s7E+22xBfWfsJdBZf8UWGVOqx/+2AulR9hTqo4dyXUj0xJf3va/vOgF0z8D6p7EW1gcLC0yih7a+4fPfmQH0st+C+spCBemRSrjzTKbz7xeN9zoM6XGs99UtqCfWBNJDFq+5Mp3d2qouz/XuTTu+9gn9jSOddNJJJ5100km/tHoKLr0Rhf2Wm4IbdQL2rt7v462Pw7zilGBfzvqBLue19Pn/HTBU/Hegj+EVcNYt3ENmwB7r6VOXpt840kknnXTSFepRrMvv8ybUtRTUuWApU67zD7HOJwTUb9QXoT5St4DOE45WX5Lr8edYD/2J9Ux1DuoP7u8CXfvCvfb0VK4njrEeP8a6nTOh3oH3ef2nSsaaFVKdlbHObIn+eBXq+0Mnge/zwfWxVAfqs42XCvQc34J6froF9Tf7k1/It6FeG/kd6RE3srnN5Pq4RB/B+kijAvXJpoX0sKMfrJ6jc6B3O9RZikGdZ/G7TrCooPc86aSTTjrpV0U38DY4zHHXgBuQ9JsO7je6esTD2x2Gecadhv2eI+lZD+7j9JmuF/GcIdzNadxFEc/4DPdYV2d4WZw1E3dd1oWkd/V+yVO3xOBCAZ+usCXpSm6V/fT7TjrppJNO+lugx/05qIeqcwr0TH0R6pG1JQW6nTehPlhMKtBnfRfqdm1RgT5TakN91Oso0O/wDtTTrKFAL0VPoD6T2legz/vrUJ/yNxXoIc+Euu5Z9KYlnXTSSSed9IB60oBbveBbZfpMj+zAbe9Owt5052F/VFiG/ddsA/bHXV3P4Vkx3EVa0nPBun6mh4LeKjnur3erjFzsrfIa3SpJJ5100km/8rpeNaGuKbld2LV1qN/29xToh9E21BeU3KyeSe51y+xAgV72/4W67Z8q0If9E6jHq/sK9NJQC+oT6bYCfXalgp/5xkMFeqwooK4XTQU6EwzqzKD3POmkk0466ZdRZ3iK9Bxcfi8N+4Ts+0id1/qe0rCPVxmHuWaVgvWkjxd7G76flsHxOdx1B/c+S9JNSf//Rn3RzzxdSkknnXTSSb/q+s2jDaiHj/YU6BmvAPUBr6BAt/MC6pmiUKB/frwO9feV/OSHox2ox5VciT9g+1DPsYYC/dFYG+rlYkeBPlJ3oZ7YWVSg86SAOk8JetOSTjrppJNO+qW6lFY9tNJfw7DPux5cuSDpWdwXzv8EujWs4BPoPxs92ruvdO34eY/24pXOt3d6tO1Nxpghejb2H7uotZYCxAKOAAAAAElFTkSuQmCC\" style=\"height:181px; width:200px\"/>Use the table to: Ai. Evaluate (9 ⊗ 5) ⊗ (10 ⊗ 10) Aii. Find the truth set of 10 ⊗ m = 2 B. When a fraction is reduced to its lowest term, it is equal to 3/4 . The numerator of the fraction when doubled would be greater than the denominator. Find the fraction.",
    "options": [
      {
        "key": "A",
        "text": "Ai.<table border=\"1\"><tbody><tr><td><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAIAAABGyIsrAAAAjElEQVR42t2SwRHCMBADVZcKUj2uRs2omPDAREM8EDJ8GPSzrT3fWcZ2Ufh1ILFIPERSTl4AGSKo4aS875vOEcggAI5siywCkJ8ACxzJ4JGxyHki70C6nEzds5tasNfvLCRlC5juEgXkpe3WKHD5hvczpEwt568EcEz04xxwzKHMmrTYpL/4Syf6O+AG/R9xyH46TWAAAAAASUVORK5CYII=\" style=\"height:22px; width:16px\"/></td><td>1 </td><td>5 </td><td>9 </td><td>10 </td></tr><tr><td>1 </td><td>1 </td><td>5 </td><td>9 </td><td>10 </td></tr><tr><td>5 </td><td>5 </td><td>3 </td><td>1 </td><td>6 </td></tr><tr><td>9 </td><td>9 </td><td>1 </td><td>4 </td><td>2 </td></tr><tr><td>5 </td><td>5 </td><td>6 </td><td>2 </td><td>1 </td></tr></tbody></table>for any two correct entries(- 1/2 ee) for entriesfor 1 Aii. for {m : m = 9} or {9}"
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
