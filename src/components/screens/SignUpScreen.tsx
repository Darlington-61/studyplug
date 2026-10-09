import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';

export const SignUpScreen: React.FC = () => {
  const { setActiveView, goBack } = useApp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveView('dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] text-[#001028] flex flex-col font-sans select-none">
      {/* Dark Navy Header (#001028) */}
      <div className="w-full bg-[#001028] text-white pt-6 pb-10 px-6 text-center space-y-2 relative">
        <button
          type="button"
          onClick={() => goBack()}
          className="absolute left-4 top-5 flex items-center space-x-1 text-xs font-semibold text-white/90 hover:text-[#F8C800] transition cursor-pointer"
        >
          <span className="text-base font-bold">←</span>
          <span>Back</span>
        </button>
        <div className="flex justify-center mb-2">
          <BrandLogo size="md" />
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white">
          Create Your Account
        </h1>
        <p className="text-xs text-[#607080]">
          Join thousands of students on StudyPlug.
        </p>
      </div>

      {/* Main White Form Surface */}
      <main className="flex-1 max-w-md w-full mx-auto px-5 -mt-4 pb-8">
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#E8E8E8] space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold text-[#607080] mb-1">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400">👤</span>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Darlington Okonjo"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] text-xs text-[#001028] placeholder-slate-400 focus:outline-none focus:border-[#F8C800] transition"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold text-[#607080] mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400">✉️</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] text-xs text-[#001028] placeholder-slate-400 focus:outline-none focus:border-[#F8C800] transition"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[11px] font-bold text-[#607080] mb-1">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400">📞</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08012345678"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] text-xs text-[#001028] placeholder-slate-400 focus:outline-none focus:border-[#F8C800] transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-bold text-[#607080] mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] text-xs text-[#001028] placeholder-slate-400 focus:outline-none focus:border-[#F8C800] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-sm tracking-wide shadow-md transition cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Social Login Options */}
          <div className="space-y-3 pt-2 text-center">
            <div className="flex items-center space-x-2">
              <div className="flex-1 h-px bg-[#E8E8E8]" />
              <span className="text-[10.5px] font-medium text-[#607080]">Or continue with</span>
              <div className="flex-1 h-px bg-[#E8E8E8]" />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setActiveView('dashboard')}
                className="py-2.5 px-3 rounded-xl border border-[#E8E8E8] bg-white hover:bg-slate-50 text-xs font-semibold text-[#001028] flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <span>🌐</span>
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('dashboard')}
                className="py-2.5 px-3 rounded-xl border border-[#E8E8E8] bg-white hover:bg-slate-50 text-xs font-semibold text-[#001028] flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <span>📘</span>
                <span>Facebook</span>
              </button>
            </div>

            {/* Switch to Login */}
            <div className="pt-3 text-xs text-[#607080]">
              <span>Already have an account? </span>
              <button
                type="button"
                onClick={() => setActiveView('login')}
                className="text-[#001028] font-bold hover:underline cursor-pointer"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpScreen;
