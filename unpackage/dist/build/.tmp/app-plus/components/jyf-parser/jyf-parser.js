(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-parser/jyf-parser"],{"29f1":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"6fa9":function(t,e,n){"use strict";n.r(e);var i=n("29f1"),r=n("7cb2");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("8be1");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=c.exports},"7cb2":function(t,e,n){"use strict";n.r(e);var i=n("cb47"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"8be1":function(t,e,n){"use strict";var i=n("a6d1"),r=n.n(i);r.a},a6d1:function(t,e,n){},cb47:function(t,e,n){"use strict";(function(t,i){function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==i.return||i.return()}finally{if(s)throw r}}}}function o(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,c=function(){n.e("components/jyf-parser/libs/trees").then(function(){return resolve(n("299c"))}.bind(null,n)).catch(n.oe)},l={},u=n("a278");function f(t){for(var e=t.length,n=5381;e--;)n+=(n<<5)+t.charCodeAt(e);return n}var h={name:"parser",data:function(){return{scaleAm:"",showAm:"",imgs:[],nodes:[]}},components:{trees:c},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},compress:Number,useCache:Boolean,xml:Boolean,domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){var n=this;if(void 0!=t&&e&&(this[t]=e,e.includes("data:image"))){var i,r=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!r)return;i="_doc/parser_tmp/".concat(Date.now(),".").concat(r[1]);var o=new plus.nativeObj.Bitmap;o.loadBase64Data(e,(function(){o.save(i,{},(function(){o.clear(),n[t]=i}))}))}},s&&(this.document=new s(this)),this.html&&this.setContent(this.html)},beforeDestroy:function(){this.imgList.each((function(t){t&&t.includes("_doc")&&plus.io.resolveLocalFileSystemURL(t,(function(t){t.remove()}))})),clearInterval(this._timer)},methods:{setContent:function(e,n){var r,o,a=this;if(!e)return this.nodes=[];if("string"==typeof e){var s=new u(e,this);if(this.useCache){var c=f(e);l[c]?r=l[c]:(r=s.parse(),l[c]=r)}else r=s.parse();this.$emit("parse",r)}else if("[object Array]"==Object.prototype.toString.call(e)){if(e.length&&"Parser"!=e[0].PoweredBy){var h=new u(e,this);(function t(e){for(var n,i=0;n=e[i];i++)if("text"!=n.type){for(var r in n.attrs=n.attrs||{},n.attrs)"string"!=typeof n.attrs[r]&&(n.attrs[r]=n.attrs[r].toString());h.matchAttr(n,h),n.children&&n.children.length?(h.STACK.push(n),t(n.children),h.popNode(h.STACK.pop())):n.children=void 0}})(e)}r=e}else{if("object"!=typeof e||!e.nodes)return t("warn","错误的 html 类型："+typeof e," at components\\jyf-parser\\jyf-parser.vue:432");r=e.nodes,t("warn","错误的 html 类型：object 类型已废弃"," at components\\jyf-parser\\jyf-parser.vue:430")}this.nodes=n?this.nodes.concat(r):r,r.length&&r[0].title&&this.autosetTitle&&i.setNavigationBarTitle({title:r[0].title}),this.$nextTick((function(){a.imgList.length=0,a.videoContexts=[],a.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){i.createSelectorQuery().in(a).select("#top").boundingClientRect().exec((function(t){a.width=t[0].width,t[0].height==o&&(a.$emit("ready",t[0]),clearInterval(a._timer)),o=t[0].height}))}),350),this.showWithAnimation&&!n&&(this.showAm="animation:show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes,n="",i=0;t=e[i++];)if("text"==t.type)n+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)n+="\n";else{var r="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";r&&n&&"\n"!=n[n.length-1]&&(n+="\n"),t.children&&(n+=this.getText(t.children)),r&&"\n"!=n[n.length-1]?n+="\n":"td"!=t.name&&"th"!=t.name||(n+="\t")}return n},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});var n=function(n,r){i.createSelectorQuery().in(r||e).select(n).boundingClientRect().selectViewport().scrollOffset().exec((function(e){if(!e||!e[0])return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=e[1].scrollTop+e[0].top+(t.offset||0),i.pageScrollTo(t)}))};if(t.id){var o,a=r(this.anchors);try{for(a.s();!(o=a.n()).done;){var s=o.value;s.id==t.id&&n("#"+t.id+", ."+t.id,s.node)}}catch(c){a.e(c)}finally{a.f()}}else n("#top")},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function(t,e){if("string"==typeof t){var n=f(t);t=new u(t,this).parse(),l[n]=t}var i=[];(function t(e){for(var n,r=0;n=e[r++];)"img"==n.name&&n.attrs.src&&!i.includes(n.attrs.src)&&i.push(n.attrs.src),t(n.children||[])})(t),e&&(i=i.slice(0,e)),this._wait=(this._wait||[]).concat(i),this.imgs?this.imgs.length<15&&(this.imgs=this.imgs.concat(this._wait.splice(0,15-this.imgs.length))):this.imgs=this._wait.splice(0,15)},_load:function(t){this._wait.length&&this.$set(this.imgs,t.target.id,this._wait.shift())},_tap:function(t){},_touchstart:function(t){},_touchmove:function(t){}}};e.default=h}).call(this,n("0de9")["default"],n("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser/jyf-parser-create-component',
    {
        'components/jyf-parser/jyf-parser-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("6fa9"))
        })
    },
    [['components/jyf-parser/jyf-parser-create-component']]
]);