/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: 'export',
  basePath: '/next-cicd',
  assetPrefix: '/next-cicd',
  trailingSlash: true,
  images: {
    domains: ['localhost', 'dineshmills390020.github.io'],
    unoptimized: true
  },
}

module.exports = nextConfig