<template>
  <div id="app">
    <div v-if='unSubmit'>
      <form action="" enctype="multipart/form-data">
      <div class="input-con">
        <input class='input' type="text" placeholder='输入真实姓名' v-model="userName">
        <div class='white-line'></div>
        <input class='input' type="text" placeholder='输入身份证号' v-model="cardId">
        <div class='white-line'></div>
      </div>
      <div class="upload-con">
        <div v-if='!frontImgUrl' class="before-upload">
          <img class="add-con" src="./assets/upload.png" alt="">
          <img class="add-icon" src="./assets/group5.png" alt="">
          <p class="add-tip">上传手持身份证</p>
        </div>
        <img v-else class='upload-img' :src="frontImgUrl" alt="">
        <input class="input-file" @change="uploadImg($event,'front')" type="file" accept="image/png, image/jpeg, image/gif, image/jpg">
      </div>
      <div class="upload-example">
        <p class='title'>示例：</p>
        <img class='example-img' src="https://s.momocdn.com/w/u/img/2016/12/22/1482401369200-bar.png" alt="">
        <p class="example-desc">拍摄清晰地本人身份证正面照（照片大小不超过20M）</p>
        <p class="example-desc">请保证手持的身份证与填写的身份证信息一致</p>
      </div>
      <div class="upload-con">
        <div v-if='!backImgUrl' class="before-upload">
          <img class="add-con" src="./assets/upload.png" alt="">
          <img class="add-icon" src="./assets/group5.png" alt="">
          <p class="add-tip">上传身份证背面</p>
        </div>
        <img v-else class='upload-img' :src="backImgUrl" alt="">
        <input class="input-file" @change="uploadImg($event,'back')" type="file" accept="image/png, image/jpeg, image/gif, image/jpg">
      </div>
      <div class="upload-example">
        <p class='title'>示例：</p>
        <img class='example-img' src="https://s.momocdn.com/w/u/img/2016/12/22/1482401369200-bar.png" alt="">
        <p class="example-desc">身份证背面需清晰拍摄有效期限位置（图片大小不超过20M）</p>
        <p class="example-desc">身份证有效期需剩余一个月以上</p>
      </div>
      <!-- <img :src="imgUrl" alt=""> -->
      <p v-if='acceptRule' class="submit-btn" @click=submitForm>提交</p>
      <p v-else class="submit-btn-disabled">提交</p>
      <div class="tip">
        <img v-show='acceptRule' class="img-inner" src="./assets/ovalInside.png" alt="">
        <img class="img-outer" @click='changeState("acceptRule")' src="./assets/ovalOutside.png" alt="">
        我已阅读并同意<span class="yellow">《flow用户协议》</span></div>
      </form>
    </div>
    <div v-else>
      <p class='submited-text'>提交成功，我们会尽快给出审核结果</p>
      <p class="submit-btn-leave" @click='closeWindow'>离开</p>
    </div>
  </div>
