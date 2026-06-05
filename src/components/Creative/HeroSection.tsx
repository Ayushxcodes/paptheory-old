"use client";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
    return (
        <div className="page" id="page-creative">
                <section className="vd-hero relative overflow-hidden pt-40 md:pt-90">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="vd-hero-bg absolute inset-0 -z-10 w-full h-full object-cover"
                    >
                        <source src="/vid2.mp4" type="video/mp4" />
                    </video>
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

                    <div className="vd-content relative z-10 px-6 md:px-14 pt-50 pb-8">
                        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 md:px-10 md:py-4 rounded-sm shadow-2xl mb-6">
                            <h1 className="vd-title font-serif text-4xl md:text-6xl lg:text-[92px] font-normal leading-tight text-orange-500">Creative</h1>
                        </div>
                        <p className="vd-tagline text-base md:text-lg text-orange-500 max-w-3xl mt-6">

We turn ideas into culture — not ads.</p>
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

