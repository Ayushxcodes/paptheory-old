"use client";

export default function ScrollStoppingSection() {
  return (
    <section className="relative w-full bg-[#B7E28D] overflow-hidden py-24 md:py-32">

      
      <div className="bg-[#eeeeee] pb-16 md:pb-20">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black pt-20">
          Scroll-stopping copy
        </h2>
      </div>

      

     
      <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-black clip-star z-10" />

      
      <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-pink-500 rounded-tr-[140px] z-10" />

     
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 800"
        fill="none"
      >
        <path
          d="M0 150 Q400 50 800 150 T1440 100"
          stroke="black"
          strokeWidth="3"
        />
        <path
          d="M100 700 Q600 600 1300 700"
          stroke="black"
          strokeWidth="3"
        />
      </svg>

      {/* Phones */}
     <div className="relative z-20 flex justify-center items-center px-6 mt-20 md:mt-32">
  <div className="w-full max-w-6xl aspect-video">
    <video
      src="/vid1.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-contain"
    />
  </div>
</div>
     
      <div className="h-20 md:h-32" />

      
      <style jsx>{`
        .clip-star {
          clip-path: polygon(
            50% 0%, 60% 35%, 100% 50%, 
            60% 65%, 50% 100%, 
            40% 65%, 0% 50%, 40% 35%
          );
        }
      `}</style>
    </section>
  );
}