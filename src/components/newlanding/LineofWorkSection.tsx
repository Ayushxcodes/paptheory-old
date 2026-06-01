"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type LineItem = {
	id: string;
	index: string;
	name: string;
	desc: string;
	services: string[];
	visualBg?: string;
	vlabel?: string;
	mediaSrc?: string;
	poster?: string;
};

const ITEMS: LineItem[] = [
	{
		id: "communications",
		index: "01",
		name: "Communications",
		desc: "Strategy-first communications that build reputation and protect brand equity — from corporate messaging to national campaigns and social-impact work.",
		services: ["Brand Strategy", "PR", "Corporate Comms", "Social Impact"],
		visualBg: "radial-gradient(ellipse at 60% 40%, rgba(232,80,10,0.28), transparent 70%), linear-gradient(135deg,#1a1614,#0a0a0a)",
		vlabel: "Campaign film · placeholder",
	},
	{
		id: "creative",
		index: "02",
		name: "Creative",
		desc: "Idea-led creative across campaigns, identity and content. We turn ideas into culture — scroll-stopping work built to reach Gen Z where they actually are.",
		services: ["Campaigns", "Brand Identity", "Content", "Social-First"],
		visualBg: "radial-gradient(ellipse at 40% 50%, rgba(232,80,10,0.32), transparent 70%), linear-gradient(135deg,#1b1512,#0a0a0a)",
		vlabel: "Social reel · placeholder",
	},
	{
		id: "media",
		index: "03",
		name: "Media",
		desc: "Data-driven planning and buying that puts the right work in front of the right audience — broadcast, digital and OOH, with analytics that prove ROI.",
		services: ["Media Planning", "Digital", "Broadcast", "Performance"],
		visualBg: "radial-gradient(ellipse at 55% 45%, rgba(232,80,10,0.24), transparent 70%), linear-gradient(135deg,#181513,#0a0a0a)",
		vlabel: "Performance dashboard · placeholder",
	},
	{
		id: "technology",
		index: "04",
		name: "Technology",
		desc: "Enterprise-grade consulting and product engineering — SAP BTP, AI, cloud and full-stack. With live, working demos across healthcare, supply chain, mining and more.",
		services: ["AI & Automation", "ERP", "Cloud", "Product Engineering"],
		visualBg: "radial-gradient(ellipse at 50% 45%, rgba(232,80,10,0.3), transparent 65%), linear-gradient(135deg,#1c1613,#080808)",
		vlabel: "Platform demo · placeholder",
	},
];

type Props = {
	onSelect?: (id: string) => void;
};

