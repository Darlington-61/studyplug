/**
 * StudyPlug Lesson Parser
 * Converts a LessonNote.content markdown string into structured LessonBlock[]
 * that the LessonPresenter can render as interactive slides.
 */

export type BlockType =
  | 'intro'
  | 'teaching'
  | 'definition'
  | 'formula'
  | 'worked_example'
  | 'exam_alert'
  | 'comparison'
  | 'quick_check'
  | 'practice'
  | 'summary';

export interface QuickCheckOption {
  key: string;
  text: string;
}

export interface LessonBlock {
  id: string;
  type: BlockType;
  sectionIndex: number;    // which ## heading group this belongs to
  sectionTitle: string;    // cleaned ## heading title
  title?: string;          // ### sub-heading if present
  content: string;         // markdown body
  question?: string;
  options?: QuickCheckOption[];
  answer?: string;
  explanation?: string;
  difficulty?: 'Basic' | 'Standard' | 'JAMB' | 'Challenging';
}

const clean = (s: string) =>
  s.replace(/^#{1,4}\s+/, '').replace(/\*\*/g, '').trim();

/**
 * Detect the block type from a ### sub-heading title
 */
function detectSubType(title: string): BlockType {
  const t = title.toLowerCase();
  if (t.includes('formula') || t.includes('equation'))     return 'formula';
  if (t.includes('worked example') || t.includes('example') || t.includes('solution')) return 'worked_example';
  if (t.includes('definition') || t.includes('what it means')) return 'definition';
  if (t.includes('comparison') || t.includes('difference') || t.includes('vs ')) return 'comparison';
  if (t.includes('question') || t.includes('practice') || t.includes('quick check')) return 'quick_check';
  if (t.includes('examination focus') || t.includes('exam focus') || t.includes('key points') || t.includes('summary')) return 'summary';
  return 'teaching';
}

/**
 * Detect block type from a blockquote line
 */
function detectAlertType(line: string): BlockType | null {
  const t = line.toLowerCase();
  if (t.includes('⚠️') || t.includes('trap') || t.includes('common mistake') || t.includes('jamb alert') || t.includes('waec alert')) return 'exam_alert';
  if (t.includes('📌') || t.includes('key thing') || t.includes('remember') || t.includes('🎯')) return 'exam_alert';
  return null;
}

/**
 * Try to parse a MCQ block from content string.
 * Returns {question, options, answer, explanation} or null.
 */
function parseMCQ(text: string): { question: string; options: QuickCheckOption[]; answer: string; explanation: string } | null {
  // Look for lines that look like options: "- A. something" or "* A " or "○ A"
  const optionRegex = /^[-*○•]\s*([A-D])[.\)]\s+(.+)$/m;
  const answerRegex = /\*{0,2}(?:answer|correct)[^:]*:?\*{0,2}\s*\*{0,2}([A-D])\b/i;
  const explRegex   = /\*{0,2}(?:explanation|why|solution)[^:]*:\*{0,2}\s*(.+)/is;

  const optionMatches = [...text.matchAll(/^[-*○•]\s*([A-D])[.\)]\s+(.+)$/gm)];
  if (optionMatches.length < 2) return null;

  const options: QuickCheckOption[] = optionMatches.map(m => ({ key: m[1], text: m[2].trim() }));
  const answerMatch = text.match(answerRegex);
  const explMatch   = text.match(explRegex);

  // Question text = everything before the first option line
  const firstOptIdx = text.indexOf(optionMatches[0][0]);
  const question = text.slice(0, firstOptIdx).replace(/^#{1,4}\s*.*\n?/,'').trim();

  if (!question || !answerMatch) return null;

  return {
    question,
    options,
    answer: answerMatch[1].toUpperCase(),
    explanation: explMatch ? explMatch[1].trim() : '',
  };
}

/**
 * Main parser: splits content into LessonBlocks
 */
