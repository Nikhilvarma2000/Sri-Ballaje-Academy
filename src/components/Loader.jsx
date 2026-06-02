import React, { useEffect, useState } from "react";

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
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-gradient-to-br
        from-rose-50
        via-white
        to-pink-50
        transition-all duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Background Blobs */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />

      {/* Center Content */}

      <div className="relative text-center">

        {/* Outer Ring */}

        <div className="relative flex items-center justify-center">

          <div className="absolute w-40 h-40 border-[3px] border-rose-200 rounded-full animate-spin" />

          <div
            className="
              absolute
              w-28
              h-28
              border-[3px]
              border-transparent
              border-t-rose-500
              border-r-pink-400
              rounded-full
              animate-spin
            "
            style={{
              animationDuration: "3s",
            }}
          />

          {/* Logo Circle */}

          <div
            className="
              w-28
              h-28
              rounded-full
              bg-white
              shadow-2xl
              border
              border-rose-100
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <span className="text-4xl">
              👰
            </span>
          </div>

        </div>

        {/* Brand */}

        <div className="mt-10">

          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-900
              tracking-wide
            "
          >
            Sri Ballaje
          </h1>

          <p
            className="
              text-rose-500
              font-semibold
              tracking-widest
              uppercase
              text-sm
              mt-2
            "
          >
            Bridal Makeup Studio & Academy
          </p>

        </div>

        {/* Loading */}

        <div className="mt-8">

          <div className="w-56 h-2 bg-rose-100 rounded-full mx-auto overflow-hidden">
            <div
              className="
                h-full
                bg-gradient-to-r
                from-rose-500
                to-pink-500
                rounded-full
                animate-[loading_2.5s_linear_forwards]
              "
            />
          </div>

          <p className="text-gray-500 mt-4 text-sm">
            Preparing Your Beauty Career Journey...
          </p>

        </div>

      </div>
    </div>
  );
}