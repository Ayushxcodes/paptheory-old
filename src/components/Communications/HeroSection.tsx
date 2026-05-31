"use client";
import React from "react";

const HeroSection: React.FC = () => {
	return (
		<div className="page" id="page-communications">
			<section className="vd-hero relative overflow-hidden pt-40 md:pt-80">
				<div
					className="vd-hero-bg absolute inset-0 -z-10"
					style={{
						background:
							"radial-gradient(ellipse 70% 60% at 30% 65%, rgba(232,80,10,0.1), transparent 60%), linear-gradient(165deg,#0e0e0e,#070707)",
					}}
				/>

				<div className="vd-num hidden lg:block absolute right-6 bottom-0 text-[220px] leading-none font-serif text-[rgba(232,80,10,0.06)] pointer-events-none">01</div>

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
					<div className="vd-eyebrow text-xs tracking-widest uppercase text-orange-500 mb-4">Discipline 01</div>
					<h1 className="vd-title font-serif text-4xl md:text-6xl lg:text-[92px] font-normal leading-tight text-white max-w-4xl">Communications</h1>
					<p className="vd-tagline text-base md:text-lg text-gray-300 max-w-3xl mt-6">Strategy-first communications that build reputation, protect brand equity, and shift how audiences think — at national and enterprise scale.</p>
				</div>
			</section>

			<div className="vd-stats grid grid-cols-1 md:grid-cols-4 border-t border-gray-700">
				<div className="vd-stat p-8 border-r border-gray-700">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">15+</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">Brand mandates</span>
				</div>
				<div className="vd-stat p-8 border-r border-gray-700">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">8</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">National clients</span>
				</div>
				<div className="vd-stat p-8 border-r border-gray-700">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">Govt.</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">Sector experience</span>
				</div>
				<div className="vd-stat p-8">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">UNICEF</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">Social-impact work</span>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

