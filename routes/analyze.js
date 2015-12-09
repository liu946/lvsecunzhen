/**
 * Created by liu on 15/12/8.
 */
var express = require('express');
var router = express.Router();
var calcualteField = require('../conf/calculateFields');
var calfield = require('../conf/calfield')
var sys = require('../func/sys');


router.get('/:id', function(req, res, next) {
  var model = sys.M('xiangzhen');
  model.getWithChild(req.params.id,function(dataSet){
    var calset = new calcualteField(dataSet);
    res.json(calset.get('Z4'));
  });
});

module.exports = router;