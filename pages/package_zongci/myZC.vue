<template>
	<!-- 我的宗祠 -->
	<view class="container">
		<!-- 第一块banner区域 -->
		<view class="top-banner-con bd-bottom">
			<view class="swiper-margin-wrap">
				<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item  v-for="(item,index) in zongciInfo.img" :key="index">
						<view class="swiper-item">
							<image :src="item.url" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<!-- 信息 -->
			<view class="top-info">
				<view class="flex-box flex-y-center">
					<view class="flex-1">
						<view class="name">{{zongciInfo.name}}</view>
						<view class="address">简介：普慈寺主要由大雄宝殿和汾阳王殿以及天王殿、财神殿厢楼、钟鼓楼、山门及月台等组成</view>
						<view class="address">地址：{{zongciInfo.address}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- <panel-top title="寺庙法师" :url="'zongCiPeoList?id='+id" rightText="全部僧人"></panel-top> -->
		
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
				id:'',
				img:'../../static/images/shuijiao.jpg',
				zongciInfo:'',
				newsData:[]
			}
		},
		methods: {
			seeInfo(){
				console.log('查看详情');
			},
			getInfo(id){
				var that=this;
				this.$apiJs.zongciInfo({
					id:id
				}).then(res=>{
					var r_data = res;
					that.zongciInfo =r_data;
				})
			},
			getZongCiNewsList(id){
				var that=this;
				this.$apiJs.zongciNewsList({
					page:1
				}).then(res=>{
					var r_data=res.backlist;
					r_data.map((item)=>{
						if(item.img.length && item.img){
							item.cover=item.img[0].url
						}else{
							item.cover='no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.newsData=r_data;
				})
			},
		},
		onLoad(option) {
			this.id=option.id;
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

	.top-banner-con {
		background-color: #fff;
		width: 100%;
		padding: 30rpx 30rpx 10rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 22rpx;

		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;

			uni-swiper {
				height: 484rpx;
			}

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

	.zongci-new,.zongci-create{
		background-color: #fff;
		margin-bottom: 22rpx;
	}
	
	
	
</style>
