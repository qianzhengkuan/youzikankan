<template>
	<view class="start hv100" style="">
		<image class="git start-img" src="./5-130H2191322-52.gif" mode="" ></image>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.start {
		&-img {
			position: fixed;
			top: 50%;
			left:45%;
			height: 80rpx;
			width: 80rpx; 
		}
	}
	.hv100 {
		box-sizing: border-box;
		min-height: 100%;
		min-height: calc(100vh - var(--window-top) - var(--window-bottom));
		background-color: #FFFFFF;
	}
</style>
