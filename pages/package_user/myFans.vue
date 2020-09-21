<template>
	<!-- 粉丝 -->
	<view class="container">

		<view class="info-list">
			<view class="info-item bd-bottom flex-box flex-y-center" v-for="(item,index) in fansList" :key="index" hover-class="yzkk-href-hover">
				<image :src="item.image" mode=""></image>
				<view class="flex-1 i-l-con flex-box flex-column flex-left-right-between">
					<view class="flex-box">
						<view class="name flex-1">{{item.username}} </view><text class="time">{{item.time}}</text>
					</view>
					<p class="con text-over">{{item.con}}</p>
				</view>
			</view>
			<noMore v-if="fansList.length"></noMore>
			<noData v-if="!fansList.length"></noData>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 0, //距离底部多少像素时触发
				pageObj: {
					page: 0,
					pagecount: 0
				},
				noMore: false,
				noData:false,
				isScroll: false,
				fansList: []
			}
		},
		methods: {
			getAllFans() {
				var that = this;
				this.$apiJs.myFans({
					page: this.pageObj.page + 1
				}).then(res => {
					var r_data = res.backlist;
					this.fansList = r_data;
				})
			}
		},
		mounted() {
			this.getAllFans();
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
