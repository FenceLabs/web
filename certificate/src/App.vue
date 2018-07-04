<template>
  <div id="app">
    <input class='input' place-holder='输入真实姓名'>
    <div class='white-line'></div>
    <input type="file">
  </div>
</template>

<script>
import request from 'ajax-request';
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
    request({
      url: '/live/sharePage',
      method: 'GET',
      data: {
        
      }
    }, function(err, res, body) {
      
    });
    // request('/live/sharePage', function(err, res, body) {

    // });
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'PingFangSC-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background:rgb(12,12,12)
}
.input{

}
.white-line{
  
}

</style>
