/**
 * Created by 罗志伟 on 2017/6/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import newlist from './modules/newlist'

Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
      common,
      newlist
    }
})

export default store;
