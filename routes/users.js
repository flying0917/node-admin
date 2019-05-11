var express = require('express');
var router = express.Router();
var User = require('../models/users');
var UserInfo = require('../models/userinfo');
var emailTransfer = require('../public/util/email');
var config = require('../config/index');
var emailConfig = config.email;
var tokenConfig = config.token;
var Token =  require('../public/util/token');
var crypto = require('crypto');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET 通过邮箱获取验证码*/
router.get('/getEmailCode',function(req, res, next){
  var email = req.query.email,
      responseData={
        code:0,
        isSuccess:false,
        message:""
      };
  if(!email)
  {
    responseData.code =1;
    responseData.message = '邮箱不能为空';
    res.json(responseData);
    return;
  }

  if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)))
  {
    responseData.code =2;
    responseData.message = '邮箱格式错误';
    res.json(responseData);
    return;
  }
  //验证码生成
  var code=""
  for(var x=0;x<6;x++)
  {
    code+=parseInt(Math.random()*(9+1),10)+"";
  }
  //发送验证码

  var options = {
    from        : '"flying0917" <'+emailConfig.email+'>',
    to          : '"'+email+'" <'+email+'>',
    // cc         : ''  //抄送
    // bcc      : ''    //密送
    subject        : '验证码',
    text          : '验证码：'+code,
    html           : '<h1>验证码：'+code+'</h1>',
  };
  emailTransfer.sendMail(options, function(err, msg){
    if(err){
      responseData.code =3;
      responseData.message = '获取验证码失败 err:'+err;
    }
    else {
      responseData.isSuccess=true;
      responseData.message = '获取成功';

      //设置cookie code
      req.session.code=code;
      req.session.save();
      console.log(req.session)
     /* res.cookie("code",code,{maxAge: 60000, httpOnly: true});*/

    }
    res.json(responseData);
    return;
  });


});

/* 登陆 当类型为0时密码登陆 当类型为1时验证码登陆*/
router.post('/login',function(req, res, next){
    var type = req.body.type,
      responseData= {
        code: 0,
        isSuccess: false,
        message: "",
        data:null
      };
    if(!type)
    {
      responseData.code=1;
      responseData.message="缺少参数：type";
      res.json(responseData);
      return ;
    }
  if(type==="0")
  {
    var username = req.body.username,
        password = req.body.password;
    User.findOne({
      username:username
    }).then(function(userInfo)
    {
      if(!userInfo)
      {
        responseData.code=2;
        responseData.message="没有找到用户";
        res.json(responseData);
        return;
      }
      //给密码加盐
      var md5 = crypto.createHash('md5'),
          saltPassword = password + ':' + config.sale.salt;
      password=md5.update(saltPassword).digest('hex');
      //判断密码
      if(userInfo.password===password)
      {
        var res_token=Token.createToken(userInfo,tokenConfig.timeout)
        responseData.isSuccess=true;
        responseData.message="登陆成功";
        responseData.data={
          token:res_token
        }
        res.json(responseData);
        return;
      }
    })
  }
  else//短信验证
  {
    var email = req.body.email,
        code=req.body.code;
    //email不能为空
    if(!email)
    {
      responseData.code=3;
      responseData.message="email不能空";
      res.json(responseData);
      return;
    }
    //验证码不能为空
    if(!code)
    {
      responseData.code=3;
      responseData.message="验证码不能空";
      res.json(responseData);
      return;
    }
    //session 保存的验证码
    var sessionCode=req.session.code;
    if(!sessionCode)
    {
      responseData.code=4;
      responseData.message="请先获取验证码";
      res.json(responseData);
      return;
    }

    User.findOne({
      email:email
    }).then(function(userInfo)
    {
      //找不到邮箱
      if(!userInfo)
      {
        responseData.code=1;
        responseData.message="没有找到邮箱";
        res.json(responseData);
        return;
      }
      var resInfo={
        username:userInfo.username,
        email:userInfo.email
      }
      //验证码不正确
      if(code!==req.session.code)
      {
        responseData.code=1;
        responseData.message="验证码不正确";
        res.json(responseData);
        return;
      }
      //创建token 给用户
        var res_token=Token.createToken(resInfo,tokenConfig.timeout)
        responseData.isSuccess=true;
        responseData.message="登陆成功";
        responseData.data={
          token:res_token
        }
        res.json(responseData);
        return;


    })
  }
});

/* GET users listing. */
router.post('/register', function(req, res, next) {
  var username = req.body.username,
      password = req.body.password,
      email = req.body.email,
      repassword = req.body.password2,
      code = req.body.code,
      responseData={
      code:0,
      isSuccess:false,
      message:""
    };
    console.log(req.body)
  //用户名是否为空；
  if(username === ''){
    responseData.code =1;
    responseData.message = '用户名不能为空';
    res.json(responseData);
    return;
  }

  //密码不能为空
  if(password === ''){
    responseData.code = 2;
    responseData.message = '密码不能为空';
    res.json(responseData);
    return;
  }

  //邮箱不能为空
  if(email === ''){
    responseData.code = 3;
    responseData.message = '邮箱不能为空';
    res.json(responseData);
    return;
  }

  //验证邮箱格式
  /*if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)))
  {
    responseData.code =4;
    responseData.message = '邮箱格式错误';
    res.json(responseData);
    return;
  }*/

  //两次密码要一样
  if(password !== repassword){
    responseData.code = 4;
    responseData.message = '两次密码不一样';
    res.json(responseData);
    return;
  }

  //验证码不能为空
  if(code==='')
  {
    responseData.code = 5;
    responseData.message = '验证码不能为空';
    res.json(responseData);
    return;
  }

  //验证验证码
  var cookieCode= req.session.code?req.session.code:"";
  console.log(code)
  console.log(cookieCode)
  if(parseInt(code)!==parseInt(cookieCode))
  {
    responseData.code = 6;
    responseData.message = '验证码不正确';
    res.json(responseData);
    return;
  }

  User.findOne({
    username:email
  }).then(function(userinfo){
    if(false&&userinfo){
      //表示有数
      responseData.code = 5;
      responseData.message = '该邮箱已经被注册';
      res.json(responseData);
      return;
    }else{
      //给密码加盐
      var md5 = crypto.createHash('md5'),
          saltPassword = password + ':' + config.sale.salt;
      password=md5.update(saltPassword).digest('hex');
      //表示没有数据
      var user = new User({
        username:username,
        password:password,
        email:email
      });
      user.save();
      var userInfo = new UserInfo({
        userid:user._id,
        email:email,
        username:username
      })
      return userInfo.save();
    }
  }).then(function(newUserinfo){
    console.log(newUserinfo)
    if(newUserinfo){
      responseData.isSuccess=true;
      responseData.message = '注册成功';
      res.json(responseData);
    }
  })
});

/*GET 登陆页面*/

module.exports = router;
