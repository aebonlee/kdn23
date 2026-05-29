/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kdn23',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;