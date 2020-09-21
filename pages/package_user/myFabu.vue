<template>
	<!-- 我的收藏 -->
	<view class="container flex-box flex-column">
		<!-- 可拖动tab -->
		<scroll-view id="tab-bar" class="scroll-h bd-bottom" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto" v-bind:class="{ waitFixed: isScroll }">
			<view v-for="(tab, index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
				<!-- <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">资讯</text> -->
				<!-- <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{index ? '活动' : '资讯'}}</text> -->
				<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{ tab.name }}</text>
			</view>
		</scroll-view>
		<!-- 内容swiper -->
		<swiper :current="tabIndex" class="swiper-box flex-1" :duration="300" @change="ontabchange">
			<swiper-item class="swiper-item" v-for="(tab, index1) in allData" :key="index1">
				<!-- #ifndef APP-NVUE -->
				<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y="true" style="height: 100%;" >
					<!-- 新闻列表 -->
					<!-- 0:新闻  1：活动-->
					<view v-if="index1 == 0" v-for="(item, index) in allData[0]" :key="index">
						<text-new v-if="item.type == 1" :newsData="item"></text-new>

						<uni-swipe-action>
							<uniSwipeActionItem :right-options="options" @click="onClick($event,index,item.id)">
								<view class="" style="width: 100%;height: 228rpx;">
									<new-list v-if="item.type == 2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
								</view>
								
							</uniSwipeActionItem>
						</uni-swipe-action>

						<!-- 大封面 -->
						<big-cover v-if="item.type == 3" :hasBottom="true" :coverData="item"></big-cover>
						<!-- 三张图片 -->
						<three-new v-if="item.type == 4" :threeData="item"></three-new>
					</view>

					<view v-if="index1 == 1" v-for="(item, index) in allData[1]" :key="index"><activityList :shData="item"></activityList></view>

					<noData v-if="!allData[0].length && index1 == 0"></noData>
					<noMore v-if="newsList[0].noMore && allData[0].length && index1 == 0"></noMore>
					<noData v-if="!allData[1].length && index1 == 1"></noData>
					<noMore v-if="newsList[1].noMore && allData[1].length && index1 == 1"></noMore>
				</scroll-view>
				<!-- #endif -->
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
import textNew from '@/template/textNew.vue';
import newList from '@/template/newsList.vue';
import bigCover from '@/template/bigCover.vue';
import threeNew from '@/template/three.vue';
import hasConNew from '@/template/hasConNew.vue';
import activityList from '@/template/activityList.vue';

// import uniSection from './components/uni-section/uni-section.vue';
import uniSwipeAction from './components/uni-swipe-action/uni-swipe-action.vue';
import uniSwipeActionItem from './components/uni-swipe-action-item/uni-swipe-action-item.vue';

export default {
	components: {
		activityList,
		textNew,
		newList,
		bigCover,
		threeNew,
		hasConNew,
		// uniSection,
		uniSwipeAction,
		uniSwipeActionItem
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
			tabBars: [
				{
					name: '文章',
					id: 'zixun'
				},
				{
					name: '活动',
					id: 'huodong'
				}
			],
			allData: [[], []],
			scrollInto: '',
			options: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			wzid:'',//要删除的文章ID
			delList:[],
		};
	},
	onLoad() {
		new Promise((resolve, reject) => {
			this.tabBars.forEach(tabBar => {
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
			resolve();
		}).then(() => {
			this.getAll();
		});
	},
	onPageScroll(e) {
		if (e.scrollTop > 100) {
			this.isScroll = true;
		} else {
			this.isScroll = false;
		}
	},
	methods: {
		onClick(e,index,wzid) {
			console.log(e);
			console.log(index)
			console.log(wzid)
			if(e.index == 1 && e.position == 'right'){
				uni.showModal({
					content: '要删除该文章吗？',
					success: (res)=> {
						if (res.confirm) {
							// 发布文章接口
							this.$apiJs
								.myReleaseDel({
									id:wzid
								})
								.then(res => { 
									console.log(res);
									if(res == 1){
									   uni.showToast({
										title: '删除成功',
										duration: 2000
									 });
									 this.allData[0].splice(index, 1)
								   }
							});
						} 
					}
				});
			}
		},
		getAll() {
			var that = this;
			this.$apiJs
				.myRelease({
					page: this.pageObj.page + 1
				})
				.then(res => {
					console.log(res);
					var r_data = res.backlist;
					that.delList = res.backlist
					console.log(that.delList)
					r_data.forEach(item => {
						that.wzid = item.id
						// console.log(that.wzid)
						//  2：资讯
						item.id = item.id;
						if (item.type == 2) {
							if (item.img.length && item.img) {
								item.cover = item.img[0].url;
							} else {
								item.img = 'no';
								item.cover = 'no';
							}
							item.time = item.create_time;
							this.allData[0].push(item);
						} else {
							// item.name =item.activity_name;
							// this.allData[1].push(item)
						}
					});
				});
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
};
</script>

<style lang="scss">
	
uni-swiper-item {
	overflow: auto;
}

.container {
	height: calc(100vh - var(--window-top) - 80rpx);
	padding-top: 80rpx;
	background-color: $yzkk-body-gray-color;
}

.three-wrap {
	// margin-bottom: 24rpx;
}

.yzkk-top-con {
	width: 100%;

	.search-view {
		background-color: #f0eff4;
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
	width: 50%;
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
	color: #c34944;
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
	background-color: #fddd9b;
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
	transition-duration: 0.5s;
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
