/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://img.dummyapi.io',
      'https://dummyapi.io',
      'https://randomuser.me',
    ],
  },
}

module.exports = nextConfig
