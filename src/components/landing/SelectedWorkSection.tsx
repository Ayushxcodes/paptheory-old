"use client";

import Link from "next/link";

export default function SelectedWorkSection() {
  // Array of Gumlet video URLs for the infinite loop - Top row
  const topVideoUrls = [
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
  ];

  // Array of Gumlet video URLs for the infinite loop - Bottom row (different order)
  const bottomVideoUrls = [
    "https://play.gumlet.io/embed/689b34a3e250086ff5bd6f56?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/680104cd3f934d7b33b2f50e?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/680102a1fc3cb0b3238a7589?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/680100853ab3a7b826bb539a?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
    
  ];

  return (
    <section className="relative py-20 md:py-40 overflow-hidden">
      {/* SVG Background */}
      |
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            Selected Work
          </h2>

          <p className="mt-6 text-lg text-[#555555] leading-relaxed">
            Our work spans political communication, institutional
            narrative-building, and strategic creative campaigns. The examples
            below reflect how we apply strategic thinking across contexts —
            not a catalogue of outputs.
          </p>

          <div className="mt-10 h-px w-full bg-[#f99216]/30" />
        </div>

        {/* Infinite Video Loop */}
        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex scroll-animation"
          >
            {topVideoUrls.map((url, index) => (
              <div
                key={index}
                className="shrink-0 w-64 sm:w-80 h-36 sm:h-48 mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <iframe
                  src={url}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  loading="lazy"
                  title={`Work Video ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional static videos for seamless loop */}
        <div className="relative mt-4 sm:mt-8 overflow-hidden">
          <div
            className="flex scroll-animation-reverse"
          >
            {bottomVideoUrls.map((url, index) => (
              <div
                key={`reverse-${index}`}
                className="shrink-0 w-64 sm:w-80 h-36 sm:h-48 mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <iframe
                  src={url}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  loading="lazy"
                  title={`Work Video Reverse ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom CTA Bar */}
      <div className="absolute bottom-0 left-0 w-full h-7 bg-[#f99216] flex items-center justify-center">
        <Link
          href="/works"
          className="text-white text-sm hover:opacity-80 transition"
        >
          Explore Our Work ↓
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .scroll-animation {
            animation: scroll var(--scroll-duration, 20s) linear infinite;
          }

          .scroll-animation-reverse {
            animation: scroll-reverse var(--scroll-duration-reverse, 15s) linear infinite;
          }

          /* Mobile styles - faster animations */
          @media (max-width: 640px) {
            .scroll-animation {
              --scroll-duration: 12s;
            }
            .scroll-animation-reverse {
              --scroll-duration-reverse: 10s;
            }
          }
        `
      }} />
    </section>
  );
}
