// src/sections/Hero.jsx

import React from "react";
import LeadForm from "../components/LeadForm";

export default function Hero({ scriptUrl }) {
  return (
    <section 
    className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 lg:py-24">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      
      


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-6">
              ✨ Limited Seats Available
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Zero Knowledge to
              <span className="block text-rose-600">
                Professional Beautician
              </span>
              Complete Training Program
            </h1>

            {/* Sub Heading */}
            <h2 className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              Start Your Beautician Career Under the Guidance of a
              <span className="text-rose-600 font-bold">
                {" "}27 Years Experienced Industry Expert
              </span>
            </h2>

            {/* Income Highlight */}
            <div className="mt-8">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 rounded-2xl shadow-lg">
                <span className="text-black font-bold text-lg md:text-xl">
                  💰 Join The Course & Earn Up To ₹1 Lakh Per Month
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Learn Bridal Makeup, HD Makeup, Airbrush Makeup,
              Saree Draping, Hair Styling, Skin Care, Salon Techniques
              and Professional Client Handling through practical
              hands-on training.
            </p>

            {/* Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

              <div className="bg-white rounded-2xl p-5 shadow-lg border border-rose-100">
                <h3 className="text-3xl font-bold text-rose-600">
                  27+
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg border border-rose-100">
                <h3 className="text-3xl font-bold text-rose-600">
                  100%
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Practical Training
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg border border-rose-100">
                <h3 className="text-3xl font-bold text-rose-600">
                  ₹1L+
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Monthly Income Potential
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div
            className="lg:col-span-5 w-full max-w-md mx-auto"
            id="enroll-form"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden">

              {/* Top Gradient Strip */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-rose-500 via-pink-400 to-yellow-400" />

              {/* Seats Left Badge */}
              <div className="absolute top-5 right-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Only few Seats Left
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  Book Your Slot Now 
                </h3>

                <p className="text-gray-600 text-sm mt-2 mb-6">
                  Get Course Details, Fee Structure,
                  Career Guidance & Placement Support
                  Information on WhatsApp.
                </p>

                <LeadForm
                  placementTag="google_ads_hero"
                  scriptEndpoint={scriptUrl}
                />

                <p className="text-xs text-gray-500 text-center mt-5">
                  🔒 Your information is 100% secure and will never be shared.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}