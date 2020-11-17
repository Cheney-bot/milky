const Router = require("koa-router");
const User = require('../model/user');
const JWT = require('jsonwebtoken');
const router = new Router({ prefix: "/api/user" });

// 查询用户信息
router.get("/get_userinfo", async (ctx) => {
  // 通过openid查询用户数据
  ctx.verifyParams({
    token: 'string'
  });
  const result = JWT.verify(ctx.request.query.token, 'hello world');
  const user = await User.findOne({openid: result.openid},{openid:false});

  ctx.status = 200;
  ctx.body = user;
});

module.exports = router;
