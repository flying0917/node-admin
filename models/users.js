/**
 * 描述
 * 创建于
 * created by flying0917
 **/
var mongoose = require('mongoose');

var userSchema = require('../schemas/users');

module.exports = mongoose.model('User',userSchema,"User");
