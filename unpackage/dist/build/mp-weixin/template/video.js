(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["template/video"],{1620:function(t,n,e){"use strict";e.r(n);var o=e("b2e9"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},4041:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}))},5694:function(t,n,e){"use strict";var o=e("89c3"),i=e.n(o);i.a},"89c3":function(t,n,e){},b2e9:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"yzkk-video",props:{videoInfo:{value:{},type:Object}},data:function(){return{status:0,showPlay:!0}},mounted:function(){console.log(this.videoInfo),this.videoCtx=t.createVideoContext("video_".concat(this.videoInfo.id),this)},methods:{showPlayBtn:function(){this.showPlay=!0},videoError:function(){t.showToast({title:"视频出错",icon:"none"})},play:function(){this.videoCtx.play(),this.status=1;var t=this;setTimeout((function(){t.showPlay=!1}),500),this.$emit("stopOther")},videoPause:function(){this.status=0,this.videoCtx.pause(),this.showPlay=!0}}};n.default=e}).call(this,e("543d")["default"])},bb23:function(t,n,e){"use strict";e.r(n);var o=e("4041"),i=e("1620");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("5694");var a,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"5350166a",null,!1,o["a"],a);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'template/video-create-component',
    {
        'template/video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bb23"))
        })
    },
    [['template/video-create-component']]
]);
