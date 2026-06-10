import React from "react";
import { motion, Variants } from "motion/react";

const leftColumnVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const textItemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
		},
	},
};

const diagramVariants: Variants = {
	hidden: { opacity: 0, scale: 0.85 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1.2,
			type: "spring" as const,
			stiffness: 60,
			damping: 15,
		},
	},
};

const AboutSection: React.FC = () => {
	return (
		<section className="section studio py-20 px-6 md:px-14 bg-white text-gray-900 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="about">
			<style>{`
				.os-diagram {
					position: relative;
					width: 560px;
					height: 560px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				@media (max-width: 1024px) {
					.os-diagram {
						width: 480px;
						height: 480px;
					}
				}
				@media (max-width: 500px) {
					.os-diagram {
						width: 380px;
						height: 380px;
					}
				}
				@media (max-width: 390px) {
					.os-diagram {
						width: 320px;
						height: 320px;
					}
				}
				.os-orbit-wrapper {
					position: absolute;
					width: 100%;
					height: 100%;
					left: 0;
					top: 0;
					animation: rotateOrbit 35s linear infinite;
				}
				.os-spokes {
					position: absolute;
					width: 100%;
					height: 100%;
					left: 0;
					top: 0;
				}
				.os-ring {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					border-radius: 50%;
				}
				.os-ring.r1 {
					width: 39.1%;
					height: 39.1%;
					border: 1px dashed rgba(234, 88, 12, 0.18);
				}
				.os-ring.r2 {
					width: 74.8%;
					height: 74.8%;
					border: 1px solid rgba(234, 88, 12, 0.12);
				}
				.os-core {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					width: 110px;
					height: 110px;
					background: #ffffff;
					border: 2px solid #ea580c;
					border-radius: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					box-shadow: 0 10px 30px rgba(234, 88, 12, 0.16);
					z-index: 20;
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				.os-core:hover {
					transform: translate(-50%, -50%) scale(1.06);
					box-shadow: 0 12px 35px rgba(234, 88, 12, 0.25);
				}
				.os-core b {
					font-size: 1.2rem;
					color: #111827;
					font-weight: 700;
					letter-spacing: 0.05em;
				}
				.os-core small {
					font-size: 0.7rem;
					color: #ea580c;
					text-transform: uppercase;
					font-weight: 600;
					margin-top: 2px;
					letter-spacing: 0.02em;
				}
				.os-node {
					position: absolute;
					width: 96px;
					height: 96px;
					background: #ffffff;
					border: 1px solid rgba(234, 88, 12, 0.22);
					border-radius: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
					z-index: 10;
					animation: counterRotate 35s linear infinite;
					transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;
					cursor: pointer;
				}
				.os-node:hover {
					border-color: #ea580c;
					background: #fffaf7;
					box-shadow: 0 8px 24px rgba(234, 88, 12, 0.18);
				}
				.os-node b {
					font-size: 0.9rem;
					color: #111827;
					font-weight: 600;
				}
				.os-node small {
					font-size: 0.68rem;
					color: #6b7280;
					margin-top: 1px;
				}
				.os-node.n1 {
					left: 50%;
					top: 12.6%;
				}
				.os-node.n2 {
					left: 87.4%;
					top: 50%;
				}
				.os-node.n3 {
					left: 50%;
					top: 87.4%;
				}
				.os-node.n4 {
					left: 12.6%;
					top: 50%;
				}
				@media (max-width: 500px) {
					.os-node {
						width: 80px;
						height: 80px;
					}
					.os-node b {
						font-size: 0.78rem;
					}
					.os-node small {
						font-size: 0.58rem;
					}
					.os-core {
						width: 90px;
						height: 90px;
					}
					.os-core b {
						font-size: 1rem;
					}
					.os-core small {
						font-size: 0.58rem;
					}
				}
				
				@keyframes rotateOrbit {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				@keyframes counterRotate {
					from { transform: translate(-50%, -50%) rotate(0deg); }
					to { transform: translate(-50%, -50%) rotate(-360deg); }
				}
			`}</style>

			{/* Left Column - Text Content */}
			<motion.div
				variants={leftColumnVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="max-w-xl"
			>
				<motion.div variants={textItemVariants} className="section-label text-orange-600 uppercase tracking-widest text-sm mb-4 font-semibold">The Studio</motion.div>
				<motion.h2 variants={textItemVariants} className="about-heading font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-900">
					Where the <em className="italic text-orange-500 font-serif">idea</em><br />
					and the <em className="italic text-orange-500 font-serif">system</em><br />
					are built together.
				</motion.h2>
				<motion.p variants={textItemVariants} className="studio-lead text-lg md:text-xl text-gray-800 font-medium mt-8 leading-relaxed">
					A brand&apos;s story and the technology that delivers it can no longer exist in separate worlds. At Paper Theory Network, they don&apos;t.
				</motion.p>
				<motion.p variants={textItemVariants} className="studio-body text-gray-600 mt-4 leading-relaxed text-base">
					At Paper Theory Network, strategy, communications, creative, media and technology operate as a single team from day one. The people shaping your brand&apos;s message are the same people building the systems that deliver, measure and optimize it.
				</motion.p>
				<motion.p variants={textItemVariants} className="studio-body text-gray-600 mt-4 leading-relaxed text-base">
					The result is faster execution, clearer accountability and stronger outcomes. Fewer handoffs. Less complexity. More momentum.
				</motion.p>
				<motion.p variants={textItemVariants} className="studio-body text-gray-600 mt-4 leading-relaxed text-base">
					From national brands to global enterprises, we create ideas that don&apos;t get diluted in execution—they scale, perform and drive measurable business impact.
				</motion.p>

				
			</motion.div>

			{/* Right Column - Revolving Diagram */}
			<motion.div
				variants={diagramVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="flex items-center justify-center"
			>
				<div className="os-diagram">
					{/* Core Center (Static) */}
					<div className="os-core">
						<b>PTN</b>
						<small>One Team</small>
					</div>

					{/* Revolving Orbit Wrapper */}
					<div className="os-orbit-wrapper">
						<svg className="os-spokes" viewBox="0 0 460 460" preserveAspectRatio="xMidYMid meet" aria-hidden>
							<line x1="230" y1="230" x2="230" y2="58" stroke="rgba(232,80,10,0.25)" strokeWidth="1" />
							<line x1="230" y1="230" x2="402" y2="230" stroke="rgba(232,80,10,0.25)" strokeWidth="1" />
							<line x1="230" y1="230" x2="230" y2="402" stroke="rgba(232,80,10,0.25)" strokeWidth="1" />
							<line x1="230" y1="230" x2="58" y2="230" stroke="rgba(232,80,10,0.25)" strokeWidth="1" />
						</svg>
						
						{/* Concentric rings */}
						<div className="os-ring r2" />
						<div className="os-ring r1" />

						{/* Nodes with counter-rotation to stay upright */}
						<div className="os-node n1">
							<b>Comms</b>
							<small>Reputation</small>
						</div>
						<div className="os-node n2">
							<b>Creative</b>
							<small>Ideas</small>
						</div>
						<div className="os-node n3">
							<b>Media</b>
							<small>Reach</small>
						</div>
						<div className="os-node n4">
							<b>Tech</b>
							<small>Systems</small>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutSection;
