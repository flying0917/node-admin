/**
 * 描述
 * 创建于
 * created by flying0917
 **/
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    //用户名
    username: String,
    //性别
    sex: String,
    //真实姓名
    realname:String,
    //生日
    birthday:String,
    //头像
    headerimg:String,
    //用户id 关联users表
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
