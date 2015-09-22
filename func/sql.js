/** 
 * Filename: sql.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */


var sql = {
	// 单次链接，适合只执行一句的sql
	exsql : function (sqlstr,handle) {
		console.log('[SQL] '+sqlstr);
		var mysql      = require('mysql');
		var connection = mysql.createConnection({
			host     : global.conf.dbserver,
			user     : global.conf.dbuser,
			password : global.conf.dbpwd
		});
		//创建连接
		connection.connect();

		connection.query(sqlstr, function(err, results, fields) {
			if (err) {
				throw err;
			}
			if (typeof(handle) != "undefined") {
		  	//console.log(typeof(handle))
		  	handle(results,fields);
		  };
		});
		connection.end();
	},
	// 顺序回调执行函数
	// connection 用于递归执行，传递链接，调用时不需填写
	exsqllist : function (sqlstrlist,handlerlist,connection){
		// 新建链接
		if (typeof(connection) == "undefined") {
			var mysql      = require('mysql');
			connection = mysql.createConnection({
				host     : global.conf.dbserver,
				user     : global.conf.dbuser,
				password : global.conf.dbpwd
			});
			connection.connect();
		};
		sqlstr = sqlstrlist.shift();
		handle = handlerlist.shift();
		// close connection ( when list is [] )
		if (typeof(sqlstr) == "undefined" ) {
			connection.end();
			return;
		};

		// exe sql
		console.log('[SQL] '+sqlstr);
		connection.query(sqlstr, function(err, results, fields) {
			if (err) {
				throw err;
				return;
			}
			if (typeof(handle) != "undefined") {
				// callback
				handle(results,fields);
				// reduce next sql	
			};
			sql.exsqllist(sqlstrlist,handlerlist,connection);
		});

	}

}

module.exports = sql;