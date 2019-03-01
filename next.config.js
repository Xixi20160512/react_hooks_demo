const path = require('path')
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack: (config) => {
    config.resolve.alias = {
      '@src': path.resolve('./src'),
    };
    return config
  }
})
