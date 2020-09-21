<template>
	<!-- 我的关注 -->
	<view class="container">

		<view class="info-list">
			<view class="info-item bd-bottom flex-box flex-y-center" v-for="(item,index) in myFollowList" :key="index">
				<image @error="showErrorImage(index)" :src="item.image" mode=""></image>
				<view class="flex-1 i-l-con flex-box flex-column flex-left-right-between">
					<view class="flex-box flex-y-center">
						<view class="name flex-1">{{item.username}} </view>
						<button class="follow-btn yzkk-submitBtn" hover-class="yzkk-btn-hover" @click="setFollow(item)">取消关注</button>
					</view>
				</view>
			</view>
			
			
			<noData v-if="!myFollowList.length"></noData>
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
				myFollowList: []
			}
		},
		methods: {
			showErrorImage(i){
				  this.myFollowList[i].image = this.$errorImage;  
			},
			// 关注该作者
			setFollow(i) {
				var that = this;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setFollow({
						author_id: i.id,
					}).then(res => {
						this.getAllFans()
					})
				})
			},
			getAllFans() {
				var that = this;
				this.$apiJs.myFollow({
					page: this.pageObj.page + 1
				}).then(res => {
					var r_data = res.backlist;
					this.myFollowList = r_data;
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
				
				.follow-btn{
					width: auto;
					margin: 0;
					font-size: 24rpx;
					line-height: 60rpx;
					height: 60rpx;
				}
			}

			.time {
				font-size: 22rpx;
			}

		}
	}
</style>
