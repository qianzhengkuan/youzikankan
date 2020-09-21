(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["template/newsList"],{"07e6":function(e,t,n){"use strict";n.r(t);var a=n("ac32"),r=n("1c68");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("c4b5");var c,o=n("f0c5"),i=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5d8874c0",null,!1,a["a"],c);t["default"]=i.exports},"1c68":function(e,t,n){"use strict";n.r(t);var a=n("56f6"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"56f6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"news-list",props:{isReverse:{value:!1,type:Boolean},bgColor:{value:"",type:String},newsData:{value:{}},textOver2:{value:!1,type:Boolean},url:{value:"",type:String}},created:function(){},methods:{navTo:function(t,n){e.setStorageSync("isShare",1),e.navigateTo({url:t+"?id="+n.id+"&isShare=1"})},showErrorImage:function(){this.newsData.cover=this.$errorImage}}};t.default=n}).call(this,n("543d")["default"])},"6eaa":function(e,t,n){},ac32:function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}))},c4b5:function(e,t,n){"use strict";var a=n("6eaa"),r=n.n(a);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'template/newsList-create-component',
    {
        'template/newsList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("07e6"))
        })
    },
    [['template/newsList-create-component']]
]);
