<template  name="people-list">
	<!-- 成员列表 -->
	
	<view class="container">
		
		<view class="list-wrap">
			<view v-for="(item,index) in shList" :key="index">
				<shanghui :isPeople="true"  :shData="item"></shanghui>
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
		onLoad(option) {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			this.getChamberUser(option.id,0);
		},
		methods: {
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			// 商会列表
			getChamberUser(id,isMore) {
				var that = this;
				this.$apiJs.getChamberUser({
					id:id
				}).then(res => {
					this.shList =res;
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
