// src/sections/Header.jsx
import React from 'react';

export default function Header() {
  const handleScrollToForm = () => {
    const targetElement = document.getElementById('enroll-form');
    if (targetElement) {
      // Calculate position offset to clear sticky header space cleanly
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. Global Campaign Top Notification Urgency Bar */}
      <div className="bg-studio-yellow text-black text-center py-2.5 px-4 text-[10px] font-bold tracking-[0.2em] uppercase sticky top-0 z-50 shadow-md">
        ⚡ Admissions Live for Next Professional Batch — Sri Ballaje Academy Hyderabad ⚡
      </div>

      {/* 2. Premium Main Luxury Header Menu Container */}
      <nav className="border-b border-white/10 bg-studio-dark/95 backdrop-blur-md sticky top-7 z-40 mx-auto max-w-7xl relative">
        <div className="px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Typographic Monogram Representation Matching Logo.jpeg */}
          <div className="flex flex-col select-none">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.15em] font-bold text-studio-cyan leading-none">
              SRI BALLAJE BRIDAL
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-studio-yellow font-semibold mt-1">
              MAKEUP STUDIO & ACADEMY
            </span>
          </div>

          {/* Desktop Direct Call & Call To Action Elements */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden lg:flex flex-col items-end gap-0.5">
              <a 
                href="tel:+919948434888" 
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-studio-cyan hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                +91 9948434888
              </a>
              <span className="text-[9px] uppercase tracking-widest text-studio-muted">
                Yousufguda, Hyderabad
              </span>
            </div>

            {/* Inverted Call To Action Button Targeting Google Ads Optimization */}
            <button 
              onClick={handleScrollToForm}
              className="px-5 py-2.5 bg-transparent border-2 border-studio-cyan text-studio-cyan font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-studio-cyan hover:text-black transition-all duration-200 cursor-pointer shadow-lg shadow-studio-cyan/5 active:scale-[0.98]"
            >
              Apply Online
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}