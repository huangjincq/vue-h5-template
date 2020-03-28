const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = {
  devServer: {
    open: true, // 是否自动打开浏览器页面
    // host: 'localhost',    // 指定使用一个 host，默认是 localhost
    // port: 8080,         // 端口地址
    proxy: {
      '/login/*': {
        target: 'http://testapi.wengyingwangluo.cn/'
        // ws: true,
        // changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },

  configureWebpack: config => { // webpack自定义配置
    if (process.env.NODE_ENV === 'production' && process.env.npm_config_report) { // 生产环境打包分析体积
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  },

  chainWebpack: config => { // CLI内部webpack配置
  },

  pluginOptions: {
    'style-resources-loader': { // 吧 mixin 和 variables 注入到每个vue文件好 scss文件
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/variables.scss'),
        path.resolve(__dirname, './src/styles/mixin.scss')
      ]
    }
  }
}
