<template>
  <div class="header" >
    <div class="icon-menu">
      <i class="icon iconfont icon-caidan" @click="ShowMenu()"></i>
      <i class="icon iconfont icon-fanhuijiantouxiangqingye" v-if="false"></i>
    </div>
    <router-link :to="{name:'Hello'}" class="home-img">
      <img src="../assets/logo.d413616.png" alt="">
    </router-link>
    <div class="icon-search">
      <i class="icon iconfont icon-sousuo1" @click="ShowSearch()"></i>
    </div>

  <!--  <div class="search">

    </div>
    <div class="menuAside">

    </div>-->
    <!--<menu-slide :show="leftNavStatus" @hideMenuSlide="hideMenuSlide"></menu-slide>-->
  </div>
</template>

<script>
  import MenuSlide from './MenuSlide'
  import {mapActions} from 'vuex'
  export default {
    name:'header',
    data(){
      return {
        MenuSlide
      }
    },

    components:{

    },
    methods:{
      ...mapActions({setHeaderShow:'setHeaderShow'}),
      ShowSearch(){
        this.setHeaderShow(false);
      },
      ShowMenu(){

      }
    }
  }
</script>

<style scoped>
  .header{
    height: 1.599147rem;
    background: #262627;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left:0.266525rem;
  }
  .header img{
    height: 0.533049rem;
    cursor: pointer;
  }
  .header .icon-search,.icon-menu{
    margin-right:0.266525rem;
    position: relative;
  }
  .header .icon{
    color: #fff;
    cursor: pointer;
  }
</style>
