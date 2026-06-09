import HeroSection from '@/components/Technology/HeroSection'
import LiveDemoSection from '@/components/Technology/LiveDemoSection'
import WhatWeDeliverSection from '@/components/Technology/WhatWeDeliverSection'
import AdvisorSection from '@/components/Technology/AdvisorSection'
import WorkSection from '@/components/Technology/WorkSection'
import AnimatedSection from '@/components/AnimatedSection'
import DisciplineNavigation from '@/components/base/DisciplineNavigation'
import React from 'react'

const TechnologyPage = () => {
  return (
    <div>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection>
          <AdvisorSection />
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

        <DisciplineNavigation />
    </div>
  )
}

export default TechnologyPage