<template>
  <div class="search">
    <div class="search-box">
      <router-link :to="{name:'Hello'}" >
        <img src="../assets/logo.d413616.png" alt="">
      </router-link>
      <form @submit.prevent="search(key)" class="search-input">
        <input v-model='key' type="text" />
        <i class="icon iconfont icon-sousuo1"></i>
      </form>
      <i class="icon iconfont icon-guanbi1" @click="HideSearch()" ></i>
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
          }
      },
      methods:{
        ...mapActions({setHeaderShow:'setHeaderShow'}),
        HideSearch(){
              this.setHeaderShow(true);
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
  }
</style>
