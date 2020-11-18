// pages/order/order.js
Page({

  //页面的初始数据
  data: {
    orderInfo:{
      "shopName":"古茗茶饮旗舰店",
      "status":"制作中",
      "code":"116",
      "订单编号":"时间戳生成",
      "订单时间":"2020-04-14 16:45:57",
      "goods":[
        {
          "id" : 1,
          "name" : "芝芝莓莓",
          "price" : 19,
          "num":1,
          "imgUrl" : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605593388165&di=6190540d0462b1ab4510035b3a9a3917&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2018%2F12%2F22%2FFjhlzuz1CyxoWfh-7mrK5Gx2nt0Y.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg",
          "option1":"大杯",
          "option2":"正常冰",
          "option3":"标准"
        },
        {
          "id" : 2,
          "name" : "超级水果茶",
          "price" : 24,
          "num":3,
          "imgUrl" : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605589342467&di=14c61b6464ccae9fd3135e268f1a266b&imgtype=0&src=http%3A%2F%2Fimages.qudao.com%2Fbrandimgs%2F2017-07-27%2F5979c93d7b31c_520_430.jpg",
          "option1":"大杯",
          "option2":"多冰",
          "option3":"五分糖"
        }
      ]
    },
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
    // 根据传入id请求订单数据，保存到orderInfo
    
  }
})