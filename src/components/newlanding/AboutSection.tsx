import React from "react";

const AboutSection: React.FC = () => {
	return (
		<section
			id="about"
			className="section about bg-white text-gray-900 py-20 px-6 md:px-12 flex gap-12 items-start flex-wrap"
		>
			<div className="w-full md:w-[520px]">
				<div className="section-label text-orange-600 uppercase tracking-widest text-sm mb-4">The Studio</div>
				<h2 className="about-heading font-serif text-4xl md:text-6xl leading-[1.02] m-0 font-normal">
					Four disciplines.
					<br />
					One <em className="italic text-orange-600">creative</em>
					<br />
					intelligence.
				</h2>
			</div>

			<div className="flex-1 min-w-[280px]">
				<p className="about-lead text-lg font-medium mb-4">
					Paper Theory Networks exists because the line between a brand&apos;s story and the systems that deliver it has disappeared.
				</p>

				<p className="about-body text-gray-600 mb-8">
					A campaign is also a data problem. A product launch is also an engineering one. We built a studio where the people who shape what a brand says also build how it reaches, measures and serves its audience — communications, creative, media and technology, working as one team rather than four vendors. The result is fewer hand-offs, a single standard of craft, and ideas that hold their shape from first thought to live system. It's how we've worked with Maruti Suzuki, ICICI Bank, Mahindra and global enterprise clients alike.
				</p>

				<div className="border-t border-gray-200 pt-8">
					<div className="about-meta flex gap-12 flex-wrap items-end">
						<div className="meta-item min-w-[120px]">
							<div className="meta-num text-3xl md:text-4xl font-extrabold text-gray-900">12+</div>
							<div className="meta-label text-sm text-gray-500 mt-1">Years of practice</div>
						</div>

						<div className="meta-item min-w-[120px]">
							<div className="meta-num text-3xl md:text-4xl font-extrabold text-gray-900">45+</div>
							<div className="meta-label text-sm text-gray-500 mt-1">Projects delivered</div>
						</div>

						<div className="meta-item min-w-[120px]">
							<div className="meta-num text-3xl md:text-4xl font-extrabold text-gray-900">4</div>
							<div className="meta-label text-sm text-gray-500 mt-1">Global regions</div>
						</div>

						<div className="meta-item min-w-[120px]">
							<div className="meta-num text-3xl md:text-4xl font-extrabold text-gray-900">20+</div>
							<div className="meta-label text-sm text-gray-500 mt-1">Active clients</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
