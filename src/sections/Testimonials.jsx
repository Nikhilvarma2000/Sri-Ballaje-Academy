// src/sections/Testimonials.jsx

import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sita",
      earning: "₹80,000 / Month",
      review:
        "I visited many institutes before joining, but most of them were charging very high fees. Sri Ballaje Academy offered quality training at an affordable price. The practical training was excellent and now I am earning around ₹80,000 per month.",
    },
    {
      name: "Mounika",
      earning: "Self Employed",
      review:
        "The teaching method was very easy to understand. Every makeup look was explained step by step. This course helped me start working independently and earn my own income.",
    },
    {
      name: "Anitha",
      earning: "₹70,000 / Month",
      review:
        "Joining this academy was one of the best decisions in my career. The practical sessions and guidance helped me gain confidence. Today I am earning around ₹70,000 per month through beauty services.",
    },
    {
      name: "Kavya",
      earning: "Makeup Artist",
      review:
        "I highly recommend this academy for anyone who wants to build a career in beauty and makeup. The course fee is affordable and the training quality is excellent.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50/40 to-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm">
            ⭐ Student Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            What Our Students Say
          </h2>

          <p className="text-gray-600 text-lg mt-5">
            Hundreds of students have transformed their passion into a career.
          </p>

        </div>

        {/* Reviews */}

        <div className="grid md:grid-cols-2 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                border-rose-100
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              {/* Stars */}

              <div className="flex gap-1 mb-5 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}

              <p className="text-gray-600 leading-relaxed">
                "{review.review}"
              </p>

              {/* Student */}

              <div className="mt-6 flex items-center justify-between">

                <div>
                  <h4 className="font-bold text-gray-900">
                    {review.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Student
                  </p>
                </div>

                <div className="bg-rose-100 text-rose-600 font-bold px-4 py-2 rounded-xl">
                  {review.earning}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-rose-100">
            <h3 className="text-4xl font-bold text-rose-500">
              27+
            </h3>
            <p className="mt-2 text-gray-600">
              Years Experience
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-rose-100">
            <h3 className="text-4xl font-bold text-rose-500">
              100%
            </h3>
            <p className="mt-2 text-gray-600">
              Practical Training
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-rose-100">
            <h3 className="text-4xl font-bold text-rose-500">
              ₹1L+
            </h3>
            <p className="mt-2 text-gray-600">
              Income Potential
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}