/** @type {import('next').NextConfig} */
const isDocker = process.env.BUILD_MODE === 'docker';

const nextConfig = {
  output: isDocker ? 'standalone' : 'export',

  images: {
    unoptimized: !isDocker,
  },
};

module.exports = nextConfig;