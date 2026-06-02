import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [render, setRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const loadTimer = setTimeout(() => {
      setVisible(false);
      const renderTimer = setTimeout(() => {
        setRender(false);
        document.body.style.overflow = 'unset';
      }, 400);
      return () => clearTimeout(renderTimer);
    }, 2000);

    return () => clearTimeout(loadTimer);
  }, []);

  if (!render) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-studio-black flex flex-col items-center justify-center transition-all duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative flex flex-col items-center">
        <div className="absolute w-32 h-32 rounded-full border-2 border-t-studio-yellow border-r-transparent border-b-studio-cyan border-l-transparent animate-spin-slow opacity-70" />
        <div className="relative w-26 h-26 flex flex-col items-center justify-center bg-studio-dark rounded-full border border-white/5 shadow-2xl">
          <span className="font-serif text-3xl font-bold tracking-widest text-studio-cyan animate-pulse-glow">SB</span>
          <div className="w-8 h-[1px] bg-studio-yellow rounded-full opacity-60 mt-0.5" />
        </div>
        <div className="text-center mt-6">
          <h2 className="font-serif text-lg tracking-[0.2em] font-bold text-gradient-cyan">SRI BALLAJE</h2>
          <p className="text-[8px] uppercase tracking-[0.3em] text-studio-yellow font-bold mt-0.5">Studio & Academy</p>
        </div>
      </div>
    </div>
  );
}