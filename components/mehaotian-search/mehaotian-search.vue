<template>
	<view class="search" :style="{ backgroundColor: backgroundColor }">
		<!-- #ifndef MP-WEIXIN -->
		<image class="back" src="../../static/images/icon/backIcon.png" mode="" @click="navBack()"></image>
		<!-- #endif -->
		<view class="content" :style="{ 'border-radius': radius + 'px', border: border }">
			<view class="content-box" :class="{ center: mode === 2 }">
				<text class="icon icon-search">&#xe61c;</text>
				<input class="input" :class="{ center: !active && mode === 2 }" :focus="isFocus" :placeholder="placeholder" v-model="inputVal"
				 @focus="focus" @blur="blur" />
				<!-- <view v-if="!active && mode === 2" class="input sub" @click="getFocus">请输入搜索内容</view> -->
				<text v-if="isDelShow" class="icon icon-del" @click="clear">&#xe644;</text>
			</view>
			<view v-show="(active && show && button === 'inside') || (isDelShow && button === 'inside')" class="searchBtn"
			 @click="search">搜索</view>
		</view>
		<view v-if="button === 'outside'" class="button" :class="{ active: show || active }" @click="search">
			<view class="button-item">{{ !show ? searchName : '搜索' }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: Number,
				default: 1
			},
			button: {
				type: String,
				default: 'outside'
			},
			show: {
				type: Boolean,
				default: true
			},
			radius: {
				type: String,
				default: '60'
			},
			placeholder: {
				type: String,
				default: '请输入搜索内容'
			},
			backgroundColor: {
				type: String,
				default: '#fff'
			},
			border: {
				type: String,
				default: '1px #f5f5f5 solid'
			}
		},
		data() {
			return {
				active: false,
				inputVal: '',
				searchName: '取消',
				isDelShow: false,
				isFocus: true
			};
		},
		methods: {
			navBack(){
				this.$commonJs.navBack()
			},
			focus() {
				this.active = true;
			},
			blur() {
				this.isFocus = false;
				if (!this.inputVal) {
					this.active = false;
				}
			},
			clear() {
				this.inputVal = '';
				this.$emit('clear');
				this.isFocus = true;
			},
			getFocus() {
				this.isFocus = true;
			},
			search() {
				console.log(this.inputVal);
				if (!this.inputVal.trim()){
					this.$commonJs.navBack();
				}else{
					this.$emit('search', this.inputVal);
				}
			},
			setInput(c){
				this.inputVal=c;
			}
		},
		watch: {
			inputVal(newVal) {
				if (newVal.trim()) {
					this.searchName = '搜索';
					this.isDelShow = true;
				} else {
					this.searchName = '取消';
					this.isDelShow = false;
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.back {
		width: 34rpx;
		height: 34rpx;
	}

	.search {
		display: flex;
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		background: #fff;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		z-index: 999;
		position: fixed;
		// #ifdef APP-PLUS
		top: var(--status-bar-height);
		//#endif
		// #ifdef H5
		top: 0;
		//#endif
		
		
		
		.content {
			display: flex;
			align-items: center;
			// #ifndef MP-WEIXIN
			width: 511rpx;
			//#endif
			// #ifdef MP-WEIXIN
			flex: 1;
			//#endif
			
			height: 60rpx;
			border: 1px #ccc solid;
			background: #fff;
			overflow: hidden;
			transition: all 0.2s linear;
			border-radius: 30px;
			background-color: #F0EFF4;

			.content-box {
				width: 100%;
				display: flex;
				align-items: center;

				&.center {
					justify-content: center;
				}

				.icon {
					padding: 0 15upx;

					&.icon-del {
						font-size: 38upx;
					}
				}

				.input {
					width: 100%;
					max-width: 100%;
					line-height: 60upx;
					height: 60upx;
					transition: all 0.2s linear;
					font-size: 28rpx;

					&.center {
						width: 200upx;
					}

					&.sub {
						// position: absolute;
						width: auto;
						color: grey;
					}
				}
			}

			.searchBtn {
				height: 100%;
				flex-shrink: 0;
				padding: 0 30upx;
				background: $uni-color-success;
				line-height: 60upx;
				color: #fff;
				transition: all 0.3s;
			}
		}

		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			flex-shrink: 0;
			width: 0;
			transition: all 0.2s linear;
			white-space: nowrap;
			overflow: hidden;

			&.active {
				padding-left: 15upx;
				width: 100upx;
				color: #E56361;
			}
		}
	}

	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_989023_efq0mtli526.ttf') format('truetype');
	}

	.icon {
		font-family: iconfont;
		font-size: 32upx;
		font-style: normal;
		color: #999;
	}
</style>
