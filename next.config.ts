import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        // hostname: '*.public.blob.vercel-storage.com',
        protocol: 'http',
        hostname: 'kraison.thddns.net',
      },
    ],
  },
};

export default nextConfig;
