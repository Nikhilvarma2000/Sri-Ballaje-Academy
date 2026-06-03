// src/sections/Curriculum.jsx

import React from "react";

export default function Curriculum() {
  const makeupTopics = [
    "No Makeup Look",
    "HD Makeup Look",
    "Sweat Proof Makeup Look",
    "Glassy Makeup Look",
    "Matte Finishing Makeup",
    "Engagement Makeup Look",
    "Air Brush Makeup Look",
    "Classic Makeup Look",
    "Christian Bridal Look",
    "Muslim Bridal Look",
    "Reception Look",
    "Haldi Makeup Look",
    "North Indian Makeup Look",
    "SFX Makeup Look",
    "Cake Makeup Look",
    "Gods Makeup Look",
    "Drag Proof Makeup",
    "Historical Makeup Look",
  ];

  const bonuses = [
    "Course Material",
    "Groom Makeup",
    "Flower Art",
    "Nail Art",
    "Digital Marketing",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm">
            ✨ Professional Makeup Training Program
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            Complete Makeup
            <span className="block text-rose-500">
              Training Program
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed">
            From Zero Knowledge To Professional Makeup Artist.
            Learn Makeup, Hairstyles, Saree Draping,
            Bridal Techniques and Career Building Skills.
          </p>

        </div>

        {/* Top Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-[28px] shadow-lg border border-rose-100 p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl font-bold text-rose-500">
              14+
            </div>

            <h3 className="mt-3 text-xl font-bold text-gray-900">
              Makeup Looks
            </h3>

            <p className="text-gray-500 mt-2">
              Trending Professional Makeup Styles
            </p>

          </div>

          <div className="bg-white rounded-[28px] shadow-lg border border-rose-100 p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl font-bold text-rose-500">
              35+
            </div>

            <h3 className="mt-3 text-xl font-bold text-gray-900">
              Hairstyles
            </h3>

            <p className="text-gray-500 mt-2">
              Basic To Advanced Hair Styling
            </p>

          </div>

          <div className="bg-white rounded-[28px] shadow-lg border border-rose-100 p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl font-bold text-rose-500">
              10+
            </div>

            <h3 className="mt-3 text-xl font-bold text-gray-900">
              Saree Draping
            </h3>

            <p className="text-gray-500 mt-2">
              Traditional & Modern Styles
            </p>

          </div>

        </div>

        {/* Course Info */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

          <div className="bg-white rounded-[28px] p-6 border border-rose-100 shadow-lg text-center">

            <div className="text-4xl mb-3">📍</div>

            <h4 className="font-bold text-gray-900 text-lg">
              Location
            </h4>

            <p className="text-gray-600 mt-2">
              Yousufguda,
              Hyderabad
            </p>

          </div>

          <div className="bg-white rounded-[28px] p-6 border border-rose-100 shadow-lg text-center">

            <div className="text-4xl mb-3">🗣️</div>

            <h4 className="font-bold text-gray-900 text-lg">
              Language
            </h4>

            <p className="text-gray-600 mt-2">
              Telugu
            </p>

          </div>

          <div className="bg-white rounded-[28px] p-6 border border-rose-100 shadow-lg text-center">

            <div className="text-4xl mb-3">⏰</div>

            <h4 className="font-bold text-gray-900 text-lg">
              Timings
            </h4>

            <p className="text-gray-600 mt-2">
              10 AM - 5 PM
            </p>

          </div>

          <div className="bg-white rounded-[28px] p-6 border border-rose-100 shadow-lg text-center">

            <div className="text-4xl mb-3">📅</div>

            <h4 className="font-bold text-gray-900 text-lg">
              Duration
            </h4>

            <p className="text-gray-600 mt-2">
              30 Days
            </p>

          </div>

        </div>

        {/* Main Syllabus */}

        <div className="bg-white rounded-[36px] shadow-xl border border-rose-100 p-6 md:p-12">

          <div className="text-center mb-10">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm">
              📚 Complete Course Syllabus
            </span>

            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">
              Topics You Will Learn
            </h3>

            <p className="text-gray-600 mt-4 text-lg">
              Practical Training From Beginner To Professional Level
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {makeupTopics.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-2xl
                  bg-rose-50
                  border
                  border-rose-100
                  hover:shadow-md
                  transition-all
                "
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <span className="text-green-600 font-bold">
                    ✓
                  </span>
                </div>

                <span className="font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Bonuses Section */}

        <div className="mt-14">

          <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-[36px] p-8 md:p-12 shadow-2xl">

            <div className="text-center">

              <div className="inline-block bg-white text-yellow-600 font-bold px-5 py-2 rounded-full">
                🎁 FREE BONUSES
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6">
                Bonuses Worth ₹30,000
              </h3>

              <p className="text-lg text-gray-800 mt-4">
                Included Absolutely FREE With This Course
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">

              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    p-6
                    text-center
                    shadow-lg
                    font-semibold
                    text-gray-800
                  "
                >
                  {bonus}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Final Highlight */}

        <div className="mt-14">

          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-[36px] p-8 md:p-12 text-center text-white shadow-2xl">

            <h3 className="text-3xl md:text-5xl font-bold">
              Start Your Makeup Career Today
            </h3>

            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Learn Professional Makeup, Hairstyles,
              Saree Draping & Bridal Techniques And
              Build A Career That Can Help You Earn
              Up To ₹1 Lakh Per Month.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ 100% Practical Training
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Professional Certificate
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Career Guidance
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Limited Seats Available
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}