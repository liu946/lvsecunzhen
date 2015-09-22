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
	}
}

module.exports = sys;