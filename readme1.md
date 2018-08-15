# 初始化

## 项目目录

## 项目工具


## 安装脚手架

1.npm init 初始化项目


# 小记webpack4.x升级过程

https://www.imooc.com/article/24738

# 基本学习架构

https://static.mukewang.com/img/5981a6a70001362410504931.png

# 《手把手从零打造企业级电商平台-前端实战》学习指南
https://www.imooc.com/article/26428



## 3-4 学习npm 和webpack 的初始化
执行
webpack --mode development ./src/page/index/index.js -o ./dist/app.js

会得到正确结果
参考地址
https://www.imooc.com/qadetail/205218


如果想执行

webpack ./src/page/index/index.js -o ./dist/app.js

则需要在webpack.config.js 中添加

 module.exports = {
   mode: 'production'
 };
## 配置webpack基础后，执行webpack
var config = {
  mode: 'production',
  entry: {
    index: './src/page/index/index.js',
    login: './src/page/login/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  }
}
module.exports = config

## 配置webpack 的optimization

https://uinika.github.io/web/webpack.html

https://www.cnblogs.com/ufex/p/8758792.html

https://uinika.github.io/web/webpack.html#/SplitChunksPlugin（推荐）

## 全局安装webpack-dev-server
 npm install webpack-dev-server@3.1.1 -g

## 如果在使用webpack-dev-server提示要安装webpack-cli的时候，直接安装就好