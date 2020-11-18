const {model,SchemaTypes} = require('mongoose');

module.exports = model("order", {
  // 用户id
  userID: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  // 店铺名称
  shopName: String,
  // 订单状态
  status: Number, //0：在购物车，1：制作中，2：已取消，3：已完成
  // 取餐号
  code: Number,
  // 订单编号
  orderNumber:Number,
  // 订单时间
  time:String,
  //订单商品信息
  goods:Array,
});