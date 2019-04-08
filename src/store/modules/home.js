import request from '../../utils/request';
const state={
  pics:[],
  channels:[],
  platforms:[],
  articles:[]
}

const getters={
  renderPics(state){
    return state.pics
  },
  renderChannels(state){
    return state.channels
  },
  renderPlatforms(state){
    return state.platforms
  },
  renderArticles(state){
    return state.articles
  }
}
const mutations={
  setPics(state,data){
    return state.pics = data
  },
  setChannels(state,channels){
    return state.channels = channels
  },
  setPlatforms(state,data){
    return state.platforms = data
  },
  setArticles(state,data){
    return state.articles = data
  } 
}

const actions = {
  async getPics(context){
    let result = await request({
      url:'/api/pic',
      method:'get'
    })
    console.log(result,'>>>>>')
    context.commit('setPics',result.data)
  },
  async getChannels(context,params){
    let result = await request({
      url:'/api/channels/platform?platform_id='+params.platform_id,
      method:'get',
    })
    context.commit('setChannels',result.data)
  },
  async getPlatforms(context,params){
    let result = await request({
      url:'/api/platforms',
      method:'get',
    })
    context.commit('setPlatforms',result.data.slice(0,7))
  },
  async getArticles(context){
    let result = await request({
      url:'/api/index',
      mentod:'get'
    });
    context.commit('setArticles',result.data)
  }
}

export default{
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}