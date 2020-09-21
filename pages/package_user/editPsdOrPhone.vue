<template>
	<!-- 忘记密码 -->
	<view class="container">
		<view class="bd-bottom input-item">
			<view class="label">验证码</view>
			<view class="flex-box flex-y-center flex-left-right-between">
				<input type="number" name="code" v-model="code" placeholder="验证码" />
				<button class="yzkk-submitBtn getCode" hover-class="yzkk-btn-hover" @click="getCode" :disabled="getOver">{{getCodeText}}</button>
			</view>
		</view>
		<!-- 修改手机号 -->
		<view v-if="type==0">
			<view class="bd-bottom input-item">
				<view class="label">新手机号</view>
				<input type="number" maxlength="11" name="phone" autocomplete="off" v-model="phone" placeholder="新手机号" />
			</view>
		</view>
		<!-- 修改密码 -->
		<view v-if="type==1">
			<view class="bd-bottom input-item">
				<view class="label">新密码</view>
				<input type="password"  name="password" autocomplete="off" v-model="newPsd" placeholder="新密码" />
			</view>
		</view>
		<button class="yzkk-submitBtn" :disabled="type ?  (!code||!newPsd) :  (!code||!phone)" @click="type ? editPsd() : editPhone()" hover-class="yzkk-btn-hover">完成</button>
	</view>
</template>

<script>
	import validate from '../../common/ys-validate.js'
	export default {
		data() {
			return {
				auth_time: 60,
				getCodeText: '60s后重新获取',
				getOver: true,
				code:'',
				phone:'',
				newPsd:'',
				type:0,
				typeText:["修改手机号","修改密码"]
			}
		},
		methods: {
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			getCode() {
				var that = this;
				this.$apiJs.getCode({
					phone:this.$store.state.userInfo.phone,
				}).then(res => {
					if(res){
						that.$commonJs.uniMsg('发送成功', 'success')
						this.timeOut();
					}
				})
			},
			timeOut(){
				var that = this;
				var auth_timetimer = setInterval(() => {
					that.auth_time--;
					that.getCodeText = this.auth_time + 's后重新获取';
					that.getOver = true;
					if (that.auth_time <= 0) {
						that.getCodeText = '获取验证码';
						that.getOver = false;
						clearInterval(auth_timetimer);
					}
				}, 1000);
			},
			editPhone() {
				var that = this;
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
				let valLoginRes = this.$validate.validate({
					'phone':this.phone
				}, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				
				this.$commonJs.navBack();
			},
			editPsd() {
				var that = this;
				this.$apiJs.upPwd({
					code:this.code,
					password:this.newPsd
				}).then(res=>{
					this.$commonJs.uniMsg('修改成功')
					this.$commonJs.navBack();
				})
			},

		},
		onLoad(option) {
			this.type = Number(option.type);
			uni.setNavigationBarTitle({
				title:this.typeText[this.type]
			})
			this.timeOut();
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
			background-color: #FFFFFF;

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
