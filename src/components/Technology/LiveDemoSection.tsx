"use client";
import React, { useRef, useState } from "react";

const DEMOS = [
  {
    badge: "Supply Chain",
    title: "Field Operations Platform",
    desc: "Scheduling, inventory, delivery automation and AI forecasting for a global industrial company across 4 regions.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.28), transparent 70%), #0c0c0c",
    src: "",
    action: "play",
  },
  {
    badge: "Mining",
    title: "Field Operations Intelligence — Mining",
    desc: "Operations scheduling, real-time inventory and offline-capable mobile capture for remote sites.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.26), transparent 70%), #0c0c0c",
    src: "",
    action: "play",
  },
  {
    badge: "Healthcare",
    title: "Healthcare Portal",
    desc: "Appointment and follow-up system with AI speech-to-text. MVP demoed to a US clinic.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.24), transparent 70%), #0c0c0c",
    src: "",
    action: "play",
  },
  {
    badge: "Ayurveda · Inventory",
    title: "Hospital Inventory Management",
    desc: "CAPEX/OPEX inventory portal with AI for an Ayurvedic hospital. MVP ready, in discussion.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.22), transparent 70%), #0c0c0c",
    src: "",
    action: "play",
  },
  {
    badge: "Vet · AI",
    title: "Pet / Vet Healthcare AI Automation",
    desc: "Healthcare portal adapted for veterinary clinics with AI automation. Nearly demo-ready.",
    posterStyle: "radial-gradient(ellipse at 50% 40%, rgba(232,80,10,0.25), transparent 70%), #0c0c0c",
    src: "",
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
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [playing, setPlaying] = useState<boolean[]>(DEMOS.map(() => false));

  const handlePlay = (index: number) => {
    const v = videoRefs.current[index];
    if (!v) return;
    const next = [...playing];
    if (!next[index]) {
      v.play().catch(() => {});
      next[index] = true;
    } else {
      v.pause();
      next[index] = false;
    }
    setPlaying(next);
  };

  const handleContact = () => {
    const w = window as any;
    if (typeof w.goContact === "function") w.goContact();
    else window.location.href = "/contact";
  };

  return (
    <section className="demos section py-16 px-6 md:px-14" id="live-demos">
      <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Live Demos</div>
      <h2 className="section-title font-serif text-3xl md:text-5xl font-normal mb-4">Working platforms, not slideware</h2>
      <p className="text-sm md:text-base text-gray-400 max-w-3xl mb-8">Each of these is a built, runnable demo. Click to watch a short walkthrough.</p>

      <div className="demos-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEMOS.map((d, i) => (
          <div
            key={i}
            className={`demo group bg-[#070707] border border-gray-800 overflow-hidden rounded-sm cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:border-orange-600`}
            onClick={() => (d.action === "contact" ? handleContact() : handlePlay(i))}
            role={d.action === "contact" ? "link" : "button"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") (d.action === "contact" ? handleContact() : handlePlay(i));
            }}
          >
            <div className="demo-thumb relative h-64 md:h-56 lg:h-72">
              {d.badge && (
                <span className="demo-badge absolute top-3 left-3 text-xs text-orange-500 uppercase tracking-widest bg-black/40 px-3 py-1 rounded">{d.badge}</span>
              )}

              <div
                className={`demo-poster absolute inset-0 flex items-center justify-center transition-transform duration-500 transform ${
                  playing[i] ? "scale-100 opacity-0" : "group-hover:scale-105"
                }`}
                style={{ background: d.posterStyle }}
              >
                <div className={`demo-play w-10 h-10 rounded-full flex items-center justify-center text-black bg-orange-500 transition-transform duration-300 transform group-hover:scale-110 ${
                  playing[i] ? "opacity-0 scale-90" : ""
                }`}>{d.action === "contact" ? "+" : "▶"}</div>
              </div>

              {d.src ? (
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  className={`${playing[i] ? "absolute inset-0 w-full h-full object-cover" : "hidden"}`}
                  muted
                  loop
                  playsInline
                >
                  <source src={d.src} type="video/mp4" />
                </video>
              ) : null}
            </div>

            <div className="demo-info p-4 bg-[#070707] transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-[#0b0b0b]">
              <div className="demo-title font-semibold text-sm text-white">{d.title}</div>
              <div className="demo-desc text-xs text-gray-400 mt-2">{d.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveDemoSection;
