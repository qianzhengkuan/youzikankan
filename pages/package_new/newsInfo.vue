<template>
	<!-- 详情 -->
	<view class="container">

		<view class="title">{{info.title}}</view>
		<view class="author flex-box flex-y-center" style="justify-content: space-between;">
			<view class="flex-box flex-y-center" @click="toUserInfo()">
				<image @error="showErrorImage" :src="info.user_img" mode="aspectFill"></image>
				<!-- <image @error="showErrorImage" :src="info.user_img" mode="aspectFill" @click="toUserInfo(info.author_id)"></image> -->
				<view class="flex-1 flex-box flex-x-center flex-column">
					<view class="name">{{info.user_name}}</view>
					<view class="time">{{info.time}}</view>
				</view>
			</view>

			<view v-if="showPL" class="gz-btn" hover-class="yzkk-btn-hover" v-bind:class="{'grayBg': guanFlag}" @click="setFollow">
				{{guanFlag?'已关注':'关注'}}
			</view>
		</view>

		<view class="content">
			<jyf-parser :loading-img="infoLoading" :use-cache="true" :html="info.content" ref="article" @load="parserLoad"
			 @linkpress="linkPress" :lazy-load="true" :show-with-animation="true">
			</jyf-parser>

			<!--手机端和App发布的文章图片 -->
			<view v-if="isShowImageCover" class="showImage" v-for="(item,index) in showImageApp" :key="index">
				<image :src="item.url" style="height:500rpx;width: 100%;padding-top: 5rpx;" mode="widthFix"></image>
			</view>

			<view class="seePeople">{{info.read_count ? info.read_count : 0}}人阅读</view>

			<!-- 评论列表 -->
			<!-- <pinglun :plList="plList" @huifu="huifu" @dianzan="dianzan" @openPingLunInfo="openPingLunInfo" :hasHuiFu="true"></pinglun> -->


			<!-- 推荐阅读 -->
			<view class="rec" style="margin-top: 100rpx;" v-if="newList.length">
				<view class="recHeader" style="color: #e46262;display: flex;line-height: 40rpx;margin-bottom: 14rpx;">
					<view class="" style="border-right: 7rpx solid  #e46262;margin-right: 10rpx;"></view>
					<view class="" style="font-weight: bold;font-size:34rpx;">看看热榜</view>
				</view>
				<view class="hot">
					<view class="hotSeach" style="" v-for="(item,index) in newList" :key="index" @click="tonewsInfo(item.id)" v-if="index < 10">
						<view class="txt" style="width: 16rpx;font-size: 28rpx;text-align: center;padding: 0 5px;margin-right: 15rpx;">{{index+1}}</view>
						<view class="titleHot" style="flex: 1;text-overflow:ellipsis;lines:1;text-align: left;">{{item.title}}</view>
						<view class="nuber" style="width: 100rpx;font-size: 26rpx;color: #888888;text-align: center;">{{item.num}}</view>
					</view>
				</view>
			</view>

			<!--游子看看入驻爆料 -->
			<view class="all" style="width: 100%;border: 1rpx solid #d4d4d4;font-size:30rpx;color:#A7A7A7;text-align: center;margin-top:80rpx;">
				<view class="" style="display: flex;justify-content: center;">
					<view style="display: flex;flex-direction: column; padding-top:20rpx;">
						<text>游子看看入驻咨询、新闻爆料热线：<text @click="go()">13788805978</text></text>
						<text style="padding:8rpx 0;">欢迎您的加入和爆料</text>
					</view>
				</view>
				<view class="" style="margin-bottom: 10rpx;">粤ICP备：粤ICP备20013510号</view>

				<!--二维码下载 -->
				<view class="" style="width: 100%;height: 300rpx;display: flex;justify-content:space-between;color:#A7A7A7;font-size: 30rpx;padding:20rpx 0 ;">
					<view class="" style="width: 48%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
						<image src="/static/DowCode/iosCode.png" style="width: 230rpx;height:230rpx;margin-bottom: 10rpx;" mode=""></image>
						<text>ios端app下载</text>
					</view>

					<view class="" style="width: 48%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
						<image src="/static/DowCode/xGEs.png" style="width: 230rpx;height:230rpx;margin-bottom: 10rpx;" mode=""></image>
						<text>安卓端app下载</text>
					</view>
				</view>
			</view>

		</view>

		<!-- 评论列表 -->
		<view class="" style="color: #e46262;font-weight: bold;">全部评论</view>
		<view class="" style="color: #e46262;font-size: 26rpx;text-align: center;padding: 40rpx 0;" v-if="!plList.length">看都看了，总要留下点什么吧</view>
		<pinglun :plList="plList" @huifu="huifu" @dianzan="dianzan" @openPingLunInfo="openPingLunInfo" :hasHuiFu="true"></pinglun>

		<view class="fixed-bottom bottom-opt flex-left-right-between flex-y-center" v-if="showPL&&!openAppShare">
			<view class="flex-box flex-y-center openPl" @click="openPl">
				<image src="../../static/images/icon/xie.png" mode=""></image>
				写评论
			</view>
			<!-- <view class="opt">
				<image src="../../static/images/icon/pinglun-02.png" mode=""></image>
			</view> -->

			<view class="opt" @click="shoucangNew">
				<image :src="shoucangFlag ? '../../static/images/icon/shoucangTrue.png' : '../../static/images/icon/shoucang-01.png'"
				 mode=""></image>
			</view>
			<view class="opt" @click="dianzanNew">
				<view class="animate-wrap">
					<view class="ani-icon" v-for="(item,index) in viewList" :key="index">
						<image mode="widthFix" :src="item.src" :animation="item.animationData"></image>
					</view>
				</view>
				<image :src="zanFlag ? '../../static/images/icon/dianzan-002.png' : '../../static/images/icon/dianzan-01.png'" mode=""></image>
			</view>

			<!-- 	<view class="opt" @click="onShare">
				<image src="../../static/images/icon/shareIcon.png" mode=""></image>
			</view> -->
		</view>

		<pinglun-panel ref="plPanel" @submitPl="submitPl" v-if="showPL"></pinglun-panel>

		<!-- 打开或者下载 -->
		<view class="fixed-bottom flex-box flex-y-center dowm-bottom" v-if="!showPL">
			<!-- <view class="fixed-bottom flex-box flex-y-center dowm-bottom"> -->
			<!-- <view class="flex-1"><text class="logo-text">游子看看</text></view> -->
			<button class="yzkk-submitBtn downBtn" @click="openDown()">打开APP</button>
			<button class="yzkk-submitBtn downBtn" @click="openH5()">进入网页版</button>
		</view>

		<!-- <view class="share-panel">
			<button type="default" @click="onShare">APP分享</button>
		</view> -->
		<uni-popup ref="popup" type="bottom" style="z-index: 99999;">
			<view class="text-center py-2 font-md border-bottom border-light-secondary" style="text-align: center;padding: 30rpx 0rpx;border-bottom: 1rpx solid #F7F7F7;">分享到</view>
			<!--微信分享 -->
			<!-- #ifdef APP-PLUS -->
			<view class="share-panel flex-box">
				<view class="share-icon" @click="onShare(0)">
					<i class="uni-icon uni-icon-weixin"></i>
				</view>
				<view class="share-icon" @click="onShare(1)">
					<i class="uni-icon uni-icon-pengyouquan"></i>
				</view>
			</view>
			<!-- #endif -->
			<view style="text-align: center;padding: 30rpx 0rpx;border-top: 1rpx solid #F7F7F7;" @click="close" hover-class="bg-light">取消</view>
		</uni-popup>

		<!-- 语音播报 -->
		
		<!-- <view class="speech">
			
			<view class="speechlist" @tap="getAudioObject()" v-if="playarticle">
				<image class="laba" src="../../static/images/laba.png" mode=""></image>
				<view class="speechBtn" style="margin-top: 10px;">播文章</view>
			</view>
			<view class="speechlist" @tap="audiopause()" v-if="!playarticle">
				<image class="laba" src="../../static/images/zanting.png" mode=""></image>
				<view class="speechBtn" style="margin-top: 10px;">暂停</view>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	import Voice from './components/QS-baiduyy/QS-baiduyy.js'

	import pinglun from './template/pinglun.vue'
	import pinglunPanel from './template/pinglun-panel.vue';
	import jyfParser from "./components/jyf-parser/jyf-parser";
	import uniPopup from './template/uni-popup/uni-popup.vue'
	// #ifdef H5
	import wxapi from '@/common/wxapi.js';
	const jweixin = require('jweixin-module');
	// #endif

	// #ifdef APP-PLUS
	const DETAIL_PAGE_PATH = '/pages/package_new/newsInfo';
	import appShare, {
		closeShare
	} from "../../components/app-share/utils/share.js"
	// #endif
	export default {
		onShareAppMessage(res) {
			console.log('微信小程序的分享');
		},
		components: {
			pinglun,
			pinglunPanel,
			jyfParser,
			uniPopup
		},
		data() {
			return {
				// 推荐阅读
				newList: [],
				// 手机端APP发布文章的图片
				showImageApp: [],
				// 是否显示手机端APP发布文章的图片
				isShowImageCover: false,
				showPL: true,
				guanFlag: false,
				plList: [],
				info: '',
				noPingLun: false,
				zanFlag: false,
				shoucangFlag: false,
				contentImageList: [],
				shareData: {
					appId: 'wx1e1c7d0b7f8d179e',
					shareImg: 'http://h5.youzikankan.com/logo.png',
				},
				infoLoading: 'http://h5.youzikankan.com/static/images/zw.png',
				shareFlag: false,
				reloadFlag: false,
				openAppShare: false,
				seeImageFlag: false,
				userLogin: true,
				viewList: [],
				pageDate: new Date(),
				zanAni: '',
				
				wordTitle:'',//文章标题
				article:'',//文章内容
				playarticle:true,//显示播放文章
			}
		},
		onShow() {
			var that = this;
			if (this.shareFlag) {
				// uni.showToast({
				// 	title: '分享成功',
				// 	duration: 800
				// })
				setTimeout(function() {
					that.shareFlag = false;
				}, 500)
			}


		},
		onNavigationBarButtonTap(event) {
			const buttonIndex = event.index;
			this.openAppShare = false;
			if (buttonIndex === 0) {
				// 分享 H5 的页面
			}
			this.$refs.popup.open()
		},
		onBackPress() {
			this.$refs.popup.close()
		},
		
		methods: {
			// 语音播报
			openVoice() {
				// console.log('准备播报语音');
				// Voice('你好，我是该插件的作者取舍');
				// Voice('欢迎使用百度语音合成接口');
				// Voice('祝您生活愉快, 万事顺利！');
				// Voice('谢谢！');
			},
			async getAudioObject() {
				console.log('准备获取音频对象')
				
				const audio = await Voice({
					voiceSet: {
						tex: this.article,
						per:3,
						spd:4
					},
					returnAudio:true
				}) 
				console.log(audio)
				console.log(audio._callbacks.pause)
				// console.log('获取音频对象')
				// audio.onPlay(() => {
				// 	console.log('音频开始播放了')
				// })
				// audio.play();
				// audio.pause();
				this.playarticle = false
					audio.play();
					// if(!this.playarticle){	
					// 	audio.onPlay(() => {
					// 		console.log('音频开始播放了')
					// 	})
					// 	audio.play();

					// }else{
					// 	audio.onPause(() => {
					// 		console.log('音频暂停播放了')
					// 	})
					// 	  audio.pause();
     //                      this.article = ''
					// }
			},
		async audiopause(){
			 this.playarticle = true
			 const audio = await Voice({
			 	voiceSet: {
			 		tex: this.article,
			 		per:3,
			 		spd:4
			 	},
			 	returnAudio:true
			 }) 
			    audio.pause();
			},

			// 每日点击次数排行
			getdayranking() {
				var that = this;
				// that.$apiJs.getdayranking({
				// 	page: 1
				// }).then(res => {
				// 	// console.log(res.ranking, "?????")
				// 	for (var key in res.ranking) {
				// 		var o = res.ranking[key];
				// 		this.newList.push(res.ranking[key])
				// 		console.log(this.newList, "?")
				// 	}
				// })
				uni.request({
					url: 'http://www.youzikankan.com/api/v1/get-day-ranking',
					// url: 'http://testfas.youzikankan.com/api/v1/get-day-ranking',
					method: 'GET',
					header: {
						'Content-Type': 'application/json'
					},
					success: (res) => {
						// console.log(res.data.data.ranking)
						var hotList = res.data.data.ranking
						for (var key in hotList) {
							var o = hotList[key];
							this.newList.push(hotList[key])
							// console.log(this.newList, "?")
						}
					},
				})

			},
			tonewsInfo(id) {
				this.$commonJs.navTo('/pages/package_new/newsInfo?id=' + id)
			},
			// 拨打电话
			go() {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: '13788805978',
				});
			},
			// 关闭弹框
			close() {
				this.$refs.popup.close()
			},
			//跳转到机构详情页
			// toUserInfo(id) {
			// 	// this.$commonJs.navTo('/pages/package_user/userInfo?id='+id)
			// },
			// 跳转详情结构
			toUserInfo() {
				var that = this
				// that.$apiJs.jumpList(
				//       {
				// 		author_id:that.info.author_id,
				// 		category_id:that.info.category_id
				// 	}).then(res => {
				// 		console.log(res);
				// 		let url =  res.url
				// 		this.$commonJs.navTo(url)
				// 	});
				if (that.info.author_id == 1 || that.info.author_id == 94) {} else {
					uni.request({
						url: 'http://www.youzikankan.com/api/v1/jump-list',
						// url: 'http://testfas.youzikankan.com/api/v1/jump-list',
						method: 'POST',
						data: {
							author_id: that.info.author_id,
							category_id: that.info.category_id
						},
						success: (res) => {
							let url = res.data.data.url
							that.$commonJs.navTo(url)
						}
					})
				}

			},
			showZanAni() {
				let that = this;
				let arr = ['-', '']
				let arrImg = ['../../static/images/icon/dianzan-002.png']
				let randomImg = Math.floor(Math.random() * arrImg.length)
				let arrPush = {
					src: arrImg[randomImg], //用于随机图标
					index: false, //可删除
					time: 800, //动画时间
					animationData: {}, //每个盒子独立动画不可全局
					x: Math.ceil(Math.random() * 50), //方向间距
					q: Math.floor(Math.random() * arr.length), //用于随机方向
					lastIndex: 5, //用于删除数组
					timer: null, //定时器
					lastTime: 300 //删除的倒计时
				}
				//函数节流限制用户频繁快速点击
				if (new Date() - this.pageDate < 300) return //如果点击的时间小于初始时间300
				this.pageDate = new Date(); //同步全局时间
				//------------
				this.viewList.push(arrPush)

				//核心动画
				this.viewList.forEach((i, o, v) => {
					var animate = uni.createAnimation({
						duration: i.time,
						timingFunction: 'ease-out'
					})
					that.animation = animate
					let time = arr[i.q] + i.x //随机的方向和间距
					setTimeout(() => {
						that.animation.translateY(-80).step()
						that.animation.opacity(0).step()
						that.animation.translateX(Number(time)).step()
						i.animationData = that.animation.export()
						//函数防抖
						clearInterval(i.timer)
						i.timer = setInterval(() => {
							i.lastIndex-- //每个图标的倒计时到0删除
							if (i.lastIndex < 0) {
								v.splice(i, 1)
								clearInterval(i.timer)
							}
						}, i.lastTime)
					}, 100)
				})
			},
			openDown() {
				// window.Location.href="http://h5.youzikankan.com/h5/appFile/yzkk.apk"
				this.$commonJs.uniMsg('app应用已上线,请下载安装!')
				let iosUrl = 'https://apps.apple.com/cn/app/id1525360421'
				let androidUrl = 'https://www.pgyer.com/xGEs'
				let platform = uni.getSystemInfoSync().platform
				console.log(platform)
				if (platform == 'ios') {
					// plus.runtime.openURL(iosUrl)
					location.href = iosUrl
				} else if (platform == 'android') {
					// plus.runtime.openURL(androidUrl ) 
					location.href = androidUrl
				}
			},
			openH5() {
				uni.switchTab({
					url: '../tabbar/index'
				})
			},
			/**
			 * @param {Object} i 0：微信聊天   1：朋友圈
			 */
			async onShare(i) {
				// app端分享
				// #ifdef APP-PLUS
				var that = this;
				// console.log(that.id)
				var imm = that.info.img[0].url
				var platform = uni.getSystemInfoSync().platform
				if (platform == 'ios') { //如果是图文分享，且是ios平台，则压缩图片 
					var fda = await that.compress(imm)
				} else if (platform == 'android') {
					var fda = imm
				}
				// console.log(fda)
				that.$commonJs.isLogin().then(res => {
					that.$commonJs.shareYzkkToWx({
						title: that.info.title,
						desc: that.info.desc,
						type: that.info.img.length ? 0 : 1,
						scene: i, //0微信聊天   1：朋友圈     2：收藏
						link: that.$YZKK.wwwRoot + DETAIL_PAGE_PATH + '?id=' + that.id,
						// shareImg:that.compress(that.info.img[0].url), 
						shareImg: that.info.img.length ? fda : '',
						// shareImg: that.info.img.length ? that.info.img[0].url : '',
					}).then(res => {
						that.shareFlag = true;
					})
				});
				// that.$commonJs.shareYzkkToWx({
				// 	title: that.info.title,
				// 	desc: that.info.desc,
				// 	type: that.info.img.length ? 0 : 1,
				// 	scene: i, //0微信聊天   1：朋友圈     2：收藏
				// 	link: that.$YZKK.wwwRoot + DETAIL_PAGE_PATH + '?id=' + that.id,
				// 	shareImg: that.info.img.length ? await this.compress(that.info.img[0].url) : '',
				// 	// shareImg: that.info.img.length ? that.info.img[0].url : '',
				// }).then(res => {
				// 	that.shareFlag = true;
				// })
				// #endif
			},

			compress(s_img) { //压缩图片 图文分享要求分享图片大小不能超过20Kb
				// console.log('开始压缩');
				let img = s_img;
				return new Promise((resolve) => {
					// var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					// console.log('after' + localPath);
					// 压缩size

					uni.downloadFile({
						//https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png  
						url: img,
						success: (res) => {
							if (res.statusCode === 200) {
								// console.log('下载成功');
							}
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								complete(res) {},
								success(res) {
									plus.io.resolveLocalFileSystemURL(res.savedFilePath, (entry) => {
										entry.file((file) => { // 可通过entry对象操作图片 
											// console.log('getFile:' + JSON.stringify(file));
											plus.zip.compressImage({
												src: file.fullPath,
												// dst: file.fullPath.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
												dst: file.fullPath,
												width: '10%',
												height: '10%',
												quality: 1,
												overwrite: true
											}, (event) => {
												console.log('success zip****' + event.size);
												// let newImg = event.target.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
												let newImg = event.target;
												// console.log(newImg);
												resolve(newImg);
											}, function(error) {
												console.log('Resolve file URL failed--22: ' + e.message);
												uni.showModal({
													content: '分享图片太大,需要请重新选择图片22!',
													showCancel: false
												})
											});
										});
									}, (e) => {
										// console.log('Resolve file URL failed: ' + e.message);
										uni.showModal({
											content: '分享图片太大,需要请重新选择图片11!',
											showCancel: false
										})
									});


								}
							});
						}
					});


				})
			},

			shareWx_h5_init() {
				var that = this;
				this.$apiJs.getSignPackage({
					url: location.href,
				}).then(res => {
					this.shareData.appId = res.appId;
					//data是微信配置信息，option是分享要配置的内容
					wxapi.wxRegister(res, {
						title: that.info.title,
						link: res.url,
						imgUrl: that.info.img.length ? that.info.img[0].url : '',
						desc: that.info.desc,
						success: function() {
							that.shareFlag = true;
						},
						error: function() {
							// console.log('分享error');
						}
					});
				})
			},
			linkPress(obj) {
				obj.ignore(
					uni.navigateTo({
						url: `/pages/package_other/webview?url=${obj.href}`
					})
				)
			},
			parserLoad() {},
			getInfo(id) {
				// console.log(id)
				var that = this;
				this.$apiJs.getNewsInfo({
					id: id
				}).then(res => {
					// console.log(res)
					that.wordTitle = res.title
					
					// console.log(that.article)
					
					// 拿到手机端发布的图片
					that.showImageApp = res.img
					// console.log(that.showImageApp)
					// 是显示手机发布的封面图
					// console.log(res.equipment)
					if (res.equipment == 1) {
						this.isShowImageCover = true
					}
					// this.isShowImageCover = (res.content.content.indexOf('</p>') == -1) ? true :false
					// console.log(this.isShowImageCover)
					// var dde = 	res.content.content
					// console.log(dde)
					// var ddr = dde.indexOf('</p>')
					// if (ddr != -1) {
					//  this.isShowImageCover = false
					// }
					var r_data = res;
					
					r_data.time = that.$commonJs.timeFormat.noYearFormat(r_data.create_time);
					var htmlString = r_data.content.content.replace(new RegExp(
							'<iframe', "gm"),
						'<iframe style="border:0;width:auto;height:auto;" allowtransparency="yes"  width="auto" height="auto" frameborder="no" scrolling="no"  allowfullscreen'
					).replace(new RegExp(
						'<embed', "gm"), '<audio controlsList="nodownload" controls style="outline:none;height:40px;"').replace(new RegExp(
						'embed>', "gm"), 'audio>').replace(new RegExp(
						'src="/', "gm"), 'src="https://www.youzikankan.com/')
						
				

					// r_data.desc = r_data.content.content.replace(/<[^>]+>/g, "").replace(/&nbsp;/ig, "").substring(0, 50);
					// 获取播放的纯文字
					r_data.desc = r_data.content.content.replace(/<[^>]+>/g, "").replace(/&nbsp;/ig, "").substring(0,500);
					that.article = r_data.desc
					// console.log(that.article)
					
					r_data.content = htmlString;
					that.info = r_data;
					that.setTitle("游子看看");
					if (uni.getStorageSync("accesstoken")) {
						this.getFollowCode();
					}
					document.getElementsByTagName("title")[0].innerHTML = that.info.title
				}).then(() => {
					// #ifdef H5
					this.shareWx_h5_init();
					// #endif
				})
			},
			showErrorImage(e) {
				const index = e.target.dataset.index;
				this.info.user_img = this.$errorImage;
			},
			// 给新闻收藏
			shoucangNew() {
				var that = this;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setCollectionNews({
						news_id: that.id,
					}).then(res => {
						this.getCollectionNews()
					})
				})
			},
			// 获取新闻收藏状态
			getCollectionNews() {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getCollectionNews({
						id: that.id,
					}).then(res => {
						if (res != 'seeOther') {
							this.shoucangFlag = Number(res);
						} else {
							this.userLogin = false;
						}
					})
				})
			},
			huifu(i) {
				if (this.userLogin) {
					if (i.plNum) {
						this.navTo('plInfo', i);
					} else {
						// console.log('弹出评论面板');
						this.otherUser = i.user_id; //被回复的人
						this.pl_id = i.id; //被回的id
						this.$refs.plPanel.showPl();
					}
				} else {
					this.$commonJs.toLoginPage()
				}
			},
			openPl() {
				if (this.userLogin) {
					this.$refs.plPanel.showPl();
				} else {
					this.$commonJs.toLoginPage()
				}
			},
			// 给新闻点赞
			dianzanNew() {
				var that = this;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setFabulousNews({
						news_id: that.id,
					}).then(res => {
						this.getFabulousNewsCode()
						this.showZanAni();
					})
				})
			},
			// 获取新闻点赞状态
			getFabulousNewsCode() {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getFabulousNewsCode({
						id: that.id,
					}).then(res => {
						if (res != 'seeOther') {
							this.zanFlag = res;
						}
					})
				})
			},
			// 关注该作者
			setFollow() {
				var that = this;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setFollow({
						author_id: that.info.author_id,
					}).then(res => {
						this.getFollowCode()
					})
				})
			},
			// 获取关注状态
			getFollowCode() {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getFollowCode({
						id: that.info.author_id,
					}).then(res => {
						this.guanFlag = res;
					})
				})
			},
			// 给评论点赞
			dianzan(i) {
				var that = this;
				var zanid = i.id;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setFabulousUser({
						news_id: that.id,
						to_user_id: i.user_id,
						comment_id: zanid,
					}).then(res => {
						// this.getFabulousUserCode()
						this.getPingLun();
					})
				})
			},
			// 获取评论点赞状态 
			getFabulousUserCode() {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getFabulousUserCode({
						id: that.id,
					}).then(res => {
						this.zanFlag = res;
					})
				})
			},
			submitPl(c) {
				var that = this;
				if (this.otherUser) {
					// 回复评论
					this.$apiJs.replyComment({
						news_id: that.id,
						content: c,
						author_id: this.otherUser,
						content_id: this.pl_id,
					}).then(res => {
						// console.log(res);
						if (res) {
							this.$commonJs.uniMsg('回复成功');
							this.$refs.plPanel.closePl();
							this.getPingLun();
						}
					})
				} else {
					// 普通评论
					this.$apiJs.setComment({
						news_id: that.id,
						content: c,
						author_id: this.info.author_id,
					}).then(res => {
						// console.log(res);
						if (res) {
							this.$commonJs.uniMsg('评论成功');
							this.$refs.plPanel.closePl();
							this.getPingLun();
						}
					})
				}
			},
			// 评论列表
			getPingLun() {
				var that = this;
				this.$apiJs.getLoginComment({
					id: that.id,
				}).then(res => {

					if (res != 'seeOther') {
						var r_data = res;
						if (r_data.length) {
							res.map((item, index) => {
								item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
							})
							this.plList = res;
						} else {
							this.noPingLun = true;
						}
					} else {
						this.$apiJs.getComment({
							id: that.id,
						}).then(res => {
							if (res.length) {
								var r_data = res;
								res.map((item, index) => {
									item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
								})
								this.plList = res;
							} else {
								this.noPingLun = true;
							}
						})
					}
				})
			},
			openPingLunInfo(i) {
				uni.navigateTo({
					url: './plInfo?new_id=' + this.id + '&author_id=' + i.user_id + '&content_id=' + i.id + ''
				})
			},
			navTo(url, param) {
				this.$commonJs.navTo(url + '?id=' + param.name + '')
			},
			setTitle(t) {
				uni.setNavigationBarTitle({
					title: t
				})
			},
		},
		onLoad(option) {
			// 语音播放
			this.openVoice();

			this.getdayranking();

			this.id = option.id;
			// #ifdef H5
			var that = this;
			if (uni.getSystemInfoSync().platform == 'ios' && option.isShare > 0) {
				history.replaceState(null, null, location.href + "&isShare=0");
			}
			// #endif

			this.getInfo(option.id);

			this.getPingLun(option.id);
			if (!option.from) {
				this.getFabulousNewsCode();
				this.getCollectionNews();
			}
			// 如果是分享过来的，把评论隐藏
			if (option.from) {
				this.showPL = false;
			}



		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		font-size: 32rpx;
	}

	.container {
		-moz-user-select: text;
		-webkit-user-select: text;
		-ms-user-select: text;
		user-select: text;
	}

	/* logo 、  下载 */
	.top-logo {
		font-size: 40rpx;
		font-weight: 800;
		background-color: #C34944;
		color: #FFFFFF;
		text-align: center;
		padding: 20rpx 0;
	}

	.dowm-bottom {
		height: 120rpx;
	}

	.logo-text {
		font-size: 30rpx;
		font-weight: 500;
	}

	.downBtn {
		margin: 20rpx;
		line-height: 56rpx;
		height: 56rpx;
		font-weight: 500;
		background-color: #C34944;
		color: #fff;
		text-align: center;
		min-width: 144rpx;
		font-size: 28rpx;
		border-radius: 28rpx;
	}




	.container {
		padding: 30rpx;
		box-sizing: border-box;
		// #ifdef APP-PLUS
		// padding-top: 88rpx;
		// #endif
	}


	.grayBg {
		// background-color: $yzkk-body-gray-color !important;
		border: 1px solid #eeeeee;
		color: #999999 !important;
		background-color: #ffffff !important;
		border-radius: 10rpx;
	}


	.title {
		font-size: 36rpx;
		font-weight: 800;
		margin-bottom: 40rpx;
	}

	.author {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			margin-right: 10rpx;
		}

		.name {
			font-size: 28rpx;
			font-weight: 800;
		}

		.time {
			font-size: 22rpx;
			color: #999999;
		}

		.gz-btn {
			width: 110rpx;
			height: 56rpx;
			line-height: 56rpx;
			color: #FFFFFF;
			text-align: center;
			font-size: 28rpx;
			background: rgba(228, 98, 98, 1);
			border-radius: 6rpx;
		}
	}

	.content {
		margin-top: 30rpx;
		min-height: 300rpx;
		margin-bottom: 140rpx;

		.seePeople {
			margin-top: 30rpx;
			color: #999999;
			font-size: 24rpx;
		}

		image,
		img,
		video {
			max-width: 100%;
			height: auto;
		}

		section {
			max-width: 100% !important;
			height: auto !important;
		}
	}

	.content /deep/ img {
		max-width: 100%;
	}

	.content /deep/ video {
		max-width: 100%;
		height: 400rpx !important;
	}

	.content /deep/ iframe {
		max-width: 100%;
		border: 0;
		height: auto !important;
	}

	.content /deep/ section {
		max-width: 100%;
	}

	.content /deep/ div {
		max-width: 100%;
	}

	.bottom-opt {
		.opt {
			image {
				width: 36rpx;
				height: 36rpx;
			}
		}

		.openPl {
			width: 400rpx;
			background-color: #F4F4F4;
			border-radius: 32rpx;
			height: 64rpx;
			line-height: 64rpx;
			font-size: 24rpx;

			image {
				width: 31rpx;
				height: 36rpx;
				margin-right: 20rpx;
				margin-left: 20rpx;
			}

		}

	}

	.animate-wrap {
		display: inline-block;
		margin-right: 10px;
		position: absolute;
		width: 100upx;
	}


	.ani-icon {
		position: absolute;
		font-size: 30upx;
		color: white;
		text-align: center;
		line-height: 50upx;
		width: 80upx;
		transform: translateY(0);

		.ani-icon-img {
			width: 40rpx;
			height: 40rpx;
		}
	}


	.share-icon {
		color: #07c160;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #eaeaea;
		margin: 20rpx auto;

		i.uni-icon-weixin {
			color: #07c160;
		}

		i.uni-icon-pengyouquan {
			color: #FFC107;
		}
	}

	.hotSeach {
		height: 90rpx;
		width: 100%;
		border-bottom: 1px solid #d4d4d4;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.titleHot {
		display: block;
		font-size: 30rpx;
		font-weight: bold;
		overflow: hidden;
		/*超出部分隐藏*/
		white-space: nowrap;
		/*不换行*/
		text-overflow: ellipsis;
		/*超出部分文字以...显示*/
		margin: 0 10rpx;
	}

	.hot {
		.hotSeach:nth-child(1) {
			.txt:nth-child(1) {
				background-color: #fe2c43;
				padding: 0 10rpx;
				line-height: 32rpx;
				border-radius: 5rpx;
				color: #FFFFFF;
			}
		}

		.hotSeach:nth-child(2) {
			.txt:nth-child(1) {
				background-color: #fd7f44;
				padding: 0 10rpx;
				line-height: 32rpx;
				border-radius: 5rpx;
				color: #FFFFFF;
			}
		}

		.hotSeach:nth-child(3) {
			.txt:nth-child(1) {
				background-color: #ffa932;
				padding: 0 10rpx;
				line-height: 32rpx;
				border-radius: 5rpx;
				color: #FFFFFF;
			}
		}
	}

	.txt {
		color: #888888;
	}

	.speech {
		position: fixed;
		right: 0;
		top: 70%;
		width: 160rpx;
		background-color: #c34944;
		color: #FFFFFF;
		border-top-left-radius: 40rpx;
		border-bottom-left-radius: 40rpx;
		border-top-right-radius: 0rpx;
		border-bottom-right-radius: 0rpx;
	}
	.speechlist{ 
		display: flex;
		justify-content: space-around;
		align-items: center;
		.laba{
			width: 35rpx;
			height: 35rpx;
		}
		.speechBtn {
			height: 70rpx;
			line-height: 70rpx;
			margin-top: 0 !important;
		}
	}
	
</style>
