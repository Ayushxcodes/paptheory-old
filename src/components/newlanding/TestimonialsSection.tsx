import React from "react";

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

const TestimonialsSection: React.FC = () => {
	return (
		<section className="section py-16 px-6 md:px-12" id="testimonials">
			<div className="section-header mb-10">
				<div>
					<div className="section-label text-orange-600 uppercase tracking-widest text-sm">In Their Words</div>
					<h2 className="section-title font-serif text-4xl md:text-5xl lg:text-6xl font-normal mt-3">What clients say</h2>
				</div>
			</div>

			<div className="testi-grid grid gap-6 grid-cols-1 md:grid-cols-3">
				{TESTIMONIALS.map((t, i) => (
					<div key={i} className="testi bg-gray-900 border border-gray-800 rounded-md p-6 md:p-8 text-gray-50">
						<div className="testi-quote italic text-lg md:text-xl leading-relaxed">{t.quote}</div>
						<div className="border-t border-gray-800 mt-6 pt-5">
							<div className="testi-name text-sm font-semibold text-gray-100">{t.name}</div>
							<div className="testi-role text-xs text-gray-400 mt-1">{t.role}</div>
						</div>
					</div>
				))}
			</div>
		
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
							className="inline-block bg-orange-500 text-black font-medium py-3 px-6 rounded-full mb-6 hover:bg-orange-600 transition-colors"
							onClick={() => (window.location.href = 'mailto:hello@papertheorynet.com')}
						>
							Start a Conversation →
						</button>

						<div className="contact-list text-sm text-gray-500 space-y-3">
							<div className="contact-row"><span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">General</span> hello@papertheorynet.com</div>
							<div className="contact-row"><span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">IT &amp; Tech</span> consulting@papertheorynet.com</div>
							<div className="contact-row"><span className="contact-key inline-block w-24 text-xs text-orange-500 uppercase tracking-widest">Location</span> Pune, India · Working globally</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;

