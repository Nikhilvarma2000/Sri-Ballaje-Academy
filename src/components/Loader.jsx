// src/components/Loader.jsx

import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/logo.png"; // Change filename if needed

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [render, setRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setRender(false);
        document.body.style.overflow = "unset";
      }, 600);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!render) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-gradient-to-br
        from-rose-50
        via-white
        to-pink-50
        transition-all duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Background Blur Effects */}

      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />

      {/* Main Loader */}

      <div className="relative text-center">

        {/* Logo Spinner Area */}

        <div className="relative flex items-center justify-center">

          {/* Outer Ring */}

          <div
            className="
              absolute
              w-52
              h-52
              rounded-full
              border-[3px]
              border-rose-200
              animate-spin
            "
            style={{
              animationDuration: "10s",
            }}
          />

          {/* Gradient Ring */}

          <div
            className="
              absolute
              w-44
              h-44
              rounded-full
              border-[4px]
              border-transparent
              border-t-rose-500
              border-r-pink-400
              animate-spin
            "
            style={{
              animationDuration: "3s",
            }}
          />

          {/* Logo Container */}

          <div
            className="
              relative
              w-40
              h-40
              rounded-full
              bg-white
              border-2
              border-rose-100
              shadow-[0_15px_50px_rgba(236,72,153,0.20)]
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >
            {/* Soft Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-pink-100/30 animate-pulse" />

            {/* Logo */}

            <img
              src={Logo}
              alt="Sri Ballaje Bridal"
              className="
                relative
                z-10
                w-36
                h-36
                object-contain
                scale-110
              "
            />
          </div>

        </div>

        {/* Brand Text */}

        <div className="mt-10">

          <h1
            className="
              text-3xl
              md:text-5xl
              font-black
              text-gray-900
              tracking-wide
            "
          >
            SRI BALLAJE BRIDAL
          </h1>

          <p
            className="
              mt-3
              text-rose-500
              font-bold
              tracking-[0.3em]
              uppercase
              text-[11px]
              md:text-sm
            "
          >
            MAKEUP STUDIO & ACADEMY
          </p>

        </div>

        {/* Loading Bar */}

        <div className="mt-8">

          <div
            className="
              w-64
              md:w-72
              h-2.5
              bg-rose-100
              rounded-full
              mx-auto
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-rose-500
                via-pink-500
                to-rose-400
                animate-[loading_2.5s_linear_forwards]
              "
            />
          </div>

          <p
            className="
              text-gray-500
              mt-4
              text-sm
              md:text-base
              font-medium
            "
          >
            Preparing Your Professional Beautician Journey...
          </p>

        </div>

        {/* Bottom Badge */}

        <div className="mt-8">

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-white
              border
              border-rose-100
              shadow-lg
              text-rose-600
              text-xs
              md:text-sm
              font-semibold
            "
          >
            ✨ 27+ Years Industry Experience
          </span>

        </div>

      </div>
    </div>
  );
}