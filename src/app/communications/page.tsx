import HeroSection from '@/components/Communications/HeroSection'
import WhatWeDeliverSection from '@/components/Communications/WhatWeDeliverSection'
import WorkSection from '@/components/Communications/WorkSection'
import DisciplineNavigation from '@/components/base/DisciplineNavigation'
import React from 'react'

const CommunicationsPage = () => {
  return (
    <div>
        <HeroSection />
        <WhatWeDeliverSection />
        <WorkSection />
        <DisciplineNavigation />
    </div>
  )
}

export default CommunicationsPage