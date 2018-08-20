'use strict'
require('./index.css');
var _mm = require('util/mm.js')
require('util/slider/index.js')
var data = {
  leftData: [
    {
      "id": "001",
      "children": [
        {
          "id": "001",
          "keyword": "手机"
        },
        {
          "id": "002",
          "keyword": "ipad"
        }, {
          "id": "003",
          "keyword": "数码"
        }
      ]
    },
    {
      "id": "004",
      "children": [
        {
          "id": "004",
          "keyword": "电脑"
        },
        {
          "id": "005",
          "keyword": "办公配件"
        }
      ]
    },
    {
      "id": "005",
      "children": [
        {
          "id": "006",
          "keyword": "电视"
        },
        {
          "id": "007",
          "keyword": "空调"
        },
        {
          "id": "008",
          "keyword": "冰箱"
        },
        {
          "id": "009",
          "keyword": "洗衣机"
        }
      ]
    },
    {
      "id": "006",
      "children": [
        {
          "id": "010",
          "keyword": "厨卫家电"
        },
        {
          "id": "011",
          "keyword": "小家电"
        }

      ]
    },
    {
      "id": "090",
      "children": [{
        "id": "012",
        "keyword": "个护化妆"
      }, {
        "id": "013",
        "keyword": "清洁用品"
      },
      {
        "id": "014",
        "keyword": "纸品"
      }]
    },
    {
      "id": "014",
      "children": [

        {
          "id": "015",
          "keyword": "母婴用品"
        }, {
          "id": "016",
          "keyword": "儿童玩具"
        },
        {
          "id": "017",
          "keyword": "童装童鞋"
        }

      ]
    },
    {
      "id": "018",
      "children": [
        {
          "id": "018",
          "keyword": "鞋靴"
        },
        {
          "id": "019",
          "keyword": "箱包"
        }, {
          "id": "020",
          "keyword": "钟表"
        },
        {
          "id": "021",
          "keyword": "珠宝"
        },]
    },
    {
      "id": "020",
      "children": [

        {
          "id": "022",
          "keyword": "图书"
        },
        {
          "id": "023",
          "keyword": "音像"
        },
        {
          "id": "024",
          "keyword": "电子书"
        }
      ]
    }
  ],
  floorData: [{
    'id': '001',
    'title': 'F1 家用电器',
    'children': [{
      name: '双开门冰箱',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180213/20180213110054_6547.jpg'
    }, {
      name: '电视',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180223/20180223091446_6102.jpg'
    }, {
      name: '空调',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180408/20180408170450_4878.jpg'
    }, {
      name: '热水器',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20171225/20171225173234_4985.jpg'
    }]
  },
  {
    'id': '002',
    'title': 'F2 数码3C',
    'children': [{
      name: '笔记本电脑',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180102/20180102174141_3992.jpg'
    }, {
      name: '手机',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180411/20180411082653_1305.jpg'
    }, {
      name: '平板电脑',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20171222/20171222173911_6384.jpg'
    }, {
      name: '数码相机',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180212/20180212145741_5638.jpg'
    }, {
      name: '3C配件',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180412/20180412174400_8577.jpg'
    }]
  },
  {
    'id': '001',
    'title': 'F3 服装箱包',
    'children': [{
      name: '女装',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180411/20180411082738_6249.jpg'
    }, {
      name: '帽子专区',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180103/20180103171914_4025.jpg'
    }, {
      name: '旅行箱',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180409/20180409160034_4230.jpg'
    }, {
      name: '手提包',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180408/20180408162323_88.jpg'
    }, {
      name: '保暖内衣',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180415/20180415114959_7217.jpg'
    }]
  },
  {
    'id': '001',
    'title': 'F4 食品生鲜',
    'children': [{
      name: '最爱零食',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180415/20180415122256_2373.jpg'
    }, {
      name: '生鲜',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20171219/20171219104424_5513.jpg'
    }, {
      name: '半成品菜',
      img: 'http://baixing.kuaihejiu.com/shopGoodsImg/20171213/20171213082037_1895.jpg'
    }, {
      name: '速冻专区',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180208/20180208143206_2666.jpg'
    }, {
      name: '进口牛奶',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180209/20180209171202_214.jpg'
    }]
  },
  {
    'id': '005',
    'title': 'F5 酒水饮料',
    'children': [{
      name: '白酒',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180211/20180211173240_3224.jpg'
    }, {
      name: '红酒',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180208/20180208140614_9709.jpg'
    }, {
      name: '饮料',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180408/20180408161405_9327.jpg'
    }, {
      name: '调制鸡尾酒',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180527/20180527180650_6793.jpg'
    }, {
      name: '进口洋酒',
      img: 'http://images.baixingliangfan.cn/shopGoodsImg/20180103/20180103170753_8012.jpg'
    }]
  }
  ]
}
var templateIndex = require('./index.string')
var templateIndexFloor = require('./index2.string')
var templateBanner = require('./banner.string')
var _index = {
  init: function () {
    this.renderLeftNav()
  },
  renderLeftNav: function () {
    //渲染菜单
    var navLeftHtml = _mm.renderHtml(templateIndex, { list: data })

    $('.keywords-list').html(navLeftHtml)
    //渲染楼层
    var navImgHtml = _mm.renderHtml(templateIndexFloor, { list: data })

    $('.floor-wrap').html(navImgHtml)
    //渲染轮播图
    // 渲染banner的html
    var bannerHtml = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider = $('.banner').unslider({
      dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function () {
      var forward = $(this).hasClass('prev') ? 'prev' : 'next';
      $slider.data('unslider')[forward]();
    });
  }
}
_index.init()
