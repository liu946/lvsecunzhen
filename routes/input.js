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


router.get('/field',function (req, res, next) {
	res.json(field);
})

router.post('/update/:modelname/:id',function(req ,res ,next){

	var model = sys.M(req.params.modelname);
	model.update(req.params.id,req.body,function(){
		res.render('OK');
	});
})

router.get('/edit/:modelname/:id',function(req ,res ,next){
	res.render('edit'+req.params.modelname,{ id: req.params.id})
})

router.get('/new',function(req ,res ,next){
	res.send('OK')
})

router.get('/get/:id',function(req ,res ,next){

})

module.exports = router;
