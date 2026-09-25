import { Question } from '../data/questions';

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  imageUrl?: string;
  timestamp: number;
}

export interface AiModelConfig {
  id: string;
  name: string;
  sizeMb: number;
  description: string;
  recommendedFor: string;
}

export const SUPPORTED_OFFLINE_MODELS: AiModelConfig[] = [
  {
    id: 'SmolLM2-360M-Instruct-q4f16_1-MLC',
    name: 'PlugAI Lite Turbo (Ultra-Fast)',
    sizeMb: 195,
    description: 'Instant download, zero lag, minimal RAM. Perfect for fast definitions, formulas, and syllabus hints on mobile.',
    recommendedFor: 'Mobile Phones & Instant Speed'
  },
  {
    id: 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC',
    name: 'PlugAI Pro Reasoning (Math & Science)',
    sizeMb: 360,
    description: 'Specialized deep-thinking engine for step-by-step calculations, physics proofs, and detailed theory solutions.',
    recommendedFor: 'Calculations, Science & Complex Working'
  }
];

export interface AiEngineStatus {
  hasWebGpu: boolean;
  isModelCached: boolean;
  isDownloading: boolean;
  downloadProgress: number; // 0 - 100
  downloadStatusText: string;
  activeModelId: string | null;
}

class AiTutorService {
  private engine: any = null;
  private isInitializing: boolean = false;
  private currentProgress: number = 0;
  private currentStatusText: string = '';

  /**
   * Check whether WebGPU is supported on this browser/device
   */
  public async isWebGpuAvailable(): Promise<boolean> {
    try {
      if (typeof navigator !== 'undefined' && 'gpu' in navigator && (navigator as any).gpu) {
        const adapter = await (navigator as any).gpu.requestAdapter();
        return !!adapter;
      }
    } catch (e) {
      console.warn('WebGPU check failed:', e);
    }
    return false;
  }

  /**
   * Check if a specific model is already cached in browser storage
   */
  public async isModelCached(modelId: string = 'SmolLM2-360M-Instruct-q4f16_1-MLC'): Promise<boolean> {
    try {
      if (typeof window !== 'undefined' && 'caches' in window) {
        const cacheKeys = await window.caches.keys();
        return cacheKeys.some(key => key.includes('webllm') || key.includes(modelId));
      }
    } catch (e) {
      console.warn('Cache check failed:', e);
    }
    return false;
  }

  /**
   * Initialize WebLLM in the browser and download/stream model weights
   */
  public async initOfflineModel(
    modelId: string = 'SmolLM2-360M-Instruct-q4f16_1-MLC',
    onProgress?: (progress: number, text: string) => void
  ): Promise<boolean> {
    if (this.engine) return true;
    if (this.isInitializing) return false;

    this.isInitializing = true;
    try {
      // Dynamically import WebLLM from local package or CDN
      const dynamicImport = new Function('specifier', 'return import(specifier)');
      let webllm: any;
      try {
        webllm = await dynamicImport('@mlc-ai/web-llm');
      } catch (e) {
        try {
          webllm = await dynamicImport('https://esm.run/@mlc-ai/web-llm');
        } catch (e2) {
          webllm = await dynamicImport('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm/+esm');
        }
      }

      if (!webllm) {
        throw new Error('Could not load WebLLM module in browser');
      }

      const initProgressCallback = (report: { progress: number; text: string }) => {
        const pct = Math.round(report.progress * 100);
        this.currentProgress = pct;
        this.currentStatusText = report.text;
        if (onProgress) {
          onProgress(pct, report.text);
        }
      };

      this.engine = await webllm.CreateMLCEngine(modelId, {
        initProgressCallback,
        logLevel: 'INFO'
      });

      this.isInitializing = false;
      return true;
    } catch (err: any) {
      this.isInitializing = false;
      console.warn('Failed to initialize WebLLM engine:', err);
      throw err;
    }
  }

