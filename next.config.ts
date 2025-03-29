import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
      {
        hostname: "ydsrgcywybueqjwosgbh.supabase.co",
      },
    ],
    dangerouslyAllowSVG: true, // SVGの表示を許可
    contentSecurityPolicy: "default-src 'self'; img-src *; media-src *",
  },
};

export default nextConfig;
