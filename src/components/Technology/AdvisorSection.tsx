"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AdvisorSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 15 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<section className="py-20 md:py-28 bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					
					{/* Left Column - Profile Card */}
					<div className="lg:col-span-6 relative">
						{/* Orange backdrop glow highlight - placed behind the card */}
						<div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#e8500a]/20 via-[#e8500a]/4 to-transparent blur-3xl rounded-full pointer-events-none -mr-16 -mt-16 z-0"></div>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							whileHover={{ y: -6, boxShadow: "0 30px 60px -15px rgba(232,80,10,0.08)", borderColor: "rgba(232,80,10,0.2)" }}
							className="relative z-10 bg-white/40 backdrop-blur-md border border-neutral-200/40 rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.015),inset_0_1px_1px_rgba(255,255,255,0.6)] overflow-hidden"
						>
							{/* Header */}
							<div className="relative flex items-center gap-5 mb-8">
							<div className="w-20 h-20 rounded-full border-2 border-[#e8500a]/20 p-1 flex-shrink-0 relative">
								<div className="w-full h-full rounded-full overflow-hidden relative">
									<Image
										src="/prashant.jpeg"
										alt="Prashant Agarwal"
										fill
										className="object-cover"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1.5">
								<h3 className="font-serif text-2xl md:text-3xl text-neutral-800 font-semibold leading-tight">
									Prashant Agarwal
								</h3>
								<Link
									href="https://www.linkedin.com/in/agarawal-prashant/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs text-[#e8500a] hover:underline font-medium inline-flex items-center gap-1.5 transition-colors"
								>
									{/* Small custom SVG LinkedIn icon */}
									<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
										<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
									</svg>
									View profile on LinkedIn →
								</Link>
							</div>
						</div>

						{/* Detail Rows */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="relative flex flex-col"
						>
							{/* Certified */}
							<motion.div 
								variants={itemVariants}
								whileHover={{ x: 6 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								className="border-t border-neutral-200/60 py-5 flex items-start gap-5 transition-colors duration-200 hover:bg-[#e8500a]/5 px-4 -mx-4 rounded-xl cursor-default"
							>
								<span className="w-24 text-[10px] md:text-[11px] text-[#e8500a] font-semibold tracking-widest uppercase shrink-0 pt-0.5">
									Certified
								</span>
								<span className="text-xs md:text-sm text-neutral-700 leading-relaxed font-light">
									SAP Associate — Backend Developer (CAP) · SAP Associate — Fiori Application Developer · Certified SAP Instructor — BTP100, CLD200
								</span>
							</motion.div>

							{/* Focus */}
							<motion.div 
								variants={itemVariants}
								whileHover={{ x: 6 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								className="border-t border-neutral-200/60 py-5 flex items-start gap-5 transition-colors duration-200 hover:bg-[#e8500a]/5 px-4 -mx-4 rounded-xl cursor-default"
							>
								<span className="w-24 text-[10px] md:text-[11px] text-[#e8500a] font-semibold tracking-widest uppercase shrink-0 pt-0.5">
									Focus
								</span>
								<span className="text-xs md:text-sm text-neutral-700 leading-relaxed font-light">
									Full-spectrum enterprise tech — SAP BTP, AI, cloud, full-stack
								</span>
							</motion.div>

							{/* Onsite */}
							<motion.div 
								variants={itemVariants}
								whileHover={{ x: 6 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								className="border-t border-neutral-200/60 py-5 flex items-start gap-5 transition-colors duration-200 hover:bg-[#e8500a]/5 px-4 -mx-4 rounded-xl cursor-default"
							>
								<span className="w-24 text-[10px] md:text-[11px] text-[#e8500a] font-semibold tracking-widest uppercase shrink-0 pt-0.5">
									Onsite
								</span>
								<span className="text-xs md:text-sm text-neutral-700 leading-relaxed font-light">
									Delivered in Australia, Germany & India
								</span>
							</motion.div>

							{/* Experience */}
							<motion.div 
								variants={itemVariants}
								whileHover={{ x: 6 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								className="border-t border-neutral-200/60 py-5 flex items-start gap-5 transition-colors duration-200 hover:bg-[#e8500a]/5 px-4 -mx-4 rounded-xl cursor-default"
							>
								<span className="w-24 text-[10px] md:text-[11px] text-[#e8500a] font-semibold tracking-widest uppercase shrink-0 pt-0.5">
									Experience
								</span>
								<span className="text-xs md:text-sm text-neutral-700 leading-relaxed font-light">
									14+ years of enterprise-grade delivery
								</span>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>

					{/* Right Column - Text Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						className="lg:col-span-6 flex flex-col justify-center"
					>
						<span className="text-[10px] md:text-xs text-[#e8500a] font-semibold tracking-[0.25em] uppercase mb-6">
							Deep Expertise, Direct Involvement
						</span>
						
						<h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight mb-8">
							<span className="text-[#e8500a]"><em className="italic font-serif font-normal">The architect</em></span> who scopes your project is the one who builds it.
						</h2>

						<div className="flex flex-col gap-6 text-neutral-600 text-sm md:text-base font-light leading-relaxed max-w-2xl">
							<p>
								Our technology practice is led by an SAP-certified BTP Solution Architect with 14+ years of enterprise delivery — with production systems shipped onsite in Australia, Germany and India across mining, manufacturing, oil & gas and large-scale enterprise programmes.
							</p>
							<p>
								That means when you work with us, you're not handed to a junior team behind a slide deck. You work directly with someone who has architected and built the kind of system you need — end to end, in production, at global scale.
							</p>
						</div>

						{/* Divider & Signature */}
						<div className="w-full border-t border-neutral-200/80 my-8"></div>
						
						<div className="flex flex-col gap-1">
							<span className="font-serif text-lg md:text-xl text-neutral-800 font-semibold">
								Prashant Agarwal
							</span>
							<span className="text-xs md:text-sm text-neutral-500 font-light">
								Technology Consulting Partner · Paper Theory Networks
							</span>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