export function parseLessonContent(content: string, topicTitle: string): LessonBlock[] {
  if (!content) return [];

  const lines = content.split('\n');
  const blocks: LessonBlock[] = [];
  let blockId = 0;

  const hasH2 = content.includes('\n## ') || content.startsWith('## ');

  let currentSection = 0;
  let currentSectionTitle = topicTitle;
  let currentTitle = '';
  let currentLines: string[] = [];
  let currentType: BlockType = 'teaching';
  let inFirstH1 = true;

  const flushBlock = () => {
    const body = currentLines.join('\n').trim();
    if (!body) return;

    const id = `block-${++blockId}`;

    // Try to parse as MCQ if type suggests it
    if (currentType === 'quick_check' || currentType === 'practice') {
      const mcq = parseMCQ(body);
      if (mcq) {
        let difficulty: LessonBlock['difficulty'] = 'Standard';
        const t = (currentTitle + body).toLowerCase();
        if (t.includes('jamb')) difficulty = 'JAMB';
        else if (t.includes('challenging') || t.includes('hard')) difficulty = 'Challenging';
        else if (t.includes('basic') || t.includes('easy')) difficulty = 'Basic';

        blocks.push({
          id,
          type: 'quick_check',
          sectionIndex: currentSection,
          sectionTitle: currentSectionTitle,
          title: currentTitle || 'Practice Question',
          content: body,
          question: mcq.question,
          options: mcq.options,
          answer: mcq.answer,
          explanation: mcq.explanation,
          difficulty,
        });
        currentLines = [];
        currentTitle = '';
        return;
      }
    }

    blocks.push({
      id,
      type: currentType,
      sectionIndex: currentSection,
      sectionTitle: currentSectionTitle,
      title: currentTitle || undefined,
      content: body,
    });
    currentLines = [];
    currentTitle = '';
  };

  for (const line of lines) {
    // H1 — topic title
    if (line.match(/^#\s+/)) {
      if (inFirstH1 && currentLines.length === 0) {
        currentTitle = clean(line);
        inFirstH1 = false;
        continue;
      }
    }

    // H2 — major section boundary (Creates a new rich comprehensive slide!)
    if (line.match(/^##\s+/)) {
      flushBlock();
      currentSection++;
      currentSectionTitle = clean(line);
      currentTitle = '';
      const t = currentSectionTitle.toLowerCase();
      if (t.includes('examination') || t.includes('exam focus') || t.includes('summary')) {
        currentType = 'summary';
      } else if (t.includes('practice') || t.includes('question')) {
        currentType = 'practice';
      } else {
        currentType = 'teaching';
      }
      currentLines = [];
      continue;
    }

    // If there are NO H2 headings in the entire content, split on H3
    if (!hasH2 && line.match(/^###\s+/)) {
      flushBlock();
      currentSection++;
      currentSectionTitle = clean(line);
      currentTitle = clean(line);
      currentType = detectSubType(currentTitle);
      currentLines = [];
      continue;
    }

    currentLines.push(line);
  }

  // Flush last block
  flushBlock();

  // If we only got one giant block, split it better
  if (blocks.length <= 1) {
    return fallbackSplit(content, topicTitle);
  }

  return blocks;
}

/**
 * Fallback: split by ## headings when the content is one giant block
 */
function fallbackSplit(content: string, topicTitle: string): LessonBlock[] {
  const sections = content.split(/\n(?=##\s)/);
  return sections.map((sec, i) => ({
    id: `block-${i + 1}`,
    type: i === 0 ? 'intro' : ('teaching' as BlockType),
    sectionIndex: i,
    sectionTitle: i === 0 ? topicTitle : clean(sec.split('\n')[0]),
    content: sec.trim(),
  }));
}

/**
 * Group blocks into sections (by sectionIndex) for the lesson outline
 */
export interface LessonSection {
  index: number;
  title: string;
  blocks: LessonBlock[];
  estimatedMinutes: number;
  hasFormulas: boolean;
  hasQuestions: boolean;
  hasAlerts: boolean;
}

export function groupIntoSections(blocks: LessonBlock[]): LessonSection[] {
  const map = new Map<number, LessonBlock[]>();
  for (const b of blocks) {
    if (!map.has(b.sectionIndex)) map.set(b.sectionIndex, []);
    map.get(b.sectionIndex)!.push(b);
  }
  return Array.from(map.entries()).map(([idx, bks]) => {
    const wordCount = bks.reduce((s, b) => s + (b.content?.split(' ').length ?? 0), 0);
    return {
      index: idx,
      title: bks[0].sectionTitle,
      blocks: bks,
      estimatedMinutes: Math.max(1, Math.round(wordCount / 200)),
      hasFormulas:   bks.some(b => b.type === 'formula' || b.content?.includes('$$')),
      hasQuestions:  bks.some(b => b.type === 'quick_check' || b.type === 'practice'),
      hasAlerts:     bks.some(b => b.type === 'exam_alert'),
    };
  });
}
