/**
 * Created by liu on 15/12/8.
 */
var express = require('express');
var router = express.Router();
var calcualteField = require('../conf/calculateFields');
var calfield = require('../conf/calfield')
var sys = require('../func/sys');
var field = require('../conf/fielddef');
var GlobalAnalyzeData = null;
var GlobalOriginData = {};
var GlobalMutipleStat = {};// 保存中间值，每个字段全部数据的MAX ,MIN等
var GlobalAnalyzeScore = {};// 保存每个数据每项得分
var GlobalXiangzhenList = {};
var GlobalReduceList = [];
var GlobalidList;

function forEveryZField(cb) {
  for (var i in calfield) {
    for (var j in calfield[i].fields) {
      for (var k in calfield[i].fields[j].fields) {
        var ZField = calfield[i].fields[j].fields[k];
        cb(ZField);
      }
    }
  }
}

function getZdataOf(index, cb) {
  var model = sys.M('xiangzhen');
  var zSet = {};
  model.getWithChild(index, function (dataSet) {
    var calset = new calcualteField(dataSet);
    forEveryZField(function (ZField) {
      zSet[ZField.sign] = calset.get(ZField.sign);
    });
    GlobalOriginData[index.toString()] = calset.data;
    cb(zSet);
  },GlobalReduceList);
}

function calculateMiddleData() {
  forEveryZField(function (Zfield) {
    if (Zfield.hasOwnProperty('score')) {
      var MAX = null;
      var MIN = null;
      var SUM = 0;
      var NUM = 0;
      for (var i in GlobalAnalyzeData) {
        dataItem = GlobalAnalyzeData[i];

        SUM += dataItem[Zfield.sign];
        NUM++;
        if (MAX === null || dataItem[Zfield.sign] > MAX)
          MAX = dataItem[Zfield.sign];
        if (MIN === null || dataItem[Zfield.sign] < MIN)
          MIN = dataItem[Zfield.sign];
      }
      GlobalMutipleStat[Zfield.sign] = {MAX: MAX, MIN: MIN, SUM: SUM, NUM: NUM};
    }
  })
}

function calculateScore() {
  forEveryZField(function (Zfield) {
    if (Zfield.hasOwnProperty('score')) {
      var Max = GlobalMutipleStat[Zfield.sign].MAX;
      var Min = GlobalMutipleStat[Zfield.sign].MIN;
      for (var i in GlobalAnalyzeData) {
        var M = GlobalAnalyzeData[i][Zfield.sign];
        if (!GlobalAnalyzeScore.hasOwnProperty(i))GlobalAnalyzeScore[i] = {};
        GlobalAnalyzeScore[i][Zfield.sign] = null;
        for (var conclude in Zfield.score.judge) {
          if (conclude === 'def' || eval('(' + conclude + ')')) {
            if (GlobalAnalyzeScore[i] === undefined)GlobalAnalyzeScore[i] = {};
            GlobalAnalyzeScore[i][Zfield.sign] = eval('(' + Zfield.score.judge[conclude] + ')');
            break;
          }
        }
      }

    }
  })
}

function initialAnalyzeData(cb) {
  var model = sys.M('xiangzhen');
  model.getIdList(function (idList, list) {
    GlobalXiangzhenList = list;
    var SearchList = [];
    GlobalidList = idList;
    for (var i in idList) {
      GlobalReduceList[idList[i]] = {}
      GlobalReduceList[idList[i]].xiangzhen = list[i];
      GlobalReduceList[idList[i]].cunzhuang = [];
      SearchList.push((function (k) {
        return function (cb) {

          getZdataOf(idList[k], function (zSet) {
            GlobalAnalyzeData[k.toString()] = zSet;
            cb();
          });
        };
      })(i));
    }
    SearchList.push(cb);
    sys.syncexe(SearchList);
  })
}

router.get('/standerd', function (req, res, next) {
  res.render('standerd');
});

router.get('/origin/:id', function (req, res, next) {
  if (!GlobalAnalyzeData) {
    GlobalAnalyzeData = {};
    initialAnalyzeData(function () {
      calculateMiddleData();
      calculateScore();
      Percent(GlobalOriginData);
      return res.redirect(req.originalUrl);
    });
  } else {
    //return res.json(GlobalOriginData);
    return res.render('origin', {
      id: req.params.id,
      xiangzhenList: GlobalXiangzhenList,
      originData: GlobalOriginData[req.params.id],
      fields: field,
      reduceList: GlobalReduceList,
    });
  }
});

router.get('/get/zhenquhuocunzhuang/:id',function (req ,res ,next){
  var model = sys.M('zhenquhuocunzhuang');
  model.getitem(req.params.id,'*',function (obj){
    res.render('cundata', {
      reduceList: GlobalReduceList,
      id: req.params.id,
      fields: field['zhenquhuocunzhuang'],
      originData: obj,
    });
  });
});

function p_pct(dataList){
    if(dataList[0]){
      if(typeof(dataList[0])==='number'){
        return dataList.reduce(function(x,y){return x+y;},0);
      }else{
        var pct = {};
        for(var i in dataList){
          if(!pct.hasOwnProperty(dataList[i])){
            pct[dataList[i]]=0;
          }
          pct[dataList[i]]++;
        }
        for(var i in pct){
          pct[i]/=dataList.length;
        }
        return pct;
      }
    }
  return 0;
}

function Percent(data){
  for(var xid in data){
    for(var sign in data[xid]){
      if(sign[0]==='D'){
        GlobalOriginData[xid][sign] = p_pct(GlobalOriginData[xid][sign]);
      }
    }
  }
}

router.get('/:id', function (req, res, next) {
  if (!GlobalAnalyzeData) {
    GlobalAnalyzeData = {};
    initialAnalyzeData(function () {
      calculateMiddleData();
      calculateScore();
      return res.redirect(req.originalUrl);
    });
  } else {
    var index =  GlobalidList.indexOf(Number(req.params.id));
    return res.render('analyze', {
      id: req.params.id,
      xiangzhenList: GlobalXiangzhenList,
      origin: GlobalAnalyzeData[index],
      middle: GlobalMutipleStat,
      score: GlobalAnalyzeScore[index],
      calculateFields: calfield,
    });
  }
});

module.exports = router;
