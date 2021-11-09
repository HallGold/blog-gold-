const { override, addLessLoader, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')

// 查看打包后各包大小
const addAnalyzer = () => (config) => {
  config.plugins.push(new BundleAnalyzerPlugin())
  return config
}
/* 生成环境 */
const isEnvProduction = process.env.NODE_ENV === 'production'

const addCompression = () => (config) => {
  if (isEnvProduction) {
    config.plugins.push(
      // gzip压缩
      new CompressionWebpackPlugin({
        test: /\.(css|js)$/,
        // 只处理比1kb大的资源
        threshold: 1024,
        // 只处理压缩率低于90%的文件
        minRatio: 0.9,
      })
    )
  }

  return config
}

module.exports = override(
  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
  addLessLoader({
    lessOptions: {
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
  //路径别名的处理
  addWebpackAlias({
    '@': path.resolve('./src'),
  }),
  addCompression(),
  /* 查看包大小 */
  addAnalyzer(),
  addWebpackPlugin(
    // 终端进度条显示
    new ProgressBarPlugin()
  )
)
