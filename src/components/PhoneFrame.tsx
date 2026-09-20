import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  statusBarTheme?: 'light' | 'dark'; // 'light' means dark text on light bg; 'dark' means white text on dark bg
  className?: string;
  phoneLabel?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  statusBarTheme = 'light',
  className = '',
  phoneLabel
}) => {
  const isDarkStatusBar = statusBarTheme === 'dark';

  return (
    <div className="flex flex-col items-center">
      {phoneLabel && (
        <div className="mb-3 font-semibold text-xs tracking-wider uppercase text-slate-400">
          {phoneLabel}
        </div>
      )}

      {/* Outer Phone Shell */}
      <div
        className={`relative w-[365px] h-[780px] bg-white rounded-[44px] shadow-phone ring-1 ring-slate-900/10 overflow-hidden flex flex-col select-none transition-all duration-300 ${className}`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18), 0 0 0 10px #1E2028, 0 0 0 12px #393C4A, 0 30px 60px rgba(0, 0, 0, 0.12)'
        }}
      >
        {/* iOS Status Bar */}
        <div
          className={`relative z-30 px-6 pt-3 pb-1 flex items-center justify-between text-[13px] font-semibold tracking-tight transition-colors duration-200 ${
            isDarkStatusBar ? 'text-white bg-[#0E382B]' : 'text-slate-900 bg-transparent'
          }`}
        >
          {/* Time */}
          <span className="font-semibold tracking-tight text-[13.5px] ml-1">9:41</span>

          {/* Right Status Icons (Signal, Wifi, Battery) */}
          <div className="flex items-center space-x-1.5 mr-1">
            {/* Cellular Signal Bars */}
            <svg viewBox="0 0 18 12" fill="currentColor" className="w-[17px] h-[11px]">
              <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
              <rect x="4" y="5.5" width="2.5" height="6.5" rx="0.5" />
              <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
              <rect x="12" y="0.5" width="2.5" height="11.5" rx="0.5" />
            </svg>

            {/* WiFi Icon */}
            <svg viewBox="0 0 16 12" fill="currentColor" className="w-[15px] h-[11px]">
              <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
              <path d="M4.5 7.5a5 5 0 0 1 7 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              <path d="M2 5a8.5 8.5 0 0 1 12 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            </svg>

            {/* Battery Icon */}
            <div className="flex items-center">
              <div
                className={`w-[22px] h-[11.5px] rounded-[3.5px] border-[1.2px] p-[1.5px] flex items-center ${
                  isDarkStatusBar ? 'border-white' : 'border-slate-800'
                }`}
              >
                <div
                  className={`h-full w-[85%] rounded-[1.5px] ${
                    isDarkStatusBar ? 'bg-white' : 'bg-slate-800'
                  }`}
                />
              </div>
              <div
                className={`w-[1px] h-[4px] rounded-r-[1px] ml-[1px] ${
                  isDarkStatusBar ? 'bg-white' : 'bg-slate-800'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Screen Content Container */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col bg-[#F8F9FD]">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="relative z-30 pt-1.5 pb-2 flex justify-center bg-transparent pointer-events-none">
          <div className="w-[134px] h-[4.5px] bg-slate-900/80 rounded-full" />
        </div>
      </div>
    </div>
  );
};
