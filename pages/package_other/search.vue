<template>
	<view class="container">
		<view class="status"></view>
		<mSearch :show="false" ref="mSearch" @clear="clear" @search="search($event,1)"></mSearch>

		<view class="content">

			<view class="keywords" v-if="!searched">
				<view class="flex-box">
					<view class="flex-1 title">
						历史搜索
					</view>
					<image @click="clearhistory" src="../../static/images/icon/deleteIcon.png" mode=""></image>
				</view>

				<view class="word-list flex-box flex-wrapLine">
					<view @click="keywordSearch(item)" class="word" v-for="(item,index) in historyList" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="keywords" v-if="!searched">
				<view class="flex-box">
					<view class="flex-1 title">
						热门搜索
					</view>
					<image class="nosee" src="../../static/images/icon/cannotSee.png" mode=""></image>
				</view>
				<view class="word-list flex-box flex-wrapLine">
					<view @click="keywordSearch(item)" class="word" v-for="(item,index) in hotList" :key="index">{{item}}</view>
				</view>
			</view>
			<!-- 没搜到任何数据 -->
			<noData v-if="noData"></noData>

			<view class="search-data-warp" id="listArea">
				<view v-for="(item,index) in searchData" :key="index">
					<text-new v-if="item.type==1" :newsData="item"></text-new>
					<new-list v-if="item.type==2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
					<!-- 大封面 -->
					<big-cover v-if="item.type==3" :hasBottom="true" :coverData="item"></big-cover>
					<!-- 三张图片 -->
					<three-new v-if="item.type==4" :threeData="item"></three-new>
				</view>
				<noMore v-if="noMore"></noMore>
			</view>

		</view>

	</view>
</template>


<script>
	import textNew from "@/template/textNew.vue"
	import newList from "@/template/newsList.vue"
	import bigCover from "@/template/bigCover.vue"
	import threeNew from "@/template/three.vue"
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	export default {
		components: {
			mSearch,
			textNew,
			newList,
			bigCover,
			threeNew,
		},
		data() {
			return {
				historyList: [],
				hotList: ['福建', '期'],
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 0, //距离底部多少像素时触发
				pageObj: {
					page: 1,
					pagecount: 1
				},
				noMore: false,
				searched: false,
				noData: false,
				searchData: [],
				placeholder: '动态占位内容'
			};
		},
		methods: {
			setInputVal(c) {
				this.$refs.mSearch.setInput(c)
			},
			clearhistory() {
				this.historyList = [];
				uni.setStorageSync('historyArr',[]);
			},
			clear() {
				this.noData = false;
				this.searched = false;
				this.searchData = [];
				this.pageObj.page = 1;
				this.pageObj.pagecount = 1;
			},
			keywordSearch(i) {
				this.searchData = [];
				this.pageObj.page = 1;
				this.pageObj.pagecount = 1;
				this.$refs.mSearch.setInput(i);
				this.search(i,1);
			},
			getLocaStorage() {
				var h_arr =uni.getStorageSync('historyArr').length ? JSON.parse(uni.getStorageSync('historyArr')) : [];
				this.historyList=h_arr;
			},
			// 将关键字存入缓存
			setLocaStorage(str) {
				var h_arr = uni.getStorageSync('historyArr').length ? JSON.parse(uni.getStorageSync('historyArr')) : [];
				h_arr.push(str);
				var new_arr=h_arr.filter((str, index,self)=>self.indexOf(str)===index);
				uni.setStorageSync('historyArr',JSON.stringify(new_arr));
			},
			/**
			 * @param {Object} val 关键字
			 * @param {Object} newSearch 是否是最新关键字查询
			 */
			search(val,newSearch) {
				var that = this;
				this.keyword = val;
				this.noData = false;
				this.noMore = false;
				this.setLocaStorage(val);
				this.$apiJs.getNewsSearch({
					page: this.pageObj.page,
					search: val
				}).then(res => {
					this.searched = true;
					if (res.backlist.length) {
						var r_data = res.backlist;
						var nowData = this.searchData;
						r_data.map((item) => {
							//先设置游子看看发布平台数据为空
							// item.user_name = ""
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
						if(newSearch){
							this.searchData = r_data;
						}else{
							this.searchData = nowData.concat(r_data);
						}
						this.isLoading = false;
					} else {
						if (this.searchData.length) {
							this.noMore = true;
						} else {
							this.pageObj.page = 1;
							this.pageObj.pagecount = 1;
							this.noData = true;
						}
					}
				}).then(()=>{
					this.getLocaStorage();
				})
			},
			onPageScroll: function(e) {
				var that = this;
				const {
					scrollTop //滚动条距离页面顶部的像素
				} = e;
				//防止重复触发
				console.log(this.noMore) ;
				console.log(this.isLoading );
				if (this.isLoading || this.noMore) {
					return;
				}
				const query = uni.createSelectorQuery().in(this);
				query.select('#listArea').boundingClientRect(data => {
					let {
						height //listArea节点的高度j
					} = data;
					//如果设置的事件触发距离 大于等于 (节点的高度-屏幕高度-滚动条到顶部的距离)
					if (this.bottomDistinct >= height - this.screenHeight - scrollTop) {
						//阻止时间重复触发
						this.isLoading = true;
						this.pageObj.page+=1;
						this.search(this.keyword);
					}
				}).exec();
			}
		},
		onLoad() {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			this.getLocaStorage();
		}
	};
</script>


<style lang="scss" scoped>
	.container {
		position: relative;
		height: 100vh;
	}
	

	.status {
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
	}

	.content {
	
		// #ifndef MP-WEIXIN
		padding-top: 132rpx;
		// #endif
		// #ifdef MP-WEIXIN
		padding-top: 88rpx;
		// #endif
		
	}

	.keywords {
		padding: 50rpx 30rpx;
		box-sizing: border-box;

		.word-list {
			margin-top: 34rpx;
		}

		.title {
			font-size: 32rpx;
			font-weight: 800;
		}

		image {
			width: 36rpx;
			height: 36rpx;
		}

		image.nosee {
			width: 36rpx;
			height: 26rpx;
		}

		.word {
			height: 70rpx;
			background: rgba(240, 239, 244, 1);
			border-radius: 10rpx;
			font-size: 30rpx;
			line-height: 70rpx;
			min-width: 190rpx;
			font-weight: 800;
			margin: 15rpx;
			text-align: center;
			color: #999999;
		}
	}


	
</style>
