<template>
	<!-- 私信 -->
	<view class="container">


		<view class="info-list">
			<view class="info-item bd-bottom flex-box flex-y-center" v-for="(item,index) in infoList" :key="index" hover-class="yzkk-href-hover">
				<image :src="item.headImg" mode=""></image>
				<view class="flex-1 i-l-con flex-box flex-column flex-left-right-between">
					<view class="flex-box">
						<view class="name flex-1">{{item.name}}  </view><text class="time">{{item.time}}</text>
					</view>
					<p class="con text-over">{{item.con}}</p>
				</view>
				
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoList: [{
					name: '诸葛亮',
					headImg: '../../static/images/shuijiao.jpg',
					con: 'Hi，最近有一个新的活动邀您共同参加，活动报名方式已发您手机短信，请注意查收。',
					time: '2020-03-24 10:00:00',
				}]
			}
		},
		methods: {


		},
		mounted() {
			var that = this;
			var data = this.infoList;
			data.map((item) => {
				item.time = that.$commonJs.timeFormat.noYearFormat(item.time)
				return item
			})
		}
	}
</script>

<style lang="scss">
	.info-list {
		.info-item {
			height: 120rpx;
			width: 100%;
			box-sizing: border-box;
			padding: 18rpx 30rpx;

			image {
				width: 84rpx;
				height: 84rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}

			.i-l-con {
				font-size: 28rpx;

				.name {
					font-weight: 800;
					margin-bottom: 10rpx;
				}

				.con {
					color: #999999;
					font-size: 22rpx;
				}
			}

			.time {
				font-size: 22rpx;
			}

		}
	}
</style>
