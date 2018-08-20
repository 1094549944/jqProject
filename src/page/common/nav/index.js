/*
 * @Author: jiaxinying 
 * @Date: 2018-08-17 11:52:01 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-20 17:48:30
 * 头部文件， 需要在index/index.js中引用
 */
'use strict'
require('./index.css')
var _mm = require('util/mm.js')
var _user = require('service/user-service.js')
var _cart = require('service/cart-service.js')
//导航条的功能
var nav = {
  init: function () {
    this.bindEvent()
    this.loadUserInfo()
    this.loadCartCount()
    return this//很重要，链式操作的标志
  },
  //绑定事件
  bindEvent: function () {
    //登录点击事件
    $('.js-login').click(function () {
      _mm.doLogin()
    })
    //注册点击事件
    $('.js-register').click(function () {
      window.location.href = './user-register.html'
    })
    //退出点击事件
    $('.js-logout').click(function () {
      _user.logout(function (res) {
        //退出登录，刷新页面
        window.location.reload()
      }, function (errMsg) {
        _mm.errorTips(errMsg)
      })
    })
  },
  //用户信息加载
  loadUserInfo: function () {
    _user.checkLogin(function (res) {
      $('.user.not-login').hide().sublings('.user-login').show().find('.username').text(res.username)
    }, function (errMsg) {
      _mm.errorTips(errMsg)
    })
  },
  //商品购物车数量
  loadCartCount: function () {
    _cart.getCartCount(function (res) {
      $('.nav.not-login').hide().sublings('.user.login').show().find('.username').text(res.username)
    }, function (errMsg) {

    })
  },


}

module.exports = nav.init();