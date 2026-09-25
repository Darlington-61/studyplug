import React from 'react';

export type ResourceType = 'pdf' | 'video' | 'textbook' | 'diagram' | 'formula' | 'questions';

interface ResourceCardProps {
  type: ResourceType;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  type,
  title,
  subtitle,
  onClick
}) => {
  const getResourceMeta = () => {
    switch (type) {
      case 'pdf':
        return {
          bg: 'bg-red-50',
          color: '#E53935',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          )
        };
      case 'video':
        return {
          bg: 'bg-purple-50',
          color: '#7E3FC7',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )
        };
      case 'textbook':
        return {
          bg: 'bg-blue-50',
          color: '#1976D2',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          )
        };
      case 'diagram':
        return {
          bg: 'bg-emerald-50',
          color: '#16A34A',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          )
        };
      case 'formula':
        return {
          bg: 'bg-teal-50',
          color: '#008C95',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="16" y2="18" />
            </svg>
          )
        };
      case 'questions':
      default:
        return {
          bg: 'bg-sky-50',
          color: '#2563EB',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )
        };
    }
  };

  const meta = getResourceMeta();

  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-[14px] p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 flex items-center justify-between cursor-pointer group active:scale-[0.99]"
    >
      <div className="flex items-center space-x-3.5">
        <div
          className={`w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 ${meta.bg}`}
          style={{ color: meta.color }}
        >
          {meta.icon}
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-[14px] text-[#10201D] leading-snug group-hover:text-[#004D40] transition">
            {title}
          </h4>
          <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8A9692"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 group-hover:text-[#10201D] group-hover:translate-x-0.5 transition"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
};
