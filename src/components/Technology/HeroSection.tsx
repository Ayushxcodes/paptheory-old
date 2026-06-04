"use client";
import React from "react";

const HeroSection: React.FC = () => {
    return (
        <div className="page" id="page-technology">
            <section className="vd-hero relative overflow-hidden pt-40 md:pt-80">

                    <div
                        className="vd-hero-bg absolute inset-0 -z-10"
                        style={{
                            background:
                                "radial-gradient(ellipse 60% 55% at 80% 30%, rgba(232,80,10,0.14), transparent 55%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(232,80,10,0.06), transparent 55%), linear-gradient(165deg,#0e0e0e,#070707)",
                        }}
                    />

                    <div className="vd-num hidden lg:block absolute right-6 bottom-0 text-[220px] leading-none font-serif text-[rgba(232,80,10,0.06)] pointer-events-none">04</div>

                    <a
                        className="vd-back inline-flex items-center text-sm text-gray-400 absolute top-6 left-6 hover:text-white cursor-pointer"
                        onClick={() => {
                            const w = window as any;
                            if (typeof w.showPage === "function") w.showPage("home");
                            else window.location.href = "/";
                        }}
                    >
                        ← All disciplines
                    </a>

                    <div className="vd-content relative z-10 px-6 md:px-14 pt-32 pb-8">
                        <div className="vd-eyebrow text-xs tracking-widest uppercase text-orange-500 mb-4">Discipline 04</div>
                        <h1 className="vd-title font-serif text-4xl md:text-6xl lg:text-[92px] font-normal leading-tight text-white max-w-4xl">Technology</h1>
                        <p className="vd-tagline text-base md:text-lg text-gray-300 max-w-3xl mt-6">Enterprise-grade consulting and product engineering. We've built field-operations platforms for global companies across 4 regions — and we bring that rigour to every engagement.</p>
                    </div>
                </section>

                <div className="vd-stats grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-800">
                    <div className="vd-stat p-6 md:p-8 border-r border-b md:border-b-0 border-gray-800">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">12+</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Years enterprise delivery</span>
                    </div>
                    <div className="vd-stat p-6 md:p-8 border-r border-b md:border-b-0 border-gray-800">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">4</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Global regions</span>
                    </div>
                    <div className="vd-stat p-6 md:p-8 border-r border-gray-800">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">2</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Live demo platforms</span>
                    </div>
                    <div className="vd-stat p-6 md:p-8">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">AI</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">First approach</span>
                    </div>
                </div>
            </div>
    );
};

export default HeroSection;

