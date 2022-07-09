/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // https://nextjs.org/docs/messages/swc-disabled
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig
