import { StructuredSection, CoverageAudit } from '../components/LessonPresenter';

export const MOTION_MASTER_SECTIONS: StructuredSection[] = [
  // 1. SPEED
  {
    id: 301,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Speed',
    section_order: 1,
    section_type: 'concept',
    section_title: '1. Speed: Meaning, Formulas & Calculations',
    content: `### What is Speed?
**Speed ($v$)** is defined as the **rate of change of distance with respect to time**, or the distance covered by a moving body per unit time.

#### Key Physical Characteristics:
1. **Scalar Quantity**: Speed has magnitude only and NO specified direction.
2. **SI Unit**: Metres per second ($\\text{m/s}$ or $\\text{ms}^{-1}$). Dimensions: $[L T^{-1}]$.
3. **Always Non-Negative**: Since distance is a scalar, speed can never be negative ($v \\ge 0$).

#### Average Speed vs. Instantaneous Speed:
- **Average Speed ($v_{\\text{avg}}$)**: The total distance traveled divided by the total time taken:
  $$v_{\\text{avg}} = \\frac{\\text{Total Distance } s_{\\text{total}}}{\\text{Total Time } t_{\\text{total}}}$$
- **Instantaneous Speed ($v_{\\text{inst}}$)**: The speed of a body at a specific, infinitesimal instant in time:
  $$v_{\\text{inst}} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$
  *(This is the speed registered by a vehicle's speedometer).*`,
    examples: [
      `**Calculation of Average Speed for Non-Uniform Journey:**
A motorist travels from Lagos to Ibadan, covering the first $60\\text{ km}$ at $30\\text{ km/h}$ and the remaining $60\\text{ km}$ at $60\\text{ km/h}$. Calculate the average speed for the entire journey.

**Chalkboard Step-by-Step Solution:**
1. Time for stage 1: $t_1 = \\frac{60}{30} = 2.0\\text{ hours}$.
2. Time for stage 2: $t_2 = \\frac{60}{60} = 1.0\\text{ hour}$.
3. Total distance: $s_{\\text{total}} = 60 + 60 = 120\\text{ km}$.
4. Total time: $t_{\\text{total}} = 2.0 + 1.0 = 3.0\\text{ hours}$.
5. Average speed: $v_{\\text{avg}} = \\frac{120\\text{ km}}{3.0\\text{ h}} = 40\\text{ km/h}$.
*(Trap Alert: Do NOT simply average 30 and 60 to get 45 km/h!)*`
    ],
    formulas: [
      `v_{\\text{avg}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}}`
    ],
    exam_tips: [
      `🎯 JAMB UTME Speed Trap: When two equal distances are covered at speeds v₁ and v₂, average speed is the harmonic mean: v_avg = 2v₁v₂ / (v₁ + v₂). Never take the simple arithmetic mean!`,
      `📘 WAEC Chief Examiner Note: Always state the formula first [1 mark], substitute values with consistent SI units [1 mark], and state final answer with correct unit [ms⁻¹] [1 mark].`
    ],
    questions: [
      {
        id: 8039,
        subject: 'Physics',
        year: 2024,
        topic: 'Motion',
        subtopic: 'Speed',
        difficulty: 'Medium',
        text: 'A car covers a distance of 120 km in 2 hours, stops for 30 minutes, and then covers another 60 km in 1.5 hours. What is the average speed of the car for the entire journey?',
        options: [
          { key: 'A', text: '45.0 km/h' },
          { key: 'B', text: '51.4 km/h' },
          { key: 'C', text: '40.0 km/h' },
          { key: 'D', text: '60.0 km/h' }
        ],
        correctAnswer: 'A',
        explanation: 'Total distance = 120 km + 60 km = 180 km. Total time elapsed = 2.0 h + 0.5 h (stop) + 1.5 h = 4.0 hours. Average speed = Total distance / Total time = 180 km / 4.0 h = 45 km/h.',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2024,
        exam_label: '🎯 JAMB (UTME) 2024 • Physics'
      },
      {
        id: 50849,
        subject: 'Physics (WAEC)',
        year: 2023,
        topic: 'Motion',
        subtopic: 'Speed',
        difficulty: 'Medium',
        text: 'A cyclist rides 4 km at a speed of 12 km/h and then a further 6 km at a speed of 18 km/h. Calculate the average speed of the cyclist.',
        options: [
          { key: 'A', text: '15.0 km/h' },
          { key: 'B', text: '14.4 km/h' },
          { key: 'C', text: '15.2 km/h' },
          { key: 'D', text: '13.8 km/h' }
        ],
        correctAnswer: 'A',
        explanation: 'Time 1 = 4/12 = 1/3 h (20 min). Time 2 = 6/18 = 1/3 h (20 min). Total distance = 10 km. Total time = 2/3 h. Average speed = 10 / (2/3) = 15.0 km/h.',
        // @ts-ignore
        exam: 'WAEC',
        exam_year: 2023,
        exam_label: '📘 WAEC (WASSCE) 2023 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Multi-Exam Chalkboard Analysis**:
• **JAMB Speed Strategy**: Remember to include rest/waiting time in the denominator when calculating average speed for an entire journey.
• **WAEC Theory Marking**: Express time fractions accurately before final division to prevent early rounding errors.`
  },

  // 2. VELOCITY
  {
    id: 302,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Velocity',
    section_order: 2,
    section_type: 'concept',
    section_title: '2. Velocity: Vector Nature & Displacement Dynamics',
    content: `### What is Velocity?
**Velocity ($\\vec{v}$)** is defined as the **rate of change of displacement with respect to time**, or speed in a specified direction.

$$\\vec{v} = \\frac{\\Delta \\vec{s}}{\\Delta t}$$

#### Fundamental Differences: Speed vs. Velocity
| Parameter | Speed ($v$) | Velocity ($\\vec{v}$) |
| :--- | :--- | :--- |
| **Quantity Type** | **Scalar** (magnitude only) | **Vector** (magnitude AND direction) |
| **Foundation** | Derived from **distance** | Derived from **displacement** |
| **Sign** | Always non-negative ($v \\ge 0$) | Can be **positive, negative, or zero** |
| **Circular Motion** | Can be constant | **Continuously changing** because direction changes! |

#### Uniform Velocity:
A body moves with **uniform (constant) velocity** if it covers equal displacements in equal intervals of time in a constant, straight-line direction. If an object changes direction even while traveling at constant speed (such as a car cornering at $40\\text{ km/h}$), its velocity is NOT uniform because its vector direction is changing!`,
    examples: [
      `**Displacement vs Distance Velocity Calculation:**
An athlete runs $400\\text{ m}$ due North in $50\\text{ s}$, then turns and runs $300\\text{ m}$ due East in $50\\text{ s}$. Calculate:
(a) The average speed of the athlete.
(b) The magnitude and direction of the average velocity.

**Solution:**
1. Total distance $= 400 + 300 = 700\\text{ m}$.
2. Average speed $= \\frac{700}{100} = 7.0\\text{ m/s}$.
3. Resultant displacement: $R = \\sqrt{400^2 + 300^2} = \\sqrt{160000 + 90000} = 500\\text{ m}$.
4. Average velocity magnitude $= \\frac{500}{100} = 5.0\\text{ m/s}$.
5. Direction: $\\tan \\theta = \\frac{300}{400} = 0.75 \\implies \\theta = 36.9^\\circ\\text{ East of North (036.9}^\\circ\\text{)}$.`
    ],
    formulas: [
      `\\vec{v}_{\\text{avg}} = \\frac{\\Delta \\vec{s}}{\\Delta t}`
    ],
    exam_tips: [
      `🎯 JAMB Trap: If a body moves around a complete circular track of radius r and returns to the starting point, its displacement is ZERO; therefore its average velocity is 0 m/s, even though its average speed is 2πr / t!`,
      `📘 WAEC Marking Note: Whenever an exam question asks for 'velocity', you MUST state both magnitude AND direction to obtain full marks.`
    ],
    questions: [
      {
        id: 171,
        subject: 'Physics',
        year: 2022,
        topic: 'Motion',
        subtopic: 'Velocity',
        difficulty: 'Easy',
        text: 'A body moves along a circular path of radius 7 m. When it completes one full revolution in 4 seconds, what is the magnitude of its average velocity?',
        options: [
          { key: 'A', text: '11 m/s' },
          { key: 'B', text: '0 m/s' },
          { key: 'C', text: '22 m/s' },
          { key: 'D', text: '5.5 m/s' }
        ],
        correctAnswer: 'B',
        explanation: 'Because the body returns to its starting point after one complete revolution, its net displacement is zero (Δs = 0). Since average velocity = displacement / time, average velocity = 0 / 4 = 0 m/s. (Its average speed however is 2πr/t = 44/4 = 11 m/s).',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2022,
        exam_label: '🎯 JAMB (UTME) 2022 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis**:
• **Velocity Vector Insight**: Uniform speed does NOT imply uniform velocity when path is curved. Centripetal acceleration exists whenever direction changes.`
  },

  // 3. ACCELERATION & RETARDATION
  {
    id: 303,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Acceleration',
    section_order: 3,
    section_type: 'concept',
    section_title: '3. Acceleration & Retardation (Deceleration)',
    content: `### What is Acceleration?
**Acceleration ($a$)** is defined as the **rate of change of velocity with respect to time**:

$$a = \\frac{\\text{Change in Velocity}}{\\text{Time Taken}} = \\frac{v - u}{t}$$

where:
- $u$ = Initial velocity (in $\\text{m/s}$)
- $v$ = Final velocity (in $\\text{m/s}$)
- $t$ = Time interval taken (in $\\text{s}$)

#### Key Characteristics:
1. **Vector Quantity**: Has both magnitude and direction. SI Unit: $\\text{m/s}^2$ or $\\text{ms}^{-2}$. Dimensions: $[L T^{-2}]$.
2. **Positive Acceleration**: When final velocity exceeds initial velocity ($v > u$), the body speeds up ($a > 0$).
3. **Negative Acceleration / Retardation (Deceleration)**: When final velocity is less than initial velocity ($v < u$), the velocity decreases ($a < 0$).
   *(Note: Retardation is defined as negative acceleration. If $a = -4\\text{ m/s}^2$, the retardation is $+4\\text{ m/s}^2$).*
4. **Uniform Acceleration**: Velocity changes by equal amounts in equal intervals of time.`,
    examples: [
      `**Deceleration and Braking Force:**
A train travelling at $72\\text{ km/h}$ is brought to rest in $10\\text{ s}$ by applying the emergency brakes. Calculate:
(a) The initial velocity in SI units (m/s).
(b) The acceleration of the train.
(c) The retardation of the train.

**Solution:**
1. Conversion: $u = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$.
2. Acceleration: $a = \\frac{0 - 20}{10} = -2.0\\text{ m/s}^2$.
3. Retardation: $\\text{Retardation} = -a = +2.0\\text{ m/s}^2$.`
    ],
    formulas: [
      `a = \\frac{v - u}{t}`
    ],
    exam_tips: [
      `🎯 JAMB Trap: Never say 'retardation is -2 m/s²'. Retardation by definition means the rate of decrease in velocity. State 'acceleration = -2 m/s²' OR 'retardation = 2 m/s²'.`,
      `📘 WAEC Examiner Tip: Always convert km/h to m/s before substituting into acceleration formulas! Multiply km/h by 5/18.`
    ],
    questions: [
      {
        id: 8046,
        subject: 'Physics',
        year: 2024,
        topic: 'Motion',
        subtopic: 'Acceleration',
        difficulty: 'Medium',
        text: 'A vehicle travelling with an initial speed of 30 m/s decelerates uniformly to rest in a distance of 90 m. What is the retardation of the vehicle?',
        options: [
          { key: 'A', text: '10.0 m/s²' },
          { key: 'B', text: '5.0 m/s²' },
          { key: 'C', text: '2.5 m/s²' },
          { key: 'D', text: '3.3 m/s²' }
        ],
        correctAnswer: 'B',
        explanation: 'Using the third equation of motion: v² = u² + 2as. Here v = 0, u = 30 m/s, s = 90 m. 0 = 30² + 2a(90) => 180a = -900 => a = -5.0 m/s². Therefore, the retardation is +5.0 m/s².',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2024,
        exam_label: '🎯 JAMB (UTME) 2024 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis**:
• **Sign Convention**: Always remember that negative acceleration means deceleration in the positive direction.`
  },

  // 4. MOTION GRAPHS
  {
    id: 304,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Distance-time graphs',
    section_order: 4,
    section_type: 'concept',
    section_title: '4. Motion Graphs: Displacement-Time & Velocity-Time Graphs',
    content: `### Graphical Representation of Motion
Graphs are the primary diagnostic tool in JAMB and WAEC Physics for analyzing linear kinematics:

#### 1. Displacement–Time ($s$–$t$) Graphs:
- **Gradient (Slope)**: The slope of a displacement-time graph equals the **Velocity** ($v$):
  $$\\text{Gradient} = \\frac{\\Delta s}{\\Delta t} = \\text{Velocity } (v)$$
- Straight line with constant positive slope = **Uniform Velocity**.
- Horizontal line (slope = 0) = **Body at Rest**.
- Curved upward line = **Accelerating Body**.

#### 2. Velocity–Time ($v$–$t$) Graphs (The Most Tested):
Two golden rules govern every velocity-time graph:
1. **Rule 1 (Gradient = Acceleration)**:
   $$\\text{Slope} = \\frac{\\Delta v}{\\Delta t} = \\text{Acceleration } (a)$$
2. **Rule 2 (Area Under Graph = Total Distance/Displacement)**:
   $$\\text{Area Under } v\\text{–}t \\text{ Graph} = \\text{Total Distance Covered } (s)$$

#### Standard Graph Profiles:
- **Triangle Stage**: Constant acceleration from rest ($\\text{Area} = \\frac{1}{2} b h$).
- **Rectangle Stage**: Cruising at uniform velocity ($\\text{Area} = b \\times h$, $a = 0$).
- **Trapezium Overall**: Acceleration $\\to$ Uniform speed $\\to$ Deceleration to rest:
  $$\\text{Area of Trapezium} = \\frac{1}{2} (a + b) h$$`,
    examples: [
      `**Analyzing a Trapezoidal Velocity-Time Graph:**
A car accelerates uniformly from rest for $20\\text{ s}$ to reach a maximum speed of $30\\text{ m/s}$. It maintains this speed for $40\\text{ s}$ and is then brought uniformly to rest in $10\\text{ s}$. Calculate:
(a) The acceleration.
(b) The retardation.
(c) The total distance traveled.

**Solution:**
1. Acceleration: $a = \\frac{30 - 0}{20} = 1.5\\text{ m/s}^2$.
2. Retardation: $\\frac{0 - 30}{10} = -3.0\\text{ m/s}^2 \\implies \\text{Retardation} = 3.0\\text{ m/s}^2$.
3. Total distance = Area of trapezium:
   Top parallel side $a = 40\\text{ s}$.
   Bottom parallel side $b = 20 + 40 + 10 = 70\\text{ s}$.
   Height $h = 30\\text{ m/s}$.
   $s = \\frac{1}{2} (40 + 70) \\times 30 = \\frac{1}{2} \\times 110 \\times 30 = 1650\\text{ m}$.`
    ],
    formulas: [
      `\\text{Slope } = \\frac{\\Delta v}{\\Delta t} = a`,
      `\\text{Area of Trapezium } s = \\frac{1}{2}(a + b)h`
    ],
    exam_tips: [
      `🎯 JAMB UTME Shortcut: When a body accelerates uniformly from rest for t₁ to speed V and then decelerates to rest in t₂, the total distance is simply s = ½ V (t₁ + t₂).`,
      `📘 WAEC Marking Scheme: On graph questions, method marks [M1] are awarded for drawing construction lines on axes to read coordinates.`
    ],
    questions: [
      {
        id: 1001,
        subject: 'Physics',
        year: 2024,
        topic: 'Motion & Graphs',
        subtopic: 'Distance-time graphs',
        difficulty: 'Medium',
        text: 'The velocity-time graph represents the motion of a car moving along a straight horizontal highway. Determine the total distance travelled by the car in the 40-second interval.',
        imageSvg: `<svg viewBox="0 0 450 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <defs>
        <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="450" height="240" fill="#F8FAFC" rx="12"/>
      <rect x="50" y="30" width="360" height="160" fill="url(#grid1)"/>
      <path d="M 50 190 L 140 70 L 320 70 L 410 190 Z" fill="#EEF2FF" stroke="#4F46E5" stroke-width="3"/>
      <line x1="50" y1="190" x2="420" y2="190" stroke="#334155" stroke-width="2.5"/>
      <line x1="50" y1="190" x2="50" y2="20" stroke="#334155" stroke-width="2.5"/>
      <polygon points="420,186 428,190 420,194" fill="#334155"/>
      <polygon points="46,20 50,12 54,20" fill="#334155"/>
      <line x1="140" y1="70" x2="140" y2="190" stroke="#94A3B8" stroke-dasharray="4"/>
      <line x1="320" y1="70" x2="320" y2="190" stroke="#94A3B8" stroke-dasharray="4"/>
      <line x1="50" y1="70" x2="140" y2="70" stroke="#94A3B8" stroke-dasharray="4"/>
      <text x="45" y="195" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="end">0</text>
      <text x="140" y="208" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="middle">10</text>
      <text x="320" y="208" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="middle">30</text>
      <text x="410" y="208" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="middle">40</text>
      <text x="230" y="230" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1E293B" text-anchor="middle">Time t (s)</text>
      <text x="42" y="74" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="end">30</text>
      <text x="25" y="105" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1E293B" text-anchor="middle" transform="rotate(-90 25 105)">Velocity v (m/s)</text>
    </svg>`,
        options: [
          { key: 'A', text: '600 m' },
          { key: 'B', text: '900 m' },
          { key: 'C', text: '1,200 m' },
          { key: 'D', text: '750 m' }
        ],
        correctAnswer: 'B',
        explanation: 'Total distance = Area under velocity-time graph (trapezium) = 1/2 × (a + b) × h = 1/2 × (20 + 40) × 30 = 1/2 × 60 × 30 = 900 m.',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2024,
        exam_label: '🎯 JAMB (UTME) 2024 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis**:
• Area calculation: Trapezoid parallel sides are (30 - 10) = 20 s, and 40 s. Height = 30 m/s. Area = ½ × 60 × 30 = 900 m.`
  },

  // 5. EQUATIONS OF UNIFORMLY ACCELERATED MOTION
  {
    id: 305,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Equations of motion',
    section_order: 5,
    section_type: 'concept',
    section_title: '5. The Four Kinematic Equations of Linear Motion',
    content: `### The Kinematic Equations
When an object moves along a straight line with **constant (uniform) acceleration ($a$)**, its motion is completely described by four mathematical equations connecting five variables:
- $u$ = Initial velocity
- $v$ = Final velocity
- $a$ = Uniform acceleration
- $t$ = Time elapsed
- $s$ = Displacement / Distance

#### The 4 Canonical Equations:
1. **First Equation**:
   $$v = u + at$$
2. **Second Equation**:
   $$s = ut + \\frac{1}{2} a t^2$$
3. **Third Equation**:
   $$v^2 = u^2 + 2as$$
4. **Fourth Equation (Mean Velocity Formula)**:
   $$s = \\left(\\frac{u + v}{2}\\right) t$$

#### Motion Under Gravity (Vertical Motion):
When an object moves vertically in free fall near Earth's surface (ignoring air resistance):
- Set $a = +g$ (downward, accelerating).
- Set $a = -g$ (upward, decelerating), where $g \\approx 9.8\\text{ m/s}^2$ (or $10\\text{ m/s}^2$ in JAMB).
- At maximum height ($H_{\\max}$), vertical velocity $v = 0$:
  $$H_{\\max} = \\frac{u^2}{2g}, \\quad t_{\\text{ascent}} = \\frac{u}{g}$$`,
    examples: [
      `**Vertical Projection and Maximum Height:**
A ball is thrown vertically upward with an initial velocity of $25\\text{ m/s}$. [Take $g = 10\\text{ m/s}^2$ and ignore air resistance]. Calculate:
(a) The maximum height reached.
(b) The time taken to reach the maximum height.
(c) The total time of flight before returning to the thrower's hand.

**Solution:**
1. Maximum height: $0 = (25)^2 - 2(10)H \\implies 20H = 625 \\implies H = 31.25\\text{ m}$.
2. Time to peak: $0 = 25 - 10t \\implies 10t = 25 \\implies t = 2.5\\text{ s}$.
3. Total time of flight: $T = 2 \\times 2.5 = 5.0\\text{ s}$ (Time of ascent equals time of descent).`
    ],
    formulas: [
      `v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as`,
      `H_{\\max} = \\frac{u^2}{2g}, \\quad T_{\\text{flight}} = \\frac{2u}{g}`
    ],
    exam_tips: [
      `🎯 JAMB Speed Rule: A stone dropped from rest (u = 0) falls through distance h in time t = √(2h/g). Its impact speed is v = √(2gh). Memorize √(2gh) for instant CBT calculation!`,
      `📘 WAEC Marking Note: Always specify your chosen positive direction (upward positive or downward positive) and adhere to sign consistency.`
    ],
    questions: [
      {
        id: 178,
        subject: 'Physics',
        year: 2023,
        topic: 'Motion',
        subtopic: 'Equations of motion',
        difficulty: 'Medium',
        text: 'A stone is dropped from the top of a tower 80 m high. How long does it take to reach the ground? [Take g = 10 m/s²]',
        options: [
          { key: 'A', text: '4.0 s' },
          { key: 'B', text: '2.8 s' },
          { key: 'C', text: '8.0 s' },
          { key: 'D', text: '16.0 s' }
        ],
        correctAnswer: 'A',
        explanation: 'Initial velocity u = 0. Using s = ut + 1/2 gt²: 80 = 0 + 1/2(10)t² => 80 = 5t² => t² = 16 => t = 4.0 s.',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2023,
        exam_label: '🎯 JAMB (UTME) 2023 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis**:
• Key Rule: Pick the kinematic equation that leaves out the unmentioned variable.`
  },

  // 6. PROJECTILE MOTION (With Animated Visual!)
  {
    id: 306,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Projectiles',
    section_order: 6,
    section_type: 'concept',
    section_title: '6. Projectile Motion & Vector Resolution',
    content: `### Two-Dimensional Motion in a Gravitational Field
A **projectile** is any object launched into the air with an initial velocity that proceeds under the sole influence of gravity and air resistance.

#### The Fundamental Principle of Projectile Motion:
The motion consists of **two completely independent simultaneous motions**:
1. **Horizontal Component ($x$-axis)**:
   - Zero horizontal force ($F_x = 0 \\implies a_x = 0$).
   - Horizontal velocity remains **strictly constant** throughout flight:
     $$v_x = u_x = u \\cos \\theta$$
   - Horizontal distance ($x$) at time $t$:
     $$x = (u \\cos \\theta) t$$
2. **Vertical Component ($y$-axis)**:
   - Acted upon by constant downward gravitational acceleration ($a_y = -g$).
   - Initial vertical velocity $u_y = u \\sin \\theta$.
   - Vertical velocity at time $t$:
     $$v_y = u \\sin \\theta - gt$$
   - Vertical height ($y$) at time $t$:
     $$y = (u \\sin \\theta) t - \\frac{1}{2} g t^2$$

#### The Three Core Projectile Formulas (Essential for JAMB & WAEC):
1. **Time of Flight ($T$)**:
   $$T = \\frac{2 u \\sin \\theta}{g}$$
2. **Maximum Height ($H$)**:
   $$H = \\frac{u^2 \\sin^2 \\theta}{2g}$$
3. **Horizontal Range ($R$)**:
   $$R = \\frac{u^2 \\sin 2\\theta}{g}$$
   - **Condition for Maximum Range**: Range is maximum when $\\sin 2\\theta = 1 \\implies 2\\theta = 90^\\circ \\implies \\mathbf{\\theta = 45^\\circ}$.
   - At $\\theta = 45^\\circ$: $R_{\\max} = \\frac{u^2}{g} = 4 H$.`,
    examples: [
      `**Complete Projectile Parameter Calculation:**
A projectile is launched from ground level with an initial velocity of $50\\text{ m/s}$ at an angle of $30^\\circ$ to the horizontal. [Take $g = 10\\text{ m/s}^2$]. Calculate:
(a) The time of flight.
(b) The maximum height attained.
(c) The horizontal range.

**Solution:**
1. Time of Flight: $T = \\frac{2 \\times 50 \\times \\sin 30^\\circ}{10} = \\frac{100 \\times 0.5}{10} = 5.0\\text{ s}$.
2. Maximum Height: $H = \\frac{50^2 \\times (\\sin 30^\\circ)^2}{2 \\times 10} = \\frac{2500 \\times 0.25}{20} = 31.25\\text{ m}$.
3. Horizontal Range: $R = \\frac{50^2 \\times \\sin 60^\\circ}{10} = \\frac{2500 \\times 0.866}{10} = 216.5\\text{ m}$.`
    ],
    formulas: [
      `T = \\frac{2u \\sin \\theta}{g}`,
      `H = \\frac{u^2 \\sin^2 \\theta}{2g}`,
      `R = \\frac{u^2 \\sin 2\\theta}{g}`
    ],
    exam_tips: [
      `🎯 JAMB UTME Favorite Question: At what launch angle is horizontal range equal to maximum height (R = H)? Answer: θ = arctan(4) ≈ 76°!`,
      `📘 WAEC Theory Alert: If launched horizontally from a cliff of height h, initial vertical velocity u_y = 0. Time to hit ground is t = √(2h/g) and range is R = u × √(2h/g).`
    ],
    questions: [
      {
        id: 1002,
        subject: 'Physics',
        year: 2024,
        topic: 'Projectiles',
        subtopic: 'Projectiles',
        difficulty: 'Medium',
        text: 'A projectile is launched from ground level with an initial velocity of 50 m/s at an angle of 30° to the horizontal. Calculate the maximum height reached by the projectile. [Take g = 10 m/s²]',
        options: [
          { key: 'A', text: '31.25 m' },
          { key: 'B', text: '62.50 m' },
          { key: 'C', text: '125.00 m' },
          { key: 'D', text: '15.60 m' }
        ],
        correctAnswer: 'A',
        explanation: 'Maximum height H = (u² sin² θ) / (2g) = (50² × sin² 30°) / (2 × 10) = (2500 × 0.25) / 20 = 625 / 20 = 31.25 m.',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2024,
        exam_label: '🎯 JAMB (UTME) 2024 • Physics'
      },
      {
        id: 50845,
        subject: 'Physics (WAEC)',
        year: 2023,
        topic: 'Projectiles',
        subtopic: 'Projectiles',
        difficulty: 'Hard',
        text: 'A football is kicked at an angle of 45° to the horizontal with an initial speed of 20 m/s. Calculate its horizontal range. [g = 10 m/s²]',
        options: [
          { key: 'A', text: '40 m' },
          { key: 'B', text: '20 m' },
          { key: 'C', text: '80 m' },
          { key: 'D', text: '28 m' }
        ],
        correctAnswer: 'A',
        explanation: 'At θ = 45°, range R = u² sin(2θ) / g = 20² × sin(90°) / 10 = 400 × 1 / 10 = 40 m.',
        // @ts-ignore
        exam: 'WAEC',
        exam_year: 2023,
        exam_label: '📘 WAEC (WASSCE) 2023 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis for Projectiles**:
• **JAMB Speed Insight**: At the highest point, speed is minimum (equal to u cos θ), NOT zero!
• **WAEC Theory Marking**: Full method marks are awarded for showing the resolution into horizontal and vertical components.`
  },

  // 7. NEWTON'S LAWS OF MOTION & INERTIA
  {
    id: 307,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: "Newton's first law",
    section_order: 7,
    section_type: 'concept',
    section_title: "7. Newton's Laws of Motion & Inertia",
    content: `### The Foundation of Classical Dynamics
Sir Isaac Newton codified the relationship between force and motion into three fundamental laws:

#### 1. Newton's First Law of Motion (Law of Inertia):
> *"Every body continues in its state of rest or uniform motion in a straight line unless acted upon by a net external resultant force."*
- **Inertia**: The innate tendency of a body to resist changes in its state of motion or rest.
- **Mass as a Measure of Inertia**: A body with greater mass has greater inertia and is harder to accelerate or decelerate.
- **Real-Life Applications**: Wearing seatbelts in cars prevents passengers from continuing forward during sudden braking.

#### 2. Newton's Second Law of Motion:
> *"The rate of change of momentum of a body is directly proportional to the applied resultant force and takes place in the direction of the force."*
$$F \\propto \\frac{\\Delta p}{\\Delta t} = \\frac{m(v - u)}{t} = ma$$
In SI units where constant $k = 1$:
$$\\mathbf{F = ma}$$

#### 3. Newton's Third Law of Motion (Action & Reaction):
> *"To every action, there is an equal and opposite reaction."*
- Forces always occur in **matched pairs** exerted on two different bodies.
- $F_{A \\to B} = -F_{B \\to A}$.
- Examples: Rocket exhaust expelling downward produces upward thrust on rocket; walking pushes ground backward while ground pushes feet forward.`,
    examples: [
      `**Newton's Second Law with Retarding Resistance:**
A car of mass $1200\\text{ kg}$ traveling at $25\\text{ m/s}$ is brought to rest in $5.0\\text{ s}$. Calculate:
(a) The deceleration.
(b) The average braking force required.

**Solution:**
1. Acceleration: $a = \\frac{0 - 25}{5.0} = -5.0\\text{ m/s}^2$.
2. Braking Force: $F = ma = 1200 \\times (-5.0) = -6000\\text{ N}$ (Retarding force of $6000\\text{ N}$ opposing motion).`
    ],
    formulas: [
      `F = ma = m \\left(\\frac{v - u}{t}\\right)`,
      `\\vec{F}_{AB} = -\\vec{F}_{BA}`
    ],
    exam_tips: [
      `🎯 JAMB Trap: Action and reaction forces are EQUAL and OPPOSITE, but they DO NOT cancel each other into equilibrium because they act on TWO DIFFERENT BODIES!`,
      `📘 WAEC Examiner Note: In questions asking why seatbelts are mandatory, you must explicitly cite Newton's First Law and the concept of inertia [2 marks].`
    ],
    questions: [
      {
        id: 50961,
        subject: 'Physics (WAEC)',
        year: 2023,
        topic: 'Motion',
        subtopic: "Newton's first law",
        difficulty: 'Medium',
        text: 'A force of 50 N acts on a body of mass 10 kg initially at rest for 4 seconds. Calculate the velocity acquired by the body.',
        options: [
          { key: 'A', text: '20 m/s' },
          { key: 'B', text: '12.5 m/s' },
          { key: 'C', text: '5 m/s' },
          { key: 'D', text: '40 m/s' }
        ],
        correctAnswer: 'A',
        explanation: 'F = ma => a = F/m = 50 / 10 = 5 m/s². Then v = u + at = 0 + 5(4) = 20 m/s.',
        // @ts-ignore
        exam: 'WAEC',
        exam_year: 2023,
        exam_label: '📘 WAEC (WASSCE) 2023 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis for Newton's Laws**:
• Newton's 2nd Law gives acceleration: a = F/m. Then standard kinematic equations give velocity and displacement.`
  },

  // 8. LINEAR MOMENTUM & IMPULSE
  {
    id: 308,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Momentum',
    section_order: 8,
    section_type: 'concept',
    section_title: '8. Linear Momentum, Impulse & Conservation Laws',
    content: `### Linear Momentum & Impulse
#### What is Linear Momentum ($p$)?
**Linear Momentum** is the product of the mass of a body and its velocity:

$$p = m v$$

- **Vector Quantity**: Points in the exact direction of the velocity vector.
- **SI Unit**: $\\text{kg}\\cdot\\text{m/s}$ or $\\text{N}\\cdot\\text{s}$. Dimensions: $[M L T^{-1}]$.

#### What is Impulse ($I$)?
**Impulse** is defined as the product of the average force and the time interval during which it acts:

$$I = F \\Delta t = \\Delta p = m v - m u$$

- **Impulse–Momentum Theorem**: The impulse of a force acting on a body is equal to the change in momentum produced.
- **Application in Sports**: A cricketer draws his hands backward while catching a fast ball to increase the time of contact $\\Delta t$, reducing the impact force $F = \\frac{\\Delta p}{\\Delta t}$ on his palms.

#### The Law of Conservation of Linear Momentum:
> *"In any closed system where no external net force acts, the total linear momentum before collision equals the total linear momentum after collision."*

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

#### Elastic vs. Inelastic Collisions:
- **Elastic Collision**: Both linear momentum AND kinetic energy are conserved ($KE_i = KE_f$).
- **Inelastic Collision**: Linear momentum is conserved, but kinetic energy is **NOT conserved** (converted into heat and sound).
- **Completely Inelastic Collision**: Bodies stick together after collision and move with common velocity $V$:
  $$m_1 u_1 + m_2 u_2 = (m_1 + m_2) V$$`,
    examples: [
      `**Inelastic Collision and Common Velocity:**
A bullet of mass $20\\text{ g}$ moving horizontally at $400\\text{ m/s}$ embeds itself into a stationary wooden block of mass $1.98\\text{ kg}$ resting on a smooth surface. Calculate:
(a) The common velocity of the block and bullet immediately after collision.
(b) The kinetic energy lost during collision.

**Solution:**
1. Momentum balance: $(0.02 \\times 400) + (1.98 \\times 0) = (0.02 + 1.98) V \\implies 8.0 = 2.0 V \\implies V = 4.0\\text{ m/s}$.
2. Initial KE $= \\frac{1}{2} \\times 0.02 \\times (400)^2 = 1600\\text{ J}$.
3. Final KE $= \\frac{1}{2} \\times 2.0 \\times (4.0)^2 = 16\\text{ J}$.
4. Energy lost $= 1600 - 16 = 1584\\text{ J}$ (99% lost as heat and deformation).`
    ],
    formulas: [
      `I = F \\Delta t = \\Delta p = m(v - u)`,
      `m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2`
    ],
    exam_tips: [
      `🎯 JAMB UTME Trap: Remember velocities are vectors! If a ball hits a wall at +10 m/s and rebounds at -8 m/s, change in velocity is (-8 - 10) = -18 m/s, NOT 2 m/s!`,
      `📘 WAEC Examiner Note: In recoil problems (gun and bullet), initial momentum is zero: 0 = m_gun v_gun + m_bullet v_bullet. Recoil velocity is negative.`
    ],
    questions: [
      {
        id: 1005,
        subject: 'Physics',
        year: 2024,
        topic: 'Momentum & Collisions',
        subtopic: 'Momentum',
        difficulty: 'Medium',
        text: 'A body of mass 3 kg moving with velocity 8 m/s collides with a stationary body of mass 5 kg. If the two bodies stick together after the collision, calculate their common velocity.',
        imageSvg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="140" fill="#F8FAFC" rx="10"/>
      <line x1="20" y1="105" x2="360" y2="105" stroke="#64748B" stroke-width="2"/>
      <circle cx="80" cy="80" r="25" fill="#3B82F6"/>
      <text x="80" y="85" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3 kg</text>
      <line x1="110" y1="80" x2="160" y2="80" stroke="#1D4ED8" stroke-width="3"/>
      <polygon points="155,75 165,80 155,85" fill="#1D4ED8"/>
      <text x="135" y="70" font-size="11" font-weight="bold" fill="#1D4ED8" text-anchor="middle">8 m/s</text>
      <circle cx="260" cy="75" r="30" fill="#64748B"/>
      <text x="260" y="80" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">5 kg</text>
      <text x="260" y="125" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">At Rest (u₂ = 0)</text>
    </svg>`,
        options: [
          { key: 'A', text: '5.0 m/s' },
          { key: 'B', text: '3.0 m/s' },
          { key: 'C', text: '4.8 m/s' },
          { key: 'D', text: '2.5 m/s' }
        ],
        correctAnswer: 'B',
        explanation: 'By the conservation of linear momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)V. (3 × 8) + (5 × 0) = (3 + 5)V => 24 = 8V => V = 3.0 m/s.',
        // @ts-ignore
        exam: 'JAMB',
        exam_year: 2024,
        exam_label: '🎯 JAMB (UTME) 2024 • Physics'
      }
    ],
    solutions: `📋 **StudyPlug Chalkboard Analysis**:
• Momentum conservation: 3 kg × 8 m/s = 24 kg·m/s. Combined mass = 8 kg. V = 24 / 8 = 3.0 m/s.`
  }
];

export const MOTION_MASTER_AUDIT: CoverageAudit = {
  status: 'COMPLETE',
  required_subtopics: 8,
  covered_subtopics: 8,
  coverage_percentage: 100,
  is_published: true,
  covered: [
    { code: 'PHY-T03-S012', name: 'Speed', explanation: true, example: true, past_question: true, solution: true, section_order: 1 },
    { code: 'PHY-T03-S013', name: 'Velocity', explanation: true, example: true, past_question: true, solution: true, section_order: 2 },
    { code: 'PHY-T03-S014', name: 'Acceleration', explanation: true, example: true, past_question: true, solution: true, section_order: 3 },
    { code: 'PHY-T03-S020', name: 'Distance-time graphs', explanation: true, example: true, past_question: true, solution: true, section_order: 4 },
    { code: 'PHY-T03-S017', name: 'Equations of motion', explanation: true, example: true, past_question: true, solution: true, section_order: 5 },
    { code: 'PHY-T03-S024', name: 'Projectiles', explanation: true, example: true, past_question: true, solution: true, section_order: 6 },
    { code: 'PHY-T03-S031', name: "Newton's first law", explanation: true, example: true, past_question: true, solution: true, section_order: 7 },
    { code: 'PHY-T03-S036', name: 'Momentum', explanation: true, example: true, past_question: true, solution: true, section_order: 8 }
  ],
  missing: []
};
