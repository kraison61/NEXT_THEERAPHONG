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
      {
        protocol: 'http',
        hostname: 'kraison.thddns.net',
        pathname: '/theeraphong/**',
      },
      {
        protocol: 'https',
        hostname: 'theeraphong.com',
        // pathname: '/theeraphong/**',
      },
    ],
    formats: ['image/webp'],  // Or add 'image/avif'
    minimumCacheTTL: 60,
  },
}