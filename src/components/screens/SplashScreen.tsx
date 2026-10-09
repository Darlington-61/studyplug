import React from 'react';
import { useApp } from '../../context/AppContext';
import { STUDYPLUG_LOGO } from '../../assets/studyPlugLogo';

export const SplashScreen: React.FC = () => {
  const { setActiveView } = useApp();

  return (
    <div className="min-h-screen w-full bg-[#001028] text-white flex flex-col justify-between p-6 sm:p-8 select-none font-sans relative">
      {/* Top Bar with Skip */}
      <div className="w-full flex items-center justify-end z-10">
        <button
          type="button"
          onClick={() => setActiveView('dashboard')}
          className="text-xs font-semibold text-[#8090A0] hover:text-[#F8C800] transition cursor-pointer px-3 py-1.5"
        >
          Skip
        </button>
      </div>

      {/* Main Center Stage: Official Logo as the Main Visual Element */}
      <div className="my-auto flex flex-col items-center justify-center text-center px-4 max-w-md mx-auto z-10 w-full space-y-6">
        {/* Official StudyPlug Logo - Centered with Generous Breathing Space */}
        <div className="w-full max-w-[320px] sm:max-w-[360px] flex items-center justify-center py-6">
          <img
            src={STUDYPLUG_LOGO}
            alt="StudyPlug"
            className="w-full h-auto object-contain drop-shadow-md select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="w-full max-w-sm mx-auto z-10 pb-4 sm:pb-6 space-y-3">
        <button
          type="button"
          onClick={() => setActiveView('onboarding')}
          className="w-full py-4 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-sm tracking-wide shadow-xl flex items-center justify-center space-x-2 transition cursor-pointer"
        >
          <span>Get Started</span>
          <span className="text-base font-black">→</span>
        </button>

        <div className="text-center text-[11px] text-[#607080] font-medium pt-1">
          StudyPlug Examination Engine • 2026 Edition
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
