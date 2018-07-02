<template>
  <div id="app">
    <VHeader v-if = "headerShow"></VHeader>
    <VSearch v-if = "!headerShow"></VSearch>
    <VNav v-if = "headerShow"></VNav>
    <GoTop></GoTop>
    <router-view></router-view>
  </div>
</template>

<script>
  import VHeader from './components/Header'
  import VSearch from './components/Search'
  import VNav from './components/Nav'
  import Loading from './components/Loading'
  import GoTop from './components/GoTop'
  import NewsList from './components/NewsList'
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{
      VHeader,
      VSearch,
      VNav,
      Loading,
      GoTop,
      NewsList
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
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
