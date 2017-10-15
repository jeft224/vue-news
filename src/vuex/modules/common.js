/**
 * Created by 罗志伟 on 2017/6/18.
 */
import * as types from '../mutation-type'


const state = {
  headerShow:true,
  isGoTop:true,
  isLoading:false,
  leftNavStatus:false,
  showHome:true,
  menuShowStatus:true,
  isShowAbout:false
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
  setShowStatus({commit},status){
    commit(types.COM_SHOW_NEWS,status)
  },
  setMenuSlide({commit},status){
    commit(types.COM_NAV_STATUS,status)
  },
  setMenuShowStatus({commit},status){
    commit(types.COM_MENUSHOW_STATUS,status)
  }
}
const getters = {
  getHeaderShow: state => state.headerShow,
  getMenuSlideStatus:state => state.leftNavStatus,
  loading: state => state.isLoading,
  getMenuShowStatus:state => state.menuShowStatus
}

const mutations = {
  [types.COM_HEADER_SHOW](state,status){
    state.headerShow = status;
  },
  [types.COM_LOADING_STATUS](state,status){
    console.log(status);
    state.isloading = status;
  },
  [types.COM_GOTOP_STATUS](state,status){
    state.isGoTop = status;
  },
  [types.COM_NAV_STATUS](state,status){
    state.leftNavStatus =status;
  },
  [types.COM_SHOW_NEWS](state,status){
    state.showHome = status
  },
  [types.COM_MENUSHOW_STATUS](state,status){
    state.menuShowStatus = status
  },
  showAbout(state, flag) {
    state.isShowAbout = flag;
  }
}






export default {
  state,
  actions,
  getters,
  mutations
}
