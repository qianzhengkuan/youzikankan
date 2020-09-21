<template>
	<view class="container">
		<view class="status bg-white" v-bind:class="{'waitFixed':isScroll}"></view>
		<!-- 头部 -->
		<view class="yzkk-header flex-box" v-bind:class="{'waitFixed':isScroll}">
			<view class="backIcon" hover-class="yzkk-href-hover" @click="navBack">
				<image src="../../static/images/icon/backIcon.png" mode=""></image>
			</view>
			<view class="flex-1 top-title">{{user.name}}</view>
			<view class="optIcon" hover-class="yzkk-href-hover">
				<image src="../../static/images/icon/sousuo-02.png" mode=""></image>
			</view>
			<view class="moreOpt" hover-class="yzkk-href-hover">
				<image src="../../static/images/icon/gengduo.png" mode=""></image>
			</view>
		</view>
		<!--  -->
		<view class="user-top">
			<view class="flex-box">
				<image :src="user.headImg" mode=""></image>
				<view class="user-t-right flex-box flex-column">
					<view class="num-list flex-box">
						<div class="flex-1 flex-xy-center num-item flex-box flex-column">
							<text class="num">{{user.guanzhuNum}}</text>
							<text>关注</text>
						</div>
						<div class="flex-1 flex-xy-center num-item flex-box flex-column">
							<text class="num">{{user.fensiNum}}</text>
							<text>粉丝</text>
						</div>
						<div class="flex-1 flex-xy-center num-item flex-box flex-column">
							<text class="num">{{user.zanNum}}</text>
							<text>获赞</text>
						</div>
						<div class="flex-1 flex-xy-center num-item flex-box flex-column">
							<text class="num">{{user.shoucangNum}}</text>
							<text>收藏</text>
						</div>
					</view>
					<!-- 两个按钮 -->
					<view class="two-btn flex-box">
						<button class="yzkk-submitBtn wid-250 yzkk-white-btn edit">{{user.id=='123' ? '编辑资料' :'私信'}}</button>
						<button class="yzkk-submitBtn wid-250 vip">{{user.vipLevel ? 'vip-'+user.vipLevel :'加入会员'}}</button>
					</view>
				</view>
			</view>
			<!-- 位置 -->
			<view class="flex-box flex-y-center address-wrap">
				<image src="../../static/logo.png" mode=""></image>
				<text>位置：{{user.locationStr}}</text>
			</view>
		</view>

		<!-- 动态形式 -->
		<has-con-new @guanzhuFn="guanzhuFn" @shareOr="shareOr" :hasConData="hasConData"></has-con-new>

	</view>
</template>

<script>
	import hasConNew from "@/template/hasConNew.vue"
	export default {
		components: {
			hasConNew
		},
		data() {
			return {
				isScroll:false,
				user: {
					id: '123',
					headImg: '../../static/logo.png',
					name: '南风知我意',
					guanzhuNum: 999,
					fensiNum: 888,
					zanNum: 888,
					shoucangNum: 888,
					vipLevel: 0,
					locationStr: '广东深圳'
				},
				hasConData: {
					user: {
						headImg: '../../static/logo.png',
						name: '环宇视觉',
					},
					time: '2020-03-24 10:00:00',
					guanzhuFlag: false,
					img: ['../../static/images/shuijiao.jpg'],
					content: '福建的宗祠剧场，福建是宗族建设是古祠堂数量最多的省份。关调查显示福建省祠堂总数约有13272座，平均每万关调查显示福建省祠堂总数约有13272座，平均每万关调查显示福建省祠堂总数约有13272座，平均每万，平均每万人拥',
					zhuanNum: 999,
					plNum: 888,
					zanNum: 777,
					zanFlag: true,
					type: 1
				},
			}

		},
		onLoad() {

		},
		onPageScroll(e) {
			// isScroll
			if(e.scrollTop>100){
				this.isScroll=true;
			}else{
				this.isScroll=false;
			}
		},
		methods: {
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			guanzhuFn() {
				console.log('右上角关注')
			},
			shareOr() {
				console.log('右上角分享')
			},
			navBack() {
				this.$commonJs.navBack();
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $yzkk-body-gray-color;
	}

	.yzkk-header {
		background-color: #fff;
	}

	.whiteBg {
		width: 100%;
		background-color: #fff;
		margin-bottom: 24rpx;
		box-sizing: border-box;
		padding: 30rpx;
	}

	.user-top {
		height: 288rpx;
		@extend .whiteBg;
		image {
			width: 139rpx;
			height: 139rpx;
			// margin-right: 41rpx;
			border-radius: 50%;
		}

		.user-t-right {
			.num-list {
				.num-item {
					text {
						color: #666666;
						font-size: 24rpx;
					}

					.num {
						font-size: 30rpx;
						font-weight: 800;
						margin-bottom: 12rpx;
						color: #000000;
					}
				}

				margin-bottom: 27rpx;
			}


			.two-btn {
				.edit {
					margin-right: 20rpx;
				}
			}
		}

		.address-wrap {
			margin-top: 25rpx;

			image {
				width: 26rpx;
				height: 31rpx;
				margin-right: 13rpx;
			}

			text {
				font-size: 28rpx;
			}
		}
	}
</style>
