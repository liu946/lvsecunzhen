/**
 * Created by liu on 15/12/7.
 */
var fields = require('./fielddef');
function getLastYearData(jsonStr){
  var jsonobj = JSON.parse(jsonStr);
  for(var i= 2016;i>1980;i--){
    if(jsonobj[i.toString()]){
      return jsonobj[i.toString()];
    }
  }
  throw 'No getable Value!';
};
function changeRate(jsonStr){
  var jsonobj = removeBlank(JSON.parse(jsonStr));
  var keys = Object.keys(jsonobj);
  var sum = 0;
  for(var i = 0;i<keys.length-1;i++){
    sum += (jsonobj[keys[i+1]]-jsonobj[keys[i]])/jsonobj[keys[i]];
  }
  return sum/(keys.length-1);
}
function removeBlank(jsonobj){
  for(var i in jsonobj){
    if(! (jsonobj[i]))
      delete jsonobj[i];
  }
  return jsonobj;
}
function div( array , value ){
  var c = 0;
  for(var i in array){
    if(array[i] === value)c++;
  }
  return c/array.length;
};
function sum(arr){
  return arr.reduce(function (p, c) {
    return p+c;
  },0);
};
function mul(a1,a2){
  a = [];
  if (typeof(a2)!=='object') {a2=[a2]};
  for(var i in a1){
    a.push(a1[i]*a2[i%a2.length]);
  }
  return a;
}
function avg(arr){
  return sum(arr)/(arr.length);
}


