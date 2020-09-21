<template>
	<!-- 加入商会 -->
	<view class="flex-box flex-column">
		<view class="sh-bg" v-bind:style="chooseShImage">
			<view class="sh-bg-con  flex-box flex-xy-center flex-column">
				<text>{{chooseShName ? chooseShName : '请选择你要加入的商会'}}</text>
				<button class="yzkk-submitBtn" @click="navTo('selectSH')"> 选择商会</button>
			</view>
			
			<view class="black-bg"></view>
		</view>
		<view class="req-title bd-bottom">
			<text>入会申请</text>
		</view>
		<view class="form-panel flex-1">
			<!-- <input-item:name="item.name" :inputData="item" :inputType="item.type"></input-item> -->
			<view class="form-list bd-bottom"  v-for="(item,index) in formList" :key="index">
				<view class="form-item flex-box flex-y-center"  :hover-class="item.type=='select' ? 'yzkk-href-hover' : ''">
					<view class="label">
						<text>{{item.label}}</text>
					</view>
					<view class="flex-1">
						<input v-if="item.type=='number'" v-model="item.val" :name="item.name"  maxlength="11" :placeholder="'请输入'+item.label"  />
						<input v-if="item.type=='text'" v-model="item.val" :name="item.name"  :placeholder="'请输入'+item.label"  />
						<view v-if="item.type=='select1'" class="jiantouRight lineJianTou"  @tap="showPicker('selector1')">
							<text v-bind:class="{'black-text':index1}">{{array1[index1].name ? array1[index1].name : '请选择'}}</text>
						</view>
						<view v-if="item.type=='select2'" class="jiantouRight lineJianTou"  @tap="showPicker('selector2')">
							<!-- <picker @change="secondPicker" :value="index2" :range="array2" range-key="name">
									<text class="uni-input">{{array2[index2].name ? array2[index2].name : '请选择'}}</text>
							</picker> -->
							<text v-bind:class="{'black-text':index2}">{{array2[index2].name ? array2[index2].name : '请选择'}}</text>
						</view>
						<view v-if="item.type=='select3'" class="jiantouRight lineJianTou"  @tap="showPicker('region')">
							<text v-bind:class="{'black-text':addressRengin}" v-model="item.val = addressRengin+addressInfo">{{addressRengin ? addressRengin :'请选择'}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 详细地址 -->
			<view class="flex-box flex-y-center addressInfo" >
				<textarea  v-model="addressInfo" name="addressInfo"  maxlength="20" placeholder="请输入详细地址"  />
			</view>
		</view>
		<!-- 职务 -->
		<w-picker mode="selector" :value="array1[index1].name" default-type="name" :default-props="defaultProps" :options="array1"
					@confirm="onConfirm($event,'selector1')"
					ref="selector1" 
				></w-picker>
				
		<!-- 行业 -->
		<w-picker
					mode="selector"
					:value="array2[index2].name"
					default-type="name"
					:default-props="defaultProps"
					:options="array2"
					@confirm="onConfirm($event,'selector2')"
					ref="selector2" 
				></w-picker>
		
		<!-- 省市县、三级联动 -->
		<w-picker
					mode="region"
					:value="defaultRegion"
					default-type="value"
					:hide-area="false"
					@confirm="onConfirm($event,'region')"
					ref="region" 
				></w-picker>
		
		
		<view class="yzkk-submitBtn joinNow" hover-class="yzkk-btn-hover" @click="joinNow">提交申请</view>
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
				index1: 0,
				index2: 0,
				index3: 0,
				defaultProps:{
					label:"name",
					value:"id"
				},
				array1: [{name:'请选择',id:0},{name:'董事长',id:1},{name: '销售经理',id:2}, {name:'总裁',id:3}, {name:'高级副总裁',id:4}, {name:'副总裁',id:5}, {name:'CEO',id:6}, {name:'COO',id:7}, {name:'经理',id:8}],
				array2: [{name:'请选择',id:0},{name:'机构组织',id:1},{name: '信息产业',id:2}, {name:'机械机电',id:3}, {name:'环保绿化',id:4}, {name:'电子电工',id:5}, {name:'医药卫生',id:6},{name:'其他',id:7}],
				defaultRegion:["110000","110100","110101"],//地区
				addressRengin:'',//地区
				chooseShId:'',
				chooseShImage:{
					backgroundImage:"url('../../static/images/joinBg.png')"
				},
				chooseShName:'',
				formList:[
					{
						label:'真实姓名',
						val:'',
						name:'real_name',
						type:'text',
						length:15
					},{
						label:'手机号',
						val:'',
						name:'phone',
						type:'number',
						length:11
					},{
						label:'公司',
						val:'',
						name:'company',
						type:'text',
						length:20
					},{
						label:'职务',
						val:'',
						name:'work',
						type:'select1',
						length:20,
					},
					{
						label:'所属行业',
						val:'',
						name:'from',
						type:'select2',
						length:20
					},
					{
						label:'所在地区',
						val:'',
						name:'address',
						type:'select3',
						length:20
					}
				],
				addressInfo:''
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
					case 'selector1':
					this.index1=res.value;
						break;
					case 'selector2':
					this.index2=res.value;
						break;
					case 'region':
					this.defaultRegion=res.value;
					this.addressRengin=res.result;
						break;
					default:
						break;
				}
			},
			navTo(url){
				this.$commonJs.navTo(url);
			},
			joinNow(){
				let Rules = [
				  {name: 'real_name', type: 'required', errmsg: '请输入您的姓名'},
				  {name: 'phone', type: 'required', errmsg: '请输入您的手机号'},
				  {name: 'phone', type: 'phone', errmsg: '请输入正确的手机号'}
				];
				var formData={};
				this.formList.forEach((item)=>{
					formData[item.name]=item.val
				})
				let valLoginRes = this.$validate.validate(formData, Rules)
				if (!valLoginRes.isOk) {
					this.$commonJs.uniMsg(valLoginRes.errmsg)
				    return false
				}
				if (!this.chooseShId) {
					this.$commonJs.uniMsg("请选择要加入的商会！")
					return false
				}
				formData.chamber_id=this.chooseShId;
				formData.job=this.array1[this.index1].name;
				formData.industry=this.array2[this.index2].name;
				this.$apiJs.setChamberAdd(formData).then(res => {
					if (res){
						this.$commonJs.uniMsg('已提交，等待审核','success')
						var prvePage=this.$commonJs.getBeforePage();
						setTimeout(function(){
							// 从我的商会进来 酒back   否则就是从商会首页进来的，navTo
							if(prvePage.route== "/pages/package_shanghui/mySH"){
								// #ifdef H5
								prvePage.getShanghui()
								window.history.back()
								// #endif
								// #ifndef H5
								prvePage.$vm.getShanghui()
								uni.navigateBack()
								// #endif
							}else{
								uni.navigateTo({
									url:'mySH'
								})
							}
						},500)
					}
				})
				
			}
		},
		onLoad(option) {
			if(option.id){
				console.log(option);
				this.chooseShId=option.id;
				this.chooseShName=option.name;
			}
		}
	}
