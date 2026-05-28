"use client";

import { motion } from "framer-motion";

const videos = [
  "6904627fa5b40b283e125f54",
  "6904627fa73e176902710644",
  "68a58031faf881d01d012b62",
  "689b34a30e12b7df523072f5",
];

export default function CulturePyramid() {
  return (
    <section className="relative bg-white py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[0.95] text-black">
            We make your
            <br />
            <span className="text-yellow-500 drop-shadow-[4px_4px_0px_black]">
              brand talkable
            </span>
          </h2>
        </div>

        {/* Pyramid Layout */}
        <div className="flex flex-col items-center gap-8 md:gap-14">

          {/* Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm md:max-w-xl"
          >
            <VideoCard id={videos[0]} />
          </motion.div>

          {/* Middle Row (2) */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
            <div className="w-full sm:w-[400px] md:w-[520px]">
              <VideoCard id={videos[1]} />
            </div>
            <div className="w-full sm:w-[400px] md:w-[520px]">
              <VideoCard id={videos[2]} />
            </div>
          </div>

          {/* Bottom Center (1) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md md:max-w-lg lg:w-[600px]"
          >
            <VideoCard id={videos[3]} />
          </motion.div>

        </div>

        {/* Floating Statements */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="hidden md:block absolute left-4 md:left-10 top-1/3 text-xl md:text-3xl font-bold text-orange-400 max-w-xs"
        >
          We turn ideas into culture — not ads.
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="hidden md:block absolute right-4 md:right-10 top-1/2 text-xl md:text-3xl font-bold text-orange-500 max-w-xs text-right"
        >
          We make your brand talkable in 10 seconds or less.
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-16 text-xl md:text-3xl font-bold text-orange-600 text-center"
        >
          We don’t chase trends — we create them.
        </motion.div>

      </div>
    </section>
  );
}

function VideoCard({ id }: { id: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-black hover:scale-[1.02] transition-transform duration-300">
      <iframe
        src={`https://play.gumlet.io/embed/${id}?playsinline=1&autoplay=1&mute=1`}
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}