/** 
 * Filename: input.js
 * Date: 2015/09/21 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var express = require('express');
var router = express.Router();
var field = require('../conf/fielddef.js')
var sqlhelper = require('../func/sql.js')
var sys = require('../func/sys.js')
/* GET home page. */
// 获得项类型
router.get('/field',function (req, res, next) {
	res.json(field);
})
// 列表页面
router.get('/index/:modelname',function(req,res,next){
	res.render('list'+req.params.modelname);
})

// 保存数据
router.post('/update/:modelname',function(req ,res ,next){
	var model = sys.M(req.params.modelname);
	model.update(req.body.id,req.body,function(){
		res.send('OK');
	});
})

// 获得编辑页面
router.get('/edit/:modelname',function(req ,res ,next){
	res.render('edit'+req.params.modelname)
})

// 获得对应表格数据列表json
router.get('/get/:modelname',function (req, res, next){
	var model = sys.M(req.params.modelname);
	model.getall(function (row,field){
		res.json(row);
	})
})
// 获得对应表格数据列项json
router.get('/get/:modelname/:id',function(req ,res ,next){
	var model = sys.M(req.params.modelname);
	model.getitem(req.params.id,'*',function (obj){
		res.json(obj);
	});
})

module.exports = router;
