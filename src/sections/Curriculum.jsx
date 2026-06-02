// src/sections/Curriculum.jsx
import React from 'react';

export default function Curriculum() {
  const modules = [
    {
      id: "1",
      title: "Professional Makeup",
      badge: "Basic To Advanced",
      items: [
        "No Makeup Look",
        "H.D. Makeup Look",
        "Sweet Proof Makeup Look",
        "Glassy Makeup Look",
        "Matte Finishing Makeup",
        "Engagement Makeup Looks"
      ]
    },
    {
      id: "2",
      title: "Bridal Makeup Course",
      badge: "Most Popular",
      items: [
        "Air Brush Makeup",
        "Classic Makeup Look",
        "Christian Bridal Look",
        "Muslim Bridal Look",
        "Reception Look",
        "Haldhi Makeup Look",
        "North Indian Makeup Look"
      ]
    },
    {
      id: "3",
      title: "Advanced Makeup",
      badge: "Fashion Style",
      items: [
        "Editorial Makeup",
        "Model Makeup Looks",
        "Fashion Makeup",
        "Celebrity Makeup"
      ]
    },
    {
      id: "4",
      title: "Movie & SFX Makeup",
      badge: "Special Effects",
      items: [
        "S.F.X. Makeup Look",
        "Cake Makeup Look",
        "God's Makeup Look",
        "Drag Proof Makeup",
        "Historical Makeup Look"
      ]
    }
  ];

  const highlights = [
    { title: "30+ Makeup & Hair Looks", desc: "Learn many different styles perfectly step-by-step." },
    { title: "10+ Saree Draping Styles", desc: "Learn traditional and modern ways to drape a saree cleanly." },
    { title: "Professional Certificate Included", desc: "Get a valid course completion certificate to get jobs easily." },
    { title: "100% Practical on Live Models", desc: "No dummy practice. Work directly on real live models in our studio." }
  ];

  return (
    <section className="py-20 bg-studio-dark border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-studio-yellow font-bold bg-studio-yellow/10 px-3 py-1 rounded">
            Our Course Syllabus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-4 tracking-wide text-white">
            What You Will Learn In This Course
          </h2>
          <div className="w-12 h-[2px] bg-studio-cyan mx-auto mt-3" />
          <p className="text-studio-muted text-xs sm:text-sm mt-3 font-light leading-relaxed">
            We teach you everything from basic beauty setup to advanced movie artist makeup styles. Easy to learn for beginners.
          </p>
        </div>

        {/* 4 Course Boxes Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((mod) => (
            <div 
              key={mod.id} 
              className="bg-studio-black border border-white/10 rounded-2xl p-6 hover:border-studio-cyan/30 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Highlighted Module Header and Small Badges */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase text-studio-yellow tracking-wider">
                    MODULE {mod.id}
                  </span>
                  <span className="text-[9px] font-bold uppercase text-black bg-studio-cyan px-2 py-0.5 rounded">
                    {mod.badge}
                  </span>
                </div>

                {/* Main Course Title */}
                <h3 className="font-serif text-xl font-bold text-white tracking-wide mb-5 border-b border-white/5 pb-2">
                  {mod.title}
                </h3>

                {/* List Items from handwriting note */}
                <ul className="space-y-3">
                  {mod.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-studio-muted font-light">
                      <span className="text-studio-cyan font-bold select-none text-[11px]">✔</span>
                      <span className="hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Training Highlight Box */}
        <div className="bg-studio-charcoal border-2 border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header Info */}
            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-studio-yellow block">
                Free Extras For You
              </span>
              <h4 className="font-serif text-2xl font-bold text-white tracking-wide">
                More Benefits Included in This Course
              </h4>
              <p className="text-xs text-studio-muted font-light leading-relaxed">
                When you enroll today, you get these important practical training features completely included.
              </p>
            </div>

            {/* Right Highlights Grid with Visual Highlight Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((high, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-studio-black border border-white/10 flex gap-3.5 items-start">
                  {/* Highlight Checkmark Circle */}
                  <div className="w-6 h-6 rounded-full bg-studio-yellow text-black flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    {/* Main highlight text bolded */}
                    <p className="text-xs font-bold text-studio-cyan tracking-wide">
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