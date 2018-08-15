/*
 * @Author: jiaxinying 
 * @Date: 2018-08-15 14:18:18 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-15 16:27:23
 * 配置多入口  引入jquery 并配置 公共模块加载 css 单独打包 html 打包
 */
/* * @Author: jiaxinying 
* @Date: 2018-08-15 16:26:05
* @Last Modified by: jiaxinying 
* @Last Modified time: 2018-08-15 16:26:05
* 处理html的插件，是支持 ejs模板的*/

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 获取html-webpack-plugin参数的方法   对应的页面，引入对应的js
//获取html-webpack-plugin参数的方法 

var getHtmlConfig = function (name, title) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    title: title,
    inject: true,
    hash: true,
    chunks: ['common', name]
  };
};

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
    new ExtractTextPlugin("css/[name].css"),
    //html模板的处理  getHtmlConfig方法封装在上面
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    new HtmlWebpackPlugin(getHtmlConfig('login', '登录')),
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
      }, {
        //模板文件的处理
        test: /\.string$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeAttributeQuotes: false
          }
        }
      }
    ]
  }
}
module.exports = config


