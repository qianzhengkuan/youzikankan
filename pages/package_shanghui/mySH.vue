<template>
	<!-- 我的商会 -->
	<view class="container">
		<!-- <view class="status waitFixed"></view>
		<view class="mySh-top flex-box flex-y-center" v-show="isFixed">
			<view class="backImg" @click="navBack()">
				<image  src="../../static/images/icon/backIcon.png" mode="aspectFill"></image>
			</view>
			<view class="flex-1 title"><text>我的商会</text></view>
			<text class="add-text" @click="navTo('shanghuiJoin')">加入商会</text>
		</view> -->

		<!-- <view class=""></view> -->
		<view class="shanghui-list" v-if="myCreateSh">
			<view class="sh-title">
				<text>我创建的商会</text>
			</view>
			<view class="shanghui-item bd-bottom flex-box flex-column" @click="navTo('shanghuiInfo?id='+myCreateSh.id+'&isMySh=1'+(myCreateSh.status ===-1 ? '&isFail=1':''))">
				<!-- <image class="cover" :src="item.cover" mode="aspectFill"></image> -->
				<image class="cover" @error="showErrorImage(2)" :src="myCreateSh.cover"  mode="aspectFill"></image>
				<view class="flex-box flex-y-center bottom">
					<image  @error="showErrorImage(3)" :src="myCreateSh.img" mode="aspectFill"></image>
					<view class="flex-1 flex-box flex-column">
						<view class="title">{{myCreateSh.name}}</view>
						<view class="label text-over">成员{{myCreateSh.user_number}}人/建会{{myCreateSh.create_time}}</view>
						<view class="text-over label">{{myCreateSh.address}}</view>
					</view>
					<view class="request-btn">
						<view class="state-icon" v-bind:class="{'noBegin':myCreateSh.status==0,'beging':myCreateSh.status==2,'over':myCreateSh.status==-1}">{{myCreateSh.status ==-1 ? '审核失败' : myCreateSh.status ==1 ? '' : '审核中' }}</view>
					</view>
				</view>
			</view> 
		</view>
		
		
		<view class="shanghui-list" id="listArea" v-if="shanghuiList.length">
			<view class="sh-title">
				<text>我加入的商会</text>
			</view>
			<view class="shanghui-item bd-bottom flex-box flex-column"  v-for="(item,index) in shanghuiList" :key="index" @click="navTo('shanghuiInfo?id='+item.id+'&isMySh=1'+(item.status ===-1 ? '&isFail=1':''))">
				<!-- <image class="cover" :src="item.cover" mode="aspectFill"></image> -->
				<image class="cover" @error="showErrorImage(0,index)" :src="item.cover"  mode="aspectFill"></image>
				<view class="flex-box flex-y-center bottom">
					<image  @error="showErrorImage(1,index)" :src="item.img" mode="aspectFill"></image>
					<view class="flex-1 flex-box flex-column">
						<view class="title">{{item.name}}</view>
						<view class="label text-over">成员{{item.user_number}}人/建会{{item.create_time}}年</view>
						<view class="text-over label">{{item.address}}</view>
					</view>
					<view class="request-btn">
						<view class="state-icon" v-bind:class="{'noBegin':item.status==0,'beging':item.status==2,'over':item.status==-1}">{{item.status ==-1 ? '审核失败' : item.status ==1 ? '' : '审核中' }}</view>
					</view>
				</view>
			</view> 
		</view>
		
		<block v-if="!shanghuiList.length">
			<noData v-if="!myCreateSh" ></noData>
		</block>
		<block v-else>
			 <noData v-if="!shanghuiList.length" ></noData>
		</block>
	   
		
		<noMore v-if="noMore && shanghuiList.length"></noMore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFixed:false,
				screenHeight: 0, //屏幕高度
				isLoading: false, //防止频繁触发
				bottomDistinct: 0, //距离底部多少像素时触发
				pageObj: {
					page: 0,
					pagecount: 0
				},
				noMore: false,
				id: '',
				myCreateSh:'',
				shanghuiList: []
			}
		},
		methods: {
			showErrorImage(i,index){
				if(i==2){
					this.myCreateSh.cover = this.$errorImage
				}else if(i==3){
					this.myCreateSh.img = this.$errorImage
				}else if(i==1){
					this.shanghuiList[index].img = this.$errorImage
				}else{
					 this.shanghuiList[index].cover = this.$errorImage;  
				}
			},
			navBack(){
				this.$commonJs.navBack();
			},
			navTo(url, i) {
				uni.navigateTo({
					url: url
				})
			},
			// 我的商会
			getShanghui(isMore) {
				var that = this;
				this.$apiJs.getMyChamberList({
					page: 1
				}).then(res => {
					var nowData = this.shanghuiList;
					var r_data = res.backlist;
					r_data.map((item) => {
						if(item.type==1){
							this.myCreateSh =item;
						}
						if(item.image){
							item.cover=item.image[0].url
						}else{
							item.cover='no'
						}
						item.create_time = item.create_time.split('-')[0];
						// item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					});
					this.pageObj.page = Number(res.page);
					this.pageObj.pagecount = res.pagecount;
					if (Number(res.page) == res.pagecount) {
						this.noMore = true;
					}
					// this.myCreateSh = r_data.filter(item => item.type==1)
					this.shanghuiList = r_data.filter(item => item.type!=1)
					console.log(this.myCreateSh);
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
						this.getShanghui(1);
					}
				}).exec();
			}
		},
		onLoad(option) {
			this.screenHeight = this.$YZKK.screenHeight;
			this.bottomDistinct = this.$YZKK.bottomDistinct;
			this.id = option.id;
			this.getShanghui(0);
		},
		onShow() {
			this.isFixed=true
		},
		onHide() {
			this.isFixed=false
		}
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
	}
	.status{
		background-color: #FFFFFF;
	}
	
	.sh-title{
		margin-top: 30rpx;
		font-size: 30rpx;
		font-weight: 800;
		padding: 30rpx;
		box-sizing: border-box;
		text-align: center;
		position: relative;
		color: #ADADAD;
		&::before{
			content: "";
			position: absolute;
			left: 64%;
			top: 50%;
			width: 20%;
			height: 1rpx;
			background-color: #CCCCCC;
			transform:translateY(-50%);
		}
		&::after{
			content: "";
			position: absolute;
			right: 64%;
			top: 50%;
			width: 20%;
			height: 1rpx;
			background-color: #CCCCCC;
			transform: translateY(-50%);
		}
	}

	.mySh-top {
		position: fixed;
		width: 100%;
		top: 0;
		// #ifdef APP-PLUS || MP-WEIXIN
		top: var(--status-bar-height);
		// #endif
		left: 0;
		height: 88rpx;
		background-color: #FFFFFF;
		z-index: 999;
		padding: 14rpx 6rpx;
		box-sizing: border-box;

		.backImg {
				width: 150rpx;
				margin-left: 15rpx;
			image {
				width: 40rpx;
				height: 40rpx;
			}
		}


		.title {
			font-size: 32rpx;
			font-weight: 700;
			text-align: center;
		}

		.add-text {
			width: 150rpx;
			font-size: 26rpx;
			color: $yzkk-theme-color;
			text-align: right;
			padding-right: 30rpx;
			box-sizing: border-box;
		}
	}
	
	.shanghui-list{
		// padding-top: 88rpx;
		// #ifdef APP-PLUS || MP-WEIXIN
		// padding-top: 136rpx;
		// #endif
		.shanghui-item {
			// height: 540rpx;
			width: 100%;
			box-sizing: border-box;
			padding: 30rpx;
			background-color: #fff;
			margin-bottom: 23rpx;
		
			.state-icon {
				font-size: 22rpx;
			}
		
			.state-icon.noBegin {
				color: #989898;
			}
		
			.state-icon.beging {
				color: #61C66A;
			}
		
			// 通过审核
			.state-icon.over {
				color: #989898;
			}
		
			image.cover {
				width: 690rpx;
				height: 366rpx;
			}
		
		
			.bottom {
				margin-top: 30rpx;
				.title {
					font-size: 32rpx;
					font-weight: 800;
					margin-bottom: 14rpx;
				}
		
				.label {
					font-size: 23rpx;
					margin-bottom: 14rpx;
				}
		
				image {
					width: 94rpx;
					height: 94rpx;
					margin-right: 24rpx;
					border-radius: 50%;
				}
			}
		}
	}

	.noData {
		position: fixed;
		left: 50%;
		top: 50%;
		width: 100%;
		height: 400rpx;
		transform: translateX(-50%) translateY(-50%);
		text-align: center;

		image {
			width: 200rpx;
			height: 200rpx;
			display: block;
			margin: 0 auto;
		}

		text {
			font-size: 30rpx;
			color: #ADADAD;
		}
	}
</style>
