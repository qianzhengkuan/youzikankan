<template>
	<!-- 图文发布 -->
	<view class="container">
		<view class="status bg-white"></view>
		<view class="close-top" style="display: flex;justify-content:flex-start;align-items: center;">
			<image src="../../static/images/icon/fanhui.png" mode="" style="width: 50rpx;height: 50rpx;" @click="navBack()"></image>
			<text style="display: flex;flex: 1;justify-content: center;font-size: 36rpx;">发布文章</text>
		</view>
		<view class="new-add-wrap">
			<!-- 标题 -->
			<view class="title bd-bottom"><input v-model="formData.title" type="text" placeholder="文章..." /></view>

			<!-- 内容 -->
			<view class="content" style="margin-bottom: 50rpx;"><textarea v-model="formData.content" placeholder="说点什么..."
				 maxlength="10000" /></view>
			<!-- <yzkk-editor></yzkk-editor>
			
			
			<!-- 图片上传 -->
			<uploadImg :count="3" ref="uploadImg" ></uploadImg>

			<!-- 选择分类 -->
			<picker mode="selector" :range="range" @change="choosePostClass">
				<view class="joinTalk flex-box flex-y-center jiantouRight lineJianTou bd-bottom" hover-class="yzkk-href-hover">
					<image src="../../static/images/icon/huati.png" mode=""></image>
					<text class="label">{{ post_class_name ? '所属分类：' + post_class_name : '请选择文章分类' }}</text>
				</view>
			</picker>
			

			<!-- 选择商会 -->
			<!-- <picker mode="selector" :range="shanghui" @change="chooseShangHui">
				<view  class="joinTalk flex-box flex-y-center jiantouRight lineJianTou bd-bottom text-over" hover-class="yzkk-href-hover">
				<image src="../../static/images/icon/huati.png" mode=""></image>
				<text class="label text-over">{{post_shanghui_name ? "所属商会："+post_shanghui_name : "请选择商会"}}</text>
			   </view>					
			</picker> -->

			<!-- <view class="joinTalk flex-box flex-y-center jiantouRight lineJianTou bd-bottom" hover-class="yzkk-href-hover">
				<image src="../../static/images/icon/huati.png" mode=""></image>
				<text class="label">参与话题</text>
				<view class="flex-1 flex-right-content flex-box txt">
					选择合适的话题会有更多赞~
				</view>
			</view> -->
			<!-- 地点 -->
		</view>
		<!-- 底部提交等操作 -->
		<view class="new-bottom flex-bottom-content flex-1 flex-box flex-x-center">
			<view class="flex-box">
				<!-- <view class="flex-box n-b-item flex-box flex-column flex-xy-center">
					<image src="../../static/images/icon/xiazhai.png" mode=""></image>
					<text>存草稿</text>
				</view> -->
				<!-- <button class="yzkk-submitBtn addNewBtn" :disabled="!formData.title||!formData.content||!post_class_name||!post_shanghui_name" hover-class="yzkk-btn-hover" @click="submitForm">发布文章</button> -->
				<!-- <button class="yzkk-submitBtn wid-500 addNewBtn" :disabled="!formData.title||!formData.content" hover-class="yzkk-btn-hover">发布文章</button> -->
				<button class="yzkk-submitBtn addNewBtn" :disabled="!formData.title || !formData.content || !post_class_name " hover-class="yzkk-btn-hover" @click="submitForm">
				<!-- 	<button class="yzkk-submitBtn addNewBtn"  hover-class="yzkk-btn-hover" @click="submitForm"> -->
					发布文章
				</button>
			</view>
		</view>
	</view>
</template>

<script>
// import yzkkEditor from '@/template/editor/editor.vue'
import uploadImg from '@/template/uploadImg.vue';
import apiJs from '@/common/api.js';
import commonJs from '@/common/common.js';

