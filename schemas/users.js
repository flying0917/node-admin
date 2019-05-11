/**
 * 描述
 * 创建于
 * created by flying0917
 **/
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    //用户名
    username: String,
    //密码
    password: String,
    //email
    email:String,
    //角色 0为应聘者 1为招聘者 2管理员
    roleid:Number
});
