// src/sections/Services.jsx
import React from 'react';

export default function Services() {
  // Ordered mapping of core corporate solutions listed on "Services .jpeg"
  const serviceCategories = [
    {
      title: "Bridal & Glamour Artistry",
      description: "Flawless elite aesthetics engineered to withstand long hours and high-definition lenses.",
      items: [
        "Bridal Makeup",
        "Pre - Wedding Shoot Makeup",
        "Party Makeup",
        "Celebrity Makeup",
        "Airbrush Makeup"
      ]
    },
    {
      title: "Editorial & Production Systems",
      description: "High-contrast look styling built for camera systems, harsh runway lights, and commercial portfolios.",
      items: [
        "Model Makeup",
        "Fashion Makeup",
        "Photography Makeup",
        "Movie Artist Makeup"
      ]
    },
    {
      title: "Theatrical & Specialized Craft",
      description: "Advanced structure morphing and cinematic character design layouts under studio conditions.",
      items: [
        "Character Makeup",
        "Special Effect Makeup",
        "All types of Hair styles",
        "Indian Cultural Saree Draping"
      ]
    }
  ];

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
    <section className="py-24 bg-studio-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Panel Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-studio-cyan font-bold">
            Studio Menu Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold tracking-wide text-white">
            Premium Services Provided
          </h2>
          <div className="w-16 h-[2px] bg-studio-yellow mx-auto mt-4" />
          <p className="text-studio-muted text-xs sm:text-sm mt-4 font-light leading-relaxed">
            Beyond academic education, Sri Ballaje operates as an elite active commercial hub servicing premium bridal, commercial production, and cinema clients across Telangana.
          </p>
        </div>

        {/* Professional Menu Board Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-16">
          {serviceCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-studio-dark border border-white/5 hover:border-studio-cyan/20 transition-all duration-300 shadow-2xl flex flex-col justify-between min-h-[420px]"
            >
              <div>
                {/* Header Titles */}
                <h3 className="font-serif text-2xl font-bold tracking-wide text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed mb-8 border-b border-white/5 pb-4">
                  {cat.description}
                </p>

                {/* Sub-item Node List Mapping */}
                <ul className="space-y-4">
                  {cat.items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between text-sm font-medium tracking-wide text-neutral-300">
                      <span className="flex items-center gap-3">
                        <span className="text-studio-yellow font-serif text-xs">✦</span>
                        {item}
                      </span>
                      {/* Premium editorial placeholder separating style nodes */}
                      <span className="text-[10px] uppercase font-mono tracking-widest text-studio-cyan/40 bg-studio-cyan/5 px-2 py-0.5 rounded border border-studio-cyan/10">
                        Studio Elite
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Action Strip */}
        <div className="mt-12 text-center p-8 bg-studio-charcoal border border-white/10 rounded-2xl max-w-4xl mx-auto relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-radial-gradient from-studio-yellow/5 to-transparent opacity-40 pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
              Looking for Premium Makeover Bookings?
            </h4>
            <p className="text-xs text-studio-muted font-light leading-relaxed">
              Whether you are an aspiring student wanting to shadow live setups or a client seeking booking allocations for bridal suites, connect with our Yousufguda registration manager instantly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-6 py-3 bg-studio-yellow text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-transform active:scale-[0.98] cursor-pointer hover:bg-studio-yellow-dark"
              >
                Request Slot Details
              </button>
              <a 
                href="tel:+919948434888" 
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white/5 transition-colors text-center"
              >
                Call Hotline Direct
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}