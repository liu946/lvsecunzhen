
var sqlhelper = require('../func/sql.js')
var sys = require("../func/sys.js")

var model = {
	tablename: "", // need to rewrite

	generatedb:function (callback) {
		// create db
		var cdbsql = "CREATE DATABASE IF NOT EXISTS "+global.conf.dbname+" DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
		sqlhelper.exsqllist([cdbsql],[callback]);
	},
	generatetable:function (createsql,createcallback) {
		console.log('[Model] Generating table in '+global.conf.dbname);
		sqlhelper.exsqllist(["USE "+global.conf.dbname+";",createsql],[,createcallback])
	}

}

module.exports = model;