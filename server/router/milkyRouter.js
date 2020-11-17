const Router = require("koa-router");
const MilkyCtrl = require('../controllers/MilkyCtrl')


// 请求路径
// 商品信息
const router = new Router({ prefix: "/api/milky" });

// 查询商品的信息
router.get('/',async (ctx,next)=>{
    // 通过cate查找商品
    ctx.verifyParams({
        cate:'string',
    })
    // 查询商品
    const result = await MilkyCtrl.findMilky({cate:ctx.query.cate});
    // 响应客户端
    ctx.status = 200;
    ctx.body = result;
})

module.exports = router;