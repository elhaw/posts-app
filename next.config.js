/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.dummyapi.io',
      'dummyapi.io',
      'randomuser.me',
      'img.dummyapi.io',
    ],
  },
}

module.exports = nextConfig
