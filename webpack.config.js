/*
 * @Author: jiaxinying 
 * @Date: 2018-08-14 15:34:07 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-14 17:16:53
 * 模仿项目
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 环境变量配置，dev / online 
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function (name, title) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    favicon: './favicon.ico', title: title,
    inject: true, hash: true,
    chunks: ['common', name]
  };
};

var config = {
  mode: 'dev' === WEBPACK_ENV ? 'development' : 'production',
  entry: {
    'common': './src/page/common/index.js',
    'index': './src/page/index/index.js'
  },
  output: {
    publicPath: 'dev' === WEBPACK_ENV ? '/dist/' : '//s.happymmall.com/mmall-fe/dist/',
    filename: 'js/[name].js'
  },
  externals: {
    'jquery': 'window.jQuery'
  },
  module: {
    rules: [
      {
        //css文件的处理
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        //模板文件的处理
        test: /\.string$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeAttributeQuotes: false
          }
        }
      },
      {
        //图片配置
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: 'resource/[name].[ext]'
          }
        }]
      }, {
        //字体图标的配置
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        options: {
          limit: 8192,
          name: 'resource/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + './src/util',
      page: __dirname + './src/page',
      service: __dirname + './src/service',
      image: __dirname + './src/image'
    }
  },
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
    // 把css单独打包到文件里 
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页'))

  ],
  devServer: {
    port: 8080,
    proxy: {
      '**/*.do': {
        target: 'http://test.happymmall.com/',
        changeOrigin: true
      }
    }
  }

}
module.exports = config