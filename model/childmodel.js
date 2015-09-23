/** 
 * Filename: childmodel.js
 * Date: 2015/09/23 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var model = require("./model.js")
var sqlhelper = require('../func/sql.js')
var sys = require("../func/sys.js")


var tb = sys.clone(model);

tb.tablename = "";
tb.father = {
	tablename:'',
	linkfield:''
}

tb.getwithfather = function (childtablesql,fields,fatherfields,callback){
	if (childtablesql!='') {childmodel+=' and '};
	var sql = 'SELECT '+fields+','+tb.father.linkfield+' FROM '+this.tablename+
				', (SELECT '+fatherfields+' FROM '+this.father.tablename+' ) temptable'+tb.father.tablename+this.tablename+' '+
				' WHERE 'childtablesql+this.tablename+'.'+this.father.linkfield+' = temptable'+tb.father.tablename+this.tablename+'.id;';
	sqlhelper(['USE '+global.conf.dbname+';',sql],[,callback]);
}

tb.getonewithfather = function  (id,fields,fatherfields,callback) {
	this.getwithfather('id = '+id,fields,fatherfields,callback);
}

tb.getallwithfather = function (fields,fatherfields,callback){
	this.getwithfather('',fields,fatherfields,callback);
}

module.exports = tb;