<template>
  <div class="search">
    <div class="search-box">
      <router-link to="/" >
        <img src="../assets/logo.d413616.png" alt="">
      </router-link>
      <form @submit.prevent="search(key)" class="search-input">
        <input v-model='key' type="text" />
        <i class="icon iconfont icon-sousuo1"></i>
      </form>
      <i class="icon iconfont icon-guanbi1" @click="HideSearch()" ></i>
    </div>
    <div class="news-box" v-for="(item,index) in newslist" :key="index">
      <div class="new" @click="details(item.url, item.author_name)">
          <h2 class="title">{{item.title}}</h2>
          <div class="more">
             <div class="user">
                <img v-lazy="item.thumbnail_pic_s" class="avatar" :src="item.thumbnail_pic_s" alt="">
                <span class="autor">{{item.author_name}}</span>
             </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
      name:'search',
      data(){
          return {
            key:'',
            newslist:[
              {
                title:'众里寻他千百度',
                author_name:'李白',
                thumbnail_pic_s:'https://avatars3.githubusercontent.com/u/18079246?s=40&v=4'
              },
              {
                title:'众里寻他千百度',
                author_name:'李白',
                thumbnail_pic_s:'https://avatars3.githubusercontent.com/u/18079246?s=40&v=4'
              }
            ]
          }
      },
      mounted () {
        
      },
      methods:{
        ...mapActions({setHeaderShow:'setHeaderShow'}),
        HideSearch(){
              this.setHeaderShow(true);
              this.$router.push({path:'/'})
        },
        search(key){

        }
      }

    }
</script>

<style scoped>
  .search{
    width: 100%;
  }
  .search .search-box{
    height: 1.599147rem;
    background: #262627;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left:0.266525rem;
  }
  .search .search-box img{
    height: 0.533049rem;
    cursor: pointer;
    flex: 1;
  }
  .search .search-box .search-input{
    flex: 3;
    height:0.799574rem;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-around;
    margin-left:0.399787rem;

  }
  .search .search-box .search-input .icon,.search .search-box .search-input input{
    height:0.799574rem;
    line-height:0.799574rem;
    font-size: 16px;
  }
  .search .search-box .search-input input{
    border:none;
    padding: 0;
    margin: 0;
    color: #fff;
    text-indent: 10px;
    background-color: #262627;
  }
  .search .search-box .search-input .icon{
    padding-right:0.266525rem;
  }
  .search .search-box .icon{
    flex: 1;
    color: #fff;
    margin-left: 6px;
  }
  .search .news-box{
    padding: 0 8px;
    display: flex;
    flex-direction:column;
    justify-content: center;
  }
  .search .news-box .new{
    width: 100%;
    display: flex;
    flex-direction:row;
    border: 1px solid #BEBEBE;
    border-radius: 6px;
    color: #262627;
    margin-top:10px;
    box-shadow: 1px 1px 3px 0px #BEBEBE;
  }
  .search .news-box .new .title{
    flex: 2;
    font-weight: bold;
    font-size:14px;
    line-height: 50px;
    height: 50px;
    padding-left: 10px;
    text-align: left;
  }
  .search .news-box .new .more{
    flex: 1;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    padding: 10px 0px;
  }
  .search .news-box .new .more .user{
    display: flex;
  }
  .search .news-box .new .more .user .avatar{
    width: 30px;
    height: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .search .news-box .new .more .user span{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-left: 5px;
    font-size:13px;
    color: grey;
  }
  .search .news-box .new .more span{
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-left: 5px;
    font-size:13px;
    color: grey;
  }
</style>
