import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_PAGES_BASE_PATH,
  images: {
    unoptimized: true
  }
};

// Use module.exports to ensure everything is included
module.exports = nextConfig;

export default nextConfig;
