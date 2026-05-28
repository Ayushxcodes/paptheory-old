"use client"

import ControlledMediaSection from '@/components/landing/ControlledMediaSection'
import HeroSection from '@/components/landing/HeroSection'
import OurApproachSection from '@/components/landing/OurApproachSection'
import PhilosophySection from '@/components/landing/PhilosophySection'
import SelectedWorkSection from '@/components/landing/SelectedWorkSection'
import TickerSection from '@/components/landing/TickerSection'
import VerticalsSection from '@/components/landing/VerticalSection'
import WhoYouWorkWithSection from '@/components/landing/WhoWorkWithSection'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'

const Homepage = () => {
  const [showAnimation, setShowAnimation] = useState(true)

  const handleAnimationComplete = () => {
    setShowAnimation(false)
  }

  return (
    <AnimatePresence mode="wait">
      {showAnimation ? (
        <motion.div
          key="animation"
          exit={{ opacity: 0 }}
          className="flex items-center justify-center min-h-screen bg-white"
        >
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 2.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            onAnimationComplete={handleAnimationComplete}
            className="text-black text-7xl md:text-9xl font-serif font-bold tracking-wider drop-shadow-lg"
          >
            <motion.span
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              PTN
            </motion.span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <WhoYouWorkWithSection />
          <OurApproachSection />
          <VerticalsSection />
          <TickerSection />
          <SelectedWorkSection />
          <PhilosophySection />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Homepage