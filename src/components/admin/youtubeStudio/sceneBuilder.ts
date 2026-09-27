import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import {
  ScriptSection,
  VideoScene,
  YouTubeSeoData,
  CostEstimate,
  VideoPlanSummary,
  TitleOption,
  VideoType,
  VideoAspectRatio
} from './types';

/**
 * Maps subject name to subject theme for visual rendering
 */
function getSubjectTheme(subject: string): VideoScene['subjectTheme'] {
  const s = subject.toLowerCase();
  if (s.includes('phys')) return 'physics';
  if (s.includes('math')) return 'mathematics';
  if (s.includes('chem')) return 'chemistry';
  if (s.includes('bio')) return 'biology';
  if (s.includes('lit')) return 'literature';
  if (s.includes('eng')) return 'english';
  if (s.includes('comm') || s.includes('acc') || s.includes('econ')) return 'commercial';
  return 'general';
}

/**
 * Converts script sections into structured visual scenes for rendering
 */
export function buildVideoScenes(
  scriptSections: ScriptSection[],
  subject: string = 'Physics',
  aspectRatio: VideoAspectRatio = '16:9'
): VideoScene[] {
  const totalDuration = scriptSections.reduce((acc, s) => acc + (s.durationSeconds || 20), 0);
  let accumulatedTime = 0;
  const theme = getSubjectTheme(subject);

  return scriptSections.map((sec, idx) => {
    accumulatedTime += sec.durationSeconds || 20;
    const progressPercent = Math.min(100, Math.round((accumulatedTime / totalDuration) * 100));

    let sceneType: VideoScene['sceneType'] = 'concept';
    let visualType: VideoScene['visualType'] = 'split';

    if (sec.type === 'hook') {
      sceneType = 'hook';
      visualType = 'hero_card';
    } else if (sec.type === 'objectives') {
      sceneType = 'objectives';
      visualType = 'chalkboard';
    } else if (sec.type === 'top_concept') {
      sceneType = 'concept';
      visualType = 'split';
    } else if (sec.type === 'worked_example') {
      sceneType = 'example';
      visualType = 'equation_reveal';
    } else if (sec.type === 'past_question') {
      sceneType = 'question';
      visualType = 'cbt_terminal';
    } else if (sec.type === 'solution_breakdown') {
      sceneType = 'solution';
      visualType = 'chalkboard';
    } else if (sec.type === 'exam_tips') {
      sceneType = 'exam_tip';
      visualType = 'chalkboard';
    } else if (sec.type === 'cta') {
      sceneType = 'cta';
      visualType = 'hero_card';
    }

    const keyPoints = (sec.onScreenText || '')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0 && !line.startsWith('STUDYPLUG'));

    return {
      sceneId: `scene-${idx + 1}`,
      sceneType,
      duration: sec.durationSeconds || 20,
      durationSeconds: sec.durationSeconds || 20,
      visualType,
      subjectTheme: theme,
      title: sec.title,
      subtitle: sec.type === 'past_question' ? `${sec.questionData?.exam || ''} ${sec.questionData?.year || ''}` : undefined,
      onScreenText: sec.onScreenText,
      narrationText: sec.narrationText || sec.spokenNarration,
      questionId: sec.questionData?.id,
      keyPoints: keyPoints.slice(0, 5),
      calculationSteps: sec.calculationSteps,
      questionData: sec.questionData,
      diagramId: sec.diagramId,
      diagramSvg: sec.questionData?.image_svg,
      timerSeconds: sec.timerDurationSeconds || 5,
      animation: idx % 2 === 0 ? 'step_reveal' : 'fade',
      transition: 'crossfade',
      progressPercent
    };
  });
}

/**
 * Automatically generates 3 title options, YouTube description, chapters, and pinned comment
 */
