var fs = require('fs');
var num_cun = require('./cun');
var cun_num = {}; 
for (var i in num_cun ){
	cun_num[num_cun[i]] = i;
}
var filename = '';
var field = require('../conf/fielddef.js')['zhuhu'].childfield;
var namefield = {};
for(var i in field){
  namefield[field[i].fieldname] = field[i];
}
fs.readdir('./data',function(err,arr){
  for(var file = 0;file<arr.length;file++){
    fs.readFile('./data/'+arr[file], 'utf8', function (err, indata) {
      if (err) throw err;
      var data = indata.split('\r\n').map(function(x){return x.split('\t')});

      for (var line = 1; line < data.length ; line ++){
        var fieldlist = [];
        var valuelist = [];
        for(var item = 0; item<data[line].length;item++){
          if(data[line][1]===''){
            console.log(JSON.stringify(data[line]));
          }
          var tkvpair;
          tkvpair = getNameAndValue(data[0][item], data[line][item]);
          fieldlist.push(tkvpair[0]);
          valuelist.push(tkvpair[1]);
        }
        var str = 'INSERT INTO `zhuhu` (`'+ fieldlist.join('`,`') + '`) VALUES ("'+ valuelist.join('","') + '");';
        console.log(str);
      }
    });
  }
});


function getNameAndValue(itemField,data){
  if(!(itemField in namefield)){
    itemField = itemField.slice(1,itemField.length);
  }
  if(itemField === '所属村庄或镇区'){
      //if(! cun_num[data])
      //  console.log(data+":"+cun_num[data]);
    return ['SuoShuCunZhuangHuoZhenQu' ,cun_num[data]]
  }else{

    var value = '';
    switch (namefield[itemField]['datatype']){
      case 'select1-5':
        value = data === '' ? '' : namefield[itemField]['options'][data];
        break;
      case 'selectmult':
        data.split('').map(function(x){
          if(typeof (x) !== 'string')
            value += ( namefield[itemField]['options'][x.toString()] + ',');
        });
        break;
      default :
        value = data;
    }
    return [namefield[itemField]['field'],value];
  }
}

function encode(str) {
  return str.replace(/[^\u0000-\u00FF]/g, function($0) {
    return escape($0).replace(/(%u)(\w{4})/gi, "\\u$2")
  });
}