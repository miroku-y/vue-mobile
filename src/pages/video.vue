<template>
  <div class="videoPage">
    <div class="leftBox">
      <div class="row" v-for="(item,index) in leftBox" :key="item.id" >
        <p class="pic">
          <a :href="item.url"><img :src="item.pic_url" :class="`${index==0?'img small':'img'}`"/></a>
        </p>
        <p class="ellipsis">{{item.title}}</p>
        <p class="info"><img :src="item.pic_url"/><span>{{item.play_count}}</span></p>
      </div>
    </div>
    <div class="rightBox">
      <div class="row" v-for="item in rightBox" :key="item.id">
        <p class="pic"><a :href="item.url"><img :src="item.pic_url" class="img"/></a></p>
        <p class="ellipsis">{{item.title}}</p>
        <p class="info"><img :src="item.pic_url"/><span>{{item.play_count}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapState,
    mapActions
  } from "vuex";
import { constants } from 'fs';
  export default {
    data: function() {
      return {
        // leftBox:[],
        // rightBox:[]
      };
    },
    methods: {
      getVideos() {
        this.$store.dispatch('videoStatus/getVideos')
      }
    },
    created: function() {
      this.getVideos()
    },
    computed: {
      ...mapGetters('videoStatus', {
        leftBox: 'renderLeftBox',
        rightBox:'renderRightBox'
      })
    },
    updated:function(){
    }
  }
</script>

<style>
  .videoPage {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  .videoPage .leftBox,
  .videoPage .rightBox {
    width: 49%;
  }
  
  .pic a,
  .pic a {
    display: inline-block;
  }
  
  .img{
    width: 100%;
  }
  .pic {
    border-radius: 7px;
    background:#fff;
    font-size: 0
  }
  .row{
    background-color:white;
    box-shadow:0px 1px 2px rgba(0,0,0,0.2);
    border-radius:7px;
    margin-bottom:.5rem;
  }
  p{
    margin:0;
    padding: 0;   
  }
  .ellipsis{
     overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
        padding: 0 0.5rem;
    font-size: 0.7rem;
  }
  .info img{
    width:1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  .info{
        display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem;
    font-size: 0.7rem;
  }
  .small{
    height:18rem;
  }
</style>
