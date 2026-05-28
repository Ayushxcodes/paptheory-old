import ReflectiveCard from '@/components/ReflectiveCard';
import ExploreWorkBar from '@/components/ExploreWorkBar';
import { motion } from 'framer-motion';
import { Landmark, Crown, Building, PiggyBankIcon } from 'lucide-react';

export default function WhoWeWorkWith() {
  return (
    <section className="relative  py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
    

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-0 items-center">
          
          {/* LEFT SIDE — Hidden below lg */}
          {/* LEFT SIDE — Pyramid Videos */}
<div className="hidden lg:flex justify-start">
  <div className="w-full max-w-[520px]">

    {/* TOP VIDEO */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <iframe
        loading="lazy"
        title="Video 1"
        src="https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1"
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      />
    </motion.div>

    {/* BOTTOM ROW */}
    <div className="mt-6 grid grid-cols-2 gap-6">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <iframe
          loading="lazy"
          title="Video 2"
          src="https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <iframe
          loading="lazy"
          title="Video 3"
          src="https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute inset-0 w-full h-full border-0 object-cover"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </motion.div>

    </div>

  </div>
</div>

          {/* CENTER CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[580px] mx-auto text-center lg:text-left"
          >
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Who We Work With
            </h2>

            <p className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] text-[#6b6b6b]">
              Paper Theory Network works with organisations whose decisions 
              and actions are visible, scrutinised, and consequential.
            </p>

            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <Landmark className="mt-1 w-5 h-5 text-[#f99216] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#f99216] transition-colors duration-300">
                  Governments and public institutions
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <Crown className="mt-1 w-5 h-5 text-[#f99216] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#f99216] transition-colors duration-300">
                  Political leadership and senior advisors
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <Building className="mt-1 w-5 h-5 text-[#f99216] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#f99216] transition-colors duration-300">
                  Corporations operating under public and regulatory scrutiny
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <PiggyBankIcon className="mt-1 w-5 h-5 text-[#f99216] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#f99216] transition-colors duration-300">
                  Financial, infrastructure, healthcare, education, and legacy institutions
                </p>
              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT SIDE — Empty for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
     
    </section>
  );
}
