(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/newsList"],{"4c37":function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}))},"4f7e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"news-list",props:{isReverse:{value:!1,type:Boolean},bgColor:{value:"",type:String},newsData:{value:{}},textOver2:{value:!1,type:Boolean},url:{value:"",type:String}},created:function(){},methods:{navTo:function(t,n){e.setStorageSync("isShare",1),e.navigateTo({url:t+"?id="+n.id+"&isShare=1"})},showErrorImage:function(){this.newsData.cover=this.$errorImage}}};t.default=n}).call(this,n("6e42")["default"])},"71cd":function(e,t,n){"use strict";var a=n("c7ee"),r=n.n(a);r.a},"887a":function(e,t,n){"use strict";n.r(t);var a=n("4f7e"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"931b":function(e,t,n){"use strict";n.r(t);var a=n("4c37"),r=n("887a");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("71cd");var o,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=i.exports},c7ee:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/newsList-create-component',
    {
        'pages/template/newsList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("931b"))
        })
    },
    [['pages/template/newsList-create-component']]
]);
