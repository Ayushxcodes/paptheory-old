import React from "react";

const SERVICES = [
  {
    mark: "01",
    title: "Media Planning",
    desc: "Channel strategy, audience mapping and media-mix optimisation aligned to objectives and budget.",
  },
  {
    mark: "02",
    title: "Digital Media Buying",
    desc: "Programmatic, social, search and display — precision targeting with performance reporting.",
  },
  {
    mark: "03",
    title: "Broadcast & OOH",
    desc: "TV, radio and out-of-home placement, national and regional — with CNBC partnership experience.",
  },
  {
    mark: "04",
    title: "Performance Marketing",
    desc: "Full-funnel paid media — awareness to conversion — with continuous testing and optimisation.",
  },
  {
    mark: "05",
    title: "Media Analytics",
    desc: "Reach, frequency, attribution and ROI dashboards tying spend to business outcomes.",
  },
  {
    mark: "06",
    title: "Content Distribution",
    desc: "Organic and paid syndication across editorial, influencer and owned channels.",
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
