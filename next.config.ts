import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.builder.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        port: '',
        pathname: '/api/v1/image/assets/**',
      },
    ],
  },
};

export default nextConfig;
