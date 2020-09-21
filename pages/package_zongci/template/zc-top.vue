<template name="zc-top">
	
	<view class="zc-new-top">
		<view class="swiper-margin-wrap">
			<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item  v-for="(item,index) in zcInfo.img" :key="index">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	
		<view class="zc-center text-over text-over-2" v-if="hasQifu">
			<view class="border-text">
				祈福
			</view>
			<text class="title">{{zcInfo.name}}</text>
		</view>
		<view class="zc-bottom new-bottom-fs-gray" v-if="hasBottom">
			<text>截止：{{zcInfo.time}}</text>
			<text>报名人数：{{zcInfo.num}}</text>
		</view>
	
	</view>
	
</template>

<script>
	export default {
		name: 'zc-top',
		props: {
			zcInfo: {
				value:{},
				type:  Object
			},
			hasBottom:{
				value:true,
				type:Boolean
			},
			hasQifu:{
				value:true,
				type:Boolean
			},
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.zc-new-top {
		background-color: #fff;
		padding: 30rpx;
		margin-bottom: 22rpx;
		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;
			uni-swiper {
				height: 315rpx;
			}
			image {
				width: 100%;
				height: 315rpx;
			}
		}
	
		.zc-center {
			padding-top: 20rpx;
			font-size: 35rpx;
			font-weight: 800;
			.border-text {
				color: #F54341;
				border: 1px solid #F54341;
				padding: 8rpx 25rpx;
				font-size: 23rpx;
				border-radius: 45rpx;
				margin-right: 40rpx;
				line-height: 1;
				display: inline-block;
			}
			
			.title{
				line-height: 48rpx;
			}
		}
	
		.zc-bottom {
			margin-top: 34rpx;
	
			text {
				margin-right: 40rpx;
			}
		}
	}
</style>
