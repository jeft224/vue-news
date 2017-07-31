/**
 * Created by 罗志伟 on 2017/7/31.
 */
import * as types from '../mutation-type'
import api from '../../api/api'

const state ={
  url:['https://github.com/keephhh/news/blob/master/src/pic/like_1.png',
    'https://github.com/keephhh/news/blob/master/src/pic/like_2.png'],
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
  }
}

const mutations = {
  [types.COM_NEWS_HTML](state,data){
    state.html = data;
  }
}

export default {
  state,
  actions,
  mutations
}
