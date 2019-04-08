import Vue from 'vue'
import Vconsole from 'vconsole'
import App from './App.vue'
import router from './router'
import store from '../src/store';
import 'babel-polyfill'

Vue.config.productionTip = false
let vConsole = new Vconsole();
export default vConsole
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
