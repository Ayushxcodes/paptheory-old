import HeroSection from '@/components/Technology/HeroSection'
import LiveDemoSection from '@/components/Technology/LiveDemoSection'
import WhatWeDeliverSection from '@/components/Technology/WhatWeDeliverSection'
import WorkSection from '@/components/Technology/WorkSection'
import AnimatedSection from '@/components/AnimatedSection'
import React from 'react'

const TechnologyPage = () => {
  return (
    <div>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection>
          <LiveDemoSection />
        </AnimatedSection>

        <AnimatedSection>
          <WhatWeDeliverSection />
        </AnimatedSection>

        <AnimatedSection>
          <WorkSection />
        </AnimatedSection>
    </div>
  )
}

export default TechnologyPage