const { model } = require('mongoose');

module.exports = model('user', {
  openid: String,
  vip: { //vip等级
    type: Number,
    default:1,
    required: false
  },
  amount: { //钱包金额
    type: Number,
    default:0,
    required: false
  },
  integral:{ //积分
    type: Number,
    default:0,
    required: false
  }
})
