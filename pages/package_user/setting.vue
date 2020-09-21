<template>
	<!-- 系统设置 -->
	<view class="container flex-box flex-column">
		<view class="flex-1">
			<view class="flex-box set-item bd-bottom jiantouRight lineJianTou" hover-class="yzkk-href-hover">
				<view class="flex-1" @click="navTo('editUserInfo')">
					<text class="label">个人资料</text>
				</view>
			</view>
			<!-- <view class="flex-box set-item bd-bottom jiantouRight lineJianTou uni-common-mb" hover-class="yzkk-href-hover">
				<view class="flex-1" @click="navTo('security')">
					<text class="label">账号安全</text>
				</view>
			</view> -->

			<view class="flex-box set-item bd-bottom jiantouRight lineJianTou uni-common-mb" hover-class="yzkk-href-hover"
			 @click="navTo(`editPsdOrPhone?type=1&hasPsd=${hasPsd}`)">
				<view class="flex-1">
					<text class="label">{{hasPsd ? '修改密码' : '设置密码'}}</text>
				</view>
			</view>

			<!-- #ifdef APP-PLUS -->
			<!-- <view class="flex-box set-item bd-bottom" hover-class="yzkk-href-hover">
				<view class="flex-1">
					<text class="label">检查更新</text>
				</view>
				<view class="flex-box flex-y-center">
					<text>{{system.version}}</text>
				</view>
			</view> -->
			<!-- #endif -->


		</view>
		<!-- <view class="flex-box set-item bd-bottom  " hover-class="yzkk-href-hover">
			<view class="flex-1">
				<text class="label">清除缓存</text>
			</view>
			<text>3M</text>
		</view>
		<view class="flex-box set-item bd-bottom" hover-class="yzkk-href-hover">
			<view class="flex-1">
				<text class="label">消息</text>
			</view>
			<view class="flex-box flex-y-center">
				<switch checked="true" :checked="openInfoFlag" color="#E56361" @change="openInfo" />
			</view>
		</view> -->

		<!-- 检查更新 -->


		<view class="yzkk-submitBtn" @click="exit()" hover-class="yzkk-btn-hover">退出</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openInfoFlag: false,
				phone: '',
				hasPsd: false,
				system: {
					version: ''
				}
			}
		},
		methods: {
			openInfo(e) {
				this.openInfoFlag = e.target.value;
			},
			exit() {
				uni.clearStorageSync('accesstoken')
				uni.setStorageSync('userInfo', {
					defaultHeadImg: "/static/images/icon/defLogo.png"
				});
				this.$commonJs.getBeforePage().user = {
					defaultHeadImg: "/static/images/icon/defLogo.png"
				};
				this.$store.dispatch('clearUserInfoObj', '')
				// uni.redirectTo({
				// 	url:'../login'
				// })
				uni.navigateBack({
					delta: 1
				})
			},
			navTo(url) {
				var that = this;
				this.$commonJs.isLogin().then((flag) => {
					if (flag) {
						if (url == 'editUserInfo') {
							this.$commonJs.navTo(url)
						} else {
							uni.showModal({
								title: '修改登陆密码',
								content: '将给手机' + this.phone + '发送验证码',
								confirmColor: '#C34944',
								success: function(res) {
									if (res.confirm) {
										that.getCode(url);
									}
								}
							});
						}
					}
				})
			},
			checkNew() {
				// this.$commonJs.checkNew({
				// }).then(res=>{
				// 	console.log(res);
				// })
			},
			getCode(u) {
				this.$apiJs.getCode({
					phone: this.$store.state.userInfo.phone,
				}).then(res => {
					if (res) {
						this.$commonJs.navTo(u)
					}
				})
			},
			// 判断是否存在密码
			hasPsdFlag() {
				if (this.$store.state.userInfo.pwd_type) {
					this.hasPsd = true;
				}
			}
		},
		onLoad(option) {
			// #ifdef APP-PLUS
			this.system.version = plus.runtime;
			// #endif
			var p = uni.getStorageSync('userInfo').phone;
			this.phone = p.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
			this.hasPsdFlag();

		}
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}

	.set-item {
		background-color: #FFFFFF;
		padding: 0 30rpx;
		height: 98rpx;
		line-height: 98rpx;
		box-sizing: border-box;

		text {
			font-size: 30rpx;
			color: #A7A7A7;
		}

		.label {
			color: #000000;
		}
	}

	.lineJianTou::after {
		right: 45rpx;
	}
</style>
