<template name="big-cover">
	<view class="cover-wrap allNewItem" hover-class="gray-bg"@click="navTo('/pages/package_new/newsInfo',coverData)">
		<view class="flex-box flex-column coverNew">
			<text class="newTitle text-over">{{coverData.title}}</text>
			<view class="flex-1">
				<image :src="coverData.img[0].url" class="cover" @error="showErrorImage()" mode="aspectFill" lazy-load="true"></image>
				<!-- <image :src="coverData.img[0].url" class="cover" @error="showErrorImage()"  mode="aspectFill"></image> -->
			</view>
		
			<view class="news-bottom flex-1 flex-bottom-content new-bottom-fs-gray">
				<text class="gray-text">{{coverData.user_name}} &nbsp;&nbsp;&nbsp;{{coverData.time}}</text>
			</view>
		</view>
	</view>
		
</template>

<script>
	export default {
		name: 'big-cover',
		props: {
			coverData: {
				value:{},
				type:  Object
			},
			hasBottom:{
				value:true,
				type:  Boolean
			}
		},
		created: function(e) {
		},
		methods: {
			showErrorImage(){
				this.coverData.img[0].url = this.$errorImage;
			},
			navTo(url,i){
			uni.setStorageSync('isShare',1)
				uni.navigateTo({
					url:url+'?id='+i.id+'&isShare=1'
				})
				// 加入历史记录
				let list =  uni.getStorageSync('history')
				list = list ? JSON.parse(list) : []
				let index = list.findIndex(v=>v.id === this.coverData.id)
				if(index === -1){
					list.unshift(this.coverData)
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
		}
	}
</script>

<style lang="scss" scoped>
	.allNewItem{
		padding: 30rpx;
		position: relative;
		height: 526rpx;
		border-bottom-width: 1rpx;
		border-bottom-color: #EEEEEE;
		border-style: solid;
		/* #ifndef APP-NVUE */
		display:flex;
		border: 0;
		/* #endif */
		background-color: #FFFFFF;
	}
	.coverNew{
		flex: 1;
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
	.cover{
		width: 690rpx;
		height: 354rpx;
	}
	
	.new-bottom-fs-gray {
		flex: 1;
		flex-direction: row ;
		align-items: flex-end;
	}
	.gray-text{
		font-size: 24rpx;
		color: #999999;
		margin-right: 23rpx;
	}
</style>
