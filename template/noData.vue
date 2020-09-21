<template name="noMore">
	<view class="noData flex-column flex-box flex-xy-center">
		<image class="noDataImg" src="../static/images/icon/noData.png" mode=""></image>
		<text class="gray-text">没有找到相关内容~</text>
	</view>
</template>

<script>
	export default {
		name: 'noMore',
		props: {
		},
		created: function(e) {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.noData {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100%;
		height: 400rpx;
		transform: translateX(-50%) translateY(-50%);
		/* #ifndef APP-NVUE */  
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
	}
	
	.noDataImg {
		width: 200rpx;
		height: 200rpx;
	}
		
	.gray-text {
		font-size: 30rpx;
		color: #ADADAD;
	}

</style>
