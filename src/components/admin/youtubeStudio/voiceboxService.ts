import { VoiceboxProfile, VoiceboxConfig } from './types';
import { phoneticSanitize } from './scriptGenerator';

export const VOICEBOX_PROFILES: VoiceboxProfile[] = [
  {
    id: 'vb-adebayo',
    name: 'Dr. Adebayo (Senior Physics Examiner)',
    gender: 'male',
    description: 'Authoritative, calm, clear West African academic tone. Perfect for calculation & science explanations.',
    accent: 'nigerian_academic',
    stability: 0.85,
    clarity: 0.92,
    pace: 1.0
  },
  {
    id: 'vb-funke',
    name: 'Mrs. Funke (National WAEC & NECO Tutor)',
    gender: 'female',
    description: 'Warm, encouraging, step-by-step teacher voice. Ideal for secondary school students building confidence.',
    accent: 'nigerian_academic',
    stability: 0.88,
    clarity: 0.95,
    pace: 1.05
  },
  {
    id: 'vb-darlington',
    name: 'Engr. Darlington (StudyPlug CBT Master)',
    gender: 'male',
    description: 'Dynamic, high-energy exam strategist. Excellent for rapid question breakdowns and time-saving shortcuts.',
    accent: 'nigerian_academic',
    stability: 0.82,
    clarity: 0.90,
    pace: 1.15
  },
  {
    id: 'vb-chukwu',
    name: 'Prof. Chukwu (Humanities & Social Sciences Scholar)',
    gender: 'male',
    description: 'Deep, deliberate, textbook-grade diction. Best for Government, Civic, CRS, and History lectures.',
    accent: 'nigerian_academic',
    stability: 0.90,
    clarity: 0.96,
    pace: 0.95
  },
  {
    id: 'vb-bello',
    name: 'Dr. Bello (Economics & Commercial Examiner)',
    gender: 'male',
    description: 'Analytical, practical examiner diction. Tailored for Economics, Commerce, and Financial Accounting.',
    accent: 'nigerian_academic',
    stability: 0.86,
    clarity: 0.93,
    pace: 1.02
  }
];

export function getRecommendedVoiceProfile(subject: string): VoiceboxProfile {
  const s = (subject || '').toLowerCase();
  if (s.includes('eng') || s.includes('lit') || s.includes('bio')) {
    return VOICEBOX_PROFILES[1]; // Mrs. Funke
  }
  if (s.includes('econ') || s.includes('comm') || s.includes('acc')) {
    return VOICEBOX_PROFILES[4]; // Dr. Bello
  }
  if (s.includes('gov') || s.includes('civic') || s.includes('crs') || s.includes('irs') || s.includes('hist')) {
    return VOICEBOX_PROFILES[3]; // Prof. Chukwu
  }
  return VOICEBOX_PROFILES[0]; // Dr. Adebayo (Science / Math)
}

export async function generateSceneVoiceboxAudio(
  sceneId: string,
  narrationText: string,
  config: VoiceboxConfig,
  apiUrl: string = 'https://studyplug.com.ng/studyplug-api/youtube_studio.php'
): Promise<string> {
  const sanitized = phoneticSanitize(narrationText);

  try {
    const res = await fetch(`${apiUrl}?action=voicebox_generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer studyplug_secret_2026'
      },
      body: JSON.stringify({
        scene_id: sceneId,
        text: sanitized,
        profile_id: config.profileId,
        pace: config.pace,
        stability: config.stability
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.audio_url) {
        return data.audio_url;
      }
    }
  } catch (err) {
    console.warn('Voicebox backend unreachable, utilizing local synthesis fallback:', err);
  }

  // Return empty string if offline; browser Web Speech API will handle playback seamlessly
  return '';
}
