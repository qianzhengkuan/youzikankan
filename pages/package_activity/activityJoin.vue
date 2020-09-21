<template>
	<!-- 活动报名 -->
	<view class="container flex-box flex-column">
		
		<view class="form-panel flex-1">
			
			<view class="form-list bd-bottom"   v-for="(item,index) in formList" :key="index">
				<div class="form-item flex-box flex-y-center">
					<view class="label">
						<text>{{item.label}}</text>
					</view>
					<view class="flex-1">
						<input v-if="item.type=='number'" v-model="item.val" :name="item.name"  maxlength="11" placeholder="请输入" />
						<input v-if="item.type=='text'" v-model="item.val" :name="item.name"  placeholder="请输入" />
					</view>
				</div>
			</view>
		</view>
		<view class="yzkk-submitBtn joinNow" hover-class="yzkk-btn-hover" @click="joinNow">立即报名</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formList:[
					{
						label:'姓名',
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
						label:'所属商会',
						val:'',
						name:'company',
						type:'text',
						length:20
					},{
						label:'职务',
						val:'',
						name:'job',
						type:'text',
						length:20
					},
				]
			}
		},
		methods: {
			joinNow(){
				let Rules = [
				  {name: 'real_name', type: 'required', errmsg: '请输入您的姓名'},
				  {name: 'phone', type: 'required', errmsg: '请输入您的手机号'},
				  {name: 'phone', type: 'phone', errmsg: '请输入正确的手机号'},
				  {name: 'company', type: 'required', errmsg: '请输入所属商会'},
				  {name: 'job', type: 'required', errmsg: '请输入您的职务'},
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
				formData.activity_id=this.id;
				this.$apiJs.activityEnroll(formData).then(res => {
					if (res){
						this.$commonJs.uniMsg('报名成功', 'success');
						// this.$commonJs.navBack();
						setTimeout(function(){
							
							uni.navigateTo({
								url:'../package_user/myActivity?tab=0'
							})
						},500)
					}
				})
			
			},
			getState(id){
				
			}
		},
		onLoad(option) {
			this.id=option.id;
			this.getState(option.id);
		}
	}
</script>

<style lang="scss">
	uni-page-body,.container{
		height: 100%;
	}
	
	.joinNow{
		margin: 25rpx auto;
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
	}
	
</style>
