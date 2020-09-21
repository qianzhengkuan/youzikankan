<template name="text-new">
	<view class="textNew-wrap allNewItem" hover-class="gray-bg" @click="navTo('/pages/package_new/newsInfo',newsData)">
		<view class="flex-box flex-column news-con">
			<text class="newTitle text-over">{{newsData.title}}</text>
			<view class="news-bottom flex-1 flex-bottom-content new-bottom-fs-gray">
				<text class="gray-text"> {{newsData.user_name}} &nbsp;&nbsp;&nbsp; {{newsData.time}}</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'text-new',
		props: {
			newsData: {
				value: {},
				type: Object
			}
		},
		methods: {
			touchstart(t) {
				this.bgColor = "#d0c5c5"
			},
			navTo(url, i) {
				uni.setStorageSync('isShare', 1)
				uni.navigateTo({
					url: url + '?id=' + i.id + '&isShare=1'
				})

				// 加入历史记录
				let list = uni.getStorageSync('history')
				list = list ? JSON.parse(list) : []
				let index = list.findIndex(v => v.id === this.newsData.id)
				if (index === -1) {
					list.unshift(this.newsData)
					uni.setStorageSync('history', JSON.stringify(list))
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
	.allNewItem {
		padding: 0 30rpx;
		position: relative;
		background-color: #FFFFFF;
	}

	.news-con {
		padding: 30rpx 0;
		border-bottom-width: 1rpx;
		border-bottom-color: #EEEEEE;
		border-style: solid;

		/* #ifndef APP-NVUE */
		display: flex;
		border: 0;
		/* #endif */
	}

	.gray-bg {
		background-color: #F3F3F5 !important;
	}

	.newTitle {
		font-size: 36rpx;
		line-height: 46rpx;
		margin-bottom: 16rpx;
		lines: 1;
		text-overflow: ellipsis;
	}

	.new-bottom-fs-gray {
		flex-direction: row;
		align-items: flex-end;
	}

	.gray-text {
		font-size: 24rpx;
		color: #999999;
		margin-right: 23rpx;
	}
</style>
