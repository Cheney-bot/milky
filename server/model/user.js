const { model } = require('mongoose');

module.exports = model('user', {
  openid: String,
  vip: {
    type: Number,
    default:1,
    required: false
  }
})
