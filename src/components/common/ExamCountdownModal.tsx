import React, { useState, useEffect } from 'react';

interface ExamCountdownModalProps {
  onClose: () => void;
}

interface ExamDate {
  exam: string;
  fullName: string;
  color: string;
  bgColor: string;
  date: Date;
  description: string;
}

// Official approximate exam dates (update yearly)
const EXAM_DATES: ExamDate[] = [
  {
    exam: 'JAMB',
    fullName: 'JAMB UTME',
    color: '#1565C0',
    bgColor: '#E3F2FD',
    date: new Date('2025-04-18'),
    description: 'Unified Tertiary Matriculation Examination',
  },
  {
    exam: 'WAEC',
    fullName: 'WAEC SSCE',
    color: '#1B5E20',
    bgColor: '#E8F5E9',
    date: new Date('2025-05-12'),
    description: 'West African Senior School Certificate',
  },
  {
    exam: 'NECO',
    fullName: 'NECO SSCE',
    color: '#BF360C',
    bgColor: '#FBE9E7',
    date: new Date('2025-06-09'),
    description: 'National Examinations Council',
  },
  {
    exam: 'BECE',
    fullName: 'BECE JSS3',
    color: '#4A148C',
    bgColor: '#F3E5F5',
    date: new Date('2025-06-23'),
    description: 'Basic Education Certificate Examination',
  },
  {
    exam: 'NABTEB',
    fullName: 'NABTEB NBC/NTC',
    color: '#E65100',
    bgColor: '#FFF3E0',
    date: new Date('2025-05-27'),
    description: 'National Business & Technical Examinations Board',
  },
];

function getCountdown(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, passed: false };
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });
}

const CountBox: React.FC<{ value: number; label: string; color: string }> = ({ value, label, color }) => (
  <div className="flex flex-col items-center">
    <div
      className="w-14 h-14 rounded-[14px] flex items-center justify-center text-white font-black text-2xl shadow-md"
      style={{ backgroundColor: color }}
    >
      {String(value).padStart(2, '0')}
    </div>
    <span className="text-[10px] font-semibold text-[#66736F] mt-1 uppercase tracking-wide">{label}</span>
  </div>
);

export const ExamCountdownModal: React.FC<ExamCountdownModalProps> = ({ onClose }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 flex items-center space-x-3 shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer"
          aria-label="Close"
        >
          ←
        </button>
        <div className="flex-1">
          <h2 className="font-extrabold text-[16px] leading-none">Exam Countdown</h2>
          <p className="text-[11px] text-emerald-300 mt-0.5">Days remaining to your exams</p>
        </div>
        <span className="text-2xl">⏳</span>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        <p className="text-[12px] text-[#66736F] text-center mb-2">
          Tap any exam to set a reminder · Dates update each year
        </p>

        {EXAM_DATES.map((exam) => {
          const cd = getCountdown(exam.date);
          return (
            <div
              key={exam.exam}
              className="rounded-[18px] border border-[#E2E8E6] bg-white shadow-sm overflow-hidden"
            >
              {/* Coloured top bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: exam.color }}
              />
              <div className="px-4 pt-3 pb-4">
                {/* Title row */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span
                      className="text-[11px] font-black px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: exam.color }}
                    >
                      {exam.exam}
                    </span>
                    <p className="text-[13px] font-bold text-[#10201D] mt-1">{exam.fullName}</p>
                    <p className="text-[11px] text-[#66736F]">{exam.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#66736F]">Exam Date</p>
                    <p className="text-[12px] font-bold text-[#10201D]">{formatDate(exam.date)}</p>
                  </div>
                </div>

                {cd.passed ? (
                  <div
                    className="rounded-[12px] py-3 text-center text-[13px] font-bold"
                    style={{ backgroundColor: exam.bgColor, color: exam.color }}
                  >
                    ✅ This exam has passed — check next year's date
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <CountBox value={cd.days} label="Days" color={exam.color} />
                    <span className="text-[#66736F] font-black text-xl mb-4">:</span>
                    <CountBox value={cd.hours} label="Hours" color={exam.color} />
                    <span className="text-[#66736F] font-black text-xl mb-4">:</span>
                    <CountBox value={cd.minutes} label="Mins" color={exam.color} />
                    <span className="text-[#66736F] font-black text-xl mb-4">:</span>
                    <CountBox value={cd.seconds} label="Secs" color={exam.color} />
                  </div>
                )}

                {!cd.passed && (
                  <p
                    className="text-center text-[11px] font-semibold mt-2"
                    style={{ color: exam.color }}
                  >
                    {cd.days} day{cd.days !== 1 ? 's' : ''} left to prepare!
                  </p>
                )}
              </div>
            </div>
          );
        })}

        {/* Motivational Footer */}
        <div className="rounded-[16px] bg-[#001028] text-white px-4 py-4 text-center">
          <p className="font-black text-[15px]">Every Day Counts! 💪</p>
          <p className="text-[12px] text-emerald-200 mt-1">
            Study at least 2 hours daily. Consistent practice beats last-minute cramming.
          </p>
        </div>
      </div>
    </div>
  );
};
