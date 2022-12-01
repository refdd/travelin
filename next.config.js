/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts:true,
  images: {
    domains: ['api.nilecruisez.com'],
  },
}

module.exports = nextConfig
const withVideos = require('next-videos');

module.exports = withVideos()

