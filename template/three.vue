<template name="three-new">
	<view class="three-wrap allNewItem" hover-class="gray-bg" @click="navTo('/pages/package_new/newsInfo',threeData)">
		<view class="flex-box flex-column news-con">
			<text class="newTitle text-over">{{threeData.title}}</text>
			<view class="flex-1 flex-box img-list">
				<image v-for="(item,index) in threeData.img" v-if="index<3" :key="index" @error="showErrorImage(index)" :src="item.url ? item.url : ''"
				 class="three-item" lazy-load="true"></image>
			</view>
			<view class="flex-1 flex-bottom-content flex-box new-bottom-fs-gray">
				<text class="gray-text">{{threeData.user_name}} &nbsp;&nbsp;{{threeData.time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'three-new',
		components: {
		},
		props: {
			threeData: {
				value: {},
				type: Object
			}
		},
		methods: {
			showErrorImage(i) {
				this.threeData.img[i].url = this.$errorImage;
			},
			navTo(url, i) {
				uni.setStorageSync('isShare', 1)
				uni.navigateTo({
					url: url + '?id=' + i.id + '&isShare=1'
				})
				
				// 加入历史记录
				let list =  uni.getStorageSync('history')
				list = list ? JSON.parse(list) : []
				let index = list.findIndex(v=>v.id === this.threeData.id)
				if(index === -1){
					list.unshift(this.threeData)
					uni.setStorageSync('history',JSON.stringify(list))
				}
				
				// 保存文章点击次数
				uni.request({
					url: 'http://www.youzikankan.com/api/v1/set-ranking',
					// url: 'http://testfas.youzikankan.com/api/v1/set-ranking',
					method: 'POST',
					data: {
						id: this.newsData.id,
						title: this.newsData.title,
						type: 'day'
					},
					success: (res) => {
						// console.log(res)
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.allNewItem{
		padding:0 30rpx;
		position: relative;
		background-color: #FFFFFF;
	}
	.news-con{
		padding:30rpx 0;
		border-bottom-width: 1rpx;
		border-bottom-color: #EEEEEE;
		border-style: solid;
		/* #ifndef APP-NVUE */
		display:flex;
		border: 0;
		/* #endif */
	}
	.threeNew{
	}
	.gray-bg{
		background-color: #F3F3F5 !important;
	}
	
	.newTitle{
		font-size: 36rpx;
		line-height: 46rpx;
		margin-bottom: 16rpx;
		lines:1;
		text-overflow:ellipsis;
	}
	.img-list{
		flex-direction: row;
		justify-content: space-between;
	}
	.three-item{
		width: 222rpx;
		height: 180rpx;
	}
	.new-bottom-fs-gray {
		margin-top: 16rpx;
		flex: 1;
		flex-direction: row;
		align-items: flex-end;
	}
	.gray-text{
		font-size: 24rpx;
		color: #999999;
		margin-right: 23rpx;
	}
</style>
