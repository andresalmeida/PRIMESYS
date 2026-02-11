/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  basePath: '/PRIMESYS',
  assetPrefix: '/PRIMESYS',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
