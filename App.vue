<script>
	import pageAnimation from './components/page-animation'
	export default {
		mixins: [pageAnimation],
		onShow: function() {},
		onLaunch: function() {
			
			// var search = window.location.href;
			// console.log(search)
			// var url = search.match(/id=(\S*)/)[1];
			// console.log(url) ///index/newinfo/id/1369.html
			// var dd = url.match(/(\S*)&isShare=1&isShare=0/)[1];
			// console.log(dd)

			uni.getSystemInfo({
				success: (res) => {
					if (res.screenWidth > 768) {
						var ua = window.navigator.userAgent.toLowerCase();
						if (ua.match(/MicroMessenger/i) == 'micromessenger') {
							console.log('这是微信浏览器')
						} else {
							console.log('不是微信浏览器')
							location.href = 'http://www.youzikankan.com'
							// location.href = "http://www.youzikankan.com/index/index/newinfo/id/" + dd + ".html";
							// location.href = 'http://h5.youzikankan.com/pages/package_new/newsInfo?id=7355&isShare=1&isShare=0'
						}
					}
				}
			});

			// app 消息推送
			// // #ifdef APP-PLUS 
			// // 点击通知消息时，执行该事件
			// plus.push.addEventListener("click",function(message){
			// 	//自定义内容获取
			// 	let payload = message.payload;
			// 	console.log(payload)
			// 	try{
			// 		//完成业务逻辑代码
			// 	}catch(e){

			// 	}
			// });
			// // 收到透传消息时，执行该事件
			// plus.push.addEventListener("receive",function(message){
			// 	//自定义内容获取
			// 	let payload = message.payload;
			// 	try{
			// 		//完成业务逻辑代码
			// 	}catch(e){

			// 	}
			// });
			// //#endif

			//#ifdef APP-PLUS  
			var info = plus.push.getClientInfo();
			// console.log(JSON.stringify(info));
			/* 5+  push 消息推送 ps:使用:H5+的方式监听，实现推送*/
			plus.push.addEventListener("click", function(msg) {
				// console.log("click:" + JSON.stringify(msg));
				// console.log(msg.payload);
				// console.log(JSON.stringify(msg));
				//这里可以写跳转业务代码
			}, false);
			// 监听在线消息事件    
			plus.push.addEventListener("receive", function(msg) {
				// plus.ui.alert(2);  
				//这里可以写跳转业务代码
				// console.log("recevice:" + JSON.stringify(msg))
			}, false);


			//#endif 


			// let _this = this;
			// // #ifdef APP-PLUS  
			// console.log(plus.push.getClientInfo());  
			// plus.push.setAutoNotification(true);  
			// let target = {}  
			// plus.push.addEventListener("click", function(msg) {  
			//     console.log(msg);   
			//     if (msg.payload) { //如果透传消息带参数  
			//         target = COMM.strToObj(msg.payload) //透传字符串转对象  url=gdDetail&id=5 转换为 {url:gdDetail,id:5}  
			//         if (target.hasOwnProperty('url')) { //是否需要页面跳转  
			//             _this.toPage(target);   //toPage  为自己封装的打开页面方法  
			//         }  
			//     }  
			// })  
			// plus.push.addEventListener("receive", function(msg) {  
			//     // iphone 在已打开APP的情况下,通知栏不会弹出消息框,此时需要本地创建一条通知  
			//     console.log(msg);  
			//     if (msg.hasOwnProperty('type') && msg.type != 'click') {  
			//         COMM.createLocalMsg({  
			//             title: msg.title,  
			//             content: msg.content,  
			//             payload: msg.payload  
			//         })  
			//     }   

			// })  
			// // #endif   
			// app版本更新
			// #ifdef APP-PLUS  


			// that.$apiJs
			// 	.setNewsPublish({
			// 		version: version
			// 	})
			// 	.then(res => {
			// 		console.log(res);
			// 		var data = res.data;
			// 		var iosUrl = 'https://www.pgyer.com/xwTR';
			// 		var androidUrl = 'https://www.pgyer.com/xGEs';

			// 		uni.showModal({
			// 			title: '发现新的版本',
			// 			content: '1.最新版本:1.1.04    2.新增发布功能 ',
			// 			cancelText: '放弃更新',
			// 			confirmText: '立即更新',
			// 			success: res => {
			// 				if (res.confirm) {
			// 					let platform = uni.getSystemInfoSync().platform
			// 					if (platform == 'ios') {
			// 						plus.runtime.openURL(iosUrl)
			// 					} else if (platform == 'android') {
			// 						plus.runtime.openURL(androidUrl)
			// 					}
			// 				}
			// 			}
			// 		});
			// 	});

			// #endif

		},

		methods: {

		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// #ifndef APP-NVUE
	@import './common/common.css';
	// 游子看看公共样式：自定义头部以及其他
	$status_hei:var(--status-bar-height);

	//#ifdef APP-PLUS || MP-WEIXIN
	.status {
		width: 100%;
		background-color: $yzkk-theme-color;
		//height: 80rpx;
		height: $status_hei;
		left: 0;
		top: 0;
		z-index: 999;
	}

	//#endif


	image {
		will-change: transform
	}


	// uniapp 自带样式的修改
	uni-checkbox .uni-checkbox-input {
		border-radius: 50% !important;
		color: #ffffff !important;
	}

	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		color: #fff;
		border-color: $yzkk-theme-color;
		background: $yzkk-theme-color;
	}

	uni-checkbox:not([disabled]) .uni-checkbox-input:hover {
		border-color: $yzkk-body-gray-color;
	}

	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:after {
		font-size: 36rpx;
	}

	.uni-video-cover {
		// #ifndef APP-NVUE
		display: none;
		// #endif
	}

	// uni-page-body,
	// .container {
	// 	height: 100%;
	// }

	uni-modal .uni-modal__title {
		font-size: 36rpx;
	}

	uni-modal .uni-modal__bd,
	uni-modal .uni-modal * {
		font-size: 30rpx;
	}

	// picker
	.uni-picker-container .uni-picker-header {
		height: 90rpx;
	}

	.uni-picker-container .uni-picker-action {
		font-size: 36rpx;
		line-height: 90rpx;
	}

	.uni-picker-container .uni-picker-item {
		font-size: 30rpx;
	}

	.uni-picker-container .uni-picker-content {
		height: 476rpx;
	}


	// 视频
	.uni-video-cover {
		background-color: transparent;
	}

	.yzkk-header {
		height: 88rpx;
		padding: 14rpx 30rpx;
		background-color: $yzkk-theme-color;
		box-sizing: border-box;
		// position: fixed;
		top: 0;
		width: 100%;
		//#ifdef APP-PLUS
		top: $status_hei;
		//#endif
		z-index: 999;
		align-items: center;

		.optIcon {
			width: 36rpx;
			height: 36rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 50rpx;

			image {
				width: 36rpx;
				height: 36rpx;
			}
		}

		.moreOpt {
			width: 32rpx;
			height: 6rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 50rpx;

			image {
				width: 32rpx;
				height: 6rpx;
			}
		}

		.backIcon {
			margin-left: 0;

			image {
				width: 36rpx;
				height: 36rpx;
			}
		}


		.top-title {
			margin-left: 243rpx;
			font-size: 32rpx;
			font-weight: 800;
		}

	}

	.waitFixed {
		position: fixed;
	}


	uni-switch {
		display: flex;
	}

	.uni-page-refresh {
		z-index: 1000;
	}

	.yzkk-submitBtn {
		background-color: $yzkk-submitBtn-color;
	}


	.yzkk-white-btn {
		background: #FFFFFF;
		border-radius: 8rpx;
		color: #1F1F1F;
	}

	// 资讯类
	.allNewItem {
		padding: $yzkk-news-pad;
		box-sizing: border-box;
		position: relative;
		background-color: white;
	}

	.bd-bottom {
		position: relative;
	}

	.allNewItem::before,
	.bd-bottom::before {
		content: "";
		width: 92%;
		height: 1px;
		background-color: #EEEEEE;
		bottom: 0;
		position: absolute;
		left: 50%;
		transform: translateX(-50%) scaleY(0.5);
	}

	.yzkk-href-hover {
		background-color: $yzkk-body-gray-color !important;
	}

	.yzkk-btn-hover {
		background-color: $yzkk-btn-hover-color !important;
	}

	.newTitle {
		font-size: $yzkk-news-title;
		line-height: $yzkk-news-title-line-hei;
		margin-bottom: 16rpx;
	}

	.new-bottom-fs-gray {
		font-size: $yzkk-news-24rpx;
		color: $yzkk-gray-text;
		line-height: 1;
		margin-right: 23rpx;
	}

	uni-toast p {
		font-size: 28rpx;
	}

	//#endif
</style>
