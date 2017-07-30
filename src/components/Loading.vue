<template>
  <div class="loading">
  </div>
</template>

<script>
  export default {
    name:'loading',
    data(){
        return {

        }
    }
  }
</script>

<style scoped>
  .loading {
    border:4px solid #0a8ddf;
    border-top:4px solid transparent;
    width:0.8rem;
    height: 0.8rem;
    animation: spinner 0.8s infinite linear;
    border-radius: 50%;
  }
  @keyframes spinner {
    0%{
      transform: rotate(0deg);
      opacity: 0.5;
    }

    50%{
      transform: rotate(180deg);
      opacity: 0.75;
    }

    100%{
      transform: rotate(360deg);
      opacity: 1;
    }
  }
</style>
