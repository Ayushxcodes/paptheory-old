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

			<style>{`
				.ornate-quote-svg{position:absolute;left:18px;top:10px;opacity:0.12}
				.ornate-quote-text{font-family: Georgia, 'Times New Roman', serif; font-style:italic; font-size:1.05rem}
				@media(min-width:768px){.ornate-quote-text{font-size:1.25rem}}
				@media(min-width:1024px){.ornate-quote-text{font-size:1.45rem}}
				.testi{transition:transform .32s cubic-bezier(.2,.9,.2,1),box-shadow .32s}
				.testi:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(16,24,40,0.08)}
			`}</style>
			<div className="testi-grid grid gap-6 grid-cols-1 md:grid-cols-3">
				{TESTIMONIALS.map((t, i) => (
					<div key={i} className="testi bg-white border border-gray-200 rounded-md p-6 md:p-8 text-gray-900 relative overflow-hidden">
						<svg className="ornate-quote-svg w-16 h-16 text-orange-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<path d="M22 18c-6 0-10 5-10 11 0 6 4 11 10 11 3 0 6-1 8-3 1-1 2-3 2-5 0-3-2-5-5-5-1 0-2 0-3 1-1 0-1 1-1 2 0 1 0 1 0 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<blockquote className="testi-quote ornate-quote-text leading-relaxed pl-2">“{t.quote}”</blockquote>
						<div className="border-t border-gray-100 mt-6 pt-5">
							<div className="testi-name text-sm font-semibold text-gray-900">{t.name}</div>
							<div className="testi-role text-xs text-gray-500 mt-1">{t.role}</div>
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

