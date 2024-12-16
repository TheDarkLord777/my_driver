import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
  },

  async headers() {
    return [
      {
        source: "/api/:path*", // Apply to all API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow all origins
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, PATCH, OPTIONS", // Allowed methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization", // Allowed headers
          },
        ],
      },
    ];
  },
};

export default nextConfig;
