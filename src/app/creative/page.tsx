import HeroSection from '@/components/Creative/HeroSection'
import SocialCornerSection from '@/components/Creative/SocialCornerSection'
import WhatWeDeliverSection from '@/components/Creative/WhatWeDeliverSection'
import WorkSection from '@/components/Creative/WorkSection'
import DisciplineNavigation from '@/components/base/DisciplineNavigation'
import React from 'react'

const CreativePage = () => {
  return (
    <div>
        <HeroSection />
        <SocialCornerSection />
        <WhatWeDeliverSection />
        <WorkSection />
        <DisciplineNavigation />
    </div>
  )
}

export default CreativePage