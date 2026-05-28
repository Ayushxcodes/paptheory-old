"use client";

type MediaCardProps = {
  type: "gumlet" | "video" | "image";
  src: string;
  className?: string;
  fit?: "cover" | "contain";
};

export default function MediaCard({
  type,
  src,
  className,
  fit = "cover",
}: MediaCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-2xl bg-black ${className}`}
    >
      {type === "gumlet" && (
        <iframe
          loading="lazy"
          title="Gumlet video player"
          src={src}
          className="absolute inset-0 w-full h-full border-0"
          referrerPolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
        />
      )}

      {type === "video" && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-${fit}`}
        />
      )}

      {type === "image" && (
        <img
          src={src}
          alt="media"
          className={`w-full h-full object-${fit}`}
        />
      )}
    </div>
  );
}