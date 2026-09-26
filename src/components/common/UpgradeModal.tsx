import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { buildSelarCheckoutUrl, checkUserEntitlements } from '../../services/billingService';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useApp();

  const [selectedPlan, setSelectedPlan] = useState<'jamb' | 'waec' | 'all'>('jamb');
  const [email, setEmail] = useState<string>(() => {
    try {
      return localStorage.getItem('studyplug_user_email') || '';
    } catch {
      return '';
    }
  });
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [verifyMessage, setVerifyMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (!email || !email.includes('@')) {
      setVerifyMessage({ type: 'error', text: 'Please enter a valid email address so your access can be activated.' });
      return;
    }

    try {
      localStorage.setItem('studyplug_user_email', email.trim().toLowerCase());
    } catch {
      // ignore
    }

    const checkoutUrl = buildSelarCheckoutUrl({
      plan: selectedPlan,
      email: email.trim().toLowerCase()
    });

    setVerifyMessage({
      type: 'info',
      text: 'Opening secure checkout on Selar... After completing payment, return here and click "Check My Access Now".'
    });

    window.open(checkoutUrl, '_blank');
  };

  const handleVerifyAccess = async () => {
    if (!email || !email.includes('@')) {
      setVerifyMessage({ type: 'error', text: 'Please enter your registered email address.' });
      return;
    }

    setIsChecking(true);
    setVerifyMessage(null);

    const res = await checkUserEntitlements(email);
    setIsChecking(false);

    if (res.success && res.is_premium) {
      setVerifyMessage({
        type: 'success',
        text: `🎉 Verified! You have active Premium access (${res.active_plans?.join(', ') || 'UTME'}). Enjoy full access!`
      });
      try {
        localStorage.setItem('studyplug_is_premium', 'true');
      } catch {
        // ignore
      }
    } else {
      setVerifyMessage({
        type: 'info',
        text: 'No completed payment confirmed yet for this email. If you just paid, please allow a moment for Selar to settle the transaction.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-page-enter">
      <div className={`w-full max-w-lg rounded-[24px] border ${isDarkMode ? 'bg-[#0A1A16] border-emerald-800/80 text-[#E6F1EE]' : 'bg-white border-[#E4EAE8] text-[#10201D]'} shadow-2xl flex flex-col max-h-[92vh] overflow-hidden`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#003B32] via-[#004D40] to-[#0A261D] text-white p-5 flex items-center justify-between shrink-0 relative overflow-hidden">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FFD600] text-[#002820]">
                  Official Upgrade
                </span>
                <span className="text-[11px] font-bold text-emerald-200">
                  • 2026 Syllabus Pass
                </span>
              </div>
              <h2 className="text-lg font-black text-white tracking-tight mt-0.5">
                Unlock StudyPlug Premium
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={`flex-1 p-5 overflow-y-auto space-y-4 ${isDarkMode ? 'bg-[#071713]' : 'bg-[#F7F9F8]'}`}>
          {/* Plan Selector */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'jamb', title: 'JAMB / UTME', price: '₦3,500', badge: 'POPULAR' },
              { id: 'waec', title: 'WAEC / SSCE', price: '₦3,500', badge: 'SYLLABUS' },
              { id: 'all', title: 'All-In-One Pass', price: '₦6,000', badge: 'BEST VALUE' }
            ].map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlan(plan.id as any)}
                className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                  selectedPlan === plan.id
                    ? 'border-[#FFD600] bg-[#FFD600]/10 ring-2 ring-[#FFD600]/50'
                    : isDarkMode
                    ? 'border-emerald-900 bg-[#0A1A16] hover:border-emerald-700'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="text-[9.5px] font-black tracking-wider uppercase text-amber-500">
                  {plan.badge}
                </span>
                <div className="my-1">
                  <div className="text-xs font-bold">{plan.title}</div>
                  <div className="text-sm font-black text-[#004D40] dark:text-[#FFD600]">{plan.price}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature List */}
          <div className={`p-3.5 rounded-2xl border space-y-2 text-xs font-medium ${isDarkMode ? 'bg-[#0A1A16] border-emerald-900/60 text-emerald-100' : 'bg-white border-slate-200 text-slate-700'}`}>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Unlimited CBT Practice across all official UTME/WAEC years</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Full step-by-step digital board solutions & AI Tutor walkthroughs</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Offline-ready classroom study notes & syllabus summaries</span>
            </div>
          </div>

          {/* Candidate Email Input */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
              Your Email Address (Access is linked to this email):
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. candidate@gmail.com"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#004D40] ${
                isDarkMode
                  ? 'bg-[#0A1A16] border-emerald-800 text-white'
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            />
          </div>

          {/* Notification Message */}
          {verifyMessage && (
            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                verifyMessage.type === 'success'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-200'
                  : verifyMessage.type === 'error'
                  ? 'bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/60 dark:border-rose-800 dark:text-rose-200'
                  : 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/60 dark:border-amber-800 dark:text-amber-200'
              }`}
            >
              {verifyMessage.text}
            </div>
          )}

          {/* External Platform Trust Badge */}
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 border border-slate-200 dark:border-emerald-900/50 flex items-center justify-between text-[11px] text-slate-600 dark:text-emerald-300">
            <div className="flex items-center space-x-1.5">
              <span>🔒</span>
              <span>Processed by <strong>Selar</strong></span>
            </div>
            <span>Card • Transfer • USSD</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`p-4 border-t flex items-center justify-between gap-2.5 shrink-0 ${isDarkMode ? 'bg-[#0A1A16] border-emerald-900/60' : 'bg-white border-[#E4EAE8]'}`}>
          <button
            type="button"
            onClick={handleVerifyAccess}
            disabled={isChecking}
            className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-emerald-800 text-slate-700 dark:text-emerald-200 hover:bg-slate-100 dark:hover:bg-emerald-900 transition cursor-pointer"
          >
            {isChecking ? 'Checking...' : '🔄 Check Access'}
          </button>

          <button
            type="button"
            onClick={handleCheckout}
            className="flex-1 px-4 py-2.5 rounded-xl text-xs font-black bg-[#004D40] hover:bg-[#003B32] text-white shadow-md transition cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <span>Proceed to Secure Checkout</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
