import React, { useState, useEffect } from "react";

/* Sections */
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Curriculum from "./sections/Curriculum";
import Gallery from "./sections/Gallery";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";
/* Components */
import Loader from "./components/Loader";
import FloatingCTAs from "./components/FloatingCTAs";
import ExitIntentPopup from "./components/ExitIntentPopup";

/* Google Apps Script URL */
const WEBHOOK_SCRIPT_URL =
  "YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL";

export default function App() {
  const [isExitPopupOpen, setIsExitPopupOpen] =
    useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10) {
        const popupShown =
          sessionStorage.getItem(
            "beautyAcademyExitShown"
          );

        if (!popupShown) {
          setIsExitPopupOpen(true);

          sessionStorage.setItem(
            "beautyAcademyExitShown",
            "true"
          );
        }
      }
    };

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () =>
      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-white
        text-gray-900
        font-sans
        antialiased
        overflow-x-hidden
        selection:bg-rose-500
        selection:text-white
      "
    >
      {/* Luxury Loader */}

      <Loader />

      {/* Main Layout */}

      <Header />

      <main>

        <Hero
          scriptUrl={WEBHOOK_SCRIPT_URL}
        />

        <Curriculum />

        <Gallery />

        <Services />

        <Testimonials />

      </main>

      <Footer />

      {/* Floating CTA */}

      <FloatingCTAs />

      {/* Exit Intent Popup */}

      <ExitIntentPopup
        isOpen={isExitPopupOpen}
        onClose={() =>
          setIsExitPopupOpen(false)
        }
        scriptUrl={WEBHOOK_SCRIPT_URL}
      />
    </div>
  );
}