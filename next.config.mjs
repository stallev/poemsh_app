/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [425, 570, 768, 1024],
    imageSizes: [16, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
      },
    ],
    minimumCacheTTL: 86400,
  },
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
