/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  })
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [420, 640, 828, 1080, 1380, 1920, 2048, 3840],
    domains: [
      'hidimas.storage.googleapis.com',
      'lh3.googleusercontent.com',
    ],
  },
  eslint: {
    dirs: ['app'],
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: false,
    },
  },
  swcMinify: true,
  output: 'standalone',
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === '1'
        ? { source: '/((?!maintenance)(?!_next)(?!static).*)', destination: '/maintenance', permanent: false }
        : null,
    ].filter(Boolean)
  },
  webpack(config, { isServer }) {
    // if (isServer) {
    //   require("./scripts/sitemap-generator");
    // }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = withPWA(nextConfig)
