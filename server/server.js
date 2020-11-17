const http = require("http");
const app = require("./app");
const moogoose = require("mongoose");


moogoose.connect(
  "mongodb://localhost:27017/milky",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("数据库连接失败");
      console.log(err);
    } else {
      const server = http.createServer(app.callback());
      console.log("数据库连接成功");
      server.listen(3000, "localhost", () => {
        console.log("服务器连接成功..");
      });

      server.on("error", (error) => {
        console.log("服务器连接失败:" + error);
      });
    }
  }
);
