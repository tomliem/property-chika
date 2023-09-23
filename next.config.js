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
      'hidimas.com',
      'drive.google.com',
      'www.pexels.com',
      'pexels.com',
      'loremflickr.com',
      's3.amazonaws.com',
      'images.pexels.com',
      'picsum.photos',
      'wp.dev.hidimas.com',
      'wp.stg.hidimas.com',
      'wp.hidimas.com',
      'lh3.googleusercontent.com',
    ],
  },
  eslint: {
    dirs: ['app'],
  },
  reactStrictMode: true,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: false,
    },
  },
  swcMinify: true,
  output: 'standalone',
  publicRuntimeConfig: {
    siteName: process.env.SITE_NAME,
    siteUrl: process.env.SITE_URL,
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
  },
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === '1'
        ? { source: '/((?!maintenance)(?!_next)(?!static).*)', destination: '/maintenance', permanent: false }
        : null,
    ].filter(Boolean)
  },
  webpack(config, { isServer }) {
    // const splitVendor =
    //   process.env.TARGET === 'development' || process.env.TARGET === 'staging' || process.env.TARGET === 'production'
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        maxAsyncRequests: 15,
        maxInitialRequests: 15,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // ...(splitVendor && {
          //   vendor: {
          //     test: /node_modules/,
          //     chunks: 'initial',
          //     filename: 'vendor.[contenthash].js',
          //     priority: -10,
          //     reuseExistingChunk: true,
          //   },
          // }),
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      }
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = withPWA(nextConfig)
