<template name="activity">

	<view class="activity-list">
		<view class="activity-item bd-bottom flex-box flex-column" hover-class="gray-bg" @click="navTo('/pages/package_activity/activityInfo',shData)">
			<image @error="showErrorImage"  class="cover" :src="shData.image" mode="scaleToFill"></image>
			<text class="newTitle text-over text-over-2">{{shData.name}}</text>
			<view class="bottom flex-box flex-y-center">
				<image class="address" src="../static/images/icon/dignwei-02.png" mode=""></image>
				<text class="text-over gray-text">
					{{shData.address}}
				</text>
			</view>
			<view v-bind:class="{'noBegin':shData.type===0,'beging':shData.type===1,'over':shData.type===-1}">
				<text class="txt">{{shData.type_name}}</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'activity',
		props: {
			shData: {
				value: {},
				type: Object
			}
		},
		created: function(e) {
			
		},
		methods: {
			showErrorImage(i){
				  this.shData.image = this.$errorImage;  
			},
			navTo(url,i) {
				uni.navigateTo({
					url:url+'?id='+i.id+'&status='+i.type
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gray-bg{
		background-color: #F3F3F5 !important;
	}
	.activity-item {
		padding: 30rpx;
		background-color: #fff;
		position: relative;
		// height: 540rpx;
		border-bottom-width: 1rpx;
		border-bottom-color: #EEEEEE;
		border-style: solid;
		/* #ifndef APP-NVUE */
		display:flex;
		border: 0;
		/* #endif */
	}

	
	.beging {
		position: absolute;
		left: 60rpx;
		top: 60rpx;
		width: 100rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 17rpx;
		text-align: center;
		justify-content: center;
		align-items: center;
		background-color: #61C66A;
		/* #ifndef APP-NVUE */
		display:flex;
		/* #endif */
	}
	
	.noBegin,.over {
		position: absolute;
		left: 60rpx;
		top: 60rpx;
		width: 100rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 17rpx;
		text-align: center;
		background-color: #989898;
		justify-content: center;
		align-items: center;
		/* #ifndef APP-NVUE */
		display:flex;
		/* #endif */
	}
	
	.txt{
		color: #fff;
		font-size: 22rpx;
	}
	
	.cover {
		width: 690rpx;
		height: 366rpx;
		margin-bottom: 16rpx;
	}
	
	.newTitle{
		font-size: 36rpx;
		line-height: 46rpx;
		lines:1;
		text-overflow:ellipsis;
	}
	
	.bottom {
		flex: 1;
		flex-direction: row;
		align-items: center;
	}
	
	.address{
		width: 32rpx;
		height: 32rpx;
		margin-right: 16rpx;
	}
	.gray-text{
		flex: 1;
		font-size: 24rpx;
		color: #999999;
		/* #ifdef APP-NVUE */
		padding-left: -28px;
		/* #endif */
	}
</style>
