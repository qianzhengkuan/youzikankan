<template name="zc-people">
	
	<view class="list-wrap">
	
		<view class="item flex-box flex-y-center jiantouRight lineJianTou bd-bottom"hover-class="yzkk-href-hover" @click="navTo(isSh ? 'shanghuiInfo' : '',shData)">
			<image :src=" isPeople ? shData.image : shData.img" mode="aspectFill"></image>
			<view class="flex-1 flex-box flex-column">
				<view class="name text-over"> {{ isPeople ? shData.username : shData.name }}</view>
				<text class="bottom-text gray-text text-over" v-if="isPeople">{{shData.grade}}</text>
				<text class="bottom-text gray-text text-over"  v-if="isSh">成员{{shData.user_number}}人/{{shData.address}}</text>
			</view>
		</view>
	
	</view>
</template>

<script>
</script>

<style>
</style>