export function generateYouTubeSeo(options: {
  exam: string;
  subject: string;
  topic: string;
  subtopic: string;
  scenes: VideoScene[];
  videoType: VideoType;
  questionCount?: number;
}): YouTubeSeoData {
  const { exam, subject, topic, subtopic, scenes, videoType, questionCount = 5 } = options;

  // 1. Generate 3 YouTube Title Options
  const titleOptions: TitleOption[] = [
    {
      id: 'opt-1',
      title: `${exam} ${subject}: ${topic} Explained + ${questionCount} Past Questions | StudyPlug`,
      style: 'Direct & Comprehensive',
      isRecommended: true
    },
    {
      id: 'opt-2',
      title: `${topic} in ${subject} Made Easy | ${exam} Past Questions Solved Step-by-Step`,
      style: 'High Click-Through & Student-Friendly'
    },
    {
      id: 'opt-3',
      title: `Master ${topic} for ${exam} ${subject}: Concepts, Formulas & Exam Traps`,
      style: 'Academic & Examination Focused'
    }
  ];

  const primaryTitle = titleOptions[0].title;

  // 2. Chapters (Calculated dynamically from real scenes)
  const chapters: YouTubeSeoData['chapters'] = [];
  let currentSecond = 0;

  scenes.forEach(scene => {
    const mins = Math.floor(currentSecond / 60);
    const secs = currentSecond % 60;
    const timestamp = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Clean chapter title
    let cleanTitle = scene.title
      .replace(/^\d{2}:\d{2}\s*/, '')
      .replace(/Question \d+/, 'Past Question');

    chapters.push({
      timestamp,
      seconds: currentSecond,
      title: cleanTitle
    });

    currentSecond += scene.durationSeconds;
  });

  // 3. YouTube Description
  const chaptersText = chapters.map(c => `${c.timestamp} ${c.title}`).join('\n');
  const description = `Master ${topic} (${subtopic || topic}) for your upcoming ${exam} examination with official StudyPlug syllabus notes, progressive formula derivations, and verified past questions.

📚 CHAPTER TIMESTAMPS:
${chaptersText}

🎯 IN THIS 12-MINUTE MASTERCLASS:
• Core syllabus concepts and foundational laws
• Step-by-step worked numerical calculations
• ${questionCount} authentic ${exam} past questions solved with 5s thinking timers
• 3 common examiner traps and time-saving shortcuts

🚀 PRACTICE CBT DRILLS:
Take timed CBT mock exams and practice 50,000+ past questions with instant grading and AI tutoring at:
👉 https://studyplug.com.ng

📲 DOWNLOAD STUDYPLUG APP:
• Android APK: https://studyplug.com.ng/StudyPlug.apk
• iOS App Store: https://apps.apple.com/app/studyplug

🔔 SUBSCRIBE & HIT THE BELL ICON:
Subscribe to StudyPlug for daily JAMB, WAEC, NECO, and BECE tutorials!
"Learn it. Practice it. Master it."

#${exam} #${exam}${subject.replace(/\s+/g, '')} #${subject.replace(/\s+/g, '')} #StudyPlug #CBT #NigerianStudents`;

  // 4. Pinned Comment
  const pinnedComment = `📌 QUICK CHECK: What was your score on the past questions solved in this video? Drop your score below! 👇

If you want to practice 50+ more verified ${exam} questions on ${topic} with instant CBT timer and AI Tutor explanations, practice free here:
👉 https://studyplug.com.ng

Subscribe for tomorrow's masterclass! 🎓✨`;

  // 5. Tags & Hashtags
  const tags = [
    exam,
    `${exam} ${subject}`,
    `${subject} ${topic}`,
    `${topic} explained`,
    `${exam} past questions`,
    `WAEC ${subject}`,
    `JAMB ${subject}`,
    'StudyPlug',
    'Nigerian secondary school',
    'SSCE preparation',
    'UTME practice',
    'CBT exam drill'
  ];

  const hashtags = [
    `#${exam}`,
    `#${subject.replace(/\s+/g, '')}`,
    `#${topic.replace(/\s+/g, '')}`,
    '#StudyPlug',
    '#WAEC',
    '#JAMB'
  ];

  return {
    title: primaryTitle,
    titleOptions,
    description,
    tags,
    hashtags,
    chapters,
    pinnedComment
  };
}

/**
 * Calculates comprehensive 12-minute video plan summary
 */
export function calculateVideoPlan(
  scenes: VideoScene[],
  scriptSections: ScriptSection[],
  questionCount: number,
  conceptsCount: number,
  voiceProfileName: string = 'Dr. Adebayo (Senior Physics Examiner)'
): VideoPlanSummary {
  const totalSeconds = scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
  const durationMinutes = Math.floor(totalSeconds / 60);
  const remainingSecs = totalSeconds % 60;
  const formattedDuration = `${durationMinutes} min ${remainingSecs} sec`;

  const totalWords = scriptSections.reduce((words, sec) => {
    const text = sec.narrationText || sec.spokenNarration || '';
    return words + (text.trim() ? text.trim().split(/\s+/).length : 0);
  }, 0);

  return {
    targetDurationMinutes: 12,
    estimatedDurationSeconds: totalSeconds,
    formattedDuration,
    totalScenes: scenes.length,
    totalQuestions: questionCount,
    topConceptsCount: conceptsCount,
    voiceoverWordCount: totalWords,
    voiceProvider: 'Voicebox AI (Cloned Voice)',
    voiceProfile: voiceProfileName
  };
}

/**
 * Calculates generation cost in Nigerian Naira
 */
export function calculateCostEstimate(scenes: VideoScene[], scriptSections: ScriptSection[]): CostEstimate {
  const totalSeconds = scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
  const durationMinutes = Number((totalSeconds / 60).toFixed(1));

  const totalWords = scriptSections.reduce((words, sec) => {
    const text = sec.narrationText || sec.spokenNarration || '';
    return words + (text.trim() ? text.trim().split(/\s+/).length : 0);
  }, 0);

  // Rate calculations in Nigerian Naira (₦)
  const voiceNaira = Math.round(totalWords * 1.5);
  const visualNaira = scenes.length * 180;
  const renderingNaira = 200 + (scenes.length * 50);
  const totalNaira = voiceNaira + visualNaira + renderingNaira;

  return {
    durationMinutes,
    durationSeconds: totalSeconds,
    totalWords,
    voiceNaira,
    visualNaira,
    renderingNaira,
    totalNaira
  };
}
