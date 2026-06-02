// src/components/FloatingCTAs.jsx
import React from 'react';

export default function FloatingCTAs() {
  const whatsappUrl = "https://wa.me/919948434888?text=Hi%20Sri%20Ballaje%20Academy,%20I'm%20interested%20in%20your%20professional%20makeup%20courses.%20Please%20share%20details.";

  return (
    <>
      {/* 1. Mobile-Only Fixed Sticky Bottom Conversion Row */}
      <div className="fixed bottom-0 inset-x-0 bg-studio-dark/95 border-t border-white/10 p-3 z-40 md:hidden flex gap-3 backdrop-blur-md shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Urgent Call Trigger Node */}
        <a 
          href="tel:+919948434888" 
          className="flex-1 bg-white text-studio-black text-center font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M21.384 17.791c-1.207-1.103-2.766-1.503-4.14-1.127l-2.031 1.016c-2.457-1.282-4.475-3.3-5.757-5.757l1.016-2.031c.376-1.374.175-2.933-.928-4.14l-2.436-2.658C6.312.213 5.093-.113 3.946.033 2.146.262.593 1.631.144 3.432c-.93 3.731.42 8.528 3.992 12.1 3.572 3.572 8.369 4.922 12.1 3.992 1.801-.449 3.17-2.002 3.399-3.801.146-1.147-.18-2.366-1.064-3.462l-2.657-2.436z"/>
          </svg>
          Call Academy
        </a>

        {/* Immediate WhatsApp Connect Node */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 text-white text-center font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.845-4.394 9.848-9.793.002-2.616-1.01-5.074-2.852-6.918C17.207 2.05 14.762 1.034 12.16 1.034c-5.433 0-9.85 4.394-9.853 9.793-.001 1.97.513 3.894 1.492 5.595l-.999 3.65 3.748-.978zm11.567-5.282c-.313-.156-1.854-.915-2.131-1.015-.277-.1-.478-.156-.678.156-.2.312-.777.985-.953 1.186-.177.201-.353.226-.666.07-1.353-.678-2.24-1.181-3.136-2.72-.236-.404.236-.375.676-1.253.075-.151.038-.284-.019-.397-.056-.112-.478-1.151-.655-1.577-.173-.416-.347-.359-.478-.359-.124-.002-.266-.002-.409-.002-.143 0-.376.054-.572.27-.197.216-.752.734-.752 1.791s.77 2.074.877 2.218c.107.144 1.516 2.315 3.673 3.243.513.221.914.353 1.226.452.515.164.984.141 1.355.086.413-.062 1.854-.758 2.115-1.453.261-.695.261-1.293.183-1.415-.078-.122-.277-.178-.59-.336z"/>
          </svg>
          WhatsApp Us
        </a>
      </div>

      {/* 2. Desktop-Only Floating Stationary WhatsApp Node Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 rounded-full items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-transform z-40 border border-emerald-500/20"
        title="Chat on WhatsApp with Academy Support"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.845-4.394 9.848-9.793.002-2.616-1.01-5.074-2.852-6.918C17.207 2.05 14.762 1.034 12.16 1.034c-5.433 0-9.85 4.394-9.853 9.793-.001 1.97.513 3.894 1.492 5.595l-.999 3.65 3.748-.978zm11.567-5.282c-.313-.156-1.854-.915-2.131-1.015-.277-.1-.478-.156-.678.156-.2.312-.777.985-.953 1.186-.177.201-.353.226-.666.07-1.353-.678-2.24-1.181-3.136-2.72-.236-.404.236-.375.676-1.253.075-.151.038-.284-.019-.397-.056-.112-.478-1.151-.655-1.577-.173-.416-.347-.359-.478-.359-.124-.002-.266-.002-.409-.002-.143 0-.376.054-.572.27-.197.216-.752.734-.752 1.791s.77 2.074.877 2.218c.107.144 1.516 2.315 3.673 3.243.513.221.914.353 1.226.452.515.164.984.141 1.355.086.413-.062 1.854-.758 2.115-1.453.261-.695.261-1.293.183-1.415-.078-.122-.277-.178-.59-.336z"/>
        </svg>
      </a>
    </>
  );
}