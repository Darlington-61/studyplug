import React, { useState } from 'react';
import {
  SyllabusTopic,
  SubtopicItem,
  TopicResource,
  getTopicsForSubject,
  saveCustomTopic,
  deleteCustomTopic
} from '../../data/topicResourcesData';
import { SENIOR_SUBJECTS } from '../ClassroomNotesHub';

interface TopicResourcesAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopicsUpdated?: () => void;
}

export const TopicResourcesAdminModal: React.FC<TopicResourcesAdminModalProps> = ({
  isOpen,
  onClose,
  onTopicsUpdated
}) => {
  const [selectedExam, setSelectedExam] = useState<'JAMB' | 'WAEC' | 'NECO' | 'BECE'>('JAMB');
  const [selectedSubject, setSelectedSubject] = useState<string>('Chemistry');

  // Currently editing topic (null = list mode)
  const [editingTopic, setEditingTopic] = useState<SyllabusTopic | null>(null);

  // Subtopic editor state
  const [activeSubtopicIndex, setActiveSubtopicIndex] = useState<number>(0);

  if (!isOpen) return null;

  const topicsList = getTopicsForSubject(selectedSubject, selectedExam);

  const handleCreateNewTopic = () => {
    const newTopic: SyllabusTopic = {
      id: `custom-topic-${Date.now()}`,
      exam: selectedExam,
      subject: selectedSubject,
      topicTitle: 'New Syllabus Topic',
      category: 'Syllabus Core',
      description: 'Comprehensive study materials, video lessons and questions.',
      globalResources: [
        {
          id: `res-pdf-${Date.now()}`,
          type: 'pdf',
          title: 'High-Yield Formula Sheet & Revision Summary',
          description: 'Official syllabus summary notes and exam review sheet.',
          fileSize: '1.8 MB',
          url: '#'
        }
      ],
      subtopics: [
        {
          id: `sub-${Date.now()}-1`,
          subtopicTitle: 'Introduction & Core Principles',
          order: 1,
          content: 'Write the comprehensive lesson note content here in Markdown format with KaTeX math equations.',
          definitions: [
            { term: 'Key Concept', meaning: 'Definition of the foundational concept.' }
          ],
          keyPoints: [
            'Essential syllabus requirement 1',
            'Essential syllabus requirement 2'
          ],
          formulas: ['A = B + C'],
          examTips: ['Watch out for common exam trap questions.'],
          resources: [
            {
              id: `res-vid-${Date.now()}`,
              type: 'video',
              title: 'Introduction Video Lesson',
              description: 'Step-by-step problem walkthrough.',
              duration: '15:00',
              youtubeId: '3QpL5rQ0kQw'
            }
          ]
        }
      ]
    };
    setEditingTopic(newTopic);
    setActiveSubtopicIndex(0);
  };

  const handleSaveTopic = () => {
    if (!editingTopic) return;
    saveCustomTopic(editingTopic);
    setEditingTopic(null);
    if (onTopicsUpdated) onTopicsUpdated();
  };

  const handleDeleteTopic = (topicId: string) => {
    if (window.confirm('Are you sure you want to delete this topic and all its attached resources?')) {
      deleteCustomTopic(topicId);
      if (onTopicsUpdated) onTopicsUpdated();
    }
  };

  // Subtopic manipulation helpers
  const handleAddSubtopic = () => {
    if (!editingTopic) return;
    const newSub: SubtopicItem = {
      id: `sub-${Date.now()}-${editingTopic.subtopics.length + 1}`,
      subtopicTitle: `Subtopic ${editingTopic.subtopics.length + 1}`,
      order: editingTopic.subtopics.length + 1,
      content: 'New subtopic note content.',
      definitions: [],
      keyPoints: [],
      formulas: [],
      examTips: [],
      resources: []
    };
    setEditingTopic({
      ...editingTopic,
      subtopics: [...editingTopic.subtopics, newSub]
    });
    setActiveSubtopicIndex(editingTopic.subtopics.length);
  };

  const handleRemoveSubtopic = (index: number) => {
    if (!editingTopic || editingTopic.subtopics.length <= 1) {
      alert('A topic must contain at least one subtopic.');
      return;
    }
    const updated = editingTopic.subtopics.filter((_, i) => i !== index);
    setEditingTopic({
      ...editingTopic,
      subtopics: updated
    });
    setActiveSubtopicIndex(Math.max(0, index - 1));
  };

  const handleMoveSubtopic = (index: number, direction: 'up' | 'down') => {
    if (!editingTopic) return;
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= editingTopic.subtopics.length) return;

    const list = [...editingTopic.subtopics];
    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;

    setEditingTopic({
      ...editingTopic,
      subtopics: list
    });
    setActiveSubtopicIndex(targetIdx);
  };

  // Add video resource to current subtopic
  const handleAddVideoToSubtopic = () => {
    if (!editingTopic) return;
    const currSub = editingTopic.subtopics[activeSubtopicIndex];
    if (!currSub) return;

    const title = prompt('Enter Video Title:', 'Video Lesson Walkthrough');
    if (!title) return;
    const youtubeId = prompt('Enter YouTube Video ID (e.g. 3QpL5rQ0kQw):', '3QpL5rQ0kQw') || '3QpL5rQ0kQw';
    const duration = prompt('Enter Duration (e.g. 15 mins):', '15 mins') || '15 mins';

    const newRes: TopicResource = {
      id: `res-vid-${Date.now()}`,
      type: 'video',
      title,
      description: 'Official StudyPlug classroom video tutorial.',
      duration,
      youtubeId
    };

    const updatedSubs = [...editingTopic.subtopics];
    updatedSubs[activeSubtopicIndex] = {
      ...currSub,
      resources: [...currSub.resources, newRes]
    };

    setEditingTopic({
      ...editingTopic,
      subtopics: updatedSubs
    });
  };

  // Add PDF resource to current subtopic
  const handleAddPdfToSubtopic = () => {
    if (!editingTopic) return;
    const currSub = editingTopic.subtopics[activeSubtopicIndex];
    if (!currSub) return;

    const title = prompt('Enter PDF Document Title:', 'Summary Cheat Sheet & Formulas');
    if (!title) return;
    const fileSize = prompt('Enter File Size (e.g. 2.1 MB):', '2.1 MB') || '2.1 MB';

    const newRes: TopicResource = {
      id: `res-pdf-${Date.now()}`,
      type: 'pdf',
      title,
      description: 'Downloadable study material and worked examples.',
      fileSize,
      url: '#'
    };

    const updatedSubs = [...editingTopic.subtopics];
    updatedSubs[activeSubtopicIndex] = {
      ...currSub,
      resources: [...currSub.resources, newRes]
    };

    setEditingTopic({
      ...editingTopic,
      subtopics: updatedSubs
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl bg-[#001028] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#001830] max-h-[92vh] flex flex-col font-sans select-none">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#001830]">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🛠️</span>
            <div>
              <h2 className="text-sm sm:text-base font-black text-white">
                Admin Topic & Learning Resources Manager
              </h2>
              <p className="text-[11px] text-[#F8C800]">
                Subject → Topic → Subtopic → Notes → Videos → PDFs → Questions
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-slate-300 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {!editingTopic ? (
            /* ─── 1. TOPIC LIST VIEW ─── */
            <div className="space-y-4 text-left">
              {/* Exam & Subject Selectors */}
              <div className="flex flex-wrap items-center gap-3 bg-[#001830] p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs text-slate-400 font-bold">Exam:</span>
                  {(['JAMB', 'WAEC', 'NECO', 'BECE'] as const).map(ex => (
                    <button
                      key={ex}
                      type="button"
                      onClick={() => setSelectedExam(ex)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                        selectedExam === ex ? 'bg-[#F8C800] text-[#001028]' : 'bg-[#001028] text-slate-300'
                      }`}
                    >
                      {ex}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-1.5 flex-1 min-w-[200px]">
                  <span className="text-xs text-slate-400 font-bold">Subject:</span>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="flex-1 bg-[#001028] border border-white/10 text-white rounded-xl px-3 py-1.5 text-xs font-bold focus:outline-none focus:border-[#F8C800]"
                  >
                    {SENIOR_SUBJECTS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleCreateNewTopic}
                  className="px-4 py-1.5 rounded-xl bg-[#F8C800] text-[#001028] font-black text-xs hover:bg-[#FFD21F] shadow-sm transition cursor-pointer"
                >
                  + Create New Topic
                </button>
              </div>

              {/* Topics List Table */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Topics for {selectedSubject} ({topicsList.length})</span>
                  <span>Subtopics & Attached Resources</span>
                </div>

                {topicsList.length === 0 ? (
                  <div className="bg-[#001830] p-8 rounded-2xl border border-white/5 text-center text-slate-400 text-xs">
                    No topics created for {selectedSubject} yet. Click "+ Create New Topic" to add one.
                  </div>
                ) : (
                  topicsList.map(t => (
                    <div
                      key={t.id}
                      className="bg-[#001830] p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-black text-[#F8C800]">{t.topicTitle}</span>
                          <span className="text-[10px] font-mono bg-[#001028] px-2 py-0.5 rounded text-slate-300">
                            {t.subtopics.length} Subtopics
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{t.description}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingTopic(t);
                            setActiveSubtopicIndex(0);
                          }}
                          className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer"
                        >
                          Edit Topic & Materials
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteTopic(t.id)}
                          className="px-3 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600/40 text-red-400 text-xs font-bold transition cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            /* ─── 2. TOPIC & SUBTOPICS EDITOR VIEW ─── */
            <div className="space-y-5 text-left">
              {/* Top Navigation in Editor */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <button
                  type="button"
                  onClick={() => setEditingTopic(null)}
                  className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-bold text-slate-300 hover:text-white"
                >
                  ← Back to Topics List
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleSaveTopic}
                    className="px-5 py-2 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-black text-xs shadow-md"
                  >
                    Save & Publish Changes ✓
                  </button>
                </div>
              </div>

              {/* Topic Information Form */}
              <div className="bg-[#001830] p-4 rounded-2xl border border-white/5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8C800]">
                  Topic Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 font-bold block mb-1">Topic Title:</label>
                    <input
                      type="text"
                      value={editingTopic.topicTitle}
                      onChange={(e) => setEditingTopic({ ...editingTopic, topicTitle: e.target.value })}
                      className="w-full bg-[#001028] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F8C800]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 font-bold block mb-1">Category / Level:</label>
                    <input
                      type="text"
                      value={editingTopic.category || ''}
                      onChange={(e) => setEditingTopic({ ...editingTopic, category: e.target.value })}
                      className="w-full bg-[#001028] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F8C800]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold block mb-1">Description:</label>
                  <textarea
                    rows={2}
                    value={editingTopic.description}
                    onChange={(e) => setEditingTopic({ ...editingTopic, description: e.target.value })}
                    className="w-full bg-[#001028] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F8C800]"
                  />
                </div>
              </div>

              {/* Subtopics Management */}
              <div className="bg-[#001830] p-4 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8C800]">
                    Subtopics Under This Topic ({editingTopic.subtopics.length})
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddSubtopic}
                    className="px-3 py-1.5 rounded-xl bg-[#F8C800] text-[#001028] font-bold text-xs"
                  >
                    + Add Subtopic
                  </button>
                </div>

                {/* Subtopics Tabs */}
                <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
                  {editingTopic.subtopics.map((sub, idx) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setActiveSubtopicIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                        activeSubtopicIndex === idx
                          ? 'bg-[#F8C800] text-[#001028]'
                          : 'bg-[#001028] text-slate-300 hover:text-white'
                      }`}
                    >
                      {idx + 1}. {sub.subtopicTitle}
                    </button>
                  ))}
                </div>

                {/* Active Subtopic Editor */}
                {editingTopic.subtopics[activeSubtopicIndex] && (() => {
                  const curr = editingTopic.subtopics[activeSubtopicIndex];
                  return (
                    <div className="space-y-3 bg-[#001028] p-4 rounded-2xl border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-300">
                          Editing Subtopic #{activeSubtopicIndex + 1}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          <button
                            type="button"
                            onClick={() => handleMoveSubtopic(activeSubtopicIndex, 'up')}
                            disabled={activeSubtopicIndex === 0}
                            className="px-2 py-1 rounded bg-white/10 text-xs font-bold disabled:opacity-30"
                            title="Move Subtopic Up"
                          >
                            ↑
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMoveSubtopic(activeSubtopicIndex, 'down')}
                            disabled={activeSubtopicIndex === editingTopic.subtopics.length - 1}
                            className="px-2 py-1 rounded bg-white/10 text-xs font-bold disabled:opacity-30"
                            title="Move Subtopic Down"
                          >
                            ↓
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveSubtopic(activeSubtopicIndex)}
                            className="px-2.5 py-1 rounded bg-red-600/30 text-red-300 text-xs font-bold hover:bg-red-600/50"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400 font-bold block mb-1">Subtopic Title:</label>
                        <input
                          type="text"
                          value={curr.subtopicTitle}
                          onChange={(e) => {
                            const subs = [...editingTopic.subtopics];
                            subs[activeSubtopicIndex].subtopicTitle = e.target.value;
                            setEditingTopic({ ...editingTopic, subtopics: subs });
                          }}
                          className="w-full bg-[#001830] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F8C800]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400 font-bold block mb-1">
                          Lesson Note Text Content (Markdown with KaTeX formulas):
                        </label>
                        <textarea
                          rows={8}
                          value={curr.content}
                          onChange={(e) => {
                            const subs = [...editingTopic.subtopics];
                            subs[activeSubtopicIndex].content = e.target.value;
                            setEditingTopic({ ...editingTopic, subtopics: subs });
                          }}
                          className="w-full bg-[#001830] border border-white/10 rounded-xl p-3 text-xs text-white font-mono leading-relaxed focus:outline-none focus:border-[#F8C800]"
                        />
                      </div>

                      {/* Attach Videos and PDFs to this Subtopic */}
                      <div className="pt-2 border-t border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#F8C800]">
                            Attached Learning Materials ({curr.resources.length})
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={handleAddVideoToSubtopic}
                              className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold"
                            >
                              + Attach Video
                            </button>
                            <button
                              type="button"
                              onClick={handleAddPdfToSubtopic}
                              className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold"
                            >
                              + Attach PDF
                            </button>
                          </div>
                        </div>

                        {curr.resources.map((res, rIdx) => (
                          <div
                            key={res.id}
                            className="bg-[#001830] p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center space-x-2">
                              <span>{res.type === 'video' ? '🎥' : '📄'}</span>
                              <span className="font-bold text-white">{res.title}</span>
                              <span className="text-[10px] text-slate-400">({res.duration || res.fileSize || res.type})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const subs = [...editingTopic.subtopics];
                                subs[activeSubtopicIndex].resources = subs[activeSubtopicIndex].resources.filter((_, i) => i !== rIdx);
                                setEditingTopic({ ...editingTopic, subtopics: subs });
                              }}
                              className="text-red-400 hover:text-red-300 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicResourcesAdminModal;
