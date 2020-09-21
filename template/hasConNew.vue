<template name="has-con-new">
	<!-- hover-class="yzkk-href-hover" -->
	<view class="hasCon-wrap allNewItem">
		<view class="flex-box flex-column newWrap">
			<view class="new-top flex-box flex-y-center">
				<image :src="hasConData.user.headImg" lazy-load="true"  @error="showErrorImage" mode="aspectFill"></image>
				<view class="flex-1">
					<p class="author">{{hasConData.user.name}}</p>
					<p class="new-bottom-fs-gray">{{hasConData.time}}</p>
				</view>
				<!-- type: 0 已关注、未关注     1：三个点（分享转发等操作） -->
				<text v-if="hasConData.type==0" class="guanzhu" @click="guanzhuFn()" v-bind:class="{'orange-text': !hasConData.guanzhuFlag}">{{hasConData.guanzhuFlag ? '已关注' : '关注'}}</text>
				<image src="../static/images/icon/gengduo.png" mode=""  v-if="hasConData.type==1" class="opt" @click="ShareOr()"></image>
			</view>
			<view class="new-content text-over text-over-3">
				{{hasConData.content}}
				<!-- {{hasConData.seeMore}} -->
				<navigator class="goToInfo" v-if="hasConData.seeMore" url="../news/newsInfo">全文</navigator>
			</view>
			<view class="flex-1 new-imgs flex-box flex-wrapLine">
				<image v-for="(item,index) in hasConData.img" :key="index" class="cover" :src="item" mode=""></image>
			</view>
			<!-- 转发、评论、点赞 -->
			<view class="new-opt-bottom flex-box  flex-left-right-between">
				<view class=" flex-box flex-xy-center">
					<image src="../static/images/icon/zhuanfa.png" mode=""></image>
					<text>转发</text>
				</view>
					<view class=" flex-box flex-xy-center" @click="pinglun(hasConData.id)">
					<image src="../static/images/icon/pinglun.png" mode="" ></image>
					<text>{{hasConData.plNum}}</text>
				</view>
					<view class=" flex-box flex-xy-center">
					<image :src="hasConData.zanFlag ? '../static/images/icon/dianzan-01.png' : '../static/images/icon/dianzan-002.png'" mode="" @click="dianzan('0')"></image>
					<text>{{hasConData.zanNum}}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'has-con-new',
		props: {
			hasConData: {
				value: {},
				type: Object
			},
			seeMore: {
				value: false,
				type: Boolean
			}
		},
		methods: {
			showErrorImage(){
				  this.hasConData.user.headImg = this.$errorImage;  
			},
			ShareOr(){
				 this.$emit('shareOr',1)
			},
			guanzhuFn(){
				 this.$emit('guanzhuFn',1)
			},
			zhuanfaFn(){
				console.log('转发');
			},
			dianzan(i){
				this.$emit('dianzan',i)
			},
			pinglun(i){
				uni.navigateTo({
					url:'package_new//plInfo?id='+i
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.hasCon-wrap {
		width: 100%;

		.newWrap {
			.new-top {
				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
					margin-right: 10rpx;
				}

				.author {
					font-size: 28rpx;
					font-weight: 800;
					line-height: 1.4;
				}

				.time {
					font-size: 24rpx;
				}

				.guanzhu {
					font-size: 24rpx;
				}
				
				image.opt {
					width: 32rpx;
					height: 6rpx;
					margin-right: 10rpx;
					border-radius: 0;
				}

				margin-bottom: 24rpx;
			}

			.new-content {
				font-size: 28rpx;
				color: #999999;

				.goToInfo {
					display: inline;
					color: #5c9ce2;
				}

				margin-bottom: 10rpx;
			}

			.new-imgs {
				image {
					width: $yzkk-news-hasCon-img-width;
					height: $yzkk-news-hasCon-img-height;
					margin: 5rpx;
				}
			}
			
			.new-opt-bottom{
				width: 90%;
				margin: 0 auto;
				margin-top: 30rpx;
				image{
					width: 36rpx;
					height: 36rpx;
					margin-right: 10rpx;
				}
				text{
					font-size: 26rpx;
				}
			}

		}
	}
</style>