  /**
   * Query the Offline Neural AI with streaming response
   */
  public async askOfflineNeural(
    messages: { role: 'system' | 'user' | 'assistant'; content: string }[],
    onChunk: (chunk: string) => void
  ): Promise<string> {
    if (!this.engine) {
      throw new Error('Offline AI engine is not initialized yet. Please download or load the model first.');
    }

    const brandSystemPrompt = {
      role: 'system' as const,
      content: 'You are StudyPlug AI (PlugAI), the official Nigerian curriculum educational AI tutor created exclusively by StudyPlug for JAMB, WAEC, NECO, and BECE. Always identify yourself strictly as StudyPlug AI or PlugAI. Never disclose or name underlying model architectures, open-source weight names, or third-party AI companies. Provide concise, step-by-step explanations with equations, examples, and exam tips.'
    };

    const hasSystem = messages.some(m => m.role === 'system');
    const finalMessages = hasSystem ? messages : [brandSystemPrompt, ...messages];

    const reply = await this.engine.chat.completions.create({
      messages: finalMessages,
      temperature: 0.6,
      max_tokens: 800,
      stream: true
    });

    let fullText = '';
    for await (const chunk of reply) {
      const delta = chunk.choices[0]?.delta?.content || '';
      fullText += delta;
      onChunk(fullText);
    }

    return fullText;
  }

  /**
   * Instant Offline Knowledge Reasoner (0 MB Download, runs instantly on 100% of devices)
   * Dissects question, answers, formula, and syllabus context offline.
   */
  public generateInstantExplanation(
    question: Question,
    userSelectedOption?: string,
    queryType: 'explain' | 'why_wrong' | 'formula' | 'mnemonic' | 'general' = 'explain'
  ): string {
    const getOptionText = (q: any, key?: string) => {
      if (!key) return '';
      if (Array.isArray(q.options)) {
        const found = q.options.find((o: any) => o.key === key);
        return found ? found.text : '';
      }
      if (typeof q.options === 'object' && q.options && q.options[key]) {
        return q.options[key];
      }
      return '';
    };

    const qText = question.text;
    const correctOpt = question.correctAnswer;
    const correctText = getOptionText(question, correctOpt);
    const subject = question.subject || 'Subject';
    const topic = question.topic || 'General Examination Topic';
    const explanation = question.explanation || '';

    if (queryType === 'why_wrong' && userSelectedOption && userSelectedOption !== correctOpt) {
      const wrongText = getOptionText(question, userSelectedOption);
      return `### 🔍 Option Analysis for Question #${question.questionNumber}

- **Your Choice (${userSelectedOption})**: *"${wrongText}"*
- **Correct Answer (${correctOpt})**: *"${correctText}"*

**Why Option ${userSelectedOption} is incorrect:**
In **${subject}** (${topic}), Option ${userSelectedOption} is a common distractor. It does not satisfy the governing principle or formula required for this problem.

**Correct Working & Principle:**
${explanation ? explanation : `Option ${correctOpt} correctly satisfies the syllabus criteria for ${topic}.`}`;
    }

    if (queryType === 'formula') {
      return `### 📐 Formula & Step-by-Step Breakdown for #${question.questionNumber}

**Subject:** ${subject} • **Topic:** ${topic}

**Key Formulas for this Topic:**
${this.getFormulasForSubjectAndTopic(subject, topic)}

**Application to this question:**
1. **Identify Given Values:** Read the question carefully to extract the variables provided.
2. **Apply the Core Equation:** Match with the standard syllabus relation.
3. **Step-by-Step Deduction:**
${explanation ? explanation : `Solving according to standard WAEC/JAMB criteria leads directly to Option **(${correctOpt})**: *"${correctText}"*.`}`;
    }

    if (queryType === 'mnemonic') {
      return `### 💡 Quick Memory Trick / Mnemonic

**Topic:** ${topic} (${subject})

${this.getMnemonicForTopic(subject, topic)}

**How to remember for JAMB/WAEC:**
When you see questions asking about **${topic}**, remember to check the units, look out for standard trap answers, and eliminate options that violate basic conservation or definitions.`;
    }

    const isStubExplanation = !explanation || explanation.length < 90 || (explanation.includes('Official Key') && !explanation.includes('Step-by-Step'));

    let cleanExplanation = explanation ? explanation.replace(/•\s*/g, '\n- ') : '';
    if (isStubExplanation) {
      const sLower = subject.toLowerCase();
      if (sLower.includes('math') || sLower.includes('phy') || sLower.includes('chem')) {
        cleanExplanation = `1. **Core Law & Principles:**\n   This problem requires applying fundamental laws of **${topic}** under ${subject}.\n\n2. **Governing Formula / Mathematical Relationship:**\n   ${this.getFormulasForSubjectAndTopic(subject, topic)}\n\n3. **Step-by-Step Deduction:**\n   - Identify given parameters from the question stem.\n   - Substitute values into the governing equation.\n   - Simplifying leads directly to Option **(${correctOpt})**: *"${correctText}"* as the exact mathematical result.\n\n4. **Examiner Strategy:**\n   Always verify SI units and eliminate options that violate basic conservation laws or dimensional consistency.`;
      } else if (sLower.includes('eng')) {
        cleanExplanation = `1. **Grammar & Context Analysis:**\n   This question evaluates competence in **${topic}**.\n\n2. **Governing Rule & Syntactic Accord:**\n   - Option **(${correctOpt})**: *"${correctText}"* correctly fulfills grammatical concord, tense sequence, or textual evidence from the narrative.\n\n3. **Examiner Advice:**\n   Identify the tense markers and syntactic structure before selecting your answer.`;
      } else {
        cleanExplanation = `1. **Curriculum Concept:**\n   Under the official Nigerian syllabus for **${subject}** (${topic}), Option **(${correctOpt})** is the correct answer.\n\n2. **Why (${correctOpt}) is correct:**\n   *"${correctText}"* satisfies the syllabus criteria and established definitions.`;
      }
    }

    // Default 'explain'
    return `### 🤖 PlugAI Detailed Solution • Question #${question.questionNumber}

**Subject:** ${subject} • **Topic:** ${topic}

#### Question:
> ${qText}

#### ✅ Correct Option: (${correctOpt}) ${correctText ? `— "${correctText}"` : ''}

#### 📖 Step-by-Step Explanation:
${cleanExplanation}

${userSelectedOption ? `\n*Note on your selection:* You chose **(${userSelectedOption})**. ${userSelectedOption === correctOpt ? '🎉 That is 100% correct! Excellent work!' : `Review the solution above to see why (${correctOpt}) is the intended answer.`}` : ''}

---
*⚡ 100% Free Response from PlugAI Nigerian Exam Knowledge Base*`;
  }

