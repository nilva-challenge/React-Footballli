/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.api-sports.io',
            port: '',
            pathname: '/football/leagues/**',
          },
          {
            protocol: 'https',
            hostname: 'media-3.api-sports.io',
            port: '',
            pathname: '/football/teams/**',
          },
          {
            protocol: 'https',
            hostname: 'sport-cdn.zarebin.ir',
            port: '',
            pathname: '/sport-files-prod/media/league/logo/**',
          },
          {
            protocol: 'https',
            hostname: 'media-1.api-sports.io',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media-2.api-sports.io',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'sport-cdn.zarebin.ir',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.api-sports.io',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
