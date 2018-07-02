// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazy from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'  
// import axios from 'axios'


Vue.use(VueAwesomeSwiper);
Vue.use(VueLazy);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
