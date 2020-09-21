<template>
	<view class="container">

		<view class="title">{{info.title}}</view>
		<view class="author flex-box flex-y-center">
			<image @error="showErrorImage" :src="info.author_avatar" mode="aspectFill" @click="toUserInfo(info.author_id)"></image>
			<view class="flex-1 flex-box flex-x-center flex-column">
				<view class="name">{{info.nickname}}</view>
			</view>
			<view class="gz-btn" hover-class="yzkk-btn-hover" v-bind:class="{'grayBg': guanFlag}" @click="setFollow">
				{{guanFlag?'已关注':'关注'}}
			</view>
		</view>

		<view class="content">

			<!-- 图片列表 -->
			<view class="photo-wrap">
				<!-- #ifdef H5 -->
				<view class="p-item flex-box flex-xy-center" v-for="(item,i) in info.images" :key="i">
					<img class="cover" :src="item" :key="item.title" :preview="1" preview-text="图片简介">
				</view>
				<!-- #endif -->
				
				<!-- #ifndef H5 -->
				<view class="swiper-margin-wrap">
					<swiper @change="changeSwiper" :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="false":duration="1000">
						<swiper-item  v-for="(item,i) in info.images" :key="i">
							<view class="swiper-item">
								<image class="cover" :src="item" mode="aspectFill" @click="appImageSwiper(item,i)"></image>
							</view>
						</swiper-item>
					</swiper>
					
					<view class="con">
						<text>简介</text>
					</view>
				</view>
				<!-- #endif -->
				
				
			</view>

		</view>

		<!-- 评论列表 -->
		<view class="fixed-bottom bottom-opt flex-left-right-between flex-y-center">
			<view class="flex-box flex-y-center openPl">
				<image src="../../static/images/icon/xie.png" mode=""></image>
				写评论
			</view>
			<view class="opt">
				<image src="../../static/images/icon/shoucang-01.png" mode=""></image>
			</view>
			<view class="opt">
				<image src="../../static/images/icon/dianzan-01.png" mode=""></image>
			</view>
		</view>
		<pinglun-panel></pinglun-panel>
		
		<!-- <pinglun :plList="plList" @huifu="huifu" @dianzan="dianzan" @openPingLunInfo="openPingLunInfo" :hasHuiFu="true"></pinglun>
		<view class="fixed-bottom bottom-opt flex-left-right-between flex-y-center" v-if="!openAppShare">
			<view class="flex-box flex-y-center openPl" @click="openPl">
				<image src="../../static/images/icon/xie.png" mode=""></image>
				写评论
			</view>
			<view class="opt" @click="shoucangNew">
				<image :src="shoucangFlag ? '../../static/images/icon/shoucangTrue.png' : '../../static/images/icon/shoucang-01.png'"
				 mode=""></image>
			</view>
			<view class="opt" @click="dianzanNew">
				<view class="animate-wrap">
					<view class="ani-icon" v-for="(item,index) in viewList" :key="index">
						<image mode="widthFix" :src="item.src" :animation="item.animationData"></image>
					</view>
				</view>
				<image :src="zanFlag ? '../../static/images/icon/dianzan-002.png' : '../../static/images/icon/dianzan-01.png'" mode=""></image>
			</view>
		</view>
		<pinglun-panel ref="plPanel" @submitPl="submitPl"></pinglun-panel> -->

	</view>
</template>

<script>
	import pinglun from './template/pinglun.vue'
	import pinglunPanel from './template/pinglun-panel.vue';
	export default {
		onShareAppMessage(res) {
			console.log('微信小程序的分享');
		},
		components: {
			pinglun,
			pinglunPanel,
		},
		data() {
			return {
				info: '',
				guanFlag: false,
				conIndex:0
			}
		},
		methods: {
			getPhotoInfo(id) {
				this.$apiJs.getPictureDetail({
					id: id
				}).then(r => {
					this.info = r;
				})
			},
			// 关注该作者
			setFollow() {
				var that = this;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setFollow({
						author_id: that.info.user_id,
					}).then(res => {
						this.getFollowCode()
					})
				})
			},
			// 获取关注状态
			getFollowCode() {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getFollowCode({
						id: that.info.user_id,
					}).then(res => {
						this.guanFlag = res;
					})
				})
			},
			toUserInfo(id){
				// this.$commonJs.navTo('/pages/package_user/userInfo?id='+id)
			},
			changeSwiper(e){
				this.conIndex=e.detail.current;
			},
			appImageSwiper(src){
				uni.previewImage({
					current: src,
					urls: this.info.images,
					indicator:'default'
				})
			},
			showErrorImage(e) {
				const index = e.target.dataset.index;
				this.info.author_avatar = this.$errorImage;
			},
		},
		onLoad(option) {
			this.getPhotoInfo(option.id);
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 30rpx;
		box-sizing: border-box;
	}
	
	.grayBg {
		background-color: $yzkk-body-gray-color !important;
	} 
	
	.title {
		font-size: 36rpx;
		font-weight: 800;
		margin-bottom: 40rpx;
	}

	.author {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			margin-right: 10rpx;
		}

		.name {
			font-size: 28rpx;
			font-weight: 800;
		}

		.time {
			font-size: 22rpx;
			color: #999999;
		}

		.gz-btn {
			width: 110rpx;
			height: 56rpx;
			line-height: 56rpx;
			color: #FFFFFF;
			text-align: center;
			font-size: 28rpx;
			background: rgba(228, 98, 98, 1);
			border-radius: 6rpx;
		}
	}

	.content {
		margin-top: 30rpx;
		min-height: 300rpx;
		margin-bottom: 140rpx;
		.photo-wrap {
			overflow: hidden;
			
			// #ifdef H5
			.p-item {
				float: left;
				width: 315rpx;
				height: 315rpx;
				margin: 15rpx;
				overflow: hidden;
				img {
					padding: 30rpx; 
					width: 200%;
					height: 200%;
				}
			}
			// #endif
		}
		
		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;
			uni-swiper,swiper {
				height: 450rpx;
			}
		
			image {
				width: 100%;
			}
			
			.con{
				margin-top: 16rpx;
				font-size: 30rpx;
			}
			margin-bottom: 20rpx;
		}
	}
	
	
	.bottom-opt {
		.opt {
			image {
				width: 36rpx;
				height: 36rpx;
			}
		}
	
		.openPl {
			width: 400rpx;
			background-color: #F4F4F4;
			border-radius: 32rpx;
			height: 64rpx;
			line-height: 64rpx;
			font-size: 24rpx;
	
			image {
				width: 31rpx;
				height: 36rpx;
				margin-right: 20rpx;
				margin-left: 20rpx;
			}
	
		}
	
	}
	
</style>
