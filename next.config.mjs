/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  basePath: '/PRIMESYS',  // Necesario para GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
