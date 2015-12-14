var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '绿色村镇体系数据录入系统' });
});



var input = require('./input');
var dbgenerator = require('./dbgenerator');
var analyze = require('./analyze');


var routes = function(app){
  app.use('/', router);
  app.use('/input', input);
  app.use('/dbgenerator', dbgenerator);
  app.use('/analyze',analyze);
}
module.exports = routes;