export default {
	components: {
		// yzkkEditor,
		uploadImg
	},
	data() {
		return {
			// 是否已经弹出提示框
			showBack:false,
			current: '',
			readOnly: false,
			formats: {},
			formData: {
				title: '',
				content: '',
				imageList: []
			},
			post_class_list: [], //分类数据
			post_class_index: -1,
			pageObj: {
				page: 0,
				pagecount: 0
			},
			ShangHuiList: [], //商会数据
			post_shanghui_index: -1,
			category_id: -1,
		};
	},
	mounted() {
		this.getTypes();
		this.getShangHuiList();
		// console.log(this.post_class_list);
	},
	onLoad() {
		uni.getStorage({
				key:"add-input",
				success:(res)=>{
					console.log(res)
				if (res.data) {
					let result = JSON.parse(res.data)
					console.log(result)
					this.formData.title = result.title
					this.formData.content = result.content
					this.imageList = result.imageList
					console.log(result.imageList)
					console.log(this.imageList)
					}
				}
			})
	    },
	
	
	
	computed: {
		
		// 分类可选项
		range() {
			return this.post_class_list.map(item => {
				return item.nickname;
			});
		},
		post_class_name() {
			if (this.post_class_index !== -1) {
				return this.post_class_list[this.post_class_index].nickname;
			}
		},

		// 商会可选项
		shanghui() {
			return this.ShangHuiList.map(item => {
				return item.name;
			});
		},
		post_shanghui_name() {
			if (this.post_shanghui_index !== -1) {
				return this.ShangHuiList[this.post_shanghui_index].name;
			}
		}
	},
	methods: {
		// 监听返回
			navBack() {
				var that = this
				if (( that.formData.title != '' || that.formData.content != '' || that.formData.imageList.length > 0 ) && !that.showBack ) {
					uni.showModal({
							content: '是否要保存为草稿？',
							showCancel: true,
							cancelText: '不保存',
							confirmText: '保存',
							success: res => {
								// 点击确认
								if (res.confirm) {
									this.store()
								} else { // 点击取消，清除缓存
									uni.removeStorage({
										key:"add-input"
									})
									uni.removeStorage({
										key:"imgs"
									})
								}
							   // 手动执行返回
							   uni.navigateBack({ delta: 1 });
							},
						});
						that.showBack = true
						return true
			       }else{
					 this.goBack()
				 }
			},
		// 返回上一步
	    goBack(){
		   uni.navigateBack({ delta: 1 });
		},
		// 保存操作
			store(){
				var that = this
			// 保存为本地存储
			let obj = {
				title: that.formData.title,
				content: that.formData.content,
				imageList:that.$refs.uploadImg.returnImageList()
				}
				uni.setStorage({
				key:'add-input',
				data:JSON.stringify(obj)
				})
			}, 
       
		// 获取分类数据
		getTypes() {
			this.$apiJs.getNewsCategory().then(res => {
				this.post_class_list = res;
			});
		},
		// 选择分类
		choosePostClass(e) {
			this.post_class_list.forEach((item, index) => {
				if (index == e.detail.value) {
					this.category_id = item.id;
				}
			});
			this.post_class_index = e.detail.value;
		},
		// 获取商会列表
		getShangHuiList() {
			this.$apiJs
				.getChamberList({
					page: this.pageObj.page + 1
				})
				.then(res => {
					this.ShangHuiList = res.backlist;
					// console.log(this.ShangHuiList);
				});
		},
		//选择商会
		chooseShangHui(e) {
			this.post_shanghui_index = e.detail.value;
		},
	 
		// 发布文章
		submitForm() {
			console.log('ddddd');
			var that = this;
			var imgurl = that.$refs.uploadImg.returnImageList();
			var equipment = 1;
			console.log(that.$refs.uploadImg.returnImageList())
			console.log(imgurl)
			
			//上传图片
			if(imgurl == ''){
				console.log('123')
					// 发布文章接口
					that.$apiJs
						.setNewsPublish({
							title: that.formData.title,
							category_id: this.category_id,
							type:1,
							images:'',
							equipment: equipment,
							content: that.formData.content
						})
						.then(res => {
							console.log(res);
						});
			} else{
				that.$apiJs
					.setNewsPublishImage({
						image1:imgurl[0],
						image2:imgurl[1],
						image3:imgurl[2]
					})
					.then(res => {
						console.log(res.images);
						that.formData.imageList = res.images;
						console.log(that.formData.imageList)
						that.$apiJs
							.setNewsPublish({
								title: that.formData.title,
								category_id: this.category_id,
								type:2,
								equipment: equipment,
								images:that.formData.imageList,
								content: that.formData.content
							})
							.then(res => {
								console.log(res);
								that.showBack = true
								 uni.removeStorage({
									key:"add-input"
								 })
								 uni.removeStorage({
								 	key:"imgs"
								 })
							});
					  });
			     }
			
				// setTimeout(()=>{
				// 	// 发布文章接口
				// 	that.$apiJs
				// 		.setNewsPublish({
				// 			title: that.formData.title,
				// 			category_id: this.category_id,
				// 			type:2,
				// 			images:that.formData.imageList,
				// 			content: that.formData.content
				// 		})
				// 		.then(res => {
				// 			console.log(res);
				// 		});
				// },2000)
				
			that.$commonJs.uniMsg('发布成功', 'success');
			setTimeout(()=> {
				 uni.navigateBack({ delta: 1 });
			}, 1000);
		},
		// navBack() {
		// 	console.log('ee')
		// 	this.$commonJs.navBack();
		// }
	}
};
</script>

<style lang="scss">
page,
.container {
	display: flex;
	height: 100vh;
	flex-direction: column;
}

.close-top {
	padding: 36rpx 0 0 0rpx;
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
	.n-b-item {
		image {
			width: 56rpx;
			height: 56rpx;
			border-radius: 50%;
			background-color: #f6f6f6;
			padding: 15rpx;
			box-sizing: border-box;
			margin-bottom: 8rpx;
		}
		text {
			font-size: 20rpx;
			color: #a2a2a2;
		}
		margin-right: 20rpx;
	}

	.addNewBtn {
		border-radius: 40rpx;
		margin: 30rpx 0 30rpx 10rpx;
	}
}
.chooseR {
	.form-radio {
		transform: scale(0.7);
	}
}
</style>
