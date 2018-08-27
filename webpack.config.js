/*
 * @Author: jiaxinying 
 * @Date: 2018-08-15 14:18:18 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-27 18:50:37
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
    'common': './src/page/common/index.js',
    'index': './src/page/index/index.js',
    'user-login': './src/page/user-login/index.js',
    'result': './src/page/result/index.js',
    'user-register': './src/page/user-register/index.js',
    'user-pass-reset': './src/page/user-pass-reset/index.js',
    'user-center': './src/page/user-center/index.js',
    'user-center-update': './src/page/user-center-update/index.js',
    'user-pass-update': './src/page/user-pass-update/index.js',
    'about': './src/page/about/index.js',
    'list': './src/page/list/index.js',
    'detail': './src/page/detail/index.js',
    'cart': './src/page/cart/index.js',
    'order-confirm': './src/page/order-confirm/index.js',
    'payment': './src/page/payment/index.js',
    'order-list': './src/page/order-list/index.js',
    'order-detail': './src/page/order-detail/index.js'
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
    new HtmlWebpackPlugin(getHtmlConfig('user-login', '登录')),
    new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
    new HtmlWebpackPlugin(getHtmlConfig('user-register', '注册')),
    new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
    new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
    new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '个人信息编辑')),
    new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '密码更新')),
    new HtmlWebpackPlugin(getHtmlConfig('about', '关于MMall')),
    new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表')),
    new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情')),
    new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车')),
    new HtmlWebpackPlugin(getHtmlConfig('order-confirm', '订单确认')),
    new HtmlWebpackPlugin(getHtmlConfig('payment', '订单支付')),
    new HtmlWebpackPlugin(getHtmlConfig('order-list', '订单列表')),
    new HtmlWebpackPlugin(getHtmlConfig('order-detail', '订单详情'))
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
    disableHostCheck: true,
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


