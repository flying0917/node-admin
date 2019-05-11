/**
 * email
 * 创建于
 * created by flying0917
 **/
var nodemailer  = require('nodemailer');
var emailConfig= require('../../config/index').email;
var mailTransport = nodemailer.createTransport({
    host : emailConfig.host,
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    auth : {
        user : emailConfig.email,
        pass : emailConfig.pass
    },
});

module.exports=mailTransport;
