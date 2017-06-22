<template>
  <div class="loading">
    <span v-show="isLoading"></span>
  </div>
</template>

<script>
  export default {
    name:'loading',
    data(){
        return {
            isLoading:true
        }
    }
  }
</script>

<style scoped>
  .loading {
    margin-top:0.266525rem;
    position: relative;
  }
  .loading  span {
    position: absolute;
    border:4px solid #0a8ddf;
    border-top:4px solid transparent;
    border-radius: 999px;
    width:0.8rem;
    height: 0.8rem;
    left: 4.5rem;
    animation: spinner 0.8s infinite linear;
  }
  @keyframes spinner {
    0%{
      transform: rotate(360deg);
      opacity: 1.0;
    }
    50%{
      transform: rotate(180deg);
      opacity: 0.5;
    }
    100%{
      transform: rotate(0deg);
      opacity: 0;
    }
  }
</style>
