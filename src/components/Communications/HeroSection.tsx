"use client";
import React from "react";
import Link from "next/link";

const videos = [
	"6904627fa5b40b283e125f54",
];

const HeroSection: React.FC = () => {
	return (
		<div className="page" id="page-communications">
			<section className="vd-hero relative overflow-hidden pt-40 md:pt-80">
				<div className="vd-hero-bg absolute inset-0 -z-10 overflow-hidden">
					<iframe
						src={`https://play.gumlet.io/embed/${videos[0]}?playsinline=1&autoplay=1&mute=1&loop=1&background=1`}
						className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
						allow="autoplay; fullscreen"
					/>
				</div>
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

				<div className="vd-content relative z-10 px-6 md:px-14 pt-48 pb-8">
					<div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 md:px-10 md:py-4 rounded-sm shadow-2xl mb-6">
						<h1 className="vd-title font-serif text-4xl md:text-6xl lg:text-[92px] font-normal leading-tight text-orange-500">Communications</h1>
					</div>
					<p className="vd-tagline text-base md:text-lg text-orange-500 max-w-3xl mt-6">We make your brand talkable</p>
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

