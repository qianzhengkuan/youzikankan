(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"1b4f":function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},"43f1":function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){Promise.all([t.e("common/vendor"),t.e("pages/template/yzkk-image")]).then(function(){return resolve(t("478e"))}.bind(null,t)).catch(t.oe)},o={components:{yzkkImage:a},data:function(){return{user:{defaultHeadImg:"/static/images/icon/defLogo.png"},linksArr:[{title:"常用功能",link:[{icon:this.$images+"/images/icon/huodogn.png",text:"商会活动",url:"/pages/activity/activityList"},{icon:this.$images+"/images/icon/zaixian.png",text:"发布资讯",url:""},{icon:this.$images+"/images/icon/fabu.png",text:"发布活动",url:""},{icon:this.$images+"/images/icon/shanghuipeo.png",text:"我的商会",url:"/pages/shanghui/mySH"}]},{title:"我的圈子",link:[{icon:this.$images+"/images/icon/huiyuan.png",text:"我的粉丝",url:"/pages/my/myFans"},{icon:this.$images+"/images/icon/huiyaunfuwu.png",text:"我的关注",url:"/pages/my/myFollow"},{icon:this.$images+"/images/icon/shoucang-02.png",text:"我的收藏",url:"/pages/my/myShouCang"}]},{title:"更多功能",link:[{icon:this.$images+"/images/icon/huodongbaoming.png",text:"活动",url:"/pages/my/myActivity"},{icon:this.$images+"/images/icon/shezhi.png",text:"系统设置",url:"/pages/my/setting"}]}]}},onShow:function(){n.getStorageSync("userInfo").username?this.getUserInfo():this.user={defaultHeadImg:"/static/images/icon/defLogo.png"}},methods:{showErrorImage:function(){i("log","cuo"," at pages\\my\\my.vue:140"),this.user.image=this.$errorImage},navTo:function(n){var e=this;this.$commonJs.isLogin().then((function(t){t&&(n?e.$commonJs.navTo(n):e.$commonJs.uniMsg("等待程序员小宇宙爆发吧！"))}))},guanzhuFn:function(){i("log","右上角关注"," at pages\\my\\my.vue:155")},shareOr:function(){i("log","右上角分享"," at pages\\my\\my.vue:158")},getUserInfo:function(){var e=this,t=this;this.$apiJs.getUser({}).then((function(a){a&&(i("log",a," at pages\\my\\my.vue:164"),n.setStorageSync("userInfo",a),t.$store.dispatch("setUserInfoObj",a),e.user=a)}))}}};e.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},"44f4":function(n,e,t){"use strict";var i=t("aa02"),a=t.n(i);a.a},"96b5":function(n,e,t){"use strict";(function(n){t("ff80"),t("921b");i(t("66fd"));var e=i(t("b591"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},aa02:function(n,e,t){},b591:function(n,e,t){"use strict";t.r(e);var i=t("1b4f"),a=t("e57f");for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);t("44f4");var s,u=t("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},e57f:function(n,e,t){"use strict";t.r(e);var i=t("43f1"),a=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=a.a}},[["96b5","common/runtime","common/vendor"]]]);