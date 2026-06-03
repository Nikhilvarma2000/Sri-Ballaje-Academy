// src/sections/Gallery.jsx

import React, { useState, useEffect, useRef } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Bridal Makeup",
    subtitle: "Traditional Bridal Transformation",
    category: "Most Popular",
    tag: "👑 Signature Look",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&auto=format&fit=crop&q=80",
    accent: "#f43f5e",
  },
  {
    id: 2,
    title: "HD Makeup",
    subtitle: "Camera Ready Finish",
    category: "HD Makeup",
    tag: "📸 Studio Grade",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&auto=format&fit=crop&q=80",
    accent: "#ec4899",
  },
  {
    id: 3,
    title: "Air Brush",
    subtitle: "Premium Bridal Finish",
    category: "Air Brush",
    tag: "✨ Ultra Smooth",
    image: "https://images.unsplash.com/photo-1631214503951-366ec33a8f6d?w=1200&auto=format&fit=crop&q=80",
    accent: "#f472b6",
  },
  {
    id: 4,
    title: "Reception Look",
    subtitle: "Elegant Evening Glam",
    category: "Reception",
    tag: "🌙 Evening Look",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&auto=format&fit=crop&q=80",
    accent: "#fb7185",
  },
  {
    id: 5,
    title: "Hair Styling",
    subtitle: "Professional Hairstyles",
    category: "Hair Styling",
    tag: "💫 Hair Artistry",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&auto=format&fit=crop&q=80",
    accent: "#f9a8d4",
  },
  {
    id: 6,
    title: "Student Training",
    subtitle: "Live Model Practice",
    category: "Training",
    tag: "🎓 Hands-On",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=80",
    accent: "#fda4af",
  },
];

