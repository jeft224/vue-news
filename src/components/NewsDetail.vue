<template>
  <div class="newsdetail">
    <div v-html="html"></div>
    <div class="like">
      <div @click="Switch()"><img :src="url[like]" alt=""></div>{{status}}
    </div>
  </div>
</template>

<script>
  export default {
    name:'newsdetail',
    data(){
        return{
            html:''
        }
    },
    computed:{

    },
    components:{

    },
    methods:{
      Switch(){

      }
    },
    mounted() {

    }
  }
</script>

<style>

</style>
