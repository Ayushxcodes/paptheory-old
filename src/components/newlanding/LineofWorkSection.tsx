"use client";

import React from "react";
import { useRouter } from "next/navigation";

type LineItem = {
	id: string;
	index: string;
	name: string;
	desc: string;
	services: string[];
};

const ITEMS: LineItem[] = [
	{
		id: "communications",
		index: "01",
		name: "Communications",
		desc: "Strategy-first communications that build reputation and protect brand equity — from corporate messaging to national campaigns.",
		services: ["Brand Strategy", "PR", "Corporate Comms", "Social Impact"],
	},
	{
		id: "creative",
		index: "02",
		name: "Creative",
		desc: "Idea-led creative across campaigns, identity and content. We turn ideas into culture — built to reach Gen Z where they actually are.",
		services: ["Campaigns", "Brand Identity", "Content", "Social-First"],
	},
	{
		id: "media",
		index: "03",
		name: "Media",
		desc: "Data-driven planning and buying that puts the right work in front of the right audience — broadcast, digital and OOH, with analytics that prove ROI.",
		services: ["Media Planning", "Digital", "Broadcast", "Performance"],
	},
	{
		id: "technology",
		index: "04",
		name: "Technology",
		desc: "Enterprise-grade consulting and product engineering — SAP BTP, AI, cloud and full-stack. With live demos across healthcare, supply chain, mining and more.",
		services: ["AI & Automation", "ERP", "Cloud", "Product Engineering"],
	},
];

type Props = {
	onSelect?: (id: string) => void;
};

const LineofWorkSection: React.FC<Props> = ({ onSelect }) => {
	const router = useRouter();

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
		else window.location.href = `/${id}`;
	};

	return (
		<section id="work" className="section bg-white py-8 md:py-10 px-6 md:px-14">
			  <div className="section-header mb-8">
				<div>
			  <div className="section-label text-orange-600 uppercase tracking-widest text-sm">What We Do</div>
			  <h2 className="section-title font-serif text-3xl md:text-6xl lg:text-7xl font-normal mt-3">Four ways we<br />move people</h2>
				</div>
			</div>

			<div className="lob grid gap-6">
				{ITEMS.map((it) => (
					<div
						key={it.id}
						role="button"
						tabIndex={0}
						onClick={() => handleClick(it.id)}
						onKeyDown={(e) => { if (e.key === 'Enter') handleClick(it.id); }}
						className="lob-item group grid grid-cols-[56px_1fr_auto] items-start gap-6 py-8 border-t border-gray-200 hover:bg-gray-50 transition-transform duration-200 transform hover:-translate-y-0.5 cursor-pointer"
					>
						<div className="lob-index text-orange-600 font-medium">{it.index}</div>

						<div className="lob-main">
							  <div className="lob-name font-serif text-3xl md:text-5xl lg:text-6xl text-gray-900">{it.name}</div>
							  <div className="lob-desc text-base md:text-lg text-gray-600 mt-4 max-w-3xl">{it.desc}</div>
							<div className="lob-services flex flex-wrap gap-3 mt-4">
								{it.services.map((s) => (
									<span key={s} className="lob-service text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">{s}</span>
								))}
							</div>
						</div>

						<div className="lob-go flex items-center justify-center">
							<button
								aria-label={`Open ${it.name}`}
								className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:border-orange-400 group-hover:text-orange-500 transition-colors transform group-hover:-translate-y-0.5"
							>
								<span className="sr-only">Open {it.name}</span>
								<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
									<path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default LineofWorkSection;

