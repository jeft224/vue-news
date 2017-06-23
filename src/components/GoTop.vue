<template>
  <div class="goTop" v-show="isGoTop">
    <i class="icon iconfont icon-huidaodingbu" @click="GoTop()"></i>
  </div>
</template>

<script>
  export default {
    name:'goTop',
    data(){
        return {
            isGoTop:true
        }
    },
    methods:{
        GoTop(){

        }
    }
  }
</script>

<style scoped>
  .goTop{
    color: #50bfff;
    position: fixed;
    bottom: 1.066098rem;
    right: 0.799574rem;
    z-index: 9999;
    cursor: pointer;
    transition: all 1s;
    -webkit-transform: scale(.5);
    transform: scale(.5);
  }
  .goTop .icon{
    font-size:1.599147rem;
  }
</style>
