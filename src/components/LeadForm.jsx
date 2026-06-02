import React, { useState } from "react";

export default function LeadForm({
  placementTag,
  scriptEndpoint,
  onSuccess,
}) {
  const [inputs, setInputs] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const [status, setStatus] = useState("idle");

  const handleFormPost = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formPayload = new URLSearchParams();

      formPayload.append("name", inputs.name);
      formPayload.append("mobile", inputs.mobile);
      formPayload.append("city", inputs.city);
      formPayload.append("source", placementTag);

      await fetch(scriptEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(),
      });

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/LABEL",
        });
      }

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      setStatus("success");

      if (onSuccess) {
        setTimeout(onSuccess, 1500);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>

        <h4 className="text-2xl font-bold text-green-600">
         We will get back to you soon!
        </h4>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Thank you for your interest.
          <br />
          Our counselor will call you shortly and explain the complete course details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormPost} className="space-y-5">
      {/* Name */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          👩 Your Name
        </label>

        <input
          type="text"
          required
          placeholder="Enter Your Name"
          value={inputs.name}
          onChange={(e) =>
            setInputs({
              ...inputs,
              name: e.target.value,
            })
          }
          className="w-full h-14 px-4 rounded-xl border-2 border-rose-100 bg-white text-gray-800 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none transition"
        />
      </div>

      {/* Mobile */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          📞 WhatsApp Number
        </label>

        <input
          type="tel"
          required
          pattern="[0-9]{10}"
          placeholder="Enter WhatsApp Number"
          value={inputs.mobile}
          onChange={(e) =>
            setInputs({
              ...inputs,
              mobile: e.target.value,
            })
          }
          className="w-full h-14 px-4 rounded-xl border-2 border-rose-100 bg-white text-gray-800 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none transition"
        />
      </div>

      {/* City */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          📍 City / Village
        </label>

        <input
          type="text"
          required
          placeholder="Your City Name"
          value={inputs.city}
          onChange={(e) =>
            setInputs({
              ...inputs,
              city: e.target.value,
            })
          }
          className="w-full h-14 px-4 rounded-xl border-2 border-rose-100 bg-white text-gray-800 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none transition"
        />
      </div>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      {/* CTA Button */}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-16 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending"
          ? "Booking Your Seat..."
          : "🎓 Book Your Seat Now"}
      </button>

      {/* Trust Indicators */}

      <div className="pt-2 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>✅</span>
          <span>Free Career Guidance</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>✅</span>
          <span>Limited Seats Available</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>📜</span>
          <span>Certificate After Course Completion</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>🔒</span>
          <span>Your Information Is Safe & Secure</span>
        </div>
      </div>
    </form>
  );
}