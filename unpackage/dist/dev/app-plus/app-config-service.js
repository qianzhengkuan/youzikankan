
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/launch/launch","pages/tabbar/index","pages/tabbar/zongci","pages/tabbar/shanghui","pages/tabbar/my","pages/aboutUs/aboutUs","pages/videoPlay/videoPlay","pages/videoPlayApp/videoPlayApp","pages/package_zongci/myZC","pages/package_zongci/zongCiPeoList","pages/package_zongci/zongciInfo","pages/package_zongci/zongciList","pages/package_zongci/createZC","pages/package_zongci/realAuth","pages/package_zongci/newList","pages/package_zongci/zongciCreate","pages/package_shanghui/selectSH","pages/package_shanghui/mySH","pages/package_shanghui/shanghuiList","pages/package_shanghui/shanghuiInfo","pages/package_shanghui/peopleList","pages/package_shanghui/peopleJianjie","pages/package_shanghui/shanghuiJoin","pages/package_shanghui/shanghuiSettled","pages/package_shanghui/newsList","pages/package_user/vipList","pages/package_user/infoList","pages/package_user/myPrivate","pages/package_user/myFans","pages/package_user/myShouCang","pages/package_user/myFabu","pages/package_user/setting","pages/package_user/feedback","pages/package_user/history","pages/package_user/security","pages/package_user/editPsdOrPhone","pages/package_user/editUserInfo","pages/package_user/myFollow","pages/package_user/userInfo","pages/package_user/myActivity","pages/package_activity/activityInfo","pages/package_activity/activityJoin","pages/package_activity/activityList","pages/package_activity/activityAdd","pages/package_other/login","pages/package_other/forgetPsd","pages/package_other/choose-location","pages/package_other/search","pages/package_other/webview","pages/package_other/userXY","pages/package_other/yszc","pages/package_new/newsInfo","pages/package_new/plInfo","pages/package_new/addNew","pages/package_new/photoInfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F8F8F8","onReachBottomDistance":0},"tabBar":{"color":"#A8A8A8","selectedColor":"#C34944","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabbar/index","iconPath":"static/tabbar/shouye.png","selectedIconPath":"static/tabbar/shouye-2.png","text":"首页"},{"pagePath":"pages/tabbar/zongci","iconPath":"static/tabbar/zongci.png","selectedIconPath":"static/tabbar/zongci-2.png","text":"宗祠"},{"pagePath":"pages/tabbar/shanghui","iconPath":"static/tabbar/shanghui.png","selectedIconPath":"static/tabbar/shanghui-2.png","text":"商会"},{"pagePath":"pages/tabbar/my","iconPath":"static/tabbar/wode.png","selectedIconPath":"static/tabbar/wode-2.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"游子看看","compilerVersion":"2.7.14","entryPagePath":"pages/launch/launch","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/launch/launch","meta":{"isQuit":true},"window":{"titleNView":false}},{"path":"/pages/tabbar/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/zongci","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/tabbar/shanghui","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/tabbar/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom","bounce":"none"}},{"path":"/pages/aboutUs/aboutUs","meta":{},"window":{"navigationBarTitleText":"关于我们","bounce":"none"}},{"path":"/pages/videoPlay/videoPlay","meta":{},"window":{"titleNView":false,"bounce":"none"}},{"path":"/pages/videoPlayApp/videoPlayApp","meta":{"isNVue":true},"window":{"titleNView":false,"bounce":"none"}},{"path":"/pages/package_zongci/myZC","meta":{},"window":{"navigationBarTitleText":"我的宗祠","bounce":"none"}},{"path":"/pages/package_zongci/zongCiPeoList","meta":{},"window":{"navigationBarTitleText":"全部僧人","bounce":"none"}},{"path":"/pages/package_zongci/zongciInfo","meta":{},"window":{"navigationBarTitleText":"游子看看","bounce":"none"}},{"path":"/pages/package_zongci/zongciList","meta":{},"window":{"navigationBarTitleText":"古庙宇","bounce":"none"}},{"path":"/pages/package_zongci/createZC","meta":{},"window":{"navigationBarTitleText":"申请入驻古庙宇","bounce":"none"}},{"path":"/pages/package_zongci/realAuth","meta":{},"window":{"navigationBarTitleText":"实名认证","bounce":"none"}},{"path":"/pages/package_zongci/newList","meta":{},"window":{"navigationBarTitleText":"寺庙资讯","bounce":"none"}},{"path":"/pages/package_zongci/zongciCreate","meta":{},"window":{"navigationBarTitleText":"寺庙建设","bounce":"none"}},{"path":"/pages/package_shanghui/selectSH","meta":{},"window":{"navigationBarTitleText":"选择商会","bounce":"none"}},{"path":"/pages/package_shanghui/mySH","meta":{},"window":{"navigationBarTitleText":"我的商会","bounce":"none"}},{"path":"/pages/package_shanghui/shanghuiList","meta":{},"window":{"navigationBarTitleText":"商会列表","bounce":"none"}},{"path":"/pages/package_shanghui/shanghuiInfo","meta":{},"window":{"navigationBarTitleText":"商会详情","bounce":"none"}},{"path":"/pages/package_shanghui/peopleList","meta":{},"window":{"navigationBarTitleText":"商会成员","bounce":"none"}},{"path":"/pages/package_shanghui/peopleJianjie","meta":{},"window":{"navigationBarTitleText":"商会简介","bounce":"none"}},{"path":"/pages/package_shanghui/shanghuiJoin","meta":{},"window":{"navigationBarTitleText":"加入商会","bounce":"none"}},{"path":"/pages/package_shanghui/shanghuiSettled","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/package_shanghui/newsList","meta":{},"window":{"navigationBarTitleText":"商会资讯","bounce":"none"}},{"path":"/pages/package_user/vipList","meta":{},"window":{"navigationBarTitleText":"会员管理","bounce":"none"}},{"path":"/pages/package_user/infoList","meta":{},"window":{"navigationBarTitleText":"消息通知","bounce":"none"}},{"path":"/pages/package_user/myPrivate","meta":{},"window":{"navigationBarTitleText":"私信","bounce":"none"}},{"path":"/pages/package_user/myFans","meta":{},"window":{"navigationBarTitleText":"我的粉丝","bounce":"none"}},{"path":"/pages/package_user/myShouCang","meta":{},"window":{"navigationBarTitleText":"我的收藏","bounce":"none"}},{"path":"/pages/package_user/myFabu","meta":{},"window":{"navigationBarTitleText":"我的发布","bounce":"none"}},{"path":"/pages/package_user/setting","meta":{},"window":{"navigationBarTitleText":"设置","bounce":"none"}},{"path":"/pages/package_user/feedback","meta":{},"window":{"navigationBarTitleText":"用户反馈","bounce":"none"}},{"path":"/pages/package_user/history","meta":{},"window":{"navigationBarTitleText":"浏览历史","bounce":"none","titleNView":{"buttons":[{"float":"right","fontSize":"15px","text":"清空"}]}}},{"path":"/pages/package_user/security","meta":{},"window":{"navigationBarTitleText":"账号安全"}},{"path":"/pages/package_user/editPsdOrPhone","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/package_user/editUserInfo","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/package_user/myFollow","meta":{},"window":{"navigationBarTitleText":"我的关注","bounce":"none"}},{"path":"/pages/package_user/userInfo","meta":{"isNVue":true},"window":{"navigationBarTitleText":"作者信息","titleNView":{"buttons":[{"type":"share"},{"type":"favorite"}]}}},{"path":"/pages/package_user/myActivity","meta":{},"window":{"navigationBarTitleText":"我的活动","bounce":"none"}},{"path":"/pages/package_activity/activityInfo","meta":{},"window":{"navigationBarTitleText":"活动详情","bounce":"none"}},{"path":"/pages/package_activity/activityJoin","meta":{},"window":{"navigationBarTitleText":"活动报名","bounce":"none"}},{"path":"/pages/package_activity/activityList","meta":{},"window":{"navigationBarTitleText":"商会活动","bounce":"none"}},{"path":"/pages/package_activity/activityAdd","meta":{},"window":{"navigationBarTitleText":"发布活动","bounce":"none"}},{"path":"/pages/package_other/login","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/package_other/forgetPsd","meta":{},"window":{"navigationBarTitleText":"忘记密码","bounce":"none"}},{"path":"/pages/package_other/choose-location","meta":{},"window":{"navigationBarTitleText":"选择地点","bounce":"none"}},{"path":"/pages/package_other/search","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"搜索","bounce":"none"}},{"path":"/pages/package_other/webview","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/package_other/userXY","meta":{},"window":{"navigationBarTitleText":"用户协议","bounce":"none"}},{"path":"/pages/package_other/yszc","meta":{},"window":{"navigationBarTitleText":"隐私政策","bounce":"none"}},{"path":"/pages/package_new/newsInfo","meta":{},"window":{"navigationBarTitleText":"","bounce":"none","titleNView":{"buttons":[{"type":"menu","float":"right"}]}}},{"path":"/pages/package_new/plInfo","meta":{},"window":{"navigationBarTitleText":"评论详情","bounce":"none"}},{"path":"/pages/package_new/addNew","meta":{},"window":{"titleNView":false,"bounce":"none"}},{"path":"/pages/package_new/photoInfo","meta":{},"window":{"navigationBarTitleText":"图片详情","bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
