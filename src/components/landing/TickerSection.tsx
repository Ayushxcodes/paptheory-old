import React from 'react'
import Image from 'next/image'

const TickerSection = () => {
  // Array of logo filenames - add more as needed
  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.webp',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.svg',
    'logo8.png',
    'logo9.png',
  ]

  return (
    <section className="py-16  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Trusted by <span className="text-[#f99216]">Leading Brands</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to work with industry leaders and innovative companies worldwide.
          </p>
        </div>

        {/* Infinite Ticker */}
        <div className="relative bg-white rounded-2xl py-10 overflow-hidden">
          {/* Edge Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="ticker-container">
            <div className="ticker-track">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="ticker-item flex items-center justify-center px-8"
                >
                  <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={`/${logo}`}
                      alt={`Logo ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="ticker-item flex items-center justify-center px-8"
                >
                  <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={`/${logo}`}
                      alt={`Logo ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          overflow: hidden;
          width: 100%;
        }

        .ticker-track {
          display: flex;
          animation: ticker-scroll 30s linear infinite;
          width: calc(200px * 18); /* 9 logos * 2 sets = 18 */
        }

        .ticker-item {
          flex-shrink: 0;
          width: 200px;
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .ticker-container:hover .ticker-track {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .ticker-item {
            width: 150px;
          }
          .ticker-track {
            width: calc(150px * 18);
          }
          .ticker-item .w-32 {
            width: 6rem;
          }
        }
      `}</style>
    </section>
  )
}

export default TickerSection