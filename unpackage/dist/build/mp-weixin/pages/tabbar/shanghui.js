(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/shanghui"],{"0579":function(t,n,e){},4452:function(t,n,e){"use strict";e.r(n);var i=e("88d2"),o=e("7a37");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("bd61");var c,u=e("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3536fa46",null,!1,i["a"],c);n["default"]=s.exports},"7a37":function(t,n,e){"use strict";e.r(n);var i=e("cd46"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"88d2":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},bd61:function(t,n,e){"use strict";var i=e("0579"),o=e.n(i);o.a},cd46:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){e.e("template/textNew").then(function(){return resolve(e("60f2"))}.bind(null,e)).catch(e.oe)},o=function(){e.e("template/newsList").then(function(){return resolve(e("07e6"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("template/bigCover").then(function(){return resolve(e("66c4"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("template/three").then(function(){return resolve(e("90a2"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("template/hasConNew").then(function(){return resolve(e("3a6b"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("template/panel-top").then(function(){return resolve(e("ce5c"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("template/activityList").then(function(){return resolve(e("e7f0"))}.bind(null,e)).catch(e.oe)},l={components:{panelTop:s,textNew:i,newList:o,bigCover:a,threeNew:c,hasConNew:u,activityList:r},data:function(){return{isScroll:!1,newsData:[],activityList:[]}},onLoad:function(){this.id=1,this.getShangHuiNewsList(),this.getShActivity()},onPageScroll:function(t){t.scrollTop>100?this.isScroll=!0:this.isScroll=!1},methods:{navTo:function(t){var n=this;"shanghuiSettled"==t?this.$commonJs.isLogin().then((function(e){n.$apiJs.getChamberJoin({}).then((function(e){console.log(e),1==e.status?n.$commonJs.navTo("../package_shanghui/mySH"):0==e.status?n.$commonJs.navTo(t+"?status=inAuth"):n.$commonJs.navTo(t)}))})):this.$commonJs.navTo(t)},getShangHuiNewsList:function(){var t=this,n=this;this.$apiJs.getChamberNewsList({page:1}).then((function(e){var i=e.backlist;i.map((function(t){t.img.length&&t.img?t.cover=t.img[0].url:(t.img="no",t.cover="no"),t.time=n.$commonJs.timeFormat.noYearFormat(t.create_time)})),t.newsData=i,console.log(t.newsData)}))},getShActivity:function(){var t=this,n=this;this.$apiJs.getChamberActivityList({page:1}).then((function(e){var i=e.backlist;i.map((function(t){t.end_time=n.$commonJs.timeFormat.noYearFormat(t.end_time,1)})),t.activityList=i}))}}};n.default=l},dce4:function(t,n,e){"use strict";(function(t){e("c233"),e("921b");i(e("66fd"));var n=i(e("4452"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["dce4","common/runtime","common/vendor"]]]);