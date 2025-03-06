import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Supaya ESLint tidak memblokir build
  },
  typescript: {
    ignoreBuildErrors: true, // Supaya TypeScript tidak memblokir build
  }
};

export default nextConfig;
