import React from "react";

const CTASection: React.FC = () => {
	return (
		<section className="section contact py-20 px-6 md:px-14 bg-white text-gray-900 border-t border-gray-200" id="contact">
			<div className="max-w-[1200px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					<div>
						<h2 className="contact-heading font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
							Let&apos;s make<br />
							something <em className="italic text-orange-500">worth</em>
							<br />seeing.
						</h2>
					</div>

					<div>
						<p className="contact-body text-gray-600 mb-6">
							A brand story, a campaign, a media plan, or an enterprise platform — or all of it, working as one. Tell us what you&apos;re trying to move.
						</p>
						<button
							className="inline-block bg-orange-500 text-black font-medium py-3 px-6 rounded-full mb-6 hover:bg-orange-600 transition-colors cursor-pointer"
							onClick={() => (window.location.href = "mailto:consulting@papertheorynet.com")}
						>
							Start a Conversation →
						</button>

						<div className="contact-list text-sm text-gray-500 space-y-3">
							<div className="contact-row">
								<span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">General</span>{" "}
								official@papertheorynet.com
							</div>
							<div className="contact-row">
								<span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">IT &amp; Tech</span>{" "}
								consulting@papertheorynet.com
							</div>
							<div className="contact-row">
								<span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">Location</span>{" "}
								Gurgaon, India · Working globally
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
