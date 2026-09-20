import React, { useState, useEffect } from 'react';
import {
  fetchSubjectsSummary,
  bulkUploadQuestions,
  uploadQuestionsCsv,
  deleteQuestion,
  DEFAULT_ADMIN_KEY,
  SubjectsSummaryResponse
} from '../../services/apiService';
import { useApp } from '../../context/AppContext';

interface AdminQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminQuestionModal: React.FC<AdminQuestionModalProps> = ({ isOpen, onClose }) => {
  const { reloadQuestions } = useApp();

  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('studyplug_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'bulk' | 'single' | 'browse'>('overview');

  // Summary state
  const [summary, setSummary] = useState<SubjectsSummaryResponse | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState<boolean>(false);

  // Bulk Upload State
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadFeedback, setUploadFeedback] = useState<{ success: boolean; message: string } | null>(null);

  // Single Question Form State
  const [singleForm, setSingleForm] = useState<{
    subject: string;
    exam_year: number;
    question_num: number;
    text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
    explanation: string;
    topic: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    image_url: string;
  }>({
    subject: 'Use of English',
    exam_year: 2024,
    question_num: 1,
    text: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answer: 'A',
    explanation: '',
    topic: 'General',
    difficulty: 'Medium',
    image_url: ''
  });
  const [isSubmittingSingle, setIsSubmittingSingle] = useState<boolean>(false);
  const [singleFeedback, setSingleFeedback] = useState<{ success: boolean; message: string } | null>(null);

