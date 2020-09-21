<template>
	<!-- 商会资讯 -->
	<view class="container">
		<!-- <zc-top :zcInfo="zcInfo"></zc-top> -->
		<!-- 列表 -->
		<view class="zc-new-list" id="listArea">
			<!-- <panel-top title="商会资讯" url="newList"></panel-top> -->
			<view v-for="(item,index) in newsData" :key="index">
				<text-new v-if="item.type==1" :newsData="item"></text-new>
				<new-list v-if="item.type==2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
				<!-- 大封面 -->
				<big-cover v-if="item.type==3" :coverData="item"></big-cover>
				<!-- 三张图片 -->
				<three-new v-if="item.type==4" :threeData="item"></three-new>
			</view>
			<noMore v-if="noMore"></noMore>
		</view>
	</view>
</template>

<script>
	import zcTop from "../package_zongci/template/zc-top.vue"
	import panelTop from "@/template/panel-top.vue"
	import textNew from "@/template/textNew.vue"
	import newList from "@/template/newsList.vue"
	import bigCover from "@/template/bigCover.vue"
	import threeNew from "@/template/three.vue"
	import hasConNew from "@/template/hasConNew.vue"
	export default {
		components: {
			zcTop,
			panelTop,
			textNew,
			newList,
			bigCover,
			threeNew,
			hasConNew,
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
				id: '',
				newsData: [],
			}
		},
		methods: {
			getShangHuiNewsList(isMore) {
				var that = this;
				this.$apiJs.getChamberNewsList({
					page: this.pageObj.page + 1
				}).then(res => {
					var nowData = this.newsData;
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
					this.newsData = nowData.concat(r_data);
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
						this.getShangHuiNewsList(1);
					}
				}).exec();
			}
		},
		onLoad(option) {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			this.id = option.id;
			this.getShangHuiNewsList(0)
		}
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}


	.zc-new-list {
		margin-bottom: 22rpx;

	}
</style>
