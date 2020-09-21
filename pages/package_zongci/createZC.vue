<template>
	<!-- 加入商会 -->
	<view class="container flex-box flex-column">
		<view class="info-panel" v-if="!InAudit&&!errorAudit">

			<view class="sh-bg flex-box flex-xy-center">
				<!-- <image src="../../static/images/joinBg.png" mode=""></image> -->
				<!-- <view class="sh-bg-con">
					<text>商会名称</text>
				</view> -->
			</view>

			<view class="form-panel flex-1">
				<!-- <input-item:name="item.name" :inputData="item" :inputType="item.type"></input-item> -->
				<view class="form-list bd-bottom" v-bind:class="{'jiantouRight':item.isChoose}" v-for="(item,index) in formList"
				 :key="index">
					<view class="form-item flex-box flex-y-center">
						<view class="label">
							<text>{{item.label}}</text>
						</view>
						<view class="flex-1">
							<input v-if="item.type=='number'" v-model="item.val" :name="item.name" :maxlength="item.length" :placeholder="'请输入'+item.label" />
							<input v-if="item.type=='text'" v-model="item.val" :name="item.name" :placeholder="'请输入'+item.label" />
						</view>
					</view>
				</view>

				<view class="jiantouRight lineJianTou RealAuth" hover-class="yzkk-href-hover" @click="navTo('realAuth')">
					<view class="form-item flex-box flex-y-center">
						<view class="label">
							<text>实名认证</text>
						</view>
						<view class="flex-1 flex-right-content flex-box state">
							<text>{{isRealAuth?'已认证':'未认证'}}</text>
						</view>
					</view>
				</view>

				<view class="form-bottom">
					<view class="new-bottom-fs-gray">请认真填写联系方式，以便我们能够尽快的联系到您</view>
					<view class="sq-xieyi">
						<view class="flex-box flex-y-center">
							<checkbox :value="isCheck" @click="checkBox" />
							<view>我已阅读并了解了</view>
							<navigator url="">【申请协议】</navigator>
						</view>
					</view>
				</view>
			</view>
			<button class="yzkk-submitBtn joinNow" :disabled="isCheck=='0'" hover-class="yzkk-btn-hover" @click="joinNow">提交申请</button>
			
		</view>


		<view class="InAudit" v-if="InAudit">
			<image src="../../static/images/icon/shenheBg.png" class="shenhezhong" mode=""></image>
			<view class="title">信息审核中</view>
			<view class="label">
				您的信息正在审核中，请耐心等待审核结果，审核 过程中会收到客服联系电话，请注意接听！
			</view>
		</view>
		
		<view class="InAudit" v-if="errorAudit">
			<image src="../../static/images/icon/shenheError.png" mode=""></image>
			<view class="title">审核不通过</view>
			<view class="label">
				抱歉，您的资料审核未通过，请检查上传信息是否准确
			</view>
			<button class="yzkk-submitBtn joinNow"  @click="resetReq">重新申请</button>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InAudit: false,
				errorAudit:false,
				Audit:false,
				isCheck: "0",
				formList: [{
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
				}, {
					label: '所在地区',
					val: '',
					name: 'address',
					type: 'text',
					length: 20
				}, {
					label: '身份证号',
					val: '',
					name: 'id_number',
					// #ifdef APP-PLUS || MP-WEIXIN
					type: 'idCard',
					// #endif
					// #ifdef H5
					type: 'number',
					// #endif
					length: 20
				}, {
					label: '寺庙名称',
					val: '',
					name: 'name',
					type: 'text',
					length: 20
				}],
				isRealAuth: false,
				positive:'',
				reverseImg:'',
				yingye:'',
				id_images:''
			}
		},
		methods: {
			resetReq(){
				this.errorAudit=false;
			},
			checkBox: function(e) {
				if (Number(this.isCheck)) {
					this.isCheck = "0"
				} else {
					this.isCheck = "1"
				}
			},
			navTo(url) {
				this.$commonJs.navTo(url)
			},
			joinNow() {
				let Rules = [{
						name: 'real_name',
						type: 'required',
						errmsg: '请输入真实姓名'
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
						errmsg: '请输入选择您所在地区'
					},
					{
						name: 'name',
						type: 'required',
						errmsg: '请输入寺庙名称'
					}					
				];
				var formData = {};
				this.formList.forEach((item) => {
					formData[item.name] = item.val
				})
				let valLoginRes = this.$validate.validate(formData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
					return false
				}
				if (!this.isRealAuth) {
					this.$commonJs.uniMsg("请完成实名认证！")
					return false
				}
				formData.id_images=this.id_images;
				this.$apiJs.setTempleJoin(formData).then(res => {
					if (res){
						// this.$commonJs.uniMsg('已提交，等待审核', 'success');
						this.InAudit=true;
						// this.$commonJs.navBack();
					}
				})
			},
			getState() {
				// 状态值: -1=审核不通过,0=待审核
				this.$apiJs.getTempleJoinStatus().then(res => {
					if (res.status==0) {
						// this.$commonJs.uniMsg('已提交，等待审核', 'success');
						this.InAudit=true;
					}else if (res.status==-1){
						this.errorAudit=true;
					}
				})
			}
		},
		onLoad(option) {
			if(option.status==-1){
				this.errorAudit=true;
			}else{
				this.getState();
			}
		}
	}
</script>

<style lang="scss">
	.sh-bg {
		height: 358rpx;
		width: 92%;
		margin: 20rpx auto;
		background-image: url(../../static/images/simiao.png);
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

	.form-list,
	.RealAuth {
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
			font-size: 30rpx;
		}

		.state {
			font-size: 30rpx;
			margin-right: 45rpx;
			color: #999999
		}
	}

	.uni-checkbox-input {
		border-radius: 50%;
	}

	.form-bottom {
		width: 92%;
		margin: 35rpx auto 21rpx auto;

		.sq-xieyi {
			margin-top: 21rpx;
			font-size: 28rpx;

			navigator {
				color: #0066CC;
			}
		}
	}

	.joinNow {
		margin: 25rpx auto;
	}

	.InAudit {
		text-align: center;
		image{
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
</style>
