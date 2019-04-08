import Vue from 'vue';
import Vuex from 'vuex';
import rankStatus from './modules/rank';
import homeStatus from './modules/home';
import videoStatus from './modules/video'
Vue.use(Vuex);

/**
 * 1.设置全局访问的state对象
 */
const state = {
    default:'hello vue'
}
/**
 * 2.添加getters 来实时监听state值的状态
 */
const getters = {
  //此处方法名可以随便起，主要作用是承载变化的default值
  isDefault(state){
    return state.default
  }
}
/**
 * 3.通过添加mutations对象，定义修改state初始值的方法，这里除了state参数外，开可以传递额外的参数（变量或对象）
 */
const mutations = {
  infoDefault(state){
    return state.default = 'hello vue'
  },
  setDefault(state){
    return state.default = 'hello vue 设置后的'
  }
}
/**
 * 4.官方api提供了一个actions对象变量，通过这个里面自定义的函数来异步的触发mutations中的函数来修改state,自定义的函数接受一个context和要变化的形参
 */
const actions = {
  infoDefault(context){
    context.commit('infoDefault')
  },
  setDefault(context){
    context.commit('setDefault')
  }
}
/**未进行模块化区分时的使用 */
// const store = new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// });
/**进行模块化的使用 */
const store = new Vuex.Store({
  modules:{
    rankStatus,
    homeStatus,
    videoStatus
  }
})
export default store