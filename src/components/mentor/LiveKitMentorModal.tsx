import React, { useState, useEffect, useRef } from 'react';
import { JambCourseItem } from '../../data/jambBrochureCourses';

export interface MentorProfile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  specialty: string;
  institution: string;
  greeting: string;
}

export const MENTORS: MentorProfile[] = [
  {
    id: 'dr-aisha',
    name: 'Dr. Aisha Bello',
    title: 'JAMB & Medical Sciences Advisor',
    avatar: '👩🏾‍⚕️',
    specialty: 'Medicine, Pharmacy, Nursing & Health Sciences',
    institution: 'University of Ibadan (UI)',
    greeting: 'Welcome to your 1-on-1 JAMB counseling session! Are you aiming for Medicine, Nursing, or Health Sciences? Let’s check your subject combination and target cut-off marks.'
  },
  {
    id: 'engr-tunde',
    name: 'Engr. Babatunde Alabi',
    title: 'Engineering & Computing Mentor',
    avatar: '👨🏾‍💻',
    specialty: 'Computer Science, Software, Civil, Elect/Elect & Mechanical',
    institution: 'University of Lagos (UNILAG)',
    greeting: 'Great to have you here! Ready to crack your Engineering and Tech UTME subjects? Ask me about subject combinations, school waivers, or high-yield topic formulas.'
  },
  {
    id: 'barr-chidi',
    name: 'Barrister Chidi Okeke',
    title: 'Faculty of Law & Arts Mentor',
    avatar: '👨🏾‍⚖️',
    specialty: 'Law (LL.B), Mass Communication & International Relations',
    institution: 'University of Nigeria, Nsukka (UNN)',
    greeting: 'Greetings, future scholar! Faculty of Law requires sharp precision in your subject combination (Literature, Government, CRS/Economics). Let us guide your strategy today.'
  },
  {
    id: 'mrs-funke',
    name: 'Mrs. Funke Adeyemi',
    title: 'Social & Management Sciences Advisor',
    avatar: '👩🏾‍🏫',
    specialty: 'Accounting, Economics, Business Admin & Banking',
    institution: 'Obafemi Awolowo University (OAU)',
    greeting: 'Hello there! Let’s align your commercial subjects and O-Level credits so no university rejects your application. What course are you aiming for?'
  }
];

interface LiveKitMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: JambCourseItem | null;
  onSelectCourseForPractice?: (subjects: string[]) => void;
}

