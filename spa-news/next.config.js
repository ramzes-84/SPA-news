/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.guim.co.uk',
      },
      {
        protocol: 'http',
        hostname: '*.guim.co.uk',
      },
    ],
  },
};

module.exports = nextConfig;