const LineofWorkSection: React.FC<Props> = ({ onSelect }) => {
	const router = useRouter();

	const listRef = useRef<HTMLDivElement | null>(null);
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		const el = listRef.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setRevealed(true);
					obs.unobserve(el);
				}
			});
		}, { threshold: 0.08 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	const handleClick = (id: string) => {
		if (onSelect) return onSelect(id);
		try {
			router.push(`/${id}`);
			return;
		} catch (e) {
			// ignore and fallback to global handler
		}
		// fallback to global function if present (from the reference HTML)
		const w = window as any;
		if (typeof w.showPage === "function") w.showPage(id);
		else window.location.assign(`/${id}`);
	};

	return (
		<section id="work" className="section bg-white py-8 md:py-10 px-6 md:px-14 text-gray-900">
			<style>{`
				.wwd-row{position:relative;overflow:hidden}
				/* wider, darker and slower orange flash */
				.wwd-row::before{content:'';position:absolute;left:-220%;top:-60%;width:120%;height:240%;background:linear-gradient(120deg,rgba(194,65,12,0) 0%, rgba(194,65,12,0.34) 50%, rgba(194,65,12,0) 100%);transform:translateX(-220%) rotate(-12deg);opacity:0;pointer-events:none}
				.wwd-row:hover::before{animation:rowFlash 2000ms cubic-bezier(.2,.9,.2,1) forwards}
				@keyframes rowFlash{0%{transform:translateX(-220%) rotate(-12deg);opacity:0}10%{opacity:1}75%{transform:translateX(150%) rotate(-12deg);opacity:1}100%{transform:translateX(280%) rotate(-12deg);opacity:0}}
				/* reverse rows flash right-to-left */
				.wwd-row.reverse::before{left:auto;right:-220%;transform:translateX(220%) rotate(12deg)}
				.wwd-row.reverse:hover::before{animation:rowFlashReverse 2000ms cubic-bezier(.2,.9,.2,1) forwards}
				@keyframes rowFlashReverse{0%{transform:translateX(220%) rotate(12deg);opacity:0}10%{opacity:1}75%{transform:translateX(-150%) rotate(12deg);opacity:1}100%{transform:translateX(-280%) rotate(12deg);opacity:0}}
			`}</style>
			<div className="section-header mb-4">
				<div>
					<div className="section-label text-orange-600 uppercase tracking-widest text-sm">What We Do</div>
					<h2 className="section-title font-serif text-3xl md:text-6xl lg:text-7xl font-normal mt-3 text-gray-900">Four ways we<br />move people</h2>
				</div>
				<p style={{ maxWidth: '32ch', color: 'var(--muted)', fontWeight: 300, fontSize: 16, marginBottom: 6 }} className="mt-4 text-gray-600">Each discipline stands on its own — and gets sharper when they work together.</p>
			</div>

			<div className="wwd flex flex-col gap-6" ref={listRef}>
				{ITEMS.map((it, idx) => (
					<div
						key={it.id}
						role="button"
						tabIndex={0}
						onClick={() => handleClick(it.id)}
						onKeyDown={(e) => { if (e.key === 'Enter') handleClick(it.id); }}
						className={`wwd-row ${idx % 2 === 1 ? 'reverse md:flex-row-reverse' : ''} flex flex-col md:flex-row items-stretch gap-6 py-10 md:py-12 border-t border-gray-200 cursor-pointer transform transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
					>
						<div className="wwd-text flex-1 px-2 md:px-8 flex flex-col justify-center">
							<div className="wwd-index text-sm text-orange-600 font-medium mb-4">{it.index} — <span className="text-gray-900">{it.name}</span></div>
							<div className="wwd-name font-serif text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">{it.name}</div>
							<div className="wwd-desc text-base md:text-lg text-gray-600 mt-4 max-w-3xl">{it.desc}</div>
							<div className="wwd-tags flex flex-wrap gap-3 mt-6">
								{it.services.map((s) => (
									<span key={s} className="wwd-tag text-xs text-gray-500 border border-gray-200 bg-transparent rounded-full px-3 py-1">{s}</span>
								))}
							</div>
							<div className="wwd-cta text-sm text-orange-600 font-medium mt-6">See the work <span aria-hidden>→</span></div>
						</div>

						<div className="wwd-visual w-full md:w-1/2 relative flex-shrink-0">
							<div className="wwd-visual-media w-full h-56 md:h-72 rounded-sm overflow-hidden relative transform transition-all duration-500 group-hover:scale-105" style={{ background: it.visualBg }}>
								{it.mediaSrc ? (
									<video muted loop playsInline poster={it.poster ?? undefined} className="w-full h-full object-cover">
										<source src={it.mediaSrc} type="video/mp4" />
									</video>
								) : null}
								<div className="play-btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg animate-pulse-slow">
									<svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
										<path d="M10 8l6 4-6 4V8z" fill="currentColor" />
									</svg>
								</div>
								<div className="wwd-vlabel absolute left-4 bottom-4 bg-black/70 text-xs text-white uppercase px-3 py-1 rounded-full transform transition-all duration-300 group-hover:translate-y-[-4px]">{it.vlabel}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default LineofWorkSection;

