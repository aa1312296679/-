const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  pages: {
    // 配置打包模块的模块信息
    app: {
      // 打包文件的文件入口
      entry: 'src/main.js',
      // 打包时所需使用的模板文件
      template: 'public/index.html',
      // 打包输出的html的文件名
      filename: 'index.html',
      // 打包输出的html的titile
      title: '京东金融APP',
      // 打包模块所打包输出的html需引入的打包模块
      chunks: ['app', 'viewPort']
    },
    // 打包处理响应式的第三方JS
    viewPort: 'src/viewport.js'
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
      .set('public', resolve('src/common/public'))
  }
}
