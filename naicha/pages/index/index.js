// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // swiper的配置
    indicatorDots:true,
    indicatorColor:'#ddd',
    indicatorActiveColor:'#000',
    autoplay:true,
    // 奶茶的展示
    milkyList:[],
    // 商品规格的展示
    isCarShow:false,
    // 给购物车的数据
    milkyData:{}
  },

  // 展示car的事件
  showCarAction(ev){
    this.setData({
      isCarShow:!this.data.isCarShow,
    });
    this.setData({
      milkyData:ev.detail
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})