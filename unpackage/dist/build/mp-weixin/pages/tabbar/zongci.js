(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/zongci"],{"004a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){n.e("template/textNew").then(function(){return resolve(n("60f2"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("template/newsList").then(function(){return resolve(n("07e6"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("template/bigCover").then(function(){return resolve(n("66c4"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("template/three").then(function(){return resolve(n("90a2"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("template/hasConNew").then(function(){return resolve(n("3a6b"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("template/panel-top").then(function(){return resolve(n("ce5c"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("pages/tabbar/template/four-list").then(function(){return resolve(n("3d57"))}.bind(null,n)).catch(n.oe)},l={components:{panelTop:r,textNew:o,newList:i,bigCover:a,threeNew:c,hasConNew:s,fourList:u},data:function(){return{user:{address:""},isScroll:!1,fourData:[],hotTwo:[],threeHot:[],newsData:[],links:[{icon:"../../static/images/icon/simiao.png",text:"寺庙",url:"../package_zongci/zongciList"},{icon:"../../static/images/icon/jianshe.png",text:"寺庙建设",url:"../package_zongci/createZC"},{icon:"../../static/images/icon/news.png",text:"寺庙资讯",url:"../package_zongci/newList?id=1"}],coverData:{zc_title:"标题标题标题标题标题标题标题标题标题标题",zc_content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",cover:"../../static/images/shuijiao.jpg"},userLogin:!0,stateFlag:!1}},mounted:function(){var t=this;this.getHotZongCiList(),this.getHotZongCiNewsList(),this.stateFlag=!1,this.getZongCiList(),this.$commonJs.getCity().then((function(e){console.log("定位城市--"+JSON.stringify(e)),t.user.address=e.address.city}))},onShow:function(){this.stateFlag||(this.getState(),this.stateFlag=!0)},onPageScroll:function(t){t.scrollTop>150?this.isScroll=!0:this.isScroll=!1},methods:{getZongCiList:function(){var t=this;this.$apiJs.zongciList({page:1}).then((function(e){var n=e.backlist;t.fourData=n}))},showErrorImage:function(t){this.threeHot[t].cover=this.$errorImage},getState:function(){var t=this;this.$apiJs.getTempleJoinStatus().then((function(e){"seeOther"!=e?1==e.status?(t.links[1].text="我的寺庙",t.links[1].url="myZC?id="+e.id):-1==e.status&&(t.links[1].url="createZC?status=-1"):t.userLogin=!1}))},getHotZongCiList:function(){var t=this;this.$apiJs.getTemplePopularList({page:1}).then((function(e){var n=e.backlist;n.map((function(t){t.cover=t.img[0].url||"",t.text=t.name})),t.threeHot=n}))},getHotZongCiNewsList:function(){var t=this,e=this;this.$apiJs.getTempleNewsPopularList({page:1}).then((function(n){var o=n.backlist;console.log(o),o.map((function(t){t.img?t.cover=t.img[0].url:t.cover="no",t.time=e.$commonJs.timeFormat.noYearFormat(t.create_time),t.text=t.name})),console.log(o),t.newsData=o,t.hotTwo=o}))},changeAddress:function(){},navTo:function(t){console.log(t),"../package_zongci/createZC"==t?this.userLogin?this.$commonJs.navTo(t):this.$commonJs.toLoginPage():this.$commonJs.navTo(t)}}};e.default=l},"03a1":function(t,e,n){"use strict";(function(t){n("c233"),n("921b");o(n("66fd"));var e=o(n("c562"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"08f9":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"26c9":function(t,e,n){},"79c6":function(t,e,n){"use strict";n.r(e);var o=n("004a"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"831a":function(t,e,n){"use strict";var o=n("26c9"),i=n.n(o);i.a},c562:function(t,e,n){"use strict";n.r(e);var o=n("08f9"),i=n("79c6");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("831a");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=r.exports}},[["03a1","common/runtime","common/vendor"]]]);