// src/sections/Header.jsx
import React from 'react';

export default function Header() {
  const handleScrollToForm = () => {
    const targetElement = document.getElementById('enroll-form');
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. High-Urgency Scarcity Ticker (Sticky Top) */}
      <div className="bg-studio-yellow text-black text-center py-2.5 px-4 text-[10px] sm:text-xs font-black tracking-[0.15em] uppercase sticky top-0 z-50 shadow-xl flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0" />
        <span>
          ⚠️ ALERT: ONLY FEW SLOTS REMAINING FOR THIS BATCH! JOIN THE COURSE NOW — CALL: +91 9948434888
        </span>
      </div>

      {/* 2. Main Luxury Header Navigation Tree Layout */}
      <nav className="border-b border-white/10 bg-studio-dark/95 backdrop-blur-md sticky top-9 z-40 mx-auto max-w-7xl relative rounded-xl mt-2">
        <div className="px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          {/* Brand Monogram Identity Block */}
          <div className="flex flex-col select-none text-left">
            <span className="font-serif text-lg sm:text-2xl tracking-[0.12em] font-bold text-studio-cyan leading-none">
              SRI BALLAJE BRIDAL
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-studio-yellow font-bold mt-1.5">
              MAKEUP STUDIO & ACADEMY
            </span>
          </div>

          {/* Core Conversion & Direct Contact Hub */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Mid-Header Scarcity Highlighting Module (Hidden on small viewports, high desktop conversion) */}
            <div className="hidden md:flex flex-col items-end border-r border-white/10 pr-6 space-y-0.5 text-right">
              <span className="text-[10px] uppercase font-black tracking-widest text-studio-yellow bg-studio-yellow/10 border border-studio-yellow/20 px-2.5 py-0.5 rounded animate-pulse">
                ⏳ BATCH FILLING FAST
              </span>
              <div className="flex flex-col text-xs font-bold text-white mt-1">
                <a href="tel:+919948434888" className="hover:text-studio-cyan transition-colors">
                  📞 +91 9948434888
                </a>
                <a href="tel:+916281952746" className="hover:text-studio-cyan transition-colors">
                  📞 +91 6281952746
                </a>
              </div>
            </div>

            {/* Main Action Trigger Configured For Google Ads Optimization */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button 
                onClick={handleScrollToForm}
                className="px-5 py-3 bg-gradient-to-r from-studio-cyan to-studio-cyan-dark text-black font-black text-xs uppercase tracking-widest rounded-lg hover:from-studio-cyan-light hover:to-studio-cyan transition-all duration-200 cursor-pointer shadow-[0_4px_20px_rgba(0,229,255,0.25)] active:scale-[0.97]"
              >
                Join Course Now
              </button>
            </div>

          </div>

        </div>
      </nav>
    </>
  );
}