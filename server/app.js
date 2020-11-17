const Koa = require("koa");
const error = require("koa-json-error");
const parameter = require("koa-parameter");
const milkyRouter = require('./router/milkyRouter')

const app = new Koa();

// 处理错误
app.use(
  error({
    preFormat: (err, { stack, ...rest }) => {
      return process.env.NODE_ENV === "development" ? { stack, ...rest } : rest;
    },
  })
);

// 处理参数
app.use(async (ctx, next) => {
  await new Promise((resolve, reject) => {
    let data = "";
    ctx.req.on("data", (bf) => {
      data += bf;
    });
    ctx.req.on("end", () => {
      data && (ctx.request.body = JSON.parse(data));
      resolve();
    });
  });
  await next();
});

// 验证参数
parameter(app);

// 使用路由
app.use(milkyRouter.routes()).use(milkyRouter.allowedMethods());


module.exports = app;
