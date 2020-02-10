// pages/ETD/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    kicon: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/login_icon.png',
    bgimg:{
      pic1: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/login_bg_1.jpg',
      pic2: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/login_bg_2.jpg'
    },
    user_icon: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/icon/login_user.png',
    pwd_icon: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/icon/login_pwd.png',
    isShow: 'block',
    userName: '',
    password: '',
    user_info: 0,
  },
  getUserName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  getPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  confirm: function () {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    })
  },
  login: function(params) {
    wx.showToast({
      title: '登录中',
      icon: 'loading'
    })

    app.setStorageUser(params, function (res) {
      if (res.errMsg == 'setStorage:ok') {
        setTimeout(function () {
          wx.hideToast();
          // 登录
          wx.switchTab({
              url: '/pages/ETD/index'
          });
        }, 2000);
      }
    });
  },

  formSubmit: function(options) {
    // let that = this;
    let userName = this.data.userName;
    let password = this.data.password;
    console.log(this.data.userName)
    console.log(this.data.password)
    if (userName == '' || password == ''){
      console.log("请正确输入用户名和密码")
      wx.showModal({
        title: '登录失败',
        content: '账号或密码不正确',
        confirmColor: '#b02923',
        showCancel: false
      })
    }else{
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
      wx.navigateTo({
        url: '/pages/ETD/index',
      })
    }
    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.bgimg)
    // 遮罩层
    setTimeout( () => {
      this.setData({
        isShow: 'none'
      })
    },1000)

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
      success: ( (e) =>  {
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})