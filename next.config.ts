// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'kraison.thddns.net',
        pathname: '/theeraphong/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.220.253',
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