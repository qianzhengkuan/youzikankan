(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-package_shanghui-peopleList"],{"0609":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.list-wrap .item[data-v-2d68f802]{height:%?150?%;padding:%?34?%;box-sizing:border-box;background-color:#fff}.list-wrap .item uni-image[data-v-2d68f802]{width:%?94?%;height:%?94?%;margin-right:%?20?%;border-radius:50%}.list-wrap .item .name[data-v-2d68f802]{font-weight:800;font-size:%?32?%}.list-wrap .item .gray-text[data-v-2d68f802]{font-size:%?26?%;color:#999}.list-wrap .item .bottom-text[data-v-2d68f802]{width:%?400?%}',""]),t.exports=e},"07f7":function(t,e,n){"use strict";n.r(e);var a=n("7e53"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"0c08":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"list-wrap"},[t._l(t.shList,(function(t,e){return n("v-uni-view",{key:e},[n("shanghui",{attrs:{isPeople:!0,shData:t}})],1)})),t.noMore?n("noMore"):t._e()],2)],1)},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},1131:function(t,e,n){"use strict";(function(t){n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"shanghui",props:{shData:{value:{}},isPeople:{value:!1,type:Boolean},isSh:{value:!1,type:Boolean},url:{value:"",type:String}},created:function(t){},methods:{showErrorImage:function(){t.log("s"),this.shData.image=this.$errorImage,this.shData.img=this.$errorImage},navTo:function(t,e){uni.navigateTo({url:t})},getShActivity:function(){var t=this,e=this;this.$apiJs.getLoginChamberList({page:1}).then((function(n){var a=n.backlist;a.map((function(t){t.end_time=e.$commonJs.timeFormat.noYearFormat(t.end_time,1)})),t.activityList=a}))}}};e.default=a}).call(this,n("5a52")["default"])},"3e9e":function(t,e,n){"use strict";var a=n("996c"),i=n.n(a);i.a},"7e53":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("de64")),s={components:{shanghui:i.default},data:function(){return{screenHeight:0,isLoading:!1,bottomDistinct:0,pageObj:{page:0,pagecount:0},noMore:!1,shList:[]}},onLoad:function(t){this.screenHeight=this.$YZKK.screenHeight,this.bottomDistinct=this.$YZKK.bottomDistinct,this.getChamberUser(t.id,0)},methods:{navTo:function(t){this.$commonJs.navTo(t)},getChamberUser:function(t,e){var n=this;this.$apiJs.getChamberUser({id:t}).then((function(t){n.shList=t}))}}};e.default=s},"996c":function(t,e,n){var a=n("0609");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7606a3f2",a,!0,{sourceMap:!1,shadowMode:!1})},c39b:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"list-wrap"},[n("v-uni-view",{staticClass:"item flex-box flex-y-center jiantouRight lineJianTou bd-bottom",attrs:{"hover-class":"yzkk-href-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo(t.isSh?"shanghuiInfo"+(1==t.shData.status||2==t.shData.status?"?isMySh=1&id="+t.shData.id:"?id="+t.shData.id):"",t.shData)}}},[n("v-uni-image",{attrs:{src:t.isPeople?t.shData.image:t.shData.img,mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.showErrorImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"flex-1 flex-box flex-column"},[n("v-uni-view",{staticClass:"name text-over"},[t._v(t._s(t.isPeople?t.shData.username:t.shData.name))]),t.isPeople?n("v-uni-text",{staticClass:"bottom-text gray-text text-over"},[t._v(t._s(t.shData.grade))]):t._e(),t.isSh?n("v-uni-text",{staticClass:"bottom-text gray-text text-over"},[t._v("成员"+t._s(t.shData.user_number)+"人/"+t._s(t.shData.address))]):t._e()],1)],1)],1)},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},de64:function(t,e,n){"use strict";n.r(e);var a=n("c39b"),i=n("f17c");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("3e9e");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"2d68f802",null,!1,a["a"],r);e["default"]=u.exports},e190:function(t,e,n){"use strict";n.r(e);var a=n("0c08"),i=n("07f7");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"306ebe19",null,!1,a["a"],r);e["default"]=u.exports},f17c:function(t,e,n){"use strict";n.r(e);var a=n("1131"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a}}]);