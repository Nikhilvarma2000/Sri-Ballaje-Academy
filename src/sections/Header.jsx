// src/sections/Header.jsx

import React from "react";

export default function Header() {
  const handleScrollToForm = () => {
    const targetElement = document.getElementById("enroll-form");

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        120;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className="
        sticky
        top-[58px]
        md:top-[72px]
        z-[1000]
        bg-white/95
        backdrop-blur-xl
        border-b
        border-rose-100
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 md:h-20 flex items-center justify-between">

          {/* Logo Section */}

          <div className="flex flex-col">

            <h1 className="text-base sm:text-xl md:text-2xl font-black text-gray-900 leading-none">
              Sri Ballaje Bridal
            </h1>

            <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.22em] text-rose-500 font-bold mt-1">
              Makeup Studio & Academy
            </p>

          </div>

          {/* Desktop Actions */}

          <div className="hidden lg:flex items-center gap-6">

            <div className="text-right">

              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Call For Admission
              </p>

              <a
                href="tel:+919948434888"
                className="
                  block
                  text-2xl
                  font-black
                  text-rose-600
                  hover:text-rose-700
                  transition-colors
                "
              >
                99484 34888
              </a>

            </div>

            <button
              onClick={handleScrollToForm}
              className="
                h-12
                px-6
                rounded-xl
                bg-gradient-to-r
                from-rose-500
                to-pink-500
                text-white
                font-bold
                shadow-xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Book Your Seat
            </button>

          </div>

          {/* Mobile Actions */}

          <div className="flex lg:hidden items-center gap-2">

            <a
              href="tel:+919948434888"
              className="
                bg-gradient-to-r
                from-rose-500
                to-pink-500
                text-white
                px-3
                py-2
                rounded-xl
                text-xs
                sm:text-sm
                font-bold
                shadow-lg
                whitespace-nowrap
              "
            >
              📞 Call Now
            </a>

          </div>

        </div>

      </div>
    </header>
  );
}