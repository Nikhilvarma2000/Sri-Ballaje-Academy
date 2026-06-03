// src/components/OfferBar.jsx

import React from "react";

export default function OfferBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[999]">

      {/* Mobile */}

      <div className="md:hidden bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 shadow-xl">

        <div className="px-3 py-2">

          <div className="flex items-center justify-between gap-2">

            <div>

              <p className="text-white font-black text-xs uppercase tracking-wider">
                🔥 Limited Time Offer
              </p>

              <div className="flex items-center gap-2 mt-1">

                <span className="text-yellow-300 font-black text-xl animate-pulse">
                  50% OFF
                </span>

                <span className="text-white font-semibold text-xs">
                  On Course Fee
                </span>

              </div>

            </div>

            <a
              href="tel:+919948434888"
              className="
                bg-white
                text-red-600
                px-3
                py-2
                rounded-xl
                shadow-lg
                font-black
                text-base
                whitespace-nowrap
                animate-pulse
              "
            >
              📞 99484 34888
            </a>

          </div>

        </div>

      </div>

      {/* Desktop */}

      <div className="hidden md:block bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 shadow-2xl">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between py-3">

            <div className="flex items-center gap-4">

              <span className="text-3xl animate-bounce">
                🔥
              </span>

              <div>

                <p className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Limited Time Offer
                </p>

                <h3 className="text-white font-black text-2xl">

                  Get Upto

                  <span className="mx-2 text-yellow-300 text-5xl animate-pulse">
                    50% OFF
                  </span>

                  On Course Fee

                </h3>

              </div>

            </div>

            <a
              href="tel:+919948434888"
              className="
                bg-white
                text-red-600
                px-8
                py-3
                rounded-2xl
                font-black
                text-4xl
                shadow-2xl
                animate-pulse
                hover:scale-105
                transition-all
              "
            >
              📞 99484 34888
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}