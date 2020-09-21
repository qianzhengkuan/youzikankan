<template name="news-list">
	<view class="news-list-wrap">
		<view class="news-item allNewItem" hover-class="gray-bg" @click="navTo('/pages/package_new/newsInfo',newsData)">
			<view class="news-con" v-bind:class="{'flex-row-reverse':isReverse}">
				<view class="news-left">
					<image :src="newsData.cover" mode="aspectFill" @error="showErrorImage" class="cover" lazy-load="true"></image>
				</view>
				<view class="news-right">
					<view class="news-top">
						<text class="text-over newTitle" v-bind:class="{'text-over-2':textOver2}">{{newsData.title}}</text>
						<!-- <p class="text-over newContent text-over-2">{{newsData.content}}</p> -->
					</view>
					<view class="news-bottom flex-1 flex-bottom-content new-bottom-fs-gray">
						<text class="gray-text">{{newsData.user_name}}</text>
						<text class="gray-text mar-lef"> &nbsp;{{newsData.time}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'news-list',
		props: {
			isReverse: {
				value: false,
				type: Boolean
			},
			bgColor: {
				value: '',
				type: String
			},
			newsData: {
				value: {}
			},
			textOver2: {
				value: false,
				type: Boolean
			},
			url: {
				value: '',
				type: String
			},
		},
		
		methods: {
			navTo(url, i) {
				uni.setStorageSync('isShare', 1)
				uni.navigateTo({
					url: url + '?id=' + i.id + '&isShare=1'
				});
				// 加入历史记录
				let list = uni.getStorageSync('history')
				list = list ? JSON.parse(list) : []
				let index = list.findIndex(v => v.id === this.newsData.id)
				if (index === -1) {
					list.unshift(this.newsData)
					uni.setStorageSync('history', JSON.stringify(list))
				}

				// 保存文章点击次数
				// var that = this
				// this.$apiJs.setRanking({
				// 	id: this.newsData.id,
				// 	title: this.newsData.title,
				// 	type: 'day'
				// }).then(res => {
				// 	// console.log(res);
				// });

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
			showErrorImage() {
				this.newsData.cover = this.$errorImage;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gray-bg {
		background-color: #F3F3F5 !important;
	}

	.allNewItem {
		padding: 0 30rpx;
		flex: 1;
		background-color: #FFFFFF;
	}


	.newTitle {
		font-size: 36rpx;
		line-height: 46rpx;
		margin-bottom: 16rpx;
		lines: 2;
		text-overflow: ellipsis;
	}

	.news-con {
		padding: 30rpx 0;
		flex-direction: row-reverse;
		border-bottom-width: 1rpx;
		border-bottom-color: #EEEEEE;
		border-style: solid;
		/* #ifndef APP-NVUE */
		display: flex;
		border: 0;
		/* #endif */
	}

	.news-left {
		// display: inline-block;
		width: 218rpx;
		height: 170rpx;
		margin-left: 22rpx;
		// display: flex;
		flex-direction: column;
		position: relative;
	}
   
	.cover {
		width: 218rpx;
		height: 170rpx;
	}
	
	.news-right {
		flex: 1;
		height: 170rpx;
		justify-content: space-between;
	
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
	}

	.new-bottom-fs-gray {
		flex-direction: row;
		align-items: flex-end;
		flex-wrap: nowrap;
		lines: 1;
		text-overflow: ellipsis;

		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
	}

	.mar-lef {
		margin-left: 15rpx;

		/* #ifndef H5 */
		margin-left: 2px;
		line-height: 24rpx;
		// width: 154rpx;
		overflow: hidden;
		// white-space:nowrap;
		text-overflow: ellipsis;
		/* #endif */
	}

	.gray-text {
		font-size: 24rpx;
		color: #999999;
		lines: 1;
		text-overflow: ellipsis;
	}
</style>
