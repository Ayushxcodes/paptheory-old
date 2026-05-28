"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GenZPaymentsSection() {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-20 lg:py-28">

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        <div className="relative mt-8 md:mt-16">
          <div className="border-t border-black/20" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 text-black text-lg md:text-xl">
            ✦
          </div>
        </div>

        {/* TOP VISUAL BLOCK */}
        <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 h-[280px] sm:h-[320px] md:h-[420px] pt-10">

         
          {/* Centered Video Block */}
          <div className="relative flex items-center justify-center overflow-hidden col-span-1 md:col-span-2">
            <div className="relative w-full h-full max-w-2xl mx-auto">
              <iframe
                loading="lazy"
                title="Mahindra Video"
                src="https://play.gumlet.io/embed/680104cd3f934d7b33b2f50e?autoplay=1&muted=1&loop=1&playsinline=1"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </div>
          </div>

        </div>

        {/* Mobile Text Block - Below Video */}
        

        {/* Divider */}
        

        {/* Partner Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 md:mt-12">

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex -space-x-2 md:-space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 border-2 border-white" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-400 border-2 border-white" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-500 border-2 border-white" />
            </div>
            
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-lg md:text-xl font-medium text-black justify-center md:justify-end">
            <span>Maruti Suzuki</span>
          </div>

        </div>

      </div>
    </section>
  );
}