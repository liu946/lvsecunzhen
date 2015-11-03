/** 
 * Filename: model.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */


var sqlhelper = require('../func/sql.js')
var sys = require("../func/sys.js")
var datatype = require("../conf/fielddef.js")


var model = {
	tablename: "", // need to rewrite

	generatedb:function (callback) {
		// create db
		var cdbsql = "CREATE DATABASE IF NOT EXISTS "+global.conf.dbname+" DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
		sqlhelper.exsqllist([cdbsql],[callback]);
	},
	generatetable:function (createcallback) {
		console.log('[Model] Generating table "' +this.tablename+ '" in '+global.conf.dbname);

		var createsql = "CREATE TABLE IF NOT EXISTS "+this.tablename;
		createsql +="("+
			"id int(11) not null primary key auto_increment"+
			this.decodetype(datatype[this.tablename.toLocaleLowerCase()]["childfield"])
			+");";
		sqlhelper.exsqllist(["USE "+global.conf.dbname+";",createsql],[,createcallback])
	},

	// only for this project
	decodetype:function (data) {
		var str='';
			for (var j = 0; j < data.length ; j++) {
				if (data[j]['datatype']=='null') continue;
				str+=',';
				str+=data[j]['field']+' ';
				switch(data[j]['datatype'])
				{

					case 'select1-5':
						str+="varchar(20) ";
					break;
					case 'bool':
						str+="int(4) ";
					break;
					case 'selectint(11)':
						str+="int(11) ";
					break;
					case 'jsonstr':
					case 'selectmult':
						str+='varchar(2048) ';
					break;
					default:
						str+=data[j]['datatype']+" ";
					break;
				}
				if (data[j].hasOwnProperty('default')) {
					str+="NOT NULL DEFAULT '"+data[j]['default']+"' ";
				};
				var comment = data[j]["fieldname"];
				if (data[j].hasOwnProperty('unit')) {
					comment+='--单位（'+data[j]['unit']+'）';
				};
				str+="COMMENT '"+comment+"' ";
			};
		return str;
	},
	insert:function (obj,callback) {
		var field = [];
		var value = [];
		for (i in obj) {
			field.push(i);
			value.push(obj[i]);
		};
		var sql = "INSERT INTO "+this.tablename+" ("+field.toString()+") VALUES ("+value.toString()+");";
		var getmaxsql = "select max(id) as id from "+this.tablename+";";
		var maxhandle = function(rows, fields){
				callback(rows[0].id);
			}
		sqlhelper.exsqllist(['USE '+global.conf.dbname,sql,getmaxsql],[,,maxhandle])
	},
	update:function  (id,obj,callback) {
		// console.log(this.tablename+' update')
		if (obj.hasOwnProperty('id')) {
			delete obj.id;
		};

		var field = "UPDATE "+this.tablename +" SET ";

		for (var i in obj) {
			field += " "+i+" = '"+obj[i]+"',";
		};

		field = field.substr(0,field.length-1);
		field += " WHERE `id` = "+id+" ;";

		sqlhelper.exsqllist(['USE '+global.conf.dbname,field],[,callback])

	},
	getitem:function(id,field,callback){
		// 注入危险
		if (field=='' || typeof(field)== 'undefined') {field='*'};
		sqlhelper.exsql('SELECT '+field+' FROM '+global.conf.dbname+"."+this.tablename+" WHERE `id`="+id+" LIMIT 1 ;",function(rows, fields){
			callback(rows[0]);
		});
	},
	getall:function (field,callback) {
		// body...
		if (field=='' || typeof(field)== 'undefined') {field='*'};

		sqlhelper.exsql('SELECT '+field+' FROM '+global.conf.dbname+"."+this.tablename+" ;",function(rows, fields){
			callback(rows);
		});
	},
	insertnull:function(callback){
			var insertsql = "insert into "+this.tablename+" () values ();";
			var getmaxsql = "select max(id) as id from "+this.tablename+";";
			var maxhandle = function(rows, fields){
					callback(rows[0].id);
				}
			sqlhelper.exsqllist(["USE "+global.conf.dbname+";",insertsql,getmaxsql],[,,maxhandle]);
	}
}

module.exports = model;