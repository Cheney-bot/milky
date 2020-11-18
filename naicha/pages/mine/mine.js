// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoadin:false,
    userInfo:{
      amount:0,
      integral:0,
      vip:1,
    }
  },
  // 获得授权后的回调
  getMandate:function(res){
    getApp().login();
  },
})