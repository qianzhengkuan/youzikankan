<template>
	<!-- 我的 -->
	<view class="container">
		<view class="status"></view>
		<view class="user-top flex-box flex-y-center">
			<image class="hadImg" :src="user.image ? user.image : user.defaultHeadImg" @error="showErrorImage" mode="aspectFill"
			 @click="navTo(user.username ? '/pages/package_user/editUserInfo' : '/pages/package_other/login')"></image>
			<view class="flex-box flex-1 flex-column user-t-center" @click="navTo(user.nickname ? '/pages/package_user/editUserInfo' : '/pages/package_other/login')">
				<view class="name-txt  flex-box flex-y-center">
					<text class="name text-over">{{user.nickname ? user.nickname: '未登录'}}</text>
					<image class="rightIcon" v-if="user.nickname" src="../../static/images/icon/rightIcon.png" style="width: 27rpx;height: 27rpx;margin-left: 10rpx;" mode=""></image>
				</view>
				<!-- <view class="fensi" v-if="user.username">
					<text>关注 {{user.guanzhuNum}}</text>
					<text>粉丝 {{user.fensiNum}}</text>
				</view> -->
			</view>
			<view class="vip" @click="navTo('')" v-if="user.nickname">
				<text>{{user.vipLevel ? 'vip'+user.vipLevel :'加入会员'}}</text>
			</view>
		</view>
		<!-- 操作项 -->
		<view class="user-links-wrap" v-for="(item,index1) in linksArr" :key="index1">
			<p class="u-l-title">{{item.title}}</p>
			<view class="links-list flex-box flex-wrapLine">
				<view class="link-item flex-box flex-xy-center flex-column" v-for="(link,index2) in item.link" :key="index2"
				 hover-class="yzkk-href-hover" @click="navTo(link.url)">
					<image :src="link.icon" mode=""></image>
					<text>{{link.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				user: {
					defaultHeadImg: "/static/images/icon/defLogo.png"
				},
				linksArr: [{
						title: '常用功能',
						link: [
							{
								icon: this.$images + '/images/icon/fabuzh.png',
								text: '我的发布',
								url: "../package_user/myFabu"
							},
							 {
								icon: this.$images + '/images/icon/zaixian.png',
								text: '发布文章',
								// url: ""
								url: "../package_new/addNew"
							},
							{
								icon: this.$images + '/images/icon/shanghuipeo.png',
								text: '我的商会',
								url: "../package_shanghui/mySH"
							},{
								icon: this.$images + '/images/icon/fabu.png',
								text: '发布活动',
								// url: "/package_activity/activityAdd",
								url: ""
							},
							
						]
					},
					// {
					// 	title: '会员制度',
					// 	link: [{
					// 		icon: this.$images + '/images/icon/huiyuan.png',
					// 		text: '会员管理',
					// 		url: "/pages/vips/vipList"
					// 	}, {
					// 		icon: this.$images + '/images/icon/huiyaunfuwu.png',
					// 		text: '会员服务',
					// 		url: "/pages/vips/vipList"
					// 	}, {
					// 		icon: this.$images + '/images/icon/guizhang.png',
					// 		text: '规章制度',
					// 		url: ''
					// 	}]
					// },
					{
						title: '我的圈子',
						link: [{
								icon: this.$images + '/images/icon/huiyuan.png',
								text: '我的粉丝',
								url: "../package_user/myFans"
							},
							{
								icon: this.$images + '/images/icon/huiyaunfuwu.png',
								text: '我的关注',
								url: "../package_user/myFollow"
							},
							{
								icon: this.$images + '/images/icon/shoucang-02.png',
								text: '我的收藏',
								url: "../package_user/myShouCang"
							},
							{
								icon: this.$images + '/images/icon/huodogn.png',
								text: '商会活动',
								url: "../package_activity/activityList"
							}
						]
					},
					{
						title: '更多功能',
						link: [
							// {
							// 	icon: this.$images + '/images/icon/caiwu.png',
							// 	text: '财务管理',
							// 	url: ''
							// }, 
							{
								icon: this.$images + '/images/icon/huodongbaoming.png',
								text: '活动',
								url: "../package_user/myActivity"
							},
							{
								icon: this.$images + '/images/icon/shezhi.png',
								text: '系统设置',
								url: "../package_user/setting"
							},
							{
								icon: this.$images + '/images/icon/yhfankui.png',
								text: '用户反馈',
								url: "../package_user/feedback"
							},
							{
								icon: this.$images + '/images/icon/liulanlishi.png',
								text: '浏览历史',
								url: "../package_user/history"
							}
						]
					}
				]
			}
		},
		onShow() {
			if (uni.getStorageSync('userInfo').username) {
				// 判断是不是微信登陆
				if (this.$store.state.iswxLogin) {
					this.getUserInfowx();
				} else {
					this.getUserInfo();
				}
			} else {
				this.user = {
					defaultHeadImg: "/static/images/icon/defLogo.png"
				}
			}
		},
		methods: {
			showErrorImage() {
				console.log('cuo');
				this.user.image = this.$errorImage;
			},
			navTo(url) {
				this.$commonJs.isLogin().then(res => {
					if (res) {
						if (url) {
							this.$commonJs.navTo(url)
						} else {
							this.$commonJs.uniMsg('等待程序员小宇宙爆发吧！')
						}
					}
				})
			},
			guanzhuFn() {
				console.log('右上角关注')
			},
			shareOr() {
				console.log('右上角分享')
			},
			getUserInfo() {
				var that = this;
				this.$apiJs.getUser({}).then(res => {
					if (res) {
						console.log(res);
						uni.setStorageSync('userInfo', res);
						that.$store.dispatch('setUserInfoObj', res) // 存储vuex
						this.user = res;
					}
				})
			},
			//微信登陆
			getUserInfowx() {
				var that = this;
				this.$apiJs.getUser({}).then(res => {
					if (res) {
						// console.log(res);
						var obj = res
						obj.image = uni.getStorageSync('avatarUrl')
						console.log(obj.image)
						uni.setStorageSync('userInfo', obj);
						// console.log(obj)
						that.$store.dispatch('setUserInfoObj', obj) // 存储vuex
						this.user = obj
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $yzkk-body-gray-color;
	}

	.status {
		background-color: #FFFFFF !important;
	}

	.whiteBg {
		width: 100%;
		background-color: #fff;
		margin-bottom: 24rpx;
		box-sizing: border-box;
		padding: 30rpx;
		// #ifdef MP-WEIXIN
		padding-top: 60rpx;
		// #endif
	}

	.user-top {
		height: 168rpx;
		@extend .whiteBg;
		padding-right: 0;

		image.hadImg {
			width: 108rpx;
			height: 108rpx;
			margin-right: 22rpx;
			border-radius: 50%;
			border: 1px solid #f1f1f1;
		}

		.user-t-center {
			.name-txt {
				max-width: 240rpx;
				padding-right: 30rpx;

				&::after {
					right: 16rpx;
				}
			}

			.name {
				max-width: 240rpx;
				font-size: 30rpx;
				font-weight: 800;
			}

			.rightIcon {
				width: 36rpx;
				height: 36rpx;
			}


			.fensi text {
				font-size: 24rpx;
				margin-right: 20rpx;
			}
		}

		.vip {
			width: 140rpx;
			height: 48rpx;
			background: rgba(254, 244, 245, 1);
			color: #E46262;
			border-radius: 24rpx 0px 0px 24rpx;
			text-align: center;
			line-height: 1;

			text {
				font-size: 24rpx;
			}
		}
	}

	.user-links-wrap {
		@extend .whiteBg;

		.u-l-title {
			font-size: 34rpx;
			font-weight: 800;
			margin-bottom: 28rpx;
		}

		.links-list {
			.link-item {
				width: 172rpx;
				height: 172rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-bottom: 24rpx;
				}

				text {
					font-size: 24rpx;
				}
			}
		}
	}
</style>
