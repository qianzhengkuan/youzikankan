(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/package_activity/activityList"],{"26b7":function(t,i,e){"use strict";e.r(i);var n=e("47d1"),a=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=a.a},"47d1":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){e.e("template/activityList").then(function(){return resolve(e("e7f0"))}.bind(null,e)).catch(e.oe)},a={components:{activityList:n},data:function(){return{screenHeight:0,isLoading:!1,bottomDistinct:0,pageObj:{page:0,pagecount:0},noMore:!1,id:"",activityList:[]}},methods:{navTo:function(i,e){t.navigateTo({url:i+"?id="+e.id})},getShActivity:function(t){var i=this,e=this;this.$apiJs.getChamberActivityList({page:1}).then((function(n){var a=i.activityList,c=n.backlist;c.map((function(t){t.end_time=e.$commonJs.timeFormat.noYearFormat(t.end_time,1)})),i.pageObj.page=Number(n.page),i.pageObj.pagecount=n.pagecount,Number(n.page)==n.pagecount&&(i.noMore=!0),i.activityList=a.concat(c),t&&(i.isLoading=!1)}))},onPageScroll:function(i){var e=this,n=i.scrollTop;if(!this.isLoading&&!this.noMore){var a=t.createSelectorQuery().in(this);a.select("#listArea").boundingClientRect((function(t){var i=t.height;e.bottomDistinct>=i-e.screenHeight-n&&(e.isLoading=!0,e.getShActivity(1))})).exec()}}},onLoad:function(t){this.screenHeight=this.$YZKK.screenHeight,this.bottomDistinct=this.$YZKK.bottomDistinct,this.id=t.id,this.getShActivity(0)}};i.default=a}).call(this,e("543d")["default"])},"6c6b":function(t,i,e){"use strict";var n=e("a731"),a=e.n(n);a.a},a130:function(t,i,e){"use strict";(function(t){e("c233"),e("921b");n(e("66fd"));var i=n(e("d1a8"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},a731:function(t,i,e){},d1a8:function(t,i,e){"use strict";e.r(i);var n=e("deac"),a=e("26b7");for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);e("6c6b");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);i["default"]=r.exports},deac:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement;t._self._c},c=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}))}},[["a130","common/runtime","common/vendor"]]]);