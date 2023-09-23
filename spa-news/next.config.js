/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.guim.co.uk',
      },
    ],
  },

}

module.exports = nextConfig
