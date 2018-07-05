<template>
  <div id="app">
    <div class="video-con"></div>
    <div class="end-con">
      <img class='avatar' src="./assets/head.png" alt="">
      <p class='desc'>下载flow继续观看&nbsp;&nbsp;xuwenqi&nbsp;&nbsp;的直播！</p>
      <p class='download-btn'>立刻下载</p>
    </div>
    <div class="download-con">
      <img class="icon" src="./assets/icon.png" alt="">
      <p class="dl-title">flow</p>
      <p class="dl-desc">最潮的人都在这</p>
      <p class="dl-btn">下载看看</p>
    </div>

    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import request from 'ajax-request'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: 'PingFang-SC', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,p{
  margin: 0;
  padding: 0;
}
p{
  margin-block-start: 0;
  margin-block-end: 0;
}
.end-con{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  padding-top: 1.16rem;
  box-sizing: border-box;
}
.avatar{
  width: .8rem;
  height: .8rem;
  display: block;
  border-radius: .4rem;
  position: relative;
  margin: 0 auto;
}
.desc{
  font-size: .14rem;
  color: #fff;
  line-height: .2rem;
  margin-top: .16rem;
}
.download-btn{
  margin: 0 .42rem;
  height: .42rem;
  line-height: .42rem;
  background: rgb(255,227,47);
  color: #000;
  font-size: .14rem;
  font-weight: 600;
  border-radius: .21rem;
  margin-top: .6rem;
}
.download-con{
  width: 100%;
  height: .78rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgb(21,22,23)
}
.download-con .icon{
  width: .6rem;
  height: .6rem;
  margin:.09rem .19rem 0 .16rem; 
  display: block;
}
.download-con .dl-title{
  font-size: .2rem;
  line-height: .24rem;
  position: absolute;
  top: .15rem;
  left: .95rem;
  color: #fff;
  font-weight: 600;
}
.download-con .dl-desc{
  font-size: .13rem;
  line-height: .18rem;
  color: #fff;
  position: absolute;
  bottom: .16rem;
  left: .95rem;
}
.download-con .dl-btn{
  width: .8rem;
  height: .3rem;
  border-radius: .15rem;
  position: absolute;
  right: .16rem;
  top: .24rem;
  background: rgb(255,227,47);
  line-height: .3rem;
  font-size: .12rem;
  font-weight: 600;
  color: #000;
}
</style>
