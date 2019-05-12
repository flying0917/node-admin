var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

var tokenConfig = require('./public/util/token');
//允许跳过登陆配置
var allowConfig = require('./config/index').allow;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/static', express.static(__dirname + '/public'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// 使用 session 中间件
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: true, // 是否保存未初始化的会话
  cookie : {
    maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  },
}));

app.all('*', function(req, res, next) {
  //跨域
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");//当前段允许携带cookie不能用* 要用对应的域
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials',true);//带上cookie
  res.header("X-Powered-By", ' 3.2.1');
  if(req.body.isajax||req.query.isajax)
  {
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  else
  {

    var mimeType = {
      '.js':'text/javascript',
      '.html':'text/html',
      '.css':'test/css',
      '.ico':'image/x-icon',
      "":'text/html'
    }
    //res.header("Content-Type", mimeType[path.extname(req.url)]+";charset=utf-8");
    res.header("Content-Type", "text/html;charset=utf-8");
  }
  if(req.method === 'OPTIONS') {
    //让options请求快速返回
    res.sendStatus(200);
  } else {
    //跳过登陆
    if(!allowConfig[req.path])
    {
      next();
    }
    //登陆判断
    else if(req.headers.authorization&&tokenConfig.checkToken(req.headers.authorization))
    {
      next();
    }
    else if(req.session.islogin)
    {
      next();
    }
    //登陆提示
    else
    {
      if(req.body.isajax||req.query.isajax)
      {
        var responseData={
          isSuccess:false,
          message:"请登录",
          code:-1
        };
        //设置响应状态200 并返回登陆提示
        res.status(401).json(responseData);
      }
      else
      {
        res.location('/admin/login');
        //res.render('login', { title: '登陆页面' ,path:__dirname+"publish"});
        return ;
      }
    }

  }
});


//app.use(express.static(path.join(__dirname, 'public')));







app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
