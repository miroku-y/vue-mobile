<template>
  <div class="homePage">
    <div class="swiper">
      <img v-bind:style="{backgroundImage:'url('+pics[0].pic_url+')'}" v-if="pics.length" />
    </div>
    <div class="platform">
      <ul>
        <li v-for="item in platforms" :key="item.id" @click="navChange(item)" :class="`${item.id==selected?'active':''}`">
          <p><img :src="`https://pic.caasdata.com/${item.icon_mobile}`" class="iconMobile" /></p><span class="title">{{item.title}}</span></li>
      </ul>
    </div>
    <div class="channels">
      <div class="channelsItem" v-for="item in channels" :key="item.id">
        <div class="channelsInfo">
          <p class="avtor"><img :src="`${item.pic_url}`" /></p>
          <div>
            <p class="title">{{item.title}}</p>
            <p class="title">指数：{{item.huox_index}}</p>
            <p class="title">NO.{{item.total_ranking}}</p>
          </div>
        </div>
      </div>
    </div>
    <v-title p-title='PAG热文' />
    <div class="articles">
      <p><img :src="articles[1][0].bannel_url" v-if="articles[1]" /></p>
      <ul class="week">
        <li v-for="item in articles[1]" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <v-title p-title='TEST热文' />
    <div class="articles">
      <ul class="week">
        <li v-for="item in articles[2]" :key="item.id">{{item.title}}</li>
      </ul>
      <p><img :src="articles[2][0].bannel_url" v-if="articles[2]" /></p>
    </div>
    <v-title p-title='PAG热文2' />
    <div class="articles">
      <p><img :src="articles[3][0].bannel_url" v-if="articles[3]" /></p>
      <ul class="week">
        <li v-for="item in articles[3]" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <v-title p-title='PAG热文3' />
    <div class="articles">
      <p><img :src="articles[4][0].bannel_url" v-if="articles[4]" /></p>
      <ul class="week">
        <li v-for="item in articles[4]" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <v-title p-title='PAG热文4' />
    <div class="articles">
      <p><img :src="articles[5][0].bannel_url" v-if="articles[5]" /></p>
      <ul class="week">
        <li v-for="item in articles[5]" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapState,
    mapActions
  } from "vuex";
  import {
    constants
  } from 'fs';
  import VTitle from '../components/VTitle.vue'
  export default {
    data: function() {
      return {
        title: '首页',
        selected: '998',
      };
    },
    components: {
      VTitle,
    },
    methods: {
      getPics() {
        this.$store.dispatch('homeStatus/getPics')
      },
      getChannels() {
        this.$store.dispatch('homeStatus/getChannels', {
          platform_id: this.selected
        })
      },
      getPlatforms() {
        this.$store.dispatch('homeStatus/getPlatforms')
      },
      getArticles() {
        this.$store.dispatch('homeStatus/getArticles')
      },
      navChange(item) {
        this.selected = item.id;
        this.getChannels()
      }
    },
    created: function() {
      this.getPics();
      this.getChannels();
      this.getPlatforms();
      this.getArticles();
    },
    computed: {
      ...mapGetters('homeStatus', {
        pics: 'renderPics',
        channels: 'renderChannels',
        platforms: 'renderPlatforms',
        articles: 'renderArticles'
      })
    }
  }
</script>

<style lang="less">
  .homePage ul li {
    list-style: none;
  }
  
  .platform {
    width: 100%;
  }
  
  .platform ul {
    width: 100%;
    overflow-x: scroll;
    display: flex;
    padding: 0.5rem 0;
  }
  
  .platform ul li {
    padding: 0 0.8rem;
    white-space: nowrap;
    /* line-height: 2rem; */
    /* background: #2fa9f7; */
    color: #111;
  }
  
  .platform ul li span.title {
    padding: 0rem 0.5rem;
    /* background: #eee; */
    border-radius: 5px;
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }
  
  .iconMobile {
    width: 1.3rem;
    height: 1.3rem;
  }
  
  .swiper {
    width: 100%;
    height: 11rem;
  }
  
  .swiper img {
    width: 100%;
    height: 11rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  
  .channelsItem {
    width: 50%;
    display: inline-block;
    border: 1px solid #bbb;
    box-sizing: border-box;
    text-align: left;
    padding: 0.5rem;
  }
  
  .channelsItem:nth-child(1),
  .channelsItem:nth-child(2),
  .channelsItem:nth-child(3),
  .channelsItem:nth-child(4) {
    border-bottom: none;
  }
  
  .channelsItem:nth-child(odd) {
    border-right: none;
  }
  
  .channelsInfo .avtor {
    height: 3rem;
    width: 3rem;
  }
  
  .channelsInfo .avtor img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  
  .channelsInfo {
    display: flex;
  }
  
  .channelsInfo .title {
    font-size: 0.7rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.1rem;
  }
  
  .channelsInfo div {
    width: 70%;
  }
  
  .active span.title {
    background-color: #2fa9f7!important;
    color: #fff;
  }
  
  .articles {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    align-items: center;
    ul li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }
    ul.week {
      width: 60%;
    }
    ul.week li {
      font-size: 0.7rem;
    }
    p {
      img {
        width: 100%;
      }
    }
  }
</style>
