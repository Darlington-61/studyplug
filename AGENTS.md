# StudyPlug Agent Architecture & Anti-AI-Slop Manifesto (AGENTS.md)

> *"Repeat this loop for every feature in your app and watch the AI slop disappear:*  
> *1. Add primitives*  
> *2. Add skills*  
> *3. Implement the feature using skills*  
> *Eventually, your codebase becomes the primitive, and your AGENTS.md the skill itself."*

---

## 🏛️ § 1. The Primitive Layer (StudyPlug Building Blocks)

All AI agents, engineers, and contributors MUST build exclusively with these verified primitives. **Never generate raw, ad-hoc, un-tokenized UI elements, dummy multiple-choice options, or generic textbook slop.**

### 1.1 UI & Component Primitives (`src/components/design-system/` & `src/components/common/`)
| Primitive | Purpose | Location |
| :--- | :--- | :--- |
| `ScientificDiagramViewer` | Interactive dark-canvas vector diagrams with zoom, live pulse animations, and clickable anatomical/scientific callouts | `src/components/common/ScientificDiagramViewer.tsx` |
| `EducationalDiagram` | Responsive textbook SVG diagrams with formula summary cards across 25+ subject domains | `src/components/design-system/EducationalDiagram.tsx` |
| `RichNoteRenderer` | Mathematical & scientific note renderer supporting KaTeX formulas, tables, and clean sanitized markup | `src/components/common/RichNoteRenderer.tsx` |
| `QuestionCard` | Canonical multiple-choice CBT question card with instant feedback, option tags (A-D), and explanations | `src/components/design-system/QuestionCard.tsx` |
| `InlineInteractiveQuestionCard` | In-note interactive drill items allowing instant comprehension checks | `src/components/common/InlineInteractiveQuestionCard.tsx` |
| `TheoryAnswerMarkerModal` | WAEC/NECO Paper 2 essay & theory self-marking rubric modal with marking schemes | `src/components/TheoryAnswerMarkerModal.tsx` |
| `TopicCard` / `ResourceCard` | Canonical card primitives for syllabus modules and learning assets | `src/components/design-system/` |
| `BrandLogo` | Official StudyPlug logo with vector shield and book emblem | `src/components/common/BrandLogo.tsx` |

### 1.2 Data Primitives (`src/data/`)
* **`Question` (`src/data/questions.ts`)**:
  * Strict multiple-choice CBT object:
    ```typescript
    interface Question {
      id: number;
      subject: string;
      examType: 'JAMB' | 'WAEC' | 'NECO' | 'BECE' | 'IELTS';
      year: number;
      question: string;
      options: [string, string, string, string]; // Strictly 4 options
      correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
      explanation: string;
      paperType: 'OBJ'; // STRICTLY 'OBJ' for CBT practice
    }
    ```
* **`TheoryQuestion` (`src/data/theoryQuestions.ts`)**:
  * Multi-part essay/practical questions with complete step-by-step marking schemes (`paperType: 'Theory'`). Strictly excluded from multiple-choice CBT practice modes.
* **`LessonNote` (`src/data/masterLessonNotes.ts`)**:
  * Curriculum-aligned senior secondary lesson notes:
    ```typescript
    interface LessonNote {
      id: number;
      subject: string;
      exam_type: string;
      class_level: string;
      topic: string;
      subtopic: string;
      summary_60s: string;
      key_formulas: string; // Authentic formulas & equations (NEVER empty)
      content: string; // Rich teaching body with worked exam questions
      pro_tips_95: string; // WAEC/JAMB Chief Examiner strategies & pitfalls
      syllabus_objectives: string;
    }
    ```
* **`ScientificDiagram` (`src/data/scientificDiagrams.tsx`)**:
  * High-definition, strictly matched SVG schematics with descriptive interactive label pins.

---

## 🧠 § 2. The Skill Layer (Architectural Rules & Invariants)

### Rule 1: Zero AI Slop in Lesson Notes
* **No Generic Placeholders**: Notes must NEVER contain placeholder text like `"Official JAMB & WAEC Syllabus Concept: Focus on core definitions"`. Every note must contain authentic Chief Examiner scoring insights, unit pitfalls, and exam traps.
* **No Kinematics Fallback for Non-Physics Subjects**: `key_formulas` must be populated with authentic subject-matter formulas (e.g., quadratic formula for Math, Faraday's laws for Chem, Hardy-Weinberg for Bio, PED for Econ).
* **Authentic Worked Examples**: Include real WAEC WASSCE & JAMB UTME past questions with complete, step-by-step mathematical/scientific calculations:
  * *Step 1: State the formula and identify given parameters.*
  * *Step 2: Substitute values with correct units (e.g. convert °C to Kelvin).*
  * *Step 3: Calculate the final numerical answer with standard units.*

### Rule 2: Zero Low-Res Base64 or Broken Images
* **Strict Vector SVG Policy**: Never scrape or paste grainy base64 thumbnails (`data:image/jpeg;base64,...`).
* All diagrams must be rendered either as responsive inline SVGs or matched via `ScientificDiagramViewer` and `EducationalDiagram`.
* Every diagram must feature clean geometric vector shapes, legible high-contrast labels, and clear annotations.

### Rule 3: Strict Separation of OBJ and Theory
* Never allow Paper 2 Theory essay questions to appear in multiple-choice CBT exams with dummy options.
* All CBT exam queries MUST pass through `paperType === 'OBJ'` filtering in `allQuestionsHub.ts`.

### Rule 4: Nigerian Curriculum & Authentic Exam Fidelity
* Content must strictly align with the official Nigerian curricula (JAMB UTME, WAEC WASSCE, NECO SSCE, BECE).
* International modules (e.g., IELTS) must strictly adhere to official Cambridge/British Council 4-module standards (Academic & General Training).

### Rule 5: Production Build & Deployment Pipeline
Always verify build integrity through the official pipeline:
1. `npm run bundle` — Compiles standalone zero-dependency distribution (`standalone.js` + `standalone.html`).
2. `node deploy_live.cjs` — Deploys via cPanel API to `https://studyplug.com.ng` and verifies HTTP 200 OK.

---

## 🔄 § 3. The Feature Implementation Loop

When adding ANY new feature, subject, quiz module, or screen to StudyPlug:

```
┌────────────────────────────────────────────────────────┐
│  1. ADD PRIMITIVES                                     │
│     • Define component primitive in design-system      │
│     • Define TypeScript interface in data/             │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  2. ENFORCE SKILL IN AGENTS.MD                         │
│     • Document the invariant and expected behavior     │
│     • Set validation rules and examiner standards      │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  3. IMPLEMENT FEATURE VIA SKILL                        │
│     • Assemble exclusively using primitives            │
│     • Zero AI slop, zero broken bitmaps, full fidelity │
└────────────────────────────────────────────────────────┘
```
