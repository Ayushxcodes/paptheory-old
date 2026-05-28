"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function DesignSummitHero() {
  const router = useRouter();

  return (
    <section className="relative  overflow-hidden py-20 md:py-28">
      <motion.div 
        className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        {/* ================= LEFT CONTENT ================= */}
        <motion.div 
          className="relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="font-serif text-[#1b1b3a]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We Engineer perception in
            </motion.span>
            <br />
            <motion.span 
              className="font-serif text-yellow-500"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
                the age of visibility
            </motion.span>
          </motion.h1>

         

          {/* CTA */}
          <motion.div 
            className="mt-8 flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:scale-105 transition"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => router.push('/contact')}
            >
              Make Me Viral
            </motion.button>

            <motion.button 
              className="border border-blue-400 text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => router.push('/contact')}
            >
              Let’s Build Culture
            </motion.button>
          </motion.div>

          {/* Countdown */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            

            <motion.div 
              className="text-4xl md:text-5xl font-semibold tracking-wider text-[#1b1b3a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Authentic messaging. Viral thinking. Impact first
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT VISUALS ================= */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >

          {/* Center Portrait */}
          <motion.div 
            className="relative z-20 w-64 md:w-80 h-[380px] md:h-[460px] rounded-[160px] overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/Kiara_Advani.jpeg"
              alt="Speaker"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Top Right Portrait */}
          <motion.div 
            className="absolute top-0 right-90 w-40 md:w-48 h-48 md:h-56 bg-purple-300 rounded-[120px] overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <img
              src="/mahindra.png"
              alt="Speaker"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Bottom Right Portrait */}
          <motion.div 
            className="absolute bottom-0 right-90 w-44 md:w-52 h-52 md:h-60 bg-blue-300 rounded-[140px] overflow-hidden shadow-lg z-30"
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img
              src="/suzuki.webp"
              alt="Speaker"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative Stars */}
          <div className="absolute left-0 top-10 text-yellow-400 text-4xl">
            ✦
          </div>

          <div className="absolute left-10 bottom-10 text-yellow-400 text-2xl">
            ✦
          </div>

          {/* Floating Tag Shapes */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-20 left-20 bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform -rotate-12 opacity-95"
          >
            🔥 HOT
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-40 right-32 bg-purple-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md transform rotate-6 opacity-95"
          >
            TRENDING
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute bottom-32 left-32 bg-blue-400 text-white px-2 py-1 rounded-md text-xs font-medium shadow-lg opacity-95"
          >
            NEW
          </motion.div>

          {/* Small Floating Tags */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            className="absolute top-16 right-16 bg-green-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md transform rotate-45 opacity-95"
          >
            VIBES ✨
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-20 right-40 bg-orange-400 text-white px-2 py-1 rounded text-xs font-semibold shadow-sm opacity-95"
          >
            GEN Z
          </motion.div>

          {/* Swiggly Lines */}
          <svg
            className="absolute top-32 left-40 w-16 h-8 text-pink-300 opacity-85"
            viewBox="0 0 100 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10 25 Q25 10 40 25 Q55 40 70 25 Q85 10 100 25" />
          </svg>

          <svg
            className="absolute bottom-40 right-24 w-20 h-10 text-blue-300 opacity-80"
            viewBox="0 0 120 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 30 Q20 15 35 30 Q50 45 65 30 Q80 15 95 30 Q110 45 125 30" />
          </svg>

          <svg
            className="absolute top-48 right-8 w-12 h-6 text-purple-300 opacity-90"
            viewBox="0 0 80 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 20 Q15 5 25 20 Q35 35 45 20 Q55 5 65 20 Q75 35 85 20" />
          </svg>

          {/* Scribble */}
          <svg
            className="absolute bottom-1 right-0 w-20 h-20 text-[#1b1b3a]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path d="M50 5 L55 30 L80 20 L60 40 L90 50 L60 60 L80 80 L55 70 L50 95 L45 70 L20 80 L40 60 L10 50 L40 40 L20 20 L45 30 Z" />
          </svg>

        </motion.div>
      </motion.div>

    </section>
  );
}