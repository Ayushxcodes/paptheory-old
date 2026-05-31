import React from "react";

const SERVICES = [
  {
    mark: "01",
    title: "Brand Strategy",
    desc: "Positioning, messaging architecture and voice systems that give brands a distinct point of view.",
  },
  {
    mark: "02",
    title: "Public Relations",
    desc: "Media relations, press office, editorial coverage and narrative management across print and digital.",
  },
  {
    mark: "03",
    title: "Corporate Communications",
    desc: "Internal comms, investor messaging, leadership communications and annual-report narratives.",
  },
  {
    mark: "04",
    title: "Crisis Communications",
    desc: "Rapid-response protocols, stakeholder management and narrative control under pressure.",
  },
  {
    mark: "05",
    title: "Social-Impact Comms",
    desc: "Campaign strategy for NGOs, government and social enterprises — UNICEF and Govt. of India experience.",
  },
  {
    mark: "06",
    title: "Thought Leadership",
    desc: "Executive profiling, white papers and conference positioning for senior leaders.",
  },
];

const WhatWeDeliverSection: React.FC = () => {
  return (
    <section className="section py-16 px-6 md:px-14" id="capabilities">
      <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">What We Deliver</div>
      <h2 className="section-title font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-8">Capabilities</h2>

      <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800">
        {SERVICES.map((s, i) => {
          const isLast = i === SERVICES.length - 1;
          const bottomClass = i < 3
            ? 'border-b md:border-b border-gray-800'
            : (!isLast ? 'border-b md:border-b-0 border-gray-800' : '');
          const rightClass = (i % 3) !== 2 ? 'md:border-r border-gray-800' : '';

          return (
          <div
            key={s.mark}
            className={`service bg-white p-8 md:p-10 text-gray-800 transition-colors duration-200 hover:bg-gray-100 ${bottomClass} ${rightClass}`}
          >
            <div className="si-mark text-sm text-orange-500 font-bold mb-4">{s.mark}</div>
            <div className="si-title font-serif text-xl md:text-2xl font-bold text-black mb-3">{s.title}</div>
            <div className="si-desc text-sm text-gray-800 leading-relaxed">{s.desc}</div>
            </div>
         ) })}
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
