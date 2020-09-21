<template>
	<!-- 宗祠详情 -->
	<view class="container">

		<!-- 第一块banner区域 -->
		<!-- #ifdef H5 -->
		<view class="status"></view>
		<!-- #endif -->
		<view class="top-banner-con bd-bottom">
			<view class="swiper-margin-wrap">
				<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in zongciInfo.img" :key="index">
						<view class="swiper-item">
							<image @error="showErrorImage(index)" :src="item.url" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<!-- 信息 -->
			<view class="top-info">
				<view class="flex-box flex-y-center">
					<view class="flex-1">
						<view class="name">{{zongciInfo.name}}</view>
						<view class="address">{{zongciInfo.address}}</view>
					</view>
					<view class="flex-1 right"> 
						<view class="score">{{zongciInfo.score}}分</view>
						<image v-for="index of zongciInfo.star" src="../../static/images/icon/stars_yellow.png" class="stars" mode=""></image>
					</view>
				</view>
			</view>

			<!-- 三个操作 -->
			<view class="flex-box flex-x-center">
				<view class="three-btn">
					<image src="../../static/images/icon/daohang.png" mode=""></image>
					<text>前往</text>
				</view>
				<view class="three-btn">
					<image src="../../static/images/icon/shoucang.png" mode=""></image>
					<text>收藏</text>
				</view>
				<view class="three-btn">
					<image src="../../static/images/icon/quguo.png" mode=""></image>
					<text>去过</text>
				</view>
			</view>
		</view>

		<view class="center-panel">
			<view class="flex-box xing flex-wrapLine" v-if="label.length">
				<view class="xing-item" v-for="(item,index) in label" :key="index">{{item}}</view>
			</view>

			<view class="hot-con bd-bottom">
				<view class="flex-box flex-left-right-between">
					<text class="hot">南普陀寺香火旺数</text>
					<text class="people">{{zongciInfo.read_count}}人去过</text>
				</view>
				<view class="hotNum">最高每日香火旺数可达到10万</view>
			</view>

			<!-- <view class="jianjie-con">
				<view class="jj-title">简介</view>
				<view class="jj-con-wrap">
					<view class="jj-con  text-over text-over-5">
						{{zongciInfo.introduce.length ? zongciInfo.introduce :'暂无简介'}}
					</view>
					<view class="seeInfo" hover-class="yzkk-href-hover" @click="seeInfo()">查看详情</view>
				</view>
			</view> -->
			
		</view>


		<!-- 资讯动态 -->
		<view class="cover-wrap">
			<panel-top title="宗祠动态" :url="'newList?id='+id"></panel-top>
			<view v-for="(item,index) in newsData" :key="index"> 
				<new-list :newsData="item"></new-list>
			</view>
		</view>

		<!-- 寺庙美景 -->
		<!-- <view class="zc-new-list">
			<panel-top title="寺庙美景" url="newList"></panel-top>
			<zc-threeImg :img="img"></zc-threeImg>
		</view> -->


	</view>
</template>

<script>
	import panelTop from "@/template/panel-top.vue"
	import newList from "@/template/newsList.vue"
	import fourList from "../tabbar/template/four-list.vue"
	import zcThreeImg from "./template/zc-threeImg.vue"
	export default {
		components: {
			panelTop,
			newList,
			fourList,
			zcThreeImg
		},
		data() {
			return {
				id: '',
				img: '../../static/images/shuijiao.jpg',
				zongciInfo: '',
				newsData: [],
				moreNewUrl:'',
				label:[]
			}
		},
		methods: {
			showErrorImage(i){
					this.zongciInfo.img[i].url = this.$errorImage;
			},
		
			seeInfo() {
				console.log('查看详情');
			},
			getInfo(id) {
				var that = this;
				this.$apiJs.zongciInfo({
					id: id
				}).then(res => {
					var r_data = res;
					this.label=res.label;
					that.zongciInfo = r_data;
					// #ifdef H5
					uni.setNavigationBarTitle({
						title:'游子看看'
					})
					document.querySelector('.uni-page-head__title').innerText=r_data.name
					// #endif
					// #ifndef H5
					uni.setNavigationBarTitle({
						title: r_data.name
					})
					// #endif
				})
			},
			getZongCiNewsList(id) { 
				var that = this;
				this.$apiJs.getTempleNewsList({
					page: 1
				}).then(res => {
					var r_data = res.backlist;
					r_data.map((item) => {
						if (item.img.length && item.img) {
							item.cover = item.img[0].url
						} else {
							item.cover = 'no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.newsData = r_data;
				})
			},
		},
		onLoad(option) {
			this.id = option.id;
			this.moreNewUrl='newList?id='+option.id;
			this.getInfo(option.id)
			this.getZongCiNewsList(option.id)
		}
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}
	
	uni-image{
		height: 431rpx;
	}
	uni-swiper,swiper,.swiper-item {
		height: 431rpx;
	}

	.top-banner-con {
		background-color: #fff;
		width: 100%;
		padding: 30rpx 30rpx 10rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 22rpx;

		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;
			height: 431rpx;

			image {
				width: 100%;
				border-radius: 10rpx;
			}

			margin-bottom: 20rpx;
		}

		.top-info {
			.name {
				font-size: 32rpx;
				font-weight: 800;
			}

			.address {
				color: #666666;
				font-size: 28rpx;
			}

			.right {
				text-align: right;

				.score {
					font-size: 36rpx;
					color: #FF9935;
				}

				.stars {
					height: 25rpx;
					width: 25rpx;
					margin-right: 10rpx;
				}
			}
		}

		.three-btn {
			display: flex;
			align-items: center;
			margin: 40rpx;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}

			text {
				font-size: 28rpx;
			}
		}
	}

	.center-panel {
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		margin-bottom: 22rpx;

		.xing-item {
			min-width: 190rpx;
			height: 68rpx;
			line-height: 68rpx;
			background-color: #F0F0F0;
			font-size: 28rpx;
			color: #666666;
			margin: 10rpx;
			text-align: center;
			padding: 0 10rpx;
		}

		.hot-con {
			margin-top: 20rpx;
			padding-bottom: 30rpx;

			.hot {
				font-size: 32rpx;
				font-weight: 800;
			}

			.people {
				font-size: 30rpx;
				color: #999999;
			}

			.hotNum {
				margin-top: 10rpx;
				font-size: 28rpx;
				color: #999999;
			}
		}

		.jianjie-con {
			padding: 30rpx;

			.jj-title {
				font-size: 32rpx;
				font-weight: 800;
			}

			.jj-con-wrap {
				box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.1);
				margin-top: 30rpx;

				.jj-con {
					padding: 30rpx 30rpx 30rpx 30rpx;
					font-size: 28rpx;
					color: #999999;
				}

				.seeInfo {
					border-top: 1px solid rgba(204, 204, 204, 0.29);
					color: #FF9935;
					font-size: 28rpx;
					text-align: center;
					padding: 25rpx 0;
					margin-top: 30rpx
				}
			}
		}

	}

	.zongci-new,
	.zongci-create {
		background-color: #fff;
		margin-bottom: 22rpx;
	}
</style>
