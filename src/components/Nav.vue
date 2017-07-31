<template>
  <div class="nav" v-show="showHome">
    <ul class="nav-list">
      <li @click="changeTab('top')" :class="{active:tab=='top'}" class="type"><router-link to="\">头条</router-link></li>
      <li @click="changeTab('war')" :class="{active:tab=='war'}" class="type"><router-link to="\">军事</router-link></li>
      <li @click="changeTab('ent')" :class="{active:tab=='ent'}" class="type"><router-link to="\">娱乐</router-link></li>
      <li @click="changeTab('travel')" :class="{active:tab=='travel'}" class="type"><router-link to="\">旅游</router-link></li>
      <li @click="changeTab('edu')" :class="{active:tab=='edu'}" class="type"><router-link to="\">教育</router-link></li>
      <li @click="changeTab('tech')" :class="{active:tab=='tech'}" class="type"><router-link to="\">科技</router-link></li>
    </ul>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name:'nav',
    methods:{
        ...mapActions({getNewsList:'getNewsList'}),
        changeTab(type){
           this.getNewsList(type);
        }
    },
    data(){
        return{
        }
    },
    computed:{
        ...mapState({
            tab:state=>state.newlist.type,
            showHome:state => state.common.showHome
      })
    }
  }
</script>

<style scoped>
  .nav{
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
  .nav .nav-list{
    display: flex;
    flex-direction:row;
    letter-spacing:2px;
    padding-top:0.399787rem;
    position: relative;
  }
  .nav .nav-list .type{
    flex: 1;
    border-bottom:1px solid gainsboro;
    padding-bottom: 0.266525rem;
    position: relative;
  }
  .nav .nav-list li>a{
    text-decoration: none;
    color: grey;
  }
  .nav .nav-list li.type>a:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: .3s ease-in-out;
    color: red;
  }
  .nav .nav-list .active{
    color: red;
    cursor: pointer;
    padding-bottom: 0.053305rem;
    border-bottom: 2px solid red;
    font-size: 18px;
  }
  .nav .nav-list .active>a{
    color: red;
  }
</style>
