<template>
	<!-- 宗祠 -->
	<view class="container">
		<!-- <loading-plus v-if="beforeReady"></loading-plus> -->

		<view class="status waitFixed"></view>
		<view class="flex-box  flex-column zc-head yzkk-header waitFixed">
			<view class="yzkk-top-con flex-box flex-y-center flex-left-right-between">
				<!-- <view class="address-top flex-box flex-y-center" @click="changeAddress()">
					<text>{{user.address || '手动定位'}}</text>
					<view class="sanjiao"></view> 
				</view> -->
				<div class="search-view flex-box flex-y-center" @click="navTo('../package_other/search')">
					<image class="searchIcon" src="../../static/images/icon/sousuo-01.png" mode="aspectFill"></image>
					文章...
				</div>
				<!-- <image src="../../static/images/icon/mingce.png" class="infoIcon" mode="aspectFill"></image> -->
			</view>
		</view>
		<!-- 第一块banner区域 -->
		<view class="top-banner-con bd-bottom">
			<view class="swiper-margin-wrap">
				<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in threeHot" :key="index" @click="navTo('../package_zongci/zongciInfo?id='+item.id+'')"
					 v-if="index<4">
						<view class="swiper-item">
							<image :src="item.cover" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 四个链接 -->
			<view class="flex-box link-four flex-left-right-between">
				<view class="flex-box flex-xy-center flex-column link-item flex-1" v-for="(item,index) in links" :key="index"
				 hover-class="yzkk-href-hover" @click="navTo(item.url)">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		<!-- 两个热门新闻 -->
		<view class="flex-box two-new flex-column flex-left-right-between">
			<view class="flex-box flex-y-center two-item" v-for="(item,index) in hotTwo" :key="index" @click="navTo('../package_new/newsInfo?id='+item.id+'')"
			 v-if="index<2">
				<text class="two" v-bind:class="{'orange-text':index}">{{index ? '新闻': '资讯'}}</text>
				<text class="bd-text">庙宇</text>
				<text class="two-gray text-over">{{item.title}}</text>
			</view>
		</view>
		<!-- 热门推荐 -->
		<view class="hot-three">
			<panel-top title="热门推荐" url="../package_zongci/zongciList"></panel-top>
			<view class="three-img flex-box">
				<view class="t-i-item flex-box flex-column flex-y-center" v-for="(item,index) in threeHot" :key="index" @click="navTo('../package_zongci/zongciInfo?id='+item.id+'')"
				 v-if="index<3">
					<image :src="item.cover" @error="showErrorImage(index)" mode="aspectFill"></image>
					<text class="text-over">{{item.text}}</text>
				</view>
			</view>
		</view>
		<!-- 资讯动态 -->
		<view class="all-cover-wrap">
			<panel-top title="热门资讯" url="../package_zongcinewList"></panel-top>
			<!-- <big-cover :hasBottom="false" :coverData="coverData"></big-cover> -->
			<view v-for="(item,index) in newsData" :key="index">
				<text-new v-if="item.type==1" :newsData="item"></text-new>
				<new-list v-if="item.type==2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
				<!-- 大封面 -->
				<big-cover v-if="item.type==3" :hasBottom="true" :coverData="item"></big-cover>
				<!-- 三张图片 -->
				<three-new v-if="item.type==4" :threeData="item"></three-new>
			</view>
			<view v-if="!newsData.length" class="noDataText">暂无数据~</view>
		</view>

		<!-- 寺庙建设 -->
		<!-- <view class="zongci-create">
			<panel-top title="寺庙推荐" url="zongciCreate"></panel-top>
			<four-list :fourData="fourData"></four-list>
			<view  v-if="!fourData.length" class="noDataText">暂无数据~</view>
		</view> -->

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
	import fourList from "@/pages/tabbar/template/four-list.vue"

	export default {
		mixins: [loading],
		components: {
			panelTop,
			textNew,
			newList,
			bigCover,
			threeNew,
			hasConNew,
			fourList
		},
		data() {
			return {
				user: {
					address: ''
				},
				isScroll: false,
				fourData: [],
				hotTwo: [],
				threeHot: [],
				newsData: [],
				links: [{
					icon: '../../static/images/icon/simiao.png',
					text: '寺庙',
					url: '../package_zongci/zongciList'
				}, {
					icon: '../../static/images/icon/jianshe.png',
					text: '寺庙建设',
					url: '../package_zongci/createZC'
				}, {
					icon: '../../static/images/icon/news.png',
					text: '寺庙资讯',
					url: '../package_zongci/newList?id=1'
				}],
				coverData: {
					zc_title: '标题标题标题标题标题标题标题标题标题标题',
					zc_content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					cover: '../../static/images/shuijiao.jpg',
				},
				userLogin: true,
				stateFlag: false //判断是否入驻宗祠
			}
		},
		mounted() {
			// this.getLocation();
			this.getHotZongCiList();
			this.getHotZongCiNewsList();
			this.stateFlag = false;
			this.getZongCiList();
			this.$commonJs.getCity().then(res => {
				console.log('定位城市--' + JSON.stringify(res));
				this.user.address = res.address.city;
			})
		},
		onShow() {
			if (!this.stateFlag) {
				this.getState();
				this.stateFlag = true;
			}
		},
		onPageScroll(e) {
			// isScroll
			if (e.scrollTop > 150) {
				this.isScroll = true;
			} else {
				this.isScroll = false;
			}
		},
		methods: {
			getZongCiList() {
				var that = this;
				this.$apiJs.zongciList({
					page: 1
				}).then(res => {
					var r_data = res.backlist;
					this.fourData = r_data;
				})
			},
			showErrorImage(i) {
				this.threeHot[i].cover = this.$errorImage;
			},
			getState() {
				// 状态值: -1=审核不通过,   0=待审核,    1=通过
				this.$apiJs.getTempleJoinStatus().then(res => {
					if (res != 'seeOther') {
						if (res.status == 1) {
							this.links[1].text = '我的寺庙';
							this.links[1].url = 'myZC?id=' + res.id + '';
						} else if (res.status == -1) {
							this.links[1].url = 'createZC?status=-1'
						}
					} else {
						this.userLogin = false;
					}
				})
			},
			// 热门寺庙
			getHotZongCiList() {
				var that = this;
				this.$apiJs.getTemplePopularList({
					page: 1
				}).then(res => {
					// console.log(res)
					var r_data = res.backlist;
					r_data.map((item) => {
						item.cover = item.img[0].url || '';
						item.text = item.name;
					});
					this.threeHot = r_data;
				})
			},
			// 热门寺庙资讯
			getHotZongCiNewsList() {
				var that = this;
				this.$apiJs.getTempleNewsPopularList({
					page: 1
				}).then(res => {
					var r_data = res.backlist;
					console.log(r_data);
					r_data.map((item) => {
						//先设置游子看看发布平台数据为空
						// item.user_name = ""
						if (item.img) {
							item.cover = item.img[0].url;
						} else {
							item.cover = 'no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
						item.text = item.name;

					})
					console.log(r_data);
					this.newsData = r_data;
					this.hotTwo = r_data;
				})
			},
			changeAddress() {
				// this.$commonJs.changeCity().then(res => {
				// 	// this.$commonJs.uniMsg('定位城市--'+JSON.stringify(res));
				// 	// this.user.addrses=res.address.city;
				// 	console.log(res);
				// })
			},
			navTo(url) {
				console.log(url);

				// if(url=='../package_zongci/createZC'){
				// 	if(!this.userLogin){
				// 		this.$commonJs.toLoginPage();
				// 	}else{
				// 		this.$commonJs.navTo(url)
				// 	}
				// }else{
				// 	this.$commonJs.navTo(url)
				// }

				if (url == '../package_zongci/createZC') {
					this.$commonJs.isLogin().then(res => {
						this.$commonJs.navTo(url)
					});
				} else {
					this.$commonJs.navTo(url)
				}


			}
		}
	}
</script>

<style lang="scss">
	.mar-bottom {
		margin-bottom: 22rpx;
	}

	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}

	.yzkk-header {
		// #ifdef H5
		top: 0;
		// #endif
		// #ifndef H5
		top: var(--status-bar-height);
		// #endif

	}

	.yzkk-top-con {
		width: 100%;

		.address-top {
			text {
				font-size: 30rpx;
				font-weight: 800;
				margin-right: 10rpx;
			}

			.sanjiao {
				width: 0;
				height: 0;
				border-top: 14rpx solid black;
				border-right: 10rpx solid transparent;
				border-left: 10rpx solid transparent;
				margin-right: 20rpx;
			}
		}

		.search-view {
			// #ifndef MP-WEIXIN
			flex: 1;
			// #endif
			// #ifdef MP-WEIXIN
			width: 502rpx;
			// #endif
			background-color: #F0EFF4;
			height: 61rpx;
			border-radius: 31rpx;
			font-size: 24rpx;

			.searchIcon {
				width: 28rpx;
				height: 28rpx;
				margin: 0 19rpx;
			}

		}

		.infoIcon {
			width: 38rpx;
			height: 30rpx;
		}
	}

	.top-banner-con {
		background-color: #fff;

		// #ifdef APP-PLUS || MP-WEIXIN
		margin-top: 135rpx !important;
		// #endif
		// #ifndef APP-PLUS || MP-WEIXIN
		margin-top: 88rpx !important;
		// #endif
		width: 100%;
		padding: 30rpx 30rpx 10rpx 30rpx;
		box-sizing: border-box;

		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;

			uni-swiper,
			swiper {
				height: 450rpx;
			}

			image {
				width: 100%;
			}

			margin-bottom: 20rpx;
		}

		.link-four {
			.link-item {
				padding: 30rpx 0;
				box-sizing: border-box;

				image {
					width: 79rpx;
					height: 79rpx;
					border-radius: 50%;
					margin-bottom: 8rpx;
				}

				text {
					font-size: 28rpx;
					color: #3F3F3F;
				}
			}
		}
	}

	.two-new {
		@extend .mar-bottom;
		background-color: #fff;
		padding: 20rpx 30rpx;
		box-sizing: border-box;

		.two-item {
			margin-bottom: 12rpx;
		}

		.two {
			font-size: 29rpx;
			margin-right: 15rpx;
			min-width: 60rpx;
			text-align: center;
		}

		.bd-text {
			min-width: 60rpx;
			height: 28rpx;
			line-height: 28rpx;
			font-size: 19rpx;
			border: 1px solid rgba(255, 64, 0, 1);
			border-radius: 7rpx;
			color: rgba(255, 64, 0, 1);
			margin-right: 15rpx;
			text-align: center;
			padding: 0 10rpx;
		}

		.two-gray {
			color: #999999;
			font-size: 27rpx;
		}
	}

	.hot-three {
		@extend .mar-bottom;
		background-color: #fff;

		.three-img {
			padding: 30rpx;

			.t-i-item {
				width: 217rpx;
				margin-right: 18rpx;
			}

			.t-i-item:nth-last-child(1) {
				margin-right: 0;
			}

			image {
				width: 217rpx;
				height: 210rpx;
				margin-bottom: 20rpx;
			}

			text {
				width: 217rpx;
				font-size: 30rpx;
				font-weight: 800;
			}
		}
	}


	.new-panel {
		@extend .mar-bottom;
		background-color: #fff;
	}

	.all-cover-wrap {
		// margin-bottom: var(--window-bottom);
		background-color: #fff;
	}
</style>
