import React from 'react'

const WorksPage = () => {

  // Converted Gumlet IDs into proper embed links
  const videoIds = [
    "680100853f934d7b33b2d517",
    "6985d218924a60df4bf0fda8",
    "6985d218742559dc5a11a435",
    "6985d2184db88a967f203e86",
    "6985d218742559dc5a11a433",
    "6985d218742559dc5a11a437",
    "6985d218742559dc5a11a42d",
    "6985cd64742559dc5a10fcf1",
    "6904627faa9e79860d5356fa",
    "6904627fa73e176902710649",
    "6904627fa5b40b283e125f54",
    "6904627fa73e176902710644",
    "68a58031faf881d01d012b62",
    "68a57fe681b867dff3334498",
    "680104cd3f934d7b33b2f50e",
    "680102a2fc3cb0b3238a7593",
    "68010085fc3cb0b3238a62ee",
    "680100853ab3a7b826bb539e",
    "680100853f934d7b33b2d519",
    "68010085fc3cb0b3238a62f6",
    "680100853ab3a7b826bb539a"
  ];

  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Our <span className="text-[#f99216]">Works</span>
          </h1>

          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of{" "}
            <span className="text-[#f99216] font-medium">
              strategic communications
            </span>{" "}
            and creative campaigns that drive real impact.
          </p>

          <div className="mt-10 h-px w-full bg-[#f99216]/30 max-w-md mx-auto" />
        </div>
      </div>

      {/* Video Grid */}
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* ALWAYS max 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {videoIds.map((id, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg border border-black hover:border-[#f99216]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f99216]/20"
              >
                {/* 16:9 ratio */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://play.gumlet.io/embed/${id}?autoplay=1&muted=1&loop=1&playsinline=1&controls=0`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    title={`Work Video ${index + 1}`}
                  />
                </div>

                
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* CTA */}
      
    </div>
  )
}

export default WorksPage