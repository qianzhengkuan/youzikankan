<template>
	<!-- 选择想要加入的商会 -->
	<view class="container">
		<view  id="listArea">
		<view class="selectList" v-for="(item,index) in selectList" hover-class="yzkk-href-hover" :key="index" v-if="item.status!=1 && item.status!=2">
			<view class="select-item bd-bottom flex-box flex-column" @click="navTo('shanghuiInfo',item)">
				<!-- <image class="cover" :src="item.image[0].url" mode="aspectFill"></image> -->
				<image class="cover" @error="showErrorImage(0,index)" :src="item.image[0].url"  mode="aspectFill"></image>
				<view class="bottom">
					<view class="flex-box flex-y-center">
						<image :src="item.img"  @error="showErrorImage(1,index)"  mode="aspectFill"></image>
						<view class="flex-1 flex-box flex-column">
							<view class="title text-over">{{item.name}}</view>
							<view class="label">成员{{item.user_number}}人/建会{{item.create_time}}年/{{item.address}}</view>
						</view>
						<view class="request-btn">
							<button @click.stop="navBack(item)">申请加入</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<noMore v-if="noMore"></noMore>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 30, //距离底部多少像素时触发
				pageObj: {
					page: 0,
					pagecount: 0
				},
				noMore: false,
				id: '',
				selectList: []
			}
		},
		methods: {
			showErrorImage(i,index){
				if(i){
				  this.selectList[index].image[0].url = this.$errorImage;  
				}else{
					this.selectList[index].img = this.$errorImage;
				}
			},
			navBack(t){
				this.$commonJs.getBeforePage().$vm.chooseShId=t.id;
				this.$commonJs.getBeforePage().$vm.chooseShName=t.name;
				// console.log(JSON.stringify(this.$commonJs.getBeforePage()));
				this.$commonJs.getBeforePage().$vm.chooseShImage={
					backgroundImage:"url("+t.image[0].url+")"
				};
				
				
				this.$commonJs.navBack();
			},
			navTo(url, i) {
				uni.navigateTo({
					url: url+'?type=select&id='+i.id
				})
			},
			// 商会
			getSh(isMore) {
				var that = this;
				this.$apiJs.getLoginChamberList({
					page: 1
				}).then(res => {
					var nowData = this.selectList;
					var r_data = res.backlist;
					r_data.map((item) => {
						item.create_time = item.create_time.split('-')[0];
						item.address = item.address.split('/')[0];
					})
					this.pageObj.page = Number(res.page);
					this.pageObj.pagecount = res.pagecount;
					if (Number(res.page) == res.pagecount) {
						this.noMore = true;
					}
					this.selectList = nowData.concat(r_data);
					if (isMore) {
						this.isLoading = false;
					}
				})
			},
			onPageScroll: function(e) {
				var that = this;
				const {
					scrollTop //滚动条距离页面顶部的像素
				} = e;
				//防止重复触发
				if (this.isLoading || this.noMore) {
					return;
				}
				const query = uni.createSelectorQuery().in(this);
				query.select('#listArea').boundingClientRect(data => {
					let {
						height //listArea节点的高度
					} = data;
					//如果设置的事件触发距离 大于等于 (节点的高度-屏幕高度-滚动条到顶部的距离)
					if (this.bottomDistinct >= height - this.screenHeight - scrollTop) {
						//阻止时间重复触发
						this.isLoading = true;
						this.getSh(1);
					}
				}).exec();
			}
		},
		onLoad(option) {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			
			
			this.id = option.id;
			this.getSh(0);
		}
	}
</script>

<style lang="scss">
	page,.container{
		background-color: $yzkk-body-gray-color;
	}
	.select-item {
		height: 407rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		position: relative;
		margin-bottom: 23rpx;
		padding: 30rpx;
		image.cover {
			width: 100%;
			height: 351rpx;
		}


		.bottom {
			position: absolute;
			width: 100%;
			padding: 20rpx;
			bottom: 0;
			left: 0;
			// padding: 20rpx;
			padding: 55rpx 64rpx;
			box-sizing: border-box;
			color: #FFFFFF;
			// background-color: rgba(0,0,0,.4);
			.title {
				font-size: 32rpx;
				font-weight: 800;
				margin-bottom: 14rpx;
			}
			
			.label{
				font-size: 23rpx;
			}

			image {
				width: 81rpx;
				height: 81rpx;
				margin-right: 24rpx;
				border-radius: 50%;
			}
			
		}
		
		.request-btn{
			    position: absolute;
			    top: -74px;
			    right: 60rpx;
				z-index: 99;
			button{
				color: #FFFFFF;
				height:55rpx;
				line-height: 55rpx;
				background-color: $yzkk-theme-color;
				font-size: 26rpx;
				border-radius:30rpx;
			}
		}

	}
</style>
