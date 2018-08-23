/*
* @Author: Rosen
* @Date:   2017-05-28 11:58:08
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-23 11:27:32
* pc端底部分页插件
*/

'use strict';

require('./index.css');
var _mm = require('util/mm.js');
var templatePagination = require('./index.string');

var Pagination = function () {
    var _this = this;
    /** 
     * defaultOption 默认属性
     * 
     * container：容器名
     * pageNum:开始页面
     * pageRange:左右浮动显示的页数
     * onSelectPage:回调函数
     * 
     * 
     * 
     * 
     */


    this.defaultOption = {
        container: null,
        pageNum: 1,
        pageRange: 3,
        onSelectPage: null
    };
    // 事件的处理
    $(document).on('click', '.pg-item', function () {
        var $this = $(this);
        // 对于active和disabled按钮点击，不做处理
        if ($this.hasClass('active') || $this.hasClass('disabled')) {
            return;
        }
        typeof _this.option.onSelectPage === 'function'
            ? _this.option.onSelectPage($this.data('value')) : null;
    });
};
// 渲染分页组件
Pagination.prototype.render = function (userOption) {
    // 合并选项 extend 方法，解决不一样defaultOption userOption

    //添加this.option  

    this.option = $.extend({}, this.defaultOption, userOption);
    // 判断容器是否为合法的jquery对象 instanceof
    if (!(this.option.container instanceof jQuery)) {
        return;
    }
    // 判断是否只有1页 如果只有1页，那么不显示，如果是多页，那么可以显示

    // if (this.option.pages <= 1) {
    //     return;
    // }
    // 渲染分页内容
    this.option.container.html(this.getPaginationHtml());
};
// 获取分页的html, |上一页| 2 3 4 =5= 6 7 8|下一页|  5/9
Pagination.prototype.getPaginationHtml = function () {
    console.log(this.option)
    var html = '',
        option = this.option,
        pageArray = [],
        start = option.pageNum - option.pageRange > 0
            ? option.pageNum - option.pageRange : 1,
        end = option.pageNum + option.pageRange < option.pages
            ? option.pageNum + option.pageRange : option.pages;
    // 上一页按钮的数据
    pageArray.push({
        name: '上一页',
        value: this.option.prePage,
        disabled: !this.option.hasPreviousPage
    });
    // 数字按钮的处理
    for (var i = start; i <= end; i++) {
        pageArray.push({
            name: i,
            value: i,
            active: (i === option.pageNum)
        });
    };
    // 下一页按钮的数据
    pageArray.push({
        name: '下一页',
        value: this.option.nextPage,
        disabled: !this.option.hasNextPage
    });
    html = _mm.renderHtml(templatePagination, {
        pageArray: pageArray,
        pageNum: option.pageNum,
        pages: option.pages
    });
    return html;
};

module.exports = Pagination;