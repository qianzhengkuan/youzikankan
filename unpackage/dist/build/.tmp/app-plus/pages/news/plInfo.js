(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/plInfo"],{"0fa2":function(t,n,e){"use strict";e.r(n);var i=e("f87e"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},5805:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},"5cc1":function(t,n,e){},"61a7":function(t,n,e){"use strict";e.r(n);var i=e("5805"),o=e("0fa2");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("7002");var s,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},7002:function(t,n,e){"use strict";var i=e("5cc1"),o=e.n(i);o.a},aa6b:function(t,n,e){"use strict";(function(t){e("ff80"),e("921b");i(e("66fd"));var n=i(e("61a7"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f87e:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("pages/template/pinglun").then(function(){return resolve(e("2622"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("pages/template/pinglun-panel").then(function(){return resolve(e("814e"))}.bind(null,e)).catch(e.oe)},s={components:{pinglun:o,pinglunPanel:a},data:function(){return{plShow:!1,plCon:"",plList:[],info:{title:"福建有座宗祠，后代都是有名的人物 名的名的名的会谈",author:{headImg:"../../static/images/shuijiao.jpg",name:"翱翔天际"},guanzhuFlag:!1,content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",cover:"../../static/images/shuijiao.jpg",time:"2020-03-24 10:00:00",seePeople:8898},new_id:""}},methods:{huifu:function(t){this.$refs.plPanel.showPl()},submitPl:function(n){var e=this;t("log",this.new_id," at pages\\news\\plInfo.vue:51"),this.$apiJs.replyComment({news_id:this.new_id,content:n,author_id:this.author_id,content_id:this.content_id,userLogin:!0}).then((function(t){t&&(e.$commonJs.uniMsg("回复成功"),e.$refs.plPanel.closePl(),e.getAllCommentByUser(),e.getLoginCommentReply())}))},openPl:function(){this.userLogin?this.$refs.plPanel.showPl():this.$commonJs.toLoginPage()},dianzan:function(t){var n=this,e=this,i=t.id;this.$apiJs.setFabulousUser({news_id:e.new_id,to_user_id:t.user_id,comment_id:i}).then((function(t){n.getLoginCommentReply()}))},getLoginCommentReply:function(){var t=this,n=this;this.$apiJs.getLoginCommentReply({id:n.content_id}).then((function(e){"seeOther"!=e?(e.map((function(t){t.time=n.$commonJs.timeFormat.noYearFormat(t.create_time)})),t.plList=e):(t.userLogin=!1,t.getCommentReply())}))},getCommentReply:function(){var t=this,n=this;this.$apiJs.getCommentReply({id:n.content_id}).then((function(e){e&&(e.map((function(t){t.time=n.$commonJs.timeFormat.noYearFormat(t.create_time)})),t.plList=e)}))},getAllCommentByUser:function(){var t=this,n=this;this.$apiJs.getCommentReply({id:this.content_id}).then((function(e){e.length?(e.map((function(t){t.time=n.$commonJs.timeFormat.noYearFormat(t.create_time)})),t.plList=e):t.noPingLun=!0}))}},onLoad:function(n){t("log",n," at pages\\news\\plInfo.vue:137");this.new_id=n.new_id,this.author_id=n.author_id,this.content_id=n.content_id,this.getAllCommentByUser(n.new_id),i.getStorageSync("accesstoken")&&this.getLoginCommentReply()}};n.default=s}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["aa6b","common/runtime","common/vendor"]]]);