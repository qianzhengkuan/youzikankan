<template>
	<view class="start hv100" v-if="isShowImage">
		<swiper class="start hv100" :indicator-dots="true" @animationfinish="animationfinish">
			<swiper-item class="start hv100">
				<view class="swiper-item">
					<image class="git start-img hv100" src="../../static/images/qidong/yidao1.png" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item class="start hv100">
				<view class="swiper-item">
					<image class="git start-img hv100" src="../../static/images/qidong/yidao2.png" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item class="start hv100">
				<view class="swiper-item">
					<image class="git start-img hv100" src="../../static/images/qidong/yidao3.png" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="qdjup" style="">
			<text>{{ remaining }} 秒</text>
			<text style="margin: 0 12rpx;">|</text> 
			<text @click="jupIndex()">跳 过</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				remaining: 5, //显示剩余时间
				isShowImage:false
			};
		},
		onLoad() {
			this.isShowguide()
			var interval = setInterval(() => {
				this.remaining--;
			}, 1000);
			setTimeout(() => {
				clearInterval(interval);
				uni.switchTab({
					url: '../tabbar/index'
				});
			}, 5000);
		},
		methods: {
			isShowguide() {
				uni.request({
					url: 'http://www.youzikankan.com/api/v1/get-guide-show',
					// url: 'http://testfas.youzikankan.com/api/v1/get-wechat-show',
					method: 'GET',
					header: {
						'Content-Type': 'application/json'
					},
					success: (res) => {
						// console.log(res.data.data)
						if (res.data.data == 0) {
							this.isShowImage = true
						} else {
							this.isShowImage = false
						}
					},
				})
			},

			animationfinish(e) {
				console.log(JSON.stringify(e.detail.current));
				//判断到最后一张后，自动转向进入首页
				if (e.detail.current == 2) {
					// console.log('动画已经播放结束');
					setTimeout(function() {
						uni.switchTab({
							url: '../tabbar/index'
						});
					}, 1000);
				}
			},
			jupIndex() {
				// console.log('e');
				uni.switchTab({
					url: '../tabbar/index'
				});
			}
		}
	};
</script>
<style scoped lang="scss">
	.start {
		&-img {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
		}
	}

	.hv100 {
		box-sizing: border-box;
		min-height: 100%;
		min-height: calc(100vh - var(--window-top) - var(--window-bottom));
	}

	.qdjup {
		position: fixed;
		top: 7%;
		right: 2%;
		width: 200rpx;
		height: 60rpx;
		background-color: #999999;
		// opacity: 0.5;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 30rpx;
		font-size: 28rpx;
		font-weight: bold;
		border: 1px solid #FFFFFF;
	}
</style>
