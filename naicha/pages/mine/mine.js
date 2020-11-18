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
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    // 查看登录态
    wx.getStorage({
      key: 'TOKEN',
      success:(res)=>{
        this.setData({
          isLoadin:true
        }),
        // 获取用户信息
        wx.request({
          url: 'http://localhost:3000/api/user/get_userinfo',
          method: 'get',
          data: {
            token:res.data
          },
          success:(res)=>{
            this.setData({
              userInfo:res.data
            })
          }
        })
      },
      fail:(error)=>{
        this.setData({
          isLoadin:false
        })
      }
    })
  },
})