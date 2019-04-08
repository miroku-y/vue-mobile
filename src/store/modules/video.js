import request from '../../utils/request';
const state={
  videos:[],
  leftBox:[],
  rightBox:[]
}

const getters={
  renderLeftBox(state){
    return state.leftBox
  },
  renderRightBox(state){
    return state.rightBox
  },
}
const mutations={
  setVideos(state,data){
    /**还没有想到在组件中进行修改数据，所有在这先拆分这个出来 */
    let leftBox=[];
    let rightBox=[];
    for(let i in data){
      if(i%2==0){
        leftBox.push(data[i])
      }else{
        rightBox.push(data[i])
      }
    }
    console.log(leftBox,rightBox,'///////')
    state.leftBox = leftBox;
    state.rightBox = rightBox;
    return state;
  },
}

const actions = {
  async getVideos(context){
    let result = await request({
      url:'/api/videos/platforms',
      method:'get'
    })
    context.commit('setVideos',result.data)
  },
}

export default{
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}