"use client";
import React from "react";

const videoIds = [
  "680100853f934d7b33b2d517",
  "6985d218924a60df4bf0fda8",
  "6985d218742559dc5a11a435",
  "6985d2184db88a967f203e86",
  "6985d218742559dc5a11a433",
  "6985d218742559dc5a11a437",
  "6985d218742559dc5a11a42d",
  "6985cd64742559dc5a10fcf1",
  "6904627faa9e79860d5356fa",
  "6904627fa73e176902710649",
  "6904627fa5b40b283e125f54",
  "6904627fa73e176902710644",
  "68a58031faf881d01d012b62",
  "68a57fe681b867dff3334498",
  "680104cd3f934d7b33b2f50e",
  "680102a2fc3cb0b3238a7593",
  "68010085fc3cb0b3238a62ee",
  "680100853ab3a7b826bb539e",
  "680100853f934d7b33b2d519",
  "68010085fc3cb0b3238a62f6",
  "680100853ab3a7b826bb539a",
];

const SocialCornerSection: React.FC = () => {
  return (
    <section className="reel-section py-12 md:py-16 px-4 md:px-14" id="social-corner">
      <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Social Corner</div>
      <h2 className="section-title font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-4">Scroll-stopping work,<br />built for culture</h2>
      <p className="text-gray-400 max-w-3xl mb-8" style={{ marginTop: 22, fontWeight: 300, fontSize: 17 }}>
        Authentic messaging, viral thinking, impact first. We make brands talkable in ten seconds or less.
      </p>

      <div className="reel-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {videoIds.map((id, index) => (
          <div key={id} className="group bg-white rounded-sm overflow-hidden border border-gray-800">
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://play.gumlet.io/embed/${id}?autoplay=1&muted=1&loop=1&playsinline=1&controls=0`}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
                title={`Work Video ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialCornerSection;
