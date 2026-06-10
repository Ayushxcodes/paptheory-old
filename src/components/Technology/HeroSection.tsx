"use client";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
	return (
		<div className="page" id="page-technology">
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
						<source src="/technology.mp4" type="video/mp4" />
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
				<div className="vd-num hidden lg:block absolute right-12 bottom-12 text-[220px] leading-none font-serif text-[rgba(232,80,10,0.04)] pointer-events-none">04</div>

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
						Technology
					</div>

					{/* Title */}
					<h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] font-normal leading-[1.08] text-white max-w-4xl tracking-tight">
						Your Business,<br />
						Re<span className="text-orange-500 font-normal">(<em className="italic font-serif">AI</em>)</span>magined
					</h1>

					{/* Tagline/Description */}
					<p className="text-gray-300 text-base md:text-lg max-w-2xl mt-8 mb-16 font-light">
						Custom AI built for your real-world workflows.
					</p>

					{/* Stats Row */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-4xl pt-8 border-t border-white/10">
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">14+</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">Years Experience</span>
						</div>
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">50+</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">IT Solutions Delivered</span>
						</div>
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">15+</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">Industries Covered</span>
						</div>
						<div className="flex flex-col gap-2">
							<span className="text-3xl md:text-4xl font-serif text-orange-500 font-normal">AI-first</span>
							<span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">In Every Build</span>
						</div>
					</div>

				</div>

				{/* Scroll Indicator */}
				<div 
					className="scroll-indicator absolute right-6 bottom-8 md:right-12 md:bottom-12 z-20 text-xs text-white/90 font-medium tracking-[0.08em] uppercase"
					onClick={() => {
						window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
					}}
				>
					SCROLL <span className="scroll-arrow inline-block ml-1">↓</span>
				</div>
			</section>
		</div>
	);
};

export default HeroSection;


