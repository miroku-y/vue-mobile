let router = require("koa-router")();
let axios = require("axios");
router.get("/api/pic", async (ctx, next) => {
  await axios({
    url: "https://api.data.caasdata.com/pic",
    method: "get",
    headers: {
      Origin: "https://www.caasdata.com"
    }
  })
    .then(res => {
      let { status, statuseText, data } = res;
      if (status == 200) {
        ctx.body = {
          code: 0,
          success: true,
          message: statuseText,
          data:[...data.data]
        };
      }
    })
    .catch(err => console.log(err, "???????"));
});
router.get("/api/channels/platform", async (ctx, next) => {
  await axios({
    url: `https://api.data.caasdata.com/channels/platform/${ctx.query.platform_id}/rank/home_page`,
    method: "get",
    headers: {
      Origin: "https://www.caasdata.com"
    }
  })
    .then(res => {
      let { status, statuseText, data } = res;
      if (status == 200) {
        ctx.body = {
          code: 0,
          success: true,
          message: statuseText,
          data:[...data.data]
        };
      }
    })
    .catch(err => console.log(err, "???????"));
  // console.log(ctx,'转发客户端的请求')
});
router.get("/api/platforms", async (ctx, next) => {
  await axios({
    url: "https://api.data.caasdata.com/platforms",
    method: "get",
    headers: {
      Origin: "https://www.caasdata.com"
    }
  })
    .then(res => {
      let { status, statuseText, data } = res;
      if (status == 200) {
        ctx.body = {
          code: 0,
          success: true,
          message: statuseText,
          ...data.data
        };
      }
    })
    .catch(err => console.log(err, "???????"));
  // console.log(ctx,'转发客户端的请求')
});
router.get("/api/index", async (ctx, next) => {
  await axios({
    url: "https://api.data.caasdata.com/index",
    method: "get",
    headers: {
      Origin: "https://www.caasdata.com"
    }
  })
    .then(res => {
      let { status, statuseText, data } = res;
      console.log(data,'2222222222')
      if (status == 200) {
        ctx.body = {
          code: 0,
          success: true,
          message: statuseText,
          data:{...data.data.articles}
        };
      }
    })
    .catch(err => console.log(err, "???????"));
  // console.log(ctx,'转发客户端的请求')
});
module.exports = router;
