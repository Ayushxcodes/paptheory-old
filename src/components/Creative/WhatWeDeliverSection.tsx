import React from "react";

const SERVICES = [
  {
    mark: "01",
    title: "Campaign Ideation",
    desc: "Big ideas and platforms that work across digital, OOH, broadcast, social and experiential.",
  },
  {
    mark: "02",
    title: "Brand Identity",
    desc: "Visual identity systems — logos, guidelines and brand expression across every touchpoint.",
  },
  {
    mark: "03",
    title: "Content Production",
    desc: "Video, photography, copy and design produced in-house with a consistent point of view.",
  },
  {
    mark: "04",
    title: "Social-First Creative",
    desc: "Scroll-stopping, shareable creative engineered for Gen Z and the platforms they live on.",
  },
  {
    mark: "05",
    title: "Experiential & Events",
    desc: "Brand experiences and activations — from concept through to execution.",
  },
  {
    mark: "06",
    title: "Packaging & Print",
    desc: "Product packaging, collateral and print design where physical brand expression matters.",
  },
];

const WhatWeDeliverSection: React.FC = () => {
  return (
    <section className="section py-16 px-6 md:px-14" id="capabilities">
      <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">What We Deliver</div>
      <h2 className="section-title font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-8">Capabilities</h2>

      <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800">
        {SERVICES.map((s, i) => (
          <div
            key={s.mark}
            className={`service bg-white p-8 md:p-10 text-gray-800 transition-colors duration-200 hover:bg-gray-100 ${i < 3 ? 'border-b border-gray-800' : ''} ${(i % 3) !== 2 ? 'border-r border-gray-800' : ''}`}
          >
            <div className="si-mark text-sm text-orange-500 font-bold mb-4">{s.mark}</div>
            <div className="si-title font-serif text-xl md:text-2xl font-bold text-black mb-3">{s.title}</div>
            <div className="si-desc text-sm text-gray-800 leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
