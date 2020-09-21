<template>
	<view class="container">
		<!-- 浏览历史 -->
		<view class="zx-cover-wrap">
			<view v-for="(item,index) in newsData" :key="index">
				<text-new v-if="item.type==1" :newsData="item"></text-new>
				<new-list v-if="item.type==2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
				<!-- 大封面 -->
				<big-cover v-if="item.type==3" :coverData="item"></big-cover>
				<!-- 三张图片 -->
				<three-new v-if="item.type==4" :threeData="item"></three-new>
			</view>
			
			<noData v-if="!newsData.length"></noData>
			<noMore v-if="newsData.length"></noMore>
		</view>
	</view>
</template>

<script>
	import textNew from "@/template/textNew.vue"
	import newList from "@/template/newsList.vue"
	import bigCover from "@/template/bigCover.vue"
	import threeNew from "@/template/three.vue"

	export default {
		components: {
			textNew,
			newList,
			bigCover,
			threeNew,
		},
		data() {
			return {
				newsData: [],
				noMore: false,
				noData:false,
			}
		},
		onLoad() {
			// 取出历史记录
			let newsData =  uni.getStorageSync('history')
			if(newsData){
				this.newsData = JSON.parse(newsData)
			}
		},
		onNavigationBarButtonTap() {
			uni.showModal({
				content: '是否要清除历史记录？',
				success: (res)=>{
					if (res.confirm) {
						uni.removeStorageSync('history')
						this.newsData = []
					}
				}
			});
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.zx-cover-wrap{
		background-color:#F7F7F7;
		height: 100vh;
	}
</style>
