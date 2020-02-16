const app = getApp();
Page({
  data: {
    digest:'',
    isShow_load: 'block',
    type: '	BA10TA81wangning',
    page: 0,
    size: 10,
    total: 1,
    artlist: [],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    gridCol: 4,
    gridBorder: false,
    isShow: 'block',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://www.nytdc.edu.cn/uploadfile/2019/1113/20191113101325632.png'
    }, {
      id: 1,
      type: 'image',
        url: 'http://www.nytdc.edu.cn/uploadfile/2019/1113/20191113030127260.jpg',
    }, {
      id: 2,
      type: 'image',
        url: 'http://www.nytdc.edu.cn/uploadfile/2019/0829/20190829041443565.png'
    }, {
      id: 3,
      type: 'image',
        url: 'http://www.nytdc.edu.cn/uploadfile/2019/1111/20191111104358485.jpg'
    }, {
      id: 4,
      type: 'image',
        url: 'http://www.tdxy.com.cn/uploadfile/2015/0318/20150318031409504.jpg'
    }, {
      id: 5,
      type: 'image',
        url: 'http://www.nytdc.edu.cn/uploadfile/2017/1114/20171114083631805.png'
    }, {
      id: 6,
      type: 'image',
        url: 'http://www.tdxy.com.cn/uploadfile/2014/0317/20140317101756814.jpg'
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
  retrieve() {
    let app = getApp()
    let start = (this.data.page - 1) * this.data.size
    wx.showToast({
      title: '请稍等~',
      image: '/images/logo.png',
    })
    // return app.request(`https://api.douban.com/v2/movie/${this.data.type}?start=${start}&count=${this.data.size}&apikey=0df993c66c0c636e29ecbb5344252a4a `)
    return app.request(`https://3g.163.com/touch/reconstruct/article/list/${this.data.type}/${this.data.page}-${this.data.size}.html`)
      .then(res => {
        if (res) {
          // res = JSON.stringify(res)
          // res = JSON.parse(res)
          res = res.substring(9, [res.length - 1]);
          res = JSON.parse(res)
          console.log(res)
          this.setData({
            artiList: res.BA10TA81wangning,
            size: this.data.size + 10
          })
          let artiList = this.data.artiList.concat(res.BA10TA81wangning)
          
          console.log(this.data.artiList)
          console.log(this.data.size)
          // if (res.subjects.length) {
          // let movies = this.data.movies.concat(res.subjects)
          // let total = Math.floor(res.total / this.data.size)
          // this.setData({
          //   movies: movies,
          //   total: total,
          //   page: this.data.page
          // })
          // wx.setNavigationBarTitle({
          //   title: res.title,
          // })
          // console.log(movies)
        }else{
          this.setData({
            isShow_load: 'none'
          })
          wx.showToast({
            title: '暂无更多',
            image: '/images/logo.png',
            duration: 1000
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 3000);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        // wx.hideLoading()
      })
      
  },





  onLoad() {
    this.retrieve()
    // console.log(this.data.artiList.digest)
    // if (!this.data.artiList.digest) {
    //   this.setData({
    //     digest: '暂无内容'
    //   })
    // } else {
    //   this.setData({
    //     digest: this.data.artiList.digest
    //   })
    // }
    // console.log(this.data.digest)
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
    // console.log(e)
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
  },
  toPageMy: function() {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
  toPageIndex: function() {
    wx.navigateTo({
      url: '/pages/ETD/index',
    })
  },
  toPageFunc: function() {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
  toPageAdd: function() {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
  toPageData: function() {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  }

})