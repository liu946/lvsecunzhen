
var sys = {
	clone:function(obj) {
		var _f = function() {};
		//这句是原型式继承最核心的地方，函数的原型对象为对象字面量
		_f.prototype = obj;
		return new _f;
	}
}

module.exports = sys;