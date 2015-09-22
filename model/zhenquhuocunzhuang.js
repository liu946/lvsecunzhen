var model = require("./model.js")
var sqlhelper = require('../func/sql.js')
var sys = require("../func/sys.js")


var tb = sys.clone(model);

tb.tablename = "ZhenQuHuoCunZhuang";

module.exports = tb;