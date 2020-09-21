<template name="shanghui">
	<view class="list-wrap">
		<view class="item flex-box flex-y-center jiantouRight lineJianTou bd-bottom" hover-class="yzkk-href-hover" @click="navTo(isSh ? 'shanghuiInfo'+((shData.status==1||shData.status==2) ? '?isMySh=1&id='+shData.id+'' : '?id='+shData.id+'')+'' : '',shData)">
			<image @error="showErrorImage" :src="isPeople ? shData.image : shData.img" mode="aspectFill"></image>
			<view class="flex-1 flex-box flex-column">
				<view class="name text-over"> {{ isPeople ? shData.username : shData.name }}</view>
				<text class="bottom-text gray-text text-over" v-if="isPeople">{{shData.grade}}</text>
				<text class="bottom-text gray-text text-over"  v-if="isSh">成员{{shData.user_number}}人/{{shData.address}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'shanghui',
		props: {
			shData: {
				value: {}
			},
			isPeople:{
				value:false,
				type:Boolean
			},
			isSh:{
				value:false,
				type:Boolean
			},
			url:{
				value:'',
				type:String
			}
		},
		created: function(e) {
		},
		methods: {
			showErrorImage(){
				console.log('s');
				  this.shData.image = this.$errorImage;  
				  this.shData.img = this.$errorImage;  
			},
			navTo(url,i) {
				uni.navigateTo({
					url:url
				})
			},
			// 商会活动
			getShActivity(){
					var that = this;
					this.$apiJs.getLoginChamberList({
						page: 1
					}).then(res => {
						var r_data = res.backlist;
						r_data.map((item) => {
							// item.start_time = that.$commonJs.timeFormat.noYearFormat(item.start_time);
							item.end_time = that.$commonJs.timeFormat.noYearFormat(item.end_time,1);
						})
						this.activityList = r_data;
					})
			}
		}
	}
</script>

<style lang="scss">
	.list-wrap{
		
		.item{
			height: 150rpx;
			padding: 34rpx;
			box-sizing: border-box;
			background-color: #FFFFFF;
			
			image{
				width: 94rpx;
				height: 94rpx;
				margin-right: 20rpx;
				border-radius: 50%;
				
			}
			.name{
				font-weight: 800;
				font-size: 32rpx;
				
			}
			
			.gray-text{
				font-size: 26rpx;
				color: #999999;
			}
			
			.bottom-text{
				width: 400rpx;
			}
			
		}
	}
</style>
