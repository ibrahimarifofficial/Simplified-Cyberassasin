const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'madebydesignesia.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  webpack: (config) => {
    const alias = config.resolve.alias || {}
    alias['@'] = path.resolve(__dirname)
    config.resolve.alias = alias
    return config
  },
}

module.exports = nextConfig

