const koa = require("koa");
const app = new koa();
const http = require("http");
// const io = require('socket.io');

var server = http.Server(app.callback());
var io = require("socket.io")(server);

app.use(require("./controns/rank.js").routes());
app.use(require("./controns/home.js").routes());
app.use(require("./controns/video.js").routes());

// app.listen("4040", () => {
//   console.log("监听成功，打印端口号");
// });

// let server = http.createServer(function (req, res) {

//   var headers = {};
//   headers["Access-Control-Allow-Origin"] = "*";
//   headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
//   headers["Access-Control-Allow-Credentials"] = true;
//   headers["Access-Control-Max-Age"] = '86400'; // 24 hours
//   headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
//   res.writeHead(200, headers);
//   res.end();
// });
server.listen("4040", () => {
  console.log("监听成功，打印端口号");
});
// const socket = io.listen(server);
io.on("connection", socket => {
  console.log("连接成功");
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
  socket.on("send", data => {
    console.log("客户端发送的内容：", data);
    socket.emit("getMsg", "已接受，现将信息返回给你【" + data + "】");
  });
  socket.on("sendAuto", data => {
    socket.emit("getMsgAuto", "已接受自动发送信息，现将信息返回给你【" + data + "】");
  });
});

module.exports = app;
