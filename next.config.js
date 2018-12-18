const withTypescript         = require('@zeit/next-typescript')
const withSass                = require('@zeit/next-sass')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = withTypescript(
  withSass({
    webpack(config) {
      if (process.env.ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        }))
      }
      return config
    },
    cssModules: false
  })
)
