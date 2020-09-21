<template>
	<!-- 图文发布 -->
	<view class="container">

		<!-- 		<view class="close-top" @click="navBack()">
			<image src="../../static/images/icon/cuowu.png" mode=""></image>
		</view> -->
		<view class="new-add-wrap">

			<!-- 标题 -->
			<view class="title bd-bottom">
				<input type="text" name="title" v-model="formData.title" placeholder="活动主题" />
			</view>
			<!-- 内容 -->
			<view class="content bd-bottom">
				<textarea  v-model="formData.content" placeholder="活动简介" />
				</view>
				<!-- 图片上传 -->
				<uploadImg :count="9" ref="uploadImg"></uploadImg>
			<!-- 参与话题 -->
			<!-- <view class="joinTalk flex-box flex-y-center jiantouRight lineJianTou bd-bottom" hover-class="yzkk-href-hover">
				<image src="../../static/images/icon/huati.png" mode=""></image>
				<text class="label">参与话题</text>
				<view class="flex-1 flex-right-content flex-box txt">
					选择合适的话题会有更多赞~
				</view>
			</view> -->
			<!-- 开始时间 -->
			<view class="joinTalk flex-box flex-y-center   bd-bottom timewrap" hover-class="yzkk-href-hover">
				<image src="../../static/images/icon/sjian-1.png" mode=""></image>
				<text class="label">活动时间</text>
				<view class="flex-1 flex-x-center flex-box txt">
					<picker name="startTime"  mode="multiSelector" @columnchange="startChange" :value="s_index" :range="dateArray">
						<text v-if="formData.startTime">{{dateArray[0][s_index[0]]}} {{dateArray[1][s_index[1]]}}点{{dateArray[2][s_index[2]]}}分</text>
					    <text v-if="!formData.startTime">请选择</text>
					</picker>
					<text>至</text>
					<picker name="endTime"  mode="multiSelector" @columnchange="endChange" :value="e_index" :range="dateArray">
						<text v-if="formData.endTime">{{dateArray[0][e_index[0]]}} {{dateArray[1][e_index[1]]}}点{{dateArray[2][e_index[2]]}}分</text>
					    <text v-if="!formData.endTime">请选择</text>
					</picker>
				</view>
			</view>
			<!-- 地点 -->
			<view class="address flex-box flex-y-center jiantouRight lineJianTou bd-bottom" hover-class="yzkk-href-hover" @tap="getAddress">
				<image src="../../static/images/icon/dingwei.png" mode=""></image>
				<text class="label">地点</text>
				<view class="flex-1 flex-right-content flex-box txt">
					<input type="text" class="text-over address-text" v-model="formData.address" readonly disabled="disabled"/>
					<!-- <text class="text-over address-text">{{formData.address?formData.address:'请选择活动地点'}}</text> -->
				</view>
			</view>
			<view class="joinTalk flex-box flex-y-center   bd-bottom">
				<image src="../../static/tabbar/wode.png" mode=""></image>
				<text class="label">参与人数</text>
				<view class="flex-1 flex-box txt flex-y-center flex-just-end">
					<input type="number" v-model="formData.peopleNum"/>
					<text> 人</text>
				</view>
			</view>
		</view>
		<!-- 底部提交等操作 -->
		<view class="new-bottom flex-bottom-content flex-1 flex-box flex-x-center fixed-bottom">
			<view class="flex-box">
				<!-- <view class="flex-box n-b-item flex-box flex-column flex-xy-center">
					<image src="../../static/images/icon/xiazhai.png" mode=""></image>
					<text>存草稿</text>
				</view> -->
				<button class="yzkk-submitBtn addNewBtn" hover-class="yzkk-btn-hover"　@tap="submitForm">发布活动</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uploadImg from '@/template/uploadImg.vue'
	export default {
		components:{
			uploadImg
		},
		data(){
			return{
				dateArray: [
				      [],
				      [],
				      []
				    ], //  年月日,  时,  分
				    objectDateArray: [
				      [],
				      [],
				      []
				    ],
				    s_index: [0, 0, 0],
				    e_index: [0, 0, 0],
					imageCount:9,
				formData:{
					title:'',
					content:'',
					imageList:[],
					startTime:'',
					endTime:'',
					peopleNum:50,
					location: {},
					address: ''
				}
			}
		},
		onLoad() {
			this.dateInit();
		},
		methods: {
			submitForm(){
				let Rules = [
				  {name: 'title', type: 'required', errmsg: '请输入活动主题'},
				  {name: 'startTime', type: 'required', errmsg: '请选择开始时间'},
				  {name: 'endTime', type: 'required', errmsg: '请选择结束时间'},
				]
				let valLoginRes = this.$validate.validate(this.formData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
				  return false
				}
				this.formData.imageList=this.$refs.uploadImg.returnImageList()
				this.$commonJs.uniMsg('发布成功','success')
				setTimeout(function() {
					uni.redirectTo({
						url:'activityList'
					})
				}, 1000);
			},
			 startChange: function(e) {
			    console.log(e)
				var colum=e.detail.column;
				var value=e.detail.value;
				switch (colum){
					case 0:
						console.log(value);
						this.s_index[0]=value;
						this.timeFormat(this.s_index, 0)
					break;
					case 1:
						console.log(value);
						this.s_index[1]=value;
					this.timeFormat(this.s_index, 0)
					break;
					case 2:
						console.log(value);
						this.s_index[2]=value;
						this.timeFormat(this.s_index, 0)
					break;
				}
			  },
			  endChange: function(e) {
			  				var colum=e.detail.column;
			  				var value=e.detail.value;
			  				switch (colum){
			  					case 0:
			  						console.log(value);
			  						this.e_index[0]=value;
			  						this.timeFormat(this.e_index, 1)
			  					break;
			  					case 1:
			  						console.log(value);
			  						this.e_index[1]=value;
			  					this.timeFormat(this.e_index, 1)
			  					break;
			  					case 2:
			  						console.log(value);
			  						this.e_index[2]=value;
			  						this.timeFormat(this.e_index, 1)
			  					break;
			  				}
			   },
			  getAddress: function () {
			  	var that=this;
			  	this.$commonJs.chooseLocation().then(res=>{
			  		that.formData.address=res.address;
			  	})
			  },
			
			dateInit() {
			    // 展示可选值
				var c_date_arr = [],
			   c_hour_arr = [],
			   c_minute_arr = [];
			    var date_arr = [],
			      hour_arr = [],
			      minute_arr = [];
			    // var weekArr = ['周天', '周一 ', '周二', '周三 ', '周四', '周五 ', '周六'];
			    var weekArr = ['', '', '', '', '', '', ''];
			    // 日期
			    for (var i = 0; i < 360; i++) {
			      var t = new Date();
			      var d = new Date(t);
			      d.setDate(t.getDate() + i);
			      // 展示可选值
			      c_date_arr.push((d.getMonth() + 1) + "月" + d.getDate() + "日" + weekArr[d.getDay()])
			      date_arr.push(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())
			    }
			    // 时间
			    for (var j = 0; j < 24; j++) {
			      if (j < 10) {
			        j = '0' + j;
			      }
			      c_hour_arr.push(j)
			      hour_arr.push(j)
			    }
			    for (var k = 0; k < 60; k++) {
			      if (k < 10) {
			        k = '0' + k;
			      }
			      c_minute_arr.push(k)
			      minute_arr.push(k)
			    }
				console.log(c_date_arr);
			     this.dateArray[0]= c_date_arr;
			      this.dateArray[1]= c_hour_arr;
			      this.dateArray[2]= c_minute_arr;
			      this.objectDateArray[0]= date_arr;
					this.objectDateArray[1]= hour_arr;
			      this.objectDateArray[2]=minute_arr;
			  },
			  // 格式化 时间, 并计算时间差
			    timeFormat(t, i) {
			      var f_d = this.objectDateArray;
			      var d = t[0],
			        h = t[1],
			        m = t[2];
					console.log(t);
					console.log(f_d);
			      var time = f_d[0][d] + ' ' + f_d[1][h] + ':' + f_d[2][m] + ':' + '00'
			      if (i) {
			        // 结束 
					  this.formData.endTime=time
			      } else { 
			        // 开始
			         this.formData.startTime=time
			      }
			      var time_s=new Date(this.formData.startTime).getTime();
			      var time_e=new Date(this.formData.endTime).getTime();
			   //    if (this.formData.endTime && this.formData.startTime) {
			   //      if (((time_e - time_s)/1000/60)<=30) {
			   //        this.$commonJs.uniMsg('必须大于30分钟');
					 //  this.formData.endTime='';
					 //  this.formData.longTime=0;
			   //        return;
			   //      }
						// this.formData.longTime=this.$commonJs.DateDiff(this.formData.startTime, this.formData.endTime)
			   //    }
			   
			    },
				navBack(){
					this.$commonJs.navBack();
				},
				navTo(url){
					this.$commonJs.navTo(url)
				},
		}
	}
