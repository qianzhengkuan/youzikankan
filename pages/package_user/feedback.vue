<template>
	<view class="container">
		<!-- 标题 -->
			<view class="new-add-wrap">
		<view class="title bd-bottom"><input v-model="formData.title" type="text" placeholder="反馈..." /></view>
		
		<!-- 内容 -->
		<view class="content bd-bottom"><textarea v-model="formData.content" placeholder="提出您宝贵的意见..." maxlength="10000" /></view>
		</view>
		<!-- 底部提交等操作 -->
		<view class="new-bottom flex-bottom-content flex-1 flex-box flex-x-center">
			<view class="flex-box">
				<button class="yzkk-submitBtn addNewBtn" :disabled="!formData.title || !formData.content " hover-class="yzkk-btn-hover" @click="submitForm">
					<!-- <button class="yzkk-submitBtn addNewBtn"  hover-class="yzkk-btn-hover" @click="submitForm"> -->
					提交反馈
				</button>
			</view>
		</view>
	</view>
</template>

<script>
 export default{
	 data(){
		 return{
			 formData: {
			 	title: '',
			 	content: ''
			 },
		 }
	 },
	 methods:{
		 // 发布文章
		 submitForm() {
		 	
		 	this.$commonJs.uniMsg('反馈成功', 'success');
		 	setTimeout(()=> {
		 		this.navBack();
		 	}, 3000);
		 },
		 navBack() {
		 	this.$commonJs.navBack();
		 }
	 }
 }
</script>

<style scoped lang="scss">
	page,
	.container {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
	
	.close-top {
		padding: 36rpx 0 0 36rpx;
		box-sizing: border-box;
		image {
			width: 29rpx;
			height: 29rpx;
		}
	}
	
	.pad-left-right-30 {
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	
	.new-add-wrap {
		padding: 30rpx 0;
		.img-list {
			@extend .pad-left-right-30;
			.uploadItem,
			.imgItem {
				width: 200rpx;
				height: 200rpx;
				border-radius: 14rpx;
				margin: 12rpx;
				border: 1px solid #f1f1f1;
			}
			.uploadItem {
				border: 1px solid #f1f1f1;
				image {
					width: 34rpx;
					height: 34rpx;
					border: 0;
				}
			}
			.imgItem {
				image {
					border: 0;
					width: 162rpx;
					height: 162rpx;
				}
				position: relative;
				.delete {
					position: absolute;
					right: -10rpx;
					top: -10rpx;
					width: 30rpx;
					height: 30rpx;
					border: 0;
					margin: 0;
					z-index: 9;
					padding: 6rpx;
					background-color: #e56361;
					border-radius: 50%;
					box-sizing: border-box;
				}
			}
		}
	
		.title {
			@extend .pad-left-right-30;
			input {
				font-size: 28rpx;
				padding: 22rpx 0;
			}
		}
		.content {
			@extend .pad-left-right-30;
			textarea {
				width: 100%;
				padding: 22rpx 0;
				font-size: 28rpx;
			}
		}
		.joinTalk,
		.address {
			@extend .pad-left-right-30;
			height: 107rpx;
			line-height: 107rpx;
			padding-right: 10rpx;
			&::after {
				right: 30rpx;
			}
			.label {
				font-size: 25.5rpx;
				color: #828282;
			}
			.txt {
				font-size: 25.5rpx;
				color: #a2a2a2;
			}
			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 6rpx;
			}
		}
	
		.address {
			image {
				width: 26rpx;
				height: 31rpx;
				margin-right: 20rpx;
			}
		}
	}
	
	.new-bottom {
	
		.addNewBtn {
			border-radius: 40rpx;
			margin: 30rpx 0 480rpx 10rpx;
		}
	}
	.chooseR {
		.form-radio {
			transform: scale(0.7);
		}
	}
</style>
