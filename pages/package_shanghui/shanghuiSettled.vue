<template>
	<view class="container flex-box flex-column">
		<view v-if="hasForm">
			<view class="sh-top flex-box flex-xy-center flex-column">
				<view class="title flex-box flex-xy-center ">
					商会入驻
				</view>
				<view class="label">马上加入全国商会交流圈</view>
			</view>
			<view class="form-panel flex-1" style="margin-bottom: 150rpx;">
				<!-- <input-item:name="item.name" :inputData="item" :inputType="item.type"></input-item> -->
				<view class="form-list bd-bottom" v-for="(item,index) in formList" :key="index">
					<div class="form-item flex-box flex-y-center">
						<view class="label">
							<text>{{item.label}}</text>
						</view>
						<view class="flex-1">
							<input v-if="item.type=='number'" v-model="item.val" :name="item.name" maxlength="11" :placeholder="'请输入'+item.label" />
							<input v-if="item.type=='text'" v-model="item.val" :name="item.name" :placeholder="'请输入'+item.label" />
						</view>
						<view v-if="item.type=='select3'" class="jiantouRight lineJianTou"  @tap="showPicker('region')" >
							<!-- <picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
								<text class="uni-input">{{multiArray[0][multiIndex[0]]}}-{{multiArray[1][multiIndex[1]]}}-{{multiArray[2][multiIndex[2]]}}</text>
							</picker> -->
							<text  v-bind:class="{'black-text':addressRengin}" v-model="item.val = addressRengin+addressInfo">{{addressRengin ? addressRengin :'请选择'}}</text>
						</view>
					</div>
					<!-- 详细地址 -->
					<view class="flex-box flex-y-center addressInfo" style="padding: 20rpx 0;font-size: 22rpx;" >
						<textarea  v-model="addressInfo" name="addressInfo"  maxlength="20" placeholder="请输入详细地址"  />
					</view>
				</view>
			</view>
			<!-- 流程图 -->
			<view class="step-wrap">
				<div class="title">商会入驻流程</div>
				<view class="flex-box flex-left-right-between step-list">
					<view class="icon-item">
						<image src="../../static/images/icon/computer.png" mode=""></image>
						<text>线上申请</text>
					</view>
					<view class="icon-item">
						<image src="../../static/images/icon/telephone.png" mode=""></image>
						<text>电话核实</text>
					</view>
					<view class="icon-item">
						<image src="../../static/images/icon/txt.png" mode=""></image>
						<text>商会上线</text>
					</view>
				</view>
			</view>
		</view>

		<view class="Audit" v-if="!hasForm">
			<view class="InAudit">
				<image src="../../static/ok.png" mode=""></image>
				<view class="title">入驻申请提交成功</view>
				<view class="label">
					稍后我们的客服将与您联系
				</view>
			</view>
		</view>

		<view class="fixed-bottom">
			<button class="yzkk-submitBtn joinNow" v-if="hasForm" hover-class="yzkk-btn-hover" @click="joinNow">提交申请</button>

			<!-- 已提交申请，等待电话核实 -->
			<button class="yzkk-submitBtn joinNow" v-if="!hasForm" hover-class="yzkk-btn-hover" @click="navBack()">知道了</button>
		</view>
		
		<!-- 省市县、三级联动 -->
		<w-picker
					mode="region"
					:value="defaultRegion"
					default-type="value"
					:hide-area="false"
					@confirm="onConfirm($event,'region')"
					ref="region" 
				></w-picker>

	</view>
	
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
		    wPicker
		},
		data() {
			return {
				hasForm: true,
				formList: [{
					label: '商会名称',
					val: '',
					name: 'chamber_name',
					type: 'text',
					length: 20
				}, {
					label: '姓名',
					val: '',
					name: 'real_name',
					type: 'text',
					length: 15
				}, {
					label: '手机号',
					val: '',
					name: 'phone',
					type: 'number',
					length: 11
				},
				{
					label:'所在地区',
					val:'',
					name:'address',
					type:'select3',
					length:20
				}
				 ],
				defaultRegion:["110000","110100","110101"],//地区
				addressRengin:'',//地区
				addressInfo:'',//详细地址
			}
		},
		methods: {
			showPicker(type){
				this.$refs[type].show();
			},
			// 提交picker
			onConfirm(res,type){
				console.log(res);
				switch (type){
					case 'region':
					this.defaultRegion=res.value;
					this.addressRengin=res.result;
						break;
					default:
						break;
				}
			},
			
			navBack() {
				this.$commonJs.navBack();
			},
			joinNow() {
				var that = this;
				let Rules = [{
						name: 'chamber_name',
						type: 'required',
						errmsg: '请输入商会名称'
					},
					{
						name: 'real_name',
						type: 'required',
						errmsg: '请输入您的姓名'
					},
					{
						name: 'phone',
						type: 'required',
						errmsg: '请输入您的手机号'
					},
					{
						name: 'phone',
						type: 'phone',
						errmsg: '请输入正确的手机号'
					},
					{
						name: 'address',
						type: 'required',
						errmsg: '请输入您的地址'
					},
				];
				var formData = {};
				this.formList.forEach((item) => {
					formData[item.name] = item.val
				})
				let valLoginRes = this.$validate.validate(formData, Rules)
				console.log(valLoginRes)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				// 入驻商会
				this.$apiJs.setChamberJoin(formData).then(res => {
					if (res) {
						this.hasForm = false;
					}
				})
				// this.$apiJs.setChamberJoin({
				// 	formData:formData,
				// 	address:that.addressRengin
				// }).then(res => {
				// 	if (res) {
				// 		this.hasForm = false;
				// 	}
				// })
			}
		},
		onLoad(option) {
			if(option.status){
				this.hasForm = false;
			}
		}

	}
