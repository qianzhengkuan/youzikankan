<template name="yzkk-photo">
	<view class="v-wrap allNewItem flex-column" hover-class="gray-bg" @click="navTo('/pages/package_new/photoInfo',photoInfo)">
		<image class="cover" :src="photoInfo.image" mode="aspectFill"></image>
		<view class="v-bottom flex-box flex-column">
			<text class="v-tile text-over">{{photoInfo.title}}</text>
			<view class="u-bottom flex-box flex-y-center">
				<!-- <text class="v-author">{{photoInfo.nickname}}</text> -->
				<text class="time-text">{{photoInfo.createtime}}</text>
			</view>
		</view>
	</view>
	
	<!-- <view class="v-wrap allNewItem flex-column" hover-class="gray-bg">
		<img class="cover" v-for="(src,i) in imgs" v-show="i<1" :src="src" :key="src.title" :preview="id" preview-text="图片简介">
		<view class="v-bottom flex-box flex-column">
			<text class="v-tile text-over">{{photoInfo.title}}</text>
			<view class="u-bottom flex-box flex-y-center">
				<text class="v-author">{{photoInfo.nickname}}</text>
				<text class="time-text">{{photoInfo.createtime}}</text>
			</view>
		</view>
	</view> -->
	
</template>

<script>
	export default {
		name: 'yzkk-photo',
		props: {
			photoInfo: {
				value: {},
				type: Object
			},
			seePhotoList:{
				value: [],
				type: Array
			},
			id:{
				value: 1,
				type: Number
			}
		},
		data(){
			return{
			}
		},
		created: function(e) {
			
		},
		methods: {
			navTo(url,i){
				uni.navigateTo({
					url:url+'?id='+i.id+''
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gray-bg{
		background-color: #F3F3F5 !important;
	}
	.v-wrap{
		padding:30rpx;
		flex: 1;
		position: relative;
		background-color: #FFFFFF;
		border-bottom-width: 1rpx;
		border-bottom-color: #EEEEEE;
		border-style: solid; 
		/* #ifndef APP-NVUE */
		display:flex;
		border: 0;
		/* #endif */
	}
	
	.cover{
		width: 690rpx;
		height:421rpx;
	}
	.v-tile{
		margin-top: 16rpx;
		color: #170C0B;
		font-size: 36rpx;
		lines:1;
		text-overflow:ellipsis;
		// line-height: 1.7;
	}
	.v-bottom{
		flex: 1;
	}
	
	.u-bottom{
		margin-top: 16rpx;
		flex-direction: row;
	}
	
	.v-author{
		font-size: 30rpx;
		margin-right: 20rpx;
	}
	
	.share-icon{
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}
	
	.time-text{
		font-size: 28rpx;
		color: #999999;
	}
</style>
