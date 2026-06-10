"use client";

import React from "react";
import { motion, Variants } from "motion/react";

const SERVICES = [
	{
		mark: "01",
		title: "Campaign Ideation",
		desc: "Big ideas and platforms that work across digital, OOH, broadcast, social and experiential.",
	},
	{
		mark: "02",
		title: "Brand Identity",
		desc: "Visual identity systems — logos, guidelines and brand expression across every touchpoint.",
	},
	{
		mark: "03",
		title: "Content Production",
		desc: "Video, photography, copy and design produced in-house with a consistent point of view.",
	},
	{
		mark: "04",
		title: "Social-First Creative",
		desc: "Scroll-stopping, shareable creative engineered for Gen Z and the platforms they live on.",
	},
	{
		mark: "05",
		title: "Experiential & Events",
		desc: "Brand experiences and activations — from concept through to execution.",
	},
	{
		mark: "06",
		title: "Packaging & Print",
		desc: "Product packaging, collateral and print design where physical brand expression matters.",
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
	hover: {
		backgroundColor: "#fffbf9",
		y: -4,
		boxShadow: "0 12px 24px -10px rgba(232, 80, 10, 0.12)",
		zIndex: 10,
		transition: {
			duration: 0.25,
			ease: "easeOut",
		},
	},
};

const markVariants: Variants = {
	hidden: { scale: 0.6, opacity: 0, color: "transparent" },
	visible: {
		scale: 1,
		opacity: 1,
		color: "transparent",
		transition: {
			type: "spring",
			stiffness: 110,
			damping: 10,
		},
	},
	hover: {
		color: "#e8500a",
		scale: 1.05,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 15,
		},
	},
};

const WhatWeDeliverSection: React.FC = () => {
	return (
		<section className="section py-16 px-6 md:px-14" id="capabilities">
			<div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">What We Deliver</div>
			<h2 className="section-title font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-8">Capabilities</h2>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-80px" }}
				className="services-grid grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200"
			>
				{SERVICES.map((s, i) => {
					const isLast = i === SERVICES.length - 1;
					const bottomClass = !isLast
						? (i < 3 ? "border-b md:border-b border-gray-200" : "border-b md:border-b-0 border-gray-200")
						: "";
					const rightClass = (i % 3) !== 2 ? "md:border-r border-gray-200" : "";

					return (
						<motion.div
							key={s.mark}
							variants={cardVariants}
							whileHover="hover"
							className={`service bg-white p-8 md:p-10 text-gray-800 relative ${bottomClass} ${rightClass}`}
						>
							<motion.div
								variants={markVariants}
								className="si-mark text-4xl md:text-5xl font-extrabold mb-4"
								style={{ WebkitTextStroke: "1px #e8500a", color: "transparent" }}
							>
								{s.mark}
							</motion.div>
							<div className="si-title font-serif text-xl md:text-2xl font-bold text-black mb-3">{s.title}</div>
							<div className="si-desc text-sm text-gray-800 leading-relaxed">{s.desc}</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default WhatWeDeliverSection;
