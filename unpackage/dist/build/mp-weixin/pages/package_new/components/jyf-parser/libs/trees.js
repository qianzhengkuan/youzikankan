(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/package_new/components/jyf-parser/libs/trees"],{"313e":function(t,e,r){"use strict";r.r(e);var i=r("c22b"),s=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"9d18":function(t,e,r){},c22b:function(t,e,r){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var s=function(){Promise.resolve().then(function(){return resolve(r("f39e"))}.bind(null,r)).catch(r.oe)},a=r("7af8").errorImg,n={components:{trees:s},name:"trees",data:function(){return{controls:[],placeholder:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',errorImg:a,loadVideo:!0}},props:{nodes:Array,lazyLoad:Boolean,loading:String},mounted:function(){var t=this.$parent;while("parser"!=t.$options.name){if(t.top){t=t.top;break}t=t.$parent}this.top=t;for(var e,r=this.nodes.length;e=this.nodes[--r];)if(!e.c)if("img"==e.name)t.imgList.setItem(e.attrs.i,e.attrs.src);else if("video"==e.name||"audio"==e.name){var s;"video"==e.name?s=i.createVideoContext(e.attrs.id,this):this.$refs[e.attrs.id]&&(s=this.$refs[e.attrs.id][0]),s&&(s.id=e.attrs.id,t.videoContexts.push(s))}},methods:{play:function(t){var e=this.top.videoContexts;if(e.length>1&&this.top.autopause)for(var r=e.length;r--;)e[r].id!=t.currentTarget.dataset.id&&e[r].pause()},imgtap:function(e){var r=e.currentTarget.dataset.attrs;if(!r.ignore){var s=!0,a={id:e.target.id,src:r.src,ignore:function(){return s=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(a),this.top.$emit("imgtap",a),s){var n=this.top.imgList,o=n[r.i]?parseInt(r.i):(n=[r.src],0);i.previewImage({current:o,urls:n})}}},loadImg:function(t){var e=t.currentTarget.dataset.i;this.lazyLoad&&!this.controls[e]?this.$set(this.controls,e,1):this.loading&&2!=this.controls[e]&&this.$set(this.controls,e,2)},linkpress:function(e){var r=!0,s=e.currentTarget.dataset.attrs;if(s.ignore=function(){return r=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(s),this.top.$emit("linkpress",s),r){if(s["app-id"])return i.navigateToMiniProgram({appId:s["app-id"],path:s.path});s.href&&("#"==s.href[0]?this.top.useAnchor&&this.top.navigateTo({id:s.href.substring(1)}):0==s.href.indexOf("http")||0==s.href.indexOf("//")?i.setClipboardData({data:s.href,success:function(){return i.showToast({title:"链接已复制"})}}):i.navigateTo({url:s.href,fail:function(){i.switchTab({url:s.href})}}))}},error:function(t){var e=t.currentTarget,r=e.dataset.source,i=e.dataset.i;if("video"==r||"audio"==r){var s=this.controls[i]?this.controls[i].i+1:1;s<this.nodes[i].attrs.source.length&&this.$set(this.controls,i,s),t.detail.__args__&&(t.detail=t.detail.__args__[0])}else a&&"img"==r&&(this.top.imgList.setItem(e.dataset.index,a),this.$set(this.controls,i,3));this.top&&this.top.$emit("error",{source:r,target:e,errMsg:t.detail.errMsg})},_loadVideo:function(t){this.$set(this.controls,t.target.dataset.i,0)}}};e.default=n}).call(this,r("c8ba"),r("543d")["default"])},d3af:function(t,e,r){"use strict";var i,s=function(){var t=this,e=t.$createElement;t._self._c},a=[];r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))},d3ef:function(t,e,r){"use strict";var i=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=i},f39e:function(t,e,r){"use strict";r.r(e);var i=r("d3af"),s=r("313e");for(var a in s)"default"!==a&&function(t){r.d(e,t,(function(){return s[t]}))}(a);r("fe55");var n,o=r("f0c5"),c=r("d3ef"),u=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},fe55:function(t,e,r){"use strict";var i=r("9d18"),s=r.n(i);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/package_new/components/jyf-parser/libs/trees-create-component',
    {
        'pages/package_new/components/jyf-parser/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f39e"))
        })
    },
    [['pages/package_new/components/jyf-parser/libs/trees-create-component']]
]);
