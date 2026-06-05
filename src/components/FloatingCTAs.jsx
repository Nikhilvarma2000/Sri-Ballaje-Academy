// src/components/FloatingCTAs.jsx

import React from "react";

export default function FloatingCTAs() {
  const whatsappUrl =
    "https://wa.me/919948434866?text=Hi%20Sri%20Ballaje%20Academy,%20I%20am%20interested%20in%20the%20Beautician%20Course.%20Please%20share%20details.";

  return (
    <>
      {/* Mobile Sticky CTA */}

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">

        <div className="bg-white border-t border-rose-100 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] p-3">

          <div className="grid grid-cols-2 gap-3">

            {/* Call */}

            <a
              href="tel:+919948434866"
              className="
                h-14
                rounded-2xl
                bg-white
                border-2
                border-rose-200
                flex
                items-center
                justify-center
                gap-2
                font-bold
                text-gray-800
                shadow-sm
              "
            >
              📞 Call Now
            </a>

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-14
                rounded-2xl
                bg-gradient-to-r
                from-rose-500
                to-pink-500
                text-white
                flex
                items-center
                justify-center
                gap-2
                font-bold
                shadow-lg
              "
            >
              🎓 Book Now
            </a>

          </div>

        </div>

      </div>

      {/* Desktop Floating Widget */}

      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-4">

        {/* WhatsApp Card */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            gap-4
            bg-white
            rounded-2xl
            px-5
            py-4
            shadow-2xl
            border
            border-rose-100
            hover:scale-105
            transition-all
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
              text-white
              text-xl
            "
          >
            💬
          </div>

          <div>

            <p className="text-xs text-gray-500">
              Need Course Details?
            </p>

            <p className="font-bold text-gray-900">
              Chat On WhatsApp
            </p>

          </div>

        </a>

        {/* Call Card */}

        <a
          href="tel:+919948434866"
          className="
            bg-gradient-to-r
            from-rose-500
            to-pink-500
            text-white
            rounded-2xl
            px-6
            py-4
            shadow-2xl
            hover:scale-105
            transition-all
          "
        >

          <div className="flex items-center gap-3">

            <div className="text-2xl">
              📞
            </div>

            <div>

              <p className="text-xs text-white/80">
                Booking Helpline
              </p>

              <p className="font-bold">
                +91 9948434866
              </p>

            </div>

          </div>

        </a>

      </div>

      {/* Floating Pulse Dot */}

      <div
        className="
          hidden
          md:block
          fixed
          bottom-24
          right-20
          z-40
        "
      >
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
        </span>
      </div>
    </>
  );
}