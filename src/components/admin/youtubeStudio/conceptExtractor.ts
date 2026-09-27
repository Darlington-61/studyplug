import { LessonNote } from '../../../data/masterLessonNotes';
import { TopConcept } from './types';
import { analyzeSubjectAndTopic } from './subjectPedagogy';

/**
 * Subject-Agnostic Concept Extraction Engine
 * Intelligently extracts high-yield pedagogical concepts from StudyPlug notes,
 * syllabus subtopics, and official curriculum objectives across ALL 24 subjects.
 */
export function extractTopConcepts(
  subject: string,
  topic: string,
  subtopic: string,
  lessonNote: LessonNote | null,
  availableSubtopics: string[] = []
): TopConcept[] {
  const profile = analyzeSubjectAndTopic(subject, topic, availableSubtopics, lessonNote);
  const concepts: TopConcept[] = [];

  // 1. If available subtopics are provided from syllabus, use them to form comprehensive core concepts
  if (availableSubtopics && availableSubtopics.length > 0) {
    const relevantSubtopics = availableSubtopics.slice(0, 5);
    relevantSubtopics.forEach((sub, idx) => {
      let ruleOrFormula = '';
      let mistake = '';
      let example = '';

      if (profile.primaryModality === 'calculation_based') {
        ruleOrFormula = 'Governing Formula / Mathematical Theorem';
        mistake = 'Sign convention or calculation mistake';
        example = `Step-by-step numerical application of ${sub}`;
      } else if (profile.primaryModality === 'text_extract_based') {
        ruleOrFormula = 'Grammatical Concord / Literary Rule';
        mistake = profile.examinerTrapFocus;
        example = `Exam extract or sentence illustrating ${sub}`;
      } else if (profile.primaryModality === 'process_based') {
        ruleOrFormula = 'Process Sequence / Reaction Pathway';
        mistake = profile.examinerTrapFocus;
        example = `Standard laboratory or biological example of ${sub}`;
      } else {
        ruleOrFormula = 'Core Syllabus Principle & Standard Definition';
        mistake = profile.examinerTrapFocus;
        example = `Real-world or exam context for ${sub}`;
      }

      concepts.push({
        id: `concept-sub-${idx + 1}`,
        title: sub,
        explanation: lessonNote?.summary_60s
          ? `Detailed examination breakdown of ${sub}: ${lessonNote.summary_60s.slice(0, 140)}...`
          : `Core examination principles and high-frequency JAMB questions on ${sub}.`,
        ruleOrFormula,
        example,
        commonMistakes: [mistake],
        isSelected: true
      });
    });
  }

  // 2. If LessonNote key_terms are present and we still have room, add them
  if (concepts.length < 3 && lessonNote && (lessonNote as any).key_terms && Array.isArray((lessonNote as any).key_terms)) {
    (lessonNote as any).key_terms.slice(0, 4).forEach((term: string, idx: number) => {
      if (!concepts.some(c => c.title.toLowerCase() === term.toLowerCase())) {
        concepts.push({
          id: `concept-term-${idx + 1}`,
          title: term,
          explanation: `Fundamental examination definition and usage of ${term} in ${subject}.`,
          ruleOrFormula: profile.workedExampleType,
          example: `Standard ${subject} question application.`,
          commonMistakes: [profile.examinerTrapFocus],
          isSelected: true
        });
      }
    });
  }

  // 3. Extract from LessonNote content headings or key_formulas if concepts are few
  if (concepts.length < 3 && lessonNote) {
    if (lessonNote.key_formulas && lessonNote.key_formulas.trim().length > 5) {
      concepts.push({
        id: `concept-formulas`,
        title: profile.primaryModality === 'calculation_based' ? 'Governing Equations & Formulas' : 'Key Principles & Rules',
        explanation: lessonNote.key_formulas.slice(0, 180),
        ruleOrFormula: lessonNote.key_formulas.slice(0, 100),
        example: 'Direct application in solving standard exam problems',
        commonMistakes: [profile.examinerTrapFocus],
        isSelected: true
      });
    }

    if (lessonNote.pro_tips_95 && lessonNote.pro_tips_95.trim().length > 5) {
      concepts.push({
        id: `concept-tips`,
        title: 'High-Scoring Examiner Tips & Pitfalls',
        explanation: lessonNote.pro_tips_95.slice(0, 180),
        ruleOrFormula: 'Examiner Distractor Elimination Rule',
        example: 'Avoiding subtle traps that catch average candidates',
        commonMistakes: [profile.examinerTrapFocus],
        isSelected: true
      });
    }
  }

  // 4. Ensure at least 3-4 robust, subject-appropriate concepts
  if (concepts.length < 3) {
    const fallbacks = [
      {
        title: `Foundations & Definitions of ${subtopic || topic}`,
        explanation: `The foundational principles and standard examiner keywords defining ${subtopic || topic} in ${subject}.`,
        ruleOrFormula: 'Official Syllabus Standard',
        example: `Core definition tested in JAMB UTME.`,
        commonMistakes: [`Vague definitions lacking essential examiner keywords`],
        isSelected: true
      },
      {
        title: `Governing Principles & ${profile.workedExampleType.split('&')[0]}`,
        explanation: `Detailed breakdown of how ${topic} operates, including structural mechanisms, equations, or rules.`,
        ruleOrFormula: profile.primaryModality === 'calculation_based' ? 'Standard Governing Formula' : 'Core Mechanism / Rule',
        example: `Step-by-step application of principles to authentic scenarios.`,
        commonMistakes: [profile.examinerTrapFocus],
        isSelected: true
      },
      {
        title: `Examiner Distractor Traps & Shortcuts`,
        explanation: `The most common traps set by JAMB examiners on ${topic}, and how to spot correct options in seconds.`,
        ruleOrFormula: 'Speed Drill Elimination Shortcut',
        example: `Eliminating closely related distractors.`,
        commonMistakes: [`Rushing without checking all 4 options`],
        isSelected: true
      }
    ];

    fallbacks.forEach((fb, i) => {
      if (concepts.length < 4) {
        concepts.push({
          id: `concept-fb-${i + 1}`,
          ...fb
        });
      }
    });
  }

  return concepts;
}
