/**
 * Created by liu on 15/12/8.
 */
var express = require('express');
var router = express.Router();
var calcualteField = require('../conf/calculateFields');
var calfield = require('../conf/calfield')
var sys = require('../func/sys');
var GlobalAnalyzeData = null;

var GlobalMutipleStat = {};// 保存中间值，每个字段全部数据的MAX ,MIN等
var GlobalAnalyzeScore = {};// 保存每个数据每项得分
var GlobalXiangzhenList = {};

function forEveryZField(cb){
  for(var i in calfield){
    for(var j in calfield[i].fields){
      for(var k in calfield[i].fields[j].fields){
        var ZField = calfield[i].fields[j].fields[k];
        cb(ZField);
      }
    }
  }
}
function getZdataOf(index,cb){
  var model = sys.M('xiangzhen');
  var zSet = {};
  model.getWithChild(index,function(dataSet){
    var calset = new calcualteField(dataSet);
    forEveryZField(function(ZField){
      zSet[ZField.sign] = calset.get(ZField.sign);
    })
    cb(zSet);
  });
}
function calculateMiddleData(){
  forEveryZField(function(Zfield){
    if(Zfield.hasOwnProperty('score')){
      var MAX = null;
      var MIN = null;
      var SUM = 0;
      var NUM = 0;
      for(var i in GlobalAnalyzeData){
        dataItem = GlobalAnalyzeData[i];

        SUM+=dataItem[Zfield.sign];
        NUM++;
        if(MAX===null || dataItem[Zfield.sign]>MAX)
          MAX=dataItem[Zfield.sign];
        if(MIN===null || dataItem[Zfield.sign]<MIN)
          MIN=dataItem[Zfield.sign];
      }
      GlobalMutipleStat[Zfield.sign] = {MAX:MAX,MIN:MIN,SUM:SUM,NUM:NUM};
    }
  })
}
function calculateScore(){
  forEveryZField(function(Zfield){
    if(Zfield.hasOwnProperty('score')){
      var Max = GlobalMutipleStat[Zfield.sign].MAX;
      var Min = GlobalMutipleStat[Zfield.sign].MIN;
      for(var i in GlobalAnalyzeData){
        var M = GlobalAnalyzeData[i][Zfield.sign];
        if(!GlobalAnalyzeScore.hasOwnProperty(i))GlobalAnalyzeScore[i]={};
        GlobalAnalyzeScore[i][Zfield.sign]=null;
        for(var conclude in Zfield.score.judge){
          if(conclude === 'def' || eval('('+conclude+')')){
            if(GlobalAnalyzeScore[i]===undefined)GlobalAnalyzeScore[i]={};
            GlobalAnalyzeScore[i][Zfield.sign] = eval('('+Zfield.score.judge[conclude]+')');
            break;
          }
        }
      }

      }
    })
}
function initialAnalyzeData(cb){
  var model = sys.M('xiangzhen');
  model.getIdList(function(idList,list){
    GlobalXiangzhenList = list;
    var SearchList = [];
    for(var i in idList){
      SearchList.push((function(k){
        return function(cb){
          getZdataOf(idList[k],function(zSet){
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


router.get('/:id', function(req, res, next) {
  if(!GlobalAnalyzeData){
    GlobalAnalyzeData={};
    initialAnalyzeData(function(){
      calculateMiddleData();
      calculateScore();
      return res.redirect(req.originalUrl);
    });
  }else{
    return res.render('analyze',{
      xiangzhenList:GlobalXiangzhenList,
      origin:GlobalAnalyzeData[req.params.id],
      middle:GlobalMutipleStat,
      score:GlobalAnalyzeScore[req.params.id],
      calculateFields:calfield
    });
  }
});

module.exports = router;