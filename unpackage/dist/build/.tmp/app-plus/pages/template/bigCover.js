(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/bigCover"],{"26f8":function(t,e,n){"use strict";n.r(e);var a=n("8373"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"314b":function(t,e,n){"use strict";n.r(e);var a=n("8b00"),r=n("26f8");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("e389");var o,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=i.exports},"3e38":function(t,e,n){},8373:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"big-cover",props:{coverData:{value:{},type:Object},hasBottom:{value:!0,type:Boolean}},created:function(t){},methods:{showErrorImage:function(){this.coverData.img[0].url=this.$errorImage},navTo:function(e,n){t.setStorageSync("isShare",1),t.navigateTo({url:e+"?id="+n.id+"&isShare=1"})}}};e.default=n}).call(this,n("6e42")["default"])},"8b00":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},e389:function(t,e,n){"use strict";var a=n("3e38"),r=n.n(a);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/bigCover-create-component',
    {
        'pages/template/bigCover-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("314b"))
        })
    },
    [['pages/template/bigCover-create-component']]
]);
