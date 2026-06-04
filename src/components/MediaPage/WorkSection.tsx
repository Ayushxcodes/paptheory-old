"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PROJECTS = [
  {
    num: "01",
    title: "Integrated Media & Communications Partnership",
    client: "CNBC India",
    tags: ["Broadcast", "Digital"],
  },
  {
    num: "02",
    title: "National Media Campaign — Automotive Launch",
    client: "Maruti Suzuki India",
    tags: ["Media Planning", "OOH"],
  },
  {
    num: "03",
    title: "Multi-State Campaign Distribution",
    client: "Government of India",
    tags: ["Distribution", "Multilingual"],
  },
];

const WorkSection: React.FC = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };

  return (
    <section className="projects alt bg-white text-gray-900 w-full">
      <div className="w-full px-6 py-12">
        <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Work</div>
        <h2 className="section-title font-serif text-3xl md:text-5xl font-normal mb-8">Selected projects</h2>

        <div className="proj-list">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="proj group grid grid-cols-[56px_1fr] md:grid-cols-[56px_1fr_1fr_auto] items-center gap-6 py-6 px-4 md:px-6 border-t border-gray-200 hover:bg-orange-50 transition-all duration-200 md:hover:pl-7 md:hover:pr-7 cursor-pointer"
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

        
      </div>

      <div className="cta-strip py-12 w-full">
        <div className="w-full px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="cta-strip-text font-serif text-2xl md:text-3xl lg:text-5xl text-black">Let's get your message<br />to the right audience.</div>
          <button onClick={handleContact} className="btn-dark bg-black text-white px-6 py-3 rounded-full">Plan a campaign →</button>
        </div>
      </div>

      

      
    </section>
  );
};

export default WorkSection;
