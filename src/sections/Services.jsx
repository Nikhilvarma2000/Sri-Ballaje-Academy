// src/sections/Services.jsx

import React from "react";

export default function Services() {
  const features = [
    {
      icon: "👩‍🏫",
      title: "27+ Years Experience",
      description:
        "Learn directly from an Film industry expert with 27 years of professional experience.",
    },
    {
      icon: "💄",
      title: "19+ Makeup Looks",
      description:
        "Master bridal, HD, airbrush, reception and advanced makeup looks.",
    },
    {
      icon: "💇‍♀️",
      title: "35+ Hairstyles",
      description:
        "Learn trending bridal, party and professional hairstyling techniques.",
    },
    {
      icon: "👗",
      title: "10+ Saree Draping Styles",
      description:
        "Traditional and modern saree draping methods taught practically.",
    },
    {
      icon: "🎓",
      title: "100% Practical Training",
      description:
        "Work on live models and gain real-world experience from day one.",
    },
    {
      icon: "📜",
      title: "Certification",
      description:
        "Receive a professional course completion certificate.",
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description:
        "Get guidance on freelancing, bridal bookings and career opportunities.",
    },
    {
      icon: "💰",
      title: "Earn Up To ₹1 Lakh",
      description:
        "Build your own beauty career and start earning after training.",
    },
  ];

  const scrollToForm = () => {
    document
      .getElementById("enroll-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50/40 to-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm">
            ✨ Why Students Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Why Join Sri Ballaje Academy?
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-relaxed">
            Learn professional Makeup skills through practical training,
            live model practice and expert guidance.
          </p>

        </div>

        {/* Features Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
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
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA Section */}

        <div className="mt-20">

          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-[32px] p-10 md:p-14 text-center text-white shadow-2xl">

            <h3 className="text-3xl md:text-5xl font-bold">
              Start Your Makeup Career Today
            </h3>

            <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Join our professional Makeup training program and
              learn skills that can help you build a successful career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

              <button
                onClick={scrollToForm}
                className="
                  bg-white
                  text-rose-600
                  px-8
                  h-14
                  rounded-xl
                  font-bold
                  text-lg
                  shadow-lg
                "
              >
                🎓 Book Your Seat Now
              </button>

              <a
                href="tel:+919948434866"
                className="
                  border-2
                  border-white
                  px-8
                  h-14
                  rounded-xl
                  font-bold
                  text-lg
                  flex
                  items-center
                  justify-center
                "
              >
                📞 Call Now
              </a>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">

              <span>✅ Limited Seats</span>
              <span>✅ Practical Training</span>
              <span>✅ Certificate</span>
              <span>✅ Career Guidance</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}