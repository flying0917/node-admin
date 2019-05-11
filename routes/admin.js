var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆页面' ,path:__dirname+"publish"});
});

router.get('/api/login',function(req,res,next){
});
module.exports = router;
