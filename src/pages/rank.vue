<template>
  <div class="homePage">
    <!-- <v-link href='/'>首页</v-link>
            <v-link href='/login'>去登录页面！</v-link> -->
  
    <!-- <router-link to='/'>首页</router-link><br/>
    <router-link to='/login'>去登录页面！</router-link> -->
    <div class="search"><input placeholder="请输入红人名单..."/></div>
    <div class="platform">
      <ul>
        <li v-for="item in platforms" :key="item.id" @click="navChange(item)" :class="`${item.id==selected?'active':''}`">
          <p><img :src="`https://pic.caasdata.com/${item.icon_mobile}`" class="iconMobile" /></p><span class="title">{{item.title}}</span></li>
      </ul>
    </div>
    <div class="row">
      <div class="item" v-for="item in arr" :key="item.id">
        <p class="pic"> <img class="avtor" :src="item.pic_url" /></p>
        <p class="ranking">{{item.new_ranking}}</p>
        <p class="title">{{item.title}}</p>
        <p class="fanCount">{{item.fan_count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import VLink from '../components/VLink.vue'
import { mapGetters, mapState, mapActions } from "vuex";
import request from "../utils/request";
import axios from "axios";
import Vue from "vue";
import "babel-polyfill";
Vue.prototype.$axios = axios;

export default {
  data() {
    return {
      selected:'998'
    };
  },
  components: {
    // VLink
  },
  methods: {
    getList() {
      this.$store.dispatch("rankStatus/getArr",{platform_id:this.selected});
    },
    navChange(item) {
        this.selected = item.id;
        this.getList()
      }
    // async test() {
    //   let result = await request({
    //     url:
    //       "/rank/lists?time=1553139666000&dataType=kol&tag=0&timer=0&page=1&timeType=week&platform=998&count=50&data_counter=3",
    //     method: "get",
    //   });
    //   console.log(result,'??????????')
    // }
  },
  created: function() {
    this.getList();
    // this.$axios.get('/api/rank/lists')
    //   .then(res => {
    //     console.log(res, "*******");
    //   })
    //   .catch(err => console.log(err, "???????"));

    //测试request封装的请求效果
    // this.test();
    // console.log(this.$store, "--------");
  },
  computed: {
    ...mapGetters("rankStatus", {
      arr: "renderArr"
    }),
    ...mapGetters("homeStatus", {
     platforms: 'renderPlatforms',
    })
  }
};
</script>

<style>
.homePage .avtor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
}

.homePage .row .item {
  display: flex;
  justify-content: space-around;
  align-items: cneter;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}

.row .item p {
  margin: 0;
  font-size: 0.7rem;
}

.item .pic {
  display: flex;
  align-items: center;
}

.item .ranking {
  width: 5%;
}

.item .title {
  width: 35%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item .fanCount {
  width: 20%;
}
.search{
      line-height: 2.5rem;
    background-color: #2fa9f7;
    text-align: left;
    padding-left: 0.7rem;

}
.search input{
  line-height: 1.5rem;
    border-radius: 14px;
    border: none;
    width:75%;
    padding-left: 0.3rem;
}
</style>
