import React, { useState, useEffect } from 'react';

interface StudentPersonalNotebookProps {
  isOpen: boolean;
  onClose: () => void;
  subject: string;
  topic: string;
  subtopic?: string;
}

export const StudentPersonalNotebook: React.FC<StudentPersonalNotebookProps> = ({
  isOpen,
  onClose,
  subject,
  topic,
  subtopic = ''
}) => {
  const storageKey = `studyplug_notes_${subject}_${topic}`.toLowerCase().replace(/[^a-z0-9_]/g, '_');
  const [personalNote, setPersonalNote] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // Load saved notes for this topic
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setPersonalNote(saved);
        setLastSaved('Saved locally');
      } else {
        setPersonalNote('');
        setLastSaved(null);
      }
    } catch {
      // ignore localStorage errors
    }
  }, [storageKey]);

  // Handle note change & auto-save
  const handleNoteChange = (text: string) => {
    setPersonalNote(text);
    try {
      localStorage.setItem(storageKey, text);
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastSaved(`Saved at ${time}`);
    } catch {
      // ignore
    }
  };

  // Insert Quick Tags
  const insertQuickTag = (tag: string) => {
    const updated = personalNote ? `${personalNote}\n${tag}: ` : `${tag}: `;
    handleNoteChange(updated);
  };

  // Copy note
  const copyNote = () => {
    if (!personalNote) return;
    navigator.clipboard.writeText(personalNote);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Clear note
  const clearNote = () => {
    if (window.confirm("Are you sure you want to clear your notes for this topic?")) {
      handleNoteChange('');
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  };

  if (!isOpen) return null;

  const wordCount = personalNote.trim() ? personalNote.trim().split(/\s+/).length : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-md h-full bg-[#081a13] border-l border-[#C4823F]/40 shadow-2xl flex flex-col p-5 sm:p-6 overflow-hidden animate-slide-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFCC00]/15 text-[#FFCC00] flex items-center justify-center font-bold text-sm">
              📝
            </span>
            <div>
              <h3 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                My StudyPlug Notebook
              </h3>
              <p className="text-[10px] text-white/50 truncate max-w-[220px]">
                {subject} • {subtopic || topic}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition flex items-center justify-center font-bold"
          >
            ✕
          </button>
        </div>

        {/* Quick Tag Badges */}
        <div className="mb-3">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-1.5">
            Quick Insert Tags
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => insertQuickTag('📌 EXAM TRAP')}
              className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition cursor-pointer"
            >
              + 📌 Exam Trap
            </button>
            <button
              type="button"
              onClick={() => insertQuickTag('⚡ FORMULA')}
              className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition cursor-pointer"
            >
              + ⚡ Formula
            </button>
            <button
              type="button"
              onClick={() => insertQuickTag('🧠 MNEMONIC')}
              className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition cursor-pointer"
            >
              + 🧠 Mnemonic
            </button>
            <button
              type="button"
              onClick={() => insertQuickTag('❓ ASK TEACHER')}
              className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 hover:bg-purple-500/25 transition cursor-pointer"
            >
              + ❓ Ask Later
            </button>
          </div>
        </div>

        {/* Text Area */}
        <div className="flex-1 flex flex-col min-h-0 mb-3">
          <textarea
            value={personalNote}
            onChange={e => handleNoteChange(e.target.value)}
            placeholder="Jot down your personal reminders, formulas to memorize, or notes from your teacher for this specific topic..."
            className="w-full flex-1 p-3.5 rounded-xl bg-[#05140e] border border-white/10 text-white text-xs sm:text-sm placeholder-white/25 focus:outline-none focus:border-[#FFCC00]/50 resize-none font-sans leading-relaxed"
          />
        </div>

        {/* Footer info & actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
          <div className="text-white/40">
            <span>{wordCount} words</span>
            {lastSaved && <span className="ml-2 text-emerald-400 font-bold">• {lastSaved}</span>}
          </div>

          <div className="flex items-center gap-2">
            {personalNote && (
              <button
                type="button"
                onClick={clearNote}
                className="text-white/40 hover:text-red-400 transition cursor-pointer px-2 py-1"
                title="Clear notebook"
              >
                Clear
              </button>
            )}

            <button
              type="button"
              onClick={copyNote}
              disabled={!personalNote}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
                isCopied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white disabled:opacity-30'
              }`}
            >
              <span>{isCopied ? '✓ Copied' : '📋 Copy Notes'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
