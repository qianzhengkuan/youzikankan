<template name="uploadImg">

	<view class="img-list flex-box flex-wrapLine bd-bottom" style="padding-bottom: 60rpx;">
		<block v-for="(image,index) in imageList" :key="index">
			<view class="imgItem flex-box flex-xy-center">
				<image src="../static/images/icon/deleteUpload.png" class="delete" @click="deleteImage(index)" mode=""></image>
				<image mode="aspectFill" :src="image" :data-src="image" @tap="previewImage"></image>
			</view>
		</block>
		<view v-if="showChooseImage" class="uploadItem flex-box flex-xy-center" @click="chooseImg">
			<image src="../static/images/icon/zengjia01.png" mode=""></image>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'uploadImg',
		props: {
			count: {
				value: 0,
				type: Number
			},
			list:Array
		},
		data() {
			return {
				imageList: [],
				showChooseImage:true,//是否显示点击上传图片
			}
		},
		created() {
			uni.getStorage({
				key:"imgs",
				success:(res)=>{
				console.log(res)
				if (res.data) {
				let result = JSON.parse(res.data)
				console.log(result)
				this.imageList = result
				console.log(this.imageList)
				if(this.imageList.length>2){
					this.showChooseImage = false
				}
			  }
			}
		})
		uni.removeStorage({
			key:"imgs"
		})
	},

		// created() {
		// 	this.imageList = this.list
		// 	console.log(this.imageList)
		// },
		// created: function(e) {
		// 	this.imageList = this.list
		// },
		
		methods: {
			deleteImage(i) {
				console.log(i);
				console.log(this.imageList);
				console.log(this.imageList.splice(i, 1));
			},
			previewImage(e) {
				this.$commonJs.previewImage(e, this.imageList)
			},
			chooseImg() {
				var len = this.count - this.imageList.length;
				if (len >= 1) {
					// this.$commonJs.chooseImage(len).then(res=>{
					// 	console.log(res);
					// })
					this.$commonJs.chooseImage(len).then(res => {
						res.forEach((item) => {
							this.$commonJs.urlTobase64(item).then(r => {
								// console.log(r);
								this.imageList.push(r);
								console.log(this.imageList);
								
								if(this.imageList.length>2){
									this.showChooseImage = false
								}
								uni.setStorage({
									key:'imgs',
									data:JSON.stringify(this.imageList)
								})
							})
						})
					})
				}
			},
			returnImageList() {
				return this.imageList
			}
		}
	}
</script>

<style lang="scss">
	.img-list {
		padding: 0 30rpx;
		box-sizing: border-box;

		.uploadItem,
		.imgItem {
			width: 162rpx;
			height: 162rpx;
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
</style>
