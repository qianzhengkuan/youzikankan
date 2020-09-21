import Vue from 'vue'
import store from './store'
import App from './App'
import md5 from './common/md5.js'
import commonJs from './common/common.js'
import apiJs from './common/api.js'
import validate from './common/ys-validate.js'


// 挂载到全局
Vue.prototype.$md5 = md5
Vue.prototype.$validate = validate
Vue.prototype.$commonJs = commonJs
Vue.prototype.$apiJs = apiJs
Vue.prototype.$images = '/static';
Vue.prototype.$errorImage = '/static/images/noImg.png';


Vue.prototype.$YZKK = {
	screenHeight:uni.getSystemInfoSync().screenHeight,
	bottomDistinct:200,
	user_token:uni.getStorageSync('accesstoken'),
	wwwRoot:'http://h5.youzikankan.com',
	wwwPc:'http://www.youzikankan.com/'
};
Vue.config.productionTip = false
// #ifdef H5
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
var opts={
	mainClass : 'pswp--minimal--dark',
	barsSize : {
		top: 44,
		bottom: 0
	},
	captionEl : true,//简介
	zoomEl: false,//放大按钮
	fullscreenEl : false,//是否全屏
	shareEl : false,//分享
	bgOpacity : 1,//透明度
	tapToClose : false,//点击关闭组件
	tapToToggleControls : true,//点击隐藏控制按钮以及简介
	closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
}
Vue.use(preview,opts)
// #endif
// 组件
import noMore from '@/template/noMore.vue'
import noData from '@/template/noData.vue'

Vue.component('noMore', noMore)
Vue.component('noData', noData) 
 
 import loadingPlus from "@/common/mixin/loading-plus.vue"
 Vue.component('loading-plus',loadingPlus)

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
