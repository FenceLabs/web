webpackJsonp([1],{0:function(t,a){},1:function(t,a){},"1cgu":function(t,a){},"6Pvy":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaAgMAAADUJKRdAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAtc2YijsAAAAcSURBVAjXYwCCAAYIWEALOmsVCEyA0bSyB+YPAFUzFvkrWkEaAAAAAElFTkSuQmCC"},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i=s("CYTA"),n=s.n(i),c=s("/Z0X"),o=s.n(c),l={name:"App",data:function(){return{unSubmit:!0,acceptRule:!0,userName:"",cardId:"",frontImgUrl:"",backImgUrl:"",frontImgId:"",backImgId:"",stsData:{}}},created:function(){},methods:{changeState:function(t){this[t]=!this[t]},uploadImg:function(t,a){var s=this,e={},i=this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4(),c=t.currentTarget.files[0];n()({url:"/token",method:"GET",data:{}},function(t,n,l){t?console.log(t):(s.stsData=JSON.parse(l),e=s.stsData,console.log(e),new o.a.Wrapper({accessKeyId:e.AccessKeyId,accessKeySecret:e.AccessKeySecret,stsToken:e.SecurityToken,endpoint:"oss-cn-qingdao.aliyuncs.com",bucket:"flow-live-resource",region:"oss-cn-qingdao"}).multipartUpload(i,c).then(function(t){console.log("upload result"),console.log(t);var e=s.getObjectURL(c);s[a+"ImgUrl"]=e,s[a+"ImgId"]=i}).catch(function(t){console.log(t)}))})},S4:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},getUuid:function(){return this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4()},closeWindow:function(){},submitForm:function(){n()({url:"/live/sumbitAuthentication",method:"POST",data:{request:{authentication:this.queryString("authentication"),backCardPhoto:this.backImgId,handCardPhoto:this.frontImgId,idNumber:this.cardId,realName:this.userName,userId:this.queryString("userId")}}},function(t,a,s){console.log("submit res"),console.log(a)})},getObjectURL:function(t){var a=null;return void 0!=window.createObjectURL?a=window.createObjectURL(t):void 0!=window.URL?a=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(a=window.webkitURL.createObjectURL(t)),a},queryString:function(t,a){a||(a=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var s=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(a);return s?s[2]?decodeURIComponent(s[2].replace(/\+/g," ")):"":null}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.unSubmit?e("div",[e("form",{attrs:{action:"",enctype:"multipart/form-data"}},[e("div",{staticClass:"input-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"input",attrs:{type:"text",placeholder:"输入真实姓名"},domProps:{value:t.userName},on:{input:function(a){a.target.composing||(t.userName=a.target.value)}}}),t._v(" "),e("div",{staticClass:"white-line"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardId,expression:"cardId"}],staticClass:"input",attrs:{type:"text",placeholder:"输入身份证号"},domProps:{value:t.cardId},on:{input:function(a){a.target.composing||(t.cardId=a.target.value)}}}),t._v(" "),e("div",{staticClass:"white-line"})]),t._v(" "),e("div",{staticClass:"upload-con"},[t.frontImgUrl?e("img",{staticClass:"upload-img",attrs:{src:t.frontImgUrl,alt:""}}):e("div",{staticClass:"before-upload"},[e("img",{staticClass:"add-con",attrs:{src:s("Ysra"),alt:""}}),t._v(" "),e("img",{staticClass:"add-icon",attrs:{src:s("6Pvy"),alt:""}}),t._v(" "),e("p",{staticClass:"add-tip"},[t._v("上传手持身份证")])]),t._v(" "),e("input",{staticClass:"input-file",attrs:{type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:function(a){t.uploadImg(a,"front")}}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"upload-con"},[t.backImgUrl?e("img",{staticClass:"upload-img",attrs:{src:t.backImgUrl,alt:""}}):e("div",{staticClass:"before-upload"},[e("img",{staticClass:"add-con",attrs:{src:s("Ysra"),alt:""}}),t._v(" "),e("img",{staticClass:"add-icon",attrs:{src:s("6Pvy"),alt:""}}),t._v(" "),e("p",{staticClass:"add-tip"},[t._v("上传身份证背面")])]),t._v(" "),e("input",{staticClass:"input-file",attrs:{type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:function(a){t.uploadImg(a,"back")}}})]),t._v(" "),t._m(1),t._v(" "),t.acceptRule?e("p",{staticClass:"submit-btn",on:{click:t.submitForm}},[t._v("提交")]):e("p",{staticClass:"submit-btn-disabled"},[t._v("提交")]),t._v(" "),e("div",{staticClass:"tip"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.acceptRule,expression:"acceptRule"}],staticClass:"img-inner",attrs:{src:s("VnD8"),alt:""}}),t._v(" "),e("img",{staticClass:"img-outer",attrs:{src:s("PZ1S"),alt:""},on:{click:function(a){t.changeState("acceptRule")}}}),t._v("\n      我已阅读并同意"),e("span",{staticClass:"yellow"},[t._v("《flow用户协议》")])])])]):e("div",[e("p",{staticClass:"submited-text"},[t._v("提交成功，我们会尽快给出审核结果")]),t._v(" "),e("p",{staticClass:"submit-btn-leave",on:{click:t.closeWindow}},[t._v("离开")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"upload-example"},[a("p",{staticClass:"title"},[this._v("示例：")]),this._v(" "),a("img",{staticClass:"example-img",attrs:{src:"https://s.momocdn.com/w/u/img/2016/12/22/1482401369200-bar.png",alt:""}}),this._v(" "),a("p",{staticClass:"example-desc"},[this._v("拍摄清晰地本人身份证正面照（照片大小不超过20M）")]),this._v(" "),a("p",{staticClass:"example-desc"},[this._v("请保证手持的身份证与填写的身份证信息一致")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"upload-example"},[a("p",{staticClass:"title"},[this._v("示例：")]),this._v(" "),a("img",{staticClass:"example-img",attrs:{src:"https://s.momocdn.com/w/u/img/2016/12/22/1482401369200-bar.png",alt:""}}),this._v(" "),a("p",{staticClass:"example-desc"},[this._v("身份证背面需清晰拍摄有效期限位置（图片大小不超过20M）")]),this._v(" "),a("p",{staticClass:"example-desc"},[this._v("身份证有效期需剩余一个月以上")])])}]};var A=s("VU/8")(l,r,!1,function(t){s("1cgu")},null,null).exports;e.a.config.productionTip=!1;var u=window.screen.availWidth/375*100;document.getElementsByTagName("html")[0].style.fontSize=u+"px",new e.a({el:"#app",components:{App:A},template:"<App/>"})},PZ1S:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA+uzls6eafzENjI2Q+FTHAAAARElEQVQI12Ng4AgWjmAAgkKVJYoFDAzsxyYwTDvOwNCYABRLbGAImgCkJwUwmIDUsBgwSIFobgEYHyYPUw/VDzcPZj4AymkSpq58atIAAAAASUVORK5CYII="},VnD8:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAD1BMVEX///////////8AAAD///9h0jmkAAAABHRSTlPLS/MAUYHfwgAAACFJREFUCNdjMGRiNGAQcXERYGBxcWFgUHFxUQCzwGJgWQBGiwQFVaGCkgAAAABJRU5ErkJggg=="},Ysra:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACWAQMAAABQPFn+AAAABlBMVEUAAAA1NTVzRZghAAAAAXRSTlMAQObYZgAAAEhJREFUWMPtziEVACAQBcH/iAQF6UQNQiGxJxCIWb1isutlplpLnr63mXK8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzfedeo1g8xWFDpZ+DaDgAAAABJRU5ErkJggg=="}},["NHnr"]);
//# sourceMappingURL=app.e7b3ff79457801c51793.js.map