</template>
<script>
import request from 'ajax-request';
import oss from 'ali-oss';
export default {
  name: 'App',
  data(){
    return{
      unSubmit:true,
      acceptRule:false,
      userName:'',
      cardId:'',
      frontImgUrl:'',
      backImgUrl:'',
      frontImgId:'',
      backImgId:'',
      stsData:{},
    }
  },
  created(){
    // request('/live/sharePage', function(err, res, body) {

    // });
  },
  methods:{
    changeState(name){
      this[name] = !this[name];
    },
    uploadImg(event,type){
      var _this = this;
      var result = {};
      var storeAs = this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4();   //文件名，随机生成唯一的uuid
      var file = event.currentTarget.files[0];
      request({     //从sts服务获取token，key等
        url:'/token',
        method: 'GET',
        data: {}
      },function(err, res, body){
        if(err){
          console.log(err);
          return;
        }
        _this.stsData = JSON.parse(body);
        result = _this.stsData;
        console.log(result);
        var client = new oss.Wrapper({
            accessKeyId: result.AccessKeyId,
            accessKeySecret: result.AccessKeySecret,
            stsToken: result.SecurityToken,
            endpoint: 'oss-cn-qingdao.aliyuncs.com',
            // region: 'liveresource.flowsns.com',
            bucket: 'flow-live-resource',
            region:'oss-cn-qingdao'
          });
          client.multipartUpload(storeAs, file).then(function (result) {
            console.log('upload result');
            console.log(result);
            var url = _this.getObjectURL(file);    //设置预览图片
            _this[type+'ImgUrl'] = url;
            _this[type+'ImgId'] = storeAs;
          }).catch(function (err) {
            console.log(err);
          });
      })
    },
    S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
    getUuid() {
        return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4());
    },
    closeWindow(){
      
    },
    submitForm(){
      var _this = this;
      request({
      url: '/live/sumbitAuthentication',
      method: 'POST',
      data: {
        request:{
          authentication: _this.queryString('authentication'),
          backCardPhoto: _this.backImgId,
          handCardPhoto: _this.frontImgId,
          idNumber: _this.cardId,
          realName: _this.userName,
          userId: _this.queryString('userId')
        }
        
      }
    }, function(err, res, body) {
      console.log('submit res')
      console.log(res.statusCode)
      if(res.statusCode==200){
        _this.unSubmit = false;
      }
    });
    },
    getObjectURL(file) {
        var url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    },
    queryString(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                        results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
    },

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
  /* background:rgb(12,12,12) */
}
input{
  outline:none;
}
p{
  margin-block-start: 0;
  margin-block-end: 0;
}
body{
  margin: 0;
  padding: 0rem;
  background: #000;
}
.input-con{
  padding:0 .16rem;
  position: relative;
  overflow: hidden;
}
.input{
  display: block;
  width: 100%;
  position: relative;
  margin-top: .32rem;
  height: .2rem;
  line-height: .2rem;
  font-size: .14rem;
  background:rgba(0,0,0,0);
  text-decoration:none;
  color: #fff;
  outline:none;
  border-style:none;
  /* border: 1px solid #fff; */
}
.white-line{
  position: relative;
  margin-top:.09rem;
  height: 1px;
  /* transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5); */
  background: rgb(53,53,53);
}
.upload-con{
  margin-top: .32rem;
  position: relative;
}
.before-upload{
  width: 100%;
  position: relative;
}
.before-upload .add-con{
  position: relative;
  display: block;
  margin: 0 .16rem;
}
.before-upload .add-icon{
  display: block;
  width: .26rem;
  height: .26rem;
  margin-left: -.13rem;
  left: 50%;
  top: .5rem;
  position: absolute;
}
.before-upload .add-tip{
  font-size: .12rem;
  line-height: .17rem;
  color: #fff;
  position: absolute;
  top: .83rem;
  text-align: center;
  width: 100%;
}
.upload-con .input-file{
    display: block;
    width: 100%;
    height: 1.5rem;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
}
.upload-con .upload-img{
  display: block;
  height: 1.5rem;
  width: 2rem;
  margin: 0 auto;
  object-fit: cover;
}
.upload-example{
  margin-top: .16rem;
  position: relative;
  padding: 0 .16rem;
  height: 1.42rem;
  margin-bottom: .32rem;
}
.upload-example .title{
  font-size: .14rem;
  color: rgb(133,133,133);
  text-align: left;
  line-height: .2rem;
  margin-bottom: .12rem;
}
.upload-example .example-img{
  width: 1.48rem;
  height: 1.11rem;
  display: block;
  position: absolute;
  object-fit: cover;
  top: .32rem;
  left: .16rem;
}
.upload-example .example-desc{
  margin-left: 1.64rem;
  font-size: .12rem;
  color: rgb(133,133,133);
  text-align: left;
  margin-bottom: .12rem;
}
.submit-btn{
  margin: .16rem;
  height: .42rem;
  background: rgb(255,227,47);
  color: rgb(0,0,0);
  font-size: 14px;
  line-height: .42rem;
  text-align: center;
  font-weight: 600;
  border-radius: .21rem;
}
.submit-btn-disabled{
  margin: .16rem;
  height: .42rem;
  background: #554d16;
  color: rgb(0,0,0);
  font-size: 14px;
  line-height: .42rem;
  text-align: center;
  font-weight: 600;
  border-radius: .21rem;
}
.tip{
  padding-left: .35rem;
  font-size: .14rem;
  color: #fff;
  text-align: left;
  padding-bottom: .5rem;
  position: relative;
}
.tip .img-outer{
  position: absolute;
  width: .13rem;
  height: .13rem;
  left: .16rem;
  top: .03rem;
}
.tip .img-inner{
  position: absolute;
  width: .07rem;
  height: .07rem;
  left: .19rem;
  top: .06rem;
}
.tip .yellow{
  color: rgb(255,227,47);
}
.submited-text{
  font-size: .14rem;
  color: #fff;
  line-height: .2rem;
  margin-top: 2.1rem;

}
.submit-btn-leave{
  margin: .16rem;
  height: .42rem;
  background: #fff;
  color: rgb(0,0,0);
  font-size: 14px;
  line-height: .42rem;
  text-align: center;
  font-weight: 600;
  border-radius: .21rem;
  margin-top: .6rem;
}
</style>

