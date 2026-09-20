/**
 * StudyPlug Physics Comprehensive Notes
 * ======================================
 * Research sources: JAMB IBASS 2026, WAEC Physics Syllabus,
 * passnownow.com, myschool.ng, Frank Beisha Physics textbook structure,
 * physicsquestions.ts bank (StudyPlug internal).
 *
 * Covers the official JAMB/WAEC Physics syllabus (27 topics).
 * Notes are original syntheses — not copied from any source.
 * Researched: 2026-09-18
 */

import { LessonNote } from '../masterLessonNotes';

export const PHYSICS_NOTES: LessonNote[] = [
  // ─── id range: 20–59 ────────────────────────────────────────────────────────

  {
    id: 20,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Motion',
    subtopic: 'Distance & Displacement, Speed & Velocity, Acceleration, Newton\'s Laws, Equations of Motion, Free Fall, Projectiles, Relative Velocity, Motion Graphs',
    summary_60s: 'Motion is the change in position of a body with time. Distance is total path length (scalar); displacement is straight-line distance with direction (vector). The three equations of uniformly accelerated motion are: v = u + at, s = ut + ½at², v² = u² + 2as. For free fall: a = g = 10 m/s². Projectile maximum range occurs at θ = 45°. Area under a velocity-time graph = distance; slope = acceleration.',
    key_formulas: 'v = u + at\ns = ut + ½at²\nv² = u² + 2as\ns = ½(u + v)t\nFree fall: H_max = u²/(2g), T_total = 2u/g\nProjectile: H = u²sin²θ/(2g), T = 2u sinθ/g, R = u²sin2θ/g\nR_max when θ = 45°\nRelative velocity: V_AB = V_A – V_B',
    pro_tips_95: '(1) Complementary angles (e.g. 30° and 60°) give the SAME horizontal range — very common JAMB trap! (2) At maximum height of a projectile, the vertical velocity = 0 but horizontal velocity = u cosθ (unchanged throughout). (3) The slope of a displacement-time graph = velocity; the slope of a velocity-time graph = acceleration; area under v-t graph = displacement.',
    syllabus_objectives: 'Candidates should be able to: 1. Distinguish distance from displacement, and speed from velocity. 2. Apply the three equations of uniformly accelerated motion. 3. Solve problems on free fall and vertical projection. 4. Calculate maximum height, time of flight and range of projectiles. 5. Interpret and sketch displacement-time and velocity-time graphs. 6. Solve relative velocity problems for collinear motion.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# MOTION

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - Distinguish between distance and displacement, speed and velocity
> - State Newton's Laws of Motion and apply them to real problems
> - Use the equations of uniformly accelerated motion
> - Solve problems on free fall and projectile motion
> - Interpret velocity-time and displacement-time graphs

---

## Distance and Displacement

### What They Mean
**Distance** is the total length of the actual path covered by a moving object. It only has magnitude — it is a **scalar quantity**.

**Displacement** is the straight-line distance from the starting point to the final position, measured in a specific direction. It has both magnitude and direction — it is a **vector quantity**.

### Example
A student walks 3 m East and then 4 m North.
- **Distance covered** = 3 + 4 = **7 m**
- **Displacement** = straight-line from start to finish = $\sqrt{3^2 + 4^2} = \sqrt{25} = $ **5 m** (in a North-East direction)

---

## Speed and Velocity

### Definitions
**Speed** = rate of change of distance with time (scalar):
$$\text{Speed} = \frac{\text{Distance covered}}{\text{Time taken}}$$

**Velocity** = rate of change of displacement with time (vector):
$$v = \frac{\text{Displacement}}{t}$$

### Units
Both have the SI unit **metres per second (m/s or m s⁻¹)**.

### Types of Speed/Velocity
- **Uniform speed:** equal distances covered in equal time intervals
- **Average speed** = total distance ÷ total time
- **Instantaneous speed:** speed at a specific instant (slope of d-t graph at that point)

---

## Acceleration

### Definition
**Acceleration** is the rate of change of velocity with time:
$$a = \frac{v - u}{t}$$

- SI unit: **m/s² (m s⁻²)**
- It is a **vector quantity**
- **Deceleration (retardation):** negative acceleration (body slowing down)

### Worked Example
A car increases its velocity from 10 m/s to 40 m/s in 6 seconds. Find its acceleration.

$$a = \frac{v - u}{t} = \frac{40 - 10}{6} = \frac{30}{6} = \textbf{5 m/s}^2$$

---

## Newton's Laws of Motion

### First Law (Law of Inertia)
A body remains at rest or continues to move in a straight line at constant velocity **unless acted upon by an external resultant force**.

**Inertia** = the reluctance of a body to change its state of rest or motion. Depends on mass.

### Second Law
The rate of change of momentum of a body is proportional to the applied force and takes place in the direction of the force:
$$F = ma$$

Where $F$ = resultant force (N), $m$ = mass (kg), $a$ = acceleration (m/s²)

**Impulse** = change in momentum:
$$\text{Impulse} = Ft = mv - mu = \Delta p$$

### Third Law
For every action, there is an equal and opposite reaction.

### Worked Example
A body of mass 5 kg has a velocity of 20 m/s. A force of 15 N acts on it in the direction of motion for 4 seconds. Find the final velocity.

Step 1: Find acceleration: $a = F/m = 15/5 = 3 \text{ m/s}^2$

Step 2: Use $v = u + at = 20 + (3 \times 4) = 20 + 12 = \textbf{32 m/s}$

---

## Equations of Uniformly Accelerated Motion

These apply **only when acceleration is constant**:

$$v = u + at \quad \text{...(1)}$$
$$s = ut + \tfrac{1}{2}at^2 \quad \text{...(2)}$$
$$v^2 = u^2 + 2as \quad \text{...(3)}$$
$$s = \tfrac{1}{2}(u + v)t \quad \text{...(4)}$$

Where: $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $t$ = time, $s$ = displacement

### Worked Example
A body starts from rest and accelerates uniformly at 5 m/s² for 8 seconds. Find:
(i) Final velocity (ii) Distance covered

(i) $v = u + at = 0 + (5 \times 8) = \textbf{40 m/s}$

(ii) $s = ut + \tfrac{1}{2}at^2 = 0 + \tfrac{1}{2}(5)(8^2) = \tfrac{1}{2}(5)(64) = \textbf{160 m}$

---

## Free Fall Under Gravity

When a body is released from rest and falls under gravity alone (ignoring air resistance):
- Acceleration $a = g \approx 10 \text{ m/s}^2$ (downward)
- Initial velocity $u = 0$ (if dropped from rest)

For a body **thrown vertically upward** with speed $u$:

$$\text{Maximum height: } H_{max} = \frac{u^2}{2g}$$
$$\text{Time to reach max height: } t = \frac{u}{g}$$
$$\text{Total time of flight: } T = \frac{2u}{g}$$

At maximum height: **velocity = 0** (momentarily at rest before falling back)

### Worked Example
A stone is thrown vertically upward with an initial velocity of 30 m/s. Find (i) the maximum height and (ii) the total time in the air. [g = 10 m/s²]

(i) $H = \frac{u^2}{2g} = \frac{30^2}{2 \times 10} = \frac{900}{20} = \textbf{45 m}$

(ii) $T = \frac{2u}{g} = \frac{2 \times 30}{10} = \textbf{6 s}$

---

## Projectile Motion

A **projectile** is any body thrown into space and allowed to move freely under gravity alone. The initial velocity $u$ is at an angle $\theta$ to the horizontal.

**Horizontal component** (constant, no acceleration):
$$u_x = u\cos\theta$$

**Vertical component** (decelerates upward, $a = -g$):
$$u_y = u\sin\theta$$

### Key Projectile Formulas

$$\text{Maximum Height: } H = \frac{u^2\sin^2\theta}{2g}$$
$$\text{Time of Flight: } T = \frac{2u\sin\theta}{g}$$
$$\text{Horizontal Range: } R = \frac{u^2\sin 2\theta}{g}$$

> 💡 **JAMB Key Facts:**
> - Range is **maximum at θ = 45°** (because sin 2θ is maximum when 2θ = 90°)
> - Complementary angles (e.g. **30° and 60°**) produce the **same range**
> - At maximum height, vertical velocity = 0; horizontal velocity = $u\cos\theta$

### Worked Example
A ball is projected at 50 m/s at 30° to the horizontal. Find the maximum height and range. [g = 10 m/s²]

$H = \frac{(50)^2 \sin^2 30°}{2 \times 10} = \frac{2500 \times 0.25}{20} = \frac{625}{20} = \textbf{31.25 m}$

$R = \frac{(50)^2 \sin 60°}{10} = \frac{2500 \times 0.866}{10} = \textbf{216.5 m}$

---

## Motion Graphs

### Displacement-Time Graph
- **Slope** (gradient) = **velocity**
- Horizontal line (zero slope) = body at rest
- Straight line with positive slope = uniform velocity
- Curved line = changing velocity (acceleration)

### Velocity-Time Graph
- **Slope** (gradient) = **acceleration**
- **Area under graph** = **distance (displacement)**
- Horizontal line = uniform velocity (zero acceleration)
- Straight line going up = uniform acceleration
- Straight line going down = uniform deceleration

---

## Relative Velocity

The **velocity of A relative to B** is:
$$V_{AB} = V_A - V_B$$

- If A and B move in the **same direction**: relative speed = $|V_A - V_B|$
- If A and B move in **opposite directions**: relative speed = $V_A + V_B$

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- Distance is scalar; displacement is vector
- Equations of motion apply ONLY when acceleration is constant
- At maximum height of a vertical throw or projectile: vertical velocity = 0
- Area under v-t graph = displacement; slope = acceleration

> ⚠️ **Commonly Tested Areas**
- Applying equations of motion in multi-step problems
- Projectile questions: finding H, T, R
- Interpreting velocity-time and displacement-time graphs
- Relative velocity problems (trains, boats, runners)

> 🚫 **Common Mistakes**
- Using g = 9.8 when JAMB specifies g = 10 m/s²
- Forgetting to take the downward direction as negative in vertical motion
- Confusing distance with displacement in problems
- Using the total time instead of half-time for maximum height

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
A body accelerates uniformly from rest and travels 100 m in 10 s. What is its acceleration?

- 1 m/s²
- 2 m/s²
- 5 m/s²
- 10 m/s²

**Answer:** 2 m/s²

**Explanation:** Using $s = ut + \tfrac{1}{2}at^2$. Since $u = 0$: $100 = 0 + \tfrac{1}{2}(a)(10^2) = 50a$. Therefore $a = 100/50 = 2 \text{ m/s}^2$.

---

### Question 2 *(Exam-Style Question)*
A projectile is fired at 60° to the horizontal. At what other angle would it achieve the same horizontal range?

- 20°
- 30°
- 45°
- 90°

**Answer:** 30°

**Explanation:** Complementary angles always give the same range. 60° + 30° = 90°. Since $\sin(2 \times 60°) = \sin 120° = \sin 60° = \sin(2 \times 30°)$, both angles produce identical ranges.

---

### Question 3 *(Exam-Style Question)*
A stone is dropped from a cliff 80 m high. How long does it take to reach the ground? [g = 10 m/s²]

- 2 s
- 4 s
- 6 s
- 8 s

**Answer:** 4 s

**Explanation:** Using $s = ut + \tfrac{1}{2}gt^2$ with $u = 0$: $80 = \tfrac{1}{2}(10)t^2 = 5t^2$. So $t^2 = 16$, $t = 4$ s.

---

### Question 4 *(Exam-Style Question)*
The area under a velocity-time graph represents the:

- Acceleration of the body
- Power generated by the body
- Distance covered by the body
- Momentum of the body

**Answer:** Distance covered by the body

**Explanation:** The area under a v-t graph = velocity × time = distance. The slope (gradient) of a v-t graph = acceleration. The slope of a d-t graph = velocity.`
  },

  {
    id: 21,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Work, Energy and Power',
    subtopic: 'Work Done by a Force, Kinetic Energy, Potential Energy, Conservation of Energy, Power, Efficiency, Simple Harmonic Motion Energy',
    summary_60s: 'Work = Force × displacement in the direction of force (W = Fs cosθ). Kinetic energy KE = ½mv². Gravitational potential energy PE = mgh. Conservation of energy: total mechanical energy (KE + PE) is constant in the absence of friction. Power = work done per unit time = Fv. Efficiency = useful energy output / total energy input × 100%.',
    key_formulas: 'W = Fs cosθ\nKE = ½mv²\nPE = mgh\nKE + PE = constant (conservation)\nPower P = W/t = Fv\nEfficiency η = (useful output / input) × 100%\nElastic PE = ½ke² (Hooke\'s law spring)',
    pro_tips_95: '(1) Work done is ZERO when force is perpendicular to displacement (e.g. centripetal force, normal reaction). (2) When a body is thrown up, KE converts to PE; at maximum height, KE = 0 and PE is maximum. (3) Power = Fv is most useful when a vehicle moves at constant speed against a resistive force.',
    syllabus_objectives: 'Candidates should be able to: 1. Calculate work done by a force using W = Fs cosθ. 2. Distinguish between kinetic and potential energy with formulas. 3. Apply the principle of conservation of mechanical energy. 4. Calculate power and efficiency. 5. Explain energy transformations in everyday Nigerian situations.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# WORK, ENERGY AND POWER

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - Define work, energy and power with correct SI units
> - Apply the work formula including the angle component
> - Use the conservation of energy principle
> - Calculate power and efficiency of machines and engines

---

## Work Done by a Force

### Definition
**Work** is done when a force causes a body to move through a distance in the direction of the force.

$$W = F \cdot s \cdot \cos\theta$$

Where:
- $W$ = work done (Joules, J)
- $F$ = applied force (Newtons, N)
- $s$ = displacement (metres, m)
- $\theta$ = angle between force and displacement direction

### When is Work Zero?
Work = 0 when:
- The force is perpendicular to displacement ($\cos 90° = 0$), e.g. a person carrying a load horizontally — the gravitational force acts downward but motion is horizontal
- The body does not move ($s = 0$)

### Worked Example
A man pushes a box with a force of 50 N at 30° to the horizontal. If the box moves 10 m, find the work done.

$$W = Fs\cos\theta = 50 \times 10 \times \cos 30° = 500 \times 0.866 = \textbf{433 J}$$

---

## Kinetic Energy (KE)

### Definition
**Kinetic energy** is the energy possessed by a body by virtue of its motion:

$$KE = \frac{1}{2}mv^2$$

Where $m$ = mass (kg), $v$ = velocity (m/s). Unit: **Joule (J)**

### Worked Example
A car of mass 1000 kg moves at 20 m/s. Find its kinetic energy.

$$KE = \frac{1}{2}(1000)(20)^2 = \frac{1}{2}(1000)(400) = \textbf{200,000 J = 200 kJ}$$

---

## Gravitational Potential Energy (PE)

### Definition
**Potential energy** is the energy stored in a body due to its position above a reference level:

$$PE = mgh$$

Where $m$ = mass (kg), $g$ = 10 m/s², $h$ = height above reference (m)

### Worked Example
Find the PE of a 5 kg book placed on a shelf 2 m above the floor.

$$PE = mgh = 5 \times 10 \times 2 = \textbf{100 J}$$

---

## Conservation of Mechanical Energy

**The Principle of Conservation of Energy** states that energy can neither be created nor destroyed but can be converted from one form to another.

In the absence of friction:
$$KE + PE = \text{constant (Total Mechanical Energy)}$$

As a body falls freely from height $h$:
- At the top: $KE = 0$, $PE = mgh$ (maximum)
- At the bottom: $PE = 0$, $KE = \frac{1}{2}mv^2 = mgh$ (maximum)

This gives the useful result: $v = \sqrt{2gh}$ (velocity at bottom of free fall from height h)

### Worked Example
A 2 kg ball is released from rest at a height of 5 m. Find its speed just before it hits the ground.

Using conservation: $\frac{1}{2}mv^2 = mgh$

$$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 5} = \sqrt{100} = \textbf{10 m/s}$$

---

## Power

**Power** is the rate at which work is done (or energy is transferred):

$$P = \frac{W}{t} = \frac{Fs}{t} = Fv$$

SI unit: **Watt (W)** where 1 W = 1 J/s

> 💡 Use $P = Fv$ when a vehicle moves at **constant velocity** against a resistive force.

### Worked Example
A car engine exerts a driving force of 2000 N at a constant speed of 25 m/s. Find the power output.

$$P = Fv = 2000 \times 25 = \textbf{50,000 W = 50 kW}$$

---

## Efficiency

$$\text{Efficiency} = \frac{\text{Useful Energy Output}}{\text{Total Energy Input}} \times 100\%$$

No machine is 100% efficient because energy is always lost to friction/heat.

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- Work is zero when force ⊥ displacement
- KE = ½mv² ; PE = mgh ; at max height KE = 0
- $v = \sqrt{2gh}$ — very common JAMB formula for speed after free fall from height h
- Power = Fv for constant-speed vehicles

> ⚠️ **Commonly Tested Areas**
- Work done at an angle using W = Fs cosθ
- Energy conservation applied to pendulums, falling objects, roller coasters
- Power calculations for engines and pumps

> 🚫 **Common Mistakes**
- Forgetting the cosθ factor in the work formula
- Using Power = W/t when velocity is given (use P = Fv instead)

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
A body of mass 4 kg is lifted vertically through 5 m in 10 s. Calculate the power expended. [g = 10 m/s²]

- 10 W
- 20 W
- 200 W
- 400 W

**Answer:** 20 W

**Explanation:** Work done = mgh = 4 × 10 × 5 = 200 J. Power = W/t = 200/10 = **20 W**.

---

### Question 2 *(Exam-Style Question)*
A ball of mass 0.5 kg is dropped from a height of 20 m. What is its kinetic energy just before striking the ground? [g = 10 m/s²]

- 10 J
- 50 J
- 100 J
- 200 J

**Answer:** 100 J

**Explanation:** By conservation of energy, KE at bottom = PE at top = mgh = 0.5 × 10 × 20 = **100 J**.

---

### Question 3 *(Exam-Style Question)*
A machine does 500 J of useful work from an input of 800 J. What is its efficiency?

- 37.5%
- 60%
- 62.5%
- 85%

**Answer:** 62.5%

**Explanation:** Efficiency = (500/800) × 100% = **62.5%**.`
  },

  {
    id: 22,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Waves',
    subtopic: 'Wave Properties, Transverse vs Longitudinal, Speed/Frequency/Wavelength, Reflection, Refraction, Diffraction, Interference, Superposition, Polarisation, Simple Harmonic Motion',
    summary_60s: 'A wave transfers energy without transferring matter. v = fλ. Transverse waves (light, water): particles vibrate perpendicular to wave direction; can be polarised. Longitudinal waves (sound): particles vibrate parallel to wave direction; cannot be polarised. Superposition: when two waves meet, the resultant displacement = algebraic sum. Constructive interference when path difference = nλ; destructive when path difference = (n + ½)λ.',
    key_formulas: 'v = fλ\nT = 1/f\nOptical path difference: constructive = nλ, destructive = (2n-1)λ/2\nSHM: T = 2π√(l/g) for pendulum\nSHM: T = 2π√(m/k) for spring\nWave intensity ∝ (amplitude)²',
    pro_tips_95: '(1) Only TRANSVERSE waves can be polarised — this is the key distinction JAMB uses to test understanding. (2) In a stationary (standing) wave, nodes are points of zero amplitude; antinodes are points of maximum amplitude. Distance between two adjacent nodes = λ/2. (3) Frequency does NOT change when a wave crosses a boundary — only speed and wavelength change.',
    syllabus_objectives: 'Candidates should be able to: 1. Classify waves as transverse or longitudinal with examples. 2. Apply v = fλ to solve wave problems. 3. Explain reflection, refraction, diffraction and interference of waves. 4. Distinguish constructive from destructive interference. 5. Explain polarisation and its evidence that light is transverse. 6. Derive and apply SHM equations for pendulum and spring.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# WAVES

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - Define wave motion and identify wave properties
> - Distinguish transverse from longitudinal waves
> - Apply v = fλ and interpret wave graphs
> - Explain and apply reflection, refraction, diffraction and interference
> - Explain polarisation and superposition

---

## What Is a Wave?

A **wave** is a periodic disturbance that transfers energy from one point to another **without the permanent transfer of matter**.

### Key Wave Properties

| Property | Symbol | Definition | SI Unit |
|---|---|---|---|
| **Amplitude** | A | Maximum displacement from equilibrium | m |
| **Wavelength** | λ (lambda) | Distance between two consecutive points in phase | m |
| **Period** | T | Time for one complete oscillation | s |
| **Frequency** | f | Number of complete oscillations per second | Hz |
| **Wave speed** | v | Distance travelled by the wave per second | m/s |

**Fundamental relationship:**
$$v = f\lambda, \quad f = \frac{1}{T}$$

### Worked Example
A wave has a frequency of 500 Hz and a wavelength of 0.4 m. Find its speed.

$$v = f\lambda = 500 \times 0.4 = \textbf{200 m/s}$$

---

## Transverse vs Longitudinal Waves

| Feature | Transverse Wave | Longitudinal Wave |
|---|---|---|
| **Particle vibration** | Perpendicular to wave direction | Parallel to wave direction |
| **Examples** | Light, water waves, radio waves, S-seismic waves | Sound, P-seismic waves, compression waves |
| **Can be polarised?** | **YES** | **NO** |
| **Travels through vacuum?** | Yes (EM waves) | No (needs medium) |

> ⚠️ **Exam Trap:** The fact that light can be polarised is **proof that light is a transverse wave**. Sound CANNOT be polarised.

---

## Wave Behaviour

### Reflection
A wave bounces back when it hits a boundary. The angle of incidence equals the angle of reflection.

### Refraction
A wave changes direction when it crosses from one medium to another due to a **change in speed**. Frequency stays constant; wavelength and speed change.

When wave moves from fast to slow medium → bends **toward** the normal.
When wave moves from slow to fast medium → bends **away** from the normal.

### Diffraction
A wave spreads out as it passes through a gap or around an obstacle. Diffraction is most pronounced when the gap size ≈ wavelength.

### Interference and Superposition

**Principle of Superposition:** When two or more waves meet at a point, the resultant displacement = **algebraic sum** of individual displacements.

- **Constructive interference:** Waves in phase (crest meets crest). Path difference = $n\lambda$ (where n = 0, 1, 2...). Amplitude **increases**.
- **Destructive interference:** Waves out of phase (crest meets trough). Path difference = $(n + \frac{1}{2})\lambda$. Amplitude **decreases to zero**.

### Polarisation
Polarisation restricts the vibration of a transverse wave to **one plane only**. Only transverse waves can be polarised. This is why polaroid sunglasses reduce glare (reflected light is partially polarised).

---

## Simple Harmonic Motion (SHM)

SHM is a periodic motion where the restoring force is directly proportional to displacement and directed toward equilibrium:

$$F = -kx$$

### Simple Pendulum
$$T = 2\pi\sqrt{\frac{l}{g}}$$

Where $l$ = length of pendulum, $g$ = gravitational acceleration.

**Note:** Period is independent of mass and amplitude (for small angles).

### Loaded Spring
$$T = 2\pi\sqrt{\frac{m}{k}}$$

Where $m$ = mass, $k$ = spring constant.

### Worked Example
Find the period of a simple pendulum 1 m long. [g = 10 m/s², π = 3.14]

$$T = 2\pi\sqrt{\frac{1}{10}} = 2 \times 3.14 \times \sqrt{0.1} = 6.28 \times 0.316 = \textbf{1.98 s ≈ 2 s}$$

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- $v = f\lambda$ — fundamental wave equation
- Only transverse waves can be polarised
- Frequency does NOT change on refraction — only speed and wavelength change
- Constructive interference: path diff = nλ; Destructive: path diff = (n+½)λ
- Period of pendulum depends on length and g — NOT on mass or amplitude

> ⚠️ **Commonly Tested Areas**
- Calculating wave speed, frequency or wavelength from v = fλ
- Identifying transverse vs longitudinal from context
- Polarisation as proof that light is transverse
- SHM period calculations for pendulums

> 🚫 **Common Mistakes**
- Claiming sound can be polarised (it cannot)
- Saying frequency changes during refraction (it doesn't)
- Confusing nodes and antinodes in standing waves

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
Which of the following provides evidence that light is a transverse wave?

- Light travels at 3 × 10⁸ m/s
- Light can be diffracted
- Light can be polarised
- Light undergoes reflection

**Answer:** Light can be polarised

**Explanation:** Polarisation only occurs in transverse waves, where particle vibration is perpendicular to the wave direction. This property is unique to transverse waves and distinguishes light from longitudinal waves like sound.

---

### Question 2 *(Exam-Style Question)*
A wave has a period of 0.02 s and a wavelength of 3 m. What is its speed?

- 0.006 m/s
- 15 m/s
- 150 m/s
- 1500 m/s

**Answer:** 150 m/s

**Explanation:** First find frequency: f = 1/T = 1/0.02 = 50 Hz. Then v = fλ = 50 × 3 = **150 m/s**.

---

### Question 3 *(Exam-Style Question)*
A simple pendulum completes 20 oscillations in 40 seconds. What is its period?

- 0.5 s
- 1 s
- 2 s
- 4 s

**Answer:** 2 s

**Explanation:** Period = total time / number of oscillations = 40/20 = **2 s**.`
  },

  {
    id: 23,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Current Electricity',
    subtopic: 'Electric Current, Ohm\'s Law, Resistance, Series & Parallel Circuits, EMF & Internal Resistance, Electrical Power, Kirchhoff\'s Laws',
    summary_60s: 'Electric current I = Q/t (charge per second). Ohm\'s Law: V = IR (voltage = current × resistance). Resistors in series: R_total = R₁ + R₂ + R₃. Resistors in parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃. EMF equation: V = E – Ir (terminal voltage drops due to internal resistance). Power: P = IV = I²R = V²/R.',
    key_formulas: 'I = Q/t\nV = IR (Ohm\'s Law)\nSeries: R_T = R₁ + R₂ + ...\nParallel: 1/R_T = 1/R₁ + 1/R₂ + ...\nEMF: E = V + Ir, V = E - Ir\nPower: P = IV = I²R = V²/R\nElectrical energy: E = Pt = IVt\nResistivity: R = ρL/A',
    pro_tips_95: '(1) In a parallel circuit, voltage across each branch is the SAME. In series, current through each component is the SAME. (2) When external resistance = internal resistance, maximum power is transferred from source. (3) Adding resistors in parallel ALWAYS REDUCES total resistance below the smallest individual resistor.',
    syllabus_objectives: 'Candidates should be able to: 1. Define electric current and state Ohm\'s Law with its conditions. 2. Calculate total resistance for series and parallel combinations. 3. Apply the EMF equation V = E – Ir. 4. Calculate electrical power and energy. 5. Apply Kirchhoff\'s laws to simple circuits.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# CURRENT ELECTRICITY

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - Define and calculate electric current, voltage and resistance
> - Apply Ohm's Law
> - Solve series and parallel resistance circuits
> - Apply EMF and internal resistance equations
> - Calculate electrical power and energy

---

## Electric Current

**Electric current** is the rate of flow of electric charge:

$$I = \frac{Q}{t}$$

- SI unit: **Ampere (A)** where 1 A = 1 C/s
- Conventional current flows from positive (+) terminal to negative (–)
- Electron flow is actually opposite (from – to +)

---

## Ohm's Law

**Ohm's Law** states that the current through a conductor is **directly proportional** to the voltage across it, provided temperature and other physical conditions remain constant:

$$V = IR$$

Where $V$ = voltage (Volts, V), $I$ = current (Amperes, A), $R$ = resistance (Ohms, Ω)

**Ohm's Law graph:** A straight line through the origin on a V-I graph means the component is ohmic (obeys Ohm's Law). A curved graph means non-ohmic (e.g. diode, filament bulb at high temperature).

### Worked Example
A resistor has a voltage of 12 V across it and a current of 3 A through it. Find its resistance.

$$R = \frac{V}{I} = \frac{12}{3} = \textbf{4 Ω}$$

---

## Resistance

**Resistance** is the opposition to the flow of electric current. It depends on:
$$R = \frac{\rho L}{A}$$

Where:
- $\rho$ = resistivity of material (Ω m) — a material property
- $L$ = length of conductor (m) — resistance increases with length
- $A$ = cross-sectional area (m²) — resistance decreases with greater area

---

## Series Circuits

In a **series circuit**, components are connected end-to-end in a single path.

- **Same current** flows through every component: $I_1 = I_2 = I_3 = I$
- **Voltages add up:** $V_T = V_1 + V_2 + V_3$
- **Total resistance:** $R_T = R_1 + R_2 + R_3$

### Worked Example
Three resistors of 2 Ω, 4 Ω, and 6 Ω are connected in series to a 24 V battery. Find: (i) total resistance, (ii) current, (iii) voltage across the 4 Ω resistor.

(i) $R_T = 2 + 4 + 6 = \textbf{12 Ω}$

(ii) $I = V/R_T = 24/12 = \textbf{2 A}$

(iii) $V_{4\Omega} = IR = 2 \times 4 = \textbf{8 V}$

---

## Parallel Circuits

In a **parallel circuit**, components are connected between the same two nodes (different branches).

- **Same voltage** across each branch: $V_1 = V_2 = V_3 = V$
- **Currents add up:** $I_T = I_1 + I_2 + I_3$
- **Total resistance formula:** $\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$

**Shortcut for two resistors in parallel:**
$$R_T = \frac{R_1 \times R_2}{R_1 + R_2}$$

### Worked Example
Two resistors of 6 Ω and 3 Ω are connected in parallel. Find the total resistance.

$$R_T = \frac{6 \times 3}{6 + 3} = \frac{18}{9} = \textbf{2 Ω}$$

Note: 2 Ω is less than the smallest individual resistor (3 Ω) — this always happens in parallel.

---

## EMF and Internal Resistance

Every real cell has an **internal resistance** ($r$) that opposes current flow within the cell itself.

**EMF ($E$)** = total voltage the cell can produce (open circuit)

**Terminal Voltage ($V$)** = voltage available at the external circuit terminals:

$$V = E - Ir$$

When current flows, the terminal voltage **drops** below the EMF by the amount $Ir$ (the "lost volts").

### Worked Example
A battery has EMF 12 V and internal resistance 1 Ω. When a 5 Ω resistor is connected, find: (i) current, (ii) terminal voltage.

(i) Total resistance = $r + R = 1 + 5 = 6$ Ω

$I = E/(R + r) = 12/6 = \textbf{2 A}$

(ii) $V = E - Ir = 12 - (2 \times 1) = \textbf{10 V}$

---

## Electrical Power and Energy

$$P = IV = I^2R = \frac{V^2}{R}$$

$$E = Pt = IVt$$

SI unit of power: **Watt (W)**; of energy: **Joule (J)** or kilowatt-hour (kWh)

1 kWh = 3,600,000 J = 3.6 × 10⁶ J

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- Series: same current; voltages add; R_T = sum
- Parallel: same voltage; currents add; 1/R_T = sum of 1/R
- Parallel resistance is ALWAYS less than smallest individual resistor
- Terminal voltage = EMF – voltage drop inside battery (V = E – Ir)
- Power = IV = I²R = V²/R — pick the form that suits available data

> ⚠️ **Commonly Tested Areas**
- Mixed series-parallel circuits (simplify step by step)
- EMF/internal resistance calculations
- Electrical power and cost of electricity (kWh problems)

> 🚫 **Common Mistakes**
- Applying V = E – Ir but substituting the wrong I
- Forgetting that resistors in parallel give a LOWER total resistance
- Using P = V²/R incorrectly when the resistance is the internal resistance

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
Three resistors of 3 Ω, 6 Ω and 9 Ω are connected in parallel. What is the total resistance?

- 18 Ω
- 6 Ω
- 1.64 Ω
- 0.61 Ω

**Answer:** 1.64 Ω

**Explanation:** $\frac{1}{R_T} = \frac{1}{3} + \frac{1}{6} + \frac{1}{9} = \frac{6+3+2}{18} = \frac{11}{18}$. So $R_T = 18/11 \approx \textbf{1.64 Ω}$.

---

### Question 2 *(Exam-Style Question)*
A cell has EMF 6 V and internal resistance 0.5 Ω. It delivers a current of 2 A. What is the terminal voltage?

- 5 V
- 6 V
- 7 V
- 4 V

**Answer:** 5 V

**Explanation:** $V = E - Ir = 6 - (2 \times 0.5) = 6 - 1 = \textbf{5 V}$.

---

### Question 3 *(Exam-Style Question)*
A 100 W bulb operates for 5 hours. How many kilowatt-hours of energy does it consume?

- 0.5 kWh
- 5 kWh
- 50 kWh
- 500 kWh

**Answer:** 0.5 kWh

**Explanation:** Energy = Power × Time = 100 W × 5 h = 500 Wh = **0.5 kWh**.`
  },

  {
    id: 24,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Electrostatics',
    subtopic: 'Electric Charge, Coulomb\'s Law, Electric Field, Electric Potential, Capacitors, Dielectrics, Charging by Induction and Contact',
    summary_60s: 'Coulomb\'s Law: F = kQ₁Q₂/r² (force between charges). Electric field E = F/q = kQ/r². Electric potential V = kQ/r. Capacitance C = Q/V. For parallel plate capacitor: C = ε₀εᵣA/d. Capacitors in series: 1/C_T = 1/C₁ + 1/C₂. Capacitors in parallel: C_T = C₁ + C₂. Energy stored in capacitor: W = ½CV² = ½QV = Q²/2C.',
    key_formulas: 'F = kQ₁Q₂/r² where k = 9×10⁹ N m² C⁻²\nE = F/q = kQ/r²\nV = kQ/r = W/q\nC = Q/V\nC_parallel_plate = ε₀εᵣA/d\nSeries: 1/C_T = 1/C₁ + 1/C₂\nParallel: C_T = C₁ + C₂\nEnergy: W = ½CV² = ½QV',
    pro_tips_95: '(1) Capacitors combine OPPOSITE to resistors: series capacitors give smaller total; parallel gives larger total. (2) A conductor in electrostatic equilibrium has zero electric field INSIDE — all charge resides on the surface (Faraday cage principle). (3) A positive charge moves from HIGH to LOW potential spontaneously; a negative charge moves from LOW to HIGH.',
    syllabus_objectives: 'Candidates should be able to: 1. State and apply Coulomb\'s Law. 2. Define and calculate electric field strength and electric potential. 3. Explain charging by friction, contact, and induction. 4. Calculate capacitance and charge stored. 5. Determine equivalent capacitance for series and parallel combinations.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# ELECTROSTATICS

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - State and apply Coulomb's Law
> - Define electric field and electric potential
> - Explain methods of charging conductors
> - Calculate capacitance and energy stored

---

## Electric Charge

**Electric charge** is a fundamental property of matter. There are two types:
- **Positive charge** (protons)
- **Negative charge** (electrons)

**Laws of charge:**
- Like charges **repel** each other
- Unlike charges **attract** each other

SI unit of charge: **Coulomb (C)**. Elementary charge: $e = 1.6 \times 10^{-19}$ C

### Methods of Charging
- **Friction:** rubbing two materials together transfers electrons (e.g. glass rod on silk → glass becomes positive)
- **Contact:** touching a charged conductor transfers some charge to the contacted object (same sign)
- **Induction:** bringing a charged object near a conductor causes charge separation without contact. Grounding then removes one sign of charge.

---

## Coulomb's Law

The electrostatic force between two point charges is:

$$F = \frac{kQ_1Q_2}{r^2}$$

Where:
- $k = 9 \times 10^9$ N m² C⁻² (Coulomb's constant)
- $Q_1$, $Q_2$ = charges (Coulombs)
- $r$ = separation between charges (metres)
- Force is attractive if charges are unlike; repulsive if alike

### Worked Example
Two charges of +4 µC and –6 µC are separated by 0.3 m. Find the force between them.

$$F = \frac{kQ_1Q_2}{r^2} = \frac{9\times10^9 \times 4\times10^{-6} \times 6\times10^{-6}}{(0.3)^2} = \frac{9\times10^9 \times 24\times10^{-12}}{0.09} = \frac{0.216}{0.09} = \textbf{2.4 N (attractive)}$$

---

## Electric Field

**Electric field** $E$ at a point is the force per unit positive charge placed at that point:

$$E = \frac{F}{q} = \frac{kQ}{r^2}$$

SI unit: **N/C** or **V/m**

- Electric field lines point **away** from positive charges
- Electric field lines point **toward** negative charges
- Field lines never cross

---

## Electric Potential

**Electric potential** $V$ at a point is the work done per unit positive charge in bringing it from infinity to that point:

$$V = \frac{kQ}{r} = \frac{W}{q}$$

SI unit: **Volt (V)** where 1 V = 1 J/C

Potential is a scalar quantity — it has no direction.

---

## Capacitors

A **capacitor** stores electrical charge and energy. It consists of two parallel conducting plates separated by an insulator (dielectric).

**Capacitance** = charge stored per unit voltage:
$$C = \frac{Q}{V}$$

SI unit: **Farad (F)** (usually µF or pF in practice)

For a parallel plate capacitor:
$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$

Where $\varepsilon_0 = 8.85\times10^{-12}$ F/m, $\varepsilon_r$ = relative permittivity of dielectric, $A$ = plate area, $d$ = separation

**Increasing capacitance:**
- Increase plate area A
- Decrease plate separation d
- Use dielectric with higher $\varepsilon_r$

### Capacitors in Series
$$\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}$$
(Same charge on each; voltages add)

### Capacitors in Parallel
$$C_T = C_1 + C_2 + C_3$$
(Same voltage; charges add)

### Energy Stored in a Capacitor
$$W = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- Capacitors combine OPPOSITE to resistors (parallel capacitors add directly)
- Energy stored = ½CV²
- Electric field inside a conductor = zero (Faraday cage)
- Coulomb's Law: F ∝ Q₁Q₂ and F ∝ 1/r²

> ⚠️ **Commonly Tested Areas**
- Calculating force using Coulomb's Law
- Equivalent capacitance in series/parallel
- Energy stored in capacitor

> 🚫 **Common Mistakes**
- Using resistor formulas for capacitors (they are reversed!)
- Forgetting to convert µC or µF to base SI units

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
Two capacitors of 4 µF and 12 µF are connected in series. What is the total capacitance?

- 16 µF
- 8 µF
- 3 µF
- 48 µF

**Answer:** 3 µF

**Explanation:** $\frac{1}{C_T} = \frac{1}{4} + \frac{1}{12} = \frac{3+1}{12} = \frac{4}{12}$. So $C_T = 12/4 = \textbf{3 µF}$.

---

### Question 2 *(Exam-Style Question)*
A capacitor of 100 µF is charged to a voltage of 50 V. What is the energy stored?

- 0.125 J
- 0.25 J
- 125 J
- 250 J

**Answer:** 0.125 J

**Explanation:** $W = \frac{1}{2}CV^2 = \frac{1}{2} \times 100\times10^{-6} \times 50^2 = \frac{1}{2} \times 100\times10^{-6} \times 2500 = \textbf{0.125 J}$.

---

### Question 3 *(Exam-Style Question)*
Which of the following correctly states Coulomb's Law?

- The force between two charges is inversely proportional to the product of the charges
- The force between two charges is directly proportional to the square of the distance
- The force between two charges is directly proportional to the product of the charges and inversely proportional to the square of the distance
- The force between two charges is independent of the medium between them

**Answer:** The force between two charges is directly proportional to the product of the charges and inversely proportional to the square of the distance

**Explanation:** $F = kQ_1Q_2/r^2$. The force increases with larger charges and decreases with larger separation. It also depends on the medium (through k or the permittivity ε).`
  },

  {
    id: 25,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Gas Laws',
    subtopic: 'Boyle\'s Law, Charles\' Law, Pressure Law, General Gas Law, Ideal Gas Equation, Kinetic Theory of Gases',
    summary_60s: 'Boyle\'s Law: P₁V₁ = P₂V₂ (constant T). Charles\' Law: V₁/T₁ = V₂/T₂ (constant P). Pressure Law: P₁/T₁ = P₂/T₂ (constant V). General Gas Law: P₁V₁/T₁ = P₂V₂/T₂. Ideal Gas Equation: PV = nRT where R = 8.314 J mol⁻¹ K⁻¹. All temperatures must be in KELVIN: T(K) = T(°C) + 273.',
    key_formulas: 'Boyle\'s: P₁V₁ = P₂V₂ (constant T)\nCharles\': V₁/T₁ = V₂/T₂ (constant P)\nPressure Law: P₁/T₁ = P₂/T₂ (constant V)\nGeneral: P₁V₁/T₁ = P₂V₂/T₂\nIdeal: PV = nRT (R = 8.314 J/mol K)\nT(K) = T(°C) + 273',
    pro_tips_95: '(1) Always convert Celsius to Kelvin BEFORE using any gas law formula — this is the most common error in WAEC and JAMB. (2) Boyle\'s Law only applies when TEMPERATURE is constant; Charles\' Law only when PRESSURE is constant. (3) In a graph of P vs V (Boyle\'s Law), the curve is a hyperbola. A graph of P vs 1/V is a straight line through the origin.',
    syllabus_objectives: 'Candidates should be able to: 1. State and apply Boyle\'s, Charles\' and Pressure Law. 2. Apply the general gas law equation. 3. Use the ideal gas equation PV = nRT. 4. Convert between Celsius and Kelvin. 5. Explain gas behaviour using kinetic theory.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# GAS LAWS

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - State and apply Boyle's Law, Charles' Law and Pressure Law
> - Solve problems using the general gas equation
> - Convert temperatures between Celsius and Kelvin
> - Explain gas behaviour using kinetic theory

---

## The Kelvin Temperature Scale

**Critical Rule:** ALL gas law calculations must use temperature in **Kelvin**:

$$T(\text{K}) = T(°\text{C}) + 273$$

- 0°C = 273 K (ice melting point)
- 100°C = 373 K (water boiling point)
- –273°C = 0 K (absolute zero — minimum possible temperature)

At absolute zero, all molecular motion would theoretically cease.

---

## Boyle's Law

**Statement:** The volume of a fixed mass of gas is inversely proportional to its pressure, provided the **temperature remains constant**.

$$P \propto \frac{1}{V} \quad \Rightarrow \quad P_1V_1 = P_2V_2 \quad (\text{constant } T)$$

**Graphical representation:**
- P vs V: **hyperbola** (inverse curve)
- P vs 1/V: **straight line through origin**

### Worked Example
A gas occupies 500 cm³ at a pressure of 100 kPa. What volume will it occupy when the pressure is increased to 250 kPa at constant temperature?

$$P_1V_1 = P_2V_2 \Rightarrow V_2 = \frac{P_1V_1}{P_2} = \frac{100 \times 500}{250} = \textbf{200 cm}^3$$

---

## Charles' Law

**Statement:** The volume of a fixed mass of gas is directly proportional to its absolute (Kelvin) temperature, provided the **pressure remains constant**.

$$V \propto T \quad \Rightarrow \quad \frac{V_1}{T_1} = \frac{V_2}{T_2} \quad (\text{constant } P)$$

**Graph:** V vs T (in Kelvin) is a straight line through the origin.

### Worked Example
A gas has volume 3 L at 27°C. Find its volume at 127°C at constant pressure.

Convert: $T_1 = 27 + 273 = 300$ K; $T_2 = 127 + 273 = 400$ K

$$\frac{V_1}{T_1} = \frac{V_2}{T_2} \Rightarrow V_2 = \frac{V_1 T_2}{T_1} = \frac{3 \times 400}{300} = \textbf{4 L}$$

---

## Pressure Law (Gay-Lussac's Law)

**Statement:** The pressure of a fixed mass of gas is directly proportional to its absolute temperature, provided the **volume remains constant**.

$$P \propto T \quad \Rightarrow \quad \frac{P_1}{T_1} = \frac{P_2}{T_2} \quad (\text{constant } V)$$

---

## General Gas Law

Combining all three laws:

$$\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$$

This equation covers all situations where two of the three variables change.

### Worked Example
A gas has pressure 100 kPa, volume 2 L at 27°C. Find its volume at 200 kPa and 127°C.

$T_1 = 300$ K, $T_2 = 400$ K

$$V_2 = \frac{P_1V_1T_2}{P_2T_1} = \frac{100 \times 2 \times 400}{200 \times 300} = \frac{80000}{60000} = \textbf{1.33 L}$$

---

## Ideal Gas Equation

$$PV = nRT$$

Where:
- $P$ = pressure (Pa)
- $V$ = volume (m³)
- $n$ = number of moles
- $R = 8.314$ J mol⁻¹ K⁻¹ (universal gas constant)
- $T$ = absolute temperature (K)

---

## Kinetic Theory of Gases

The kinetic theory explains gas behaviour by considering gases as collections of tiny molecules in rapid, random motion:

- Gas molecules are in **continuous, random, rapid motion**
- Volume of molecules is negligible compared to container
- Collisions between molecules (and with walls) are **perfectly elastic** — no kinetic energy is lost
- There are no intermolecular forces between ideal gas molecules
- The **pressure** a gas exerts is caused by molecular collisions with the container walls
- **Temperature** is a measure of the average kinetic energy of molecules: higher T = faster-moving molecules

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- ALWAYS convert °C to K (add 273) before any gas law calculation
- Boyle's Law: PV = constant (T constant)
- Charles' Law: V/T = constant (P constant)
- General Law: P₁V₁/T₁ = P₂V₂/T₂

> ⚠️ **Commonly Tested Areas**
- Applying the general gas law to change of state conditions
- Kelvin conversion errors (most common mistake)
- Interpreting graphs of gas laws

> 🚫 **Common Mistakes**
- Using Celsius instead of Kelvin — always add 273
- Confusing which variable is constant in each law

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
A gas at 27°C occupies a volume of 400 cm³. At what temperature will it occupy 600 cm³ at the same pressure?

- 40.5°C
- 177°C
- 327°C
- 450°C

**Answer:** 177°C

**Explanation:** Using Charles' Law: $T_2 = T_1 \times V_2/V_1 = 300 \times 600/400 = 450$ K. Converting: 450 – 273 = **177°C**.

---

### Question 2 *(Exam-Style Question)*
A gas has pressure 150 kPa when the volume is 4 m³. What is the pressure when the volume reduces to 2 m³ at constant temperature?

- 75 kPa
- 150 kPa
- 300 kPa
- 600 kPa

**Answer:** 300 kPa

**Explanation:** Boyle's Law: $P_2 = P_1V_1/V_2 = 150 \times 4/2 = \textbf{300 kPa}$.

---

### Question 3 *(Exam-Style Question)*
Which temperature corresponds to absolute zero?

- –100°C
- 0°C
- –273°C
- –373°C

**Answer:** –273°C

**Explanation:** Absolute zero is 0 K = **–273°C**. Below this temperature is physically impossible — it is the lowest theoretically possible temperature.`
  },

  {
    id: 26,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Electromagnetic Induction',
    subtopic: 'Faraday\'s Law, Lenz\'s Law, Fleming\'s Right-Hand Rule, AC Generator, Transformer, Self-Inductance',
    summary_60s: 'Electromagnetic induction: EMF is induced whenever the magnetic flux through a conductor changes. Faraday\'s Law: EMF = –ΔΦ/Δt. Lenz\'s Law: the induced EMF opposes the change causing it. Transformer: Vₛ/Vₚ = Nₛ/Nₚ = Iₚ/Iₛ. Step-up transformer: Nₛ > Nₚ (higher output voltage). Step-down transformer: Nₛ < Nₚ (lower output voltage).',
    key_formulas: 'EMF = -ΔΦ/Δt (Faraday\'s Law)\nTransformer: Vₛ/Vₚ = Nₛ/Nₚ\nPower conservation (ideal): Vₛ×Iₛ = Vₚ×Iₚ\nEfficiency = (Vₛ×Iₛ)/(Vₚ×Iₚ) × 100%',
    pro_tips_95: '(1) For transformers: voltage and turns ratio are the SAME; current ratio is INVERSE. So a step-up voltage transformer is a step-DOWN current transformer. (2) Lenz\'s Law is a consequence of energy conservation — the induced current always acts to oppose the change that produced it. (3) A transformer works on AC ONLY — DC produces no changing flux and therefore no induction.',
    syllabus_objectives: 'Candidates should be able to: 1. State Faraday\'s and Lenz\'s Laws. 2. Explain electromagnetic induction with examples. 3. Calculate transformer voltages, currents and turns ratios. 4. Explain the operation of AC generators and DC motors. 5. Calculate transformer efficiency.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# ELECTROMAGNETIC INDUCTION

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - State Faraday's Law and Lenz's Law
> - Explain electromagnetic induction
> - Solve transformer problems
> - Explain the AC generator

---

## Electromagnetic Induction

**Electromagnetic induction** is the production of an EMF (and hence a current) in a conductor when the **magnetic flux** through the conductor changes.

Ways to change magnetic flux:
- Moving the conductor in a magnetic field
- Moving a magnet toward/away from the conductor
- Changing the current in a nearby coil

---

## Faraday's Law

**Statement:** The magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux linkage:

$$\text{EMF} = -N\frac{\Delta\Phi}{\Delta t}$$

Where:
- $N$ = number of turns in the coil
- $\Delta\Phi$ = change in magnetic flux (Webers, Wb)
- $\Delta t$ = time taken for the change

---

## Lenz's Law

**Statement:** The induced EMF (and resulting current) is always in such a direction as to **oppose** the change in flux that caused it.

This is a consequence of energy conservation — you cannot get energy from nothing. The opposing force means you must do work to maintain the motion.

**Application:** If a magnet's North pole approaches a coil, the near face of the coil becomes a North pole to repel it. When the magnet is pulled away, the near face becomes South to attract it.

---

## The Transformer

A transformer transfers electrical energy from one AC circuit to another via electromagnetic induction, changing voltage levels.

**Components:**
- Primary coil ($N_p$ turns) — input voltage $V_p$
- Iron core — channels magnetic flux
- Secondary coil ($N_s$ turns) — output voltage $V_s$

**Transformer Equations:**

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

For an ideal (100% efficient) transformer, power is conserved:
$$V_p I_p = V_s I_s \quad \Rightarrow \quad \frac{I_s}{I_p} = \frac{N_p}{N_s}$$

**Note:** Voltage and turns ratios are the SAME; current ratio is INVERSE.

| Type | Turns | Voltage | Current |
|---|---|---|---|
| **Step-Up** | $N_s > N_p$ | $V_s > V_p$ | $I_s < I_p$ |
| **Step-Down** | $N_s < N_p$ | $V_s < V_p$ | $I_s > I_p$ |

### Worked Example
A transformer has 200 primary turns and 1000 secondary turns. If the primary voltage is 240 V, find: (i) the secondary voltage, (ii) the secondary current if the primary current is 5 A.

(i) $\frac{V_s}{V_p} = \frac{N_s}{N_p} \Rightarrow V_s = 240 \times \frac{1000}{200} = \textbf{1200 V}$

(ii) $\frac{I_s}{I_p} = \frac{N_p}{N_s} \Rightarrow I_s = 5 \times \frac{200}{1000} = \textbf{1 A}$

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- Transformers work on AC ONLY (not DC)
- Step-up in voltage = step-down in current
- Turns ratio = voltage ratio; current ratio is inverted
- Lenz's Law = conservation of energy in electromagnetic form

> ⚠️ **Commonly Tested Areas**
- Transformer calculations (turns, voltage, current)
- Identifying step-up vs step-down from turns ratio
- Transformer efficiency calculations

> 🚫 **Common Mistakes**
- Applying transformer equations to DC circuits
- Confusing voltage and current ratios (they are inverses of each other)

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
A transformer has a primary voltage of 240 V and a secondary voltage of 12 V. If the secondary has 50 turns, how many turns are in the primary?

- 1000 turns
- 100 turns
- 2400 turns
- 500 turns

**Answer:** 1000 turns

**Explanation:** $N_p = N_s \times (V_p/V_s) = 50 \times (240/12) = 50 \times 20 = \textbf{1000 turns}$.

---

### Question 2 *(Exam-Style Question)*
Which of the following statements about transformers is CORRECT?

- Transformers work with both AC and DC
- A step-up transformer increases both voltage and current
- A step-up transformer increases voltage but decreases current
- Transformers create electrical energy

**Answer:** A step-up transformer increases voltage but decreases current

**Explanation:** By energy conservation, if voltage increases, current must decrease proportionally. Transformers only work with AC and merely transform — they do not create — energy.`
  },

  {
    id: 27,
    subject: 'Physics',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Pressure',
    subtopic: 'Pressure in Solids, Pressure in Liquids, Atmospheric Pressure, Archimedes\' Principle, Upthrust, Density and Relative Density',
    summary_60s: 'Pressure = Force/Area (P = F/A). Pressure in liquids: P = hρg (depends on depth, density of liquid — NOT the shape of container). Archimedes\' Principle: upthrust = weight of fluid displaced = ρVg. A body floats when its weight = upthrust (average density ≤ fluid density). Atmospheric pressure at sea level ≈ 101,325 Pa ≈ 760 mmHg.',
    key_formulas: 'P = F/A\nLiquid pressure: P = hρg\nUpthrust (U) = ρ_fluid × V_submerged × g\nFloating condition: Weight = Upthrust\nRelative Density = Density of substance / Density of water\nDensity = Mass / Volume',
    pro_tips_95: '(1) Pressure in a liquid depends ONLY on depth and density — NOT on the volume or shape of the container (Pascal\'s principle). (2) Relative density has NO UNITS — it is a pure ratio. (3) A floating body displaces fluid equal to its OWN WEIGHT (not its own volume).',
    syllabus_objectives: 'Candidates should be able to: 1. Calculate pressure in solids and liquids. 2. Apply Archimedes\' Principle to upthrust problems. 3. Determine conditions for floating and sinking. 4. Measure atmospheric pressure using barometers. 5. Calculate relative density using Archimedes\' Principle.',
    updated_at: 'Official 2026/2027 Syllabus Research',
    content: `# PRESSURE

> 🎯 **Official JAMB/WAEC Syllabus Objectives:**
> Candidates should be able to:
> - Define and calculate pressure in solids and liquids
> - Apply Archimedes' Principle
> - Determine conditions for floating and sinking
> - Calculate upthrust and relative density

---

## Pressure in Solids

**Pressure** is the force acting normally (perpendicularly) per unit area:

$$P = \frac{F}{A}$$

SI unit: **Pascal (Pa)** where 1 Pa = 1 N/m²

- Pressure **increases** when force increases or area decreases
- This is why sharp knife blades, nails, and knives are thin — small area produces high pressure

### Worked Example
A 60 kg woman stands on one high-heel shoe with area 1 cm² = 10⁻⁴ m². Find the pressure on the floor.

$$P = \frac{F}{A} = \frac{mg}{A} = \frac{60 \times 10}{10^{-4}} = \textbf{6 × 10⁶ Pa = 6 MPa}$$

---

## Pressure in Liquids

Pressure at a depth $h$ in a liquid of density $\rho$:

$$P = h\rho g$$

Important properties:
- Pressure **increases with depth**
- Pressure **increases with liquid density**
- Pressure is the **same at the same depth** regardless of horizontal position
- Pressure is **independent of the shape or volume** of the container

### Worked Example
Find the pressure at a depth of 5 m in fresh water (density 1000 kg/m³). [g = 10 m/s²]

$$P = h\rho g = 5 \times 1000 \times 10 = \textbf{50,000 Pa = 50 kPa}$$

---

## Atmospheric Pressure

The atmosphere exerts pressure due to the weight of air above us:
- Standard atmospheric pressure: $P_0 \approx 1.013 \times 10^5$ Pa
- Equivalent to: **760 mmHg** (Torr) = 76 cm Hg

**Barometers** measure atmospheric pressure using a column of mercury.

---

## Archimedes' Principle

**Statement:** When a body is wholly or partially immersed in a fluid, it experiences an upward force (**upthrust**) equal to the weight of the fluid displaced.

$$\text{Upthrust} (U) = \rho_{fluid} \times V_{submerged} \times g$$

The apparent weight of a submerged object:
$$W_{apparent} = W_{actual} - U$$

---

## Floating and Sinking

| Condition | What Happens |
|---|---|
| Weight > Upthrust | Body **sinks** |
| Weight = Upthrust | Body **floats** (in equilibrium) |
| Weight < Upthrust | Body rises until partially submerged and floats |

A floating body displaces fluid equal to its **own weight** (not its volume).

For floating: average density of body ≤ density of fluid.

### Worked Example
A block weighs 50 N in air and 30 N when fully submerged in water. Find: (i) the upthrust, (ii) the volume of the block.

(i) $U = 50 - 30 = \textbf{20 N}$

(ii) $U = \rho_{water} \times V \times g \Rightarrow V = U/(\rho g) = 20/(1000 \times 10) = \textbf{2 × 10⁻³ m³ = 2 L}$

---

## EXAMINATION FOCUS

> 📌 **Key Things to Remember**
- Liquid pressure: P = hρg (depth × density × g)
- Upthrust = weight of fluid displaced
- Floating condition: Weight = Upthrust
- Relative density = no units (pure ratio)

> ⚠️ **Commonly Tested Areas**
- Calculating upthrust using Archimedes' Principle
- Finding apparent weight in liquid
- Floating and sinking conditions

> 🚫 **Common Mistakes**
- Saying pressure depends on volume/shape of container (it doesn't)
- Forgetting to subtract upthrust from weight to get apparent weight

---

## PRACTICE QUESTIONS

### Question 1 *(Exam-Style Question)*
A piece of metal weighs 80 N in air and 50 N when immersed in a liquid of density 800 kg/m³. What is the volume of the metal? [g = 10 m/s²]

- 3.75 × 10⁻³ m³
- 2.5 × 10⁻³ m³
- 6.25 × 10⁻³ m³
- 8 × 10⁻³ m³

**Answer:** 3.75 × 10⁻³ m³

**Explanation:** Upthrust = 80 – 50 = 30 N. V = U/(ρg) = 30/(800 × 10) = 30/8000 = **3.75 × 10⁻³ m³**.

---

### Question 2 *(Exam-Style Question)*
At what depth in water is the pressure equal to 2 × 10⁵ Pa? [g = 10 m/s², ρ_water = 1000 kg/m³]

- 2 m
- 10 m
- 20 m
- 200 m

**Answer:** 20 m

**Explanation:** $h = P/(\rho g) = 2\times10^5 / (1000 \times 10) = 200000/10000 = \textbf{20 m}$.`
  },

];
