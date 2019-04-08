let router = require("koa-router")();
let axios = require('axios')
router.get('/api/rank/lists',async (ctx,next)=>{
  await axios({
      url:`https://api.data.caasdata.com/rank/lists?time=1553158732000&dataType=kol&tag=0&timer=0&timeType=week&platform=${ctx.query.platform_id}&count=50&page=1`,
      method:'get',
      headers: {
        "Origin": "https://www.caasdata.com"
      }
    }).then((res) => {
      let {status,statuseText,data} = res
     if(status==200){
      ctx.body = {
        code:0,
        success:true,
        message:statuseText,
        ...data.data
      }
     }
    }).catch(err => console.log(err, '???????'))
  // console.log(ctx,'转发客户端的请求')
})
module.exports = router