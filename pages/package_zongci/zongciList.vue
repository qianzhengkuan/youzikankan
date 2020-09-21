<template>
	<view class="container">
		<!-- 古庙宇 -->
		<view class="zc-list" id="listArea">

			<view class="zc-item bd-bottom" v-for="(item,index) in zcList" :key="index" hover-class="yzkk-href-hover" @click="navTo('zongciInfo?id='+item.id+'')">
				<view class="img-con">
					<image class="cover" @error="showErrorImage(index)" :src="item.cover" mode="aspectFill"></image>
					<view class="zc-info flex-box flex-y-center">
						<view class="flex-1 name">{{item.name}}</view>
						<image v-for="index of item.star" src="../../static/images/icon/stars.png" class="stars" mode=""></image>
						<text class="score">{{item.score}}分</text>
					</view>
				</view>
				<!-- <view class="title text-over text-over-2">
					<rich-text :nodes="item.introduce"></rich-text>
					{{item.introduce}}
				</view> -->
			</view>
			
			<noMore v-if="noMore"></noMore>
		</view>
	</view>
</template>


<script>
	export default {
		components:{
		},
		data() {
			return {
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct:0, //距离底部多少像素时触发
				pageObj: {
					page: 1,
					pagecount:1
				},
				noMore:false,
				zcList: []
			}
		},
		onLoad: function(e) {
			this.screenHeight=this.$YZKK.screenHeight;
			this.bottomDistinct=this.$YZKK.bottomDistinct;
			this.getZongCiList();
		},
		methods: {
			showErrorImage(i){
				  this.zcList[i].cover = this.$errorImage;  
			},
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			getZongCiList(isMore) {
				var that = this;
				this.$apiJs.zongciList({
					page: this.pageObj.page
				}).then(res => {
					var nowData=this.zcList;
					var r_data = res.backlist;
					r_data.map((item) => {
						if(item.img){
							item.cover = item.img[0].url;
						}else{
							item.cover =  'no';
						}
						item.text = item.name;
					})
					this.pageObj.page=Number(res.page)+1;
					this.pageObj.pagecount=res.pagecount;
					this.zcList = nowData.concat(r_data);
					
				}).then(()=>{
					if(isMore){
						this.isLoading=false;
					}
				})
			},
			onPageScroll: function(e) {
				var that=this;
				const {
					scrollTop //滚动条距离页面顶部的像素
				} = e;
				//防止重复触发
				if (this.isLoading) {
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
						//模拟异步加载数据
						if(this.pageObj.page<this.pageObj.pagecount){
							this.getZongCiList(1);
						}else{
							this.noMore=true;
						}
						
					}
				}).exec();
			}
		}
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}

	.zc-list {
		width: 100%;

		.zc-item {
			// height: 505rpx;
			padding: 30rpx;
			background-color: #fff;
			// margin-bottom: 22rpx;
			box-sizing: border-box;

			.img-con {
				width: 100%;
				height: 351rpx;
				position: relative;

				image.cover {
					width: 100%;
					height: 351rpx;
					position: absolute;
					top: 0;
					left: 0;
				}

				.zc-info {
					    position: absolute;
					    bottom: 0;
					    left: 0;
					    width: 100%;
					    padding: 20rpx;
					    box-sizing: border-box;
					    background-color: rgba(0,0,0,0.4);

					.name {
						font-size: 35rpx;
						color: #FFFFFF;
						font-weight: 800;
					}

					image.stars {
						width: 32rpx;
						height: 32rpx;
						margin-right: 8rpx;
					}
				}

				.score {
					margin-left: 10rpx;
					font-size: 27rpx;
					color: #FFFFFF;
				}
			}

			.title {
				font-size: 29rpx;
				font-weight: 800;
				margin-top: 22rpx;
			}


		}
	}
</style>
