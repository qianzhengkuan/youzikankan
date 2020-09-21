<template>
	<!-- 评选活动 -->
	<view class="container">
		<view v-for="(item,index) in activityList" :key="index">
			<activityList :shData="item"></activityList>
		</view>
		
		<noMore v-if="noMore"></noMore>
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
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 0, //距离底部多少像素时触发
				pageObj: {
					page: 0,
					pagecount: 0
				},
				noMore: false,
				id: '',
				activityList: []
			}
		},
		methods: {
			navTo(url, i) {
				uni.navigateTo({
					url: url + '?id=' + i.id + ''
				})
			},
			// 商会活动
			getShActivity(isMore) {
				var that = this;
				this.$apiJs.getChamberActivityList({
					page: 1
				}).then(res => {
					var nowData = this.activityList;
					var r_data = res.backlist;
					r_data.map((item) => {
						item.end_time = that.$commonJs.timeFormat.noYearFormat(item.end_time, 1);
						// item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.pageObj.page = Number(res.page);
					this.pageObj.pagecount = res.pagecount;
					if (Number(res.page) == res.pagecount) {
						this.noMore = true;
					}
					this.activityList = nowData.concat(r_data);
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
						this.getShActivity(1);
					}
				}).exec();
			}
		},
		onLoad(option) {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			this.id = option.id;
			this.getShActivity(0);
		}
	}
</script>

<style lang="scss">
	@import 'activity'
</style>
