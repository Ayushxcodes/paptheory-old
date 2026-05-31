"use client";
import React from "react";

const REELS = [
  { id: "r1", caption: "Messaging that converts", src: "/vid1.mp4" },
  { id: "r2", caption: "Brand personality that sticks", src: "/vid2.mp4" },
  { id: "r3", caption: "Built for Gen Z lifestyle", src: "" },
  { id: "r4", caption: "Organic shareability", src: "" },
];

const SocialCornerSection: React.FC = () => {
  const playReel = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const video = el.querySelector("video") as HTMLVideoElement | null;
    if (!video) return;
    // toggle play/pause; keep muted
    if (video.paused) {
      video.currentTime = 0;
      video.muted = true;
      void video.play();
      el.classList.add("playing");
    } else {
      video.pause();
      el.classList.remove("playing");
    }
  };

  return (
    <section className="reel-section py-16 px-6 md:px-14" id="social-corner">
      <div className="section-label text-orange-500 uppercase tracking-widest text-sm mb-3">Social Corner</div>
      <h2 className="section-title font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-4">Scroll-stopping work,<br />built for culture</h2>
      <p className="text-gray-400 max-w-3xl mb-8" style={{ marginTop: 22, fontWeight: 300, fontSize: 17 }}>
        Authentic messaging, viral thinking, impact first. We make brands talkable in ten seconds or less.
      </p>

      <div className="reel-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REELS.map((r) => (
          <div
            key={r.id}
            className="reel relative aspect-[9/16] rounded-sm overflow-hidden border border-gray-800 bg-[radial-gradient(ellipse_at_center,rgba(232,80,10,0.12),transparent_40%),#0b0b0b]"
            onClick={playReel}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') {/* ignore for now */} }}
          >
            <video muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="">
              {r.src && <source src={r.src} type="video/mp4" />}
            </video>

            <div className="reel-poster absolute inset-0 flex items-end p-6 pointer-events-none">
              <span className="reel-cap text-sm text-gray-200">{r.caption}</span>
            </div>

            <div className="reel-play absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-black text-lg transition-transform transform hover:scale-110">▶</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialCornerSection;
