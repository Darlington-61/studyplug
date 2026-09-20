import React from 'react';

interface BoardExplanationProps {
  explanation: string;
  subject?: string;
  topic?: string;
}

export interface ChalkboardContainerProps {
  subject?: string;
  topic?: string;
  sectionTitle?: string;
  subtopic?: string;
  sectionBadge?: string;
  children: React.ReactNode;
  textScale?: number;
}

export const ChalkboardContainer: React.FC<ChalkboardContainerProps> = ({
  subject = 'Physics',
  topic = 'Motion & Graphs',
  sectionTitle,
  subtopic,
  sectionBadge,
  children,
  textScale = 1
}) => {
  const subLower = subject.toLowerCase();
  let subjectBadgeColor = '#00A3FF'; // Physics Blue default
  let subjectIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)"/>
    </svg>
  );

  if (subLower.includes('math')) {
    subjectBadgeColor = '#10B981';
    subjectIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <circle cx="8" cy="11" r="1" fill="currentColor"/>
        <circle cx="12" cy="11" r="1" fill="currentColor"/>
        <circle cx="16" cy="11" r="1" fill="currentColor"/>
        <circle cx="8" cy="15" r="1" fill="currentColor"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
        <circle cx="16" cy="15" r="1" fill="currentColor"/>
      </svg>
    );
  } else if (subLower.includes('chem')) {
    subjectBadgeColor = '#A855F7';
    subjectIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
        <path d="M10 2v7.31L4.15 19.3A2 2 0 005.86 22h12.28a2 2 0 001.71-2.7L14 9.31V2"/>
      </svg>
    );
  } else if (subLower.includes('bio')) {
    subjectBadgeColor = '#F97316';
    subjectIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
        <path d="M4.5 16.5c3-3 6-3 9 0s6 3 9 0M4.5 7.5c3 3 6 3 9 0s6-3 9 0"/>
      </svg>
    );
  } else if (subLower.includes('english')) {
    subjectBadgeColor = '#EF4444';
    subjectIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    );
  }

  return (
    <div
      style={{
        border: '12px solid #C4823F',
        outline: '3px solid #75441A',
        borderRadius: '24px',
        background: 'radial-gradient(ellipse at 50% 35%, #134633 0%, #0C2E20 70%, #092318 100%)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), inset 0 0 25px rgba(0, 0, 0, 0.75)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        margin: '16px 0',
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      }}
      className="select-text transition-all"
    >
      {/* Top Banner: StudyPlug Official Brand Header */}
      <div
        style={{
          borderBottom: '2px dashed rgba(255, 255, 255, 0.25)',
          padding: '16px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          background: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Left: Exam Checkmarks & Subject Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#E2F0EA' }}>
            <span>JAMB ✓</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span>WAEC ✓</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span>NECO ✓</span>
          </div>

          {/* Subject Circular Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '3px 10px',
            }}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: subjectBadgeColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: `0 0 10px ${subjectBadgeColor}88`,
              }}
            >
              {subjectIcon}
            </span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>
              {subject}
            </span>
          </div>
        </div>

        {/* Center: StudyPlug Logo & Graduation Cap */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 40 32" style={{ width: '30px', height: '24px' }}>
              <polygon points="20,2 38,10 20,18 2,10" fill="#FFFFFF" />
              <path d="M8 13.5 L8 22 C 8 26, 32 26, 32 22 L 32 13.5" fill="#FFFFFF" />
              <polygon points="17,8 26,13 17,18" fill="#FFCC00" />
            </svg>
            <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>
              <span style={{ color: '#FFFFFF' }}>Study</span>
              <span style={{ color: '#FFCC00' }}>Plug</span>
            </span>
          </div>
          <span
            style={{
              fontSize: '10.5px',
              color: '#F4F4F4',
              fontStyle: 'italic',
              marginTop: '1px',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            Learn Today. Ace Tomorrow.
          </span>
          <div
            style={{
              width: '110px',
              height: '3px',
              backgroundColor: '#FFCC00',
              borderRadius: '2px',
              marginTop: '2px',
            }}
          />
        </div>

        {/* Right: Section Badge & "Focus Study Succeed" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {sectionBadge && (
            <span
              style={{
                backgroundColor: 'rgba(255, 204, 0, 0.15)',
                border: '1px solid #FFCC00',
                borderRadius: '8px',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 900,
                color: '#FFCC00',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              {sectionBadge}
            </span>
          )}
          <div
            style={{
              border: '2px solid #FFCC00',
              borderRadius: '8px',
              padding: '4px 10px',
              backgroundColor: 'rgba(255, 204, 0, 0.08)',
              textAlign: 'center',
              fontSize: '10.5px',
              fontWeight: 800,
              color: '#FFCC00',
              lineHeight: '1.3',
            }}
          >
            <div>Focus • Study</div>
            <div>Succeed ☺</div>
          </div>
        </div>
      </div>

      {/* Main Board Working Area */}
      <div
        style={{
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          fontSize: `${textScale}rem`,
          lineHeight: '1.7',
        }}
      >
        {/* Board Topic Sub-header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: 1 }}>
            <span style={{ color: '#FFCC00', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
              Classroom Blackboard ✏️
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
            <span style={{ color: '#E2F0EA', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {topic}{sectionTitle && sectionTitle !== topic ? ` — ${sectionTitle}` : ''}
            </span>
          </div>

          {subtopic && subtopic !== sectionTitle && subtopic !== topic && (
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '2px 10px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#A7F3D0',
                flexShrink: 0
              }}
            >
              {subtopic}
            </span>
          )}
        </div>

        {children}
      </div>

      {/* Bottom Board Footer: Brand Pillars */}
      <div
        style={{
          borderTop: '2px dashed rgba(255, 255, 255, 0.25)',
          padding: '12px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          background: 'rgba(0, 0, 0, 0.25)',
          fontSize: '11.5px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#D4EADF', fontWeight: 700 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>▷</span> Video Lessons
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>📄</span> Past Questions
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>💡</span> Smart Notes
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>📈</span> Better Results
          </span>
        </div>

        <div style={{ color: '#FFCC00', fontWeight: 900, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>You Can Do It! ★</span>
        </div>
      </div>

      {/* Wooden Chalk Tray with Chalk Sticks & Blackboard Duster */}
      <div
        style={{
          background: 'linear-gradient(to bottom, #8C4E1E, #5E3211)',
          height: '14px',
          borderTop: '2px solid #43220B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          position: 'relative',
        }}
      >
        {/* White Chalk */}
        <div style={{ width: '28px', height: '6px', backgroundColor: '#FFFFFF', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
        {/* Yellow Chalk */}
        <div style={{ width: '24px', height: '6px', backgroundColor: '#FFCC00', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
        {/* Blue Chalk */}
        <div style={{ width: '20px', height: '6px', backgroundColor: '#60A5FA', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
        {/* Wooden Blackboard Duster / Eraser */}
        <div style={{ width: '40px', height: '8px', backgroundColor: '#3E2723', borderRadius: '2px', border: '1px solid #1E120D', boxShadow: '0 1px 3px rgba(0,0,0,0.6)' }} />
      </div>
    </div>
  );
};

export const BoardExplanation: React.FC<BoardExplanationProps> = ({
  explanation,
  subject = 'Physics',
  topic = 'Motion & Graphs'
}) => {
  // Strip exam tip if already appended, to keep board focused on derivation
  const cleanExp = explanation.split('💡 Exam Tip:')[0].trim();
  const lines = cleanExp.split('\n').map((l) => l.trim()).filter(Boolean);

  return (
    <ChalkboardContainer subject={subject} topic={topic}>

        {lines.map((line, idx) => {
          const lower = line.toLowerCase();
          const isFormula =
            lower.includes('formula') ||
            lower.includes('using') ||
            lower.includes('area =') ||
            lower.includes('by hooke') ||
            lower.includes('by snell') ||
            lower.includes('1/f =') ||
            lower.includes('coulomb') ||
            lower.includes('h =') ||
            lower.includes('v =');

          const isFinal =
            lower.includes('therefore') ||
            lower.includes('thus') ||
            line.includes('⇒') ||
            lower.includes('total q =') ||
            lower.includes('total distance') ||
            lower.includes('efficiency η');

          // Boxed Final Answer in StudyPlug Yellow Chalk Box
          if (isFinal) {
            return (
              <div
                key={idx}
                style={{
                  border: '2px solid #FFCC00',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 204, 0, 0.12)',
                  color: '#FFEA79',
                  fontWeight: 800,
                  fontSize: '16px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                  boxShadow: '0 0 20px rgba(255, 204, 0, 0.15)',
                }}
              >
                <span>{line}</span>
                <span
                  style={{
                    backgroundColor: '#FFCC00',
                    color: '#0D3324',
                    fontWeight: 900,
                    fontSize: '12px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Final Key ✓
                </span>
              </div>
            );
          }

          // Formula in Yellow Chalk Frame
          if (isFormula) {
            return (
              <div
                key={idx}
                style={{
                  borderLeft: '4px solid #FFCC00',
                  backgroundColor: 'rgba(255, 204, 0, 0.08)',
                  color: '#FFEAA7',
                  fontWeight: 700,
                  fontSize: '15.5px',
                  padding: '10px 16px',
                  borderRadius: '0 10px 10px 0',
                }}
              >
                <span
                  style={{
                    color: '#FFCC00',
                    fontSize: '11px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  Working Formula / Theorem:
                </span>
                <span>{line}</span>
              </div>
            );
          }

          // Standard Step in Chalk White
          return (
            <div
              key={idx}
              style={{
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: '15.5px',
              }}
            >
              {line}
            </div>
          );
        })}
    </ChalkboardContainer>
  );
};
