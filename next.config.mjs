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
}

export default nextConfig