  /**
   * Instant Topic Explainer for Study Notes (0 MB)
   */
  public generateTopicSummary(topicTitle: string, subject: string, notesSnippet?: string): string {
    return `### 📚 PlugAI Study Guide: ${topicTitle}

**Exam Focus:** JAMB UTME, WAEC, NECO & Post-UTME Standard
**Subject:** ${subject}

#### 🎯 Key Syllabus Takeaways:
1. **Master the Definition:** Always be able to state the definition in clear exam terms.
2. **Crucial Distinctions:** Watch out for common examiner tricks and negative stems ("Which of the following is NOT...").
3. **High-Frequency Formulas:** Memorize standard units (SI units) and conversion factors.

${notesSnippet ? `#### 📝 Review Note Summary:\n${notesSnippet.slice(0, 450)}...\n` : ''}

#### 💡 Examiner Advice for 95%+ Score:
- Past papers show questions on **${topicTitle}** appear virtually every exam year.
- Practice at least 20 authentic past questions from this topic in StudyPlug CBT mode to build speed and accuracy.`;
  }

  /**
   * Free Public AI (When student has internet and wants conversational AI with step-by-step solving)
   */
  public async askFreePublicAi(
    userPrompt: string,
    context?: string
  ): Promise<string> {
    try {
      const systemPrompt = `You are StudyPlug AI (also known as PlugAI), the official Nigerian curriculum educational AI tutor created exclusively by StudyPlug (supporting JAMB UTME, WAEC SSCE, WAEC GCE, NECO, BECE, and Post-UTME).
CRITICAL RULES:
1. Always identify yourself strictly as "StudyPlug AI" or "PlugAI". You were created by the StudyPlug team for Nigerian students. Never mention or reveal any underlying LLM names, open-source weight names, or third-party AI companies.
2. Provide clear, step-by-step mathematical working, formula breakdown, or grammatical rule explanations for Nigerian secondary school and university entrance exams.
3. Format with clean markdown, LaTeX formulas ($...$), and emojis. Be direct, clear, and encouraging.`;

      const fullQuery = `${systemPrompt}\n\n[QUESTION / EXAM CONTEXT]\n${context || 'General Nigerian Exam Preparation'}\n\n[STUDENT QUERY]\n${userPrompt}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const encoded = encodeURIComponent(fullQuery);
      const res = await fetch(`https://text.pollinations.ai/${encoded}?model=openai&seed=42`, {
        method: 'GET',
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        let text = await res.text();
        if (text && text.trim().length > 0) {
          // Remove any promotional footers cleanly
          text = text
            .replace(/---\s*\n*\*\*Support Pollinations\.AI[\s\S]*$/i, '')
            .replace(/🌸\s*\*\*Ad\*\*[\s\S]*$/i, '')
            .trim();
          return text;
        }
      }
    } catch (e) {
      console.warn('Free public AI fallback failed:', e);
    }
    return '';
  }

