"use client";
import React from "react";

const PROJECTS = [
  {
    num: "01",
    title: "Field Operations Platform — Scheduling, Inventory, Customer Portal, AI Forecasting",
    client: "Global industrial company · 4 regions · 7 languages",
    tags: ["SAP BTP", "AI", "React"],
  },
  {
    num: "02",
    title: "PO-to-SO Automation with AI Document Extraction",
    client: "Enterprise manufacturing client",
    tags: ["GenAI", "SAP BTP", "UI5"],
  },
  {
    num: "03",
    title: "Clean Core Assessment Dashboard",
    client: "Global engineering firm · Germany",
    tags: ["HANA Cloud", "SAC", "ABAP"],
  },
  {
    num: "04",
    title: "AI-Powered Workforce Management Platform",
    client: "Leading enterprise · 10,000+ employees",
    tags: ["MEAN Stack", "GenAI"],
  },
  {
    num: "05",
    title: "On-Demand Super App — 25+ Categories",
    client: "Onata · Hyderabad",
    tags: ["iOS", "Android", "Node.js"],
  },
];

const WorkSection: React.FC = () => {
  const handleContact = () => {
    const w = window as any;
    if (typeof w.goContact === "function") w.goContact();
    else window.location.href = "/contact";
  };

  return (
    <section className="projects alt bg-white text-gray-900 w-full">
      <div className="w-full px-6 py-12">
        <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Client Experience</div>
        <h2 className="section-title font-serif text-3xl md:text-5xl font-normal mb-8">Delivered in production</h2>

        <div className="proj-list">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="proj group grid grid-cols-[56px_1fr_1fr_auto] items-center gap-6 py-8 px-4 md:px-6 border-t border-gray-200 hover:bg-orange-50 transition-all duration-200 hover:pl-7 hover:pr-7 cursor-pointer"
            >
              <div className="proj-num text-orange-500 font-medium">{p.num}</div>

              <div>
                <div className="proj-title text-base md:text-lg font-semibold">{p.title}</div>
                <div className="proj-client text-sm text-gray-500 mt-1">{p.client}</div>
              </div>

              <div className="proj-tags hidden md:flex gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag text-xs text-gray-600 uppercase tracking-widest border border-gray-200 rounded-full px-3 py-1">{t}</span>
                ))}
              </div>

              <button
                aria-label={`Open project ${p.num}`}
                className="proj-arrow hidden md:inline-flex items-center justify-center text-gray-500 transition-transform duration-200 transform group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                onClick={() => { /* placeholder: navigate to project or open modal */ }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <section className="stack mt-12">
          <div className="section-label text-orange-500 uppercase tracking-widest text-4xl mb-4">Technology Stack</div>
          <div className="stack-tags flex flex-wrap gap-2">
            {[
              "SAP BTP",
              "S/4HANA",
              "CAPM",
              "HANA Cloud",
              "React",
              "Node.js",
              "GenAI / LLM",
              "OData",
              "SAP Fiori",
              "MongoDB",
              "Twilio",
              "SAP Mobile Services",
            ].map((t) => (
              <span key={t} className="stack-tag inline-block text-xl text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        
      </div>

      <div className="cta-strip py-16 w-full">
        <div className="w-full px-6 flex items-center justify-between">
          <div className="cta-strip-text font-serif text-3xl md:text-5xl text-black">Let's get your message<br />to the right audience.</div>
          <button onClick={handleContact} className="btn-dark bg-black text-white px-6 py-3 rounded-full">Plan a campaign →</button>
        </div>
      </div>

      

      
    </section>
  );
};

export default WorkSection;
