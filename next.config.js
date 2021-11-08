/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
