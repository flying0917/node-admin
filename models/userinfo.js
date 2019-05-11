/**
 * 描述
 * 创建于
 * created by flying0917
 **/
var mongoose = require('mongoose');

var userInfoSchema = require('../schemas/userinfo');

module.exports = mongoose.model('UserInfo',userInfoSchema,"UserInfo");
