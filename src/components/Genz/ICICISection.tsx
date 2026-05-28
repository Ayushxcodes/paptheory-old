"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ICICISection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-20 lg:py-28 relative overflow-hidden">

      {/* Subtle ICICI brand accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0F4C81]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#DC2626]/3 to-transparent rounded-full blur-3xl" />

      {/* Floating banking elements */}
      <div className="absolute top-20 left-16 w-12 h-12 bg-[#0F4C81]/10 rounded-lg flex items-center justify-center text-[#0F4C81] text-lg font-bold animate-bounce" style={{animationDelay: '0.5s'}}>
        💳
      </div>
      <div className="absolute top-1/3 right-20 w-10 h-10 bg-[#DC2626]/10 rounded-full flex items-center justify-center text-[#DC2626] text-sm font-bold animate-pulse" style={{animationDelay: '1s'}}>
        ₹
      </div>
      <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-[#1E3A8A]/15 rounded-full flex items-center justify-center text-[#1E3A8A] text-xs font-bold animate-ping" style={{animationDelay: '2s'}}>
        $
      </div>

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative mt-8 md:mt-16">
          <div className="border-t border-black/20" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 text-black text-lg md:text-xl">
            ✦
          </div>
        </div>

        {/* TOP VISUAL BLOCK */}
        <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 h-[280px] sm:h-[320px] md:h-[420px] pt-10">

         

          {/* Video Side - Now on Right */}
          <div className="relative flex items-center justify-center overflow-hidden md:col-start-2">
            {/* Video Container - Full Coverage */}
            <div className="relative w-full h-full">
              <iframe
                loading="lazy"
                title="ICICI Bank Video"
                src="https://play.gumlet.io/embed/680100853ab3a7b826bb539e?autoplay=1&muted=1&loop=1&playsinline=1"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </div>
          </div>

          {/* Desktop Text Block - Now on Left Side */}
          <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 flex-col items-start text-left text-gray-800 max-w-md">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[#0F4C81]/10 text-[#0F4C81] text-sm font-medium rounded-full mb-3">
                For Gen Z
              </span>
            </div>
            <p className="text-lg md:text-xl mb-6 font-medium leading-relaxed">
              Organic shareability baked in
              <span className="block text-[#0F4C81] font-semibold text-2xl md:text-3xl">Simple, fast, and fun.</span>
            </p>

            <div className="flex gap-4 flex-wrap justify-start">
             
            </div>
          </div>

        </div>

        {/* Mobile Text Block - Below Video */}
        <div className="md:hidden mt-8 text-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#0F4C81]/10 text-[#0F4C81] text-sm font-medium rounded-full">
              For Gen Z
            </span>
          </div>
          <p className="text-base sm:text-lg font-medium text-gray-800 max-w-md mx-auto px-4 leading-relaxed">
            Organic shareability baked in
            <span className="block text-[#0F4C81] font-semibold mt-1 text-xl sm:text-2xl">Simple, fast, and fun.</span>
          </p>

          <div className="flex gap-3 flex-wrap justify-center mt-6 px-4">
            
          </div>
        </div>

        {/* Divider */}
        

        {/* Partner Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 md:mt-12">

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex -space-x-2 md:-space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#1E3A8A] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                🎵
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#DC2626] to-[#B91C1C] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                📱
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#0F4C81] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                🚀
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Built for Gen Z lifestyle
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-lg md:text-xl font-medium text-gray-800 justify-center md:justify-end">
            <span className="text-[#0F4C81] font-bold">ICICI</span>
            <span>Bank</span>
          </div>

        </div>

      </div>
    </section>
  );
}