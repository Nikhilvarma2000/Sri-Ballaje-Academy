// src/sections/Hero.jsx
import React from 'react';
import LeadForm from '../components/LeadForm';

export default function Hero({ scriptUrl }) {
  return (
    <section className="relative pt-12 pb-24 lg:py-32 overflow-hidden bg-studio-black">
      {/* Background glow for premium design look */}
      <div className="absolute inset-0 bg-dark-glow opacity-50 z-0 pointer-events-none" />
      
      {/* Decorative luxury blur spots */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-studio-cyan/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-studio-yellow/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Easy to read value message */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-studio-cyan/10 border border-studio-cyan/20 text-xs text-studio-cyan uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-studio-cyan animate-pulse" />
              Best Makeup Academy in Yousufguda, Hyderabad
            </div>
            
            {/* High Impact Headline with Highlighted Income Message */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white">
              Join this course and earn up to{' '}
              <span className="block sm:inline-block px-2 py-1 mt-2 sm:mt-0 bg-studio-yellow text-black font-black rounded-lg shadow-lg transform -rotate-1">
                one Lakh Per Month
              </span>{' '}
              as a professional makeup artist!
            </h1>
            
            <p className="text-studio-muted text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Learn professional makeup from basic to advanced level. We teach you bridal makeup, airbrush makeup, and movie artist makeup step-by-step. Start your new career easily.
            </p>
            
            {/* Trust Badges - From course details .jpeg written list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 text-left max-w-md mx-auto lg:mx-0 border-t border-white/10">
              <div className="p-4 bg-studio-charcoal/50 rounded-xl border border-white/5 backdrop-blur-sm">
                <p className="text-studio-cyan font-bold text-lg leading-none">30+ Looks</p>
                <p className="text-[11px] text-studio-muted mt-1.5 font-medium">Learn Hair & Makeup</p>
              </div>
              <div className="p-4 bg-studio-charcoal/50 rounded-xl border border-white/5 backdrop-blur-sm">
                <p className="text-studio-cyan font-bold text-lg leading-none">10+ Styles</p>
                <p className="text-[11px] text-studio-muted mt-1.5 font-medium">Saree Draping Modules</p>
              </div>
              <div className="p-4 bg-studio-charcoal/50 rounded-xl border border-white/5 backdrop-blur-sm col-span-2 sm:col-span-1">
                <p className="text-studio-yellow font-bold text-lg leading-none">100% Real</p>
                <p className="text-[11px] text-studio-muted mt-1.5 font-medium">Practice on Live Models</p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Ads High-Converting Registration Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto" id="enroll-form">
            <div className="bg-studio-charcoal border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              
              {/* Top border color strip */}
              <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-studio-cyan via-studio-yellow to-studio-cyan" />
              
              {/* Small green seat notification tag */}
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Seats Left: 3 Only
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold tracking-wide uppercase text-white">
                  Get Details on WhatsApp
                </h3>
                <p className="text-xs text-studio-muted mt-1 font-light leading-normal">
                  Fill in your details below to get the full course details, syllabus, and discount fee details instantly.
                </p>
              </div>
              
              {/* Form connection pipeline module */}
              <LeadForm 
                placementTag="google_ads_hero" 
                scriptEndpoint={scriptUrl} 
              />
              
              <p className="text-[10px] text-neutral-500 text-center mt-4 font-light">
                🔒 Your personal information is 100% safe with us.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}