const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    gridCol: 4,
    gridBorder: false,
    isShow: 'block',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],

    iconList: [{
      icon: 'recordfill',
      color: 'orange',
      badge: 20,
      name: '课程'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 20,
      name: '图册'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '换肤'
    }, {
      icon: 'explorefill',
      color: 'purple',
      badge: 0,
      name: '更多'
    }],
    article: [{
      title: "热点新闻1 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "内容1 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻2 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "内容1 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻3 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "内容15 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻4 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "54654645折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻5 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "546456折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻6 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "546546折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻7 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "5678987折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      },
      {
        title: "热点新闻8 无意者 烈火焚身;以正义的烈火拔出黑暗。",
        imgUrl: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        content: "789656456折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",
        type_id__i: "正义天使",
        type_id__ii: "史诗",
      }
    ]
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function(e) {
    this.setData({
      gridCol: e.detail.value
    });
    wx.setStorage({
      key: 'gridCol',
      data: e.detail.value,
    })

  },
  gridswitch: function(e) {
    this.setData({
      gridBorder: e.detail.value
    });
    wx.setStorage({
      key: 'gridBorder',
      data: e.detail.value,
    })
    console.log(e.detail.value)
  },
  menuBorder: function(e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function(e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function(e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function(e) {
    this.setData({
      skin: e.detail.value
    });
  },




  onLoad() {
    // 遮罩层
    setTimeout(() => {
      this.setData({
        isShow: 'none'
      })
    }, 1000)
    wx.getStorage({
      key: 'gridCol',
      success: ((e) => {
        this.setData({
          gridCol: e.data,
        })
      }),
    })
    wx.getStorage({
      key: 'gridBorder',
      success: ((e) => {
        this.setData({
          gridBorder: e.data,
        })
      }),
    })
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
    console.log(e)
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }

})