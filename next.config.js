// next.config.js

module.exports = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'archriste.imgix.net',
            port: '',
            pathname: '/public/images/*',
        }
    ],
    loader: 'custom',
    loaderFile: '/utils/loader.js',
    path: 'archriste.imgix.net',
  },
  experimental: {
    appDir: true,
  },
}