import { Question, MATHEMATICS_QUESTIONS } from '../data/questions';
import { PHYSICS_QUESTIONS } from '../data/physicsQuestions';
import { ENGLISH_QUESTIONS } from '../data/englishQuestions';
import { CHEMISTRY_QUESTIONS, BIOLOGY_QUESTIONS } from '../data/scienceQuestions';

const API_URL_STORAGE_KEY = 'studyplug_cpanel_api_url';
const DEFAULT_API_URL = 'https://eznonews.com.ng/studyplug-api';
export const DEFAULT_ADMIN_KEY = 'studyplug_secret_2026';

export interface SubjectSummaryItem {
  name: string;
  count: number;
  min_year: number;
  max_year: number;
  years: number[];
  topics: string[];
}

export interface SubjectsSummaryResponse {
  success: boolean;
  total_questions: number;
  total_subjects: number;
  total_exams: number;
  subjects: SubjectSummaryItem[];
}

export const getStoredApiUrl = (): string => {
  return localStorage.getItem(API_URL_STORAGE_KEY) || DEFAULT_API_URL;
};

export const setStoredApiUrl = (url: string): void => {
  const trimmed = url.trim().replace(/\/+$/, ''); // Remove trailing slash
  localStorage.setItem(API_URL_STORAGE_KEY, trimmed);
};

export const clearStoredApiUrl = (): void => {
  localStorage.removeItem(API_URL_STORAGE_KEY);
};

/**
 * Tests connection to the cPanel PHP API endpoint
 */
export const testApiConnection = async (baseUrl: string): Promise<{ success: boolean; message: string; count?: number }> => {
  const cleanUrl = baseUrl.trim().replace(/\/+$/, '');
  if (!cleanUrl) {
    return { success: false, message: 'Please enter a valid API URL.' };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${cleanUrl}/get_questions.php?subject=Physics&limit=5`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return { success: false, message: `Server returned HTTP ${res.status}: ${res.statusText}` };
    }

    const data = await res.json();
    if (data && data.success) {
      return {
        success: true,
        message: `Connected successfully! Server returned ${data.count} questions.`,
        count: data.count
      };
    } else {
      return {
        success: false,
        message: data?.error || 'Server responded with an unexpected structure.'
      };
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return { success: false, message: 'Connection timed out after 8 seconds.' };
    }
    return { success: false, message: `Network error: ${err.message || 'Unable to connect to server.'}` };
  }
};

/**
 * Loads questions from cPanel API with local fallback and offline caching
 */
export const fetchQuestions = async (
  subject: string,
  year?: number | 'all',
  limit: number = 100,
  random: boolean = false
): Promise<{ questions: Question[]; source: 'cpanel' | 'cached' | 'local' }> => {
  const apiUrl = getStoredApiUrl();
  const lowerSub = (subject || 'mathematics').toLowerCase();
  const cacheKey = `sp_cache_${lowerSub}_${year || 'all'}_${random ? 'rand' : 'seq'}`;

  // If cPanel API is configured, attempt fast network fetch with a 2.5s abort timeout
  if (apiUrl) {
    try {
      const params = new URLSearchParams({
        subject,
        limit: limit.toString(),
        random: random ? '1' : '0'
      });
      if (year && year !== 'all') {
        params.append('year', year.toString());
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`${apiUrl}/get_questions.php?${params.toString()}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
          // Strictly validate that returned questions match the requested subject and paper type
          const isReqTheory = lowerSub.includes('(theory)');
          const isReqPractical = lowerSub.includes('(practical)');

          const validQuestions = data.questions.filter((q: Question) => {
            const qSub = (q.subject || '').toLowerCase();
            const qTopic = (q.topic || '').toLowerCase();

            // Guard against theory/practical mixing
            if (!isReqTheory && (qSub.includes('(theory)') || qTopic.includes('paper 2') || (q.options?.[0]?.text && q.options[0].text.includes('[theory')))) {
              return false;
            }
            if (!isReqPractical && (qSub.includes('(practical)') || qTopic.includes('paper 3') || (q.options?.[0]?.text && q.options[0].text.includes('[practical')))) {
              return false;
            }
            if (isReqTheory && !qSub.includes('(theory)') && !qTopic.includes('paper 2')) {
              return false;
            }
            if (isReqPractical && !qSub.includes('(practical)') && !qTopic.includes('paper 3')) {
              return false;
            }

            return qSub === lowerSub || qSub.includes(lowerSub) || lowerSub.includes(qSub);
          });

          if (validQuestions.length > 0) {
            // Cache successful response for offline use
            try {
              localStorage.setItem(cacheKey, JSON.stringify(validQuestions));
            } catch (e) {
              // Storage quota warning ignored
            }
            return { questions: validQuestions, source: 'cpanel' };
          }
        }
      }
    } catch (err) {
      // Network timeout or offline - seamlessly proceed to instant cache/local
    }
  }

  // Fallback 1: LocalStorage Cache from a previous successful session
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Validate cached questions match subject
        const matches = parsed.filter((q: Question) => {
          const qSub = (q.subject || '').toLowerCase();
          return qSub.includes(lowerSub.slice(0, 4)) || lowerSub.includes(qSub.slice(0, 4));
        });
        if (matches.length > 0) {
          return { questions: matches, source: 'cached' };
        }
      }
    }
  } catch (e) {
    console.warn('Cache read error:', e);
  }

  // Fallback 2: Hardcoded offline starter sets (accurate subject separation)
  if (lowerSub.includes('physics')) {
    return { questions: PHYSICS_QUESTIONS, source: 'local' };
  }
  if (lowerSub.includes('english')) {
    return { questions: ENGLISH_QUESTIONS, source: 'local' };
  }
  if (lowerSub.includes('chem')) {
    return { questions: CHEMISTRY_QUESTIONS, source: 'local' };
  }
  if (lowerSub.includes('bio')) {
    return { questions: BIOLOGY_QUESTIONS, source: 'local' };
  }
  return { questions: MATHEMATICS_QUESTIONS, source: 'local' };
};

