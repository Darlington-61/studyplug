import React, { useState, useEffect } from 'react';

export interface ExamTargetModalProps {
  isOpen: boolean;
  currentTargets: string[];
  onSave: (targets: string[]) => void;
  onClose: () => void;
}

const EXAM_OPTIONS = [
  {
    id: 'JAMB',
    name: 'JAMB (UTME)',
    badge: '🎯 Direct Entry / University UTME',
    desc: 'Speed-focused CBT objective questions, negative markings, fast timing, and common distractor traps.',
    color: 'border-emerald-500 bg-emerald-50/70 text-emerald-950',
    tag: 'bg-[#0E382B] text-[#FFCC00]'
  },
  {
    id: 'WAEC',
    name: 'WAEC (WASSCE)',
    badge: '📘 West African Senior Certificate',
    desc: 'Structured theoretical reasoning, step-by-step method marks [M1], accuracy marks [A1], and SI unit penalties.',
    color: 'border-blue-500 bg-blue-50/70 text-blue-950',
    tag: 'bg-blue-800 text-white'
  },
  {
    id: 'NECO',
    name: 'NECO (SSCE)',
    badge: '📗 National Examination Council',
    desc: 'Curriculum-focused standard objective & essay questions aligned with Nigerian secondary national standards.',
    color: 'border-amber-500 bg-amber-50/70 text-amber-950',
    tag: 'bg-amber-800 text-white'
  },
  {
    id: 'General',
    name: 'General Understanding',
    badge: '💡 Concept Mastery',
    desc: 'Pure conceptual understanding from first principles without strict exam board formatting.',
    color: 'border-purple-500 bg-purple-50/70 text-purple-950',
    tag: 'bg-purple-800 text-white'
  }
];

export const ExamTargetModal: React.FC<ExamTargetModalProps> = ({
  isOpen,
  currentTargets,
  onSave,
  onClose
}) => {
  const [selected, setSelected] = useState<string[]>(currentTargets || ['JAMB']);

  useEffect(() => {
    if (currentTargets && currentTargets.length > 0) {
      setSelected(currentTargets);
    }
  }, [currentTargets]);

  if (!isOpen) return null;

  const toggleOption = (id: string) => {
    if (id === 'General') {
      setSelected(['General']);
      return;
    }
    const filtered = selected.filter(s => s !== 'General');
    if (filtered.includes(id)) {
      const next = filtered.filter(s => s !== id);
      setSelected(next.length === 0 ? ['JAMB'] : next);
    } else {
      setSelected([...filtered, id]);
    }
  };

  const applyPreset = (preset: string[]) => {
    setSelected(preset);
  };

  const handleConfirm = () => {
    onSave(selected);
    onClose();
  };

  const isSelected = (id: string) => selected.includes(id);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-100 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-2 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🎓</span>
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Personalized Learning
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Which exam are you preparing for?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select all that apply. StudyPlug will intelligently adapt your past questions, worked examples, and examiner tips.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center cursor-pointer transition shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Quick Presets */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
            Quick One-Tap Presets
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyPreset(['JAMB'])}
              className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-emerald-600 text-xs font-bold text-slate-700 hover:bg-emerald-50 transition cursor-pointer"
            >
              🎯 JAMB Only
            </button>
            <button
              type="button"
              onClick={() => applyPreset(['WAEC'])}
              className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-blue-600 text-xs font-bold text-slate-700 hover:bg-blue-50 transition cursor-pointer"
            >
              📘 WAEC Only
            </button>
            <button
              type="button"
              onClick={() => applyPreset(['JAMB', 'WAEC'])}
              className="px-3 py-1.5 rounded-xl bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-black hover:bg-emerald-200 transition cursor-pointer flex items-center gap-1.5"
            >
              <span>🔥</span>
              <span>JAMB + WAEC (Popular)</span>
            </button>
            <button
              type="button"
              onClick={() => applyPreset(['JAMB', 'WAEC', 'NECO'])}
              className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-400 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              All Three (JAMB + WAEC + NECO)
            </button>
          </div>
        </div>

        {/* Checkbox Options */}
        <div className="space-y-2.5">
          {EXAM_OPTIONS.map(opt => {
            const checked = isSelected(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleOption(opt.id)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition flex items-start gap-3.5 cursor-pointer shadow-2xs ${
                  checked ? `${opt.color} shadow-sm ring-1 ring-emerald-500/20` : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition ${
                    checked ? 'bg-[#0E382B] border-[#0E382B] text-white' : 'border-slate-300 bg-white'
                  }`}
                >
                  {checked && <span className="text-xs font-black">✓</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-black text-slate-900">{opt.name}</span>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${opt.tag}`}>
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{opt.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-3.5 rounded-2xl bg-[#0E382B] text-[#FFCC00] font-black text-sm hover:bg-emerald-950 transition cursor-pointer shadow-sm text-center"
          >
            Save Target & Adapt Study Lessons →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamTargetModal;
