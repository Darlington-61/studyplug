import { LessonNote } from '../../../data/masterLessonNotes';
import { TopConcept } from './types';

/**
 * Intelligently extracts the highest-value concepts from StudyPlug notes
 * for structured 12-minute video masterclasses.
 */
export function extractTopConcepts(
  subject: string,
  topic: string,
  subtopic: string,
  lessonNote: LessonNote | null
): TopConcept[] {
  const sLow = subject.toLowerCase();
  const tLow = (topic || '').toLowerCase();

  // 1. Exact Motion Master Concepts for Physics
  if (sLow.includes('phys') && tLow.includes('motion')) {
    return [
      {
        id: 'concept-1',
        title: 'Distance and Displacement',
        explanation: 'Distance is the total path length traveled (scalar), while displacement is the distance in a specified straight direction (vector).',
        ruleOrFormula: 'Displacement s = x₂ - x₁ [Meters (m)]',
        example: 'Walking 4m North then 3m East gives distance = 7m, but displacement = 5m (North-East).',
        commonMistakes: ['Treating displacement as scalar without direction', 'Confusing total distance with shortest displacement'],
        isSelected: true
      },
      {
        id: 'concept-2',
        title: 'Speed and Velocity',
        explanation: 'Speed is rate of change of distance (scalar), while velocity is rate of change of displacement in a given direction (vector).',
        ruleOrFormula: 'v = s / t [m/s]',
        example: 'A car traveling 100m in 5 seconds has velocity = 20 m/s.',
        commonMistakes: ['Using km/h directly in calculations without converting to m/s (multiply by 5/18)', 'Ignoring negative velocity in opposite directions'],
        isSelected: true
      },
      {
        id: 'concept-3',
        title: 'Acceleration & Deceleration',
        explanation: 'The rate of change of velocity with respect to time. A decrease in velocity is called deceleration or retardation (negative acceleration).',
        ruleOrFormula: 'a = (v - u) / t [m/s²]',
        example: 'A vehicle accelerating from 10 m/s to 30 m/s in 4 seconds: a = (30 - 10) / 4 = 5 m/s².',
        commonMistakes: ['Omitting the negative sign during deceleration', 'Confusing acceleration with velocity'],
        isSelected: true
      },
      {
        id: 'concept-4',
        title: 'Motion Graphs (v-t & s-t Graphs)',
        explanation: 'Graphical representations of motion. In velocity-time graphs: Slope = Acceleration, Area under curve = Distance traveled.',
        ruleOrFormula: 'Slope = dv/dt = a; Area = ½(a + b)h = Distance',
        example: 'Trapezium area under v-t graph represents the total distance covered by the vehicle.',
        commonMistakes: ['Confusing the area under displacement-time graph with velocity (Slope of s-t graph is velocity, not area)', 'Miscalculating trapezium heights'],
        isSelected: true
      },
      {
        id: 'concept-5',
        title: 'Equations of Uniform Motion',
        explanation: 'The four governing kinematic formulas for linear motion under uniform acceleration and motion under gravity.',
        ruleOrFormula: 'v = u + at | s = ut + ½at² | v² = u² + 2as | s = ½(u + v)t',
        example: 'Free fall under gravity: u = 0, a = g = 10 m/s², maximum height v = 0.',
        commonMistakes: ['Choosing the wrong equation when time t is not given (use v² = u² + 2as)', 'Forgetting g is negative for upward vertical motion'],
        isSelected: true
      }
    ];
  }

  const concepts: TopConcept[] = [];

  // 2. Extract from LessonNote key_terms if available
  if (lessonNote && lessonNote.key_terms && lessonNote.key_terms.length > 0) {
    lessonNote.key_terms.slice(0, 5).forEach((term, idx) => {
      let formula = 'Governing Equation / Law';
      let example = `Application of ${term} in ${subject} exams.`;
      let mistakes: string[] = ['Unit or terminology mismatch'];

      if (sLow.includes('phys')) {
        formula = 'SI Unit: Standard MKS system';
        mistakes = ['Failure to convert non-standard units to SI units'];
      } else if (sLow.includes('math')) {
        formula = 'Theorem & Calculation Rule';
        mistakes = ['Sign change errors during algebraic manipulation'];
      } else if (sLow.includes('chem')) {
        formula = 'Mole Ratio & Reaction Formula';
        mistakes = ['Unbalanced chemical equations in stoichiometric calculations'];
      } else if (sLow.includes('bio')) {
        formula = 'Biological Classification & Process';
        mistakes = ['Mislabeling cellular structures or organ functions'];
      }

      concepts.push({
        id: `concept-${idx + 1}`,
        title: term,
        explanation: `Comprehensive examination breakdown of ${term} for ${subject} candidates.`,
        ruleOrFormula: formula,
        example,
        commonMistakes: mistakes,
        isSelected: true
      });
    });
  }

  // 3. Fallback: Ensure at least 4 well-structured concepts
  if (concepts.length < 4) {
    const defaultList = [
      {
        title: `Core Principles of ${subtopic || topic}`,
        explanation: `The foundational law and theoretical principles governing ${subtopic || topic} in ${subject}.`,
        ruleOrFormula: 'Primary Syllabus Definition',
        example: 'Core experimental and theoretical observation.',
        commonMistakes: ['Vague definitions without essential examiner keywords'],
        isSelected: true
      },
      {
        title: `Governing Equations & Formulas`,
        explanation: `Essential algebraic equations required for solving both UTME objective and WAEC theory questions.`,
        ruleOrFormula: 'Standard Governing Equation',
        example: 'Step 1: Extract given data. Step 2: State formula. Step 3: Substitute.',
        commonMistakes: ['Arithmetic errors during equation substitution'],
        isSelected: true
      },
      {
        title: `Examiner Pitfalls & Traps`,
        explanation: `Subtle distinctions and tricky question variants where candidates frequently forfeit avoidable marks.`,
        ruleOrFormula: 'Carefully verify distractors in options',
        example: 'Distinguishing between closely related scientific concepts.',
        commonMistakes: ['Rushing through question options without checking all distractors'],
        isSelected: true
      },
      {
        title: `Authentic Examination Applications`,
        explanation: `How this topic is structured across past JAMB, WAEC, and NECO examination series.`,
        ruleOrFormula: 'Method Marks + Answer Marks + Unit Marks',
        example: 'Solving past exam numerical and structural problems.',
        commonMistakes: ['Omitting final SI units in written answers'],
        isSelected: true
      }
    ];

    defaultList.forEach((dc, i) => {
      if (concepts.length < 4) {
        concepts.push({
          id: `concept-default-${i + 1}`,
          ...dc
        });
      }
    });
  }

  return concepts;
}
