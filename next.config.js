/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co'],
    formats: ['image/avif', 'image/webp'],
  },
  // Advanced configuration for performance optimization
  experimental: {
    optimizeCss: true,     // Enable CSS optimization
    scrollRestoration: true // Enable scroll restoration
  },
};

module.exports = nextConfig;