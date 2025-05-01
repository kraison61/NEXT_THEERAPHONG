// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '159.223.203.178',
        port: '9000',
        pathname: '/theeraphong/**',
      },
    ],
    formats: ['image/webp'],  // Or add 'image/avif'
    minimumCacheTTL: 60,
  },
}