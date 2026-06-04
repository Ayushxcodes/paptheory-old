"use client";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
    return (
        <div className="page" id="page-creative">
                <section className="vd-hero relative overflow-hidden pt-40 md:pt-80">
                    <div
                        className="vd-hero-bg absolute inset-0 -z-10"
                        style={{
                            backgroundImage: "url('/banner2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)",
                        }}
                    />

                    <div className="vd-num hidden lg:block absolute right-6 bottom-0 text-[220px] leading-none font-serif text-[rgba(232,80,10,0.06)] pointer-events-none">02</div>

                    <Link
                        href="/"
                        className="vd-back inline-flex items-center text-sm text-gray-400 absolute top-6 left-6 hover:text-white cursor-pointer"
                    >
                        ← All disciplines
                    </Link>

                    <div className="vd-content relative z-10 px-6 md:px-14 pt-32 pb-8">
                        <div className="vd-eyebrow text-xs tracking-widest uppercase text-orange-500 mb-4">Discipline 02</div>
                        <h1 className="vd-title font-serif text-4xl md:text-6xl lg:text-[92px] font-normal leading-tight text-white max-w-4xl">Creative</h1>
                        <p className="vd-tagline text-base md:text-lg text-gray-300 max-w-3xl mt-6">We engineer perception in the age of visibility. Idea-led creative across campaigns, identity and content — work built to be remembered, not just noticed.</p>
                    </div>
                </section>

                <div className="vd-stats grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-800">
                    <div className="vd-stat p-6 md:p-8 border-r border-b md:border-b-0 border-gray-800">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">45+</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Creative projects</span>
                    </div>
                    <div className="vd-stat p-6 md:p-8 border-r border-b md:border-b-0 border-gray-800">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">Gen Z</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Audience expertise</span>
                    </div>
                    <div className="vd-stat p-6 md:p-8 border-r border-gray-800">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">7+</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Industries served</span>
                    </div>
                    <div className="vd-stat p-6 md:p-8">
                        <span className="vd-stat-num text-3xl font-semibold text-orange-500 block">Multi</span>
                        <span className="vd-stat-label text-sm text-gray-400 mt-2 block">Format capability</span>
                    </div>
                </div>
            </div>
    );
};

export default HeroSection;

