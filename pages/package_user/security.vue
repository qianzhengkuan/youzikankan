<template>
	<!-- 系统设置 -->
	<view class="container">
		<view class="flex-box set-item bd-bottom jiantouRight lineJianTou flex-y-center" hover-class="yzkk-href-hover"@click="navTo('editPsdOrPhone?type=0')">
			<view class="flex-1" >
				<text class="label">手机号</text>
			</view>
			<view>
			<text>{{phone}}</text>
			</view>
		</view>
		<view class="flex-box set-item bd-bottom jiantouRight lineJianTou uni-common-mb" hover-class="yzkk-href-hover" @click="navTo(`editPsdOrPhone?type=1&hasPsd=${hasPsd}`)">
			<view class="flex-1">
				<text class="label">{{hasPsd ? '修改密码' : '设置密码'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				hasPsd:false
			}
		},
		methods: {
			navTo(url) {
				var that=this;
				console.log(url);
				uni.showModal({
					title: '修改登陆密码',
					content: '将给手机' + this.phone + '发送验证码',
					confirmColor:'#C34944',
					success: function(res) {
						if (res.confirm) {
							that.getCode(url);
						}
					}
				})
			},
			getCode(u){
				this.$apiJs.getCode({
					phone:this.$store.state.userInfo.phone,
				}).then(res => {
					if(res){
						this.$commonJs.navTo(u)
					}
				})
			},
			// 判断是否存在密码
			hasPsdFlag(){
				if(this.$store.state.userInfo.pwd_type){
					this.hasPsd=true;
				}
			}

		},
		onLoad() {
			var p = this.$store.state.userInfo.phone;
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

	.lineJianTou {
		padding-right: 60rpx;
		;

		&:after {
			right: 45rpx;
		}
	}
</style>
