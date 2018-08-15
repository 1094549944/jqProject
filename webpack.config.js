/*
 * @Author: jiaxinying 
 * @Date: 2018-08-15 14:18:18 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-15 14:57:11
 * 配置多入口  引入jquery 并配置
 */
var config = {
  mode: 'production',
  entry: {
    index: './src/page/index/index.js',
    login: './src/page/login/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  externals: {
    'jquery': 'window.jQuery'
  }
}
module.exports = config


