<template name="yzkk-video">
	
	<view class="v-wrap">
		<!-- #ifndef APP-NVUE -->
		<text class="v-tile text-over">{{videoInfo.title}}</text>
		<!-- #endif -->
		<video @play="play()" @pause="videoPause()" @controlstoggle="controlstoggle" :id="`video_${videoInfo.id}`" ref="`video_${videoInfo.id}`" :vslide-gesture="false"  :show-play-btn="true" 
		:show-center-play-btn="true" class="video-dom" :title="videoInfo.title" :src="videoInfo.file" :controls="true" @error="videoError" :enable-play-gesture="true" :direction="90"  :poster="videoInfo.image">
			<cover-view class="iconfont iconbofang icon"></cover-view>
		</video>
		<!-- #ifdef APP-NVUE -->
		<text class="app-v-title">{{videoInfo.title}}</text>
		<!-- #endif -->
		<view class="v-bottom flex-box flex-y-center">
			<view class="flex-1 flex-box flex-y-center u-info">
				<image class="headImg" :src="videoInfo.author_avatar" mode="" lazy-load="true"></image>
				<text class="v-author">{{videoInfo.nickname}}</text>
			</view>
			<text class="time-text">{{videoInfo.createtime}}</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		name: 'yzkk-video',
		props: {
			videoInfo: {
				value: {},
				type: Object
			}
		},
		data(){
			return{
				status:0,
				showPlay:true
			}
		},
		mounted() {
			// console.log(this.videoInfo);
			this.videoCtx = uni.createVideoContext(`video_${this.videoInfo.id}`,this);
		},
		methods: {
			videoError(){
				uni.showToast({
					title:'视频出错',
					icon:'none'
				})
			},
			play(){
				// uni.navigateTo({
				// 	url:'/pages/videoPlay/videoPlay'
				// })
				
				this.videoCtx.play();
				this.status=1; 
				
				var that=this;
				setTimeout(function(){
					that.showPlay=false;
				},500);
				this.$emit('stopOther');
				
			},
			videoPause(){
				this.status=0;
				this.videoCtx.pause();
				this.showPlay = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.v-wrap{
		position: relative;
		background-color: #000000;
	}
	.cover-view{
		position: absolute;
		left: 0;
		top:0;
		width: 750rpx;
		height: 450rpx;
		z-index: 2;
		justify-content: center;
		align-items: center;
	   // #ifndef APP-NVUE
	   display: flex;
	   // #endif
	}
	.playIcon{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background-color: rgba(0,0,0,.5);
	}
	.playIcon-img{
		width: 80rpx;
		height: 80rpx;
	}
	.v-tile{
		color: #FFFFFF;
		font-size: 32rpx;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		padding: 20rpx 20rpx 0 20rpx;
		z-index: 2;
		background-color: transparent;
	}
	.video-dom{
		width: 750rpx;
		position: relative;
	}
	
	.icon{
	   position:absolute;
		bottom:10px;
	   right:10px;
	}
	
	.v-bottom{
		background-color: #FFFFFF;
		padding:20rpx;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.app-v-title{
		width: 750rpx;
		position: absolute;
		top: 0;
		left: 0;
		padding: 18rpx;
		color: #FFFFFF;
		font-size: 36rpx;
		lines:1;
		text-overflow:ellipsis;
	}
	.u-info{
		flex-direction: row;
		flex: 1;
		align-items: center;
	}
	.headImg{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 18rpx;
	}
	.v-author{
		font-size: 30rpx;
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
