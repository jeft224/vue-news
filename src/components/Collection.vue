<template>
  <transition name="collection">
    <div class="collection" v-if='isShowAbout'>
      <div class="header">
        我的收藏
        <i class="icon close" @click="ShowAbout()"></i>
      </div>
      <div class="content">
        <div class="item" v-for='item in list '>
          <div class="new" v-html = 'item'></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    name:'collection',
    data(){
      return {
        list:[]
      }
    },
    computed:{
      isShowAbout() {
        return this.$store.state.common.isShowAbout;
      }
    },
    methods:{
      ShowAbout(){
        this.$store.commit('showAbout', false);
      }
    },
    mounted() {
      var collectionList = localStorage.getItem("collectionData");
      var cList = JSON.parse(collectionList);
      this.list.push(cList.collection);
    }
  }
</script>

<style type="text/css" scoped>
  .collection {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: white;
    z-index: 60;
    overflow-y: auto;
  }
  .collection .header {
    width: 100%;
    height: 6%;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height:35px;
  }
  .collection .header .close {
    position: absolute;
    z-index: 100;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../assets/close.png');
    background-repeat: no-repeat;
    background-size: contain;
    top: 1.5%;
    right: 2%;
  }
  .collection .content {
    width: 100%;
    height: 94%;
    border-top: 1px solid #E1E1E1;
  }
  .collection .content .item {
    height: 100%;
    width: 100%;
  }
  .collection-enter-active{
    transition: all .4s ease-in-out;
  }
  .collection-leave-active {
    transition: all .3s cubic-bezier(1.0, 1.0, 0.8, 1.0);
  }
  .collection-enter, .collection-leave-active {
    transform:translateX(120px);
    opacity: 0;
  }
</style>
