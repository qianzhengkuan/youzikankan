(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/package_new/newsInfo"],{"1e6e":function(n,t,e){"use strict";var i,o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}))},"1f7a":function(n,t,e){"use strict";var i=e("81be"),o=e.n(i);o.a},"6f21":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){e.e("pages/package_new/template/pinglun").then(function(){return resolve(e("3576"))}.bind(null,e)).catch(e.oe)},o=function(){e.e("pages/package_new/template/pinglun-panel").then(function(){return resolve(e("3aa0"))}.bind(null,e)).catch(e.oe)},a=function(){Promise.all([e.e("common/vendor"),e.e("pages/package_new/components/jyf-parser/jyf-parser")]).then(function(){return resolve(e("5b3e"))}.bind(null,e)).catch(e.oe)},s={components:{pinglun:i,pinglunPanel:o,jyfParser:a},data:function(){return{showPL:!0,guanFlag:!1,plList:[],info:"",noPingLun:!1,zanFlag:!1,shoucangFlag:!1,contentImageList:[],shareData:{appId:"wx1e1c7d0b7f8d179e",shareImg:"http://h5.youzikankan.com/logo.png"},infoLoading:"http://h5.youzikankan.com/static/images/zw.png",shareFlag:!1,reloadFlag:!1,openAppShare:!1,seeImageFlag:!1,userLogin:!0,viewList:[],pageDate:new Date,zanAni:""}},onShow:function(){var n=this;this.shareFlag&&setTimeout((function(){n.shareFlag=!1}),500)},onNavigationBarButtonTap:function(n){n.index;this.openAppShare=!0},methods:{toUserInfo:function(n){},showZanAni:function(){var t=this,e=["-",""],i=["../../static/images/icon/dianzan-002.png"],o=Math.floor(Math.random()*i.length),a={src:i[o],index:!1,time:800,animationData:{},x:Math.ceil(50*Math.random()),q:Math.floor(Math.random()*e.length),lastIndex:5,timer:null,lastTime:300};new Date-this.pageDate<300||(this.pageDate=new Date,this.viewList.push(a),this.viewList.forEach((function(i,o,a){var s=n.createAnimation({duration:i.time,timingFunction:"ease-out"});t.animation=s;var r=e[i.q]+i.x;setTimeout((function(){t.animation.translateY(-80).step(),t.animation.opacity(0).step(),t.animation.translateX(Number(r)).step(),i.animationData=t.animation.export(),clearInterval(i.timer),i.timer=setInterval((function(){i.lastIndex--,i.lastIndex<0&&(a.splice(i,1),clearInterval(i.timer))}),i.lastTime)}),100)})))},openDown:function(){this.$commonJs.uniMsg("未上线app应用")},openH5:function(){n.switchTab({url:"../tabbar/index"})},onShare:function(n){},shareWx_h5_init:function(){var n=this,t=this;this.$apiJs.getSignPackage({url:location.href}).then((function(e){n.shareData.appId=e.appId,wxapi.wxRegister(e,{title:t.info.title,link:e.url,imgUrl:t.info.img.length?t.info.img[0].url:"",desc:t.info.desc,success:function(){t.shareFlag=!0},error:function(){console.log("分享error")}})}))},linkPress:function(t){t.ignore(n.navigateTo({url:"/pages/package_other/webview?url=".concat(t.href)}))},parserLoad:function(){},getInfo:function(t){var e=this,i=this;this.$apiJs.getNewsInfo({id:t}).then((function(t){var o=t;o.time=i.$commonJs.timeFormat.noYearFormat(o.create_time);var a=o.content.content.replace(new RegExp("<iframe","gm"),'<iframe style="border:0;width:auto;height:auto;" allowtransparency="yes"  width="auto" height="auto" frameborder="no" scrolling="no"  allowfullscreen').replace(new RegExp("<embed","gm"),'<audio controlsList="nodownload" controls style="outline:none;height:40px;"').replace(new RegExp("embed","gm"),"audio").replace(new RegExp('src="/',"gm"),'src="https://www.youzikankan.com/');o.desc=o.content.content.replace(/<[^>]+>/g,"").replace(/&nbsp;/gi,"").substring(0,50),o.content=a,i.info=o,i.setTitle("游子看看"),n.getStorageSync("accesstoken")&&e.getFollowCode()})).then((function(){}))},showErrorImage:function(n){n.target.dataset.index;this.info.user_img=this.$errorImage},shoucangNew:function(){var n=this,t=this;this.$commonJs.isLogin().then((function(e){n.$apiJs.setCollectionNews({news_id:t.id}).then((function(t){n.getCollectionNews()}))}))},getCollectionNews:function(){var n=this,t=this;return new Promise((function(e,i){n.$apiJs.getCollectionNews({id:t.id}).then((function(t){"seeOther"!=t?n.shoucangFlag=Number(t):n.userLogin=!1}))}))},huifu:function(n){this.userLogin?n.plNum?this.navTo("plInfo",n):(console.log("弹出评论面板"),this.otherUser=n.user_id,this.pl_id=n.id,this.$refs.plPanel.showPl()):this.$commonJs.toLoginPage()},openPl:function(){this.userLogin?this.$refs.plPanel.showPl():this.$commonJs.toLoginPage()},dianzanNew:function(){var n=this,t=this;this.$commonJs.isLogin().then((function(e){n.$apiJs.setFabulousNews({news_id:t.id}).then((function(t){n.getFabulousNewsCode(),n.showZanAni()}))}))},getFabulousNewsCode:function(){var n=this,t=this;return new Promise((function(e,i){n.$apiJs.getFabulousNewsCode({id:t.id}).then((function(t){"seeOther"!=t&&(n.zanFlag=t)}))}))},setFollow:function(){var n=this,t=this;this.$commonJs.isLogin().then((function(e){n.$apiJs.setFollow({author_id:t.info.author_id}).then((function(t){n.getFollowCode()}))}))},getFollowCode:function(){var n=this,t=this;return new Promise((function(e,i){n.$apiJs.getFollowCode({id:t.info.author_id}).then((function(t){n.guanFlag=t}))}))},dianzan:function(n){var t=this,e=this,i=n.id;this.$commonJs.isLogin().then((function(o){t.$apiJs.setFabulousUser({news_id:e.id,to_user_id:n.user_id,comment_id:i}).then((function(n){t.getPingLun()}))}))},getFabulousUserCode:function(){var n=this,t=this;return new Promise((function(e,i){n.$apiJs.getFabulousUserCode({id:t.id}).then((function(t){n.zanFlag=t}))}))},submitPl:function(n){var t=this,e=this;this.otherUser?this.$apiJs.replyComment({news_id:e.id,content:n,author_id:this.otherUser,content_id:this.pl_id}).then((function(n){console.log(n),n&&(t.$commonJs.uniMsg("回复成功"),t.$refs.plPanel.closePl(),t.getPingLun())})):this.$apiJs.setComment({news_id:e.id,content:n,author_id:this.info.author_id}).then((function(n){console.log(n),n&&(t.$commonJs.uniMsg("评论成功"),t.$refs.plPanel.closePl(),t.getPingLun())}))},getPingLun:function(){var n=this,t=this;this.$apiJs.getLoginComment({id:t.id}).then((function(e){if("seeOther"!=e){var i=e;i.length?(e.map((function(n,e){n.time=t.$commonJs.timeFormat.noYearFormat(n.create_time)})),n.plList=e):n.noPingLun=!0}else n.$apiJs.getComment({id:t.id}).then((function(e){if(e.length){e.map((function(n,e){n.time=t.$commonJs.timeFormat.noYearFormat(n.create_time)})),n.plList=e}else n.noPingLun=!0}))}))},openPingLunInfo:function(t){n.navigateTo({url:"./plInfo?new_id="+this.id+"&author_id="+t.user_id+"&content_id="+t.id})},navTo:function(n,t){this.$commonJs.navTo(n+"?id="+t.name)},setTitle:function(t){n.setNavigationBarTitle({title:t})}},onLoad:function(n){this.id=n.id,this.getInfo(n.id),this.getPingLun(n.id),n.from||(this.getFabulousNewsCode(),this.getCollectionNews()),n.from&&(this.showPL=!1)}};t.default=s}).call(this,e("543d")["default"])},"81be":function(n,t,e){},9102:function(n,t,e){"use strict";(function(n){e("c233"),e("921b");i(e("66fd"));var t=i(e("cf5e"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},cd35:function(n,t,e){"use strict";e.r(t);var i=e("6f21"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},cf5e:function(n,t,e){"use strict";e.r(t);var i=e("1e6e"),o=e("cd35");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("1f7a");var s,r=e("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=u.exports}},[["9102","common/runtime","common/vendor"]]]);