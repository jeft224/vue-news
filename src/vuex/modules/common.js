/**
 * Created by 罗志伟 on 2017/6/18.
 */
import * as types from '../mutation-type'


const state = {
  headerShow:true,
  isGoTop:true,
  isLoading:true,
  leftNavStatus:false
}


const actions = {
  setHeaderShow({commit},status){
    commit(types.COM_HEADER_SHOW,status)
  },
  setLoadingStatus({commit},status){
    commit(types.COM_LOADING_STATUS,status)
  },
  setGoTopStatus({commit},status){
    commit(types.COM_GOTOP_STATUS,status)
  },
  setMenuSlide({commit},status){
    commit(types.COM_NAV_STATUS,status)
  }
}
const getters = {
  getHeaderShow: state => state.headerShow,
  getMenuSlideStatus:state => state.leftNavStatus
}

const mutations = {
  [types.COM_HEADER_SHOW](state,status){
    state.headerShow = status;
  },
  [types.COM_LOADING_STATUS](state,status){
    state.isloading = status;
  },
  [types.COM_GOTOP_STATUS](state,status){
    state.isGoTop = status;
  },
  [types.COM_NAV_STATUS](state,status){
    state.leftNavStatus =status;
  }
}






export default {
  state,
  actions,
  getters,
  mutations
}
