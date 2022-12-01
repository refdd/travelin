/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.nilecruisez.com'],
  },
}

module.exports = nextConfig
const withVideos = require('next-videos');

module.exports = withVideos()

