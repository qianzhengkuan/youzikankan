(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/package_zongci/zongCiPeoList"],{"1f1b":function(t,e,n){"use strict";n.r(e);var o=n("7039"),i=n("e66d");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);var a,u=n("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=r.exports},"5eb7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){n.e("pages/package_zongci/template/zc-people").then(function(){return resolve(n("333d"))}.bind(null,n)).catch(n.oe)},i={components:{zcPeople:o},data:function(){return{screenHeight:0,isLoading:!1,bottomDistinct:0,pageObj:{page:0,pagecount:0},noMore:!1,shList:[]}},onLoad:function(t){this.screenHeight=this.$YZKK.screenHeight,this.bottomDistinct=this.$YZKK.bottomDistinct,this.getChamberUser(t.id,0)},methods:{navTo:function(t){this.$commonJs.navTo(t)},getChamberUser:function(t,e){var n=this;this.$apiJs.getChamberUser({id:t}).then((function(t){n.shList=t}))}}};e.default=i},7039:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}))},a49f:function(t,e,n){"use strict";(function(t){n("c233"),n("921b");o(n("66fd"));var e=o(n("1f1b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e66d:function(t,e,n){"use strict";n.r(e);var o=n("5eb7"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a}},[["a49f","common/runtime","common/vendor"]]]);