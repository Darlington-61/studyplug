/**
 * StudyPlug Notes & Resources Progress Tracking Service
 * =====================================================
 * Tracks student subtopic completions, videos watched, bookmarks,
 * downloads for offline reading, and practice quiz scores per topic.
 */

const STORAGE_KEYS = {
  COMPLETED_SUBTOPICS: 'studyplug_completed_subtopics_v1',
  BOOKMARKED_NOTES: 'studyplug_bookmarked_notes_v1',
  DOWNLOADED_NOTES: 'studyplug_downloaded_notes_v1',
  WATCHED_VIDEOS: 'studyplug_watched_videos_v1',
  TOPIC_SCORES: 'studyplug_topic_practice_scores_v1',
  READ_HISTORY: 'studyplug_notes_read_history_v1'
};

interface TopicPracticeScore {
  score: number;
  total: number;
  accuracy: number;
  date: string;
}

class NotesProgressService {
  private getSet(key: string): Set<string> {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return new Set(JSON.parse(data));
      }
    } catch (e) {
      console.warn(`Error reading ${key}:`, e);
    }
    return new Set<string>();
  }

  private saveSet(key: string, set: Set<string>): void {
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(set)));
    } catch (e) {
      console.warn(`Error saving ${key}:`, e);
    }
  }

  // ─── Subtopic Completion ──────────────────────────────────────────────────
  public isSubtopicCompleted(subtopicId: string): boolean {
    const completed = this.getSet(STORAGE_KEYS.COMPLETED_SUBTOPICS);
    return completed.has(subtopicId);
  }

  public toggleSubtopicCompletion(subtopicId: string): boolean {
    const completed = this.getSet(STORAGE_KEYS.COMPLETED_SUBTOPICS);
    let isNowCompleted = false;
    if (completed.has(subtopicId)) {
      completed.delete(subtopicId);
      isNowCompleted = false;
    } else {
      completed.add(subtopicId);
      isNowCompleted = true;
    }
    this.saveSet(STORAGE_KEYS.COMPLETED_SUBTOPICS, completed);
    return isNowCompleted;
  }

  public setSubtopicCompleted(subtopicId: string, isCompleted: boolean): void {
    const completed = this.getSet(STORAGE_KEYS.COMPLETED_SUBTOPICS);
    if (isCompleted) {
      completed.add(subtopicId);
    } else {
      completed.delete(subtopicId);
    }
    this.saveSet(STORAGE_KEYS.COMPLETED_SUBTOPICS, completed);
  }

  // ─── Bookmarks ────────────────────────────────────────────────────────────
  public isNoteBookmarked(subtopicId: string): boolean {
    const bookmarks = this.getSet(STORAGE_KEYS.BOOKMARKED_NOTES);
    return bookmarks.has(subtopicId);
  }

  public toggleNoteBookmark(subtopicId: string): boolean {
    const bookmarks = this.getSet(STORAGE_KEYS.BOOKMARKED_NOTES);
    let isBookmarked = false;
    if (bookmarks.has(subtopicId)) {
      bookmarks.delete(subtopicId);
      isBookmarked = false;
    } else {
      bookmarks.add(subtopicId);
      isBookmarked = true;
    }
    this.saveSet(STORAGE_KEYS.BOOKMARKED_NOTES, bookmarks);
    return isBookmarked;
  }

  // ─── Offline Downloads ────────────────────────────────────────────────────
  public isNoteDownloaded(subtopicId: string): boolean {
    const downloads = this.getSet(STORAGE_KEYS.DOWNLOADED_NOTES);
    return downloads.has(subtopicId);
  }

  public toggleNoteDownloaded(subtopicId: string): boolean {
    const downloads = this.getSet(STORAGE_KEYS.DOWNLOADED_NOTES);
    let isDownloaded = false;
    if (downloads.has(subtopicId)) {
      downloads.delete(subtopicId);
      isDownloaded = false;
    } else {
      downloads.add(subtopicId);
      isDownloaded = true;
    }
    this.saveSet(STORAGE_KEYS.DOWNLOADED_NOTES, downloads);
    return isDownloaded;
  }

  // ─── Video Watched ────────────────────────────────────────────────────────
  public isVideoWatched(videoId: string): boolean {
    const watched = this.getSet(STORAGE_KEYS.WATCHED_VIDEOS);
    return watched.has(videoId);
  }

  public markVideoWatched(videoId: string): void {
    const watched = this.getSet(STORAGE_KEYS.WATCHED_VIDEOS);
    watched.add(videoId);
    this.saveSet(STORAGE_KEYS.WATCHED_VIDEOS, watched);
  }

  // ─── Practice Scores by Topic ─────────────────────────────────────────────
  public recordPracticeScore(topicId: string, score: number, total: number): void {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TOPIC_SCORES);
      const scores: Record<string, TopicPracticeScore> = data ? JSON.parse(data) : {};
      const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
      scores[topicId] = {
        score,
        total,
        accuracy,
        date: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.TOPIC_SCORES, JSON.stringify(scores));
    } catch (e) {
      console.warn('Error recording topic practice score:', e);
    }
  }

  public getTopicPracticeScore(topicId: string): TopicPracticeScore | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TOPIC_SCORES);
      if (data) {
        const scores = JSON.parse(data);
        return scores[topicId] || null;
      }
    } catch (e) {
      console.warn('Error fetching topic practice score:', e);
    }
    return null;
  }

  // ─── Overall Topic Progress Calculation ───────────────────────────────────
  public getTopicProgress(subtopicIds: string[]): {
    completedCount: number;
    totalCount: number;
    percentage: number;
  } {
    if (!subtopicIds || subtopicIds.length === 0) {
      return { completedCount: 0, totalCount: 0, percentage: 0 };
    }
    const completedSet = this.getSet(STORAGE_KEYS.COMPLETED_SUBTOPICS);
    const completedCount = subtopicIds.filter(id => completedSet.has(id)).length;
    const totalCount = subtopicIds.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    return { completedCount, totalCount, percentage };
  }

  // ─── Note Opened / Read History ───────────────────────────────────────────
  public logNoteOpened(subtopicId: string, topicTitle: string): void {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.READ_HISTORY);
      const history: { id: string; title: string; timestamp: number }[] = data ? JSON.parse(data) : [];
      const filtered = history.filter(h => h.id !== subtopicId);
      filtered.unshift({ id: subtopicId, title: topicTitle, timestamp: Date.now() });
      localStorage.setItem(STORAGE_KEYS.READ_HISTORY, JSON.stringify(filtered.slice(0, 30)));
    } catch (e) {
      console.warn('Error logging note read history:', e);
    }
  }
}

export const notesProgressService = new NotesProgressService();
