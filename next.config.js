/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
      domains: ['localhost'],
      unoptimized: true
    },
  }
  
  module.exports = nextConfig