import React, { useState, useEffect } from 'react';

// Core Framework Layout Sections Imports
import Header from './sections/Header';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import Gallery from './sections/Gallery'; // Newly Added
import Services from './sections/Services';
import Footer from './sections/Footer';

// Operational Optimization Components Imports
import Loader from './components/Loader'; // Newly Added
import FloatingCTAs from './components/FloatingCTAs';
import ExitIntentPopup from './components/ExitIntentPopup';

// --- GOOGLE APPS SCRIPT DATABASE ENDPOINT LINK ---
const WEBHOOK_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL";

export default function App() {
  const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 45) {
        const isShown = sessionStorage.getItem('studioExitShown');
        if (!isShown) {
          setIsExitPopupOpen(true);
          sessionStorage.setItem('studioExitShown', 'true');
        }
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="bg-studio-black text-white font-sans antialiased selection:bg-studio-cyan selection:text-black min-h-screen">
      
      {/* Premium Loader Screens Layer */}
      <Loader minimumLoadingTimeMs={2200} />

      {/* Structured Section Tree Layout */}
      <Header />
      <Hero scriptUrl={WEBHOOK_SCRIPT_URL} />
      <Curriculum />
      <Gallery /> 
      <Services />
      <Footer />
      
      {/* Overlay Conversions Stack Component Engine */}
      <FloatingCTAs />
      <ExitIntentPopup 
        isOpen={isExitPopupOpen} 
        onClose={() => setIsExitPopupOpen(false)} 
        scriptUrl={WEBHOOK_SCRIPT_URL} 
      />
    </div>
  );
}