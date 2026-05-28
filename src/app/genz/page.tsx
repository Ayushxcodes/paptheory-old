import GenZHero from '@/components/Genz/HeroSectionGen'
import GenZSection from '@/components/Genz/GridSection'
import React from 'react'
import GridsSection from '@/components/Genz/GridsSection'
import FlowSection from '@/components/Genz/FlowSection'
import ProminentSection from '@/components/Genz/ProminentSection'
import MobSection from '@/components/Genz/MobSection'
import BankingHero from '@/components/Genz/BankingHero'
import MahindraSection from '@/components/Genz/MahindraSection'
import ICICISection from '@/components/Genz/ICICISection'

const GenZpage = () => {
  return (
    <div>
      <GenZHero />
      <MobSection />
      <BankingHero />
      <MahindraSection />
      <ICICISection />
      <GenZSection />
      <FlowSection />
      <ProminentSection />
      
      
      
    </div>
  )
}

export default GenZpage