module.exports = function (dataSet) {
  this.data = {};
  this.get = function (key) {
    if (!this.data.hasOwnProperty(key)) {
      if (!this.hasOwnProperty(key))throw key + "()  is not in dataset!";
      this.data[key] = this[key]();
    }
    return this.data[key];
  };
  this.fieldPush = function (key, item) {

      if (!this.data.hasOwnProperty(key)) {
        this.data[key] = [];
      }
      this.data[key].push(item);

  };
  this.init = function (dataSet) {
    var xiangzhenFields = fields['xiangzhen'].childfield;
    for (var i in xiangzhenFields) {
      var field = xiangzhenFields[i];
      if (field.hasOwnProperty('sign')) {
        this.data[field.sign] = dataSet['xiangzhen'][0][field.field];
      }
    }
    var zhenquFields = fields['zhenquhuocunzhuang'].childfield;
    for(var i in zhenquFields){
      var field = zhenquFields[i];
      if (field.hasOwnProperty('Bsign')) {
        if(dataSet['zhenqu'].length){
          this.data[field.Bsign] = dataSet['zhenqu'][0][field.field];
        }else{
          this.data[field.Bsign] = 0;
        }
      }
    }
    var cunzhuangFields = fields['zhenquhuocunzhuang'].childfield;
    for(var i in cunzhuangFields){
      var field = cunzhuangFields[i];
      if (field.hasOwnProperty('sign')) {
        for(var item_i in dataSet['cunzhuang']){
          var item = dataSet['cunzhuang'][item_i];
          this.fieldPush(field.sign,item[field.field]);
        }
        if(dataSet['cunzhuang'].length === 0) this.data[field.sign]=[];
      }
    }
    var zhuhuField = fields['zhuhu'].childfield;
    for (var field_i in fields['zhuhu'].childfield) {
      var field = zhuhuField[field_i];
      if (field.hasOwnProperty('sign')) {
        this.data[field.sign]=[];
        for (var item_i in dataSet['zhuhu']) {
          var item = dataSet['zhuhu'][item_i];
          this.fieldPush(field.sign,item[field.field]);
        }
        if(dataSet['zhuhu'].length === 0) this.data[field.sign]=[];
      }
    }

  };

  this.init(dataSet);

  /**
   * @return {number}
   */
  this.Z4 = function () {
    var a = getLastYearData(this.get('A1'));
    var b = this.get('A31')
    return  a/b;
  };

  this.Z6 = function() {
    var k1=17.5,k2=7.5,k3=2.3,k4=8.0;
    var A25 = this.get('A25');
    var A26 = getLastYearData(this.get('A26'));
    var A27 = this.get('A27');
    var A28 = this.get('A28');
    var A29 = this.get('A29');
    return (k1*A26+k2*A27+k3*A28+k4*A29)/A25;
  };

  this.Z11 = function(){
    return this.get('A30')/this.get('A25')*100;
  };
  this.Z13 = function(){
    return getLastYearData(this.get('A26'))/this.get('A1');
  };
  this.Z14 = function() {
    return changeRate(this.get('A26'));
  };
  this.manYidiv = function(ManyiList) {
    var count = {"满意":100,"比较满意":75,"一般满意":50,'比较不满意':25,'不满意':0,'':0};
    var t = 0;
    for(var i in ManyiList){
      t += count[ManyiList[i]];
    }
    return ManyiList.reduce(function(p,c){return p+count[c];},0)/ManyiList.length;
  };
  this.Z20 = function () {
    return this.manYidiv(this.get('D12'));
  };
  this.Z21 = function() {
    return this.get('B13')/this.get('B12');
  };
  this.Z23 = function  () {
    return this.get('A25')/getLastYearData(this.get('A1'));
  };
  this.Z26 = function () {
    var B2 = this.get('B2');
    var B1 = this.get('B1');
    var C18 = this.get('C18');
    var C17 = this.get('C17');

    return (B2*B1+sum(mul(C17,C18)))/(B1+sum(C17));
  };
  this.Z30 = function () {
    var C25 = this.get('C25');
    var C17 = this.get('C17');
    return (sum(C25)*10000)/sum(C17);
  };
  this.Z32 = function () {
    var B2 = this.get('B2');
    var C18 = this.get('C18');
    return (B2)/sum(C18);
  };
  this.Z34 = function () {
    return this.get('B12')*10000/this.get('B1');
  };
  this.Z36 = function () {
    return this.get('B1')/getLastYearData(this.get('A1'));
  };
  this.Z38 = function () {
    return changeRate(this.get('A1'));
  }
  this.Z43 = function () {
    return 1000*this.get('A36')/getLastYearData(this.get('A26'));
  };
  this.Z45 = function () {
    return div(this.get('D44'),'是');
  }
  this.Z46 = function () {
    return this.get('A3')/getLastYearData(this.get('A26'));
  }
  this.Z48 = function () {
    var S1=1,S2=1,S3=1;

    var A5 = this.get('A5');
    var A6 = this.get('A6');
    var A7 = this.get('A7');
    var A8 = this.get('A8');
    var A9 = this.get('A9');
    var A10 = this.get('A10');
    var A42 = this.get('A42');

    return A5/(A5+A6+A7)*(A8/A5)/S1+A6/( A5+A42*A6+A7)*(A9/A6)/S2+A7/(A5+A6+A7)*(A10/A7)/S3 ;
  }
  this.Z54 = function () {
    return avg(this.get('D19'));
  }
  this.Z55 = function () {
    var A11 = this.get('A11');
    var A12 = this.get('A12');
    var A13 = this.get('A13');
    return (A12+A13)/(A11+A12+A13);
  }
  this.Z56 = function () {
    var A11 = this.get('A11');
    var A14 = this.get('A14');
    return A11/A14;
  }
  this.Z58 = function () {
    var A14 = this.get('A14');
    var A15 = this.get('A15');
    var A16 = this.get('A16');
    return (A15+A16)/(A14+A15+A16);
  }
  this.Z63 = function () {
    return this.get('A37');
  }
  this.Z64 = function () {
    var D20 = this.get('D20');
    var D21 = this.get('D21');

    return sum(D21)*0.5/(sum(D20)+sum(D21)*0.5);
  }
  this.Z66 = function () {
    return div(this.get('D32'),'是');
  }
  this.Z67 = function () {
    return div(this.get('D31'),'是');
  }
  this.Z68 = function () {
    var lvse = ['步行','自行车','公交车'];
    var c = 0;
    for(var i in lvse){
      c+= div(this.get('D22'),lvse[i]);
    }
    return c;
  }

  this.Z70 = function () {
    return div(this.get('D26'),'否');
  }

  this.Z72 = function () {
    return avg(this.get('D23'));
  }
  this.Z73 = function () {
    return div(this.get('D27'),'是');
  }
  this.Z74 = function () {

    var A17 = this.get('A17');
    var A25 = this.get('A25');
    var A1 = this.get('A1');

    return A17/(A25*A1);
  }

  this.Z76 = function () {
    return avg(this.get('D24'))/0.5;
  }
  this.Z77 = function () {

    var A18 = this.get('A18');
    var A17 = this.get('A27');
    return A18/A17;
  }

  this.Z79 = function () {
    return div(this.get('D28'),'是');
  }
  this.Z84 = function () {
    var A19 = this.get('A19');
    var A20 = this.get('A20');
    return A19/A20;
  };
  this.Z86 = function () {
    var A21 = this.get('A21');
    var A22 = this.get('A22');
    return A21/A22;
  };
  this.Z88 = function () {
    return div(this.get('D34'),'是');
  };
  this.Z89 = function () {
    return div(this.get('D34'),'是');
  };
  this.Z90 = function () {
    return this.get('A23')/this.get('A1');
  };

  this.Z92 = function () {
    return this.get('B5')/this.get('B12')
  };

  this.Z94 = function () {
    return this.get('A24');
  };
  this.Z99 = function () {

    return 'REMAIN';
  };
  this.Z102 = function () {
    var A39 = this.get('A39');
    var A40 = this.get('A40');
    var A41 = this.get('A41');
    return 10000*(A39-A40)/A41;
  };
  this.Z105 = function () {
    var A41 = this.get('A41');
    var A42 = this.get('A42');
    return A41*A42*A42;
  };
  this.Z107 = function () {
        var A32 = this.get('A32');
    var A25 = this.get('A25');
    return A32/A25;
  };
  this.Z109 = function () {
    return this.get('A43');
  };
  this.Z110 = function () {
    return this.get('A44');
  };
  this.Z111 = function () {
         var A27 = this.get('A27');
    var A25 = this.get('A25');  
     return A27/A25;
  };

  this.Z113 = function () {
         var A45 = this.get('A45');
    var A46 = this.get('A46');
       return A45/A46;
  };
  return this;
};