<template>
	<!-- 自定义顶部 -->
	<view class="container flex-box flex-column">
		<!-- 可拖动tab -->
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto"
		 v-bind:class="{'waitFixed':isScroll}">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
				<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
			</view>
		</scroll-view>
		<!-- 内容swiper -->
		<swiper :current="tabIndex" class="swiper-box flex-1" :duration="300" @change="ontabchange">
			<swiper-item class="swiper-item" v-for="(tab,index1) in allData" :key="index1">
				<!-- #ifndef APP-NVUE -->
				<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y="true" style="height: 100%;" @scrolltolower="loadMore(index1)">
					<!-- 新闻列表 -->
					<!-- 1:无图   2:单图小   3:单图大  4:三图 -->
						<view v-for="(item,index) in allData[index1]" :key="index">
							<activityList :shData="item"></activityList>
							<noMore v-if="newsList[index].noMore && allData[index1].length"></noMore>
						</view>
						<noData v-if="!allData[index1].length"></noData>
				</scroll-view>
				<!-- #endif -->
			</swiper-item>
		</swiper>
			
	</view>

</template>
<script>
	import activityList from "@/template/activityList.vue"
	export default {
		components: {
			activityList
		},
		data() {
			return {
				newsList: [],
				cacheTab: [],
				tabIndex: 0,
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 0, //距离底部多少像素时触发
				pageObj: {
					page: 0,
					pagecount: 0
				},
				noMore: false,
				isScroll: false,
				id: '',
				tabBars: [{
						name: '进行中',
						id: 'jinxingzhong',
					}, {
						name: '未开始',
						id: 'weikai',
					}, {
						name: '已结束',
						id: 'jieshu',
					}
				],
				allData: [
					[],[],[]
				],
				scrollInto: "",
			}
		},
		onLoad() {
			new Promise((resolve, reject) => {
				this.tabBars.forEach((tabBar) => {
					this.newsList.push({
						data: [],
						pageObj: {
							page: 1,
							pagecount: 1
						},
						isLoading: false,
						noMore: true
					});
				});
				resolve()
			}).then(() => {
				this.getAll();
			})
		},
		onPageScroll(e) {
			if (e.scrollTop > 100) {
				this.isScroll = true;
			} else {
				this.isScroll = false;
			}
		},
		methods: {
			getAll() {
				var that = this;
				this.$apiJs.getMyChamberActivity({
				page: this.pageObj.page + 1
				}).then(res => {
					var r_data=res.backlist;
					r_data.forEach((item) => {
						//0、未开始  1、进行中  -1、已结束
						if(item.type==1){
							this.allData[0].push(item)
						}else if(item.type==0){
							this.allData[1].push(item)
						}else{
							this.allData[2].push(item)
						}
					})
				})
			},
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			ontabchange(e) {
				let index = e.target.current || e.detail.current;
				this.switchTab(index);
			},
			switchTab(index) {
				var that = this;
				this.tabIndex = index;
				this.scrollInto = this.tabBars[index].id;
			}
		}
	}

</script>


<style lang="scss">
	uni-swiper-item{
		overflow: auto;
	}
	
	.container {
		height:calc(100vh - var(--window-top) - 80rpx);
		padding-top:80rpx;
		background-color: $yzkk-body-gray-color;
	}
	
	.three-wrap{
		// margin-bottom: 24rpx;
	}

	.yzkk-top-con {
		width: 100%;
		.search-view {
			background-color: #F0EFF4;
			height: 61rpx;
			border-radius: 40rpx;
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

	
	.scroll-h {
		width: 750rpx;
		height: 80rpx;
		flex-direction: row;
		background-color: #ffffff;
		position: fixed;
		top: 88rpx;
		z-index: 999;
		/* #ifdef APP-PLUS || MP-WEIXIN */
		white-space: nowrap;
		top: 0rpx;
		/* #endif */
	}

	.line-h {
		width: 100%;
		height: 1rpx;
		background-color: #cccccc;
		position: fixed;
		top: 168rpx;
	}

	.uni-tab-item {
		display: inline-block;
		flex-wrap: nowrap;
		padding-left: 34rpx;
		padding-right: 34rpx;
		text-align: center;
		    width: 33.3%;
		    box-sizing: border-box;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #C34944;
	}

	.swiper-box {
		display: contents;
		box-sizing: border-box;
		padding-top: 176rpx;
	}

	.swiper-item {
		flex: 1;
		flex-direction: row;
	}

	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750rpx;
	}

	.update-tips {
		position: absolute;
		left: 0;
		top: 41px;
		right: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #FDDD9B;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.update-tips-text {
		font-size: 14px;
		color: #ffffff;
	}

	.refresh {
		width: 750rpx;
		height: 64px;
		justify-content: center;
	}

	.refresh-view {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.refresh-icon {
		width: 30px;
		height: 30px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}

	.refresh-icon-active {
		transform: rotate(180deg);
	}

	.loading-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		color: #999999;
	}

	.loading-text {
		margin-left: 2px;
		font-size: 16px;
		color: #999999;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28rpx;
		color: #999;
	}
</style>
