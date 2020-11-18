// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerData:[
      {title:'外卖配送'},
      {title:'到店自取'},
    ],
    headerIndex:0,
    // 显示外卖还是到店,true表示外卖
    showSide:true,
  },

  changeHeaderIndex(ev){
    this.setData({
      headerIndex:ev.currentTarget.dataset.index,
      showSide:!this.data.showSide
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 给头部添加样式

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