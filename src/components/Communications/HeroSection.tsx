"use client";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
	return (
		<div className="page" id="page-communications">
			<section className="vd-hero relative overflow-hidden pt-40 md:pt-80">
				<div
					className="vd-hero-bg absolute inset-0 -z-10"
					style={{
						backgroundImage: "url('/banner1.png')",
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

				<div className="vd-num hidden lg:block absolute right-6 bottom-0 text-[220px] leading-none font-serif text-[rgba(232,80,10,0.06)] pointer-events-none">01</div>

				<Link
					href="/"
					className="vd-back inline-flex items-center text-sm text-gray-400 absolute top-6 left-6 hover:text-white cursor-pointer"
				>
					← All disciplines
				</Link>

				<div className="vd-content relative z-10 px-6 md:px-14 pt-32 pb-8">
					<div className="vd-eyebrow text-xs tracking-widest uppercase text-orange-500 mb-4">Discipline 01</div>
					<h1 className="vd-title font-serif text-4xl md:text-6xl lg:text-[92px] font-normal leading-tight text-white max-w-4xl">Communications</h1>
					<p className="vd-tagline text-base md:text-lg text-gray-300 max-w-3xl mt-6">Strategy-first communications that build reputation, protect brand equity, and shift how audiences think — at national and enterprise scale.</p>
				</div>
			</section>

			<div className="vd-stats grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-700">
				<div className="vd-stat p-6 md:p-8 border-r border-b md:border-b-0 border-gray-700">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">15+</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">Brand mandates</span>
				</div>
				<div className="vd-stat p-6 md:p-8 md:border-r border-b md:border-b-0 border-gray-700">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">8</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">National clients</span>
				</div>
				<div className="vd-stat p-6 md:p-8 border-r border-gray-700">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">Govt.</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">Sector experience</span>
				</div>
				<div className="vd-stat p-6 md:p-8">
					<span className="vd-stat-num text-3xl font-semibold text-orange-500 block">UNICEF</span>
					<span className="vd-stat-label text-sm text-gray-400 mt-2 block">Social-impact work</span>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

