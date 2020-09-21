<template>
	<view class="container">
		<!-- 第一块banner区域 -->
		<view class="top-banner-con bd-bottom">
			<view class="swiper-margin-wrap">
				<swiper :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="swiper-item" v-for="(item,index) in shData.images" :key="index">
						<view>
							<image @error="showErrorImage(0,index)" :src="item.url" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			
			<!-- 信息 -->
			<view class="tongxiang  flex-box flex-y-center">
				<image  @error="showErrorImage(1)" :src="shData.img" mode="aspectFill"></image>
				<div class="flex-1 flex-box flex-column right-con">
					<view class="name">{{shData.name}}</view>
					<text class="gray-text">{{peopleList.length}}位成员/{{shData.create_time}}建会</text>
					<text class="gray-text address">{{shData.address}}</text>
				</div>
			</view>
		</view>

		<!-- 商会成员 -->
		<view class="cover-wrap p-wrap">
			<panel-top title="商会成员" :url="peopleList.length ? 'peopleList?id='+shData.id+'' : ''"></panel-top>
			<view class="flex-box people-list">
				<view class="p-item" v-if="index<4" v-for="(item,index) in peopleList" :key="index">
					<image  @error="showErrorImage(2,index)"  :src="item.image" mode="aspectFill"></image>
					<view class="name text-over">{{item.username}}</view>
					<view class="gray">{{item.grade}}</view>
				</view>
				<noMore v-if="!peopleList.length"></noMore>
			</view>
		</view>

		<!-- 商会资讯 -->
		<view class="cover-wrap" v-bind:class="{'noMySh':!isMySh}">
			<panel-top title="商会资讯" url="newsList"></panel-top>
			<view v-for="(item,index) in newsData" :key="index">
				<text-new v-if="item.type==1" :newsData="item"></text-new>
				<new-list v-if="item.type==2" :newsData="item" :textOver2="true" :isReverse="true"></new-list>
				<!-- 大封面 -->
				<big-cover  v-if="item.type==3"  :coverData="item"></big-cover>
				<!-- 三张图片 -->
				<three-new  v-if="item.type==4"  :threeData="item"></three-new>
			</view>
			<noMore v-if="!newsData.length"></noMore>
		</view>
		
		<!-- 底部 -->
		<view class="bottom-opt flex-y-center fixed-bottom" v-if="bottomShow && !isMySh">
			<!-- <image src="../../static/images/icon/shoucang-01.png" mode=""></image> -->
			<!-- <image src="../../static/images/icon/dianhua.png" mode=""></image> -->
			<view v-if="!isSelect && !isMySh" class="yzkk-submitBtn join-btn" hover-class="yzkk-btn-hover" @click="navTo('shanghuiJoin?id='+shData.id+'&name='+shData.name+'')">
				立即加入
			</view>
			
			<view v-if="isSelect" class="yzkk-submitBtn join-btn" hover-class="yzkk-btn-hover" @click="backToForm">
				申请加入
			</view>
		</view>
	</view>
</template>

<script>
	import panelTop from "@/template/panel-top.vue"
	import textNew from "@/template/textNew.vue"
	import newList from "@/template/newsList.vue"
	import bigCover from "@/template/bigCover.vue"
	import threeNew from "@/template/three.vue"
	import hasConNew from "@/template/hasConNew.vue"
	export default {
		components: {
			panelTop,
			textNew,
			newList,
			bigCover,
			threeNew,
			hasConNew,
		},
		data() {
			return {
				isMySh:false,
				isSelect:false,
				newsData: [],
				shData:'',
				peopleList:[],
				bottomShow:false
			}
		},
		onLoad(option) {
			this.id=option.id;
			if(option.type=="select"){
				this.isSelect=true;
			}
			// isMySh  0：不显示
			if(option.isMySh && !option.isFail){
				this.isMySh=true;
			}
			this.getShInfo();
			this.getShangHuiNewsList();
		},
		methods: {
			showErrorImage(i,index){
				if(i==0){
				  this.shData.images[index].url = this.$errorImage;  
				}else if(i==1){
				  this.shData.img = this.$errorImage;  
				}else{
					this.peopleList[index].image = this.$errorImage;
				}
			},
			backToForm(t){
				this.$commonJs.getBeforePage(1).chooseShId=this.shData.id;
				this.$commonJs.getBeforePage(1).chooseShName=this.shData.name;
				this.$commonJs.getBeforePage(1).chooseShImage={
					backgroundImage:"url("+this.shData.images[0].url+")"
				};
				uni.navigateBack({
					delta:2
				})
			},
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			// 商会信息
			getShInfo(){
				var that = this;
				this.$apiJs.getChamberDetail({
					id: this.id 
				}).then(res => {
					if(res){
						res.create_time=res.create_time.split('-')[0];
						this.peopleList=res.chamber_user;
						this.shData=res;
					}else{
						console.log('商会信息加载--'+null)
					}
					
				})
			},
			// 商会资讯列表
			getShangHuiNewsList(){
				var that = this;
				this.$apiJs.getChamberNewsList({
					page: 1 
				}).then(res => {
					var r_data = res.backlist;
					r_data.map((item) => {
						if (item.img.length && item.img) {
							item.cover = item.img[0].url
						} else {
							item.img = 'no'
							item.cover = 'no'
						}
						item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
					})
					this.newsData = r_data;
					console.log(this.newsData);
				})
			},
		},
		onShow(){
			this.bottomShow=true;
		},
		onHide() {
			this.bottomShow=false;
		}
		
	}
</script>

<style lang="scss">
	page,
	.container {
		background-color: $yzkk-body-gray-color;
		// height:  calc(100vh - var(--window-header));
	}

	.top-banner-con {
		background-color: #fff;
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;

		.swiper-margin-wrap {
			width: 100%;
			margin: 0 auto;

			uni-swiper {
				height: 351rpx;
			}

			image {
				width: 100%;
			}

		}

		margin-bottom: 20rpx;
	}
	
	
	.tongxiang {
		height: 150rpx;
		margin: 30rpx 0 0;
		background-color: #fff;
		image {
			width: 94rpx;
			height: 94rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		.name {
			font-size: 32rpx;
			font-weight: 800;
		}
		.right-con{
			.gray-text {
				font-size: 22rpx;
				color: #999999;
				line-height: 1.5;
			}
			.gray-text.adddress{
				
			}
			
		}
	}
	
	
	.people-list {
		background-color: #fff;
		padding: 30rpx;
		box-sizing: border-box;

		.p-item {
			width: 25%;
			text-align: center;
			image {
				width: 128rpx;
				height: 128rpx;
				border-radius: 50%;
			}

			.name {
				font-size: 30rpx;
				font-weight: 800;
			}

			.gray {
				font-size: 24rpx;
				color: #999999;
			}
		}
	}
	
	.p-wrap{
		margin-bottom: 22rpx;
	}
	.cover-wrap.noMySh{
		margin-bottom: 120rpx;
	}
	
	.bottom-opt {
		height: 98rpx;
		image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 56rpx;
		}
		.join-btn{
		}
	}
</style>
