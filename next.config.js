const withTypescript         = require('@zeit/next-typescript')
const withSass                = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = withTypescript(
  withCSS(
    withSass({
      webpack(config) {
        if (process.env.ANALYZE) {
          config.plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true
          }))
        }

        config.plugins.push(new MonacoWebpackPlugin({
          // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
          languages: ['csharp', 'typescript']
        }))

        return config
      },
      cssModules: false
    })
  )
)
