/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
