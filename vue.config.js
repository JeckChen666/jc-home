const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: { // 配置跨域
      '/api': {
        target: `http://cn.bing.com`, //请求后台接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 重写请求
        }
      }
    }
  }
})
