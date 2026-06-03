// src/sections/Footer.jsx

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToForm = () => {
    document
      .getElementById("enroll-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <footer className="bg-gradient-to-b from-rose-50 to-white border-t border-rose-100">

      {/* Final CTA Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-[32px] p-8 md:p-14 text-center text-white shadow-2xl">

          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Limited Seats Available
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Start Your Makeup Career Today
          </h2>

          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Learn Professional Makeup, Hair Styling,
            Saree Draping and Bridal Techniques from
             Industry Experts.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

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
                hover:scale-105
                transition
              "
            >
              🎓 Book Your Seat Now
            </button>

            <a
              href="tel:+919948434888"
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
                hover:bg-white/10
                transition
              "
            >
              📞 Call Now
            </a>

          </div>

        </div>

      </div>

      {/* Footer Main */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Academy Info */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              Sri Ballaje
            </h3>

            <p className="text-rose-600 font-semibold mt-1">
              Bridal Makeup Studio & Academy
            </p>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Transform your passion into a successful
              Makeup career with practical training
              and professional guidance.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-bold text-gray-900 mb-5">
              Contact Us
            </h4>

            <div className="space-y-4 text-gray-600">

              <p>
                📍 8-3-231/C18/19/A,
                Sri Krishna Nagar,
                Yousufguda,
                Hyderabad,
                Telangana - 500045
              </p>

              <a
                href="tel:+919948434888"
                className="block hover:text-rose-600"
              >
                📞 +91 9948434888
              </a>

              <a
                href="tel:+916281952746"
                className="block hover:text-rose-600"
              >
                📞 +91 6281952746
              </a>

              <a
                href="mailto:pa1makeup@gmail.com"
                className="block hover:text-rose-600"
              >
                ✉️ pa1makeup@gmail.com
              </a>

            </div>

          </div>

          {/* Social + Trust */}

          <div>

            <h4 className="text-xl font-bold text-gray-900 mb-5">
              Follow Us
            </h4>

            <a
              href="https://www.instagram.com/sriballajebridalmakeupstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                bg-white
                border
                border-rose-100
                rounded-xl
                px-5
                py-3
                shadow-md
                hover:shadow-lg
                transition
              "
            >
              📸 Instagram
            </a>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-2 text-gray-600">
                <span>✅</span>
                <span>27+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <span>✅</span>
                <span>100% Practical Training</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <span>✅</span>
                <span>Professional Certification</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <span>✅</span>
                <span>Career Guidance Support</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-rose-100 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © {currentYear} Sri Ballaje Bridal Makeup Studio & Academy.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}