(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zongci/createZC"],{"12fd":function(e,t,n){"use strict";n.r(t);var i=n("a4f1"),a=n("f608");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("a6b4");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=o.exports},"3f53":function(e,t,n){"use strict";(function(e){n("ff80"),n("921b");i(n("66fd"));var t=i(n("12fd"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},8519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{InAudit:!1,errorAudit:!1,Audit:!1,isCheck:"0",formList:[{label:"姓名",val:"",name:"real_name",type:"text",length:15},{label:"手机号",val:"",name:"phone",type:"number",length:11},{label:"所在地区",val:"",name:"address",type:"text",length:20},{label:"身份证号",val:"",name:"id_number",type:"idCard",length:20},{label:"寺庙名称",val:"",name:"name",type:"text",length:20}],isRealAuth:!1,positive:"",reverseImg:"",yingye:"",id_images:""}},methods:{resetReq:function(){this.errorAudit=!1},checkBox:function(e){Number(this.isCheck)?this.isCheck="0":this.isCheck="1"},navTo:function(e){this.$commonJs.navTo(e)},joinNow:function(){var e=this,t=[{name:"real_name",type:"required",errmsg:"请输入真实姓名"},{name:"phone",type:"required",errmsg:"请输入您的手机号"},{name:"phone",type:"phone",errmsg:"请输入正确的手机号"},{name:"address",type:"required",errmsg:"请输入选择您所在地区"},{name:"name",type:"required",errmsg:"请输入寺庙名称"}],n={};this.formList.forEach((function(e){n[e.name]=e.val}));var i=this.$validate.validate(n,t);return i.isOk?this.isRealAuth?(n.id_images=this.id_images,void this.$apiJs.setTempleJoin(n).then((function(t){t&&(e.InAudit=!0)}))):(this.$commonJs.uniMsg("请完成实名认证！"),!1):(this.$commonJs.uniMsg(i.errmsg),!1)},getState:function(){var e=this;this.$apiJs.getTempleJoinStatus().then((function(t){0==t.status?e.InAudit=!0:-1==t.status&&(e.errorAudit=!0)}))}},onLoad:function(e){-1==e.status?this.errorAudit=!0:this.getState()}};t.default=i},a4f1:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},a6b4:function(e,t,n){"use strict";var i=n("d0d9"),a=n.n(i);a.a},d0d9:function(e,t,n){},f608:function(e,t,n){"use strict";n.r(t);var i=n("8519"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}},[["3f53","common/runtime","common/vendor"]]]);