  private getFormulasForSubjectAndTopic(subject: string, topic: string): string {
    const s = subject.toLowerCase();
    const t = topic.toLowerCase();

    if (s.includes('physics')) {
      if (t.includes('motion') || t.includes('velocity')) {
        return `- $v = u + at$\n- $s = ut + \\frac{1}{2}at^2$\n- $v^2 = u^2 + 2as$\n- $F = ma$ (Newton's Second Law)`;
      }
      if (t.includes('work') || t.includes('energy') || t.includes('power')) {
        return `- $Work = F \\times d$\n- $K.E. = \\frac{1}{2}mv^2$\n- $P.E. = mgh$\n- $Power = \\frac{Work}{Time} = F \\times v$`;
      }
      if (t.includes('heat') || t.includes('temperature')) {
        return `- $Q = mc\\Delta\\theta$\n- $Q = mL$ (Latent Heat)\n- $Heat\\,Lost = Heat\\,Gained$`;
      }
      return `- $Force = m \\times a$\n- $Work = F \\times d$\n- $Mechanical\\,Advantage = \\frac{Load}{Effort}$\n- $Velocity\\,Ratio = \\frac{Distance_{effort}}{Distance_{load}}$\n- $Efficiency = \\frac{MA}{VR} \\times 100\\%$`;
    }

    if (s.includes('math')) {
      if (t.includes('quadratic') || t.includes('algebra')) {
        return `- Quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\n- Discriminant: $\\Delta = b^2 - 4ac$ (determines nature of roots)`;
      }
      if (t.includes('progression') || t.includes('series') || t.includes('arithmetic')) {
        return `- A.P. $n^{th}$ term: $T_n = a + (n - 1)d$\n- A.P. Sum: $S_n = \\frac{n}{2}[2a + (n - 1)d]$\n- G.P. $n^{th}$ term: $T_n = ar^{n-1}$`;
      }
      return `- Area of triangle: $\\frac{1}{2} \\times base \\times height$\n- Circle area: $\\pi r^2$, Circumference: $2\\pi r$\n- Probability: $P(E) = \\frac{n(E)}{n(S)}$`;
    }

    if (s.includes('chem')) {
      return `- Mole concept: $Moles = \\frac{Mass}{Molar\\,Mass}$\n- Concentration: $C = \\frac{Moles}{Volume\\,(dm^3)}$\n- Ideal Gas equation: $PV = nRT$\n- General Gas equation: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$`;
    }

    return `- Refer to the relevant standard textbook formula definitions for **${topic}**.`;
  }

  private getMnemonicForTopic(subject: string, topic: string): string {
    const s = subject.toLowerCase();
    const t = topic.toLowerCase();

    if (s.includes('chem')) {
      return `- **Redox (OIL RIG)**: **O**xidation **I**s **L**oss of electrons, **R**eduction **I**s **G**ain of electrons.\n- **Electrochemical Series**: **P**lease **S**top **C**alling **M**e **A** **C**areless **Z**ebra **I**nstead **T**ry **L**earning **H**ow **C**opper **M**akes **S**ilver **G**old (K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, H, Cu, Hg, Ag, Au).`;
    }

    if (s.includes('bio')) {
      return `- **Characteristics of Living Things (MR NIGER D)**: **M**ovement, **R**espiration, **N**utrition, **I**rritability, **G**rowth, **E**xcretion, **R**eproduction, **D**eath.\n- **Classification (Dear King Philip Came Over For Good Soup)**: **D**omain, **K**ingdom, **P**hylum, **C**lass, **O**rder, **F**amily, **G**enus, **S**pecies.`;
    }

    if (s.includes('physics')) {
      return `- **Electromagnetic Spectrum (Rich Men In Velvet Use X-ray Glasses)**: **R**adio, **M**icrowave, **I**nfrared, **V**isible, **U**ltraviolet, **X**-ray, **G**amma.`;
    }

    if (s.includes('math')) {
      return `- **Trigonometric Ratios (SOH CAH TOA)**: **S**in = **O**pposite/**H**ypotenuse, **C**os = **A**djacent/**H**ypotenuse, **T**an = **O**pposite/**A**djacent.\n- **Order of Operations (BODMAS)**: **B**rackets, **O**f, **D**ivision, **M**ultiplication, **A**ddition, **S**ubtraction.`;
    }

    return `- Create simple sentence rhymes associating the first letter of each key concept in **${topic}** for quick recall during exams.`;
  }
}

export const aiTutorService = new AiTutorService();
