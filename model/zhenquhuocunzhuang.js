/** 
 * Filename: zhenquhuocunzhuang.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var childmodel = require("./childmodel.js")
var sqlhelper = require('../func/sql.js')
var sys = require("../func/sys.js")

var tb = sys.clone(childmodel);

tb.tablename = "zhenquhuocunzhuang";
tb.father = {
	tablename:'xiangzhen',
	linkfield:'SuoShuXiangZhen'
}
tb.getall = function (callback) {
	// body...
	this.getallwithfather('id,ZhenQuHuoCunZhuang,MingChen,ZhenMingChen','ZhenMingChen',callback);
}
module.exports = tb;