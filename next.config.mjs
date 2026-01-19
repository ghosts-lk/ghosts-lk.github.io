/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    // Set to warn instead of error, but don't ignore completely
    tsconfigPath: './tsconfig.json',
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    // Allow ESLint errors in production builds to catch issues early
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
