<template>
	<!-- 系统设置 -->
	<view class="container">
		<view class="flex-box head-item bd-bottom  flex-y-center lineJianTou" hover-class="yzkk-href-hover" @click="isEdit ? edit() : ''"  v-bind:class="{'jiantouRight padRight':isEdit}" >
			<view class="flex-1">
				<text class="label">头像</text>
			</view>
			<view>
				<image :src="user.image" mode="aspectFill" @error="showErrorImage"></image>
			</view>
		</view>
		<view class="flex-box set-item bd-bottom " v-bind:class="{'lineJianTou inputRight':isEdit}">
			<view >
				<text class="label">用户名</text>
			</view>
			<view class="flex-1">
				<input type="text" v-model="user.nickname" :disabled="!isEdit" v-bind:class="{'inputRight':isEdit}" />
			</view>
			<text class="uni-icon flex-box flex-y-center" @click="clear()" v-if="isEdit" >&#xe434;</text>
		</view>
	
		<view class="flex-box set-item bd-bottom  lineJianTou " hover-class="yzkk-href-hover" @tap="isEdit ? showPicker('sex') : '' " v-bind:class="{'jiantouRight padRight':isEdit}" >
			<view>
				<text class="label">性别</text>
			</view>
			<view class="flex-1 txt-right">
				<text v-bind:class="{'black-text':user.sex}">{{user.sex ? sexArr[user.sex-1].name : '待完善'}}</text>
			</view>
		</view>
		<view class="flex-box area-item  bd-bottom  flex-column uni-common-mb">
			<view>
				<text class="label">个人介绍</text>
			</view>
			<textarea v-model="user.signature"  placeholder="介绍一下你自己~"  :disabled="!isEdit"  />
		</view>
			
		<view class="flex-box set-item bd-bottom  lineJianTou" hover-class="yzkk-href-hover" @tap="isEdit ? showPicker('date') : '' " v-bind:class="{'jiantouRight padRight':isEdit}" >
			<view class="flex-1">
				<text class="label">生日</text>
			</view>
			<view>
				<text v-bind:class="{'black-text':birthday}">{{birthday ? birthday : '待完善'}}</text>
			</view>
		</view>
		
		<view class="flex-box set-item bd-bottom  lineJianTou" hover-class="yzkk-href-hover" @tap="isEdit ? showPicker('region') : '' " v-bind:class="{'jiantouRight padRight':isEdit}" >
			<view class="flex-1">
				<text class="label">地区</text>
			</view>
			<view>
				<text v-bind:class="{'black-text':addressRengin}">{{addressRengin ? addressRengin :'待完善'}}</text>
			</view>
		</view>
		<!-- 性别 -->
		<w-picker mode="selector" :value="user.sex ? sexArr[user.sex-1].name : '待完善'" default-type="name" :default-props="defaultProps" :options="sexArr" @confirm="onConfirm($event,'sex')" ref="sex" ></w-picker>
		<!-- 生日 -->
		<!-- value="user.birthday ? user.birthday : '2019-01-01'" -->
		<w-picker mode="date"  startYear="1900" :endYear="endYear"	:value="birthday" fields="day"  @confirm="onConfirm($event,'date')" :disabled-after="false" ref="date" ></w-picker>
		<!-- 地区 -->
		<w-picker mode="region":value="defaultRegion"default-type="value":hide-area="false"@confirm="onConfirm($event,'region')" ref="region" ></w-picker>
		<view class="yzkk-submitBtn" @click="isEdit ?  submitInfo() : isEdit=true" hover-class="yzkk-btn-hover">{{isEdit ? '完成' : '编辑资料'}}</view>
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
				isEdit:false,
				user:'',
				endYear:'',
				nowDate:'',
				defaultProps:{
					label:"name",
					value:"id"
				},
				sexArr:[
					{
						name:"男",
						id:1
					},{
						name:"女",
						id:2
					}
				],
				birthday:'2019-01-01',
				options:[],
				defaultRegion:'',//地区
				addressRengin:'',//详细地址
			}
		},
		methods: {
			showErrorImage(i){
				  this.user.image= this.$errorImage;  
			},
			clear(i){
				this.user.nickname=""
			},
			edit(){
				this.$commonJs.chooseImage(1).then(res => {
						this.$commonJs.urlTobase64(res[0]).then(r => {
							this.user.image=r;
							this.$apiJs.upUserImage({
								user_image:r
							}).then(result=>{
								console.log(result);
							})
					})
				})
			},
			showPicker(type){
				this.$refs[type].show();
			},
			// 提交picker
			onConfirm(res,type){
				switch (type){
					case 'sex':
						this.user.sex=res.value;
						break;
					case 'date':
						this.birthday=res.value;
						console.log(this.birthday);
						break;
					case 'region':
						this.defaultRegion=res.value;
						this.addressRengin=res.result;
						break;
					default:
						break;
				}
			},
			sexPicker(e){
				this.user.sex = e.detail.value
			},
			submitInfo() {
				this.isEdit=false;
				var u=this.user;
				this.$apiJs.upUser({
					username:u.nickname,
					sex:u.sex,
					birthday:this.birthday,
					signature:u.signature,
					address:JSON.stringify(this.defaultRegion),
					address_name:this.addressRengin
				}).then((res)=>{
					this.$commonJs.uniMsg('修改成功');
					var prevPage=this.$commonJs.getBeforePage();
					if(prevPage.route=='/pages/package_user/setting'){
						var userPage=this.$commonJs.getBeforePage(1);
						userPage.getUserInfo();
					}else{
						prevPage.getUserInfo();
					}
				}).then(()=>{
					this.$commonJs.navBack();
				})
			},
			navTo(url) {
				this.$commonJs.isLogin().then((flag)=>{
					if(flag){
						this.$commonJs.navTo(url)
					}
				})
			},
			getUserInfo() {
				var that = this;
				this.$apiJs.getUser({}).then(res => {
					if (res) {
						console.log(res);
						uni.setStorageSync('userInfo', res);
						that.$store.dispatch('setUserInfoObj', res) // 存储vuex 
						this.user = res;
						this.birthday=res.birthday;
						this.defaultRegion=res.address ? JSON.parse(res.address) : '';
						this.addressRengin=res.address_name;
					}
				})
			}
		},
		onLoad() {
			this.getUserInfo();
			this.endYear=new Date().getFullYear()-1;
		}
	}
