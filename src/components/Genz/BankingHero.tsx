"use client";

import { motion } from "framer-motion";

export default function BankingHero() {
  return (
    <section className="relative bg-[#f2f2f2] overflow-hidden py-24 md:py-32">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 md:mb-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black">
          Messaging that <span className="font-black">converts</span>
          <br />
           & resonates
        </h1>
      </div>

      {/* Main Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-1 items-center gap-12">

        {/* LEFT FEATURE */}
        <div className="hidden 2xl:block space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-black" />
            
          </div>
          <p className="text-gray-600 text-sm max-w-xs">
            Brand personality that sticks
          </p>
        </div>

        {/* CENTER VIDEO */}
        <div className="relative flex justify-center">

          {/* Abstract Shape Behind */}
          <div className="absolute w-[120%] h-[120%] bg-[#4EC6C6] rounded-[40%] blur-0 -z-10" />

          {/* 16:9 Video */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/vid2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          
        </div>

        {/* RIGHT FEATURE */}
        <div className="hidden 2xl:block space-y-6 text-right">
          <div className="flex items-center justify-end gap-4">
            <h3 className="font-semibold text-black">Detailed Analytics</h3>
            <div className="w-10 h-[2px] bg-black" />
          </div>
          <p className="text-gray-600 text-sm max-w-xs ml-auto">
            Organic shareability baked in
          </p>
        </div>

      </div>
    </section>
  );
}