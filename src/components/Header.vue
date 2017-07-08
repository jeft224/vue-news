<template>
  <div class="header" >
    <div class="icon-menu">
      <i class="icon iconfont icon-caidan" @click="ShowMenu()"></i>
      <i class="icon iconfont icon-fanhuijiantouxiangqingye" v-if="false"></i>
    </div>
    <router-link to="\hello" class="home-img">
      <img src="../assets/logo.d413616.png" alt="">
    </router-link>
    <div class="icon-search">
      <i class="icon iconfont icon-sousuo1" @click="ShowSearch()"></i>
    </div>
    <menu-slide :show="leftNavStatus" @hideMenuSlide="hideMenuSlide"></menu-slide>
  </div>
</template>

<script>
  import MenuSlide from './MenuSlide'
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name:'header',
    data(){
      return {

      }
    },
    computed:{
      ...mapGetters({
        leftNavStatus:'getMenuSlideStatus'
      })
    },
    components:{
      MenuSlide
    },
    methods:{
//      ...mapActions({setHeaderShow:'setHeaderShow'},{setMenuSlide:'setMenuSlide'}),
      ...mapActions(['setHeaderShow','setMenuSlide']),
      /*显示搜索页面*/
      ShowSearch(){
        this.setHeaderShow(false);
      },
      /*显示左侧菜单*/
      ShowMenu(){
        this.setMenuSlide(true);
      },
      /*隐藏左侧菜单*/
      hideMenuSlide(){
        this.setMenuSlide(false);
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
