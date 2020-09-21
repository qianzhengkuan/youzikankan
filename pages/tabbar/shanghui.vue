<template>
	<!-- 商会 -->
	<view class="container">
		<!-- <loading-plus v-if="beforeReady"></loading-plus> -->
		
		<view class="status bg-white"></view>

		<!-- 第一块banner区域 -->
		<view class="top-banner-con bd-bottom">
			<view class="swiper-margin-wrap">
				<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image src="https://chousha.oss-cn-shenzhen.aliyuncs.com/youzikankan/20200428/0512177cee0d147ec66ab10465b04bbc.jpg" mode="aspectFill"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="https://chousha.oss-cn-shenzhen.aliyuncs.com/youzikankan/20200428/9464710d1837a096d15b26cca04a45ef.jpg" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<view class="link-wrap flex-box flex-left-right-between">
				<view class="link-left"  @click="navTo('../package_shanghui/mySH')">
					<image src="../../static/images/icon/lieb.png" mode=""></image>
					<text>我的商会</text>
					<view class="litile">ALL COC</view>
				</view>
				<view class="link-right flex-box flex-column flex-left-right-between">
					<view class="link-two add"@click="navTo('../package_shanghui/shanghuiList')">
						<image src="../../static/images/icon/jiaru.png" mode=""></image>
						<text>商会列表</text>
					</view>
					<view class="link-two join" @click="navTo('../package_shanghui/shanghuiSettled')">
						<image src="../../static/images/icon/ruzhu.png" mode=""></image>
						<text>商会入驻</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 商会活动 -->
		<view class="cover-wrap">
			<panel-top title="商会活动" :url="'../package_activity/activityList?id='+id"></panel-top>
			<view v-for="(item,index) in activityList" :key="index">
				<activityList :shData="item"></activityList>
			</view>
		</view>
		<!-- 商会资讯 -->
		<view class="zx-cover-wrap">
			<panel-top title="商会资讯" :url="'../package_shanghui/newsList'"></panel-top>
			<view v-for="(item,index) in newsData" :key="index">
				<text-new v-if="item.type==1" :newsData="item"></text-new>
				<new-list v-if="item.type==2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
				<!-- 大封面 -->
				<big-cover v-if="item.type==3" :coverData="item"></big-cover>
				<!-- 三张图片 -->
				<three-new v-if="item.type==4" :threeData="item"></three-new>
			</view>
		</view>
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	
	import textNew from "@/template/textNew.vue"
	import newList from "@/template/newsList.vue"
	import bigCover from "@/template/bigCover.vue"
	import threeNew from "@/template/three.vue"
	import hasConNew from "@/template/hasConNew.vue"
	import panelTop from "@/template/panel-top.vue"
	import activityList from "@/template/activityList.vue"
	export default {
		mixins:[loading],
		components: {
			panelTop,
			textNew,
			newList,
			bigCover,
			threeNew,
			hasConNew,
			activityList
		},
		data() {
			return {
				isScroll: false,
				newsData: [],
				activityList: []
			}
		},
		onLoad() {
			// this.getLocation();
			this.id = 1;
			this.getShangHuiNewsList();
			this.getShActivity();
		},
		onPageScroll(e) {
			// isScroll
			if (e.scrollTop > 100) {
				this.isScroll = true;
			} else {
				this.isScroll = false;
			}
		},
		methods: {
			navTo(url) {
				if(url=='shanghuiSettled'){
					this.$commonJs.isLogin().then(res=>{
						this.$apiJs.getChamberJoin({
						}).then(res => {
							console.log(res);
							// 0:未加入    1、入驻商会 并且 已通过审核(有商会了)     2、审核中 -1、审核未通过
							if(res.status==1){
								this.$commonJs.navTo("../package_shanghui/mySH")
							}else if(res.status==0){
								this.$commonJs.navTo(url+'?status=inAuth')
							}else{
								this.$commonJs.navTo(url)
							}
						})
					})
				}else{
					this.$commonJs.navTo(url)
				}
			},
			// 商会资讯列表
			getShangHuiNewsList() {
				var that = this;
				this.$apiJs.getChamberNewsList({
					page: 1
				}).then(res => {
					var r_data = res.backlist;
					r_data.map((item) => {
						if (item.img.length && item.img) {
							item.cover = item.img[0].url
						} else {
							item.img = 'no'
							item.cover = 'no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.newsData = r_data;
					console.log(this.newsData);
				})
			},
			// 商会活动
			getShActivity() {
				var that = this;
				this.$apiJs.getChamberActivityList({
					page: 1
				}).then(res => {
					var r_data = res.backlist;
					r_data.map((item) => {
						// item.start_time = that.$commonJs.timeFormat.noYearFormat(item.start_time);
						item.end_time = that.$commonJs.timeFormat.noYearFormat(item.end_time, 1);
					})
					this.activityList = r_data;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}

	.yzkk-top-con {
		width: 100%;

		.search-view {
			background-color: #fff;
			height: 61rpx;
			border-radius: 31rpx;

			.searchIcon {
				width: 28rpx;
				height: 28rpx;
				margin: 0 19rpx;
			}

			input {
				border: 0;
				font-size: 24rpx;
			}
		}

		.infoIcon {
			width: 38rpx;
			height: 30rpx;
			margin-left: 48rpx;
		}
	}

	.top-banner-con {
		background-color: #fff;
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;

		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;

			uni-swiper {
				height: 351rpx;
			}

			image {
				width: 100%;
			}

			margin-bottom: 20rpx;
		}

		.link-wrap {
			.link-left {
				position: relative;
				width: 328rpx;
				height: 296rpx;
				background: rgba(229, 99, 97, 1);
				border-radius: 6rpx;
				text-align: right;
				padding: 32rpx;
				color: #fff;
				box-sizing: border-box;
				font-size: 40rpx;
				font-weight: 800;

				.litile {
					font-weight: 400;
					font-size: 30rpx;
				}

			}

			.link-right {
				.link-two {
					position: relative;
					width: 342rpx;
					height: 138rpx;
					line-height: 138rpx;
					padding: 0 32rpx;
					box-sizing: border-box;
					border-radius: 6rpx;

					text {
						font-size: 40rpx;
						font-weight: 800;
					}


				}

				.add {
					color: #E56361;
					background: rgba(255, 236, 236, 1);
				}

				.join {
					color: #4B70E5;
					background-color: #F1F5FE;
				}
			}

			image {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				opacity: .5;
			}
		}

		margin-bottom: 22rpx;
	}

	.cover-wrap{
		margin-bottom: 22rpx;
	}
	
	.zx-cover-wrap{
		// margin-bottom: var(--window-bottom);
	}
</style>
