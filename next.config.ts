import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Required for static export
  trailingSlash: true,     // Important for shared hosting
  images: {
    unoptimized: true,     // Required for static export
  },
};

export default nextConfig;