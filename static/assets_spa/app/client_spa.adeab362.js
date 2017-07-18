!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=n(1),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(r),n(2)),i=function(e){return e&&e.__esModule?e:{default:e}}(o);n(5);var s=n(9),a=n(12);n(15);var p=new VueRouter({mode:"hash",routes:[{path:"/",component:i.default,children:[{path:"topics",component:a.TopicsView},{path:"topic",component:{}},{path:"user/create",component:s.UserCreateComponent},{path:"user/login",component:s.UserLoginComponent}]}]}),c=new Vue({el:"#mainBody",router:p});window.ubibiApp=c,t.app=c},function(e,t){function n(e,t,n,r,o){return new Promise(function(i,s){var a=new XMLHttpRequest;a.open(e,t,!0),a.responseType=o||"text";"form"===r&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),"json"===r&&a.setRequestHeader("Content-Type","application/json;charset=UTF-8"),a.onreadystatechange=function(){if(4==a.readyState)if(a.status>=200&&a.status<300||304==a.status){var e=a.responseText;i(e)}else s(a.status)},n?a.send(n):a.send()})}function r(e){return JSON.parse(e)}function o(e,t){return t&&p[e]&&p[e].timeStamp+864e5<(new Date).getTime()?Promise.resolve(p[e].data):n("GET",e).then(function(n){return t&&(p[e]={data:n,timeStamp:(new Date).getTime()}),n})}function i(e,t){return o(e,t).then(r)}function s(e,t,r){return n("POST",e,t,r)}function a(e,t){return s(e,JSON.stringify(t),"json").then(r)}var p={};e.exports={sendXmlHttpRequest:n,sendGetRequest:o,sendGetJSONRequest:i,sendPostRequest:s,sendPostJSONRequest:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(3);var r=n(4),o={template:r.AppHeaderTemplate},i={template:r.AppRootTemplate,components:{"app-header":o}};t.default=i},function(e,t){},function(e,t){e.exports={AppRootTemplate:'<div class="app-root"> <app-header /> <router-view/> </div>',AppHeaderTemplate:'<div class="app-header"> <div class="nav"> <div class="nav-right"> <router-link class="login-link" to="/user/login">登录</router-link> <router-link class="login-link" to="/user/create">注册</router-link> </div> </div> </div>'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6);n(7);var o=n(8);(0,r.createPureVueComponent)(o),t.default="ok"},function(e,t,n){"use strict";function r(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];if("string"==typeof n)Vue.component(t,{template:n});else{var r=n.content,o=n.propsMap,i=o.props||"",s=i.split(",");Vue.component(t,{template:r,props:s})}}}Object.defineProperty(t,"__esModule",{value:!0}),t.createPureVueComponent=r},function(e,t){},function(e,t){e.exports={"bs-card":{content:'<div class="bs-card" :class="className"> <div class="bs-card-ms"> <slot /> </div> </div>',propsMap:{id:"bs-card",props:"className"},propsLength:2,firstProp:"id"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserLoginComponent=t.UserCreateComponent=void 0;var r=n(10);n(11);t.UserCreateComponent={template:r.UserCreateTemplate,data:function(){return{regType:"email"}}},t.UserLoginComponent={template:r.UserLoginTemplate,data:function(){return{regType:"email"}}}},function(e,t){e.exports={UserCreateTemplate:'<div class="user-create"> <div class=""> <div @click="regType=\'email\'" :class="{regTypeCurrent:regType==\'email\'}">邮箱注册</div> <div @click="regType=\'mobile\'" :class="{regTypeCurrent:regType==\'mobile\'}">手机注册</div> </div> </div>',UserLoginTemplate:'<div class="user-login"> user login </div>'}},function(e,t){},function(e,t,n){"use strict";var r=n(13);n(14);var o={template:r.t2,props:["topic"],data:function(){return{}}},i={template:r.t1,components:{TopicsItemView:o},data:function(){return{topicList:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]}}},s={};e.exports={TopicsView:i,TopicView:s}},function(e,t){e.exports={t1:'<div class="TopicsView"> <TopicsItemView v-for="topic in topicList" :topic="topic" /> </div>',t2:'<bs-card className="TopicsItemView"> <div class="title">宝塔管理面安装tipask3.x视频教程（5分钟急速安装）</div> </bs-card>'}},function(e,t){},function(e,t){}]);