</script>

<style lang="scss">
	.container {
		height: 75vh;
	}

	.sh-top {
		height: 200rpx;
		text-align: center;

		.title {
			font-size: 40rpx;
			font-weight: 800;
			flex: 1;
		}

		.label {
			flex: 1;
			font-size: 30rpx;
			color: #999999;
		}
	}

	.sh-bg {
		height: 358rpx;
		width: 92%;
		margin: 20rpx auto;
		background-image: url(../../static/images/joinBg.png);
		background-size: cover;

		.sh-bg-con {
			text-align: center;

			text {
				color: #FFFFFF;
				font-size: 40rpx;
				font-weight: 800;
			}
		}
	}

	.form-list {
		height: 88rpx;
		padding: 0rpx 30rpx;
		line-height: 88rpx;
		box-sizing: border-box;
		background-color: #fff;

		.label {
			min-width: 138rpx;

			text {
				font-size: 30rpx;
				font-weight: 800;

			}
		}

		input {
			text-align: right;
		}
		
		.jiantouRight {
			padding-right: 30rpx;
			text-align: right;
			text{
				font-size: 30rpx;
				color: #808080;
			}
			text.black-text{
				color: #000000;
			}
			
			
		}
		.jiantouRight:after{
			right: 10rpx;
		}
	}


	.step-wrap {
		.title {
			margin: 60rpx auto;
			text-align: center;
		}

		.title,
		text {
			font-size: 28rpx;
			color: #999999;
		}

		.step-list {
			position: relative;

			.icon-item {
				display: flex;
				flex: 1;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				image {
					width: 80rpx;
					height: 80rpx;
					border: 1px solid #DDDDDD;
					border-radius: 50%;
					padding: 20rpx;
					box-sizing: border-box;
					margin-bottom: 10rpx;
				}
			}

			&::before {
				content: "";
				position: absolute;
				left: 28%;
				top: 33%;
				transform: translateY(-50%);
				width: 96rpx;
				height: 1rpx;
				background-color: #DDDDDD;
			}

			&::after {
				content: "";
				position: absolute;
				right: 28%;
				top: 33%;
				transform: translateY(-50%);
				width: 96rpx;
				height: 1rpx;
				background-color: #DDDDDD;
			}
		}

	}

	.Audit {
		text-align: center;

		image {
			width: 180rpx;
			height: 180rpx;
			margin-top: 280rpx;
		}

		image.shenhezhong {
			width: 475rpx;
			height: 261rpx;
			// position: relative;
			margin-top: 169rpx;
			margin-bottom: 71rpx;
		}

		.title {
			width: 82%;
			color: #E56361;
			font-size: 36rpx;
			margin: 0 auto;
			font-weight: 800;
		}

		.label {
			width: 82%;
			margin: 0 auto;
			margin-top: 30rpx;
			font-size: 28rpx;
			color: #A7A7A7;
			line-height: 42rpx;
		}
	}

	.joinNow {
		margin: 25rpx auto;
	}
	
	.uni-textarea-compute, .uni-textarea-line, .uni-textarea-placeholder, .uni-textarea-textarea {
	    position: absolute;
	    width: 100% !important;
	    height: 50% !important;
	    left: 0;
	    top: 0;
	    white-space: inherit;
	    word-break: inherit;
	}
	uni-textarea {
	    width: 400px !important;
	    height: 80px !important;
	    display: block;
	    position: relative;
	    font-size: 14px;
	    line-height: normal;
	    white-space: pre-wrap;
	    word-break: break-all;
	}
</style>
