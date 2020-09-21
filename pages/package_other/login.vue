<template>
	<!-- 登录 / 注册-->
	<view class="container">
		<view class="close-top" @click="closeLogin()">
			<image src="../../static/images/icon/cuowu.png" mode=""></image>
		</view>
		<!-- <view class="top-logo">游子看看</view> -->
		<view class="top-logo">
			<image src="../../static/images/icon/youzikankanlogo.png" mode=""></image>
		</view>
		<view class="center" v-show="!type">
			<input class="bd-bottom input-item" type="text" name="account" autocomplete="off" v-model="loginData.account"
			 placeholder="账号" />
			<input password class="bd-bottom input-item" type="password" name="l_password" autocomplete="off" v-model="loginData.l_password"
			 placeholder="密码" />
			<button class="yzkk-submitBtn" @click="submitlogin" hover-class="yzkk-btn-hover" :loading="loginLoading">登录</button>
			<view class="flex-box flex-left-right-between">
				<!-- <text class="r-text"  @click="type ? type=0 : type=1">立即注册</text> -->
				<text class="r-text" @click="type ? type=0 : type=1">手机号登录</text>
				<text class="f-text" @click="navTo('forgetPsd')">忘记密码</text>
			</view>
		</view>
		<view class="center" v-show="type">
			<input class="bd-bottom input-item" type="number" name="phone" v-model="registerData.phone" placeholder="手机号" />
			<!-- <input class="bd-bottom input-item" type="text" name="r_password" v-model="registerData.r_password" placeholder="密码"  /> -->
			<view class="flex-box flex-y-center input-item flex-left-right-between">
				<input type="number" name="code" v-model="registerData.code" placeholder="验证码" />
				<button class="yzkk-submitBtn getCode" hover-class="yzkk-btn-hover" @click="getCode" :disabled="getOver">{{getCodeText}}</button>
			</view>
			<button class="yzkk-submitBtn" @click="submitRegister" hover-class="yzkk-btn-hover" :loading="registerLoading">登录</button>
			<!-- <button class="yzkk-submitBtn" @click="submitRegister" hover-class="yzkk-btn-hover" :loading="registerLoading">注册</button> -->
			<view class="flex-box flex-left-right-between">
				<text class="r-text" @click="type ? type=0 : type=1">密码登录</text>
				<!-- <text class="r-text"  @click="type ? type=0 : type=1">立即登录</text> -->
				<text class="f-text" @click="navTo('forgetPsd')">忘记密码</text>
			</view>

		</view>


		<!-- 第三方登陆 -->
		<!-- #ifdef APP-PLUS -->
		<view class="authLogin flex-box flex-xy-center" v-if="weixinLoginisShow">
			<image v-for="(item,index) in providerList" v-if="item.id=='weixin'" :src="item.icon" mode="aspectFill" @click="authlogin(item.id)"></image>
		</view>
		<!-- #endif -->
		<view class="bottom">
			登录即同意“<navigator url="../package_other/userXY">用户协议</navigator>”和“<navigator url="../package_other/yszc">隐私政策</navigator>”
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				weixinLoginisShow: false,
				auth_time: 60,
				type: 0,
				bottomText: ['没有账号，去注册', '已有账号，去登陆'],
				getCodeText: '获取验证码',
				getOver: false,
				loginLoading: false,
				registerLoading: false,
				loginData: {
					account: '',
					l_password: ''
				},
				registerData: {
					phone: '',
					code: '',
					r_password: ''
				},
				providerList: [{
					providerName: '微信登录',
					icon: '../../static/wxIcon.png',
					id: 'weixin'
				}]
			}
		},
		onLoad() {
			this.isweixLogin()
		},

		methods: {
			isweixLogin() {
				uni.request({
					url: 'http://www.youzikankan.com/api/v1/get-wechat-show',
					// url: 'http://testfas.youzikankan.com/api/v1/get-wechat-show',
					method: 'GET',
					header: {
						'Content-Type': 'application/json'
					},
					success: (res) => {
						console.log(res.data.data)
						if (res.data.data == 1) {
							this.weixinLoginisShow = false
						} else {
							this.weixinLoginisShow = true
						}
					},
				})
			},
			closeLogin() {
				this.$commonJs.navBack()
			},
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			getCode() {
				var Rules = [{
						name: 'phone',
						type: 'required',
						errmsg: '请输入手机号'
					},
					{
						name: 'phone',
						type: 'phone',
						errmsg: '请输入正确的手机号'
					}
				];
				let valLoginRes = this.$validate.validate(this.registerData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				this.getCode();

			},
			getCode() {
				var that = this;
				this.$apiJs.getCode({
					phone: this.registerData.phone,
				}).then(res => {
					if (res) {
						that.$commonJs.uniMsg('发送成功', 'success')
						var auth_timetimer = setInterval(() => {
							that.auth_time--;
							that.getCodeText = this.auth_time + '后获取';
							that.getOver = true;
							if (that.auth_time <= 0) {
								that.getCodeText = '获取验证码';
								that.getOver = false;
								clearInterval(auth_timetimer);
							}
						}, 1000);
					}
				})
			},
			// 账号密码登陆
			submitlogin() {
				var that = this;
				let Rules = [{
						name: 'account',
						type: 'required',
						errmsg: '请输入账号'
					},
					{
						name: 'l_password',
						type: 'required',
						errmsg: '请输入密码'
					},
				]
				let valLoginRes = this.$validate.validate(this.loginData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				this.passowrdLogin();
				// var params = {name: "similar", age: 18, password: "1515"};
				// this.loginLoading=true;
				// console.log(this.$md5.getSign(params));			
				// setTimeout(function() {
				// 	that.$commonJs.uniMsg('登录成功', 'success')
				// 	that.loginLoading=false;
				// 	// uni.redirectTo({
				// 	// 	url:''
				// 	// })
				// 	console.log('跳转首页');
				// }, 1000);
			},
			passowrdLogin() {
				var that = this;
				this.$apiJs.login({
					phone: this.loginData.account,
					password: this.loginData.l_password
				}).then(res => {
					console.log(res);
					if (res.accesstoken) {
						uni.setStorageSync('accesstoken', res.accesstoken);
						this.loginLoading = true;
						this.registerLoading = false;
					}
				}).then(() => {
					this.getUserInfo();
				})
			},
			submitRegister() {
				let Rules = [{
						name: 'phone',
						type: 'required',
						errmsg: '请输入手机号'
					},
					{
						name: 'phone',
						type: 'phone',
						errmsg: '请输入正确的手机号'
					},
					// {
					// 	name: 'code',
					// 	type: 'required',
					// 	errmsg: '请输入验证码'
					// },
					// {
					// 	name: 'r_password',
					// 	type: 'required',
					// 	errmsg: '请输入密码'
					// },
				]
				let valLoginRes = this.$validate.validate(this.registerData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				this.phoneLogin();
			},
			phoneLogin() {
				var that = this;
				this.$apiJs.phoneLogin({
					phone: this.registerData.phone,
					code: this.registerData.code
				}).then(res => {
					console.log(res);
					if (res.accesstoken) {
						// this.$commonJs.uniMsg('注册成功', 'success');
						uni.setStorageSync('accesstoken', res.accesstoken);
						this.registerLoading = true;
						this.loginLoading = false;
					}
				}).then(() => {
					this.getUserInfo();
				})
			},
			getUserInfo() {
				var that = this;
				this.$apiJs.getUser({}).then(res => {
					if (res) {
						console.log(res);
						uni.setStorageSync('userInfo', res);
						that.$store.dispatch('setUserInfoObj', res) // 存储vuex
					}
				}).then(() => {
					setTimeout(function() {
						that.$commonJs.uniMsg('登录成功', 'success')
						that.loginLoading = false;
						uni.switchTab({
							url: '/pages/tabbar/index'
						})
						console.log('跳转首页');
					}, 500);
				})
			},
			getAuth() {
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						console.log(JSON.stringify(result));
						this.providerList = result.provider.map((value) => {
							let providerName = '',
								icon = '';
							switch (value) {
								case 'weixin':
									providerName = '微信登录'
									icon = '../../static/wxIcon.png'
									break;
								case 'qq':
									providerName = 'QQ登录'
									icon = '../../static/qqIcon.png'
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录'
									icon = '../../static/wbIcon.png'
									break;
								case 'xiaomi':
									providerName = '小米登录'
									break;
								case 'alipay':
									providerName = '支付宝登录'
									break;
								case 'baidu':
									providerName = '百度登录'
									break;
								case 'toutiao':
									providerName = '头条登录'
									break;
								case 'apple':
									providerName = '苹果登录'
									break;
							}
							return {
								name: providerName,
								icon: icon,
								id: value
							}
						});

					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
			},
			// 第三方授权登陆
			authlogin(i) {
				console.log(i)

				uni.login({
					provider: i,
					success: (res) => {
						console.log('login success:', res);
						uni.getUserInfo({
							provider: i,
							success: (result) => {
								console.log('getUserInfo success', result.userInfo);
								//存储微信头像
								uni.setStorageSync('avatarUrl', result.userInfo.avatarUrl)
								this.$store.commit('iswxLoginEvt', true)

								this.$apiJs.weixinLogin(result.userInfo).then(res => {
									console.log(res);
									if (res.accesstoken) {
										// this.$commonJs.uniMsg('注册成功', 'success');
										uni.setStorageSync('accesstoken', res.accesstoken);
									}
								}).then(() => {
									// this.getUserInfo();
									// 调起获取用户信息
									var that = this;
									this.$apiJs.getUser({}).then(res => {
										if (res) {
											// console.log(res);
											var obj = res
											obj.image = uni.getStorageSync('avatarUrl')
											// console.log(obj.image)
											uni.setStorageSync('userInfo', obj);
											// console.log(obj)
											that.$store.dispatch('setUserInfoObj', obj) // 存储vuex
										}
									}).then(() => {
										setTimeout(function() {
											that.$commonJs.uniMsg('登录成功', 'success')
											that.loginLoading = false;
											uni.switchTab({
												url: '/pages/tabbar/index'
											})
											console.log('跳转首页');
										}, 500);
									})
								})
							},
							fail: (error) => {
								console.log('getUserInfo fail', error);
								let content = error.errMsg;
								if (~content.indexOf('uni.login')) {
									content = '请在登录页面完成登录操作';
								}
								// #ifdef APP-PLUS
								uni.showModal({
									title: '获取用户信息失败',
									content: '错误原因' + content,
									showCancel: false
								});
								// #endif
							}
						});
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			}
		},
		mounted() {
			//#ifndef H5
			this.getAuth();
			//#endif
		}
	}
</script>

<style lang="scss">
	.center-con {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		// #ifdef APP-PLUS || MP-WEIXIN
		padding-top: 88rpx;

		// #endif
		.close-top {
			padding: 36rpx 0 0 36rpx;
			box-sizing: border-box;

			image {
				width: 29rpx;
				height: 29rpx;
			}
		}

		.top-logo {
			margin: 0 auto;
			flex: 1;
			font-weight: 800;
			color: $yzkk-theme-color;
			@extend .center-con;

			image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 50%;
			}
		}

		.center {
			padding: 0 30rpx;
			box-sizing: border-box;
			flex: 2;
			flex-direction: column;

			.input-item {
				height: 88rpx;
				line-height: 88rpx;
				width: 92%;
				padding: 0 30rpx;
				margin: 0 auto;
				margin-bottom: 22rpx;
				text-indent: 20rpx;

				input {
					font-size: 32rpx;
				}
			}

			.yzkk-submitBtn {
				margin: 50rpx auto 40rpx auto;
				height: 88rpx;
				line-height: 88rpx;
				border-radius: 44rpx;
			}

			.getCode {
				background-color: #ffffff;
				border: 1px solid $yzkk-theme-color;
				color: $yzkk-theme-color;
				height: 70rpx;
				line-height: 70rpx;
				margin: 0;
				font-size: 26rpx;
				width: 220rpx;
				text-indent: 0rpx;
			}


			.r-text {
				color: $yzkk-theme-color;
				font-size: 30rpx;
			}

			.f-text {
				font-size: 30rpx;
				color: #999999;
			}

		}

		.authLogin {
			image {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
			}
		}


		.bottom {
			height: 130rpx;
			@extend .center-con;
			color: #999999;
			font-size: 28rpx;

			navigator {
				color: #0066CC;
			}
		}

	}
</style>
