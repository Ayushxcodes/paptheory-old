import React from "react";

const SERVICES = [
  {
    mark: "01",
    title: "AI & Intelligent Automation",
    desc: "GenAI integration, AI forecasting, document extraction and intelligent workflows across enterprise stacks.",
  },
  {
    mark: "02",
    title: "ERP & Enterprise Solutions",
    desc: "SAP BTP, S/4HANA, CAPM, OData and Fiori — architecture, implementation and custom development.",
  },
  {
    mark: "03",
    title: "Web & Mobile Development",
    desc: "React, Node.js full-stack engineering — MVP to production, including offline-first field apps.",
  },
  {
    mark: "04",
    title: "Cloud & DevOps",
    desc: "HANA Cloud, BTP infrastructure, CI/CD and cloud-native architecture for scalable systems.",
  },
  {
    mark: "05",
    title: "Business Process Automation",
    desc: "End-to-end digitisation — delivery, inventory, scheduling and reporting — integrated with ERP.",
  },
  {
    mark: "06",
    title: "Data & Analytics",
    desc: "Real-time dashboards, KPI tracking and rolling forecasts built on HANA and SAC.",
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
            className={`service bg-white p-8 md:p-10 ${i < 3 ? 'border-b border-gray-800' : ''} ${ (i % 3) !== 2 ? 'border-r border-gray-800' : '' } transition-colors duration-200 hover:bg-gray-100`}>
          
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
