(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["template/bigCover"],{"2e37":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},"4b51":function(t,e,n){"use strict";var a=n("8aa4"),r=n.n(a);r.a},"66c4":function(t,e,n){"use strict";n.r(e);var a=n("2e37"),r=n("e5fd");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("4b51");var o,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"227d5c61",null,!1,a["a"],o);e["default"]=i.exports},"8aa4":function(t,e,n){},e3f6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"big-cover",props:{coverData:{value:{},type:Object},hasBottom:{value:!0,type:Boolean}},created:function(t){},methods:{showErrorImage:function(){this.coverData.img[0].url=this.$errorImage},navTo:function(e,n){t.setStorageSync("isShare",1),t.navigateTo({url:e+"?id="+n.id+"&isShare=1"})}}};e.default=n}).call(this,n("543d")["default"])},e5fd:function(t,e,n){"use strict";n.r(e);var a=n("e3f6"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'template/bigCover-create-component',
    {
        'template/bigCover-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("66c4"))
        })
    },
    [['template/bigCover-create-component']]
]);
