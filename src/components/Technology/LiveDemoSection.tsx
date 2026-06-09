"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const DEMOS = [
	{
		category: "HEALTHCARE",
		title: "CareFlow",
		desc: "Patient appointments and follow-ups with AI speech-to-text clinical notes. Built so clinicians spend their time on patients, not paperwork.",
		tags: ["React", "Node.js", "GenAI", "Speech-to-Text"],
		src: "/cut_careflow.mp4",
	},
	{
		category: "HOSPITAL & PHARMA",
		title: "AyurVaidya",
		desc: "AyurVaidya is a smart inventory system for Ayurveda hospitals, covering both OPEX — medicines and consumables — and CAPEX — equipment and AMC contracts — with AI that keeps everything tracked and audit-ready.",
		tags: ["AI", "Inventory", "CAPEX", "OPEX", "Barcode Tracking"],
		src: "/ayurved_cut.mp4",
	},
];

const CASES = [
	{
		category: "MINING & EXPLOSIVES",
		title: "Field Operations Intelligence Platform",
		desc: "Field Ops Intelligence is a field operations platform for mining and explosives companies — managing blast scheduling, inbound stock delivery, goods receipt and inventory reconciliation across multiple plants, in real time.",
		imageSrc: "/mining-logo.png",
		stats: [
			{ value: "16 → 1", label: "CLICK / PGR AUTOMATED" },
			{ value: "4", label: "REGIONS LIVE" },
			{ value: "7", label: "LANGUAGES" },
		],
		tags: ["SAP BTP", "S/4HANA", "CAPM", "React.js", "Mobile-Offline", "SAP Joule", "SAP AI Core"],
		cols: "lg:col-span-3",
	},
	{
		category: "MANUFACTURING & SUPPLY CHAIN",
		title: "PO-to-SO Automation",
		desc: "Reads purchase orders arriving by email, extracts the data with Document AI, validates it and creates the Sales Order in SAP automatically — turning hours of manual entry into one click.",
		imageSrc: "/mfg-logo.png",
		stats: [
			{ value: "90%", label: "LESS MANUAL ENTRY" },
			{ value: "Hours → mins", label: "PROCESSING TIME" },
		],
		tags: ["GenAI", "Document AI", "CAPM", "S/4HANA", "SAP Build", "SAP BPA"],
		cols: "lg:col-span-3",
	},
	{
		category: "OIL & GAS",
		title: "StockSense AI",
		desc: "Mobile field execution with AI-powered analytics. Track stock, manage transfers and approvals from any device — while AI flags obsolete materials, predicts replenishment and answers natural language inventory queries.",
		imageSrc: "/oil-logo.png",
		tags: ["SAP Build Apps", "CAPM", "OData", "AI Analytics"],
		cols: "lg:col-span-2",
	},
	{
		category: "ENTERPRISE ANALYTICS",
		title: "Clean Core Assessment Dashboard",
		desc: "Analysed 15+ SAP systems — classified 45,000+ custom objects into standardisation tiers with 360° system-health views to drive S/4HANA migration planning.",
		imageSrc: "/analytics-logo.png",
		stats: [
			{ value: "45,000+", label: "OBJECTS CLASSIFIED" },
		],
		tags: ["SAP BTP", "SAP Analytics Cloud", "CAPM", "S/4HANA"],
		cols: "lg:col-span-2",
	},
	{
		isCTA: true,
		category: "LET'S BUILD YOURS",
		title: "The method travels. New sectors stood up in weeks, not quarters.",
		cols: "lg:col-span-2",
	},
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 80,
			damping: 15,
		},
	},
};

