"use client";
export default function FlowSection() {
  const cards = [
    { src: "/image1.jpg", alt: "Moment 1" },
    { src: "/image2.jpg", alt: "Moment 2" },
    { src: "/image3.jpg", alt: "Moment 3" },
    { src: "/image4.jpg", alt: "Moment 4" },
  ];

  return (
    <section className="bg-[#FFD800] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Heading */}
        <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] font-extrabold text-black tracking-[-1px] max-w-[520px]">
          We craft messaging that feels human,
          <br />
          not hollow.
        </h2>

        {/* Slider */}
        <div className="mt-20 overflow-hidden">
          <div className="slider-track flex items-center gap-6 lg:gap-8 w-max">

            {[...cards, ...cards].map((card, i) => (
              <div
                key={i}
                className="h-[340px] w-[260px] rounded-[28px] overflow-hidden shadow-lg flex-shrink-0"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-track {
          animation: scrollRight 25s linear infinite;
          will-change: transform;
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}