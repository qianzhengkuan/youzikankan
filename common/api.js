const utils = require('./http.js');
// const http = "http://39.98.119.186:8082";
// const http_no_v = "http://admin.youzikankan.com/api/";

// 正式
const http_no_v = "https://www.youzikankan.com/api/";
const http = "https://www.youzikankan.com/api/v1/";

// 测试
// const http_no_v = "http://testfas.youzikankan.com/api/";
// const http = "http://testfas.youzikankan.com/api/v1/"; 
 
module.exports = { 
  http: http,
  
  myReleaseDel: function (data, config = {}) { //删除我的发布
    return utils.postRequest(
      http + 'myReleaseDel',
      data, 
      config
    );
  },
  
  
  
  getdayranking: function (data, config = {}) { //获取每日点击次数排行
    return utils.getRequest(
      http + 'get-day-ranking/'+data.page,
      data,
      config
    );
  },
  
  
  setRanking: function (data, config = {}) { //保存文章点击次数
    return utils.postRequest(
      http + 'set-ranking',
      data, 
      config
    );
  },
  
  
  jumpList: function (data, config = {}) { //跳转对应 商会 || 宗祠
    return utils.postRequest(
      http + 'jump-list',
      data, 
      config
    );
  },
  
  
  getAppImageReple: function (data, config = {noLogin:true}) { //移动端文章详情页获取封面图
    return utils.getRequest(
      http + 'getAppImageReple/'+data.id,
      data,
      config
    );
  },
  
  setNewsPublishImage: function (data, config = {}) { //文章发布缩略图上传
    return utils.postRequest(
      http + 'setNewsPublishImage',
      data, 
      config
    );
  },
  
  setNewsPublish: function (data, config = {}) { //新闻发布接口
    return utils.postRequest(
      http + 'setNewsPublish',
      data, 
      config
    );
  },
  
  getNewsCategory: function (data, config = {}) { //获取新闻类型
    return utils.getRequest(
      http + 'getNewsCategory',
      data,
      config
    );
  },
  
  editorUploadImage: function (data, config = {}) { //得到分文本编辑器上传图片
    return utils.postRequest(
      http + 'editorUploadImage',
      data, 
      config
    );
  },
  getSignPackage: function (data, config = {}) { //得到分享签名
    return utils.postRequest(
      http_no_v + 'getSignPackage',
      data, 
      config
    );
  },
  weixinLogin: function (data, config = {}) { //微信登陆
    return utils.postRequest(
      http + 'weixinLogin',
      data,
      config
    );
  },
  getIndexColumn: function (data, config = {}) { //资讯栏目
    return utils.getRequest(
      http + 'getIndexColumn',
      data,
      config
    );
  },
  upUserImage: function (data, config = {}) { //修改用户头像
    return utils.postRequest(
      http + 'upUserImage',
      data,
      config
    );
  },
  upUser: function (data, config = {}) { //修改用户资料
    return utils.postRequest(
      http + 'upUser',
      data,
      config
    );
  },
  upPwd: function (data, config = {}) { //修改密码
    return utils.postRequest(
      http + 'upPwd',
      data,
      config
    );
  },
  getTempleJoinStatus: function (data, config = {noLoginCanSee:true}) { //寺庙入驻状态
    return utils.getRequest(
      http + 'getTempleJoinStatus',
      data,
      config
    );
  },
  setTempleJoinID: function (data, config = {}) { //寺庙入驻身份证上传
    return utils.postRequest(
      http + 'setTempleJoinID',
      data,
      config
    );
  },
  setTempleJoin: function (data, config = {}) { //寺庙入驻
    return utils.postRequest(
      http + 'setTempleJoin',
      data,
      config
    );
  },
  getAllNewList: function (data, config = {}) { //首页资讯
    return utils.postRequest(
      http + 'getNewsList',
      data,
      config
    );
  },
  getNewsList: function (data, config = {}) { //首页推荐
    return utils.getRequest(
      http + 'getRecommendList/'+data.page,
      data,
      config
    );
  },
  getHotList: function (data, config = {}) { //首页热门新闻
    return utils.getRequest(
      http + 'getHotList/'+data.page,
      data,
      config
    );
  },
  getNewsSearch: function (data, config = {}) { //首页搜索
    return utils.postRequest(
      http + 'getNewsSearch/'+data.page,
      data,
      config
    );
  },
  getVideoList: function (data, config = {}) { //首页视频列表
    return utils.postRequest(
      http + 'getVideoList/'+data.page,
      data,
      config
    );
  },
  getPictureList: function (data, config = {}) { //首页图片列表
    return utils.postRequest(
      http + 'getPictureList/'+data.page,
      data,
      config
    );
  },
  getPictureDetail: function (data, config = {noLogin:true}) { //首页图片详情
    return utils.getRequest(
      http + 'getPictureDetail/'+data.id,
      data,
      config
    );
  },
  getNewsInfo: function (data, config = {noLogin:true}) { //资讯详情
    return utils.getRequest(
      http + 'getNewsDetail/'+data.id,
      data,
      config
    );
  },
  getChamberUser: function (data, config = {}) { //成员列表
    return utils.getRequest(
      http + 'getChamberUser/'+data.id,
      data,
      config
    );
  },
  getLoginChamberList: function (data, config = {noLoginCanSee:true}) { //获取商会列表，加入商会时候的选择列表
    return utils.getRequest(
      http + 'getLoginChamberList/'+data.page,
      data,
      config
    );
  },
  getVideoList: function (data, config = {}) { //获取视频列表
    return utils.postRequest(
      http + 'getVideoList/'+data.page,
      data,
      config
    );
  },
  getVideoDetail: function (data, config = {}) { //获取视频详情
    return utils.getRequest(
      http + 'getVideoDetail/'+data.id,
      data,
      config
    );
  },
  getMyChamberList: function (data, config = {}) { //获取商会列表
    return utils.getRequest(
      http + 'getMyChamberList/'+data.page,
      data,
      config
    );
  },
  getChamberList: function (data, config = {}) { //获取商会列表
    return utils.getRequest(
      http + 'getChamberList/'+data.page,
      data,
      config
    );
  },
 getChamberJoin:function (data, config = {}){ //获取商会入驻状态
	 return utils.getRequest(
	   http + 'getChamberJoin',
	   data,
	   config
	 );
 },
  setChamberJoin: function (data, config = {}) { //商会入驻
    return utils.postRequest(
      http + 'setChamberJoin',
      data,
      config
    );
  },
  setChamberAdd: function (data, config = {}) { //加入商会
    return utils.postRequest(
      http + 'setChamberAdd',
      data,
      config
    );
  },
  getChamberDetail: function (data, config = {}) { //获取商会详情
    return utils.getRequest(
      http + 'getChamberDetail/'+data.id,
      data,
      config
    );
  },
  getChamberNewsList: function (data, config = {}) { //获取商会资讯列表
    return utils.getRequest(
      http + 'getChamberNewsList/'+data.page,
      data,
      config
    );
  },
  getActivityEnrollStatus: function (data, config = {}) { //获取商会活动报名状态
    return utils.getRequest(
      http + 'getActivityEnrollStatus/'+data.id,
      data,
      config
    );
  },
  activityEnroll: function (data, config = {}) { //商会活动报名
    return utils.postRequest(
      http + 'activityEnroll',
      data,
      config
    );
  },
 
  getChamberActivityList: function (data, config = {}) { //获取商会活动列表
    return utils.getRequest(
      http + 'getChamberActivityList/'+data.page,
      data,
      config
    );
  },
  getMyChamberActivity: function (data, config = {}) { //获取我的活动
    return utils.getRequest(
      http + 'getMyChamberActivity/'+data.page,
      data,
      config
    );
  },
  setCollectionActivity: function (data, config = {}) { //收藏商会活动
    return utils.postRequest(
      http + 'setCollectionActivity',
      data,
      config
    );
  },
  getCollectionActivity: function (data, config = {}) { //活动收藏状态
    return utils.getRequest(
      http + 'getCollectionActivity/'+data.id,
      data,
      config
    );
  },setCollectionNews: function (data, config = {}) { //收藏新闻
    return utils.postRequest(
      http + 'setCollectionNews',
      data,
      config
    );
  },
  getCollectionNews: function (data, config = {noLoginCanSee:true}) { //新闻收藏状态
    return utils.getRequest(
      http + 'getCollectionNews/'+data.id,
      data,
      config
    );
  },
  getChamberActivityDetail: function (data, config = {}) { //获取商会活动详情
    return utils.getRequest(
      http + 'getChamberActivityDetail/'+data.id,
      data,
      config
    );
  },    
  getTempleNewsPopularList: function (data, config = {}) { //寺庙热门资讯
    return utils.getRequest(
      http + 'getTempleNewsPopularList/'+data.page,
      data,
      config
    );
  },
  getTemplePopularList: function (data, config = {}) { //热门寺庙
    return utils.getRequest(
      http + 'getTemplePopularList/'+data.page,
      data,
      config
    );
  },
  getTempleNewsList: function (data, config = {}) { //寺庙新闻列表
    return utils.getRequest(
      http + 'getTempleNewsList/'+data.page,
      data,
      config
    );
  },
  zongciList: function (data, config = {}) { //寺庙列表
    return utils.getRequest(
      http + 'getTempleList/'+data.page,
      data,
      config
    );
  },
  getTempleNewsDetail: function (data, config = {}) { //寺庙详情
    return utils.getRequest(
      http + 'getTempleNewsDetail/'+data.id,
      data,
      config
    );
  },
  zongciInfo: function (data, config = {}) { //寺庙详情
    return utils.getRequest(
      http + 'getTempleDetail/'+data.id,
      data,
      config
    );
  },
  
  getComment: function (data, config = {}) { //获得评论列表
    return utils.getRequest(
      http + 'getComment/'+data.id,
      data,
      config
    );
  },
  getLoginComment: function (data, config = {noLoginCanSee:true}) { //获得登陆后的评论列表（显示点赞状态）
    return utils.getRequest(
      http + 'getLoginComment/'+data.id,
      data,
      config
    );
  },
  getCommentReply: function (data, config = {}) { //获得回复列表
    return utils.getRequest(
      http + 'getCommentReply/'+data.id,
      data,
      config
    );
  },
  
  replyComment: function (data, config = {}) { //回复评论
    return utils.postRequest(
      http + 'replyComment',
      data,
      config
    );
  },
  setComment: function (data, config = {}) { //评论
    return utils.postRequest(
      http + 'setComment',
      data,
      config
    );
  },
  setFabulousUser: function (data, config = {}) { //给评论点赞
    return utils.postRequest(
      http + 'setFabulousUser',
      data,
      config
    );
  },
 getFabulousUserCode: function (data, config = {}) { //获取用户点赞状态
    return utils.getRequest(
      http + 'getFabulousUserCode/'+data.id,
      data,
      config
    );
  },
  getLoginCommentReply: function (data, config = {noLoginCanSee:true}) { //二级回复的点赞（评论详情页点赞）
     return utils.getRequest(
       http + 'getLoginCommentReply/'+data.id,
       data,
       config
     );
   },
  setFabulousNews: function (data, config = {}) { //点赞新闻
    return utils.postRequest(
      http + 'setFabulousNews',
      data,
      config
    );
  },
  getFabulousNewsCode: function (data, config = {noLoginCanSee:true}) { //获取新闻点赞状态
    return utils.getRequest(
      http + 'getFabulousNewsCode/'+data.id,
      data,
      config
    );
  },
  setFollow: function (data, config = {}) { //关注作者
    return utils.postRequest(
      http + 'setFollow',
      data,
      config
    );
  },
  getFollowCode: function (data, config = {noLoginCanSee:true}) { //获取关注作者状态
    return utils.getRequest(
      http + 'getFollowCode/'+data.id,
      data,
      config
    );
  },
  
  myCollection: function (data, config = {}) { //获取我的收藏
    return utils.getRequest(
      http + 'myCollection/'+data.page,
      data,
      config
    );
  }, 
  myRelease: function (data, config = {}) { //获取我的发布
    return utils.getRequest(
      http + 'myRelease/'+data.page,
      data,
      config
    );
  }, 
  myFollow: function (data, config = {}) { //获取我的关注
    return utils.getRequest(
      http + 'myFollow/'+data.page,
      data,
      config
    );
  },
  
  myFans: function (data, config = {}) { //获取我的粉丝
    return utils.getRequest(
      http + 'myFans/'+data.page,
      data,
      config
    );
  },
  
  login: function (data, config = {}) { //用户登陆
    return utils.postRequest(
      http + 'login',
      data,
      config
    );
  },
  getUser: function (data, config = {}) { //获取用户信息
    return utils.getRequest(
      http + 'getUser',
      data,
      config
    );
  },
  phoneLogin: function (data, config = {}) { //手机号登陆
    return utils.postRequest(
      http + 'phoneLogin',
      data,
      config
    );
  },
  getCode: function (data, config = {}) { //获取验证码
    return utils.postRequest(
      http + 'getCode',
      data,
      config
    );
  }
  
}