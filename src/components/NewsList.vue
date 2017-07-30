<template>
  <div class="newslist">
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="img in items" >
            <img :src="img" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
          <!--<div class="swiper-button-next" slot="button-next"></div>-->
          <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
    <div class="loading-box" v-show="loading">
      <loading></loading>
    </div>
    <section class="news" v-show="!loading">
      <div v-for="(item, index) of newslist" :key="index" class="item">
        <router-link :to="{name: 'News'}">
          <div class="new" @click="details(item.url, item.author_name)">
            <h2 class="title">{{item.title}}</h2>
            <div class="pic">
              <img v-lazy="item.thumbnail_pic_s" v-if="item.thumbnail_pic_s" class="photo" :src="item.thumbnail_pic_s" alt="">
              <img v-lazy="item.thumbnail_pic_s02" v-if="item.thumbnail_pic_s02" class="photo" :src="item.thumbnail_pic_s02" alt="">
              <img v-lazy="item.thumbnail_pic_s03" v-if="item.thumbnail_pic_s03" class="photo" :src="item.thumbnail_pic_s03" alt="">
            </div>
            <div class="more">
               <div class="user">
                 <img v-lazy="item.thumbnail_pic_s" class="avatar" :src="item.thumbnail_pic_s" alt="">
                 <span class="autor">
                  {{item.author_name}}
                </span>
               </div>

              <span class="date">
                  {{Math.ceil(500 * Math.random())}}跟贴
                </span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  import {swiper,swiperSlide } from 'vue-awesome-swiper'
  import {mapState,mapActions} from 'vuex'
  import loading from './Loading.vue'
  export default {
    name:'newslist',
    data(){
        return {
          items:['http://n.sinaimg.cn/news/1_img/upload/c4b46437/20170708/CIZz-fyhwres8764900.jpg',
              'http://n.sinaimg.cn/photo/20170708/Zj1Y-fyhwres9174784.jpg','http://n.sinaimg.cn/news/20170708/8z25-fyhwres8688399.jpg'],
          swiperOption: {
            autoplay: 3000,
            initialSlide: 1,
            loop: true,
            pagination: '.swiper-pagination',
//            prevButton:'.swiper-button-prev',
//            nextButton:'.swiper-button-next',
//            scrollbar:'.swiper-scrollbar',
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
            onSlideChangeEnd: swiper => {
              // 这个位置放swiper的回调方法
              this.page = swiper.realIndex + 1
              this.index = swiper.realIndex
            }
          }
        }
    },
    computed:{
      ...mapState({
        newslist:state =>state.newlist.newslist,
        loading:state => state.common.isLoading
      })


    },
    created(){
      this.$store.dispatch('getNewsList');
    },
    components:{
      swiper,
      swiperSlide,
      loading
    },
    methods:{

      details(url,author){

      }
    }
  }
</script>

<style scoped>
  .newslist img{
    width: 100%;
    height: 150px;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .newslist .news{
    padding: 0 5px;
    display: flex;
    flex-direction:column;
    justify-content: center;
  }
  .newslist .loading-box{
    margin:0.266525rem auto;
    text-align:center;
  }
  .newslist .loading-box div{
    margin: auto;
  }
  .newslist .news .new{
    width: 100%;
    display: flex;
    flex-direction:column;
    border-bottom: 1px solid #BEBEBE;
    color: #262627;
    margin-top:10px;
  }
  .newslist .news .new .title{
    flex: 2;
    font-weight: bold;
    font-size:14px;
    padding-bottom:10px;
    padding-left: 5px;
  }
  .newslist .news .new .pic{
    flex: 3;
    display: flex;
    flex-direction:row;
  }
  .newslist .news .new .pic img{
    flex: 1;
    width: 32.5%;
    height: 80px;
    padding-left:1px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .newslist .news .new .pic img:last-child{
    padding-left:0px;
  }
  .newslist .news .new .more{
    flex: 1;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding:10px 4px;
  }
  .newslist .news .new .more .user{
    display: flex;
  }
  .newslist .news .new .more .user .avatar{
    width: 30px;
    height: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .newslist .news .new .more .user span{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-left: 5px;
    font-size:13px;
    color: grey;
  }
  .newslist .news .new .more span{
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-left: 5px;
    font-size:13px;
    color: grey;
  }










  a {
    text-decoration: none;
    color: black;
  }
</style>
