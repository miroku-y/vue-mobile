<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TabBar/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TabBar from './components/TabBar.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 41px;
}
ul,li,div,body,html{
  margin:0;
  padding:0;
}
</style>
