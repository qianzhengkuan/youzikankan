import commonJs from './common.js'
/**
 * 获取header
 */
function getCommonHeader(imgUpload) {
	let header;
	if (imgUpload) {
		header = {
			'Content-type': 'multipart/form-data'
		};
	} else {
		header = {
			'Content-type': 'application/json;charset=UTF-8'
		};
	}

	// 如果token有值则带上
	let token = uni.getStorageSync("accesstoken");
	// let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzA3Nzg4NTQ5OSIsImNyZWF0ZWQiOjE1NzYyMjY5OTQ0NzgsImV4cCI6MTU3NjMxMzM5NH0.KSRIiSiFtdUkXFF7XTUR-ueaOmdZfW93M5QuuVoPW2nIZ5DNlEZpLp6_9lvIrL2MW1LmZnOdrTTKo1u2NlYEDQ";
	header = {
		'accesstoken': token || '0',
		// #ifdef  H5
		'equipment': 'h5',
		// #endif
		// #ifdef APP-PLUS
		'equipment': 'app',
		// #endif
		// #ifdef MP-WEIXIN
		'equipment': 'xcx',
		// #endif
	}
	return header;
};


/** 
 * 网络请求
 * config['noLoginCanSee'] :  无需登陆也可查看     resolve('seeOther')
 */

let ajaxTimes = 0;

function request(url, data = {}, method = "POST", config = {}, timeout = 10000) {
	
	ajaxTimes++;
	uni.showLoading({
		title:'加载中...',
		mask:true
	})
	
	// header 空值处理
	let _header = getCommonHeader();

	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			data: data,
			timeout: timeout,
			header: _header,
			method: method,
			success: (res => {
				 
				// #ifdef APP-PLUS 
				 ajaxTimes--;
				 	if(ajaxTimes===0){
				 		uni.hideLoading();
				 	}
				// #endif
				
				// 浏览器状态码
				var statusCode=res.statusCode;
				// 服务器返回的data
				var result = res.data;
				// 服务器 非200 错误
				if (statusCode == 200) {
					if(result.status!=1){
						uni.showToast({
							title: result.message,
							icon: 'none'
						});                              
						return;
					}
				} else if (statusCode == 401){
					if(config.noLoginCanSee){
						resolve('seeOther');
					}else{
						uni.setStorageSync('userInfo', { 
							defaultHeadImg: "/static/images/icon/defLogo.png"
						});
						uni.showToast({
							title: result.message,
							icon: 'none'
						});
						uni.navigateTo({
							url: '/pages/package_other/login'
						})
						return;
					}
				}else if(statusCode == 404){
					uni.showToast({
						title: '网络错误--404',
						icon: 'none'
					});
					return;
				}
				resolve(result.data);
			}),
			fail: (err => {
				if (err.errMsg == "request:fail timeout" || err.errMsg.includes("时")) {
					uni.showToast({
						title: '请求超时',
						icon: 'none'
					});
				}else if(err.errMsg == "request:fail"){
					// uni.showToast({
					// 	title: '网络错误--'+err.errMsg,
					// 	icon: 'none'
					// });
				}
				reject(err);
				return;
			}),
			
			// #ifdef H5
			complete:()=> {
				ajaxTimes--;
				if(ajaxTimes===0){
					uni.hideLoading();
				}
			},
			// #endif
		});
	});

};

/**
 * 请求状态码
 * @param {Object} s
 */
function checkCode(s) {
	return new Promise((resolve, reject) => {
		switch (Number(s)) {
			case 1:
				uni.showToast({
					title: '服务器 ' + result.status + ' 错误',
					icon: 'none'
				});
				resolve(result.data);
				return;
				break;
			case 401:
				uni.setStorageSync('userInfo', {
					defaultHeadImg: "/static/images/icon/defLogo.png"
				});
				uni.navigateTo({
					url: '/pages/package_other/login'
				})
				return;
				break;
			default:
				break;
		}

	})
}


/**
 * get 网络请求
 */
function getRequest(url, data = {}, config = {}) {
	return request(url, data, "GET", config);
}

/**
 * post 网络请求 
 */
function postRequest(url, data = {}, config = {}, timeout) {
	return request(url, data, "POST", config, timeout);
}

/**
 * 文件上传
 */

function ajaxUploadFile(url, tempFilePaths, config = {}) {
	let headerConfig = getCommonHeader(1);
	return new Promise((resolve, reject) => {
		console.log('上传的图片文件为' + tempFilePaths);
		var uploadTask = uni.uploadFile({
			url: url,
			filePath: tempFilePaths.file,
			name: 'file',
			header: headerConfig,
			success: (res => {
				// 服务器 非200 错误
				if (res.status && res.status != 200) {
					uni.showToast({
						title: '服务器 ' + res.status + ' 错误',
						icon: 'none'
					});
					resolve(res);
					return;
				} else if (res.data.code == 2001) { //token过期了，重新登录
					uni.reLaunch({
						url: '/pages/package_other/login/index',
					})
				}
				resolve(res.data);
			}),
			fail: (err => {
				if (err.errMsg.indexOf('url not in domain list') > -1) {
					uni.showToast({
						title: '请求url不在合法域名中，请打开调试模式',
						icon: 'none'
					});
				}
				reject(err);
			})
		});
		uploadTask.onProgressUpdate((res) => {
			console.log('上传进度', res.progress)
		})
	});
}



export {
	getCommonHeader,
	request,
	getRequest,
	postRequest,
	ajaxUploadFile
}
