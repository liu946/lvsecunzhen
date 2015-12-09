/** 
 * Filename: xiangzhen.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var model = require("./model.js");
var sqlhelper = require('../func/sql.js');
var sys = require("../func/sys.js");
var zhenqudb = require('./zhenquhuocunzhuang');
var zhuhudb = require('./zhuhu');
var tb = sys.clone(model);

tb.tablename = "xiangzhen";
tb.getall = function (callback) {
	this.__proto__.getall.call(this,'id,ZhenMingChen',callback);
};

tb.getWithChild = function(id,cb){
	var dataSet = {};
	var bindingXiangZhen = function(results,fields){
		dataSet['xiangzhen'] = results;
	};
	var bindingZhenquHuoCunzhuang = function(results,fields){
		dataSet['zhenquhuocunzhuang'] = results;
		var zhenquIdList = [];
		for(var i in results){
			zhenquIdList.push(results[i].id);
		}
		sqlhelper.exsqllist([	"USE "+global.conf.dbname+";",
													'SELECT * FROM '+zhuhudb.tablename+
													' WHERE '+zhuhudb.father.linkfield+' IN ('+zhenquIdList.toString()+');'],
												[,bindingZhuHu]);
	};
	var bindingZhuHu = function(results,fields){
		dataSet['zhuhu'] = results;
		cb(dataSet);
	};
	sqlhelper.exsqllist([	"USE "+global.conf.dbname+";",
												'SELECT * FROM '+tb.tablename+' WHERE id='+id+';',
												'SELECT * FROM '+zhenqudb.tablename+ ' WHERE '+zhenqudb.father.linkfield+'='+id+';'],
											[,bindingXiangZhen,bindingZhenquHuoCunzhuang]);
};

module.exports = tb;