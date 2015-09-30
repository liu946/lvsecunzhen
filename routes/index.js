var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '绿色村镇体系数据录入系统' });
});

module.exports = router;
