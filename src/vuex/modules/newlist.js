/**
 * Created by 罗志伟 on 2017/7/30.
 */

import * as types from '../mutation-type'
import api from '../../api/api'

const state ={
  newslist:[],
  type:'top',
}
const actions ={
  getNewsList:({commit},id)=>{

    if(id){
      console.log(id)
      commit(types.COM_TAB_STATUS,id);
    }
    console.log(state.type);
    commit(types.COM_LOADING_STATUS,true);
    api.getNewList(`${state.type}`).then((res) => {
      console.log(res.data.result.data);
      commit(types.COM_LOADING_STATUS,false);

      commit(types.COM_NEWLIST,res.data.result.data)
    })
  },
  setNewsList({commit},status){
    commit(types.COM_NEWLIST,status)
  },
  setTabStatus({commit},status){
    commit(types.COM_TAB_STATUS,status)
  }
}
const mutations = {
  [types.COM_NEWLIST](state,data){
    state.newslist = data;
  },
  [types.COM_TAB_STATUS](state,status){
    state.type = status;
  }
}
export default {
  state,
  actions,
  mutations,
}
