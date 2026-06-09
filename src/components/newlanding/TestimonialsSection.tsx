import React from "react";
import { motion, Variants } from "motion/react";

const TESTIMONIALS = [
	{
		quote: "They gave us a way of speaking to a generation that had stopped listening.",
		name: "Marketing Lead",
		role: "National Automotive Brand",
	},
	{
		quote: "A rare partner who can sit in a creative review in the morning and an architecture review in the afternoon — and add value to both.",
		name: "Head of Digital",
		role: "Enterprise Client",
	},
	{
		quote: "We came for the brand work and stayed for the engineering. One team, one standard, across everything.",
		name: "Brand Director",
		role: "Financial Services",
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const cardVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 80,
			damping: 15,
		},
	},
	hover: {
		y: -8,
		borderColor: "rgba(249, 115, 22, 0.4)",
		boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.08), 0 8px 10px -6px rgba(249, 115, 22, 0.08)",
	},
};

const svgVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	visible: {
		opacity: 0.05,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		opacity: 0.16,
		scale: 1.15,
		transition: {
			duration: 0.3,
			ease: "easeOut" as const,
		},
	},
};

const TestimonialsSection: React.FC = () => {
	return (
		<section className="section py-16 px-6 md:px-12" id="testimonials">
			<div className="section-header mb-10">
				<div>
					<div className="section-label text-orange-600 uppercase tracking-widest text-sm">In Their Words</div>
					<h2 className="section-title font-serif text-4xl md:text-5xl lg:text-6xl font-normal mt-3">What clients say</h2>
				</div>
			</div>

			<style>{`
				.ornate-quote-text{font-family: Georgia, 'Times New Roman', serif; font-style:italic; font-size:1.05rem}
				@media(min-width:768px){.ornate-quote-text{font-size:1.25rem}}
				@media(min-width:1024px){.ornate-quote-text{font-size:1.45rem}}
			`}</style>
			
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="testi-grid grid gap-6 grid-cols-1 md:grid-cols-3"
			>
				{TESTIMONIALS.map((t, i) => (
					<motion.div
						key={i}
						variants={cardVariants}
						whileHover="hover"
						className="testi bg-white border border-gray-200 rounded-xl p-6 md:p-8 text-gray-900 relative overflow-hidden flex flex-col justify-between"
					>
						{/* Animated Background Double-Quote SVG */}
						<motion.svg
							variants={svgVariants}
							animate={{
								y: [0, -6, 0],
								rotate: [0, 2, -2, 0],
							}}
							transition={{
								y: {
									duration: 4,
									repeat: Infinity,
									repeatType: "reverse",
									ease: "easeInOut",
									delay: i * 0.4,
								},
								rotate: {
									duration: 5,
									repeat: Infinity,
									repeatType: "reverse",
									ease: "easeInOut",
									delay: i * 0.6,
								},
							}}
							className="absolute left-6 top-6 w-24 h-24 pointer-events-none"
							viewBox="0 0 145 110"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden
						>
							<defs>
								<linearGradient id={`quote-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#ea580c" />
									<stop offset="50%" stopColor="#f97316" />
									<stop offset="100%" stopColor="#eab308" />
								</linearGradient>
							</defs>
							<path
								d="M 15 95 C 25 90 38 80 45 60 C 58.8 60 70 48.8 70 35 C 70 21.2 58.8 10 45 10 C 31.2 10 20 21.2 20 35 C 20 48.8 31.2 60 45 60"
								stroke={`url(#quote-grad-${i})`}
								strokeWidth="10"
								strokeLinecap="round"
							/>
							<path
								d="M 75 95 C 85 90 98 80 105 60 C 118.8 60 130 48.8 130 35 C 130 21.2 118.8 10 105 10 C 91.2 10 80 21.2 80 35 C 80 48.8 91.2 60 105 60"
								stroke={`url(#quote-grad-${i})`}
								strokeWidth="10"
								strokeLinecap="round"
							/>
						</motion.svg>

						{/* Content layer */}
						<div className="relative z-10 flex flex-col justify-between h-full w-full">
							<blockquote className="testi-quote ornate-quote-text leading-relaxed pl-2 mb-6">
								“{t.quote}”
							</blockquote>
							<div className="border-t border-gray-100 pt-5">
								<div className="testi-name text-sm font-semibold text-gray-900">{t.name}</div>
								<div className="testi-role text-xs text-gray-500 mt-1">{t.role}</div>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* CONTACT / CTA */}
			<div className="contact-section mt-16 border-t border-gray-200 pt-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					<div>
						<h2 className="contact-heading font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
							Let&apos;s make<br />
							something <em className="italic text-orange-500">worth</em>
							<br />seeing.
						</h2>
					</div>

					<div>
						<p className="contact-body text-gray-600 mb-6">A brand story, a campaign, a media plan, or an enterprise platform — or all of it, working as one. Tell us what you&apos;re trying to move.</p>
						<button
							className="inline-block bg-orange-500 text-black font-medium py-3 px-6 rounded-full mb-6 hover:bg-orange-600 transition-colors cursor-pointer"
							onClick={() => (window.location.href = 'mailto:consulting@papertheorynet.com')}
						>
							Start a Conversation →
						</button>

						<div className="contact-list text-sm text-gray-500 space-y-3">
							<div className="contact-row"><span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">General</span> official@papertheorynet.com</div>
							<div className="contact-row"><span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">IT &amp; Tech</span> consulting@papertheorynet.com</div>
							<div className="contact-row"><span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">Location</span> Gurgaon, India · Working globally</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;

