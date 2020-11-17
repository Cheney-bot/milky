import Pubsub from "pubsub-js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    carData:{
      type:Object
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    showData:{},
    showDetail:false,
    showImage:true,
    height:0
  },

  observers:{
    // 监听传入购物车的数据的变化
    'carData':(value)=>{
      console.log(value);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 展示购物车详情
    showDetailAction(){
      if(this.data.showImage){
        this.setData({
          showDetail:!this.data.showDetail,
          showImage:!this.data.showImage,
          height:'100%'
        })
      }else{
        this.setData({
          showDetail:!this.data.showDetail,
          showImage:!this.data.showImage,
          height:0
        })
      }
      
    }
  }
  
})
