<template>
  <transition name="slide-left">
    <div class="menuSlide" v-show="show">
      <div class="menu">
        <div class="header">
          <div class="user">
            <img class="user-avatar" src="https://avatars0.githubusercontent.com/u/18079246?v=3&u=2ac0ea60f17e97c64f205d6a1f6aea196a1030f9&s=400" alt="">
            <h2 class="username">雨沫之风</h2>
          </div>
        </div>
        <div class="navList">
          <ul>
            <li>
              <router-link to="/">
                <span> <i class=" iconfont icon-gerenzhuye"></i>个人主页</span>
                <i class="iconfont icon-xiangyoujiantou"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span> <i class=" iconfont icon-shoucang"></i>我的收藏</span>
                <i class="iconfont icon-xiangyoujiantou"></i>
              </router-link >
            </li>
            <li>
              <router-link to="/">
                <span> <i class=" iconfont icon-zuopintuijian"></i>作品推荐</span>
                <i class="iconfont icon-xiangyoujiantou"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span> <i class=" iconfont icon-guanyu"></i>关于</span>
                <i class="iconfont icon-xiangyoujiantou"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--<div @click.stop.prevent="hideMenuSlide" class="mask"></div>-->
      <div v-show="show"  @click="hideMenuSlide" class="mask"></div>
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
    props:['show'],
    methods:{
      hideMenuSlide(){
        this.$emit('hideMenuSlide');
      }
    }
  }
</script>

<style >
  .menuSlide{
    width:70% ;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    /*background: #262627;*/
    background: #fff;
    position: fixed;
    top:0rem;
    left:-0.001rem;
    color: #fff;
    z-index: 999;
    box-shadow: 0.053333rem 0px 0.053333rem 0.026667rem rgba(0, 0, 0, 0.05);
  }
  .menuSlide .menu{
    height: 100%;
    width: 100%;
    z-index: 999;
  }
  .menuSlide .header{
    /*background: #000000;*/
    background: #120584;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .menuSlide .header .user{
    padding: 0.533333rem 0;
  }
  .menuSlide .header .user img{
    width: 1.6rem;
    height: 1.6rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
  }
  .menuSlide .header .user h2{
    margin-top: 0.133333rem;
    font-size: 16px;
  }
  .menuSlide .navList{
    width: 100%;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .menuSlide .navList ul{
    width: 100%;
  }
  .menuSlide .navList li{
    /*width: 100%;*/
    padding: 0.533333rem 0.053333rem;
    border-bottom:1px solid #0a8ddf;
    margin: 0rem 0.266667rem;
  }
  .menuSlide .navList li a{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .menuSlide .navList li a>span{
    padding-left: 0.213333rem;
    font-size: 16px;
    color: #000;
  }
  .menuSlide .navList>ul>li>a{
    text-decoration: none;
    /*color: #09c4e2;*/
  }
  .menuSlide .navList>ul>li:nth-child(Odd)>a:hover>span{
    color: #09c4e2;
  }
  .menuSlide .navList>ul>li:nth-child(even )>a:hover>span{
    color: red;
  }
  .menuSlide .navList>ul>li>a>span>i{
    margin-right: 0.213333rem;
    color: skyblue;
  }
  .menuSlide .navList>ul>li>a>i{
    color: skyblue;
  }
  .menuSlide .navList>ul>li:nth-child(2)>a>span>i,.menuSlide .navList>ul>li:nth-child(4)>a>span>i,.menuSlide .navList>ul>li:nth-child(2)>a>i,.menuSlide .navList>ul>li:nth-child(4)>a>i{
    color: red;
  }
  .mask{
    position: fixed;
    top: 0;
    left:0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
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
    transform: translateX(-4rem);
    opacity: 0;
  }
</style>
