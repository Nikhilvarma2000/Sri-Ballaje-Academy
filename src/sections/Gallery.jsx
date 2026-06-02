// src/sections/Gallery.jsx

import React, { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Bridal Makeup",
      subtitle: "Traditional Bridal Look",
      image:
        "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "HD Makeup",
      subtitle: "Camera Ready Finish",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Air Brush Makeup",
      subtitle: "Premium Bridal Finish",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Reception Makeup",
      subtitle: "Elegant Evening Look",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Hair Styling",
      subtitle: "Professional Hairstyles",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Student Practice",
      subtitle: "Live Model Training",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm">
            ✨ Student Work & Makeup Looks
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Looks You Will Learn
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            Learn professional bridal makeup, HD makeup,
            airbrush makeup, hairstyling and saree draping
            through practical training.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
            >

              <div className="aspect-[4/5] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-white/90 text-sm mt-2">
                  {item.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Lightbox */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-900">
                {selectedImage.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {selectedImage.subtitle}
              </p>

              <button
                onClick={() => {
                  setSelectedImage(null);

                  document
                    .getElementById("enroll-form")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-6 w-full md:w-auto px-8 h-14 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-lg"
              >
                🎓 Join & Learn This Look
              </button>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}