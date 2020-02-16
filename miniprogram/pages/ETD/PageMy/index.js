// pages/ETD/PageMy/index.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: false,
    saying: [],
    saying_en:[],
    userInfo: '',
    loadModal: false
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
    console.log(this.data.skin)
  },
  loadModal() {
    this.setData({
      loadModal: true
    })
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 1500)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadModal()
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo
        })
        console.log(this.data.userInfo)
        
      }
    })
    wx.request({
      url: 'https://api.ooopn.com/ciba/api.php',
      method: 'GET',
      header: {
        "content-Type": "application/json;charset=UTF-8"
      },
      success: e => {
        console.log(e.data)
        this.setData({
          saying: e.data,
          saying_en: e.data["ciba-en"]
        })
        console.log(this.data.saying)
        console.log(this.data.saying_en)
      }
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

  },
  toPageMy: function () {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
  toPageIndex: function () {
    wx.navigateTo({
      url: '/pages/ETD/index',
    })
  },
  toPageFunc: function () {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
  toPageAdd: function () {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
  toPageData: function () {
    wx.navigateTo({
      url: '/pages/ETD/PageMy/index',
    })
  },
})