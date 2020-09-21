<template>
	<!-- 评论详情 -->
	<view class="pl-wrap">
		<pinglun :plList="plList" @huifu="huifu" @dianzan="dianzan" @navTo="navTo" :hasHuiFu="false"></pinglun>
		
		<pinglun-panel ref="plPanel" @submitPl="submitPl"></pinglun-panel>
		<!-- 评论底部 -->
		<view class="fixed-bottom bottom-opt flex-left-right-between flex-y-center">
			<view class="flex-box flex-y-center openPl" @click="openPl">
				<image src="../../static/images/icon/xie.png" mode=""></image>
				写评论
			</view>
		</view>
	</view>
</template>

<script>
	import pinglun from './template/pinglun.vue'
	import pinglunPanel from './template/pinglun-panel.vue'
	export default {
		components: {
			pinglun,
			pinglunPanel
		},
		data() {
			return {
				plShow: false,
				plCon: '',
				plList: [],
				info: {
					title: '福建有座宗祠，后代都是有名的人物 名的名的名的会谈',
					author: {
						headImg: '../../static/images/shuijiao.jpg',
						name: "翱翔天际",
					},
					guanzhuFlag: false,
					content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					cover: '../../static/images/shuijiao.jpg',
					time: '2020-03-24 10:00:00',
					seePeople: 8898
				},
				new_id:''
			}
		},
		methods: {
			huifu(i) {
				this.$refs.plPanel.showPl();
			},
			submitPl(c) {
				var that = this;
				console.log(this.new_id);
				this.$apiJs.replyComment({
					news_id:this.new_id,
					content:c,
					author_id:this.author_id,
					content_id:this.content_id,
					userLogin:true
				}).then(res => {
					if(res){
						this.$commonJs.uniMsg('回复成功');
						this.$refs.plPanel.closePl();
						this.getAllCommentByUser();
						this.getLoginCommentReply();
					}
				})
			},
			openPl() {
				this.$refs.plPanel.showPl();
			},
			// 给评论点赞
			dianzan(i) {
				var that = this;
				var zanid=i.id;
				this.$apiJs.setFabulousUser({
					news_id: that.new_id,
					to_user_id: i.user_id,
					comment_id: zanid,
				}).then(res => {
					// this.getFabulousUserCode()
					this.getLoginCommentReply();
				})
			},
			// 获取所有点赞
			getLoginCommentReply(){
				var that = this;
					this.$apiJs.getLoginCommentReply({
						id: that.content_id,
					}).then(res => {
						if(res!="seeOther"){
							res.map((item) => {
								item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
							})
							this.plList = res;
						}else{
							this.userLogin=false;
							this.getCommentReply();
						}
					})
			},
			getCommentReply(){
				var that = this;
					this.$apiJs.getCommentReply({
						id: that.content_id,
					}).then(res => {
						if(res){
							res.map((item) => {
								item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
							})
							this.plList = res;
						}
					})
			},
			// 得到关于这条评论的所有回复 
			getAllCommentByUser(){
				var that = this;
				this.$apiJs.getCommentReply({
					id:this.content_id,
				}).then(res => {
					var r_data=res;
					if(res.length){
						res.map((item) => {
							item.time = that.$commonJs.timeFormat.noYearFormat(item.create_time);
						})
						this.plList = res;
					}else{
						this.noPingLun=true;
					}
				})
			}
			
		},
		onLoad(option) {
			console.log(option);
			var that = this;
			this.new_id=option.new_id;
			this.author_id=option.author_id;
			this.content_id=option.content_id;
			this.getAllCommentByUser(option.new_id);
			if(uni.getStorageSync('accesstoken')){
				this.getLoginCommentReply();
			}
		},
		
		
	}
</script>

<style lang="scss">
	.pl-wrap {
		padding: 30rpx;
	}
	.bottom-opt {
		.opt {
			image {
				width: 36rpx;
				height: 36rpx;
			}
		}
		.openPl {
			width: 100%;
			background-color: #F4F4F4;
			border-radius: 32rpx;
			height: 64rpx;
			line-height: 64rpx;
			font-size: 24rpx;
	
			image {
				width: 31rpx;
				height: 36rpx;
				margin-right: 20rpx;
				margin-left: 20rpx;
			}
		}
		}
</style>
