/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    backendURL: 'https://akabab.github.io/superhero-api/api'
  },
  images: {
    domains: ['cdn.jsdelivr.net']
  }
}

module.exports = nextConfig
