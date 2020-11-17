// pages/takeTea/children/navbar/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    actIndex: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectAct:function(ev){
      this.triggerEvent('SelectAct',{actIndex:ev.currentTarget.dataset.index});
    }
  }
})
