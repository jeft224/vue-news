<template>
  <div class="newsdetail">
    <div v-html="html"></div>
    <div class="like">
      <div @click="Switch()" class='img-wrap'>
        <img :src="imgsUrl[like]" alt="">
      </div>
      <span>{{status}}</span>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name:'newsdetail',
    data(){
      return{
//            html:''
      }
    },
    computed:{
      ...mapState({
        imgsUrl:state => state.news.imgsUrl,
        like:state => state.news.like,
        status:state => state.news.status,
        html:state => state.news.html
      })
    },
    components:{

    },
    methods:{
      Switch(){
        this.$store.commit('LikedNews',{collect:'收藏',collected:'已收藏'});
        this.$store.commit('CollectNews');
      }
    },
    mounted() {
      console.log(this.$route.params.url);
      this.$store.dispatch('getNewsDetail',{url:this.$route.params.url});
    }
  }
</script>

<style scoped>
  .newsdetail {
    /* margin-bottom: 48px; */
    overflow: auto;
    height: 100%;
    width: 100%;
  }
  a {
    color: black;
  }
  img {
    width: 30px;
    height: 30px;
  }
  .like {
    /* margin-top: 10px; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align:right;
    padding-right: 20px;
    padding-bottom:10px;
    border-top: 2px solid #808080;
    /*     height: 100%; */
    width: 100%;
    margin-bottom: 5px;
  }
  /*  .like .img-wrap img{
     height: 100%;
   } */
  .like .img-wrap {
    margin-top: 2px;
  }
  .like  span{
    margin-left: 4px;
    font-size: 14px;
    line-height: 20px;
  }
</style>
