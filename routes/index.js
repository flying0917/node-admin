var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(res.sission.islogin)
  res.render('cui-back', { title: 'Express' ,path:__dirname+"publish"});
});

module.exports = router;
