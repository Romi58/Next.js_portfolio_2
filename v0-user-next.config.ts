import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Add any domains you'll be loading images from
  },
  // You can add more Next.js configurations here as needed
}

export default nextConfig

