/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  typescript: {
    ignoreBuildErrors: true, // 타입 오류 무시
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint 오류 무시
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  env: {
    basePath: "/Adieu_2022", // GitHub Pages에서 사용하는 경로
    assetPrefix: "/Adieu_2022", // 정적 자산 경로
  },
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
};
