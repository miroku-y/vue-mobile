<template>
  <div class="wrap">
    <div class="tabBar">
      <div v-for="item in tabBar" :key="item.id">
      <router-link :to="`${item.link}`" @click.native="navChange" :id="item.id" :class="`${item.id==id?'active':''}`">
        {{item.title}}
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { tabBar } from "../utils/emun";
import { constants } from 'fs';
export default {
  data() {
    return {
      tabBar: tabBar,
      routes:{
        '/':5,
        '/home':1,
        '/rank':2,
        '/video':3,
        '/report':4,
        '/kf':5
      },
      id:1
    };
  },
  methods:{
    navChange(e){
      this.id = e.target.id
    }
  },
  created:function(){
    this.id = this.routes[this.$route.path]
  }
};
</script>

<style>
.wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  width: 100%;
  background: #eee;
  height: 50px;
  line-height: 50px;
  left: 0;
}

.wrap .tabBar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tabBar a{
      color: #111;
    text-decoration: none;
}
.active{
  color:#2fa9f7!important;
}
</style>


