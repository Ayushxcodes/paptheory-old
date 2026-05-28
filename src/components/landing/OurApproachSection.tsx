"use client";

import ExploreWorkBar from "@/components/ExploreWorkBar";
import { motion } from "framer-motion";

export default function OurApproach() {

  return (
    <section className="relative  pt-20 pb-28 sm:pt-28 sm:pb-32 lg:pt-16 lg:pb-36 overflow-hidden">
     
      

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[620px]"
          >
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Our Approach
            </h2>

            <div className="mt-8 sm:mt-10 space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[18px] sm:text-[30px] leading-[30px] sm:leading-[34px] text-orange-400 font-semibold"
              >
                Where idea become Influence
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 sm:mt-12"
            >
              <p className="text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#6b6b6b]">
                Our work begins with understanding public sentiment, institutional context, and long-term consequences. From there, we design narratives and communication frameworks that align message, medium, and moment — ensuring credibility is built, not compromised.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 sm:mt-16 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 rounded-r-lg"
            >
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#111111]">
                It is about Trust,
              </p>
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-orange-400 mt-2">
                 Coherence, and Restraint
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[500px] lg:ml-auto pt-40 hidden lg:block"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                loading="lazy"
                title="Our Approach Video"
                src="https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </div>
          </motion.div>

        </div>
      </div>

      
    </section>
  );
}
