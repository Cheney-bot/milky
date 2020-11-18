const Router = require("koa-router");
const User = require('../model/user');
const JWT = require('jsonwebtoken');
const router = new Router({ prefix: "/api/user" });

// 查询用户信息
router.get("/get_userinfo", async (ctx) => {

  const token = ctx.req.headers.authorization.replace('Bearer ',''); 
  const result = JWT.verify(token, 'hello world');
  const user = await User.findOne({openid: result.openid},{openid:false});
  
  ctx.status = 200;
  ctx.body = user._id;
});

module.exports = router;