const stats = [
  { value: "19+", label: "Makeup Looks", icon: "💄" },
  { value: "35+", label: "Hairstyles", icon: "💇‍♀️" },
  { value: "10+", label: "Saree Draping", icon: "🥻" },
  { value: "100%", label: "Practical Training", icon: "✅" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedImage]);

  const scrollToForm = () => {
    setSelectedImage(null);
    setTimeout(() => {
      document.getElementById("enroll-form")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .gallery-section {
          font-family: 'DM Sans', sans-serif;
          background: #fdf8f6;
          overflow: hidden;
          position: relative;
        }

        .gallery-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .gallery-section::after {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(251,113,133,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .display-font {
          font-family: 'Cormorant Garamond', serif;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }

        .stat-card {
          background: white;
          border: 1px solid rgba(244,63,94,0.12);
          border-radius: 24px;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 4px 24px rgba(244,63,94,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(244,63,94,0.04) 0%, transparent 60%);
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(244,63,94,0.14);
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #f43f5e;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #78716c;
          margin-top: 6px;
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        /* ── Featured card ── */

        .card-featured {
          position: relative;
          border-radius: 36px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
          transition: transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease;
        }

        .card-featured:hover {
          transform: scale(1.015);
          box-shadow: 0 32px 80px rgba(0,0,0,0.24);
        }

        .card-featured img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(.22,1,.36,1);
        }

        .card-featured:hover img { transform: scale(1.06); }

        /* ── Small cards ── */

        .card-small {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
        }

        .card-small:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 60px rgba(0,0,0,0.2);
        }

        .card-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(.22,1,.36,1);
        }

        .card-small:hover img { transform: scale(1.1); }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,5,5,0.92) 0%, rgba(10,5,5,0.2) 45%, transparent 100%);
        }

        .card-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #f43f5e;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 24px 28px;
        }

        .card-category {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fda4af;
          margin-bottom: 6px;
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 700;
          color: white;
          line-height: 1.1;
        }

        .card-title-sm {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.3rem, 2vw, 1.6rem);
          font-weight: 700;
          color: white;
          line-height: 1.15;
        }

        .card-subtitle {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
          margin-top: 4px;
        }

        /* ── Hover reveal strip ── */

        .card-hover-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, #f43f5e, #ec4899);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .card-small:hover .card-hover-strip,
        .card-featured:hover .card-hover-strip { transform: scaleX(1); }

        /* ── Features strip ── */

        .feature-strip {
          background: white;
          border: 1px solid rgba(244,63,94,0.1);
          border-radius: 32px;
          padding: 40px 32px;
          box-shadow: 0 8px 40px rgba(244,63,94,0.07);
        }

        .feature-item {
          text-align: center;
          padding: 20px 16px;
          border-radius: 20px;
          transition: background 0.3s ease;
        }

        .feature-item:hover { background: #fff1f2; }

        .feature-icon {
          font-size: 2.8rem;
          margin-bottom: 14px;
          display: block;
          line-height: 1;
        }

        .feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1c1917;
          margin-bottom: 6px;
        }

        .feature-desc {
          font-size: 0.82rem;
          color: #78716c;
          line-height: 1.5;
        }

        /* ── CTA Banner ── */

        .cta-banner {
          background: linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #db2777 100%);
          border-radius: 36px;
          padding: 56px 40px;
          text-align: center;
          box-shadow: 0 24px 60px rgba(244,63,94,0.35);
          position: relative;
          overflow: hidden;
        }

        .cta-banner::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
        }

        .cta-banner::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -40px;
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
        }

        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          color: white;
          line-height: 1.15;
          position: relative; z-index: 1;
        }

        .cta-desc {
          color: rgba(255,255,255,0.88);
          font-size: 1rem;
          max-width: 520px;
          margin: 16px auto 0;
          position: relative; z-index: 1;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 32px;
          background: white;
          color: #f43f5e;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          cursor: pointer;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative; z-index: 1;
        }

        .cta-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 16px 48px rgba(0,0,0,0.25);
        }

        /* ── Section heading ── */

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: linear-gradient(135deg, #fff1f2, #fce7f3);
          border: 1px solid rgba(244,63,94,0.2);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #f43f5e;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 700;
          color: #1c1917;
          line-height: 1.05;
          margin-top: 20px;
        }

        .section-title span {
          display: block;
          color: #f43f5e;
          font-style: italic;
        }

        .section-desc {
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          color: #78716c;
          max-width: 600px;
          margin: 20px auto 0;
          line-height: 1.7;
        }

        /* ── Divider line ── */
        .ornament-line {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
          margin: 12px auto 0;
          width: fit-content;
        }
        .ornament-line span {
          display: block;
          height: 1px;
          width: 60px;
          background: linear-gradient(to right, transparent, #f43f5e);
        }
        .ornament-line span:last-child {
          background: linear-gradient(to left, transparent, #f43f5e);
        }

        /* ── Lightbox ── */

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(10,5,5,0.92);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }

        .lightbox-card {
          background: white;
          border-radius: 36px;
          overflow: hidden;
          max-width: 860px;
          width: 100%;
          max-height: 92vh;
          overflow-y: auto;
          box-shadow: 0 40px 120px rgba(0,0,0,0.5);
          animation: slideUp 0.35s cubic-bezier(.22,1,.36,1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97) }
          to   { opacity: 1; transform: translateY(0) scale(1) }
        }

        .lightbox-card::-webkit-scrollbar { width: 0; }

        .lightbox-img-wrap {
          position: relative;
          height: min(420px, 45vw);
          min-height: 240px;
        }

        @media (max-width: 640px) {
          .lightbox-img-wrap { height: 260px; min-height: unset; }
        }

        .lightbox-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .lightbox-close {
          position: absolute;
          top: 16px; right: 16px;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: white;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: transform 0.2s ease;
          color: #1c1917;
          font-weight: 700;
        }

        .lightbox-close:hover { transform: scale(1.1) rotate(90deg); }

        .lightbox-body { padding: 32px 36px 40px; }

        @media (max-width: 640px) { .lightbox-body { padding: 24px 20px 32px; } }

        .lightbox-cat {
          display: inline-block;
          background: #fff1f2;
          color: #f43f5e;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .lightbox-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #1c1917;
          margin-top: 14px;
          line-height: 1.1;
        }

        .lightbox-sub {
          color: #78716c;
          margin-top: 8px;
          font-size: 0.95rem;
        }

        .lightbox-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .lightbox-tag {
          background: #fdf2f8;
          border: 1px solid rgba(244,63,94,0.15);
          color: #be185d;
          padding: 10px 18px;
          border-radius: 14px;
          font-size: 0.82rem;
          font-weight: 500;
        }

        .lightbox-cta {
          margin-top: 28px;
          width: 100%;
          padding: 18px;
          border-radius: 20px;
          background: linear-gradient(135deg, #f43f5e, #ec4899);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(244,63,94,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          letter-spacing: 0.02em;
        }

        .lightbox-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(244,63,94,0.4);
        }

        /* ── Responsive Grid ── */

        .main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 1024px) {
          .main-grid {
            grid-template-columns: 2fr 1fr;
          }
        }

        .right-stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (min-width: 1024px) {
          .right-stack {
            grid-template-columns: 1fr;
          }
        }

        .featured-height {
          height: 300px;
        }

        @media (min-width: 640px) { .featured-height { height: 420px; } }
        @media (min-width: 1024px) { .featured-height { height: 560px; } }

        .small-height { height: 180px; }

        @media (min-width: 640px) { .small-height { height: 200px; } }
        @media (min-width: 1024px) { .small-height { height: 268px; } }

        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 20px;
        }

        @media (min-width: 640px) {
          .bottom-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .bottom-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .bottom-card-height { height: 280px; }

        @media (min-width: 640px) { .bottom-card-height { height: 320px; } }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        @media (min-width: 640px) {
          .feature-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="gallery-section py-20 sm:py-28" ref={sectionRef}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>

          {/* ── Heading ── */}
          <div className={`text-center fade-up ${visible ? 'visible' : ''}`}>
            <div className="section-badge">💄 Student Portfolio Showcase</div>
            <h2 className="section-title">
              Makeup Looks
              <span>You Will Master</span>
            </h2>
            <div className="ornament-line">
              <span /><span style={{ fontSize: '1.1rem' }}>✦</span><span />
            </div>
            <p className="section-desc">
              Master Bridal Makeup, HD Makeup, Air Brush, Hair Styling,
              Reception Looks & Professional Makeup Techniques through
              hands-on live practical training.
            </p>
          </div>

          {/* ── Stats ── */}
          <div className={`stats-grid mt-14 mb-14 fade-up delay-2 ${visible ? 'visible' : ''}`}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{s.icon}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Featured + Right ── */}
          <div className={`main-grid fade-up delay-2 ${visible ? 'visible' : ''}`}>

            {/* Featured */}
            <div
              className="card-featured featured-height"
              onClick={() => setSelectedImage(galleryItems[0])}
            >
              <img src={galleryItems[0].image} alt={galleryItems[0].title} />
              <div className="card-overlay" />
              <div className="card-tag">{galleryItems[0].tag}</div>
              <div className="card-info">
                <div className="card-category">{galleryItems[0].category}</div>
                <div className="card-title">{galleryItems[0].title}</div>
                <div className="card-subtitle">{galleryItems[0].subtitle}</div>
              </div>
              <div className="card-hover-strip" />
            </div>

            {/* Right stack */}
            <div className="right-stack">
              {galleryItems.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="card-small small-height"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="card-overlay" />
                  <div className="card-tag" style={{ fontSize: '0.65rem', padding: '5px 10px' }}>{item.tag}</div>
                  <div className="card-info" style={{ padding: '16px 18px 20px' }}>
                    <div className="card-category">{item.category}</div>
                    <div className="card-title-sm">{item.title}</div>
                    <div className="card-subtitle">{item.subtitle}</div>
                  </div>
                  <div className="card-hover-strip" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom Grid ── */}
          <div className={`bottom-grid fade-up delay-3 ${visible ? 'visible' : ''}`}>
            {galleryItems.slice(3).map((item) => (
              <div
                key={item.id}
                className="card-small bottom-card-height"
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="card-overlay" />
                <div className="card-tag">{item.tag}</div>
                <div className="card-info">
                  <div className="card-category">{item.category}</div>
                  <div className="card-title-sm">{item.title}</div>
                  <div className="card-subtitle">{item.subtitle}</div>
                </div>
                <div className="card-hover-strip" />
              </div>
            ))}
          </div>

          {/* ── Features Strip ── */}
          <div className={`feature-strip mt-16 fade-up delay-4 ${visible ? 'visible' : ''}`}>
            <div className="feature-grid">
              {[
                { icon: '👩‍🎓', title: 'Beginner Friendly', desc: 'No Prior Experience Required' },
                { icon: '💄', title: 'Live Practical Training', desc: 'Learn on Real Live Models' },
                { icon: '💰', title: 'Income Potential', desc: 'Earn Up To ₹1 Lakh / Month' },
              ].map((f, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-icon">{f.icon}</span>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Banner ── */}
          <div className={`cta-banner mt-16 fade-up delay-5 ${visible ? 'visible' : ''}`}>
            <h3 className="cta-title">
              Create These Looks<br />Professionally
            </h3>
            <p className="cta-desc">
              Learn step by step through live practical training
              under the guidance of industry experts.
            </p>
            <button className="cta-btn" onClick={scrollToForm}>
              <span>🎓</span> Book Your Seat Now
            </button>
          </div>

        </div>
      </section>

      {/* ── Lightbox ── */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrap">
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,5,5,0.5) 0%, transparent 50%)'
              }} />
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
            </div>
            <div className="lightbox-body">
              <span className="lightbox-cat">{selectedImage.category}</span>
              <div className="lightbox-title">{selectedImage.title}</div>
              <div className="lightbox-sub">{selectedImage.subtitle}</div>
              <div className="lightbox-tags">
                {['✅ Practical Training', '✅ Live Models', '✅ Certificate', '✅ Career Support'].map((t, i) => (
                  <div key={i} className="lightbox-tag">{t}</div>
                ))}
              </div>
              <button className="lightbox-cta" onClick={scrollToForm}>
                🎓 Join & Learn This Look
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}