</script>

<style lang="scss">
	page,.container{
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
	uni-picker{
		flex: 1;
		text-align: center;
	}
	
	.close-top{
		padding: 36rpx 0 0 36rpx;
		box-sizing: border-box;
		image{
			width: 29rpx;
			height: 29rpx;
		}
	}
	
	.pad-left-right-30{
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	
	.new-add-wrap{
		padding: 30rpx 0;
		.title{
			@extend  .pad-left-right-30;
			input{
				font-size: 28rpx;
				padding: 22rpx 0;
			}
			
		}
		.content{
			@extend  .pad-left-right-30;
			textarea{
				width: 100%;
				padding: 22rpx 0;
				font-size: 28rpx;
			}
		}
		.joinTalk,.address{
			@extend  .pad-left-right-30;
			height: 107rpx;
			line-height: 107rpx;
			padding-right: 60rpx;
			&::after{
				right: 30rpx;
			}
			.label{
				font-size: 26rpx;
				color: #828282;
			}
			.txt{
				font-size: 24rpx;
				color: #A2A2A2;
			}
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 16rpx;
			}
			input{
				text-align: right;
				font-size: 24rpx;
			}
			.address-text{
				padding-left: 50rpx;
			}
		}
		
		.timewrap{
			padding-right: 0;
		}
		
		
		.address{
			image{
				width: 34rpx;
				height: 38rpx;
				margin-right: 20rpx;
			}
		}
	}
	
	.new-bottom{
		
		.n-b-item{
			image{
				width: 56rpx;
				height: 56rpx;
				border-radius: 50%;
				background-color: #F6F6F6;
				padding: 15rpx;
				box-sizing: border-box;
				margin-bottom: 8rpx;
			}
			text{
				font-size: 20rpx;
				color: #A2A2A2;
			}
			margin-right: 20rpx;
		}
		
		.addNewBtn{
			border-radius: 40rpx;
			margin: 30rpx 0 30rpx 10rpx;
		}
	}
</style>
