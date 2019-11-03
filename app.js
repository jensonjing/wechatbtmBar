//app.js
App({
  onLaunch: function () {
    //隐藏小程序自带tabBar
    wx.hideTabBar();
  },
  globalData: {
    userInfo: null
  }
})