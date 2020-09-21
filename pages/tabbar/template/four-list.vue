<template name="four-list">
	<view class="four-list flex-box flex-wrapLine flex-left-right-between">

		<view class="four-item flex-box flex-column" v-for="(item,index) in fourData" :key="index" hover-class="yzkk-href-hover">
			<image :src="fourData.cover" ></image>
			<view class="center flex-box flex-left-right-between">
				<text class="name">
					{{fourData.name}}
				</text>
				<text class="orange-text distance">距离{{fourData.distance}}km</text>
			</view>
			<view class="bottom flex-1">
				<p class=" text-over-2 text-over">
					{{fourData.content}}
				</p>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'four-list',
		props: {
			fourData: {
				value:'' ,
				type: Object
			}
		},
		created: function(e) {

		},
		methods: {

		}
	}
</script>


<style lang="scss">
	.four-list {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		.four-item {
			width: 322rpx;
			height: 404rpx;
			box-shadow: 0px 0px 19rpx 0px rgba(0, 0, 0, 0.1);
			border-radius: 8rpx;
			background-color: #fff;
			overflow: hidden;
			margin-bottom: 30rpx;
			image {
				width: 100%;
				height: 259rpx;
			}

			.center {
				box-sizing: border-box;
				padding: 10rpx 19rpx;

				text.name {
					font-size: 27rpx;
					font-weight: 800;
				}

				text.distance {
					font-size: 23rpx;
				}
			}

			.bottom {
				box-sizing: border-box;
				padding: 10rpx 19rpx;
				color: #999999;
				font-size: 23rpx;
			}
		}
	}
</style>
