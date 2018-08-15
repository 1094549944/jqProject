/*
 * @Author: jiaxinying 
 * @Date: 2018-08-14 16:54:07 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-15 19:22:59
 */
'use strict'


var _mm = require('util/mm.js');
var data = {
  data: 345
}
var html = '<div>{{data}}</div>'


console.log(_mm.renderHtml(html, data))
