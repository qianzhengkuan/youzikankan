(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-package_shanghui-shanghuiJoin"],{"0a6c":function(e,a,t){"use strict";t.r(a);var n=t("547e"),i=t("373c");for(var o in i)"default"!==o&&function(e){t.d(a,e,(function(){return i[e]}))}(o);t("227a");var s,r=t("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"57aee13a",null,!1,n["a"],s);a["default"]=l.exports},"227a":function(e,a,t){"use strict";var n=t("6692"),i=t.n(n);i.a},"373c":function(e,a,t){"use strict";t.r(a);var n=t("b0d7"),i=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,(function(){return n[e]}))}(o);a["default"]=i.a},"547e":function(e,a,t){"use strict";var n={wPicker:t("dc4a").default},i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"flex-box flex-column"},[t("v-uni-view",{staticClass:"sh-bg",style:e.chooseShImage},[t("v-uni-view",{staticClass:"sh-bg-con  flex-box flex-xy-center flex-column"},[t("v-uni-text",[e._v(e._s(e.chooseShName?e.chooseShName:"请选择你要加入的商会"))]),t("v-uni-button",{staticClass:"yzkk-submitBtn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navTo("selectSH")}}},[e._v("选择商会")])],1),t("v-uni-view",{staticClass:"black-bg"})],1),t("v-uni-view",{staticClass:"req-title bd-bottom"},[t("v-uni-text",[e._v("入会申请")])],1),t("v-uni-view",{staticClass:"form-panel flex-1"},[e._l(e.formList,(function(a,n){return t("v-uni-view",{key:n,staticClass:"form-list bd-bottom"},[t("v-uni-view",{staticClass:"form-item flex-box flex-y-center",attrs:{"hover-class":"select"==a.type?"yzkk-href-hover":""}},[t("v-uni-view",{staticClass:"label"},[t("v-uni-text",[e._v(e._s(a.label))])],1),t("v-uni-view",{staticClass:"flex-1"},["number"==a.type?t("v-uni-input",{attrs:{name:a.name,maxlength:"11",placeholder:"请输入"+a.label},model:{value:a.val,callback:function(t){e.$set(a,"val",t)},expression:"item.val"}}):e._e(),"text"==a.type?t("v-uni-input",{attrs:{name:a.name,placeholder:"请输入"+a.label},model:{value:a.val,callback:function(t){e.$set(a,"val",t)},expression:"item.val"}}):e._e(),"select1"==a.type?t("v-uni-view",{staticClass:"jiantouRight lineJianTou",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showPicker("selector1")}}},[t("v-uni-text",{class:{"black-text":e.index1}},[e._v(e._s(e.array1[e.index1].name?e.array1[e.index1].name:"请选择"))])],1):e._e(),"select2"==a.type?t("v-uni-view",{staticClass:"jiantouRight lineJianTou",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showPicker("selector2")}}},[t("v-uni-text",{class:{"black-text":e.index2}},[e._v(e._s(e.array2[e.index2].name?e.array2[e.index2].name:"请选择"))])],1):e._e(),"select3"==a.type?t("v-uni-view",{staticClass:"jiantouRight lineJianTou",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showPicker("region")}}},[t("v-uni-text",{class:{"black-text":e.addressRengin},model:{value:a.val=e.addressRengin+e.addressInfo,callback:function(t){e.$set(a,"val = addressRengin+addressInfo",t)},expression:"item.val = addressRengin+addressInfo"}},[e._v(e._s(e.addressRengin?e.addressRengin:"请选择"))])],1):e._e()],1)],1)],1)})),t("v-uni-view",{staticClass:"flex-box flex-y-center addressInfo"},[t("v-uni-textarea",{attrs:{name:"addressInfo",maxlength:"20",placeholder:"请输入详细地址"},model:{value:e.addressInfo,callback:function(a){e.addressInfo=a},expression:"addressInfo"}})],1)],2),t("w-picker",{ref:"selector1",attrs:{mode:"selector",value:e.array1[e.index1].name,"default-type":"name","default-props":e.defaultProps,options:e.array1},on:{confirm:function(a){arguments[0]=a=e.$handleEvent(a),e.onConfirm(a,"selector1")}}}),t("w-picker",{ref:"selector2",attrs:{mode:"selector",value:e.array2[e.index2].name,"default-type":"name","default-props":e.defaultProps,options:e.array2},on:{confirm:function(a){arguments[0]=a=e.$handleEvent(a),e.onConfirm(a,"selector2")}}}),t("w-picker",{ref:"region",attrs:{mode:"region",value:e.defaultRegion,"default-type":"value","hide-area":!1},on:{confirm:function(a){arguments[0]=a=e.$handleEvent(a),e.onConfirm(a,"region")}}}),t("v-uni-view",{staticClass:"yzkk-submitBtn joinNow",attrs:{"hover-class":"yzkk-btn-hover"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.joinNow.apply(void 0,arguments)}}},[e._v("提交申请")])],1)},o=[];t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return n}))},"5d61":function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.req-title[data-v-57aee13a]{font-size:%?36?%;font-weight:800;padding:%?15?% %?30?% %?30?%;box-sizing:border-box}.sh-bg[data-v-57aee13a]{height:%?358?%;width:92%;margin:%?20?% auto;background-size:cover;position:relative}.sh-bg .absoluteCon[data-v-57aee13a], .sh-bg .sh-bg-con[data-v-57aee13a], .sh-bg .black-bg[data-v-57aee13a]{position:absolute;left:0;top:0;width:100%;height:100%}.sh-bg .sh-bg-con[data-v-57aee13a]{text-align:center;z-index:99}.sh-bg .sh-bg-con uni-text[data-v-57aee13a]{color:#fff;font-size:%?28?%}.sh-bg .sh-bg-con uni-button[data-v-57aee13a]{width:%?240?%;height:%?80?%;margin:%?28?% auto;line-height:%?80?%}.sh-bg .black-bg[data-v-57aee13a]{z-index:98;background-color:rgba(0,0,0,.3)}.form-list[data-v-57aee13a]{height:%?88?%;padding:%?0?% %?30?%;line-height:%?88?%;box-sizing:border-box;background-color:#fff}.form-list .label[data-v-57aee13a]{min-width:%?138?%}.form-list .label uni-text[data-v-57aee13a]{font-size:%?30?%;font-weight:800}.form-list uni-input[data-v-57aee13a]{text-align:right;font-size:%?30?%}.form-list .jiantouRight[data-v-57aee13a]{padding-right:%?30?%;text-align:right}.form-list .jiantouRight uni-text[data-v-57aee13a]{font-size:%?30?%;color:grey}.form-list .jiantouRight uni-text.black-text[data-v-57aee13a]{color:#000}.form-list .jiantouRight[data-v-57aee13a]:after{right:0}uni-textarea[data-v-57aee13a]{padding:%?30?%;box-sizing:border-box;width:100%;font-size:%?30?%;height:%?180?%}.joinNow[data-v-57aee13a]{margin-top:%?106?%;margin-bottom:%?30?%}.uni-textarea-compute[data-v-57aee13a], .uni-textarea-line[data-v-57aee13a], .uni-textarea-placeholder[data-v-57aee13a], .uni-textarea-textarea[data-v-57aee13a]{position:absolute;width:100%!important;height:50%!important;left:0;top:0;white-space:inherit;word-break:inherit}uni-textarea[data-v-57aee13a]{width:400px!important;height:80px!important;display:block;position:relative;font-size:14px;line-height:normal;white-space:pre-wrap;word-break:break-all}',""]),e.exports=a},6692:function(e,a,t){var n=t("5d61");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("3338eaf4",n,!0,{sourceMap:!1,shadowMode:!1})},b0d7:function(e,a,t){"use strict";(function(e){var n=t("ee27");t("4160"),t("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("dc4a")),o={components:{wPicker:i.default},data:function(){return{index1:0,index2:0,index3:0,defaultProps:{label:"name",value:"id"},array1:[{name:"请选择",id:0},{name:"董事长",id:1},{name:"销售经理",id:2},{name:"总裁",id:3},{name:"高级副总裁",id:4},{name:"副总裁",id:5},{name:"CEO",id:6},{name:"COO",id:7},{name:"经理",id:8}],array2:[{name:"请选择",id:0},{name:"机构组织",id:1},{name:"信息产业",id:2},{name:"机械机电",id:3},{name:"环保绿化",id:4},{name:"电子电工",id:5},{name:"医药卫生",id:6},{name:"其他",id:7}],defaultRegion:["110000","110100","110101"],addressRengin:"",chooseShId:"",chooseShImage:{backgroundImage:"url('../../static/images/joinBg.png')"},chooseShName:"",formList:[{label:"真实姓名",val:"",name:"real_name",type:"text",length:15},{label:"手机号",val:"",name:"phone",type:"number",length:11},{label:"公司",val:"",name:"company",type:"text",length:20},{label:"职务",val:"",name:"work",type:"select1",length:20},{label:"所属行业",val:"",name:"from",type:"select2",length:20},{label:"所在地区",val:"",name:"address",type:"select3",length:20}],addressInfo:""}},methods:{showPicker:function(e){this.$refs[e].show()},onConfirm:function(a,t){switch(e.log(a),t){case"selector1":this.index1=a.value;break;case"selector2":this.index2=a.value;break;case"region":this.defaultRegion=a.value,this.addressRengin=a.result;break;default:break}},navTo:function(e){this.$commonJs.navTo(e)},joinNow:function(){var e=this,a=[{name:"real_name",type:"required",errmsg:"请输入您的姓名"},{name:"phone",type:"required",errmsg:"请输入您的手机号"},{name:"phone",type:"phone",errmsg:"请输入正确的手机号"}],t={};this.formList.forEach((function(e){t[e.name]=e.val}));var n=this.$validate.validate(t,a);return n.isOk?this.chooseShId?(t.chamber_id=this.chooseShId,t.job=this.array1[this.index1].name,t.industry=this.array2[this.index2].name,void this.$apiJs.setChamberAdd(t).then((function(a){if(a){e.$commonJs.uniMsg("已提交，等待审核","success");var t=e.$commonJs.getBeforePage();setTimeout((function(){"/pages/package_shanghui/mySH"==t.route?(t.getShanghui(),window.history.back()):uni.navigateTo({url:"mySH"})}),500)}}))):(this.$commonJs.uniMsg("请选择要加入的商会！"),!1):(this.$commonJs.uniMsg(n.errmsg),!1)}},onLoad:function(a){a.id&&(e.log(a),this.chooseShId=a.id,this.chooseShName=a.name)}};a.default=o}).call(this,t("5a52")["default"])}}]);