</script>

<style lang="scss">
	.req-title{
		font-size:36rpx;
		font-weight:800;
		padding: 15rpx 30rpx 30rpx;
		box-sizing: border-box;
	}
	
	.sh-bg{
		height: 358rpx;
		width: 92%;
		margin: 20rpx auto;
		background-size: cover;
		position: relative;
		
		.absoluteCon{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
		
		.sh-bg-con{
			text-align: center;
			@extend  .absoluteCon;
			z-index: 99;
			text{
				color: #FFFFFF;
				font-size: 28rpx;
			}
			
			button{
				width: 240rpx;
				height: 80rpx;
				margin: 28rpx auto;
				line-height: 80rpx;
			}
		}
		
		.black-bg{
			@extend  .absoluteCon;
			z-index: 98;
			background-color: rgba(0,0,0,.3);
			
		}
	}
	
	.form-list{
		height: 88rpx;
		padding: 0rpx 30rpx;
		line-height: 88rpx;
		box-sizing: border-box;
		background-color: #fff;
		.label{
			min-width: 138rpx;
			text{
			font-size: 30rpx;
			font-weight: 800;
			}
		}
		input{
			text-align: right;
			font-size: 30rpx;
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
			right: 0;
		}
		
		
	}
	textarea{
		padding: 30rpx;
		box-sizing: border-box;
		width: 100%;
		font-size: 30rpx;
		height: 180rpx;
	}
	
	.joinNow{
		margin-top: 106rpx;
		margin-bottom: 30rpx;
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
