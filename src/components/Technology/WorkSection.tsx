"use client";
import React, { useMemo, useState } from "react";

const WorkSection: React.FC = () => {
  const handleContact = () => {
    const w = window as any;
    if (typeof w.goContact === "function") w.goContact();
    else window.location.href = "/contact";
  };

  const works = useMemo(
    () => [
      {
        cat: 'IT · Supply Chain · Intelligent Automation',
        title:
          'From delivery to warehouse — Smart delivery tracking & goods receipt automation for manufacturing plants',
        desc:
          'Built for a large-scale manufacturing operation — A smart field dashboard giving plant teams real-time visibility of incoming material deliveries and live status tracking. An embedded AI assistant lets operators complete goods receipts using plain language — no SAP knowledge needed.',
        region: 'India · Australia · Europe · North America',
        tags: ['SAP BTP', 'Joule AI', 'Supply Chain', 'S/4HANA']
      },
      {
        cat: 'IT · Mining & resources',
        title: 'Field operations platform for a global explosives & mining company',
        desc:
          'A live enterprise platform covering blast scheduling, forecasting, delivery automation, inventory management and customer portal — deployed across four global regions. Built on SAP BTP with AI assistance and mobile offline capability for remote field teams.',
        region: 'Australia · North America · EMEA · Asia',
        tags: ['SAP BTP', 'SAP S/4 HANA', 'Mining', 'Clean Core', 'AI', 'Mobile', 'Web App']
      },
      {
        cat: 'IT · Enterprise HR & Workforce Management',
        title: 'AI-powered workforce management & talent intelligence platform',
        desc:
          'An enterprise talent platform where employees own their profiles, managers get real-time workforce intelligence, resource teams match open roles to available talent instantly, and AI auto-generates CVs — all in one place. Built for 10,000+ users.',
        region: 'India',
        tags: ['MEAN Stack', 'GenAI', 'HR Tech', 'Workforce Management', 'Node.js']
      },
      {
        cat: 'IT · On-demand Services',
        title: 'On-demand services super-app for 25+ service categories',
        desc:
          'A consumer mobile app — built natively for iOS and Android — offering cab booking, food delivery, housekeeping, tutoring and 25+ on-demand services on a single platform. Real-time service matching, live tracking and seamless payments, all deployed on AWS cloud.',
        region: 'New Jersey, USA',
        tags: ['iOS', 'Android', 'Node.js', 'MongoDB', 'AWS']
      },
      {
        cat: 'IT · AI & Automation',
        title: 'Intelligent PO-to-Sales Order automation using AI document extraction',
        desc:
          'Large manufacturers receive dozens of POs daily via email — in different formats, from different vendors. This solution reads incoming POs, extracts data using AI and automatically creates Sales Orders in SAP — eliminating manual entry and cutting processing time from hours to minutes.',
        region: 'India',
        tags: ['GenAI', 'SAP BTP', 'Document AI', 'S/4HANA', 'Process Automation']
      },
      {
        cat: 'Communications · Brand',
        title: 'Gen Z brand campaigns for Maruti Suzuki, ICICI Bank & Mahindra',
        desc:
          'Scroll-stopping content strategies and viral brand campaigns that built real cultural traction with Gen Z audiences across digital platforms.',
        region: 'India',
        tags: ['Brand', 'Gen Z', 'Content']
      }
    ],
    []
  );
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="projects alt bg-white text-gray-900 w-full">
      <div className="w-full px-6 py-12">
        <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Client Experience</div>
        <h2 className="section-title font-serif text-3xl md:text-5xl font-normal mb-8">Delivered in production</h2>

        <div className="proj-list">
          {works.map((p, idx) => (
            <div key={`${idx}-${p.title}`}>
              <div
                onMouseEnter={() => { setHoverIndex(idx); setOpenIndex(null); }}
                onMouseLeave={() => setHoverIndex(null)}
                className="proj relative group grid grid-cols-[56px_1fr] md:grid-cols-[56px_1fr_1fr_auto] items-center gap-6 py-6 px-4 md:px-6 border-t border-gray-200 hover:bg-orange-50 transition-all duration-200 md:hover:pl-7 md:hover:pr-7 cursor-pointer"
              >
                <div className="proj-num text-orange-500 font-medium">{String(idx + 1).padStart(2, "0")}</div>

                <div>
                  <div className="proj-title text-base md:text-lg font-semibold">{p.title}</div>
                  <div className="proj-client text-sm text-gray-500 mt-1">{p.region}</div>
                </div>

                <div className="proj-tags hidden md:flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag text-xs text-orange-500 uppercase tracking-widest border border-orange-200 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>

                <button
                  aria-label={`Open project ${idx + 1}`}
                  className="proj-arrow hidden md:inline-flex items-center justify-center text-gray-500 transition-transform duration-200 transform group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  onClick={() => { /* placeholder: navigate to project or open modal */ }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* mobile toggle button */}
                <button
                  type="button"
                  aria-label={openIndex === idx ? `Close description ${idx + 1}` : `Open description ${idx + 1}`}
                  aria-expanded={openIndex === idx}
                  onClick={(e) => { e.stopPropagation(); setOpenIndex(prev => (prev === idx ? null : idx)); setHoverIndex(null); }}
                  className="md:hidden proj-toggle absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <svg className={`w-5 h-5 transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* description panel */}
              <div className={`proj-desc overflow-hidden transition-all duration-200 px-4 md:px-6 ${(hoverIndex === idx || openIndex === idx) ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                <div className="text-sm text-gray-700">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <section className="stack mt-10">
          <div className="section-label text-orange-500 uppercase tracking-widest text-lg md:text-4xl mb-4">Technology Stack</div>
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
              <span key={t} className="stack-tag inline-block text-sm md:text-xl text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        
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
