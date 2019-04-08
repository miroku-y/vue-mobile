<template>
  <div>
    <!-- <v-link href="/register">注册页面</v-link>
      <v-link href="/home">返回首页-</v-link> -->
  
    <router-link to="/register">注册页面</router-link><br/>
    <router-link to="/rank">返回首页-=</router-link>
  </div>
</template>

<script>
  // import VLink from '../components/VLink.vue'
  
  export default {
    components: {
      // VLink
    }
  }
</script>