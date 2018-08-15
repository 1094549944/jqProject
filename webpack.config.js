/*
 * @Author: jiaxinying 
 * @Date: 2018-08-15 14:18:18 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-15 16:08:57
 * 配置多入口  引入jquery 并配置 公共模块加载 css 单独打包
 */
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


var config = {
  mode: 'production',
  entry: {
    common: './src/page/common/index.js',
    index: './src/page/index/index.js',
    login: './src/page/login/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  externals: {
    'jquery': 'window.jQuery'
  },
  //加载公共资源
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    //单独打包css
    new ExtractTextPlugin("css/[name].css")
  ],
  module: {
    rules: [
      {
        //css文件的处理
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
}
module.exports = config


