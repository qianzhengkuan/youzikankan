var timeFormat = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	// 2019-12-20 02:33:30   ---->    2019年12月03日01时10分     t:是否显示刚刚  默认：false显示
	format: function(dateStr, t) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天'] && !t) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '年' + _format(date.getMonth() + 1) + '月' + _format(date.getDate()) + '日' +
			_format(date.getHours()) + '时' + _format(date.getMinutes()) + '分';
	},
	noYearFormat: function(dateStr, t) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天'] && !t) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return _format(date.getMonth() + 1) + '月' + _format(date.getDate()) + '日' +
			_format(date.getHours()) + '时' + _format(date.getMinutes()) + '分';
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};


/**
 * 
 * @param {Object} n 时间戳转字符串
 * 1586515001 ----> 2020-08-09 12:00:00
 */
function numberToDate(n) {
	var date = new Date(n * 1000);
	var _format = function(number) {
		return (number < 10 ? ('0' + number) : number);
	};
	var date_str = date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDay()) + ' ' +
		_format(date.getHours()) + ':' + _format(date.getMinutes()) + ':' + _format(date.getSeconds());
	console.log(date_str);
	console.log(timeFormat.noYearFormat(date_str));
	return timeFormat.noYearFormat(date_str);
}


/**
 * 两个时间的相差天数
 * @param {Object} sDate1
 * @param {Object} sDate2
 */
function DateDiff(start, end) {
	var times = new Date(end).getTime() - new Date(start).getTime();
	var days = Math.floor(times / (24 * 3600 * 1000));
	var hours = Math.floor((times % (24 * 3600 * 1000)) / (3600 * 1000));
	var month = Math.floor((times % (24 * 3600 * 1000)) / (60 * 1000)) % 60;
	return (days ? days + '天' : '') + (hours ? hours + '小时' : '') + (month ? month + '分钟' : '');
}

// 新闻类资讯文本超出省略号
var newContentFormat = function(str) {
	var newStr, flag;
	if (str.length > 78) {
		newStr = str.substring(0, 70) + '......';
		flag = true;
	} else {
		newStr = str;
		flag = false;
	}
	return [newStr, flag]
}

// 跳转
var navTo = function(url) {
	uni.navigateTo({
		url
	})
}
// 返回
var navBack = function() {
	// #ifdef APP-PLUS || MP-WEIXIN
	uni.navigateBack()
	// #endif
	// #ifdef H5
	window.history.back()
	// #endif
}

// 重定向
var closeNavTo = function(url) {
	uni.redirectTo({
		url
	})
}

/**
 * 判断运行在哪个平台
 */
function whichApp() {
	return new Promise((resolve, reject) => {
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				console.log('运行Android上')
				resolve(1)
				break;
			case 'ios':
				console.log('运行iOS上')
				resolve(2)
				break;
			default:
				console.log('运行在开发者工具上')
				break;
		}
	})
}


/**
 * 刷新页面
 */
function refrashPage(){
	let pages = getCurrentPages();
	let page = pages[pages.length - 1];
	page.onLoad()
}


/**
 * 上一个页面
 * @param {Object} beforTwo  上上个页面
 */
function getBeforePage(beforTwo) {
	const that = this;
	var pages = getCurrentPages(); //当前页面栈  
	var beforePage;
	if (pages.length > 1) {
		beforePage = beforTwo ? pages[pages.length - 3] : pages[pages.length - 2]; //获取上一个页面实例对象  
	}
	return beforePage;

}



// 弹窗
var uniMsg = function(msg, type) {
	if (type == 'success') {
		uni.showToast({
			icon: 'success',
			title: msg,
			duration: 2000
		})
	} else if (type == 'error') {
		uni.showToast({
			icon: '',
			title: msg,
			duration: 2000
		})
	} else {
		uni.showToast({
			icon: 'none',
			title: msg,
			duration: 2000
		})
	}
}

// 获取form表单值
var getFomrValue = function(t, paramArr) {
	var formDatas = paramArr.map((item) => {
		return t.$refs[item.ref][0].returnVal()
	})
	return formDatas
}


var isOpenGps = function() {
	return new Promise((resolve, reject) => {
		let system = uni.getSystemInfoSync(); // 获取系统信息
		console.log(JSON.stringify(system));
		if (system.platform === 'android') { // 判断平台
			var context = plus.android.importClass("android.content.Context");
			var locationManager = plus.android.importClass("android.location.LocationManager");
			var main = plus.android.runtimeMainActivity();
			var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
			if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {
				uni.showModal({
					title: '提示',
					content: '请打开定位服务功能',
					showCancel: false, // 不显示取消按钮
					success() {
						if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {
							var Intent = plus.android.importClass('android.content.Intent');
							var Settings = plus.android.importClass('android.provider.Settings');
							var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
							main.startActivity(intent); // 打开系统设置GPS服务页面
						} else {
							resolve(1)
						}
					}
				});
			}
		}
	})
}


// 定位
var getCity = function() {
	return new Promise((resolve, reject) => {
		if (checkPermission) {
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				success: function(res) {
					resolve(res);
				},
				fail(err) {
					reject(err)
				}
			});
		}
	})
}


/**
 * 手动定位
 */
var changeCity = function() {
	return new Promise((resolve, reject) => {
		isOpenGps().then(res => {
			if (res) {
				uni.chooseLocation({
					success: function(res) {
						resolve(res);
					},
					fail(err) {
						reject(err)
					}
				});
			}
		})
	})
}


