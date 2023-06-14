// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
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
  output: 'standalone',
  experimental: {
    appDir: true,
  },
}