<template>
	<!-- 宗祠建设 -->
	<view class="container">
		<zc-top :zcInfo="zcInfo"></zc-top>


		<new-list :newsData="newsData"></new-list>

		<three-new :threeData="threeData"></three-new>

		<!-- 寺庙美景 -->
		<view class="zc-new-list">
			<panel-top title="寺庙美景" url="newList"></panel-top>
			<new-list :newsData="newsData"></new-list>
			<zc-threeImg :img="img"></zc-threeImg>
		</view>

	</view>
</template>

<script>
	import zcTop from "./template/zc-top.vue"
	import panelTop from "@/template/panel-top.vue"
	import newList from "@/template/newsList.vue"
	import threeNew from "@/template/three.vue"
	import zcThreeImg from "./template/zc-threeImg.vue"
	export default {
		components: {
			zcTop,
			panelTop,
			newList,
			threeNew,
			zcThreeImg
		},
		data() {
			return {
				img:'../../static/images/shuijiao.jpg',
				threeData: {
					title: '标题标题标题标题标题标题标题标题标题标题',
					img: ['../../static/images/shuijiao.jpg', '../../static/images/shuijiao.jpg', '../../static/images/shuijiao.jpg'],
					from: '南方都市报',
					plNum: 999,
					time: '2020-03-24 10:00:00'
				},
				zcInfo: {
					title: '寺庙是佛教建筑之一，汉传佛教的寺庙均是中式建筑风格，藏传佛教的寺庙',
					cover: '../../static/images/shuijiao.jpg',
					time: '2020-03-24 10:00:00',
					num: 300
				},
				newsData: [{
					title: '标题标题标题标题标题标题标题标题标题标题',
					content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					cover: '../../static/images/shuijiao.jpg',
					time: '2020-03-24 10:00:00',
				}],
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}

	.zc-new-list {
		margin-top: 22rpx;
		margin-bottom: 22rpx;
	}
</style>