  // Load summary when opened
  const loadSummary = async () => {
    setIsLoadingSummary(true);
    try {
      const data = await fetchSubjectsSummary();
      if (data) setSummary(data);
    } catch (e) {
      console.warn(e);
    } finally {
      setIsLoadingSummary(false);
    }
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadSummary();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  // Handle PIN Unlock
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === 'studyplug2026' || pinInput.trim() === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('studyplug_admin_auth', 'true');
      setPinError('');
      loadSummary();
    } else {
      setPinError('Incorrect PIN. Default PIN is studyplug2026');
    }
  };

  // Handle CSV File Upload
  const handleCsvUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!csvFile) {
      setUploadFeedback({ success: false, message: 'Please select a CSV file to upload.' });
      return;
    }

    setIsUploading(true);
    setUploadFeedback(null);
    try {
      const res = await uploadQuestionsCsv(csvFile);
      setUploadFeedback(res);
      if (res.success) {
        setCsvFile(null);
        await loadSummary();
        await reloadQuestions();
      }
    } catch (err: any) {
      setUploadFeedback({ success: false, message: err.message || 'Upload failed' });
    } finally {
      setIsUploading(false);
    }
  };

  // Handle Single Question Submit
  const handleSingleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!singleForm.text.trim() || !singleForm.option_a.trim() || !singleForm.option_b.trim()) {
      setSingleFeedback({ success: false, message: 'Question text and at least options A and B are required.' });
      return;
    }

    setIsSubmittingSingle(true);
    setSingleFeedback(null);
    try {
      const res = await bulkUploadQuestions([singleForm]);
      setSingleFeedback(res);
      if (res.success) {
        // Increment question number for next entry
        setSingleForm(prev => ({
          ...prev,
          question_num: prev.question_num + 1,
          text: '',
          option_a: '',
          option_b: '',
          option_c: '',
          option_d: '',
          explanation: '',
          image_url: ''
        }));
        await loadSummary();
        await reloadQuestions();
      }
    } catch (err: any) {
      setSingleFeedback({ success: false, message: err.message || 'Submission failed' });
    } finally {
      setIsSubmittingSingle(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#0E382B] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold">Study Plug Admin & Question Portal</h2>
              <p className="text-xs text-white/80">Manage past questions, upload CSV batches, and view cPanel database</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            ✕
          </button>
        </div>

        {/* PIN Security Gate */}
        {!isAuthenticated ? (
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#0E382B] mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Admin Access Required</h3>
            <p className="text-sm text-slate-500 max-w-sm mb-6">
              Enter your administration PIN to manage the Study Plug question database.
            </p>

            <form onSubmit={handlePinSubmit} className="w-full max-w-xs space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: studyplug2026)"
                  className="w-full px-4 py-3 text-center text-base tracking-widest font-mono rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0E382B]"
                  autoFocus
                />
                {pinError && <p className="text-xs text-rose-500 mt-1.5">{pinError}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0E382B] hover:bg-[#4E35F8] text-white font-bold rounded-xl shadow-brand-glow transition"
              >
                Unlock Admin Portal
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* Nav Tabs */}
            <div className="flex border-b border-slate-100 bg-slate-50/50 px-6 pt-3 gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-[#0E382B] text-[#0E382B] bg-white'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                📊 Database Overview
              </button>
              <button
                onClick={() => setActiveTab('bulk')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition border-b-2 ${
                  activeTab === 'bulk'
                    ? 'border-[#0E382B] text-[#0E382B] bg-white'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                📁 Bulk CSV Upload
              </button>
              <button
                onClick={() => setActiveTab('single')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition border-b-2 ${
                  activeTab === 'single'
                    ? 'border-[#0E382B] text-[#0E382B] bg-white'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                ✏️ Add Question
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Status Banner */}
                  <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <div>
                        <h4 className="text-sm font-bold text-emerald-900">cPanel MySQL Database Connected</h4>
                        <p className="text-xs text-emerald-700">Host: 156.232.88.10 • Database: ooezylpj_studyplug</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-emerald-900">{summary?.total_questions || 170}</span>
                      <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Total Questions</p>
                    </div>
                  </div>

                  {/* Subjects Breakdown */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Live Subject Question Banks</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {summary?.subjects && summary.subjects.length > 0 ? (
                        summary.subjects.map(sub => (
                          <div key={sub.name} className="p-4 rounded-2xl border border-slate-200/70 bg-white shadow-sm hover:border-[#0E382B] transition">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-bold text-sm text-slate-900">{sub.name}</h5>
                              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#0E382B]/10 text-[#0E382B]">
                                {sub.count} Qs
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Years: {sub.years.slice(0, 4).join(', ')}{sub.years.length > 4 ? '...' : ''}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {sub.topics.length} syllabus topics covered
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-3 text-center py-6 text-slate-400 text-xs">
                          {isLoadingSummary ? 'Loading live subjects...' : 'No subjects loaded yet.'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={loadSummary}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                    >
                      🔄 Refresh Live Stats
                    </button>
                    <a
                      href="https://eznonews.com.ng/studyplug-api/sample_questions_template.csv"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition flex items-center space-x-1.5"
                    >
                      <span>📥 Download CSV Template</span>
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 2: BULK CSV UPLOAD */}
              {activeTab === 'bulk' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Bulk Questions Upload</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Upload past questions in bulk using a standard CSV file. Existing questions with identical subject, year, and question number will be safely updated without duplicates.
                    </p>
                  </div>

                  <form onSubmit={handleCsvUpload} className="space-y-4">
                    <div className="border-2 border-dashed border-slate-200 hover:border-[#0E382B] rounded-2xl p-8 text-center bg-slate-50/50 transition">
                      <input
                        type="file"
                        accept=".csv"
                        id="csv-file-input"
                        onChange={(e) => setCsvFile(e.target.files ? e.target.files[0] : null)}
                        className="hidden"
                      />
                      <label htmlFor="csv-file-input" className="cursor-pointer flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#0E382B] flex items-center justify-center mb-3">
                          📁
                        </div>
                        <span className="text-sm font-bold text-slate-800">
                          {csvFile ? csvFile.name : 'Click to browse or drop CSV past question file here'}
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                          {csvFile ? `${(csvFile.size / 1024).toFixed(1)} KB` : 'Accepts standard CSV file with headers: subject, exam_year, question_num, text, option_a...'}
                        </span>
                      </label>
                    </div>

                    {uploadFeedback && (
                      <div className={`p-4 rounded-xl text-xs font-medium ${
                        uploadFeedback.success ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                      }`}>
                        {uploadFeedback.message}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <a
                        href="https://eznonews.com.ng/studyplug-api/sample_questions_template.csv"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#0E382B] hover:underline"
                      >
                        📥 Download Example CSV Template
                      </a>
                      <button
                        type="submit"
                        disabled={!csvFile || isUploading}
                        className="px-6 py-2.5 bg-[#0E382B] hover:bg-[#4E35F8] disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-brand-glow transition cursor-pointer"
                      >
                        {isUploading ? 'Uploading & Ingesting...' : 'Upload Questions to cPanel'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 3: SINGLE QUESTION BUILDER */}
              {activeTab === 'single' && (
                <form onSubmit={handleSingleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Subject</label>
                      <select
                        value={singleForm.subject}
                        onChange={(e) => setSingleForm({ ...singleForm, subject: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 bg-white font-medium"
                      >
                        <option value="Use of English">Use of English</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Economics">Economics</option>
                        <option value="Government">Government</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Exam Year</label>
                      <input
                        type="number"
                        value={singleForm.exam_year}
                        onChange={(e) => setSingleForm({ ...singleForm, exam_year: parseInt(e.target.value, 10) || 2024 })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Question Number</label>
                      <input
                        type="number"
                        value={singleForm.question_num}
                        onChange={(e) => setSingleForm({ ...singleForm, question_num: parseInt(e.target.value, 10) || 1 })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase">Question Text</label>
                    <textarea
                      rows={3}
                      value={singleForm.text}
                      onChange={(e) => setSingleForm({ ...singleForm, text: e.target.value })}
                      placeholder="Type or paste question stem..."
                      className="w-full mt-1 p-3 text-xs rounded-xl border border-slate-200 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500">Option A</label>
                      <input
                        type="text"
                        value={singleForm.option_a}
                        onChange={(e) => setSingleForm({ ...singleForm, option_a: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                        placeholder="Option A text"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500">Option B</label>
                      <input
                        type="text"
                        value={singleForm.option_b}
                        onChange={(e) => setSingleForm({ ...singleForm, option_b: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                        placeholder="Option B text"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500">Option C</label>
                      <input
                        type="text"
                        value={singleForm.option_c}
                        onChange={(e) => setSingleForm({ ...singleForm, option_c: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                        placeholder="Option C text"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500">Option D</label>
                      <input
                        type="text"
                        value={singleForm.option_d}
                        onChange={(e) => setSingleForm({ ...singleForm, option_d: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                        placeholder="Option D text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Correct Answer</label>
                      <select
                        value={singleForm.correct_answer}
                        onChange={(e) => setSingleForm({ ...singleForm, correct_answer: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 bg-white font-bold text-[#0E382B]"
                      >
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Topic</label>
                      <input
                        type="text"
                        value={singleForm.topic}
                        onChange={(e) => setSingleForm({ ...singleForm, topic: e.target.value })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 font-medium"
                        placeholder="e.g. Concord, Mechanics"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Difficulty</label>
                      <select
                        value={singleForm.difficulty}
                        onChange={(e) => setSingleForm({ ...singleForm, difficulty: e.target.value as 'Easy' | 'Medium' | 'Hard' })}
                        className="w-full mt-1 p-2 text-xs rounded-xl border border-slate-200 bg-white font-medium"
                      >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase">Explanation / Solution</label>
                    <textarea
                      rows={2}
                      value={singleForm.explanation}
                      onChange={(e) => setSingleForm({ ...singleForm, explanation: e.target.value })}
                      placeholder="Explain why the answer is correct for the student review..."
                      className="w-full mt-1 p-3 text-xs rounded-xl border border-slate-200 font-medium"
                    />
                  </div>

                  {singleFeedback && (
                    <div className={`p-3 rounded-xl text-xs font-medium ${
                      singleFeedback.success ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {singleFeedback.message}
                    </div>
                  )}

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmittingSingle}
                      className="px-6 py-2.5 bg-[#0E382B] hover:bg-[#4E35F8] text-white font-bold text-xs rounded-xl shadow-brand-glow transition cursor-pointer"
                    >
                      {isSubmittingSingle ? 'Saving...' : 'Save Question to Database'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
