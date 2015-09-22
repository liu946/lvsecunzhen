/** 
 * Filename: dbgenerator.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

 var express = require('express');
 var router = express.Router();
 var sqlhelper = require('../func/sql.js')

 var model = require('../model/model.js') 
 var xiangzhen = require('../model/xiangzhen.js')
 var zhenquhuocunzhang = require('../model/zhenquhuocunzhuang.js')
 var zhuhu = require('../model/zhuhu.js')

 /* Generator the db and table */
 router.get('/', function(req, res, next) {
 	var ans = "";
 	var sqlappend = function (row) {
 		ans+=JSON.stringify(row);
 	}
 	model.generatedb(sqlappend);
 	xiangzhen.generatetable(sqlappend);
 	zhenquhuocunzhang.generatetable(sqlappend);
 	zhuhu.generatetable(function (row) {
 		ans+=JSON.stringify(row);
 		res.render('generator', { sql: ans });	
 	});
 	
 });

 module.exports = router;

