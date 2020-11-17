import Pubsub from "pubsub-js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // listData:{
    //   type:Array
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cateTitle:[
      {title:'当季限定',titUrl:"../../../../assets/cateIcon.png",id:1},
      {title:'人气热卖',titUrl:"../../../../assets/cateIcon.png",id:2},
      {title:'热饮推荐',titUrl:"../../../../assets/cateIcon.png",id:3},
      {title:'芋泥系列',titUrl:"../../../../assets/cateIcon.png",id:4},
      {title:'风味奶茶',titUrl:"../../../../assets/cateIcon.png",id:5},
      {title:'鲜果系列',titUrl:"../../../../assets/cateIcon.png",id:6},
    ],
    milkyList:[]
  },

  created(){
    wx.request({
      url: 'http://localhost:3000/api/milky',
      method:'GET',
      data:{cate:0},
      success:({data})=>{
        if(data.length > 0){
          this.setData({
            milkyList:data
          })
        }
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 左侧栏的点击事件
    milkyChangeAction(ev){
      wx.request({
        url: 'http://localhost:3000/api/milky',
        method:'GET',
        data:ev.currentTarget.dataset,
        success:({data})=>{
          if(data.length > 0){
            this.setData({
              milkyList:data
            })
          }
        }
      })
    
    },

    // 商品的点击事件
    chooseOptionsAction(ev){
      // Pubsub.publish('car-show',ev.currentTarget.dataset.item);
      this.triggerEvent('showCarAction',ev.currentTarget.dataset.item)
      
    }
  }
})
