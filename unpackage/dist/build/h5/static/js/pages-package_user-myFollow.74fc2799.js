(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-package_user-myFollow"],{"1f56":function(t,n,i){"use strict";i.r(n);var e=i("92a9"),o=i("c213");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("69ef");var s,r=i("f0c5"),l=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"7189a3e9",null,!1,e["a"],s);n["default"]=l.exports},"2bfe":function(t,n,i){var e=i("cd11");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("718f9912",e,!0,{sourceMap:!1,shadowMode:!1})},"69ef":function(t,n,i){"use strict";var e=i("2bfe"),o=i.n(e);o.a},"92a9":function(t,n,i){"use strict";var e,o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"info-list"},[t._l(t.myFollowList,(function(n,e){return i("v-uni-view",{key:e,staticClass:"info-item bd-bottom flex-box flex-y-center"},[i("v-uni-image",{attrs:{src:n.image,mode:""},on:{error:function(n){arguments[0]=n=t.$handleEvent(n),t.showErrorImage(e)}}}),i("v-uni-view",{staticClass:"flex-1 i-l-con flex-box flex-column flex-left-right-between"},[i("v-uni-view",{staticClass:"flex-box flex-y-center"},[i("v-uni-view",{staticClass:"name flex-1"},[t._v(t._s(n.username))]),i("v-uni-button",{staticClass:"follow-btn yzkk-submitBtn",attrs:{"hover-class":"yzkk-btn-hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setFollow(n)}}},[t._v("取消关注")])],1)],1)],1)})),t.myFollowList.length?t._e():i("noData")],2)],1)},a=[];i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}))},c213:function(t,n,i){"use strict";i.r(n);var e=i("ccca"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},ccca:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{screenHeight:0,isLoading:!1,bottomDistinct:0,pageObj:{page:0,pagecount:0},noMore:!1,noData:!1,isScroll:!1,myFollowList:[]}},methods:{showErrorImage:function(t){this.myFollowList[t].image=this.$errorImage},setFollow:function(t){var n=this;this.$commonJs.isLogin().then((function(i){n.$apiJs.setFollow({author_id:t.id}).then((function(t){n.getAllFans()}))}))},getAllFans:function(){var t=this;this.$apiJs.myFollow({page:this.pageObj.page+1}).then((function(n){var i=n.backlist;t.myFollowList=i}))}},mounted:function(){this.getAllFans()}};n.default=e},cd11:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.info-list .info-item[data-v-7189a3e9]{height:%?120?%;width:100%;box-sizing:border-box;padding:%?18?% %?30?%}.info-list .info-item uni-image[data-v-7189a3e9]{width:%?84?%;height:%?84?%;border-radius:50%;margin-right:%?20?%}.info-list .info-item .i-l-con[data-v-7189a3e9]{font-size:%?28?%}.info-list .info-item .i-l-con .name[data-v-7189a3e9]{font-weight:800;margin-bottom:%?10?%}.info-list .info-item .i-l-con .con[data-v-7189a3e9]{color:#999;font-size:%?22?%}.info-list .info-item .i-l-con .follow-btn[data-v-7189a3e9]{width:auto;margin:0;font-size:%?24?%;line-height:%?60?%;height:%?60?%}.info-list .info-item .time[data-v-7189a3e9]{font-size:%?22?%}',""]),t.exports=n}}]);