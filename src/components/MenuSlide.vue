<template>
  <transition name="slide-left">
    <div class="menuSlide">
      <div class="header">
        <div class="user-avatar">
          <img src="/" alt="">
        </div>
        <div class="username">
          雨沫之风
        </div>
      </div>
      <div class="navList">
        <ul>
          <li>
            <router-link>
              <i class="iconfont "></i>
              <span>个人主页</span>
            </router-link>
          </li>
          <li>
            <router-link>
              <i class="iconfont "></i>
              <span>我的收藏</span>
            </router-link>
          </li>
          <li>
            <router-link>
              <i class="iconfont "></i>
              <span>作品推荐</span>
            </router-link>
          </li>
          <li>
            <router-link>
              <i class="iconfont "></i>
              <span>关于</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div @click.stop.prevent="hideMenuSlide" class="mask"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name:'menuslide',
    data(){
        return{

        }
    },
    methods:{
      hideMenuSlide(){

      }
    }
  }
</script>

<style>
  .mask{

  }
  a {
    text-decoration: none;
    color: #000;
  }

  .slide-left-enter-active {
    transition: all .3s ease;
  }
  .slide-left-leave-active {
    transition: all .2s ease-out;
  }
  .slide-left-enter, .slide-left-leave-active {
    transform: translateX(-150px);
    opacity: 0;
  }
</style>
