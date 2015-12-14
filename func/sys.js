/** 
 * Filename: sys.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */




 var sys = {
 	clone:function(obj) {
 		var _f = function() {};
		//这句是原型式继承最核心的地方，函数的原型对象为对象字面量
		_f.prototype = obj;
		return new _f;
	},
	M:function(modelname){
		if (typeof(modelname) == "undefined") {
			modelname = 'model';
		};
		var model = require('../model/'+modelname+'.js');
		return model;
	},
	syncexe:function (cblist){
		if(cblist.length !== 0){
			var foo = cblist.shift();
			foo(function(){
				sys.syncexe(cblist);
			});
		}
	}
}

module.exports = sys;