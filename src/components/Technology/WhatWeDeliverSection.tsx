"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
	{
		mark: "01",
		title: "ERP & Enterprise Architecture",
		desc: "Production-grade SAP BTP and S/4HANA programmes — designed and built end-to-end by a certified BTP Solution Architect.",
		stack: [
			"SAP BTP",
			"S/4HANA",
			"CAPM",
			"Fiori",
			"SAPUI5",
			"OData",
			"ABAP",
			"SAP Build Apps",
			"SAP Build Process Automation",
			"SAP Mobile Services",
			"SAP Joule",
			"Workzone",
			"Clean Core",
			"BTP DMS"
		],
	},
	{
		mark: "02",
		title: "AI & Intelligent Automation",
		desc: "GenAI, RAG and document AI embedded inside real enterprise workflows — not chatbot demos, not slide-deck pilots.",
		stack: [
			"GenAI",
			"LLMs",
			"RAG",
			"LangChain",
			"Vector Search",
			"SAP AI Core",
			"Document AI",
			"SAP Document Information Extraction",
			"Machine Learning",
			"Predictive Analytics",
			"Digital Twins",
			"Forecasting"
		],
	},
	{
		mark: "03",
		title: "Web & Mobile Development",
		desc: "Modern full-stack product engineering for web, iOS and Android — from MVP to enterprise-scale rollout.",
		stack: [
			"React",
			"Angular",
			"Node.js",
			"Express",
			"JavaScript",
			"TypeScript",
			"MEAN Stack",
			"MongoDB",
			"Mongoose",
			"Native iOS",
			"Android",
			"Hapi.js",
			"WebSockets",
			"REST APIs"
		],
	},
	{
		mark: "04",
		title: "Cloud, DevOps & Integration",
		desc: "Cloud-native platforms, CI/CD pipelines and integration fabric — the plumbing that keeps everything running.",
		stack: [
			"HANA Cloud",
			"Cloud Foundry",
			"AWS",
			"EC2",
			"Cloud-Native",
			"CI/CD Pipelines",
			"DevOps",
			"Microservices",
			"API Integration",
			"nginx",
			"Redis",
			"Twilio",
			"Stripe",
			"Socket.io"
		],
	},
	{
		mark: "05",
		title: "Business Process Automation",
		desc: "Workflow orchestration and process automation that removes hours of manual work, with audit trails baked in.",
		stack: [
			"Business Process Automation",
			"SAP Build Process Automation",
			"Workflow Orchestration",
			"System Integration",
			"OData",
			"Role-Based Access",
			"Token Auth"
		],
	},
	{
		mark: "06",
		title: "Data & Analytics",
		desc: "Decision-grade dashboards on real-time data — from finance to field operations.",
		stack: [
			"SAP Analytics Cloud",
			"HANA Cloud",
			"HANA Calculation Views",
			"Python",
			"Predictive Analytics",
			"KPI Dashboards",
			"Real-Time Reporting"
		],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.03,
			delayChildren: 0.1,
		},
	},
};

const tagVariants = {
	hidden: { opacity: 0, y: 12, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 140,
			damping: 15,
		},
	},
};

const WhatWeDeliverSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number>(0);

	const toggleCap = (i: number) => {
		setOpenIndex((prev) => (prev === i ? -1 : i));
	};

	return (
		<section className="py-20 md:py-28 bg-white text-neutral-900" id="capabilities">
			<div className="mx-auto max-w-[1440px] px-6 md:px-12">
				
				{/* Section Header */}
				<div className="mb-12 md:mb-16">
					<span className="text-[10px] md:text-xs text-[#e8500a] font-semibold tracking-[0.25em] uppercase mb-4 block">
						CAPABILITIES
					</span>
					<h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-4xl">
						The full enterprise tech stack — architected, not assembled.
					</h2>
				</div>

				{/* Accordion Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-400/60 rounded-3xl overflow-hidden">
					{SERVICES.map((s, i) => {
						const isOpen = openIndex === i;
						const isLeft = i % 2 === 0;
						
						return (
							<div
								key={s.mark}
								className={`bg-white transition-all duration-300 border-neutral-400/60 ${
									isLeft ? "md:border-r" : ""
								} ${
									i < 5 ? "border-b" : ""
								} ${
									i < 4 ? "md:border-b" : "md:border-b-0"
								}`}
							>
								{/* Accordion Header */}
								<div
									className="flex items-center justify-between cursor-pointer p-8 md:p-10 hover:bg-[#fff8f4]/30 transition-colors"
									onClick={() => toggleCap(i)}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											toggleCap(i);
										}
									}}
								>
									<div className="flex flex-col items-start">
										<span className="text-xs md:text-sm text-[#e8500a] font-semibold tracking-wider mb-2">
											{s.mark}
										</span>
										<span className="font-serif text-xl md:text-2xl lg:text-[26px] text-neutral-900 font-normal leading-snug">
											{s.title}
										</span>
									</div>
									<svg
										className={`w-6 h-6 text-neutral-400 transition-transform duration-300 flex-shrink-0 ${
											isOpen ? "rotate-180 text-[#e8500a]" : ""
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
									</svg>
								</div>

								{/* Accordion Body */}
								<div
									className={`overflow-hidden transition-all duration-500 ease-in-out ${
										isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
									}`}
								>
									<div className="p-8 md:p-10 pt-0 md:pt-0 text-sm md:text-base lg:text-lg text-neutral-900 leading-relaxed font-light">
										<p className="mb-6">{s.desc}</p>
										{s.stack && (
											<motion.div
												variants={containerVariants}
												initial="hidden"
												animate={isOpen ? "visible" : "hidden"}
												className="flex flex-wrap gap-2"
											>
												{s.stack.map((t) => (
													<motion.span
														key={t}
														variants={tagVariants}
														className="bg-transparent border border-neutral-200/80 text-xs md:text-sm text-neutral-600 px-3.5 py-1.5 rounded-full font-light hover:border-[#e8500a]/60 hover:text-[#e8500a] hover:bg-[#e8500a]/5 transition-colors duration-300 cursor-default"
														whileHover={{ scale: 1.05, y: -2 }}
														whileTap={{ scale: 0.95 }}
													>
														{t}
													</motion.span>
												))}
											</motion.div>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>

			</div>
		</section>
	);
};

export default WhatWeDeliverSection;
