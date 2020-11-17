const { model } = require("mongoose");


/* 
    商品分类
    0:当季限定
    1:人气热卖
    2:热饮推荐
    3:芋泥系列
    4:风味奶茶
    5:鲜果系列
*/

module.exports = model("milky", {
  // 商品ID
  id: Number,
  // 商品名称
  name: String,
  // 商品价格
  price: Number,
  // 商品图片
  imgUrl: String,
  //商品描述
  desc: String,
  //商品分类
  cate: String,
  // 商品选项
  options: Array,
});
