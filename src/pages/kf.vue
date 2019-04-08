<template>
  <div>
    <div>客服聊天页面</div>
    <h4>{{message}}</h4>
    <button id='send' @click="sendClick()">发送消息到服务器</button>
    <span>消息内容为：{{sendMsg}}</span>
    <div>
      <h3>服务器响应的消息：</h3>
      <i id='msg'>{{resultMsg}}</i>
    </div>
    <hr/>
    <h4>测试自动触发，多个手机同时收到消息</h4>
    <span>消息内容为：{{sendMsgAuto}}</span>
    <div>
      <h4>服务器响应的消息：</h4>
      <i id='msg'>{{resultMsgAuto}}</i>
    </div>
  </div>
</template>

<script>
var socket = io.connect("http://192.168.1.110:4040");
export default {
  data: function() {
    return {
      message: "",
      sendMsg: "",
      resultMsg:'',
      sendMsgAuto: "",
      resultMsgAuto:'',
    };
  },
  methods: {
    sendClick: function() {
      console.log("123", this);
      let msg = "我要发送123到服务器";
      this.sendMsg = msg;
      socket.emit("send", msg);
    }
  },
  created: function() {
    /**测试自动触发 */
    setTimeout(() => {
       let msg = "测试自动发送：发送123到服务器";
      this.sendMsgAuto = msg;
      socket.emit("sendAuto", msg);
    }, 5000);
    let me = this;
    socket.on("news", function(data) {
      console.log(data, "99999");
      me.message = data.hello;
      socket.emit("my other event", {
        my: "data"
      });
    });
    socket.on("getMsg", data => {
      console.log("服务端消息：", data);
      me.resultMsg = data
    });
    socket.on("getMsgAuto", data => {
      console.log("服务端消息：", data);
      me.resultMsgAuto = data
    });
  }
};
</script>

