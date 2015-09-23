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

router.get('/:modelname',function (req, res, next){
	var model = sys.M(req.params.modelname);
	model.getall(function (row,field){
		res.json(row);
	})
})

router.get('/field',function (req, res, next) {
	res.json(field);
})

router.post('/update/:modelname',function(req ,res ,next){
	var model = sys.M(req.params.modelname);
	model.update(req.body.id,req.body,function(){
		res.render('OK');
	});
})

router.get('/edit/:modelname',function(req ,res ,next){
	res.render('edit'+req.params.modelname)
})

router.get('/get/:modelname/:id',function(req ,res ,next){
	var model = sys.M(req.params.modelname);
	model.getitem(req.params.id,'*',function (obj){
		res.json(obj);
	});
})

module.exports = router;
