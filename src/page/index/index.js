/*
 * @Author: jiaxinying 
 * @Date: 2018-08-14 16:54:07 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-20 14:40:38
 */
'use strict'


var _mm = require('util/mm.js');
// require('page/common/nav-simple/index.js')
require('page/common/nav/index.js')
require('page/common/header/index.js')
require('page/common/footer/index.js')
require('page/common/left-nav/index.js')
var data = {
  data: 3452354
}
var html = '<div>{{data}}</div>'


console.log(_mm.renderHtml(html, data))
