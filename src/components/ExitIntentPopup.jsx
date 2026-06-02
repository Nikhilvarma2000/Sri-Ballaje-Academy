// src/components/ExitIntentPopup.jsx
import React from 'react';
import LeadForm from './LeadForm';

export default function ExitIntentPopup({ isOpen, onClose, scriptUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Clickable dark background layer to exit overlay smoothly */}
      <div 
        className="absolute inset-0 cursor-default" 
        onClick={onClose} 
      />
      
      {/* Premium Modal Core Box Wrapper */}
      <div className="bg-studio-charcoal border-2 border-studio-yellow p-6 sm:p-8 rounded-2xl max-w-md w-full relative shadow-[0_0_50px_rgba(255,230,0,0.12)] z-10 transition-all">
        
        {/* Editorial Window Exit Trigger Close Tag */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-studio-muted hover:text-white text-2xl transition-colors cursor-pointer"
          aria-label="Close modal window"
        >
          &times;
        </button>
        
        {/* Urgency Activation Value Tag */}
        <span className="inline-block text-[9px] uppercase font-bold tracking-[0.25em] text-black bg-studio-yellow px-3 py-1 rounded mb-3.5">
          Exclusive Ad Waiver
        </span>
        
        {/* Luxury Value Proposition Headers */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mb-2">
          Wait! Before You Go...
        </h3>
        
        <p className="text-xs text-studio-muted mb-6 font-light leading-relaxed">
          Secure a highly limited <span className="text-studio-yellow font-semibold">Partial Tuition Scholarship Waiver</span> for our upcoming live model practical masterclass batch in Yousufguda. Secure access before slots expire.
        </p>
        
        {/* Embedded Core Data Pipeline Lead Capture Form Module */}
        <LeadForm 
          placementTag="google_ads_exit_intent" 
          scriptEndpoint={scriptUrl} 
          onSuccess={onClose} 
        />
        
      </div>
    </div>
  );
}