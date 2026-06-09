import HeroSection from '@/components/MediaPage/HeroSection'
import WhatWeDeliverSection from '@/components/MediaPage/WhatWeDeliverSection'
import WorkSection from '@/components/MediaPage/WorkSection'
import DisciplineNavigation from '@/components/base/DisciplineNavigation'
import React from 'react'

const Mediapage = () => {
  return (
    <div>
        <HeroSection />
        <WhatWeDeliverSection />
        <WorkSection />
        <DisciplineNavigation />
    </div>
  )
}

export default Mediapage