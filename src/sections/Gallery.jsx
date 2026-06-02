// src/sections/Gallery.jsx
import React, { useState } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Curated, premium high-definition imagery mapping course details .jpeg & Services .jpeg
  const portfolioItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Classic South Indian Bridal Look',
      meta: 'Traditional Masterclass Look',
      desc: 'Flawless traditional base featuring deep gold-tone blending mapping historical bridal layouts.',
      gridClass: 'md:col-span-2 md:row-span-2 h-[500px] md:h-full',
      image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'editorial',
      title: 'High-Fashion Glossy Look',
      meta: 'Editorial & Celebrity Profile',
      desc: 'Dewy skin aesthetics with high-gloss liquid finishes tailored for high-contrast studio cameras.',
      gridClass: 'h-[280px] md:h-full',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'sfx',
      title: 'Cinematic Character Transformation',
      meta: 'SFX & Movie Artist Portfolio',
      desc: 'Advanced architectural prosthetic mapping, structural aging, and theatrical character layers.',
      gridClass: 'md:row-span-2 h-[400px] md:h-full',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'bridal',
      title: 'North Indian Bridal Elegance',
      meta: 'Advanced Royal Bridal Look',
      desc: 'Royal matte-finish complexion with high-definition pigments and intense traditional dupatta saree draping.',
      gridClass: 'h-[280px] md:h-full',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'academy',
      title: 'Live Studio Practical Sandboxes',
      desc: 'Students executing advanced look configurations and multi-tier hair styling modules under master control.',
      meta: '30+ Looks Training Sandbox',
      gridClass: 'h-[280px] md:h-full',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'editorial',
      title: 'Indian Cultural Saree Draping & Hair',
      meta: '10+ Traditional Draping Modules',
      desc: 'Flawless alignment of complex traditional pleat tracking and structured bridal updos.',
      gridClass: 'md:col-span-2 h-[280px] md:h-full',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'bridal', label: 'Bridal Systems' },
    { id: 'editorial', label: 'Editorial & Celeb' },
    { id: 'sfx', label: 'SFX Production' },
    { id: 'academy', label: 'Student Training' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-studio-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-studio-cyan block">
              Visual Validation Core
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              The Production Lookbook
            </h2>
            <div className="w-16 h-[2px] bg-studio-yellow mt-3 mx-auto md:mx-0" />
          </div>
          
          <p className="text-studio-muted text-xs font-light max-w-sm mx-auto md:mx-0 text-center md:text-right leading-relaxed">
            Real portfolio assets showcasing execution across cinematic look sets, bridal suites, and active academy student training practical modules.
          </p>
        </div>

        {/* Premium Tab Navigation Control Element */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12 border-b border-white/5 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-studio-cyan to-studio-cyan-dark text-black shadow-[0_4px_20px_rgba(0,229,255,0.15)] scale-[1.02]'
                  : 'bg-studio-charcoal/40 text-studio-muted hover:text-white border border-white/5 hover:bg-studio-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Asymmetric Mosaic Photo Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[260px] gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`${item.gridClass} group relative bg-studio-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-studio-cyan/30 shadow-2xl transition-all duration-500 cursor-zoom-in flex flex-col justify-end`}
            >
              
              {/* Media Asset Layer Container */}
              <div className="absolute inset-0 w-full h-full bg-neutral-900 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out mix-blend-normal group-hover:mix-blend-normal opacity-85 group-hover:opacity-100"
                />
                {/* Advanced Multi-Stage Gradient Overlay Vector */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,229,255,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Glassmorphic Minimal Header Tag Label */}
              <div className="absolute top-4 left-4 z-10 bg-studio-black/60 border border-white/10 backdrop-blur-md px-3 py-1 rounded-md">
                <span className="text-[9px] uppercase font-mono tracking-widest text-studio-yellow font-bold">
                  {item.meta}
                </span>
              </div>

              {/* Context Block Footer Display Panel */}
              <div className="p-6 relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1.5 text-left">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-studio-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
                  {item.description || item.desc}
                </p>
                
                {/* Interactive Indicator Element Link */}
                <div className="pt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-studio-cyan font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>View Full Texture</span>
                  <span className="text-xs">⟶</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>

      {/* 2. IMMERSIVE LIGHTBOX OVERLAY STATE CONTAINER MODULE */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-studio-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Universal Close Floating Frame Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-studio-yellow text-4xl font-light cursor-pointer transition-colors z-50"
            aria-label="Close lookbook frame"
          >
            &times;
          </button>

          <div 
            className="max-w-5xl w-full bg-studio-charcoal border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // Stop bubble up dismiss loops
          >
            {/* Expanded Visual Asset Display Column */}
            <div className="lg:col-span-7 bg-black flex items-center justify-center aspect-[4/3] lg:aspect-auto max-h-[70vh]">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Context Analytical Meta Information Panel Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-studio-yellow font-bold bg-studio-black px-3 py-1 rounded border border-white/5 inline-block">
                  {selectedImage.meta}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {selectedImage.title}
                </h3>
                <div className="w-10 h-[1px] bg-studio-cyan" />
                <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
                  {selectedImage.description || selectedImage.desc}
                </p>
                <div className="bg-studio-black/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <p className="text-[11px] uppercase tracking-wider text-studio-cyan font-bold">Training Scope Target</p>
                  <p className="text-xs text-neutral-400 font-light leading-normal">
                    This signature style look represents core structural modules evaluated thoroughly during active student laboratory practical training sessions.
                  </p>
                </div>
              </div>

              {/* Instant Call To Action Integration Anchor */}
              <button
                onClick={() => {
                  setSelectedImage(null);
                  document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 bg-studio-cyan text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-studio-cyan-light transition-all shadow-lg shadow-studio-cyan/10 cursor-pointer text-center"
              >
                Learn This Look Now
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}