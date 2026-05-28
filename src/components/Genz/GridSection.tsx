"use client";

import { motion } from "motion/react";

const videos = [
  "https://play.gumlet.io/embed/6985d218742559dc5a11a435",
  "https://play.gumlet.io/embed/6985d2184db88a967f203e86",
  "https://play.gumlet.io/embed/6985d218742559dc5a11a433",
  "https://play.gumlet.io/embed/6985d218742559dc5a11a437",
  "https://play.gumlet.io/embed/6985d218742559dc5a11a42d",
  "https://play.gumlet.io/embed/6985cd64742559dc5a10fcf1",
];

export default function VibeSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* 🌈 Radial Background */}
      {/* Removed for white background consistency */}

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-black leading-[0.95] text-black"
        >
          Content Creator Space
          <br />
          <span className="text-yellow-500 drop-shadow-[4px_4px_0px_black]">
            Reel-Scroller Space
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-black/70 max-w-2xl mx-auto"
        >
          We collaborate with the best for your brand to stand out .
        </motion.p>

        {/* ================= VIDEO GRID ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {videos.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* 16:9 VIDEO */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`${src}?autoplay=1&muted=1&loop=1&playsinline=1`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                />
              </div>

              {/* ICON BAR */}
              <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100">
                <div className="flex items-center gap-6 text-black">

                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/>
                  </svg>

                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 15a4 4 0 01-4 4H8l-4 4V7a4 4 0 014-4h9a4 4 0 014 4z"/>
                  </svg>

                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>

                </div>

                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FLOATING TAGS ================= */}

      {/* ================= FLOATING TAGS ================= */}
<div className="pointer-events-none absolute inset-0 z-10">

  {/* BIG TAG 1 */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className="absolute top-[8%] left-[6%] bg-pink-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-xl rotate-[-14deg]"
  >
    Ignore Market Noise
  </motion.div>

  {/* BIG TAG 2 */}
  <motion.div
    animate={{ y: [0, 14, 0] }}
    transition={{ repeat: Infinity, duration: 5 }}
    className="absolute bottom-[12%] right-[8%] bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-bold shadow-xl rotate-[10deg]"
  >
    Assets Grow Daily 📈
  </motion.div>

  {/* EXTRA TAGS */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 6 }}
    className="absolute top-[30%] right-[12%] bg-black text-white px-5 py-2 rounded-full text-sm font-semibold rotate-[18deg]"
  >
    Long Term Wins
  </motion.div>

  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 5.5 }}
    className="absolute bottom-[28%] left-[12%] bg-blue-400 text-white px-5 py-2 rounded-full text-sm font-semibold rotate-[-18deg]"
  >
    Smart  Fast
  </motion.div>

  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ repeat: Infinity, duration: 7 }}
    className="absolute top-[50%] left-[4%] bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium rotate-[12deg]"
  >
    Real Growth
  </motion.div>

</div>


{/* ================= MANY SWIGGLY LINES ================= */}
<div className="pointer-events-none absolute inset-0 z-0">

  {/* Pink Bottom Center */}
  <motion.svg
    animate={{ x: [0, 8, -8, 0] }}
    transition={{ repeat: Infinity, duration: 7 }}
    className="absolute bottom-[20%] left-[35%] w-40 h-16 text-pink-500"
    viewBox="0 0 200 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
  >
    <path d="M0 25 Q25 0 50 25 T100 25 T150 25 T200 25" />
  </motion.svg>

  {/* Yellow Top Right */}
  <motion.svg
    animate={{ x: [0, -6, 6, 0] }}
    transition={{ repeat: Infinity, duration: 8 }}
    className="absolute top-[18%] right-[25%] w-32 h-14 text-yellow-400 rotate-[12deg]"
    viewBox="0 0 200 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path d="M0 25 Q40 5 80 25 T160 25 T200 25" />
  </motion.svg>

  {/* Blue Middle Left */}
  <motion.svg
    animate={{ y: [0, 6, -6, 0] }}
    transition={{ repeat: Infinity, duration: 9 }}
    className="absolute top-[40%] left-[20%] w-28 h-14 text-sky-400 rotate-[-10deg]"
    viewBox="0 0 200 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path d="M0 25 Q30 0 60 25 T120 25 T180 25" />
  </motion.svg>

  {/* Black Accent Line */}
  <motion.svg
    animate={{ rotate: [0, 5, -5, 0] }}
    transition={{ repeat: Infinity, duration: 10 }}
    className="absolute bottom-[35%] right-[20%] w-24 h-12 text-black"
    viewBox="0 0 200 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M0 25 Q25 10 50 25 T100 25 T150 25" />
  </motion.svg>

</div>   
</section>
  );
}