// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoadin:false
  },
  // 获得授权后的回调
  getMandate:function(res){
    console.log(res);
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    // 查看登录态
    wx.getStorage({
      key: 'token',
      success:(res)=>{
        console.log(res);
        this.setData({
          isLoadin:true
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