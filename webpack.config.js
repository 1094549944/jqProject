/*
 * @Author: jiaxinying 
 * @Date: 2018-08-15 14:18:18 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-20 19:22:55
 * 配置多入口  引入jquery 并配置 公共模块加载 css 单独打包 html 打包
 */
/* * @Author: jiaxinying 
* @Date: 2018-08-15 16:26:05
* @Last Modified by: jiaxinying 
* @Last Modified time: 2018-08-15 16:26:05
* 处理html的插件，是支持 ejs模板的*/


//环境变量的配置  （启动服务的时候加上参数）
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
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
  mode: 'dev' === WEBPACK_ENV ? 'development' : 'production',
  entry: {
    common: './src/page/common/index.js',
    index: './src/page/index/index.js',
    login: './src/page/login/index.js'
  },
  output: {
    //生成文件的路径
    path: __dirname + '/dist',
    filename: 'js/[name].js',
    //访问文件的路径
    publicPath: 'dev' === WEBPACK_ENV ? '/dist/' : '//s.happymmall.com/mmall-fe/dist/',
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
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      service: __dirname + '/src/service',
      image: __dirname + '/src/image'
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
      },
      /* 
         * 【改动】：图片文件的加载方式变化，并和字体文件分开处理
         */
      // 图片的配置
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              /* 
              * 【改动】：图片小于2kb的按base64打包
              */
              limit: 2048,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      },
      /* 
      * 【改动】：字体文件的加载方式变化
      */
      // 字体图标的配置
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }
    ]

  },
  devServer: {
    port: 8088,
    proxy: {
      '**/*.do': {
        target: 'http://test.happymmall.com/',
        changeOrigin: true
      }
    }
  }
}
module.exports = config


