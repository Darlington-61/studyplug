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
    "text": "A battery of emf 24V is connected to three resistors P, Q and R as illustrated in the diagram above. Determine the voltage across the resistor Q.",
    "imageUrl": "/diagrams/physics_q2_diagram.png",
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
    "text": "In the diagram above, the current I is",
    "imageUrl": "/diagrams/physics_q5_diagram.jpg",
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
    "text": "A battery of emf 24V is connected to three resistors P, Q and r as illustrated in the diagram above. Determine the voltage across the resistor Q.",
    "imageUrl": "/diagrams/physics_q6_diagram.png",
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
    "text": "A typical transistor characteristic is represented as",
    "imageUrl": "/diagrams/physics_q17_diagram.png",
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
    "text": "Which of the following velocity-time graph does not represent an accelerated motion?",
    "imageUrl": "/diagrams/physics_q31_diagram.jpg",
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
    "explanation": "Radius of the earth, R = 6.4 × 10 <sup>6</sup> m<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAG0AtAMBIgACEQEDEQH/xAAsAAEBAAMBAQAAAAAAAAAAAAAABQIEBgMBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADvwDxPbCR9PfLazPHZ0NcrpFY+gAAAAAA19HCwPoDiDt0Wya3O39M9KenrlZJpmYAAAE2lHKPuACJbxOH6L5SPHdCLak1RJriRS9JRWc7idI5boj3Al1IxZAB853oxjkAE7fmUzIAGOnvCDQ3gAk1vhjnHsAAAA8iTbl1AAAAAADUw3tQ20WkbAD5LKUpXPoAAAAAAAGhviP8Aa4kUvUAAAAAAAf/EADoQAAICAQIDBAcFBgcAAAAAAAECAwQRAAUhMVESEzByEBQgMkFhcSJCUoGRFSNAQ2KCJCUzUFOhwf/aAAgBAQABPwD2XkjjUtJIqL1Y4GjvO0hipvRZ82m3fa4/ftxr9dV7tKzjurUTZ6N/BTWIa6NJK4RBzY8Br1jcbpIrRdxEf50oyxHVV1HslXPbslrL9ZjkfppIIkACxIoHIBRpkVuaqfy1Y2yjZ4y1YieuMN+o16ldqEvTn7afGCY5H9raj3quJBXtxvVm6Scm+h0CDxByPGtWY6sLzSclHIcz8hqKrJalFm2Bw4xRDkvzPVvbt0692B4Z0DKdVKtyhIK0NgrJjKiTjFMvy6HQ3QQgC/A1Y9TxQ/npWVgCpBB5EeJAf2jaacgGCBysP9TjgW0PSdX91ux7ldhXc4a6RuAqumtu3MPt1aW5NGkjZGThc4ONA5wRq1djrdkYLSN7sa8WOhts11WmtSATAfuwvKE6pWI7dd0kQd6jFJkPUabbDXYy7dOa5/4jxiOl3KSDIv12hx98faQ/mNRyRyoHR1ZTyIOR4O7WHgpt3X+rKwij8z6rV0rQRwRj7KKAPZO0Q2Jt09ZhTE8imNviAEA1a2bdbFWpGyKXiiki5jkeR0bUqxxVKgWaZECMfupgYydVKawdp3YyTOAHkb0Tj1TeK82AEuDuX868U9BAIIIyNS7YqMZaUjVpOg4ofqukv2YCEvVyvSZOKHUU8Ey9qOVXHUH27WJt2oQkkGOOScj4H7o9pnVQSxAAGSTp5rF8lKjmOH78xHPyar1oasYjiQAf9n5n070AKEkvxgZJgfIdKQwB6gH0kZ1PtMJfvqzmvN+JOR+o1b3S7tkY9bqd79oBXi1PaMW5bbeR39VnXunB5AnkdJuCi/duzSOtaMivGBkh31Vsw2q6TRHKN6ewh3xWZgHFEhfmC/sty1Viu7mXN+MxRxvhYhyf5nQUAADkPY3cA7Xfzy7htR47uPyD2SoIwRnV+il2nNXJ7PaHA9CNSbEDtUFNZQDG4ftdW1t1P1GnHX7fa7JJJ+bHPpm/d79SkflJVljXzAh/D3vjtdpPxqIx9XOBpBhFHQAeHvKMKsdqNcy1ZVkHl5MNI6SIrowKsAQeoPhXs2NxpVeaIe/lHyXgviEAggjW2f4SWehKfcJaD5x+DNNHBG8khwqjJ1tsMoE1mdcTTtnyoPdXxbdRLCowYpNGcxyDmp1UvCbMMqhLUfvp/wCj23kSNGdyAoGSTyGow+5SJM6FKyHKI3OQ/Bz49mnFZAJLJIvFHU4IOvXr9IYuwB4x/PiGfzZdQW61kdqCaOQf0n0k4GTqTd6/b7quDZl/BFxA8x5DSUrNtxJfYBRxWBDlP7tAYGP4GxtW3zntmEJJ+NPsN+o0+1OpxHul5AOAUOCNS0LMuP8AM7aeQqudfsatJg2ZJ7B+PeyEg6ighgXsRRIi9FGP9l//xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAECAQE/ACn/xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAEDAQE/ACn/2Q==\" style=\"height:109px; width:180px\"/>Recall:Ve (escape velocity) = √2gRVe = √(2 × 10 × 6.4 × 10 <sup>6</sup> )Ve = 11.3km/s",
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
    "text": "Which of the following types of lenses is suitable for correcting the eye defect illustrated by the ray diagram above?",
    "imageUrl": "/diagrams/physics_q82_diagram.jpg",
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
    "text": "The Diagram above shows the prism arrangement in a",
    "imageUrl": "/diagrams/physics_q86_diagram.jpg",
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
    "text": "The lens illustrated above can best be described as a",
    "imageUrl": "/diagrams/physics_q87_diagram.png",
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
    "text": "The diagram shows a uniform meter rule AB which balances horizontally at the 90cm mark when a mass of 0.2kg is suspended from B. Calculate the mass of the meter rule.",
    "imageUrl": "/diagrams/physics_q93_diagram.jpg",
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
    "text": "The diagram shows a uniform meter rule AB which balances horizontally at the 90cm mark when a mass of 0.2kg is suspended from B. Calculate the mass of the meter rule.",
    "imageUrl": "/diagrams/physics_q94_diagram.png",
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
    "text": "The value of T in the figure above is",
    "imageUrl": "/diagrams/physics_q95_diagram.jpg",
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
    "text": "Fig 10 shows a see-saw which is perfectly in balance, the weighs of the people sitting on it are 50kg, xkg and 15kg as shown, the sit at distances of 1.5, 1.5 and 2m from the pivot respectively. The vale of X is",
    "imageUrl": "/diagrams/physics_q96_diagram.png",
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
    "text": "The diagram above shows the force- extension curve of a piece of wire. The energy stored when the wire is stretched from E to F is",
    "imageUrl": "/diagrams/physics_q127_diagram.jpg",
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
    "text": "The diagram above shows the force- extension curve of a piece of wire. The energy stored when the wire is stretched from E to F is",
    "imageUrl": "/diagrams/physics_q130_diagram.jpg",
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
        "text": "Refer to the diagram above to answer the question:",
    "imageUrl": "/diagrams/physics_q144_img1.png"
      },
      {
        "key": "B",
        "text": "Refer to the diagram above to answer the question:",
    "imageUrl": "/diagrams/physics_q17052_img1.png"
      },
      {
        "key": "C",
        "text": "Refer to the diagram above to answer the question:",
    "imageUrl": "/diagrams/physics_q77597_img1.png"
      },
      {
        "key": "D",
        "text": "Refer to the diagram above to answer the question:",
    "imageUrl": "/diagrams/physics_q43274_img1.png"
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
    "text": "Calculate the refractive index of the material for the glass prism in the diagram above.",
    "imageUrl": "/diagrams/physics_q148_diagram.jpg",
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
    "text": "Calculate the refractive index of the material for the glass prism in the diagram above.",
    "imageUrl": "/diagrams/physics_q149_diagram.jpg",
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
    "text": "Which of the following types of lenses is suitable for correcting the eye defect illustrated by the ray diagram?",
    "imageUrl": "/diagrams/physics_q150_diagram.png",
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
    "text": "The refractive index of the medium M in the diagram above is",
    "imageUrl": "/diagrams/physics_q151_diagram.jpg",
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
    "text": "The refractive index of the medium M in the diagram above is",
    "imageUrl": "/diagrams/physics_q152_diagram.jpg",
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
    "text": "The diagram above is a block-and-tackle pulley system in which an effort of 80N is used to lift a load of 240N. The efficiency of the machine is",
    "imageUrl": "/diagrams/physics_q165_diagram.jpg",
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
    "text": "The velocity time graph above describes the motion of a particle between two points P and Q. What is the distance between P and Q?",
    "imageUrl": "/diagrams/physics_q178_diagram.png",
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
    "text": "The diagram above shows the prism arrangement in a",
    "imageUrl": "/diagrams/physics_q197_diagram.jpg",
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
    "text": "When the sun, moon and the earth are as shown in the diagram above an observer standing in X is in",
    "imageUrl": "/diagrams/physics_q202_diagram.jpg",
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
    "paperType": "Theory",
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
    "text": "From the diagram above, if the potential difference across the resistor, capacitor and inductor are 80V, 110V and 40V respectively, the effective potential difference is",
    "imageUrl": "/diagrams/physics_q205_diagram.jpg",
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
    "text": "In the curve above, PQRST represents an alternating voltage of frequency 50Hz. The time interval between points P and R on the graph is",
    "imageUrl": "/diagrams/physics_q206_diagram.png",
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
    "text": "What is the resultant capacity of the circuit",
    "imageUrl": "/diagrams/physics_q212_diagram.jpg",
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
    "text": "The figure above shows three capacitors, 2µF, 3µF and 6µF connected in series. If the p.d. across the system is 12V, the p.d. across the 6µF capacitor is",
    "imageUrl": "/diagrams/physics_q228_diagram.png",
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
    "text": "The diagram above illustrates a beaker of water being heated. It is observed that as the bubbles rise they get bigger in size. The reason for this observation is ......",
    "imageUrl": "/diagrams/physics_q234_diagram.jpg",
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
    "text": "The net vertical force in the diagram below is",
    "imageUrl": "/diagrams/physics_q247_diagram.jpg",
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
    "text": "The figure above shows two velocities \\(\\vec{V_1}\\) and \\(\\vec{V_1}\\)Which of the following diagrams correctly represents the vector difference<sub>\\(\\vec{W}=\\vec{V_1}-\\vec{V_2}\\)</sub>",
    "imageUrl": "/diagrams/physics_q248_img1.jpg",
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
    "explanation": "Given:W = V<sub>1</sub> - V<sub>2</sub>V<sub>1</sub> = W + V<sub>2</sub>It implies that V<sub>1</sub> is the resultant of W and V<sub>2</sub><img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////CABEIAIUAtAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgECBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA78AAAAxjZRyAAAAAAAAAAGJzeoNHa89AAAAAAAAAAMiDeGXqRyBRhNRmi3TsWzMp2dIkAAAKZcZnyasNCQh82B+Rfo+p9EcgAKE8BJbAAACLJ2/g+2TqnoAAAHzmc2dJqgAAAAB5i7dIzd/i+rLIABnFSPVrFa1TrHUAAAAA5rD3s00NbnuwKdyrEXz4IYoNUU7g5qHB603GRrgAAAHw+xHICGYZ1bW+z0ADz0eegAB4AAAAAAAAAAAD/8QAMxAAAgEEAQIEBAQFBQAAAAAAAQIDAAQFERIhMQYwUWETICJBEBUjQhRAUpGhNERicYH/2gAIAQEAAT8A1Wq1Wq1Wq1Wq1XStVqtVqtVqtVqtVqtVqteVlM1DiZ7MTxkxzcwX/pK1a3dtdQia2nSRfUfytnc2GUubxGtXSaBgrq7V4wsNflxgg6O7pWIwdpilJjLtK6gO7fyt4px3ie0u+0N4BC9TIcl4njj7w2EXNvdzWxsjY2O4/lc9jnyGOdIk3OhDxV4ex9xZWsr3X+pnlLyVjLNrKfJaRlSScNES3IkFfmmuraAFpp40AP7mAr82t3I+BDcz7cryiiPEH3ZtCknysvAiyhhU7DfFl5MP/FqxfJ3F67Peq1tCOH6aAJK/msQoLMQABsk1FPBOvOKZJF7bRgwrYFPk8chCm7jZi3EIh5tsey0mSmmCmDHXJ3vrKBEBXDNSd5LW3Qp9gZnDU2K5lzc393KGUAqH+Gn9k1SY6widnS0hDk7Lcdn8LyV7qY2ED62m55B3RD9vZmqGKOGKOKNeKIoVR6AeXLc20B/Wnjj6b+tgtHO2J6W6y3R9IULV/F5ebRt8akSns9zJ/golY7C5GfJywI7RfBcrJMtR4OwRUWUy3BUg7mkZxsVFBDCpWKJIwTvSKFFa+S+u3hMUMChriZuKKey+rt7CrK0SzgESksdlnc93Zu5PkS5LHwNxlu4lOt8dgsa/M2kUta2FxP8AQrKSoiRt+8lbzU3IqLW3HTQbcrU2MlmcNPk7t9NtVRhEB7HhUOHxUDco7KIMG2GbbkH2LUAB2AH4KiqWKqAWOzodz811cpbQNKw3roq7ALMegUVZW0kZknn4m5m6uV7KPsi+w8i6toLqBoJlLKe+iVq1WLElLWaJRGOkFwE6EE64uR2bzHdI0Z3YKqgkk9gBVmjXcy38yaHAfwyHuin95928qSNJY3jdAyMCGB7EGg9xiukjfFsPtJ3eH05+q0jo6hkYMpGwQdg+TlcvDiIklmhlcOdLxFYvLXGfyQhnhUWkaFzEP8F/MIBBBHQ1LC+DSSe1jZ7PZaSDfWL3SsN4hgyd/dQInFETcT+Rfu2QmbG28ihe92/coh/YPdqxmJxuJu7maK5H1roIzD6azObTGQQTxiObcwVkD1jM3jsmuoJdP3aN+j+XksemQtXt3nliDf0Va+F7nF3cV5aXQlMQ2Y2XRarW8t7uPnE3UdHQ9GQ+jD5r+6lQLb2ujdSj6PRF+7tVlZpZwCNerHrI/wB3c92NZO8scdEk9zBtXfjtUBrNYhMtbWyQGKNfihy4HddViIMPjr97CBHku0TbysvlXsstr4mxz/HYQToYytZPJ3MWf+OjE2tq8cUlXbzXHiOwto5SEgQzSgVdWZLi6tSsV0v9pB/S9Wd6Jy8ckXwrmMfXETvXuD91+S6uktYw7BmZjxRF6s7HsBVjbPErTTtyuZQDIfsPRF9h+GTslv8AH3NsSAWX6T6MK8O36/kf65Km1Lq9eGIWlW7yUyjndTEqf+Fb8nxShWwivE6SWs6ODVrYNdeG8jMyalune4Xa7bS14VMt3LeZCXuyRwKSeukH4XdolzwYO8U0e+EqdGXdW96/MWt3pLheg+yS+6fhLLHDG8sjhI0G2Y9AKtI5bmYXs/MdxBGenBD+4+5+TMxXVjkru0tkCx5IpWRFnYYUQPK8MSBEXgdMTWBEa48Kl2syBz0VuQT0jB8mSNJUaORFZGGirDYIpI0iRUjQKijQUDQAqGCG3jEcMSRoD0VRofjc28V1C0Uq9D1BB0ykdmBqK5ms5o4L5wQ3SK5A0rn0b0agfzWcN/s7eUMnpNIv3/6X5SqkgkAkdqZVYaYAj3pVVeigAe3nywxTxtHKiujdCrDYNIqoqqihVA0AOgA8zlXKuVcq5VyrlXKuVcq5VyrlXKuVcq5VyrlXKuVcq5V//8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAgEBPwBZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAwEBPwBZ/9k=\" style=\"height:133px; width:180px\"/>;",
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
    "text": "The diagram above illustrates two boxes P and Q of masses 27.3 kg and 6.2 kg respectively on a smooth horizontal surface. If a force of F of 150 N is applied to the combined forces, calculate the acceleration.",
    "imageUrl": "/diagrams/physics_q249_diagram.png",
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
    "text": "The diagram above illustrates a beaker of water being heated. It is observed that as the bubbles rise, they get bigger in size. The reason for this observation is.",
    "imageUrl": "/diagrams/physics_q274_diagram.png",
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
