<template>
  <div class="newsdetail">
    <div v-html="html"></div>
    <div class="like">
      <div @click="Switch()">
        <img :src="url[0]" alt="">
      </div>
      {{status}}
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
          url:state => state.news.url,
          like:state => state.news.like,
          status:state => state.news.status,
          html:state => state.news.html
      })
    },
    components:{

    },
    methods:{
      Switch(){

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
    margin-bottom: 48px;
    overflow: auto;
  }
  a {
    color: black;
  }
  .like {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align:right;
    padding-right: 20px;
    padding-bottom:10px;
    border-bottom: 2px solid #808080;
  }
  .img-wrap img{
    height: 100%;
  }
  img {
    width: 30px;
    height: 30px;
  }
</style>
