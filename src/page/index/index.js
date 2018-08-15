/*
 * @Author: jiaxinying 
 * @Date: 2018-08-14 16:54:07 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-15 18:51:37
 */
'use strict'
console.log('hello index-----')

var _mm = require('util/mm.js');

console.log(_mm)
_mm.request({
  url: '/product/list.do?keyword=1',
  success: function (res) {
    console.log(res)
  }, error: function (errMsg) {
    console.log(errMsg)
  }
})