// 获取经纬度
function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}
	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)
	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

// 选择地点
var chooseLocation = function() {
	return new Promise((resolve, reject) => {
		uni.chooseLocation({
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	});
}

var checkPermission = async function(code) {
	let type = code ? code - 1 : this.sourceTypeIndex;
	let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
		await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
			'android.permission.READ_EXTERNAL_STORAGE');
	if (status === null || status === 1) {
		status = 1;
	} else {
		uni.showModal({
			content: "没有开启权限",
			confirmText: "设置",
			success: function(res) {
				if (res.confirm) {
					permision.gotoAppSetting();
				}
			}
		})
	}

	return status;
}

// 选择媒体文件
function chooseImage(len) {
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			sourceType: ['camera', 'album'],
			sizeType: ['compressed', 'original'],
			count: len,
			success: (res) => {
				console.log(res.tempFilePaths);
				resolve(res.tempFilePaths);
			},
			fail: (err) => {
				// #ifdef APP-PLUS
				if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
					checkPermission(err.code);
				}
				// #endif
			}
		})
	})
}


//图片转base64
function urlTobase64(url) {
	
	// #ifdef APP-PLUS
	return new Promise((resolve, reject) => {  
	        plus.zip.compressImage({  
	          src: url,  
	          dst: `_doc/temp/${+new Date()}.jpg`,  
	          quality: 70,  
	        },  
	        ({ target, size }) => {  
	          plus.io.resolveLocalFileSystemURL(target, (file) => {  
	            const fileReader = new plus.io.FileReader();  
	            fileReader.readAsDataURL(file);  
	            fileReader.onloadend = ({ target: { result } }) => {  
	              resolve(result);  
	            };  
	          });  
	        },  
	        (e) => {  
	          reject(e);  
	        });  
	      });  
	// #endif
	
	
	// #ifndef APP-PLUS
	return new Promise((resolve, reject) => {
		var toBase64Url;
		uni.request({
			url: url,
			method: 'GET',
			responseType: 'arraybuffer',
			success: res => {
				let base64 = uni.arrayBufferToBase64(res.data); //把arraybuffer转成base64
				var toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
				resolve(toBase64Url);
			},fail:err=>{
				console.log('转base64--error--'+JSON.stringify(err));
			}
		});
	})
	// #endif
}

/**
 * 预览图片
 * @param {String} e 当前图片的data-src
 * @param {Array} arr 要预览的图片数组
 * @param {Number} i 要预览的图片索引
 */
function previewImage(e, arr, i) {
	// #ifdef H5
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		var jweixin = require('jweixin-module');
		jweixin.previewImage({
			current: arr[i], // 当前显示图片的http链接
			urls: arr // 需要预览的图片http链接列表
		});
	} else {
		uni.previewImage({
			current: e,
			urls:arr
		});
	}
	// #endif

	// #ifndef H5
	uni.previewImage({
		current: e,
		urls: arr,
		indicator:'default'
	})
	// #endif

}



/**
 * 删除数组的某一项
 * @param {Object} arr 需要操作的数组
 * @param {Object} key 需要对比的key
 * @param {Object} val 需要对比的值
 */
function deleteArrIndex(arr, key, val) {
	return arr.splice(arr.findIndex(item => item[key] === val), 1);
}


// 是否登陆
function isLogin() {
	return new Promise((resolve, reject) => {
		if (uni.getStorageSync('accesstoken')) {
			resolve(1);
		} else {
			console.log('没有登陆');
			navTo('/pages/package_other/login')
		}
	})
}


// 跳转至的登陆页
function toLoginPage() {
	uni.navigateTo({
		url:'/pages/package_other/login'
	})
}


/**
 * app 分享
 * type:   :    0:图文   1：纯文字    2：纯图片    3：音乐    4：视频     5:小程序
 * scene   :    WXSceneSession:分享到聊天界面     WXSenceTimeline:分享到朋友圈     WXSceneFavorite:分享到微信收藏
 */
function shareYzkkToWx(option) {
	return new Promise((resolve, reject) => {
		let sceneList = ['WXSceneSession', 'WXSenceTimeline', 'WXSceneFavorite']
		uni.share({
			provider: "weixin",
			scene: sceneList[option.scene],
			type: option.type || 0,
			href: option.link,
			title: option.title,
			summary: option.desc,
			imageUrl: option.shareImg || '',
			success: function(res) {
				console.log("success:" + JSON.stringify(res));
				resolve(res)
			},
			fail: function(err) {
				console.log("fail:" + JSON.stringify(err));
				reject(err)
			}
		});
	})
}

/**
 * 数组去掉重复项    ['aa','b','c','cc','db','e'] ， ['c', 'b']  ===>  ["aa", "cc", "db", "e"]
 * @param {Object} a  ['aa','b','c','cc','db','e']
 * @param {Object} b  ['c', 'b']
 */
function noSame(a,b){
    return a.filter(c => b.findIndex(d => d === c) === -1)
}



module.exports = {
	shareYzkkToWx,
	urlTobase64,
	isLogin,
	timeFormat,
	numberToDate,
	DateDiff,
	newContentFormat,
	navTo,
	navBack,
	closeNavTo,
	getFomrValue,
	uniMsg,
	getCity,
	formatLocation,
	chooseLocation,
	chooseImage,
	previewImage,
	deleteArrIndex,
	whichApp,
	getBeforePage,
	changeCity,
	refrashPage,
	toLoginPage,
	noSame
}
