<template>
  <transition name="slide">
  <div v-if="isShowAbout" class="about">
        <div class="msg">
          <i class="icon iconfont close" @click="ShowAbout()"></i>
          <div class="title">
            <h1><strong>关于作品</strong></h1>
            <div>
              用vue全家桶搭建的实时新闻App
            </div>
          </div>
          <div class="content">
              <h2><strong>技术栈</strong></h2>
              <div class="skill">
                axios <br>
                Vuex <br>
                Vue2<br>
                SASS(SCSS)<br>
                ES6<br>
                localStorage<br>
                Vue-router<br>
                CSS3<br>
                HTML5
              </div>
          </div>
          <div class="link">
            <p class="url"><strong>个人网站：</strong><a href="https://jeft224.github.io/" target="_blank">Abert</a></p>
            <p class="url"><strong>github：</strong><a href="https://github.com/jeft224" target="_blank">Abert</a></p>
          </div>
        </div>
  </div>
  </transition>
</template>

<script>
    export default {
      name:'about',
      data(){
            return{
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
      }
    }
</script>

<style scoped>
  .about {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 60;
    margin-top: 10px;
    width: 90%;
    height: 600px;
  }
  .about .msg{
    z-index: 5;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 22px gray;
    overflow: auto;
    background: white;
  }

  .close {
    position: absolute;
    z-index: 100;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../assets/close.png');
    background-repeat: no-repeat;
    background-size: contain;
    top: 2%;
    right: 2%;
  }
  .about .msg .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-size: 16px;
    margin-bottom:20px;
  }
  .about .msg .title>div{
    font-weight:bold;
  }
  .about .msg .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-bottom:20px;
  }
  .about .msg .content .skill{
    text-align: center;
    line-height:30px;
  }
  .link {
    padding-left: 45px;
    color: skyblue;
  }
  .about .msg .title h1 {
    display: block;
    font-size: 25px;
    text-align: center;
    margin: 15px 20px;
    color: red;
  }
  .about .msg .content h2 {
    font-size: 20px;
    display: inline-block;
    opacity: .6;
    margin-bottom: 10px;
  }
  .url {
    padding-bottom: 10px;
  }
  .slide-enter-active{
    transition: all .4s ease-in-out;
  }
  .slide-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-active {
    transform: rotateZ(180deg);
    opacity: 0;
  }
</style>
