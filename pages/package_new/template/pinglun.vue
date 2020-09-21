<template name="pinglun">
	
	<view class="pl-list">
		<view class="pl-item flex-box bd-bottom" v-for="(item,index) in plList" :key="index">
			<image class="headImg" :src="item.user_img ? item.user_img :''" mode=""></image>
			<view class="flex-1 flex-box flex-column pl-center">
				<view class="flex-box pl-top flex-y-center">
					<view class="flex-1 name">{{item.user_name}}</view>
					<image :src="item.is_fabulous ? '/static/images/icon/dianzan-002.png' : '/static/images/icon/dianzan-01.png'"
					 mode="" @click="dianzan(item)"></image>
					<text class="zanNum">{{item.fabulous_number}}</text>
				</view>
				<view class="pl-con" @click="huifu('plInfo',item)">
					{{item.content}}
				</view>
				<view v-if="!item.reply_number" class="pl-bottom flex-box flex-y-center">{{item.time}}  <text> · </text><view class="huifu" v-show="hasHuiFu" v-bind:class="{'hasHuiFu':item.reply_number}"
					 @click="huifu(item)"> {{item.reply_number ? item.reply_number : ''}}回复</view>
				</view>
				
				<view v-if="item.reply_number" class="pl-bottom flex-box flex-y-center">{{item.time}}  <text> · </text><view class="huifu" v-show="hasHuiFu" v-bind:class="{'hasHuiFu':item.reply_number}"
					 @click="openPingLunInfo(item)">{{item.reply_number ? item.reply_number : ''}}回复</view>
				</view>
	
				<!-- 回复该条评论的 -->
				<!-- <view class="pl-huifu">
					<view class="pl-huifu-item"  v-for="(item,index) in plList" :key="index" @click="navTo(item)">{{item.name}} : {{item.content}}</view>
					<view>查看剩余{{plList.length-2}}条回复</view>
				</view> -->
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name: 'pinglun',
		props: {
			plList: {
				value:[],
				type:  Array
			},
			hasHuiFu:{
				value:true,
				type:Boolean
			}
		},
		methods: {
			huifu(i){
				console.log(i);
				 this.$emit('huifu',i)
			},
			openPingLunInfo(i){
				this.$emit('openPingLunInfo',i)
			},
			dianzan(i){
				this.$emit('dianzan',i)
			}
		}
	}
</script>

<style lang="scss">
	.pl-list {
		margin-bottom: 98rpx;
		image.headImg {
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
		}
		
		.pl-item{
			padding: 30rpx 0;
			
			.pl-center{
				padding-left: 20rpx;
			.pl-top {
				font-size: 26rpx;
			
				.name {
					color: #3E537E;
				}
			
				image {
					width: 26rpx;
					height: 28rpx;
					margin-right: 10rpx;
				}
				
				.zanNum{
					width: 60rpx;
				}
			}
			
			.pl-con {
				font-size: 28rpx;
				margin: 15rpx 0;
				width: 529rpx;
			}
			
			.pl-bottom {
				font-size: 24rpx;
				color: #999999;
				.huifu{
					margin-left: 10rpx;
					color: #000000;
					
				}
				.hasHuiFu{
					    border-radius: 40rpx;
					    background-color: #dedede;
					    padding: 2px 20rpx;
				}
				
			}
			
			.pl-huifu{
				background-color: $yzkk-body-gray-color;
				padding: 20rpx;
				font-size: 24rpx;
				margin-top: 20rpx;
			}
		}
		}
		
	}
	
	.pl-item:nth-child(1) image{
		width: 96rpx;
		height: 96rpx;
	}
	
	

</style>
