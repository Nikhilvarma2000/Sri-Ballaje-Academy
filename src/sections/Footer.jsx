// src/sections/Footer.jsx
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-studio-dark border-t border-white/10 pt-16 pb-32 md:pb-16 text-xs text-studio-muted relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Footer Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Physical Academy Headquarters */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.15em] font-bold text-white">
                SRI BALLAJE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-studio-cyan font-bold -mt-0.5">
                Bridal Makeup Studio & Academy
              </span>
            </div>
            <p className="leading-relaxed font-light text-sm text-studio-muted">
              8-3-231/C18/19/A, Sri Krishna Nagar,<br />
              Yousufguda, Hyderabad,<br />
              Telangana - 500044
            </p>
            <div className="pt-1">
              <a 
                href="mailto:pa1makeup@gmail.com" 
                className="text-studio-cyan hover:text-studio-cyan-light transition-colors text-sm font-medium border-b border-studio-cyan/20 pb-0.5"
              >
                pa1makeup@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Direct Support Call Grid */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-bold uppercase tracking-widest text-xs">
              Admissions Hotline
            </h4>
            <div className="space-y-2">
              <a 
                href="tel:+919948434888" 
                className="group flex items-center gap-3 text-base font-bold text-white hover:text-studio-yellow transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-studio-yellow group-hover:animate-ping" />
                +91 9948434888
              </a>
              <a 
                href="tel:+916281952746" 
                className="group flex items-center gap-3 text-base font-bold text-white hover:text-studio-yellow transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-studio-yellow group-hover:animate-ping" />
                +91 6281952746
              </a>
            </div>
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/sriballajebridalmakeupstudio?utm_source=qr&igsh=bm0zOGhwcXQ1dDky" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-studio-cyan hover:text-white transition-colors font-semibold uppercase tracking-wider text-[11px] bg-studio-charcoal border border-white/5 px-4 py-2 rounded-lg"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Studio Instagram Profile
              </a>
            </div>
          </div>

          {/* Column 3: Conversion Verification Metadata */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-bold uppercase tracking-widest text-xs">
              Ad Campaign Compliance
            </h4>
            <p className="font-light leading-relaxed text-studio-muted text-xs">
              This digital infrastructure is fully structured for high-performance Google Ads conversion monitoring. All analytics code execution layers conform to standardized security and immediate lead dispatch processing data paths.
            </p>
            <button 
              onClick={handleScrollToTop}
              className="text-[10px] uppercase font-bold tracking-widest text-studio-yellow hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              ▲ Back To Application Form
            </button>
          </div>

        </div>

        {/* Bottom Metadata Block */}
        <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-8 text-[11px] tracking-wide font-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {currentYear} Sri Ballaje Bridal Makeup Studio & Academy. All Rights Reserved.</p>
          <p className="text-[10px] text-neutral-600 uppercase font-mono tracking-widest">
            High Conversion Design System — Built via Tailwind v4
          </p>
        </div>

      </div>
    </footer>
  );
}