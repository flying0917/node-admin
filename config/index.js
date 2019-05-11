/**
 * 描述
 * 创建于
 * created by flying0917
 **/
const config= {
    //邮箱配置
    email:{
        host:"smtp.qq.com",
        email:"1502424388@qq.com",
        pass:"cfvowqoswbeihfea"
    },
    //数据库配置
    db: {
        ip: "localhost",
        port: "27017",
        name: "root",
        pwd: "ak123456",
        authSource: "admin",
        dbname: "admin"
    },
    //token配置
    token:{
        timeout:900000
    },
    //密码盐配置
    sale:{
        salt:"flying0917"//密码加盐
    },
    //跳过登陆
    allow:{
        "/users/getEmailCode":true,
        "/users/register":true,
        "/users/login":true,
        "/admin/login":true,
        "/stylesheets/login.css":true,
        "/stylesheets/style.css":true
    }
}

module.exports= config;
