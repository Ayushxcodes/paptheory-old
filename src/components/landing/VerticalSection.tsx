"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Users, BookOpen, BarChart3, Shield, TrendingUp, FileText, Video, Crown, Megaphone, Calendar, UserCheck, Lock } from "lucide-react";

export default function CapabilitiesSection() {
  const data = [
    {
      title: "01",
      content: (
        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
            <span className="text-[#111111]">Strategy & </span><span className="text-[#f99216]">Advisory</span>
          </h3>

          <p className="mt-6 text-xl text-[#333333] leading-relaxed">
            We advise institutions on how to communicate <span className="text-[#f99216] font-medium">power responsibly</span>.
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Users className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Public affairs</span> and institutional communication strategy
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <BookOpen className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Narrative</span> and reputation frameworks
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <BarChart3 className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Stakeholder</span> and public perception analysis
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Shield className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Leadership</span> and crisis communication guidance
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <TrendingUp className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Long-term</span> trust and positioning strategy
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-[#f99216] rounded-r-lg"
          >
            <p className="text-[#f99216] text-base leading-relaxed font-medium">
              This work is typically delivered through long-term mandates and
              retainers, in close collaboration with senior leadership.
            </p>
          </motion.div>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium tracking-tight">
            <span className="text-[#111111]">Strategic </span><span className="text-[#f99216]">Creative</span><span className="text-[#111111]"> & Content</span>
          </h3>

          <p className="mt-6 text-xl text-[#333333] leading-relaxed font-medium">
            <span className="text-[#111111]">Strategy must translate into </span><span className="text-[#f99216]">form</span>.
          </p>

          <p className="mt-4 text-xl text-[#444444] leading-relaxed">
            We design <span className="text-[#f99216] font-medium">narrative-led</span> content and audio-visual communication that
            reflects institutional tone, message discipline, and strategic intent —
            across platforms and audiences.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <FileText className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Narrative-led</span> content systems
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Video className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Audio-visual</span> storytelling
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Crown className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Leadership</span> and institutional storytelling
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Megaphone className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Issue-based</span> and campaign communication
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-[#f99216] rounded-r-lg"
          >
            <p className="text-[#f99216] text-base leading-relaxed font-medium">
              Creative execution exists to serve strategy, not replace it.
            </p>
          </motion.div>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="max-w-xl">
          <h3 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
            <span className="text-[#111111]">Controlled </span><span className="text-[#f99216]">Media</span><span className="text-[#111111]"> & Amplification</span>
          </h3>

          <p className="mt-6 text-xl text-[#333333] leading-relaxed font-medium">
            <span className="text-[#111111]">Amplification without </span><span className="text-[#f99216]">discipline</span><span className="text-[#111111]"> weakens credibility.</span>
          </p>

          <p className="mt-4 text-xl text-[#444444] leading-relaxed">
            We manage distribution and media amplification <span className="text-[#f99216] font-medium">selectively</span>,
            ensuring messages are delivered with accuracy, restraint,
            and contextual awareness.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Calendar className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Strategic</span> media planning
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <UserCheck className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Selective</span> influencer engagement
            </p>
            <p className="text-[#444444] hover:text-[#f99216] transition-colors duration-300 flex items-center gap-2">
              <Lock className="text-[#f99216] w-5 h-5" /> <span className="text-[#111111] font-medium">Message</span> protection and rollout discipline
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-[#f99216] rounded-r-lg"
          >
            <p className="text-[#f99216] text-base leading-relaxed font-medium">
              Media is used when it strengthens trust — not simply to increase reach.
            </p>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16  overflow-hidden">
      {/* Background Elements */}
     
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm text-[#f99216] tracking-wide uppercase font-medium">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight">
            <span className="text-[#111111]">Verti</span><span className="text-[#f99216]">cals</span>
          </h2>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-[#f99216] to-[#111111]" />
        </motion.div>

        <Timeline data={data} />
      </div>
    </section>
  );
}
