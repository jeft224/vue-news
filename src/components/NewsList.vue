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
    <section class="news">
      <div v-if='requestStatus'>
        <div v-for='news in newsDate' :id="news.id">
          <a href="javascript: void(0)" class="new" :key='news.channelId'>
            <img v-lazy='news.imageurls[0].url' :src="setNewSrc(news.imageurls[0].url)"/>
            <div class="intro">
              <h4>{{news.title}}</h4>
              <p><span>{{news.source}}</span> | <span>{{news.pubDate}}</span></p>
            </div>
          </a>
        </div>
        <button class="loadMore" @click='loadMoreBtn' v-show='loadBtn'>点击加载更多</button>
      </div>
      <div class="fail" v-else>~~~~(>_<)~~~~， 请求到数据失败!</div>
    </section>
  </div>
</template>

<script>
  import {swiper,swiperSlide } from 'vue-awesome-swiper'
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
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    components:{
      swiper,
      swiperSlide
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
</style>
