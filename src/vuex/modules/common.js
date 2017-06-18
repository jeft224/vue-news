/**
 * Created by 罗志伟 on 2017/6/18.
 */
import * as types from '../mutation-type'


const state = {
  headerShow:true,

}


const actions = {
  setHeaderShow({commit},status){
    commit(types.COM_HEADER_SHOW,status)
  }
}
const getters = {
  getHeaderShow: state => state.headerShow
}

const mutations = {
  [types.COM_HEADER_SHOW](state,status){
    state.headerShow = status;
  }
}






export default {
  state,
  actions,
  getters,
  mutations
}
