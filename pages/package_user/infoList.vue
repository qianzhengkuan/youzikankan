<template>
	<!-- 消息通知 -->
	<view class="container">
		<view class="info-system bd-bottom flex-box">
			<view class="sys-head">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<div class="flex-box flex-column info-s-con">
				<text class="title">{{sysInfo.title}}</text>
				<view class="con">{{sysInfo.con}}</view>
				<text class="time">{{sysInfo.time}}</text>
			</div>
		</view>

		<view class="info-list">
			<view class="info-item bd-bottom flex-box flex-y-center" v-for="(item,index) in infoList" :key="index" hover-class="yzkk-href-hover">
				<image :src="item.headImg" mode=""></image>
				<view class="flex-1">
					<view class="i-l-con">
						<text class="name">{{item.name}} </text>
						<text> 关注了你</text>
					</view>
					<text class="time">{{item.time}}</text>
				</view>
				<view class="gz-btn">
					关注
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				sysInfo: {
					title: '系统通知',
					con: 'Hi，最近有一个新的活动邀您共同参加，活动报名方式已发您手机短信，请注意查收。',
					time: '2020-03-24 10:00:00',
				},
				infoList: [{
					name: '张三',
					headImg: '../../static/images/shuijiao.jpg',
					con: 'Hi，最近有一个新的活动邀您共同参加，活动报名方式已发您手机短信，请注意查收。',
					time: '2020-03-24 10:00:00',
				}]
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.time {
		font-size: 22rpx;
	}

	.info-system {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;

		.sys-head {
			image {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}

			margin-right: 20rpx;
		}

		.info-s-con {
			.title {
				font-size: 24rpx;
			}

			.con {
				font-size: 28rpx;
				padding: 20rpx 0 29rpx 0;
			}

		}
	}

	.info-list {
		.info-item {
			height: 120rpx;
			width: 100%;
			box-sizing: border-box;
			padding: 18rpx 30rpx;
			image{
				width: 84rpx;
				height: 84rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
			.i-l-con {
				font-size: 28rpx;
				.name {
					font-weight: 800;
				}
			}


			.gz-btn {
				width: 108rpx;
				height: 44rpx;
				line-height: 44rpx;
				border: 1px solid #FF4551;
				border-radius: 6rpx;
				font-size: 26rpx;
				text-align: center;
				color: #FF4551;
			}
		}
	}
</style>
