import request from '../../utils/request'
const state={
  arr:[]
}
const getters={
  renderArr(state){
    return state.arr
  }
}
const mutations ={
  setArr(state,list){
    return state.arr = list
  }
}
const actions ={
  async getArr(context,params){
    let result = await request({
      url:'/api/rank/lists?platform_id='+params.platform_id,
      method:'get',
    })
    console.log(result,'打印结果集');
    context.commit('setArr',result.data)
  },
  invokenSetArr(context,list){
    context.commit('setArr',list)
  }
}

export default{
  namespaced:true,//表示你在其他的文件中使用（mapGetters,mapActions)时，
  state,
  getters,
  mutations,
  actions
}