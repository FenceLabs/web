<template>
  <div id="app">
    <div class="video-con">
      <!-- <video id="my-video" preload="auto" playsinline="" webkit-playsinline="" data-setup="" x5-video-player-type="h5" type="video/mp4" poster="http://img.momocdn.com/feedvideo/E8/50/E850C2AF-AA76-186E-8399-51409D0C716F20180704_L.jpg" src="http://img.momocdn.com/feedvideo/45/B8/45B8C074-5C6A-7F7B-5101-AF1A23795FB020180704.mp4">
      </video> -->
      <video id="video-player" class="video-player" poster="https://img.momocdn.com/live/92/D6/92D6B222-7CBF-D15E-71F7-815B04C473C920160429_L.jpg" preload="auto" playsinline="" webkit-playsinline="" x-webkit-airplay="" data-setup="" x5-video-player-type="h5">
        <!-- <source src="http://hls4.v.momocdn.com/live/m_1530839101561n96234db56cc14217107.m3u8" type="application/x-mpegURL"> -->
        <source src="http://img.momocdn.com/feedvideo/45/B8/45B8C074-5C6A-7F7B-5101-AF1A23795FB020180704.mp4">
      </video>
      <img @click='playVideo' class="play-btn" src="./assets/playBtn.png" alt="">
    </div>
    <!-- <div class="end-con">
      <img class='avatar' src="./assets/head.png" alt="">
      <p class='desc'>下载flow继续观看&nbsp;&nbsp;{{info.name}}&nbsp;&nbsp;的直播！</p>
      <p class='download-btn'>立刻下载</p>
    </div> -->
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
import request from 'ajax-request'
export default {
  name: 'App',
  data(){
    return{
      info:{}
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      var _this = this;
      request({
        url: '/live/sharePage',
        method: 'GET',
        data:{
          starId:234
        }
      },function(err, res, body){
        if(err){
          console.log(err);
          return;
        }
        _this.info = JSON.parse(body).data;
        document.title = _this.info.name +'在flow的直播'
      })
    },
    playVideo(){
      document.getElementById('video-player').play();
    }
  },
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
  /* margin-top: 60px; */
}
body,p{
  margin: 0;
  padding: 0;
}
body{
  background: #2c3e50;
}
p{
  margin-block-start: 0;
  margin-block-end: 0;
}
.video-con{
  width: 100%;
  position: relative;
}
.video-con .video-player{
  display: block;
  position: relative;
  width: 100%;
}
.video-con .play-btn{
  width: .64rem;
  height: .64rem;
  margin-left: -.32rem;
  left: 50%;
  margin-top: -.32rem;
  top: 40%;
  position: absolute;
  z-index: 1;
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
