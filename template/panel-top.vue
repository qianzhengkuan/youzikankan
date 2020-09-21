<template name="panel-top">
	<!-- 板块头部：例如：   热门推荐          更多> -->
	<view class="panel-top flex-box flex-y-center">
		<view class="flex-1 title">{{title}}</view>
		<navigator class="jiantouRight gray-text" :url="url">{{rightText ? rightText : '更多'}}</navigator>
	</view>
</template>

<script>
	export default {
		name: 'big-cover',
		props: {
			title: {
				value: '',
				type: String
			},
			url: {
				value: '',
				type: String
			},
			rightText: {
				value: '',
				type: String
			},
			
		},
		created: function(e) {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.panel-top {
		padding: 30rpx 30rpx 15rpx 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 1rpx solid #F7F7F7;
		.title {
			font-size: 35rpx;
			font-weight: 800;
		}

		.gray-text {
			font-size: 23rpx;
			color: #838282;
			padding-right: 30rpx;

			&::after {
				top: 45%;
				right: 20rpx;
				border-color: #838282;
			}
		}
	}
</style>
