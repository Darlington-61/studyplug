import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { HeroBookStack } from '../common/HeroBookStack';

export const OnboardingScreen: React.FC = () => {
  const { setActiveView } = useApp();
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: 'Learn Anytime, Anywhere',
      subtitle: 'Access past questions, video lessons, notes and smart tools — all in one place.',
      kicker: 'Big Goals • Better Progress'
    },
    {
      title: 'Master Verified Past Questions',
      subtitle: 'Simulate real CBT conditions with actual JAMB, WAEC, NECO & NABTEB questions with step-by-step solutions.',
      kicker: 'Step-by-Step Solutions'
    },
    {
      title: 'StudyPlug AI & Classroom Notes',
      subtitle: 'Get 24/7 instant AI explanations, classroom chalkboard notes, and track your weak topics.',
      kicker: 'Score 300+ in JAMB'
    }
  ];

  const handleNext = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1);
    } else {
      setActiveView('login');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#001028] text-white flex flex-col justify-between p-6 select-none font-sans relative">
      {/* Top Header */}
      <div className="pt-4 flex items-center justify-between z-10">
        <BrandLogo size="sm" />
        <button
          type="button"
          onClick={() => setActiveView('dashboard')}
          className="text-xs font-semibold text-[#607080] hover:text-[#F8C800] transition cursor-pointer"
        >
          Skip
        </button>
      </div>

      {/* Visual Center */}
      <div className="my-auto py-6 max-w-sm mx-auto flex flex-col items-center text-center space-y-5 z-10">
        <div className="w-full max-w-[280px]">
          <HeroBookStack variant="mobile" className="w-full" />
        </div>

        <div className="space-y-2 max-w-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8C800] bg-[#001830] px-3 py-1 rounded-full border border-[#F8C800]/30">
            {slides[slide].kicker}
          </span>
          <h2 className="text-2xl font-black tracking-tight text-white mt-1">
            {slides[slide].title}
          </h2>
          <p className="text-xs text-[#607080] font-normal leading-relaxed">
            {slides[slide].subtitle}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center space-x-2 pt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                slide === i ? 'w-6 bg-[#F8C800]' : 'w-2 bg-[#001830] border border-[#607080]/40'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="w-full max-w-sm mx-auto pb-4 space-y-3 z-10">
        <button
          type="button"
          onClick={handleNext}
          className="w-full py-4 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-sm tracking-wide shadow-xl flex items-center justify-center space-x-2 transition cursor-pointer"
        >
          <span>{slide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
          <span className="text-base font-bold">→</span>
        </button>

        <div className="flex items-center justify-center space-x-2 text-xs text-[#607080]">
          <span>Already have an account?</span>
          <button
            type="button"
            onClick={() => setActiveView('login')}
            className="text-[#F8C800] font-bold hover:underline cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
