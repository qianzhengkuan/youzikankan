(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/package_activity/activityJoin"],{2356:function(e,t,n){"use strict";var a=n("2e3f"),i=n.n(a);i.a},"2e3f":function(e,t,n){},"5d67":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},d198:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{formList:[{label:"姓名",val:"",name:"real_name",type:"text",length:15},{label:"手机号",val:"",name:"phone",type:"number",length:11},{label:"所属商会",val:"",name:"company",type:"text",length:20},{label:"职务",val:"",name:"job",type:"text",length:20}]}},methods:{joinNow:function(){var t=this,n=[{name:"real_name",type:"required",errmsg:"请输入您的姓名"},{name:"phone",type:"required",errmsg:"请输入您的手机号"},{name:"phone",type:"phone",errmsg:"请输入正确的手机号"},{name:"company",type:"required",errmsg:"请输入所属商会"},{name:"job",type:"required",errmsg:"请输入您的职务"}],a={};this.formList.forEach((function(e){a[e.name]=e.val}));var i=this.$validate.validate(a,n);if(!i.isOk)return this.$commonJs.uniMsg(i.errmsg),!1;a.activity_id=this.id,this.$apiJs.activityEnroll(a).then((function(n){n&&(t.$commonJs.uniMsg("报名成功","success"),setTimeout((function(){e.navigateTo({url:"../package_user/myActivity?tab=0"})}),500))}))},getState:function(e){}},onLoad:function(e){this.id=e.id,this.getState(e.id)}};t.default=n}).call(this,n("543d")["default"])},e3ba:function(e,t,n){"use strict";n.r(t);var a=n("5d67"),i=n("f994");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("2356");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=c.exports},f994:function(e,t,n){"use strict";n.r(t);var a=n("d198"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},fb64:function(e,t,n){"use strict";(function(e){n("c233"),n("921b");a(n("66fd"));var t=a(n("e3ba"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["fb64","common/runtime","common/vendor"]]]);