<template>
  <transition name="me">
    <div v-if='isShowAbout' class="me">
      <div class="container">
        <i class="close" @click="ShowAbout()"></i>
        <div class="info">
          <div class="msg">
            <div class="user">
              <img src="https://avatars0.githubusercontent.com/u/18079246?s=400&v=4" class='avatar'>
              <h2>罗志伟</h2>
            </div>
            <div class="target">
              <h3>求职意向:</h3>
              <p>前端开发</p>
            </div>
            <div class = 'background'>
              <h3>个人信息：</h3>
              <p><i class="icon">&#xe615;</i>本科</p>
              <p><i class="icon">&#xe62d;</i>软件工程</p>
              <p><i class="icon">&#xe71d;</i>东华理工大学</p>
              <p><i class="icon">&#xe695;</i>2018-06</p>
              <p><i class="icon">&#xe6ae;</i>个人网站</p>
              <p><i class="icon">&#xe608;</i>15070033049</p>
            </div>
            <div class="more">
              <h3>其他信息：</h3>
              <p><i class="icon">&#xe603;</i></p>
              <p><i class="icon">&#xe6c5;</i></p>
              <p><i class="icon">&#xe610;</i>segmentfault</p>
              <p><i class="icon">&#xe62f;</i>1248824453</p>
              <p><i class="icon">&#xe61b;</i>1248824453@qq.com</p>
            </div>
          </div>

        </div>
        <div class="prodoction">
          <div class="tech">
            <h2>技术栈</h2>
            <div class="bottom">
              <div class="front">
                <p>前端:</p>
                <ul>
                  <li>熟悉html css JavaScript(ES6) jQuery</li>
                  <li>Vue Vuex VueRouter(有实战经验，可快速上手)</li>
                  <li></li>
                </ul>
              </div>
              <div class="server">
                <p>后端:</p>
                <ul>
                  <li>熟悉html css JavaScript(ES6) jQuery</li>
                  <li>Vue Vuex VueRouter(有实战经验，可快速上手)</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="prod">
            <h2>作品</h2>
            <div class="bottom">
              <p>1.vue.js全家桶打造的新闻App</p>
              <ul>
                <li>

                </li>
              </ul>

            </div>
          </div>
          <div class="intro">
            <h2>自我描述</h2>
            <div class="bottom">
              <p>热爱前端开发，追求新技术。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mask"></div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default{
    name:'me',
    data(){
      return {

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


<style type="text/css" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 329605 */
    src: url('//at.alicdn.com/t/font_329605_bcj71w1cco9zr529.eot');
    src: url('//at.alicdn.com/t/font_329605_bcj71w1cco9zr529.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_329605_bcj71w1cco9zr529.woff') format('woff'),
    url('//at.alicdn.com/t/font_329605_bcj71w1cco9zr529.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_329605_bcj71w1cco9zr529.svg#iconfont') format('svg');
  }
  .icon{
    font-family:iconfont!important;
    font-size:16px;
    font-style:normal;
    color:#fff
  }
  .me{
    width: 100%;
    font-size: 12px;
    position: absolute;
    z-index: 60;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
  }
  .me .mask{
    position: absolute;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: none;
  }
  .me .container{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 60;
    transform: translate(-50%, -50%);
    margin-top: 10px;
    width: 90%;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    height: 100%;
    box-shadow: 0 0 22px gray;
  }
  .me .container .close{
    position: absolute;
    z-index: 100;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../assets/close.png');
    background-repeat: no-repeat;
    background-size: contain;
    top: 1%;
    right: 2%;

  }
  .me .container .info{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-direction: column;
    flex: 2;
    height: 100%;
    background:linear-gradient(#b4d3c4,rgba(145, 226, 187, 0.5));
    /* padding: 15px 15px 10px 0px; */
    color: white;
  }
  .me .container .info .msg {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .me .container .info .msg .user{
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 2;
    margin-bottom: 8px;
  }
  .me .container .info .msg .target{
    flex: 1;
    margin-bottom: 4px;
    line-height: 20px;
    color: #f8f8f8;
    padding: 0 10px;
  }
  .me .container .info .msg .target>p{
    display: inline;
  }
  .me .container .info .msg .target>h3{
    display: inline;
    font-size: 14px;
    color: #e0a39d;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgb(243, 59, 7)), to(rgb(236, 187, 8)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .me .container .info .msg .background{
    flex: 2;
    padding: 0 10px;
  }
  .me .container .info .msg .background>p,.me .container .info .msg .more>p{
    padding: 5px 0 0 10px;
    color: black;
  }

  .me .container .info .msg .more{
    flex: 2;
    padding: 5px 10px;
  }

  /* .me .container .info .msg .background>p>.icon{
        font-family: iconfont!important;
        font-size: 16px;
        font-style: normal;
        color: #fff;
    } */
  .me .container .info .msg .user>.avatar{
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 6px !important;
    box-sizing: border-box;
    border-style: none;
    width: 80px;
    height: 80px;
  }
  .me .container .prodoction{
    flex: 4;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 10px;
    background: linear-gradient(#f5f5f5,rgba(226, 255, 241, 0.5));
    padding: 6px;
  }
  .me .container .prodoction .tech{
    flex: 1;
    width: 100%;
  }
  .me .container .prodoction .tech>h2,.me .container .prodoction .prod>h2,.me .container .prodoction .intro>h2{
    font-size: 18px;
    padding-bottom: 6px;
    border-bottom: 1px solid #b4d3c4;
    font-weight: bold;
  }
  .me .container .prodoction .tech .bottom,.me .container .prodoction .prod .bottom{
    padding: 5px 0 8px;
  }
  .me .container .prodoction .tech .bottom .front>p,.me .container .prodoction .tech .bottom .server>p{
    font-size: 15px;
    line-height: 28px;
  }
  .me .container .prodoction .tech .bottom .front ul,.me .container .prodoction .tech .bottom .server ul{
    padding-left: 20px;
  }
  .me .container .prodoction .tech .bottom .front ul li,.me .container .prodoction .tech .bottom .server ul li{
    list-style-type: circle;
    margin: 5px 0px;
    font-size: 10px;
  }
  .me .container .prodoction .prod{
    flex: 1;
    width: 100%;
    margin-top: 5px;
  }
  .me .container .prodoction .prod .bottom>p{
    font-size: 14px;
  }
  .me .container .prodoction .prod .bottom>ul{
    padding-left: 20px;
  }
  .me .container .prodoction .prod .bottom>ul li{
    list-style-type: circle;
    margin: 5px 0px;
    font-size: 10px;
  }
  .me .container .prodoction .intro{
    flex: 1;
    width: 100%;
  }
  .me .container .prodoction .intro .bottom{
    padding: 5px 0 4px 4px;
  }
  .me .container .prodoction .intro .bottom>p{
    font-size: 10px;
    margin-top: 4px;
  }
  .me-enter-active{
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .me-leave-active {
    transition: all .4s ease-in-out;
  }
  .me-enter, .me-leave-active {
    transform:rotateZ(120deg);
    opacity: 0;
  }

</style>
