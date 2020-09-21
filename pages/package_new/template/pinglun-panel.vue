<template name="pinglun-panel">
	<!-- 评论面板 -->
	<view class="pl-panel" v-show="plShow">
		<view class="flex-box">
			<button class="yzkk-submitBtn wid-134 cancel-btn" @click="closePl">取消</button>
			<button class="yzkk-submitBtn wid-134 pl-subbtn" hover-class="yzkk-btn-hover" :disabled="!plCon" @click="submitPl">发表</button>
		</view>
		<textarea v-model="plCon" :focus="focusFlag" placeholder="说点什么..(100字内)" maxlength="99" @confirm="submitPl()" :auto-height="true" />
		
	</view>
</template>

<script>
	export default{
		name: 'pinglun-panel',
		data(){
			return{
				plCon:'',
				plShow:false,
				focusFlag:false
			}
		},
		onLoad() {
			
		},methods:{
			submitPl(i){
				 this.$emit('submitPl',this.plCon)
				 this.plCon='';
			},
			showPl(){
				this.plShow=true;
				// #ifndef APP-PLUS
				this.focusFlag=true;
				// #endif
			},
			closePl(){
				this.plShow=false
			}
		}
		
	}
</script>

<style lang="scss">
	.pl-panel{
		    display: flex;
		    flex-direction: column;
		    align-items: flex-end;
		    padding: 30rpx;
		    position: fixed;
		    width: 100%;
		    min-height: 320rpx;
		    box-sizing: border-box;
			left: 0;
			bottom: 98rpx;
			background-color: #FFFFFF;
			border-top: 1px solid #dedede;
		textarea{
			width: 100%;
			font-size: 28rpx;
			height: 200rpx !important;
		}
		.cancel-btn{
			height: 56rpx;
			line-height: 56rpx;
			margin: 0;
			margin-right: 10rpx;
			background-color: #fff;
			color: #000000;
			&::after{
			border: 1px solid rgba(0,0,0,.2);
			}
		}
		.pl-subbtn{
			height: 56rpx;
			line-height: 56rpx;
			margin: 0;
			margin-right: 10rpx;
			
		}
	}
</style>
