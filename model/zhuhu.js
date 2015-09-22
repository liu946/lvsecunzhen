/** 
 * Filename: zhuhu.js
 * Date: 2015/09/22 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var model = require("./model.js")
var sqlhelper = require('../func/sql.js')
var sys = require("../func/sys.js")

var tb = sys.clone(model);

tb.tablename = "ZhuHu";

module.exports = tb;