/**
 * Fetches database summary: total questions, subject list with years and topics
 */
export const fetchSubjectsSummary = async (): Promise<SubjectsSummaryResponse | null> => {
  const apiUrl = getStoredApiUrl();
  if (!apiUrl) return null;

  try {
    const res = await fetch(`${apiUrl}/get_subjects_summary.php`);
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        return data as SubjectsSummaryResponse;
      }
    }
  } catch (err) {
    console.warn('Failed to fetch subjects summary:', err);
  }
  return null;
};

/**
 * Uploads questions in bulk (JSON format)
 */
export const bulkUploadQuestions = async (
  questions: Partial<Question>[],
  apiKey: string = DEFAULT_ADMIN_KEY
): Promise<{ success: boolean; message: string; total_in_db?: number }> => {
  const apiUrl = getStoredApiUrl();
  if (!apiUrl) return { success: false, message: 'API URL not configured.' };

  try {
    const res = await fetch(`${apiUrl}/import_questions.php?api_key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ questions })
    });

    const data = await res.json();
    return {
      success: data.success,
      message: data.message || data.error || 'Import completed.',
      total_in_db: data.total_in_db
    };
  } catch (err: any) {
    return { success: false, message: `Upload failed: ${err.message}` };
  }
};

/**
 * Uploads a CSV file of questions to cPanel
 */
export const uploadQuestionsCsv = async (
  file: File,
  apiKey: string = DEFAULT_ADMIN_KEY
): Promise<{ success: boolean; message: string; total_in_db?: number }> => {
  const apiUrl = getStoredApiUrl();
  if (!apiUrl) return { success: false, message: 'API URL not configured.' };

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);

    const res = await fetch(`${apiUrl}/import_questions.php`, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    return {
      success: data.success,
      message: data.message || data.error || 'CSV import completed.',
      total_in_db: data.total_in_db
    };
  } catch (err: any) {
    return { success: false, message: `CSV upload failed: ${err.message}` };
  }
};

/**
 * Deletes a question by ID
 */
export const deleteQuestion = async (
  id: number,
  apiKey: string = DEFAULT_ADMIN_KEY
): Promise<{ success: boolean; message: string }> => {
  const apiUrl = getStoredApiUrl();
  if (!apiUrl) return { success: false, message: 'API URL not configured.' };

  try {
    const res = await fetch(`${apiUrl}/delete_question.php?api_key=${encodeURIComponent(apiKey)}&id=${id}`, {
      method: 'POST'
    });
    const data = await res.json();
    return {
      success: data.success,
      message: data.message || data.error || 'Deleted.'
    };
  } catch (err: any) {
    return { success: false, message: `Delete failed: ${err.message}` };
  }
};
