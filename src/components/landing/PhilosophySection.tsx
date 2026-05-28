"use client";

import ExploreWorkBar from '@/components/ExploreWorkBar';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-black text-white py-16 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,31,0.1),transparent_70%)]" />

      <div className="mx-auto max-w-[720px] px-6 text-center relative z-10">
        {/* Icon / Emblem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 flex h-12 w-12 items-center justify-center border border-white/60 rounded-lg hover:border-orange-400 transition-colors duration-300"
        >
          <div className="grid grid-cols-3 gap-[2px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="h-[4px] w-[4px] border border-white/60 hover:border-orange-400 transition-colors duration-300"
              />
            ))}
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.18em] text-white/70"
        >
          Our Philosophy
        </motion.h2>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
        />

        {/* Main Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-[20px] leading-8 text-white max-w-[640px] mx-auto font-medium"
        >
          Communication shapes how power is understood and exercised.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-[15px] leading-7 text-white/70 max-w-[600px] mx-auto"
        >
          We believe institutions have a responsibility to communicate clearly,
          ethically, and with restraint. Our work exists to strengthen public
          trust, not exploit attention.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-24 h-24 border border-orange-400/20 rounded-full"
        />
      </div>
    </section>
  );
}
