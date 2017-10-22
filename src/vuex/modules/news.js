/**
 * Created by 罗志伟 on 2017/7/31.
 */
import * as types from '../mutation-type'
import api from '../../api/api'

const state ={
  imgsUrl:[require('../../assets/like_1.png'),
    require('../../assets/like_2.png')],
  like:0,
  status:'收藏',
  html:''
}
const actions = {
  getNewsDetail:({commit},obj)=>{
    console.log(obj.url);
    api.getNewsDetail(obj.url).then((data) =>{
      console.log(data.data)
      commit(types.COM_NEWS_HTML,data.data)
    })
  },

}

const mutations = {
  [types.COM_NEWS_HTML](state,data){
    state.html = data;
  },
  LikedNews(state,data){
    state.like++;
    state.status = data.collected;
    if(state.like > 1){
      state.like = 0;
      state.status = data.collect;
    }
  },
  CollectNews(state,obj){
    let collectionData ={
      'collection':state.html
    }
    localStorage.setItem('collectionData',JSON.stringify(collectionData));
  }
}

export default {
  state,
  actions,
  mutations
}
