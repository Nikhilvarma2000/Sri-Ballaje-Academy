// src/components/ExitIntentPopup.jsx

import React from "react";
import LeadForm from "./LeadForm";

export default function ExitIntentPopup({
  isOpen,
  onClose,
  scriptUrl,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        p-4
        bg-black/70
        backdrop-blur-md
      "
    >
      {/* Overlay */}

      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-lg
          bg-white
          rounded-[32px]
          shadow-2xl
          overflow-hidden
          animate-[fadeIn_.4s_ease]
        "
      >
        {/* Top Banner */}

        <div
          className="
            bg-gradient-to-r
            from-rose-500
            to-pink-500
            p-6
            text-center
            text-white
          "
        >
          <div className="text-5xl mb-3">
            🎓
          </div>

          <h2 className="text-3xl font-bold">
            Wait Before You Leave!
          </h2>

          <p className="mt-3 text-white/90">
            Limited seats are available for the
            upcoming batch.
          </p>
        </div>

        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-white
            text-3xl
            font-light
            hover:scale-110
            transition
          "
        >
          ×
        </button>

        {/* Body */}

        <div className="p-8">

          {/* Offer Box */}

          <div
            className="
              bg-rose-50
              border
              border-rose-100
              rounded-2xl
              p-5
              text-center
              mb-6
            "
          >
            <div className="text-3xl mb-2">
              🎁
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Get Free Career Guidance
            </h3>

            <p className="text-gray-600 mt-2">
              Fill the form below and receive
              course details, fee structure and
              career guidance on WhatsApp.
            </p>
          </div>

          {/* Benefits */}

          <div className="space-y-3 mb-6">

            <div className="flex items-center gap-3">
              <span>✅</span>
              <span className="text-gray-700">
                27+ Years Experience
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span>✅</span>
              <span className="text-gray-700">
                100% Practical Training
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span>✅</span>
              <span className="text-gray-700">
                Professional Certification
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span>✅</span>
              <span className="text-gray-700">
                Earn Up To ₹1 Lakh Per Month
              </span>
            </div>

          </div>

          {/* Form */}

          <LeadForm
            placementTag="google_ads_exit_popup"
            scriptEndpoint={scriptUrl}
            onSuccess={onClose}
          />

          {/* Footer Text */}

          <p className="text-center text-xs text-gray-500 mt-5">
            🔒 Your information is safe and secure.
          </p>

        </div>
      </div>
    </div>
  );
}