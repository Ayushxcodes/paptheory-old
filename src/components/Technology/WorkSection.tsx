"use client";
import React, { useMemo, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const WorkSection: React.FC = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
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
        tags: ['SAP BTP', 'Joule AI', 'Supply Chain', 'S/4HANA'],
        metric: '4',
        metricLabel: 'regions, live in production'
      },
      {
        cat: 'IT · Mining & resources',
        title: 'Field operations platform for a global explosives & mining company',
        desc:
          'A live enterprise platform covering blast scheduling, forecasting, delivery automation, inventory management and customer portal — deployed across four global regions. Built on SAP BTP with AI assistance and mobile offline capability for remote field teams.',
        region: 'Australia · North America · EMEA · Asia',
        tags: ['SAP BTP', 'SAP S/4 HANA', 'Mining', 'Clean Core', 'AI', 'Mobile', 'Web App'],
        metric: '4',
        metricLabel: 'regions, live in production'
      },
      {
        cat: 'IT · Enterprise HR & Workforce Management',
        title: 'AI-powered workforce management & talent intelligence platform',
        desc:
          'An enterprise talent platform where employees own their profiles, managers get real-time workforce intelligence, resource teams match open roles to available talent instantly, and AI auto-generates CVs — all in one place. Built for 10,000+ users.',
        region: 'India',
        tags: ['MEAN Stack', 'GenAI', 'HR Tech', 'Workforce Management', 'Node.js'],
        metric: '10,000+',
        metricLabel: 'employees managed'
      },
      {
        cat: 'IT · On-demand Services',
        title: 'On-demand services super-app for 25+ service categories',
        desc:
          'A consumer mobile app — built natively for iOS and Android — offering cab booking, food delivery, housekeeping, tutoring and 25+ on-demand services on a single platform. Real-time service matching, live tracking and seamless payments, all deployed on AWS cloud.',
        region: 'New Jersey, USA',
        tags: ['iOS', 'Android', 'Node.js', 'MongoDB', 'AWS'],
        metric: '25+',
        metricLabel: 'service categories'
      },
      {
        cat: 'IT · AI & Automation',
        title: 'Intelligent PO-to-Sales Order automation using AI document extraction',
        desc:
          'Large manufacturers receive dozens of POs daily via email — in different formats, from different vendors. This solution reads incoming POs, extracts data using AI and automatically creates Sales Orders in SAP — eliminating manual entry and cutting processing time from hours to minutes.',
        region: 'India',
        tags: ['GenAI', 'SAP BTP', 'Document AI', 'S/4HANA', 'Process Automation'],
        metric: '1-click',
        metricLabel: 'order creation'
      },
      {
        cat: 'Communications · Brand',
        title: 'Gen Z brand campaigns for Maruti Suzuki, ICICI Bank & Mahindra',
        desc:
          'Scroll-stopping content strategies and viral brand campaigns that built real cultural traction with Gen Z audiences across digital platforms.',
        region: 'India',
        tags: ['Brand', 'Gen Z', 'Content'],
        metric: 'Multi+',
        metricLabel: 'Brands'
      }
    ],
    []
  );
  

  const listRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [stackRevealed, setStackRevealed] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStackRevealed(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Interactive card with 3D parallax on pointer move
  const InteractiveCard: React.FC<{ idx: number; delay?: number; children: React.ReactNode }> = ({ idx, delay = 0, children }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, []);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rotateY = (x - 0.5) * 14; // yaw
        const rotateX = (0.5 - y) * 10; // pitch
        const scale = 1.03;
        el.style.transform = `perspective(1000px) translateZ(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        el.style.transition = `transform 120ms linear`;
        el.style.willChange = 'transform';
        el.style.boxShadow = '0 22px 50px rgba(16,24,40,0.12)';
      });
    };

    const onLeave = () => {
      const el = cardRef.current;
      if (!el) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.style.transition = 'transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease';
      el.style.transform = 'perspective(1000px) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1)';
      el.style.boxShadow = '0 8px 20px rgba(16,24,40,0.06)';
      // revert border and index color
      const inner = el.querySelector('.group') as HTMLElement | null;
      if (inner) {
        inner.style.borderColor = '';
        const num = inner.querySelector('.proj-num') as HTMLElement | null;
        if (num) num.style.color = '';
      }
    };

    const onEnter = () => {
      const el = cardRef.current;
      if (!el) return;
      const inner = el.querySelector('.group') as HTMLElement | null;
      if (inner) {
        inner.style.borderColor = 'rgb(249,115,22)';
        inner.style.transition = 'border-color 200ms ease';
        const num = inner.querySelector('.proj-num') as HTMLElement | null;
        if (num) num.style.color = 'rgb(249,115,22)';
      }
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={onEnter}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="projects alt bg-white text-gray-900 w-full">
      <div className="w-full px-6 py-12">
        <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Client Experience</div>
        <h2 className="section-title font-serif text-3xl md:text-5xl font-normal mb-8">Delivered in production</h2>

        <div className="proj-list" ref={listRef}>
          {works.map((p, idx) => (
            <InteractiveCard key={`${idx}-${p.title}`} idx={idx} delay={idx * 80}>
              <div className={`group mb-6 rounded-xl overflow-hidden border border-gray-200 transition-shadow transform transition-all duration-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="proj relative grid grid-cols-[56px_1fr] md:grid-cols-[56px_1fr_auto] items-center gap-6 py-8 px-4 md:px-6 bg-white transition-colors">
                  <div className="proj-num text-gray-300 text-2xl md:text-4xl font-semibold">{String(idx + 1).padStart(2, "0")}</div>

                  <div>
                    <div className="proj-title font-serif text-lg md:text-2xl text-gray-900 transition-colors">{p.title}</div>
                    <div className="proj-client text-sm text-gray-600 mt-2">{p.region}</div>
                    <div className="proj-tags hidden md:flex gap-2 mt-3">
                      {p.tags.map((t) => (
                        <span key={t} className="proj-tag text-xs text-gray-700 uppercase tracking-widest border border-gray-200 rounded-full px-3 py-1">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="proj-metric hidden md:flex flex-col items-end justify-center ml-4">
                    <div className="text-3xl md:text-4xl text-orange-600 font-serif font-semibold">{p.metric}</div>
                    <div className="text-xs text-gray-500 mt-1">{p.metricLabel}</div>
                  </div>
                </div>

                {/* description panel */}
                <div className="proj-desc overflow-visible transition-all duration-200 px-4 md:px-6 max-h-96 py-4 bg-white">
                  <div className="text-sm text-gray-700">{p.desc}</div>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>

        <section className="section mt-10">
          <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-2">Technology Stack</div>
          <h2 className="section-title font-serif text-2xl md:text-4xl font-normal mb-4">Built on</h2>

          <style>{`
            .pill-sheen{position:relative;display:inline-block}
            .pill-sheen::after{content:'';position:absolute;top:0;left:-120%;width:220%;height:100%;background:linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);transform:skewX(-20deg);opacity:0;transition:opacity .2s}
            .cluster:hover .pill-sheen::after{opacity:1;animation:sheen 900ms linear}
            @keyframes sheen{from{left:-120%}to{left:120%}}
            .cluster-label{position:relative}
            .cluster-label::after{content:'';position:absolute;left:0;bottom:-8px;height:3px;width:0;background:linear-gradient(90deg,#fb923c,#f97316);transition:width .45s cubic-bezier(.2,.9,.2,1)}
            .cluster:hover .cluster-label::after{width:40px}
          `}</style>

          <div className="stack-clusters flex flex-col md:flex-row gap-6" ref={stackRef}>
            {[
              {
                label: 'SAP & Enterprise',
                items: ['SAP BTP','S/4HANA','CAPM','HANA Cloud','SAP Fiori','OData','SAP Mobile Services']
              },
              {
                label: 'Full-Stack & Mobile',
                items: ['React','Node.js','MongoDB','iOS','Android','MEAN Stack']
              },
              {
                label: 'AI & Integration',
                items: ['GenAI / LLM','SAC','Twilio','Document AI','Forecasting']
              }
            ].map((cluster, cIdx) => (
              <div
                key={cluster.label}
                className={`cluster bg-white border border-gray-200 rounded-lg p-4 flex-1 transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${stackRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${cIdx * 120}ms` }}
              >
                <div className="cluster-label text-orange-500 uppercase tracking-widest text-sm mb-3">{cluster.label}</div>
                <div className="cluster-items flex flex-wrap gap-2">
                  {cluster.items.map((t, i) => (
                    <span
                      key={t}
                      className="pill-sheen inline-block text-sm text-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 px-3 py-1 rounded-full transform transition-all duration-400"
                      style={{ transitionDelay: `${cIdx * 80 + i * 40}ms`, opacity: stackRevealed ? 1 : 0, transform: stackRevealed ? undefined : 'translateY(8px) scale(.98)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </div>

      <div className="cta-strip py-12 w-full">
        <div className="w-full px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="cta-strip-text font-serif text-2xl md:text-3xl lg:text-5xl text-black">Let&apos;s get your message<br />to the right audience.</div>
          <button onClick={handleContact} className="btn-dark bg-black text-white px-6 py-3 rounded-full">Plan a campaign →</button>
        </div>
      </div>

      

      
    </section>
  );
};

export default WorkSection;
