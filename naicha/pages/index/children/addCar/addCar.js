// pages/index/children/addCar/addCar.js
import Pubsub from "pubsub-js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    milkyData:{
      type:Object
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    showData:null,
    choose1:{
      activeIndex:0,
      data:''
    },
    choose2:{
      activeIndex:0,
      data:''
    },
    choose3:{
      activeIndex:0,
      data:''
    },
    // 商品总价
    totalPrice:0,
    // 商品数量
    totalCount:1
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭事件
    closeAction(){
      this.triggerEvent('showCarAction');
    },

    // 选择规格事件
    chooseAction1(ev){
      console.log(ev.currentTarget.dataset.option);
      
      this.setData({
        choose1:{
          activeIndex:ev.currentTarget.dataset.index,
          data:ev.currentTarget.dataset.option
        }
      });
    },
    chooseAction2(ev){
      console.log(ev);
      this.setData({
        choose2:{
          activeIndex:ev.currentTarget.dataset.index,
          data:ev.currentTarget.dataset.option
        }
      })
    },
    chooseAction3(ev){
      this.setData({
        choose3:{
          activeIndex:ev.currentTarget.dataset.index,
          data:ev.currentTarget.dataset.option
        }
      })
    },
    // 减少事件
    reduceAction(ev){
      if(this.data.totalCount <= 1){
        wx.showToast({
          title: '最少只能点一杯哦.',
          icon:'none'
        })
        return;
      }else{
        this.setData({
          totalCount:this.data.totalCount-1
        })
      }
    },

    // 增加事件
    addAction(ev){
      if(this.data.totalCount > 5){
        wx.showToast({
          title: '最多只能点五杯哦.',
          icon:'none'
        })
        return;
      }else{
        this.setData({
          totalCount:this.data.totalCount+1
        })
      }
    }
  },

  observers:{
    // 监听商品数据的变化
    'milkyData':function(value){
      if(JSON.stringify(value) !== '{}'){
        this.setData({
          showData:value,
          totalPrice:value.price,
          'choose2.data':value.option2.chooce[0],
          'choose1.data':value.option1.chooce[0],
          'choose3.data':value.option3.chooce[0],
        })
      }
    },
    // 监听商品数量的变化
    'totalCount':function(value){
      this.setData({
        totalPrice:this.data.showData.price * value
      })
    }
  },
})
