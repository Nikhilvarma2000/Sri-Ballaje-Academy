// src/sections/Hero.jsx
import React from 'react';
import LeadForm from '../components/LeadForm';

export default function Hero({ scriptUrl }) {
  return (
    <section className="relative pt-12 pb-24 lg:py-32 overflow-hidden bg-studio-black">
      {/* Visual background glow to break up the deep black layout template */}
      <div className="absolute inset-0 bg-dark-glow opacity-50 z-0 pointer-events-none" />
      
      {/* Decorative luxury abstract lines overlay */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-studio-cyan/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-studio-yellow/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct-Response Conversion Value Hooks */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-studio-cyan/10 border border-studio-cyan/20 text-xs text-studio-cyan uppercase tracking-[0.15em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-studio-cyan animate-pulse" />
              Yousufguda's Elite Training Academy
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-gradient-cyan">
              Turn Your Creative Passion Into an Elite Career
            </h1>
            
            <p className="text-studio-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Master the highest-paying skill in the beauty industry. Learn from foundational looks to advanced airbrush and cinematic SFX formatting under certified studio veterans.
            </p>
            
            {/* Micro-Trust Pillars Derived Directly from handwritten course details .jpeg */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 text-left max-w-md mx-auto lg:mx-0 border-t border-white/10">
              <div className="p-4 bg-studio-charcoal/40 rounded-xl border border-white/5 backdrop-blur-sm">
                <p className="text-studio-yellow font-bold text-lg leading-none">30+ Hairs</p>
                <p className="text-[10px] text-studio-muted uppercase tracking-wider mt-1.5">Styling Modules</p>
              </div>
              <div className="p-4 bg-studio-charcoal/40 rounded-xl border border-white/5 backdrop-blur-sm">
                <p className="text-studio-cyan font-bold text-lg leading-none">10+ Sarees</p>
                <p className="text-[10px] text-studio-muted uppercase tracking-wider mt-1.5">Draping Formats</p>
              </div>
              <div className="p-4 bg-studio-charcoal/40 rounded-xl border border-white/5 backdrop-blur-sm col-span-2 sm:col-span-1">
                <p className="text-white font-bold text-lg leading-none">100% Live</p>
                <p className="text-[10px] text-studio-muted uppercase tracking-wider mt-1.5">Model Practice</p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Ads Lead Capture Container Panel */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto" id="enroll-form">
            <div className="bg-studio-charcoal border border-white/10 p-6 sm:p-8 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.06)] relative overflow-hidden group">
              
              {/* Premium Top Neon Border Treatment Accent */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-studio-cyan via-studio-yellow to-studio-cyan" />
              
              {/* Top Callout Urgency Pill Badge Overlay */}
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Live Session Reserved
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold tracking-wide uppercase text-white">
                  Secure Course Syllabus
                </h3>
                <p className="text-xs text-studio-muted mt-1 font-light leading-normal">
                  Fill out your registration details below to instantly unlock our full pricing structures over secure message channels.
                </p>
              </div>
              
              {/* Embedded Custom Form Hook Pipeline Engine */}
              <LeadForm 
                placementTag="google_ads_hero" 
                scriptEndpoint={scriptUrl} 
              />
              
              {/* Privacy and Anti-spam Trust Microtext Node */}
              <p className="text-[10px] text-neutral-600 text-center mt-4 font-light">
                🔒 Your information is confidential and protected against external spam pipelines.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}