"use client";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
	return (
		<div className="page" id="page-creative">
			<section className="vd-hero relative overflow-hidden min-h-screen flex flex-col justify-end pt-32 pb-16 md:pt-40 md:pb-24">
				{/* Video Background */}
				<div className="vd-hero-bg absolute inset-0 -z-10 overflow-hidden">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
					>
						<source src="/vid2.mp4" type="video/mp4" />
					</video>
				</div>

				{/* Dark Overlay */}
				<div
					className="absolute inset-0 -z-10"
					style={{
						background: "linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.85) 100%)",
					}}
				/>

				{/* Huge background index number */}
				<div className="vd-num hidden lg:block absolute right-12 bottom-12 text-[220px] leading-none font-serif text-[rgba(232,80,10,0.04)] pointer-events-none">02</div>

				{/* Main Content Area */}
				<div className="vd-content relative z-10 px-6 w-full max-w-[1200px] mx-auto mt-auto">
					
					{/* Back Button */}
					<Link
						href="/"
						className="vd-back inline-flex items-center text-xs text-gray-500 hover:text-white cursor-pointer transition-colors mb-8"
					>
						← All disciplines
					</Link>

					{/* Discipline Kicker */}
					<div className="text-orange-500 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-6">
						Creative
					</div>

					{/* Title */}
					<h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] font-normal leading-[1.08] text-white max-w-4xl tracking-tight">
						We Turn Ideas<br />
						Into <span className="text-orange-500 font-normal"><em className="italic font-serif">Culture</em></span>
					</h1>

					{/* Tagline/Description */}
					<p className="text-gray-300 text-base md:text-lg max-w-2xl mt-8 mb-16 font-light">
						We turn ideas into culture — not ads.
					</p>

					{/* Stats Row */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-4xl pt-8 border-t border-white/10">
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">45+</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">Creative Projects</span>
						</div>
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">Gen Z</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">Audience Expertise</span>
						</div>
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">7+</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">Industries Served</span>
						</div>
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">Multi</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">Format Capability</span>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
};

export default HeroSection;

