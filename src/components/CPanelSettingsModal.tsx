import React, { useState, useEffect } from 'react';
import { getStoredApiUrl, setStoredApiUrl, testApiConnection, clearStoredApiUrl } from '../services/apiService';

interface CPanelSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved?: () => void;
}

export const CPanelSettingsModal: React.FC<CPanelSettingsModalProps> = ({
  isOpen,
  onClose,
  onSaved
}) => {
  const [apiUrl, setApiUrl] = useState('');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string; count?: number } | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiUrl(getStoredApiUrl());
      setTestResult(null);
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTest = async () => {
    if (!apiUrl.trim()) {
      setTestResult({ success: false, message: 'Please enter your cPanel API URL first.' });
      return;
    }
    setTesting(true);
    setTestResult(null);
    const res = await testApiConnection(apiUrl);
    setTesting(false);
    setTestResult(res);
  };

  const handleSave = () => {
    setStoredApiUrl(apiUrl);
    setSavedSuccess(true);
    if (onSaved) onSaved();
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleClear = () => {
    clearStoredApiUrl();
    setApiUrl('');
    setTestResult({ success: true, message: 'Switched back to built-in offline questions bank.' });
    if (onSaved) onSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0E382B] to-[#134837] px-6 py-5 text-white flex items-center justify-between" style={{ backgroundColor: '#0E382B' }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div>
              <h3 className="font-black text-lg text-white leading-tight">cPanel Database Connection</h3>
              <p className="text-white/80 text-xs">Connect unlimited questions & diagrams (1980–2025)</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Status Badge */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex items-center space-x-2.5">
              <span
                className={`w-3 h-3 rounded-full ${
                  apiUrl ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="text-xs font-bold text-slate-700">
                {apiUrl ? 'cPanel Cloud Endpoint Configured' : 'Offline Mode (Built-in Questions)'}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
              {apiUrl ? 'Remote Sync' : 'Offline Bank'}
            </span>
          </div>

          {/* API URL Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              cPanel API Base URL:
            </label>
            <div className="relative">
              <input
                type="url"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                placeholder="https://yourdomain.com/studyplug-api"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:border-[#0E382B] transition"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              The URL pointing to your uploaded <code className="text-[#0E382B] font-bold">studyplug-api/</code> folder on cPanel.
            </p>
          </div>

          {/* Test & Actions */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleTest}
              disabled={testing}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer disabled:opacity-50"
            >
              {testing ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-[#0E382B] border-t-transparent rounded-full animate-spin" />
                  <span>Testing Connection...</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span>Test Connection</span>
                </>
              )}
            </button>

            {apiUrl && (
              <button
                type="button"
                onClick={handleClear}
                className="px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-semibold transition cursor-pointer"
              >
                Reset to Offline
              </button>
            )}
          </div>

          {/* Test Feedback */}
          {testResult && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start space-x-2 ${
                testResult.success
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              <span className="text-sm">{testResult.success ? '✓' : '⚠'}</span>
              <div>
                <p className="font-bold">{testResult.success ? 'Connection Verified' : 'Connection Failed'}</p>
                <p className="mt-0.5 text-[11px] leading-relaxed">{testResult.message}</p>
              </div>
            </div>
          )}

          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold text-center">
              ✓ Server URL saved! Reloading question stream...
            </div>
          )}

          {/* Setup Instructions Helper */}
          <div className="p-3.5 bg-brand-50/50 border border-brand-100 rounded-2xl space-y-1.5 text-xs text-slate-600">
            <div className="font-bold text-[#0E382B] flex items-center space-x-1.5">
              <span>Quick cPanel Guide</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-600 leading-relaxed">
              <li>Open cPanel &gt; <strong>MySQL Database Wizard</strong>, create database & user.</li>
              <li>Open <strong>phpMyAdmin</strong> &gt; Import <code className="text-slate-800 font-bold">backend/studyplug_db.sql</code>.</li>
              <li>Upload the <code className="text-slate-800 font-bold">backend/api/</code> folder to your <code className="text-slate-800 font-bold">public_html</code>.</li>
              <li>Edit <code className="text-slate-800 font-bold">db.php</code> with your DB username & password.</li>
            </ol>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-bold transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-[#0E382B] hover:bg-brand-700 text-white rounded-xl text-xs font-bold shadow-brand-glow transition cursor-pointer"
          >
            Save & Connect
          </button>
        </div>
      </div>
    </div>
  );
};
