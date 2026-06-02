// src/sections/Curriculum.jsx
import React from 'react';

export default function Curriculum() {
  const modules = [
    {
      id: "M1",
      title: "Professional Makeup Course",
      accent: "border-studio-cyan",
      items: [
        "No Makeup Look",
        "HD Makeup Technique",
        "Dewy Finish Makeup",
        "Glossy Makeup Look",
        "Matte Finish Makeup",
        "Engagement Makeup Looks"
      ]
    },
    {
      id: "M2",
      title: "Bridal Makeup Course",
      accent: "border-studio-yellow",
      items: [
        "Airbrush Makeup Systems",
        "Classic Bridal Masterclass",
        "Christian Bridal Look",
        "Muslim Bridal Look",
        "Glamorous Reception Look",
        "Vibrant Haldi Look",
        "North Indian Bridal Style"
      ]
    },
    {
      id: "M3",
      title: "Advanced Makeup Matrix",
      accent: "border-studio-cyan",
      items: [
        "Editorial Makeup Layouts",
        "High-Fashion Model Portfolios",
        "Runway & Fashion Makeup",
        "Celebrity Makeup Formatting"
      ]
    },
    {
      id: "M4",
      title: "Special Effects & Cinematic",
      accent: "border-studio-yellow",
      items: [
        "SFX Makeup Applications",
        "Theatrical Character Makeup",
        "Fantasy Artistry Designs",
        "Historical Realism Makeup",
        "Drag Transformation Systems",
        "Cake Makeup Foundations"
      ]
    }
  ];

  const highlights = [
    { title: "30+ Makeup Looks", desc: "Complete practical mastery across all industry look variants." },
    { title: "10+ Saree Draping Styles", desc: "Traditional, cultural, and modern structural draping systems." },
    { title: "ISO Certification Included", desc: "Valid professional certification recognized by elite industry salons." },
    { title: "100% Practical Hands-On", desc: "Conducted entirely on live models inside an active studio sandbox." }
  ];

  return (
    <section className="py-24 bg-studio-dark border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-studio-yellow font-bold">
            Comprehensive Academy Blueprint
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold tracking-wide text-white">
            The Artistry Curriculum Matrix
          </h2>
          <div className="w-16 h-[2px] bg-studio-cyan mx-auto mt-4" />
          <p className="text-studio-muted text-xs sm:text-sm mt-4 font-light max-w-xl mx-auto leading-relaxed">
            From essential beauty fundamentals to complex cinematic prosthetic designs, our modules are fully engineered for immediate commercial deployment.
          </p>
        </div>

        {/* 4-Column Module Curriculum Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch mb-16">
          {modules.map((mod) => (
            <div 
              key={mod.id} 
              className={`bg-studio-black border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-xl relative overflow-hidden`}
            >
              {/* Highlight Accent Corner Tag */}
              <div className={`absolute top-0 right-0 w-12 h-12 translate-x-6 -translate-y-6 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity bg-studio-cyan`} />

              <div>
                {/* Module Identifiers */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-yellow">
                    Module {mod.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-studio-cyan" />
                </div>

                {/* Module Titles */}
                <h3 className="font-serif text-xl font-bold tracking-wide text-white mb-6 group-hover:text-studio-cyan transition-colors">
                  {mod.title}
                </h3>

                {/* Sub-item Syllabus Nodes */}
                <ul className="space-y-3">
                  {mod.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-studio-muted font-light leading-snug">
                      <span className="text-studio-cyan text-[10px] mt-0.5 select-none">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Professional Training Integration Banner */}
        <div className="bg-studio-charcoal border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient structural background layer */}
          <div className="absolute inset-0 bg-radial-gradient from-studio-cyan/5 to-transparent opacity-30 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header Descriptor */}
            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-studio-cyan block">
                Value Add-On Suite
              </span>
              <h4 className="font-serif text-2xl font-bold tracking-wide text-white">
                Additional Value Training Included
              </h4>
              <p className="text-xs text-studio-muted font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                Every long-form academic course enrollment includes immediate unlocked access to these critical industry specializations.
              </p>
            </div>

            {/* Right Features Breakdown Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((high, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-studio-black/60 border border-white/5 flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded-lg bg-studio-cyan/10 border border-studio-cyan/20 flex items-center justify-center text-studio-cyan text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold tracking-wide text-white">
                      {high.title}
                    </p>
                    <p className="text-[11px] text-studio-muted font-light leading-normal">
                      {high.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}