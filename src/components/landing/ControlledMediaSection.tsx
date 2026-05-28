"use client";

export default function ControlledMediaSection() {
  return (
    <section className="w-full min-h-screen lg:min-h-screen flex items-center bg-[#ECEAE6] py-32 lg:py-0">

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[620px]">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium tracking-tight text-neutral-900">
            Controlled Media &amp; Amplification
          </h2>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-neutral-300" />

          {/* Intro copy */}
          <p className="mt-10 text-sm leading-6 text-neutral-900 max-w-[560px]">
            Amplification without discipline weakens credibility.
          </p>

          <p className="mt-4 text-sm leading-6 text-neutral-700 max-w-[560px]">
            We manage distribution and media amplification selectively,
            ensuring messages are delivered with accuracy, restraint, and
            contextual awareness.
          </p>

          {/* Inclusions */}
          <div className="mt-12">
            <p className="text-xs uppercase tracking-wide text-neutral-600">
              This includes
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-700 max-w-[560px]">
              <li>Strategic media planning</li>
              <li>Selective influencer engagement</li>
              <li>Message protection and rollout discipline</li>
            </ul>
          </div>

          {/* Framing statement */}
          <p className="mt-14 text-xs leading-5 text-neutral-600 max-w-[520px]">
            Media is used when it strengthens trust — not simply to increase
            reach.
          </p>
        </div>
      </div>
    </section>
  );
}
