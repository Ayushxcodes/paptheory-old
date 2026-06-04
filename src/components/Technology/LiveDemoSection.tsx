"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const DEMOS = [
  {
    badge: "CareFlow",
    title: "CareFlow Healthcare Portal",
    desc: "Appointment and follow-up system with AI speech-to-text. MVP demoed to a US clinic.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.24), transparent 70%), #ffff",
    src: "/cut_careflow.mp4",
    action: "play",
  },
  {
    badge: "Ayurveda · Inventory",
    title: "Hospital Inventory Management",
    desc: "CAPEX/OPEX inventory portal with AI for an Ayurvedic hospital. MVP ready, in discussion.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.22), transparent 70%), #ffff",
    src: "/ayurved_cut.mp4",
    action: "play",
  },
  {
    badge: null,
    title: "Your industry next?",
    desc: "We adapt our field-ops and AI platforms to new verticals fast. Let's talk about yours.",
    posterStyle: "linear-gradient(135deg,#b83e08,var(--orange))",
    src: null,
    action: "contact",
  },
];

const LiveDemoSection: React.FC = () => {
  const router = useRouter();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeDemo, setActiveDemo] = useState<typeof DEMOS[number] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const v = videoRefs.current[index];
    if (v) {
      v.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const v = videoRefs.current[index];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const handleClick = (d: typeof DEMOS[number]) => {
    if (d.action === "contact") {
      handleContact();
    } else if (d.src) {
      setActiveDemo(d);
    }
  };

  const handleContact = () => {
    router.push("/contact");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDemo(null);
      }
    };
    if (activeDemo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeDemo]);

  return (
    <section className="demos section py-12 md:py-16 px-4 md:px-14" id="live-demos">
      <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Live Demos</div>
      <h2 className="section-title font-serif text-3xl md:text-5xl font-normal mb-4">Working platforms, not slideware</h2>
      <p className="text-sm md:text-base text-gray-400 max-w-3xl mb-8">Each of these is a built, runnable demo. Click to watch a short walkthrough.</p>

      <div className="demos-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {DEMOS.map((d, i) => (
          <div
            key={i}
            className={`demo group bg-white border border-gray-200 overflow-hidden rounded-sm cursor-pointer transform transition-all duration-300 md:hover:scale-[1.03] md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:border-orange-600`}
            onClick={() => handleClick(d)}
            onMouseEnter={() => d.src && handleMouseEnter(i)}
            onMouseLeave={() => d.src && handleMouseLeave(i)}
            role={d.action === "contact" ? "link" : "button"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick(d);
            }}
          >
            <div className="demo-thumb relative h-56 sm:h-64 md:h-56 lg:h-72">
              {d.badge && (
                <span className="demo-badge absolute top-3 left-3 text-xs text-orange-500 uppercase tracking-widest bg-black/60 px-3 py-1 rounded">{d.badge}</span>
              )}

              {/* If a video source exists, render the video always and show a play overlay. */}
              {d.src ? (
                <>
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === i ? "opacity-100" : "opacity-60"}`}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={d.src || ""}
                  />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`demo-play w-10 h-10 rounded-full flex items-center justify-center text-black bg-orange-500 transition-transform duration-300 transform ${hoveredIndex === i ? "opacity-0 scale-90" : "group-hover:scale-110"}`}>
                      {d.action === "contact" ? "+" : "▶"}
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="demo-poster absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:scale-105"
                  style={{ background: d.posterStyle }}
                >
                  <div className="demo-play w-10 h-10 rounded-full flex items-center justify-center text-black bg-orange-500 transition-transform duration-300 transform group-hover:scale-110">
                    {d.action === "contact" ? "+" : "▶"}
                  </div>
                </div>
              )}
            </div>

            <div className="demo-info p-4 bg-white transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-gray-50/80">
              <div className="demo-title font-semibold text-sm text-gray-900">{d.title}</div>
              <div className="demo-desc text-xs text-gray-600 mt-2">{d.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {activeDemo && typeof window !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setActiveDemo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-lg overflow-hidden shadow-2xl flex flex-col transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDemo(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-orange-600 text-gray-800 hover:text-white rounded-full p-2 transition-colors focus:outline-none cursor-pointer shadow-sm border border-gray-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={activeDemo.src || ""}
                autoPlay
                controls
                className="w-full h-full object-contain"
                playsInline
              />
            </div>

            {/* Platform Details */}
            <div className="p-6 md:p-8 bg-white">
              <div className="flex items-center gap-3 mb-2">
                {activeDemo.badge && (
                  <span className="text-xs text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded font-medium">
                    {activeDemo.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-gray-900">{activeDemo.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">{activeDemo.desc}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default LiveDemoSection;
