(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-package_user-setting"],{"000e":function(t,n,e){var a=e("67e0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("00158cc8",a,!0,{sourceMap:!1,shadowMode:!1})},"25c4":function(t,n,e){"use strict";e.r(n);var a=e("82c5"),o=e("ef78");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("4746");var i,c=e("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"20b7a990",null,!1,a["a"],i);n["default"]=r.exports},4746:function(t,n,e){"use strict";var a=e("000e"),o=e.n(a);o.a},"67e0":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */uni-page-body[data-v-20b7a990],\r\n.container[data-v-20b7a990]{background-color:#f3f3f5}.set-item[data-v-20b7a990]{background-color:#fff;padding:0 %?30?%;height:%?98?%;line-height:%?98?%;box-sizing:border-box}.set-item uni-text[data-v-20b7a990]{font-size:%?30?%;color:#a7a7a7}.set-item .label[data-v-20b7a990]{color:#000}.lineJianTou[data-v-20b7a990]::after{right:%?45?%}body.?%PAGE?%[data-v-20b7a990]{background-color:#f3f3f5}',""]),t.exports=n},"82c5":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container flex-box flex-column"},[e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"flex-box set-item bd-bottom jiantouRight lineJianTou",attrs:{"hover-class":"yzkk-href-hover"}},[e("v-uni-view",{staticClass:"flex-1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("editUserInfo")}}},[e("v-uni-text",{staticClass:"label"},[t._v("个人资料")])],1)],1),e("v-uni-view",{staticClass:"flex-box set-item bd-bottom jiantouRight lineJianTou uni-common-mb",attrs:{"hover-class":"yzkk-href-hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("editPsdOrPhone?type=1&hasPsd="+t.hasPsd)}}},[e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-text",{staticClass:"label"},[t._v(t._s(t.hasPsd?"修改密码":"设置密码"))])],1)],1)],1),e("v-uni-view",{staticClass:"yzkk-submitBtn",attrs:{"hover-class":"yzkk-btn-hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.exit()}}},[t._v("退出")])],1)},s=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}))},b707:function(t,n,e){"use strict";e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{openInfoFlag:!1,phone:"",hasPsd:!1,system:{version:""}}},methods:{openInfo:function(t){this.openInfoFlag=t.target.value},exit:function(){uni.clearStorageSync("accesstoken"),uni.setStorageSync("userInfo",{defaultHeadImg:"/static/images/icon/defLogo.png"}),this.$commonJs.getBeforePage().user={defaultHeadImg:"/static/images/icon/defLogo.png"},this.$store.dispatch("clearUserInfoObj",""),uni.navigateBack({delta:1})},navTo:function(t){var n=this,e=this;this.$commonJs.isLogin().then((function(a){a&&("editUserInfo"==t?n.$commonJs.navTo(t):uni.showModal({title:"修改登陆密码",content:"将给手机"+n.phone+"发送验证码",confirmColor:"#C34944",success:function(n){n.confirm&&e.getCode(t)}}))}))},checkNew:function(){},getCode:function(t){var n=this;this.$apiJs.getCode({phone:this.$store.state.userInfo.phone}).then((function(e){e&&n.$commonJs.navTo(t)}))},hasPsdFlag:function(){this.$store.state.userInfo.pwd_type&&(this.hasPsd=!0)}},onLoad:function(t){var n=uni.getStorageSync("userInfo").phone;this.phone=n.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),this.hasPsdFlag()}};n.default=a},ef78:function(t,n,e){"use strict";e.r(n);var a=e("b707"),o=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=o.a}}]);