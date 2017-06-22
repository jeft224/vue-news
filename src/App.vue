<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <VHeader v-if = "headerShow"></VHeader>
    <VSearch v-if = "!headerShow"></VSearch>
    <VNav></VNav>
    <Loading></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import VHeader from './components/Header'
  import VSearch from './components/Search'
  import VNav from './components/Nav'
  import Loading from './components/Loading'
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{
      VHeader,
      VSearch,
      VNav,
      Loading
  },
  computed: {
    ...mapGetters({
      headerShow:'getHeaderShow'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
