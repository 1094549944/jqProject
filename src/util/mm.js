/*
 * @Author: jiaxinying 
 * @Date: 2018-08-15 18:08:53 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-21 17:08:24
 * 通用工具
 */

'use strict'
var Hogan = require('hogan.js')
var conf = {
  serverHost: ''
}
var _mm = {
  // 网络请求
  request: function (param) {
    var _this = this
    $.ajax({
      type: param.method || 'get',
      url: param.url || 'get',
      dataType: param.type || 'json',
      data: param.data || '',
      success: function (res) {
        // 请求成功
        if (0 === res.status) {
          typeof param.success === 'function' && param.success(res.data, res.msg);
        }
        // 没有登录状态，需要强制登录
        else if (10 === res.status) {
          _this.doLogin();
        }
        // 请求数据错误
        else if (1 === res.status) {
          typeof param.error === 'function' && param.error(res.msg);
        }
      },
      error: function (err) {
        typeof param.error === 'function' && param.error(err.statusText);
      }
    })
  },
  // 统一登录处理
  doLogin: function () {
    window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
  },
  //获取后端的接口地址  提取的原因： 为了改变接口方便
  getServerUrl: function (path) {
    return conf.serverHost + path
  },
  //获取url的参数
  getUrlParam: function (name) {
    //原理 wagn.com/?keyword=xxx&page=1  使用正则来做
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var result = window.location.search;//问号以后的字符串

    result = result.substr(1).match(reg)

    //第二是匹配到的值，需要解码。因为传值的时候是encodeURIComponent
    return result ? decodeURIComponent(result[2]) : null
  },
  //渲染html模板
  renderHtml: function (htmlTemplate, data) {
    //hogan的原理是先编译，在渲染
    //编译
    var template = Hogan.compile(htmlTemplate),
      result = template.render(data)
    //render 输出
    return result
  },
  //成功提示
  successTips: function (msg) {
    alert(msg || '操作成功')
  },
  //失败提示
  errorTips: function (msg) {
    alert(msg || '操作错误')
  },
  //字段的验证 支持费控，手机，邮箱的判断

  validate: function (value, type) {
    var value = $.trim(value)
    //非空验证
    if ('require' === type) {
      return !!value
    }
    //手机号验证
    if ('phone' === type) {
      return /^1\d{10}$/.test(value)
    }
    // 邮箱格式验证
    if ('email' === type) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }
  },
  goHome: function () {
    window.location.href = './index.html';
  }
}


module.exports = _mm;