(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shanghui/shanghuiInfo"],{3756:function(e,t,n){},"3a03":function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},"3f85":function(e,t,n){"use strict";(function(e){n("ff80"),n("921b");o(n("66fd"));var t=o(n("7438"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},7438:function(e,t,n){"use strict";n.r(t);var o=n("3a03"),a=n("a387");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("c6f0");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=r.exports},a387:function(e,t,n){"use strict";n.r(t);var o=n("dee0"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},c6f0:function(e,t,n){"use strict";var o=n("3756"),a=n.n(o);a.a},dee0:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){n.e("pages/template/panel-top").then(function(){return resolve(n("f97f"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("pages/template/textNew").then(function(){return resolve(n("f976"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("pages/template/newsList").then(function(){return resolve(n("931b"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("pages/template/bigCover").then(function(){return resolve(n("314b"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("pages/template/three").then(function(){return resolve(n("2d4f"))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("common/vendor"),n.e("pages/template/hasConNew")]).then(function(){return resolve(n("276b"))}.bind(null,n)).catch(n.oe)},h={components:{panelTop:a,textNew:i,newList:s,bigCover:u,threeNew:r,hasConNew:c},data:function(){return{isMySh:!1,isSelect:!1,newsData:[],shData:"",peopleList:[],bottomShow:!1}},onLoad:function(e){this.id=e.id,"select"==e.type&&(this.isSelect=!0),e.isMySh&&!e.isFail&&(this.isMySh=!0),this.getShInfo(),this.getShangHuiNewsList()},methods:{showErrorImage:function(e,t){0==e?this.shData.images[t].url=this.$errorImage:1==e?this.shData.img=this.$errorImage:this.peopleList[t].image=this.$errorImage},backToForm:function(t){this.$commonJs.getBeforePage(1).chooseShId=this.shData.id,this.$commonJs.getBeforePage(1).chooseShName=this.shData.name,this.$commonJs.getBeforePage(1).chooseShImage={backgroundImage:"url("+this.shData.images[0].url+")"},e.navigateBack({delta:2})},navTo:function(e){this.$commonJs.navTo(e)},getShInfo:function(){var e=this;this.$apiJs.getChamberDetail({id:this.id}).then((function(t){t?(t.create_time=t.create_time.split("-")[0],e.peopleList=t.chamber_user,e.shData=t):o("log","商会信息加载--null"," at pages\\shanghui\\shanghuiInfo.vue:140")}))},getShangHuiNewsList:function(){var e=this,t=this;this.$apiJs.getChamberNewsList({page:1}).then((function(n){var a=n.backlist;a.map((function(e){e.img.length&&e.img?e.cover=e.img[0].url:(e.img="no",e.cover="no"),e.time=t.$commonJs.timeFormat.noYearFormat(e.create_time)})),e.newsData=a,o("log",e.newsData," at pages\\shanghui\\shanghuiInfo.vue:162")}))}},onShow:function(){this.bottomShow=!0},onHide:function(){this.bottomShow=!1}};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["3f85","common/runtime","common/vendor"]]]);