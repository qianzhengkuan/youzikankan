(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/package_shanghui/shanghuiList"],{"0467":function(t,e,n){"use strict";n.r(e);var i=n("6d2e"),a=n("4942");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2473");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},2473:function(t,e,n){"use strict";var i=n("53c3"),a=n.n(i);a.a},3674:function(t,e,n){"use strict";(function(t){n("c233"),n("921b");i(n("66fd"));var e=i(n("0467"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},4942:function(t,e,n){"use strict";n.r(e);var i=n("c392"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"53c3":function(t,e,n){},"6d2e":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},c392:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){n.e("template/shanghuiList").then(function(){return resolve(n("a28a"))}.bind(null,n)).catch(n.oe)},a={components:{shanghui:i},data:function(){return{screenHeight:0,isLoading:!1,bottomDistinct:0,pageObj:{page:0,pagecount:0},noMore:!1,shList:[]}},onLoad:function(){this.screenHeight=this.$YZKK.screenHeight,this.bottomDistinct=this.$YZKK.bottomDistinct,t.getStorageSync("userInfo").username?this.getShangHuiLoginList():this.getShangHuiList()},methods:{navTo:function(t){this.$commonJs.navTo(t)},getShangHuiList:function(t){var e=this,n=this;this.$apiJs.getChamberList({page:this.pageObj.page+1}).then((function(i){var a=e.shList,o=i.backlist;o.map((function(t){t.img.length&&t.img?t.cover=t.img[0].url:t.cover="no",t.time=n.$commonJs.timeFormat.noYearFormat(t.create_time)})),e.pageObj.page=Number(i.page),e.pageObj.pagecount=i.pagecount,Number(i.page)==i.pagecount&&(e.noMore=!0),e.shList=a.concat(o),t&&(e.isLoading=!1)}))},getShangHuiLoginList:function(t){var e=this,n=this;this.$apiJs.getLoginChamberList({page:this.pageObj.page+1}).then((function(i){var a=e.shList,o=i.backlist;o.map((function(t){t.img.length&&t.img?t.cover=t.img[0].url:t.cover="no",t.time=n.$commonJs.timeFormat.noYearFormat(t.create_time)})),e.pageObj.page=Number(i.page),e.pageObj.pagecount=i.pagecount,Number(i.page)==i.pagecount&&(e.noMore=!0),e.shList=a.concat(o),t&&(e.isLoading=!1)}))},onPageScroll:function(e){var n=this,i=e.scrollTop;if(!this.isLoading&&!this.noMore){var a=t.createSelectorQuery().in(this);a.select("#listArea").boundingClientRect((function(e){var a=e.height;n.bottomDistinct>=a-n.screenHeight-i&&(n.isLoading=!0,t.getStorageSync("userInfo").username?n.getShangHuiLoginList(1):n.getShangHuiList(1))})).exec()}}}};e.default=a}).call(this,n("543d")["default"])}},[["3674","common/runtime","common/vendor"]]]);