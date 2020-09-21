<template name="zc-threeImg">
	
	<view class="zc-img">
		<view class="flex-box flex-left-right-between">
			<image class="img-372" :src="img" mode="aspectFill"></image>
			<view class="zc-img-right flex-box flex-column flex-left-right-between">
				<image :src="img" mode=""></image>
				<image :src="img" mode=""></image>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name: 'zc-threeImg',
		props: {
			img: {
				value:'',
				type: String
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.zc-img {
		height: 496rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		
		.img-372{
			width: 388rpx;
			height: 436rpx;
		}
		
		.zc-img-right{
			height: 436rpx;
			image{
				width: 282rpx;
				height: 208rpx;
			}
		}
	}
</style>