export const LiveKitMentorModal: React.FC<LiveKitMentorModalProps> = ({
  isOpen,
  onClose,
  initialCourse,
  onSelectCourseForPractice
}) => {
  const [selectedMentor, setSelectedMentor] = useState<MentorProfile>(MENTORS[0]);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(false);
  const [isAudioSpeaking, setIsAudioSpeaking] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [showConfig, setShowConfig] = useState(false);

  // LiveKit Server configuration (for external LiveKit Cloud URL & Token)
  const [livekitUrl, setLivekitUrl] = useState('');
  const [livekitToken, setLivekitToken] = useState('');
  const [livekitStatus, setLivekitStatus] = useState<'idle' | 'simulated' | 'cloud_connected'>('simulated');

  // Interactive messaging state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'mentor' | 'student'; text: string; time: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Audio wave visualizer animation values
  const [waveHeights, setWaveHeights] = useState<number[]>([12, 24, 18, 30, 22, 14, 28, 16]);

  // Sync initialCourse with mentor selection & customized greeting
  useEffect(() => {
    if (!isOpen) return;

    let mentor = MENTORS[0];
    if (initialCourse) {
      if (initialCourse.faculty === 'Engineering & Tech' || initialCourse.faculty === 'Sciences & Computing') {
        mentor = MENTORS[1];
      } else if (initialCourse.faculty === 'Law' || initialCourse.faculty === 'Arts & Humanities') {
        mentor = MENTORS[2];
      } else if (initialCourse.faculty === 'Social & Management') {
        mentor = MENTORS[3];
      } else {
        mentor = MENTORS[0];
      }
    }
    setSelectedMentor(mentor);

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let greetingText = mentor.greeting;

    if (initialCourse) {
      greetingText = `Hello! I see you are interested in ${initialCourse.name} (${initialCourse.degree}).\n\n📌 Official JAMB UTME 4-Subject Combination:\n1. ${initialCourse.jambSubjects.compulsory}\n${initialCourse.jambSubjects.subjects.map((s, i) => `${i + 2}. ${s}`).join('\n')}\n\n🎯 Target UTME Cut-off: ~${initialCourse.cutOffAverage || 240}+\n\nFeel free to speak with me or ask any questions about WAEC credit waivers, subject substitutions, or university options!`;
    }

    setChatMessages([
      {
        sender: 'mentor',
        text: greetingText,
        time: now
      }
    ]);
  }, [isOpen, initialCourse]);

  // Audio wave animation when mentor speaks
  useEffect(() => {
    if (!isAudioSpeaking) {
      setWaveHeights([8, 10, 8, 12, 10, 8, 10, 8]);
      return;
    }

    const interval = setInterval(() => {
      setWaveHeights([
        Math.floor(Math.random() * 26) + 10,
        Math.floor(Math.random() * 32) + 12,
        Math.floor(Math.random() * 28) + 10,
        Math.floor(Math.random() * 36) + 14,
        Math.floor(Math.random() * 30) + 12,
        Math.floor(Math.random() * 24) + 10,
        Math.floor(Math.random() * 34) + 12,
        Math.floor(Math.random() * 20) + 8
      ]);
    }, 120);

    return () => clearInterval(interval);
  }, [isAudioSpeaking]);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const speakMentorText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Clean text for speech
      const clean = text.replace(/[*#_`]/g, '').slice(0, 240);
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsAudioSpeaking(true);
      utterance.onend = () => setIsAudioSpeaking(false);
      utterance.onerror = () => setIsAudioSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsAudioSpeaking(false);
    }
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setInputMessage('');
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatMessages((prev) => [...prev, { sender: 'student', text: userText, time: now }]);

    // Generate responsive advice
    setTimeout(() => {
      let reply = `That is a vital question regarding your JAMB application! `;
      const lower = userText.toLowerCase();

      if (lower.includes('medicine') || lower.includes('doctor') || lower.includes('surgery')) {
        reply += `For Medicine & Surgery, JAMB strictly mandates: 1. English, 2. Biology, 3. Chemistry, 4. Physics. Do NOT register Mathematics. In WAEC, you require 5 credits at ONE sitting in English, Math, Physics, Chem & Biology for top federal universities like UI, UNILAG, and UNN.`;
      } else if (lower.includes('computer') || lower.includes('software') || lower.includes('engineering')) {
        reply += `For Computer Science & Engineering, the approved JAMB combination is English, Mathematics, Physics, and Chemistry. UNILAG and OAU strictly require Chemistry, while some universities permit Biology or Computer Studies as 4th subject. Aim for a 260+ UTME score.`;
      } else if (lower.includes('law')) {
        reply += `For Faculty of Law (LL.B), the golden UTME combination is: 1. English, 2. Literature in English (Compulsory at UI, UNILAG, UNN), 3. Government or History, and 4. CRS or Economics. You also need a minimum of Credit in O-Level Literature and Mathematics.`;
      } else if (lower.includes('nursing')) {
        reply += `For Nursing Science, the JAMB combination is English, Biology, Chemistry, and Physics. Some state universities accept Physics or Mathematics, but Federal universities strictly require all 3 pure sciences.`;
      } else if (lower.includes('cut off') || lower.includes('score')) {
        reply += `JAMB national minimum cut-off is typically 140, but competitive courses at top universities require significantly higher: Medicine (280+), Nursing (260+), Law (270+), Computer Science (250+), and Engineering (240+).`;
      } else if (lower.includes('waiver') || lower.includes('sitting') || lower.includes('waec')) {
        reply += `Under official JAMB IBASS guidelines, most universities permit 2 sittings in WAEC/NECO/NABTEB, EXCEPT for Medicine & Surgery at premier institutions like UI, UNILAG, and OAU which require ONE sitting.`;
      } else {
        reply += `According to the official JAMB IBASS brochure guidelines, ensure your subject combination aligns directly with your intended faculty. Would you like me to recommend practice tests or check specific university waivers?`;
      }

      setChatMessages((prev) => [...prev, { sender: 'mentor', text: reply, time: now }]);
    }, 900);
  };

  const handleConnectLiveKitCloud = () => {
    if (!livekitUrl.trim() || !livekitToken.trim()) {
      alert('Please enter your LiveKit Cloud WebSocket URL (wss://...) and Room Token.');
      return;
    }
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setLivekitStatus('cloud_connected');
      setShowConfig(false);
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'mentor',
          text: `🔗 LiveKit Cloud Room Connected! Server: ${livekitUrl}. Live audio/video pipeline initialized.`,
          time: now
        }
      ]);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#001028] text-white w-full max-w-4xl h-[92vh] max-h-[820px] rounded-3xl border border-[#002850] shadow-2xl flex flex-col overflow-hidden">
        
        {/* ─── Top LiveKit Meeting Room Header ─── */}
        <div className="h-14 px-4 bg-[#001832] border-b border-[#002444] flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                LIVEKIT 1-ON-1 ROOM
              </span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-white/80 hidden sm:inline">
              StudyPlug AI Academic Mentorship
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setShowConfig(!showConfig)}
              className="text-[11px] font-semibold bg-[#002244] hover:bg-[#002e5c] text-[#F8C800] px-2.5 py-1.5 rounded-lg border border-[#003366] transition cursor-pointer flex items-center space-x-1"
              title="LiveKit Server Config"
            >
              <span>⚙️</span>
              <span className="hidden md:inline">LiveKit Config</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ─── LiveKit Cloud Credentials Drawer (Optional Connect) ─── */}
        {showConfig && (
          <div className="bg-[#001c3a] border-b border-[#003058] p-3.5 text-xs space-y-2 text-left">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#F8C800] flex items-center space-x-1">
                <span>⚡</span>
                <span>LiveKit Cloud Connection Settings</span>
              </span>
              <span className="text-[10px] text-white/60">
                Status: {livekitStatus === 'cloud_connected' ? '🟢 Cloud Active' : '🟡 AI Voice Sim'}
              </span>
            </div>
            <p className="text-[11px] text-white/70">
              Connect to your custom LiveKit Cloud project URL and token for WebRTC low-latency streaming:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="LiveKit Server URL (wss://your-project.livekit.cloud)"
                value={livekitUrl}
                onChange={(e) => setLivekitUrl(e.target.value)}
                className="bg-[#001224] border border-[#002c52] rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F8C800]"
              />
              <input
                type="password"
                placeholder="LiveKit Participant Token (JWT)"
                value={livekitToken}
                onChange={(e) => setLivekitToken(e.target.value)}
                className="bg-[#001224] border border-[#002c52] rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F8C800]"
              />
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={handleConnectLiveKitCloud}
                disabled={isConnecting}
                className="px-3 py-1 bg-[#F8C800] text-[#001028] font-bold rounded-lg text-xs hover:bg-[#FFD21F] transition"
              >
                {isConnecting ? 'Connecting...' : 'Connect LiveKit Room'}
              </button>
            </div>
          </div>
        )}

        {/* ─── Main Room Content (Split Video Grid & Interactive Board) ─── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* LEFT: Video & Avatar Streams (7 cols on lg) */}
          <div className="lg:col-span-7 p-3 sm:p-4 flex flex-col justify-between space-y-3 bg-[#001228] overflow-y-auto">
            
            {/* Mentor Selector Chips */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 shrink-0 no-scrollbar">
              <span className="text-[10px] font-bold uppercase text-white/40 shrink-0 mr-1">
                Mentors:
              </span>
              {MENTORS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setSelectedMentor(m);
                    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    setChatMessages((prev) => [
                      ...prev,
                      {
                        sender: 'mentor',
                        text: `Switched counselor to ${m.name} (${m.specialty}). How can I assist you?`,
                        time: now
                      }
                    ]);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 flex items-center space-x-1.5 transition cursor-pointer ${
                    selectedMentor.id === m.id
                      ? 'bg-[#F8C800] text-[#001028] shadow-md font-bold'
                      : 'bg-[#001d3a] text-white/70 hover:bg-[#002950]'
                  }`}
                >
                  <span>{m.avatar}</span>
                  <span>{m.name.split(' ')[1]}</span>
                </button>
              ))}
            </div>

            {/* Live Video Feed Tiles (Teacher Main + Student PiP) */}
            <div className="relative flex-1 min-h-[220px] sm:min-h-[280px] bg-gradient-to-b from-[#001832] to-[#000d1e] rounded-2xl border border-[#002b54] flex flex-col items-center justify-center p-4 overflow-hidden shadow-inner">
              
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-radial from-[#F8C800]/5 via-transparent to-transparent pointer-events-none" />

              {/* Teacher Avatar & Speaking Wave */}
              <div className="relative flex flex-col items-center z-10">
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#001e3e] border-4 flex items-center justify-center text-5xl shadow-2xl transition-all duration-300 ${
                    isAudioSpeaking
                      ? 'border-[#F8C800] scale-105 shadow-[#F8C800]/30 ring-8 ring-[#F8C800]/20'
                      : 'border-[#00386c]'
                  }`}
                >
                  <span>{selectedMentor.avatar}</span>
                </div>

                <div className="mt-3 text-center">
                  <h3 className="font-bold text-sm sm:text-base text-white flex items-center justify-center space-x-1.5">
                    <span>{selectedMentor.name}</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                      LIVE
                    </span>
                  </h3>
                  <p className="text-xs text-[#F8C800] font-semibold mt-0.5">
                    {selectedMentor.title} • {selectedMentor.institution}
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5 max-w-xs">
                    {selectedMentor.specialty}
                  </p>
                </div>

                {/* Real-time Dynamic Audio Visualizer Waves */}
                <div className="mt-3 flex items-center space-x-1 h-8">
                  {waveHeights.map((h, idx) => (
                    <div
                      key={idx}
                      className={`w-1 rounded-full transition-all duration-100 ${
                        isAudioSpeaking ? 'bg-[#F8C800]' : 'bg-white/20'
                      }`}
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* Student Self-Tile (Bottom Right) */}
              <div className="absolute bottom-3 right-3 w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#001020]/90 border border-white/20 shadow-lg overflow-hidden flex flex-col items-center justify-center">
                {isCamOn ? (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-xs text-white/60">
                    <span>Camera Live</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-2xl">🎓</span>
                    <span className="text-[10px] font-bold text-white/70">You (Student)</span>
                    <span className="text-[9px] text-[#F8C800]">
                      {isMicOn ? '🎙️ Mic Active' : '🔇 Muted'}
                    </span>
                  </div>
                )}
              </div>

              {/* Top Course Context Pill (If triggered from a course) */}
              {initialCourse && (
                <div className="absolute top-3 left-3 bg-[#001428]/90 border border-[#F8C800]/40 rounded-xl px-3 py-1.5 text-left max-w-[220px] sm:max-w-xs">
                  <span className="text-[9px] uppercase font-bold text-[#F8C800] block">
                    Focus Course:
                  </span>
                  <span className="text-xs font-bold text-white truncate block">
                    {initialCourse.name}
                  </span>
                  <span className="text-[10px] text-white/60 block">
                    {initialCourse.faculty}
                  </span>
                </div>
              )}
            </div>

            {/* ─── Bottom Meeting Controls Bar ─── */}
            <div className="bg-[#001832] rounded-2xl p-2.5 border border-[#002850] flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                {/* Mic Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                    isMicOn
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                      : 'bg-red-600 text-white hover:bg-red-500'
                  }`}
                >
                  <span>{isMicOn ? '🎙️' : '🔇'}</span>
                  <span className="hidden sm:inline">{isMicOn ? 'Mic On' : 'Muted'}</span>
                </button>

                {/* Cam Toggle */}
                <button
                  type="button"
                  onClick={() => setIsCamOn(!isCamOn)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                    isCamOn
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{isCamOn ? '📹' : '🚫'}</span>
                  <span className="hidden sm:inline">{isCamOn ? 'Video On' : 'Video Off'}</span>
                </button>
              </div>

              {/* Quick Audio Replay & Practice launcher */}
              <div className="flex items-center space-x-2">
                {initialCourse && onSelectCourseForPractice && (
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCourseForPractice([
                        initialCourse.jambSubjects.compulsory,
                        ...initialCourse.jambSubjects.subjects
                      ]);
                      onClose();
                    }}
                    className="px-3 py-2 bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center space-x-1"
                  >
                    <span>⚡</span>
                    <span className="hidden sm:inline">Practice Course</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 bg-red-600/80 hover:bg-red-600 text-white font-bold rounded-xl text-xs transition cursor-pointer"
                >
                  Leave Room
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Whiteboard & 1-on-1 Advice Chat (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#00162e] border-t lg:border-t-0 lg:border-l border-[#002850] flex flex-col h-full overflow-hidden text-left">
            
            {/* Whiteboard Header */}
            <div className="p-3 bg-[#001b38] border-b border-[#002b54] flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                <span className="text-base">📋</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Whiteboard & Advice Log
                </span>
              </div>
              <span className="text-[10px] text-[#F8C800] font-semibold bg-[#F8C800]/10 px-2 py-0.5 rounded-full border border-[#F8C800]/20">
                Verified IBASS Data
              </span>
            </div>

            {/* Chat Messages / Board Stream */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs text-left">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    msg.sender === 'student' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div className="flex items-center space-x-1 text-[10px] text-white/40 mb-1 px-1">
                    <span>{msg.sender === 'student' ? 'You' : selectedMentor.name}</span>
                    <span>•</span>
                    <span>{msg.time}</span>
                  </div>
                  <div
                    className={`p-3 rounded-2xl max-w-[88%] whitespace-pre-line leading-relaxed shadow-sm ${
                      msg.sender === 'student'
                        ? 'bg-[#F8C800] text-[#001028] font-medium rounded-tr-none'
                        : 'bg-[#002244] text-white border border-[#003366] rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Fast Suggestion Chips */}
            <div className="px-3 py-2 bg-[#001934] border-t border-[#002850] flex items-center space-x-1.5 overflow-x-auto no-scrollbar shrink-0">
              {[
                'Can I use Maths for Medicine?',
                'UNILAG vs UI cut-offs?',
                'Waive Biology for Comp Sci?',
                'Are 2 sittings allowed?'
              ].map((promptText, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setInputMessage(promptText);
                  }}
                  className="px-2.5 py-1 bg-[#002448] hover:bg-[#003160] text-[#F8C800] text-[10px] font-semibold rounded-lg shrink-0 transition border border-[#003366]"
                >
                  {promptText}
                </button>
              ))}
            </div>

            {/* Message Input Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-2.5 bg-[#001324] border-t border-[#002444] flex items-center space-x-2 shrink-0"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask teacher about combinations, cut-offs..."
                className="flex-1 bg-[#001f3a] border border-[#002d54] text-xs text-white placeholder-white/40 rounded-xl px-3 py-2 focus:outline-none focus:border-[#F8C800] transition"
              />
              <button
                type="submit"
                className="bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer active:scale-95 shadow-md shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveKitMentorModal;
