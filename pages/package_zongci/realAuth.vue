<template>
	<view class="container flex-box flex-column">
		
		
		<view class="uploadImg">
			<image :src="positive ?  positive : '../../static/images/icon/positive.png'" @click="chooseImg(0)" mode="aspectFill"></image>
		</view>
		<view class="uploadImg">
			<image :src="reverseImg  ?  reverseImg : '../../static/images/icon/reverse.png'" @click="chooseImg(1)" mode="aspectFill"></image>
		</view>
		
		<view class="title">上传营业执照</view>
		
		<view class="uploadImg">
			<image :src="yingye  ?  yingye : '../../static/images/icon/reverse.png'" @click="chooseImg(2)" mode="aspectFill"></image>
		</view>
		
		<view class="new-bottom-fs-gray">
			点击图片进行更换
		</view>
	
		
		<view class="flex-1 flex-box flex-bottom-content flex-box">
			<button class="yzkk-submitBtn" @click="submitReal" :disabled="!positive || !reverseImg || !yingye">确认保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				positive:'',
				reverseImg:'',
				yingye:''
			}
		},
		methods: {
			/**
			 * @param {Object} i 
			 * 0:正面
			 * 1：反面
			 */
			chooseImg(i){
				this.$commonJs.chooseImage(1).then(res => {
						this.$commonJs.urlTobase64(res[0]).then(r => {
							console.log(r);
							if(i==1){
								this.reverseImg=r;
							}else if(i==2){
								this.yingye=r;
							}else{
								this.positive=r;
							}
						})
				})
			},
			submitReal(){
				this.$apiJs.setTempleJoinID({
					id_front:this.positive,
					id_verso:this.reverseImg,
					license:this.yingye,
				}).then(res=>{
					console.log(res);
					this.$commonJs.getBeforePage().id_images=res.id_images;
					this.$commonJs.getBeforePage().isRealAuth=true;
					if(res){
						this.$commonJs.navBack();
					}
				})
			}
		},
		onLoad() {
	
		}
	}
</script>

<style lang="scss">
	.container{
		// height: 100vh - var(--window-header-height);
		box-sizing: border-box;
		padding: 30rpx;
	}
	
	.title{
		font-size: 36rpx;
		box-sizing: border-box;
		padding-bottom: 50rpx;
	}
	
	.uploadImg{
		box-sizing: border-box;
		padding-bottom: 30rpx;
		image{
			width: 690rpx;
			height: 343rpx;
			box-shadow: 0 0 7px #d5d5d6;
		}
	}
	
	button{
		margin: 30rpx auto;
	}

</style>
