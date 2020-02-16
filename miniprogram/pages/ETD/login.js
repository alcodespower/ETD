// pages/ETD/login.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    kicon: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/login_icon.png',
    bgimg: {
      pic1: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/login_bg_1.jpg',
      pic2: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/login_bg_2.jpg'
    },
    user_icon: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/icon/login_user.png',
    pwd_icon: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/icon/login_pwd.png',
    isShow: 'block',
    userName: '',
    password: '',
    user_info: 0,
    avatarUrl: '',
    nickName: '',
    getuserInfo: ''
  },
  // 开放注册
  onAdd: function() {
    const db = wx.cloud.database()
    db.collection('ETD_user_info').add({
      data: {
        userName: this.data.userName,
        user_info: this.data.user_info
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          // counterId: this.data.userName,
          count: 1
        })
        wx.navigateTo({
          url: '/pages/ETD/index',
        })
        wx.showToast({
          title: '注册成功',
        })
        console.log('新增记录成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '注册失败（请勿重复注册）'
        })
        console.error('新增记录失败：', err)
      }
    })
  },

  onQuery: function() {
    const db = wx.cloud.database()
    // 查询当前用户所有的counters
    db.collection('ETD_user_info').where({
      user_info: this.data.user_info
    }).get({
      success: res => {
        // this.setData({
        //   queryResult: JSON.stringify(res.data, null, 2)
        // })
        if (res.data != '') {
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/ETD/index',
            })
          }, 500)
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          })
        } else {
          console.log("请正确输入用户名和密码")
          // wx.showModal({
          //   title: '登录失败',
          //   content: '账号或密码不正确',
          //   confirmColor: '#b02923',
          //   showCancel: false
          // })
          wx.showToast({
            title: '登录失败',
            icon: 'loading'
          })
          setTimeout(() => {
            wx.hideToast()
          }, 1500)
        }
        console.log('查询成功: ', res.data)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },

  getUserName: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },

  getPassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  // login: function(params) {
  //   wx.showToast({
  //     title: '登录中',
  //     icon: 'loading'
  //   })
  //   app.setStorageUser(params, function (res) {
  //     if (res.errMsg == 'setStorage:ok') {
  //       setTimeout(function () {
  //         wx.hideToast();
  //         // 登录
  //         wx.switchTab({
  //             url: '/pages/ETD/index'
  //         });
  //       }, 2000);
  //     }
  //   });
  // },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
     
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },

  formSubmit: function(options) {
    // let that = this;
    let userName = this.data.userName;
    let password = this.data.password;
    console.log(this.data.userName)
    console.log(this.data.password)
    if (userName == '' || password == '') {
      console.log("请正确输入用户名和密码")
      wx.showModal({
        title: '登录失败',
        content: '账号或密码不正确',
        confirmColor: '#b02923',
        showCancel: false
      })
    } else {
      wx.showToast({
        title: '登录中',
        icon: 'loading'
      })
      this.setData({
        user_info: this.data.userName + this.data.password
      })
      console.log(this.data.user_info)
      wx.setStorage({
        key: 'user_info',
        data: this.data.user_info,
      })
      wx.setStorage({
        key: 'userName',
        data: this.data.userName,
      })
      // 查询数据库
      this.onQuery()
      // 开放注册（注册关闭后请注掉该行代码以免造成数据库资源浪费）
      // this.onAdd()

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let app = getApp()
    // console.log(this.data.bgimg)
    
    // 遮罩层
    setTimeout(() => {
      this.setData({
        isShow: 'none'
      })
    }, 1000)

    // 本地缓存判断是否为第一次使用
    wx.getStorage({
      key: 'has_show_splash',
      fail: err => {
        wx.redirectTo({
          url: '/pages/ETD/splash',
        })
      },
    })
    wx.getStorage({
      key: 'userName',
      success: ((e) => {
        this.setData({
          userName: e.data
        })
        console.log(e.data)
      }),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})