</script>

<style lang="scss">
	page,.container{
		background-color: $yzkk-body-gray-color;
	}
	.container{
		height: 100%;
	}
	
	.area-item{
		background-color: #FFFFFF;
		padding: 0 30rpx;
		.label {
			color: #000000;
			font-size: 30rpx;
			height: 98rpx;
			line-height: 98rpx;
		}
		textarea{
			font-size: 30rpx;
			width: 100%;
			height: 200rpx;
			padding-bottom: 30rpx;
		}
	}
	
	.head-item{
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;
		.label {
			color: #000000;
			font-size: 30rpx;
		}
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			border: 1px solid #f1f1f1;
		}
	}
	
	.set-item {
		background-color: #FFFFFF;
		padding: 0 30rpx;
		
		height: 98rpx;
		line-height: 98rpx;
		box-sizing: border-box;

		text {
			font-size: 30rpx;
			color: #A7A7A7;
		}
		text.black-text{
			color: #000000;
		}
		.label {
			color: #000000;
		}
		
		input{
			font-size: 30rpx;
			line-height: 98rpx;
			height: 98rpx;
			text-align: right;
		}
		
		.txt-right{
			text-align: right;
		}
		
		.inputRight{
			padding-right: 15rpx;
		}
		
	}
	
	.lineJianTou{
		&:after{
			right: 45rpx;
		}
	}
	
	.padRight{
		padding-right: 60rpx;
		//#ifdef APP-PLUS || MP-WEIXIN
		padding-right:88rpx;
		//#endif
	}
	 
	.yzkk-submitBtn{
		margin-bottom: 30rpx;
	}
	
</style>
