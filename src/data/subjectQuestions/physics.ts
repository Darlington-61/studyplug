import { Question } from '../questions';

export const PHYSICS_QUESTIONS: Question[] = [
  {
    "id": 1,
    "questionNumber": 1,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Resistivity & Conductivity",
    "year": 2025,
    "difficulty": "Medium",
    "text": "Which of the following statements is NOT correct?",
    "options": [
      {
        "key": "A",
        "text": "A galvanometer can be converted to an ammeter with a different range by connecting a high resistance in series"
      },
      {
        "key": "B",
        "text": "An electric current always produces a magnetic field"
      },
      {
        "key": "C",
        "text": "Maxwell's screw rule states that if a corkscrew moves inthe direction of the current, the hand turns in the direction of the lines of force"
      },
      {
        "key": "D",
        "text": "Electromagnets are used in electric bells and telephone recievers"
      }
    ],
    "optionsMap": {
      "A": "A galvanometer can be converted to an ammeter with a different range by connecting a high resistance in series",
      "B": "An electric current always produces a magnetic field",
      "C": "Maxwell's screw rule states that if a corkscrew moves inthe direction of the current, the hand turns in the direction of the lines of force",
      "D": "Electromagnets are used in electric bells and telephone recievers"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "A galvanometer can be converted to an ammeter with a different range by connecting a high resistance in series.",
    "isRepeated": true,
    "repeatCount": 4,
    "repeatYears": [
      1985,
      2004,
      2017,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2004, 2017, 2025"
  },
  {
    "id": 2,
    "questionNumber": 2,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Resistivity & Conductivity",
    "year": 2015,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:192px; width:300px\"/> A battery of emf 24V is connected to three resistors P, Q and R as illustrated in the diagram above. Determine the voltage across the resistor Q.",
    "options": [
      {
        "key": "A",
        "text": "5V"
      },
      {
        "key": "B",
        "text": "10V"
      },
      {
        "key": "C",
        "text": "14V"
      },
      {
        "key": "D",
        "text": "24V"
      }
    ],
    "optionsMap": {
      "A": "5V",
      "B": "10V",
      "C": "14V",
      "D": "24V"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "When R is in parallel, V is the same. Total V = V<sub>PQ</sub> + V<sub>R</sub> ; 24 = V<sub>PQ</sub> + 14 VPQ = 24 – 14 = 10V",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 3,
    "questionNumber": 3,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Resistivity & Conductivity",
    "year": 2003,
    "difficulty": "Easy",
    "text": "Which of the following factors does not affect the electric resistance of a wire?",
    "options": [
      {
        "key": "A",
        "text": "length"
      },
      {
        "key": "B",
        "text": "Mass"
      },
      {
        "key": "C",
        "text": "Temperature"
      },
      {
        "key": "D",
        "text": "Cross sectional area"
      }
    ],
    "optionsMap": {
      "A": "length",
      "B": "Mass",
      "C": "Temperature",
      "D": "Cross sectional area"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Mass: The mass of the wire itself doesn't directly affect its resistance. It's the material and its intrinsic properties, like resistivity, that determine how much it opposes the flow of electrons.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2010
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2010"
  },
  {
    "id": 4,
    "questionNumber": 4,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Resistivity & Conductivity",
    "year": 2010,
    "difficulty": "Medium",
    "text": "Which of the following factors does not affect the electric resistance of a wire?",
    "options": [
      {
        "key": "A",
        "text": "Length"
      },
      {
        "key": "B",
        "text": "Mass"
      },
      {
        "key": "C",
        "text": "Temperature"
      },
      {
        "key": "D",
        "text": "Cross-sectional area"
      }
    ],
    "optionsMap": {
      "A": "Length",
      "B": "Mass",
      "C": "Temperature",
      "D": "Cross-sectional area"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The electric resistance of a wire is affected by its length, temperature, and cross-sectional area but not its mass. The resistance of a wire increases with its length and temperature and decreases with its cross-sectional area. This is because resistance is a measure of how much a material opposes the flow of electric current, and these factors affect how easily current can flow through the wire.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2010
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2010"
  },
  {
    "id": 5,
    "questionNumber": 5,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Dc Circuits",
    "year": 2001,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,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\"/> In the diagram above, the current I is",
    "options": [
      {
        "key": "A",
        "text": "9/11A"
      },
      {
        "key": "B",
        "text": "3/8A"
      },
      {
        "key": "C",
        "text": "8/3A"
      },
      {
        "key": "D",
        "text": "11/9A"
      }
    ],
    "optionsMap": {
      "A": "9/11A",
      "B": "3/8A",
      "C": "8/3A",
      "D": "11/9A"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Since the internal resistance of the cell is not given we assume that E = V = IR 6 = IR Resolving the 5Ω and 10Ω resistors in parallel: \\(R = \\frac{5 \\times 10}{5 + 10} = \\frac{50}{15} = \\frac{10}{3} \\, \\Omega\\) Total resistance, \\(R_{\\text{total}} = \\frac{10}{3} + 3 + 1 = \\frac{22}{3} \\, \\Omega\\) Use Ohm’s Law to find the current \\(6 = I \\times \\frac{22}{3}\\) Multiply both sides by 3: 18 = 22I Solve for I: \\(I = \\frac{18}{22} = \\frac{9}{11} \\, \\text{A}\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2025"
  },
  {
    "id": 6,
    "questionNumber": 6,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Dc Circuits",
    "year": 2017,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:179px; width:300px\"/> A battery of emf 24V is connected to three resistors P, Q and r as illustrated in the diagram above. Determine the voltage across the resistor Q.",
    "options": [
      {
        "key": "A",
        "text": "5V"
      },
      {
        "key": "B",
        "text": "10V"
      },
      {
        "key": "C",
        "text": "14V"
      },
      {
        "key": "D",
        "text": "24V"
      }
    ],
    "optionsMap": {
      "A": "5V",
      "B": "10V",
      "C": "14V",
      "D": "24V"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The voltage across P and Q is the same since both are connected in parallel. Since the voltage at K is 14V, the voltage across Q = 24V – 14V = 10V",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 7,
    "questionNumber": 7,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Dc Circuits",
    "year": 2016,
    "difficulty": "Medium",
    "text": "The correct expression for the potential at a point, distance r from a charge q, in an electric field is",
    "options": [
      {
        "key": "A",
        "text": "q / 4πε<sub>o</sub> r"
      },
      {
        "key": "B",
        "text": "q <sup>2</sup> / 4πε<sub>o</sub> r"
      },
      {
        "key": "C",
        "text": "q <sup>2</sup> / 4πε<sub>o</sub> r <sup>2</sup>"
      },
      {
        "key": "D",
        "text": "q <sup>2</sup> / 2πε<sub>o</sub> r <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "q / 4πε<sub>o</sub> r",
      "B": "q <sup>2</sup> / 4πε<sub>o</sub> r",
      "C": "q <sup>2</sup> / 4πε<sub>o</sub> r <sup>2</sup>",
      "D": "q <sup>2</sup> / 2πε<sub>o</sub> r <sup>2</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Expressions for the potential at a point due to a point charge in an electric field is V = q / (4πε<sub>0</sub> r) Where: V is the potential at the point (in Volts) ε<sub>0</sub> is the electric permittivity of vacuum (8.854 × 10 <sup>-12</sup> F/m) q is the charge of the point charge (in Coulombs) r is the distance from the point charge to the point where the potential is measured (in meters)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 8,
    "questionNumber": 8,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Dc Circuits",
    "year": 2013,
    "difficulty": "Hard",
    "text": "Which of the following obeys Ohms law?",
    "options": [
      {
        "key": "A",
        "text": "Glass"
      },
      {
        "key": "B",
        "text": "Electrolytes"
      },
      {
        "key": "C",
        "text": "Metals"
      },
      {
        "key": "D",
        "text": "Diode"
      }
    ],
    "optionsMap": {
      "A": "Glass",
      "B": "Electrolytes",
      "C": "Metals",
      "D": "Diode"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Metals are generally good conductors and their resistance remains relatively constant over a wide range of voltages. This makes them obey Ohm's law, meaning the current passing through them is directly proportional to the voltage applied within their ohmic region.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1991,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1991, 2013"
  },
  {
    "id": 9,
    "questionNumber": 9,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Current & Resistors",
    "year": 1984,
    "difficulty": "Easy",
    "text": "Which of the following can be described as high tension transmission?",
    "options": [
      {
        "key": "A",
        "text": "high resistance and low voltage"
      },
      {
        "key": "B",
        "text": "low current and high voltage"
      },
      {
        "key": "C",
        "text": "high current and low voltage"
      },
      {
        "key": "D",
        "text": "high voltage and zero current"
      }
    ],
    "optionsMap": {
      "A": "high resistance and low voltage",
      "B": "low current and high voltage",
      "C": "high current and low voltage",
      "D": "high voltage and zero current"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "low current and high voltage In high-tension (or high-voltage) transmission systems, high voltage and low current are used to transmit electrical power over long distances efficiently. This is done to minimize energy losses due to the resistance of transmission lines. <ul><li> Low current helps reduce the heat generated in the transmission lines, which is proportional to I <sup>2</sup> R (where III is the current and RRR is the resistance of the wires). </li><li> High voltage allows the same amount of power to be transmitted with lower current, reducing the losses significantly. </li></ul> Thus, high-tension transmission involves low current and high voltage .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1984,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1984, 2020"
  },
  {
    "id": 10,
    "questionNumber": 10,
    "subject": "Physics",
    "topic": "Current Electricity",
    "subtopic": "Current & Resistors",
    "year": 2015,
    "difficulty": "Medium",
    "text": "Which of the following will be applied when a metal Y is used to electroplate another metal X in electrolysis?",
    "options": [
      {
        "key": "A",
        "text": "Y is the cathode and X is the anode"
      },
      {
        "key": "B",
        "text": "Y is the anode and very high current is used"
      },
      {
        "key": "C",
        "text": "X is the anode and very high current is used"
      },
      {
        "key": "D",
        "text": "X is the anode and Y is the cathode"
      }
    ],
    "optionsMap": {
      "A": "Y is the cathode and X is the anode",
      "B": "Y is the anode and very high current is used",
      "C": "X is the anode and very high current is used",
      "D": "X is the anode and Y is the cathode"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Y is the anode and very high current is used In electroplating:",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2015"
  },
  {
    "id": 11,
    "questionNumber": 11,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Introductory Electronics",
    "year": 2016,
    "difficulty": "Hard",
    "text": "The bond between silicon and germanium is",
    "options": [
      {
        "key": "A",
        "text": "ionic"
      },
      {
        "key": "B",
        "text": "electrovalent"
      },
      {
        "key": "C",
        "text": "covalent"
      },
      {
        "key": "D",
        "text": "dative"
      }
    ],
    "optionsMap": {
      "A": "ionic",
      "B": "electrovalent",
      "C": "covalent",
      "D": "dative"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The bond between silicon and germanium can be classified as a covalent bond. Both silicon and germanium are Group 14 elements: They each have four valence electrons in their outermost shell. In order to achieve a stable octet configuration, they share their valence electrons with other atoms. Sharing electrons forms a covalent bond: By sharing a pair of electrons, both silicon and germanium achieve a full octet, creating a strong bond between them.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2011,
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2013, 2016"
  },
  {
    "id": 12,
    "questionNumber": 12,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Introductory Electronics",
    "year": 2011,
    "difficulty": "Easy",
    "text": "The bond between silicon and germanium is",
    "options": [
      {
        "key": "A",
        "text": "electrovalent"
      },
      {
        "key": "B",
        "text": "covalent"
      },
      {
        "key": "C",
        "text": "ionic"
      },
      {
        "key": "D",
        "text": "dative"
      }
    ],
    "optionsMap": {
      "A": "electrovalent",
      "B": "covalent",
      "C": "ionic",
      "D": "dative"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The bond between silicon and germanium is covalent. Silicon and germanium, both being nonmetals, have similar electronegativities. In a covalent bond, atoms share electrons to achieve a more stable electron configuration. Silicon and germanium each contribute electrons to form a shared electron pair, creating a covalent bond between them. This type of bond is typical for elements in the same group or with similar chemical properties.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2011,
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2013, 2016"
  },
  {
    "id": 13,
    "questionNumber": 13,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Introductory Electronics",
    "year": 2016,
    "difficulty": "Medium",
    "text": "In a common emitter configuration, the output voltage is through the",
    "options": [
      {
        "key": "A",
        "text": "base"
      },
      {
        "key": "B",
        "text": "emitter"
      },
      {
        "key": "C",
        "text": "resistor"
      },
      {
        "key": "D",
        "text": "collector"
      }
    ],
    "optionsMap": {
      "A": "base",
      "B": "emitter",
      "C": "resistor",
      "D": "collector"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "In common emitter configuration, input voltage (V<sub>BE</sub> ) is applied between base and emitter terminals, output voltage (V<sub>CE</sub> ) is applied between emitter and collector while Emitter is connected to both input and output. Base is the input terminal, collector is the output terminal and emitter is the common terminal for both input and output.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 14,
    "questionNumber": 14,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Introductory Electronics",
    "year": 1991,
    "difficulty": "Hard",
    "text": "Which of the following obeys Ohm's Law?",
    "options": [
      {
        "key": "A",
        "text": "Glass"
      },
      {
        "key": "B",
        "text": "Diode"
      },
      {
        "key": "C",
        "text": "All electrolytes"
      },
      {
        "key": "D",
        "text": "All metals"
      }
    ],
    "optionsMap": {
      "A": "Glass",
      "B": "Diode",
      "C": "All electrolytes",
      "D": "All metals"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Metals typically obey Ohm's Law, which states that the current through a conductor is directly proportional to the voltage across it, given constant temperature. This relationship holds true for most metallic conductors over a wide range of voltages and currents. On the other hand, materials like glass, diodes, and electrolytes do not necessarily follow Ohm's Law.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1991,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1991, 2013"
  },
  {
    "id": 15,
    "questionNumber": 15,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Diodes & Transistors",
    "year": 2002,
    "difficulty": "Easy",
    "text": "A transistor is used in the amplification of signals because it",
    "options": [
      {
        "key": "A",
        "text": "controls the flow of current"
      },
      {
        "key": "B",
        "text": "consumes a lot of power"
      },
      {
        "key": "C",
        "text": "allows doping"
      },
      {
        "key": "D",
        "text": "contains electron and hole carriers"
      }
    ],
    "optionsMap": {
      "A": "controls the flow of current",
      "B": "consumes a lot of power",
      "C": "allows doping",
      "D": "contains electron and hole carriers"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When used as an amplifier , a transistor takes in a small input current and produces a larger output current . In simple terms, it acts like a current booster . This is very useful in devices like hearing aids , which were among the first practical uses of transistors. 🔊 Example – Hearing Aid:",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1997,
      2002
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1997, 2002)"
  },
  {
    "id": 16,
    "questionNumber": 16,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Diodes & Transistors",
    "year": 2010,
    "difficulty": "Medium",
    "text": "Transistors are used for the",
    "options": [
      {
        "key": "A",
        "text": "conversion of a.c. to d.c."
      },
      {
        "key": "B",
        "text": "conversion of d.c. to a.c"
      },
      {
        "key": "C",
        "text": "amplification of signals"
      },
      {
        "key": "D",
        "text": "rectification of signals"
      }
    ],
    "optionsMap": {
      "A": "conversion of a.c. to d.c.",
      "B": "conversion of d.c. to a.c",
      "C": "amplification of signals",
      "D": "rectification of signals"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Transistors are mainly used to amplify electrical signals. They increase the strength of weak signals in electronic circuits such as radios and communication systems.<ul><li>A. Rectification of signals → This is mainly done by diodes.</li><li>B. Conversion of a.c to d.c → This is also done by rectifiers (diodes).</li><li>C. Amplification of signals → This is the primary function of transistors.</li><li>D. Conversion of d.c to a.c → This is done by inverters.</li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 17,
    "questionNumber": 17,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Diodes & Transistors",
    "year": 2010,
    "difficulty": "Hard",
    "text": "A typical transistor characteristic is represented as<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAClCAMAAABC6hAtAAAAJ1BMVEX////z8/MFBQX8/PxBQUFvb29RUVHGxsbm5ubX19chISGysrKPj4/lSePtAAAFWElEQVR42u2c204EuQ5FfY1v+f/vPQwaKU8wnO6uuCC9EC8g0azesZ0UKPDmzZs3b968efPHcIZDwWlwKFHz0Ni5ouLQ0HXqBIbvYfiDlLFPq+/FZ/3V/u4e8B1Gcmo7EKKCIykiSocTQaVUPE+7HABF4TyC6lOd4Tj8rX6eOu9QZw8/NHUrixumjtOvVveJcFOuVo+CU9VxOjDyl4fq+rvqEFO/rnbPxL+rzozM/OWpkZQ71dveeR69RycUymhSdyXFTvWh4rAdRAbQ/MkMvrDWocNdB/xMfY5L25zuL7mRP1TXvFSd53Z3/aE667WpA6vEXVOvS9U/3f2W6p4Xq3+6I2yk5s/UI+P63dzYXO8/Uy/x69Ujxe+nPpWvVwfb7c4/UNfacnypTL9Z6p6xRR1cE2+lzjVwjzr4EL9V6qrbzuucEjeqdRbbpg5GgvdJvYj3qYNJ4l3UWWWnOqOK30TdpfY+m2MRv0Wtc2XsVQfL9Dukzjlhn/rqdf3qbBnb1SFIsF99KGxVX/v57lo38g51MBLvTZ11YIs6lAi2qhsZ9KhDkHijOo/BXepgNLCv1i0LOtRXr+tKHWVCj/qa703qNbxLfbm3qEcWtKmvNd9Q6zwGN6qvXrc9dZ7p0Ki+csfd6k4F+9Rb6l3zu9+pX52NBu6sdR+K0Kq+sPx+0qDhK1Of6bBJHf8LLhLHr4kcxi9TrzTYpE7ynwyiHF9/V4hIX6VeYrCJGk8jRKnP1/rK/P7wv5+RIx5c8L/UHKUAFQHQ/DVtDqcY/AYwCYvwdXPdJQ1+B0auyq+a61w5DH4JnpoFL0rdVYqhgZ7/r13qOGkY/CKUBF+gjjZF6oGfFAZd+PQn9/CIETMzpzP+/ygVQhf85KoZg/5BxkMkkSD8SmKqzs+Px0giRfilMPAnD6w2ZpgjGI7CNcAmACCcBo4BOuBIKkMmHEnkSIcj8SRlOJNBE86EPRC+hSOCD31vNMrgSOJcddeadWjqE2wyH5n6tLKIY2cAIrxpgM2C4UhQbdZN3ZHhSnAyF97TXObV6vCtOnJbKVLGtRceoRU6fEVJQA9x9XM9rlnocb8TGBd9YH3Pqq3vdpYwmcGdf7gi0q6rtEe0Tv2ZHYcMowTgYX0jvwBCGM5TD1KGEHyrH6TO79Q71L3q1NSBobfDWyz1/fBSb6FRHbrV75964Kmpm9ihqVdObldHdw/9wDembjQ6a93Nas456B9SJDakvsyxSd3NdCR9ICKzPnBm3pa6kWBDh2cMTckPpCICET+/Cryv1i3FYbt6TRUas6qwo8OvzPeqY6lQ6ozeDm8kDjvV2WaSjGBunuuVA2GjOscgGoGtc3319o3qMZKm4w12c5bDYaN6SU4H7t3NrQ63T92HzGjYw3eZL/WZaTfZw1cOh23qXJTRf3Jbd9LsUy+a3n9yW3u4bepcpC3n9S7zpR6U2H9eX3u4feo8MqA99TXPN6oXVdNTmp7VvtR5KEN36mue71Q3MmhKvWW1L3UfA6E39Z474kOMCrpS7zSHkMqArtQbOtwihgh3pr7MEfYSIgptqTd0uEVQGrSl3lDnCyeKvtQ7zSFIsDt1azEHJ+HG1Ffmp6W+OlxP6tiX+sq8JfWCztRDxKFL3Z4TeCr11eEa8CfVXePx1CNSAroImvEMRVT+aOrz6d0rTn88taSn0UdTpzR/jiDRR+U57CmKSB9OnV6CMLTgwx5udVHPQ0S1WX2qoxp0gQjgCMCi3rAfMCpoglXBSQGAGTbDmHOS9akntL08a3beOVZUmtj24jShDZaUwdCD6/BG9dn5zjMy9FGUCIdiAW/evOnif1s7OCCB4JK+AAAAAElFTkSuQmCC\" style=\"height:165px; width:250px\"/>",
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
    "explanation": "A typical transistor characteristic is represented byThe characteristic curves of a transistor provide the relationship between collector-emitter voltage and collector current for different values of the base current. Because there are two parameters that affect I<sub>C</sub> , a set of individual curves shown together denote various operating conditions.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 18,
    "questionNumber": 18,
    "subject": "Physics",
    "topic": "Electronics",
    "subtopic": "Diodes & Transistors",
    "year": 2004,
    "difficulty": "Easy",
    "text": "In a reversed biased junction diode, current flows in by",
    "options": [
      {
        "key": "A",
        "text": "electrons alone"
      },
      {
        "key": "B",
        "text": "majority carriers"
      },
      {
        "key": "C",
        "text": "positive holes alone"
      },
      {
        "key": "D",
        "text": "minority carriers"
      }
    ],
    "optionsMap": {
      "A": "electrons alone",
      "B": "majority carriers",
      "C": "positive holes alone",
      "D": "minority carriers"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "minority carriers In a reverse biased p-n junction diode: <ul><li> The p-side is connected to the negative terminal of the battery. </li><li> The n-side is connected to the positive terminal .</li></ul> This setup widens the depletion region and blocks the majority carriers (holes in p-type, electrons in n-type), preventing current from flowing under normal conditions. However, a very small current still flows. This current is due to the movement of minority carriers : <ul><li> Electrons in the p-region</li><li> Holes in the n-region</li></ul> These minority carriers are thermally generated and are very few in number, which is why reverse current is very small (called leakage current ).",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 19,
    "questionNumber": 19,
    "subject": "Physics",
    "topic": "Electrical Energy",
    "subtopic": "Electrical Energy & Power",
    "year": 2022,
    "difficulty": "Medium",
    "text": "An electrical appliance is rated 60V and has a resistance of 15Ω. What is the power consumption of the appliance?",
    "options": [
      {
        "key": "A",
        "text": "40W"
      },
      {
        "key": "B",
        "text": "240W"
      },
      {
        "key": "C",
        "text": "15W"
      },
      {
        "key": "D",
        "text": "24W"
      }
    ],
    "optionsMap": {
      "A": "40W",
      "B": "240W",
      "C": "15W",
      "D": "24W"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To calculate the power consumption of the appliance, we can use the formula: \\(P = \\frac{V^2}{R}\\) Where:<ul><li> Voltage, V = 60V .</li><li> Resistance, R = 15Ω .</li><li> Power consumed, P =? .</li></ul>\\(P = \\frac{(60)^2}{15} = \\frac{3600}{15} = 240 \\, \\text{W}\\) So, the power consumption of the appliance is 240 watts .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 20,
    "questionNumber": 20,
    "subject": "Physics",
    "topic": "Electrical Energy",
    "subtopic": "Electrical Energy & Power",
    "year": 2022,
    "difficulty": "Hard",
    "text": "An electrical appliance is rated 60V and has a resistance of 15Ω. What is the power consumption of the appliance?",
    "options": [
      {
        "key": "A",
        "text": "40W"
      },
      {
        "key": "B",
        "text": "240W"
      },
      {
        "key": "C",
        "text": "15W"
      },
      {
        "key": "D",
        "text": "24W"
      }
    ],
    "optionsMap": {
      "A": "40W",
      "B": "240W",
      "C": "15W",
      "D": "24W"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "\\(P={V^2\\over R}\\) Where, Voltage, V = 60V Resistance, R = 15Ω Power consumed, P =? \\(P={60^2\\over15}\\) P = 240W",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 21,
    "questionNumber": 21,
    "subject": "Physics",
    "topic": "Electrical Energy",
    "subtopic": "Electrical Energy & Power",
    "year": 1978,
    "difficulty": "Easy",
    "text": "Two lamps are rated 40W and 220V each are connected in series. The total power dissipated in both lamps is",
    "options": [
      {
        "key": "A",
        "text": "10W"
      },
      {
        "key": "B",
        "text": "20W"
      },
      {
        "key": "C",
        "text": "40W"
      },
      {
        "key": "D",
        "text": "80W"
      }
    ],
    "optionsMap": {
      "A": "10W",
      "B": "20W",
      "C": "40W",
      "D": "80W"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "20 W . Given: Each lamp is rated 40W at 220V. Calculate the resistance of each lamp: The power rating of a lamp is given by: \\(P=\\frac {V^2}R\\) Rearranging to solve for resistance (RR): \\(R=\\frac{V^2}P​\\) Substituting the values: \\(R=\\frac{220^2}{40}=\\frac{48400}{40}=1210 Ω\\) Calculate the total resistance in series: When two resistors are connected in series, the total resistance is: \\(R_{total}=R_1+R_2=1210+1210=2420 Ω\\) Calculate the total current in the circuit: Using Ohm's Law: \\(I=\\frac V{R_{total}}\\) Substituting the values: \\(I=\\frac{220}{2420}≈0.0909 A\\) Calculate the power dissipated in each lamp: The power dissipated in a resistor is given by: \\(P=I^2R\\) Substituting the values: \\(P=(0.0909)^2×1210≈0.00826×1210≈10 W\\) Calculate the total power dissipated: Since there are two lamps, the total power dissipated is: \\(P_{total}=2×10=20 W\\) The total power dissipated in both lamps is 20 W .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2024"
  },
  {
    "id": 22,
    "questionNumber": 22,
    "subject": "Physics",
    "topic": "Electrical Energy",
    "subtopic": "Electrical Energy & Power",
    "year": 2015,
    "difficulty": "Medium",
    "text": "From the generating station to each substation power is transmitted at a very high voltage so as to reduce",
    "options": [
      {
        "key": "A",
        "text": "eddy current loss"
      },
      {
        "key": "B",
        "text": "hysteresis loss"
      },
      {
        "key": "C",
        "text": "heating in the coils"
      },
      {
        "key": "D",
        "text": "magnetic flux leakage"
      }
    ],
    "optionsMap": {
      "A": "eddy current loss",
      "B": "hysteresis loss",
      "C": "heating in the coils",
      "D": "magnetic flux leakage"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The power loss due to Joule heating is proportional to the square of the current (I^2) and the resistance (R) of the transmission lines: Loss = I <sup>2</sup> R Since the power transmitted needs to be the same regardless of the voltage, at a higher voltage, the current can be much lower for the same amount of power. This lower current reduces the Joule heating losses significantly. In other words, transmitting power at high voltage allows for thinner conductors or longer transmission lines while maintaining acceptable energy losses.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2015"
  },
  {
    "id": 23,
    "questionNumber": 23,
    "subject": "Physics",
    "topic": "Electrical Energy",
    "subtopic": "Commercial Electricity",
    "year": 2026,
    "difficulty": "Hard",
    "text": "A refrigerator with a power rating of 1500 W runs continuously for 30 days. If electricity costs ₦20 per kWh, calculate the total cost of running the refrigerator.",
    "options": [
      {
        "key": "A",
        "text": "₦10,800"
      },
      {
        "key": "B",
        "text": "₦14,400"
      },
      {
        "key": "C",
        "text": "₦21,600"
      },
      {
        "key": "D",
        "text": "₦36,000"
      }
    ],
    "optionsMap": {
      "A": "₦10,800",
      "B": "₦14,400",
      "C": "₦21,600",
      "D": "₦36,000"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find the total cost, we first need to calculate the total energy consumed in kilowatt-hours (kWh).\\(P = 1500\\,\\text{W} = \\frac{1500}{1000} = 1.5\\,\\text{kW}\\)Convert time to hoursTime = 30 × 24 = 720 hoursCalculate energy consumedEnergy = Power × Time = 1.5 × 720 = 1080 kWhCalculate total costCost = 1080 × 20 = ₦21,600",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2021,
      2026
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2021, 2026)"
  },
  {
    "id": 24,
    "questionNumber": 24,
    "subject": "Physics",
    "topic": "Electrical Energy",
    "subtopic": "Commercial Electricity",
    "year": 2004,
    "difficulty": "Easy",
    "text": "Find the cost of running a 60W lamp for 24 hours, if 1kWhr costs 5 Naira.",
    "options": [
      {
        "key": "A",
        "text": "14.4 Naira"
      },
      {
        "key": "B",
        "text": "12.5 Naira"
      },
      {
        "key": "C",
        "text": "7.2 Naria"
      },
      {
        "key": "D",
        "text": "2.0 Naira"
      }
    ],
    "optionsMap": {
      "A": "14.4 Naira",
      "B": "12.5 Naira",
      "C": "7.2 Naria",
      "D": "2.0 Naira"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Calculating the energy consumption in kilowatt-hours (kWh):<ul><li>Convert the lamp wattage to kWh:60 W x 24 hours = 1440 Wh .</li><li>Convert Wh to kWh:1440 Wh / 1000 = 1.44 kWh .</li></ul>Calculate the cost:<ul><li>Multiply the energy consumption by the cost per kWh:1.44 kWh x 5 Naira/kWh = 7.2 Naira .</li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 25,
    "questionNumber": 25,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "Gravitation & Satellites",
    "year": 2013,
    "difficulty": "Medium",
    "text": "When a brick is taken from the earth's surface to the moon, its mass",
    "options": [
      {
        "key": "A",
        "text": "Becomes zero"
      },
      {
        "key": "B",
        "text": "Remains constant"
      },
      {
        "key": "C",
        "text": "Reduces"
      },
      {
        "key": "D",
        "text": "Increases"
      }
    ],
    "optionsMap": {
      "A": "Becomes zero",
      "B": "Remains constant",
      "C": "Reduces",
      "D": "Increases"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "An object's mass is a measure of the amount of matter it contains and is independent of its location or the gravitational forces acting on it.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 26,
    "questionNumber": 26,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "Gravitation & Satellites",
    "year": 2016,
    "difficulty": "Hard",
    "text": "When a brick is taken from the earth's surface to the moon, its mass",
    "options": [
      {
        "key": "A",
        "text": "remains constant"
      },
      {
        "key": "B",
        "text": "increases"
      },
      {
        "key": "C",
        "text": "becomes zero"
      },
      {
        "key": "D",
        "text": "reduces"
      }
    ],
    "optionsMap": {
      "A": "remains constant",
      "B": "increases",
      "C": "becomes zero",
      "D": "reduces"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When a brick is taken from the Earth's surface to the Moon, its mass will remain constant. Mass is a fundamental property of an object that quantifies the amount of matter it contains. This amount of matter isn't affected by location or gravitational strength. While the weight of the brick, which is the force exerted on it due to gravity, will change significantly on the Moon (being around 1/6th of its weight on Earth), the mass itself remains the same. This principle holds true regardless of the object's size or composition. The brick retains the same number of protons and neutrons in its atoms, regardless of its position in the Solar System.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 27,
    "questionNumber": 27,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "Gravitation & Satellites",
    "year": 2014,
    "difficulty": "Easy",
    "text": "Which type of motion do the wheels of a moving car undergo?",
    "options": [
      {
        "key": "A",
        "text": "Rotational and oscillatory motion"
      },
      {
        "key": "B",
        "text": "Translational and rotational motion"
      },
      {
        "key": "C",
        "text": "Vibratory and translational motion"
      },
      {
        "key": "D",
        "text": "Random and translational motion"
      }
    ],
    "optionsMap": {
      "A": "Rotational and oscillatory motion",
      "B": "Translational and rotational motion",
      "C": "Vibratory and translational motion",
      "D": "Random and translational motion"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The wheels of a moving car undergo both translational and rotational motion. Translational motion involves the car moving in a straight line, and rotational motion involves the wheels spinning about their axes. The combination of these motions allows the car to move smoothly along the road.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 28,
    "questionNumber": 28,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "Gravitation & Satellites",
    "year": 2005,
    "difficulty": "Medium",
    "text": "An object is weighted at different locations on the earth. What will be the right observation?",
    "options": [
      {
        "key": "A",
        "text": "Both the mass and weight are constant."
      },
      {
        "key": "B",
        "text": "Both the mass and weight vary"
      },
      {
        "key": "C",
        "text": "the mass is constant while the weight varies"
      },
      {
        "key": "D",
        "text": "the weight is constant while the mass varies"
      }
    ],
    "optionsMap": {
      "A": "Both the mass and weight are constant.",
      "B": "Both the mass and weight vary",
      "C": "the mass is constant while the weight varies",
      "D": "the weight is constant while the mass varies"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The weight of a body is the resultant of earth's gravitational pull on it. The earth is not a perfect sphere, it is more flattened at the poles and bulges at the equator. Hence an object at the pole is closer to the earth's center than the one at the equator. The weight of a body at the poles should be more than that of when weighed at the equator. Thus the weight varies and the mass remains constant.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2024"
  },
  {
    "id": 29,
    "questionNumber": 29,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "G, G & Escape Velocity",
    "year": 2011,
    "difficulty": "Hard",
    "text": "An object of mass 5.0kg moves with a velocity of 10ms <sup>-1</sup>. Calculate its momentum.",
    "options": [
      {
        "key": "A",
        "text": "50.0kgms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "15.0kgms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "2.0kgms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "0.5kgms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "50.0kgms <sup>-1</sup>",
      "B": "15.0kgms <sup>-1</sup>",
      "C": "2.0kgms <sup>-1</sup>",
      "D": "0.5kgms <sup>-1</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: Mass= 5.0kg Velocity= 10m/s Momentum = mass × velocity Momentum = 5.0 × 10 Momentum = 50.0 kg m/s",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2006,
      2011
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2006, 2011)"
  },
  {
    "id": 30,
    "questionNumber": 30,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "G, G & Escape Velocity",
    "year": 2011,
    "difficulty": "Easy",
    "text": "The correct relationship between \"G\" and \"g\" in a gravitational field is given by the equation(Where the symbols have their unusual meaning)",
    "options": [
      {
        "key": "A",
        "text": "g = GM/R"
      },
      {
        "key": "B",
        "text": "g = GM/R <sup>2</sup>"
      },
      {
        "key": "C",
        "text": "g = GM <sup>2</sup> /R"
      },
      {
        "key": "D",
        "text": "g = GM <sup>2</sup> /R <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "g = GM/R",
      "B": "g = GM/R <sup>2</sup>",
      "C": "g = GM <sup>2</sup> /R",
      "D": "g = GM <sup>2</sup> /R <sup>2</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "F<sub>g</sub> = GMm/R <sup>2</sup>F<sub>g</sub> = mg.mg = GMm/R <sup>2</sup>g = GM/ R <sup>2</sup>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 31,
    "questionNumber": 31,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "G, G & Escape Velocity",
    "year": 2012,
    "difficulty": "Medium",
    "text": "Which of the following velocity-time graph does not represent an accelerated motion? <img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAF4AiAMBIgACEQEDEQH/xAAsAAADAQEAAAAAAAAAAAAAAAAAAgMBBAEBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAADrHy9FObqE1tJ5UOZq8hXLBK2BpgBgVMCLZQQcJ0A2NZFVaQZrAGAYFjAlVFKEgrk5HVKiGamlcmFM5+gUAbWQ05ek0zBlwEdeY6mmw4ilTNFAHwwm8qGmKK6OZOki0kqa66OKAAAuiPyqdSyoVIzOmNpmUlpQkF94uoYwP//EADIQAAIBAgMGAwYHAQAAAAAAAAECAAMREBIhEyAxUVKRM3KBBCJBU6GxFCMyQ2FicZL/2gAIAQEAAT8AqsVUkC55RWRlDaT3D8AZlXpE2dPoE2aHXKJsk6ZsafKBKGfIBZp+HpdMahTa1+VpsKX8xKSIbjcOFhMlVa9EK4yBDdcby8vMiXzW1ntRqUxtEXOdBlnEbxxYMayZWt7jfC8y1fmL/wAzLV6k7TLV5p2MtV/pNcK3hn0++LuEGvoBFDcWOvIcBvfvL5Gl5eXl5eXlbwz6feGM9tALtFWxJJux3z4w8h3bi5F8K/hn0+8apmLInH4nlFUKJpymm8yI/wCpQZsaXQJsaXQJsaXTNjS5fUynQpCo1ZQQx044OoqKyngYtLKLCowFps2+a30mR/mt9Jkf5rfSNSrbWmfxBsOK2GuLlgV5E6mX0uZcHG8vg9XK1rcvqbS+F5fedQ6leYiCqPaanvDZhBYblxwwNjxlZqlOnVqBb2tlEQ3UG1rjgfhgXVeJAgqoeF+x3l8Wp5V3L3rH+qgd8a3gv/hgOkzGobIbDqioqagXPM6mX3l8Sp6YswUXMpqVXXidTjX8F/KY5LNkH+tAAAAN6+C+JV9MHqKlgePIcYqknO/H4DluVyBSqeUykLgueLG+8SBi22V3KBLG3EmW9pb9RQeUkRRUS9kTuZer0p3MvW6U7mUXrtUqh8mUGwtxwq09pTdepSIorAAXTT+DLVuadjPzuadjPzuadjKre1Ls8hp6trcGAwz/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAECAQE/AFv/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAEDAQE/AFv/2Q==\" style=\"height:94px; width:136px\"/>",
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
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "In 'A', dv/dt which is equal to the slope, and the slope which is equal to the acceleration of the body is zero.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 32,
    "questionNumber": 32,
    "subject": "Physics",
    "topic": "Gravitational Field",
    "subtopic": "G, G & Escape Velocity",
    "year": 2014,
    "difficulty": "Hard",
    "text": "Calculate the escape velocity of a satellite launched from the earth's surface if the radius of the earth is 6.4x l0<sup>6</sup> m.[g = 10 ms<sup>-2</sup>]",
    "options": [
      {
        "key": "A",
        "text": "4.0 kms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "11.3 kms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "25.3 kms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "4.2 kms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "4.0 kms <sup>-1</sup>",
      "B": "11.3 kms <sup>-1</sup>",
      "C": "25.3 kms <sup>-1</sup>",
      "D": "4.2 kms <sup>-1</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Radius of the earth, R = 6.4 × 10 <sup>6</sup> m<img src=\"data:image/jpeg;base64,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\" style=\"height:109px; width:180px\"/>Recall:Ve (escape velocity) = √2gRVe = √(2 × 10 × 6.4 × 10 <sup>6</sup> )Ve = 11.3km/s",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 33,
    "questionNumber": 33,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Atomic Structure",
    "year": 2012,
    "difficulty": "Easy",
    "text": "An atom in an excited state is one whose",
    "options": [
      {
        "key": "A",
        "text": "potential energy is minimum."
      },
      {
        "key": "B",
        "text": "potential energy is maximum."
      },
      {
        "key": "C",
        "text": "electrons are in the conduction band."
      },
      {
        "key": "D",
        "text": "electrons have moved to higher energy level."
      }
    ],
    "optionsMap": {
      "A": "potential energy is minimum.",
      "B": "potential energy is maximum.",
      "C": "electrons are in the conduction band.",
      "D": "electrons have moved to higher energy level."
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "electrons have moved to higher energy levels. An atom in its ground state has its electrons occupying the lowest possible energy levels.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2012,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2012, 2023"
  },
  {
    "id": 34,
    "questionNumber": 34,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Atomic Structure",
    "year": 2023,
    "difficulty": "Medium",
    "text": "In the Rutherford scattering experiment, a beam of alpha particles was fired at a thin gold film and few of the particles were deflected considerably. This shows that the nucleus of an atom",
    "options": [
      {
        "key": "A",
        "text": "contains protons and electrons distributed in a tiny volume."
      },
      {
        "key": "B",
        "text": "is positively charged and is concentrated in a tiny volume."
      },
      {
        "key": "C",
        "text": "is distributed in a tiny volume and emits alpha particles."
      },
      {
        "key": "D",
        "text": "is concentrated in a tiny volume and contains alpha particles."
      }
    ],
    "optionsMap": {
      "A": "contains protons and electrons distributed in a tiny volume.",
      "B": "is positively charged and is concentrated in a tiny volume.",
      "C": "is distributed in a tiny volume and emits alpha particles.",
      "D": "is concentrated in a tiny volume and contains alpha particles."
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The Rutherford scattering experiment showed that the nucleus of an atom: is concentrated in a tiny volume and is positively charged. In the experiment, when alpha particles were fired at a thin gold foil, most of the alpha particles passed straight through, but a few were deflected considerably. This result led Rutherford to conclude that the positive charge of the atom is concentrated in a small, dense nucleus at the center of the atom. The fact that some alpha particles were deflected strongly indicated that there was a positively charged nucleus within the atom.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2023"
  },
  {
    "id": 35,
    "questionNumber": 35,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Atomic Structure",
    "year": 2023,
    "difficulty": "Hard",
    "text": "An atom in an excited state is one whose",
    "options": [
      {
        "key": "A",
        "text": "Potential energy is minimum"
      },
      {
        "key": "B",
        "text": "Potential energy is maximum"
      },
      {
        "key": "C",
        "text": "electrons are in the conduction band."
      },
      {
        "key": "D",
        "text": "electrons have moved to a higher energy level"
      }
    ],
    "optionsMap": {
      "A": "Potential energy is minimum",
      "B": "Potential energy is maximum",
      "C": "electrons are in the conduction band.",
      "D": "electrons have moved to a higher energy level"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "An atom is said to be in an excited state when one or more of its electrons move to a higher energy level. Normally, electrons in an atom occupy specific energy levels or orbitals. When an electron absorbs energy, it can jump from a lower to a higher energy level. In this excited state, the electron is farther from the nucleus and has more potential energy. When the electron returns to its original (lower) energy level, it releases the extra energy as electromagnetic radiation—often as visible light. This process produces the characteristic spectral lines seen in spectroscopy.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2012,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2012, 2023"
  },
  {
    "id": 36,
    "questionNumber": 36,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Atomic Structure",
    "year": 1999,
    "difficulty": "Easy",
    "text": "In the Rutherford scattering experiment, a beam of alpha particles was fired at a thin gold film with some of the particles being considerably deflected. This shows that",
    "options": [
      {
        "key": "A",
        "text": "a gold nucleus contains protons, neutrons and electrons uniformly distributed in a tiny volume"
      },
      {
        "key": "B",
        "text": "the gold nucleus is positively charged and is concentrated in a tiny volume"
      },
      {
        "key": "C",
        "text": "the gold nucleus emitted alpha particles"
      },
      {
        "key": "D",
        "text": "the gold nucleus is concentrated in a tiny volume and contains alpha particles"
      }
    ],
    "optionsMap": {
      "A": "a gold nucleus contains protons, neutrons and electrons uniformly distributed in a tiny volume",
      "B": "the gold nucleus is positively charged and is concentrated in a tiny volume",
      "C": "the gold nucleus emitted alpha particles",
      "D": "the gold nucleus is concentrated in a tiny volume and contains alpha particles"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "B. The gold nucleus is positively charged and is concentrated in a tiny volume. In Rutherford’s scattering experiment, most alpha particles passed through undeflected, but a few were deflected at large angles. This showed that the positive charge and most of the mass of the atom are concentrated in a very small central region (the nucleus).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2023"
  },
  {
    "id": 37,
    "questionNumber": 37,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Production of X-rays",
    "year": 2022,
    "difficulty": "Medium",
    "text": "Gamma rays are produced when",
    "options": [
      {
        "key": "A",
        "text": "High velocity electrons are abruptly stopped in metals."
      },
      {
        "key": "B",
        "text": "Energy changes occur within the nuclei of atoms."
      },
      {
        "key": "C",
        "text": "Energy changes occur within the electronic structure of atoms."
      },
      {
        "key": "D",
        "text": "Electrons are deflected in very strong magnetic fields."
      }
    ],
    "optionsMap": {
      "A": "High velocity electrons are abruptly stopped in metals.",
      "B": "Energy changes occur within the nuclei of atoms.",
      "C": "Energy changes occur within the electronic structure of atoms.",
      "D": "Electrons are deflected in very strong magnetic fields."
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Gamma rays are high-energy electromagnetic radiation, even higher than X-rays. They are emitted during nuclear events, specifically when the nucleus of an atom undergoes changes in its energy state.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2022"
  },
  {
    "id": 38,
    "questionNumber": 38,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Production of X-rays",
    "year": 1980,
    "difficulty": "Hard",
    "text": "Which of the following statements on the use of X-rays is incorrect? X-rays are used",
    "options": [
      {
        "key": "A",
        "text": "in hospitals to obtain photogaphs of tissues and bones in the body"
      },
      {
        "key": "B",
        "text": "for the treatment of malignant growths like cancer cells"
      },
      {
        "key": "C",
        "text": "in detecting fingerprints"
      },
      {
        "key": "D",
        "text": "to reveal hidden flaws in metal castings and welded joints"
      }
    ],
    "optionsMap": {
      "A": "in hospitals to obtain photogaphs of tissues and bones in the body",
      "B": "for the treatment of malignant growths like cancer cells",
      "C": "in detecting fingerprints",
      "D": "to reveal hidden flaws in metal castings and welded joints"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "in detecting fingerprints X-rays are not typically used for fingerprint detection. Fingerprints primarily consist of non-dense materials that X-rays would mostly pass through.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 2020"
  },
  {
    "id": 39,
    "questionNumber": 39,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Production of X-rays",
    "year": 2004,
    "difficulty": "Easy",
    "text": "A. List two properties of cathode rays. B. Explain how the intensity and energy of cathode rays may be increased.",
    "options": [
      {
        "key": "A",
        "text": "A.- They cause glass and other materials to fluoresce.- Produce heat:When cathode rays strike a material,they can transfer their kinetic energy,causing the material to heat up.- Carry kinetic energy:Due to their high velocity,cathode rays possess significant kinetic energy that can be transferred to other objects upon impact."
      },
      {
        "key": "B",
        "text": "B.(i) The intensity of cathode rays may be increased by raising the temperature of the cathode/increasing the current through the heater.(ii) The energy of cathode rays may be increased by raising the potential difference between the anode and the cathode/the anode potential."
      }
    ],
    "optionsMap": {
      "A": "A.- They cause glass and other materials to fluoresce.- Produce heat:When cathode rays strike a material,they can transfer their kinetic energy,causing the material to heat up.- Carry kinetic energy:Due to their high velocity,cathode rays possess significant kinetic energy that can be transferred to other objects upon impact.",
      "B": "B.(i) The intensity of cathode rays may be increased by raising the temperature of the cathode/increasing the current through the heater.(ii) The energy of cathode rays may be increased by raising the potential difference between the anode and the cathode/the anode potential.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Production of X-rays.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2009
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2009"
  },
  {
    "id": 40,
    "questionNumber": 40,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Thermionic & Photoelectric",
    "year": 2021,
    "difficulty": "Medium",
    "text": "In photoelectric effect, the number of electrons emitted per seconds from a metallic surface is proportional to the",
    "options": [
      {
        "key": "A",
        "text": "Intensity of the incident radiation."
      },
      {
        "key": "B",
        "text": "Frequency of the incident radiation."
      },
      {
        "key": "C",
        "text": "Energy of the incident radiation."
      },
      {
        "key": "D",
        "text": "Work function of the metal."
      }
    ],
    "optionsMap": {
      "A": "Intensity of the incident radiation.",
      "B": "Frequency of the incident radiation.",
      "C": "Energy of the incident radiation.",
      "D": "Work function of the metal."
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The number of electrons emitted per second from a metallic surface in the photoelectric effect is proportional to the intensity of the incident radiation. This means that increasing the brightness of the light will increase the number of emitted electrons, while decreasing the brightness will decrease the number of emitted electrons.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2021"
  },
  {
    "id": 41,
    "questionNumber": 41,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Thermionic & Photoelectric",
    "year": 2022,
    "difficulty": "Hard",
    "text": "Which of the following statements is TRUE of photoelectric effect?",
    "options": [
      {
        "key": "A",
        "text": "it cannot occur in liquids"
      },
      {
        "key": "B",
        "text": "the energy of the emitted electrons is independent of the work function of the surface"
      },
      {
        "key": "C",
        "text": "the energy of the emitted electron depends on the wavelength of the incident light"
      },
      {
        "key": "D",
        "text": "the greater the intensity of the incuident light, the greater the incident of the emitted electron"
      }
    ],
    "optionsMap": {
      "A": "it cannot occur in liquids",
      "B": "the energy of the emitted electrons is independent of the work function of the surface",
      "C": "the energy of the emitted electron depends on the wavelength of the incident light",
      "D": "the greater the intensity of the incuident light, the greater the incident of the emitted electron"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The energy of the emitted electron depends on the wavelength of the incident light The photoelectric effect demonstrates the particle nature of light and follows Einstein's photoelectric equation: E = hf - φ Where: <ul><li> E = kinetic energy of emitted electron .</li><li> h = Planck's constant .</li><li> f = frequency of incident light .</li><li> φ = work function of the material .</li></ul> Since frequency (f) and wavelength (λ) are inversely related by c = fλ (where c is the speed of light), the energy of emitted electrons directly depends on the wavelength of incident light. Shorter wavelengths (higher frequencies) produce electrons with greater kinetic energy.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1987,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1987, 2022"
  },
  {
    "id": 42,
    "questionNumber": 42,
    "subject": "Physics",
    "topic": "Modern Physics",
    "subtopic": "Thermionic & Photoelectric",
    "year": 1987,
    "difficulty": "Easy",
    "text": "Which of the following statements is TRUE of photoelectric effect?",
    "options": [
      {
        "key": "A",
        "text": "it cannot occur in liquids"
      },
      {
        "key": "B",
        "text": "the energy of the emitted electrons is independent of the work function of the surface"
      },
      {
        "key": "C",
        "text": "the energy of the emitted electron depends on the wavelength of the incident light"
      },
      {
        "key": "D",
        "text": "the greater the intensity of the incuident light, the greater the incident of the emitted electron"
      }
    ],
    "optionsMap": {
      "A": "it cannot occur in liquids",
      "B": "the energy of the emitted electrons is independent of the work function of the surface",
      "C": "the energy of the emitted electron depends on the wavelength of the incident light",
      "D": "the greater the intensity of the incuident light, the greater the incident of the emitted electron"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The energy of the emitted electron depends on the wavelength of the incident light The photoelectric effect demonstrates the particle nature of light and follows Einstein's photoelectric equation: E = hf - φ Where: <ul><li> E = kinetic energy of emitted electron .</li><li> h = Planck's constant .</li><li> f = frequency of incident light .</li><li> φ = work function of the material .</li></ul> Since frequency (f) and wavelength (λ) are inversely related by c = fλ (where c is the speed of light), the energy of emitted electrons directly depends on the wavelength of incident light. Shorter wavelengths (higher frequencies) produce electrons with greater kinetic energy.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1987,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1987, 2022"
  },
  {
    "id": 43,
    "questionNumber": 43,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Magnets & Magnetic Fields",
    "year": 2004,
    "difficulty": "Medium",
    "text": "Which of the following statements is not correct?",
    "options": [
      {
        "key": "A",
        "text": "A magnetic field is a region in which a magnetic force may be detected."
      },
      {
        "key": "B",
        "text": "A magnetic line of force is a path along which a magnetic north-pole would move if it were free."
      },
      {
        "key": "C",
        "text": "Magnetic fields are scalar quantities."
      },
      {
        "key": "D",
        "text": "Neutral points are obtained where the earth's magnetic field is exactly equal and opposite of that due to a magnet."
      }
    ],
    "optionsMap": {
      "A": "A magnetic field is a region in which a magnetic force may be detected.",
      "B": "A magnetic line of force is a path along which a magnetic north-pole would move if it were free.",
      "C": "Magnetic fields are scalar quantities.",
      "D": "Neutral points are obtained where the earth's magnetic field is exactly equal and opposite of that due to a magnet."
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Magnetic fields are vector quantities because they have both magnitude and direction. This means that they require three components (usually x, y, and z) to fully describe their characteristics at any given point.",
    "isRepeated": true,
    "repeatCount": 4,
    "repeatYears": [
      1985,
      2004,
      2017,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2004, 2017, 2025"
  },
  {
    "id": 44,
    "questionNumber": 44,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Magnets & Magnetic Fields",
    "year": 2016,
    "difficulty": "Hard",
    "text": "Which of the following is a property of steel?",
    "options": [
      {
        "key": "A",
        "text": "It can be used for making temporary magnets"
      },
      {
        "key": "B",
        "text": "It cannot retain its magnetism longer than iron"
      },
      {
        "key": "C",
        "text": "It can be used for making permanent magnets"
      },
      {
        "key": "D",
        "text": "It can easily be magnetized and demagnetized"
      }
    ],
    "optionsMap": {
      "A": "It can be used for making temporary magnets",
      "B": "It cannot retain its magnetism longer than iron",
      "C": "It can be used for making permanent magnets",
      "D": "It can easily be magnetized and demagnetized"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The Correct Answer is: It can be used for making permanent magnets Steel is an alloy of iron and carbon. It has high retentivity , meaning it retains its magnetism for a long time. This makes it ideal for making permanent magnets used in electrical devices like loudspeakers and generators.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 45,
    "questionNumber": 45,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Magnets & Magnetic Fields",
    "year": 2011,
    "difficulty": "Easy",
    "text": "Which of the following is a property of steel?",
    "options": [
      {
        "key": "A",
        "text": "It can easily be magnetized and demagnetized"
      },
      {
        "key": "B",
        "text": "It cannot retain its magnetism longer than iron"
      },
      {
        "key": "C",
        "text": "It can be used for making temporary magnets"
      },
      {
        "key": "D",
        "text": "It can be used for making permanent magnets"
      }
    ],
    "optionsMap": {
      "A": "It can easily be magnetized and demagnetized",
      "B": "It cannot retain its magnetism longer than iron",
      "C": "It can be used for making temporary magnets",
      "D": "It can be used for making permanent magnets"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "It can be used for making permanent magnets. Steel is known for its ability to retain magnetism for a long time, making it suitable for the production of permanent magnets. Unlike soft iron, which loses its magnetism easily, steel remains magnetized due to its higher retentivity and coercivity.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 46,
    "questionNumber": 46,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Magnets & Magnetic Fields",
    "year": 2022,
    "difficulty": "Medium",
    "text": "A bar magnet is placed near and lying along the axis of a solenoid connected to a galvanometer. The pointer of the galvanometer shows no deflection when?",
    "options": [
      {
        "key": "A",
        "text": "the magnet is moved towards the stationary solenoid"
      },
      {
        "key": "B",
        "text": "there is no relative motion"
      },
      {
        "key": "C",
        "text": "the magnet is moved away from the stationary solenoid"
      },
      {
        "key": "D",
        "text": "the solenoid is moved away from the stationary magnet"
      }
    ],
    "optionsMap": {
      "A": "the magnet is moved towards the stationary solenoid",
      "B": "there is no relative motion",
      "C": "the magnet is moved away from the stationary solenoid",
      "D": "the solenoid is moved away from the stationary magnet"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The pointer of the galvanometer shows no deflection when the bar magnet is stationary relative to the solenoid. The galvanometer measures current, and current is induced in the solenoid when there is a change in magnetic flux through it. If the bar magnet is stationary, the magnetic flux through the solenoid remains constant, and no electromagnetic induction occurs.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 47,
    "questionNumber": 47,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Forces On A Conductors",
    "year": 2005,
    "difficulty": "Hard",
    "text": "A bar magnet is placed near and lying along the axis of a solenoid connected to a galvanometer. The pointer of the galvanometer shows no deflection when",
    "options": [
      {
        "key": "A",
        "text": "The magnet is moved away from the stationery solenoid"
      },
      {
        "key": "B",
        "text": "The solenoid is moved away from the stationary magnet"
      },
      {
        "key": "C",
        "text": "The magnet is moved towards the stationary solenoid"
      },
      {
        "key": "D",
        "text": "There is not relative motion between the magnet and the solenoid"
      }
    ],
    "optionsMap": {
      "A": "The magnet is moved away from the stationery solenoid",
      "B": "The solenoid is moved away from the stationary magnet",
      "C": "The magnet is moved towards the stationary solenoid",
      "D": "There is not relative motion between the magnet and the solenoid"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "According to Faraday's law of electromagnetic induction, an electromotive force (EMF) is induced in a coil (solenoid in this case) when there is a change in magnetic flux. The induced current produces a magnetic field that opposes the change in the magnetic field that produced it. In this scenario, if the galvanometer shows no deflection, it implies that there is no induced EMF and, consequently, no current flowing. This occurs when there is no change in magnetic flux. The correct statement is: When there is no relative motion between the magnet and the solenoid, there is no change in magnetic flux, and",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 48,
    "questionNumber": 48,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Forces On A Conductors",
    "year": 2009,
    "difficulty": "Easy",
    "text": "A cell of e.m.f 1.5V is connected in series with a resistor of resistance 3.0A voltmeter connected across the cell registers 0.9V. Calculate the internal resistance of the cell.",
    "options": [
      {
        "key": "A",
        "text": "2.0Ω"
      },
      {
        "key": "B",
        "text": "3.0Ω"
      },
      {
        "key": "C",
        "text": "5.0Ω"
      },
      {
        "key": "D",
        "text": "6.0Ω"
      }
    ],
    "optionsMap": {
      "A": "2.0Ω",
      "B": "3.0Ω",
      "C": "5.0Ω",
      "D": "6.0Ω"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: e.m.f, E = 1.5V Internal resistance, r =? Total resistance (load) = 3.0Ω Voltage, V = 0.9v Recall: V = IR and E = Ir + V 1.5 = Ir + 0.9 ......(i) Since, V = IR then, 0.9 = I × 3 I = 0.3 Equation (i) becomes: 1.5 = (0.3) r + 0.9 0.6 = 0.3r. r = 2Ω",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 49,
    "questionNumber": 49,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Forces On A Conductors",
    "year": 2009,
    "difficulty": "Medium",
    "text": "In a hydraulic press, a force of 40N is applied to the smaller piston of area 10cm <sup>2</sup>. If the area of the larger piston is 200cm <sup>2</sup>, calculate the force obtained.",
    "options": [
      {
        "key": "A",
        "text": "800N"
      },
      {
        "key": "B",
        "text": "500N"
      },
      {
        "key": "C",
        "text": "80N"
      },
      {
        "key": "D",
        "text": "50N"
      }
    ],
    "optionsMap": {
      "A": "800N",
      "B": "500N",
      "C": "80N",
      "D": "50N"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: Force on smaller piston, F<sub>1</sub> = 40N Area of the smaller piston, A<sub>1</sub> = 10cm <sup>2</sup> Force on larger piston, F<sub>2</sub> =? Area of larger piston, A<sub>2</sub> = 200cm <sup>2</sup> Recall: \\(\\frac{F_1}{A_1} = \\frac{F_1}{A_1}\\)\\(\\frac{40}{10} = \\frac{F_1}{200}\\) F<sub>2</sub> = 800N",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 50,
    "questionNumber": 50,
    "subject": "Physics",
    "topic": "Magnetism",
    "subtopic": "Forces On A Conductors",
    "year": 2006,
    "difficulty": "Hard",
    "text": "A cell of e.m.f 1.5V and internal resistance 1.0 Ω is connected to two resistors of resistances 2.0Ω and 3.0Ω in series. Calculate through the resistors.",
    "options": [
      {
        "key": "A",
        "text": "0.25A"
      },
      {
        "key": "B",
        "text": "0.30A"
      },
      {
        "key": "C",
        "text": "0.35A"
      },
      {
        "key": "D",
        "text": "0.50A"
      }
    ],
    "optionsMap": {
      "A": "0.25A",
      "B": "0.30A",
      "C": "0.35A",
      "D": "0.50A"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given: The e.m.f of the cell, E = 1.5V The internal resistance, r = 1.0Ω The Load, R<sub>1</sub> = 2.0Ω The Load = R<sub>2</sub> = 3.0Ω The Effective Load, = R<sub>1</sub> + R<sub>2</sub> (Since they are in series) = 2 + 3 = 5.0Ω Recall: E = I (R + r) Therefore 1.5 = I (5 + 1) 1.5 = 6I I = 0.25A",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 51,
    "questionNumber": 51,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Sound Waves",
    "year": 2025,
    "difficulty": "Easy",
    "text": "Which of the following reasons explains why the walls and ceilings of a standard concert hall are usually covered with perforated pads? To",
    "options": [
      {
        "key": "A",
        "text": "increase the intensity of sound waves."
      },
      {
        "key": "B",
        "text": "increase the loudness of sound waves."
      },
      {
        "key": "C",
        "text": "reduce the effect of reverberation of sound waves."
      },
      {
        "key": "D",
        "text": "decrease the frequency of sound waves."
      }
    ],
    "optionsMap": {
      "A": "increase the intensity of sound waves.",
      "B": "increase the loudness of sound waves.",
      "C": "reduce the effect of reverberation of sound waves.",
      "D": "decrease the frequency of sound waves."
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Reduce the effect of reverberation of sound waves In a concert hall , sound quality is critical. One common problem is reverberation , which occurs when sound waves reflect off walls, ceilings, and floors, causing prolonged echoes that blur the clarity of speech or music. Perforated pads (often made of soft, porous materials) are used to: <ul><li> Absorb sound waves. </li><li> Dampen reflections from surfaces. </li><li> Reduce reverberation time , leading to clearer acoustics. </li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2025"
  },
  {
    "id": 52,
    "questionNumber": 52,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Sound Waves",
    "year": 2015,
    "difficulty": "Medium",
    "text": "What type of wave is emitted by a loudspeaker?",
    "options": [
      {
        "key": "A",
        "text": "Transverse"
      },
      {
        "key": "B",
        "text": "Longitudinal"
      },
      {
        "key": "C",
        "text": "Gamma"
      },
      {
        "key": "D",
        "text": "Radio"
      }
    ],
    "optionsMap": {
      "A": "Transverse",
      "B": "Longitudinal",
      "C": "Gamma",
      "D": "Radio"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Sound waves are longitudinal wave where particles oscillate parallel to the direction of wave propagation. In a longitudinal wave, compressions and rarefactions occur, causing changes in pressure. This movement transfers energy through the medium without displacing particles permanently, unlike transverse waves.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2018"
  },
  {
    "id": 53,
    "questionNumber": 53,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Sound Waves",
    "year": 2022,
    "difficulty": "Hard",
    "text": "If a source of sound is moving, a stationary listener will hear a sound of different frequency. This is called",
    "options": [
      {
        "key": "A",
        "text": "Doppler effect"
      },
      {
        "key": "B",
        "text": "Resonance"
      },
      {
        "key": "C",
        "text": "Diffraction of sound"
      },
      {
        "key": "D",
        "text": "Rarefaction"
      }
    ],
    "optionsMap": {
      "A": "Doppler effect",
      "B": "Resonance",
      "C": "Diffraction of sound",
      "D": "Rarefaction"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The Doppler effect refers to the change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source. This effect is commonly observed in sound waves but can also occur with other types of waves. In the context of sound, if a source of sound is moving towards a stationary listener, the sound waves are compressed, leading to an increase in frequency (higher pitch). Conversely, if the source is moving away from the listener, the waves are stretched, resulting in a decrease in frequency (lower pitch). This phenomenon is known as the Doppler effect.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2022"
  },
  {
    "id": 54,
    "questionNumber": 54,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Sound Waves",
    "year": 2022,
    "difficulty": "Easy",
    "text": "When a sound wave passes from air into water its",
    "options": [
      {
        "key": "A",
        "text": "speed and frequency increases but its wavelength remains the same"
      },
      {
        "key": "B",
        "text": "speed and wavelength increases but its frequency remains the same"
      },
      {
        "key": "C",
        "text": "speed decreases"
      },
      {
        "key": "D",
        "text": "speed increases but its frequency and wavelength decreases"
      }
    ],
    "optionsMap": {
      "A": "speed and frequency increases but its wavelength remains the same",
      "B": "speed and wavelength increases but its frequency remains the same",
      "C": "speed decreases",
      "D": "speed increases but its frequency and wavelength decreases"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Sound waves travel faster in denser mediums like water compared to air.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1985,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2022"
  },
  {
    "id": 55,
    "questionNumber": 55,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Waves in Vibrating Strings",
    "year": 2017,
    "difficulty": "Medium",
    "text": "A guitar string is 75cm long. The wavelength of its fundamental note is",
    "options": [
      {
        "key": "A",
        "text": "75cm"
      },
      {
        "key": "B",
        "text": "150cm"
      },
      {
        "key": "C",
        "text": "37.5cm"
      },
      {
        "key": "D",
        "text": "112.5cm"
      }
    ],
    "optionsMap": {
      "A": "75cm",
      "B": "150cm",
      "C": "37.5cm",
      "D": "112.5cm"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The wavelength of the fundamental note of a vibrating string is given by the formula: Wavelength (λ) = 2 x Length of the String In this case, the length of the guitar string is 75 cm Wavelength (λ) = 2 x 75 cm = 150 cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2017"
  },
  {
    "id": 56,
    "questionNumber": 56,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Waves in Vibrating Strings",
    "year": 1978,
    "difficulty": "Hard",
    "text": "A guitar string is 75cm long. The wavelength of its fundamental note is",
    "options": [
      {
        "key": "A",
        "text": "75cm"
      },
      {
        "key": "B",
        "text": "150cm"
      },
      {
        "key": "C",
        "text": "37.5cm"
      },
      {
        "key": "D",
        "text": "112cm"
      }
    ],
    "optionsMap": {
      "A": "75cm",
      "B": "150cm",
      "C": "37.5cm",
      "D": "112cm"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "150 cm. For a guitar string fixed at both ends, the fundamental note (first harmonic) corresponds to a wavelength that is twice the length of the string . This is because the fundamental mode consists of one half-wavelength fitting along the length of the string. Given: Length of the string,L=75 cm. The wavelength (λ) of the fundamental note is: \\(λ=2L=2×75=150 cm\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2017"
  },
  {
    "id": 57,
    "questionNumber": 57,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Waves in Vibrating Strings",
    "year": 2016,
    "difficulty": "Easy",
    "text": "If a sonometer has a fundamental frequency of 450Hz, what is the frequency of the fifth overtone?",
    "options": [
      {
        "key": "A",
        "text": "456Hz"
      },
      {
        "key": "B",
        "text": "444Hz"
      },
      {
        "key": "C",
        "text": "75Hz"
      },
      {
        "key": "D",
        "text": "2700Hz"
      }
    ],
    "optionsMap": {
      "A": "456Hz",
      "B": "444Hz",
      "C": "75Hz",
      "D": "2700Hz"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Fundamental frequency, f<sub>o</sub> = 450Hz The frequency of the fifth overtone, f<sub>5</sub> = ? Recall: f<sub>n</sub> = (n+1)f<sub>o</sub> f<sub>5</sub> = (5 +1)f<sub>o</sub> = 6f<sub>o</sub> = 6 x 450 = 2700Hz.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 58,
    "questionNumber": 58,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Waves in Vibrating Strings",
    "year": 1987,
    "difficulty": "Medium",
    "text": "The lowest note emitted by a stretched string has a frequency of 40Hz. How many overtones are there between 40Hz and 150Hz?",
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
    "explanation": "The fundamental frequency (Fo) = 40Hz First overtone f1 = 2 ×× 40 = 80 Second overtone f2 = 3 ×× 40 = 120 Third overtone f3 = 4 ×× 40 = 160. Hence there are just two overtones between 40Hz and 150Hz",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1987,
      1999
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1987, 1999"
  },
  {
    "id": 59,
    "questionNumber": 59,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Echoes & Reverberations",
    "year": 2024,
    "difficulty": "Hard",
    "text": "The sound from a source travelled to the bottom of the sea and the echo was heard 4s later. The sound in seawater is 1500 ms⁻¹. The depth of the sea is.",
    "options": [
      {
        "key": "A",
        "text": "6000m"
      },
      {
        "key": "B",
        "text": "3000m"
      },
      {
        "key": "C",
        "text": "1500m"
      },
      {
        "key": "D",
        "text": "375m"
      }
    ],
    "optionsMap": {
      "A": "6000m",
      "B": "3000m",
      "C": "1500m",
      "D": "375m"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The sound wave travels down to the sea bottom and then back up, so the total distance is twice the depth of the sea, which can be expressed as: Total Distance = 2d The formula for speed is: \\(\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}\\) Substituting the known values: \\(1500 \\, \\text{m/s} = \\frac{2d}{4 \\, \\text{seconds}}\\) Multiply both sides of the equation by 2: d = 1500 × 2 = 3000 meters Conclusion: The depth of the sea is 3000 meters, so the correct answer is 3000m .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1994,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1994, 2024"
  },
  {
    "id": 60,
    "questionNumber": 60,
    "subject": "Physics",
    "topic": "Waves - Sound",
    "subtopic": "Echoes & Reverberations",
    "year": 1978,
    "difficulty": "Easy",
    "text": "A herdsman yelling out to fellow herdsman heard his voice reflected by cliff 4s later. What is the velocity of sound in air if the cliff is 680m away?",
    "options": [
      {
        "key": "A",
        "text": "170ms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "136ms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "340ms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "680ms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "170ms <sup>-1</sup>",
      "B": "136ms <sup>-1</sup>",
      "C": "340ms <sup>-1</sup>",
      "D": "680ms <sup>-1</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "340 m/s . Given: Time for sound to travel to the cliff and back,t=4 s, Distance to the cliff,d=680 m. Calculate the total distance traveled by sound: The sound travels to the cliff and back, so the total distance is: \\(Total distance=2×d=2×680=1360 m\\) Calculate the velocity of sound: Velocity is given by: \\(v=\\frac{Total\\ distance}t\\) Substituting the values: \\(v=\\frac{1360}4=340 m/s\\) The velocity of sound in air is 340 m/s .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 61,
    "questionNumber": 61,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Momentum & Collision",
    "year": 2019,
    "difficulty": "Medium",
    "text": "Which of the following quantities is a vector?",
    "options": [
      {
        "key": "A",
        "text": "Volume"
      },
      {
        "key": "B",
        "text": "momentum"
      },
      {
        "key": "C",
        "text": "Energy"
      },
      {
        "key": "D",
        "text": "speed"
      }
    ],
    "optionsMap": {
      "A": "Volume",
      "B": "momentum",
      "C": "Energy",
      "D": "speed"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Momentum, on the other hand, is a vector quantity. It is defined as the product of an object's mass and its velocity. Since velocity is a vector (including both magnitude and direction), momentum also inherits its vector nature. It tells you not only how fast an object is moving but also in which direction.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2006,
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2006, 2019, 2024"
  },
  {
    "id": 62,
    "questionNumber": 62,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Momentum & Collision",
    "year": 2006,
    "difficulty": "Hard",
    "text": "Which of the following quantities is a vector?",
    "options": [
      {
        "key": "A",
        "text": "Speed"
      },
      {
        "key": "B",
        "text": "Distance"
      },
      {
        "key": "C",
        "text": "Energy"
      },
      {
        "key": "D",
        "text": "Momentum"
      }
    ],
    "optionsMap": {
      "A": "Speed",
      "B": "Distance",
      "C": "Energy",
      "D": "Momentum"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Momentum Momentum is the product of an object's mass and velocity. Since velocity is a vector quantity with both magnitude and direction, momentum inherits this characteristic and becomes a vector quantity as well.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2006,
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2006, 2019, 2024"
  },
  {
    "id": 63,
    "questionNumber": 63,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Circular Motion",
    "year": 1978,
    "difficulty": "Easy",
    "text": "The force required to make an object of mass m, travelling with velocity v, turn in a circle of radius r is",
    "options": [
      {
        "key": "A",
        "text": "\\(\\frac{mv^2}r\\)"
      },
      {
        "key": "B",
        "text": "\\(\\frac{mr^2}v \\)"
      },
      {
        "key": "C",
        "text": "\\(\\frac{mr}v \\)"
      },
      {
        "key": "D",
        "text": "\\(\\frac{mv}{r^2}\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\frac{mv^2}r\\)",
      "B": "\\(\\frac{mr^2}v \\)",
      "C": "\\(\\frac{mr}v \\)",
      "D": "\\(\\frac{mv}{r^2}\\)"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\frac{mv^2}r\\)The force required to make an object of massmm, traveling with velocity v, turn in a circle of radiusr is called the centripetal force .It is given by the formula:\\(F=\\frac{mv^2}r\\)Where:where:<ul><li>F = centripetal force</li><li>m = mass of the object</li><li>v = velocity of the object</li><li>r = radius of the circular path</li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2020"
  },
  {
    "id": 64,
    "questionNumber": 64,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Circular Motion",
    "year": 2005,
    "difficulty": "Medium",
    "text": "A stone tied to a string is made to revolve in a horizontal circle of radius 4m with an angular speed of 2rad/s. With what tangential velocity will the stone move off the circle if the string cuts?",
    "options": [
      {
        "key": "A",
        "text": "16ms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "8ms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "2ms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "0.5ms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "16ms <sup>-1</sup>",
      "B": "8ms <sup>-1</sup>",
      "C": "2ms <sup>-1</sup>",
      "D": "0.5ms <sup>-1</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "v = ωr angular velocity, ω = 2rad/s radius, r = 4m linear velocity, v = 4 × 2 v = 8ms <sup>-1</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 65,
    "questionNumber": 65,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Circular Motion",
    "year": 2022,
    "difficulty": "Hard",
    "text": "A stone tied to a string is made to revolve in a horizontal circle of radius 4m with an angular speed of 2rad/s. With what tangential velocity will the stone move off the circle if the string cuts?",
    "options": [
      {
        "key": "A",
        "text": "16ms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "8ms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "2ms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "0.5ms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "16ms <sup>-1</sup>",
      "B": "8ms <sup>-1</sup>",
      "C": "2ms <sup>-1</sup>",
      "D": "0.5ms <sup>-1</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The tangential velocity (v) of an object moving in a circle is given by the formula: v = rω Where: <ul><li> v is the tangential velocity, .</li><li> r is the radius of the circle = 4m .</li><li> ω is the angular speed = 2rad/s .</li></ul> Substituting these values into the formula: \\(v_t = 4 \\times 2 = 8 \\, \\text{m/s}\\) = 8m/s",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 66,
    "questionNumber": 66,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Circular Motion",
    "year": 2020,
    "difficulty": "Easy",
    "text": "The force required to make an object of mass m, travelling with velocity v, turn in a circle of radius r is",
    "options": [
      {
        "key": "A",
        "text": "mv <sup>2</sup> /r"
      },
      {
        "key": "B",
        "text": "mr <sup>2</sup> /x"
      },
      {
        "key": "C",
        "text": "mr/v"
      },
      {
        "key": "D",
        "text": "mv/r <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "mv <sup>2</sup> /r",
      "B": "mr <sup>2</sup> /x",
      "C": "mr/v",
      "D": "mv/r <sup>2</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The correct formula for the centripetal force required to make an object of mass m, traveling with velocity v, turn in a circle of radius r is: Mv <sup>2</sup> /r This is derived from the centripetal force formula: F= mv <sup>2</sup> /r ​, where F is the centripetal force, m is the mass, v is the velocity, and r is the radius of the circle.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2020"
  },
  {
    "id": 67,
    "questionNumber": 67,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Linear Motion",
    "year": 2019,
    "difficulty": "Medium",
    "text": "The area under a velocity-time graph represents",
    "options": [
      {
        "key": "A",
        "text": "speed"
      },
      {
        "key": "B",
        "text": "acceleration"
      },
      {
        "key": "C",
        "text": "moment"
      },
      {
        "key": "D",
        "text": "distance"
      }
    ],
    "optionsMap": {
      "A": "speed",
      "B": "acceleration",
      "C": "moment",
      "D": "distance"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The area under a velocity-time graph represents the displacement or distance travelled by an object.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2019
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2019"
  },
  {
    "id": 68,
    "questionNumber": 68,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Linear Motion",
    "year": 2014,
    "difficulty": "Hard",
    "text": "A car accelerates uniformly from rest at 3ms <sup>-2</sup>, its velocity after travelling a distance of 24m is",
    "options": [
      {
        "key": "A",
        "text": "72ms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "36ms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "12 ms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "144 ms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "72ms <sup>-1</sup>",
      "B": "36ms <sup>-1</sup>",
      "C": "12 ms <sup>-1</sup>",
      "D": "144 ms <sup>-1</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Parameters given: Initial velocity, u = 0 {from rest} Acceleration, a = 3ms <sup>-2</sup> Distance, s = 24m Final velocity, v = ? Recall: v <sup>2</sup> = u <sup>2</sup> + 2as v <sup>2</sup> = 0 <sup>2</sup> + 2(3)(24) v <sup>2</sup> = 144 V = 12.0ms <sup>-1</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 69,
    "questionNumber": 69,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Linear Motion",
    "year": 2005,
    "difficulty": "Easy",
    "text": "A bus starts from rest and travels at a uniform acceleration of 2ms <sup>-2</sup> for 25 seconds. What is the distance travelled?",
    "options": [
      {
        "key": "A",
        "text": "625m"
      },
      {
        "key": "B",
        "text": "82m"
      },
      {
        "key": "C",
        "text": "50m"
      },
      {
        "key": "D",
        "text": "12.5m"
      }
    ],
    "optionsMap": {
      "A": "625m",
      "B": "82m",
      "C": "50m",
      "D": "12.5m"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "from second equation of motion Distance, s = ut + ½ at <sup>2</sup> Initial velocity, u = 0 (from rest) Acceleration, a = 2ms <sup>-2</sup> Time, t = 25s s = u(25) + ½ (2)(25 <sup>2</sup> )s = 0 + 625 s = 625m",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 70,
    "questionNumber": 70,
    "subject": "Physics",
    "topic": "Motion",
    "subtopic": "Linear Motion",
    "year": 2016,
    "difficulty": "Medium",
    "text": "A car accelerates uniformly from rest at 3ms <sup>-2</sup>, its velocity after travelling a distance of 24m is",
    "options": [
      {
        "key": "A",
        "text": "72ms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "36ms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "12 ms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "144 ms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "72ms <sup>-1</sup>",
      "B": "36ms <sup>-1</sup>",
      "C": "12 ms <sup>-1</sup>",
      "D": "144 ms <sup>-1</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Applying Newton's equation of motion; v <sup>2</sup> = u <sup>2</sup> + 2as where: v is the final velocity (unknown) u is the initial velocity (0 m/s, since the car starts from rest) a is the acceleration (3 m/s²) s is the distance traveled (24 m) Substituting the known values into the equation: v <sup>2</sup> = 0 <sup>2</sup> + 2 x 3 x 24 v <sup>2</sup> = 144 Taking the square root of both sides: v = √144 v = 12 ms <sup>-1</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 71,
    "questionNumber": 71,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Dispersion of Light",
    "year": 2011,
    "difficulty": "Hard",
    "text": "When a red rose flower is observed in blue light, what colour does the observer see?",
    "options": [
      {
        "key": "A",
        "text": "Yellow"
      },
      {
        "key": "B",
        "text": "Red"
      },
      {
        "key": "C",
        "text": "Blue"
      },
      {
        "key": "D",
        "text": "Magenta"
      }
    ],
    "optionsMap": {
      "A": "Yellow",
      "B": "Red",
      "C": "Blue",
      "D": "Magenta"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When a red rose flower is observed under blue light, the observer will see the rose as black or a very dark color. This happens because the red pigments in the rose absorb blue light and do not reflect or transmit it. Since the rose cannot reflect the blue light (which is the only light present in this scenario), it absorbs the blue light, and no light is reflected back to the observer's eyes.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 72,
    "questionNumber": 72,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Dispersion of Light",
    "year": 2013,
    "difficulty": "Easy",
    "text": "The angle of deviation of light of various colours passing through a triangular prism increases in the order",
    "options": [
      {
        "key": "A",
        "text": "blue → green → red"
      },
      {
        "key": "B",
        "text": "red → green → blue"
      },
      {
        "key": "C",
        "text": "green → violet → blue"
      },
      {
        "key": "D",
        "text": "blue → red → green"
      }
    ],
    "optionsMap": {
      "A": "blue → green → red",
      "B": "red → green → blue",
      "C": "green → violet → blue",
      "D": "blue → red → green"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The angle of deviation of light through a prism depends on its wavelength. Shorter wavelengths bend more than longer wavelengths.The visible spectrum of light comprises colors from violet (shortest wavelength) to red (longest wavelength).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 73,
    "questionNumber": 73,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Dispersion of Light",
    "year": 2018,
    "difficulty": "Medium",
    "text": "A rainbow is formed when sunlight is incident on water droplets suspended in the air due to",
    "options": [
      {
        "key": "A",
        "text": "diffraction"
      },
      {
        "key": "B",
        "text": "refraction"
      },
      {
        "key": "C",
        "text": "dispersion"
      },
      {
        "key": "D",
        "text": "interference"
      }
    ],
    "optionsMap": {
      "A": "diffraction",
      "B": "refraction",
      "C": "dispersion",
      "D": "interference"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Dispersion occurs when light separates into its component colors due to different wavelengths bending by different amounts as they pass through a medium. In the case of a rainbow, sunlight enters the water droplets, undergoes refraction, dispersion, and internal reflection within the droplets, and then emerges as a spectrum of colors (red, orange, yellow, green, blue, indigo, violet). Thus, the correct answer is dispersion .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2018"
  },
  {
    "id": 74,
    "questionNumber": 74,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Dispersion of Light",
    "year": 2016,
    "difficulty": "Hard",
    "text": "When a red rose flower is observed in blue light, what colour does the observer see?",
    "options": [
      {
        "key": "A",
        "text": "Black"
      },
      {
        "key": "B",
        "text": "Blue"
      },
      {
        "key": "C",
        "text": "Yellow"
      },
      {
        "key": "D",
        "text": "Red"
      }
    ],
    "optionsMap": {
      "A": "Black",
      "B": "Blue",
      "C": "Yellow",
      "D": "Red"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When a red rose flower is observed in blue light, the observer will most likely see it as Black. Red roses appear red because they absorb all other colours of light except red, which they reflect to our eyes. Blue light is the opposite of red on the colour spectrum.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 75,
    "questionNumber": 75,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Color Mixing",
    "year": 2016,
    "difficulty": "Easy",
    "text": "The angle of deviation of light of various colours passing through a triangular prism increases in the order.",
    "options": [
      {
        "key": "A",
        "text": "green → violet → blue"
      },
      {
        "key": "B",
        "text": "blue → red → green"
      },
      {
        "key": "C",
        "text": "blue → green → red"
      },
      {
        "key": "D",
        "text": "red → green → blue"
      }
    ],
    "optionsMap": {
      "A": "green → violet → blue",
      "B": "blue → red → green",
      "C": "blue → green → red",
      "D": "red → green → blue"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "red → green → blue In dispersion of light through a triangular prism , white light splits into its constituent colours because each colour (wavelength) is refracted (bent) by a different amount . This bending or angle of deviation depends on the wavelength of the light: <ul><li> Shorter wavelengths (like blue or violet) are bent more .</li><li> Longer wavelengths (like red) are bent less .</li></ul> So, the angle of deviation increases in the order: <blockquote> Red < Green < Blue (or Violet)</blockquote>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 76,
    "questionNumber": 76,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Spectra",
    "year": 1978,
    "difficulty": "Medium",
    "text": "Of the following which is different from the other?",
    "options": [
      {
        "key": "A",
        "text": "x-rays"
      },
      {
        "key": "B",
        "text": "gamma-rays"
      },
      {
        "key": "C",
        "text": "cathode rays"
      },
      {
        "key": "D",
        "text": "ultra violet rays"
      }
    ],
    "optionsMap": {
      "A": "x-rays",
      "B": "gamma-rays",
      "C": "cathode rays",
      "D": "ultra violet rays"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "cathode rays. Cathode rays are streams of electrons emitted from the cathode in a vacuum tube. They are particles (electrons) and not electromagnetic waves. The other options ( x-rays, gamma-rays, ultraviolet rays, and infrared rays ) are all types of electromagnetic waves and belong to the electromagnetic spectrum. Thus, cathode rays are different from the others because they are not electromagnetic waves.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 77,
    "questionNumber": 77,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Spectra",
    "year": 1979,
    "difficulty": "Hard",
    "text": "Which of the following electromagnetic waves has the shortest wavelength?",
    "options": [
      {
        "key": "A",
        "text": "Radio waves"
      },
      {
        "key": "B",
        "text": "X-rays"
      },
      {
        "key": "C",
        "text": "Infra-red"
      },
      {
        "key": "D",
        "text": "Blue light"
      }
    ],
    "optionsMap": {
      "A": "Radio waves",
      "B": "X-rays",
      "C": "Infra-red",
      "D": "Blue light"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "X-rays. The wavelength of electromagnetic waves determines their position in the electromagnetic spectrum. The order of wavelengths from longest to shortest is: <ol start=\"1\"><li> Radio waves (longest wavelength), </li><li> Infra-red , </li><li> Visible light (e.g., blue light), </li><li> Ultraviolet , </li><li> X-rays (shortest wavelength). </li></ol> Thus, X-rays have the shortest wavelength among the given options.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2017"
  },
  {
    "id": 78,
    "questionNumber": 78,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Color Mixing",
    "year": 1995,
    "difficulty": "Easy",
    "text": "Which of the following pairs of colors gives the widest separation in the spectrum of white light?",
    "options": [
      {
        "key": "A",
        "text": "Red and Violet"
      },
      {
        "key": "B",
        "text": "Green and Yellow"
      },
      {
        "key": "C",
        "text": "Red and Indigo"
      },
      {
        "key": "D",
        "text": "Yellow and Violet"
      }
    ],
    "optionsMap": {
      "A": "Red and Violet",
      "B": "Green and Yellow",
      "C": "Red and Indigo",
      "D": "Yellow and Violet"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "White light is composed of light of different wavelengths (colors) i.e., violet, indigo, blue, green, yellow, orange and red. Red has the highest wavelength and violet the lowest. Wavelength is inversely proportional to the deviation in the path of the light. Red light suffers the least amount of deviation and violet the most.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 79,
    "questionNumber": 79,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Color Mixing",
    "year": 1994,
    "difficulty": "Medium",
    "text": "If the Nigeria flag (green, white, green) is viewed in pure yellow light, which of the following set of colours would be observed on the flag?",
    "options": [
      {
        "key": "A",
        "text": "Green, yellow, green"
      },
      {
        "key": "B",
        "text": "Red, yellow, red"
      },
      {
        "key": "C",
        "text": "black, yellow, black"
      },
      {
        "key": "D",
        "text": "Green, white, green"
      }
    ],
    "optionsMap": {
      "A": "Green, yellow, green",
      "B": "Red, yellow, red",
      "C": "black, yellow, black",
      "D": "Green, white, green"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Correct answer: C. black, yellow, black The Nigerian flag has three vertical stripes: Green – White – Green When viewed in pure yellow light, only yellow light is available for reflection. <ul> <li>Green surfaces reflect only green light and absorb other colours. <ul> <li>Since there is no green light in pure yellow light, the green stripes will absorb the yellow light and appear black (dark).</li> </ul> </li> <li>White surfaces reflect all colours. <ul> <li>Therefore, the white stripe will reflect the yellow light and appear yellow. </li> </ul> </li> </ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 80,
    "questionNumber": 80,
    "subject": "Physics",
    "topic": "Waves - Dispersion",
    "subtopic": "Color Mixing",
    "year": 1984,
    "difficulty": "Hard",
    "text": "The spectrum of white light consists of coloured lights arranged in the following order",
    "options": [
      {
        "key": "A",
        "text": "blue, red, green, yellow, indigo, violet, orange"
      },
      {
        "key": "B",
        "text": "red, orange, yellow, green, blue, indigo, violet"
      },
      {
        "key": "C",
        "text": "red, orange, yellow, indigo, green, blue, violet"
      },
      {
        "key": "D",
        "text": "indigo, green, blue, violet, yellow, red, orange"
      }
    ],
    "optionsMap": {
      "A": "blue, red, green, yellow, indigo, violet, orange",
      "B": "red, orange, yellow, green, blue, indigo, violet",
      "C": "red, orange, yellow, indigo, green, blue, violet",
      "D": "indigo, green, blue, violet, yellow, red, orange"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "red, orange, yellow, green, blue, indigo, violet . spectrum . These colors are arranged according to their wavelengths, from the longest wavelength to the shortest: <ul><li> Red has the longest wavelength. </li><li> Violet has the shortest wavelength. </li></ul> The correct order of colors in the visible spectrum is: Red,Orange,Yellow,Green,Blue,Indigo,Violet This can be remembered by the acronym ROYGBIV .",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 81,
    "questionNumber": 81,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Mirrors, Lens & Optics",
    "year": 1985,
    "difficulty": "Easy",
    "text": "Which of the following statements is NOT correct?",
    "options": [
      {
        "key": "A",
        "text": "The average range of distinct vision for a normal eye is from the far distance (infinity) up to about 25cm in front of the eye"
      },
      {
        "key": "B",
        "text": "Longsighted people have difficulty in making the eye lense sufficiently powerful to focus on nearby objects"
      },
      {
        "key": "C",
        "text": "Shortsighted people cannot accommodate distant objects"
      },
      {
        "key": "D",
        "text": "Longsighted people need diverging spectacle lenses"
      }
    ],
    "optionsMap": {
      "A": "The average range of distinct vision for a normal eye is from the far distance (infinity) up to about 25cm in front of the eye",
      "B": "Longsighted people have difficulty in making the eye lense sufficiently powerful to focus on nearby objects",
      "C": "Shortsighted people cannot accommodate distant objects",
      "D": "Longsighted people need diverging spectacle lenses"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Longsighted people need diverging spectacle lenses.",
    "isRepeated": true,
    "repeatCount": 4,
    "repeatYears": [
      1985,
      2004,
      2017,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2004, 2017, 2025"
  },
  {
    "id": 82,
    "questionNumber": 82,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Mirrors, Lens & Optics",
    "year": 2018,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:143px; width:316px\"/>Which of the following types of lenses is suitable for correcting the eye defect illustrated by the ray diagram above?",
    "options": [
      {
        "key": "A",
        "text": "Bi-converging"
      },
      {
        "key": "B",
        "text": "Bi-diverging"
      },
      {
        "key": "C",
        "text": "Plano diverging"
      },
      {
        "key": "D",
        "text": "Diverging meniscus"
      }
    ],
    "optionsMap": {
      "A": "Bi-converging",
      "B": "Bi-diverging",
      "C": "Plano diverging",
      "D": "Diverging meniscus"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The diagram shows a condition where the image forms behind the retina , which is a defect known as hyperopia or farsightedness .In this condition, the eyeball is too short , or the cornea is not curved enough , causing light rays to focus behind the retina . As a result, near objects appear blurry , while distant objects are seen clearly .Hyperopia is corrected using convex (bi-converging) lenses , which help focus light directly on the retina .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2018"
  },
  {
    "id": 83,
    "questionNumber": 83,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Mirrors, Lens & Optics",
    "year": 1986,
    "difficulty": "Hard",
    "text": "If the refractive index of glass is 1.5, what is the critical angle at the air-glass interface?",
    "options": [
      {
        "key": "A",
        "text": "sin <sup>-1 \\({{1} \\over 2}\\)</sup>"
      },
      {
        "key": "B",
        "text": "sin <sup>-1 \\({{2} \\over 3}\\)</sup>"
      },
      {
        "key": "C",
        "text": "sin <sup>-1 \\({{3} \\over 4}\\)</sup>"
      },
      {
        "key": "D",
        "text": "sin <sup>-1 \\({{8} \\over 9}\\)</sup>"
      }
    ],
    "optionsMap": {
      "A": "sin <sup>-1 \\({{1} \\over 2}\\)</sup>",
      "B": "sin <sup>-1 \\({{2} \\over 3}\\)</sup>",
      "C": "sin <sup>-1 \\({{3} \\over 4}\\)</sup>",
      "D": "sin <sup>-1 \\({{8} \\over 9}\\)</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The critical angle is the angle of incidence at which a light ray traveling from a medium with a higher refractive index (in this case, glass) to a medium with a lower refractive index (in this case, air) is refracted at an angle of 90 degrees. This means that the light ray will no longer enter the second medium and will instead be reflected back into the first medium. The formula for calculating the critical angle is: sin θc = n2 / n1 Where: θc is the critical angle n1 is the refractive index of the first medium (glass) n2 is the refractive index of the second medium (air) In this case, n1 = 1.5 and n2 = 1 (the refractive index of air is approximately 1). Substituting these values into the formula, we get: sin θc = 1 / 1.5 = 2/3",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1986,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1986, 2022"
  },
  {
    "id": 84,
    "questionNumber": 84,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Optical Instruments",
    "year": 2014,
    "difficulty": "Easy",
    "text": "In a compound microscope, the objective and the eye piece focal lengths are",
    "options": [
      {
        "key": "A",
        "text": "short"
      },
      {
        "key": "B",
        "text": "the same"
      },
      {
        "key": "C",
        "text": "at infinity"
      },
      {
        "key": "D",
        "text": "long"
      }
    ],
    "optionsMap": {
      "A": "short",
      "B": "the same",
      "C": "at infinity",
      "D": "long"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "In a compound microscope, the objective lens and the eyepiece have short focal lengths. The objective lens is responsible for gathering light from the specimen and forming an enlarged real image, and the eyepiece further magnifies this image for the observer. Both lenses have short focal lengths to achieve high magnification in the microscope system..",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 85,
    "questionNumber": 85,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Optical Instruments",
    "year": 2016,
    "difficulty": "Medium",
    "text": "In a compound microscope, the objective and the eye piece focal lengths are",
    "options": [
      {
        "key": "A",
        "text": "short"
      },
      {
        "key": "B",
        "text": "the same"
      },
      {
        "key": "C",
        "text": "at infinity"
      },
      {
        "key": "D",
        "text": "long"
      }
    ],
    "optionsMap": {
      "A": "short",
      "B": "the same",
      "C": "at infinity",
      "D": "long"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "In a compound microscope the objective and age piece focal length are short.The objective and the eyepiece of a compound microscope must have short focal length so as to have larger angular magnification and magnifying power.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 86,
    "questionNumber": 86,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Optical Instruments",
    "year": 1980,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAK8A+gMBIgACEQEDEQH/xAAsAAEAAgMBAAAAAAAAAAAAAAAABAUBAgMGAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAD34ADnWFuo9S+pt4xYT6aKejc+gAAAAAAAAAAA11qSz0qY56SJw4l3CRTvvjBYPOX50NDcAAAAAAAAAACrtBVwfRVxzWo87ytrEjSQAAAAAAAAAAAAVdpWlkCusYE8AAAAAAAAAAAAAQJtOXTlkiT6u0AAAAAAAAAAAAAMeW9VTFpAtIJS+orrEAAAAAAAAAAAAAVlnAJ+uwgzosoAAAAAAAAAAAANMm0CfBJ2M4IkuBYAAAAAAAAAAAACqtR57NtSFrjXJG646neXQSy0U0c9Cq5JLBjIAAAAAAAANNxUTZVYSe/n5p2sPPyizjV8U9DtTyywAAAAAAAAAAABDrL/AFIU/GTHCQMMgAAAAD//xAA+EAACAQMCAgQJCgUFAAAAAAABAgMABBEFEiExEBMiQBQVMkFCUWFxgSAjMFJUcnORkrIkNDV0gjNTY6Gx/9oACAEBAAE/APodU8JjntHt5SHZim0k7TUOoRlxBOphnx5J5H2g1nvM8ywRPIwJCjJAGTS67Zekko/wq41m2aGTqJSJcdklDVnr9s0Q8Iysg54BIo63YkosW+Z2PkovGrm+3z2P8JcqVlLYKcTwqe4trgBLiyn48sxnhSajJYymGRZZIc4R2Xa4qKaKZA8bhlPnHediHmo/Kp4oHhlVwqhlIJAAxUFpbQxqiRLtHsBoRRKQVjQH1gAGrv8AmLD8c/tPReAF7L+5H7TU9iVcy2Ughk5lcdhqt75XcQzIYpvqnkfaDWek0O5TJI8MgjcI+Oya8H1kcruP8qnttYeGVZZoXTbxFaYuteDZjZBGeQkoLrW5d7QAZ4mpBdpqNh10qON7EYXFGLUPNcRYz9Sr4XZns9nV/wCr2fftpfGY8pYD8TVxbTXB2yJGUySpBIZasb+7hgDzoZYg5XcOJXFRyxzIrxuGU8iOiSMSbclhtbPA47rigOjUIbp5bWW2RWMROQTQn1b7DF8JRVzc6gbm1U2WGDsVAcHdgV4VqgA3aaf1ivDNQ5nTX+DCrC6njikQWEz/ADrk7OVSyXMMvXWdhPFk9pCOwas5LmSHM8QRi3Id7vOzf6Z7WkH5jp03hFN+PJWO7j5N6MX+mcfSk6dM4wy/jyd4AA5D5N2B4fpn35SegmtLwLeb19fJ324Gb+w903/g6dNH8MfbLJ+7vjOqniccKjvYbrUgEIKRQM272moJ4biISRNuBJGfdUz9XDK4IyqMR7wK0qXdYwvIwBd3PxLHoJ7oR8jiM8egjPMCjpwk1S7gjkMaFAW9zVFEkMaxoMKowK1W2660kbeymMFq0yznuVt5J+EMQzGvrPfYXXx3dj/hT/ro1M40+6/DrSv6fbexO+yqo1a3IHFoH3dDoroyuAVPMGtMwLKADkAe+ydrVYiRyt2I/V02QC2dvjkUB7639Uj/ALVv3dDeQ3uNae26xtuHKMCgACT6+8qz4O4Y4mgwJxWabPjaLP2Nv3dEnGKT7prSm3WFufYR3nz9F/a3cywmCfY8YPxqwkvHBhe+ljmHNHUGmgvBqceb07zAdrbBjnXU6n9vT4w1LHqQRyb2I9g5+aqygv1tIOqu49pUEBoql8bxRPJ18DbVJxsqwne4tIZX8p1yfoCcY7ldWkV0mH4EcVYc1NTTX1jeRyTx9coi2Kw7NLeXxAPi4kesTLT3d31bg6c47J9NasbqYWdsBZylRGBuBWri7YwSgWlxkoccBWn3yxWVuht7g4TmqZFNq0CDLw3K++Km1q0KkDrQSOeyrPX4ur23IO8HmBzpdZ0485iP8TUF9a3LFYpdxAzyPdnVXRlZchhgihbXGn5a1UyQ82iPMfdpLmG5tnkjbkhyPODVh/JWn4S1KwWKRjyCk1pWPF1r9zodQykcsjmKtrG2t49ioD6yeJNdRD/tJ+VLHGmdqKPcO8Xdg7LJLanq5jz9T1a6lcxmOz8DHWogXBfGcVNcah1TjxfzU8RIK0y8uo7KFTp8rqF4MpFNqcieVp1yPyNSawDG4W1uUcjg2zlVlr3Y2XETs49JBXjuzzkxTfpq11K3u3KR7wwXPEd5urKK6TDABx5D44qaOpzWfWQXiFyoIEq8mrSSDp1tw9DoYZBHmIwagtYLdNkSACto+qK2gcgO9MiuCGUEefNKqoAFAAHmHQef03//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ADD/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/ADD/2Q==\" style=\"height:175px; width:250px\"/>The Diagram above shows the prism arrangement in a",
    "options": [
      {
        "key": "A",
        "text": "Microscope"
      },
      {
        "key": "B",
        "text": "Stereoscope"
      },
      {
        "key": "C",
        "text": "Projector"
      },
      {
        "key": "D",
        "text": "Periscope"
      }
    ],
    "optionsMap": {
      "A": "Microscope",
      "B": "Stereoscope",
      "C": "Projector",
      "D": "Periscope"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "PeriscopeThe image shows a diagram of a periscope using two right-angled prisms.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      1999
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 1999"
  },
  {
    "id": 87,
    "questionNumber": 87,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Mirrors, Lens & Optics",
    "year": 2018,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:80px; width:80px\"/> The lens illustrated above can best be described as a",
    "options": [
      {
        "key": "A",
        "text": "converging meniscus"
      },
      {
        "key": "B",
        "text": "plano-convex"
      },
      {
        "key": "C",
        "text": "diverging meniscus"
      },
      {
        "key": "D",
        "text": "bi-convex"
      }
    ],
    "optionsMap": {
      "A": "converging meniscus",
      "B": "plano-convex",
      "C": "diverging meniscus",
      "D": "bi-convex"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Plano-convex lenses are positive spherical lenses having convex surface on one side and flat surface on the other.<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAIgAUgMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA34DIdDVuXUAAAAop9HxKnfZribMAAAGL9wLMQr/iWFjj9gAAAYDUxg9fkEjbXC7oAAAw13G5ifzgFfv8nrAAADAXVVKOnWFfGX32a0oAAB88uenAs8XoZZf+wAAA+e3FjPKXSAAAAAAAAAB//8QANRAAAQQBAgMGAwUJAAAAAAAAAgEDBAUAESESE0EGFCAwMUIiYXEVMjNDYhYjNEBRUnSSsf/aAAgBAQABPwDzVe7SSpU4YclhGWZCt6GmJeWVftbQNG/RHm8YfZkNi6y6JgvUV8ml/Huf848sJMSNEcOVorWm6L1yA5ZVqHaNRVGA67uzkaUxLYB9k0ID8iJYRK87p2QaCizzyJEfvZAzpwqMUd2GMsp71i8tVXfR93oA5XItFajXE/xx5I6t/I/IrqxmRc2kx/RRalKgJkmbLuZKwq1xW44bOv45Kg9no/c4oq9MX29VJepY/QSDgSJ0lwjn6cxPlw5VTEnwI7+2pDoX1TxoxZTrG3gsGgRlmKrx4/PYrWkq6plXJP8Az5llRUBAEnnl5st3dxzLm2SOiQ4wc2W7sIZ2URyI7YVzu5NGK+NJ09JtvBgMqrjsxV5vQEXKqqZrWeEfidLdxzqq5cW6xVCLFHmzHdgBMqKhISE++XMlu7meNTI37YLwHqJtctVH+/x0woku7JETXvpJlxb9z0jRg5kx3YATKeoSFxSJBcyW5uZ5ZWUidIWsrV1P0ee6AmLWsVt9RtMp7CUj/qvjS2KE/bR2G1clvTzRsMp6jufFJklzJbm5nllZSJ0ha2tXU/R57oCY01X9noCqRaD7z9xlg2Uqff1qm0TbHGSsovjp4rK2dxKVEU0lECZZWUibIWsrV+P853oCYCVvZuEiGWir/u4WQoci7kpYTx0YT8BjLHQu09SgaKoNkpInj71Pcm2lbABUN6YRG70AM46zs1C4PV1U1/W4uV1c/Lf+1LP7/q010bTJl086+cOqZ5zw7G57Azs7EeG8nm+9zHGkVFLoSl4wtYtbJulQOZLcmEjYZGiswBO0uXRWS50XdAxFs+0S++LAXX6uZyoNLAeNoEbAA1+ZKmdlo5NwDkGWpyXFc8aTGYlpak3FV+cUk+SiJqgZCo3n3++WznPf2UQ6DljcxYGjSauPrsLIZLYtLWzhMy1QFcFF5SflhjbYNADYJoIoiInyTx1fdWJV5LcQRUZhori9Bx61nWplHqgUW9VE5K4bdf2dY5y6yJrnopbmRZR1zzKvTZf8VIJVL9I+QEOJKtrLv00QYGUf7pXNOIlx++hsCkasa57ybAAD8GVtO93kp9iSOSl+4nRvyX6CpkPG87G1MyVSXiXI0KLEHhYYBtNERdE0VdP5P//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AW//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AW//Z\" style=\"height:136px; width:82px\"/>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 88,
    "questionNumber": 88,
    "subject": "Physics",
    "topic": "Waves - Optics",
    "subtopic": "Optical Instruments",
    "year": 2019,
    "difficulty": "Medium",
    "text": "The following are parts of the eye I. Retina II. Pupil III. Iris The correct equivalent in the camera in the same order are",
    "options": [
      {
        "key": "A",
        "text": "Diaphragm, Aperture, film"
      },
      {
        "key": "B",
        "text": "Aperture, Diaphragm, Film"
      },
      {
        "key": "C",
        "text": "Film, Diaphragm, Aperture"
      },
      {
        "key": "D",
        "text": "Film, Aperture, Diaphragm"
      }
    ],
    "optionsMap": {
      "A": "Diaphragm, Aperture, film",
      "B": "Aperture, Diaphragm, Film",
      "C": "Film, Diaphragm, Aperture",
      "D": "Film, Aperture, Diaphragm"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Retina: In the camera, the film or image sensor serves the same function as the retina in the eye. It is the light-sensitive surface that captures the incoming light and converts it into a visual representation.Pupil: The pupil in the eye acts like the camera's aperture. It controls the amount of light entering the eye by adjusting its diameter. Similarly, the camera's aperture regulates the amount of light entering the camera through the lens.Iris: The diaphragm in the camera corresponds to the iris in the eye. The iris controls the size of the pupil, while the diaphragm controls the size of the aperture. Both mechanisms regulate the light entering the respective systems.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 89,
    "questionNumber": 89,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Moments & Cog",
    "year": 2013,
    "difficulty": "Hard",
    "text": "Which of the following statements describes a body in a stable equilibrium correctly?",
    "options": [
      {
        "key": "A",
        "text": "person walking on a tight rope"
      },
      {
        "key": "B",
        "text": "ball on a smooth horizontal table"
      },
      {
        "key": "C",
        "text": "ball resting on an inverted hemispherical bowl"
      },
      {
        "key": "D",
        "text": "ball in the middle of a hemispherical bowl"
      }
    ],
    "optionsMap": {
      "A": "person walking on a tight rope",
      "B": "ball on a smooth horizontal table",
      "C": "ball resting on an inverted hemispherical bowl",
      "D": "ball in the middle of a hemispherical bowl"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "A ball in the middle of a hemispherical bowl fulfills the condition for stable equilibrium where a slight displacement leads to forces that bring the object back to its original position, minimizing its potential energy. The ball resting at the bottom of the hemispherical bowl is in the position of minimum potential energy and any small movement away from this point will be naturally countered by gravity, making it the only stable equilibrium scenario among the provided options.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2013,
      2015,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2015, 2018"
  },
  {
    "id": 90,
    "questionNumber": 90,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Moments & Cog",
    "year": 2018,
    "difficulty": "Easy",
    "text": "Which of the following statements describes a body in a stable equilibrium correctly?",
    "options": [
      {
        "key": "A",
        "text": "person walking on a tight rope"
      },
      {
        "key": "B",
        "text": "ball on a smooth horizontal table"
      },
      {
        "key": "C",
        "text": "ball resting on an inverted hemispherical bowl"
      },
      {
        "key": "D",
        "text": "ball in the middle of a hemispherical bowl"
      }
    ],
    "optionsMap": {
      "A": "person walking on a tight rope",
      "B": "ball on a smooth horizontal table",
      "C": "ball resting on an inverted hemispherical bowl",
      "D": "ball in the middle of a hemispherical bowl"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "A ball in the middle of a hemispherical bowl fulfills the condition for stable equilibrium where a slight displacement leads to forces that bring the object back to its original position, minimizing its potential energy. The ball resting at the bottom of the hemispherical bowl is in the position of minimum potential energy and any small movement away from this point will be naturally countered by gravity, making it the only stable equilibrium scenario among the provided options.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2013,
      2015,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2015, 2018"
  },
  {
    "id": 91,
    "questionNumber": 91,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Forces & Equilibrium",
    "year": 2015,
    "difficulty": "Medium",
    "text": "Which of the following statements describes a body in a stable equilibrium correctly? A",
    "options": [
      {
        "key": "A",
        "text": "person walking on a tight rope."
      },
      {
        "key": "B",
        "text": "ball on a smooth horizontal table."
      },
      {
        "key": "C",
        "text": "ball resting on an inverted hemispherical bowl."
      },
      {
        "key": "D",
        "text": "ball in the middle of a hemispherical bowl."
      }
    ],
    "optionsMap": {
      "A": "person walking on a tight rope.",
      "B": "ball on a smooth horizontal table.",
      "C": "ball resting on an inverted hemispherical bowl.",
      "D": "ball in the middle of a hemispherical bowl."
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The ball at the bottom of the hemispherical bowl, satisfies the conditions for stable equilibrium due to the presence of restoring forces that bring it back to its original position after any small displacement.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2013,
      2015,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2015, 2018"
  },
  {
    "id": 92,
    "questionNumber": 92,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Moments & Cog",
    "year": 2003,
    "difficulty": "Hard",
    "text": "The tendency of a body to remain at rest when a force is applied to it is called",
    "options": [
      {
        "key": "A",
        "text": "impulse"
      },
      {
        "key": "B",
        "text": "momentum"
      },
      {
        "key": "C",
        "text": "inertia"
      },
      {
        "key": "D",
        "text": "friction"
      }
    ],
    "optionsMap": {
      "A": "impulse",
      "B": "momentum",
      "C": "inertia",
      "D": "friction"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Inertia is the property of an object that resists any change in its state of motion, whether it's at rest or in motion. It's the tendency to remain still if at rest or to keep moving at the same speed and direction if moving. This perfectly describes the situation where a force is applied to a body, and the body resists changing its state (from rest in this case).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2018"
  },
  {
    "id": 93,
    "questionNumber": 93,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Forces & Equilibrium",
    "year": 2022,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACQAYwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKK898L6ra+ONVg1Nb/WYXtbeKU6UZF+y2d0rXlvcRPPb7oridH82KWDz50ia3ibYjbXf0KgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACivnT9tH9pw/snfCO38YRaL/bN5Pq9npdtaO22F9ztLLufd+6/cQXCq+19srR/Ky7q9c0Hx5oXifQvC+s6fq8MmmeJII7jSJZcwPfpLA1wgiR9rb/ACVeXbt3bVb+61AHK/s1/wDJPdX/AOxy8W/+pFqFes15N+zX/wAk91f/ALHLxb/6kWoV6zQAUUUUAFFFFABRRRQAUUUUAFFFFABX5qfCX9tL47/tDePvAdnJ4A+GieBvFGtQ6ha2Oo6rbPrCadBftvuoreW/SWWW3+yyusq2337fcq/KK+9PilqEmj/DDxjqNlouoa7eWmi3kkWlaVcTW13eOkDslvBLCPNjkf7qvF8ys3y/NX49aPa/AHxB8LPh9F8ANK8Wt+07/bVndaTYzu95cQXUc7yv9qaRFsWtolXcsqKrYSJpVVfPoA+u/ih+3T8Y7T4g+OLL4a/DKw8a+Bfh5eX7+JvFFxHPZW8tvbeVJcWsTysqxXNujPE3+vMu3zUiVPkr7K+FHxI034ufD3w/4x0S11Cz0rXbNb62h1O2e2uEV/76N/6Eu5W+8jMrKzfmZq37Rngv4M+Ff2w/h94wTX9L8da34i8SvpGmeROsF5BqyRRRS7d3lfL5UUvmy/8ALKX9wz+a6t9wfsF/DXXPhP8Asl/Dvw14ggNlq8VnLdT2jo6Pb/abiW6WKVXVWSVFnVXXHysrUAfRVFFFABRRRQBznjDxZpvgvwprPiHWLr7HpOkWk9/eXHlM/lQRIzyttX5m2qrfdr87fDP7cX7QviCy8OfGXXvCGk+Fv2fP7TSK51KxuYJdtnLqUVm8t0jO91O0C+aq/Z44N0rLIyvGvlN+jms6PY69pN7pmoWVvqOmXsLQXNpcRLLFcRMu1kdW+VlZflK+9fhv4kbwT43+HEfhH4XfGPx3q83iS5tNO0P4NzW09hp1jeS3sTO07y3Utt9mZ/NeJPNeVWuLfzZXZJXYA+8f2mf20Pi74b+OWt/DP4J/Dyw8U3/huzSfWrvW0Z/tUslr9qit7OJLiLzZfISV/KXdLL5UuyLbAzN9Ofs5/FKx+NXwb8N+OdPvJrm312GW6ZLh1L2cvmv5truWKLelvJvgV9vzLErbm3bm+Evhz8bPC/7Cf7WH7TNv8Vm1C0Piy9XxNoU+m2Ms8WoxNLdzpBE21f3rfavK3H915lvOrSrt+b6d/wCCbel32j/sUfDOG9tp7CVoLy5SG4gaJmilv55YnAb+B43Vlb+JXVqAPqSiiigAooooAKKKKACvi/4R/tO6N+0d+2dFpvh2K41fwFpfgl9a0TUNQ0+e1Rr77b9luLuzWTbvXypWtfNdNyNBcJFtWWXzftCvlP8A5ymf90Z/9zlAHhXxE/a9+Iul+IfGF14C+E2seI/h58MvEDw+O/EwvYdPv/EV5ZwJb+a720S7Vjkgjkl8pJN0EUSyrBA7RN0HxE/ao+Inizx54M8P/AHw/pvjzxZqWkf8LB1Wy1m7lt4tPsrqKKKwgaL+1FVZUt5Ymlgb900ssVyiKz7l8N8N/HfwV8D/ANnP9p34Ua94u1jSPG2va9r0mlReNNC1GXU9Us7mygSCW4/dRbJ7iPd88u3a8qysjL8rZX7P+k+Hf+Cfvxq0+T4p2Oq6B4W+I3w8tTHr3lX8V9pVzLFA9/ZM0AjaJlnR/wDVpJPFus/nTdK1AH3/APs2/HTW/wBpL4R6JrUlk3hfxPp+tNpHi3T4w8Uul3Vq2+WJY57dt3m/uEaL5Wijupf3vmxV9E18c/8ABOPXv+E6+HHxV8bWun3tjoviz4k6zr+lf2hAYnktZfI2tx8rbWV0bYzLvidd3y19jUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfkx+11+098Odc/bdu9E+J1rr+u/DvwDot1pFtZeD7+IPeajdxKt758qvBIsXlO9vJCsv3rX5vleVK9c/4Jd/GafxN+zr4n+HvhmGe5vfBOp/Z9J1GfT4k32eoXEr291c25vPmeKXz5ZYklX90qLE8j/e+lP2Zf2coPgD4d8UNfa3/AMJd4z8U61PrmveJjp0Vm17PI5YKscf3Ik3MypvbDyysu3ftXN/4Z/hvP2wP+Fz+HfGVjpstnpP/AAjPibw/Y6ZFLLfts89PtE+/dHLtewflN/lwRLu2NQB5b+yV8TvE/wDwj3jjUIfgr4tuY7zxjrcksujnTILS6uGv55ZZ/wDT3sbxpB5q2r+amNthEu2J/NjX6E/4XJ4u/wCiE+Pv/A7w9/8ALWm/s1/8k91f/scvFv8A6kWoV6zQB5R/wuTxd/0Qnx9/4HeHv/lrR/wuTxd/0Qnx9/4HeHv/AJa16vRQB5R/wuTxd/0Qnx9/4HeHv/lrR/wuTxd/0Qnx9/4HeHv/AJa16vRQB5R/wuTxd/0Qnx9/4HeHv/lrR/wuTxd/0Qnx9/4HeHv/AJa16vRQB5R/wuTxd/0Qnx9/4HeHv/lrR/wuTxd/0Qnx9/4HeHv/AJa16vRQB5R/wuTxd/0Qnx9/4HeHv/lrR/wuTxd/0Qnx9/4HeHv/AJa16vRQB5R/wuTxd/0Qnx9/4HeHv/lrXl9t8QNJ+HfjrXdX039lXxtpfiq60+fV9R1vQ9A0Rpry3aXfKjXUF7+/neRd32cO0r/K+xq+p6KAPmHQ/ixpvx50Dwj48T9nPxZ4ntoh/aPh3VNbstCS4ttzqyXEC3V+ssW7yo2V1279iMvy7Gr0f/hcni7/AKIT4+/8DvD3/wAtab+yd/ya18Hf+xN0b/0iir1mgDyj/hcni7/ohPj7/wADvD3/AMtaP+FyeLv+iE+Pv/A7w9/8ta9XooA8o/4XJ4u/6IT4+/8AA7w9/wDLWj/hcni7/ohPj7/wO8Pf/LWvV6KAPKP+FyeLv+iE+Pv/AAO8Pf8Ay1rzrQdU1TwrrWoeKdC/ZQvNI8ZajeSpf6hY3Ph23uLm1kvQzyy3S3nmPI8SrO0TLtaUbPN/5a19OV8b/tXeJtS+MXjfwh+z/wCH7nXdA1XxY9xN4ohWNES28NxXW2W8+0xeb5clx9l8iBW3Rst06XEaM8W0A84+EP7Xn/DX3ia51nQfgNP46uPCGp6XqEb6hLpM8ukLcW4W4Szlna3aBkntTPFL+/aXytr/AGbdF5H1x/wuTxd/0Qnx9/4HeHv/AJa14h+0F8JtT/Z88KeCPix8MbT+1NR+FFnc2t/pV9fLajUfC+xmlsGlVN0v2VUiaDzWbb5TO/ny/f8ApT4f+PNC+Kfg/SfFPhPVYda8PapAJ7a+g+5Kv/oSsrblZW+ZWVlbay0Ac1/wuTxd/wBEJ8ff+B3h7/5a0f8AC5PF3/RCfH3/AIHeHv8A5a16vRQB5R/wuTxd/wBEJ8ff+B3h7/5a0f8AC5PF3/RCfH3/AIHeHv8A5a16vRQB5R/wuTxd/wBEJ8ff+B3h7/5a0f8AC5PF3/RCfH3/AIHeHv8A5a16vRQB5R/wuTxd/wBEJ8ff+B3h7/5a1wdz8abeLxfpGtXnwP8AE/h7xZr08/hTSte16xsFeWeP7ROtpLLaz3V5FZu9rI/mrA8Sr+/+589fSdeT/GT/AJKF8Cv+xzuf/Ue1mgDf1z4T+C/E3irTfEeseDtD1fxJp5j+xa1qGmQT3dqInMsXlSum9drOzLt+6xJq54z8AeGPiXpcOm+K/Duk+JtNhnW4itdYsYr2JJdrLvVJVZd212Xd/ttXW0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB8/fsh+MYvGnw58Tyw6Vq+nW9r438SQrLrGnS2f2lJNXurjzYkl2vtxP5TblVklilRl+WvoGiigAooooAKKKKACiiigAooooAKKKKACiiigDyb9k7/AJNa+Dv/AGJujf8ApFFXrNeTfsnf8mtfB3/sTdG/9Ioq9ZoAKKKKACiiigDyf4+fGux+AHgUeONZsLq78L2E+3V7i1ZfNtImjl8p1i/5avLc/ZYAvy7ftG9mVEauF/ZZ+FGqp4P1D4i/ECK8h+KHxEnsdc8RLYy3Fklktud2n2CxLseJIIgsUsb7mdmlWV5Urjf3H7XX7Wv/ADEJvhn8Fbv/AKeLSLUvFiy/98zxWSRf7DrLL/y1il+b7EoAK+I/gRDdfst/tN3XwPin1C1+FfiD7dqHgdLySWXZcrDZ3N7YfvYtxjiVpZYpUfyv3s6yvPPu8j7cr5+/bE+Csvxy+EFxaQX9xour6BO3iHSdRtRdtd21/bQT/ZWg+zbpA/msm4rFKzLvWJPNaKWMA+gaK+ff2X/jVa/Hjw7NqOt6bo+l/FfwpPdeHfEuj2bLLLpF19o2yojfe8idrVJfldkPlBd8jRM1fQVABRRRQAUUUUAFeT/GT/koXwK/7HO5/wDUe1mvWK8n+Mn/ACUL4Ff9jnc/+o9rNAHrFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHk37J3/ACa18Hf+xN0b/wBIoq9Zryb9k7/k1r4O/wDYm6N/6RRV6zQAUUUUAFcN8SvBP/CfeDdV0e2vjouszWd1DpWuxRF7jR7qW1lt1u4DuVklVLh/mVlb5mXd81dzRQB8TfDf9i/45fBvwVpvg/wd+08mkeG9O837LY/8K/sZxF5kryv88szu3zu7fM1db/wzv+03/wBHa/8AmNtL/wDi6+rKKAPlP/hnf9pv/o7X/wAxtpf/AMXR/wAM7/tN/wDR2v8A5jbS/wD4uvqyigD438G/sw+N/hX8Xrj4meNfiX/wtc61/Zukapo9r4Jgs2unS8iFlfusE6x+bZy7ZftEsUjRQRS7furt+yKKKACiiigAooooAK8n+Mn/ACUL4Ff9jnc/+o9rNesV5P8AGT/koXwK/wCxzuf/AFHtZoA9YooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA8m/ZO/5Na+Dv8A2Jujf+kUVes15N+yd/ya18Hf+xN0b/0iir1mgAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8n+Mn/JQvgV/2Odz/wCo9rNesV5P8ZP+ShfAr/sc7n/1HtZoA9YooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr46+IXiTV/gr4oi+KHxTQ2HgvxJZ3HhvxK9lPqNxP4VbfOYLqwlgeVora6WKzgleJbV3lSynZIpWaKL7Fr8w9H/a51D4w/tNfGj4H/E+XQdW8DXl3eaNofhu605Q91PZ3qRLZwT+fFtubqJJtks8q7LnyGj2/6pgD1f8AYz+It343+Gfw48NWM8yeC/BmgaP/AGvqei6hf38t5rlw6tb6d54g+WC3iaOe6ijbZB50UDN9minWT7lr85tL+LWpfCX9qrwF+yH8I7seFvCeg2Tvearqdit/d3l79gutR2vufa1tK0sDSrEsEu7zVieJdlfozQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAcj4q8Nv4ss3024vbm30OSB1uYdMubqzvWl82J4mivLeeJ4lXbKrKv3t6/Mqqyv8AFPjr48XHg34meAfB3x5nsJh4E8S/2vdeKBoUsOm3kEWi6lJZakzv+7W5uJXVIrW3V9tzpt1sdt0SLV+I3x6/aF+KnxX8e6j8EdS0nRfCfw6nvNOk8Ma9HBdX3ie905t+ofZYIopZ9v7+1g+WWP8A10G10eRlT1D4caB8MP2rfB3wH+IGpp4m1zXNBm/tzTr67+2Somoy+e1xFPdLAkDJFdWDfcWKNWt7dUVIp4opQCT9nf4V+Ide8PjxH45m8Tf2x4g1/Ttcfw2I/sun+HWgg+2I0lvPFFFPPO8oa8lt4Nv26XfFFBLa+fF9dV+ZPj/47/tg+B/h/q37Ql9J4Z8LeAIJ9y/DTX9OlW+tomuPscSS7raKdm3ss+7z13Z3bVVvKr0e6/a40f4V/Hb9ovUfEniQyeAPC+saIsdt4ft9O33N7LpN0k9vK+1ZbiXz7SKP5XaWJ7eMM0cEU+0A+76K+S/ih/wUQ+HHwe8B+FNe8Y6L4s0TWvEHmvB4Ou9Pih122t4pZYvtF1A8qrFGzRfJuf59/wAqttfb2v7Ov7UPhz9o/wAC+I/iT4di8SW/h7S5302XTNQsYnlWWCLz5ZYIrbzZZXdLiJdm9t3lJsRW3bwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8WNZ+Hes6T8RP2qviHp+iZ8Y/DP4k6T4z0+3vdKeWSe1+36hKy/KVlW2eOWK6Z1+VordW/uuv7T0UAfmT8GfBt3ovxt/ZM8V61PbDX/iRqfjT4ganFYs/wBlgl1DS4JUjg3LuRFi8rcjs3zb/mZdtepf8Evfh34e8CfsiWHjvQvDtzceJ/EkFzNq32S4/e6m1ne3scESJPKsEbbcoP8AVr83zN/FX3JRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfl9c/HjW/2P8Axt8ZvB/in4e6h4mf4geMrzxR8OGt9De6t7/U2umVFlSV4nbyriCw2rEu/wD5axMySQSt7j+zF4hv/wBj/wCFPwd+DfxK0a6TxRrUGt3NiPDhbUkjjgRtRnS4REV/P/ftEsVus+5ovlb56+0KKAPxQ1b9tb4ZfGz45Xvjj402/ibXfBul6m0mgeA9K0CwW1lgi/48pdRna6V7lk826f7O+9FeeXa/lSyxN6r8Wvgz4m+Nf7Sf7SPj7wFrmsWXiDwPF4V8VaFoP2SZDf36WEU8TS2ssTN58UUV0sUDxb/NuNrbV3o/6tUUAfl9qP7TmjfDL47eGv2qta0jxZqnw6+IfgNNGU6cUvItJ1iK6Tz9Ni81oPLjX7LK3/TWV53Tcu/b67/wTLSPxN8J/ivJN4cm8DJN8UNRvE8OW7y2b6S6pZyrZYj8pgsTL5TR7VVlVkZdrMtdj+0l+xnr/wAcPidb+NvDHxM1/wCFfiG10e30RNY0S6Z/tNqJ7iWWB4I/IZfne3ff57q21l8pdiu3qP7OPwE0/wDZ3+Hv/CO2eqX/AIh1K+u5dV1zXtTld7jVNRlC+fdNuZtm7Yvyf7HzM7bnYA9iooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==\" style=\"height:73px; width:200px\"/> The diagram shows a uniform meter rule AB which balances horizontally at the 90cm mark when a mass of 0.2kg is suspended from B. Calculate the mass of the meter rule.",
    "options": [
      {
        "key": "A",
        "text": "0.05kg"
      },
      {
        "key": "B",
        "text": "0.80kg"
      },
      {
        "key": "C",
        "text": "0.20kg"
      },
      {
        "key": "D",
        "text": "1.00kg"
      }
    ],
    "optionsMap": {
      "A": "0.05kg",
      "B": "0.80kg",
      "C": "0.20kg",
      "D": "1.00kg"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "For equilibrium, clockwise moment must be equal to anti-clockwise moment Moment = force × perpendicular distance Mr (90 - 50) = 0.2 (100 - 90) 40 × Mr = 0.2(10) \\(Mr = {2 \\over 40 }\\) Mr = 0.05kg",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2022"
  },
  {
    "id": 94,
    "questionNumber": 94,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Forces & Equilibrium",
    "year": 2020,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:113px; width:300px\"/>The diagram shows a uniform meter rule AB which balances horizontally at the 90cm mark when a mass of 0.2kg is suspended from B. Calculate the mass of the meter rule.",
    "options": [
      {
        "key": "A",
        "text": "0.05kg"
      },
      {
        "key": "B",
        "text": "0.20kg"
      },
      {
        "key": "C",
        "text": "0.80kg"
      },
      {
        "key": "D",
        "text": "1.00kg"
      }
    ],
    "optionsMap": {
      "A": "0.05kg",
      "B": "0.20kg",
      "C": "0.80kg",
      "D": "1.00kg"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Note that the question focuses on a \"uniform\" metre rule. it should be borne in mind that the centre of mass of a uniform metre rule is at the centre (i.e 50cm)<img src=\"data:image/jpeg;base64,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\" style=\"height:202px; width:400px\"/>Taking moment about the pivotW x 40 = 2 x 1040W= 20W=0.5NRecall: W=mgM = W/gM = 0.5/10Hence, the mass of the metre rule, m = 0.05kg",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2020, 2022"
  },
  {
    "id": 95,
    "questionNumber": 95,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Forces & Equilibrium",
    "year": 2019,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,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C6e97D81/wCn+gXT3vYfmv8A0/0C/wAm6M3yAhhDZH/H/dYyGkBQSkKIJAGJ5apQQlSlEBIGJJqzX4XWRMQhrK21hkXrNTb2VzskK2mWYpOdzmmjf2VWR+5MN5lN4BTaqs90ZukEPpwSrHBxGw1Enl+5XGIpsARg2Qduccrvk9mTOFqXISwyMFSXD/QVYJEFq83VDTjYQ6sJYr7Fe65PazWJ3h9rU6hKR9WowXYTbbigExJTDYfGxVWxaFX++qQrFJRHw5XIstqlPLffiJW4rjJJq02FEa7TnnYWDSV4xa3jfrM7JbtrKHozyytI5lKscpqwXFnQ9NkrS4uo8BDtlYhSm/8AjIQsfECvs1ap1skzxJBKTkQhfOCPx999TvrffU76331O+t99TvrffU76331O+t99TvrffU76331O+t99TvrffU76331O+t16tbr1a3Xq1uvVpL4BxyVuvVrffU76331O+t99TvrffU76331O+t99TvrffU76331O+t99TvrffU76331O+t99TvrffU76331O+v/EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8AAH//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAEDAQE/AAB//9k=\" style=\"height:245px; width:250px\"/>The value of T in the figure above is",
    "options": [
      {
        "key": "A",
        "text": "10.0N"
      },
      {
        "key": "B",
        "text": "40N"
      },
      {
        "key": "C",
        "text": "20N"
      },
      {
        "key": "D",
        "text": "30N"
      }
    ],
    "optionsMap": {
      "A": "10.0N",
      "B": "40N",
      "C": "20N",
      "D": "30N"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Total upward force equals total downward force.T sin30 + T sin30 = 402T sin30 = 40Since sin30 = 1/2:2T × 1/2 = 40T = 40 N",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2019
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2019"
  },
  {
    "id": 96,
    "questionNumber": 96,
    "subject": "Physics",
    "topic": "Equilibrium of Forces",
    "subtopic": "Moments & Cog",
    "year": 1979,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:115px; width:250px\"/> Fig 10 shows a see-saw which is perfectly in balance, the weighs of the people sitting on it are 50kg, xkg and 15kg as shown, the sit at distances of 1.5, 1.5 and 2m from the pivot respectively. The vale of X is",
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "35"
      },
      {
        "key": "C",
        "text": "70"
      },
      {
        "key": "D",
        "text": "24.25"
      }
    ],
    "optionsMap": {
      "A": "30",
      "B": "35",
      "C": "70",
      "D": "24.25"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Moment = Force × Perpendicular Distance from the Pivot In this case: <ul> <li>Force = Weight (mass × acceleration due to gravity, but since 'g' is constant, we can use mass directly) .</li> <li>Distance = Distance from the pivot .</li> </ul> Setting up the Equation Clockwise Moments = Counterclockwise Moments (50 kg × 1.5 m) = (X kg × 1.5 m) + (15 kg × 2 m) Solving for X 75 = 1.5X + 30 75 - 30 = 1.5X 45 = 1.5X X = 45 / 1.5 X = 30 kg Correct Answer The value of X is 30 (.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 97,
    "questionNumber": 97,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Electromagnetic Induction",
    "year": 2004,
    "difficulty": "Medium",
    "text": "The energy stored in an inductor of inductance 5mH when a current of 6A flows through it is",
    "options": [
      {
        "key": "A",
        "text": "1.8 x 10 <sup>-2</sup> J"
      },
      {
        "key": "B",
        "text": "9.0 x 10 <sup>-3</sup> J"
      },
      {
        "key": "C",
        "text": "1.4 x 10 <sup>-2</sup> J"
      },
      {
        "key": "D",
        "text": "9.0 x 10 <sup>-2</sup> J"
      }
    ],
    "optionsMap": {
      "A": "1.8 x 10 <sup>-2</sup> J",
      "B": "9.0 x 10 <sup>-3</sup> J",
      "C": "1.4 x 10 <sup>-2</sup> J",
      "D": "9.0 x 10 <sup>-2</sup> J"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Energy ( = ½LI <sup>2</sup> Where: E is the energy stored in joules (J) L is the inductance in henrys (H) = 5mH = 0.005H I is the current in amperes ( = 6A Plugging in the given values: E = ½ x 0.005 x 6 <sup>2</sup> E = 0.09 J = 9.0 x 10 <sup>-2</sup> J",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2024"
  },
  {
    "id": 98,
    "questionNumber": 98,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Electromagnetic Induction",
    "year": 2021,
    "difficulty": "Hard",
    "text": "In Fleming's right-hand rule, the thumb, the fore-finger and the middle finger if held mutually at right angles represent respectively, the",
    "options": [
      {
        "key": "A",
        "text": "motion, the field and the induced current"
      },
      {
        "key": "B",
        "text": "induced current, the motion and the field"
      },
      {
        "key": "C",
        "text": "field, the induced current and the motion"
      },
      {
        "key": "D",
        "text": "induced current, the field and the motion"
      }
    ],
    "optionsMap": {
      "A": "motion, the field and the induced current",
      "B": "induced current, the motion and the field",
      "C": "field, the induced current and the motion",
      "D": "induced current, the field and the motion"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Fleming's Left-hand rule is mainly applicable to electric motor while Fleming's right-hand rule is mainly for electric generators. Fleming's right hand rule states that if the thumb, the fore finger and the second fingers of the right hand are at right angles to one another, the fore finger points in the direction of the field, the second finger points the direction of the current, then the thumb points in the direction of motion of conductor.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2021"
  },
  {
    "id": 99,
    "questionNumber": 99,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Electromagnetic Induction",
    "year": 1999,
    "difficulty": "Easy",
    "text": "In Fleming's right-hand rule, the thumb, the forefinger and the middle finger if held mutually at right angles represent respectively, the",
    "options": [
      {
        "key": "A",
        "text": "motion, the field and the induced current"
      },
      {
        "key": "B",
        "text": "induced current, the motion and the field"
      },
      {
        "key": "C",
        "text": "field, the induced current and the motion"
      },
      {
        "key": "D",
        "text": "induced current, the field and the motion"
      }
    ],
    "optionsMap": {
      "A": "motion, the field and the induced current",
      "B": "induced current, the motion and the field",
      "C": "field, the induced current and the motion",
      "D": "induced current, the field and the motion"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The Thumb represents the direction of Thrust on the conductor (motion on the conductor). The Fore finger represents the direction of the magnetic Field. The Center finger (middle finger) the direction of the Current.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2021"
  },
  {
    "id": 100,
    "questionNumber": 100,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Ac & Dc Generators",
    "year": 2016,
    "difficulty": "Medium",
    "text": "Which parts of a d.c generator convert an a.c in the armature to a d.c in the external circuit?",
    "options": [
      {
        "key": "A",
        "text": "Commutator and brushes"
      },
      {
        "key": "B",
        "text": "Field poles"
      },
      {
        "key": "C",
        "text": "Armature and core"
      },
      {
        "key": "D",
        "text": "Slip rings and brushes"
      }
    ],
    "optionsMap": {
      "A": "Commutator and brushes",
      "B": "Field poles",
      "C": "Armature and core",
      "D": "Slip rings and brushes"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Commutator and brushes. Their roles in a DC generator: Commutator: <ul><li> It's a rotary switch consisting of multiple segments,each connected to a different armature coil.It rotates with the armature. .</li><li> It reverses the connections between the armature coils and the external circuit at precisely the right moments to ensure that the current flowing in the external circuit always maintains the same direction,even though the induced current in the armature coils alternates. .</li></ul> Brushes: <ul><li> They are stationary carbon blocks that make sliding contact with the commutator segments. .</li><li> They conduct the current from the rotating armature coils to the external circuit. .</li><li> They ensure smooth and continuous current flow,even as the commutator switches the connections. .</li></ul> Working together, the commutator and brushes achieve the following: <ol><li> Current rectification:They convert the alternating current (A generated in the armature coils into direct current (D in the external circuit. .</li><li> Unidirectional flow:They maintain a continuous,one-way flow of current in the external circuit,despite the alternating nature of the induced current in the armature. .</li><li> Smooth output:They help reduce the pulsations in the DC output,making it more constant and stable. .</li></ol>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2011, 2016)"
  },
  {
    "id": 101,
    "questionNumber": 101,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Inductance & Inductors",
    "year": 2024,
    "difficulty": "Hard",
    "text": "The energy stored in an inductor of inductance 5mH when a current of 6A flows through it is",
    "options": [
      {
        "key": "A",
        "text": "9.0 × 10 <sup>-3</sup> J"
      },
      {
        "key": "B",
        "text": "9.0 × 10 <sup>-2</sup> J"
      },
      {
        "key": "C",
        "text": "1.4 × 10 <sup>-2</sup> J"
      },
      {
        "key": "D",
        "text": "1.8 × 10 <sup>-3</sup> J"
      }
    ],
    "optionsMap": {
      "A": "9.0 × 10 <sup>-3</sup> J",
      "B": "9.0 × 10 <sup>-2</sup> J",
      "C": "1.4 × 10 <sup>-2</sup> J",
      "D": "1.8 × 10 <sup>-3</sup> J"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The energy stored in an inductor is given by the following equation: \\(E = \\frac{1}{2} L I^2\\) Where: <ul style=\"list-style-type:disc\"><li><span> E is the energy stored in the inductor (in joules)</span></li><li><span> L is the inductance of the inductor (in henries)</span></li><li><span> I is the current flowing through the inductor (in amperes)</span></li></ul> In this case, we are given that L = 5mH and I = 6 Substituting these values into the equation, we get: \\(E = \\frac{1}{2} \\times 5 \\times 10^{-3} \\times (6)^2\\)\\(E = \\frac{1}{2} \\times 5 \\times 10^{-3} \\times 36\\)\\(E = \\frac{1}{2} \\times 0.18\\)\\(E = 0.09 \\, \\text{J}\\) Thus, the energy stored in the inductor is 9 × 10 <sup>-2</sup> J.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2024"
  },
  {
    "id": 102,
    "questionNumber": 102,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Transformers",
    "year": 1992,
    "difficulty": "Easy",
    "text": "In alternating current theory, the units of impedance, r.m.s. voltage and resonance frequency are respectively equal to",
    "options": [
      {
        "key": "A",
        "text": "volt, ampere and hertz"
      },
      {
        "key": "B",
        "text": "ohms, volt and hertz"
      },
      {
        "key": "C",
        "text": "watt, ohms and radian"
      },
      {
        "key": "D",
        "text": "ohms, hertz and joule"
      }
    ],
    "optionsMap": {
      "A": "volt, ampere and hertz",
      "B": "ohms, volt and hertz",
      "C": "watt, ohms and radian",
      "D": "ohms, hertz and joule"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "In alternating current theory, the units of impedance ( Z ), root mean square (r.m.s.) voltage ( V ), and resonance frequency ( f ) are related as follows: Impedance ( Z ): The unit of impedance is the ohm (Ω). Root Mean Square (r.m.s.) Voltage ( V ): The unit of voltage is the volt ( V ). Resonance Frequency ( f ): The unit of frequency is the hertz (Hz). So, the correct combination is: Ohms, Volt, and Hertz",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1992,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1992, 2020"
  },
  {
    "id": 103,
    "questionNumber": 103,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Induction",
    "year": 2007,
    "difficulty": "Medium",
    "text": "Lenz's law is a law of the conservation of",
    "options": [
      {
        "key": "A",
        "text": "energy"
      },
      {
        "key": "B",
        "text": "momentum"
      },
      {
        "key": "C",
        "text": "electric"
      },
      {
        "key": "D",
        "text": "electric charge"
      }
    ],
    "optionsMap": {
      "A": "energy",
      "B": "momentum",
      "C": "electric",
      "D": "electric charge"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Lenz's law: It states that when the magnetic flux through a closed loop change, an electromotive force (EMF) is induced in the loop in a direction that opposes the change in magnetic flux. This induced EMF generates a current that also creates a magnetic field, opposing the original magnetic field change. Energy conservation: The key aspect of Lenz's law is that it ensures the conservation of energy. The initial change in magnetic flux would cause a change in energy within the system if not for the induced current and its opposing magnetic field. The induced current and its magnetic field consume energy, counteracting the initial change and maintaining the overall energy balance.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2007
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2002, 2007)"
  },
  {
    "id": 104,
    "questionNumber": 104,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Electromagnetic Induction",
    "year": 1981,
    "difficulty": "Hard",
    "text": "A transformer has 300 turns of wire in the primary coil and 30 turns in the secondary coil.If the input voltage is 100 volts, the output voltage is",
    "options": [
      {
        "key": "A",
        "text": "5 volts"
      },
      {
        "key": "B",
        "text": "10 volts"
      },
      {
        "key": "C",
        "text": "15 volts"
      },
      {
        "key": "D",
        "text": "20 volts"
      }
    ],
    "optionsMap": {
      "A": "5 volts",
      "B": "10 volts",
      "C": "15 volts",
      "D": "20 volts"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "To determine the output voltage of a transformer, we can use the transformer voltage ratio formula, which relates the number of turns in the primary and secondary coils to the primary and secondary voltages. The formula is: \\( \\frac{V_s}{V_p} = \\frac{N_s}{N_p}\\) Where: <ul><li><span> - V<sub>s</sub> is the secondary (output) voltage, </span></li><li><span> - V<sub>p</sub> is the primary (input) voltage, </span></li><li><span> - N<sub>s</sub> is the number of turns in the secondary coil, </span></li><li><span> - N<sub>p</sub> is the number of turns in the primary coil. </span></li></ul> Given the values: <ul><li><span> - N<sub>p</sub> = 300 turns, </span></li><li><span> - N<sub>s</sub> = 30 turns, </span></li><li><span> - V<sub>p</sub> = 100 volts. </span></li></ul> We need to find \\(V_s\\) . Rearrange the formula to solve for \\(V_s \\) : \\(V_s = V_p \\times \\frac{N_s}{N_p}\\) Substitute the given values: \\( V_s = 100 \\, \\text{volts} \\times \\frac{30}{300}\\) Simplify the fraction: \\( V_s = 100 \\, \\text{volts} \\times \\frac{1}{10}\\) Calculate the output voltage: \\( V_s = 100 \\, \\text{volts} \\times 0.1 = 10 \\, \\text{volts}\\) Final Answer: The output voltage is 10 volts.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 105,
    "questionNumber": 105,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Ac & Dc Generators",
    "year": 2019,
    "difficulty": "Easy",
    "text": "Ripple in a power supply unit is caused by",
    "options": [
      {
        "key": "A",
        "text": "using an alternating current source"
      },
      {
        "key": "B",
        "text": "forward voltage drop"
      },
      {
        "key": "C",
        "text": "heavy load"
      },
      {
        "key": "D",
        "text": "using a zener diode"
      }
    ],
    "optionsMap": {
      "A": "using an alternating current source",
      "B": "forward voltage drop",
      "C": "heavy load",
      "D": "using a zener diode"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Power supplies often convert AC (alternating current) to DC (direct current) for powering electronic devices. However, the conversion process isn't always perfect, and some residual AC waveform remains in the output as ripple. This ripple manifests as periodic fluctuations in the DC voltage, potentially affecting the performance of sensitive electronics.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 106,
    "questionNumber": 106,
    "subject": "Physics",
    "topic": "Induction",
    "subtopic": "Ac & Dc Generators",
    "year": 2025,
    "difficulty": "Medium",
    "text": "Which of the following is NOT a part of a d.c. electric motor?",
    "options": [
      {
        "key": "A",
        "text": "Field-magnet"
      },
      {
        "key": "B",
        "text": "Armature"
      },
      {
        "key": "C",
        "text": "Commutator"
      },
      {
        "key": "D",
        "text": "Transformer"
      }
    ],
    "optionsMap": {
      "A": "Field-magnet",
      "B": "Armature",
      "C": "Commutator",
      "D": "Transformer"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Transformer. This question belongs to the topic of Physics , specifically within the subtopic of Electromagnetism and the application of electric motors .<ul><li> Field-magnet: This is a crucial component of a DC motor. It creates a magnetic field that interacts with the current in the armature to produce torque (rotational force). </li><li> Armature: This is the rotating part of the motor. It consists of coils of wire that carry current. The interaction of this current with the magnetic field created by the field magnet causes the armature to rotate. </li><li> Commutator: This is a cylindrical arrangement of metal segments connected to the ends of the armature coils. It works in conjunction with brushes to reverse the direction of the current in the armature coils, ensuring continuous rotation. </li><li> Transformer: A transformer is a device that changes the voltage of an alternating current (A. DC motors operate on direct current (D, not AC , so a transformer is not a necessary component. </li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 107,
    "questionNumber": 107,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Images Formed By Mirrors",
    "year": 2017,
    "difficulty": "Hard",
    "text": "A man standing between two parallel mirrors in a barber’s shop will see the following number of his own image.",
    "options": [
      {
        "key": "A",
        "text": "Two"
      },
      {
        "key": "B",
        "text": "Four"
      },
      {
        "key": "C",
        "text": "Five"
      },
      {
        "key": "D",
        "text": "infinite"
      }
    ],
    "optionsMap": {
      "A": "Two",
      "B": "Four",
      "C": "Five",
      "D": "infinite"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "If two mirrors are placed parallel to each other, it means the angle between them is zero degrees (0°). Recall: If two mirrors are inclined at an angle to each other, the number of images formed is given as \\(n = \\frac{360^\\circ}{\\theta} - 1\\)\\(\\text{Where} \\theta = 0^\\circ\\)\\(n = \\frac{360}{0} - 1 = \\infty\\) A person standing between two parallel mirrors in a barber's shop will see an infinite number of their own images. Each mirror reflects the person, and the reflections bounce back and forth between the mirrors, creating an infinite reflection effect",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2017"
  },
  {
    "id": 108,
    "questionNumber": 108,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Mirror Formulas",
    "year": 2016,
    "difficulty": "Easy",
    "text": "A man 1.5m tall is standing 3m in front of a pinhole camera whose distance between the hole and the screen is 0.1m. What is the height of the image of the man on the screen?",
    "options": [
      {
        "key": "A",
        "text": "0.15m"
      },
      {
        "key": "B",
        "text": "1.00m"
      },
      {
        "key": "C",
        "text": "0.05m"
      },
      {
        "key": "D",
        "text": "0.30m"
      }
    ],
    "optionsMap": {
      "A": "0.15m",
      "B": "1.00m",
      "C": "0.05m",
      "D": "0.30m"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The height, H of the man = 1.5m The distance, d between the man and the camera = 3m The distance, x between the hole and the screen of the camera = 0.1m The height, l of the image = ? recall: Image height/Object height = Image distance/Object distance I/1.5 = 0.1/3 3l = 0.15 l = 0.15/3 = 0.05",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 109,
    "questionNumber": 109,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Mirror Formulas",
    "year": 2023,
    "difficulty": "Medium",
    "text": "An object is placed 30cm from a concave mirror of focal length 15cm. the linear magnification of the image produced is",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "<sup>2</sup>/3"
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
      "A": "0",
      "B": "<sup>2</sup>/3",
      "C": "1",
      "D": "2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\\(\\frac1f=\\frac1u+\\frac1v\\)Where:f is the focal length of the mirror (15cm)u is the object distance (30cm)v is the image distanceCalculating the image distance (v)\\({1\\over15}={1\\over30}+{1\\over v}\\)\\(\\frac1v={1\\over15}-{1\\over30}\\)v = 30 cmCalculating the linear magnification (M)\\(m = \\frac{30}{30} = 1\\)\\(m = \\frac{30}{30} = 1\\)M = 1Since it is a real image formed by a concave mirror, the magnification is negative.m = -1",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2023"
  },
  {
    "id": 110,
    "questionNumber": 110,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Mirror Formulas",
    "year": 1979,
    "difficulty": "Hard",
    "text": "An object is placed 30cm from a concave mirror of focal length 15cm. the linear magnification of the image produced is",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "\\(\\frac 23\\)"
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
      "A": "0",
      "B": "\\(\\frac 23\\)",
      "C": "1",
      "D": "2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "1To solve this problem, we need to determine the linear magnification of the image produced by a concave mirror. The linear magnification (m) is given by the formula:\\(m=\\frac vu\\)Where:<ul><li>v= image distance, .</li><li>u= object distance. .</li></ul>We are given:<ul><li>Object distance, \\(u = −30 cm\\) (negative because the object is in front of the mirror),</li><li>Focal length, \\(f = −15 cm\\) (negative for a concave mirror).</li></ul>Step-by-Step Solution:Use the mirror formula to find the image distance (v):The mirror formula is:\\(\\frac1f=\\frac1v+\\frac1u\\)Substituting the given values:\\(\\frac1{−15}=\\frac1v+\\frac1{−30}\\)Simplify:\\(−\\frac1{15}=\\frac1v−\\frac1{30}\\)Rearrange to solve for \\(\\frac1v​\\) :\\(\\frac1v=−\\frac1{15}+\\frac1{30}\\)\\(\\frac1v=−\\frac2{30}+\\frac1{30}=−\\frac1{30}\\)Therefore:\\(v=−30 cm\\)Calculate the linear magnification (mm):\\(m=\\frac vu=\\frac{−30}{−30}=1\\)The linear magnification of the image is 1 .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2023"
  },
  {
    "id": 111,
    "questionNumber": 111,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Mirror Formulas",
    "year": 1979,
    "difficulty": "Easy",
    "text": "A man standing between two parallel mirrors in a barber's shop will see the following number of his own image",
    "options": [
      {
        "key": "A",
        "text": "eight"
      },
      {
        "key": "B",
        "text": "two"
      },
      {
        "key": "C",
        "text": "four"
      },
      {
        "key": "D",
        "text": "one"
      }
    ],
    "optionsMap": {
      "A": "eight",
      "B": "two",
      "C": "four",
      "D": "one"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "infinite.When a person stands between two parallel mirrors , the number of images formed is theoretically infinite . This is because light reflects back and forth between the mirrors, creating an endless series of reflections. Each reflection generates a new image, and this process continues indefinitely.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2017"
  },
  {
    "id": 112,
    "questionNumber": 112,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Plane & Curved Mirrors",
    "year": 2012,
    "difficulty": "Medium",
    "text": "After reflection from the concave mirror, rays of light from the sun converges",
    "options": [
      {
        "key": "A",
        "text": "At the radius of curvature"
      },
      {
        "key": "B",
        "text": "At the focus"
      },
      {
        "key": "C",
        "text": "Beyond the radius of curvature"
      },
      {
        "key": "D",
        "text": "Between the focus and radius of curvature"
      }
    ],
    "optionsMap": {
      "A": "At the radius of curvature",
      "B": "At the focus",
      "C": "Beyond the radius of curvature",
      "D": "Between the focus and radius of curvature"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "For a concave mirror, rays of light from the sun, after reflection, converge at a point known as the focus. This is a characteristic property of concave mirrors, which are converging mirrors. The focus is the point where parallel rays of light either converge (in the case of real focus) or appear to diverge from (in the case of virtual focus).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2007,
      2012
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2007, 2012)"
  },
  {
    "id": 113,
    "questionNumber": 113,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Images Formed By Mirrors",
    "year": 2003,
    "difficulty": "Hard",
    "text": "The image which cannot be formed on a screen is said to be",
    "options": [
      {
        "key": "A",
        "text": "Inverted"
      },
      {
        "key": "B",
        "text": "erect"
      },
      {
        "key": "C",
        "text": "real"
      },
      {
        "key": "D",
        "text": "virtual"
      }
    ],
    "optionsMap": {
      "A": "Inverted",
      "B": "erect",
      "C": "real",
      "D": "virtual"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "An image that cannot be formed on a screen is considered a virtual image. This means that the rays of light do not actually converge at a single point in front of the reflecting or refracting surface, but rather appear to diverge from that point. This creates the illusion of an image in space, but the light doesn't reach that point.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 114,
    "questionNumber": 114,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Images Formed By Mirrors",
    "year": 2014,
    "difficulty": "Easy",
    "text": "An object is placed in front of the two plane mirrors inclined at 60<sup>o</sup> to each other. Determined the number of images formed.",
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
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Number of Images = \\(\\frac{360}{\\theta} - 1\\) θ = 60<sup>o</sup> n= \\(\\frac{360}{\\theta} - 1\\) n = 6 - 1 = 5 images",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 115,
    "questionNumber": 115,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Images Formed By Mirrors",
    "year": 1981,
    "difficulty": "Medium",
    "text": "Which of the following statements is applicable to a real image formed by a concave mirror?I. it can be observed on a screenIi. it is always inverted and in front of the mirrorIii. it only seams to existIv. it is formed by the actual converging of rays of light",
    "options": [
      {
        "key": "A",
        "text": "I, ii and iii"
      },
      {
        "key": "B",
        "text": "I, ii and iv only"
      },
      {
        "key": "C",
        "text": "I and ii only"
      },
      {
        "key": "D",
        "text": "I and ii only"
      }
    ],
    "optionsMap": {
      "A": "I, ii and iii",
      "B": "I, ii and iv only",
      "C": "I and ii only",
      "D": "I and ii only"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "I. it can be observed on a screenIv. it is formed by the actual converging of rays of lightii. it is always inverted and in front of the mirror...: While often true for concave mirrors, the image location and orientation depend on the object's position relative to the mirror's focal point.Real Images: Real images are formed by the actual intersection of light rays and can be projected onto a screen. This is a defining characteristic of real images.Concave Mirror Image Formation: Concave mirrors can produce real images when the object is located beyond the focal point. These images are indeed inverted (upside down) and located in front of the mirror.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 116,
    "questionNumber": 116,
    "subject": "Physics",
    "topic": "Waves - Mirrors",
    "subtopic": "Plane & Curved Mirrors",
    "year": 2012,
    "difficulty": "Hard",
    "text": "The magnification of an object 2cm tall when placed 10cm in front of a plane mirror is",
    "options": [
      {
        "key": "A",
        "text": "6.0"
      },
      {
        "key": "B",
        "text": "1.0"
      },
      {
        "key": "C",
        "text": "0.7"
      },
      {
        "key": "D",
        "text": "0.6"
      }
    ],
    "optionsMap": {
      "A": "6.0",
      "B": "1.0",
      "C": "0.7",
      "D": "0.6"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "\\(M = \\frac{\\text{Image height}}{\\text{Object height}}\\)For a plane mirror:<ul><li>Image height = Object height.</li><li>Image distance = Object distance.</li></ul>Magnification, m = Image height / Object height = 1Alternatively, m = Image distance / Object distance = 10/10 = 1;",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 117,
    "questionNumber": 117,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Quantity of Heat",
    "year": 2018,
    "difficulty": "Easy",
    "text": "Which of the following units is the S.I. unit of heat capacity?",
    "options": [
      {
        "key": "A",
        "text": "Jkg <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "Jkg-1k-1"
      },
      {
        "key": "C",
        "text": "J K <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "J g <sup>-1</sup> K <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "Jkg <sup>-1</sup>",
      "B": "Jkg-1k-1",
      "C": "J K <sup>-1</sup>",
      "D": "J g <sup>-1</sup> K <sup>-1</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The heat capacity C of a substance is the amount of heat required to change its temperature by one degree. Mathematically, C = Q/Δϴ The unit is JK <sup>-1</sup>",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2015,
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017, 2018"
  },
  {
    "id": 118,
    "questionNumber": 118,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Quantity of Heat",
    "year": 2015,
    "difficulty": "Medium",
    "text": "Which of the following units is the S.I unit of heat capacity?",
    "options": [
      {
        "key": "A",
        "text": "JKg <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "JKg <sup>-1</sup> K <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "JK <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "Jg <sup>-1</sup> K <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "JKg <sup>-1</sup>",
      "B": "JKg <sup>-1</sup> K <sup>-1</sup>",
      "C": "JK <sup>-1</sup>",
      "D": "Jg <sup>-1</sup> K <sup>-1</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Heat capacity is the amount of heat energy required to change the temperature of a substance by 1<sup>o</sup> C = H / ∆Ɵ (JK <sup>-1</sup> )",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2015,
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017, 2018"
  },
  {
    "id": 119,
    "questionNumber": 119,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Temperature",
    "year": 2023,
    "difficulty": "Hard",
    "text": "The heights of the mercury thread in a mercury-in-glass thermometer when in melting ice and then in steam are 3cm and 18cm respectively. At a temperature of 60<sup>o</sup>C.the height would be",
    "options": [
      {
        "key": "A",
        "text": "7.5cm"
      },
      {
        "key": "B",
        "text": "9cm"
      },
      {
        "key": "C",
        "text": "10.8cm"
      },
      {
        "key": "D",
        "text": "12cm"
      }
    ],
    "optionsMap": {
      "A": "7.5cm",
      "B": "9cm",
      "C": "10.8cm",
      "D": "12cm"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The temperature in melting ice is 0<sup>o</sup> C The temperature in steam is 100<sup>o</sup> C Height at 100<sup>o</sup> C is 18cm Height at 0<sup>o</sup> C is 3cm Let height at 60<sup>o</sup> C be x \\({x-3\\over18-3}={60-0\\over100-0}\\)\\({x-3\\over15}={60\\over100}\\) (x - 3) × 100 = 60 × 15 100x - 300 = 900 100x = 1200 x = 12cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2023"
  },
  {
    "id": 120,
    "questionNumber": 120,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Temperature",
    "year": 1979,
    "difficulty": "Easy",
    "text": "The heights of the mercury thread in a mercury-in-glass thermometer when in melting ice and then in steam are 3cm and 18cm respectively. At a temperature of 60<sup>o</sup>C.the height would be",
    "options": [
      {
        "key": "A",
        "text": "7.5cm"
      },
      {
        "key": "B",
        "text": "9cm"
      },
      {
        "key": "C",
        "text": "10.8cm"
      },
      {
        "key": "D",
        "text": "12cm"
      }
    ],
    "optionsMap": {
      "A": "7.5cm",
      "B": "9cm",
      "C": "10.8cm",
      "D": "12cm"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Given:<ul><li>Height of mercury in melting ice (0°C), h₀ = 3 cm</li><li>Height of mercury in steam (100°C), h₁₀₀ = 18 cm</li><li>Temperature to find height for, T = 60°C</li></ul>Step 1: Calculate height difference between 0°C and 100°CΔh = h₁₀₀ − h₀Δh = 18 cm − 3 cmΔh = 15 cmStep 2: Determine height per degree Celsius<ul><li>Height per degree = Δh / 100</li><li>Height per degree = 15 cm / 100</li><li>Height per degree = 0.15 cm/°C</li></ul>Step 3: Calculate the height at 60°Ch₆₀ = h₀ + (0.15 × 60)h₆₀ = 3 cm + 9 cmh₆₀ = 12 cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2023"
  },
  {
    "id": 121,
    "questionNumber": 121,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Temperature",
    "year": 2022,
    "difficulty": "Medium",
    "text": "A temperature scale has a lower fixed point of 40mm and a upper fixed point of 200mm. What is the reading on this scale when a thermometer reads 60 <sup>∘</sup> C?",
    "options": [
      {
        "key": "A",
        "text": "33.3mm"
      },
      {
        "key": "B",
        "text": "36.0mm"
      },
      {
        "key": "C",
        "text": "96.0mm"
      },
      {
        "key": "D",
        "text": "136.0mm"
      }
    ],
    "optionsMap": {
      "A": "33.3mm",
      "B": "36.0mm",
      "C": "96.0mm",
      "D": "136.0mm"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "<img src=\"data:image/jpeg;base64,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\" style=\"width:25.36%\"/> Let x be the reading at 60<sup>o</sup> C \\(\\frac{100 - 0}{60 - 0} = \\frac{200 - 40}{x - 40}\\)\\(\\frac{100}{60} = \\frac{160}{x - 40}\\) 100(x – 40) = 60 × 160 100x – 4000 = 9600 100x = 9600 + 4000 100x = 13600 x = 136mm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2022"
  },
  {
    "id": 122,
    "questionNumber": 122,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Temperature",
    "year": 1995,
    "difficulty": "Hard",
    "text": "A temperature scale has a lower fixed point of 40mm and a upper fixed point of 200mm. What is the reading on this scale when a thermometer reads 60°C?",
    "options": [
      {
        "key": "A",
        "text": "33.3mm"
      },
      {
        "key": "B",
        "text": "36.0mm"
      },
      {
        "key": "C",
        "text": "96.0mm"
      },
      {
        "key": "D",
        "text": "136.0mm"
      }
    ],
    "optionsMap": {
      "A": "33.3mm",
      "B": "36.0mm",
      "C": "96.0mm",
      "D": "136.0mm"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "<img src=\"data:image/jpeg;base64,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\"/> Let x be the reading at 60<sup>o</sup> C \\(\\frac{100 - 0}{60 - 0} = \\frac{200 - 40}{x - 40}\\)\\(\\frac{100}{60} = \\frac{160}{x - 40}\\) 100(x – 40) = 60 × 160 100x – 4000 = 9600 100x = 9600 + 4000 100x = 13600 x = 136mm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2022"
  },
  {
    "id": 123,
    "questionNumber": 123,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Latent Heat",
    "year": 2022,
    "difficulty": "Easy",
    "text": "Heat is supplied to a test tube containing 100g of ice at its melting point. The ice melts completely in 1 min. What is the power rating of the source of heat? [Latent heat of fusion of ice = 336Jg <sup>-1</sup> ]",
    "options": [
      {
        "key": "A",
        "text": "560W"
      },
      {
        "key": "B",
        "text": "600W"
      },
      {
        "key": "C",
        "text": "400W"
      },
      {
        "key": "D",
        "text": "250W"
      }
    ],
    "optionsMap": {
      "A": "560W",
      "B": "600W",
      "C": "400W",
      "D": "250W"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Electrical heat energy = mass, m × Latent heat of fusion, lPt = mlTime, t = 1 min = 60sMass, m = 100gLatent heat of fusion, l = 336Jg <sup>-1</sup>P × 60 = 100 × 336P = 560W",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1994,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1994, 2022"
  },
  {
    "id": 124,
    "questionNumber": 124,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Latent Heat",
    "year": 1984,
    "difficulty": "Medium",
    "text": "All the heat generated in a 5-ohms resistor by 2A flowing for 30 seconds is used to evaporate 5g of a liquid at its boiling point. Which of the following is the correct value of the specific latent heat of the liquid?",
    "options": [
      {
        "key": "A",
        "text": "120J"
      },
      {
        "key": "B",
        "text": "60Jg <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "120Jg <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "1500J"
      }
    ],
    "optionsMap": {
      "A": "120J",
      "B": "60Jg <sup>-1</sup>",
      "C": "120Jg <sup>-1</sup>",
      "D": "1500J"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "120Jg <sup>-1</sup><sup>\\(Q = I^2 R t\\)</sup>Where:<ul><li>I=2 A(current), .</li><li>R=5 Ω(resistance), .</li><li>t=30 (time). .</li></ul>Substitute the values into the formula:\\(Q = (2)^2 \\times 5 \\times 30 = 4 \\times 5 \\times 30 = 600 \\, \\text{J}\\)The heat required to evaporate the liquid is also given by:\\(Q = m L\\)Where:<ul><li>m=5 g(mass of the liquid), .</li><li>Lis the specific latent heat of the liquid (what we want to find). .</li></ul>Substitute the known values and solve for L:\\(600 \\, \\text{J} = 5 \\, \\text{g} \\times L\\)\\(L = \\frac{600 \\, \\text{J}}{5 \\, \\text{g}} = 120 \\, \\text{J/g}\\)Thus, the correct answer is 120 J/g .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      1984
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 1984"
  },
  {
    "id": 125,
    "questionNumber": 125,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Latent Heat",
    "year": 1978,
    "difficulty": "Hard",
    "text": "The statements below were made by some students describing what happened during the determination of the melting point of solids. I. the temperature of the solid was solid until melting started Ii. the temperature of the solid rose until melting started Iii. during melting, the temperature was rising Iv. during melting, the temperature was constant v. the temperature continued to rise after all the solid had melted vi. the temperature stopped rising after all the solid had melted. Which of the following gives correct statements in the right order?",
    "options": [
      {
        "key": "A",
        "text": "ii, iv, and v"
      },
      {
        "key": "B",
        "text": "ii, iii and vi"
      },
      {
        "key": "C",
        "text": "i, iii and vi"
      },
      {
        "key": "D",
        "text": "i, iii and v"
      }
    ],
    "optionsMap": {
      "A": "ii, iv, and v",
      "B": "ii, iii and vi",
      "C": "i, iii and vi",
      "D": "i, iii and v"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "ii, iv, and v. When determining the melting point of a solid, the following observations are correct: ii. The temperature of the solid rose until melting started: As heat is supplied, the temperature of the solid increases until it reaches its melting point. iv. During melting, the temperature was constant: During the melting process, the temperature remains constant because the heat energy is used to break the bonds between the solid particles (latent heat of fusion). v. The temperature continued to rise after all the solid had melted: Once all the solid has melted, the temperature of the liquid begins to rise again as heat is supplied.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 126,
    "questionNumber": 126,
    "subject": "Physics",
    "topic": "Heat Energy",
    "subtopic": "Latent Heat",
    "year": 2023,
    "difficulty": "Easy",
    "text": "The statements below were made by some students describing what happened during the determination of the melting point of solids. <ul><li> i. the temperature of the solid was solid until melting started .</li><li> ii. the temperature of the solid rose until melting started .</li><li> iii. during melting, the temperature was rising .</li><li> iv. during melting, the temperature was constant .</li><li> v. the temperature continued to rise after all the solid had melted .</li><li> vi. the temperature stopped rising after all the solid had melted. .</li></ul> Which of the following gives correct statements in the right order?",
    "options": [
      {
        "key": "A",
        "text": "ii, iv, and v"
      },
      {
        "key": "B",
        "text": "ii, iii and vi"
      },
      {
        "key": "C",
        "text": "i, iii and vi"
      },
      {
        "key": "D",
        "text": "i, iii and v"
      }
    ],
    "optionsMap": {
      "A": "ii, iv, and v",
      "B": "ii, iii and vi",
      "C": "i, iii and vi",
      "D": "i, iii and v"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Ii, iv, and v When determining the melting point of a solid, the following sequence of events occurs: 1. The temperature of the solid rises until melting starts → (Statement ii is correct) 2. During melting, the temperature remains constant because the heat energy is used to break intermolecular bonds rather than increase temperature → (Statement iv is correct) 3. After all the solid has melted, the temperature starts rising again as heat is now increasing the temperature of the liquid → (Statement v is correct) Thus, the correct sequence is ii, iv, and v.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 127,
    "questionNumber": 127,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Elasticity & Hooke’s Law",
    "year": 2002,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAIUA4gMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAABAUGAwIBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADfgAAHg9gAAAAAAAAAAi0V7xK2fAEinvuBLq7D4WoAAAAAAAAAAAD5VlqqvJb1NtUlsAABWWGIN05xiby59DOzrD6SAAAAAcc5qRneGpHDNaypLYAA8HullzyHMAAAAAAAAVhZuEItKmyrS2Bw743THvx7kgAAAAAAAADFbUU+e3IgUWsqS2IRyldfYAAAAAAAAAAAAqbbOF5899Rj9hmzSAUt1HIln59AAAAAAAAAGKurGUUni+oj3Bhey4U+lK7jFnnKVmxpHWuJiqFqquBbT6SWaEAAAAADkHqOHX2D4AH3mHgAAEoAH//EADwQAAICAQMCAwUGAwUJAAAAAAECAwQFABESEyEGMUEiMkBRlBAUIDBhdRUjQhZScnTBJFBiY3FzgrLS/9oACAEBAAE/AP8AckcsUvPpyI/BijcSDsw8wfhr80sFG3PFw5xRM45KSPZG+qWXMIcvlWvcnhjSIVei/ObumpfFNCFyjVbhYGQMFRTs0eoszWZQ/RsIHA6DOmwmLnZQmqmaW7dhrwQSJtE8k4nQoyhSU2GqHiSa5RihkcRXi8IRmXtKhlCap3ZJL2Uquq71nj4Ovqsq768MwGAZfaaZ9sjIntn+58NerPcpWK6T9FpE48+PLsdXaD3acMT2dp4nikSfh/XH/Xx0PDiCzBI9kyIBMZkKbdV5xs7a/s9yqCCXJ2nEJJqenR02OtxW4Li2etOK5rzM6DuCeQcBdQYGrFSx0DuXenN1UkChfUtqlUmjvZS3KFT7zIgVAd9khHEHXhv385+7T/G+G/fzn7tP+QMzR7v/ADOgCF+88D0eRYp734Jp4YEDSyBQTxHzY/JR6k+gGvExWzj8aEgeUPkYh0mBiL68OGT+FqJZlYpIw6XcdH/lHl+UzKis7sFVQSzE7AAaxmXFyUxPWaGQxCeEMwPOE9g2jluF1Kr0bAMvVELewOoYdVs7RuUmswB3IkRGi7BwzsFX7PDfv5z92n/HLH1YpI+bpzQryQ7MNx5g6lRocHHgJVKXHn6aFu0bbvz5h9NJHBEGnnAVQA0khC6++SSD/Z6cz/8AHIDAg/Q8xy0sNptzPYAXZh0oQV970Zz3O3zHHUcEMRZkjAZgoZ/NmCDYcmPc6tUKdqWtLNFykgflE25HE6iqVYJ7M0MIR7BBlI/qI/KswCzVswFuPViePf5cxtvqnSy9WYWvuKO0FFKaRCYby8XB562zDZkzy4tXgiDpAeqnYer6TE3ehiZkQQSoYEuRbg9VIXGzatQfeYHh60sXLb24m4uNYChwmvzffbZMORnTgZPYf9X/ACLIhzdYwQlDX5+1OU5d1OxEW/8A76qUYancPJLLsQZpm5yFSd9uXwnhv385+7T/AIpZUhQu7bKP9ewAA8zoxvd7yF0r+kO2xkHzk+G8N+/nP3af7VuUnmMC24DPuR0g4LAr9li0tfgOlJK7nZYohux9Cf0A9SdRVnMvXsSFpNuyA/y4v8I+fzb4ODNUZb0lMGQSCRo1JQhXdO7hTp7UMVqpWYt1LBcJ/wCC8jqHMVJ6Vm0iTE1t+vCQBKm2q862K0EyAhZY1cA+ezDfXhv385+7T/bioEyM1wi0nRhzT2Qi92OpbLmXoV4y0m3dyP5cX+I/P5LqvVWvzPVkldzu0sp3Y+oH6AegHwlanbqT4qEV7RGNN1ndY/fVu68NTwzWcjgbiwsIkSZpQ2ysnUTVvAXkhzFyEOlp7M+yKQ3Wgl1HSc4irUleWCUVokdon2dSg1gKHCa/N99tkw5GdOBk9h/1f7b8QvxS0Ud1DbCaRTtwHnw/Vm1Tqw0qsNWDcRxDZd/ifDfv5z92n+x7QltNThfaUJylcDfpL/8AZ9BqKJIUCIuyj/XuSSfM/FeG/fzn7tPqaV+QihAMpG/fyRf7zaqVIacIii38yzMx3Z3PmzH1Y/ZbyWQTM3K8eQ6QSWBIYjAHV3lHkz/g8SmSHC2po5ZI5YyhVkcp5trHROj3GK3E3kVQk8vV7BAd17t8JiHmAy6RJu75az3b3F1DAsKcQSSTyd295mPqft/hd9MlfkrZsxPNwd0+7q2ydwn4L8NOSjYS6u8PDk4/RPa9NRGMwxGN+SFRxPItuPQ7nff4NJ5UvG7uWn/jjUfM7dA/0afAQiaxLFkchCZpmlZYpgihm0cEPTM5j6jT4NE881lAP8zo4IemZzH1GkwLtaeVMxfMDwIUcT7s+jgh6ZnMfUaOCHpmcx9Rp8GieeaygH+Z1b8POas6xZTJyOYX4o8/ZtVsCI6dYTZfJRPwjUoJwEV9HBD0zOY+o0cEPTM5j6jRwQ9MzmPqNHBD0zOY+o0cEPTM5j6jRwQ9MzmPqNHBD0zOY+o1N4dDwyIcxkyXQjZpuS6xVB8dTWu9qScg9mf09AF/KFCktkWRXQTDl3Hzfzb5cj6n7cvErZLDJOoNXey0of3O0e4LaFxx4ZxqTuPOMWV8nFTnx08FaYZOpWlr1oY7/VQP2SZokBliKf3F1ezGThpxSwPViSKlVs9IJ5hyEKf4NUJ5ma5WnnSWSCfzVeHsOgcazyJLflSdVaNMTZeDfy62nliteGpleRJZhjA8oJDMCY+YZtWUWaGkk6gxJ4ed4P8AvBNfxvKwRTz/AH5ClatS2hkUHqtNHrC2rU8FxLMokevclg5hQnIJrNwJLmcHtVhlLiyCsvYMFXV3Jz4apTFZsYF6rxSxqWcJJq9mrtDJ5LZkaJZqkCK/knNS5bS53LlNkWiHSg9p/N1PCQrsCj6GftyyybpVMEtOVxEd5VPCLmU0mfspA8yxQJBTgpF0RD3E/omq+Uya36UE4qlJ57SbojBtq35s8FeeMJPBHKu/LZ1DAHUkFdnLNDGzNGY2YqCSh81/6aahj3iiiajXKJvwUxqQu+pq1Wfcy1onJQISyAkqDy20IokkkkWNA77c2A2LbdhudSRRS8OpGj8XDLyAOzDyI0YK5aciFP5wCyeyN3AG3taMEBSJTDGViKtGCo2Qr5FfltpoK/N3EEfJyhZuI3JTuu/zI0kUUfPpxonNyzcRtux82OrNKjZcGepBKw7BnQNoY7GKrqmPrAONm2iXuNGjj2570q/tIqn2F7qvkNPjsY6opx9UhBsu8S9hoY7GKrqmPrAONm2iXuNPRovLBKakPOFeEZ4D2ADuNtR0MfDIskVGvG48mSNVP4P/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/AAf/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/AAf/2Q==\" style=\"height:133px; width:226px\"/> The diagram above shows the force- extension curve of a piece of wire. The energy stored when the wire is stretched from E to F is",
    "options": [
      {
        "key": "A",
        "text": "7.5 x 10 <sup>-3</sup> J"
      },
      {
        "key": "B",
        "text": "2.5 x 10 <sup>-3</sup> J"
      },
      {
        "key": "C",
        "text": "1.5 x 10 <sup>-2</sup> J"
      },
      {
        "key": "D",
        "text": "7.5 x 10 <sup>-1</sup> J"
      }
    ],
    "optionsMap": {
      "A": "7.5 x 10 <sup>-3</sup> J",
      "B": "2.5 x 10 <sup>-3</sup> J",
      "C": "1.5 x 10 <sup>-2</sup> J",
      "D": "7.5 x 10 <sup>-1</sup> J"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "From the diagram, Extension from E to F, e = 0.10m - 0.05m = 0.05m Force applied between P and Q, F = 0.20N - 0.10N = 0.10N Energy stored, E = ½ Fe E = ½ x 0.10 x 0.05 E = 0.05 × 0.05 E = 25 × 10 <sup>-4</sup> J E = 2.5 × 10 <sup>-3</sup> J",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2025"
  },
  {
    "id": 128,
    "questionNumber": 128,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Elasticity & Hooke’s Law",
    "year": 2022,
    "difficulty": "Hard",
    "text": "Calculate the workdone on an elastic spring with spring constant of 154Nm <sup>-1</sup>, with initial length of 2m and a final length of 2.18m after being stretched by a force.",
    "options": [
      {
        "key": "A",
        "text": "2.5J"
      },
      {
        "key": "B",
        "text": "3.4J"
      },
      {
        "key": "C",
        "text": "4J"
      },
      {
        "key": "D",
        "text": "0.18J"
      }
    ],
    "optionsMap": {
      "A": "2.5J",
      "B": "3.4J",
      "C": "4J",
      "D": "0.18J"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "W = ½ ke <sup>2</sup> Where, Spring constant, k = 154 Nm <sup>-1</sup> Extension, e = 2.18 – 2 = 0.18m Work done, W =? W = ½ × 154 × 0.18 <sup>2</sup> W = 2.5J",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 129,
    "questionNumber": 129,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Elasticity & Hooke’s Law",
    "year": 1982,
    "difficulty": "Easy",
    "text": "A 10g mass placed on the pan of a spring balance causes an extension of 5cm. If a 15g mass is placed on the pan of the same spring balance, the extension is",
    "options": [
      {
        "key": "A",
        "text": "3.3cm"
      },
      {
        "key": "B",
        "text": "6.5cm"
      },
      {
        "key": "C",
        "text": "7.5cm"
      },
      {
        "key": "D",
        "text": "10.8cm"
      }
    ],
    "optionsMap": {
      "A": "3.3cm",
      "B": "6.5cm",
      "C": "7.5cm",
      "D": "10.8cm"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\\(\\text{F \\(\\alpha\\) e and m \\(\\alpha\\) F }\\)\\(\\text{\\(\\frac{m_1}{e_1}\\) = \\(\\frac{m_2}{e_2}\\) }\\)\\(\\text{\\(\\frac{10}{5}\\) = \\(\\frac{15}{e_2}\\) }\\) e<sub>2</sub> = 7.5cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1982,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1982, 2023"
  },
  {
    "id": 130,
    "questionNumber": 130,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Elasticity & Hooke’s Law",
    "year": 2025,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:133px; width:226px\"/> The diagram above shows the force- extension curve of a piece of wire. The energy stored when the wire is stretched from E to F is",
    "options": [
      {
        "key": "A",
        "text": "7.5 x 10 <sup>-3</sup> J"
      },
      {
        "key": "B",
        "text": "2.5 x 10 <sup>-3</sup> J"
      },
      {
        "key": "C",
        "text": "1.5 x 10 <sup>-2</sup> J"
      },
      {
        "key": "D",
        "text": "7.5 x 10 <sup>-1</sup> J"
      }
    ],
    "optionsMap": {
      "A": "7.5 x 10 <sup>-3</sup> J",
      "B": "2.5 x 10 <sup>-3</sup> J",
      "C": "1.5 x 10 <sup>-2</sup> J",
      "D": "7.5 x 10 <sup>-1</sup> J"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "From the diagram, Extension from E to F, e = 0.10m - 0.05m = 0.05m Force applied between P and Q, F = 0.20N - 0.10N = 0.10N Energy stored, E = ½ Fe E = ½ x 0.10 x 0.05 E = 0.05 × 0.05 E = 25 × 10 <sup>-4</sup> J E = 2.5 × 10 <sup>-3</sup> J",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2025"
  },
  {
    "id": 131,
    "questionNumber": 131,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Stress & Strain",
    "year": 1993,
    "difficulty": "Hard",
    "text": "An object of mass 400g and density 600kgm<sup>-3</sup> is suspended with a sting so that half of it is immersed in paraffin of density 900kgm<sup>-3</sup>. The tension in the string is",
    "options": [
      {
        "key": "A",
        "text": "1.0N"
      },
      {
        "key": "B",
        "text": "3.0N"
      },
      {
        "key": "C",
        "text": "4.0N"
      },
      {
        "key": "D",
        "text": "5.0N"
      }
    ],
    "optionsMap": {
      "A": "1.0N",
      "B": "3.0N",
      "C": "4.0N",
      "D": "5.0N"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Volume of object: V = mass / density = (400 × 10⁻³) / 600 = 6.67 × 10⁻⁴ m³ Volume of paraffin displaced (half immersed): V' = ½ × 6.67 × 10⁻⁴ = 3.33 × 10⁻⁴ m³ Mass of paraffin displaced: m' = density × volume = 900 × 3.33 × 10⁻⁴ = 0.3 kg Upthrust = weight of paraffin displaced: U = 0.3 × 10 = 3 N Weight of object: W = 0.4 × 10 = 4 N Tension in the string: T = W − U = 4 − 3 = 1 N",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1988,
      1993
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1988, 1993)"
  },
  {
    "id": 132,
    "questionNumber": 132,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Stress & Strain",
    "year": 2013,
    "difficulty": "Easy",
    "text": "A body of mass 11kg is suspended from a ceiling by an aluminium wire of length 2m and diameter 2mm. Calculate the elastic energy stored in the wire. [Young modulus of aluminium is 7.0 x 10 <sup>10</sup> Nm <sup>-2</sup>, g = 10ms <sup>-2</sup>, π = 3.14]",
    "options": [
      {
        "key": "A",
        "text": "1.1 x 10 <sup>-1</sup> J"
      },
      {
        "key": "B",
        "text": "5.5 x 10 <sup>-2</sup> J"
      },
      {
        "key": "C",
        "text": "1.1 x 10 <sup>-4</sup> J"
      },
      {
        "key": "D",
        "text": "5.5 x 10 <sup>-5</sup> J"
      }
    ],
    "optionsMap": {
      "A": "1.1 x 10 <sup>-1</sup> J",
      "B": "5.5 x 10 <sup>-2</sup> J",
      "C": "1.1 x 10 <sup>-4</sup> J",
      "D": "5.5 x 10 <sup>-5</sup> J"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "e = 4FI / Yπd <sup>2</sup> e = (4 x 11 x 10 x 2) / (7 x 10 <sup>10</sup> x 3.14(2 x 10 <sup>−2</sup> ) <sup>2</sup> ) e = 0.001m E = ½ Fe = ½ x 110 x 0.001 E = 5.5 x 10 <sup>-2</sup> J",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 133,
    "questionNumber": 133,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Stress & Strain",
    "year": 1978,
    "difficulty": "Medium",
    "text": "A piece of rubber 10cm long stretches 6mm when a load of 100N is hung from it. What is the strain?",
    "options": [
      {
        "key": "A",
        "text": "60"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "6 x 10 <sup>-2</sup>"
      },
      {
        "key": "D",
        "text": "6 x 10 <sup>-3</sup>"
      }
    ],
    "optionsMap": {
      "A": "60",
      "B": "6",
      "C": "6 x 10 <sup>-2</sup>",
      "D": "6 x 10 <sup>-3</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To solve this problem, we need to calculate the strain of the rubber. Strain is defined as the ratio of the change in length (ΔL) to the original length (L<sub>0</sub> ): \\(Strain=\\frac{ΔL}{L_0}​\\) Given: Original length of the rubber, L<sub>0</sub> = 10 cm = 0.1 m, Change in length,ΔL= 6 mm = 0.006 m. Calculate the strain:\\(Strain=\\frac{ΔL}{L_0}=\\frac{0.006 m}{0.1 m}=0.06\\) = 6×10 <sup>−2</sup>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 134,
    "questionNumber": 134,
    "subject": "Physics",
    "topic": "Elasticity",
    "subtopic": "Stress & Strain",
    "year": 2018,
    "difficulty": "Hard",
    "text": "A. Defined strain B. A rubber and is stretched to twice its original length. Calculate the strain on the rubber band",
    "options": [
      {
        "key": "A",
        "text": "A. Strain is defined as the ratio of the extension to the original length.Mathematically,Strain = (e/l)."
      },
      {
        "key": "B",
        "text": "B. Let original length be X.New length be 2X.Extension = 2X X= XS Train =extension / original LengthS Train = X / X = 1"
      }
    ],
    "optionsMap": {
      "A": "A. Strain is defined as the ratio of the extension to the original length.Mathematically,Strain = (e/l).",
      "B": "B. Let original length be X.New length be 2X.Extension = 2X X= XS Train =extension / original LengthS Train = X / X = 1",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Stress & Strain.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 135,
    "questionNumber": 135,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Fluids At Rest",
    "year": 2016,
    "difficulty": "Easy",
    "text": "If a tube of small radius opened at both ends is placed in a liquid, the liquid will",
    "options": [
      {
        "key": "A",
        "text": "remain at the same level irrespective of whether the liquid wets the glass or not"
      },
      {
        "key": "B",
        "text": "fall below the liquid level if the liquid gets wet the glass"
      },
      {
        "key": "C",
        "text": "rise above the liquid level if the liquid does not wet the glass"
      },
      {
        "key": "D",
        "text": "fall below the liquid level if the liquid does not wet the glass"
      }
    ],
    "optionsMap": {
      "A": "remain at the same level irrespective of whether the liquid wets the glass or not",
      "B": "fall below the liquid level if the liquid gets wet the glass",
      "C": "rise above the liquid level if the liquid does not wet the glass",
      "D": "fall below the liquid level if the liquid does not wet the glass"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "fall below the liquid level if the liquid does not wet the glass. When a tube with a small radius (narrow tube) is placed in a liquid, an interfacial tension between the liquid and the tube's material comes into play. This interfacial tension can act in two ways:",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 136,
    "questionNumber": 136,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Fluids At Rest",
    "year": 2016,
    "difficulty": "Medium",
    "text": "If a container is filled with ice to the brim, what happens to the level of water when the ice completely melts?",
    "options": [
      {
        "key": "A",
        "text": "The water in the glass outflows"
      },
      {
        "key": "B",
        "text": "The level of water goes up"
      },
      {
        "key": "C",
        "text": "The level of water remains unchanged"
      },
      {
        "key": "D",
        "text": "The level of water drops"
      }
    ],
    "optionsMap": {
      "A": "The water in the glass outflows",
      "B": "The level of water goes up",
      "C": "The level of water remains unchanged",
      "D": "The level of water drops"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "When ice melts completely, the level of water in the container will generally remain unchanged, making option C the correct answer. <ul><li> The water in the glass overflows:This would only happen if the container already had some water in it before adding the ice.If the container was initially filled just with ice,there will be no overflow when it melts. .</li><li> The level of water goes up:While this might seem intuitive,considering the added volume of water from the melted ice,it generally doesn't happen.Ice,due to its less dense crystal structure,occupies more volume than the same amount of water in its liquid state.So,when ice melts,its volume generally decreases,resulting in the water level staying the same. .</li><li> The level of water drops:This could happen if there were air gaps or voids between the ice pieces initially,and those gaps filled with water during melting.However,if the container was fully packed with solid ice without any air pockets,the water level wouldn't drop after melting. .</li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2010,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2010, 2016"
  },
  {
    "id": 137,
    "questionNumber": 137,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Fluids At Rest",
    "year": 2010,
    "difficulty": "Hard",
    "text": "If a container is filled with ice to the brim, what happens to the level of water when the ice completely melts?",
    "options": [
      {
        "key": "A",
        "text": "The water in the glass outflows"
      },
      {
        "key": "B",
        "text": "The level of water drops"
      },
      {
        "key": "C",
        "text": "The level of water remains unchanged"
      },
      {
        "key": "D",
        "text": "The level of water goes up"
      }
    ],
    "optionsMap": {
      "A": "The water in the glass outflows",
      "B": "The level of water drops",
      "C": "The level of water remains unchanged",
      "D": "The level of water goes up"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "When ice melts, it undergoes a phase transition from a solid to a liquid. The volume occupied by the water in the liquid state is the same as the volume occupied by the ice in the solid state.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2010,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2010, 2016"
  },
  {
    "id": 138,
    "questionNumber": 138,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Fluids At Rest",
    "year": 2011,
    "difficulty": "Easy",
    "text": "If a tube of small radius opened at both ends is placed in a liquid, the liquid will",
    "options": [
      {
        "key": "A",
        "text": "remain at the same level irrespective of whether the liquid wet the glass or not"
      },
      {
        "key": "B",
        "text": "fall below the liquid level if the liquid wets the glass"
      },
      {
        "key": "C",
        "text": "falls below the liquid level if the liquid does not wet the glass"
      },
      {
        "key": "D",
        "text": "rise above the liquid level if the liquid does not wet the glass"
      }
    ],
    "optionsMap": {
      "A": "remain at the same level irrespective of whether the liquid wet the glass or not",
      "B": "fall below the liquid level if the liquid wets the glass",
      "C": "falls below the liquid level if the liquid does not wet the glass",
      "D": "rise above the liquid level if the liquid does not wet the glass"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Falls below the liquid level if the liquid does not wet the glass The behavior of a liquid in a small-radius tube (capillary tube) depends on the interaction between the liquid molecules and the glass surface. This is explained by capillarity , which is due to the balance of cohesive forces (between molecules of the liquid) and adhesive forces (between the liquid and the tube).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 139,
    "questionNumber": 139,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Archimede’s Principle",
    "year": 1986,
    "difficulty": "Medium",
    "text": "A heavy object is suspended from a string and lowered into water so that it is completely submerged. The object appears lighter because",
    "options": [
      {
        "key": "A",
        "text": "the density of water is less than that of the object"
      },
      {
        "key": "B",
        "text": "the pressure is low just below the water surface"
      },
      {
        "key": "C",
        "text": "it experiences an upthrust"
      },
      {
        "key": "D",
        "text": "the tension in the string neutralizes part of the weight"
      }
    ],
    "optionsMap": {
      "A": "the density of water is less than that of the object",
      "B": "the pressure is low just below the water surface",
      "C": "it experiences an upthrust",
      "D": "the tension in the string neutralizes part of the weight"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "When an object is submerged in a fluid, it experiences an upward force called upthrust. This upthrust is equal to the weight of the fluid displaced by the object. This is known as Archimedes' principle. The upthrust acts against the weight of the object, making it appear lighter. Other Options: The density of water is less than that of the object: This is incorrect. The density of water is actually greater than the density of most objects. The pressure is low just below the water surface: This is incorrect. The pressure increases with depth in a fluid. The tension in the string neutralizes part of the weight: This is incorrect. The tension in the string is simply the force required to hold the object up. It does not affect the weight of the object.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      1986
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1981, 1986)"
  },
  {
    "id": 140,
    "questionNumber": 140,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Archimede’s Principle",
    "year": 2024,
    "difficulty": "Hard",
    "text": "A cube of sides 0.2m hangs freely from a string. What is the upthrust on the cube when totally immersed in water?",
    "options": [
      {
        "key": "A",
        "text": "8000N"
      },
      {
        "key": "B",
        "text": "800N"
      },
      {
        "key": "C",
        "text": "110N"
      },
      {
        "key": "D",
        "text": "80N"
      }
    ],
    "optionsMap": {
      "A": "8000N",
      "B": "800N",
      "C": "110N",
      "D": "80N"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Upthrust = weight of liquid Volume of liquid display = 0.2 × 0.2 × 0.2 = 0.008m <sup>3</sup> Density of water = 1000kg/m <sup>3</sup> But Density = Mass ÷Volume Mass of Liquid = Density × Volume = 1000 × 0.008 = 8kg Weight of Liquid (Water) = 8 × 10 = 80N Recall that upthrust = weight of liquid (water) Upthrust = 80N The correct option is 80N.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 141,
    "questionNumber": 141,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Archimede’s Principle",
    "year": 1982,
    "difficulty": "Easy",
    "text": "Why does a piece of cork float on water?",
    "options": [
      {
        "key": "A",
        "text": "There is no upthrust on it when completely immersed in water"
      },
      {
        "key": "B",
        "text": "The upthrust on it when completely immersed in water is greater than its weight in air"
      },
      {
        "key": "C",
        "text": "The upthrust on it when completely immersed in water is less than its weight in air"
      },
      {
        "key": "D",
        "text": "Its specific gravity is greater than that of water"
      }
    ],
    "optionsMap": {
      "A": "There is no upthrust on it when completely immersed in water",
      "B": "The upthrust on it when completely immersed in water is greater than its weight in air",
      "C": "The upthrust on it when completely immersed in water is less than its weight in air",
      "D": "Its specific gravity is greater than that of water"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "the upthrust on it when completely immersed in water is greater than its weight in air A piece of cork floats on water due to buoyancy . The buoyant force, or upthrust , is the upward force exerted by the water, and it depends on the volume of water displaced by the cork. When the cork is completely immersed in water, the upthrust is greater than the cork's weight , causing it to float. This occurs because the cork has a lower density (or specific gravity) than water, making it less heavy per unit volume than the water it displaces.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 142,
    "questionNumber": 142,
    "subject": "Physics",
    "topic": "Liquids At Rest",
    "subtopic": "Archimede’s Principle",
    "year": 1981,
    "difficulty": "Medium",
    "text": "A solid weighs 4.8g in air, 2.8g in water and 3.2g in kerosine. The ratio of density of the solid to that of the kerosine is",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "<sup>3</sup>/2"
      }
    ],
    "optionsMap": {
      "A": "12",
      "B": "3",
      "C": "2",
      "D": "<sup>3</sup>/2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "To find the ratio of the density of the solid to that of kerosene, we will use the Archimedes' principle , which states that the loss of weight of an object in a fluid is equal to the weight of the fluid displaced, which can help in determining the volume and density.The loss of weight in water is:\\(W_{\\text{air}} - W_{\\text{water}} = 4.8 \\, \\text{g} - 2.8 \\, \\text{g} = 2.0 \\, \\text{g}\\)This loss of weight in water equals the weight of water displaced, which is the volume of the solid.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 143,
    "questionNumber": 143,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Total Internal Reflection",
    "year": 2022,
    "difficulty": "Hard",
    "text": "If the refractive index of glass is 1.5, what is the critical angle at the air-glass interface?",
    "options": [
      {
        "key": "A",
        "text": "41.8 <sup>∘</sup>"
      },
      {
        "key": "B",
        "text": "61.8 <sup>∘</sup>"
      },
      {
        "key": "C",
        "text": "34.6 <sup>∘</sup>"
      },
      {
        "key": "D",
        "text": "51.3 <sup>∘</sup>"
      }
    ],
    "optionsMap": {
      "A": "41.8 <sup>∘</sup>",
      "B": "61.8 <sup>∘</sup>",
      "C": "34.6 <sup>∘</sup>",
      "D": "51.3 <sup>∘</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Refractive index = η\\(\\eta={1\\over\\sin c}\\)\\(c=\\sin^{-1}({1\\over n})\\)\\(c=\\sin^{-1}({1\\over1.5})\\)C = 41.8°",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1986,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1986, 2022"
  },
  {
    "id": 144,
    "questionNumber": 144,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Total Internal Reflection",
    "year": 1986,
    "difficulty": "Easy",
    "text": "If the refractive index of glass is 1.5, what is the critical angle at the air-glass interface?",
    "options": [
      {
        "key": "A",
        "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAdRJREFUWEdj/P//P8NAA6aBdgDI/gFyxIN5fmpVe2EBQH9HPJgdqKlUuA05BujvCIXU9dfvrc/WQHIF/R2BJRGOOmLgEia2MgFYWNEQbEtjYEjbhmrBnnINRVVNKCrfByotaeYCkP0MVlZWGI7AtJF2CdNzJtC2hWHElMh4HbE9nZExfTt+Y+5MtGZEA9YT7xBjNZIamkUH2ODbE4iPDhTvgD0CFYGFA4QLlgEFDxAQCiGSwgLqXKsJt8FO35YGYwGZDBA20DtABthTaWngdIYt0WMEKThlQgHcUKwBD84dWM2EWI3QBDYTmt3g7iM5MrEHENQYiLORsjR6bCLzyXcDdkcjlxMge5AjA7mUQZYjLrWREEhMwISGLUtt3zALFDRwydvXjlmFeauAxO5sXXXMSksVKEe1xImcfBDhAM5bSPGDkmqgWtCLYxK8jqaUcbShC80rtKs7cJdWoFauppKalhK8rUt+TJKpc1+pauUekN77swI0fGffp2lVTtiN92YHQxwxENEBjaj907sYfF0UQDzCDqaNij3lwbNAoQACA+MIYAuvdC/CcwPgCGBSgLlgXym4jUn3wgqYP926rzAwQhNG0NR7HY50dwS24mMAcwfCOQBTDE4MiDWvdgAAAABJRU5ErkJggg==\"/>"
      },
      {
        "key": "B",
        "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAeFJREFUWEftV8FOwkAQbfkSILYW/INy5WJIDYaETygHz5XoJ3iCkxECiVfjwYtwgXLjDzQmNC1/UmZ2t2ULG2zRsh6ccNjudnfevnkzTNUwDBXZVpANAP3LALEeX+mVsl4t6/dzygGE47TmOtrdDF0Gg6ZhDQPUw2kRJLz5wxYFISMcTIaLxwfFqhelhIORMeu2BsgCmpxwzLqGM9+GRgIIkEKEwHW6bv5MTGxFsSe8HIORpRklrcJ+OYNA/4ppmjsgRNmYX3ZcPoG/53aainwQxLSjqp3p4WO8fk3dsVrfS+OaeyffYrXqpQ9H4jrkImwm4oE+khWkB+w7hjJxAUwgXLO3IpxM7GgEQzYL6zBJLmXbRGf7ohcQSpTJLD5USDypE8IzqevtJnImS7cYX+Zgiglix1DYXErvRpN/Ph6DGDRfMfmwIDt8leHX0qktA0kFEJoopaZvA6QmXlx9Ls124wznvPeXpVnVYO3XxMnLJ5YnFSsXn4Rq2JZkOc5w8b1XVfz/kG35le0MN5MB4i81uiG0NtIbXddpjnwiUhnhUBa3+N1x83peKkn67ogTFL87aJ8nhQl6/WK9cfHlr2F0chCQGtfjgKDwvQ+jXMTRTyrdcXuh2+a7XDjkv2JGRXUDyyRGjklXqQIAAAAASUVORK5CYII=\"/>"
      },
      {
        "key": "C",
        "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAfVJREFUWEfFV81OwkAQbnkSaKQWfINyExNjiAaj4RHKgXAwEREfwAMnOBEBSbwaDl6AxPBz4w0gJm3avgnuTynbdlNaY3cnPbQ77c4333wz2Yq73U7gbSneAGB8HiDs0Y2ck+S8JL8sMAegHGxt2ci25ijkvKlcDyyoB7YIyGjLRvndRAs8yiGsnmA5auPTTIZTOVwyrH5ZaSy4MYHTT1+Uzn5Mm0d3gNa4HVkIhWlsFCmdfHdMNUHQpl7xm4O7TDYHr+YSe5LrDhhfUFU1ACLYj8l1x9UbiPZRiTKRQ0HMqqJYnYVvY3QLos8KXSNKaOKdZIeV3oleDk86KBFnZc8DfkQeSA+wYwzF4gIwAeGqHR1xMtX2d+DWWQV+sIiS0jSkM5roA5QiZTrmbkolHnUHdU8c+vAR2tNpNxdf7GLSCXK2wbCJlvZXk3z+OwY6aHJOkGWB7JBThvRFU1sMklJAaLSWmn31ITWuU9+u1UrpBK4Zk8+1ms8C37+Jk5SPK08sVqI+HtU4n/jHcYzUfa+KcHTztuTGdozMuIGwhvfS8woj5QTCHvUmB6q4gLAHD8ZlXXZRcABhDR/1+muR0Ax7EKueUWufe2TLukWBHovtLQEh3/oeJ3e8Oza7Fi0GZ8xwEOBnUAFnXfzfwboc1BHGXpgUGL+eAV9hcES/yQAAAABJRU5ErkJggg==\"/>"
      },
      {
        "key": "D",
        "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAfpJREFUWEfFV81OwkAQbnmTEqpAeIJyMqiJGhJBwhtYnoAgPoFHOHhQxMSrMcSL5QDtkScgJqZN65vU2em2bn+CLbHdSQ/tbrvz7TffTGdF13UF3lbiDYD45wDCeeqVD+p49WbfSAKEo1Bz5u3Lue251McS3nNgIiSAQ0niwAQQAGTIVUmuSSPDY6TwcLjGUB6v0bc9u/JwFB4OY/XWPWlhSKTj88aX43DIjnKlsVjpCMJZa9siNKGpgqBq4fQjUQBBkIvGJT9NEP+CoigxEPGKkJ8mzh7A20s/TUXeCWI5EMXBcvcy1rQpRqw5tdK4Zt7Jt1yak/ThCG0HN0JHfB68R5wh9ID9xVAmLoAJAleZmMiJpvp3cEtHYR4GcVOqijpLEn2MUlQmtWDRROIxOxLX9Fz/foRr0nQL8GUOZjJBdBkPNpPS0Wiyz/tjSAbN1gk2LIQdtsqwc+nUloGkEggtKaWW74+EmmDS/Nwo/YsKGbM+XjdKXYa5fxMnK59Anp5YmfiEVEM/iZbjDFuPvCqS3zlvy69sZ9gZDxDGLW10O8/QTBDbP5L7fUl6O/oHX4+q7ZnDo7Oyra3fWbVOO1uLcMEjHNjSscYhO/Sb2vVCpCC69/bdUeGaYJQEmhjqfFp+H4V//OJy7vAPP/7JB0Bw0ES8ivHIjhiKHxn8UzUmVQo/AAAAAElFTkSuQmCC\"/>"
      }
    ],
    "optionsMap": {
      "A": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAdRJREFUWEdj/P//P8NAA6aBdgDI/gFyxIN5fmpVe2EBQH9HPJgdqKlUuA05BujvCIXU9dfvrc/WQHIF/R2BJRGOOmLgEia2MgFYWNEQbEtjYEjbhmrBnnINRVVNKCrfByotaeYCkP0MVlZWGI7AtJF2CdNzJtC2hWHElMh4HbE9nZExfTt+Y+5MtGZEA9YT7xBjNZIamkUH2ODbE4iPDhTvgD0CFYGFA4QLlgEFDxAQCiGSwgLqXKsJt8FO35YGYwGZDBA20DtABthTaWngdIYt0WMEKThlQgHcUKwBD84dWM2EWI3QBDYTmt3g7iM5MrEHENQYiLORsjR6bCLzyXcDdkcjlxMge5AjA7mUQZYjLrWREEhMwISGLUtt3zALFDRwydvXjlmFeauAxO5sXXXMSksVKEe1xImcfBDhAM5bSPGDkmqgWtCLYxK8jqaUcbShC80rtKs7cJdWoFauppKalhK8rUt+TJKpc1+pauUekN77swI0fGffp2lVTtiN92YHQxwxENEBjaj907sYfF0UQDzCDqaNij3lwbNAoQACA+MIYAuvdC/CcwPgCGBSgLlgXym4jUn3wgqYP926rzAwQhNG0NR7HY50dwS24mMAcwfCOQBTDE4MiDWvdgAAAABJRU5ErkJggg==\"/>",
      "B": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAeFJREFUWEftV8FOwkAQbfkSILYW/INy5WJIDYaETygHz5XoJ3iCkxECiVfjwYtwgXLjDzQmNC1/UmZ2t2ULG2zRsh6ccNjudnfevnkzTNUwDBXZVpANAP3LALEeX+mVsl4t6/dzygGE47TmOtrdDF0Gg6ZhDQPUw2kRJLz5wxYFISMcTIaLxwfFqhelhIORMeu2BsgCmpxwzLqGM9+GRgIIkEKEwHW6bv5MTGxFsSe8HIORpRklrcJ+OYNA/4ppmjsgRNmYX3ZcPoG/53aainwQxLSjqp3p4WO8fk3dsVrfS+OaeyffYrXqpQ9H4jrkImwm4oE+khWkB+w7hjJxAUwgXLO3IpxM7GgEQzYL6zBJLmXbRGf7ohcQSpTJLD5USDypE8IzqevtJnImS7cYX+Zgiglix1DYXErvRpN/Ph6DGDRfMfmwIDt8leHX0qktA0kFEJoopaZvA6QmXlx9Ls124wznvPeXpVnVYO3XxMnLJ5YnFSsXn4Rq2JZkOc5w8b1XVfz/kG35le0MN5MB4i81uiG0NtIbXddpjnwiUhnhUBa3+N1x83peKkn67ogTFL87aJ8nhQl6/WK9cfHlr2F0chCQGtfjgKDwvQ+jXMTRTyrdcXuh2+a7XDjkv2JGRXUDyyRGjklXqQIAAAAASUVORK5CYII=\"/>",
      "C": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAfVJREFUWEfFV81OwkAQbnkSaKQWfINyExNjiAaj4RHKgXAwEREfwAMnOBEBSbwaDl6AxPBz4w0gJm3avgnuTynbdlNaY3cnPbQ77c4333wz2Yq73U7gbSneAGB8HiDs0Y2ck+S8JL8sMAegHGxt2ci25ijkvKlcDyyoB7YIyGjLRvndRAs8yiGsnmA5auPTTIZTOVwyrH5ZaSy4MYHTT1+Uzn5Mm0d3gNa4HVkIhWlsFCmdfHdMNUHQpl7xm4O7TDYHr+YSe5LrDhhfUFU1ACLYj8l1x9UbiPZRiTKRQ0HMqqJYnYVvY3QLos8KXSNKaOKdZIeV3oleDk86KBFnZc8DfkQeSA+wYwzF4gIwAeGqHR1xMtX2d+DWWQV+sIiS0jSkM5roA5QiZTrmbkolHnUHdU8c+vAR2tNpNxdf7GLSCXK2wbCJlvZXk3z+OwY6aHJOkGWB7JBThvRFU1sMklJAaLSWmn31ITWuU9+u1UrpBK4Zk8+1ms8C37+Jk5SPK08sVqI+HtU4n/jHcYzUfa+KcHTztuTGdozMuIGwhvfS8woj5QTCHvUmB6q4gLAHD8ZlXXZRcABhDR/1+muR0Ax7EKueUWufe2TLukWBHovtLQEh3/oeJ3e8Oza7Fi0GZ8xwEOBnUAFnXfzfwboc1BHGXpgUGL+eAV9hcES/yQAAAABJRU5ErkJggg==\"/>",
      "D": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAhCAIAAAAteN6IAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAfpJREFUWEfFV81OwkAQbnmTEqpAeIJyMqiJGhJBwhtYnoAgPoFHOHhQxMSrMcSL5QDtkScgJqZN65vU2em2bn+CLbHdSQ/tbrvz7TffTGdF13UF3lbiDYD45wDCeeqVD+p49WbfSAKEo1Bz5u3Lue251McS3nNgIiSAQ0niwAQQAGTIVUmuSSPDY6TwcLjGUB6v0bc9u/JwFB4OY/XWPWlhSKTj88aX43DIjnKlsVjpCMJZa9siNKGpgqBq4fQjUQBBkIvGJT9NEP+CoigxEPGKkJ8mzh7A20s/TUXeCWI5EMXBcvcy1rQpRqw5tdK4Zt7Jt1yak/ThCG0HN0JHfB68R5wh9ID9xVAmLoAJAleZmMiJpvp3cEtHYR4GcVOqijpLEn2MUlQmtWDRROIxOxLX9Fz/foRr0nQL8GUOZjJBdBkPNpPS0Wiyz/tjSAbN1gk2LIQdtsqwc+nUloGkEggtKaWW74+EmmDS/Nwo/YsKGbM+XjdKXYa5fxMnK59Anp5YmfiEVEM/iZbjDFuPvCqS3zlvy69sZ9gZDxDGLW10O8/QTBDbP5L7fUl6O/oHX4+q7ZnDo7Oyra3fWbVOO1uLcMEjHNjSscYhO/Sb2vVCpCC69/bdUeGaYJQEmhjqfFp+H4V//OJy7vAPP/7JB0Bw0ES8ivHIjhiKHxn8UzUmVQo/AAAAAElFTkSuQmCC\"/>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAiCAIAAAC2kpK9AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAplJREFUaEPtWT9+gjAUDp5FO/TXE+AJtItT125h1Hu44Khb104ulRPICfw5CHehLyEkEAFjEgNDshTKS17y5b3v/TEoigL50YHAxCPTg4B7dJIomO9y95eio9cpOvluHgTLA/p4mzpFR1uvO3Tg7r7RT3HCToFByESvO3QW++K8dmsz9B5M9LpDx7HJWFHn0emD0aPj0dF1s0Fs53IbIN8BhJ7XC5WEoyHH8jDOnGg20Bv4OmtUlYQuBwwxr5d3IM0MokRlW+qSKquNRsZ71uOITsu0atAKmv2nspzylX4hZgKD25QkOZp7t7IRYOUsDlEVQE6YhxLg+vIZvsMDkcIYI3wqaClJ/rLBJQ1jEFHRMVwFuOYJEHmVDltKlJgIaRoYGSRNOGTJFox6LlIPUSuW8XgRcf3i8AycunlQA6vM5Q6chqTecUc5q4pZUOcDAJclb9tl1xSvFhzd/O83Dd9n9D2/XeoNLEny8YV0SjToTxAheRqknYgmwLJtmpPjgRyCfwQIwq9P2p6pgEoiysyyJGf0OnWrQTZdn7tMaJDWEEKNPFsQDSPImi8J72FT2DdJUlB8FmNHtcILvPIUk71TVrY4FBjaoja6lJ2IKcdLaii2a3TwQOZF7R6r5mKqUtrt9HYF9RhNXdk2OosVTjczwqPH1Yu5wqSdrgi/bXRIk7scexHwKJd3Z9uKW5XFTNrpiiqto9OqF6CBX2vAtdPrNgKromRxOCoVuIoHsSHGrL6WQNjmyJ71urNtk020JvpsQc3ShG/UdszqOWd3tm0CTnsZZLSiqDzdeFY9iWzJtm14xUvWcIdOd7ZtfrDn2+myThI0eM2QbDesMjC0QeXpDXpoZtvKa0iCBu30O5VNhqoSH98b7LPcf94ZQzVwq7zsAAAAAElFTkSuQmCC\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAhCAIAAADWLytXAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAsZJREFUaEPtWE1O20AUnvQkcdSkMe0lgJJFpURQcoIKUFUWVaXGSThBlWaTRSuEISdARWoFCBSbSxACaWXPTcwb2zHj2A4zE1PZJtaskvf7zfubl7MsC2X1w/3aF9Q7+SAxO/iCmTJlhOZhvVDpXr+S2LEADzMJB1Y35M+oqylLvHeYSTjy2yej31t5XiyyGh0COLgsmYyOBRziCPg4F9HxrOC4M02ewMllcgyDoWO1c/OAw/sfxrdlFlgSDYfWknsvz8VaJovzQZrE1o4rpSRfoA0xr4S5XDjISNu6EpYyg1FU8nJnPOpUnsKiWTITkCzw0Kp8v0Y5z8w3ypmbIPpezdj5n8mCLMs8WC9Lxc0DE6rqPJ/eKIIc2T7tAZFES3b+Jb8PmjZZU39cmdauqvOa9bgWigLgALOPqutHRggf7aHjp3uCVhrq5sRDveFJm0geNAEIkNZuNMsNzbK0thSu0TPCgZIGl8svQWI7WfS9wuUaYyuKyjzS207faVPLBVqynRTl/VFnBQlrLJS4H6l85QfggIuNJSZJgBRlcvmTzyeZigjIl1g0CsZANBt0Fjw4RdW3oc9h0u3gQoKndoiDqEtbx8bl19uPddX90yfZNMbIXcZg4+51hEa+u4ydGuAw/w5BLFZb/cA8S7qdMb4JnqlqD5mi6EHbaMkAzbBesUdDrP8Zlgr5UI2xO8gsEPdVcCGWzuI2C7vyUVkw1Vm85uVU6Pl6WWT550ggJ7u9A2lud5a0fa4bLK16pmtEjr/BJXZIjwpy8T0oS9qkDg7xPWgm4WBxiodm2F11Wqf9ZEvAm4XHeI+WTH3/dsNGRxgOPh1TL6CQp1CIRsJ1q5xnDw4hdBGC3co2+pm62iHoLSNbmuHg3IMGEIEEmQzQuN/7hWBKTF+yCO9Bw+B4qDLOkiV9cDCGvRhZmpNFzOOZXAs4fPDcA5TCj1LQ4tAnAAAAAElFTkSuQmCC\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAiCAIAAABwVwYEAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAilJREFUWEfNVz2agjAQBc+iFn6eIJ5At9nK1i6W2uwptsFy7Wy32mbhBHICPwvhLtnMkAnhTzYqhHQkgXlM5r038YUQ3oDHaMDYAJpDfNHWXxzSQn7Sw8JXYxtlK/J8+x9JwDA4D83YIacZXMdFB/gkDBYkIkejMBYm4AF2OTjf5Zc478aVuo9+jh6bTdT8ZMa8+Jq4rL8aZs6nhHs8neO6g/xZKcaw8F1uxOf0dhlY/qjisvQm19jj70tH+gKMJYZqhUFRAc4K0Zu+VESEkJlFmGEqrtBcd/oH0DzGWEmELc2gO35ImRPitLZia3XzXXzSIX3ywaY4hmWSdZZd9SmIlvm23A6FXjRZyw9k+SskAX9fzVD2skdcgaTK0ZbXp5JmvKzYTHwJuWaT8nFku5zEVHCO6ailZTkzSBA1copa5g/5WxsuQ5V/DsOps9LQLaM90KsXlMcolXLlmM+Pw7P+H+IvqEESXFaae9Jg0F/USH+/Y+p+wBvzTuNVhVb/nZGs9zo9gG5MDr0o4bL1G3Y/BDXa9sERs4qV+8EhqA6cDrzS2+a1aH1k/3whDKD6u/O3VhjlKqZLSYHz3fnbvbpEOV0dq1VsKgZeAhzgkwK/8U4oau3DAb6G+1ETf9v/occd8X6iugwlKg7y1/S7491ZcyrkEinI14DwmbiXH9Lt4bY0UHwaq1t8+X0y6+i0k0Wfe+VXrTL6+g1lZTHubJWGzJfhe+Sndag/hfvmpvgL6P4AAAAASUVORK5CYII=\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAiCAIAAABwVwYEAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAilJREFUWEfNVz2agjAQBc+iFn6eIJ5At9nK1i6W2uwptsFy7Wy32mbhBHICPwvhLtnMkAnhTzYqhHQkgXlM5r038YUQ3oDHaMDYAJpDfNHWXxzSQn7Sw8JXYxtlK/J8+x9JwDA4D83YIacZXMdFB/gkDBYkIkejMBYm4AF2OTjf5Zc478aVuo9+jh6bTdT8ZMa8+Jq4rL8aZs6nhHs8neO6g/xZKcaw8F1uxOf0dhlY/qjisvQm19jj70tH+gKMJYZqhUFRAc4K0Zu+VESEkJlFmGEqrtBcd/oH0DzGWEmELc2gO35ImRPitLZia3XzXXzSIX3ywaY4hmWSdZZd9SmIlvm23A6FXjRZyw9k+SskAX9fzVD2skdcgaTK0ZbXp5JmvKzYTHwJuWaT8nFku5zEVHCO6ailZTkzSBA1copa5g/5WxsuQ5V/DsOps9LQLaM90KsXlMcolXLlmM+Pw7P+H+IvqEESXFaae9Jg0F/USH+/Y+p+wBvzTuNVhVb/nZGs9zo9gG5MDr0o4bL1G3Y/BDXa9sERs4qV+8EhqA6cDrzS2+a1aH1k/3whDKD6u/O3VhjlKqZLSYHz3fnbvbpEOV0dq1VsKgZeAhzgkwK/8U4oau3DAb6G+1ETf9v/occd8X6iugwlKg7y1/S7491ZcyrkEinI14DwmbiXH9Lt4bY0UHwaq1t8+X0y6+i0k0Wfe+VXrTL6+g1lZTHubJWGzJfhe+Sndag/hfvmpvgL6P4AAAAASUVORK5CYII=\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAiCAIAAABELscYAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAcBJREFUWEfNV7F1gzAQBc/ipMjLBPIEJk0qjwDr4NLu0qZKE5ggnoCXwrCLIt1J4oQBQxJxqAIB0r/7//6JWEoZrWBsVoBBQ+DBUWaxHbtjA6lQvCw76lxEIq9hU32NN8vj8KIGIGkhJQ8vnijF0wMHLzQfRYrZYOVFc4IgOHGoVFi18uHogGDKh0Lh+JCySHVeAtdtK0QnTz3lDw0qHA7YTwiixTG/DOcf+5Pa9+0wsX+N4tBtICvHV2qOO9crzIVtGRMh4Gthm4vnEfd58YKCcMyMzQbewhPTK+/laVYyMB+0A2IVwXBFrp6rSQgtxZLrKYPbYGlhUMvqTQvw0rss7t5+BMuaur/1oan0DqbJLIDgib10maX3v4cxCNfWi66yOq8Sp/X6+5K+7h385vP9gg1aaedaRc+P27kKGH1/o3TXV2flx1l/5x4qWOLwAntbSGX2n1r1bLYVBByUWqI8BZlPCIlT1TH8XmD/GNiYBG9CXx4HdQmo1LWck/lxENWF67djZWq6RnKOrBcsr4/ueR31EeuzIeNQXTOp8vqLhxc/cPDmv1vQzBWoJbrfyoDn02F4xqshKdaUufVhGfoBh9Rs2BYlJu8AAAAASUVORK5CYII=\"/>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1986,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1986, 2022"
  },
  {
    "id": 145,
    "questionNumber": 145,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Lens Formula",
    "year": 2023,
    "difficulty": "Medium",
    "text": "An object placed on the principle axis of a convex lens of focal length 10m produces a real image of double magnification. The image distance from the lens is",
    "options": [
      {
        "key": "A",
        "text": "30cm"
      },
      {
        "key": "B",
        "text": "25cm"
      },
      {
        "key": "C",
        "text": "20cm"
      },
      {
        "key": "D",
        "text": "15cm"
      }
    ],
    "optionsMap": {
      "A": "30cm",
      "B": "25cm",
      "C": "20cm",
      "D": "15cm"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\frac1f=\\frac1u+\\frac1v\\) Where, Object distance is u Image distance is v f = focal length = 10cm M = magnification= 2 M=v ÷ u 2 = v ÷ u v = 2u \\({1\\over2u}+\\frac1u={1\\over10}\\) 2u = 30 u = 15cm v = 2u = 2 × 15 = 30cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2023"
  },
  {
    "id": 146,
    "questionNumber": 146,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Lens Formula",
    "year": 2003,
    "difficulty": "Hard",
    "text": "By what factor will the size of an object placed 10cm from a convex lens be increased if the image is seen on a screen placed 25cm from the lens?",
    "options": [
      {
        "key": "A",
        "text": "15.0"
      },
      {
        "key": "B",
        "text": "2.5"
      },
      {
        "key": "C",
        "text": "1.5"
      },
      {
        "key": "D",
        "text": "0.4"
      }
    ],
    "optionsMap": {
      "A": "15.0",
      "B": "2.5",
      "C": "1.5",
      "D": "0.4"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "This means we are to find the magnification of the image using the formula Magnification = image distance(v)/object distance(u) Where, v = 25cm and u = 10cm Hence, Magnification = 25cm/10cm = 2.5.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2013"
  },
  {
    "id": 147,
    "questionNumber": 147,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Lens Formula",
    "year": 1981,
    "difficulty": "Easy",
    "text": "An object placed on the principle axis of a convex lens of focal length 10m produces a real image of double magnification. The image distance from the lens is",
    "options": [
      {
        "key": "A",
        "text": "30cm"
      },
      {
        "key": "B",
        "text": "25cm"
      },
      {
        "key": "C",
        "text": "20cm"
      },
      {
        "key": "D",
        "text": "15cm"
      }
    ],
    "optionsMap": {
      "A": "30cm",
      "B": "25cm",
      "C": "20cm",
      "D": "15cm"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "\\(\\text{\\(\\frac{1}{v}\\) + \\(\\frac{1}{u}\\) = \\(\\frac{1}{f}\\) }\\)\\(\\text{\\(\\frac{1}{v}\\) = +ve real image distance }\\) Where: U = +ve real object distance f = real focus = 10 M = magnification \\(\\text{M = 2 = \\(\\frac{v}{u}\\) }\\) 2u = V \\(\\text{\\(\\frac{1}{2u}\\) + \\(\\frac{1}{u}\\) = \\(\\frac{1}{10}\\) }\\) 2u = 30 u = 15cm v = 2u = 2 x 15 = 30cm",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2023"
  },
  {
    "id": 148,
    "questionNumber": 148,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Glass Prism & Blocks",
    "year": 2002,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:118px; width:263px\"/> Calculate the refractive index of the material for the glass prism in the diagram above.",
    "options": [
      {
        "key": "A",
        "text": "√ 2/2"
      },
      {
        "key": "B",
        "text": "4/3"
      },
      {
        "key": "C",
        "text": "√2"
      },
      {
        "key": "D",
        "text": "3/2"
      }
    ],
    "optionsMap": {
      "A": "√ 2/2",
      "B": "4/3",
      "C": "√2",
      "D": "3/2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Refractive index, η = sin( ½ (A+) / (sin ½ Where A = the refracting angle of the prism(60<sup>o</sup> ) D = angle of deviation of the ray (30<sup>o</sup> ) η = sin(½ (60+30)) / (sin ½ 60) η =sin 45 / sin 30 η = (√2/2) / (1/2) η = √2",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2012
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2012"
  },
  {
    "id": 149,
    "questionNumber": 149,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Glass Prism & Blocks",
    "year": 2012,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:118px; width:263px\"/> Calculate the refractive index of the material for the glass prism in the diagram above.",
    "options": [
      {
        "key": "A",
        "text": "√ 2/2"
      },
      {
        "key": "B",
        "text": "4/3"
      },
      {
        "key": "C",
        "text": "√ 2"
      },
      {
        "key": "D",
        "text": "3/2"
      }
    ],
    "optionsMap": {
      "A": "√ 2/2",
      "B": "4/3",
      "C": "√ 2",
      "D": "3/2"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Refractive index, \\(\\eta = \\frac{\\sin \\left(\\frac{1}{2} (A + \\right)}{\\sin \\left(\\frac{1}{2} A \\right)}\\) Where <ul><li> A = the refracting angle of the prism(60<sup>o</sup> ) </li><li> D = angle of deviation of the ray (30<sup>o</sup> ) </li></ul> Substitute the given values: \\(\\eta = \\frac{\\sin \\left(\\frac{1}{2} (60^\\circ + 30^\\circ)\\right)}{\\sin \\left(\\frac{1}{2} 60^\\circ \\right)}\\)\\(\\eta = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ}\\)\\(\\eta = \\frac{\\left(\\frac{\\sqrt{2}}{2}\\right)}{\\left(\\frac{1}{2}\\right)}\\) η = √2",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2002,
      2012
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2002, 2012"
  },
  {
    "id": 150,
    "questionNumber": 150,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Images By Convex Lens",
    "year": 2015,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:123px; width:323px\"/> Which of the following types of lenses is suitable for correcting the eye defect illustrated by the ray diagram?",
    "options": [
      {
        "key": "A",
        "text": "Bi converging"
      },
      {
        "key": "B",
        "text": "Bi diverging"
      },
      {
        "key": "C",
        "text": "Plano diverging"
      },
      {
        "key": "D",
        "text": "Diverging meniscus"
      }
    ],
    "optionsMap": {
      "A": "Bi converging",
      "B": "Bi diverging",
      "C": "Plano diverging",
      "D": "Diverging meniscus"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The diagram shows a condition of long-sightedness which is usually correcting using a bi- converging lens (convex lens)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2018"
  },
  {
    "id": 151,
    "questionNumber": 151,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Refractive Index",
    "year": 2004,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:287px; width:300px\"/>The refractive index of the medium M in the diagram above is",
    "options": [
      {
        "key": "A",
        "text": "2/√ 3"
      },
      {
        "key": "B",
        "text": "1/√ 3"
      },
      {
        "key": "C",
        "text": "2√"
      },
      {
        "key": "D",
        "text": "√ 3"
      }
    ],
    "optionsMap": {
      "A": "2/√ 3",
      "B": "1/√ 3",
      "C": "2√",
      "D": "√ 3"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Given: Given: The diagram<img src=\"https://lh7-us.googleusercontent.com/LK3iGTP0pp0yC9bymhwwVvyV3gfMoBWoK58zfb2cM0q4vLdKL5B9fdQnftN-kSxFkSkopKX-fvE188YcNWqFr7r5-xWQL2mSTUhVZCW3i3aISmt_gNKcD3kcfCRU_PBlNzm2YPEIfsk66O59VQ14ZA\"/>From the above diagram ; i = 90<sup>o</sup> - 30<sup>o</sup> = 60<sup>o</sup>r = 90 - 60 = 30 <sup>0</sup>I = angle of incidence (the angle which the incident ray makes with the normal line) = 60°r̂ = angle of refraction (the angle which the refracted ray makes with the normal line) = 30°∴ refractive index = (sin i)/(sin r) = (sin 60<sup>o</sup> / sin 30<sup>o</sup> ) = <sup>√3/2</sup> /<sub>1/2</sub>= √3/2 x 1/2= √3",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2013"
  },
  {
    "id": 152,
    "questionNumber": 152,
    "subject": "Physics",
    "topic": "Waves - Refraction",
    "subtopic": "Refractive Index",
    "year": 2013,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:198px; width:303px\"/>The refractive index of the medium M in the diagram above is",
    "options": [
      {
        "key": "A",
        "text": "2/√ 3"
      },
      {
        "key": "B",
        "text": "1/√ 3"
      },
      {
        "key": "C",
        "text": "2√ 3"
      },
      {
        "key": "D",
        "text": "√ 3"
      }
    ],
    "optionsMap": {
      "A": "2/√ 3",
      "B": "1/√ 3",
      "C": "2√ 3",
      "D": "√ 3"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Refractive index,\\(\\eta_{12} = \\frac{\\sin i}{\\sin r}\\)From the above diagram ;I = 90<sup>o</sup> - 30<sup>o</sup> = 60<sup>o</sup>r = 90 - 60 = 30 <sup>0</sup><ul><li>i = angle of incidence (the angle which the incident ray makes with the normal line) = 60° .</li><li>r̂ = angle of refraction (the angle which the refracted ray makes with the normal line) = 30° .</li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2013
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2013"
  },
  {
    "id": 153,
    "questionNumber": 153,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Radioactivity",
    "year": 2003,
    "difficulty": "Easy",
    "text": "Nuclear fission is preferred to nuclear fusion in the generation of energy because",
    "options": [
      {
        "key": "A",
        "text": "very high temperature are required for fusion"
      },
      {
        "key": "B",
        "text": "The raw materials for fusion are not easily obtained."
      },
      {
        "key": "C",
        "text": "energy obtained from fusion is relatively smaller."
      },
      {
        "key": "D",
        "text": "The product of fusion are very dangerous"
      }
    ],
    "optionsMap": {
      "A": "very high temperature are required for fusion",
      "B": "The raw materials for fusion are not easily obtained.",
      "C": "energy obtained from fusion is relatively smaller.",
      "D": "The product of fusion are very dangerous"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Nuclear fission, despite its own challenges and risks, remains the dominant technology for nuclear power generation due to its relative technological maturity and accessibility. However, ongoing efforts in fusion research aim to overcome these hurdles and bring fusion energy to the forefront in the future.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2008
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2008"
  },
  {
    "id": 154,
    "questionNumber": 154,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Radioactivity",
    "year": 2024,
    "difficulty": "Medium",
    "text": "The count rate of a radioactive material is 800 count/min. if the half-life of the material is 4 days what would the count rate be 16 days later?",
    "options": [
      {
        "key": "A",
        "text": "50 count/min"
      },
      {
        "key": "B",
        "text": "25 count/min"
      },
      {
        "key": "C",
        "text": "200 count/min"
      },
      {
        "key": "D",
        "text": "100 count/min"
      }
    ],
    "optionsMap": {
      "A": "50 count/min",
      "B": "25 count/min",
      "C": "200 count/min",
      "D": "100 count/min"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "50 count/min The count rate of a radioactive material decreases over time as the material decays. The half-life of the material is 4 days, which means that every 4 days, the count rate is halved. After 4 days: Count rate = 800 count/min ÷ 2 = 400 count/min After 8 days: Count rate = 400 count/min ÷ 2 = 200 count/min After 12 days: Count rate = 200 count/min ÷ 2 = 100 count/min After 16 days: Count rate = 100 count/min ÷ 2 = 50 count/min So, 16 days later, the count rate would be 50 count/min (option",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2024"
  },
  {
    "id": 155,
    "questionNumber": 155,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Radioactivity",
    "year": 2008,
    "difficulty": "Hard",
    "text": "Nuclear fission is preferred to nuclear fusion in the generation of energy because",
    "options": [
      {
        "key": "A",
        "text": "very high temperatures are required for fusion."
      },
      {
        "key": "B",
        "text": "the raw materials for fusion are easily obtained."
      },
      {
        "key": "C",
        "text": "energy obtained from fusion is relatively smaller."
      },
      {
        "key": "D",
        "text": "the by-products of fusion are very dangerous."
      }
    ],
    "optionsMap": {
      "A": "very high temperatures are required for fusion.",
      "B": "the raw materials for fusion are easily obtained.",
      "C": "energy obtained from fusion is relatively smaller.",
      "D": "the by-products of fusion are very dangerous."
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Nuclear fusion requires extremely high temperatures and pressures to overcome the electrostatic repulsion between positively charged nuclei. Achieving and maintaining these conditions for a sustained period is currently a significant technological challenge.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2008
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2008"
  },
  {
    "id": 156,
    "questionNumber": 156,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Radioactivity",
    "year": 2003,
    "difficulty": "Easy",
    "text": "The count rate of a radioactive material is 800 count/min. If the half-life of the material is 4 days, what would be the count rate 16 days later?",
    "options": [
      {
        "key": "A",
        "text": "200 count/min"
      },
      {
        "key": "B",
        "text": "100 count/min"
      },
      {
        "key": "C",
        "text": "50 count/min"
      },
      {
        "key": "D",
        "text": "25 count/min"
      }
    ],
    "optionsMap": {
      "A": "200 count/min",
      "B": "100 count/min",
      "C": "50 count/min",
      "D": "25 count/min"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The count rate (N) of a radioactive material can be expressed in terms of the initial count rate (N<sub>0</sub> ​) and the elapsed time (t) using the radioactive decay formula: N = N<sub>0</sub> e <sup>-λt</sup> = N<sub>0</sub> (½) <sup>t/T</sup> Where: N is the count rate at time t = 16 days N <sub>0</sub> ​ is the initial count rate = 800 count/min T ​ is the half-life of the material = 4 days N = 800(½) <sup>16/4</sup> N = 800(½) <sup>4</sup> N = 800(1/16) N = 50 count/min",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2024"
  },
  {
    "id": 157,
    "questionNumber": 157,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Nuclear Energy & Reactions",
    "year": 2025,
    "difficulty": "Medium",
    "text": "In a certain fusion reaction, a deuteron <sup>(2</sup><sub>1</sub> H) interacts with a triton ( <sup>3</sup><sub>1</sub> He) and produces an a-particle ( <sup>4</sup><sub>2</sub> He) and a second product. The second product is",
    "options": [
      {
        "key": "A",
        "text": "a proton"
      },
      {
        "key": "B",
        "text": "an electron"
      },
      {
        "key": "C",
        "text": "a neutron"
      },
      {
        "key": "D",
        "text": "a gamma ray"
      }
    ],
    "optionsMap": {
      "A": "a proton",
      "B": "an electron",
      "C": "a neutron",
      "D": "a gamma ray"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The correct second product of this fusion reaction is Option C: a neutron . The reaction given involves a deuteron ( \\(^{2}_{1}H\\) ) and a triton ( \\(^{3}_{1}He\\) ), which fuse to form an alpha particle ( \\(^{4}_{2}He\\) ) and another particle. Let’s analyze this reaction step by step: <ol><li> Deuteron ( \\(^{2}_{1}H\\) ): This nucleus consists of 1 proton and 1 neutron. </li><li> Triton ( \\(^{3}_{1}He\\) ): This nucleus consists of 1 proton and 2 neutrons. </li></ol> Thus, in total, the reactants (deuteron and triton) bring together: <ul><li> Protons: 1+1=2 .</li><li> Neutrons: 1+2=3 .</li></ul> On the product side, the reaction produces an alpha particle ( \\(^{4}_{2}He\\) ), which consists of: <ul><li> Protons: 2 .</li><li> Neutrons: 2 .</li></ul> To conserve both charge (protons) and mass (protons + neutrons), we need to account for the remaining particles: <ul><li> We already have 2 protons in the alpha particle, so no additional proton is needed. .</li><li> We started with 3 neutrons, but only 2 are in the alpha particle, so 1 neutron must be the second product. .</li></ul> Final Reaction: \\(^{2}_{1}H + ^{3}_{1}He \\rightarrow ^{4}_{2}He + ^{1}_{0}n\\) This is a typical fusion reaction where a neutron is emitted as the second product.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2020,
      2025
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2020, 2025)"
  },
  {
    "id": 158,
    "questionNumber": 158,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Nuclear Energy & Reactions",
    "year": 2026,
    "difficulty": "Hard",
    "text": "Which of the following are the essential parts of an atomic bomb?",
    "options": [
      {
        "key": "A",
        "text": "Uranium and neutrons"
      },
      {
        "key": "B",
        "text": "Radium and polonium"
      },
      {
        "key": "C",
        "text": "Nitrogen and neutrons"
      },
      {
        "key": "D",
        "text": "ranium and α - particles."
      }
    ],
    "optionsMap": {
      "A": "Uranium and neutrons",
      "B": "Radium and polonium",
      "C": "Nitrogen and neutrons",
      "D": "ranium and α - particles."
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct Answer: A. Uranium and neutronsThe essential parts of an atomic bomb are:<ul><li>Fissile material , such as Uranium<sup>-2</sup>35 or Plutonium<sup>-2</sup>39 , which undergoes nuclear fission .</li><li>Neutrons , which initiate the fission chain reaction.</li></ul>In an atomic bomb, when a neutron strikes the nucleus of uranium<sup>-2</sup>35, it causes the nucleus to split, releasing a large amount of energy and more neutrons. These neutrons then trigger further fission reactions, leading to a chain reaction and an explosive release of energy .Radium, polonium, nitrogen, and alpha particles are not used as the primary fissile material or initiating agent in atomic bombs.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 159,
    "questionNumber": 159,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Nuclear Energy & Reactions",
    "year": 1990,
    "difficulty": "Easy",
    "text": "The number of neutrons contained in the nucleus <sup>238</sup><sub>92</sub> Uis",
    "options": [
      {
        "key": "A",
        "text": "92"
      },
      {
        "key": "B",
        "text": "146"
      },
      {
        "key": "C",
        "text": "238"
      },
      {
        "key": "D",
        "text": "330"
      }
    ],
    "optionsMap": {
      "A": "92",
      "B": "146",
      "C": "238",
      "D": "330"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "238 - 92 = 146\\(\\text{Number of neutrons} = \\text{Mass number} - \\text{Atomic number}\\) <ul><li>Mass number ( : The number at the top, which is 238 . This represents the total number of protons and neutrons in the nucleus.</li><li>Atomic number (Z) : The number at the bottom, which is 92 . This represents the number of protons in the nucleus.</li></ul>Now, subtract the atomic number from the mass number:\\(\\text{Number of neutrons} = 238 - 92 = 146\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 160,
    "questionNumber": 160,
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "subtopic": "Nuclear Energy & Reactions",
    "year": 2002,
    "difficulty": "Medium",
    "text": "The particle that is responsible for nuclear fission in a nuclear reactor is",
    "options": [
      {
        "key": "A",
        "text": "neutron"
      },
      {
        "key": "B",
        "text": "proton"
      },
      {
        "key": "C",
        "text": "electron"
      },
      {
        "key": "D",
        "text": "photon"
      }
    ],
    "optionsMap": {
      "A": "neutron",
      "B": "proton",
      "C": "electron",
      "D": "photon"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "A. neutron ✅ Nuclear fission in a reactor is triggered when a heavy nucleus (like uranium<sup>-2</sup>35) absorbs a neutron , causing it to split into smaller nuclei, releasing energy and more neutrons.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 161,
    "questionNumber": 161,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Work, Energy & Power",
    "year": 2018,
    "difficulty": "Hard",
    "text": "Which of the following best describes the energy changes which take place when a steam engine drives a generator which lights a lamp?",
    "options": [
      {
        "key": "A",
        "text": "Heat ----> Light----> Sound ----> Kinetic"
      },
      {
        "key": "B",
        "text": "Kinetic ----> Light ----> Heat ----> Electricity"
      },
      {
        "key": "C",
        "text": "Heat ----> Kinetic ----> Electricity ----> Heat and Light"
      },
      {
        "key": "D",
        "text": "electricity ----> Kinetic ----> Heat ----> Light"
      }
    ],
    "optionsMap": {
      "A": "Heat ----> Light----> Sound ----> Kinetic",
      "B": "Kinetic ----> Light ----> Heat ----> Electricity",
      "C": "Heat ----> Kinetic ----> Electricity ----> Heat and Light",
      "D": "electricity ----> Kinetic ----> Heat ----> Light"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The steam engine uses the Heat supplied from steam to supply kinetic energy into the generator which converts it to electricity to light the lamp, the lamp gives out light and heat as it works.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1983,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1983, 2018"
  },
  {
    "id": 162,
    "questionNumber": 162,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Work, Energy & Power",
    "year": 2013,
    "difficulty": "Easy",
    "text": "If a pump is capable of lifting 5000 kg of water through a vertical height of 60 m in 15 min, the power of the pump is",
    "options": [
      {
        "key": "A",
        "text": "3.3 x 10 <sup>2</sup> Js <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "2.5 x 10 <sup>5</sup> Js <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "2.5 x 10 <sup>4</sup> Js <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "3.3 x 10 <sup>3</sup> Js <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "3.3 x 10 <sup>2</sup> Js <sup>-1</sup>",
      "B": "2.5 x 10 <sup>5</sup> Js <sup>-1</sup>",
      "C": "2.5 x 10 <sup>4</sup> Js <sup>-1</sup>",
      "D": "3.3 x 10 <sup>3</sup> Js <sup>-1</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "\\(\\text{P = \\(\\frac{mgh}{t}\\) }\\)\\(\\text{P = \\(\\frac{5000 \\times 10 \\times 60}{(15 \\times 60)s}\\) }\\) P = 3333.3333 P = 3.3 x 10<sup>3</sup>js<sup>-1</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 163,
    "questionNumber": 163,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Work, Energy & Power",
    "year": 2017,
    "difficulty": "Medium",
    "text": "A body of mass 1,000kg is released from a height of 10m above the ground. Determine its kinetic energy just before it strikes the ground. [g = 10ms <sup>-2</sup> ]",
    "options": [
      {
        "key": "A",
        "text": "10J"
      },
      {
        "key": "B",
        "text": "10 <sup>3</sup> J"
      },
      {
        "key": "C",
        "text": "10 <sup>4</sup> J"
      },
      {
        "key": "D",
        "text": "10 <sup>5</sup> J"
      }
    ],
    "optionsMap": {
      "A": "10J",
      "B": "10 <sup>3</sup> J",
      "C": "10 <sup>4</sup> J",
      "D": "10 <sup>5</sup> J"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "K.E = P.E = mgh Mass, m = 1000kg Height, h = 10m g = 10ms <sup>-2</sup> The kinetic energy = 1000 × 10 × 10 = 100000J = 10 <sup>5</sup> J",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 164,
    "questionNumber": 164,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Work, Energy & Power",
    "year": 1983,
    "difficulty": "Hard",
    "text": "Which of the following best describes the energy changes which take place when a steam engine drives a generator which lights a lamp?",
    "options": [
      {
        "key": "A",
        "text": "Heat →light→ sound →kinetic"
      },
      {
        "key": "B",
        "text": "kinetic →light →heat →electricity"
      },
      {
        "key": "C",
        "text": "Heat →kinetic→electricity →heat→ light"
      },
      {
        "key": "D",
        "text": "electricity →kinetic →heat → light"
      }
    ],
    "optionsMap": {
      "A": "Heat →light→ sound →kinetic",
      "B": "kinetic →light →heat →electricity",
      "C": "Heat →kinetic→electricity →heat→ light",
      "D": "electricity →kinetic →heat → light"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Steam Engine: Heat energy from steam is converted into kinetic (mechanical) energy. Generator: This kinetic energy is converted into electrical energy. Lamp: Electrical energy is then converted mainly into light energy, with some lost as heat. ✅ Correct answer: C. heat → kinetic → electricity → heat → light",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1983,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1983, 2018"
  },
  {
    "id": 165,
    "questionNumber": 165,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Simple Machines",
    "year": 2025,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:144px; width:98px\"/> The diagram above is a block-and-tackle pulley system in which an effort of 80N is used to lift a load of 240N. The efficiency of the machine is",
    "options": [
      {
        "key": "A",
        "text": "40%"
      },
      {
        "key": "B",
        "text": "33%"
      },
      {
        "key": "C",
        "text": "60%"
      },
      {
        "key": "D",
        "text": "50%"
      }
    ],
    "optionsMap": {
      "A": "40%",
      "B": "33%",
      "C": "60%",
      "D": "50%"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "From the diagram given: Load (L) = 240N Effort ( = 80N V.R = 6 (Number of pulleys) Calculation:<ul><li> M.A = Load / Effort = 240N / 80N = 3</li><li> V.R = 6 (since there are 6 pulleys/supporting ropes) </li><li> Efficiency (η) = (M.A / V.R) * 100% = (3 / 6) * 100% = 50%</li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2025"
  },
  {
    "id": 166,
    "questionNumber": 166,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Simple Machines",
    "year": 2011,
    "difficulty": "Medium",
    "text": "Which of the following statements correctly defines a simple machine? A device",
    "options": [
      {
        "key": "A",
        "text": "which can only carry people from one place to another."
      },
      {
        "key": "B",
        "text": "that can produce electric current."
      },
      {
        "key": "C",
        "text": "with which work can be done easily?"
      },
      {
        "key": "D",
        "text": "which changes the state of rest or of uniform motion of an object?"
      }
    ],
    "optionsMap": {
      "A": "which can only carry people from one place to another.",
      "B": "that can produce electric current.",
      "C": "with which work can be done easily?",
      "D": "which changes the state of rest or of uniform motion of an object?"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "A machine is a device that utilizes energy, such as mechanical, electrical, or thermal energy, to perform work by transferring forces, transmitting motion, or altering the direction of applied forces. Machines are designed to multiply an input force to provide a greater output force, modify the direction or magnitude of a force, or transform energy from one form to another to accomplish specific tasks or functions.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2011
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2011"
  },
  {
    "id": 167,
    "questionNumber": 167,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Simple Machines",
    "year": 2003,
    "difficulty": "Hard",
    "text": "Which of the following statements correctly defines a simple machine? A device",
    "options": [
      {
        "key": "A",
        "text": "That can provide electric current."
      },
      {
        "key": "B",
        "text": "Which can only carry people from one place to another."
      },
      {
        "key": "C",
        "text": "With which work can be done easily?"
      },
      {
        "key": "D",
        "text": "Which changes the state of rest or of uniform motion of an object along a straight line."
      }
    ],
    "optionsMap": {
      "A": "That can provide electric current.",
      "B": "Which can only carry people from one place to another.",
      "C": "With which work can be done easily?",
      "D": "Which changes the state of rest or of uniform motion of an object along a straight line."
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "A simple machine is defined as a device that can make work easier by altering the force applied or the direction in which the force is applied. <span> These machines are the basic building blocks of more complex machines and are often used to multiply force, change the direction of force application, or modify the distance over which a force is applied. Examples of simple machines include levers, pulleys, inclined planes, wedges, screws, and wheels and axles.</span>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2011
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2011"
  },
  {
    "id": 168,
    "questionNumber": 168,
    "subject": "Physics",
    "topic": "Work & Machines",
    "subtopic": "Simple Machines",
    "year": 1982,
    "difficulty": "Easy",
    "text": "Which of the following machines does NOT apply the lever principle?",
    "options": [
      {
        "key": "A",
        "text": "claw hammer"
      },
      {
        "key": "B",
        "text": "wheel barrow"
      },
      {
        "key": "C",
        "text": "single moving pulley"
      },
      {
        "key": "D",
        "text": "sugartongs"
      }
    ],
    "optionsMap": {
      "A": "claw hammer",
      "B": "wheel barrow",
      "C": "single moving pulley",
      "D": "sugartongs"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The machine that does NOT apply the lever principle is: single moving pulley<ul><li> Claw hammer , wheelbarrow , sugartongs , and nutcrackers all apply the lever principle because they involve a fulcrum, effort, and load. </li><li> A single moving pulley changes the direction of the applied force but does not act as a lever, as it doesn't have a fixed point acting as a fulcrum in the way that levers do. Instead, it relies on the tension in the rope to lift objects, not a turning motion around a pivot point like a lever. </li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1982,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1982, 2020"
  },
  {
    "id": 169,
    "questionNumber": 169,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Measurements & Units",
    "year": 2017,
    "difficulty": "Medium",
    "text": "Which of the following units is the S.I. unit of heat capacity?",
    "options": [
      {
        "key": "A",
        "text": "Jkg <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "Jkg-1k <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "J k <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "J g-1K <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "Jkg <sup>-1</sup>",
      "B": "Jkg-1k <sup>-1</sup>",
      "C": "J k <sup>-1</sup>",
      "D": "J g-1K <sup>-1</sup>"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Heat capacity ( C ) is the amount of heat required to change the temperature of a substance by 1 kelvin (K) . Mathematically, \\(C = \\frac{Q}{\\Delta T}\\) The unit is JK <sup>-1</sup> Where: <ul><li> Q is the heat energy (measured in joules, J ) </li><li> ΔT is the temperature change (measured in kelvin, K ) </li></ul> Thus, the unit of heat capacity is J/K (joule per kelvin) .",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2015,
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017, 2018"
  },
  {
    "id": 170,
    "questionNumber": 170,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Measurements & Units",
    "year": 1987,
    "difficulty": "Hard",
    "text": "The inner diameter of a test tube can be measured accurately using a?",
    "options": [
      {
        "key": "A",
        "text": "micrometer screw guage"
      },
      {
        "key": "B",
        "text": "pair of dividers"
      },
      {
        "key": "C",
        "text": "metre rule"
      },
      {
        "key": "D",
        "text": "pair of vernier calipers"
      }
    ],
    "optionsMap": {
      "A": "micrometer screw guage",
      "B": "pair of dividers",
      "C": "metre rule",
      "D": "pair of vernier calipers"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "A Vernier caliper is an instrument used to measure both the outer and inner diameters of a tube.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1987,
      1999,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1987, 1999, 2021"
  },
  {
    "id": 171,
    "questionNumber": 171,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Measurements & Units",
    "year": 2017,
    "difficulty": "Easy",
    "text": "Which of the following is not fundamental?",
    "options": [
      {
        "key": "A",
        "text": "kelvin"
      },
      {
        "key": "B",
        "text": "steradian"
      },
      {
        "key": "C",
        "text": "candela"
      },
      {
        "key": "D",
        "text": "mole"
      }
    ],
    "optionsMap": {
      "A": "kelvin",
      "B": "steradian",
      "C": "candela",
      "D": "mole"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Among the options given, the steradian is not considered a fundamental quantity. The fundamental quantities in the International System of Units (SI) are: Kelvin - fundamental unit of temperature Steradian - derived unit for solid angle Candela - fundamental unit of luminous intensity Mole - fundamental unit of amount of substance",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2018"
  },
  {
    "id": 172,
    "questionNumber": 172,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Measurements & Units",
    "year": 2025,
    "difficulty": "Medium",
    "text": "Which of the following are the correct SI units of the quantities indicated? I. N (Force) II. N/m (Torque) Iii. watt (Power) Iv. kgms <sup>-2</sup> (Momentum)",
    "options": [
      {
        "key": "A",
        "text": "I and ii only"
      },
      {
        "key": "B",
        "text": "I, ii and iii only"
      },
      {
        "key": "C",
        "text": "I, ii, and iv only"
      },
      {
        "key": "D",
        "text": "I and iii only"
      }
    ],
    "optionsMap": {
      "A": "I and ii only",
      "B": "I, ii and iii only",
      "C": "I, ii, and iv only",
      "D": "I and iii only"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "i. N (Force): Correct - The SI unit for force is the Newton (N). II. N/m (Torque): Incorrect - Torque is measured in Newton-meters (N·m). Note that it's important to distinguish between a slash (/) indicating division and the unit for torque (N·m). iii. watt (Power): Correct - The SI unit for power is the watt (W). iv. kgms<sup>-2</sup> (Momentum): Incorrect - The correct SI unit for momentum is kg m/s (kilogram meter per second).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1988,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1988, 2025"
  },
  {
    "id": 173,
    "questionNumber": 173,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Dimensional Analysis",
    "year": 1995,
    "difficulty": "Hard",
    "text": "Which of the following is the dimension of pressure?",
    "options": [
      {
        "key": "A",
        "text": "ML <sup>-1</sup> T <sup>-2</sup>"
      },
      {
        "key": "B",
        "text": "MLT <sup>-2</sup>"
      },
      {
        "key": "C",
        "text": "ML <sup>2</sup> T <sup>-3</sup>"
      },
      {
        "key": "D",
        "text": "ML <sup>-3</sup>"
      }
    ],
    "optionsMap": {
      "A": "ML <sup>-1</sup> T <sup>-2</sup>",
      "B": "MLT <sup>-2</sup>",
      "C": "ML <sup>2</sup> T <sup>-3</sup>",
      "D": "ML <sup>-3</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Pressure is the force applied per unit area. It is a scalar quantity. Formula : \\(\\text{Pressure} (P) = \\frac{\\text{Force} (F)}{\\text{Area} (A)}\\) Dimensions : <ul> <li>Force F has the dimension MLT <sup>-2</sup>.</li> <li>Area A has the dimension L <sup>2</sup>.</li> </ul> Pressure = MLT⁻² / L² = ML⁻¹T⁻² Final answer: ML⁻¹T⁻²",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2024"
  },
  {
    "id": 174,
    "questionNumber": 174,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Position, Distance & Disp",
    "year": 1978,
    "difficulty": "Easy",
    "text": "A man walks 1km due east and then 1km due north. His displacement is",
    "options": [
      {
        "key": "A",
        "text": "1 km N 15<sup>o</sup> E"
      },
      {
        "key": "B",
        "text": "1 km N 30<sup>o</sup> E"
      },
      {
        "key": "C",
        "text": "\\(\\sqrt{2km} \\ N \\ 45^oE \\)"
      },
      {
        "key": "D",
        "text": "\\(\\sqrt{2km} \\ N \\ 60^oE \\)"
      }
    ],
    "optionsMap": {
      "A": "1 km N 15<sup>o</sup> E",
      "B": "1 km N 30<sup>o</sup> E",
      "C": "\\(\\sqrt{2km} \\ N \\ 45^oE \\)",
      "D": "\\(\\sqrt{2km} \\ N \\ 60^oE \\)"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "2 km N 45 <sup>∘</sup> E The man walks 1 km east and then 1 km north. This forms a right-angled triangle with the eastward and northward displacements as the two perpendicular sides. Calculate the magnitude of the displacement: The displacement is the hypotenuse of the right-angled triangle. Using the Pythagorean theorem: \\(Displacement=\\sqrt{(1 km)^2+(1 km)^2} \\\\=\\sqrt{1+1}=\\sqrt2 km\\) The displacement makes an angle of 45 <sup>∘</sup> north of east because the eastward and northward displacements are equal in magnitude.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1973,
      1978
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1973, 1978)"
  },
  {
    "id": 175,
    "questionNumber": 175,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Dimensional Analysis",
    "year": 1995,
    "difficulty": "Medium",
    "text": "The equation P <sup>x</sup> V <sup>y</sup> T <sup>z</sup> = constant in Charles' law when",
    "options": [
      {
        "key": "A",
        "text": "x = 1, y = -1, z = 1"
      },
      {
        "key": "B",
        "text": "x = 0, y = 1, z = -1"
      },
      {
        "key": "C",
        "text": "x = 1, y = 0, z = -1"
      },
      {
        "key": "D",
        "text": "x = 0, y = 1, z = 1"
      }
    ],
    "optionsMap": {
      "A": "x = 1, y = -1, z = 1",
      "B": "x = 0, y = 1, z = -1",
      "C": "x = 1, y = 0, z = -1",
      "D": "x = 0, y = 1, z = 1"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Charles' Law states that: \\(V \\propto T \\quad \\text{(at constant pressure)} \\) This means that volume (V) is directly proportional to temperature (T) , provided that the pressure (P) remains constant. Mathematically: \\(\\frac{V}{T} = \\text{constant}\\) Rewriting this in terms of powers for the equation P <sup>x</sup> V <sup>y</sup> T <sup>z</sup> = constant: <ul><li> Since pressure (P) is constant in Charles' Law, its power x=0. .</li><li> Volume (V) is directly proportional, so its power y=1. .</li><li> Temperature (T) is inversely related when rearranging, so its power z=−1 .</li></ul> Thus, the correct values are: \\(x = 0, y = 1, z = -1\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 176,
    "questionNumber": 176,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Dimensional Analysis",
    "year": 2018,
    "difficulty": "Hard",
    "text": "The dimension of Newton's gravitational constant is M <sup>x</sup> L <sup>y</sup> T <sup>z</sup>, the value of x+y/z is",
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
        "text": "-2"
      }
    ],
    "optionsMap": {
      "A": "1",
      "B": "-1",
      "C": "2",
      "D": "-2"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "From Newton's Law of Universal Gravitation \\(F = \\frac{GM_1M_2}{r^2}\\)\\(G = \\frac{Fr^2}{M_1M_2}\\)\\(G = \\frac{[MLT^{-2}] \\times [L^2]}{[M]^2}\\) G = M <sup>-1</sup> L <sup>3</sup> T <sup>-2</sup> Equate this to M <sup>x</sup> L <sup>y</sup> T <sup>z</sup> M <sup>x</sup> L <sup>y</sup> T <sup>z</sup> = M <sup>-1</sup> L <sup>3</sup> T <sup>-2</sup> x = -1, y = 3 and z = -2 x+y / z = -1+3 / -2 = 2/-2 = -1",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 177,
    "questionNumber": 177,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Dimensional Analysis",
    "year": 1984,
    "difficulty": "Easy",
    "text": "For which of the under listed quantities is the derived unit ML <sup>2</sup> T <sup>-2</sup> correct? <ol start=\"1\" style=\"list-style-type:upper-roman\"><li> moment of a force .</li><li> work .</li><li> acceleration .</li></ol>",
    "options": [
      {
        "key": "A",
        "text": "i only"
      },
      {
        "key": "B",
        "text": "ii only"
      },
      {
        "key": "C",
        "text": "iii only"
      },
      {
        "key": "D",
        "text": "i and ii"
      }
    ],
    "optionsMap": {
      "A": "i only",
      "B": "ii only",
      "C": "iii only",
      "D": "i and ii"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "i and ii , because both the moment of a force and work have the derived unit. Moment = Force x Distance = m x a x d = (kg x ms <sup>-2</sup> ) x (m) = ML <sup>2</sup> T <sup>-2</sup> Work = Force x Distance = m x a x d = (kg x ms <sup>-2</sup> ) x (m) = ML <sup>2</sup> T <sup>-2</sup>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 178,
    "questionNumber": 178,
    "subject": "Physics",
    "topic": "Measurements",
    "subtopic": "Position, Distance & Disp",
    "year": 1987,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABlCAMAAADTcTmKAAAAAXNSR0IArs4c6QAAACRQTFRF////9PT06Ojo29vbz9DQwcHCsrKzpaWnlZWWg4SFbm5vVVVW5K2+ngAACHZJREFUeNrtm9tu4zoMRbl5p/z//3uSOr5OZMducdCHrpeB4bpYoVhph8nQH3/88ccfUPodMNPHcNL/BWiDbC1V6WOQ/5ul8fZSbkvTT0ozbXBsLw9LK3ZFGnQfuWJp8nPSfGGJoTvLvfSRpR1a8oE0RIQ30kJrAFrDWy34N0vbt2TvO1tWhYBmQg5/VV0tbd9S95YYYfADCe7tehrKrMYraT0sbf1QaUEQHw1HRENEVU1tpMyU3sAijF2num0tL0kbv7ME4Qs1fiEP1FLVVqSqygNmPHF6T4aG0hY77trCWT9gWWWzyVD0gactqFqI8Gj4ttV6BwlLrqUZRBqfS4OcJ8Ev3PglaE8iR7+xhKzOAGgCV/6oFwSbw1PNmCR6LxhPSsCrRQ4bDV9EzIbMgBjNnFueSi8wVGikNI04123IHMzrNW6+WeJwXa/xfhf7jqUz9YBbS7ykq4S4FkM1s/JFUUXKXoYjKp0D4vvSdiAdlS4vg6EJoWZBEWYEg1aEnp69fcu4uF92AFvy9NOpWYSio18VdqW0caO059LqKnMp0zSICkfPuv9gae9mU1Z3w3SmK86kLb7TtXxRum9tqQcxT/WCNPn/k029ZW2l5SjWaH6jH+ynpCNkG0zi8Fmp2/1wbon18arBwvQea1nekb6ZTfsBapIe5dRGwxGxkPXx6quYt8dTdXPP7X427QcofmK2OrXcs/Yxb0kAIDh10VblRzHvmjTPhiwi7vIS9HhQlS8iwj0GGwXRiSYdwGzyANMlkX6eTUFw3iT58Mkwn1TFS/AVRnmd89ASh38fHWAqouYYr9RAGvtnN0m+GOson7bqwmytXoqqIsx6+GYVXnZHmjiqKpi+sBIiycUQzByrlLeLeaoaJsIPANYos2sBShof7pddWOabQ4YQ52Joalaz4Ff1yhgA9rvYU9nRf4fd6dpI3AjUoAUMY2KaUx4zAGdak+9iHiQq+EY2RdMb2dQEK2nRRsizmLeXhngF3wtQVrgh7WbqmC+UKK/FPPYI43vDHBBF4kagrpaNl3HrRWnNUfn2OyqU9QcQHazK1XAz5rFlGd/JIoulFl/Npl5KO/LwWc2VcoTHt4d7GW/ecIKgBga9Q532hBzGvEkaFukCvzncWyy5hACAzVieqOgTD1V+L50iYnyaTfcxDxrhciv2T+lExP2pqFk6WU7IAwsRdPJSZpZ9HvO4Vspn0nABlhNV3HVisRStlNcEigHgNDFJczOTKzFvVNalH9bhJGQS1Cext5QX/ABqo6GUHJ6fezg25yL0POZpZOicQHNqw5E0nREV91FwLGH3wIzEcnkujTTzpSGsvRlBAlgWWVtVzI6LpXzBoS9BXBnmoOxSoK7MSJ/rPoAkR78R1dQ1NYTKCAszuwCgGbs3J9PiK4HaTVhlvhiYuHSFaM5NyODIJgcJ4XLMm8g42+T3u7LotDP44ISSqQn3zyJSUvtb7/25KZd+nk2RIEIulfaDmAdPobw9gjyspRU+H/amAlabH8z9s2tnCrvdD0e1RPnn0pa5HnzgIOZ5yukI8v4HjdLYPs6m3oadZe6f3WQrj1ulPc/5kRekq1I/iHlWr3/zW6XtS6M21TqKeZZuHqAV8U7aUn9gBOkHczK2QVlGVHoxbzEMOYt5VvrZCDJOs+nqgHV76s20WKc8sZBepV3Vk49ink3O/RFk/1LmIPok3sa8F2zbmMd2OK1xOoh57KRldC6NKebNi6wSpmvCJ0d+ogYc7kQ92NyMaUT8XczTsv0IEp/EPBUJW8c89Hf1C9l01xDwaLyPecjydZRvo+C9mNev5aVsyg/cXxfKTUkSqyUWH0rXNNN1lHcBvhWgAOKLw15pVdXm25yYYt5Ly1uOAQ9fENVhzDO9emBao+DOTtQBJiI2e7iAUBh5nSkOWlNy60s+XS0M5rg2goSzsTqNREsnypVD6f7ZVBKGdiz1ehbxQUnlyrAXgWDEMtoTosTaed8AYVTOfjWb9mvJBbbkC19EQFqLyOkKm5gnZf82QDhZM+lY3glQTOBAN09BaE9VZcYu5s3O+Ffag9AK0MXy+5/hqqM7N0UbPTZ3+AGtCZ6dOyNIc6LE7dLutQgRvJSWxoNLwtXM3IdhqK1hhsnbaR6XY5T/dwSJ5ZN/fCubystQTVUtw93jC38Qbg9Uh6HtSi2iXr6V1sW5P4IsviM9RpPp08XMWBzX346ZwJNypi2At2b/nOqo6KQtqW3R/CBAMY+DHTN/Ep7hs9+TWXA5vf6FQTu8lQt2MW907o8gn2CxXNpQNM3MRyLCY1vBSXEx7MNMGkzvsI0yu4PUUYH+CBIA5kW2cl+vsXfWGAQ6wfhpQxPNOLKB3gDQitJ0kohgmgDHYuju0eKLfhf2BQVEIr3KDiYlBRqxFsw8gM7AAGvEQ7N5kcMj3VeG3TY8x7LIIrRzt1kUNZ3WPJJIk07hgWQgZIyClw0RyWTesYJIQzNt9A61jCyaEmdUGxjOdAoG1kbEzF1BEEF66uaVUtK4d3/AIJ0lzxpaNGo2v4aGqlQ6JSL8ZIWJwrNjzbDyRs276d0HxXtpkSwuK8zr4gj/qNSqoCO0kTRuRh1co1FF7zWFZ2ij94iS6EoSxAB9AM673hpV0nvU8Lxt9BYPZw4X6gO6yX1paZlcntx5WJiImf5vMICHbnuwm41qvwpuQuYBegsAEIF+GRAQGH//n/CPHwVExPSreYUAKNuD6Z2E+m/VjazwTBmUKBs3//IthgrSfqm02cCSRa0RWqPmokTSKNzJi34nkIEoinIwzYGq3ImskQ1JOtAvhQcibxQ2pA5UAeanrdog2n6vNMgaJYaUgVtZCqHBIuBBvxQZhKwkWFhcVEWIyBwAHPRLAWPa8mhJIgIi/B3/f/yx5j8q30QbTjfOfgAAAABJRU5ErkJggg==\" style=\"height:101px; width:180px\"/> The velocity time graph above describes the motion of a particle between two points P and Q. What is the distance between P and Q?",
    "options": [
      {
        "key": "A",
        "text": "17.0m"
      },
      {
        "key": "B",
        "text": "18.0m"
      },
      {
        "key": "C",
        "text": "22.5m"
      },
      {
        "key": "D",
        "text": "30.0m"
      }
    ],
    "optionsMap": {
      "A": "17.0m",
      "B": "18.0m",
      "C": "22.5m",
      "D": "30.0m"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Distance = area under the graph. \\(\\frac{1}{2} \\times 1 \\times 4\\) \\(+ \\frac{1}{2} \\times (4 + 6) \\times 1\\) \\(+ \\frac{1}{2} \\times (2 + 6) \\times 0.5\\) =18.0 Alternatively... (0 to 1s): Triangle <ul> <li>Base = 1s, Height = 4 m/s</li> <li>Area = ½ × 1 × 4 = 2m</li> </ul> (1s to 2s): Rectangle + Triangle <ul> <li>Rectangle: 1 × 4 = 4m</li> <li>Triangle on top: ½ × 1 × 2 = 1m</li> <li>Total = 4 + 1 = 5m</li> </ul> (2s to 3.5s): Rectangle <ul> <li>Base = 1.5s, Height = 6 m/s</li> <li>Area = 1.5 × 6 = 9m</li> </ul> 4 (3.5s to 4s): Rectangle + Triangle <ul> <li>Rectangle: 0.5 × 2 = 1m</li> <li>Triangle on top: ½ × 0.5 × 4 = 1m</li> <li>Total = 1 + 1 = 2m</li> </ul> Total distance = 2 + 5 + 9 + 2 = 18m Answer: B: 18.0m",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 179,
    "questionNumber": 179,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Vapors",
    "year": 1981,
    "difficulty": "Hard",
    "text": "A vapour is said to be saturated when?",
    "options": [
      {
        "key": "A",
        "text": "all molecules are moving with the same speed"
      },
      {
        "key": "B",
        "text": "more molecules return to the liquid than leave it"
      },
      {
        "key": "C",
        "text": "a dynamic equilibrium exists between the liquid molecules and the vapour molecules at a given temperature"
      },
      {
        "key": "D",
        "text": "the vapour pressure is atmospheric"
      }
    ],
    "optionsMap": {
      "A": "all molecules are moving with the same speed",
      "B": "more molecules return to the liquid than leave it",
      "C": "a dynamic equilibrium exists between the liquid molecules and the vapour molecules at a given temperature",
      "D": "the vapour pressure is atmospheric"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "a dynamic equilibrium exists between the liquid molecules and the vapour molecules at a given temperature.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2010
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2010"
  },
  {
    "id": 180,
    "questionNumber": 180,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Vapors",
    "year": 2024,
    "difficulty": "Easy",
    "text": "The saturated vapour pressure of a liquid increases as the",
    "options": [
      {
        "key": "A",
        "text": "Volume of the liquid increases"
      },
      {
        "key": "B",
        "text": "Volume of the liquid decreases"
      },
      {
        "key": "C",
        "text": "Temperature of the liquid increases"
      },
      {
        "key": "D",
        "text": "Temperature of the liquid decreases."
      }
    ],
    "optionsMap": {
      "A": "Volume of the liquid increases",
      "B": "Volume of the liquid decreases",
      "C": "Temperature of the liquid increases",
      "D": "Temperature of the liquid decreases."
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Temperature of the liquid increases Saturated vapor pressure is the pressure exerted by a vapor when it is in equilibrium with its liquid at a given temperature. As the temperature of a liquid increases, the kinetic energy of its molecules also increases. This causes more molecules to escape from the liquid into the vapor phase, which leads to an increase in vapor pressure.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1991,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1991, 2024"
  },
  {
    "id": 181,
    "questionNumber": 181,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Vapors",
    "year": 2022,
    "difficulty": "Medium",
    "text": "When the vapour of a substance is in equilibrium with its own liquid, it is said to be",
    "options": [
      {
        "key": "A",
        "text": "gaseous"
      },
      {
        "key": "B",
        "text": "saturated"
      },
      {
        "key": "C",
        "text": "diffused"
      },
      {
        "key": "D",
        "text": "liquefied"
      }
    ],
    "optionsMap": {
      "A": "gaseous",
      "B": "saturated",
      "C": "diffused",
      "D": "liquefied"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "When the vapor of a substance is in equilibrium with its own liquid, it is in a state of saturation. In this state, the rate of evaporation of the liquid is equal to the rate of condensation of vapor back into the liquid. The term \"saturated\" indicates that the system is at its maximum capacity for holding vapor at a given temperature and pressure. At saturation, the vapor and liquid phases coexist, and any further addition of heat or removal of vapor will result in a change of phase (either more vapor forming or more liquid condensing). This condition is crucial in various thermodynamic processes and plays a role in phenomena such as the formation of clouds, where water vapor in the air reaches saturation and condenses into visible water droplets.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2022"
  },
  {
    "id": 182,
    "questionNumber": 182,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Vapors",
    "year": 1979,
    "difficulty": "Hard",
    "text": "When the vapour of a substance is in equilibrium with its own liquid, it is said to be",
    "options": [
      {
        "key": "A",
        "text": "gaseous"
      },
      {
        "key": "B",
        "text": "unsaturated"
      },
      {
        "key": "C",
        "text": "liquefied"
      },
      {
        "key": "D",
        "text": "diffused"
      }
    ],
    "optionsMap": {
      "A": "gaseous",
      "B": "unsaturated",
      "C": "liquefied",
      "D": "diffused"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "saturated. When the vapour of a substance is in equilibrium with its own liquid, it means that the rate of evaporation of the liquid equals the rate of condensation of the vapour. At this point, the vapour is said to be saturated . A saturated vapour contains the maximum amount of vapour possible at a given temperature and pressure. Why the Other Options Are Wrong: <ul><li> gaseous: This is incorrect because \"gaseous\" simply describes the state of matter and does not imply equilibrium with the liquid phase. </li><li> unsaturated: This is incorrect because an unsaturated vapour is one that has not yet reached equilibrium with its liquid phase and can still hold more vapour. </li><li> liquefied: This is incorrect because \"liquefied\" refers to the process of turning a gas into a liquid, not the state of equilibrium between vapour and liquid. </li><li> diffused: This is incorrect because \"diffused\" refers to the spreading out of particles, not the state of equilibrium between vapour and liquid. </li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2022"
  },
  {
    "id": 183,
    "questionNumber": 183,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Humidity",
    "year": 2005,
    "difficulty": "Easy",
    "text": "When the temperature difference between the wet and dry bulbs of a hygrometer is high, this indicates that",
    "options": [
      {
        "key": "A",
        "text": "The relative humidity is high"
      },
      {
        "key": "B",
        "text": "The relative humidity is low"
      },
      {
        "key": "C",
        "text": "it is about to rain"
      },
      {
        "key": "D",
        "text": "There is plenty of sunshine"
      }
    ],
    "optionsMap": {
      "A": "The relative humidity is high",
      "B": "The relative humidity is low",
      "C": "it is about to rain",
      "D": "There is plenty of sunshine"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "In a hygrometer, the wet-bulb and dry-bulb temperatures are used to determine the relative humidity. When there is a significant temperature difference between the wet-bulb and dry-bulb readings, it indicates that the air is dry, and the relative humidity is low.The wet-bulb temperature is lower than the dry-bulb temperature when evaporation from the wet bulb cools the thermometer, and a greater temperature difference suggests that more evaporation is taking place due to drier air.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2000,
      2005
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2000, 2005)"
  },
  {
    "id": 184,
    "questionNumber": 184,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Humidity",
    "year": 1979,
    "difficulty": "Medium",
    "text": "The temperature at which the water vapour present in the air saturates the air and begins to condense is known as",
    "options": [
      {
        "key": "A",
        "text": "boiling point"
      },
      {
        "key": "B",
        "text": "melting point"
      },
      {
        "key": "C",
        "text": "triple point"
      },
      {
        "key": "D",
        "text": "dew point"
      }
    ],
    "optionsMap": {
      "A": "boiling point",
      "B": "melting point",
      "C": "triple point",
      "D": "dew point"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "dew point. The dew point is the temperature at which the air becomes saturated with water vapour, and condensation begins to occur. At this temperature, the air can no longer hold all the water vapour it contains, and the excess vapour condenses into liquid water (e.g., dew, fog, or clouds). Why the Other Options Are Wrong: <ul><li> boiling point: This is the temperature at which a liquid (e.g., water) turns into vapour. It is not related to the condensation of water vapour in the air. </li><li> melting point: This is the temperature at which a solid turns into a liquid. It is unrelated to the condensation of water vapour. </li><li> triple point: This is the specific temperature and pressure at which the three phases of a substance (solid, liquid, and gas) coexist in equilibrium. It is not related to the condensation of water vapour in the air. </li><li> critical temperature: This is the temperature above which a gas cannot be liquefied, no matter how much pressure is applied. It is unrelated to the condensation of water vapour in the air. </li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 185,
    "questionNumber": 185,
    "subject": "Physics",
    "topic": "Vapours",
    "subtopic": "Humidity",
    "year": 1983,
    "difficulty": "Hard",
    "text": "Which of the following may be used to determine the relative humidity in a physics laboratory I. Manometer II. Wet-and-Dry Bulb Hygrometer III. Hair Hygrometer IV. A Hydrometer",
    "options": [
      {
        "key": "A",
        "text": "I Only"
      },
      {
        "key": "B",
        "text": "II and III Only"
      },
      {
        "key": "C",
        "text": "II Only"
      },
      {
        "key": "D",
        "text": "III Only"
      }
    ],
    "optionsMap": {
      "A": "I Only",
      "B": "II and III Only",
      "C": "II Only",
      "D": "III Only"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "II and III Only I. Manometer:",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 186,
    "questionNumber": 186,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "Capacitors",
    "year": 2022,
    "difficulty": "Easy",
    "text": "<ol style=\"list-style-type:upper-roman\"> <li>the area of the plate .</li> <li>the distance separating the plate .</li> <li>the permittivity of dielectric .</li> <li>the mass of the plate .</li> </ol> The capacitance of a capacitor is dependent on which of the above?",
    "options": [
      {
        "key": "A",
        "text": "I,II,III, and IV"
      },
      {
        "key": "B",
        "text": "I and II only"
      },
      {
        "key": "C",
        "text": "II and III only"
      },
      {
        "key": "D",
        "text": "I, II and III only"
      }
    ],
    "optionsMap": {
      "A": "I,II,III, and IV",
      "B": "I and II only",
      "C": "II and III only",
      "D": "I, II and III only"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The capacitance ( of a capacitor is given by the formula: C = εA​ ÷ d Where: C is the capacitance, ε is the permittivity of the dielectric material between the plates, A is the area of one of the capacitor plates, d is the separation distance between the plates. The mass of the plate (IV) is not a factor in determining the capacitance of the capacitor.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 187,
    "questionNumber": 187,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "Capacitors",
    "year": 2024,
    "difficulty": "Medium",
    "text": "The capacitance of a parallel plate capacitor",
    "options": [
      {
        "key": "A",
        "text": "decreases when the separation between the plates decreases"
      },
      {
        "key": "B",
        "text": "increases when the potential difference between the plates is increased"
      },
      {
        "key": "C",
        "text": "is greater without a dielectric between the plates than with a dielectric"
      },
      {
        "key": "D",
        "text": "is greater with a dielectric between the plates than without a dielectric"
      }
    ],
    "optionsMap": {
      "A": "decreases when the separation between the plates decreases",
      "B": "increases when the potential difference between the plates is increased",
      "C": "is greater without a dielectric between the plates than with a dielectric",
      "D": "is greater with a dielectric between the plates than without a dielectric"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The capacitance of a parallel plate capacitor is greater with a dielectric between the plates than without a dielectric. This is because the dielectric material increases the capacitance by reducing the effective electric field between the plates and increasing the amount of charge that can be stored.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2024"
  },
  {
    "id": 188,
    "questionNumber": 188,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "Capacitors",
    "year": 2016,
    "difficulty": "Hard",
    "text": "The capacitance of a parallel plate capacitor is 20μF in air and 60μF in the presence of a dielectric. What is the dielectric constant?",
    "options": [
      {
        "key": "A",
        "text": "0.3"
      },
      {
        "key": "B",
        "text": "6.0"
      },
      {
        "key": "C",
        "text": "2.0"
      },
      {
        "key": "D",
        "text": "3.0"
      }
    ],
    "optionsMap": {
      "A": "0.3",
      "B": "6.0",
      "C": "2.0",
      "D": "3.0"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "To find the dielectric constant, we can use the formula for the capacitance of a parallel plate capacitor: C = εA / d Where: C is the capacitance ε is the permittivity of the material (dielectric constant * permittivity of free space) A is the area of the plates d is the distance between the plates Since the area and distance remain constant, we can write the ratio of the capacitances with and without the dielectric as: The dielectric constant = 60μF / 20μF = 3",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 189,
    "questionNumber": 189,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "Capacitors",
    "year": 2011,
    "difficulty": "Easy",
    "text": "The capacitance of a parallel plate capacitor is 20 μF in air and 60 μF in the presence of a dielectric. What is the dielectric constant?",
    "options": [
      {
        "key": "A",
        "text": "2.0"
      },
      {
        "key": "B",
        "text": "0.3"
      },
      {
        "key": "C",
        "text": "6.0"
      },
      {
        "key": "D",
        "text": "3.0"
      }
    ],
    "optionsMap": {
      "A": "2.0",
      "B": "0.3",
      "C": "6.0",
      "D": "3.0"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Capacitance, \\(C = \\frac{\\varepsilon_0 A}{d}\\) Since it is the same capacitor, the area and separation are the same.\\(\\frac{C_1}{\\varepsilon_0} = \\frac{C_2}{\\varepsilon_{o2}}\\)\\(\\frac{20}{1} = \\frac{60}{\\varepsilon_{o2}}\\) The dielectric constant, \\(\\varepsilon_{o2} = \\frac{60}{20} = 3\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 190,
    "questionNumber": 190,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "the Solar Cell",
    "year": 2009,
    "difficulty": "Medium",
    "text": "A. List two properties of cathode rays. B. Explain how the intensity and energy of cathode rays may be increased.",
    "options": [
      {
        "key": "A",
        "text": "A. Properties of cathode rays <ul style=\"list-style-type:disc;\"><li> They are negatively charged particles. .</li><li> Their field free space travel in straight line. .</li><li> They are deflected by electric and magnetic fields. .</li></ul>"
      },
      {
        "key": "B",
        "text": "B. The intensity of the cathode rays may be increased by increasing the current through the filament. The energy of the cathode rays may be increased by increasing the p.d. between the anode and the cathode i.e., the anode potential."
      }
    ],
    "optionsMap": {
      "A": "A. Properties of cathode rays <ul style=\"list-style-type:disc;\"><li> They are negatively charged particles. .</li><li> Their field free space travel in straight line. .</li><li> They are deflected by electric and magnetic fields. .</li></ul>",
      "B": "B. The intensity of the cathode rays may be increased by increasing the current through the filament. The energy of the cathode rays may be increased by increasing the p.d. between the anode and the cathode i.e., the anode potential.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under the Solar Cell.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2009
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2004, 2009"
  },
  {
    "id": 191,
    "questionNumber": 191,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "the Solar Cell",
    "year": 2020,
    "difficulty": "Hard",
    "text": "A parallel plate capacitor is charged, and the charging battery subsequently disconnected. If the plates of the capacitor are moved farther apart by means of insulating handle, the",
    "options": [
      {
        "key": "A",
        "text": "Capacitance would increase."
      },
      {
        "key": "B",
        "text": "capacitance would decrease."
      },
      {
        "key": "C",
        "text": "charge on the capacitor would increase."
      },
      {
        "key": "D",
        "text": "charge on the capacitor would decrease"
      }
    ],
    "optionsMap": {
      "A": "Capacitance would increase.",
      "B": "capacitance would decrease.",
      "C": "charge on the capacitor would increase.",
      "D": "charge on the capacitor would decrease"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "When the plates of a parallel plate capacitor are moved farther apart, the distance between the plates increases. The capacitance ( of a parallel plate capacitor is given by the formula: C = ε0⋅A / d where: • C is the capacitance, • ε0 is the permittivity of free space, • A is the area of the plates, and • d is the separation between the plates. As the plates are moved farther apart (d increases), the capacitance decreases.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 192,
    "questionNumber": 192,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "the Solar Cell",
    "year": 2018,
    "difficulty": "Easy",
    "text": "In a Daniel cell, the depolarizer, cathode and anode respectively are",
    "options": [
      {
        "key": "A",
        "text": "Copper sulphate, Copper and Zinc"
      },
      {
        "key": "B",
        "text": "Manganese dioxide, Copper and Zinc"
      },
      {
        "key": "C",
        "text": "Sulphuric acid, Lead oxide and Lead"
      },
      {
        "key": "D",
        "text": "Potassium hydroxide, Nickel and Zinc"
      }
    ],
    "optionsMap": {
      "A": "Copper sulphate, Copper and Zinc",
      "B": "Manganese dioxide, Copper and Zinc",
      "C": "Sulphuric acid, Lead oxide and Lead",
      "D": "Potassium hydroxide, Nickel and Zinc"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The Daniel cell operates with the following components: Anode: Zinc rod dipping in zinc sulphate solution. At the anode, zinc undergoes oxidation: Zn (s) → Zn²⁺ (aq) + 2e⁻ Cathode: Copper rod dipping in copper sulphate solution. At the cathode, copper ions undergo reduction: Cu²⁺ (aq) + 2e⁻ → Cu (s) Electrolyte: Both zinc sulphate and copper sulphate solutions are connected by a salt bridge, allowing ionic flow to complete the circuit. Depolarizer: No external depolarizer is needed in a Daniel cell. The copper ions themselves act as the depolarizer by accepting electrons at the cathode, preventing the buildup of hydrogen gas and maintaining efficient cell operation.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 193,
    "questionNumber": 193,
    "subject": "Physics",
    "topic": "Capacitors",
    "subtopic": "the Solar Cell",
    "year": 2010,
    "difficulty": "Medium",
    "text": "Capacitors are used in the following devices, except",
    "options": [
      {
        "key": "A",
        "text": "water pumping machines"
      },
      {
        "key": "B",
        "text": "ceiling fans"
      },
      {
        "key": "C",
        "text": "electric irons"
      },
      {
        "key": "D",
        "text": "television sets"
      }
    ],
    "optionsMap": {
      "A": "water pumping machines",
      "B": "ceiling fans",
      "C": "electric irons",
      "D": "television sets"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Electric irons, while possibly containing small capacitors for some electronic control modules in modern models, don't primarily rely on capacitors for their core operation. The heating element in an electric iron function through direct resistive heating and doesn't involve capacitor functionality.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 194,
    "questionNumber": 194,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Propagation of Light",
    "year": 2013,
    "difficulty": "Hard",
    "text": "A man 1.5m tall is standing 3m in front of a pinhole camera whose distance between the hole and the screen is 0.1m. What is the height of the image of the man on the screen?",
    "options": [
      {
        "key": "A",
        "text": "1.00m"
      },
      {
        "key": "B",
        "text": "0.05m"
      },
      {
        "key": "C",
        "text": "0.15m"
      },
      {
        "key": "D",
        "text": "0.30m"
      }
    ],
    "optionsMap": {
      "A": "1.00m",
      "B": "0.05m",
      "C": "0.15m",
      "D": "0.30m"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Parameters given: Object height, H<sub>o</sub> = 1.5m Object distance, u = 3.0m Image distance, V = 0.1m Image Height, H<sub>i</sub> = ? v/u = H<sub>i</sub> / H<sub>o</sub> 0.1/3 = H<sub>i</sub> / 1.5 H<sub>i</sub> = 0.05m",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 195,
    "questionNumber": 195,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Propagation of Light",
    "year": 2008,
    "difficulty": "Easy",
    "text": "A. On what principle does lighting in a fluorescent tube operate? B. State two factors which determine the colour of light produced in a fluorescent tube.",
    "options": [
      {
        "key": "A",
        "text": "A. Fluorescent tube operates on the principle of electrical discharge through a gas at very low pressure and very high voltage.N.B: Gases conduct electricity only at LOW PRESSURE and HIGH VOLTAGE"
      },
      {
        "key": "B",
        "text": "B. Factors on which the colour of light in a fluorescent tube depends The colour of light in a fluorescent tube depends on the following:<ol><li>The coating (internal) of the tube.</li><li>Nature of the gas in the tube, (gas type).</li></ol>"
      }
    ],
    "optionsMap": {
      "A": "A. Fluorescent tube operates on the principle of electrical discharge through a gas at very low pressure and very high voltage.N.B: Gases conduct electricity only at LOW PRESSURE and HIGH VOLTAGE",
      "B": "B. Factors on which the colour of light in a fluorescent tube depends The colour of light in a fluorescent tube depends on the following:<ol><li>The coating (internal) of the tube.</li><li>Nature of the gas in the tube, (gas type).</li></ol>",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Propagation of Light.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2008,
      2012
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2008, 2012"
  },
  {
    "id": 196,
    "questionNumber": 196,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Fibre Optics",
    "year": 2021,
    "difficulty": "Medium",
    "text": "A. State the scientific principle underlying the operation of fibre optics. B. Explain each of the following term used in fibre optics: I. Core Ii. cladding.",
    "options": [
      {
        "key": "A",
        "text": "A. The fibre optic is a device which works on the principle of total internal reflection by which light signal can be transmitted from one place to another with a negligible loss of energy."
      },
      {
        "key": "B",
        "text": "B. Parts of an Optical Fiber i. Core The core is the central light-carrying portion of the fiber. It is made of glass or plastic and has a higher refractive index than the cladding to guide the light signals effectively. ii. Cladding The cladding is one or more layers of material surrounding the core. It has a lower refractive index, which confines the light within the core through total internal reflection."
      }
    ],
    "optionsMap": {
      "A": "A. The fibre optic is a device which works on the principle of total internal reflection by which light signal can be transmitted from one place to another with a negligible loss of energy.",
      "B": "B. Parts of an Optical Fiber i. Core The core is the central light-carrying portion of the fiber. It is made of glass or plastic and has a higher refractive index than the cladding to guide the light signals effectively. ii. Cladding The cladding is one or more layers of material surrounding the core. It has a lower refractive index, which confines the light within the core through total internal reflection.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Fibre Optics.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2016,
      2021
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2016, 2021)"
  },
  {
    "id": 197,
    "questionNumber": 197,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Reflection of Light",
    "year": 1999,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIALYAlgMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQGAgMBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA78AAnFFOogAAAAADz6ln138DfL8H1HLXxTzsHGdefQAAAAAmn03fzvpi9C9xDtcU7KWJPnYaqXAdCXgAAAAAIN75mbDsxHm5F3EXfPtHL9rj2HoAAAAADFtwn7tw7iLai2gAAAAAABIr8kWakS2QrXAdOWwAAAAAAMG/Ea/WLaQ7kW0AAAAAAAMW3Gfm3BvItqLaAAAAAAGXV8yJl+33MWmjvOLrerhBtZBvZ9AAAAAA5/oBw13XMJtnx0By3joPBwHY7t5h3AAAAAA8exwlDq4ZiLRw3T3PqYdwAAAAAAATtgfUAAH/xABCEAABBAADAgoGBggHAAAAAAABAgMEBQAREhMhBhAUFTAxNUF0shYiUVV1kzJAVHGBoyAmQlZlcpTSJCUzYYOEkf/aAAgBAQABPwD6xbzF19c9LSgKLZRuPeCoDFfawLJGqM+kqCcy2dyx0y1BCFLOeSQScgSd3sAxW20CxRrjPgr05ls7lJ4+FHYM7/j84xNpIr7olRzyWYF6g82PMnEC+DjyIlgwYkvMAA9Tn+6cDozixruVHbCZPaKW8g2w6EBWK2gmTJJnvvzI3sCl5v4FD/F7T5+DRH31bfPxf0/JqmU/znYPZaPUdezT9PHMP8XtPn4teDjBhyH3Z051bDK1oDroXiDZ3FexEfsgH4LiEHbjetvX1a8NOtPNpcacQtB6lJOY6M4g2ldPzEaUhZHWneFcfCjsGf8Ac35xxWvZdj4R7yHFaEuVEBC0hSTDaBB3ggow7Vy6fXKqCVsZhTsL+w4rLSHaMl2Oo7jkpCtyk9FNi2LzqVxbPkyQjIo2KXMzhqst7C0ExmUtOyXkZS2AwSUHLcgYTX3vv/L/AKqMc33v7yH+kRi/h2zdRKW/cbdsaM29ghH7eBX3v7wH+lRixgXSK+Ytd5rQI7pWjkyBiug3RgQy3eaEGO2Uo5Mg4Nde+/wR4RvFtUWMWRCnc5BctyS2whYZDWIdu6JKINmxsJK1kNrH+i7/ACHA6EcfCjsGf9zfnGBaVPvKJ81GLOzrVVs9CJ8ZSzGdAAdSSSU4qbSt5sghU6MgpYQkhTgSQUjHPNR7zifORi7sK9wVQbmRllFmwteTgOJb9DOYLMmZDWjryLycN3hqpjcZ+cibCWSUPhYcdbwhSFoStCgpKgCCN4IPeOjeaafbLTraFoPWlQzGOaqz3dE+SjFnWVyK2etECMCIzpBDSe5OKytrl1sBS4MZRMZoklpBJJTjmur93RPkoxd18BkVJbhx0arJhBybTjmqr93xPkoxzXV+7onyUYQhKEpQhISlIyCQMgB7B0tr2XY+Ef8AIcU/ZVf4VrycV71U3xiP9Qtd9XY+Ee8hxT9lV/hWvJxXvVTfGI/TnFtLjoiTYxdQHlwX1BHeQE4qH45gQWUvtl1MNklsKGoZoHFeFC0UxQoKBt2BhDrK1uNpdQVt5a0g5lOe8ZjpjjhdBK4KJ6DoWx6hPtbc3YqKcVxdccf27y0IRr0BOSGxkBxcI2ZVVKTIZyMZ6YiT3kIfR/fihhqjQy68lQkyVF54rSEqzPT26ELqLEKQFf4Zw/ikYQpC0haFBSFDNJBzBB3gji4Q5aKb4qxgdPa9l2PhH/IcU/ZVf4VrycV71U3xiP8AULXsux8I/wCQ4p+yq/wrXk4r3qpvjEf6ha9l2PhH/IcVHZVf4VrycV71U3xiP00yZGgs7aS6G28wMzgcJ6H7d+W5ix4R0b1fNabmalrYcSkaF4r+ElKzAhNOy8ltx20kaF49KaL7b+WvFvfU8nm3Yyteynsur9Re5Ax6UUP278pePSeh+3j5bmGnEPNNutnNDiAtJ9oUMx0brTTzam3W0rQetKgFA4XGmUZQuCHZEDWdcX6a29Xe1h+fEn0k11h0HXDfOj9saUYquy67wjPk4r/qp/ijHFajOqsPCu+TFV2VXeFa8uIM2JNYD8Z0OIzI6M4sqMP8pchPGM88Fh3vQ9mOpYxV2V1rRWjkDL7CA2Gnw7qIQMfrT7an/wAdxbm//wAu2/IN09nZ6Nf08EcKh7q/NxPPCQQJm15s2ewc16drqy04go4RKroWz5uDewaKMy6F4KLIXgarxDblAZOqiatkP59WP1pHur83EHnMbXl/Je7QWNf456+iOJ9XEsEp2qSl1BBQ83klxGnDM6dUusxbYoWwv1GZg8ruLpSVppVoWCDaRyDxWvZdj4R/yHFX2XXeEZ8gxBfri5JZjqbDiXnFuozBXqJ3qPTOstPtlt1tC0HLNKhmDli3qZlYyzIgOuORWHg+WF7w2UYgWN9PYS9GdqVd6kZuZoxYeknIJm15s2fJ3Neja6stOK30k5BDLPNmyDDejXtMX3OTL8Yr5EmapfqGJrD5w16VhpvXzbr0D6evPEHnMbXl/Je7QWNf456+lI3Yl0qRJ5dXOiPKzJV3odz7ljCrlEmusockbCeiI+Fs/cjFXvqq/wAIz5BjYM7cyA2NqUBGrv0g55fUDizrIdowGpCN6TmlafpJxGZSwyywkkpabShJPsTu/S//xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAECAQE/AHH/xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAEDAQE/AHH/2Q==\" style=\"height:182px; width:150px\"/> The diagram above shows the prism arrangement in a",
    "options": [
      {
        "key": "A",
        "text": "Binocular"
      },
      {
        "key": "B",
        "text": "Spectrometer"
      },
      {
        "key": "C",
        "text": "Periscope"
      },
      {
        "key": "D",
        "text": "projector"
      }
    ],
    "optionsMap": {
      "A": "Binocular",
      "B": "Spectrometer",
      "C": "Periscope",
      "D": "projector"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The Periscope adopts the reflective property of light for its operation.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      1999
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 1999"
  },
  {
    "id": 198,
    "questionNumber": 198,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Light Waves",
    "year": 2020,
    "difficulty": "Easy",
    "text": "Which of the following waves cannot be polarized?",
    "options": [
      {
        "key": "A",
        "text": "infra-red"
      },
      {
        "key": "B",
        "text": "yellow-light"
      },
      {
        "key": "C",
        "text": "x-rays"
      },
      {
        "key": "D",
        "text": "sound"
      }
    ],
    "optionsMap": {
      "A": "infra-red",
      "B": "yellow-light",
      "C": "x-rays",
      "D": "sound"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Sound waves are mechanical longitudinal waves, and they cannot be polarized. The polarization phenomenon is specific to transverse waves, and sound waves are not transverse but rather longitudinal oscillations of particles in a medium.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2018, 2020"
  },
  {
    "id": 199,
    "questionNumber": 199,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Light Waves",
    "year": 2017,
    "difficulty": "Medium",
    "text": "A rainbow is formed when sunlight is incident on water droplets suspended in the air due to",
    "options": [
      {
        "key": "A",
        "text": "diffraction"
      },
      {
        "key": "B",
        "text": "refraction"
      },
      {
        "key": "C",
        "text": "dispersion"
      },
      {
        "key": "D",
        "text": "interference"
      }
    ],
    "optionsMap": {
      "A": "diffraction",
      "B": "refraction",
      "C": "dispersion",
      "D": "interference"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Dispersion refers to the separation of white light into its constituent colours (wavelengths) as it passes through a prism-like medium. Water droplets act as tiny prisms, bending different colours of light by varying degrees due to their different wavelengths. This dispersion separates the colours of sunlight within the droplets, forming the distinct bands of the rainbow observed by the viewer.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2018"
  },
  {
    "id": 200,
    "questionNumber": 200,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Laser",
    "year": 2018,
    "difficulty": "Hard",
    "text": "A. What does the acronym LASER stand for? B. What is a laser?",
    "options": [
      {
        "key": "A",
        "text": "A. Light Amplification by Stimulate Emission of Radiation"
      },
      {
        "key": "B",
        "text": "B. A laser, which stands for \"Light Amplification by Stimulated Emission of Radiation,\" is a device that produces coherent and focused light through a process called stimulated emission of electromagnetic radiation."
      }
    ],
    "optionsMap": {
      "A": "A. Light Amplification by Stimulate Emission of Radiation",
      "B": "B. A laser, which stands for \"Light Amplification by Stimulated Emission of Radiation,\" is a device that produces coherent and focused light through a process called stimulated emission of electromagnetic radiation.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Laser.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2018
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2013, 2018)"
  },
  {
    "id": 201,
    "questionNumber": 201,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Propagation of Light",
    "year": 1986,
    "difficulty": "Easy",
    "text": "What is the effect of the increase in the size of the hole of a pin-hole camera on the image? it",
    "options": [
      {
        "key": "A",
        "text": "gives a blurred image"
      },
      {
        "key": "B",
        "text": "corrects for chromatic aberration"
      },
      {
        "key": "C",
        "text": "magnifies the image"
      },
      {
        "key": "D",
        "text": "brings the image into a sharper focus"
      }
    ],
    "optionsMap": {
      "A": "gives a blurred image",
      "B": "corrects for chromatic aberration",
      "C": "magnifies the image",
      "D": "brings the image into a sharper focus"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "blurredIn a pinhole camera, when the size of the hole is increased, more light rays from different parts of the object enter the camera. This causes overlapping of light rays, resulting in a less sharp or blurred image. A smaller hole, while allowing less light, produces a sharper image because it limits the number of light rays reaching the screen from each point on the object.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 202,
    "questionNumber": 202,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Propagation of Light",
    "year": 1997,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABnAQQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiuP+Feg+KfC/gfTNM8Y+Lv8AhOvEMHmG68Qf2ZFp/wBqDSuyfuIiUTahRODzsyQCTQB2FFI2dpx17VA0zLjJxycZ4B9Pcfl2NAFiiq4mfcRgZBwMng9/z/x/Cj7QVUFgRxkjhm/If0zz0zQBYoqJGchd3Dd8dM96loAKKKKACiiigAooooAKKKKACiiigAopGOFJ/kKgSZizjOSMZXuP8fTP+BoAsUVCsrMQPfGcEj16/Tv07VNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSNwp5xx1NAA3Cn6euKzdX1a00HTb3UtSuoNP0+yhe5ub68lWKGGJAWd3kbhVVQWJbAAGc45GX498f6F8L/AAbqvijxZq0WieHtMhM15f3GdsaDjgKCzOxwqqoyzMqqGYgH5E8B+APEP7evjPSfib8TtIm0T4K6TOt34L+H14VDawRwmqakgJDIyljFFyrKcA+UzvdgHa/8Ng+MPjGpj/Z/+Ft7470eYeQvjnxNIdD0ON3GxJ4kmXz72KKRZxMkao6mAqC29DVNv2UPjD8TtUttV+Jf7SXiextzbyyx6D8NLdfD8VlPK0bsi3QLyXMEYUopmj8zGGypLq31bpOj2Hh/S7PTNLsrfTdNs4Ut7aztIlihgiRQqRoigBVVQAABgAACrIiQYG0Y6/rnP50AfLl5/wAE6fg14qtbKXx/a+J/iZrtrCbf+3/F/ijUbm9aLzXdYyyTRoFQuwARB1yclmJ4LUv+CU/gWDSruy8J/Ef4j+D4k1N9d0jTLPW0k07S9S2sIbiOExiRmhG1Q5lEpVMeYCc19wCNRjAxjpShFUYxxQB8Y2Xgv9r34A2dv/YHi7wx+0H4dtIrKE6Z4gs/7G1kpG5SWKCdWMZYxbWae6ldspwrHIl0Pgx/wUk8GeN/FF34Q+I2h33wS8Y6fZtd6hZ+NLmCztIT5iCOJZ52idpHilSUK0KfLvI3Bcn68WFFAAUAKMDHYelebfG79nfwT8fNI0638T6fPHqWjytd6LrulXL2epaRclcLPbTxkMrK2xwp3IWjjLI2xcAHS+DPiP4Z+I+ly6j4R8R6T4p0+GY2sl5o99FdxLMoVjGzxllDBXViucgMDjmuiSQtjn5cDnH5c+9fmv8ADn9mTRLL43XHwx+J2i/8IX8So7Sa58EfFz4ZyR+GjrdjHJmeJLaDEC3qRzskiiF2MJYEhY0ml+itW0L9pr4OatcavovifR/2gNBkmfPhvXra28ParbRbsRLbXkCi3lbDh5mmRQRbny1BkIAB9SUV85eHP23vBtrc6fo/xQsNY+Cnim6mntlsPGlm1vYzyQRq1w1tqQH2WWFWbYspkQuduEHmJn33SNZtNd02y1GwvLe+069hS5tbu1kWSKeJwGV0ZSQysGUhgcHNAGhRRRQAUUUUAFFFFADZG2xs2M4GcV+f3jD9vA/sy/tefF/w98SItfvfhzdG1l8P3dtbmaK0v4NItZLizhUgZ87zoDtEgSN5I2ZVE7yj9Aj0NeIal+yH8NvFHj3x54n8T6SPFb+MbzR7+90zWVjms7efTYjHbvCgUMuVZg4dmDq7oRsd1IB8ifsk/tNfFzSdJTwD4gRfF/xk8TfErXNOZ/FWqumnafDp1rZ3GoQiSBJfLJLyRwpDH5Su+7BVNj9Fo/8AwVIv/HXhvUPiF4a8FW9v8OvBEOmt45tNUuSdWklv5jbomllP3TrCy7y05jMoIULCfmr3/wCIn7JPwG0XSfEvjXxH4buLOKx1K68cXmqwaxqazWV6qtNPeW5hm8yFztDMsAG8wwZVjDFtzvBv7Gf7OXjDQ/C3ivw74B09tGvNHsfsrWkl3Z2+p2IeO5t/tlrvRbkMyxO32pHZzGvmbiowAec/CX9tj4jeLv2sm+Hmu6L4Y/4QrUPFvifwrpl1p63EOpQyaREk5ln3yPG6vHLGmFVSWLt8oUK33DXE+Hfgl4B8K6omqaX4Q0e31aPU7/WY9Sa0SS6jvL1s3cyzMC6tKMI2GHyKiDCIqjtqACikY7VJ9qgMrDgkBufT+Xp/9agCxRVX7SxwQNyY3Fl+bjA6Y65zngdPepUZyF3cN3x0z3oAlooooAKKKKACkJ2gnpQxwpP8q8a/a6+MVx8C/wBmv4g+NbSW4g1PT9NeKwntYI5mgvZ2WC2kKyfKVSaWNm3A/Kp+Vj8hAPAvEunw/twfteWehT6Xcal8EvhHPcLrC6haSrY6z4lU+X9kYNMFmW3B3ZMZAImRt0dyjN9wLGqtkZzz3PevnP8A4J8/DCz+Ff7I3w3srUW0k+rabHr11dQ2iwPPJeATjzNrN5jJHJHD5hOSsKcKMKPo+gAooooAKKKKACkbO0464paQ8gigDyL9pL4A6Z+0V8OB4bvNU1Dw/qljex6toWvaZKY7jS9QiVhBcRgOu7b5hUqSp+bKlHCuvN/sUfGjxP8AGj4OzHx1afZviB4W1m78L+JPLiiSGS+tXXdJH5Tshyrx7iu1TIJCihNle/soVWIGD16Hrj0HWvmia4n+F/7d2mwnW/sXhn4peG7l00Vnlm+16/ppgDXG0qUhzp5RNyOofyPnXcqZAPo3VtGsNd0u803UrK31HTryF7e5s7uJZYZ4nUq8bowIZWUkEEYIJzXzN43/AGFfD/8Aak3iL4O+J9X+A/ix5reeaTwkSmkXjwmPy/temblhkVUDgIvlgtM7SCXJB+pSNwINNWNVxhcY6e3sPyoA+StN8U/tWfA+18/xjo3hj45+FrSeVJrrwqW0/wAStb+Y0n2prVlW2ldYVKC1g+d3aMB2wzHs/A/7c/wn8VG+tNc8Qj4Y+ItPMf2/wz8RVXQdRtA+4x7knOx96BX/AHbthJELbSQD9B+WoIOORnB7jPOK5T4lfCnwd8X/AArP4d8a+HNP8SaNIGYW1/CH8pzG8fmRP96KQLI4WRCrruJUg80AdMJm3qCcAnA9T36Y4+npz2qevi+b9hfxn8JbeeX9n345+JvAcEdverbeF/EaprWjRNLKJY4beOUEWqiQMGlKTS4cnk7970/a1+P/AMK9U0vSvip+zfrGuW8k91FP4k+GUx1WGZYyfKkissM8SvuiAE8yM2XYDKmIAH2bRXjXwj/a6+EXx0uY7bwX4/0fVb+aZ4YNLmdrW+nKR+Y5jtpxHLIoTJ3KpX5HGcqwHryzFpPlI2nGOR9ePXj+X5gE9NCKpyFAPPb15NOpCcc0AVNZ0uw1zR77TdVs7fUNMvIJLe6s7yJZIZ4XUq8ciN8rKykgg8EEg14N+wZrut69+yP8OB4i05dH1nSrKXQ7mxMDwSQfYLiWyVZI3JZZQtsu8H+PcNq4wPfRK3CnqRjHfI6n6e/H618I/BP9vLwbpth458C6BZz+MviKnjjxEnhnw5oPmT/8JDFc6hPdw3K3IT7Pbwf6Q7PI0jBYoHl5yFoA+8PMbcB/tY6Efh78c/hXlXxp/ao+F37PLWqfEHxrp/h+6udrRWGyS6u2RhJiT7PCrSiPMTjzSmzK7c7iK8pHwx/aI+PEJj+IfjnT/g74RkzP/YPw2kZ9bkWT94kFzqc3ywywOsQZ7ZNkwaYcKUIr/Fz4b6N+y54Rlk+CXhG2tPi38Rdfj0Gw8RajHNq9zFcXjebc3d1cTtLOYUitpp2++geMO8TDzDQBy+mfttfFn9oTxg/hj4D/AAnm0pdNllg1rxP8VLea1sbC4gDCazeK2JYThnt+BIXXe2YQgMo9Ht/2PNT8YfZJvit8aPH3xAnaym0/UtH0++Tw9oeowP5oCSWViqscLJgkykuV+Y7MRjsfB8Pwq/Y9+GHhPwJN4q0fwdolpDKmnDxJrMME94+4yXEmZXXcxklLts+VTIMBV2gegeCfiB4V+JGkNqPhDxLpHifTIp/sr3mi38V3CsoVXMZaNiAwV0O3OQGU4x1APAof+Cd/wb8KWuoTeBYPE/wz126i8g+IvCniq/tr5YfMSRkDSTujKxRVIdT6jBAIq61pvx6/ZpvtN1Dw/ql/8evhpAI7fUNA1O0to/E+mWcFvgzWtzH5S6hIzAsUlTzX2xIuWeSUfVrKoDHGO5xxVYKyqCsYXphSoyDkD1AzjP8A9egDF+H3xC0D4peD9J8VeFtWt9b8PatALizvrYnbIucEEEBlZWBVlYBlYFSAwIrpq+PLzw+v7If7VGj67pmo6h/wq/4x6zLp2r6TcTiS30vxPMBJbXUIw0n+lFZomRdqIfmZ9ixRp9h0AFFFFACNwpPTivzq/wCC1XijS7P4C+CfDs1zs1m/8SC+tbXyz88EFrNHMd2No2tc2/BOTvBAOCV/RVvunqeO3Wvze/4LWPrSfBn4exwQTN4cOvubyeO4gSFLkW8ggVo2QyszI1yVZHCIEcSK5eIoAfo+oH3sc8c/5+tPqvDIzgYBP0444656H29jVigBrEqrEDcccAd68G8F/tjeDvHPxq1X4cabpfiUzWOpXOiL4km0l10a41O3h86exjuBkiZY0mbDoqsIXKsQU3+9N0PGa/Pz4b/C34val+11F40l+Dl98F/B3i6zvrPx7Bpfjezu7bVJDbTfZ7lEtzHNBdCYgmaD58uzDYWmaUA++2nbKqvLbtvzce+PqB+nPOMVKrtuwfX07dq/I66/ZP8A2k/EXwp1/wAJ3fgHWNOgh+HeneFba31Hxjp96NTu7bX4L5JPllRYljhlu44o3z5USCMSMWAb7c/Yb+BOp/s8+G/iZ4cu9D/4R/R7rx9ql/4etfta3O/SWS3S1YMHdgNsZ4kO8YO4AnJAPpmiiigBG4UmvlH9vDO39nlgCXHxk8ODHOetx1wD6n26EelfVx6HHWvkX/go0+vah8Mfht4T8Pa/P4Vn8YfEPQ9Dm1K2iBmt1d5JopEPDK0c8EMoKMjZjxnDEEA+tUkLY5+XA5x+XPvU1VY1y0Z35I4PX0yR7dAeatUAFFFFADfLXcGxyOhz/n0pFhjXogHGOBSvkK2OuOKh82TIOPlLc5xwMfX1/n6c0AeZfGf9ln4UftCfZZPH/gnT9fu7XaIb/MlteKi79sX2iFklMWZXPlltmWztyAa8P0P9kz4u/AUxXHwW+NupaxptvZW9vD4N+KqtqWnyeXvjAS5h2S2kSROpWOGMZaFA5KkBNf4gf8FEPAWi67qHhr4d6V4g+N/i63spb06b4DsTfQQAJEYzNcJkCNmlRWeJZih3bgDhDz194b/a2/aLutUj1HWNH/Zn8KeVNax2OlrDr+s3DNHAu6SdXVI1GZyksLwyoRyjfJIAC7r37cvin4A/2dF+0J8LL3wbp15ex6Xa+MPDF3Fq2kXkoLCW4ZAyz2sZUCWOJ1kldBIAC0ZBNB/b4P7QPjbUfBn7Pmg6f4vvrOyluLvxH4p1P+yNPswYwYZktdjXl1EJD5cm2KPa3lgsolDj0b4W/sY/C/4bax/blzpNx498ayTw3U3jDx1MNX1dpYSxgkE0oxC8Y2qrxLHkRR5LFQa7r4mfs+fDP4xLcP418CaD4lupbNrD7dfWEb3kcB3/ACRXGPNiwZHYFGBVmLAhuaAPh79sf9mz4neKPhDbXHjj4qeJvEvjbxbr+leH7XQ/Dkf9n+DdKa6u4ygvIAjSSRRSF0W7fMrM1qrJkDPR/Dn/AIJc+CdH1T4n+CfFWkf298P7r+z7/wAJa+80C65Z3DwTxXqSXEUUbHZIIpEhkV7c7o22s/mY7v4t/wDBPv8A4Tb4d6z4G8G/Fvxd4T8JaqLC3m8N6tL/AG/pdra2gBihtEuGE9viRInOy4CnbtKldip4H4p+F37WOh+H5vCfxj8U+L/H/wAIG0VLfUG+E9tp99rN3uYQJbFp44rtsjDTSKs3mRllbIeRkAPrL/gn/wCPvEPxK/ZB+HmveK9XuNc12aG7t5767bM8qwXtxBGZGxl32RKCzDcdpZiWJY89+0IhH7cf7JoQONx8WtuXv/xLIxn+Q6HjFdp+z/8AGf4GXGl6d8Ofhn4g0fSDoNxNpEHhO5SXTtRjkhQvOotLoR3DOp3s8hRiWEpZtwcj47/a6/bMtde/aa8FeENF8Aa9pusfC3xIdf1TXJnistQk06zhuJdSt7WNmXdbT2SCUFpUEyhV8shlJAOn/wCCusnhjRz8CNZ1G601fEWn+JXez0/XrSW40aex/cPePeRxxM8kSPHZqUQ7mSWQKjn7njfxI/a8vPgr4Nh8HfC/VfhH4a+Mep+JYUv9V+E2lW8Gg/2UttiGO6u76MRGU3FwzFlLJGqPveM7g36veE/E+l+NfDejeI9EuWvNI1mzh1CzuNjR+fbzIskb4cKy/K4OGAYA4IzW2sKLgBQAOg7CgD8qPAP7W37QH7Rljp0Hg34n2+jeINI+F994m1LS9D8OWWpzalqdpqVzbJbmJlZoZ7iAWr7VOMsCkW1wK8B8IfHr4nfEbx94D8X+EfH+rRePPB/wu1ZfEWvJYfbNkNjLqlxFDdrInlyrJENPTzpNwEssbndKMV+64jVeQMGkeNW+YjO3kc0AfFn7WXxG1TxF/wAE6NF+KrW2n2njC3s/C/izTrmC1WRLDUmu7KTzbdJg+0DzXUZ3Eo7K24FgftFXO5dxxuOB78H/APXXyr8b/iRdfFT9pbwB8AvC0ypJpt5Y+OfGepRtbSx29jZTpPbWLRMwk8yW4S0YldrIjwvtkjdwPqxYlXoMdzjv7n8qAH0UUUANf7jcZ46V8vf8FEf2eb39o/8AZx1DTdNv7iC/8OzyeJba0tbFrubUpbezuVS0jQMpDSGXaGUMc4wrdK+o6YyhVYgc46A4oA+af+CefxzuPj1+y34U1XU9ROqeItJ3aHrE7LMXM9uR5TyNKSZJZLdreV3VmBeVunKr9M18E+G4rD/gnt+0/q1nqFxcab8A/ilP9s0/UZIFj03w9rxkc/ZCUdYreF4s4cxL8iQLkrbyyD7wWRsqGbPbIGATQBKyhlIIyDwQaTYOvf606igBnlL8ox93GPwpQijkDn+dOooAKKKQ5wccmgAYAqQRkelfOHxK0+D4oftefDTwnc6ZNcab4G02fxvfXV1aSTWMtxMWsdPhGZREs4cXdwryRO6/ZV8plzKR6T8bvjt4T/Z5+HOo+MvG2o/Y9NtcRRW0QWS5vLggmO3hjyN8z9duQoALMVRWYc/+zF4L8Z+GfAd9rfxGngb4h+LtTk1/XLawdDaWUrRRW8FrCUXGyK2traNstIS6yHzJNwYgHs20f1oPQ1wfxO+N3gb4L6aL/wAc+MNH8LwNBNcQpqVysUtysKgyCCInfMw3J8kau3zKMZZc+ID9rj4ifFf9x8Fvgh4g1aym+RPF3jkjQtIWOXi1v4EfM97bkbpXWMJIE2ADdIMAH1LJKyAEAkf7pJ/Ie+PTvXlfxE/am+F3wp1620DxJ420+PxJcXsOnp4f01ZNQ1Tz5k3RIbK2SSf5xjaxjCnenOWXd5pF+zX8TvjRp8y/HX4pTLp91PFLN4I+HEf9maV5arJFNbT3boby6guImG9C8YBkkUZAjZPXPhH+zb8L/gPbxx+A/A+keHZ0he2OoQweZfSRPIJGjkupC00ilgpw7kDaoHCqAAeYt8cfjl8VNP3/AA0+DX/CIWlzZme31v4tXgsNk6XIjkgfTbUy3BBjDMjs0YP3vuhRJRvP2H9P+KUOnN8dviJ4m+Ms0EBjGmzTLomiiUSOY7mOzsvLInWORo/MaRywdhwNip9RG3iYMCisGOTuGc8Y59eKcFC9KAMDwX8O/Cvw30mXS/CXhrSPC2mSzG5ks9EsYrOFpSFUyFIlUFiEQbsZwoHat3yI/l+Rfl+7x93gjj04JFSUUAM8pcg46HI+vrTiAwIIyD1FLTXzsbBAOOCelACMoCsc4z1PpUONrEBQMnGOQPp054/livgf9s79qT4r/s5/GweFtF8beEZdK+I1lb22grryx20ngmcSxW8l7cMqHzLZ98sivNuAaN/l227JN6f8dvhT8Z/jJH4Q+ER13+zfhxLpEUnjv4h2hhttQ1uQZSWxt7QH/R/Ox5jtym2XbyEaKYA4X40azB/wUI/tfwF8K9C0DUtG0K8bTNU+K/iXS4LyzslfyvPh0MkO01yyZZpB5aqsKESDzoJl3dN/4Js+FvhXq1l4k+C3jzxR8LPG1tpqaYNTV4tStr0cefLd2s67ZnkUA7VaOJHWORUDIAfqf4f+APD/AMMfCGj+FfC2lQaLoGlW/wBmtbG3GVRc5bLElmYtuZmbLOzFiSSTXTbR9O1AHwT8MfhL+1H+xtcX2n+FIfC/xz+H97qTXaeH0nj8PXtk00cjzNao2Le0g+0MP3KGReMpHEZHK+weF/8AgoB8LtQ8QWugeM28QfB/xFebntdI+I2kPpDzQhGP2gTNuhWJmSRFLyKxeMrtyVz9KiJV6DHOfx9aqaroena7pN3pepWFtqGl3kLW1zY3USyQTxMpVo3RgVZSpIKkEEHFAHk+rftifBHRdOvNQuPi94IltrWBp5Fs9ftriUqqljsijdpJGwMBEDMxIAUmuD1L9pz4i/Fy4Gn/AAF+G9zqFhNDDcp8QPiFbXGj6B5MkazRSW8LKLq9V1EkZaNFCOY3JaNwa9h8L/s8/CzwPrVrrHhz4beEtA1e13eRqGl6HbW1xFuQo22REDDKkqcHkEg13vkx7i2wbic7u+cYz+VAHjnwP/Zt0D4P6tqXii5up/FvxP16NV8Q+NdTJ+16iwbcQkWdltCDtVYYgqrHHCpLmNWr2em+WuQcdDmnUAFFFFABSdeDyKWigDnfH3w98OfFDwdq/hXxVpFvregatCYLyyuQSsi5yCCCGVlIDKykMrKCpBANfLngv45eLv2R5PDfgX9ofUP7a0bUL06boHxXtObOVPn8qDWC5DW1zsRCJP3iOshLOTBNMfsWqWr6PY69pN7pmpWVvqOnXkD21zZ3cYlhnidSrxujAhlZSQQQQQSDQBODL8uSOo3cdfUD/P8AjU1fJ6fsg+Lvg7ib9n34qX3gjRkP2hfAviS3OtaHIy/PHBC8rGeyjldpTO8TO7GXcu3y1WpD+1F8afhx8nxL/Zz1++sYf9CGt/Da+h10392o/wBbHYZSeC3kCSyBpGJQeWjZZ80AfVlFeIeFv2sNA17RLS+v/BnxN8OXUok83S9U+H2rtcwbXKguYLeWMggBhsduHGcEMByq/ttNeeJDo+m/Aj42agHvfsVvqH/CHi1tZv3mwSeZcTx+Uh+9umEe1fvhOwB9MN9046/TNeb/ABe/aC8AfAPQ49V+IHivT/DtnKp8hbl99xdYZFbyoIw0spUyxltiEKHBOBzXks2sftS/GLTILS20Twx+zxB5ssV/qN5qEfifVlVVjeKS1hjRLUKzB4285y212YKpRS7dJ/4J/fDfXNWsPEvxTn1j4y+OUmS6k1zxVeTiFWDCQ28NlGywR2nmmVxbMrqvmsjFlIFAHzz4Z/a5039pb4iW/jW38EeLvia+g3bjwh8OdB0xvsGg3W4xWup65dy7YEuZ2D+UymaKziSR/mk3OPoXVPAf7R3xrulk1vxrpHwO8L3FvCJNA8Hxrq+tzRSxqbmCbUZkSO2njIcRTWykKZWOX8tWb6Y0nRNP0DS7PTNLsbfTdOs4Utra0s4hFFBEihURFUAKqqAoA4AAA4q35a7s459f8/WgDwj4V/sUfB34W6kNcs/CNr4h8VyywXtz4o8SM2p6hcXkbF/tolnLiKZ5GaRmhCZYg/wrj3jy15469aNoGMDFDcKTnHHWgBFjRcbVC4AAxxwOgp9QeY/nKv8ACRnpx1//AFfXPtU9ABRRRQAUUUUAFIehpaKAPnj4hfsS/DX4reOvHXi7xdb33iTWfE2jLoduNQeKePQIBCULabHIhW3lLHzQ7BishYrt8xw3r/w38FWPw48A+GPCmmzTXWnaDpltpdtcXO0yyRQxJGrOygAswQE4AGT0FdKyqqk4C4B5x0zyaoQ3876xPaHT7iO2jhiljviYxDIzlw0QG/zAyBFYlkVcSoFLEMFANDy1Hbn1zzTqKKACiiigAooooAKKKKACiiigAooooAqateTadpV7d29jcapcQQvLHY2jRrNcMqkiNDI6IGYjALsq5IywGTUej3t1qOk2V1d6dNpdxcQpJLY3LxvLbswBaNzGzISpJBKMwOOCetFFAF3y19O+ab5MeMbFIxjGP8+35UUUAL5anqMj0PIo8teuOfXNFFAB5K7t2Oeo5PHGOPzo8lOygdO3ocj9aKKAKWqXt1YQwyQWFxqTPcQxNDbGIMiO4RpT5joNiAmRsEttUhVZsKdCiigApGXcpB6Hjg4oooAqSaTBJq1vqJa4FxBDLAircyLCVkaNmLRBtjsDEu12UsgLhSA7hrlFFABRRRQAUUUUAFI2dpwMnHFFFAFHSb251LTbS6uNPuNKmngSWSyu2iM1uzAExOYndC6ZwSjMuRwzDmqHirVL7w9os9/p2gah4kuo2XbpmlvbJcS5YKSpuJoYxgHcd0gOAQMnAJRQBsQmRlQuCpIBIbHHHTjv+J6VNRRQAUUUUAFJ9KKKAMjwtrV/4g0S1v7/AEG/8M3Mu7fpeqSW73MOHZfnNvLLFyAGG2RuGGcHIGxRRQAUUUUAf//Z\" style=\"height:103px; width:260px\"/>When the sun, moon and the earth are as shown in the diagram above an observer standing in X is in",
    "options": [
      {
        "key": "A",
        "text": "Penumbra and sees a partial eclipse"
      },
      {
        "key": "B",
        "text": "Penumbra and sees a total eclipse"
      },
      {
        "key": "C",
        "text": "umbra and sees a partial eclipse"
      },
      {
        "key": "D",
        "text": "umbra and sees a total eclipse"
      }
    ],
    "optionsMap": {
      "A": "Penumbra and sees a partial eclipse",
      "B": "Penumbra and sees a total eclipse",
      "C": "umbra and sees a partial eclipse",
      "D": "umbra and sees a total eclipse"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "An observer in the penumbra experiences a partial eclipse. The penumbra is the region in which only a portion of the light source is obscured by the occluding body.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 203,
    "questionNumber": 203,
    "subject": "Physics",
    "topic": "Waves - Light",
    "subtopic": "Fibre Optics",
    "year": 2019,
    "difficulty": "Hard",
    "text": "A. State the principle of operation of fibre optics. B. State two applications of fibre optics in medicine.",
    "options": [
      {
        "key": "A",
        "text": "A. Principle of operation of fibre optics state that the density of transparent glass and the refractive index is greater than the density of the two mirrors. It makes use of the principle of the total internal reflection."
      },
      {
        "key": "B",
        "text": "B. Applications of Optical Fibers in Medicine<ul><li>Surgical and diagnostic instrumentation.</li><li>Illumination.</li><li>Laser delivery systems.</li><li>Light therapy.</li><li>Dental handpieces.</li><li>Data transmission.</li></ul>"
      }
    ],
    "optionsMap": {
      "A": "A. Principle of operation of fibre optics state that the density of transparent glass and the refractive index is greater than the density of the two mirrors. It makes use of the principle of the total internal reflection.",
      "B": "B. Applications of Optical Fibers in Medicine<ul><li>Surgical and diagnostic instrumentation.</li><li>Illumination.</li><li>Laser delivery systems.</li><li>Light therapy.</li><li>Dental handpieces.</li><li>Data transmission.</li></ul>",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Fibre Optics.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 204,
    "questionNumber": 204,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Resonance",
    "year": 1987,
    "difficulty": "Easy",
    "text": "A galvanometer of resistance 20Ωis to be provided with a shunt that 110of the whole current in a circuit passes through the galvanometer. The resistance of the shunt is",
    "options": [
      {
        "key": "A",
        "text": "2.00Ω"
      },
      {
        "key": "B",
        "text": "2.22Ω"
      },
      {
        "key": "C",
        "text": "18.00Ω"
      },
      {
        "key": "D",
        "text": "18.22Ω"
      }
    ],
    "optionsMap": {
      "A": "2.00Ω",
      "B": "2.22Ω",
      "C": "18.00Ω",
      "D": "18.22Ω"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "\\(I_g = \\frac{1}{10} I\\) Thus, the current through the shunt is: \\(I_s = I - I_g = I - \\frac{1}{10}I = \\frac{9}{10}I\\) Since the galvanometer and the shunt are in parallel, they both have the same potential difference. Using Ohm’s Law, the voltage across the galvanometer is: \\(V = I_g R_g\\) The voltage across the shunt is: \\(V = I_s R_s\\) Since both voltages are equal, we can set them equal to each other: \\(I_g R_g = I_s R_s\\) Substituting \\(\\frac{1}{10}I \\cdot R_g = \\frac{9}{10}I \\cdot R_s\\)\\(\\frac{1}{10} R_g = \\frac{9}{10} R_s\\) Simplifying further: \\(R_s = \\frac{R_g}{9}\\) Substitute R<sub>g</sub> = 20Ω \\(R_s = \\frac{20}{9} = 2.22 \\Omega\\)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1982,
      1987
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1982, 1987)"
  },
  {
    "id": 205,
    "questionNumber": 205,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "R-l-c Circuits",
    "year": 2009,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:119px; width:231px\"/> From the diagram above, if the potential difference across the resistor, capacitor and inductor are 80V, 110V and 40V respectively, the effective potential difference is",
    "options": [
      {
        "key": "A",
        "text": "116.3V"
      },
      {
        "key": "B",
        "text": "50.0V"
      },
      {
        "key": "C",
        "text": "230.0V"
      },
      {
        "key": "D",
        "text": "106.3V"
      }
    ],
    "optionsMap": {
      "A": "116.3V",
      "B": "50.0V",
      "C": "230.0V",
      "D": "106.3V"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Given Voltage across the resistor = 80V Voltage across the inductor, V<sub>L</sub> = 40V Voltage across the capacitor, V<sub>C</sub> = 110V V = √((VR)+(VL-Vc) <sup>2</sup> ) V = √ (80) <sup>2</sup> + (40-110) <sup>2</sup> V = √6400+(-70) <sup>2</sup> V = √1130 = V = 106.3V",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2004,
      2009
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2004, 2009)"
  },
  {
    "id": 206,
    "questionNumber": 206,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Values in Ac",
    "year": 1994,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:98px; width:300px\"/> In the curve above, PQRST represents an alternating voltage of frequency 50Hz. The time interval between points P and R on the graph is",
    "options": [
      {
        "key": "A",
        "text": "25s"
      },
      {
        "key": "B",
        "text": "<sup>1</sup> /<sub>50</sub> s"
      },
      {
        "key": "C",
        "text": "<sup>1</sup> /<sub>100</sub> s"
      },
      {
        "key": "D",
        "text": "<sup>1</sup> /<sub>200</sub> s"
      }
    ],
    "optionsMap": {
      "A": "25s",
      "B": "<sup>1</sup> /<sub>50</sub> s",
      "C": "<sup>1</sup> /<sub>100</sub> s",
      "D": "<sup>1</sup> /<sub>200</sub> s"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The number of cycles (n) from P to T is 1, meaning from P to R is 0.5 \\(t=\\frac nf\\) Where t = time frequency, f = 50Hz \\(t={0.5\\over50}\\) t = <sup>1</sup> /<sub>100</sub> s",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1989,
      1994
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (1989, 1994)"
  },
  {
    "id": 207,
    "questionNumber": 207,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Simple Ac Circuits",
    "year": 2020,
    "difficulty": "Easy",
    "text": "In alternating current theory, the units of impedance, r.m.s voltage and resonance frequency are respectively equal to",
    "options": [
      {
        "key": "A",
        "text": "Volt,Ampere, and Hertz"
      },
      {
        "key": "B",
        "text": "Ohm,Volt and Hertz"
      },
      {
        "key": "C",
        "text": "Watt, Ohm and Radian"
      },
      {
        "key": "D",
        "text": "Ohm, Hertz and Joule"
      }
    ],
    "optionsMap": {
      "A": "Volt,Ampere, and Hertz",
      "B": "Ohm,Volt and Hertz",
      "C": "Watt, Ohm and Radian",
      "D": "Ohm, Hertz and Joule"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "In alternating current theory: Impedance is measured in ohms (Ω), Root-mean-square (r.m.s.) voltage is measured in volts (V), Resonance frequency is measured in hertz (Hz).",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1992,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1992, 2020"
  },
  {
    "id": 208,
    "questionNumber": 208,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Simple Ac Circuits",
    "year": 2024,
    "difficulty": "Medium",
    "text": "Which of the following modes is the most economical method of transmitting electrical power over a long distance?",
    "options": [
      {
        "key": "A",
        "text": "Alternating current at high voltage and low current"
      },
      {
        "key": "B",
        "text": "Alternating current at low voltage and high current"
      },
      {
        "key": "C",
        "text": "Direct current at high voltage and high current"
      },
      {
        "key": "D",
        "text": "Direct current at low voltage and low current"
      }
    ],
    "optionsMap": {
      "A": "Alternating current at high voltage and low current",
      "B": "Alternating current at low voltage and high current",
      "C": "Direct current at high voltage and high current",
      "D": "Direct current at low voltage and low current"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Transmitting electrical power over long distances is most economical when using alternating current (A at high voltage and low current. This is because power loss in transmission lines is primarily due to resistive losses, which are proportional to the square of the current (P = I <sup>2</sup> R). By transmitting power at high voltage and low current, the current in the transmission lines is reduced, significantly minimizing power losses. High voltage transmission also allows for the use of thinner and less expensive cables. This method is widely used in power grids to efficiently transmit electricity over long distances.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2012,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2012, 2024"
  },
  {
    "id": 209,
    "questionNumber": 209,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Resonance",
    "year": 2001,
    "difficulty": "Hard",
    "text": "At resonance, the phase angle in an a.c.",
    "options": [
      {
        "key": "A",
        "text": "0<sup>o</sup>"
      },
      {
        "key": "B",
        "text": "60<sup>o</sup>"
      },
      {
        "key": "C",
        "text": "90<sup>o</sup>"
      },
      {
        "key": "D",
        "text": "180<sup>o</sup>"
      }
    ],
    "optionsMap": {
      "A": "0<sup>o</sup>",
      "B": "60<sup>o</sup>",
      "C": "90<sup>o</sup>",
      "D": "180<sup>o</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "At resonance in an AC circuit, the phase angle between the voltage and current is 0°. This means that the voltage and current reach their peak values at the same time. When the circuit is at resonance, the inductive reactance (X<sub>L</sub> ) and capacitive reactance (X<sub>C</sub> ) cancel each other out, leaving only the resistance (R) in the circuit. This results in the voltage and current being in phase.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 210,
    "questionNumber": 210,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Resonance",
    "year": 1999,
    "difficulty": "Easy",
    "text": "In a series R-L-C circuit at resonance, the voltages across the resistor and the inductor are 30V and 40V respectively, what is the voltage across the capacitor?",
    "options": [
      {
        "key": "A",
        "text": "30V"
      },
      {
        "key": "B",
        "text": "40V"
      },
      {
        "key": "C",
        "text": "50V"
      },
      {
        "key": "D",
        "text": "70V"
      }
    ],
    "optionsMap": {
      "A": "30V",
      "B": "40V",
      "C": "50V",
      "D": "70V"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "At resonance, inductive reactant X<sub>L</sub> is equal to the capacitive reactance X<sub>C</sub> i.e. X<sub>L</sub> = X<sub>C</sub> Again, since the components are in series, the same current flows in the series arrangement i.e.I<sub>L</sub> = I<sub>C</sub> Hence, V<sub>L</sub> = V<sub>C</sub> = 40V",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 211,
    "questionNumber": 211,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "Resonance",
    "year": 2023,
    "difficulty": "Medium",
    "text": "Marching soldiers are advised to break their steps while crossing a suspension bridge to avoid damaging the bridge due to",
    "options": [
      {
        "key": "A",
        "text": "Oscillaiton"
      },
      {
        "key": "B",
        "text": "resonance"
      },
      {
        "key": "C",
        "text": "gravitational pull"
      },
      {
        "key": "D",
        "text": "centrifugal force"
      }
    ],
    "optionsMap": {
      "A": "Oscillaiton",
      "B": "resonance",
      "C": "gravitational pull",
      "D": "centrifugal force"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "✅ resonance Resonance occurs when the frequency of an external force (in this case, the rhythmic steps of soldiers) matches the natural frequency of the bridge, causing large amplitude vibrations . If sustained, this can lead to structural failure of the bridge. When soldiers march in step (synchronously) , their footfalls provide periodic forcing , which can resonate with the bridge structure. Why the Other Options Are Wrong:<ul><li> Centrifugal force: This is associated with circular motion , not relevant to linear marching on a bridge. </li><li> Random vibration: Random vibrations are irregular and unlikely to synchronize with the bridge's natural frequency, so less dangerous compared to resonant vibrations .</li><li> Gravitational pull: Gravity acts uniformly on all objects; it does not cause vibrational damage unless coupled with resonance or dynamic loading. </li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 212,
    "questionNumber": 212,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "R-l-c Circuits",
    "year": 1982,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:213px; width:300px\"/> What is the resultant capacity of the circuit",
    "options": [
      {
        "key": "A",
        "text": "1.5µF"
      },
      {
        "key": "B",
        "text": "18.0µF"
      },
      {
        "key": "C",
        "text": "6.0µF"
      },
      {
        "key": "D",
        "text": "6.8µF"
      }
    ],
    "optionsMap": {
      "A": "1.5µF",
      "B": "18.0µF",
      "C": "6.0µF",
      "D": "6.8µF"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "1.5µF Step 1: Parallel Capacitors The 1 μF and 5 μF capacitors are in parallel: C_eff = 1 + 5 = 6 μF Step 2: Series Capacitors The 6 μF, 4 μF, and 4 μF capacitors are in series. For capacitors in series: 1/C_T = 1/C₁ + 1/C₂ + 1/C₃ 1/C_T = 1/4 + 1/4 + 1/6 1/C_T = (6 + 6 + 4)/24 = 16/24 C_T = 24/16 = 1.5 μF",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 213,
    "questionNumber": 213,
    "subject": "Physics",
    "topic": "Alternating Current",
    "subtopic": "R-l-c Circuits",
    "year": 1999,
    "difficulty": "Easy",
    "text": "At what frequency would a 10H inductor have a reactance of 2000Ω?",
    "options": [
      {
        "key": "A",
        "text": "π/200Hz"
      },
      {
        "key": "B",
        "text": "π/100Hz"
      },
      {
        "key": "C",
        "text": "100/ πHz"
      },
      {
        "key": "D",
        "text": "100 πHz"
      }
    ],
    "optionsMap": {
      "A": "π/200Hz",
      "B": "π/100Hz",
      "C": "100/ πHz",
      "D": "100 πHz"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "X<sub>L</sub> = 2πfL2000 = 2π(10)ff = 2000 / 20π = 100/ π Hz",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 214,
    "questionNumber": 214,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Classification of Waves",
    "year": 2023,
    "difficulty": "Medium",
    "text": "Of the following which is different from the other?",
    "options": [
      {
        "key": "A",
        "text": "x-rays"
      },
      {
        "key": "B",
        "text": "gamma-rays"
      },
      {
        "key": "C",
        "text": "cathode rays"
      },
      {
        "key": "D",
        "text": "ultra violet rays"
      }
    ],
    "optionsMap": {
      "A": "x-rays",
      "B": "gamma-rays",
      "C": "cathode rays",
      "D": "ultra violet rays"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The different element among the listed types of radiation is cathode rays.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 215,
    "questionNumber": 215,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Classification of Waves",
    "year": 1999,
    "difficulty": "Hard",
    "text": "Gamma rays are produced when",
    "options": [
      {
        "key": "A",
        "text": "high velocity electrons are abruptly stopped in metals"
      },
      {
        "key": "B",
        "text": "energy changes occur within the nucleus of atoms"
      },
      {
        "key": "C",
        "text": "energy changes occur within the electronic structure of atoms"
      },
      {
        "key": "D",
        "text": "electrons are deflected in very strong magnetic fields"
      }
    ],
    "optionsMap": {
      "A": "high velocity electrons are abruptly stopped in metals",
      "B": "energy changes occur within the nucleus of atoms",
      "C": "energy changes occur within the electronic structure of atoms",
      "D": "electrons are deflected in very strong magnetic fields"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Gamma rays are electromagnetic radiation of very high frequency and energy that are emitted from the nucleus of an atom during certain nuclear processes, such as radioactive decay or nuclear reactions.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1999,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1999, 2022"
  },
  {
    "id": 216,
    "questionNumber": 216,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Classification of Waves",
    "year": 2020,
    "difficulty": "Easy",
    "text": "Which of the following statements on the use of X-rays is incorrect? X-rays are used",
    "options": [
      {
        "key": "A",
        "text": "In a hospital to obtain photographs of tissues and bones in the body"
      },
      {
        "key": "B",
        "text": "For the treatment of malignant growths like cancer cells"
      },
      {
        "key": "C",
        "text": "In detecting fingerprints"
      },
      {
        "key": "D",
        "text": "To reveal hidden flaws in metal castings and welded joints work of art"
      }
    ],
    "optionsMap": {
      "A": "In a hospital to obtain photographs of tissues and bones in the body",
      "B": "For the treatment of malignant growths like cancer cells",
      "C": "In detecting fingerprints",
      "D": "To reveal hidden flaws in metal castings and welded joints work of art"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "In detecting fingerprints<ul><li> X-rays are not used to detect fingerprints. Fingerprints are typically detected using methods like dusting, chemical treatments, or ultraviolet (UV) light. </li><li> Correct uses of X-rays include: <ul><li> In hospitals : To obtain images of tissues and bones. </li><li> For cancer treatment : To target and destroy malignant growths. </li><li> In industry : To reveal hidden flaws in metal castings and welded joints. </li></ul></li></ul>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 2020"
  },
  {
    "id": 217,
    "questionNumber": 217,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Classification of Waves",
    "year": 2017,
    "difficulty": "Medium",
    "text": "Which of the following electromagnetic waves has the shortest wavelength?",
    "options": [
      {
        "key": "A",
        "text": "Radio"
      },
      {
        "key": "B",
        "text": "X-rays"
      },
      {
        "key": "C",
        "text": "infra-red"
      },
      {
        "key": "D",
        "text": "Blue light"
      }
    ],
    "optionsMap": {
      "A": "Radio",
      "B": "X-rays",
      "C": "infra-red",
      "D": "Blue light"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Electromagnetic waves are arranged in the electromagnetic spectrum based on their wavelengths. Among the options given: Radio waves have longer wavelengths. X-rays have very short wavelengths, shorter than visible light. Infrared waves have longer wavelengths than visible light but shorter than microwaves. Blue light is part of the visible spectrum and has shorter wavelengths than red light. Therefore, X-rays have the shortest wavelength among the given options.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1979,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1979, 2017"
  },
  {
    "id": 218,
    "questionNumber": 218,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Production & Propagation",
    "year": 2022,
    "difficulty": "Hard",
    "text": "Which of the following statements about wave is/are correct? <ol style=\"list-style-type:lower-roman;\"><li> A wave front is a line which contains all particles whose vibrations are in phase. .</li><li> The direction of propagation of a wave is the line drawn parallel to the wavefront. .</li><li> A wave front is a circle which is common to all particles that are in the same state of disturbance. .</li></ol>",
    "options": [
      {
        "key": "A",
        "text": "I only"
      },
      {
        "key": "B",
        "text": "II only"
      },
      {
        "key": "C",
        "text": "III only"
      },
      {
        "key": "D",
        "text": "I and III only"
      }
    ],
    "optionsMap": {
      "A": "I only",
      "B": "II only",
      "C": "III only",
      "D": "I and III only"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Statement I: This is correct. A wavefront is indeed a surface or line (depending on the dimensionality of the wave) that connects all the points where the disturbance (vibration) of the wave is in the same phase. Statement II: This is incorrect. While the direction of propagation is generally perpendicular to the wavefront, it's not necessarily a line drawn parallel to it. Waves can propagate in curved paths as well. Statement III: This is correct. A wavefront can be seen as a surface (circle for spherical waves, plane for plane waves, etc.) that is common to all particles that are in the same state of disturbance. Particles on the same wavefront experience the same displacement from their equilibrium position at the same time.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 219,
    "questionNumber": 219,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Production & Propagation",
    "year": 2016,
    "difficulty": "Easy",
    "text": "Which of the following has no effect on radiation?",
    "options": [
      {
        "key": "A",
        "text": "density"
      },
      {
        "key": "B",
        "text": "nature of the surface"
      },
      {
        "key": "C",
        "text": "surface area"
      },
      {
        "key": "D",
        "text": "temperature"
      }
    ],
    "optionsMap": {
      "A": "density",
      "B": "nature of the surface",
      "C": "surface area",
      "D": "temperature"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The factor that has no effect on radiation is: Density. Radiation is the transfer of heat through electromagnetic waves and does not depend on the density of the medium through which the radiation travels. The other options—nature of the surface, surface area, and temperature—can affect the rate of radiation.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2010,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2010, 2016"
  },
  {
    "id": 220,
    "questionNumber": 220,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Properties of Waves",
    "year": 2024,
    "difficulty": "Medium",
    "text": "Which of the following media allow the transmission of sound waves through them? I. Air II. Liquids III. Solids",
    "options": [
      {
        "key": "A",
        "text": "I and II only"
      },
      {
        "key": "B",
        "text": "II and III only"
      },
      {
        "key": "C",
        "text": "I, II and III"
      },
      {
        "key": "D",
        "text": "I and III only"
      }
    ],
    "optionsMap": {
      "A": "I and II only",
      "B": "II and III only",
      "C": "I, II and III",
      "D": "I and III only"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "I, II and III . Sound waves are mechanical longitudinal waves , meaning they require a medium (material substance) to travel. These media can be gases (like air), liquids (like water), or solids (like metal or wood). Here’s how sound travels through each medium: <ul><li> Air (Gas) : Sound waves travel by causing air particles to vibrate. This is the most common medium for sound waves. For example, we hear speech because sound waves travel through the air. </li><li> Liquids : Sound can also travel through liquids such as water. The particles in liquids are closer together than in gases, allowing sound to travel faster in liquids than in air. An example is when you can hear noises underwater while swimming. </li><li> Solids : Sound travels even faster in solids because the particles are tightly packed together. This makes it easier for vibrations (sound waves) to move through. For instance, if you tap one end of a metal rod, the sound travels through the rod to the other end quickly. </li></ul> Thus, all three— air, liquids, and solids —allow the transmission of sound waves, making option C (I, II, and III) the correct answer.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2019, 2024"
  },
  {
    "id": 221,
    "questionNumber": 221,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Properties of Waves",
    "year": 2005,
    "difficulty": "Hard",
    "text": "Which of the following statements about wave is/are correct? <ol style=\"list-style-type:upper-roman;\"><li style=\"margin-left:-0.25pt;\"> A wavefront is a line which contains all particles whose vibrations are in phase. </li><li style=\"margin-left:-0.25pt;\"> The direction of propagation of a wave is the line drawn parallel to the wavefront. </li><li style=\"margin-left:-0.25pt;\"> A wavefront is a circle which is common to all particles that are in the same state of disturbance. </li></ol>",
    "options": [
      {
        "key": "A",
        "text": "I only"
      },
      {
        "key": "B",
        "text": "II only"
      },
      {
        "key": "C",
        "text": "III only"
      },
      {
        "key": "D",
        "text": "I and III only"
      }
    ],
    "optionsMap": {
      "A": "I only",
      "B": "II only",
      "C": "III only",
      "D": "I and III only"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "I. A wavefront is a line which contains all particles whose vibrations are in phase: This statement is correct. In physics, a wavefront is a surface or line (depending on the dimensionality of the wave) that connects all points where the disturbance of the wave is in the same phase at a given instant. This means that particles on the same wavefront are vibrating in unison. II. The direction of propagation of a wave is the line drawn parallel to the wavefront: This statement is incorrect. While the direction of propagation is perpendicular to the wavefront, it isn't simply a line drawn parallel to it. Consider a spherical wavefront; the direction of propagation would be radial from the center, not just a single line parallel to the surface of the sphere. III. A wavefront is a circle which is common to all particles that are in the same state of disturbance: This statement is correct. For circular waves like ripples in water, the wavefront is indeed a circle, and all points on that circle share the same phase and displacement from the source of the disturbance.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2022
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2022"
  },
  {
    "id": 222,
    "questionNumber": 222,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Properties of Waves",
    "year": 2026,
    "difficulty": "Easy",
    "text": "The amplitude of a wave is the",
    "options": [
      {
        "key": "A",
        "text": "distance between two successive troughs of the wave"
      },
      {
        "key": "B",
        "text": "separation of two adjacent particles vibrating in phase"
      },
      {
        "key": "C",
        "text": "Maximum displacement of the wave particle from the equilibrium position"
      },
      {
        "key": "D",
        "text": "distance travelled by a wave in a complete cycle of its motion"
      }
    ],
    "optionsMap": {
      "A": "distance between two successive troughs of the wave",
      "B": "separation of two adjacent particles vibrating in phase",
      "C": "Maximum displacement of the wave particle from the equilibrium position",
      "D": "distance travelled by a wave in a complete cycle of its motion"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "C. maximum displacement of the wave particle from the equilibrium position .The amplitude of a wave refers to the maximum displacement of the wave particles from their equilibrium (rest) position. It is a measure of the wave's energy and is typically associated with the height or depth of the wave.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2026
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2026"
  },
  {
    "id": 223,
    "questionNumber": 223,
    "subject": "Physics",
    "topic": "Waves - Basics",
    "subtopic": "Properties of Waves",
    "year": 2018,
    "difficulty": "Medium",
    "text": "Which of the following waves cannot be polarized?",
    "options": [
      {
        "key": "A",
        "text": "infra-red"
      },
      {
        "key": "B",
        "text": "yellow-light"
      },
      {
        "key": "C",
        "text": "x-rays"
      },
      {
        "key": "D",
        "text": "sound"
      }
    ],
    "optionsMap": {
      "A": "infra-red",
      "B": "yellow-light",
      "C": "x-rays",
      "D": "sound"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Sound waves cannot be polarized. Polarization is a property that applies to transverse waves, where the oscillations or vibrations occur perpendicular to the direction of the wave. In contrast, sound waves are longitudinal waves, and the oscillations occur parallel to the direction of the wave propagation. Since sound waves do not have a perpendicular oscillation direction, they cannot be polarized. On the other hand, infrared, yellow-light, and x-rays are examples of electromagnetic waves, which are transverse waves and can be polarized under certain conditions.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2018,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2018, 2020"
  },
  {
    "id": 224,
    "questionNumber": 224,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Simple Voltaic Cells",
    "year": 1993,
    "difficulty": "Hard",
    "text": "A simple cell with mercury-amalgamated zinc electrode prevents",
    "options": [
      {
        "key": "A",
        "text": "local actions"
      },
      {
        "key": "B",
        "text": "polarization"
      },
      {
        "key": "C",
        "text": "buckling"
      },
      {
        "key": "D",
        "text": "degradation"
      }
    ],
    "optionsMap": {
      "A": "local actions",
      "B": "polarization",
      "C": "buckling",
      "D": "degradation"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "local actions A simple cell with a mercury-amalgamated zinc electrode is designed to prevent local action , which refers to unwanted side reactions that occur on the surface of a zinc electrode due to impurities in the zinc. These impurities can cause the zinc to react with the electrolyte, even when the cell is not in use, leading to energy loss. The amalgamation of the zinc with mercury helps to reduce or eliminate these local actions by providing a more uniform surface and preventing the reaction of impurities with the electrolyte.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1993,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1993, 2020"
  },
  {
    "id": 225,
    "questionNumber": 225,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Simple Voltaic Cells",
    "year": 2020,
    "difficulty": "Easy",
    "text": "A simple cell with mercury-amalgamated zinc electrode prevents",
    "options": [
      {
        "key": "A",
        "text": "local action"
      },
      {
        "key": "B",
        "text": "polarization"
      },
      {
        "key": "C",
        "text": "buckling"
      },
      {
        "key": "D",
        "text": "degradation"
      }
    ],
    "optionsMap": {
      "A": "local action",
      "B": "polarization",
      "C": "buckling",
      "D": "degradation"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Local action refers to the corrosion of the zinc electrode that can occur in a simple cell due to impurities in the zinc. When zinc reacts with impurities, it can undergo self-discharge, leading to a decrease in the cell's efficiency and overall performance. The use of a mercury-amalgamated zinc electrode helps minimize local action by providing a smoother and more homogeneous surface, reducing impurities' effect on the zinc. This results in a more stable and long-lasting cell performance.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1993,
      2020
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1993, 2020"
  },
  {
    "id": 226,
    "questionNumber": 226,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Simple Voltaic Cells",
    "year": 2014,
    "difficulty": "Medium",
    "text": "In a common emitter configuration, the output voltage is through the",
    "options": [
      {
        "key": "A",
        "text": "collector"
      },
      {
        "key": "B",
        "text": "emitter"
      },
      {
        "key": "C",
        "text": "resistor"
      },
      {
        "key": "D",
        "text": "base"
      }
    ],
    "optionsMap": {
      "A": "collector",
      "B": "emitter",
      "C": "resistor",
      "D": "base"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "In common emitter configuration, input voltage (V<sub>BE</sub> ) is applied between base and emitter terminals, output voltage (V<sub>CE</sub> ) is applied between emitter and collector while Emitter is connected to both input and output. Base is the input terminal, collector is the output terminal and emitter is the common terminal for both input and output.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2014,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2014, 2016"
  },
  {
    "id": 227,
    "questionNumber": 227,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Electric Cells",
    "year": 2011,
    "difficulty": "Hard",
    "text": "Which of the following will be applied when a metal Y is used to electroplate another metal X in electrolysis?",
    "options": [
      {
        "key": "A",
        "text": "Y is the anode and very high current is used"
      },
      {
        "key": "B",
        "text": "X is the anode and very high current is used"
      },
      {
        "key": "C",
        "text": "X is the cathode and Y is the anode"
      },
      {
        "key": "D",
        "text": "Y is the cathode and X is the anode"
      }
    ],
    "optionsMap": {
      "A": "Y is the anode and very high current is used",
      "B": "X is the anode and very high current is used",
      "C": "X is the cathode and Y is the anode",
      "D": "Y is the cathode and X is the anode"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Metals and hydrogen are deposited at the cathode, while non-metals and oxygen are deposited on the anode. When a metal Y is used to electroplate another metal x, the coating metal Y is the anode while the coated metal x, is the cathode. A very high current is also used.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2015
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2015"
  },
  {
    "id": 228,
    "questionNumber": 228,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Simple Voltaic Cells",
    "year": 2005,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/com/jEd_F_P8NSkPVcIs1a3u0eHf_191H9FCm4FDhDaMItbUu_Vb_IHPmKMqxJGCSdxUI22gfQjePa5E-7SYqRr9ZmKgFRQ9R9D4L3BN241T_fJoED-Jh77hdPxcq-mpCS-7v3dTGaQOL3mRUieXt46gCw;base64,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\" style=\"width:59.41%\"/> The figure above shows three capacitors, 2µF, 3µF and 6µF connected in series. If the p.d. across the system is 12V, the p.d. across the 6µF capacitor is",
    "options": [
      {
        "key": "A",
        "text": "2V"
      },
      {
        "key": "B",
        "text": "4V"
      },
      {
        "key": "C",
        "text": "6V"
      },
      {
        "key": "D",
        "text": "12V"
      }
    ],
    "optionsMap": {
      "A": "2V",
      "B": "4V",
      "C": "6V",
      "D": "12V"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Q = CV \\(\\frac{1}{C_e} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}\\) Simplifying: \\(\\frac{1}{C_e} = \\frac{3 + 2 + 1}{6}\\) 6 = 6Ce 6 = 6Ce Ce = 1.0μF Note that when capacitors are arranged in series, they have the same charge Qe = 1.0μF × 12 Qe = 12μC p.d across the 6μF capacitor is Q = CV 12μC = 6μF × V V = 2V",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 229,
    "questionNumber": 229,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Electric Cells",
    "year": 1994,
    "difficulty": "Medium",
    "text": "Which of the following has the lowest internal resistance when new?",
    "options": [
      {
        "key": "A",
        "text": "Leclanché cell"
      },
      {
        "key": "B",
        "text": "Daniel cell"
      },
      {
        "key": "C",
        "text": "Accumulator"
      },
      {
        "key": "D",
        "text": "Torch battery"
      }
    ],
    "optionsMap": {
      "A": "Leclanché cell",
      "B": "Daniel cell",
      "C": "Accumulator",
      "D": "Torch battery"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Accumulator An accumulator (such as a lead-acid battery) typically has the lowest internal resistance when new compared to other listed cells. This is because:",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 230,
    "questionNumber": 230,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Electric Cells",
    "year": 2025,
    "difficulty": "Hard",
    "text": "When a resistance R is across a cell, the voltage across the terminals of the cell is reduced to two-third of its normal value. The internal resistance of the cell is",
    "options": [
      {
        "key": "A",
        "text": "\\(\\frac 21R\\)"
      },
      {
        "key": "B",
        "text": "\\(\\frac 12R\\)"
      },
      {
        "key": "C",
        "text": "\\(\\frac32R\\)"
      },
      {
        "key": "D",
        "text": "\\(5R\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\frac 21R\\)",
      "B": "\\(\\frac 12R\\)",
      "C": "\\(\\frac32R\\)",
      "D": "\\(5R\\)"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "V = IR ..... (i) V = Voltage I = current R = resistance Also: \\(I={emf\\over R+r}\\) ..... (ii) emf = electromotive force Substitute value of I in equation (ii) into (i) \\(V=({emf\\over R+r})R\\) Also: V = ⅔ emf \\(\\implies{2\\over3}emf= ({emf\\over R+r})R\\) Cancel out emf from both sides \\(\\implies{2\\over3}={R\\over R+r}\\) 2(R + r) = 3R 2R + 2r = 3 R 2r = R Internal resistance, \\(r={R\\over2}\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 231,
    "questionNumber": 231,
    "subject": "Physics",
    "topic": "Electrochemical Cells",
    "subtopic": "Electric Cells",
    "year": 2019,
    "difficulty": "Easy",
    "text": "Which of the following devices is used for storing electric charges?",
    "options": [
      {
        "key": "A",
        "text": "Transformer"
      },
      {
        "key": "B",
        "text": "Ammeter"
      },
      {
        "key": "C",
        "text": "Potentiometer"
      },
      {
        "key": "D",
        "text": "Capacitor"
      }
    ],
    "optionsMap": {
      "A": "Transformer",
      "B": "Ammeter",
      "C": "Potentiometer",
      "D": "Capacitor"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "A capacitor is a device used for storing electric charges. It consists of two conductive plates separated by an insulating material known as a dielectric. When a voltage is applied across the plates, an electric field is established, causing charges of opposite polarity to accumulate on the plates.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 232,
    "questionNumber": 232,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure & Measurements",
    "year": 2017,
    "difficulty": "Medium",
    "text": "The barometric reading at a place is 73.5cm Hg. Calculate the pressure at a point 30m below the surface of water contained in a reservoir at the place. [g = 10ms <sup>-1</sup>, density of mercury = 1.3 × 10 <sup>4</sup> kgm <sup>-3</sup>, density of water = 1.0 × 10 <sup>3</sup> kgm <sup>-3</sup> ]",
    "options": [
      {
        "key": "A",
        "text": "4.0 × 10 <sup>5</sup> Nm <sup>-2</sup>"
      },
      {
        "key": "B",
        "text": "3.0 × 10 <sup>5</sup> Nm <sup>-2</sup>"
      },
      {
        "key": "C",
        "text": "2.0 × 105 Nm <sup>-2</sup>"
      },
      {
        "key": "D",
        "text": "1.0 × 105 Nm <sup>-2</sup>"
      }
    ],
    "optionsMap": {
      "A": "4.0 × 10 <sup>5</sup> Nm <sup>-2</sup>",
      "B": "3.0 × 10 <sup>5</sup> Nm <sup>-2</sup>",
      "C": "2.0 × 105 Nm <sup>-2</sup>",
      "D": "1.0 × 105 Nm <sup>-2</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Given: Density of water, ρ = 1.0 × 10 <sup>3</sup> kgm <sup>-3</sup> Height, h = 30m g = 10ms <sup>-1</sup> Pressure, P = hρg = 30 × 1000 × 10 = 3.0 × 10 <sup>5</sup> Nm <sup>-2</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 233,
    "questionNumber": 233,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure & Measurements",
    "year": 2023,
    "difficulty": "Hard",
    "text": "A pressure cooker saves both time and fuel in cooking because inside the cooker, the",
    "options": [
      {
        "key": "A",
        "text": "boiling point of water is raised"
      },
      {
        "key": "B",
        "text": "pressure is constant"
      },
      {
        "key": "C",
        "text": "heat is completely trapped"
      },
      {
        "key": "D",
        "text": "temperature is evenly distributed"
      }
    ],
    "optionsMap": {
      "A": "boiling point of water is raised",
      "B": "pressure is constant",
      "C": "heat is completely trapped",
      "D": "temperature is evenly distributed"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "A pressure cooker operates by increasing the pressure inside, which, in turn, raises the boiling point of water. This higher boiling point allows food to cook at a higher temperature, reducing cooking time and saving fuel.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 2023"
  },
  {
    "id": 234,
    "questionNumber": 234,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure & Measurements",
    "year": 2018,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/jpeg;base64,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\" style=\"height:216px; width:239px\"/> The diagram above illustrates a beaker of water being heated. It is observed that as the bubbles rise they get bigger in size. The reason for this observation is ......",
    "options": [
      {
        "key": "A",
        "text": "water pressure on the bubble decreases"
      },
      {
        "key": "B",
        "text": "density of water increases with rise in temperature"
      },
      {
        "key": "C",
        "text": "volume of water increases with rise in temperature"
      },
      {
        "key": "D",
        "text": "atmospheric pressure on the bubbles decreases"
      }
    ],
    "optionsMap": {
      "A": "water pressure on the bubble decreases",
      "B": "density of water increases with rise in temperature",
      "C": "volume of water increases with rise in temperature",
      "D": "atmospheric pressure on the bubbles decreases"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When a bubble is deep under water, it has both atmospheric pressure and water pressure (giving it depth), acting on it but as it rises, the water pressure decreases. At this point, the basic pressre acting on the bubble is the atmospheric pressure. Recall that pressure is inversely proportional to volume (Boyles' law), hence, the less the pressure, the more the volume.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2018"
  },
  {
    "id": 235,
    "questionNumber": 235,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure & Measurements",
    "year": 2024,
    "difficulty": "Medium",
    "text": "Which of the following is the dimension of pressure?",
    "options": [
      {
        "key": "A",
        "text": "ML <sup>-1</sup> T <sup>-2</sup>"
      },
      {
        "key": "B",
        "text": "MLT <sup>-2</sup>"
      },
      {
        "key": "C",
        "text": "ML <sup>2</sup> T <sup>-3</sup>"
      },
      {
        "key": "D",
        "text": "ML <sup>-3</sup>"
      }
    ],
    "optionsMap": {
      "A": "ML <sup>-1</sup> T <sup>-2</sup>",
      "B": "MLT <sup>-2</sup>",
      "C": "ML <sup>2</sup> T <sup>-3</sup>",
      "D": "ML <sup>-3</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Pressure(P) = ρ × h × g ρ = mass/volume = ML <sup>-3</sup> H = L g = ms <sup>-2</sup> = LT <sup>-2</sup> Hence, P = ML <sup>-3</sup> × L × LT <sup>-2</sup> P = ML <sup>-1</sup> T <sup>-2</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1995,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1995, 2024"
  },
  {
    "id": 236,
    "questionNumber": 236,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure in Fluids",
    "year": 2009,
    "difficulty": "Hard",
    "text": "The terminal velocity of a ball-bearing falling through a viscous fluid is reached when the",
    "options": [
      {
        "key": "A",
        "text": "upthrust is equal to the weight of the ball"
      },
      {
        "key": "B",
        "text": "Ball accelerates uniformly"
      },
      {
        "key": "C",
        "text": "upthrust is equal to the velocity of the ball"
      },
      {
        "key": "D",
        "text": "velocity is uniform"
      }
    ],
    "optionsMap": {
      "A": "upthrust is equal to the weight of the ball",
      "B": "Ball accelerates uniformly",
      "C": "upthrust is equal to the velocity of the ball",
      "D": "velocity is uniform"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Velocity is uniformA ball-bearing falling through a viscous fluid initially accelerates due to gravity. However, as it moves, resistive forces (viscous drag and upthrust) act against its motion. When the sum of these resistive forces equals the gravitational force acting on the ball, acceleration ceases, and the ball moves with constant velocity . This constant velocity is known as terminal velocity .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2008,
      2009
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2008, 2009"
  },
  {
    "id": 237,
    "questionNumber": 237,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure in Fluids",
    "year": 2015,
    "difficulty": "Easy",
    "text": "The pressure applied to an enclosed fluid at one end is transmitted equally throughout the fluid and to the container walls. This statement is.",
    "options": [
      {
        "key": "A",
        "text": "Archimede’s principle."
      },
      {
        "key": "B",
        "text": "Bernoulli’s principle."
      },
      {
        "key": "C",
        "text": "pascal's principle."
      },
      {
        "key": "D",
        "text": "Heisenberg's uncertainty principle."
      }
    ],
    "optionsMap": {
      "A": "Archimede’s principle.",
      "B": "Bernoulli’s principle.",
      "C": "pascal's principle.",
      "D": "Heisenberg's uncertainty principle."
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "When the pressure at any point in a confined, incompressible fluid is increased, the increase is transmitted equally to every other point in the fluid and to the walls of the container. In other words, pressure applied to an enclosed fluid is distributed uniformly throughout the fluid and to the container walls.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 238,
    "questionNumber": 238,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure in Fluids",
    "year": 2015,
    "difficulty": "Medium",
    "text": "The barometric reading at a place is 73.5cmHg. Calculate the pressure at a point 30m below the surface of water contained in a reservoir at the place.[g = 10ms <sup>-2</sup>, density of mercury = 1.3 x 10 <sup>4</sup> kgm <sup>-3</sup>, density of water = 1.0 x 10 <sup>3</sup> kgm <sup>-3</sup> ]",
    "options": [
      {
        "key": "A",
        "text": "4.0 x 10 <sup>5</sup> Nm <sup>-2</sup>"
      },
      {
        "key": "B",
        "text": "3.0 x 10 <sup>5</sup> Nm <sup>-2</sup>"
      },
      {
        "key": "C",
        "text": "2.0 x 10 <sup>5</sup> Nm <sup>-2</sup>"
      },
      {
        "key": "D",
        "text": "1.0 x 10 <sup>5</sup> Nm <sup>-2</sup>"
      }
    ],
    "optionsMap": {
      "A": "4.0 x 10 <sup>5</sup> Nm <sup>-2</sup>",
      "B": "3.0 x 10 <sup>5</sup> Nm <sup>-2</sup>",
      "C": "2.0 x 10 <sup>5</sup> Nm <sup>-2</sup>",
      "D": "1.0 x 10 <sup>5</sup> Nm <sup>-2</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Total pressure = pressure due to the atmosphere + Pressure due to waterThe barometric reading is 73.5HgP = hpgP = 1.0 x 10 <sup>3</sup>,H = 30,g = 10,P = 1.0 x 10 <sup>3</sup> x 30 x 10P = 3 x 10 <sup>5</sup> Nm <sup>-2</sup>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 239,
    "questionNumber": 239,
    "subject": "Physics",
    "topic": "Pressure",
    "subtopic": "Pressure in Fluids",
    "year": 2017,
    "difficulty": "Hard",
    "text": "The pressure applied to an enclosed fluid at one end is transmitted equally throughout the fluid and of the container walls. This statement is",
    "options": [
      {
        "key": "A",
        "text": "Archimede's principle"
      },
      {
        "key": "B",
        "text": "Bernoulli's principle"
      },
      {
        "key": "C",
        "text": "Pascal's principle"
      },
      {
        "key": "D",
        "text": "Heisenberg's uncertainty principle"
      }
    ],
    "optionsMap": {
      "A": "Archimede's principle",
      "B": "Bernoulli's principle",
      "C": "Pascal's principle",
      "D": "Heisenberg's uncertainty principle"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Pascal's law (also Pascal's principle or the principle of transmission of fluid-pressure) is a principle in fluid mechanics that states that a pressure change occurring anywhere in a confined incompressible fluid is transmitted throughout the fluid such that the same change occurs everywhere.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2015,
      2017
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2015, 2017"
  },
  {
    "id": 240,
    "questionNumber": 240,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Scalars & Vectors",
    "year": 2008,
    "difficulty": "Easy",
    "text": "Which of the following is NOT a vector quantity?",
    "options": [
      {
        "key": "A",
        "text": "Altitude"
      },
      {
        "key": "B",
        "text": "Acceleration"
      },
      {
        "key": "C",
        "text": "Displacement"
      },
      {
        "key": "D",
        "text": "Weight"
      }
    ],
    "optionsMap": {
      "A": "Altitude",
      "B": "Acceleration",
      "C": "Displacement",
      "D": "Weight"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Altitude (: Altitude is the height above a reference point, such as the height above sea level. It only has magnitude and no specific direction associated with it, making it a scalar quantity. On the other hand: Acceleration (: Acceleration is a vector quantity as it has both magnitude and direction. It represents the rate of change of velocity. Displacement (: Displacement is a vector quantity that specifies the change in position and has both magnitude and direction. Weight (: Weight is the force due to gravity acting on an object. It is a vector quantity with both magnitude and direction.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1983,
      2008,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1983, 2008, 2021"
  },
  {
    "id": 241,
    "questionNumber": 241,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Scalars & Vectors",
    "year": 2024,
    "difficulty": "Medium",
    "text": "Which of the following quantities is a vector?",
    "options": [
      {
        "key": "A",
        "text": "Temperature"
      },
      {
        "key": "B",
        "text": "Electric Field"
      },
      {
        "key": "C",
        "text": "Energy"
      },
      {
        "key": "D",
        "text": "Power"
      }
    ],
    "optionsMap": {
      "A": "Temperature",
      "B": "Electric Field",
      "C": "Energy",
      "D": "Power"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Electric Field It has both magnitude (strength of the field) and direction (the direction a positive test charge would move if placed in the field). Electric field is defined as: \\(\\vec{E} = \\frac{\\vec{F}}{q}\\)",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2006,
      2019,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2006, 2019, 2024"
  },
  {
    "id": 242,
    "questionNumber": 242,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Scalars & Vectors",
    "year": 1983,
    "difficulty": "Hard",
    "text": "Which of the following is NOT a vector quantity?",
    "options": [
      {
        "key": "A",
        "text": "Force"
      },
      {
        "key": "B",
        "text": "Altitude"
      },
      {
        "key": "C",
        "text": "weight"
      },
      {
        "key": "D",
        "text": "Displacement"
      }
    ],
    "optionsMap": {
      "A": "Force",
      "B": "Altitude",
      "C": "weight",
      "D": "Displacement"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The question asks which of the listed options is NOT a vector quantity. To solve this, we need to recall the definitions of vector quantities and scalar quantities .<ul><li> Vector quantities are quantities that have both magnitude and direction .</li><li> Scalar quantities have only magnitude without any associated direction. </li></ul>",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      1983,
      2008,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1983, 2008, 2021"
  },
  {
    "id": 243,
    "questionNumber": 243,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Scalars & Vectors",
    "year": 2001,
    "difficulty": "Easy",
    "text": "Which of the following consists entirely of vector quantities?",
    "options": [
      {
        "key": "A",
        "text": "Velocity, magnetic flux and reaction."
      },
      {
        "key": "B",
        "text": "Work, pressure and moment"
      },
      {
        "key": "C",
        "text": "Displacement, impulse and power."
      },
      {
        "key": "D",
        "text": "Tension, magnetic flux and mass."
      }
    ],
    "optionsMap": {
      "A": "Velocity, magnetic flux and reaction.",
      "B": "Work, pressure and moment",
      "C": "Displacement, impulse and power.",
      "D": "Tension, magnetic flux and mass."
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Velocity, magnetic flux, and reaction .",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2021
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2001, 2021"
  },
  {
    "id": 244,
    "questionNumber": 244,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Algebra & Resolution",
    "year": 2023,
    "difficulty": "Medium",
    "text": "A tugboat is travelling from Asaba to Onitsha across the River Niger with a resultant velocity of 20 knots. If the river flows at 12 knots, the direction of motion of the boat relative to the direction of water flow is?",
    "options": [
      {
        "key": "A",
        "text": "36.87<sup>o</sup>"
      },
      {
        "key": "B",
        "text": "53.13<sup>o</sup>"
      },
      {
        "key": "C",
        "text": "90<sup>o</sup>"
      },
      {
        "key": "D",
        "text": "136<sup>o</sup>"
      }
    ],
    "optionsMap": {
      "A": "36.87<sup>o</sup>",
      "B": "53.13<sup>o</sup>",
      "C": "90<sup>o</sup>",
      "D": "136<sup>o</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The resultant velocity (hypotenuse) = 20 knots The flow of the river (adjacent) = 12 knots Using trigonometry, \\(\\cos\\theta={adj\\over hyp}\\)\\(\\cos\\theta={12\\over20}\\)\\(\\theta=\\cos^{-1}({12\\over20})\\) ϴ = 53.13 <span> ° </span>",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 2023"
  },
  {
    "id": 245,
    "questionNumber": 245,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Relative Velocity",
    "year": 1980,
    "difficulty": "Hard",
    "text": "A tugboat is travelling from Asaba to Onitsha across the River Niger with a resultant velocity of 20 knots. If the river flows at 12 knots, the direction of motion of the boat relative to the direction of water flow is?",
    "options": [
      {
        "key": "A",
        "text": "36.87<sup>o</sup>"
      },
      {
        "key": "B",
        "text": "53.13<sup>o</sup>"
      },
      {
        "key": "C",
        "text": "90<sup>o</sup>"
      },
      {
        "key": "D",
        "text": "136<sup>o</sup>"
      }
    ],
    "optionsMap": {
      "A": "36.87<sup>o</sup>",
      "B": "53.13<sup>o</sup>",
      "C": "90<sup>o</sup>",
      "D": "136<sup>o</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The tugboat must travel across the river, so its resultant velocity of 20 knots is perpendicular to the direction of the river flow. <ul> <li>Resultant velocity = 20 knots</li> <li>River flow velocity = 12 knots</li> </ul> Let θ be the angle between the boat's direction and the direction of water flow. Using cosine: cos θ = Adjacent / Hypotenuse cos θ = 12 / 20 cos θ = 0.6 θ = cos⁻¹(0.6) θ = 53.13°",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1980,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1980, 2023"
  },
  {
    "id": 246,
    "questionNumber": 246,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Algebra & Resolution",
    "year": 1998,
    "difficulty": "Easy",
    "text": "A ball is moving at 18ms <sup>-</sup> ¹ in a direction inclined at 60° to the horizontal. The horizontal component to its velocity is",
    "options": [
      {
        "key": "A",
        "text": "9√3ms <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "6√3ms <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "8√3ms <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "9ms <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "9√3ms <sup>-1</sup>",
      "B": "6√3ms <sup>-1</sup>",
      "C": "8√3ms <sup>-1</sup>",
      "D": "9ms <sup>-1</sup>"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Horizontal component = 18cos60 = 18(0.5) = 9ms <sup>-1</sup>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 247,
    "questionNumber": 247,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Algebra & Resolution",
    "year": 2017,
    "difficulty": "Medium",
    "text": "The net vertical force in the diagram below is <img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAOQBPQMBIgACEQEDEQH/xAAtAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAv4AAAAAAAAAAAAAAAAEJNgABo70WRHuK9klYKNdjbAAABrRUnSCxZqlgOheaZVTtbFlAAAAAAAAAAKZWuh85JK8Vu4GUAAAAHjxmxHLrhL7Jz3pEbJAAAAACpW2ulNhrlDHSNwAAHPugjHUriICfiYAurBnAAAAGrtaBvgAAAAa0HoHmdmPpCeZ0AAAAAPn0VPNZo8kFHtZugAAaG/oG+A8ej6AVgmqns28qcxHRZNyvN5YvgAAAAAAAFXtAqdr1qoXVGSYAj5DVMNan4UjrlG2A+6MENC2bwA1G2MPv2AAAAAAAAADmmck2SRJjJyq9k1gz6BvvlRJyrS1mNLdAAAAAAwZwAAVssijC8qMLyowvKjCSyxAulN8i6RUAMufTjCRuVPF5UYXlRheVGF5UYXlRheVGE/TftOLveOS9aN0AAAAAAAAACs2anFxAAAAAABp4JMVuezAAAAAAAAAABRL3RC9gAAAAAAAAAAAAAAAAAAU25VkswAAAAAAAAAAAAAAAAAAFZs1ZLMAAAAAAAAAAAAAAAAAB8+/DQiajKFslOYXAn0NnJJrbIAAAAAAAAAAAAAAABFce7toCsXaEISJvG6Va4au0AAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAKRAAAgICAQIEBwEBAAAAAAAAAwQCBQEGABcwEhMUUBARFRYgNkA1If/aAAgBAQABCAD2OmpBU/qvB7bYstLr/NXOwvoGeBYzt7hH5isKzYvXVTxpJmkwmoeXYdbCiqZkyl41N1ZRutubJ6K5x0OwAuPOhyrsMWNcBrCVqm224qL+W5acWQJJOC52qi0Dllk96bxgzROzoEmQVuJxra+E+w+4NFJhqaTy1pNxpxbNH5tLmspkDzqPqKWLbNbqKMBoNOVTCzsFWgNKgYD/AC7O/c1hgmUDsuyGJgYfqu8cpjOmq1pO9qIhRIQkWGAqhmc4BMbRdZIRrCV8m/WA1GzKk7OtP3NhR2E7o5VrS+2JiyZj6zb8rhGCgqM/43lZmzqzhxQJKWMiLZBeWlKaCl2uwFkAzg7bAAsgIA6FYlWwJBUUkiHZkItNXktcWWe5a7EslLKy+Kht6BbS91lXFhdZZn+djVWS20YZQKIRhyGU9E/TTm5SVOxqu5wqx3F0VFTNGB223VUA5Ozmztb8mRVlXRIVkYZhsSTr9XICet1306shiXataGutITzP6ld64XwWKjqjwMHV7SVYuiw8YPattlAlP0qqeuMvGw5eRjGEYwh3pRjOMoTZ1oyRMuUVXtAiT9JZ9lIdmM73q+w9YqVwclZyzd7H5o1gGp6Ah1gNXSS2FPkTZqoYUjZK6EDias++/VIWUPCzKd7q/wD3NfZo2QMkV/NMtnI70G/gUogjyQsJxnCM4fF/ZB4NhOsQ1s5z4duYxjCMYQtZLO/U0w682DDqEyniNxpH5perVv6msZ/hc1iGCYdqa7ZjgPhK6hOM4RnD8UrNZ47wR2r+EE5Fwq8+DXLorQFfWlQWZq0fpyAFPg/Zo1o8Eahm82b/ALhCsRrB5Gr8G66vekObDVdXOAiE+U0Y4FiMhBnMZJfxOIJPjwNqatzrPzMpT3aFrD5i/BZ9NorIg2tInb4B56mrFTFY5XAtcNWarTspRhGU5u7HMxcp0yWsYyebdr/ZY11HYPmgmDYX6s+VLwRRGHEgvgGKUTM+T8LK3RrBeM8A3Wy5xNhGuUrg4Et/W7Cbp7ozMMKXX3C2XXa4BVkLLN9ZUyoYAfRat1GCnqKbYkbbwixxKsXRYeMGUowjKc2NjM6X0lGhrQAzkd/umaVW8Pn99uhsczaEsxQnxJnCK4YrACCF/DFbeoWxl2AsgGcFvrtdaeIkoXFzQmwG3+sIVeHWs4St9lzAzqiSqAcAW7m0Qx9uvZ5Tbcwn8gvbk0q2GqMtVf5dd+V5rWLdqB8dP586fz50/nzp/PnT+fOn8+dP586fz50/nzp/PnT+fOn8+dP586fz50/nxTUMsMvBz0/nzp/PnT+fOn8+dP586fz50/nzp/PnT+fOn8+dP586fz50/nzp/PltqOKxAzfIQkSUYQsqVqrCrNqq/wAuu/m1f/X2fv2lfixrjq5rahGsF4AbJRt3EU/IVD6ZRdf+bWzwxfX4PaKH9rvPaKH9rvPaKsEAbhbwj7Oj+8W3tCP7xbe0I/vFt7NKUYRlOddaoWWT4WR/eLbjlygi4sqz7JKMZxlCbAWdVu4kHC4RBsNs/GjQNeWhX287PVwLnxPXyCDGAFlcJDsFEpYcFix9FL2G6qQ2qMxcEqyZnC0KyuFWJjWGziD8M0NUr5vi3bzkqvNrlVc9K+V6/lk/sWKxLFhN/HPtjXuPUdS+fDB8KKwZwxCKCY3CuQ93/8QAQBAAAgEEAAMFBQYDAw0AAAAAAQIDAAQREgUhMRMiMEGTFDJAUFEQICNCVMJhgbNSZLIVJDNTYmNyg5KUoqOx/9oACAEBAAk/APkc7yds46+QX5davcTu4REHQE+b/Ragt3NvbiUGCrWAPJazSwGLyeJNir0IheW0Uj6UAGlgjdgPqy58HOkYycCuFSWpnjLROX2rgv4Dvgym4Woewki8t9srUWhk2ymc9DimPaW3vfDQSy3DEIgRN9atb8308azTSzxFEcxEHRKsZ4haWd4Jdx1lePQxioJUvYUmidD1MTl6UhltYgQeRBC+D0iTOPqegFSCS+ls5oYbWFCMIEoOL32qDtuchITHfoH2y0vGKAfnTCZWv9NP2yp/AbnLUkio38llQHvLRyJVDD+Hw10RbSjHuKcPVyzueiJChqO7/wC0oOLjv7h10PveHGgeTG7AYLY6ZNSBI0GWY0HSD8+OYjSlMUllIAhYYTcV3Elc4BGCs3ivOIhCAdJhGN6uriNPqbuuJ3frPTyPMIwZDI27bnmfvDvjvxf8a1Kbe7BEsE4qMvGfcnqUPG4yrDxIw8cgwymotQ7lj5mmgM2QJtCNsryAekJnwPPu7Do/ig3F2eSInMB+mGqV+ySMypapUYVISZ8IuED+Q8C0kcNIJxp/5gvUaOh6qwyDUpKYzLbPQ9mvByZH5Av4sWj3D7SnJOx8SUJGCBQe2swyh7no9Rh5/OZqwXMil0+qCkxPN35fDjEc/lMlB7uzZ8RzVMJEJI8N5CbqTdw3hp7Tdl9NB0U1KZHwR2FKFVQAqgYAA8dQysCCCMgg1OYZvOJjkEVGbO6H1GieFcRyQtJm3C9UXwZQvIkL+Z8eSih7JYNy3Yc5Eqyu5niTM8yRhyA/PDtQmne4TeOOFNnKddsU8hjuCRkD3CvXelfe530I6Dsxk5+At1L45SDk4om94cBUuSMbqeTL4FvHHEsmLcr1dPtkSNB1ZzgCmDKwBVgcgg/cjF3duRjziqYzzeUVKFVQAqgYAAq6jsrhBEZ5HAQSoRRihH+RnX05jSk291xq5K9RujmOjt7H2/ZTf245I/gpPZbtH/5dQmCbostMGVgCrA5BB+8jh7WTR9qUtIxEcKAFt5W6Cnka4juni9/mjHCVccUjuMiTS+TeB3jGWAFSb9nt3sY945+yXXOdVAyzEUTY8ONRa5xsxOWYj7bSORkIKk1aRsijCeWg+i1aQAREmLuDuEnOVqNC8edGIyVzyOD8HbrIB0J6imN7YAZdH6xijrKqAyRH7su0lu+si6kamnmUxb40I86vXinfZIHDdI8hhSW8SWnahAhLFy64LUwVVBJYnAAFQm5uT1kHSOphd3D/APR8bdi34ohL9wkDcVCcZwlwiVIjoejKcg/asAmyDMEADZPMF/tlG/LES83NZtLD+wMgyCogvIAt+Z8ebH4yxuJxDO0YuVflAiHySg03s1sBbsSfJDU1wZt5nwzAjd+45qHtt+kQAL/TerK7Nk7sUiZGkSvwbnn+EfseQm6k3cNTBVUElicAAVAZ5sEmVhhQKcXty3VpOY8a5hi26buEzj6Z+A4r2VndyvLOhTmC9XoghuoUhlQpvhI00BWiSsUaoCeuFGKjee2PIjroRUoeNxlWFAw3H+sWojPb+VwlcWN77Sd4LcE9ynNtY+/DFUQSMEnxf93/AFBW88PPv9ZamSVD21fpIP8AAPvXnZaRCPGm1cTHo1xMejXEx6NcTHo1xMejXEx6NcTHo1xMejXEx6NcTHo1xMejXEx6NcTHo1xMejXEx6NcRhAgcAMmHriY9GuJj0a4mPRriY9GuJj0a4mPRriY9GuJj0a4mPRriY9GuJj0a4mPRriY9GuJj0av99NO52VKWZiAABkkmsCSYydzrqEr9JB/gHw36v8Ae/jy6GTXD4z0OaiG/PMrc3NPEvZb7b02wiiRM/XQYz8N1eZ3/kj/ACj+8f1vlH94/rfKPOAv/Nyj/KP0g/Z8o/SD9nyj9IP2fJmCqoJLE4AAqUsIiNu6RX6QfsqQo8wzt5KPIsfkqhlYEEEZBBoO8P5M8hIlSo0RsQY/9s4TuUCYVk3fzVn8o6E5gEmntITMO9GRiADKY12EQPm9E73MQeJ+WhBpH7QW/b9O7rtr8i0E684XNQsZi+umMHIrnjmzebMajeOCGX/OJW5olb50f/4+tbCUcHLxF/IiY6UhWeDhpgn/AIyJL8ji/HdAuT9nD/8A2yVbZk8yCV2qEK6wCBccgIwchcVFieRNHfY8x84//8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAgEBPwAWf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQMBAT8AFn//2Q==\" style=\"height:228px; width:317px\"/>",
    "options": [
      {
        "key": "A",
        "text": "40N"
      },
      {
        "key": "B",
        "text": "42N"
      },
      {
        "key": "C",
        "text": "44N"
      },
      {
        "key": "D",
        "text": "36N"
      }
    ],
    "optionsMap": {
      "A": "40N",
      "B": "42N",
      "C": "44N",
      "D": "36N"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Resolving vertical components, F sin ϴ: = 25 – 20 + 30 sin 45 <sup>0</sup> + 20 sin 60 <sup>0</sup> = 25 – 20 + 21.2 + 17.3 = 43.55N The net vertical force is approximately 44N",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 248,
    "questionNumber": 248,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Algebra & Resolution",
    "year": 2003,
    "difficulty": "Hard",
    "text": "<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAEMAtAMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAABAUGAgMBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADfgAAAAAAAAAAAA8YFrUGc0fpZgAAAAB8oT7eYvbAAACjvBTXHMMngAAEMmVMS2Ku96HFNzANJJgzgBntCKRdik8tAKSt1vmZHZcdgHFbagACrg6LxPX7V2gAAAAAAAAAAAAB//8QAOBAAAgIBAgEJBQQLAAAAAAAAAQIDBAUAERIGFSIwMUFRVZMTICEycRAUJZIjM0BCQ1BSU3Jzgv/aAAgBAQABPwD+YTyPDEzrDJKRt0EG7HXOdjyq7+TWez1+pNReGGaD5yVlX4PrC5WTJQF5KjxEflPWMQoJPYNS8pcNEQDa3+gJ1G4kRHG+zAEbjY/H37eXSnfq1JoXAnICSayMFaWSkZaYnb2hVN+7ftOgAOrZ1QFmYBR2k6fLT25DDjIeM98zjZF1DyTZMpFPPKJYtuOT/PqOUlA3cU7RL+mgPtF1iLPOMENwqRtGE/6/eOgykkAgkdvVXMxBXkEESmeweyJNLjbV9hJkpOh3Vk+QaSNIkVEUKoGwA00sSnZpEB8CwGsln6+MlrBumkofdkO5XbVS7VvQiWvKrr7xAI21DDFBCkUSBUQbKo1Wryw5DJSMvQlMPAfoux6i5fq0Yw0z7E/Kg+LN9Br8VyvbvSqf0/xXGqlCrSThgiA7y3axP25iXE1JBPcos/tCFD6y2ApStSdIWSMMQ6R/MxfVHHU6EfBWhCePiftPYdc75TySb1F1z9lvI5fUGufst5HL6g1z9lvI5fUGueMn5FL6g1z9lvI5fUGsjl8n9xs/hU0PQ/W8Y6OuTedyd0mKeAzJ3z+5KsjxSCN+F+E8LEb7HVPEwV39tKzT2P7snxPu5qhzhjZ4AN5NuJPqNYO2cnXqSSA71gQ/+3QZSSAwJHaPDqpoo54nikUMjjZgdRRRwoEjRVUDYADq4K0FZCkMYRSxYgeJ1WSUX7DmmYl2Kh9x0gD+1f/EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8Ac//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8Ac//Z\" style=\"height:67px; width:180px\"/>The figure above shows two velocities \\(\\vec{V_1}\\) and \\(\\vec{V_1}\\)Which of the following diagrams correctly represents the vector difference<sub>\\(\\vec{W}=\\vec{V_1}-\\vec{V_2}\\)</sub><img src=\"data:image/png;base64,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\" style=\"height:134px; width:300px\"/>",
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
    "explanation": "Given:W = V<sub>1</sub> - V<sub>2</sub>V<sub>1</sub> = W + V<sub>2</sub>It implies that V<sub>1</sub> is the resultant of W and V<sub>2</sub><img src=\"data:image/jpeg;base64,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\" style=\"height:133px; width:180px\"/>;",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 249,
    "questionNumber": 249,
    "subject": "Physics",
    "topic": "Scalars & Vectors",
    "subtopic": "Relative Velocity",
    "year": 2024,
    "difficulty": "Easy",
    "text": "<img src=\"data:image/png;base64,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M2TIEMfXSDPZEYg7BBNY2TG0GBECNMq4YkVB/KvC/fTTT27cuHFut912SzWkSqLVrBu8YN5991235557NkRuzJgxqeK98847bo011vACrJZATEWsnwWinFRWZN0EVj+rAEVkV8JKFUvv1dLSF7p64arFz8NdXwfPPfdcd/DBB/tGAf/1eMJfmlM14YM7Q81Ro0a5m2++uS7NPPIzp9KIy8ME1pxa0i3MlwSQ5oHqNfy4EraQ1UpSGhIus8wybs0116y45/lw4okneoGVJ83+Rou6pI6QvHeMwAqZ7tRCCxuq8hO6dVK+4B/ev/rqK3fBBRe4JZdc0h166KFulVVW8RPYtfInv3bmV7gPGjTIs5Hnsgryh/C2eat8SlhlBbXSCyw1jJDpfGBoPRX16qSs4UTo1nqOGk8RvlnPxNeyG264wRO6+OKL3fXXX++OOOII/wUNRwkC5bfxFPONOWPGDE9Q81fwl1cdU5nKzpfz/k2t9AJLlei7777zFSrsnSXMKMLQvdVFSsVkIy2fuVlbREMWP/BP41hiiSX8Fybx9ttvv/nGzubfTjQSQOQDs/LKKzuejz32WPf000+7o48+2q+14itaGY2ECWVmptwIqC3BZakFlgTSQw895L8olRlWeuqhQ4e6q666qg+bCCzycfnll7vNNtvMb0uhkdxzzz3utddec+eff35lCEUjCgtHhBAOwoIwmiuSf7tsBPHo0aN98j/++KObOnWq32YzduxYx+/www/3E9qLL76423DDDdvFZmK66ggluBIDmWPbEVA5iZFSCyw1dvaaPfXUU15DoYINHDjQvfXWW+6oo45yjz76qHv++eddT0+PbxTsU4szqcwWYSNIECgvvviiu//++93aa6/tvyKJBwmaM844o0/yCy+8sNfGhg0b1se9E1/Qon755RfP+rfffuvns1jNPn78eHfrrbf6zc10OtLKOjGPxnN7EKD98JMptcCCSRr+xhtvLH4rNls79tprL3+W0Q477OBOOukk3yCUOQm72BZNCZIwPH6xuxIUHcWPw+Jfz000SINh42effebuvvtuP5ScPn2631s3pHeRIfvcQnrPPfecw3+55ZZzgwcPdnfccYef0FUYn3CL/0ibzuO+++5zL730ku9EmM/iFAaGx5MnT/Yc7bjjjv7MqXby2mJoLLkcEYjrTekFFnlPUtvprXXw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\" style=\"height:72px; width:300px\"/> The diagram above illustrates two boxes P and Q of masses 27.3 kg and 6.2 kg respectively on a smooth horizontal surface. If a force of F of 150 N is applied to the combined forces, calculate the acceleration.",
    "options": [
      {
        "key": "A",
        "text": "4.5 ms <sup>-2</sup>"
      },
      {
        "key": "B",
        "text": "33.7 ms <sup>-2</sup>"
      },
      {
        "key": "C",
        "text": "70 ms <sup>-2</sup>"
      },
      {
        "key": "D",
        "text": "150 ms <sup>-2</sup>"
      }
    ],
    "optionsMap": {
      "A": "4.5 ms <sup>-2</sup>",
      "B": "33.7 ms <sup>-2</sup>",
      "C": "70 ms <sup>-2</sup>",
      "D": "150 ms <sup>-2</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Total mass = 27.3 + 6.2 = 33.5 kg \\(acceleration\\ =\\frac{Force}{mass}\\ =\\ \\frac{150}{33.5} \\) ∴ acceleration = 4.5 ms <sup>-2</sup>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 250,
    "questionNumber": 250,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Kinetic Theory",
    "year": 2017,
    "difficulty": "Medium",
    "text": "Which of the following statements is NOT correct?",
    "options": [
      {
        "key": "A",
        "text": "Molecules of a liquid are stationary"
      },
      {
        "key": "B",
        "text": "Brownian motion is an evidence of particle nature of matter"
      },
      {
        "key": "C",
        "text": "Matter is made up of molecules"
      },
      {
        "key": "D",
        "text": "The molecules of matter are in constant motion"
      }
    ],
    "optionsMap": {
      "A": "Molecules of a liquid are stationary",
      "B": "Brownian motion is an evidence of particle nature of matter",
      "C": "Matter is made up of molecules",
      "D": "The molecules of matter are in constant motion"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "This statement is not correct. In a liquid, the molecules are not stationary; instead, they are in constant motion. The motion may be random, and the molecules exhibit properties such as Brownian motion, which is evidence of their particle nature and dynamic behavior.",
    "isRepeated": true,
    "repeatCount": 4,
    "repeatYears": [
      1985,
      2004,
      2017,
      2025
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1985, 2004, 2017, 2025"
  },
  {
    "id": 251,
    "questionNumber": 251,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Kinetic Theory",
    "year": 2016,
    "difficulty": "Hard",
    "text": "I. Change of state. II. Diffusion. III. Radiation IV. Osmosis Which of the processes above can be explained using the kinetic theory?",
    "options": [
      {
        "key": "A",
        "text": "I, III and IV"
      },
      {
        "key": "B",
        "text": "I, II and III"
      },
      {
        "key": "C",
        "text": "I, II and IV"
      },
      {
        "key": "D",
        "text": "I, II, III and IV"
      }
    ],
    "optionsMap": {
      "A": "I, III and IV",
      "B": "I, II and III",
      "C": "I, II and IV",
      "D": "I, II, III and IV"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "I. Change of state: Kinetic theory explains how changes of state like melting, boiling, and freezing occur by relating them to changes in the kinetic energy and motion of particles in a substance. As temperature increases, particles gain kinetic energy and move more, leading to transitions between solid, liquid, and gas states. II. Diffusion: This process, where particles move from a region of higher concentration to lower concentration, can be explained by the random motion of particles described in kinetic theory. Particles constantly collide with each other and move in different directions, leading to net movement from areas with more frequent collisions to areas with fewer. III. Radiation: This phenomenon, involving the emission and propagation of electromagnetic energy, is not directly explained by kinetic theory. While the temperature of an object influences the type and amount of radiation emitted, the theory itself doesn't explain the nature and mechanisms of electromagnetic radiation. IV. Osmosis: This process, where solvent molecules move through a semipermeable membrane from a region of lower solute concentration to a region of higher solute concentration, can be explained using the kinetic theory principles of particle motion and concentration gradients.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 252,
    "questionNumber": 252,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Kinetic Theory",
    "year": 2011,
    "difficulty": "Easy",
    "text": "I. Change of state II. Diffusion III. Radiation IV. Osmosis Which of the processes above can be explained using the kinetic theory?",
    "options": [
      {
        "key": "A",
        "text": "I, II and IV"
      },
      {
        "key": "B",
        "text": "I, II, III and IV"
      },
      {
        "key": "C",
        "text": "I, II and III"
      },
      {
        "key": "D",
        "text": "I, III and IV"
      }
    ],
    "optionsMap": {
      "A": "I, II and IV",
      "B": "I, II, III and IV",
      "C": "I, II and III",
      "D": "I, III and IV"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The kinetic theory of matter is a scientific model that explains the behavior of matter based on the motion of its particles. Let's see how each process can be explained using the kinetic theory: I. Change of state - The kinetic theory explains that matter exists in different states (solid, liquid, gas) due to the arrangement and motion of particles. Changes of state involve transitions between these arrangements and motions. II. Diffusion - Diffusion is the movement of particles from an area of higher concentration to an area of lower concentration. This can be explained by the random motion of particles in the kinetic theory. III. Radiation - This process involves the transmission of energy through space as electromagnetic waves or particles.While the kinetic theory explains the motion of individual molecules,it doesn't directly explain the nature of electromagnetic radiation or how it propagates. IV. Osmosis - Osmosis is the movement of solvent molecules from an area of lower solute concentration to an area of higher solute concentration through a semipermeable membrane. The kinetic theory helps explain the random motion of particles, including solvent molecules.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 253,
    "questionNumber": 253,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Molecular Theory",
    "year": 2005,
    "difficulty": "Medium",
    "text": "Which of the following statements is correct?",
    "options": [
      {
        "key": "A",
        "text": "The density of a liquid decreases when it expands"
      },
      {
        "key": "B",
        "text": "The densities of liquids increase when the liquids are heated"
      },
      {
        "key": "C",
        "text": "The real expansivity of a liquid is less that its apparent expansivity"
      },
      {
        "key": "D",
        "text": "A liquid changes to solid when heated to a sufficiently high temperature"
      }
    ],
    "optionsMap": {
      "A": "The density of a liquid decreases when it expands",
      "B": "The densities of liquids increase when the liquids are heated",
      "C": "The real expansivity of a liquid is less that its apparent expansivity",
      "D": "A liquid changes to solid when heated to a sufficiently high temperature"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The density of a liquid decreases when it expands. This statement is correct because when a liquid expands, its volume increases while its mass remains constant.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2005
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2005"
  },
  {
    "id": 254,
    "questionNumber": 254,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Molecular Theory",
    "year": 1978,
    "difficulty": "Hard",
    "text": "A few grains of table salt were put in a cup of water, kept at constant temperature and left undisturbed. Eventually all the water tasted salty. The action is due to",
    "options": [
      {
        "key": "A",
        "text": "convection"
      },
      {
        "key": "B",
        "text": "osmosis"
      },
      {
        "key": "C",
        "text": "capillarity"
      },
      {
        "key": "D",
        "text": "diffusion"
      }
    ],
    "optionsMap": {
      "A": "convection",
      "B": "osmosis",
      "C": "capillarity",
      "D": "diffusion"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "diffusion.The process by which the salt grains spread evenly throughout the water is called diffusion .Diffusion is the movement of particles from an area of higher concentration (where the salt grains are) to an area of lower concentration (the rest of the water) until equilibrium is reached. This results in the entire cup of water tasting salty.Why the Other Options Are Wrong:convection: Convection involves the movement of fluids (liquids or gases) due to differences in temperature or density. This is not the primary mechanism here.osmosis: Osmosis is the movement of water molecules across a semi-permeable membrane from a region of lower solute concentration to a region of higher solute concentration. This does not apply here as there is no membrane involved.capillarity: Capillarity refers to the ability of a liquid to flow in narrow spaces without the assistance of external forces. This is not relevant to the situation described.conductivity: Conductivity refers to the ability of a material to conduct electricity or heat. This is unrelated to the spreading of salt in water.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 255,
    "questionNumber": 255,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Molecular Theory",
    "year": 2023,
    "difficulty": "Easy",
    "text": "A few grains of table salt were put in a cup of water, kept at constant temperature and left undisturbed. Eventually all the water tasted salty. The action is due to",
    "options": [
      {
        "key": "A",
        "text": "convection"
      },
      {
        "key": "B",
        "text": "osmosis"
      },
      {
        "key": "C",
        "text": "capillarity"
      },
      {
        "key": "D",
        "text": "diffusion"
      }
    ],
    "optionsMap": {
      "A": "convection",
      "B": "osmosis",
      "C": "capillarity",
      "D": "diffusion"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Diffusion is the movement of particles from an area of higher concentration to an area of lower concentration. In this case, the salt particles (higher concentration) are diffusing through the water (lower concentration), spreading evenly and making the entire solution taste salty.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1978,
      2023
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1978, 2023"
  },
  {
    "id": 256,
    "questionNumber": 256,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Molecular Theory",
    "year": 2005,
    "difficulty": "Medium",
    "text": "A. Define surface tension. B. State two methods by which the surface tension of a liquid can be reduced.",
    "options": [
      {
        "key": "A",
        "text": "A.Surface tension is the force which acts parallel the surface of the liquid which makes it to behave as if it were covered with elastic skin."
      },
      {
        "key": "B",
        "text": "B. I. adding alcohol. Ii by adding camphor."
      }
    ],
    "optionsMap": {
      "A": "A.Surface tension is the force which acts parallel the surface of the liquid which makes it to behave as if it were covered with elastic skin.",
      "B": "B. I. adding alcohol. Ii by adding camphor.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Molecular Theory.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2005,
      2012
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2005, 2012"
  },
  {
    "id": 257,
    "questionNumber": 257,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Physics & Matter",
    "year": 2012,
    "difficulty": "Hard",
    "text": "Which subject is this?",
    "options": [
      {
        "key": "A",
        "text": "Chemistry"
      },
      {
        "key": "B",
        "text": "CRK"
      },
      {
        "key": "C",
        "text": "Music"
      },
      {
        "key": "D",
        "text": "Physics"
      }
    ],
    "optionsMap": {
      "A": "Chemistry",
      "B": "CRK",
      "C": "Music",
      "D": "Physics"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "The subject in consideration is Physics.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2010,
      2012
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2010, 2012"
  },
  {
    "id": 258,
    "questionNumber": 258,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Physics & Matter",
    "year": 2010,
    "difficulty": "Easy",
    "text": "Which subject is this?",
    "options": [
      {
        "key": "A",
        "text": "Physics"
      },
      {
        "key": "B",
        "text": "Government"
      },
      {
        "key": "C",
        "text": "CRK"
      },
      {
        "key": "D",
        "text": "Chemistry"
      }
    ],
    "optionsMap": {
      "A": "Physics",
      "B": "Government",
      "C": "CRK",
      "D": "Chemistry"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "The subject is Physics.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2010,
      2012
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2010, 2012"
  },
  {
    "id": 259,
    "questionNumber": 259,
    "subject": "Physics",
    "topic": "Concepts of Matter",
    "subtopic": "Kinetic Theory",
    "year": 1989,
    "difficulty": "Medium",
    "text": "From the kinetic theory of gases, temperature is a",
    "options": [
      {
        "key": "A",
        "text": "Form of energy and is proportional to the total kinetic energy of the molecules"
      },
      {
        "key": "B",
        "text": "Form of energy and is proportional to the average kinetic energy of the molecules"
      },
      {
        "key": "C",
        "text": "Physical property and is proportional to the total kinetic energy of the molecules"
      },
      {
        "key": "D",
        "text": "Physical property and is proportional to the average kinetic energy of the molecules"
      }
    ],
    "optionsMap": {
      "A": "Form of energy and is proportional to the total kinetic energy of the molecules",
      "B": "Form of energy and is proportional to the average kinetic energy of the molecules",
      "C": "Physical property and is proportional to the total kinetic energy of the molecules",
      "D": "Physical property and is proportional to the average kinetic energy of the molecules"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "Temperature is a physical property and is proportional to the average kinetic energy of the molecules. According to the kinetic theory of gases , temperature is a measure of the average kinetic energy of the molecules in a substance. It is not a form of energy itself, but a physical property that reflects the energy associated with the motion of particles. The total kinetic energy of the molecules would vary depending on the amount of gas, but temperature is proportional to the average kinetic energy, independent of the number of molecules.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 260,
    "questionNumber": 260,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Electric Charges",
    "year": 2003,
    "difficulty": "Hard",
    "text": "A positively charged glass rod is placed near the cap of a positively charged electroscope. The divergence of the leaf is observed to.",
    "options": [
      {
        "key": "A",
        "text": "decrease"
      },
      {
        "key": "B",
        "text": "Increase"
      },
      {
        "key": "C",
        "text": "remain the same."
      },
      {
        "key": "D",
        "text": "Increase and collapse immediately."
      }
    ],
    "optionsMap": {
      "A": "decrease",
      "B": "Increase",
      "C": "remain the same.",
      "D": "Increase and collapse immediately."
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "The repulsion force from like charges increases divergence.A positively charged rod has an excess of protons compared to electrons, giving it an overall positive charge. It can attract negatively charged objects and repel other positively charged objects due to the electrostatic force of attraction and repulsion.Conversely, a negatively charged rod has an excess of electrons compared to protons, giving it an overall negative charge. It can attract positively charged objects and repel other negatively charged objects due to the electrostatic force of attraction and repulsion.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2010
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2010"
  },
  {
    "id": 261,
    "questionNumber": 261,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Electric Charges",
    "year": 2010,
    "difficulty": "Easy",
    "text": "A positively charged glass rod is placed near the cap of a positively charged electroscope. The divergence of the leaf is observed to.",
    "options": [
      {
        "key": "A",
        "text": "Increase."
      },
      {
        "key": "B",
        "text": "Decrease."
      },
      {
        "key": "C",
        "text": "remain the same."
      },
      {
        "key": "D",
        "text": "Increase and collapse immediately."
      }
    ],
    "optionsMap": {
      "A": "Increase.",
      "B": "Decrease.",
      "C": "remain the same.",
      "D": "Increase and collapse immediately."
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "B. IncreaseA positively charged electroscope already has its leaves diverged because both leaves carry the same positive charge and repel each other.When a positively charged glass rod is brought near the cap of the electroscope, it repels positive charges in the cap downward toward the leaves. This causes more positive charge to accumulate on the leaves, increasing the repulsive force between them.As a result, the divergence of the leaves increases.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2003,
      2010
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2003, 2010"
  },
  {
    "id": 262,
    "questionNumber": 262,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Electric Charges",
    "year": 2011,
    "difficulty": "Medium",
    "text": "The correct expression for the potential at a point, distance r from a charge q, in an electric field is",
    "options": [
      {
        "key": "A",
        "text": "q / 4πε<sub>o</sub> r"
      },
      {
        "key": "B",
        "text": "q <sup>2</sup> / 4πε<sub>o</sub> r"
      },
      {
        "key": "C",
        "text": "q <sup>2</sup> / 4πε<sub>o</sub> r <sup>2</sup>"
      },
      {
        "key": "D",
        "text": "q <sup>2</sup> / 2πε<sub>o</sub> r <sup>2</sup>"
      }
    ],
    "optionsMap": {
      "A": "q / 4πε<sub>o</sub> r",
      "B": "q <sup>2</sup> / 4πε<sub>o</sub> r",
      "C": "q <sup>2</sup> / 4πε<sub>o</sub> r <sup>2</sup>",
      "D": "q <sup>2</sup> / 2πε<sub>o</sub> r <sup>2</sup>"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Expressions for the potential at a point due to a point charge in an electric field is V = q / (4πε<sub>0</sub> r) Where: V is the potential at the point (in Volts) ε<sub>0</sub> is the electric permittivity of vacuum (8.854 × 10 <sup>-12</sup> F/m) q is the charge of the point charge (in Coulombs) r is the distance from the point charge to the point where the potential is measured (in meters)",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2011,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2011, 2016"
  },
  {
    "id": 263,
    "questionNumber": 263,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Field",
    "year": 2006,
    "difficulty": "Hard",
    "text": "An electron of mass m and charge e enters a uniform electric field between two metal plates P and Q separated by a distance d. P is maintained at a potential V while Q is earthed. Determine an expression for the magnitude of the acceleration of the electron through the field.",
    "options": [
      {
        "key": "A",
        "text": "eV/md"
      },
      {
        "key": "B",
        "text": "d/meV"
      },
      {
        "key": "C",
        "text": "Md/eV"
      },
      {
        "key": "D",
        "text": "e/Vmd"
      }
    ],
    "optionsMap": {
      "A": "eV/md",
      "B": "d/meV",
      "C": "Md/eV",
      "D": "e/Vmd"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Given:<ul><li>Mass of electron = m .</li><li>Charge of electron = e .</li><li>Distance between plates = d .</li><li>Potential difference = V (P is at potential V, Q is earthed at 0 V) .</li></ul>Solution:Step 1: Find the electric field intensityThe electric field between the plates is:E = V/dStep 2: Find the force on the electronThe electric force on the electron is:F = eE = e(V/d) = eV/dStep 3: Find the accelerationUsing Newton's second law (F = ma):Ma = eV/da = eV/(md)Answer: A. eV/(md)This can also be written as a = eV/md",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2001,
      2006
    ],
    "repeatBadge": "🔥 High-Yield JAMB Repeat Pattern (2001, 2006)"
  },
  {
    "id": 264,
    "questionNumber": 264,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Coulomb’s Law",
    "year": 1981,
    "difficulty": "Easy",
    "text": "Which of the following statements is CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "Charges generated on glass rubbed with silk are called negative"
      },
      {
        "key": "B",
        "text": "Charges in various media can be carried by protons detached from their atom"
      },
      {
        "key": "C",
        "text": "The magnitude of any charge is a multiple of the charge of an electron"
      },
      {
        "key": "D",
        "text": "The intensity of an electric field is a scalar quantity"
      }
    ],
    "optionsMap": {
      "A": "Charges generated on glass rubbed with silk are called negative",
      "B": "Charges in various media can be carried by protons detached from their atom",
      "C": "The magnitude of any charge is a multiple of the charge of an electron",
      "D": "The intensity of an electric field is a scalar quantity"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "The magnitude of any charge is a multiple of the charge of an electron This is consistent with the elementary charge, which is the fundamental unit of electric charge, and the charge of an electron is considered the basic, indivisible charge unit. The charge of any object is an integer multiple of the elementary charge.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      1981,
      2005
    ],
    "repeatBadge": "🔥 Repeated in JAMB 1981, 2005"
  },
  {
    "id": 265,
    "questionNumber": 265,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Electric Charges",
    "year": 2016,
    "difficulty": "Medium",
    "text": "Two different materials, rubbed against each other, acquire opposite charges when separated. This is an example of charging by",
    "options": [
      {
        "key": "A",
        "text": "Induction"
      },
      {
        "key": "B",
        "text": "Friction"
      },
      {
        "key": "C",
        "text": "Conduction"
      },
      {
        "key": "D",
        "text": "Convection"
      }
    ],
    "optionsMap": {
      "A": "Induction",
      "B": "Friction",
      "C": "Conduction",
      "D": "Convection"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Friction When two different materials are rubbed against each other and they acquire opposite charges , this is a classic case of charging by friction . ✔️ What happens in charging by friction? <ul><li> Electrons are transferred from one material to another due to the difference in their electron affinities .</li><li> The material that loses electrons becomes positively charged .</li><li> The material that gains electrons becomes negatively charged .</li><li> No external conductor or influence is needed—just rubbing/contact between the materials. </li></ul>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 266,
    "questionNumber": 266,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Field",
    "year": 1983,
    "difficulty": "Hard",
    "text": "If the force of a charge of 0.2 coulomb in an electric field is 4N, then the electric field intensity of the field is",
    "options": [
      {
        "key": "A",
        "text": "0.8"
      },
      {
        "key": "B",
        "text": "0.8N/C"
      },
      {
        "key": "C",
        "text": "20.0N/C"
      },
      {
        "key": "D",
        "text": "4.2N/C"
      }
    ],
    "optionsMap": {
      "A": "0.8",
      "B": "0.8N/C",
      "C": "20.0N/C",
      "D": "4.2N/C"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\\(Field \\:intensity =\\frac{force}{charge}\\)\\(E = \\frac{F}{q}\\) Where: <ul><li> E is the electric field intensity (in N/, .</li><li> F is the force experienced by the charge (in Newtons), .</li><li> q is the magnitude of the charge (in Coulombs). .</li></ul> Given: <ul><li> Force F=4 N .</li><li> Charge q = 0.2 .</li></ul> Substitute the values into the formula: \\(E = \\frac{4 \\, \\text{N}}{0.2 \\, \\text{C}} = 20 \\, \\text{N/C}\\) Thus, the electric field intensity is 20 N/C .",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 267,
    "questionNumber": 267,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Field",
    "year": 2009,
    "difficulty": "Easy",
    "text": "Use the information below to answer this questionAn isolated metal sphere of radius R, carrying an electric charge, Q is situated in a medium of relative permittivity, εr. A test chare is placed at a point P, distance r from the surface of the sphere. Let εo represent the permittivity of free space.The magnitude of the electric field intensity at P is given by the expression.",
    "options": [
      {
        "key": "A",
        "text": "\\(\\frac{Q}{Q\\pi \\varepsilon_o \\varepsilon_r (R+r^2)}\\)"
      },
      {
        "key": "B",
        "text": "\\(\\frac{Q}{Q\\pi \\varepsilon_o \\varepsilon_r rr^2}\\)"
      },
      {
        "key": "C",
        "text": "\\(\\frac{Q}{Q\\pi \\varepsilon_o \\varepsilon_r (R-r^2)}\\)"
      },
      {
        "key": "D",
        "text": "\\(\\frac{Q}{4\\pi \\varepsilon_o \\varepsilon_r R^2}\\)"
      }
    ],
    "optionsMap": {
      "A": "\\(\\frac{Q}{Q\\pi \\varepsilon_o \\varepsilon_r (R+r^2)}\\)",
      "B": "\\(\\frac{Q}{Q\\pi \\varepsilon_o \\varepsilon_r rr^2}\\)",
      "C": "\\(\\frac{Q}{Q\\pi \\varepsilon_o \\varepsilon_r (R-r^2)}\\)",
      "D": "\\(\\frac{Q}{4\\pi \\varepsilon_o \\varepsilon_r R^2}\\)"
    },
    "correctAnswer": "D",
    "correct_option": "D",
    "explanation": "\\(Electric\\ field\\ intensity = \\frac{Electric\\ field\\ force}{charge}\\)\\(Electric\\ field\\ force = \\frac{KQ^2}{R^2}\\)Where K = \\(\\frac{Q}{4\\pi \\varepsilon_o \\varepsilon_r R^2}\\)Electric field intensity = \\(\\frac{Q^2}{4\\pi \\varepsilon_o \\varepsilon_r R^2} \\times \\frac{1}{q}\\)Electric field = \\(\\frac{Q}{4\\pi \\varepsilon_o \\varepsilon_r R^2}\\)",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 268,
    "questionNumber": 268,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Field",
    "year": 2013,
    "difficulty": "Medium",
    "text": "A charge of 2.0 x 10 <sup>-5</sup> C experience a force of 80 N in a uniform electric field. calculate the magnitude of the electric field intensity.",
    "options": [
      {
        "key": "A",
        "text": "8.0 x 10 <sup>6</sup> NC <sup>-1</sup>"
      },
      {
        "key": "B",
        "text": "4.0 x 10 <sup>6</sup> NC <sup>-1</sup>"
      },
      {
        "key": "C",
        "text": "4.0 x 10 <sup>4</sup> NC <sup>-1</sup>"
      },
      {
        "key": "D",
        "text": "2.0 x 10 <sup>4</sup> NC <sup>-1</sup>"
      }
    ],
    "optionsMap": {
      "A": "8.0 x 10 <sup>6</sup> NC <sup>-1</sup>",
      "B": "4.0 x 10 <sup>6</sup> NC <sup>-1</sup>",
      "C": "4.0 x 10 <sup>4</sup> NC <sup>-1</sup>",
      "D": "2.0 x 10 <sup>4</sup> NC <sup>-1</sup>"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "Electric Intensity = Force / ChargeForce (F) = 80NCharge (Q) = 2 x 10 <sup>-5</sup> CE = 80 / 2x10 <sup>-5</sup> = 40 x 10 <sup>5</sup> = 4 x 10 <sup>6</sup> N",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 269,
    "questionNumber": 269,
    "subject": "Physics",
    "topic": "Electrostatics",
    "subtopic": "Coulomb’s Law",
    "year": 1998,
    "difficulty": "Hard",
    "text": "The force of repulsion between two-point positive charges 5µC and 8µC separated at a distance of 0.02m apart is. (1 /4πε<sub>0</sub> = 9 x 10 <sup>9</sup> Nm²C <sup>-2</sup> )",
    "options": [
      {
        "key": "A",
        "text": "1.8 x 10 <sup>-10</sup> N"
      },
      {
        "key": "B",
        "text": "9.0 x 10 <sup>-8</sup> N"
      },
      {
        "key": "C",
        "text": "9.0 x 10 <sup>2</sup> N"
      },
      {
        "key": "D",
        "text": "4.5 x 10³N"
      }
    ],
    "optionsMap": {
      "A": "1.8 x 10 <sup>-10</sup> N",
      "B": "9.0 x 10 <sup>-8</sup> N",
      "C": "9.0 x 10 <sup>2</sup> N",
      "D": "4.5 x 10³N"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "\\(F = \\frac{1}{4\\pi \\varepsilon_0} \\cdot \\frac{q_1 q_2}{r^2}\\) <ul><li style=\"margin-left: 0in;\"> 1 /4πε<sub>0</sub> = 9 x 10 <sup>9</sup> Nm²C <sup>-2</sup></li><li> q<sub>1</sub> = 5µC = 5×10 <sup>-6</sup> C </li><li> q<sub>2</sub> = 8µC = 8×10 <sup>-6</sup> C </li></ul><span class=\"mathjax-latex\">\\(F = 9 \\times 10^9 \\cdot \\frac{(5 \\times 10^{-6})(8 \\times 10^{-6})}{(0.02)^2}\\) F = 900N = <span> 9.0 x 10 <sup>2</sup> N </span></span>",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 270,
    "questionNumber": 270,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Conduction in Gases",
    "year": 2024,
    "difficulty": "Easy",
    "text": "A gas would serve as an electrical conductor under",
    "options": [
      {
        "key": "A",
        "text": "Reduced pressure and high current"
      },
      {
        "key": "B",
        "text": "Reduced pressure and reduced potential"
      },
      {
        "key": "C",
        "text": "Increased magnetic field"
      },
      {
        "key": "D",
        "text": "Exposure to visible light"
      }
    ],
    "optionsMap": {
      "A": "Reduced pressure and high current",
      "B": "Reduced pressure and reduced potential",
      "C": "Increased magnetic field",
      "D": "Exposure to visible light"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Reduced pressure and high current Gases generally do not conduct electricity under normal conditions because they consist of neutral atoms or molecules. However, they can become conductors under specific circumstances: <ol><li> Reduced Pressure : At low pressures, the gas molecules are less densely packed, making it easier for electrons to move and create ionization. </li><li> High Current : A high current provides sufficient energy to ionize the gas molecules, creating free ions and electrons, which allows the gas to conduct electricity. </li></ol> This principle is used in devices like neon lights and fluorescent lamps , where ionized gases act as conductors.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2000,
      2017,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2000, 2017, 2024"
  },
  {
    "id": 271,
    "questionNumber": 271,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Conduction in Gases",
    "year": 2017,
    "difficulty": "Medium",
    "text": "A gas would serve as an electrical conductor under",
    "options": [
      {
        "key": "A",
        "text": "reduced pressure and reduced potential difference"
      },
      {
        "key": "B",
        "text": "exposure to light"
      },
      {
        "key": "C",
        "text": "reduced pressure and high potential difference"
      },
      {
        "key": "D",
        "text": "high pressure and high potential difference"
      }
    ],
    "optionsMap": {
      "A": "reduced pressure and reduced potential difference",
      "B": "exposure to light",
      "C": "reduced pressure and high potential difference",
      "D": "high pressure and high potential difference"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Under low pressure and high current, a gas can undergo a process called \"gas ionization,\" in which the gas molecules or atoms become ionized, forming charged particles (ions and electrons). This ionization process can occur when a sufficiently high electric field is applied to the gas. In a gas discharge, such as in a neon sign or a fluorescent light, the gas becomes a conductor when ionization takes place. The ionized particles can carry an electric current, allowing the gas to conduct electricity. This phenomenon is commonly observed in devices like neon lights and some types of gas-filled tubes.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2000,
      2017,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2000, 2017, 2024"
  },
  {
    "id": 272,
    "questionNumber": 272,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Conduction in Gases",
    "year": 2000,
    "difficulty": "Hard",
    "text": "A gas would serve as an electrical conductor under",
    "options": [
      {
        "key": "A",
        "text": "reduced pressure and reduced potential"
      },
      {
        "key": "B",
        "text": "reduced pressure and high current"
      },
      {
        "key": "C",
        "text": "increased magnetic field"
      },
      {
        "key": "D",
        "text": "exposure to visible light"
      }
    ],
    "optionsMap": {
      "A": "reduced pressure and reduced potential",
      "B": "reduced pressure and high current",
      "C": "increased magnetic field",
      "D": "exposure to visible light"
    },
    "correctAnswer": "B",
    "correct_option": "B",
    "explanation": "At low pressure and high current, gases become ionized, producing ions and electrons that conduct electricity. This gas discharge phenomenon is seen in devices like neon signs and fluorescent lamps.",
    "isRepeated": true,
    "repeatCount": 3,
    "repeatYears": [
      2000,
      2017,
      2024
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2000, 2017, 2024"
  },
  {
    "id": 273,
    "questionNumber": 273,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Electrolysis",
    "year": 2013,
    "difficulty": "Easy",
    "text": "If a current of 2.5A flows through an electrolyte for 3 hours and 1.8g of a substance is deposited, what is the mass of the substance that will be deposited if a current of 4A flows through it for 4.8 hours?",
    "options": [
      {
        "key": "A",
        "text": "4.6g"
      },
      {
        "key": "B",
        "text": "2.4g"
      },
      {
        "key": "C",
        "text": "3.2g"
      },
      {
        "key": "D",
        "text": "4.2g"
      }
    ],
    "optionsMap": {
      "A": "4.6g",
      "B": "2.4g",
      "C": "3.2g",
      "D": "4.2g"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Parameters given:Current, I = 2.5A → InitialTime, t = 3hours → Initial = 3 x 3600 = 10800secondsMass (Initial), M<sub>1</sub> = 1.8gCurrent, I = 4A → FinalTimes, t = 4.8hours → Final = (4.8x3600)secondsMass (final), M<sub>2</sub> = ?From Faraday's Law of ElectrolysisM α QM = ZQM/Q = ZM<sub>1</sub> /Q<sub>1</sub> = m<sub>2</sub> /Q<sub>2</sub> ---------- (i)​Also recall: Q = ItQ<sub>1</sub> = 2.5 × 3 × 3600 = 27000CQ<sub>2</sub> = 4 × 4.8 × 3600 =69120CM<sub>1</sub> = 1.8gM<sub>2</sub> = ?Substituting into (i)1.8/27000 = m<sub>2</sub> /69120M<sub>2</sub> = 4.6gSubstituting into (i)1.8/27000 = m<sub>2</sub> /69120M<sub>2</sub> = 4.6g",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2013,
      2016
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2013, 2016"
  },
  {
    "id": 274,
    "questionNumber": 274,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Conduction in Gases",
    "year": 2017,
    "difficulty": "Medium",
    "text": "<img src=\"data:image/png;base64,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\" style=\"height:161px; width:180px\"/> The diagram above illustrates a beaker of water being heated. It is observed that as the bubbles rise, they get bigger in size. The reason for this observation is.",
    "options": [
      {
        "key": "A",
        "text": "water pressure on the bubble’s decreases."
      },
      {
        "key": "B",
        "text": "density of water increases with rise in temperature."
      },
      {
        "key": "C",
        "text": "volume of water increases with rise in temperature."
      },
      {
        "key": "D",
        "text": "atmospheric pressure on the bubble’s decreases."
      }
    ],
    "optionsMap": {
      "A": "water pressure on the bubble’s decreases.",
      "B": "density of water increases with rise in temperature.",
      "C": "volume of water increases with rise in temperature.",
      "D": "atmospheric pressure on the bubble’s decreases."
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "When a bubble is deep under water, it has both atmospheric pressure and water pressure (giving it depth), acting on it but as it rises, the water pressure decreases. At this point, the basic pressure acting on the bubble is the atmospheric pressure. Recall that pressure is inversely proportional to volume (Boyles' law), hence, the less the pressure, the more the volume.",
    "isRepeated": true,
    "repeatCount": 2,
    "repeatYears": [
      2017,
      2018
    ],
    "repeatBadge": "🔥 Repeated in JAMB 2017, 2018"
  },
  {
    "id": 275,
    "questionNumber": 275,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Electrolysis",
    "year": 2007,
    "difficulty": "Hard",
    "text": "118.8 cm <sup>2</sup> surface of the copper cathode of a voltameter is to be coated with 10 <sup>-6</sup> m thick copper of density 9 x 10 <sup>3</sup> kgm <sup>-3</sup>. How long will the process run with 10A constant current? [e.c.e. of copper = 3.3 x 10 <sup>-7</sup> kg C <sup>-1</sup> ]",
    "options": [
      {
        "key": "A",
        "text": "10.8 min"
      },
      {
        "key": "B",
        "text": "20.0 min"
      },
      {
        "key": "C",
        "text": "0.54 min"
      },
      {
        "key": "D",
        "text": "15.0 min"
      }
    ],
    "optionsMap": {
      "A": "10.8 min",
      "B": "20.0 min",
      "C": "0.54 min",
      "D": "15.0 min"
    },
    "correctAnswer": "C",
    "correct_option": "C",
    "explanation": "Given: Area, A = 118.8 cm <sup>2</sup> = 118.8 × 10 <sup>-4</sup> m <sup>2</sup> Thickness = 10 <sup>-6</sup> m Density of copper = 9 x 10 <sup>3</sup> kgm <sup>-3</sup> Current, I = 10A e.c.e. of copper, z = 3.3 x 10 <sup>-7</sup> kg C <sup>-1</sup> M = ZItt = m/ZI Mass, m= density × volume volume= area × thickness = 118.8 × 10 <sup>-4</sup> × 10 <sup>-6</sup> = 1.188 × 10 <sup>-8</sup> m <sup>3</sup> M = 9 x 10 <sup>3</sup> kgm <sup>-3</sup> ×1.188 × 10 <sup>-8</sup> m <sup>3</sup> = 1.0692 × 10 <sup>-4</sup> Kg t = 1.0692 × 10 <sup>-4</sup> / [3.3 x 10 <sup>-7</sup> kg C <sup>-1</sup> × 10]t = 32.4s = 0.54min",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 276,
    "questionNumber": 276,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Electrolysis",
    "year": 2006,
    "difficulty": "Easy",
    "text": "A. State two applications of electrolysis. B. Explain what is meant by the electrochemical equivalent of copper is 3.3 × 10 <sup>-7</sup> kgC <sup>-1.</sup>",
    "options": [
      {
        "key": "A",
        "text": "A. Electrolysis is applied in the following:<ol><li>Extraction of metals.</li><li>Ammeter Calibration.</li><li>Metal purification.</li><li>Electroplating.</li></ol>"
      },
      {
        "key": "B",
        "text": "B.The electrochemical equivalent of a substance is the mass of that substance deposited or liberated when one coulomb of electric charge passes through it.For copper, the electrochemical equivalent is 3.3 × 10⁻⁷ kg/C , meaning that 3.3 × 10⁻⁷ kilograms of copper are deposited or released when a charge of 1 coulomb passes through the electrolyte."
      }
    ],
    "optionsMap": {
      "A": "A. Electrolysis is applied in the following:<ol><li>Extraction of metals.</li><li>Ammeter Calibration.</li><li>Metal purification.</li><li>Electroplating.</li></ol>",
      "B": "B.The electrochemical equivalent of a substance is the mass of that substance deposited or liberated when one coulomb of electric charge passes through it.For copper, the electrochemical equivalent is 3.3 × 10⁻⁷ kg/C , meaning that 3.3 × 10⁻⁷ kilograms of copper are deposited or released when a charge of 1 coulomb passes through the electrolyte.",
      "C": "",
      "D": ""
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "Correct answer is Option (A). Refer to official syllabus principles under Electrolysis.",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  },
  {
    "id": 277,
    "questionNumber": 277,
    "subject": "Physics",
    "topic": "Conduction in Fluids",
    "subtopic": "Electrolysis",
    "year": 1991,
    "difficulty": "Medium",
    "text": "The electrochemical equivalent of platinum is 5.0 x 10 <sup>-7</sup> kgC <sup>-1</sup> to plate-out 1.0kg of platinum, a current of 100A must be passed through an appropriate vessel for",
    "options": [
      {
        "key": "A",
        "text": "5.6 hours"
      },
      {
        "key": "B",
        "text": "56 hours"
      },
      {
        "key": "C",
        "text": "1.4 × 10 <sup>4</sup> hours"
      },
      {
        "key": "D",
        "text": "2.0 × 10 <sup>4</sup> hours"
      }
    ],
    "optionsMap": {
      "A": "5.6 hours",
      "B": "56 hours",
      "C": "1.4 × 10 <sup>4</sup> hours",
      "D": "2.0 × 10 <sup>4</sup> hours"
    },
    "correctAnswer": "A",
    "correct_option": "A",
    "explanation": "M = Itz1 = 100 × 5 × 10 <sup>-7</sup> × t\\(t={1\\over5×10^5}\\)t = 20,000sec= 5.6hrs",
    "isRepeated": false,
    "repeatCount": 1,
    "repeatYears": [],
    "repeatBadge": ""
  }
];
