// pages/ETD/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    splash: [{
      src: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/splash_youdao.jpg'
    },
      {
        src: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/splash_xiaoyuan.jpg'
      },
      {
        src: 'cloud://functio-90c82c.6675-functio-90c82c-1258888338/ETD/img/splash_wordspass.jpg'
      }],
      xTOy: false
  },
  toIndex:function(){
    wx.navigateTo({
      url: '/pages/ETD/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
//获取缓存中的key
    wx.setStorage({
      key: 'has_show_splash',
      data: true
    })
//改变swiper的滑动方向
    setInterval(() => {
      // console.log('doSomething')
      this.setData({
        xTOy: true
      })
    }, 10000);
    setInterval(() => {
      // console.log('doSomething')
      this.setData({
        xTOy: false
      })
      // console.log(this.data.xTOy)
    }, 20000);
    
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