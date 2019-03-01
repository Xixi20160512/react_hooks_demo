const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
module.exports = withCss(withTypescript({
  webpack: (config) => {
    config.resolve.alias = {
      '@src': path.resolve('./src'),
    };
    return config
  }
}))
