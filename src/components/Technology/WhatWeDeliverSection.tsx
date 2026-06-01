"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

const SERVICES = [
  {
    mark: "01",
    title: "AI & Intelligent Automation",
    desc: "GenAI integration, AI forecasting, document extraction and intelligent workflows that take repetitive decisions off people's plates across enterprise stacks.",
    stack: ["GenAI / LLM", "RAG", "OCR", "Forecasting"],
  },
  {
    mark: "02",
    title: "ERP & Enterprise Solutions",
    desc: "SAP BTP, S/4HANA, CAPM, OData and Fiori — architecture, implementation and custom development for global operations.",
    stack: ["SAP BTP", "S/4HANA", "CAPM", "Fiori"],
  },
  {
    mark: "03",
    title: "Web & Mobile Development",
    desc: "React and Node.js full-stack engineering — MVP to production, including offline-first apps built for remote field environments.",
    stack: ["React", "Node.js", "iOS", "Android"],
  },
  {
    mark: "04",
    title: "Cloud & DevOps",
    desc: "HANA Cloud, BTP infrastructure, CI/CD pipelines and cloud-native architecture for systems that scale predictably.",
    stack: ["HANA Cloud", "CI/CD", "Cloud-native"],
  },
  {
    mark: "05",
    title: "Business Process Automation",
    desc: "End-to-end digitisation — delivery, inventory, scheduling and reporting — integrated cleanly with the core ERP.",
    stack: ["Workflow", "Integration", "OData"],
  },
  {
    mark: "06",
    title: "Data & Analytics",
    desc: "Real-time dashboards, KPI tracking and rolling forecasts built on HANA and SAC — turning operational data into decisions.",
    stack: ["HANA", "SAC", "Dashboards"],
  },
];
const WhatWeDeliverSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const innerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // ensure refs array length matches SERVICES length
    innerRefs.current = innerRefs.current.slice(0, SERVICES.length);
  }, []);

  // Measure heights after DOM mutations
  useLayoutEffect(() => {
    setHeights(innerRefs.current.map((el) => (el ? el.scrollHeight : 0)));
  }, []);

  // Re-measure on window resize
  useEffect(() => {
    const onResize = () => setHeights(innerRefs.current.map((el) => (el ? el.scrollHeight : 0)));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleCap = (i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="section py-12 md:py-20 px-6 md:px-20 bg-white text-gray-900" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="section-label text-orange-600 uppercase tracking-widest text-sm mb-3">What We Deliver</div>
        <h2 className="section-title font-serif text-4xl md:text-6xl lg:text-7xl font-normal mb-8">Capabilities</h2>

        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 border border-gray-200" id="capGrid">
        {SERVICES.map((s, i) => {
          const isOpen = openIndex === i;
          const row = Math.floor(i / 2);
          const isLeft = i % 2 === 0;
          const addBorderBottom = row < 2; // top two rows have bottom border on md
          return (
            <div
              key={s.mark}
              className={`cap ${isOpen ? 'open' : ''} bg-white ${addBorderBottom ? 'md:border-b border-gray-200' : ''} ${isLeft ? 'md:border-r border-gray-200' : ''}`}
            >
              <div
                className="cap-head flex items-center justify-between cursor-pointer p-8 md:p-10"
                onClick={() => toggleCap(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCap(i); } }}
              >
                <div className="flex items-center gap-8">
                  <span className="cap-mark text-base md:text-lg text-orange-600 font-semibold">{s.mark}</span>
                  <span className="cap-title font-serif text-lg md:text-xl lg:text-2xl text-gray-900">{s.title}</span>
                </div>
                <span className="cap-toggle text-3xl md:text-4xl text-gray-400">{isOpen ? '−' : '+'}</span>
              </div>

              <div
                className="cap-body overflow-hidden transition-all duration-300"
                style={{ maxHeight: isOpen ? `${heights[i] ?? 0}px` : "0px" }}
              >
                <div ref={(el) => { innerRefs.current[i] = el; }} className="cap-body-inner p-8 md:p-10 text-base md:text-lg text-gray-700">
                  {s.desc}
                  {s.stack && (
                    <div className="cap-stack mt-3 flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span key={t} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
