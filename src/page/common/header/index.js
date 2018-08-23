/*
 * @Author: jiaxinying 
 * @Date: 2018-08-20 14:20:39 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-22 14:39:48
 */
'use strict'
require('./index.css');
var _mm = require('util/mm.js')


//头部搜索部分
var header = {
  init: function () {
    this.onLoad()
    this.bindEvent()
  },
  onLoad: function () {

    var keyword = _mm.getUrlParam('keyword')

    if (keyword) {
      $('#search-input').val(keyword);
    }
  },
  bindEvent: function () {
    var _this = this
    //搜索按钮或者回车键搜索功能
    $('#search-btn').click(function () {
      _this.searchSubmit()
    })
    //键盘回车事件
    $(document).keydown(function (e) {
      if (e.keyCode == 13) {
        _this.searchSubmit()
      }
    })
  },
  // 搜索的提交
  searchSubmit: function () {
    var keyword = $.trim($('#search-input').val());
    // 如果提交的时候有keyword,正常跳转到list页
    if (keyword) {
      window.location.href = './list.html?keyword=' + keyword;
    }
    // 如果keyword为空，直接返回首页
    else {
      _mm.goHome();
    }
  }
}


header.init()