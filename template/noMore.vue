<template name="noMore">
	<view class="noMore">
		<!-- <text class="gray-text">没有更多了~</text> -->
		<text class="gray-text">{{loadmore}}</text>
	</view>
</template>

<script>
	export default {
		name: 'noMore',
		// props: {
		// 	activityList: {
		// 		value: [],
		// 		type: Array
		// 	}
		// },
		props: ['loadmore'],
		created: function(e) {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* 没有更多了 */
	.noMore{
		width: 100%;
		justify-content: center;
		text-align: center;
		padding: 30rpx 0;
	}
	
	.gray-text{
		color: #ADADAD;
		font-size: 30rpx;
	}

</style>
