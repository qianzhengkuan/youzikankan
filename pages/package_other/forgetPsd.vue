<template>
	<!-- 忘记密码 -->
	<view class="container">

		<view class="bd-bottom input-item">
			<view class="label">手机号</view>
			<input type="number" name="phone" v-model="forgetData.phone" placeholder="手机号" />
		</view>
		<view class="bd-bottom input-item">
			<view class="label">验证码</view>
			<view class="flex-box flex-y-center flex-left-right-between">
				<input type="number" name="code" v-model="forgetData.code" placeholder="验证码" />
				<button class="yzkk-submitBtn getCode" hover-class="yzkk-btn-hover" @click="getCode" :disabled="getOver">{{getCodeText}}</button>
			</view>
		</view>
		<view class="bd-bottom input-item">
			<view class="label">新密码</view>
			<input type="password" name="password" autocomplete="off" v-model="forgetData.password" placeholder="新密码" />
		</view>

		<button class="yzkk-submitBtn" @click="submitForm" hover-class="yzkk-btn-hover">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				auth_time:6,
				getCodeText: '获取验证码',
				getOver: false,
				forgetData: {
					phone: '',
					code: '',
					password: ''
				}
			}
		},
		methods: {
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
				let valLoginRes = this.$validate.validate(this.forgetData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				this.sendAuthCode = false;
				
				var auth_timetimer = setInterval(() => {
					this.auth_time--;
					this.getCodeText = this.auth_time + '后获取';
					this.getOver = true;
					if (this.auth_time <= 0) {
						this.sendAuthCode = true;
						this.getCodeText = 's后重新获取';
						this.getOver = false;
						clearInterval(auth_timetimer);
					}
				}, 1000);
			},
			getCode(){
				var that = this;
				this.$apiJs.getCode({
					phone:this.registerData.phone,
				}).then(res => {
					if(res){
						that.$commonJs.uniMsg('发送成功', 'success')
						var auth_timetimer = setInterval(() => {
							that.auth_time--;
							that.getCodeText = this.auth_time + '后获取';
							that.getOver = true;
							if (that.auth_time <= 0) {
								that.getCodeText = 's后重新获取';
								that.getOver = false;
								clearInterval(auth_timetimer);
							}
						}, 1000);
					}
				})
			},
			submitForm() {
				var that = this;
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
					{
						name: 'code',
						type: 'required',
						errmsg: '请输入验证码'
					},
					{
						name: 'password',
						type: 'required',
						errmsg: '请输入密码'
					},
				]
				let valLoginRes = this.$validate.validate(this.forgetData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				this.loginLoading = true;
				setTimeout(function() {
					that.$commonJs.uniMsg('登录成功', 'success')
					that.loginLoading = false;
					// uni.redirectTo({
					// 	url:''
					// })
					console.log('跳转首页');
				}, 1000);
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
					{
						name: 'code',
						type: 'required',
						errmsg: '请输入验证码'
					},
					{
						name: 'r_password',
						type: 'required',
						errmsg: '请输入密码'
					},
				]
				let valLoginRes = this.$validate.validate(this.registerData, Rules)
				this.registerLoading = true;
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				this.$commonJs.uniMsg('注册成功', 'success')
				this.registerLoading = false;
				this.type = 0;
			}

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.container {
		.yzkk-submitBtn {
			margin: 50rpx auto 40rpx auto;
			height: 88rpx;
			line-height: 88rpx;
			border-radius: 44rpx;
		}

		.input-item {
			height: 147rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20rpx 30rpx 20rpx 60rpx;
			box-sizing: border-box;

			.label {
				font-size: 30rpx;
			}

			input {
				font-size: 26rpx;
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
			}
		}




	}
</style>
