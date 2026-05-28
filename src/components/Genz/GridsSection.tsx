import React from 'react'
import MagicBento from '@/components/MagicBento'

const GridsSection = () => {
  return (
    
<MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={400}
  particleCount={12}
  glowColor="132, 0, 255"
  disableAnimations={false}
/>
  )
}

export default GridsSection