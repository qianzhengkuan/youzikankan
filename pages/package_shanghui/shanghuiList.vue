<template>

	<view class="container">
		<!-- 第一块banner区域 -->
		<view class="top-banner-con bd-bottom">
			<view class="swiper-margin-wrap">
				<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in shList[0].image" :key="index">
						<view class="swiper-item">
							<image :src="item.url" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<view class="list-wrap">
			<view v-for="(item,index) in shList" :key="index">
				<shanghui :isSh="true" :shData="item"></shanghui>
			</view>
			<noMore v-if="noMore"></noMore>
		</view>

	</view>
</template>

<script>
	import shanghui from "@/template/shanghuiList.vue"
	export default {
		components: {
			shanghui
		},
		data() {
			return {
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 0, //距离底部多少像素时触发
				pageObj: {
					page: 0,
					pagecount: 0
				},
				noMore: false,
				shList: []
			}
		},
		onLoad() {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			if (uni.getStorageSync('userInfo').username) {
				this.getShangHuiLoginList();
				// this.getShangHuiList();
			}else{
				this.getShangHuiList();
			}
		},
		methods: {
			
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			// 商会列表(未登录)
			getShangHuiList(isMore) {
				var that = this;
				this.$apiJs.getChamberList({
					page: this.pageObj.page + 1
				}).then(res => {
					var nowData = this.shList;
					var r_data = res.backlist;
					r_data.map((item) => {
						if (item.img.length && item.img) {
							item.cover = item.img[0].url
						} else {
							item.cover = 'no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.pageObj.page = Number(res.page);
					this.pageObj.pagecount = res.pagecount;
					if (Number(res.page) == res.pagecount) {
						this.noMore = true;
					}
					this.shList = nowData.concat(r_data);
					if (isMore) {
						this.isLoading = false;
					}
				})
			},
			// 商会列表(已登录)
			getShangHuiLoginList(isMore) {
				var that = this;
				this.$apiJs.getLoginChamberList({
					page: this.pageObj.page + 1
				}).then(res => {
					var nowData = this.shList;
					var r_data = res.backlist;
					r_data.map((item) => {
						if (item.img.length && item.img) {
							item.cover = item.img[0].url
						} else {
							item.cover = 'no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.pageObj.page = Number(res.page);
					this.pageObj.pagecount = res.pagecount;
					if (Number(res.page) == res.pagecount) {
						this.noMore = true;
					}
					this.shList = nowData.concat(r_data);
					if (isMore) {
						this.isLoading = false;
					}
				})
			},
			onPageScroll: function(e) {
				var that = this;
				const {
					scrollTop //滚动条距离页面顶部的像素
				} = e;
				//防止重复触发
				if (this.isLoading || this.noMore) {
					return;
				}
				const query = uni.createSelectorQuery().in(this);
				query.select('#listArea').boundingClientRect(data => {
					let {
						height //listArea节点的高度
					} = data;
					//如果设置的事件触发距离 大于等于 (节点的高度-屏幕高度-滚动条到顶部的距离)
					if (this.bottomDistinct >= height - this.screenHeight - scrollTop) {
						//阻止时间重复触发
						this.isLoading = true;
						if (uni.getStorageSync('userInfo').username) {
							this.getShangHuiLoginList(1);
						}else{
							this.getShangHuiList(1);
						}
					}
				}).exec();
			}
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

		}

		margin-bottom: 20rpx;
	}
</style>
