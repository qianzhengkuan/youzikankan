<template>
	<!-- 评选活动 -->
	<view class="container">

		<view class="activity-item bd-bottom flex-box flex-column">
			<image class="cover" @error="showErrorImage(0)" :src="activityInfo.image" mode="aspectFill"></image>
			
			<view class="title text-over text-over-2">{{activityInfo.title}}</view>
			<view class="bottom flex-box flex-y-center">
				<image src="../../static/images/icon/shijian.png" mode=""></image>
				<text>
					{{activityInfo.start_time}}
				</text>
				<text>至</text>
				<text>
					{{activityInfo.end_time}}
				</text>
			</view>
			<view class="bottom flex-box flex-y-center">
				<image src="../../static/images/icon/wode-info.png" mode=""></image>
				<text>
					参与人数：{{activityInfo.user_number}}人
				</text>
			</view>
			<view class="bottom flex-box flex-y-center address-icon">
				<image src="../../static/images/icon/dignwei-02.png" mode=""></image>
				<text>
					{{activityInfo.address}}
				</text>
			</view>
			<!-- 活动状态 -->
			<!-- <view class="state-icon" v-bind:class="{'noBegin':activityInfo.state===1,'beging':activityInfo.state===2,'over':activityInfo.state===0}">{{activityInfo.state ===1 ? '未开始' : activityInfo.state ===2 ? '进行中' : '已结束'}}</view> -->
		</view>


		<view class="tongxiang jiantouRight flex-box flex-y-center lineJianTou" hover-class="yzkk-href-hover" @click="navTo('/pages/package_shanghui/shanghuiInfo',activityInfo.chamber)">
			<image :src="activityInfo.chamber.img" mode="aspectFill" @error="showErrorImage(1)"></image>
			<div class="flex-1 flex-box flex-column">
				<view class="name">{{activityInfo.chamber.name}}</view>
				<text class="gray-text">建会{{activityInfo.chamber.create_time}}</text>
			</div>
		</view>

		<view class="activity-content">
			<div class="flex-box flex-y-center">
				<view class="point"></view>
				<text class="title">活动介绍</text>
			</div>
			<view class="con">
				<rich-text :nodes="activityInfo.content"></rich-text>
			</view>
		</view>

		<!-- 底部 -->
		<view class="bottom-opt fixed-bottom flex-y-center" v-if="bottomShow">
			<image  @click="soucang"  :src="shoucangFlag ? '../../static/images/icon/shoucangTrue.png' : '../../static/images/icon/shoucang-01.png'"
			 mode=""></image>
			<image src="../../static/images/icon/dianhua.png" @click="call(activityInfo.phone)" mode=""></image>
			<button v-if="!isMyActivity"  :disabled="thisActivity==1||activityInfo.type!=0" class="yzkk-submitBtn join-btn wid-475" hover-class="yzkk-btn-hover" @click="navTo('/pages/package_activity/activityJoin',activityInfo)">
				{{thisActivity!=1 ? '立即报名' : activityInfo.type==1 ? '进行中':'已结束'}}
			</button>
			
			<button v-if="isMyActivity" disabled="disabled" class="yzkk-submitBtn join-btn wid-475" hover-class="yzkk-btn-hover" @click="navTo('/pages/package_activity/activityJoin',activityInfo)">
				{{state==0 ? '未开始' :state==1 ? '进行中':'已结束'}}
			</button>
		</view>

	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				//0 未开始  1 进行中  2已结束
				activityInfo:{
					chamber:{
						img:''
					}
				},
				shoucangFlag:false,
				bottomShow:false,
				isMyActivity:false,
				thisActivity:''
			}
		},
		methods: {
			showErrorImage(i){
				i ? this.activityInfo.chamber.img = this.$errorImage : this.activityInfo.image = this.$errorImage
			},
			navTo(url,i){
				uni.navigateTo({
					url:url+'?id='+i.id+''
				});
			},
			// 给活动收藏
			soucang() {
				var that = this;
				this.$commonJs.isLogin().then(res => {
					this.$apiJs.setCollectionActivity({
						activity_id:  this.activityInfo.id,
					}).then(res => {
						this.getCollectionActivity()
					})
				})
			},
			// 获取活动收藏状态
			getCollectionActivity() {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getCollectionActivity({
						id: this.activityInfo.id,
					}).then(res => {
						this.shoucangFlag = Number(res);
					})
				})
			},
			// 活动报名状态
			getActivityEnrollStatus(id) {
				var that = this;
				return new Promise((resolve, reject) => {
					this.$apiJs.getActivityEnrollStatus({
						id:id,
					}).then(res => {
						this.thisActivity=res.status;
					})
				})
			},
			// 活动信息
			getShInfo(id){
				var that = this;
				this.$apiJs.getChamberActivityDetail({
					id: id
				}).then(res => {
					var r_data=res;
					// res.start_time = that.$commonJs.timeFormat.noYearFormat(res.start_time)
					var htmlString = r_data.introduce.replace(new RegExp('<img', "gm"), '<img width="100%"').replace(new RegExp('style="', "gm"), 'style="max-width:100%;').replace(new RegExp('text-indent:2em;"><img', "gm"), '"><img');;
					res.content = htmlString;
					res.chamber.create_time=res.chamber.create_time.split('-')[0];
					this.activityInfo=res;
				}).then(()=>{
					this.getCollectionActivity();
				})
			},
			// 打电话
			call(p){
				uni.makePhoneCall({
				    phoneNumber:p
				});
			}
		},
		onLoad(option) {
			var that = this;
			this.getActivityEnrollStatus(option.id);
			this.getShInfo(option.id);
			this.state=option.status;
			// 如果是从我的活动进来。报名按钮去掉
			if(this.$commonJs.getBeforePage().route=="/pages/package_user/myActivity"){
				this.isMyActivity=true;
			}
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
	@import 'activity';

	page {
		background-color: $yzkk-body-gray-color;
	}

	.tongxiang {
		height: 130rpx;
		padding: 19rpx 30rpx;
		margin: 30rpx 0;
		background-color: #fff;
		image {
			width: 92rpx;
			height: 92rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		.name {
			font-size: 32rpx;
			font-weight: 800;
		}
		.gray-text {
			font-size: 22rpx;
			color: #999999;
		}
	}

	.activity-content {
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;

		.point {
			background-color: #E56361;
			width: 15rpx;
			height: 15rpx;
			transform: rotate(45deg);
			margin-right: 25rpx;
		}

		.title {
			font-size: 32rpx;
			color: #000000;
		}

		.con {
			padding-top: 30rpx;
		}

		margin-bottom: 98rpx;
	}

	.bottom-opt {
		height: 98rpx;
		image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 56rpx;
		}
		.join-btn{
			margin-left: 28rpx;
		}
		
	}
</style>