const LiveDemoSection: React.FC = () => {
	const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
	const [activeDemo, setActiveDemo] = useState<typeof DEMOS[number] | null>(null);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const handleMouseEnter = (index: number) => {
		setHoveredIndex(index);
		const v = videoRefs.current[index];
		if (v) {
			v.play().catch(() => {});
		}
	};

	const handleMouseLeave = (index: number) => {
		setHoveredIndex(null);
		const v = videoRefs.current[index];
		if (v) {
			v.pause();
			v.currentTime = 0;
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActiveDemo(null);
			}
		};
		if (activeDemo) {
			window.addEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "hidden";
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [activeDemo]);

	return (
		<section className="py-20 md:py-28 bg-[#fafafa] border-t border-neutral-100 overflow-hidden" id="live-demos">
			<div className="mx-auto max-w-[1440px] px-6 md:px-12">
				
				{/* Section Header */}
				<div className="mb-12">
					<span className="text-[10px] md:text-xs text-[#e8500a] font-semibold tracking-[0.25em] uppercase mb-4 block">
						INDUSTRIES WE BUILD FOR
					</span>
					<h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight mb-4">
						Where we&apos;ve delivered.
					</h2>
					<p className="text-xs md:text-sm text-neutral-600 font-light max-w-3xl leading-relaxed">
						Every tile is a live system — not a concept, not a case study, not a slide.
					</p>
				</div>

				{/* Grid Layout for Interactive Demos */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
				>
					{DEMOS.map((d, i) => (
						<motion.div
							key={i}
							variants={itemVariants}
							className="group flex flex-col bg-white border border-neutral-200/60 rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#e8500a]"
							onClick={() => setActiveDemo(d)}
							onMouseEnter={() => handleMouseEnter(i)}
							onMouseLeave={() => handleMouseLeave(i)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") setActiveDemo(d);
							}}
						>
							{/* Video / Image Container */}
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
								
								{/* Live Badge */}
								<span className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-md text-[#22c55e] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1.5 z-10 border border-green-500/30">
									<span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
									LIVE
								</span>

								{/* Video Element */}
								<video
									ref={(el) => {
										videoRefs.current[i] = el;
									}}
									className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
										hoveredIndex === i ? "opacity-100 scale-105" : "opacity-75"
									}`}
									muted
									loop
									playsInline
									preload="metadata"
									src={d.src}
								/>

								{/* Dark overlay gradient for text contrast */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-0"></div>

								{/* Center Play Button */}
								<div className="absolute inset-0 flex items-center justify-center z-10">
									<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-neutral-800 shadow-lg transition-all duration-300 group-hover:scale-110">
										<svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
								</div>

								{/* Left Bottom Title Block */}
								<div className="absolute bottom-6 left-6 z-10">
									<span className="text-[10px] text-neutral-300 font-semibold tracking-wider mb-1.5 block uppercase">
										{d.category}
									</span>
									<h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-tight">
										{d.title}
									</h3>
								</div>

							</div>

							{/* Description & Badges Footer */}
							<div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-white">
								<p className="text-xs md:text-sm text-neutral-900 leading-relaxed mb-6 font-light">
									{d.desc}
								</p>

								{/* Badges */}
								<div className="flex flex-row gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap">
									{d.tags.map((t) => (
										<span
											key={t}
											className="flex-shrink-0 bg-transparent border border-neutral-200/80 text-[10px] md:text-xs text-neutral-600 px-3 py-1 rounded-full font-light"
										>
											{t}
										</span>
									))}
								</div>
							</div>

						</motion.div>
					))}
				</motion.div>

				{/* Second Grid for Industry Platforms */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mt-12 md:mt-16"
				>
					{CASES.map((c, idx) => {
						if (c.isCTA) {
							return (
								<Link href="/contact" key={idx} className={`${c.cols} flex`}>
									<motion.div
										variants={itemVariants}
										className="w-full bg-[#fff8f4] border border-[#e8500a]/15 rounded-3xl p-8 md:p-10 flex flex-col justify-center min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:border-[#e8500a] cursor-pointer"
									>
										<span className="text-xs md:text-sm text-[#e8500a] font-semibold tracking-[0.25em] uppercase mb-5 block">
											{c.category}
										</span>
										<h3 className="font-serif text-3xl md:text-4xl lg:text-[38px] text-neutral-900 font-bold leading-[1.22] tracking-tight mb-6">
											The method <span className="text-[#e8500a]"><em className="italic font-serif">travels</em></span>. New sectors stood up in weeks, not quarters.
										</h3>
										<div className="flex items-center gap-2 text-[#e8500a] font-semibold text-sm md:text-base group/link">
											<span>Start a conversation</span>
											<svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
											</svg>
										</div>
									</motion.div>
								</Link>
							);
						}

						return (
							<motion.div
								key={idx}
								variants={itemVariants}
								className={`${c.cols} bg-white border border-neutral-200/50 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.008)] transition-all duration-300 hover:-translate-y-2 hover:border-[#e8500a]`}
							>
								<div className="w-full">
									{/* Logo Container */}
									<div className="w-full h-32 bg-[#f5efe9]/60 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-neutral-200/20">
										<Image
											src={c.imageSrc || ""}
											alt={c.title || ""}
											width={56}
											height={56}
											className="object-contain"
										/>
									</div>

									<span className="text-[11px] md:text-xs text-neutral-400 font-semibold tracking-wider uppercase mb-3 block">
										{c.category}
									</span>
									
									<h3 className="font-serif text-2xl md:text-3xl text-neutral-900 font-bold leading-snug mb-4">
										{c.title}
									</h3>
									
									<p className="text-sm md:text-base text-neutral-900 leading-relaxed font-light mb-6">
										{c.desc}
									</p>

									{/* Stats Row */}
									{c.stats && c.stats.length > 0 && (
										<div className="flex flex-wrap items-center gap-x-8 gap-y-4 my-6 pt-6 border-t border-neutral-100">
											{c.stats.map((s, sIdx) => (
												<div key={sIdx} className="flex flex-col">
													<span className="font-serif text-3xl md:text-4xl text-[#e8500a] font-semibold">
														{s.value}
													</span>
													<span className="text-[10px] md:text-xs text-neutral-400 font-semibold tracking-wider uppercase mt-1.5">
														{s.label}
													</span>
												</div>
											))}
										</div>
									)}
								</div>

								{/* Badges */}
								{c.tags && (
									<div className={c.cols.includes("lg:col-span-2")
										? "flex flex-wrap gap-2 pt-4 border-t border-neutral-100/60 mt-6"
										: "flex flex-row gap-2 pt-4 border-t border-neutral-100/60 mt-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap"
									}>
										{c.tags.map((t) => (
											<span
												key={t}
												className={c.cols.includes("lg:col-span-2")
													? "bg-transparent border border-neutral-200/80 text-xs md:text-sm text-neutral-600 px-3.5 py-1.5 rounded-full font-light"
													: "flex-shrink-0 bg-transparent border border-neutral-200/80 text-xs md:text-sm text-neutral-600 px-3.5 py-1.5 rounded-full font-light"
												}
											>
												{t}
											</span>
										))}
									</div>
								)}
							</motion.div>
						);
					})}
				</motion.div>

			</div>

			{/* Modal Lightbox */}
			{activeDemo && typeof window !== "undefined" && createPortal(
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
					onClick={() => setActiveDemo(null)}
					role="dialog"
					aria-modal="true"
				>
					<div
						className="relative w-full max-w-4xl bg-white border border-neutral-200/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col transform transition-all duration-300 scale-100"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={() => setActiveDemo(null)}
							className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-[#e8500a] text-neutral-800 hover:text-white rounded-full p-2.5 transition-colors focus:outline-none cursor-pointer shadow-sm border border-neutral-200"
							aria-label="Close modal"
						>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						{/* Video Container */}
						<div className="relative w-full aspect-video bg-black flex items-center justify-center">
							<video
								src={activeDemo.src}
								autoPlay
								controls
								className="w-full h-full object-contain"
								playsInline
							/>
						</div>

						{/* Platform Details */}
						<div className="p-6 md:p-8 bg-white">
							<div className="flex items-center gap-3 mb-3">
								<span className="text-[10px] text-[#e8500a] uppercase tracking-widest bg-[#e8500a]/10 px-3 py-1 rounded-full font-medium">
									{activeDemo.category}
								</span>
								<span className="bg-green-500/10 text-[#22c55e] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
									<span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
									Live Platform
								</span>
							</div>
							<h3 className="text-xl md:text-2xl font-serif text-neutral-900 font-semibold">{activeDemo.title}</h3>
							<p className="text-xs md:text-sm text-neutral-600 mt-2 leading-relaxed font-light">{activeDemo.desc}</p>
						</div>
					</div>
				</div>,
				document.body
			)}
		</section>
	);
};

export default LiveDemoSection;
