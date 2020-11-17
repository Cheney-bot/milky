const Router = require("koa-router");

const router = new Router({ prefix: "/api/user" });

router.post('/set_userinfo', async (ctx)=>{
  console.log(ctx.request.body);
})


module.exports = router;