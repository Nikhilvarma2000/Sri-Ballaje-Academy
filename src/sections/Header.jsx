// src/sections/Header.jsx

import React from "react";

export default function Header() {
  const handleScrollToForm = () => {
    document
      .getElementById("enroll-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      {/* Top Announcement Bar */}

      <div className="sticky top-0 z-50 bg-gradient-to-r from-rose-500 to-pink-500 text-white">

        <div className="max-w-7xl mx-auto px-4 py-2">

          <div className="flex items-center justify-center gap-2 text-center">

            <span className="animate-pulse">
              🔥
            </span>

            <p className="text-xs sm:text-sm font-semibold">
              Limited Seats Available • Book Now
            </p>

          </div>

        </div>

      </div>

      {/* Main Header */}

      <header className="sticky top-9 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-20 flex items-center justify-between">

            {/* Logo Section */}

            <div className="flex items-center gap-4">

              {/* Optional Logo */}

              {/*
              <img
                src="/logo.png"
                alt="Sri Ballaje"
                className="w-12 h-12 object-contain"
              />
              */}

              <div>

                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  Sri Ballaje
                </h1>

                <p className="text-xs md:text-sm text-rose-500 font-semibold">
                  Bridal Makeup Studio & Academy
                </p>

              </div>

            </div>

            {/* Right Section */}

            <div className="flex items-center gap-4">

              {/* Desktop Numbers */}

              <div className="hidden lg:flex flex-col text-right">

                <span className="text-xs text-gray-500">
                  Call To Book Your Seat
                </span>

                <a
                  href="tel:+919948434888"
                  className="font-bold text-gray-900 hover:text-rose-500"
                >
                  +91 9948434888
                </a>

              </div>

              {/* CTA Button */}

              <button
                onClick={handleScrollToForm}
                className="
                  bg-gradient-to-r
                  from-rose-500
                  to-pink-500
                  text-white
                  px-5
                  md:px-7
                  h-12
                  rounded-xl
                  font-bold
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                🎓 Book Your Seat
              </button>

            </div>

          </div>

        </div>

      </header>

      {/* Mobile Fixed Bottom CTA */}

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-rose-100 shadow-2xl md:hidden">

        <div className="grid grid-cols-2 gap-3 p-3">

          <a
            href="tel:+919948434888"
            className="
              h-12
              rounded-xl
              border
              border-rose-200
              flex
              items-center
              justify-center
              font-semibold
              text-gray-700
            "
          >
            📞 Call Now
          </a>

          <button
            onClick={handleScrollToForm}
            className="
              h-12
              rounded-xl
              bg-gradient-to-r
              from-rose-500
              to-pink-500
              text-white
              font-bold
            "
          >
            🎓 Book Now
          </button>

        </div>

      </div>
    </>
  );
}