let router = require("koa-router")();
let axios = require("axios");

router.get("/api/videos/platforms", async (ctx, next) => {
  await axios({
    url: "https://api.data.caasdata.com/videos/platforms/993/home_page",
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


module.exports = router;
